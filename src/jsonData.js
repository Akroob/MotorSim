const jsonData = {
  pathL1: [
    { x: 0.000019609928131, y: 0.436879456043243, z: 0.398970544338226 },
    { x: 0.000019609928131, y: 0.432999968528748, z: 0.398957282304764 },
    { x: 0.000019609928131, y: 0.433015882968903, z: 0.38465404510498 },
    { x: 0.000000059604645, y: 0.429999709129333, z: 0.381204545497894 },
    { x: 0.0, y: 0.429662227630615, z: 0.360958933830261 },
    { x: 0.0, y: 0.426025927066803, z: 0.352045208215714 },
    { x: 0.0, y: 0.4197718501091, z: 0.349999964237213 },
    { x: 0.0, y: 0.371135950088501, z: 0.34969836473465 },
    { x: 0.0, y: 0.320855379104614, z: 0.347619384527206 },
    { x: 0.0, y: 0.306451082229614, z: 0.346342861652374 },
    { x: -0.002405822277069, y: 0.290381193161011, z: 0.336802780628204 },
    { x: -0.008588910102844, y: 0.27673476934433, z: 0.319722712039948 },
    { x: -0.016381800174713, y: 0.262427568435669, z: 0.311604917049408 },
    { x: -0.025742650032043, y: 0.249332010746002, z: 0.304349958896637 },
    { x: -0.04142165184021, y: 0.242034256458282, z: 0.296806573867798 },
    { x: -0.077926874160767, y: 0.238271355628967, z: 0.290005177259445 },
    { x: -0.137492895126343, y: 0.228680610656738, z: 0.28999999165535 },
    { x: -0.198174238204956, y: 0.179940342903137, z: 0.289999932050705 },
    { x: -0.252632737159729, y: 0.084751546382904, z: 0.28999999165535 },
    { x: -0.26697838306427, y: 0.001201450824738, z: 0.289999902248383 },
    { x: -0.251174986362457, y: -0.08555668592453, z: 0.289999961853027 },
    { x: -0.200810611248016, y: -0.174847304821014, z: 0.290000021457672 },
    { x: -0.137685596942902, y: -0.23522812128067, z: 0.28999999165535 },
    { x: -0.086282551288605, y: -0.257149964570999, z: 0.289491593837738 },
    { x: -0.054937779903412, y: -0.26200008392334, z: 0.276742070913315 },
    { x: -0.046097695827484, y: -0.262000232934952, z: 0.253588736057281 },
    { x: -0.046000063419342, y: -0.26200008392334, z: -0.115964204072952 },
    { x: -0.035780429840088, y: -0.261999875307083, z: -0.126545161008835 },
    { x: 0.03419691324234, y: -0.262000143527985, z: -0.126302361488342 },
    { x: 0.045974016189575, y: -0.26199996471405, z: -0.114913433790207 },
    { x: 0.045999944210052, y: -0.26200008392334, z: 0.242262899875641 },
    { x: 0.036176443099976, y: -0.261999934911728, z: 0.25222784280777 },
    { x: -0.006186425685883, y: -0.263002395629883, z: 0.254125624895096 },
    { x: -0.038824617862701, y: -0.274143218994141, z: 0.252395033836365 },
    { x: -0.046000182628632, y: -0.276999920606613, z: 0.243071377277374 },
    { x: -0.045999825000763, y: -0.277000039815903, z: -0.115892469882965 },
    { x: -0.035779118537903, y: -0.276999831199646, z: -0.126537948846817 },
    { x: 0.034809231758118, y: -0.277000099420547, z: -0.126176625490189 },
    { x: 0.045999884605408, y: -0.276999950408936, z: -0.116200476884842 },
    { x: 0.046000123023987, y: -0.277000039815903, z: 0.242118656635284 },
    { x: 0.035582900047302, y: -0.276999920606613, z: 0.252309143543243 },
    { x: -0.002887785434723, y: -0.277295053005219, z: 0.254042327404022 },
    { x: -0.038449287414551, y: -0.288998484611511, z: 0.252473115921021 },
    { x: -0.046000182628632, y: -0.291999936103821, z: 0.243193566799164 },
    { x: -0.045999825000763, y: -0.292000025510788, z: -0.115696519613266 },
    { x: -0.035788655281067, y: -0.291999816894531, z: -0.126528203487396 },
    { x: 0.033412337303162, y: -0.29200005531311, z: -0.126454710960388 },
    { x: 0.046000301837921, y: -0.291999936103821, z: -0.115787625312805 },
    { x: 0.04608166217804, y: -0.29200005531311, z: 0.240478664636612 },
    { x: 0.046722769737244, y: -0.291999995708466, z: 0.257362306118011 },
    { x: 0.050553619861603, y: -0.287546634674072, z: 0.277084857225418 },
    { x: 0.058729827404022, y: -0.268218398094177, z: 0.287208199501038 },
    { x: 0.088366687297821, y: -0.251331150531769, z: 0.29003968834877 },
    { x: 0.139646828174591, y: -0.233956158161163, z: 0.290000170469284 },
    { x: 0.193926751613617, y: -0.181349188089371, z: 0.289999902248383 },
    { x: 0.249570667743683, y: -0.088828593492508, z: 0.290000379085541 },
    { x: 0.266979455947876, y: -0.00107479095459, z: 0.289999961853027 },
    { x: 0.25346627831459, y: 0.077818632125854, z: 0.289998203516006 },
    { x: 0.198134899139404, y: 0.176881670951843, z: 0.28999799489975 },
    { x: 0.136371314525604, y: 0.233239769935608, z: 0.289998203516006 },
    { x: 0.103098809719086, y: 0.245691895484924, z: 0.290136218070984 },
    { x: 0.057123720645905, y: 0.252495229244232, z: 0.285475879907608 },
    { x: -0.017411947250366, y: 0.259005010128021, z: 0.271126836538315 },
    { x: -0.04099577665329, y: 0.259999990463257, z: 0.257937252521515 },
    { x: -0.046000063419342, y: 0.260000050067902, z: 0.242228806018829 },
    { x: -0.045999884605408, y: 0.259999871253967, z: -0.112192809581757 },
    { x: -0.035786211490631, y: 0.260000169277191, z: -0.126545965671539 },
    { x: 0.034066617488861, y: 0.259999871253967, z: -0.126321494579315 },
    { x: 0.046000063419342, y: 0.260000050067902, z: -0.115313738584518 },
    { x: 0.045999884605408, y: 0.259999930858612, z: 0.241718858480453 },
    { x: 0.034984529018402, y: 0.260000050067902, z: 0.252411752939224 },
    { x: -0.007490336894989, y: 0.261329114437103, z: 0.254158586263657 },
    { x: -0.035777688026428, y: 0.270957887172699, z: 0.253082364797592 },
    { x: -0.046000063419342, y: 0.275000035762787, z: 0.242097198963165 },
    { x: -0.046000003814697, y: 0.274999916553497, z: -0.112244516611099 },
    { x: -0.035787522792816, y: 0.275000154972076, z: -0.126544147729874 },
    { x: 0.034782230854034, y: 0.274999916553497, z: -0.126173764467239 },
    { x: 0.046000063419342, y: 0.275000035762787, z: -0.115429639816284 },
    { x: 0.045999944210052, y: 0.274999916553497, z: 0.24208790063858 },
    { x: 0.034802198410034, y: 0.275000035762787, z: 0.252440601587296 },
    { x: -0.005091547966003, y: 0.2757688164711, z: 0.254097640514374 },
    { x: -0.035048067569733, y: 0.285683274269104, z: 0.253166198730469 },
    { x: -0.046000003814697, y: 0.290000081062317, z: 0.243739664554596 },
    { x: -0.046000063419342, y: 0.289999961853027, z: -0.112185746431351 },
    { x: -0.046000003814697, y: 0.290000021457672, z: -0.119999974966049 },
    { x: -0.035176694393158, y: 0.290000200271606, z: -0.126638859510422 },
    { x: 0.034906446933746, y: 0.290000021457672, z: -0.126148849725723 },
    { x: 0.045999944210052, y: 0.290000081062317, z: -0.115630149841309 },
    { x: 0.046000003814697, y: 0.289999961853027, z: 0.24306321144104 },
    { x: 0.035020887851715, y: 0.290000021457672, z: 0.252411276102066 },
    { x: 0.000592768192291, y: 0.289999902248383, z: 0.254001617431641 },
    { x: -0.030238270759583, y: 0.289999842643738, z: 0.264909505844116 },
    { x: -0.040487706661224, y: 0.289999663829803, z: 0.272692203521729 },
    { x: -0.045000016689301, y: 0.291173994541168, z: 0.285841226577759 },
    { x: -0.045000016689301, y: 0.3103386759758, z: 0.305965065956116 },
    { x: -0.045000016689301, y: 0.320577383041382, z: 0.312650412321091 },
    { x: -0.045000016689301, y: 0.339999973773956, z: 0.31999996304512 },
    { x: -0.045000016689301, y: 0.417783081531525, z: 0.320000022649765 },
    { x: -0.045000016689301, y: 0.427187323570251, z: 0.314868241548538 },
    { x: -0.045000016689301, y: 0.43009489774704, z: 0.301046431064606 },
    { x: -0.045000016689301, y: 0.4332155585289, z: 0.297750055789948 },
    { x: -0.045000016689301, y: 0.43320107460022, z: 0.283139884471893 },
    { x: -0.045000016689301, y: 0.436866581439972, z: 0.283112317323685 },
    { x: -0.045000016689301, y: 0.436993539333344, z: 0.225850850343704 },
    { x: -0.045000016689301, y: 0.433115005493164, z: 0.225854098796844 },
    { x: -0.045000016689301, y: 0.433085501194, z: 0.211463212966919 },
    { x: -0.045000016689301, y: 0.430000007152557, z: 0.20814049243927 },
    { x: -0.04483836889267, y: 0.43001264333725, z: 0.006789043545723 },
    { x: -0.037493884563446, y: 0.430430591106415, z: -0.025567710399628 },
    { x: -0.016643643379211, y: 0.430700421333313, z: -0.049269139766693 },
    { x: 0.022432804107666, y: 0.428207099437714, z: -0.06472784280777 },
    { x: 0.064163267612457, y: 0.421822011470795, z: -0.069604843854904 },
    { x: 0.146515548229218, y: 0.402797102928162, z: -0.069979757070541 },
    { x: 0.276976943016052, y: 0.329015135765076, z: -0.069989427924156 },
    { x: 0.372883766889572, y: 0.213403820991516, z: -0.070018276572227 },
    { x: 0.422110736370087, y: 0.073266744613647, z: -0.070007979869843 },
    { x: 0.430001556873322, y: -0.008669584989548, z: -0.069999366998672 },
    { x: 0.429998695850372, y: -0.378851115703583, z: -0.06999970972538 },
    { x: 0.440998464822769, y: -0.405000984668732, z: -0.06999859213829 },
    { x: 0.464422106742859, y: -0.425300896167755, z: -0.069992288947105 },
    { x: 0.491752207279205, y: -0.429999887943268, z: -0.070006370544434 },
    { x: 0.699999988079071, y: -0.430000007152557, z: -0.069999992847443 },
  ],

  pathL2: [
    { x: 0.000025987625122, y: 0.43811882019043, z: 0.398997023701668 },
    { x: 0.045000195503235, y: 0.4388107137680054, z: 0.398987755179405 },
    { x: 0.045000314712524, y: 0.433107316493988, z: 0.384823009371758 },
    { x: 0.045000374317169, y: 0.430000841617584, z: 0.38146685063839 },
    { x: 0.045028805732727, y: 0.429692685604095, z: 0.36108110845089 },
    { x: 0.04506379365921, y: 0.426311731338501, z: 0.352250024676323 },
    { x: 0.04499763250351, y: 0.419774651527405, z: 0.350000008940697 },
    { x: 0.044949650764465, y: 0.373011410236359, z: 0.349827393889427 },
    { x: 0.045013129711151, y: 0.323070585727692, z: 0.347727343440056 },
    { x: 0.045060932636261, y: 0.307393133640289, z: 0.34650032222271 },
    { x: 0.044546663761139, y: 0.289831459522247, z: 0.342373177409172 },
    { x: 0.039850115776062, y: 0.274461805820465, z: 0.34214936196804 },
    { x: 0.028932869434357, y: 0.262300789356232, z: 0.339779809117317 },
    { x: 0.016344845294952, y: 0.259445905685425, z: 0.334003552794456 },
    { x: -0.034929990768433, y: 0.26116544008255, z: 0.324743404984474 },
    { x: -0.079513072967529, y: 0.258042514324188, z: 0.317131653428078 },
    { x: -0.146038830280304, y: 0.242765784263611, z: 0.30500029027462 },
    { x: -0.209837257862091, y: 0.187887847423553, z: 0.304999992251396 },
    { x: -0.267000019550323, y: 0.089999973773956, z: 0.305000022053719 },
    { x: -0.284948289394379, y: 0.001108884811401, z: 0.304999813437462 },
    { x: -0.274915874004364, y: -0.066048502922058, z: 0.294876620173454 },
    { x: -0.26118016242981, y: -0.088389098644257, z: 0.275737151503563 },
    { x: -0.250937163829803, y: -0.091068714857101, z: 0.252504721283913 },
    { x: -0.249898731708527, y: -0.091162830591202, z: -0.116555824875832 },
    { x: -0.244788765907288, y: -0.100013136863708, z: -0.126545175909996 },
    { x: -0.209517955780029, y: -0.161104649305344, z: -0.126195982098579 },
    { x: -0.20389860868454, y: -0.170837223529816, z: -0.114401057362556 },
    { x: -0.203898727893829, y: -0.170837223529816, z: 0.2430509775877 },
    { x: -0.209000051021576, y: -0.16200116276741, z: 0.252283230423927 },
    { x: -0.231206715106964, y: -0.125760018825531, z: 0.254138335585594 },
    { x: -0.257198631763458, y: -0.103150725364685, z: 0.252290531992912 },
    { x: -0.26288902759552, y: -0.098662555217743, z: 0.239930734038353 },
    { x: -0.262888967990875, y: -0.098662972450256, z: -0.116579130291939 },
    { x: -0.257348537445068, y: -0.108258783817291, z: -0.126695618033409 },
    { x: -0.222114562988281, y: -0.169286549091339, z: -0.126037284731865 },
    { x: -0.216889083385468, y: -0.178337007761002, z: -0.11554653942585 },
    { x: -0.216888964176178, y: -0.178337275981903, z: 0.2431570738554 },
    { x: -0.222399055957794, y: -0.168793499469757, z: 0.252397075295448 },
    { x: -0.24192076921463, y: -0.135779142379761, z: 0.254054352641106 },
    { x: -0.269913494586945, y: -0.110873281955719, z: 0.25235815346241 },
    { x: -0.275879383087158, y: -0.106162667274475, z: 0.243082627654076 },
    { x: -0.275879323482513, y: -0.106162965297699, z: -0.116315051913261 },
    { x: -0.270553171634674, y: -0.11538764834404, z: -0.126609101891518 },
    { x: -0.235782146453857, y: -0.175613462924957, z: -0.126307383179665 },
    { x: -0.229879140853882, y: -0.185837388038635, z: -0.115418925881386 },
    { x: -0.229879558086395, y: -0.185836851596832, z: 0.241074308753014 },
    { x: -0.229285001754761, y: -0.186866462230682, z: 0.257996544241905 },
    { x: -0.226244926452637, y: -0.192132741212845, z: 0.285346791148186 },
    { x: -0.216426134109497, y: -0.191287934780121, z: 0.299615308642387 },
    { x: -0.205622553825378, y: -0.194576382637024, z: 0.304624125361443 },
    { x: -0.191746592521667, y: -0.207960784435272, z: 0.305728003382683 },
    { x: -0.145343363285065, y: -0.24768128991127, z: 0.305006816983223 },
    { x: -0.090473890304565, y: -0.271084666252136, z: 0.305033579468727 },
    { x: -0.056442320346832, y: -0.281166791915894, z: 0.305000796914101 },
    { x: 0.056686818599701, y: -0.280011177062988, z: 0.305000081658363 },
    { x: 0.147662043571472, y: -0.245882749557495, z: 0.304999992251396 },
    { x: 0.206720888614655, y: -0.189512699842453, z: 0.305000320076942 },
    { x: 0.263057768344879, y: -0.094453364610672, z: 0.304996475577354 },
    { x: 0.284981280565262, y: -0.00067350268364, z: 0.305021330714226 },
    { x: 0.268769979476929, y: 0.08354651927948, z: 0.304713532328606 },
    { x: 0.24883097410202, y: 0.118804395198822, z: 0.29702453315258 },
    { x: 0.237385392189026, y: 0.138720452785492, z: 0.291332051157951 },
    { x: 0.219894975423813, y: 0.153683841228485, z: 0.277384385466576 },
    { x: 0.204945236444473, y: 0.165698230266571, z: 0.259026303887367 },
    { x: 0.202166676521301, y: 0.169837176799774, z: 0.243916168808937 },
    { x: 0.202166616916656, y: 0.16983687877655, z: -0.110968843102455 },
    { x: 0.206802219152451, y: 0.161808371543884, z: -0.126284196972847 },
    { x: 0.241952180862427, y: 0.100926458835602, z: -0.126414820551872 },
    { x: 0.248166680335999, y: 0.090162813663483, z: -0.116192117333412 },
    { x: 0.248166561126709, y: 0.090162813663483, z: 0.240675702691078 },
    { x: 0.243256509304047, y: 0.098667502403259, z: 0.252237632870674 },
    { x: 0.22278043627739, y: 0.136355519294739, z: 0.254141017794609 },
    { x: 0.216898858547211, y: 0.1656494140625, z: 0.253189072012901 },
    { x: 0.215162843465805, y: 0.177294790744781, z: 0.242983594536781 },
    { x: 0.215156942605972, y: 0.177336990833282, z: -0.111730113625526 },
    { x: 0.219908833503723, y: 0.169106960296631, z: -0.126347288489342 },
    { x: 0.254991590976715, y: 0.10834139585495, z: -0.126383617520332 },
    { x: 0.261157095432281, y: 0.097662746906281, z: -0.114963069558144 },
    { x: 0.26115694642067, y: 0.09766286611557, z: 0.24467758834362 },
    { x: 0.256243169307709, y: 0.106174051761627, z: 0.252241089940071 },
    { x: 0.236618608236313, y: 0.141234457492828, z: 0.25407050549984 },
    { x: 0.229996085166931, y: 0.172505438327789, z: 0.253256484866142 },
    { x: 0.228147447109222, y: 0.184837162494659, z: 0.244549140334129 },
    { x: 0.228147327899933, y: 0.184837102890015, z: -0.111432418227196 },
    { x: 0.233213156461716, y: 0.176063358783722, z: -0.126503244042397 },
    { x: 0.268015682697296, y: 0.115783035755157, z: -0.126369193196297 },
    { x: 0.274147421121597, y: 0.105162918567657, z: -0.116433873772621 },
    { x: 0.274147391319275, y: 0.105162799358368, z: 0.244843915104866 },
    { x: 0.267503917217255, y: 0.116669595241547, z: 0.252751991152763 },
    { x: 0.248208284378052, y: 0.149361729621887, z: 0.255173847079277 },
    { x: 0.231030434370041, y: 0.164947748184204, z: 0.278206750750542 },
    { x: 0.218026548624039, y: 0.175287365913391, z: 0.298325076699257 },
    { x: 0.189658463001251, y: 0.20656019449234, z: 0.307223096489906 },
    { x: 0.144509971141815, y: 0.247935056686401, z: 0.305029973387718 },
    { x: 0.105598270893097, y: 0.260192573070526, z: 0.303894892334938 },
    { x: 0.029293179512024, y: 0.273218035697937, z: 0.311507865786552 },
    { x: 0.012360215187073, y: 0.282083630561829, z: 0.315086349844933 },
    { x: 0.001493036746979, y: 0.307301580905914, z: 0.318433597683907 },
    { x: 0.000236213207245, y: 0.319422721862793, z: 0.319253697991371 },
    { x: 0.0, y: 0.339996874332428, z: 0.320000007748604 },
    { x: 0.000002920627594, y: 0.418136894702911, z: 0.320000037550926 },
    { x: -0.000013709068298, y: 0.427265703678131, z: 0.314638867974281 },
    { x: -0.000012159347534, y: 0.430078029632568, z: 0.300982072949409 },
    { x: -0.000007212162018, y: 0.433386147022247, z: 0.297723814845085 },
    { x: -0.000004589557648, y: 0.433057188987732, z: 0.283162370324135 },
    { x: -0.000002264976501, y: 0.43701696395874, z: 0.283120349049568 },
    { x: 0.0, y: 0.436968505382538, z: 0.225856110453606 },
    { x: 0.0, y: 0.433124721050262, z: 0.225871175527573 },
    { x: 0.0, y: 0.433131337165833, z: 0.213159739971161 },
    { x: 0.0, y: 0.430000007152557, z: 0.209709256887436 },
    { x: 0.000845849514008, y: 0.430057764053345, z: 0.040841802954674 },
    { x: 0.006471276283264, y: 0.43002861738205, z: 0.007886797189713 },
    { x: 0.025645554065704, y: 0.428249895572662, z: -0.015854433178902 },
    { x: 0.062127888202667, y: 0.422228574752808, z: -0.019954949617386 },
    { x: 0.144769668579102, y: 0.402875542640686, z: -0.019999444484711 },
    { x: 0.276195794343948, y: 0.329933166503906, z: -0.019999414682388 },
    { x: 0.372155159711838, y: 0.214601457118988, z: -0.019999876618385 },
    { x: 0.421805530786514, y: 0.075110137462616, z: -0.019998371601105 },
    { x: 0.430000245571136, y: -0.007142603397369, z: -0.020000234246254 },
    { x: 0.430000126361847, y: -0.377171576023102, z: -0.019999757409096 },
    { x: 0.4399254322052, y: -0.403596043586731, z: -0.020004138350487 },
    { x: 0.462945997714996, y: -0.424453735351562, z: -0.020002812147141 },
    { x: 0.48982897400856, y: -0.430000126361847, z: -0.019999146461487 },
    { x: 0.699915647506714, y: -0.430000007152557, z: -0.019999995827675 },
  ],
  pathL3: [
    { x: -0.000138401985168, y: 0.436811909079552, z: 0.398966521024704 },
    { x: -0.045003771781921, y: 0.436788842082024, z: 0.398984998464584 },
    { x: -0.045004665851593, y: 0.433047696948051, z: 0.398982167243958 },
    { x: -0.045005321502686, y: 0.43304805457592, z: 0.384575664997101 },
    { x: -0.045005559921265, y: 0.429998502135277, z: 0.381334006786346 },
    { x: -0.044993877410889, y: 0.429666802287102, z: 0.361021220684052 },
    { x: -0.044996559619904, y: 0.426377102732658, z: 0.352361142635345 },
    { x: -0.045000076293945, y: 0.419858142733574, z: 0.349999994039536 },
    { x: -0.044995188713074, y: 0.372887060046196, z: 0.349767774343491 },
    { x: -0.045001983642578, y: 0.322569251060486, z: 0.34790626168251 },
    { x: -0.045005321502686, y: 0.307164967060089, z: 0.346769154071808 },
    { x: -0.045797348022461, y: 0.289448857307434, z: 0.340515941381454 },
    { x: -0.052831411361694, y: 0.281235694885254, z: 0.337002694606781 },
    { x: -0.063108503818512, y: 0.276444435119629, z: 0.335684180259705 },
    { x: -0.082631945610046, y: 0.273230910301208, z: 0.334010094404221 },
    { x: -0.155030839145184, y: 0.255667507648468, z: 0.319730818271637 },
    { x: -0.20909071713686, y: 0.214197993278503, z: 0.303725771605968 },
    { x: -0.216595239937305, y: 0.205860018730164, z: 0.299181126058102 },
    { x: -0.217827029526234, y: 0.196573495864868, z: 0.290325127542019 },
    { x: -0.212257213890553, y: 0.182951152324677, z: 0.271992318332195 },
    { x: -0.203898541629314, y: 0.170837044715881, z: 0.239109959453344 },
    { x: -0.203898601233959, y: 0.170837223529816, z: -0.117236122488976 },
    { x: -0.209528274834156, y: 0.161085844039917, z: -0.126735851168633 },
    { x: -0.244788952171803, y: 0.10001331474632, z: -0.126004174351692 },
    { x: -0.249898619949818, y: 0.091162681113929, z: -0.113074883818626 },
    { x: -0.249898619949818, y: 0.091162859927863, z: 0.243874963372946 },
    { x: -0.244390077888966, y: 0.100703834556043, z: 0.252401940524578 },
    { x: -0.224288411438465, y: 0.138217628002167, z: 0.254157193005085 },
    { x: -0.217788346111774, y: 0.172092258930206, z: 0.252084605395794 },
    { x: -0.216888673603535, y: 0.178337335586548, z: 0.2390499971807 },
    { x: -0.216888971626759, y: 0.178337037563324, z: -0.117336317896843 },
    { x: -0.222819752991199, y: 0.168064475059509, z: -0.126838877797127 },
    { x: -0.25800497084856, y: 0.107122361660004, z: -0.1258714646101 },
    { x: -0.262888856232166, y: 0.098662911914289, z: -0.114847525954247 },
    { x: -0.262889094650745, y: 0.098662733100355, z: 0.243855115026236 },
    { x: -0.256923265755177, y: 0.108995735645294, z: 0.252529986202717 },
    { x: -0.238344497978687, y: 0.14225298166275, z: 0.254070498049259 },
    { x: -0.230780251324177, y: 0.179589509963989, z: 0.252075426280499 },
    { x: -0.229879148304462, y: 0.185837209224701, z: 0.241982813924551 },
    { x: -0.229879446327686, y: 0.185837030410767, z: -0.117240980267525 },
    { x: -0.235566563904285, y: 0.175986230373383, z: -0.12674181163311 },
    { x: -0.270384855568409, y: 0.115679621696472, z: -0.126153662800789 },
    { x: -0.275879450142384, y: 0.106162428855896, z: -0.114265784621239 },
    { x: -0.275879211723804, y: 0.106163084506989, z: 0.241868074983358 },
    { x: -0.276385255157948, y: 0.105068266391754, z: 0.258960612118244 },
    { x: -0.283056445419788, y: 0.0937190647237, z: 0.306029342114925 },
    { x: -0.289478130638599, y: 0.079968511592597, z: 0.319781452417374 },
    { x: -0.302941747009754, y: -0.000996738672256, z: 0.319999992847443 },
    { x: -0.287575848400593, y: -0.074159413576126, z: 0.319999486207962 },
    { x: -0.277100928127766, y: -0.103737413883209, z: 0.319999366998672 },
    { x: -0.226332195103168, y: -0.195104375481606, z: 0.31999996304512 },
    { x: -0.151765517890453, y: -0.262868955731392, z: 0.319999992847443 },
    { x: -0.093081168830395, y: -0.286922380328178, z: 0.319999784231186 },
    { x: -0.055254817008972, y: -0.296637341380119, z: 0.319999843835831 },
    { x: 0.063201010227203, y: -0.295951560139656, z: 0.320000112056732 },
    { x: 0.157636284828186, y: -0.258220031857491, z: 0.319999843835831 },
    { x: 0.221111752092838, y: -0.197470679879189, z: 0.320001840591431 },
    { x: 0.247049100697041, y: -0.162274092435837, z: 0.311450034379959 },
    { x: 0.260257847607136, y: -0.125744789838791, z: 0.295619748532772 },
    { x: 0.25379703193903, y: -0.101352274417877, z: 0.26983555406332 },
    { x: 0.248566366732121, y: -0.090909779071808, z: 0.251022391021252 },
    { x: 0.248166687786579, y: -0.090162873268127, z: 0.242142733186483 },
    { x: 0.248166449368, y: -0.090162873268127, z: -0.11334602534771 },
    { x: 0.242849297821522, y: -0.099373042583466, z: -0.126623228192329 },
    { x: 0.207531072199345, y: -0.160545468330383, z: -0.126094624400139 },
    { x: 0.202166683971882, y: -0.169837310910225, z: -0.11432109773159 },
    { x: 0.202166594564915, y: -0.169837161898613, z: 0.242897745221853 },
    { x: 0.207883305847645, y: -0.159935742616653, z: 0.252472601830959 },
    { x: 0.230465658009052, y: -0.123780071735382, z: 0.254170678555965 },
    { x: 0.253273494541645, y: -0.103906869888306, z: 0.252915538847446 },
    { x: 0.261157102882862, y: -0.09766286611557, z: 0.24145620688796 },
    { x: 0.261156834661961, y: -0.09766286611557, z: -0.113431319594383 },
    { x: 0.255544014275074, y: -0.107385069131851, z: -0.126730129122734 },
    { x: 0.220263339579105, y: -0.16849248111248, z: -0.125984355807304 },
    { x: 0.215156979858875, y: -0.17733733355999, z: -0.113797888159752 },
    { x: 0.215156950056553, y: -0.177337184548378, z: 0.243312742561102 },
    { x: 0.220992870628834, y: -0.167229250073433, z: 0.252509616315365 },
    { x: 0.241784103214741, y: -0.133015662431717, z: 0.254112742841244 },
    { x: 0.265865303575993, y: -0.111729890108109, z: 0.25301056355238 },
    { x: 0.274147517979145, y: -0.10516294836998, z: 0.242715548723936 },
    { x: 0.274147398769855, y: -0.105162918567657, z: -0.113313302397728 },
    { x: 0.268342591822147, y: -0.115217477083206, z: -0.126783177256584 },
    { x: 0.249890394508839, y: -0.147177487611771, z: -0.128979846835136 },
    { x: 0.233258999884129, y: -0.175983473658562, z: -0.125984951853752 },
    { x: 0.228147514164448, y: -0.184837177395821, z: -0.114951774477959 },
    { x: 0.228147394955158, y: -0.184837237000465, z: 0.243928428739309 },
    { x: 0.233708210289478, y: -0.175205692648888, z: 0.25243229418993 },
    { x: 0.269801773130894, y: -0.120929270982742, z: 0.269953496754169 },
    { x: 0.279597468674183, y: -0.106382668018341, z: 0.291163377463818 },
    { x: 0.280201323330402, y: -0.097025454044342, z: 0.317098468542099 },
    { x: 0.28581316024065, y: -0.077630996704102, z: 0.320003062486649 },
    { x: 0.302945576608181, y: 0.000932633876801, z: 0.31999996304512 },
    { x: 0.282000012695789, y: 0.091000020038337, z: 0.319999992847443 },
    { x: 0.221856333315372, y: 0.196256101131439, z: 0.320000022649765 },
    { x: 0.150347530841827, y: 0.261359095573425, z: 0.319999992847443 },
    { x: 0.106077194213867, y: 0.27469676733017, z: 0.320001542568207 },
    { x: 0.060635447502136, y: 0.286691129207611, z: 0.319997608661652 },
    { x: 0.047008574940264, y: 0.30913382768631, z: 0.31999883055687 },
    { x: 0.04569858382456, y: 0.321407079696655, z: 0.319999426603317 },
    { x: 0.045002639992163, y: 0.342136070132256, z: 0.319999933242798 },
    { x: 0.044997335178778, y: 0.417889878153801, z: 0.320000022649765 },
    { x: 0.045011461479589, y: 0.427264139056206, z: 0.314679682254791 },
    { x: 0.04501009057276, y: 0.43021522462368, z: 0.300986848771572 },
    { x: 0.045008183224127, y: 0.433288797736168, z: 0.297726683318615 },
    { x: 0.045001865131781, y: 0.433034107089043, z: 0.283109597861767 },
    { x: 0.045000494224951, y: 0.436734601855278, z: 0.283098630607128 },
    { x: 0.045000017387792, y: 0.43703530728817, z: 0.225830566138029 },
    { x: 0.045000017387792, y: 0.433131322264671, z: 0.225847776979208 },
    { x: 0.045000017387792, y: 0.433073446154594, z: 0.211457680910826 },
    { x: 0.045000017387792, y: 0.429999992251396, z: 0.207963388413191 },
    { x: 0.045000017387792, y: 0.430000349879265, z: 0.071860559284687 },
    { x: 0.050978959538043, y: 0.428534850478172, z: 0.047569841146469 },
    { x: 0.068743109703064, y: 0.424060449004173, z: 0.034574493765831 },
    { x: 0.090725600719452, y: 0.418270632624626, z: 0.03057062625885 },
    { x: 0.145987987518311, y: 0.401782616972923, z: 0.030000820755959 },
    { x: 0.277496494352818, y: 0.329279184341431, z: 0.03000009059906 },
    { x: 0.372830621898174, y: 0.213115096092224, z: 0.030000075697899 },
    { x: 0.422231458127499, y: 0.073545037768781, z: 0.030000016093254 },
    { x: 0.430000148713589, y: -0.008397698402405, z: 0.030000001192093 },
    { x: 0.430000029504299, y: -0.378677025437355, z: 0.030000016093254 },
    { x: 0.440929166972637, y: -0.404895320534706, z: 0.029999628663063 },
    { x: 0.464348129928112, y: -0.425236210227013, z: 0.029999777674675 },
    { x: 0.49178396910429, y: -0.430000111460686, z: 0.030000001192093 },
    { x: 0.700000010430813, y: -0.429999992251396, z: 0.030000001192093 },
  ],
};

export default jsonData;