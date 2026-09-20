// Catalan translations overlay for the Core Traits data (Attributes and Skills).
// Mirrors the EN overlay's shape exactly — see `translations-traits-en.ts` for why
// `combos` is keyed by attribute id rather than by name, and `traits.ts` for the
// follow-the-book-but-reword contract this content is held to.

import type { TraitTranslation } from './translations-traits-en'

type TraitId =
  | 'fuerza' | 'destreza' | 'resistencia'
  | 'carisma' | 'manipulacion' | 'compostura'
  | 'inteligencia' | 'astucia' | 'resolucion'
  | 'armas-de-fuego' | 'artesania' | 'atletismo' | 'conducir' | 'latrocinio'
  | 'pelea' | 'pelea-con-armas' | 'sigilo' | 'supervivencia'
  | 'callejeo' | 'etiqueta' | 'interpretacion' | 'intimidacion' | 'liderazgo'
  | 'perspicacia' | 'persuasion' | 'subterfugio' | 'trato-con-animales'
  | 'academicismo' | 'ciencias' | 'consciencia' | 'finanzas' | 'investigacion'
  | 'medicina' | 'ocultismo' | 'politica' | 'tecnologia'

export const TRAITS_CA: Record<TraitId, TraitTranslation> = {

  // ── ATRIBUTS FÍSICS ──────────────────────────────────────────────────────────

  'fuerza': {
    name: 'Força',
    description: 'Força determina com de gran pot ser el mortal que aconsegueixis aixecar, amb quanta potència ets capaç de colpejar-lo i quant esforç pots exigir-li al teu cos inert.',
    note: 'Entre parèntesis, el pes aproximat que pots aixecar a braç sense necessitat d’una prova d’Atribut.',
    dots: [
      'Esclafes una llauna de cervesa sense esforç (20 kg: un arbre de Nadal, un senyal de stop).',
      'Tens una constitució del muntó (45 kg: un vàter).',
      'Tires a terra una porta de fusta a cops (115 kg: un adult corpulent, un taüt buit, una nevera).',
      'Ets un espècimen físic excel·lent, segurament amb múscul a la vista (180 kg: un taüt ocupat, un contenidor d’escombraries buit).',
      'La teva força és portentosa: rebentes a cops una porta metàl·lica prima, obres un forat en una tanca de tela metàl·lica o parteixes el pany d’una porta (250 kg: una motocicleta, un piano).',
    ],
  },

  'destreza': {
    name: 'Destresa',
    description: 'Destresa regeix la teva agilitat i la teva elegància de moviments, amb quina rapidesa apartes el pit de l’estaca que va cap al teu cor i quanta precisió conserva el teu pols quan el temps pressiona.',
    dots: [
      'Corres sense problema, però l’equilibri i els esquivaments se t’entravessen.',
      'Tens un esprint decent i de tant en tant fins i tot sembles elegant.',
      'La teva agilitat crida l’atenció i et coordines tan bé com un aficionat amb entrenament a l’esquena.',
      'Destaques en les acrobàcies i et mous com molt pocs humans podrien.',
      'Els teus moviments resulten fluids i hipnòtics, gairebé sobrehumans.',
    ],
  },

  'resistencia': {
    name: 'Resistència',
    description: 'El teu aguant físic. Resistència absorbeix el dany que rep el teu cos —una bala, l’espasa d’un caçador— i et permet continuar endavant malgrat el perill i l’esforç més dur.',
    note: 'La teva Salut equival a la teva Resistència + 3.',
    dots: [
      'Fins i tot l’esforç més insignificant et deixa esgotat.',
      'Encaixes una pallissa, tot i que més et valdria fer les paus.',
      'Diverses jornades de marxa dura amb motxilla no et suposen cap problema.',
      'Guanyaries una marató, o suportaries enormes quantitats de dolor; almenys en l’àmbit físic.',
      'Ni tan sols sent mortal hauries arribat a suar per res.',
    ],
  },

  // ── ATRIBUTS SOCIALS ─────────────────────────────────────────────────────────

  'carisma': {
    name: 'Carisma',
    description: 'Carisma mesura el teu encant, la teva gràcia i el teu atractiu naturals. Si el tens, la gent s’acosta a tu i alimentar-te resulta molt més fàcil. No depèn de ser guapo: per a això existeix un Mèrit a part.',
    dots: [
      'T’expresses amb claredat, tot i que poca gent et prestarà atenció.',
      'Resultes agradable malgrat la teva condició de no-mort, i fins i tot podries conservar amics.',
      'La gent confia en tu sense pensar-s’ho i fas amics sense esforç.',
      'El teu magnetisme personal és notable i els seguidors se t’enganxen com mosques.',
      'Si t’ho proposessis, portaries una ciutat sencera a la rebel·lió.',
    ],
  },

  'manipulacion': {
    name: 'Manipulació',
    description: 'Manipulació és la teva habilitat per tòrcer una situació fins que els altres facin seu el teu punt de vista, mentir de manera creïble i marxar després d’enredar algú sense que ningú se n’adoni.',
    dots: [
      'Mentre vagis de cara, convences els altres de fer el que vols.',
      'El teu talent per a l’engany venç la voluntat d’indecisos i ingenus.',
      'Mai no pagues el preu complet per res.',
      'Faries el perfil de líder d’una secta o de polític.',
      'Convenceries el Príncep d’invertir en uns terrenys enmig del desert, o fins i tot d’aixecar la Cacera de Sang que pesa sobre tu.',
    ],
  },

  'compostura': {
    name: 'Compostura',
    description: 'Compostura et permet mantenir la calma, dominar les teves emocions i tranquil·litzar els altres malgrat el seu nerviosisme. També representa la teva sang freda en qualsevol circumstància, tant en un tiroteig com en una trobada íntima.',
    note: 'La teva Força de Voluntat equival a la teva Compostura + Resolució.',
    dots: [
      'L’insult o l’enfrontament més nimi et pot desfermar un Frenesí.',
      'Domines els teus instints depredadors en gairebé qualsevol situació que no sigui hostil.',
      'Els altres acudeixen a tu buscant consell quan la sang esquitxa el ventilador.',
      'Et tires un bluf a les cartes sense despentinar-te i mantens la teva Bèstia sota cert control.',
      'La teva Bèstia és poc més que una mascota.',
    ],
  },

  // ── ATRIBUTS MENTALS ─────────────────────────────────────────────────────────

  'inteligencia': {
    name: 'Intel·ligència',
    description: 'Intel·ligència mesura la teva capacitat de raonar, investigar i aplicar la lògica. Recordes i analitzes la informació que t’arriba dels llibres o dels teus sentits. Cap trencaclosques ni misteri no es resisteix a algú veritablement intel·ligent.',
    dots: [
      'Llegeixes i escrius amb solvència, tot i que hi ha termes que se t’escapen.',
      'Ets prou llest per reconèixer les teves pròpies limitacions.',
      'Ets una persona culta i relaciones pistes sense dificultat.',
      'No seria estrany que el Clan Tremere consultés el teu criteri.',
      'La paraula «geni» es queda curta per a la fondària i l’abast del teu intel·lecte.',
    ],
  },

  'astucia': {
    name: 'Astúcia',
    description: 'Astúcia serveix per pensar de pressa i encertar amb poca informació. «Sents un soroll» és Astúcia; «sents acostar-se dos vigilants» és Intel·ligència. Amb ella ensumes una emboscada o contestes a l’Harpia allà mateix, en plena cort, en comptes de trobar la resposta perfecta la nit següent.',
    dots: [
      'Acabes entenent-ho, però necessites que algú t’ho expliqui.',
      'Calcules les probabilitats al pòquer o estires del fre d’emergència a temps. Gairebé sempre.',
      'Llegeixes una situació i trobes de seguida la millor via d’escapament.',
      'Mai no et pillen a contrapeu i sempre tens a punt una resposta enginyosa.',
      'Penses i respons a una velocitat que la majoria no arriba a seguir.',
    ],
  },

  'resolucion': {
    name: 'Resolució',
    description: 'Resolució aporta atenció i determinació, i mesura la teva concentració i la teva fortalesa mental. És el que et dona aguant per a torns de vigilància que duren fins a l’alba i el que deixa fora les distraccions.',
    note: 'La teva Força de Voluntat equival a la teva Compostura + Resolució.',
    dots: [
      'La teva capacitat d’atenció és mínima llevat del que és veritablement urgent.',
      'Seus a esperar que piquin l’ham, sempre que l’espera no s’allargui gaire.',
      'Distreure’t costa més esforç del que la majoria està disposada a invertir.',
      'T’obres pas fins a una deducció per damunt de qualsevol obstacle.',
      'Penses amb claredat en ple tiroteig, o vigiles la porta durant una orgia de sang i després reculls fins a l’última beina i neteges fins a l’última gota.',
    ],
  },

  // ── HABILITATS FÍSIQUES ──────────────────────────────────────────────────────

  'armas-de-fuego': {
    name: 'Armes de Foc',
    description: 'Deixar una víctima amb forats a la gola significa una investigació a fons de la Segona Inquisició; deixar-la amb forats al cap és un dissabte qualsevol a Baltimore. Els Cainites no recorren a les Armes de Foc només per motius humans —eficàcia i emoció—, sinó també per sostenir la Mascarada. Cobreix el maneig d’armes curtes, des de la pistola oculta fins al rifle d’assalt, i d’altres peces majors accionades per gallet, com ballestes i llançacoets portàtils. Inclou també netejar-les, desencallar-les i recarregar-les amb rapidesa.',
    dots: [
      'Has disparat una pistola un parell de vegades, en una galeria de tir o en contextos menys formals.',
      'Saps mantenir l’arma neta, desmuntar-la i tornar-la a muntar.',
      'Has passat pel pitjor —«vist l’elefant», si passes del segle— i n’has sortit viu.',
      'Fas trets d’exhibició, encertes sense apuntar, dispares en cursa i pràcticament qualsevol cosa que acabi en un tret.',
      'Practiques des que la Winchester va obrir les portes.',
    ],
    specialties: ['Armeria', 'Ballestes', 'Desenfundat Ràpid', 'Franctirador', 'Recàrrega Manual', 'Trets d’Exhibició', 'Venda d’Armes'],
    combos: {
      'destreza':   'Disparar amb precisió.',
      'astucia':    'Disparar aprofitant la cobertura.',
      'resolucion': 'Apuntar i esperar pacientment.',
    },
  },

  'artesania': {
    name: 'Artesania',
    description: 'Artesania abasta en general les manualitats, la creació d’objectes i eines —tant bells com funcionals— i les arts aplicades, des de la terrissa fins a la construcció i el reforç del teu propi refugi.',
    note: 'Així que adquireixes aquesta Habilitat reps una Especialitat gratuïta. A diferència de gairebé totes les altres, pots tenir més Especialitats que punts en Artesania.',
    dots: [
      'Ets un aficionat, però saps què portes entre mans.',
      'La teva destresa manual desperta admiració pel bé que funciona tot el que fas.',
      'Les teves creacions poden resultar belles o terrorífiques, però la seva intenció sempre queda clara.',
      'Els mortals i els Vàstags que coneixen la teva feina la respecten molt.',
      'Et trien sovint per crear la peça central de les festes de l’Elisi.',
    ],
    specialties: ['Fusteria', 'Costura', 'Disseny', 'Escultura', 'Forja d’Armes', 'Gravat', 'Pintura'],
    combos: {
      'destreza':     'Fabricar o reparar alguna cosa amb precisió.',
      'inteligencia': 'Dissenyar com construir un objecte.',
      'resolucion':   'Treballar durant hores en una peça complicada.',
    },
  },

  'atletismo': {
    name: 'Atletisme',
    description: 'Atletisme et permet deixar enrere un perseguidor, saltar per esquivar el cotxe que se t’abalança a sobre, i enfilar-te i nedar com una persona sana i robusta.',
    note: 'Pots emprar Atletisme en lloc de qualsevol altra Habilitat Física de combat en una tirada de conflicte, però llavors no arribes a colpejar el teu oponent, per molts èxits que obtinguis.',
    dots: [
      'Sempre paraves atenció a classe de gimnàstica i encara ets capaç de saltar.',
      'Encara que siguis mort, conserves la forma d’un mortal que fa exercici amb regularitat.',
      'Ets fort com un roure i et podries dedicar a l’esport professional. En partits nocturns, si més no.',
      'Amb el que fas al parkour, per què convertir-se en ratpenat?',
      'Les marques olímpiques són al teu abast: només un grapat d’humans aconsegueix el que tu. Els vampirs confonen la teva capacitat amb una Disciplina Física.',
    ],
    specialties: ['Acrobàcies', 'Aguant', 'Escalada', 'Llançament', 'Natació', 'Parkour', 'Salt', 'Tir amb Arc'],
    combos: {
      'destreza':    'Saltar, enfilar-te o fer acrobàcies.',
      'fuerza':      'Aixecar, empènyer o saltar amb potència.',
      'resistencia': 'Córrer o nedar durant molt de temps.',
    },
  },

  'conducir': {
    name: 'Conduir',
    description: 'Qualsevol —llevat potser d’un vampir de cinc-cents anys— pot aprendre a portar un cotxe. L’Habilitat Conduir es refereix a fer-ho ràpid i segur en condicions adverses o sota tensió: camp a través, fugint d’una emboscada a tota velocitat, guanyant curses de carrer o escapolint-te d’una persecució de la Segona Inquisició.',
    dots: [
      'Condueixes amb prudència i és difícil que cometis un error.',
      'Trepitges a fons sense por d’estavellar-te, sempre que la visibilitat acompanyi.',
      'Has guanyat curses de cotxes, cosa que t’ha donat bona fama entre els Anarquistes.',
      'Podries treballar com a especialista o ser el xofer personal del Príncep o del Baró local.',
      'Coneixes els cotxes del dret i del revés. Pocs t’igualen en perícia i coneixement.',
    ],
    specialties: ['Acrobàcies', 'Camions', 'Curses Urbanes', 'Evasió', 'Models Antics', 'Motocicletes', 'Seguiment', 'Vehicles Tot Terreny'],
    combos: {
      'destreza':   'Fer una maniobra complicada.',
      'astucia':    'Trobar una ruta per escapar d’una persecució.',
      'resolucion': 'Mantenir una conducció precisa durant hores.',
    },
  },

  'latrocinio': {
    name: 'Latrocini',
    aka: ['Crim', 'Seguretat'],
    description: 'Aquesta Habilitat suposa conèixer les eines i tècniques per forçar panys, col·locar micròfons, anul·lar alarmes corrents de cotxe i antirobatori, falsificar a mà, pontejar vehicles o fins i tot rebentar caixes fortes, a més d’un sens fi de maneres d’entrar per força en un lloc. També serveix per instal·lar un sistema de seguretat «infranquejable» o deduir com i per on van fallar els sistemes en un assalt. Els Ventrue segurament l’anomenin «Seguretat».',
    note: 'Avui gairebé tots els sistemes d’alt nivell porten control informàtic, circuit tancat o alarmes electròniques, de manera que superar-los pot exigir també Tecnologia.',
    dots: [
      'Obres un pany senzill o buides la butxaca d’algú despistat.',
      'Ponteges un cotxe o robes en una botiga sense dificultat.',
      'Localitzes càmeres i alarmes i determines la millor manera d’evitar-les.',
      'Superes un teclat numèric, regraves una targeta d’identitat o obres una caixa forta.',
      'Entres a la cambra cuirassada d’un banc. O en surts.',
    ],
    specialties: ['Alarmes', 'Allanament de Morada', 'Anàlisi de Seguretat', 'Caixes Fortes', 'Carterisme', 'Falsificació', 'Forçar Panys', 'Robatori de Vehicles'],
    combos: {
      'destreza':     'Forçar un pany.',
      'inteligencia': 'Planificar un robatori.',
      'astucia':      'Improvisar quan alguna cosa surt malament.',
    },
  },

  'pelea': {
    name: 'Baralla',
    description: 'Baralla permet abastar l’objectiu quan llances un cop de puny, una puntada o una urpada. Mentre no empunyis cap arma, l’atac compta com a baralla, i pot anar de l’aikijutsu més elegant a la batussa de carrer més bruta.',
    dots: [
      'La teva infància va ser dura i vas haver de barallar-te pel teu lloc. Coneixes un parell de moviments.',
      'Vas rebre una mica d’entrenament per colpejar fort i amb precisió.',
      'Te’n surts més que bé en una batussa.',
      'O bé et van entrenar al nivell de la Spetsnaz, o portes dècades de no-vida barallant-te.',
      'Guanyaries un torneig d’MMA fins i tot sense recórrer als teus Poders vampírics.',
    ],
    specialties: ['Animals', 'Combat Esportiu', 'En Forma de la Bèstia', 'Homes Llop', 'Mortals Armats', 'Mortals sense Armes', 'Baralles de Bar', 'Presa', 'Vàstags'],
    combos: {
      'fuerza':      'Donar un cop de puny potent.',
      'destreza':    'Esquivar i contraatacar.',
      'resistencia': 'Aguantar un forcejament.',
    },
  },

  'pelea-con-armas': {
    name: 'Baralla amb Armes',
    aka: ['Armes cos a cos'],
    description: 'Empra Baralla amb Armes per brandir ganivets, cadenes, bats de beisbol i similars. Les estaques, que solen acabar en mans d’aspirants a caçador, també es fan servir amb aquesta Habilitat.',
    dots: [
      'Maneges un bat o una espasa i sols abastar qui pretens.',
      'La teva evident solvència amb una arma a la mà faria que un atacant s’ho pensés dues vegades.',
      'La teva perícia amb l’arma cos a cos es coneix a tot el domini.',
      'Uns insensats van portar una pistola a la teva baralla de navalles.',
      'Ets el mestre d’armes del domini i et busquen Vàstags d’arreu per la teva perícia.',
    ],
    specialties: ['Armes Improvisades', 'Cadenes', 'Ganivets', 'Esgrima', 'Espases', 'Estaques', 'Garrots', 'Cops de Desarmament', 'Destrals', 'Porres'],
    combos: {
      'destreza': 'Esgrima o atacs precisos.',
      'fuerza':   'Colpejar amb una arma pesada.',
      'astucia':  'Aprofitar una obertura de l’enemic.',
    },
  },

  'sigilo': {
    name: 'Sigil',
    description: 'Sigil permet seguir un objectiu d’amagat, cosa que converteix en caçadors insuperables els vampirs que el dominen. Els dona la capacitat d’espiar, escapolir-se i confondre’s entre la multitud quan cal.',
    dots: [
      'Costa veure’t si t’amagues a l’empara de la foscor o amb roba de camuflatge.',
      'T’escapoleixes d’observadors distrets i sotges víctimes desprevingudes sense aixecar sospites.',
      'Movent-te amb cura i amagant-te amb facilitat, esquives les patrulles de vigilància.',
      'El teu caminar subtil i silenciós et faria un bon ninja, o un enemic digne d’un.',
      'Els Fills de Haqim et demanarien consell sobre com sotjar i amagar-se, si aconseguissin trobar-te.',
    ],
    specialties: ['Disfressa', 'Emboscades', 'Amagar-se', 'Moviment Silenciós', 'Multituds', 'Natura', 'Seguiment', 'Urbà'],
    combos: {
      'destreza':   'Moure’s silenciosament.',
      'astucia':    'Trobar un bon amagatall.',
      'resolucion': 'Romandre ocult durant molt de temps.',
    },
  },

  'supervivencia': {
    name: 'Supervivència',
    description: 'Supervivència dona la capacitat de subsistir en plena natura i en altres entorns hostils el temps necessari per tornar a la civilització: orientar-te per les estrelles, muntar un refugi improvisat o detectar un home llop abans que sigui tard. Alguns dels seus usos valen igual en parcs, polígons industrials i altres erms de la jungla urbana.',
    dots: [
      'Coneixes els senders i l’entorn natural que envolten el teu domini.',
      'Passes més temps fora que dins i rastreges qualsevol que no sàpiga moure’s pel bosc.',
      'Subsisteixes lluny de la ciutat posant trampes per a mortals i aixecant un refugi per a tu.',
      'Prosperes fora de la ciutat com el depredador que ets.',
      'Els Gangrel t’acompanyen en ramat, si aconsegueixen seguir-te el ritme.',
    ],
    specialties: ['Boscos', 'Caça', 'Desert', 'Exploració Urbana', 'Jungla', 'Rastreig', 'Refugis', 'Trampes'],
    combos: {
      'resistencia': 'Aguantar dies en condicions difícils.',
      'astucia':     'Trobar menjar, aigua o refugi.',
      'resolucion':  'Seguir endavant malgrat l’esgotament.',
    },
  },

  // ── HABILITATS SOCIALS ───────────────────────────────────────────────────────

  'callejeo': {
    name: 'Món del Carrer',
    aka: ['Carrer'],
    description: 'Món del Carrer permet entendre’s i negociar amb la societat del carrer i dels baixos fons. Desxifres paraules en clau i argot propi, interpretes les marques dels grafits i imites els signes de les bandes.',
    dots: [
      'Saps on aconseguir drogues i sexe al teu domini.',
      'Saps quines bandes operen a la teva zona, els seus colors i les seves rivalitats. Pot ser que fins i tot tinguis la teva pròpia firma de grafit.',
      'Distingeixes el bon material del dolent, aconsegueixes pistoles i passes desapercebut entre gent del carrer o membres de bandes.',
      'Quan un gàngster diu «conec un tipus», parla de tu.',
      'Contractes, orquestres o arregles gairebé qualsevol activitat criminal a qualsevol punt de la ciutat.',
    ],
    specialties: ['Bandes', 'Drogues', 'Grafits', 'Mercat Negre', 'Reputació Personal', 'Suborns', 'Supervivència Urbana', 'Tràfic d’Armes', 'Venda d’Objectes Robats'],
    combos: {
      'carisma':      'Aconseguir contactes al carrer.',
      'manipulacion': 'Treure informació d’algú.',
      'astucia':      'Saber ràpidament a qui acudir.',
    },
  },

  'etiqueta': {
    name: 'Etiqueta',
    description: 'Etiqueta és la capacitat de reconèixer les convencions socials del moment i respondre-hi, d’imposar protocols nous i d’acontentar tot el teu entorn amb les teves bones maneres. S’empra a l’alta societat, tant de Vàstags com de mortals.',
    dots: [
      'Saps adreçar-te al teu governant local sense fer un pas en fals.',
      'Coneixes les normes d’etiqueta de cada local nocturn del domini.',
      'Impressiones els altres amb el teu domini de les maneres, la deferència i l’elegància.',
      'La teva conducta marca tendència, sobretot quan fas alguna cosa que sacseja les normes.',
      'El Guardià de l’Elisi i les Harpies es fixen en tu per fixar el protocol del domini.',
    ],
    specialties: ['Anarquistes', 'Camarilla', 'Corporacions', 'Elisi', 'Feudal', 'Societat Secreta', 'Un per Cent'],
    combos: {
      'carisma':      'Causar bona impressió en una recepció.',
      'manipulacion': 'Utilitzar les normes socials en benefici teu.',
      'inteligencia': 'Conèixer un protocol desconegut.',
    },
  },

  'interpretacion': {
    name: 'Interpretació',
    description: 'Interpretació cobreix un ventall molt ampli d’arts, de la dansa a la comèdia i la narració. Pots ser un intèrpret inspirat o simplement un alumne entusiasta de les arts escèniques.',
    note: 'En adquirir aquesta Habilitat reps una Especialitat gratuïta.',
    dots: [
      'Ets l’ànima de la festa, però no t’atreviries a portar el teu número a un escenari.',
      'Has actuat davant de públic i les crítiques van ser dispars: uns t’adoren i altres et detesten.',
      'Ets un alumne expert en l’art escènic que hagis triat.',
      'Executes el teu art de manera impressionant, superant els Toreador en tots els aspectes.',
      'Improvisar no et fa cap por: cada nit, un públic diferent i un espectacle diferent.',
    ],
    specialties: ['Cant', 'Comèdia', 'Dansa', 'Drama', 'Guitarra', 'Parlar en Públic', 'Instruments de Vent', 'Percussió', 'Poesia', 'Rap', 'Teclats', 'Violí'],
    combos: {
      'carisma':      'Captivar un públic.',
      'destreza':     'Executar una peça musical.',
      'manipulacion': 'Interpretar un personatge per enganyar.',
    },
  },

  'intimidacion': {
    name: 'Intimidació',
    description: 'Intimidació és el poder d’acovardir, coaccionar, amenaçar i posar-te dur amb algú per assolir una victòria social. Els vampirs que hi recorren no dubten a esclafar les voluntats —i de vegades els dits— dels seus enemics.',
    dots: [
      'Deixes anar un insult mordaç amb eficàcia.',
      'T’obres pas per la força entre la majoria dels humans sense dificultat.',
      'La teva fanfarroneria i la teva crueltat t’han llaurat una reputació.',
      'Estàs molt per damunt de les simples amenaces físiques.',
      'Fins i tot els altres Vàstags fan un pas enrere si tu en fas un endavant.',
    ],
    specialties: ['Amenaces Velades', 'Coacció Física', 'Extorsió', 'Insults', 'Interrogatori', 'Mirades Intimidatòries'],
    combos: {
      'fuerza':       'Amenaçar mitjançant força física.',
      'manipulacion': 'Amenaçar amb xantatge.',
      'carisma':      'Intimidar mitjançant presència personal.',
    },
  },

  'liderazgo': {
    name: 'Lideratge',
    description: 'Lideratge et dona la capacitat d’encapçalar una multitud, comandar un destacament, aixecar la moral dels teus seguidors o sufocar una rebel·lió. Un Príncep o un Baró forts necessiten Lideratge, o s’arrisquen a perdre el tron.',
    dots: [
      'Has dirigit clubs informals i saps organitzar Vàstags d’idees afins.',
      'La teva veu se sent a les reunions i fins i tot els teus superiors escolten de tant en tant.',
      'Prens el comandament al camp de batalla i condueixes els teus soldats cap a la mort.',
      'Inspires els ferits i moribunds perquè actuïn, mentre hi siguis per guiar-los.',
      'Les teves paraules omplen el cor dels vampirs amb prou força per fer-los sentir vius un altre cop.',
    ],
    specialties: ['Dinàmiques de Grup', 'Inspiració', 'Ramat de Guerra', 'Comandament', 'Oratòria', 'Praxi'],
    combos: {
      'carisma':      'Inspirar un grup.',
      'manipulacion': 'Aconseguir que altres facin el que vols.',
      'inteligencia': 'Coordinar una estratègia complexa.',
    },
  },

  'perspicacia': {
    name: 'Perspicàcia',
    description: 'Perspicàcia et dona la capacitat de llegir el llenguatge corporal, captar senyals subtils en l’expressió i el to, i separar les veritats de les mentides. També et permet percebre i comprendre la motivació que hi ha darrere dels actes aliens.',
    dots: [
      'Veus més enllà de les amenaces buides.',
      'Captes les emocions ocultes dels humans i de vegades fins i tot les dels Vàstags.',
      'Ofereixes psicoteràpia amb més eficàcia encara que qui no pretén berenar-se el seu pacient.',
      'Ets un detector de mentides no-mort. Només els millors estafadors aconsegueixen colar-te’n una.',
      'La gent pot ser un llibre de sang, però imprès en lletra ben gran i fàcil de llegir.',
    ],
    specialties: ['Ambicions', 'Desitjos', 'Detectar Mentides', 'Empatia', 'Fòbies', 'Interrogatori', 'Motivacions', 'Vicis'],
    combos: {
      'astucia':      'Detectar que algú menteix.',
      'inteligencia': 'Analitzar les motivacions d’algú.',
      'resolucion':   'Observar pacientment fins a descobrir alguna cosa.',
    },
  },

  'persuasion': {
    name: 'Persuasió',
    description: 'Recorre a Persuasió quan vulguis convèncer algú que saps què li convé i que una sola mossegada no té importància. Un persuasor hàbil juga amb les emocions de les seves víctimes i apel·la a la raó dels seus iguals. Serveix tant als tribunals legals com als del Príncep, en consells d’administració, bars i alcoves.',
    dots: [
      'Li véns alguna cosa a un comprador que ja venia motivat.',
      'Sempre aconsegueixes un descompte o surts ben parat de l’últim rumor.',
      'Sempre trobes una solució de compromís en qualsevol conflicte.',
      'L’altra part comença a buscar un acord així que apareixes al tribunal, sigui mortal o vampíric.',
      'Podries ser l’autèntic diable de llengua de plata.',
    ],
    specialties: ['Argumentació Legal', 'Xerrameca', 'Interrogatori', 'Negociació', 'Regatejar', 'Retòrica'],
    combos: {
      'carisma':      'Convèncer mitjançant simpatia.',
      'manipulacion': 'Convèncer mitjançant engany.',
      'inteligencia': 'Convèncer mitjançant arguments.',
    },
  },

  'subterfugio': {
    name: 'Subterfugi',
    description: 'Subterfugi és l’art de mentir de manera convincent, amollar una bola i donar bones excuses per a males accions. Defineix el teu talent per a la intriga, el secret i la duplicitat. També s’empra per seduir i per imitar el comportament dels mortals.',
    dots: [
      'Expliques mentides senzilles i creïbles.',
      'Enganyes els més càndids, joves i grans, perquè et lliurin les seves coses.',
      'Operes en diversos nivells alhora, amollant mentides que vols que es descobreixin per apuntalar-ne d’altres.',
      'Aguantes indefinidament com a infiltrat: un agent doble perfecte. Pot ser que ho siguis!',
      'Ningú no creu que tinguis ni un sol punt de Subterfugi.',
    ],
    specialties: ['Blufs', 'Fingir Mortalitat', 'Innocència', 'La Gran Estafa', 'Mentides Impecables', 'Seducció'],
    combos: {
      'manipulacion': 'Mentir per aconseguir alguna cosa.',
      'carisma':      'Enganyar mitjançant encant.',
      'astucia':      'Inventar una mentida sobre la marxa.',
    },
  },

  'trato-con-animales': {
    name: 'Tracte amb Animals',
    aka: ['Animals'],
    description: 'Tracte amb Animals et permet acovardir i calmar els animals, i fins i tot guanyar-te la seva amistat. Amb ella predius com reaccionarà un animal davant d’una situació concreta, ensinistres un de domesticat o intentes apaivagar o enfurismar-ne d’altres. Sense aquesta Habilitat, gairebé totes les criatures eviten els vampirs o es tornen agressives amb ells.',
    dots: [
      'Els animals s’aparten de tu amb timidesa, però ni surten corrents ni intenten mossegar-te.',
      'Al teu voltant es mostren dòcils i actuen com si no hi fossis, llevat que hi entaulis una relació.',
      'Et tracten com si fossis un amo càlid i amistós, mentre no els provoquis.',
      'Atreus els animals cap a tu. Pocs dels que t’ataquen mantenen l’agressió.',
      'Perceps els sentiments i pensaments dels animals, i ells els teus, i actuen en conseqüència.',
    ],
    specialties: ['Apaivagar', 'Cavalls', 'Falconeria', 'Entrenament d’Atac', 'Entrenament Especialista', 'Gats', 'Llops', 'Gossos', 'Rates', 'Serps'],
    combos: {
      'carisma':      'Calmar un animal.',
      'manipulacion': 'Aconseguir que un animal faci alguna cosa.',
      'inteligencia': 'Comprendre el comportament d’un animal.',
    },
  },

  // ── HABILITATS MENTALS ───────────────────────────────────────────────────────

  'academicismo': {
    name: 'Academicisme',
    description: 'Academicisme reflecteix la comprensió, l’educació superior i la capacitat d’investigar en humanitats i arts liberals. L’estudi de la història, per exemple, difícilment és «només acadèmic» quan els teus enemics immortals van viure aquell període i hi van deixar la seva empremta.',
    note: 'En adquirir aquesta Habilitat obtens una Especialitat gratuïta. Per a les llengües estrangeres s’empra el Mèrit Lingüística.',
    dots: [
      'Educació primària i secundària bàsica; classes nocturnes en un centre de formació superior.',
      'Educació universitària bàsica, o la tutela d’un mentor mediocre; una carrera de quatre anys.',
      'Estudis universitaris avançats o una tutela personal acurada; una carrera brillant, un doctorat.',
      'Estudis especialitzats més enllà de la universitat, en matèries que molt pocs comprenen.',
      'Erudició refinada i avançada; és probable que et busquin per demanar-te guia i consell.',
    ],
    specialties: ['Arquitectura', 'Documentació', 'Ensenyament', 'Filosofia', 'Història', 'Història de l’Art', 'Literatura', 'Periodisme', 'Teologia'],
    combos: {
      'inteligencia': 'Recordar informació històrica.',
      'astucia':      'Relacionar dades de fonts diferents.',
      'resolucion':   'Resoldre un problema acadèmic complex.',
    },
  },

  'ciencias': {
    name: 'Ciències',
    aka: ['Ciència'],
    description: 'Ciències és un camp amplíssim que va dels principis bàsics de la vida a la comprensió de l’entropia universal. Les lleis de la ciència governen el món dels mortals, i els vampirs que aspiren a governar aquest món les han d’estudiar.',
    note: 'Els seus nivells són equiparables als d’Academicisme, des de «alguns estudis» fins a «erudit de fama mundial». Igual que ella, atorga una Especialitat gratuïta.',
    dots: [
      'Fas els teus primers passos i comprens els principis que hi ha rere els elements bàsics de la vida.',
      'Expliques amb precisió les teories científiques relacionades amb l’Abraçada a un altre vampir.',
      'Series un excel·lent director científic: dirigeixes un laboratori, interpretes troballes i et mantens al dia de la recerca en gairebé qualsevol camp. A més, repares equip científic.',
      'Ets expert en el teu camp i en tots els que s’hi relacionen.',
      'Pocs col·legues t’igualen, i la resta acudeix a tu a la recerca de consell.',
    ],
    specialties: ['Astronomia', 'Biologia', 'Demolicions', 'Física', 'Genètica', 'Geologia', 'Enginyeria', 'Matemàtiques', 'Química'],
    combos: {
      'inteligencia': 'Analitzar una substància o fenomen.',
      'astucia':      'Treure conclusions de dades incompletes.',
      'resolucion':   'Mantenir una recerca durant molt de temps.',
    },
  },

  'consciencia': {
    name: 'Consciència',
    aka: ['Alerta', 'Percepció'],
    description: 'Consciència governa la teva percepció. Amb ella albiraries un Fill de Haqim abans que ataqui, veuries una clau llançada a la paperera o captaries un rastre de perfum encara a l’aire.',
    dots: [
      'Sols adonar-te de quan alguna cosa està fora de lloc.',
      'Detectes un patró de conducta o un comportament erràtic en algú.',
      'Veus més enllà de la majoria de les disfresses i perceps perills o pistes ocultes.',
      'Encara que estiguis distret, poques coses escapen a la teva percepció.',
      'Els teus sentits són els d’un animal salvatge.',
    ],
    specialties: ['Camuflatge', 'Emboscades', 'Entorn Natural', 'Instints', 'Objectes Ocults', 'Oïda', 'Olfacte', 'Trampes', 'Vista'],
    combos: {
      'astucia':      'Detectar que algú s’acosta o notar que alguna cosa sobrenatural és a prop.',
      'resolucion':   'Mantenir una vigilància prolongada malgrat les distraccions.',
      'inteligencia': 'Interpretar detalls estranys de l’entorn i què significa una anomalia.',
    },
  },

  'finanzas': {
    name: 'Finances',
    description: 'Finances et permet identificar les tendències del mercat, invertir amb encert, manipular accions i anticipar una caiguda borsària. També serveix per taxar —i rastrejar— la riquesa aliena i tancar acords econòmics. En general pots valorar obres d’art, propietats i qualsevol altre bé que no tingui un origen delictiu. Els Ventrue aprecien aquesta Habilitat més que algunes Disciplines.',
    dots: [
      'Portes un negoci i te n’encarregues dels llibres.',
      'Dirigeixes una divisió corporativa o una sucursal bancària, i presentes declaracions de la renda ben plausibles.',
      'El comerç internacional t’ha convertit en un bon corredor de borsa en mercats estrangers.',
      'La banca d’inversió segueix el teu criteri financer, i cometre un frau no et suposa cap dificultat.',
      'Aconsegueixes que els diners facin qualsevol cosa, fins i tot enganxar-se a les teves butxaques o esclafar nacions.',
    ],
    specialties: ['Art', 'Bancs', 'Blanqueig de Diners', 'Comptabilitat Forense', 'Finances Corporatives', 'Manipulació de Divises', 'Mercat d’Accions', 'Mercat Negre', 'Valoració Estimada'],
    combos: {
      'inteligencia': 'Analitzar comptes o inversions.',
      'astucia':      'Detectar ràpidament una oportunitat.',
      'manipulacion': 'Convèncer algú per invertir.',
    },
  },

  'investigacion': {
    name: 'Investigació',
    description: 'Investigació et permet resoldre casos per mitjans mundans o misteriosos, trobar pistes, interpretar-les i seguir el rastre de persones desaparegudes. Els vampirs la consideren especialment útil quan se’ls escapa un recipient.',
    dots: [
      'T’encanten les bones novel·les de misteri i t’imagines com a detectiu aficionat.',
      'Domines la criminologia bàsica i coneixes els mètodes característics dels murris locals.',
      'Ets, o podries ser, detectiu professional. Res no escapa a la teva atenció a l’escena d’un crim.',
      'El Xèrif recorre a tu quan faccions desconegudes amenacen la seguretat del domini.',
      'Prepares endevinalles per als altres i portes una existència enigmàtica que molt pocs desentranyen.',
    ],
    specialties: ['Anàlisi de Trànsit', 'Assassinats', 'Ciència Forense', 'Criminologia', 'Deducció', 'Desapareguts', 'Misteris Paranormals'],
    combos: {
      'inteligencia': 'Analitzar una escena del crim.',
      'astucia':      'Connectar pistes aparentment inconnexes.',
      'resolucion':   'Seguir una investigació durant dies.',
    },
  },

  'medicina': {
    name: 'Medicina',
    description: 'Medicina et permet recompondre les persones danyades i diagnosticar les causes de mort o malaltia d’una víctima. També serveix per manejar equip mèdic, receptar fàrmacs i reduir —o augmentar— el flux sanguini.',
    note: 'És l’Habilitat amb què els personatges curen dany agreujat a la Salut dels mortals.',
    dots: [
      'Tens nocions d’anatomia bàsica i distingeixes la circulació venosa de l’arterial. Practiques RCP i primers auxilis.',
      'Tractes sense dificultat urgències i malalties menors, i emets un diagnòstic.',
      'La teva formació et permet fer operacions majors i tractar ferides greus.',
      'Diagnostiques totes les malalties llevat de les més rares.',
      'Ets un metge expert de renom i et reclamen tant mortals com immortals.',
    ],
    specialties: ['Cirurgia', 'Farmàcia', 'Flebotomia', 'Hematologia', 'Patologia', 'Primers Auxilis', 'Urgències', 'Veterinària'],
    combos: {
      'inteligencia': 'Diagnosticar una malaltia.',
      'destreza':     'Fer una operació.',
      'resolucion':   'Atendre una emergència durant hores.',
    },
  },

  'ocultismo': {
    name: 'Ocultisme',
    description: 'Ocultisme representa el coneixement del món místic, i va des dels ritus i pràctiques de maçons i rosacreus fins als de nodistes i mags veritables. Reconeixes signes ocultistes i pràctiques de màgia popular, funcionin o no.',
    dots: [
      'Coneixes les llegendes de Caïm i els Antediluvians, i pot ser que hagis llegit el Llibre de Nod.',
      'Separes la veritat de les bajanades de l’ocultisme popular.',
      'Tens experiència de primera mà amb alguna cosa inexplicable, fins i tot per al criteri dels Vàstags.',
      'Recitaries els noms de gairebé tots els Antediluvians i fins i tot comprendries un ritual Tremere.',
      'Els Tremere i els Fills de Haqim et consulten sobre coneixements arcans.',
    ],
    specialties: ['Alquímia', 'Fantasmes', 'Grimoris', 'Fades', 'Homes Llop', 'Infernalisme', 'Magi', 'Màgia de Sang', 'Necromància', 'Nodisme', 'Parapsicologia', 'Vudú'],
    combos: {
      'inteligencia': 'Reconèixer un ritual o criatura.',
      'astucia':      'Interpretar pistes sobre alguna cosa sobrenatural.',
      'resolucion':   'Investigar un misteri durant molt de temps.',
    },
  },

  'politica': {
    name: 'Política',
    description: 'Política abasta la diplomàcia i la burocràcia, tant humanes com vampíriques. Treballes amb el govern municipal —i potser hi exerceixes pressió— i pot ser que també amb instàncies superiors. Entre els Vàstags coneixes les novetats internes, quina Secta domina a cada lloc, qui està en guerra amb qui i on són enterrats els cossos. Literalment.',
    dots: [
      'Segueixes la política mortal del teu regnum i saps almenys el que expliquen els Antics.',
      'Exerceixes influència a nivell local, o coneixes qui pot exercir-la.',
      'Dirigiries campanyes o partits polítics, o armaries enrenou a la teva Secta com a jove promesa.',
      'Saps qui ostenta el poder real a la teva àrea, tant entre els vius com entre els no-morts.',
      'Endevinaries qui són els membres anònims del Cercle Interior de la Camarilla.',
    ],
    specialties: ['Anarquistes', 'Camarilla', 'Clan', 'Diplomàcia', 'Govern Municipal', 'Mitjans de Comunicació', 'Política Estatal', 'Política Nacional'],
    combos: {
      'inteligencia': 'Conèixer les estructures de poder.',
      'manipulacion': 'Manipular un polític.',
      'astucia':      'Saber qui té realment el poder.',
    },
  },

  'tecnologia': {
    name: 'Tecnologia',
    description: 'Com a Habilitat, Tecnologia és un blanc mòbil: regeix l’ús i la comprensió d’aquells «avenços tècnics que a la majoria dels vampirs els resulten desconcertants». El 1870 haurien estat les màquines de vapor i l’electricitat; avui són els ordinadors i els sistemes informàtics, que per descomptat ja s’encarreguen de gairebé tot.',
    dots: [
      'Saps millorar un PC domèstic i protegir-lo dels virus.',
      'Ocultes la teva IP, pilotes drons i falsifiques una fotografia digital.',
      'Crees i alliberes els teus propis virus sense témer que et localitzin.',
      'El Príncep et podria trucar en persona perquè t’ocupis de la ciberseguretat del seu domini.',
      'A internet ningú no sap que ets un vampir, ni tan sols que existeixes.',
    ],
    specialties: ['Artilleria', 'Construcció d’Ordinadors', 'Escriure Codi', 'Hackejar', 'Mineria de Dades', 'Xarxes', 'Sistemes de Vigilància', 'Telèfons'],
    combos: {
      'inteligencia': 'Programar o comprendre un sistema.',
      'destreza':     'Reparar maquinari.',
      'astucia':      'Improvisar una solució tècnica.',
    },
  },

}
