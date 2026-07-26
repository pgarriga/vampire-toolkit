import type { DisciplinesData } from './types'

export const DISCIPLINES_DATA: DisciplinesData =
{
  "disciplines": [
    {
      "id": "animalism",
      "name": "Animalismo",
      "description": "Disciplina que permite al vampiro conectar con los animales y con la Bestia interior. Los maestros de Animalismo se hacen uno con sus Bestias y pueden controlar animales, suprimir la Bestia de otros vampiros y más.",
      "tipo": "Mental",
      "amenaza": "Baja a media. Aunque hablar con animales puede parecer excéntrico, sólo las aplicaciones más violentas de la Disciplina provocan más que unas pocas cejas arqueadas.",
      "resonancia": "Sangre animal, preferentemente salvaje.",
      "powers": [
        {
          "id": "sense-the-beast",
          "name": "Sentir a la Bestia",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "Resolución + Animalismo contra Compostura + Subterfugio",
          "duration": "Pasiva",
          "description": "Detecta la naturaleza depredadora y el nivel de hostilidad de cualquier criatura cercana. Identifica vampiros, hombres lobo y otros sobrenaturales. Se puede usar activa o pasivamente (avisa de intenciones agresivas). Con victoria crítica revela tipo exacto y nivel de Ansia/Rabia."
        },
        {
          "id": "bond-famulus",
          "name": "Vínculo con Famulus",
          "level": 1,
          "cost": "El animal debe ser alimentado con la Sangre del usuario durante tres noches distintas, cada una de las cuales requiere un control de Enardecimiento por parte del usuario.",
          "dicePool": "Carisma + Trato con Animales",
          "duration": "Sólo la muerte libera a un famulus una vez Vinculado.",
          "description": "Crea un vínculo mental permanente con un animal, convirtiéndolo en familiar (famulus). Solo puede tenerse uno. El famulus no envejece mientras reciba Sangre y puede usarse sin coste con Susurros Salvajes y Comunión de Espíritus."
        },
        {
          "id": "feral-whispers",
          "name": "Susurros Salvajes",
          "level": 2,
          "cost": "Un control de Enardecimiento por tipo de animal elegido para la escena. Sin coste si se usa sobre el famulus.",
          "dicePool": "Manipulación + Animalismo, Carisma + Animalismo",
          "duration": "Una escena",
          "description": "Comunicación bidireccional con animales e invocación de los mismos. Dificultad según tarea (ejemplo: vigilar un parque dif. 3, defender un lugar con la vida dif. 6). El margen en la invocación determina la cantidad de animales acudidos."
        },
        {
          "id": "unliving-hive",
          "name": "Colmena No-Muerta",
          "level": 3,
          "cost": "Sin coste adicional",
          "dicePool": "N/A",
          "duration": "Pasiva",
          "description": "(Amalgama: Ofuscación 2) Extiende todos los poderes de Animalismo a enjambres de insectos. Puede vincularse como famulus y anidar dentro del propio cuerpo del vampiro."
        },
        {
          "id": "quell-the-beast",
          "name": "Reprimir a la Bestia",
          "level": 3,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Carisma + Animalismo contra Resistencia + Resolución",
          "duration": "Una escena o tantos turnos como el margen de victoria +1",
          "description": "Con una victoria contra un mortal, lo deja apático e incapaz de actuar salvo para sobrevivir. Contra un vampiro, evita que ejecute Arrebato de Sangre y no obtiene críticos conflictivos. Una victoria crítica contra un vampiro pone fin a su Frenesí."
        },
        {
          "id": "animal-succulence",
          "name": "Suculencia Animal",
          "level": 3,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Pasiva",
          "description": "Alimentarse de animales sacia 1 punto extra de Ansia, y la Potencia de Sangre cuenta como 2 niveles menor para las penalizaciones. Consumir el propio famulus sacia 4 puntos (nunca el último) y aumenta el Atributo más asociado al animal en +2 hasta la siguiente alimentación."
        },
        {
          "id": "subsume-the-spirit",
          "name": "Comunión de Espíritus",
          "level": 4,
          "cost": "Un control de Enardecimiento. Ninguno si se usa sobre el famulus.",
          "dicePool": "Manipulación + Animalismo",
          "duration": "Una escena / indefinidamente (con victoria crítica)",
          "description": "Transfiere la conciencia del vampiro al cuerpo de un animal, controlándolo completamente y usando todos sus sentidos. El cuerpo vampírico queda inconsciente durante la posesión."
        },
        {
          "id": "animal-dominion",
          "name": "Control Animal",
          "level": 5,
          "cost": "Dos controles de Enardecimiento",
          "dicePool": "Carisma + Animalismo",
          "duration": "Una sola escena o hasta que se cumpla la orden, lo que dure menos",
          "description": "Domina manadas o grupos enteros de animales simultáneamente como si fueran una sola entidad. Con victoria crítica el control es absoluto y sin tirada adicional."
        },
        {
          "id": "drawing-out-the-beast",
          "name": "Expulsar a la Bestia",
          "level": 5,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Astucia + Animalismo contra Compostura + Resolución",
          "duration": "La duración del Frenesí",
          "description": "En vez de tirar Fuerza de Voluntad para resistir un Frenesí de terror o furia, tira contra la Compostura + Resolución del objetivo. Con victoria, el objetivo entra en Frenesí en lugar del vampiro. Si falla, el vampiro entra en Frenesí igualmente. No puede transferir Frenesí de hambre."
        }
      ],
      "color": "#4a7c3f",
      "colorDark": "#2d4a25",
      "colorGlow": "rgba(74,124,63,0.4)",
      "clanes": [
        "Gangrel",
        "Nosferatu",
        "Hecata"
      ],
      "iconType": "wolf"
    },
    {
      "id": "auspex",
      "name": "Auspex",
      "description": "Entre los mayores dones y peores maldiciones de los vampiros, Auspex permite a los Vástagos discernir la verdad de la mentira, sondear las mentes de quienes los rodean y percibir la realidad a un nivel distinto que otros seres.",
      "tipo": "Mental",
      "amenaza": "Baja. Auspex nunca se manifiesta de modo visible a simple vista o causa efectos que no se pueden racionalizar.",
      "resonancia": "Flemática. Artistas (especialmente fotógrafos) y visionarios, ciertos esquizofrénicos, usuarios de sustancias psicoactivas, detectives.",
      "powers": [
        {
          "id": "heightened-senses",
          "name": "Sentidos Agudizados",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "Astucia + Resolución",
          "duration": "Hasta que se desactive",
          "description": "Añade la puntuación de Auspex como dados extra a todas las pruebas de Percepción. Ante estímulos extremos (explosiones, flashes, olores abrumadores) exige una tirada de Astucia + Resolución dif. 3 o sufre −3 dados a todas las pruebas de percepción hasta fin de escena."
        },
        {
          "id": "sense-the-unseen",
          "name": "Sentir lo Invisible",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "Astucia + Auspex o Resolución + Auspex",
          "duration": "Pasiva",
          "description": "Sintoniza los sentidos con presencias ocultas: usuarios de Ofuscación, espías con Auspex, fantasmas, rituales latentes de Hechicería de Sangre. Detección pasiva del Narrador; contra una entidad que se oculta activamente, contienda de Astucia + Auspex contra la reserva relevante del objetivo."
        },
        {
          "id": "premonition",
          "name": "Premonición",
          "level": 2,
          "cost": "Ninguno o un control de Enardecimiento",
          "dicePool": "Resolución + Auspex",
          "duration": "Pasiva",
          "description": "Recibe destellos de intuición, presentimientos o visiones sobre peligros inmediatos. El Narrador puede otorgar pistas pasivas sin que el jugador las solicite."
        },
        {
          "id": "shared-senses",
          "name": "Compartir los Sentidos",
          "level": 3,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Resolución + Auspex",
          "duration": "Una escena",
          "description": "Ve, oye y siente a través de otro mortal o vampiro. Sobre desconocidos requiere línea de visión; sobre alguien con Sangre del usuario, a distancia. La víctima puede detectarlo con Sentir lo Invisible y expulsarlo con contienda Astucia + Resolución (usuario expelido no lo intenta hasta la noche siguiente)."
        },
        {
          "id": "scry-the-soul",
          "name": "Escudriñar el Alma",
          "level": 3,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Inteligencia + Auspex contra Compostura + Subterfugio",
          "duration": "Un turno o a discreción del Narrador",
          "description": "Percibe el aura de una persona. El margen determina cuántas preguntas responde el Narrador: estado emocional, Resonancia, si es sobrenatural, si está bajo Hechicería de Sangre, si ha cometido Diablerie en el último año. Victoria crítica revela algo inesperado."
        },
        {
          "id": "spirits-touch",
          "name": "Toque del Espíritu",
          "level": 4,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Inteligencia + Auspex",
          "duration": "Un turno",
          "description": "Al tocar un objeto o lugar, revive las emociones e impresiones dejadas por quienes lo usaron (psicometría). Cuanto más intensa la emoción original, más clara la visión."
        },
        {
          "id": "clairvoyance",
          "name": "Clarividencia",
          "level": 5,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Inteligencia + Auspex",
          "duration": "Unos minutos para recopilar información, hasta una noche para vigilancia",
          "description": "Proyecta los sentidos a cualquier lugar conocido o que pueda visualizar, observando remotamente sin estar físicamente presente."
        },
        {
          "id": "possession",
          "name": "Posesión",
          "level": 5,
          "cost": "Dos Controles de Enardecimiento",
          "dicePool": "Resolución + Auspex contra Resolución + Inteligencia",
          "duration": "Hasta que termine, de modo voluntario o no",
          "description": "(Amalgama: Dominación 3) Solo sobre mortales (los Ghouls requieren estar Vinculados). Requiere contacto visual previo. El cuerpo del vampiro entra en trance similar a Letargo; el daño agravado al huésped lo rompe. Fallo total = víctima inmune a futuros intentos durante la historia."
        },
        {
          "id": "telepathy",
          "name": "Telepatía",
          "level": 5,
          "cost": "Un control de Enardecimiento (más 1 punto de Fuerza de Voluntad con los vampiros no voluntarios)",
          "dicePool": "Resolución + Auspex contra Astucia + Subterfugio",
          "duration": "Aproximadamente un minuto por control de Enardecimiento. Aumentado a una escena completa en sujetos voluntarios.",
          "description": "Lee mentes y proyecta pensamientos propios. Puede extraer recuerdos específicos, comunicarse sin palabras o detectar mentiras directamente desde la fuente."
        }
      ],
      "color": "#7b3fa0",
      "colorDark": "#4a1a70",
      "colorGlow": "rgba(123,63,160,0.4)",
      "clanes": [
        "Tremere",
        "Malkavian",
        "Toreador"
      ],
      "iconType": "eye"
    },
    {
      "id": "celerity",
      "name": "Celeridad",
      "description": "Celeridad permite que los vampiros se muevan más rápido que cualquier criatura natural. Hace más que conceder una velocidad sobrenatural: los vampiros que la emplean realmente parecen pensar casi tan rápido como actúan.",
      "tipo": "Físico",
      "amenaza": "Media-alta. La mayoría de los Poderes de Celeridad son claramente inhumanos y lo único que la salva es que son muy difíciles de captar en una película o una fotografía.",
      "resonancia": "Colérica. Miedo y terror absoluto, corredores, atletas, usuarios de alcaloides y anfetaminas, jugadores habituales de shooters en primera persona y otros juegos de acción rápida.",
      "powers": [
        {
          "id": "cats-grace",
          "name": "Gracia Felina",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Pasiva",
          "description": "Equilibrio y elegancia sobrehumanos. Nunca tropieza ni cae involuntariamente; puede moverse por superficies inestables, estrechas o resbaladizas sin dificultad."
        },
        {
          "id": "rapid-reflexes",
          "name": "Reflejos Rápidos",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Pasiva",
          "description": "No sufre penalización a las reservas de defensa por falta de cobertura contra ataques de Armas de Fuego. Además, puede realizar una acción menor (hasta 2 dados) por turno sin coste, como preparar o recargar."
        },
        {
          "id": "fleetness",
          "name": "Presteza",
          "level": 2,
          "cost": "Un control de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "Añade el valor de Celeridad como dados extra a las reservas de Destreza que no sean de combate. Una vez por turno, puede usar Destreza + Atletismo para defenderse."
        },
        {
          "id": "blink",
          "name": "Pestañeo",
          "level": 3,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Destreza + Atletismo o lo que sea necesario",
          "duration": "Un turno",
          "description": "Se desplaza en línea recta a velocidad invisible, reposicionándose en combate o escapando antes de que nadie pueda reaccionar. Los testigos solo ven el punto de inicio y de llegada."
        },
        {
          "id": "traversal",
          "name": "Recorrido",
          "level": 3,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Destreza + Atletismo",
          "duration": "Un turno",
          "description": "Corre por paredes, techos e incluso aguas si tiene carrerilla. Dificultad entre 3 (superficie inclinada con tracción) y 6 (vertical resbaladiza o agua). El margen determina la distancia alcanzada; agua más de 60 m o 30 pisos suele exceder el alcance."
        },
        {
          "id": "unerring-aim",
          "name": "Puntería Certera",
          "level": 4,
          "cost": "Un control de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Un solo ataque",
          "description": "(Amalgama: Auspex 2) El tiempo se ralentiza perceptivamente, permitiendo disparos o lanzamientos de precisión imposible incluso contra objetivos en movimiento."
        },
        {
          "id": "draught-of-elegance",
          "name": "Sorbo de Elegancia",
          "level": 4,
          "cost": "Un control de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una noche; para vampiros, hasta la siguiente alimentación o cuando alcance Ansia 5",
          "description": "La Sangre se satura con Celeridad. Beber un Enardecimiento del usuario otorga al bebedor Celeridad temporal igual a la mitad (redondeado hacia abajo) del donante, con acceso a los mismos Poderes (sin Amalgamas) hasta ese nivel."
        },
        {
          "id": "lightning-strike",
          "name": "Golpe Relámpago",
          "level": 5,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Pool de combate normal (Destreza + Atletismo o Pelea)",
          "duration": "Un solo ataque",
          "description": "Golpea a velocidad invisible antes de que el objetivo pueda reaccionar; el ataque va a dificultad 1. Un oponente con Celeridad 5 puede anular el Poder gastando su propio Enardecimiento y defenderse a la misma velocidad."
        },
        {
          "id": "split-second",
          "name": "Segundo Quebrado",
          "level": 5,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Pool de acción normal según la actividad realizada",
          "duration": "Aproximadamente una acción, a discreción del Narrador",
          "description": "Puede actuar en el mismo instante en que es atacado, interrumpiendo la acción del atacante antes de que se complete. Puede usar esta acción para atacar, escapar o cualquier acción rápida."
        }
      ],
      "color": "#1a8aaa",
      "colorDark": "#0a5a7a",
      "colorGlow": "rgba(26,138,170,0.4)",
      "clanes": [
        "Brujah",
        "Toreador",
        "Banu Haqim"
      ],
      "iconType": "bolt"
    },
    {
      "id": "dominate",
      "name": "Dominación",
      "description": "Dominación permite al vampiro controlar las acciones de los demás, manipular sus recuerdos y obligar a las criaturas vivas a realizar actos que no llevarían a cabo por propia voluntad. La mayoría de los Poderes requieren contacto visual con la víctima.",
      "tipo": "Mental",
      "amenaza": "Baja. Salvo que alguien Domine a todo un auditorio para que salte desde los acantilados de Dover, sigue siendo uno de los Poderes vampíricos más sutiles.",
      "resonancia": "Flemática. La sangre de los sumisos o los dominantes, amos y esclavos, capitanes de la industria, los poderosos, líderes de sectas y sus seguidores.",
      "powers": [
        {
          "id": "compel",
          "name": "Compeler",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "Carisma + Dominación contra Inteligencia + Resolución",
          "duration": "No más de una escena",
          "description": "Impone una orden simple e irresistible mediante contacto visual: una frase, una sola acción. La víctima la ejecuta de inmediato aunque vaya contra sus intereses."
        },
        {
          "id": "cloud-memory",
          "name": "Nublar la Memoria",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "Carisma + Dominación contra Astucia + Resolución",
          "duration": "Indefinida",
          "description": "Con la palabra «¡olvida!», hace que la víctima olvide el momento actual y los últimos minutos (suficiente para enmascarar una alimentación superficial o encuentro casual). Sin tirada contra mortal desprevenido. Si es presionada, la víctima nota que le faltan minutos."
        },
        {
          "id": "dementation",
          "name": "Dementación",
          "level": 2,
          "cost": "Un control de Enardecimiento por escena",
          "dicePool": "Manipulación + Dominación contra Compostura + Inteligencia",
          "duration": "Una escena",
          "description": "(Amalgama: Ofuscación 2) A través de conversación casual, un ataque por turno causa daño superficial a la Fuerza de Voluntad. Un mortal Impedido sufre un ataque de nervios o brote psicótico. Un vampiro afectado sucumbe a una Compulsión elegida por el usuario."
        },
        {
          "id": "mesmerize",
          "name": "Mesmerismo",
          "level": 2,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Manipulación + Dominación contra Inteligencia + Resolución",
          "duration": "Hasta que se ejecuta la orden o la escena finaliza, lo que ocurra primero",
          "description": "Hipnotiza a la víctima implantando órdenes complejas que ejecutará como si fueran propias. Requiere contacto visual prolongado y relativo silencio."
        },
        {
          "id": "submerged-directive",
          "name": "Directriz Sumergida",
          "level": 3,
          "cost": "Sin coste adicional",
          "dicePool": "Como Mesmerismo",
          "duration": "Pasiva (nunca expira)",
          "description": "Amplía Mesmerismo para implantar órdenes con disparadores condicionales: la orden permanece dormida hasta que ocurra un evento específico fijado por el vampiro."
        },
        {
          "id": "forgetful-mind",
          "name": "Mente Olvidadiza",
          "level": 3,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Manipulación + Dominación contra Inteligencia + Resolución",
          "duration": "Indefinida",
          "description": "Reescribe o borra fragmentos enteros de memoria. Cada punto de margen permite añadir o eliminar un recuerdo. La víctima los recuerda vagos y borrosos, susceptibles de desmoronarse bajo interrogatorio. Victoria crítica crea recuerdos perfectos e indistinguibles."
        },
        {
          "id": "rationalize",
          "name": "Racionalizar",
          "level": 4,
          "cost": "Sin coste adicional",
          "dicePool": "N/A",
          "duration": "Indefinida",
          "description": "Las víctimas defienden como propia cualquier acción hecha bajo Dominación. Si son presionadas, pueden tirar Astucia + Consciencia dif. 5 para cuestionar su propia declaración (y posiblemente su cordura). Exposición prolongada causa trauma mental grave."
        },
        {
          "id": "terminal-decree",
          "name": "Decreto Terminal",
          "level": 5,
          "cost": "Sin coste adicional de Ansia, pero el coste en Humanidad es potencialmente severo",
          "dicePool": "Como el Poder de Dominación utilizado",
          "duration": "Pasiva",
          "description": "Elimina el fallo automático de las órdenes que causan muerte o lesión grave; ahora se resisten con tirada normal (según el Poder aplicado). Puede hacer que mortales se suiciden o que vampiros caminen al fuego. Coste severo en Humanidad."
        },
        {
          "id": "mass-manipulation",
          "name": "Manipulación en Masa",
          "level": 5,
          "cost": "Un control de Enardecimiento además del coste del Poder amplificado",
          "dicePool": "Como el Poder amplificado, contra el oponente más fuerte del grupo",
          "duration": "Según el poder amplificado",
          "description": "Amplifica cualquier otro Poder de Dominación para afectar a grupos de mortales o vampiros. Todas las víctimas han de ver los ojos del usuario. La tirada se hace contra el oponente más fuerte del grupo."
        }
      ],
      "color": "#2a5aaa",
      "colorDark": "#152575",
      "colorGlow": "rgba(42,90,170,0.4)",
      "clanes": [
        "Ventrue",
        "Tremere",
        "Malkavian"
      ],
      "iconType": "crown"
    },
    {
      "id": "fortitude",
      "name": "Fortaleza",
      "description": "Muy apreciada por los inmortales, Fortaleza permite resistir asaltos físicos y mentales. Quienes poseen Fortaleza son ejemplos de los pilares impasibles de la sociedad de los Vástagos, capaces de resistir golpes y encantamientos sin moverse o mostrar deterioro.",
      "tipo": "Físico",
      "amenaza": "Media. Los testigos sin duda reaccionan cuando alguien recibe una paliza brutal o una lluvia de balas y sale aparentemente ileso.",
      "resonancia": "Melancólica. Supervivientes de guerra, maltratos o desgracias; corredores de resistencia; alpinistas; infantería y fuerzas especiales; aquéllos con un sistema inmunológico muy fuerte.",
      "powers": [
        {
          "id": "unswayable-mind",
          "name": "Mente Imperturbable",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Pasiva",
          "description": "Resistencia mística a manipulación mental mundana: coacción, drogas, tortura, interrogatorio. Añade Fortaleza a todas las tiradas de resistencia contra dichos efectos."
        },
        {
          "id": "resilience",
          "name": "Resiliencia",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Pasiva",
          "description": "Añade el valor de Fortaleza directamente como casillas extra de Salud. Pasivo y permanente; aumenta la resistencia total del vampiro de forma inmediata."
        },
        {
          "id": "enduring-beasts",
          "name": "Bestias Resistentes",
          "level": 2,
          "cost": "Ninguno (para famulus); un control de Enardecimiento (para otros animales)",
          "dicePool": "Resistencia + Animalismo (para animales que no sean famulus)",
          "duration": "Una escena",
          "description": "(Amalgama: Animalismo 1) Comparte parte de la dureza sobrenatural del vampiro con los animales bajo su control, aumentando su resistencia al daño."
        },
        {
          "id": "toughness",
          "name": "Dureza",
          "level": 2,
          "cost": "Un control de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "Convierte una cantidad de daño agravado igual a la puntuación de Fortaleza en superficial cuando lo sufre. El superficial así generado no se sana durante la escena. Convierte por escena (no por herida). Puede activarse de forma refleja al recibir agravado con Astucia + Supervivencia dif. 3."
        },
        {
          "id": "defy-bane",
          "name": "Desafiar Prohibición",
          "level": 3,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Astucia + Supervivencia (para activarlo en modo reflejo)",
          "duration": "Una escena o hasta que expire, lo que ocurra primero",
          "description": "Resistencia temporal al fuego, la luz solar y otras heridas que amenacen con la Muerte Definitiva. Puede activarse de modo reflejo al recibir daño agravado con Astucia + Supervivencia dif. 3."
        },
        {
          "id": "fortify-the-inner-facade",
          "name": "Fortificar la Fachada Interior",
          "level": 3,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "Protege la mente contra Dominación, Auspex y otros poderes mentales. Añade Fortaleza a las tiradas de resistencia contra poderes que afecten la mente."
        },
        {
          "id": "draught-of-endurance",
          "name": "Sorbo de Aguante",
          "level": 4,
          "cost": "Un control de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una noche; para vampiros, hasta la siguiente alimentación o cuando alcance Ansia 5",
          "description": "La Sangre se satura con Fortaleza. Beber un Enardecimiento del usuario otorga al bebedor Fortaleza temporal igual a la mitad (redondeado hacia abajo) del donante, con acceso a los mismos Poderes (sin Amalgamas) hasta ese nivel."
        },
        {
          "id": "prowess-from-pain",
          "name": "Arrojo por el Dolor",
          "level": 5,
          "cost": "Un control de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "El vampiro ya no sufre penalizaciones por daño a la Salud durante el turno, incluido el fuego (pero no la luz solar). Una victoria crítica en una tirada de ataque supera este Poder."
        },
        {
          "id": "flesh-of-marble",
          "name": "Carne de Mármol",
          "level": 5,
          "cost": "Dos controles de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "El vampiro ignora la primera fuente de daño físico de cada turno, incluido el fuego (pero no la luz solar). Si hay confusión sobre cuál es la «primera», el vampiro ignora la que más daño cause ese turno. Una victoria crítica en un ataque supera este Poder."
        }
      ],
      "color": "#9a7a1a",
      "colorDark": "#6a5010",
      "colorGlow": "rgba(154,122,26,0.4)",
      "clanes": [
        "Ventrue",
        "Hecata",
        "Salubri"
      ],
      "iconType": "shield"
    },
    {
      "id": "obfuscation",
      "name": "Ofuscación",
      "description": "Para los Vástagos que practican Ofuscación, la Disciplina proporciona la cobertura perfecta para acercarse a una víctima, parecer inofensivos y escapar cuando los ánimos se caldean demasiado. Los Poderes de Ofuscación funcionan mediante mesmerismo ambiental de bajo nivel.",
      "tipo": "Mental",
      "amenaza": "Baja. Evitar la detección es el objetivo de esta Disciplina.",
      "resonancia": "Melancólica. Los ignorados e invisibles, los sintecho, olvidados y deprimidos; espías, carteristas, sirvientes excelentes, encargados de material y tramoyistas.",
      "powers": [
        {
          "id": "cloak-of-shadows",
          "name": "Capa de Sombras",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "Si está quieto y con algo de cobertura, el vampiro se funde con el entorno. Prácticamente invisible para quien no sepa exactamente dónde mirar."
        },
        {
          "id": "silence-of-death",
          "name": "Silencio de la Muerte",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "Silencia pasos, ropa, colisiones menores y otros sonidos personales. Solo Sentir lo Invisible (Auspex 1) puede detectarlo. No anula sonidos que el usuario haga fuera de su espacio personal (arrojar objetos, golpear puertas)."
        },
        {
          "id": "unseen-passage",
          "name": "Paso Invisible",
          "level": 2,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Astucia + Sigilo (para mantenerse oculto en movimiento)",
          "duration": "Una escena o hasta que lo detecten",
          "description": "Se mueve mientras permanece oculto. Funciona automáticamente si no emite olores abrumadores ni sonidos más fuertes que un susurro. Solo si atrae la atención, el observador puede tirar para detectarlo. No puede usarse para desaparecer mientras es observado (falla automáticamente)."
        },
        {
          "id": "ghost-in-the-machine",
          "name": "Fantasma en la Máquina",
          "level": 3,
          "cost": "Sin coste adicional",
          "dicePool": "N/A",
          "duration": "Como el Poder utilizado",
          "description": "En directo, se le trata como si estuvieran ante el vampiro. En grabaciones y fotografías, +3 a la dificultad para identificarlo (imagen borrosa). +3 dados a las reservas para eludir vigilancia electrónica y contramedidas automatizadas."
        },
        {
          "id": "mask-of-a-thousand-faces",
          "name": "Máscara de las Mil Caras",
          "level": 3,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Manipulación + Subterfugio (para pasar desapercibido activamente)",
          "duration": "Una escena",
          "description": "Sin tirada. Adopta la apariencia de un desconocido olvidable del mismo sexo y de constitución similar; la ropa se adapta al entorno (vigilante en una oficina, operario en una fábrica). No proporciona identificación ni engaña en un control de identidad. Sentir lo Invisible lo detecta."
        },
        {
          "id": "vanish",
          "name": "Desvanecerse",
          "level": 4,
          "cost": "Como el Poder aumentado",
          "dicePool": "Astucia + Ofuscación contra Astucia + Consciencia",
          "duration": "Como el Poder aumentado",
          "description": "(Prerrequisito: Capa de Sombras) Desaparece incluso bajo observación directa. Con victoria, el observador duda que el vampiro estuviera allí. Con victoria crítica, el vampiro desaparece por completo de sus recuerdos. No afecta a la memoria de otros vampiros. Una vez por escena."
        },
        {
          "id": "conceal",
          "name": "Ocultar",
          "level": 4,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Inteligencia + Ofuscación",
          "duration": "Una noche, con una noche adicional por punto de margen en la victoria",
          "description": "(Amalgama: Auspex 3) Oculta un objeto inanimado tocándolo. Dificultad entre 2 (anillo entre recuerdos) y 6 (casa en una plaza abierta). Máximo tamaño: casa de dos pisos. Oculta también su contenido si el espectador no entra. Una noche +1 por punto de margen."
        },
        {
          "id": "impostors-guise",
          "name": "Disfraz del Impostor",
          "level": 5,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Astucia + Ofuscación, Manipulación + Interpretación",
          "duration": "Una escena",
          "description": "(Prerrequisito: Máscara de las Mil Caras) Adopta la apariencia exacta de una persona específica conocida, incluyendo voz y manierismos."
        },
        {
          "id": "cloak-the-gathering",
          "name": "Encubrimiento de la Concurrencia",
          "level": 5,
          "cost": "Un control de Enardecimiento además del coste del Poder extendido",
          "dicePool": "N/A",
          "duration": "Como el Poder extendido",
          "description": "Extiende cualquier Poder de Ofuscación a un grupo cercano sin tirada. Los miembros pueden verse entre sí. Si uno del grupo (que no sea el usuario) queda descubierto, el resto sigue oculto. Si es el usuario quien es descubierto, todos quedan expuestos."
        }
      ],
      "color": "#5a5a7a",
      "colorDark": "#2a2a4a",
      "colorGlow": "rgba(90,90,122,0.4)",
      "clanes": [
        "Nosferatu",
        "Malkavian",
        "Banu Haqim"
      ],
      "iconType": "ghost"
    },
    {
      "id": "potence",
      "name": "Potencia",
      "description": "Potencia es la fuerza impulsada con Vitae más allá de las capacidades de otros vampiros. Es la capacidad del vampiro de obligar a su cuerpo a realizar acciones imposibles de replicar por los mortales.",
      "tipo": "Físico",
      "amenaza": "De media a alta. Los usos menores de la Disciplina podrían pasar como 'fuerza histérica', pero cuando el pavimento se agrieta y los edificios comienzan a desmoronarse, esa explicación pierde credibilidad.",
      "resonancia": "Colérica. Los fuertes y saludables; atletas y hombres y mujeres jóvenes en su mejor momento, ratas de gimnasio, luchadores, trabajadores de la construcción y leñadores, estibadores.",
      "powers": [
        {
          "id": "lethal-body",
          "name": "Cuerpo Letal",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Pasiva",
          "description": "Los ataques sin armas pueden causar daño agravado a la Salud a mortales, a elección del usuario. Ignoran un nivel de armadura por nivel de Potencia."
        },
        {
          "id": "soaring-leap",
          "name": "Salto Vertiginoso",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Pasiva",
          "description": "Salta en vertical tantos metros como 3× su nivel de Potencia, y en horizontal 5× su nivel de Potencia. Sin necesidad de carrerilla."
        },
        {
          "id": "prowess",
          "name": "Bravura",
          "level": 2,
          "cost": "Un control de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "Añade el nivel de Potencia al daño sin armas y a las proezas de Fuerza. Añade la mitad de Potencia (redondeado hacia arriba) al daño de Pelea con Armas."
        },
        {
          "id": "uncanny-grip",
          "name": "Agarre Asombroso",
          "level": 3,
          "cost": "Un control de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "Éxito automático en cualquier prueba para escalar superficies no metálicas. Deja marcas o deformaciones visibles (Inteligencia + Investigación dif. 2 para verlas). Puede colgarse de una pared o techo durante una escena. Las superficies finas de vidrio pueden hacerse añicos."
        },
        {
          "id": "brutal-feed",
          "name": "Alimentación Brutal",
          "level": 3,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Una alimentación",
          "description": "Drena por completo a un humano en segundos (normalmente un turno). Cada punto de Ansia saciado causa un punto de daño agravado a la Salud de la víctima. En vampiros, solo superficial. En combate se usa tras un ataque de Pelea con éxito con los colmillos. La armadura no protege."
        },
        {
          "id": "spark-of-rage",
          "name": "Chispa de Ira",
          "level": 3,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Manipulación + Potencia",
          "duration": "Una escena",
          "description": "(Amalgama: Presencia 3) Transmite rabia sobrenatural a criaturas cercanas, pudiendo desencadenar Frenesís en otros vampiros o brutalidad en mortales."
        },
        {
          "id": "draught-of-might",
          "name": "Sorbo de Poderío",
          "level": 4,
          "cost": "Un control de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una noche; para vampiros, hasta la siguiente alimentación o cuando alcance Ansia 5",
          "description": "La Sangre se satura con Potencia. Beber un Enardecimiento del usuario otorga al bebedor Potencia temporal igual a la mitad (redondeado hacia abajo) del donante, con acceso a los mismos Poderes (sin Amalgamas) hasta ese nivel."
        },
        {
          "id": "fist-of-caine",
          "name": "Puño de Caín",
          "level": 5,
          "cost": "Un control de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "Durante una escena, los ataques de Pelea causan daño agravado a la Salud tanto a mortales como sobrenaturales. Literalmente desgarra la carne y arranca extremidades con las manos desnudas."
        },
        {
          "id": "earthshock",
          "name": "Temblor de Tierra",
          "level": 5,
          "cost": "Dos controles de Enardecimiento",
          "dicePool": "Fuerza + Atletismo contra Destreza + Atletismo de cada objetivo",
          "duration": "Un uso",
          "description": "Golpea el suelo generando una onda de choque que derriba y aturde a todos los oponentes en un radio cercano. Los afectados caen al suelo y pierden su próxima acción."
        }
      ],
      "color": "#9a1a1a",
      "colorDark": "#6a0808",
      "colorGlow": "rgba(154,26,26,0.4)",
      "clanes": [
        "Brujah",
        "Nosferatu",
        "Gangrel"
      ],
      "iconType": "fist"
    },
    {
      "id": "presence",
      "name": "Presencia",
      "description": "Presencia es una Disciplina que expresa la existencia bipolar del vampiro. Sirve para atraer a las víctimas o dispersarlas aterrorizadas. Permite el control de multitudes, la manipulación emocional y la devoción forzada. Presencia afecta las emociones de aquéllos sujetos a ella, no las mentes.",
      "tipo": "Mental",
      "amenaza": "Baja-Media. Al ser un poder sutil, la gente rara vez se da cuenta de que ha sido afectada por Presencia.",
      "resonancia": "Sanguínea. Los bellos y lujuriosos, aquéllos completamente enamorados del vampiro, modelos, actores y estrellas de cine, convincentes oradores públicos y privados, estrellas de YouTube e influencers de Instagram.",
      "powers": [
        {
          "id": "daunt",
          "name": "Atemorizar",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "Carisma + Presencia contra Compostura + Resolución",
          "duration": "Una escena o hasta que se termine de forma intencionada",
          "description": "Añade el valor de Presencia a cualquier tirada de Intimidación. Atacar al usuario requiere una tirada de Resolución + Compostura dif. 2. Fascinación y Atemorizar no pueden usarse a la vez."
        },
        {
          "id": "awe",
          "name": "Fascinación",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "Manipulación + Presencia contra Compostura + Inteligencia",
          "duration": "Una escena o hasta que se termine de forma intencionada",
          "description": "Añade Presencia a tiradas de Persuasión, Interpretación y otras de Carisma. Quien note el efecto puede resistir con contienda Compostura + Inteligencia. Victoria = inmune una escena; crítica = inmune toda la noche. Los efectos de Presencia no se acumulan."
        },
        {
          "id": "lingering-kiss",
          "name": "Beso Persistente",
          "level": 2,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Hasta que se resista con éxito",
          "description": "Los mortales alimentados se vuelven adictos al Beso. Añade el valor de Presencia como dados extra a cualquier tirada de Carisma posterior contra la víctima mordida. Puede provocar anemia, autolesión o muerte por adicción. Prueba de Fuerza de Voluntad dif. = Presencia semanal para resistir (3 semanas seguidas rompe el efecto)."
        },
        {
          "id": "entrancement",
          "name": "Encantamiento",
          "level": 3,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Carisma + Presencia contra Compostura + Astucia",
          "duration": "Una hora más otra por punto de margen",
          "description": "Enfoca el encanto en una persona (similar a enamoramiento). El usuario suma Presencia a cualquier reserva Social contra el sujeto en trance. Peticiones que dañen al sujeto o sus seres queridos exigen una contienda; un fallo termina el efecto y lo inmuniza el resto de la noche."
        },
        {
          "id": "dread-gaze",
          "name": "Mirada Aterradora",
          "level": 3,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Carisma + Presencia contra Compostura + Resolución",
          "duration": "Un turno",
          "description": "Fallo: mortales solo defensa propia un turno; vampiros inafectados. Victoria: mortales huyen; vampiros solo defensa propia (o gastan Fuerza de Voluntad = margen). Victoria crítica: mortales paralizados o en posición fetal; vampiros hacen Frenesí de terror dif. 3."
        },
        {
          "id": "summon",
          "name": "Invocación",
          "level": 4,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Manipulación + Presencia contra Compostura + Inteligencia",
          "duration": "Una noche",
          "description": "Convoca a alguien sobre quien haya usado Fascinación, Encantamiento, Majestad o que haya probado su Sangre. El objetivo sabe quién lo convoca y dónde está. Victoria = puede acudir o no; crítica = llega lo antes posible salvo riesgo inmediato. No se pondrá en peligro físico o financiero."
        },
        {
          "id": "irresistible-voice",
          "name": "Voz Irresistible",
          "level": 4,
          "cost": "Sin coste adicional",
          "dicePool": "N/A",
          "duration": "Pasiva",
          "description": "(Amalgama: Dominación 1) Basta que se escuche la voz del usuario para aplicar Poderes de Dominación. No funciona a través de medios electrónicos (teléfono, TV, interfonos)."
        },
        {
          "id": "star-magnetism",
          "name": "Magnetismo de Estrella",
          "level": 5,
          "cost": "Un control de Enardecimiento adicional",
          "dicePool": "N/A",
          "duration": "Como el Poder utilizado",
          "description": "Fascinación, Atemorizar y Encantamiento pueden transmitirse por transmisiones en directo (no grabaciones). Si se usa Encantamiento, hay que pronunciar el nombre de la víctima con claridad (afecta a una persona). Los demás lo perciben como encantador, pero no sobrenaturalmente."
        },
        {
          "id": "majesty",
          "name": "Majestad",
          "level": 5,
          "cost": "Dos controles de Enardecimiento",
          "dicePool": "Carisma + Presencia contra Compostura + Resolución",
          "duration": "Una escena",
          "description": "Los presentes solo pueden mirarlo boquiabiertos o desviar la mirada con miedo/sumisión. Actuar en su contra (excepto por supervivencia) requiere contienda Compostura + Resolución contra Carisma + Presencia. Victoria = un turno libre por punto de margen; solo la victoria crítica resiste toda la escena."
        }
      ],
      "color": "#9a3a6a",
      "colorDark": "#6a1a4a",
      "colorGlow": "rgba(154,58,106,0.4)",
      "clanes": [
        "Toreador",
        "Ventrue",
        "Brujah"
      ],
      "iconType": "rose"
    },
    {
      "id": "protean",
      "name": "Protean",
      "description": "El poder de mutar, cambiar de forma y convertirse en depredadores cada vez más letales es tan natural para el vampiro como lo es para el Lupino. Los practicantes de Protean utilizan la Disciplina por su utilidad: convertirse en una bestia, transformar sus miembros en armas o cambiar de forma para evadir la captura.",
      "tipo": "Físico",
      "amenaza": "Alta. Todos los Poderes de Protean, una de las Disciplinas más descaradas de los vampiros, pueden violar la Mascarada por sí mismos.",
      "resonancia": "Sangre animal, especialmente de aquéllos que coinciden con la forma adoptada; la sangre de hombres lobo, changelings y otras quimeras sobrenaturales de hombres y bestias.",
      "powers": [
        {
          "id": "eyes-of-the-beast",
          "name": "Ojos de la Bestia",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "El tiempo deseado",
          "description": "Los ojos brillan rojos. Ignora cualquier penalización a la visión por oscuridad, incluso sobrenatural. La apariencia inhumana otorga +2 dados a la reserva de Intimidación contra mortales."
        },
        {
          "id": "weight-of-the-feather",
          "name": "Peso de la Pluma",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "Astucia + Supervivencia",
          "duration": "El tiempo deseado",
          "description": "Reduce su masa efectiva. Inmune al daño por caídas, colisiones y ser arrojado; no activa sensores de presión. La fuerza se reduce proporcionalmente (no sirve para saltos más largos). Si es reactivo (caída súbita), tirada a dificultad 3."
        },
        {
          "id": "feral-weapons",
          "name": "Armas Salvajes",
          "level": 2,
          "cost": "Un control de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "Extiende sus armas naturales (uñas hasta garras, colmillos hasta dagas). +2 al daño de Pelea; agravado contra mortales y superficial —no reducido a la mitad— contra vampiros."
        },
        {
          "id": "shapechange",
          "name": "Cambiar de Forma",
          "level": 3,
          "cost": "Un control de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena, a menos que uno quiera terminar antes",
          "description": "Se transforma en un animal de masa similar (típicamente lobo, felino grande o serpiente gigante) asociado al Clan. La transformación tarda un turno sin poder hacer nada más. Adquiere Atributos Físicos, sentidos y Habilidades del animal, y sus límites naturales."
        },
        {
          "id": "earth-meld",
          "name": "Fusión con la Tierra",
          "level": 3,
          "cost": "Un control de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Un día o más, o hasta que sea perturbado",
          "description": "Se hunde en superficie natural (roca, tierra desnuda, hierba) — no funciona en hormigón ni asfalto. Tarda un turno; deja los objetos transportados en la superficie. Es consciente de su entorno salvo durante el sueño diurno. Sube la noche siguiente salvo Letargo."
        },
        {
          "id": "metamorphosis",
          "name": "Metamorfosis",
          "level": 4,
          "cost": "Un control de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena, a menos que uno quiera terminar antes",
          "description": "(Prerrequisito: Cambiar de Forma) Otorga una forma animal adicional (murciélago, rata, insectos inusualmente grandes o serpientes) y permite cambiar el tamaño."
        },
        {
          "id": "the-unfettered-heart",
          "name": "Corazón Liberado",
          "level": 5,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Pasiva",
          "description": "El corazón se mueve libremente dentro del pecho. +3 a la dificultad para estacar fuera de combate; en combate cuerpo a cuerpo, la estaca solo penetra con victoria crítica. Si es estacado, puede tirar Fuerza + Resolución dif. 5 una vez por hora para expulsarla (imposible con Ansia 5)."
        },
        {
          "id": "mist-form",
          "name": "Forma de Niebla",
          "level": 5,
          "cost": "De uno a tres controles de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena, a menos que uno quiera terminar antes",
          "description": "Se convierte en niebla intangible: atraviesa tuberías, hendiduras y grietas. La transformación tarda 3 turnos (acelerable con Enardecimientos extra, uno por turno). Se mueve a velocidad de paseo; no puede hablar, atacar ni usar la mayoría de Disciplinas. Vulnerable solo a luz solar, fuego y ataques sobrenaturales inmateriales."
        }
      ],
      "color": "#3a7a4a",
      "colorDark": "#1a4a2a",
      "colorGlow": "rgba(58,122,74,0.4)",
      "clanes": [
        "Gangrel"
      ],
      "iconType": "claws"
    },
    {
      "id": "blood-sorcery",
      "name": "Hechicería de Sangre",
      "description": "También llamada Taumaturgia (por los Tremere) o Quietus/Extinción (por los Banu Haqim). A diferencia de otras Disciplinas, los practicantes de Hechicería de Sangre requieren profesores. Confiere Poderes y desbloquea la capacidad de realizar rituales hasta el nivel del usuario en la Disciplina.",
      "tipo": "Hechicería",
      "amenaza": "Baja-alta. La apariencia individual de los Poderes y rituales de Hechicería de Sangre varía tanto como sus efectos.",
      "resonancia": "Sanguínea. Aunque no es inherente a la Sangre en sí misma, Hechicería de Sangre responde con entusiasmo a la sangre de ocultistas humanos, hechiceros y líderes de sectas, así como a hemofílicos y bibliófilos.",
      "powers": [
        {
          "id": "a-taste-for-blood",
          "name": "Sabor de la Sangre",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "Resolución + Hechicería de Sangre",
          "duration": "N/A",
          "description": "Al probar una gota, identifica Resonancia e intensidad (si es humana), si es mortal, Ghoul, vampiro u otro sobrenatural, y la Potencia de Sangre relativa (por tanto, el margen probable de Generación). Victoria crítica revela también si ha cometido Diablerie y la Generación exacta (±1)."
        },
        {
          "id": "corrosive-vitae",
          "name": "Vitae Corrosiva",
          "level": 1,
          "cost": "Uno o más controles de Enardecimiento",
          "dicePool": "Resolución + Hechicería de Sangre (para controlar la corrosión con precisión)",
          "duration": "N/A",
          "description": "Altera su Sangre haciéndola corrosiva al contacto con materiales muertos: disuelve ropa, madera, metal, cerrojo o grilletes. El Ansia gastado determina la potencia del ácido."
        },
        {
          "id": "extinguish-vitae",
          "name": "Extinguir Vitae",
          "level": 2,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Inteligencia + Hechicería de Sangre contra Resistencia + Compostura",
          "duration": "N/A",
          "description": "Contienda contra un vampiro en su línea de visión mientras se concentra un turno. Victoria = +1 al Ansia del objetivo; victoria crítica = +2. Si la víctima ve al usuario, puede identificarlo con Inteligencia + Ocultismo contra Astucia + Subterfugio."
        },
        {
          "id": "blood-of-potency",
          "name": "Sangre de Potencia",
          "level": 3,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Resolución + Hechicería de Sangre",
          "duration": "Una escena o una noche",
          "description": "Tirada Resolución + Hechicería de Sangre dif. 2 + Potencia de Sangre actual. Victoria = +1 Potencia de Sangre esa escena; victoria crítica = +2. Permite superar el límite de Potencia por Generación mientras dure."
        },
        {
          "id": "scorpions-touch",
          "name": "Toque de Escorpión",
          "level": 3,
          "cost": "Uno o más controles de Enardecimiento",
          "dicePool": "Fuerza + Hechicería de Sangre contra Resistencia + Ocultismo o Fortaleza",
          "duration": "El veneno mantiene su potencia durante una escena",
          "description": "Cada Enardecimiento cubre un arma cuerpo a cuerpo o permite escupir. Si impacta, contienda Fuerza + Hechicería de Sangre contra Resistencia + Ocultismo (o Fortaleza). Daño = margen: agravado a mortales, superficial no reducido a vampiros. Un mortal con siquiera 1 punto cae inconsciente."
        },
        {
          "id": "theft-of-vitae",
          "name": "Robo de Vitae",
          "level": 4,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Astucia + Hechicería de Sangre contra Astucia + Ocultismo",
          "duration": "Una alimentación",
          "description": "Abre una herida en un mortal a distancia; la sangre sale disparada hacia la boca del usuario. Se alimenta al doble de velocidad (triple con victoria crítica). No puede hacer nada más mientras dure. La armadura no protege (la víctima se desangra dentro del traje). La herida se cierra al acabar."
        },
        {
          "id": "cauldron-of-blood",
          "name": "Caldero de Sangre",
          "level": 5,
          "cost": "Un control de Enardecimiento y obtener una (o más) Máculas",
          "dicePool": "Resolución + Hechicería de Sangre contra Compostura + Ocultismo o Fortaleza",
          "duration": "Un turno",
          "description": "Requiere tocar a la víctima. Contienda Resolución + Hechicería de Sangre contra Compostura + Ocultismo (o Fortaleza). Cada punto de margen causa 1 punto de daño agravado. Un mortal con al menos 1 punto muere entre gritos. Un vampiro añade 1 Ansia por punto de daño hasta llegar a Ansia 5."
        },
        {
          "id": "baals-caress",
          "name": "Caricia de Baal",
          "level": 5,
          "cost": "Uno o más controles de Enardecimiento",
          "dicePool": "Fuerza + Hechicería de Sangre contra Resistencia + Ocultismo o Fortaleza",
          "duration": "El veneno mantiene su potencia durante una escena",
          "description": "Como Toque de Escorpión pero letal: si impacta, cada punto de margen causa daño agravado a mortales y vampiros por igual. Un mortal con siquiera 1 punto de daño muere al instante. Si un vampiro sufre agravado, tirada de nuevo — victoria = Letargo al dormir."
        }
      ],
      "color": "#aa1a2a",
      "colorDark": "#7a0a10",
      "colorGlow": "rgba(170,26,42,0.4)",
      "clanes": [
        "Tremere",
        "Banu Haqim"
      ],
      "iconType": "blood"
    },
    {
      "id": "thin-blood-alchemy",
      "name": "Alquimia de Sangre Débil",
      "description": "La Sangre Débil de las últimas Generaciones apenas tiene poder propio, pero ciertos Sangre Débil han aprendido a usarla como catalizador. Al mezclar sangre humana fuertemente resonante y a veces otras sustancias con su propia Vitae, los alquimistas pueden simular una amplia gama de Poderes de otras Disciplinas y crear algunos Poderes únicos propios. La Alquimia puede simular algunos Poderes de Hechicería de Sangre, pero no rituales.",
      "tipo": "Especial (sólo para Sangre Débil)",
      "amenaza": "Varía según los Poderes que imita y el método utilizado.",
      "resonancia": "La necesaria para cada fórmula, por lo que varía en consecuencia.",
      "metodos": [
        {
          "id": "athanor-corporis",
          "name": "Athanor Corporis",
          "description": "El alquimista usa su propio cuerpo como el atanor (el horno alquímico). Los ingredientes suelen consistir en distintos tipos de mezclas de Resonancia. El alquimista bebe los diferentes tipos de sangre resonante necesarios; tirada de destilación de Resistencia + Alquimia. Sólo puede activarse un Poder a la vez y todo nuevo Poder debe destilarse antes de ser activado (requiere al menos tres turnos de concentración)."
        },
        {
          "id": "calcinatio",
          "name": "Calcinatio",
          "description": "El alquimista utiliza el cuerpo de un humano como atanor, ajustando su estado biofísico mediante presión emocional y encantamientos. El alquimista alimenta con su Sangre al ser humano elegido y tira por la destilación con Manipulación + Alquimia. El alquimista bebe su sangre para usar el Poder. Sólo puede destilar un Poder por víctima."
        },
        {
          "id": "fixatio",
          "name": "Fixatio",
          "description": "El alquimista usa un atanor convencional (horno, fragua, etc.). El alquimista derrama su Sangre y los ingredientes en el atanor y los destila con una tirada de Inteligencia + Alquimia. Las fórmulas resultantes quedan listas para ser ingeridas (tirada de destilación al consumirlas). El alquimista puede cargar tantas fórmulas fijadas como su Astucia o Destreza, y almacenar el doble de su Alquimia más sus puntos en Refugio."
        }
      ],
      "powers": [
        {
          "id": "far-reach",
          "name": "Alcance Lejano",
          "level": 1,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Resolución + Alquimia contra Fuerza + Atletismo",
          "duration": "Un turno, a menos que se sostenga",
          "description": "Levanta, empuja o tira de un objeto o persona <100 kg a <10 m que pueda ver. Objetos frágiles pueden romperse. Cuchillos manejables con Resolución + Alquimia (−2 dados), daño +1. Contra sujeto resistente, contienda; con victoria, tirarlo 1 m por marge, causa superficial. Sostener flotando requiere tirada dif. 3 cada turno."
        },
        {
          "id": "profane-hieros-gamos",
          "name": "Hieros Gamos Profano",
          "level": 1,
          "cost": "Un control de Enardecimiento (destilación)",
          "dicePool": "Resistencia/Manipulación/Inteligencia + Alquimia (según método)",
          "duration": "Permanente hasta que se vuelva a realizar",
          "description": "Permite cambiar de sexo biológico aprovechando la naturaleza fluida de la condición de Sangre Débil. El proceso tarda horas y requiere destilación."
        },
        {
          "id": "haze",
          "name": "Neblina",
          "level": 1,
          "cost": "Un control de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena o hasta que termine voluntariamente",
          "description": "Nube de vapor alrededor del alquimista que oculta rasgos y silueta. Quien intente identificarlo o golpearlo con armas a distancia sufre −2 dados. Puede extenderse a un grupo de hasta 5 personas gastando otro Enardecimiento."
        },
        {
          "id": "envelop",
          "name": "Envolver",
          "level": 2,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Astucia + Alquimia contra Resistencia + Supervivencia",
          "duration": "Hasta que concluye la escena o el alquimista termina el efecto voluntariamente",
          "description": "La niebla se arremolina en torno a un objetivo a la vista: −3 dados a detección visual y ataques a distancia. Además, contra un mortal, contienda Astucia + Alquimia contra Resistencia + Supervivencia: victoria = solo puede toser sin actuar; victoria crítica = pierde la consciencia. Un solo objetivo a la vez."
        },
        {
          "id": "defractionate",
          "name": "Defraccionar",
          "level": 3,
          "cost": "Un control de Enardecimiento (destilación)",
          "dicePool": "Resistencia/Manipulación/Inteligencia + Alquimia (según método)",
          "duration": "N/A",
          "description": "Elixir que renueva la sangre médica fraccionada, permitiendo alimentarse a vampiros sin el Mérito Garganta de Hierro. Cada éxito en la destilación convierte una bolsa (sacia 1 Ansia)."
        },
        {
          "id": "aerial-impulse",
          "name": "Ímpetu Aéreo",
          "level": 4,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Fuerza + Alquimia contra Fuerza + Atletismo (si se resiste)",
          "duration": "Una escena",
          "description": "Vuela o se desplaza a velocidad de carrera en cualquier dirección. Cargar a un humano reduce la velocidad a paso normal. Agarrar y cargar a un sujeto involuntario o derribar a un volador requiere contienda Fuerza + Alquimia contra Fuerza + Atletismo."
        },
        {
          "id": "awaken-the-sleeper",
          "name": "Despertar al Durmiente",
          "level": 5,
          "cost": "Un control de Enardecimiento (destilación)",
          "dicePool": "Resistencia/Manipulación/Inteligencia + Alquimia (según método)",
          "duration": "N/A",
          "description": "Elixir mezclado con sangre humana que despierta a un vampiro en Letargo. Cada éxito por encima de 2 en la destilación permite despertar a un vampiro con Potencia de Sangre = (éxitos − 2) o menos."
        }
      ],
      "color": "#1a7a7a",
      "colorDark": "#0a4a4a",
      "colorGlow": "rgba(26,122,122,0.4)",
      "clanes": [
        "Sangre Débil"
      ],
      "iconType": "flask"
    }
  ]
};
