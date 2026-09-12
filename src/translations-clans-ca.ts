// Catalan translations overlay for V5 clan data
// Applied over the Spanish base data in src/clans.ts when language is Catalan

import type { ClanIconType } from './types'
import type { ClanTranslation } from './translations-clans-en'

export const CLANS_CA: Record<ClanIconType, ClanTranslation> = {

  'banu-haqim': {
    name: 'Banu Haqim',
    nickname: 'Els Jutges',
    verbs: ['adjudicar', 'castigar', 'disciplinar', 'executar', 'jutjar'],
    description: 'Guerrers i erudits a parts iguals, els Banu Haqim jutgen els seus amb un rasant que la majoria de Vàstags considera intolerable. Durant segles van viure apartats de la Camarilla, venent els seus serveis com a assassins; avui molts han jurat lleialtat a la Torre d\'Ivori sense renunciar a la seva set de justícia. La seva Sang els empeny a beure de qui trenca les seves Conviccions.',
    bane: {
      name: 'Addicció a la Sang',
      description: 'Quan un Banu Haqim sacia com a mínim un nivell d\'Ànsia amb la sang d\'un altre vampir, ha de superar una tirada de Frenesí de fam a dificultat 2 + Severitat de la Prohibició. Si falla, s\'atipa de vitae i s\'obre la porta a un possible Amarant.',
    },
    compulsion: {
      name: 'Judici',
      description: 'El vampir se sent impel·lit a castigar qui obra malament: ha de saciar com a mínim un nivell d\'Ànsia de qualsevol que actuï contra les seves pròpies Conviccions. Mentre no ho faci pateix −3 daus en totes les reserves, fins que ho aconsegueixi o s\'acabi l\'escena.',
    },
  },

  brujah: {
    name: 'Brujah',
    nickname: 'Els Rebels',
    verbs: ['lluitar', 'oposar', 'protestar', 'rebel·lar-se', 'resistir'],
    description: 'Idealistes amb els ullals serrats. Els Brujah van ser filòsofs i guerrers-poetes abans de convertir-se en el motor de gairebé totes les revoltes de la nit. Cremen de ràbia contra qualsevol autoritat que considerin injusta, i aquesta mateixa ràbia és el que els consumeix: pocs clans tenen la Bèstia tan a flor de pell.',
    bane: {
      name: 'Temperament violent',
      description: 'La fúria bull sempre sota la superfície. Resta tants daus com la Severitat de la Prohibició a qualsevol tirada per resistir un Frenesí de fúria.',
    },
    compulsion: {
      name: 'Rebel·lió',
      description: 'El Brujah ha de desafiar una figura d\'autoritat, contradir el que s\'espera d\'ell o fer canviar d\'opinió algú. Fins que no ho aconsegueixi pateix −2 daus en totes les reserves.',
    },
  },

  gangrel: {
    name: 'Gangrel',
    nickname: 'Les Bèsties',
    verbs: ['aguaitar', 'aguantar', 'canviar de forma', 'lluitar', 'rondar'],
    description: 'Nòmades, supervivents i solitaris. Els Gangrel són més a prop de la Bèstia que cap altre Vàstag i no ho consideren una maledicció sinó un avantatge: canvien de forma, corren amb els llops i dormen sota terra. Com més vells es fan, menys els queda d\'humà.',
    bane: {
      name: 'Trets bestials',
      description: 'En entrar en Frenesí, el Gangrel guanya tants trets animals com la seva Severitat de la Prohibició. Cada tret resta 1 punt a un Atribut i perdura fins la nit següent. Cavalcar l\'Onada limita la manifestació a un únic tret i una sola pèrdua.',
    },
    compulsion: {
      name: 'Impulsos animals',
      description: 'El vampir retrocedeix a un estat animal: durant una escena pateix −3 daus en tota tirada que faci servir Manipulació o Intel·ligència i només es pot expressar amb frases d\'una paraula.',
    },
  },

  hecata: {
    name: 'Hécata',
    nickname: 'Els Necromants',
    verbs: ['documentar', 'investigar', 'invocar i lligar fantasmes', 'ressuscitar', 'vigilar'],
    description: 'La gran família de la mort. Els Hécata apleguen els antics Giovanni, Samedi, Nagaraja i altres estirps necromàntiques sota un mateix cognom i un mateix negoci: la mort, en totes les seves formes rendibles. Tracten amb fantasmes com qui tracta amb proveïdors i porten les baralles familiars amb segles de paciència.',
    bane: {
      name: 'Bes dolorós',
      description: 'El seu Bes no produeix èxtasi, sinó un dolor atroç. Els Hécata només es poden alimentar causant ferides i pèrdua de sang; un mortal no disposat que pugui escapar ho intentarà, i els vampirs mossegats per ells s\'arrisquen a un Frenesí de terror.',
    },
    compulsion: {
      name: 'Morbositat',
      description: 'El vampir necessita moure alguna cosa d\'un costat a l\'altre de la frontera entre la vida i la mort. Qualsevol acció que no busqui acabar amb alguna cosa o retornar-la a l\'existència pateix −2 daus.',
    },
  },

  lasombra: {
    name: 'Lasombra',
    nickname: 'Els Manipuladors',
    verbs: ['fer trampes', 'assolir', 'manar', 'moure els fils', 'perseverar'],
    description: 'Depredadors de sang noble que consideren la foscor el seu dret de naixement. Pilars del Sabbat durant segles, molts Lasombra han desertat en massa cap a la Camarilla, on la seva ambició i el seu menyspreu per la feblesa continuen intactes. Per a ells el fi justifica qualsevol mitjà i el fracàs és imperdonable.',
    bane: {
      name: 'Imatge distorsionada',
      description: 'El seu reflex i la seva imatge enregistrada apareixen retorçats. Les tirades de Tecnologia per interactuar per mitjans electrònics tenen una dificultat de 2 + Severitat de la Prohibició, i els sistemes de detecció electrònics pateixen una penalització igual a aquesta Severitat en intentar registrar-los.',
    },
    compulsion: {
      name: 'Crueltat',
      description: 'La propera vegada que el vampir falli una acció, pateix −2 daus en totes les tirades fins que aconsegueixi superar un nou intent d\'aquesta mateixa acció.',
    },
  },

  malkavian: {
    name: 'Malkavian',
    nickname: 'Els Oracles',
    verbs: ['endevinar', 'comprendre', 'confondre', 'percebre', 'predir'],
    description: 'Tot Malkavian està trencat, i per aquesta escletxa s\'hi cola alguna cosa que els altres no veuen. La seva bogeria no és cap ornament: és el preu i la font d\'una clarividència que voreja el profètic. Uns senten la Teranyina de Bogeria que uneix el clan, d\'altres parlen amb endevinalles que només tenen sentit setmanes després.',
    bane: {
      name: 'Perspectiva fracturada',
      description: 'Cada Malkavian arrossega una aflicció mental concreta, acordada amb el Narrador. Quan pateix un Fracàs Bestial o una Compulsió, aquesta aflicció s\'imposa: durant tota l\'escena resta la seva Severitat de la Prohibició a una categoria de reserves (Físiques, Socials o Mentals).',
    },
    compulsion: {
      name: 'Deliri',
      description: 'Durant una escena, el vampir pateix −2 daus en les tirades que facin servir Destresa, Manipulació, Compostura o Astúcia. A canvi, mentre dura resisteix millor el Frenesí de terror.',
    },
  },

  ministry: {
    name: 'El Ministeri',
    nickname: 'Els Temptadors',
    verbs: ['conrear', 'enganyar', 'influir', 'negociar', 'persuadir'],
    description: 'Abans coneguts com els Seguidors de Set, els Ministres prediquen l\'alliberament a través de la transgressió: troben la cadena que lliga una persona i l\'ajuden a trencar-la, sabent que qui trenca una cadena sol acabar encadenat a ells. Es mouen entre sectes, cultes i vicis amb paciència de segles.',
    bane: {
      name: 'Avorrir la llum',
      description: 'Exposat a una il·luminació directa, natural o artificial, el Ministre pateix una penalització igual a la seva Severitat de la Prohibició en totes les reserves de daus. A més, la llum del sol li infligeix dany agreujat addicional.',
    },
    compulsion: {
      name: 'Transgressió',
      description: 'El vampir ha d\'induir algú —o ell mateix— a trencar una Convicció. Mentrestant pateix −2 daus en tota reserva que no estigui relacionada amb la temptació. Acaba quan provoca com a mínim una Taca.',
    },
  },

  nosferatu: {
    name: 'Nosferatu',
    nickname: 'Les Monstruositats',
    verbs: ['aguaitar', 'espiar', 'investigar', 'observar', 'ocultar'],
    description: 'L\'Abraçada els deforma fins a fer-los irreconeixibles, i aquesta condemna els ha convertit en els millors espies de la nit. Viuen en túnels i clavegueres, es mouen per on ningú no mira i comercien amb l\'única cosa que mai no perd valor: la informació. Cap príncep no està tan ben informat com el que té un Nosferatu al seu servei.',
    bane: {
      name: 'Repulsivitat',
      description: 'El Nosferatu és monstruós a la vista i no pot passar per humà: arrossega permanentment el Defecte Repulsiu. Qualsevol intent de disfressar-se o aparentar normalitat pateix una penalització igual a la seva Severitat de la Prohibició.',
    },
    compulsion: {
      name: 'Curiositat malsana',
      description: 'El vampir necessita fer-se amb un secret que encara no coneix. Tota acció que no l\'acosti a aquest secret pateix −2 daus.',
    },
  },

  ravnos: {
    name: 'Ravnos',
    nickname: 'Els Nòmades',
    verbs: ['eludir', 'entabanar', 'enganyar', 'fanfarronejar', 'vagarejar'],
    description: 'Supervivents d\'una catàstrofe que gairebé va esborrar el clan de la faç de la terra. Els Ravnos no poden arrelar: la Sang els castiga si dormen dues vegades al mateix lloc, així que viuen en moviment perpetu, viatjant lleugers i resolent els problemes amb astúcia, engany i una temeritat que voreja el suïcidi.',
    bane: {
      name: 'Maleïts',
      description: 'Si el Ravnos dorm durant el dia en un mateix lloc més d\'una vegada en set nits, tira tants daus com la seva Severitat de la Prohibició: per cada 10 que obtingui pateix 1 punt de dany agreujat.',
    },
    compulsion: {
      name: 'Temptar el destí',
      description: 'El vampir ha d\'afrontar el problema que tingui al davant per la via més temerària i perillosa possible. Qualsevol solució més prudent pateix −2 daus, fins a resoldre el problema o fer-lo impossible.',
    },
  },

  salubri: {
    name: 'Salubri',
    nickname: 'Els Fugitius',
    verbs: ['ocultar', 'redimir', 'resistir', 'sobreviure'],
    description: 'Un clan gairebé extingit i calumniat fins al punt que la majoria de Vàstags els creu una llegenda. Els Salubri porten un tercer ull al front i una vocació de guaridors o guerrers-guardians que els enfronta a tot el que la Camarilla representa. En queden tan pocs que cadascun és una presa cobejada.',
    bane: {
      name: 'Caçats',
      description: 'La seva vitae és addictiva: qualsevol vampir que no sigui Salubri i begui d\'ells ha de superar una tirada de Frenesí de fam o continuar alimentant-se sense control. A més, el seu tercer ull plora sang en activar Disciplines, cosa que pot desfermar el Frenesí dels famolencs que hi hagi a prop.',
    },
    compulsion: {
      name: 'Empatia afectiva',
      description: 'El patiment aliè el desborda. Qualsevol acció que no vagi dirigida a alleujar el dolor d\'aquella persona pateix −2 daus.',
    },
  },

  toreador: {
    name: 'Toreador',
    nickname: 'Els Seductors',
    verbs: ['encantar', 'interpretar', 'obsessionar', 'seduir', 'temptar'],
    description: 'El clan de la bellesa i de qui la persegueix sense poder crear-la ja. Mecenes, artistes i dives, els Toreador s\'envolten de tot allò exquisit perquè l\'eternitat sense això els resulta insuportable. El seu refinament és autèntic i la seva crueltat també: poques coses són tan fredes com un Toreador que s\'ha avorrit de tu.',
    bane: {
      name: 'Fixació estètica',
      description: 'La lletjor els afebleix. En un entorn que no resulti bonic al seu gust, les seves reserves de Disciplines pateixen una penalització igual a la seva Severitat de la Prohibició.',
    },
    compulsion: {
      name: 'Obsessió',
      description: 'Alguna cosa bonica li captura del tot l\'atenció: no pot parlar de res més i qualsevol acció aliena a aquest objecte pateix −2 daus, fins que desapareix de la seva vista o s\'acaba l\'escena.',
    },
  },

  tremere: {
    name: 'Tremere',
    nickname: 'Els Bruixots',
    verbs: ['aprendre', 'estudiar', 'perfeccionar', 'fer rituals i bruixeries', 'tramar'],
    description: 'Mags mortals que van robar la immortalitat i ho van pagar car. Durant segles la seva Piràmide va ser l\'estructura més disciplinada de la Camarilla, fins que la destrucció de la seva Casa Capitular de Viena la va fer miques. Avui són cases rivals de bruixots sense un lideratge clar, i això els ha tornat més perillosos, no pas menys.',
    bane: {
      name: 'Sang deficient',
      description: 'La seva vitae ha perdut la capacitat d\'esclavitzar altres Vàstags: un Tremere no pot crear Vincles de Sang amb altres vampirs, tot i que sí que pot ser vinculat. Per vincular un mortal necessita tants glops addicionals com la seva Severitat de la Prohibició.',
    },
    compulsion: {
      name: 'Perfeccionisme',
      description: 'Res que no sigui excel·lent no li val. Pateix −2 daus en totes les reserves; si repeteix l\'acció la penalització baixa a −1, i desapareix al segon intent repetit. Acaba amb un èxit crític en una Habilitat o en acabar l\'escena.',
    },
  },

  tzimisce: {
    name: 'Tzimisce',
    nickname: 'Els Dracs',
    verbs: ['controlar', 'modificar', 'posseir', 'prendre', 'transfigurar'],
    description: 'Senyors feudals de la vella Europa que modelen la carn com si fos argila. Els Tzimisce són territorials fins al patològic: necessiten posseir —una terra, un llinatge, una causa— i consideren el cos, propi i aliè, un material més sobre el qual imposar la seva voluntat. La seva cortesia és exquisida i la seva crueltat, artesanal.',
    bane: {
      name: 'Confinats',
      description: 'Cada Tzimisce tria alguna cosa a la qual queda lligat: un lloc, un grup de persones o alguna cosa més abstracta. Ha de passar el dia envoltat d\'allò que custodia; si no ho fa, en despertar pateix dany agreujat de Força de Voluntat.',
    },
    compulsion: {
      name: 'Avarícia',
      description: 'El vampir s\'ha d\'apoderar d\'alguna cosa present a l\'escena. Qualsevol acció que no persegueixi aquest fi pateix −2 daus.',
    },
  },

  ventrue: {
    name: 'Ventrue',
    nickname: 'Els Aristòcrates',
    verbs: ['governar', 'influir', 'liderar', 'regir', 'resistir'],
    description: 'Els Reis Mercaders es consideren els líders nats de l\'estirp, i fa tant de temps que ho repeteixen que en bona mesura han acabat tenint raó: la majoria de prínceps de la Camarilla són Ventrue. Governen amb diners, tradició i una seguretat en ells mateixos inquebrantable, fins i tot quan s\'equivoquen.',
    bane: {
      name: 'Gustos refinats',
      description: 'Només es pot alimentar d\'un tipus molt concret de mortal. Si beu la sang d\'algú fora d\'aquesta preferència, ha de gastar tants punts de Força de Voluntat com la seva Severitat de la Prohibició o vomitarà la sang sense saciar gens la seva Ànsia.',
    },
    compulsion: {
      name: 'Arrogància',
      description: 'Necessita que algú obeeixi una ordre seva, i ho ha d\'aconseguir sense recórrer a poders sobrenaturals com Dominació. Fins que no ho aconsegueix pateix −2 daus en totes les reserves.',
    },
  },
}
