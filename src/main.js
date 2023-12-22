// Imports
// Dat gui does not come with three.js
// JsonData contains the world coordinates for curves
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import * as dat from "dat.gui";
import jsonData from "./jsonData.js";

/*
=========================================
1: Model loading
=========================================
*/

// Setup the scene
const scene = new THREE.Scene();
// Assign global variable name for motor model
let motorModel;
// Load the model
// Proceed with code when model is loaded
async function loadModelAsync() {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      "motor.glb",
      (gltf) => {
        motorModel = gltf.scene;
        scene.add(gltf.scene);
        resolve(motorModel);
      },
      (xhr) => {
        //console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.error("An error happened", error);
        reject(error);
      }
    );
  });
}
// Proceed with code when model is loaded
async function main() {
  try {
    await loadModelAsync();
    //console.log("Model loaded successfully:", motorModel);

    /*
=========================================
2: General setup
=========================================
*/
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(-0.7, 0.7, 0.7); // Set the initial position of the camera
    camera.lookAt(new THREE.Vector3(0, 0, 0)); // Make the camera look at the center of the scene

    // Renderer setup on DOM
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Window resizing fix
    // Resizing not required, useful for raycasting
    window.addEventListener("resize", () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    });

    // Camera controls
    // Create OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.1;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;
    //controls.minDistance = 0.3;
    controls.maxDistance = 3;

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Color, intensity
    scene.add(ambientLight);
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffeedd, 5);
    directionalLight.position.set(0, 3, 3);
    scene.add(directionalLight);
    // Directional light helper
    const directionalLightHelper = new THREE.DirectionalLightHelper(
      directionalLight,
      1
    );
    //scene.add(directionalLightHelper);

    /*
=========================================
3: Magnetic field setup
=========================================
*/

    // Sprites represent the magnetic field polarities
    // Texture loader
    const textureLoader = new THREE.TextureLoader();
    const textureSouth = textureLoader.load("south.png");
    const textureNorth = textureLoader.load("north.png");

    // Material setup
    // Use present controls to make sprites transparent through models
    const createMaterial = (map, color) =>
      new THREE.SpriteMaterial({
        map,
        depthWrite: false,
        depthTest: false,
        color: new THREE.Color(color),
        transparent: true,
        opacity: 1,
        sizeAttenuation: true,
        blending: THREE.NormalBlending,
      });

    // Resize sprites
    const spriteScale = 0.1;

    // Function to create sprites
    const createSprite = (material, position) => {
      const sprite = new THREE.Sprite(material.clone());
      sprite.position.set(...position);
      return sprite;
    };

    // Stator winding magnetic field polarity
    // Each sprite must be assigned its own texture and color
    // Create an instance of each sprite with its own material properties
    // If that is not done, the sprites do not work correctly
    const sprites = [
      createSprite(createMaterial(textureSouth, "#e74c3c"), [0, 0.22, 0.3]),
      createSprite(createMaterial(textureNorth, "#3498db"), [0, -0.22, 0.3]),

      createSprite(createMaterial(textureSouth, "#e74c3c"), [0.2, 0.12, 0.3]),
      createSprite(createMaterial(textureNorth, "#3498db"), [-0.2, -0.12, 0.3]),

      createSprite(createMaterial(textureSouth, "#e74c3c"), [0.2, -0.12, 0.3]),
      createSprite(createMaterial(textureNorth, "#3498db"), [-0.2, 0.12, 0.3]),
    ];

    sprites.forEach((sprite) => {
      scene.add(sprite);
      sprite.userData.initialTexture = sprite.material.map;
      sprite.userData.initialColor = new THREE.Color(
        sprite.material.map === textureSouth ? "#e74c3c" : "#3498db"
      );
    });

    // Have the sprites alternate their color and texture in animate
    // Sprites will alternate their properties on sineValue change
    function animateAlternatingSprites(sprite, initialScale, phaseShift, time) {
      const currentTime = (time + phaseShift) % 1;

      const sineValue = Math.sin(currentTime * Math.PI * 2);

      let scale = Math.abs(sineValue) * initialScale;
      sprite.scale.set(scale, scale, 1);

      const threshold = 0;

      if (sineValue < threshold && sprite.userData.textureChanged !== true) {
        sprite.material.map = sprite.userData.initialTexture;
        sprite.material.color = sprite.userData.initialColor;
        sprite.userData.textureChanged = true;
      } else if (
        sineValue > threshold &&
        sprite.userData.textureChanged !== false
      ) {
        // Change to the other texture and color
        sprite.material.map =
          sprite.userData.initialTexture === textureSouth
            ? textureNorth
            : textureSouth;
        sprite.material.color =
          sprite.material.map === textureSouth
            ? new THREE.Color("#e74c3c") // South color (red)
            : new THREE.Color("#3498db"); // North color (blue)
        sprite.userData.textureChanged = false;
      }
    }

    // Stator winding magnetic field polarity sum
    // Create two independent sprites
    const independentSprite1 = createSprite(
      createMaterial(textureNorth, "#3498db"),
      [0, 0.22, 0.3]
    );
    const independentSprite2 = createSprite(
      createMaterial(textureSouth, "#e74c3c"),
      [0, -0.22, 0.3]
    );

    // Scale down the sprites
    independentSprite1.scale.set(spriteScale, spriteScale, 1);
    independentSprite2.scale.set(spriteScale, spriteScale, 1);

    // Add the sprites to the scene
    scene.add(independentSprite1);
    scene.add(independentSprite2);

    // Offset for the animation
    const initialAngle1 = Math.PI / 2; // 90 degrees
    const initialAngle2 = -Math.PI / 2; // -90 degrees

    // Magnetic field sum rotation animation
    const animateIndependentSprites = function (time) {
      const rotationAngle = -time * Math.PI * 2; // Full rotation as time goes from 0 to 1

      independentSprite1.position.x =
        0.22 * Math.cos(rotationAngle + initialAngle1);
      independentSprite1.position.y =
        0.22 * Math.sin(rotationAngle + initialAngle1);

      independentSprite2.position.x =
        0.22 * Math.cos(rotationAngle + initialAngle2);
      independentSprite2.position.y =
        0.22 * Math.sin(rotationAngle + initialAngle2);
    };

    // Hide them by default for dat gui
    // Set visibility to false initially
    sprites.forEach((sprite) => {
      sprite.visible = false;
    });

    independentSprite1.visible = false;
    independentSprite2.visible = false;

    /*
=========================================
3: Electrical current setup
=========================================
*/

    // Create curves from the JSON data
    // Data taken from the import
    function createCurvesFromJson(data, curvePath) {
      for (let i = 0; i < data.length - 1; i++) {
        const start = new THREE.Vector3(data[i].x, data[i].y, data[i].z);
        const end = new THREE.Vector3(
          data[i + 1].x,
          data[i + 1].y,
          data[i + 1].z
        );
        const lineCurve = new THREE.LineCurve3(start, end);
        curvePath.add(lineCurve);
      }
    }

    // Create curve
    const pathL1 = new THREE.CurvePath();
    createCurvesFromJson(jsonData["pathL1"], pathL1);

    const pathL2 = new THREE.CurvePath();
    createCurvesFromJson(jsonData["pathL2"], pathL2);

    const pathL3 = new THREE.CurvePath();
    createCurvesFromJson(jsonData["pathL3"], pathL3);

    // Adjust the particle density on the curve to be uniform
    // Particle length
    const lengthpathL1 = pathL1.getLength();
    const lengthpathL2 = pathL2.getLength();
    const lengthpathL3 = pathL3.getLength();

    const desiredDensity = 0.1; // You can adjust this value (e.g., 0.1 means 10% of the curve length per segment)
    const densityFactor = 20; // You can adjust this value based on your needs
    // Calculate adjusted density
    const adjustedDensity = desiredDensity * densityFactor;

    const segmentPathL1 = Math.round(lengthpathL1 / adjustedDensity);
    const segmentPathL2 = Math.round(lengthpathL2 / adjustedDensity);
    const segmentPathL3 = Math.round(lengthpathL3 / adjustedDensity);

    // Common parameters shared by all instances
    const commonCurrentParam = {
      scale: 0.005,
      color: "#ff0000",
      depthTest: false,
      depthWrite: false,
      transparency: true,
      opacity: 0.7,
      alphaTest: 1, // Adjust the alpha test threshold as needed
    };

    // Phase 1,2,3 parameters
    let pathL1param = {
      ...commonCurrentParam,
      segmentNumber: segmentPathL1,
      particlesPerSegment: 100,
      hideParticles: false,
      phaseL1: (Math.PI * 4) / 3,
    };

    let pathL2param = {
      ...commonCurrentParam,
      segmentNumber: segmentPathL2,
      particlesPerSegment: 100,
      hideParticles: false,
      phaseL2: (Math.PI * 2) / 3,
    };

    let pathL3param = {
      ...commonCurrentParam,
      segmentNumber: segmentPathL3,
      particlesPerSegment: 100,
      hideParticles: false,
      phaseL3: 0,
    };

    // Current particles via sprites
    const circleTexture = textureLoader.load("circle.png");

    // Particle material
    const spriteMaterial = new THREE.SpriteMaterial({
      map: circleTexture,
      depthWrite: false,
      depthTest: false,
      color: new THREE.Color(commonCurrentParam.color),
      transparent: commonCurrentParam.transparency,
      opacity: commonCurrentParam.opacity,
      sizeAttenuation: true,
      blending: THREE.NormalBlending, // Adjust the blending mode
    });

    // Array to hold particles
    const pathL1particles = [];
    const pathL2particles = [];
    const pathL3particles = [];

    // Update particle materials
    // Used in dat gui aswell
    function updateParticleMaterial() {
      spriteMaterial.color.set(commonCurrentParam.color);
      spriteMaterial.opacity = commonCurrentParam.opacity;
      spriteMaterial.transparent = commonCurrentParam.transparency;
      //spriteMaterial.alphaTest = commonCurrentParam.alphaTest;
      // When changing alphaTest, edit the opacity values in dat gui

      // Toggle visibility based on the hideParticles parameter for each instance
      pathL1particles.forEach((particle) => {
        particle.material.copy(spriteMaterial);
        particle.visible = !pathL1param.hideParticles;
      });
      pathL2particles.forEach((particle) => {
        particle.material.copy(spriteMaterial);
        particle.visible = !pathL2param.hideParticles;
      });
      pathL3particles.forEach((particle) => {
        particle.material.copy(spriteMaterial);
        particle.visible = !pathL3param.hideParticles;
      });
    }

    // Create the particles on the curves
    function createParticles(curveParticles, curve, param) {
      curveParticles.forEach((particle) => scene.remove(particle));
      curveParticles.length = 0;

      const totalParticles = param.segmentNumber * param.particlesPerSegment;

      for (let i = 0; i < totalParticles; i++) {
        const sprite = new THREE.Sprite(spriteMaterial);
        // Make the particles more see-through with renderOrder
        sprite.renderOrder = 1;

        let scale;

        // If future addition contains schematics, scale down the particles with this
        if (param.hasOwnProperty("schemScale")) {
          // Use schematics scale for curves that have schemScale property
          scale = commonCurrentParam.scale * param.schemScale;
        } else {
          // Use common scale for curves without schemScale property
          scale = commonCurrentParam.scale;
        }

        sprite.scale.set(scale, scale, scale);

        curveParticles.push(sprite);
        scene.add(sprite);

        const t = i / totalParticles;
        const pointOnPath = curve.getPointAt(t);

        // Fix particles on curves
        if (pointOnPath) {
          sprite.position.copy(pointOnPath);
        } else {
          console.error("pointOnPath is null for sprite at index", i);
        }
      }
    }

    const curves = [
      { particles: pathL1particles, curve: pathL1, param: pathL1param },
      { particles: pathL2particles, curve: pathL2, param: pathL2param },
      { particles: pathL3particles, curve: pathL3, param: pathL3param },
    ];

    curves.forEach(({ particles, curve, param }) => {
      createParticles(particles, curve, param);
    });

    const phaseL1 = pathL1param.phaseL1;
    const phaseL2 = pathL2param.phaseL2;
    const phaseL3 = pathL3param.phaseL3;
    let sineAmplitude = 0.005; // Adjust as needed

    // Make particles move in a sine wave
    // Animation in animate
    const animateParticles = (
      curveParticles,
      curve,
      param,
      time,
      phase,
      sineAmplitude
    ) => {
      curveParticles.forEach((particle, i) => {
        const baseT = i / (param.segmentNumber * param.particlesPerSegment);

        // Use a sine wave to modify the t value directly
        const sineWave = Math.sin((baseT + time + phase) * 2 * Math.PI);
        let particleT = (baseT + sineWave * sineAmplitude) % 1;

        // Ensure particleT stays within the range [0, 1]
        particleT = particleT < 0 ? 1 + particleT : particleT;

        // Point on path is a value from 0 to 1
        // The 0 value is path start, 1 is path end
        const pointOnPath = curve.getPointAt(particleT);

        // Check if pointOnPath is not null before updating the particle's position
        if (pointOnPath) {
          // Update the particle's position based on the modified t value
          particle.position.copy(pointOnPath);
        } else {
          console.error("pointOnPath is null for particle at index", i);
        }
      });
    };

    /*
=========================================
5: Model child visibility
=========================================
*/

    // Assign variables to model children
    // Create an object to store the GLTF model children
    const modelChildren = {};
    // Iterate through the children and assign them to the object based on their names
    motorModel.children.forEach((child) => {
      modelChildren[child.name] = child;
    });

    // Interactable children of motorModel
    // Children for rotating
    const rotorShaft = modelChildren["rotorShaft"];
    const rotorScage = modelChildren["rotorScage"]; // Opacity aswell
    const bearingBackInner = modelChildren["bearingBackInner"];
    const bearingFrontInner = modelChildren["bearingFrontInner"];
    const bearingBallsFrontParent = modelChildren["bearingBallsFrontParent"];
    const bearingBallsBackParent = modelChildren["bearingBallsBackParent"];
    const fan = modelChildren["fan"]; // Opacity aswell

    const bearingBallsFrontNames = [
      "bearingBallsFront",
      "bearingBallsFront001",
      "bearingBallsFront002",
      "bearingBallsFront003",
      "bearingBallsFront004",
      "bearingBallsFront005",
      "bearingBallsFront006",
      "bearingBallsFront007",
      "bearingBallsFront008",
      "bearingBallsFront009",
      "bearingBallsFront010",
      "bearingBallsFront011",
    ];

    // Create an object to store the bearing ball references for the front
    const bearingBallsFront = {};

    // Loop through the names and create references
    for (const name of bearingBallsFrontNames) {
      bearingBallsFront[name] = modelChildren[name];
      if (bearingBallsFront[name]) {
        bearingBallsFront[name].parent = bearingBallsFrontParent; // Parent to middle model
      }
    }

    const bearingBallsBackNames = [
      "bearingBallsBack",
      "bearingBallsBack001",
      "bearingBallsBack002",
      "bearingBallsBack003",
      "bearingBallsBack004",
      "bearingBallsBack005",
      "bearingBallsBack006",
      "bearingBallsBack007",
      "bearingBallsBack008",
      "bearingBallsBack009",
      "bearingBallsBack010",
      "bearingBallsBack011",
    ];

    // Create an object to store the bearing ball references for the back
    const bearingBallsBack = {};

    // Loop through the names and create references
    for (const name of bearingBallsBackNames) {
      bearingBallsBack[name] = modelChildren[name];
      if (bearingBallsBack[name]) {
        bearingBallsBack[name].parent = bearingBallsBackParent; // Parent to middle model
      }
    }

    // Rotational functions
    // Animate bearing rotations
    function rotateComponent(component, rotationAngle) {
      if (component) {
        component.rotation.set(0, 0, rotationAngle);
      }
    }

    function rotateBearingBalls(bearingBalls, rotationAngle) {
      for (const name in bearingBalls) {
        const bearingBall = bearingBalls[name];
        if (bearingBall) {
          bearingBall.rotation.set(0, 0, rotationAngle);
        }
      }
    }

    // Children for hiding
    // Cover for the connection box
    const housingCover = modelChildren["housingCover"];
    if (housingCover) {
      housingCover.visible = false; // Hide housingCover
    }

    // Children for opacity/hiding (fan and rotor squirrelcage already defined)
    const corpusMid = modelChildren["corpusMid"];
    const corpusFront = modelChildren["corpusFront"];
    const corpusBack = modelChildren["corpusBack"];
    const cablesInner = modelChildren["cablesInner"];
    const stator = modelChildren["stator"];
    const bearingFront = modelChildren["bearingFront"];
    const bearingBack = modelChildren["bearingBack"];

    // Starting default opacity values for dat gui
    // Adjust whatever you think should be using opacity
    // Define default opacity values
    const defaultOpacities = {
      //corpusMid: 0.5,
      //corpusFront: 0.01,
      //corpusBack: 0.5,
      stator: 1,
      rotorScage: 1,
      //rotorShaft: 1,
      cablesInner: 1,
      //fan: 1,
    };

    // Default visibility values for dat gui
    const defaultVisibility = {
      corpusFront: false, // Hidden by default
      corpusMid: true,
      corpusBack: true,
      //cablesInner: true,
      //rotorScage: true,
      rotorShaft: true,
      fan: true,
    };

    // Model names in dat gui
    const displayNames = {
      corpusMid: "Middle",
      corpusFront: "Front",
      corpusBack: "Back",
      cablesInner: "Conduct",
      rotorScage: "Rotor",
      fan: "Fan",
      stator: "Stator",
      rotorShaft: "Shaft",
    };

    // Set default opacity values
    for (const modelName in defaultOpacities) {
      const model = modelChildren[modelName];
      if (model) {
        if (model.children.length > 0) {
          // Model with children
          model.userData.originalOpacity = defaultOpacities[modelName];
          model.traverse((child) => {
            if (child.isMesh) {
              child.material.transparent = true;
              child.material.opacity = defaultOpacities[modelName];
            }
          });
        } else if (model.isMesh) {
          // Model without children
          model.material.transparent = true;
          model.material.opacity = defaultOpacities[modelName];
        }
      }
    }

    /*
=========================================
5: Dat gui setup
=========================================
*/

    // Create Dat.GUI
    const gui = new dat.GUI();

    // General folder
    const generalFolder = gui.addFolder("General");

    let t = 0;

    const config = {
      speed: 0.002, // Initial speed simulation speed
      estimatedFrequency: 0.3, // Starting frequency estimation
      showSingle: false, // Magnetic field
      showCumulative: false, // Magnetic field
      amperage: 100, // Particle amount
    };

    // Add configurable parameters
    generalFolder.add(config, "speed", 0, 0.05).name("Speed");

    // Frequency counter, by timing how long one completion in animation takes
    const estimatedFrequencyControl = generalFolder
      .add(config, "estimatedFrequency")
      .name("Frequency Estimation")
      .listen()
      .onChange(() => {
        estimatedFrequencyControl.domElement.innerText = ` ${config.estimatedFrequency.toFixed(
          2
        )} Hz`;
      });

    // Magnetic field
    // Sprite toggle
    generalFolder
      .add(config, "showSingle")
      .name("Mag Field")
      .onChange((value) => {
        sprites.forEach((sprite) => {
          sprite.visible = value;
        });
      });

    generalFolder
      .add(config, "showCumulative")
      .name("Mag Field Sum")
      .onChange((value) => {
        independentSprite1.visible = value;
        independentSprite2.visible = value;
      });

    // Define default scale value
    const defaultScale = {
      scale: 1, // Initial scale
    };

    const minScale = 0.4; // Minimum scale value

    // Set default scale value and add controller to dat gui
    if (rotorScage) {
      const { scale } = defaultScale;

      const scaleController = generalFolder
        .add(defaultScale, "scale", minScale, 1)
        .name("Rotor Scale")
        .onChange((value) => {
          rotorScage.scale.set(value, value, 1);
        });

      // Set initial scale
      // Scale in x and y only
      rotorScage.scale.set(scale, scale, 1);
    }

    // Current parameters
    // Particle color
    const commonColorController = generalFolder
      .addColor(commonCurrentParam, "color") // Add color control
      .name("Particle Color");

    // Callback function for common color update
    commonColorController.onChange(() => {
      // Apply the new color to your spriteMaterial
      spriteMaterial.color.set(commonCurrentParam.color);
    });

    // Amperage, density, amount of particles
    const amperageSlider = generalFolder
      .add(config, "amperage", 1, 200)
      .name("Density");
    // Function to update particles when Amperage changes
    function updateParticlesAmperage() {
      pathL1param.particlesPerSegment = config.amperage;
      pathL2param.particlesPerSegment = config.amperage;
      pathL3param.particlesPerSegment = config.amperage;

      // Recreate particles for each path
      createParticles(pathL1particles, pathL1, pathL1param);
      createParticles(pathL2particles, pathL2, pathL2param);
      createParticles(pathL3particles, pathL3, pathL3param);
    }
    // Listen for changes in the Amperage slider and update particles accordingly
    amperageSlider.onChange(updateParticlesAmperage);
    // Initialize particles with default Amperage value
    updateParticlesAmperage();

    // Hide particles
    const L1VisibilityController = generalFolder
      .add(pathL1param, "hideParticles")
      .name("Hide L1");
    const L2VisibilityController = generalFolder
      .add(pathL2param, "hideParticles")
      .name("Hide L2");
    const L3VisibilityController = generalFolder
      .add(pathL3param, "hideParticles")
      .name("Hide L3");

    L1VisibilityController.onChange(() => {
      updateParticleMaterial(pathL1particles, pathL1param.hideParticles);
    });

    L2VisibilityController.onChange(() => {
      updateParticleMaterial(pathL2particles, pathL2param.hideParticles);
    });

    L3VisibilityController.onChange(() => {
      updateParticleMaterial(pathL3particles, pathL3param.hideParticles);
    });

    // Sine amplitude
    // How far the particle will travel sinussoidally
    const sineAmplitudeController = generalFolder
      .add({ sineAmplitude: sineAmplitude }, "sineAmplitude", 0.001, 0.01)
      .name("Amplitude")
      .onChange(updateSineAmplitude);

    function updateSineAmplitude(value) {
      sineAmplitude = value;
    }

    // Particle scale
    const commonScaleController = generalFolder
      .add(commonCurrentParam, "scale", 0.002, 0.015)
      .name("Particle Scale");
    // onChange lagging
    commonScaleController.onFinishChange(() => {
      // Update particles for each array when the scale is changed
      createParticles(pathL1particles, pathL1, pathL1param);
      createParticles(pathL2particles, pathL2, pathL3param);
      createParticles(pathL3particles, pathL3, pathL3param);
    });

    // Opacity controls
    const commonOpacityController = generalFolder
      .add(commonCurrentParam, "opacity", 0, 1)
      .name("Particle Opacity");

    commonOpacityController.onChange(updateParticleMaterial);

    // This one lets you adjust the particle transparency
    // It is a bit buggy when you toggle transparency
    // The alpha channel doesnt apply correctly from time
    // The particle material also goes white for some reason
    // This disables opacity controls when transparency is off

    /*
const commonTransparencyController = generalFolder
  .add(commonCurrentParam, "transparency")
  .name("Transparency");
commonTransparencyController.onChange(updateParticleMaterial);
*/

    /*
// Opacity and transparency
let lastCommonOpacityValue = commonCurrentParam.opacity;
// Opacity and transparency
const commonOpacityController = generalFolder
  .add(commonCurrentParam, "opacity", 0.4, 0.6)
  .name("Particle Opacity")
  .onChange(updateParticleMaterial);

const commonTransparencyController = generalFolder
  .add(commonCurrentParam, "transparency")
  .name("Transparency")
  .onChange(updateTransparency);

function updateTransparency(value) {
  if (!value) {
    commonOpacityController.domElement.style.pointerEvents = "none";
    commonOpacityController.domElement.style.filter = "grayscale(100%)";
    lastCommonOpacityValue = commonCurrentParam.opacity;
    commonCurrentParam.opacity = 1;
    commonOpacityController.setValue(1);
    updateParticleMaterial();
  } else {
    commonOpacityController.domElement.style.pointerEvents = "auto";
    commonOpacityController.domElement.style.filter = ""; // Reset filter
    if (lastCommonOpacityValue !== 1) {
      commonCurrentParam.opacity = lastCommonOpacityValue;
      commonOpacityController.setValue(lastCommonOpacityValue);
      updateParticleMaterial();
    }
  }
};

*/

    // Model visibility, adjust paramters in model child section
    // Visibility folder
    const visibilityFolder = gui.addFolder("Visibility");

    // Add sliders for opacity controls
    for (const modelName in defaultOpacities) {
      const model = modelChildren[modelName];
      const defaultOpacity = defaultOpacities[modelName];
      const displayName = displayNames[modelName] || modelName; // Use custom name if available, otherwise use the model name

      if (model) {
        if (model.children.length > 0) {
          // Model with children
          const controller = visibilityFolder
            .add({ opacity: defaultOpacity }, "opacity", 0, 1)
            .name(`${displayName} Opacity`)
            .onChange((value) => {
              model.traverse((child) => {
                if (child.isMesh) {
                  child.material.opacity = value;
                }
              });
            });
        } else if (model.isMesh) {
          // Model without children
          const controller = visibilityFolder
            .add(model.material, "opacity", 0, 1)
            .name(`${displayName} Opacity`);
        }
      }
    }

    // Set default visibility values and add controllers to dat gui
    for (const modelName in defaultVisibility) {
      const model = modelChildren[modelName];
      if (model) {
        const displayName = displayNames[modelName] || modelName; // Use custom display name if available
        const controller = visibilityFolder
          .add(defaultVisibility, modelName)
          .name(`${displayName} Visibility`)
          .onChange((value) => {
            model.visible = value;
          });
        model.visible = defaultVisibility[modelName];
      }
    }

    // Hide bearings
    // Note: this will hide everything containing the word bearing
    // Define a boolean variable to track visibility state
    let bearingModelsVisible = true;

    // Function to toggle bearing models visibility
    function toggleBearingModels() {
      bearingModelsVisible = !bearingModelsVisible;

      // Iterate through modelChildren and toggle visibility for models with the word "bearing"
      for (const key in modelChildren) {
        if (key.includes("bearing")) {
          const bearingModel = modelChildren[key];
          if (bearingModel) {
            bearingModel.visible = bearingModelsVisible;
          }
        }
      }
    }

    // Add a boolean control to the visibility folder with a custom name
    const bearingVisibilityControl = visibilityFolder.add(
      { "Bearing Visibility": bearingModelsVisible },
      "Bearing Visibility"
    );
    bearingVisibilityControl.onChange(toggleBearingModels); // Call toggleBearingModels when the checkbox changes

    /*
=========================================
6: Animation
=========================================
*/

    // Constants for frequency counting
    let numberOfFrames = 0;
    let startTime = null; // Initialize startTime variable

    // Animate function, never ending
    const animate = function () {
      // Start frequency count time
      const timestamp = performance.now();

      // Clock that counts from 0 to 1
      t = (t + config.speed) % 1;

      // Rotate bearings, shaft and bearingballs
      // The ratio of inner ring and bearing ball diameter is more or less 3.
      const bearingRatio = 3;
      const rotationAngle = 2 * Math.PI * t;
      const rotationAngle2 = (2 * Math.PI * t) / bearingRatio;

      // Apply the rotation to components
      rotateComponent(rotorShaft, -rotationAngle);
      rotateComponent(rotorScage, -rotationAngle);
      rotateComponent(bearingFrontInner, -rotationAngle);
      rotateComponent(bearingBackInner, -rotationAngle);
      rotateComponent(bearingBallsFrontParent, -rotationAngle2);
      rotateComponent(bearingBallsBackParent, -rotationAngle2);
      rotateBearingBalls(bearingBallsFront, rotationAngle);
      rotateBearingBalls(bearingBallsBack, rotationAngle);
      rotateComponent(fan, -rotationAngle);

      // Magnetic field sprites
      // Enable/disabled via dat gui
      if (config.showSingle) {
        animateAlternatingSprites(
          sprites[0],
          spriteScale,
          pathL1param.phaseL1,
          t
        );
        animateAlternatingSprites(
          sprites[1],
          spriteScale,
          pathL1param.phaseL1,
          t
        );
        animateAlternatingSprites(
          sprites[2],
          spriteScale,
          pathL2param.phaseL2,
          t
        );
        animateAlternatingSprites(
          sprites[3],
          spriteScale,
          pathL2param.phaseL2,
          t
        );
        animateAlternatingSprites(
          sprites[4],
          spriteScale,
          pathL3param.phaseL3,
          t
        );
        animateAlternatingSprites(
          sprites[5],
          spriteScale,
          pathL3param.phaseL3,
          t
        );
      }

      if (config.showCumulative) {
        animateIndependentSprites(t);
      }

      // Animate current particles
      animateParticles(
        pathL1particles,
        pathL1,
        pathL1param,
        t,
        phaseL1,
        sineAmplitude
      );

      animateParticles(
        pathL2particles,
        pathL2,
        pathL2param,
        t,
        phaseL2,
        sineAmplitude
      );

      animateParticles(
        pathL3particles,
        pathL3,
        pathL3param,
        t,
        phaseL3,
        sineAmplitude
      );

      // Camera controls damping
      controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true

      // Render scene and camera
      renderer.render(scene, camera);

      // End frequency count
      const frameDuration = performance.now() - timestamp;
      // Frequency counter
      if (numberOfFrames >= 1 / config.speed) {
        // Calculate the period (time for one cycle)
        const period = frameDuration * numberOfFrames;
        // Calculate the frequency
        const frequency = 1 / (period / 1000); // Convert period to seconds
        estimatedFrequencyControl.setValue(frequency);

        // Reset the number of frames for the next cycle
        numberOfFrames = 0;
        startTime = timestamp;
      } else {
        // Increment the number of frames
        numberOfFrames++;
      }

      // Use request animation frame for performance
      requestAnimationFrame(animate);
    };

    // Call animate
    animate();

    // Continue with additional logic here
    // ...
  } catch (error) {
    console.error("Error loading the model:", error);
  }
}

// Call the main function to start the process
main();
