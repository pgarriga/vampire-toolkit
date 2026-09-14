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
          "cost": "3 Enardecimientos (uno por noche)",
          "dicePool": "Carisma + Trato con Animales",
          "duration": "Hasta la muerte",
          "description": "Crea un vínculo mental permanente con un animal, convirtiéndolo en familiar (famulus). Solo puede tenerse uno. El famulus no envejece mientras reciba Sangre y puede usarse sin coste con Susurros Salvajes y Comunión de Espíritus."
        },
        {
          "id": "feral-whispers",
          "name": "Susurros Salvajes",
          "level": 2,
          "cost": "1 Enardecimiento (por especie; ninguno con el famulus)",
          "dicePool": "Manipulación + Animalismo, Carisma + Animalismo",
          "duration": "Una escena",
          "description": "Comunicación bidireccional con animales e invocación de los mismos. Dificultad según tarea (ejemplo: vigilar un parque dif. 3, defender un lugar con la vida dif. 6). El margen en la invocación determina la cantidad de animales acudidos."
        },
        {
          "id": "animal-messenger",
          "name": "Mensajero Animal",
          "level": 2,
          "cost": "1 Enardecimiento (por noche)",
          "dicePool": "N/A",
          "duration": "Una noche (o más)",
          "description": "El famulus lleva un mensaje hablado de una frase a quien su amo designe, y lo pronuncia con la voz del propio vampiro. Si se desconoce el paradero del destinatario, el famulus debe rastrearlo (Resolución + Callejeo o Supervivencia, dificultad 2), con un intento por noche. Entregado el mensaje, regresa. Requiere Vínculo con Famulus.",
          "amalgama": "Auspex 1"
        },
        {
          "id": "unliving-hive",
          "name": "Colmena No-Muerta",
          "level": 3,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Pasiva",
          "description": "Extiende todos los poderes de Animalismo a enjambres de insectos. Puede vincularse como famulus y anidar dentro del propio cuerpo del vampiro.",
          "amalgama": "Ofuscación 2"
        },
        {
          "id": "quell-the-beast",
          "name": "Reprimir a la Bestia",
          "level": 3,
          "cost": "1 Enardecimiento",
          "dicePool": "Carisma + Animalismo contra Resistencia + Resolución",
          "duration": "Una escena (o margen +1 turnos)",
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
          "id": "messengers-command",
          "name": "Orden del Mensajero",
          "level": 3,
          "cost": "Ninguno",
          "dicePool": "Como el Poder base (Compeler o Mesmerismo)",
          "duration": "La del Poder base",
          "description": "Permite lanzar Compeler o Mesmerismo a través de una orden transmitida por el famulus, en cuanto éste hace contacto visual con el objetivo. La puntuación de Dominación empleada no puede superar el Animalismo del usuario. Requiere Mensajero Animal.",
          "amalgama": "Dominación 1"
        },
        {
          "id": "plague-of-beasts",
          "name": "Plaga de Bestias",
          "level": 3,
          "cost": "1 Enardecimiento",
          "dicePool": "Manipulación + Animalismo contra Compostura + Trato con Animales",
          "duration": "Una noche",
          "description": "Marca a un individuo como blanco de la atención animal. Cualquier bestia o alimaña de la zona lo busca para ladrarle, picotearle y arañarle, y le hace muy difícil ocuparse de nada que no sea ahuyentarlas. Los animales conservan el instinto suficiente para no poner en peligro su propia supervivencia."
        },
        {
          "id": "subsume-the-spirit",
          "name": "Comunión de Espíritus",
          "level": 4,
          "cost": "1 Enardecimiento (ninguno con el famulus)",
          "dicePool": "Manipulación + Animalismo",
          "duration": "Una escena (indefinida con crítico)",
          "description": "Transfiere la conciencia del vampiro al cuerpo de un animal, controlándolo completamente y usando todos sus sentidos. El cuerpo vampírico queda inconsciente durante la posesión."
        },
        {
          "id": "influence-the-herd",
          "name": "Influir al Rebaño",
          "level": 4,
          "cost": "1+ Enardecimiento",
          "dicePool": "Compostura + Animalismo",
          "duration": "Una noche",
          "description": "Guía el humor general de los animales de un área del tamaño de un campo de fútbol, ampliable con Enardecimientos adicionales hasta una ciudad pequeña. No dirige acciones concretas: lleva su comportamiento desde la indiferencia somnolienta hasta la agresión indiscriminada, y cada éxito dificulta los intentos mundanos de controlarlos."
        },
        {
          "id": "animal-dominion",
          "name": "Control Animal",
          "level": 5,
          "cost": "2 Enardecimientos",
          "dicePool": "Carisma + Animalismo",
          "duration": "Una escena (o hasta cumplir la orden)",
          "description": "Domina manadas o grupos enteros de animales simultáneamente como si fueran una sola entidad. Con victoria crítica el control es absoluto y sin tirada adicional."
        },
        {
          "id": "drawing-out-the-beast",
          "name": "Expulsar a la Bestia",
          "level": 5,
          "cost": "1 Enardecimiento",
          "dicePool": "Astucia + Animalismo contra Compostura + Resolución",
          "duration": "Un Frenesí",
          "description": "En vez de tirar Fuerza de Voluntad para resistir un Frenesí de terror o furia, tira contra la Compostura + Resolución del objetivo. Con victoria, el objetivo entra en Frenesí en lugar del vampiro. Si falla, el vampiro entra en Frenesí igualmente. No puede transferir Frenesí de hambre."
        },
        {
          "id": "coerce-the-bestial-temper",
          "name": "Coaccionar el Temperamento Bestial",
          "level": 5,
          "cost": "1 Enardecimiento",
          "dicePool": "Manipulación + Animalismo",
          "duration": "Hasta que termine (mientras tararee)",
          "description": "Cantando o tarareando suavemente, el vampiro tira de los hilos de todas las Bestias cercanas. Cada éxito de margen sube o baja en 1 la dificultad para resistir el Frenesí de cuantos vampiros puedan oírle; si la rebaja, los que ya estén en Frenesí pueden tirar de nuevo para salir de él."
        }
      ],
      "color": "#4a7c3f",
      "colorDark": "#2d4a25",
      "colorGlow": "rgba(74,124,63,0.4)",
      "clanes": [
        "Gangrel",
        "Nosferatu",
        "Ravnos",
        "Tzimisce"
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
          "duration": "Hasta desactivarla",
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
          "cost": "1 Enardecimiento (opcional)",
          "dicePool": "Resolución + Auspex",
          "duration": "Pasiva",
          "description": "Recibe destellos de intuición, presentimientos o visiones sobre peligros inmediatos. El Narrador puede otorgar pistas pasivas sin que el jugador las solicite."
        },
        {
          "id": "panacea",
          "name": "Panacea",
          "level": 2,
          "cost": "1 Enardecimiento (+1 Fuerza de Voluntad)",
          "dicePool": "Compostura + Auspex",
          "duration": "N/A",
          "description": "Calma la inquietud mental o emocional del objetivo y le devuelve algo de resolución. Restaura tanto daño superficial de Fuerza de Voluntad como el margen, o 1 nivel agravado por cada tres éxitos de margen. Un objetivo por noche: calmar a más hace que el usuario cargue con parte del peso.",
          "amalgama": "Fortaleza 1"
        },
        {
          "id": "reveal-temperament",
          "name": "Revelar Temperamento",
          "level": 2,
          "cost": "1 Enardecimiento",
          "dicePool": "Inteligencia + Auspex contra Compostura + Subterfugio",
          "duration": "Una escena",
          "description": "Permite oler la Resonancia de un objetivo y cualquier Discrasia que albergue su sangre. También revela si otro vampiro se ha alimentado hace poco y la Resonancia, si la hay, de su última víctima."
        },
        {
          "id": "shared-senses",
          "name": "Compartir los Sentidos",
          "level": 3,
          "cost": "1 Enardecimiento",
          "dicePool": "Resolución + Auspex",
          "duration": "Una escena",
          "description": "Ve, oye y siente a través de otro mortal o vampiro. Sobre desconocidos requiere línea de visión; sobre alguien con Sangre del usuario, a distancia. La víctima puede detectarlo con Sentir lo Invisible y expulsarlo con contienda Astucia + Resolución (usuario expelido no lo intenta hasta la noche siguiente)."
        },
        {
          "id": "scry-the-soul",
          "name": "Escudriñar el Alma",
          "level": 3,
          "cost": "1 Enardecimiento",
          "dicePool": "Inteligencia + Auspex contra Compostura + Subterfugio",
          "duration": "Un turno",
          "description": "Percibe el aura de una persona. El margen determina cuántas preguntas responde el Narrador: estado emocional, Resonancia, si es sobrenatural, si está bajo Hechicería de Sangre, si ha cometido Diablerie en el último año. Victoria crítica revela algo inesperado."
        },
        {
          "id": "fatal-flaw",
          "name": "Defecto Fatal",
          "level": 3,
          "cost": "1 Enardecimiento",
          "dicePool": "Inteligencia + Auspex contra Compostura o Resistencia + Subterfugio",
          "duration": "Una escena",
          "description": "Todo se rompe, y quien usa este Poder ve las señales antes de que ocurra. Observando el trabajo sutil de la entropía, el vampiro deduce el talón de Aquiles del objetivo: una brecha en su fachada mental o una debilidad en su armadura.",
          "amalgama": "Olvido 1"
        },
        {
          "id": "spirits-touch",
          "name": "Toque del Espíritu",
          "level": 4,
          "cost": "1 Enardecimiento",
          "dicePool": "Inteligencia + Auspex",
          "duration": "Un turno",
          "description": "Al tocar un objeto o lugar, revive las emociones e impresiones dejadas por quienes lo usaron (psicometría). Cuanto más intensa la emoción original, más clara la visión."
        },
        {
          "id": "clairvoyance",
          "name": "Clarividencia",
          "level": 5,
          "cost": "1 Enardecimiento",
          "dicePool": "Inteligencia + Auspex",
          "duration": "Unos minutos (hasta una noche vigilando)",
          "description": "Proyecta los sentidos a cualquier lugar conocido o que pueda visualizar, observando remotamente sin estar físicamente presente."
        },
        {
          "id": "possession",
          "name": "Posesión",
          "level": 5,
          "cost": "2 Enardecimientos",
          "dicePool": "Resolución + Auspex contra Resolución + Inteligencia",
          "duration": "Hasta que termine",
          "description": "Solo sobre mortales (los Ghouls requieren estar Vinculados). Requiere contacto visual previo. El cuerpo del vampiro entra en trance similar a Letargo; el daño agravado al huésped lo rompe. Fallo total = víctima inmune a futuros intentos durante la historia.",
          "amalgama": "Dominación 3"
        },
        {
          "id": "telepathy",
          "name": "Telepatía",
          "level": 5,
          "cost": "1 Enardecimiento (+1 Fuerza de Voluntad)",
          "dicePool": "Resolución + Auspex contra Astucia + Subterfugio",
          "duration": "1 minuto (por Enardecimiento; una escena si es voluntario)",
          "description": "Lee mentes y proyecta pensamientos propios. Puede extraer recuerdos específicos, comunicarse sin palabras o detectar mentiras directamente desde la fuente."
        },
        {
          "id": "unburdening-the-bestial-soul",
          "name": "Alivio del Alma Bestial",
          "level": 5,
          "cost": "2 Enardecimientos (y 1 Mácula)",
          "dicePool": "Compostura + Auspex contra Humanidad",
          "duration": "Una sesión",
          "description": "Comparte parte de la serenidad moral del usuario con un Vástago arrepentido: le devuelve cierto remordimiento y mantiene a raya a su Bestia, a costa de someter su voluntad a la del usuario. Este Poder, visto sobre todo entre los Salubri, alimenta su fama de ladrones de almas. Requiere Panacea.",
          "amalgama": "Dominación 3"
        }
      ],
      "color": "#7b3fa0",
      "colorDark": "#4a1a70",
      "colorGlow": "rgba(123,63,160,0.4)",
      "clanes": [
        "Hécata",
        "Malkavian",
        "Salubri",
        "Toreador",
        "Tremere"
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
          "cost": "1 Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "Añade el valor de Celeridad como dados extra a las reservas de Destreza que no sean de combate. Una vez por turno, puede usar Destreza + Atletismo para defenderse."
        },
        {
          "id": "urgency",
          "name": "Urgencia",
          "level": 2,
          "cost": "1 Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "El vampiro despacha a velocidad cegadora tareas que llevarían turnos: escribe, repara o construye en tiempo récord, tratando acciones completas como acciones secundarias. La concentración que exige le impide emplear esa velocidad de forma ofensiva."
        },
        {
          "id": "blink",
          "name": "Pestañeo",
          "level": 3,
          "cost": "1 Enardecimiento",
          "dicePool": "Destreza + Atletismo o lo que sea necesario",
          "duration": "Un turno",
          "description": "Se desplaza en línea recta a velocidad invisible, reposicionándose en combate o escapando antes de que nadie pueda reaccionar. Los testigos solo ven el punto de inicio y de llegada."
        },
        {
          "id": "traversal",
          "name": "Recorrido",
          "level": 3,
          "cost": "1 Enardecimiento",
          "dicePool": "Destreza + Atletismo",
          "duration": "Un turno",
          "description": "Corre por paredes, techos e incluso aguas si tiene carrerilla. Dificultad entre 3 (superficie inclinada con tracción) y 6 (vertical resbaladiza o agua). El margen determina la distancia alcanzada; agua más de 60 m o 30 pisos suele exceder el alcance."
        },
        {
          "id": "zigzag",
          "name": "Zigzagueo",
          "level": 3,
          "cost": "1 Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "El vampiro percibe como lentos los proyectiles —cuchillos lanzados o balas— y los esquiva a voluntad. No pierde dados al defenderse de varios ataques a distancia con Destreza + Atletismo y suma su puntuación de Celeridad a esas tiradas. Requiere Reflejos Rápidos."
        },
        {
          "id": "unerring-aim",
          "name": "Puntería Certera",
          "level": 4,
          "cost": "1 Enardecimiento",
          "dicePool": "N/A",
          "duration": "Un ataque",
          "description": "El tiempo se ralentiza perceptivamente, permitiendo disparos o lanzamientos de precisión imposible incluso contra objetivos en movimiento.",
          "amalgama": "Auspex 2"
        },
        {
          "id": "draught-of-elegance",
          "name": "Sorbo de Elegancia",
          "level": 4,
          "cost": "1 Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una noche (vampiros: hasta alimentarse)",
          "description": "La Sangre se satura con Celeridad. Beber un Enardecimiento del usuario otorga al bebedor Celeridad temporal igual a la mitad (redondeado hacia abajo) del donante, con acceso a los mismos Poderes (sin Amalgamas) hasta ese nivel."
        },
        {
          "id": "unseen-strike",
          "name": "Ataque Invisible",
          "level": 4,
          "cost": "2 Enardecimientos",
          "dicePool": "Destreza + Celeridad contra Astucia + Consciencia",
          "duration": "Un turno",
          "description": "El vampiro desaparece a plena vista, se planta al instante junto a un enemigo y le asesta un ataque fatal. Quien domina este arte puede volver las tornas frente a sus perseguidores y escapar no sólo con su vida, sino también con la de su presa. Requiere Pestañeo.",
          "amalgama": "Ofuscación 4"
        },
        {
          "id": "blurred-momentum",
          "name": "Ímpetu Borroso",
          "level": 4,
          "cost": "1 Enardecimiento (por turno)",
          "dicePool": "N/A",
          "duration": "Hasta que termine",
          "description": "El movimiento del vampiro se convierte en un borrón vibrante. Los ataques que logren menos éxitos que su puntuación de Celeridad fallan siempre, incluso los ataques por sorpresa y los que no permiten tirada de defensa."
        },
        {
          "id": "lightning-strike",
          "name": "Golpe Relámpago",
          "level": 5,
          "cost": "1 Enardecimiento",
          "dicePool": "Reserva de combate normal (Destreza + Atletismo o Pelea)",
          "duration": "Un ataque",
          "description": "Golpea a velocidad invisible antes de que el objetivo pueda reaccionar; el ataque va a dificultad 1. Un oponente con Celeridad 5 puede anular el Poder gastando su propio Enardecimiento y defenderse a la misma velocidad."
        },
        {
          "id": "split-second",
          "name": "Segundo Quebrado",
          "level": 5,
          "cost": "1 Enardecimiento",
          "dicePool": "Reserva de acción normal (según la actividad)",
          "duration": "Una acción",
          "description": "Puede actuar en el mismo instante en que es atacado, interrumpiendo la acción del atacante antes de que se complete. Puede usar esta acción para atacar, escapar o cualquier acción rápida."
        }
      ],
      "color": "#1a8aaa",
      "colorDark": "#0a5a7a",
      "colorGlow": "rgba(26,138,170,0.4)",
      "clanes": [
        "Banu Haqim",
        "Brujah",
        "Toreador"
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
          "duration": "Una escena",
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
          "id": "slavish-devotion",
          "name": "Devoción Servil",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Pasiva",
          "description": "Las mentes de quienes ya están bajo la Dominación del vampiro se fortalecen contra las interferencias ajenas: cualquier intento de otro Vástago de Dominarlos sufre una penalización de dados igual a la Fortaleza del usuario.",
          "amalgama": "Fortaleza 1"
        },
        {
          "id": "dementation",
          "name": "Dementación",
          "level": 2,
          "cost": "1 Enardecimiento (por escena)",
          "dicePool": "Manipulación + Dominación contra Compostura + Inteligencia",
          "duration": "Una escena",
          "description": "A través de conversación casual, un ataque por turno causa daño superficial a la Fuerza de Voluntad. Un mortal Impedido sufre un ataque de nervios o brote psicótico. Un vampiro afectado sucumbe a una Compulsión elegida por el usuario.",
          "amalgama": "Ofuscación 2"
        },
        {
          "id": "mesmerize",
          "name": "Mesmerismo",
          "level": 2,
          "cost": "1 Enardecimiento",
          "dicePool": "Manipulación + Dominación contra Inteligencia + Resolución",
          "duration": "Una escena (o hasta cumplir la orden)",
          "description": "Hipnotiza a la víctima implantando órdenes complejas que ejecutará como si fueran propias. Requiere contacto visual prolongado y relativo silencio."
        },
        {
          "id": "domitors-favor",
          "name": "Favor del Domitor",
          "level": 2,
          "cost": "1 Enardecimiento",
          "dicePool": "N/A",
          "duration": "Un mes",
          "description": "Un esclavo con Vínculo de Sangre con el vampiro encuentra mucho más difícil actuar contra su amo: sus tiradas de resistencia sufren una penalización de 3 dados y no puede gastar Fuerza de Voluntad en ellas. Los Tzimisce que usan Dominación lo aprecian especialmente."
        },
        {
          "id": "submerged-directive",
          "name": "Directriz Sumergida",
          "level": 3,
          "cost": "Ninguno",
          "dicePool": "Como Mesmerismo",
          "duration": "Pasiva (no expira)",
          "description": "Amplía Mesmerismo para implantar órdenes con disparadores condicionales: la orden permanece dormida hasta que ocurra un evento específico fijado por el vampiro."
        },
        {
          "id": "forgetful-mind",
          "name": "Mente Olvidadiza",
          "level": 3,
          "cost": "1 Enardecimiento",
          "dicePool": "Manipulación + Dominación contra Inteligencia + Resolución",
          "duration": "Indefinida",
          "description": "Reescribe o borra fragmentos enteros de memoria. Cada punto de margen permite añadir o eliminar un recuerdo. La víctima los recuerda vagos y borrosos, susceptibles de desmoronarse bajo interrogatorio. Victoria crítica crea recuerdos perfectos e indistinguibles."
        },
        {
          "id": "rationalize",
          "name": "Racionalizar",
          "level": 4,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Indefinida",
          "description": "Las víctimas defienden como propia cualquier acción hecha bajo Dominación. Si son presionadas, pueden tirar Astucia + Consciencia dif. 5 para cuestionar su propia declaración (y posiblemente su cordura). Exposición prolongada causa trauma mental grave."
        },
        {
          "id": "ancestral-dominion",
          "name": "Control Ancestral",
          "level": 4,
          "cost": "1 Enardecimiento",
          "dicePool": "Manipulación + Dominación contra Inteligencia + Ocultismo",
          "duration": "Una escena (o hasta cumplir la orden)",
          "description": "Permite imponer la voluntad a un descendiente a través de la Sangre, sin contacto visual ni palabra alguna, aunque el objetivo normalmente hiciera lo contrario. Los vampiros saben instintivamente cuándo un ancestro les está manipulando así. Requiere Mesmerismo.",
          "amalgama": "Hechicería de Sangre 2"
        },
        {
          "id": "implant-suggestion",
          "name": "Implantar Sugestión",
          "level": 4,
          "cost": "1 Enardecimiento",
          "dicePool": "Manipulación + Dominación contra Compostura + Resolución",
          "duration": "Una escena",
          "description": "Altera temporalmente la personalidad o las opiniones del sujeto: puede hacer que desee a un extraño, abandone a su familia, desconfíe de sus propias creencias o simplemente quiera una cerveza. Usarlo sin discreción suele costar el ostracismo entre los Vástagos.",
          "amalgama": "Presencia 1"
        },
        {
          "id": "terminal-decree",
          "name": "Decreto Terminal",
          "level": 5,
          "cost": "Ninguno (coste en Humanidad)",
          "dicePool": "Como el Poder base (el de Dominación usado)",
          "duration": "Pasiva",
          "description": "Elimina el fallo automático de las órdenes que causan muerte o lesión grave; ahora se resisten con tirada normal (según el Poder aplicado). Puede hacer que mortales se suiciden o que vampiros caminen al fuego. Coste severo en Humanidad."
        },
        {
          "id": "mass-manipulation",
          "name": "Manipulación en Masa",
          "level": 5,
          "cost": "+1 Enardecimiento (sobre el Poder base)",
          "dicePool": "Como el Poder base, contra el oponente más fuerte del grupo",
          "duration": "La del Poder base",
          "description": "Amplifica cualquier otro Poder de Dominación para afectar a grupos de mortales o vampiros. Todas las víctimas han de ver los ojos del usuario. La tirada se hace contra el oponente más fuerte del grupo."
        }
      ],
      "color": "#2a5aaa",
      "colorDark": "#152575",
      "colorGlow": "rgba(42,90,170,0.4)",
      "clanes": [
        "Lasombra",
        "Malkavian",
        "Salubri",
        "Tremere",
        "Tzimisce",
        "Ventrue"
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
          "cost": "1 Enardecimiento (ninguno con el famulus)",
          "dicePool": "Resistencia + Animalismo (para animales que no sean famulus)",
          "duration": "Una escena",
          "description": "Comparte parte de la dureza sobrenatural del vampiro con los animales bajo su control, aumentando su resistencia al daño.",
          "amalgama": "Animalismo 1"
        },
        {
          "id": "toughness",
          "name": "Dureza",
          "level": 2,
          "cost": "1 Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "Convierte una cantidad de daño agravado igual a la puntuación de Fortaleza en superficial cuando lo sufre. El superficial así generado no se sana durante la escena. Convierte por escena (no por herida). Puede activarse de forma refleja al recibir agravado con Astucia + Supervivencia dif. 3."
        },
        {
          "id": "earths-perseverance",
          "name": "Perseverancia de la Tierra",
          "level": 2,
          "cost": "1 Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "El vampiro recurre a la permanencia de la Tierra, se afianza en el suelo y se vuelve casi imposible de mover: sólo se desplaza si él decide hacerlo. No le hace resistente al daño, y aún puede ser aplastado o hecho trizas igual que el suelo que pisa."
        },
        {
          "id": "invigorating-vitae",
          "name": "Vitae Vigorizante",
          "level": 2,
          "cost": "Ninguno (aparte de dar Sangre)",
          "dicePool": "N/A",
          "duration": "Pasiva",
          "description": "La Sangre del vampiro repara la carne mortal y cura males con una eficacia sorprendente: los seres vivos que tomen su Vitae recuperan la salud a gran velocidad.",
          "amalgama": "Auspex 1"
        },
        {
          "id": "defy-bane",
          "name": "Desafiar Prohibición",
          "level": 3,
          "cost": "1 Enardecimiento",
          "dicePool": "Astucia + Supervivencia (para activarlo en modo reflejo)",
          "duration": "Una escena",
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
          "id": "valeren",
          "name": "Valeren",
          "level": 3,
          "cost": "1 Enardecimiento (y Salud según el caso)",
          "dicePool": "Inteligencia + Fortaleza",
          "duration": "N/A",
          "description": "El vampiro proyecta su Fortaleza hacia fuera y dispone el poder de su Sangre para sanar el cuerpo herido de otro vampiro.",
          "amalgama": "Auspex 1"
        },
        {
          "id": "draught-of-endurance",
          "name": "Sorbo de Aguante",
          "level": 4,
          "cost": "1 Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una noche (vampiros: hasta alimentarse)",
          "description": "La Sangre se satura con Fortaleza. Beber un Enardecimiento del usuario otorga al bebedor Fortaleza temporal igual a la mitad (redondeado hacia abajo) del donante, con acceso a los mismos Poderes (sin Amalgamas) hasta ese nivel."
        },
        {
          "id": "gorgons-scales",
          "name": "Escamas de Gorgona",
          "level": 4,
          "cost": "1 Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena (o hasta perder la Resonancia)",
          "description": "La Resonancia de la última sangre tomada concede una defensa distinta: Colérica consume la estaca clavada en el corazón, Flemática da +4 dados contra los Poderes de Auspex que revelarían algo del vampiro, y Melancólica y Sanguínea reducen a superficial el daño agravado del fuego y de la luz solar. La Resonancia se pierde al usarla."
        },
        {
          "id": "prowess-from-pain",
          "name": "Arrojo por el Dolor",
          "level": 5,
          "cost": "1 Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "El vampiro ya no sufre penalizaciones por daño a la Salud durante el turno, incluido el fuego (pero no la luz solar). Una victoria crítica en una tirada de ataque supera este Poder."
        },
        {
          "id": "flesh-of-marble",
          "name": "Carne de Mármol",
          "level": 5,
          "cost": "2 Enardecimientos",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "El vampiro ignora la primera fuente de daño físico de cada turno, incluido el fuego (pero no la luz solar). Si hay confusión sobre cuál es la «primera», el vampiro ignora la que más daño cause ese turno. Una victoria crítica en un ataque supera este Poder."
        }
      ],
      "color": "#9a7a1a",
      "colorDark": "#6a5010",
      "colorGlow": "rgba(154,122,26,0.4)",
      "clanes": [
        "Gangrel",
        "Hécata",
        "Salubri",
        "Ventrue"
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
          "cost": "1 Enardecimiento",
          "dicePool": "Astucia + Sigilo (para mantenerse oculto en movimiento)",
          "duration": "Una escena (o hasta ser detectado)",
          "description": "Se mueve mientras permanece oculto. Funciona automáticamente si no emite olores abrumadores ni sonidos más fuertes que un susurro. Solo si atrae la atención, el observador puede tirar para detectarlo. No puede usarse para desaparecer mientras es observado (falla automáticamente)."
        },
        {
          "id": "chimerstry",
          "name": "Quimerismo",
          "level": 2,
          "cost": "1 Enardecimiento",
          "dicePool": "Manipulación + Ofuscación contra Compostura + Astucia",
          "duration": "Un turno",
          "description": "Crea alucinaciones breves pero vívidas que afectan a un solo sentido: un atisbo por el rabillo del ojo, una voz apenas oída, un roce. Duran lo justo para causar impresión, así que no sirven para nada que aguante un examen, como un carné falso.",
          "amalgama": "Presencia 1"
        },
        {
          "id": "ghost-in-the-machine",
          "name": "Fantasma en la Máquina",
          "level": 3,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "La del Poder base",
          "description": "En directo, se le trata como si estuvieran ante el vampiro. En grabaciones y fotografías, +3 a la dificultad para identificarlo (imagen borrosa). +3 dados a las reservas para eludir vigilancia electrónica y contramedidas automatizadas."
        },
        {
          "id": "mask-of-a-thousand-faces",
          "name": "Máscara de las Mil Caras",
          "level": 3,
          "cost": "1 Enardecimiento",
          "dicePool": "Manipulación + Subterfugio (para pasar desapercibido activamente)",
          "duration": "Una escena",
          "description": "Sin tirada. Adopta la apariencia de un desconocido olvidable del mismo sexo y de constitución similar; la ropa se adapta al entorno (vigilante en una oficina, operario en una fábrica). No proporciona identificación ni engaña en un control de identidad. Sentir lo Invisible lo detecta."
        },
        {
          "id": "fata-morgana",
          "name": "Fata Morgana",
          "level": 3,
          "cost": "1 Enardecimiento",
          "dicePool": "Manipulación + Ofuscación",
          "duration": "Una escena",
          "description": "Alucinaciones elaboradas que cualquiera capaz de ver al usuario —o al que él vea— experimenta con varios sentidos a la vez. No alteran la realidad ni causan daño, no pueden ocultar objetos ni bloquear la vista, no sobrecargan los sentidos y no quedan registradas por cámaras.",
          "amalgama": "Presencia 2"
        },
        {
          "id": "mental-maze",
          "name": "Laberinto Mental",
          "level": 3,
          "cost": "1 Enardecimiento (o 3)",
          "dicePool": "Carisma + Ofuscación contra Astucia + Resolución",
          "duration": "Una noche",
          "description": "Elimina todo sentido de la orientación de la víctima y la aprisiona en el lugar donde se encuentra. El sitio parece replegarse sobre sí mismo, cada salida parece llevarla más adentro del laberinto y al final la rompe por el pánico.",
          "amalgama": "Dominación 1"
        },
        {
          "id": "mental-masquerade",
          "name": "Mascarada Mental",
          "level": 3,
          "cost": "1 Enardecimiento",
          "dicePool": "Inteligencia + Ofuscación",
          "duration": "Una escena",
          "description": "Presenta una personalidad completamente distinta a quien lea su estado mental, su aura o sus pensamientos por medios sobrenaturales. Quien mire su mente ve sólo lo que el usuario quiere que vea, y sólo los adivinos más dotados atraviesan la fachada.",
          "amalgama": "Dominación 2"
        },
        {
          "id": "vanish",
          "name": "Desvanecerse",
          "level": 4,
          "cost": "El del Poder base",
          "dicePool": "Astucia + Ofuscación contra Astucia + Consciencia",
          "duration": "La del Poder base",
          "description": "(Prerrequisito: Capa de Sombras) Desaparece incluso bajo observación directa. Con victoria, el observador duda que el vampiro estuviera allí. Con victoria crítica, el vampiro desaparece por completo de sus recuerdos. No afecta a la memoria de otros vampiros. Una vez por escena."
        },
        {
          "id": "conceal",
          "name": "Ocultar",
          "level": 4,
          "cost": "1 Enardecimiento",
          "dicePool": "Inteligencia + Ofuscación",
          "duration": "Una noche (+1 por margen)",
          "description": "Oculta un objeto inanimado tocándolo. Dificultad entre 2 (anillo entre recuerdos) y 6 (casa en una plaza abierta). Máximo tamaño: casa de dos pisos. Oculta también su contenido si el espectador no entra. Una noche +1 por punto de margen.",
          "amalgama": "Auspex 3"
        },
        {
          "id": "impostors-guise",
          "name": "Disfraz del Impostor",
          "level": 5,
          "cost": "1 Enardecimiento",
          "dicePool": "Astucia + Ofuscación, Manipulación + Interpretación",
          "duration": "Una escena",
          "description": "(Prerrequisito: Máscara de las Mil Caras) Adopta la apariencia exacta de una persona específica conocida, incluyendo voz y manierismos."
        },
        {
          "id": "cloak-the-gathering",
          "name": "Encubrimiento de la Concurrencia",
          "level": 5,
          "cost": "+1 Enardecimiento (sobre el Poder base)",
          "dicePool": "N/A",
          "duration": "La del Poder base",
          "description": "Extiende cualquier Poder de Ofuscación a un grupo cercano sin tirada. Los miembros pueden verse entre sí. Si uno del grupo (que no sea el usuario) queda descubierto, el resto sigue oculto. Si es el usuario quien es descubierto, todos quedan expuestos."
        }
      ],
      "color": "#5a5a7a",
      "colorDark": "#2a2a4a",
      "colorGlow": "rgba(90,90,122,0.4)",
      "clanes": [
        "Banu Haqim",
        "El Ministerio",
        "Malkavian",
        "Nosferatu",
        "Ravnos"
      ],
      "iconType": "ghost"
    },
    {
      "id": "oblivion",
      "name": "Olvido",
      "description": "Pocos Vástagos fuera de los Clanes Lasombra y Hécata conocen Olvido, y para la Camarilla eso es algo bueno. Sus Poderes controlan las sombras y los espíritus de un plano de muerte y vacío que unos llaman el Abismo y otros el Laberinto: envolverse en la noche, esclavizar espectros o estrangular a una víctima con su propia sombra. Las sombras abisales no pueden atacarse por medios físicos, pero sufren daño del fuego y de la luz solar, y la Disciplina no funciona en zonas muy iluminadas. Nota: un 1 o un 10 en un control de Enardecimiento de Olvido causa una Mácula.",
      "tipo": "Mental",
      "amenaza": "Media-alta. Las sombras abisales rara vez se muestran bien en cámara, pero son obviamente antinaturales si se ven en persona.",
      "resonancia": "Sociópatas y gente emocionalmente distante. Sangre libre de Resonancia.",
      "color": "#6a4a8a",
      "colorDark": "#2a1a3a",
      "colorGlow": "rgba(106,74,138,0.4)",
      "clanes": [
        "Hécata",
        "Lasombra"
      ],
      "iconType": "olvido",
      "powers": [
        {
          "id": "ashes-to-ashes",
          "name": "Cenizas a las Cenizas",
          "level": 1,
          "cost": "1 Enardecimiento",
          "dicePool": "Resistencia + Olvido contra Resistencia + Medicina o Fortaleza",
          "duration": "Variable",
          "description": "Introduciendo Vitae en un cadáver, el vampiro lo desintegra en tres turnos. No funciona sobre vampiros; contra un cadáver animado exige una contienda, y un fallo total lo deja podrido pero inmune a este Poder para siempre, de cualquier usuario."
        },
        {
          "id": "binding-fetter",
          "name": "El Grillete Vinculante",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "Astucia + Olvido",
          "duration": "Una escena",
          "description": "Identifica los Grilletes: objetos, edificios o incluso personas que atan a un fantasma a la existencia. Sus auras se perciben por la vista, el olfato y otros sentidos, pero la concentración distrae de todo lo demás e impone −2 a las tiradas de Consciencia, Astucia y Resolución."
        },
        {
          "id": "shadow-cloak",
          "name": "Manto de Sombras",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Pasiva",
          "description": "Aplicando sutilmente la influencia de Olvido a las sombras ambientales, el vampiro enmascara su apariencia o parece más siniestro y amenazante: +2 dados en las tiradas de Sigilo y en las de Intimidación contra mortales."
        },
        {
          "id": "oblivions-sight",
          "name": "Vista del Olvido",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "Los ojos del vampiro se vuelven negros. Ignora todas las penalizaciones por escasez de luz, incluidas las de origen sobrenatural, y percibe a los fantasmas que no estén ocultando activamente su presencia, que se le aparecen como deseen."
        },
        {
          "id": "shadow-cast",
          "name": "Arrojar Sombras",
          "level": 2,
          "cost": "1 Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "Conjura una sombra sobrenatural del propio cuerpo, independiente de la luz ambiental, con la que manifestar el resto de Poderes de Olvido. Puede dirigirla y alargarla hasta el doble de su puntuación de Olvido en metros, y sólo la borra la luz solar directa."
        },
        {
          "id": "arms-of-ahriman",
          "name": "Brazos de Ahrimán",
          "level": 2,
          "cost": "1 Enardecimiento",
          "dicePool": "Astucia + Olvido",
          "duration": "Una escena",
          "description": "Tentáculos de sombra brotan de los puntos oscuros del entorno y convergen sobre una o más víctimas para aporrearlas o hacerles presa a distancia. Atacan con Astucia + Olvido y suman la mitad de la Potencia del usuario al daño, pero éste no puede hacer nada más mientras los controla.",
          "amalgama": "Potencia 2"
        },
        {
          "id": "where-the-veil-thins",
          "name": "Donde el Velo se Adelgaza",
          "level": 2,
          "cost": "1 Enardecimiento",
          "dicePool": "Inteligencia + Olvido",
          "duration": "Un turno",
          "description": "Determina la densidad del Manto entre el mundo de los vivos y el de los muertos en un área de hasta un edificio o monumento entero. Donde es más fino, la salud de los mortales sufre y las tiradas de Olvido resultan más fáciles; sin este Poder no puede aprovecharse ese adelgazamiento."
        },
        {
          "id": "fatal-precognition",
          "name": "Predicción Fatal",
          "level": 2,
          "cost": "1 Enardecimiento",
          "dicePool": "Resolución + Olvido contra Astucia + Ocultismo",
          "duration": "24 horas",
          "description": "Urde hebras invisibles de entropía en un objetivo mortal y aumenta las probabilidades de que sufra daño o incluso la muerte en el plazo de una noche y un día. Recuerda a una maldición, pero el vampiro no puede interferir con el condenado sin romper el efecto.",
          "amalgama": "Auspex 2"
        },
        {
          "id": "aura-of-decay",
          "name": "Aura de Descomposición",
          "level": 3,
          "cost": "1 Enardecimiento",
          "dicePool": "Resistencia + Olvido contra Resistencia + Medicina o Fortaleza",
          "duration": "Una escena",
          "description": "Las plantas se marchitan, la comida se estropea y los animales y las personas enferman alrededor del vampiro, que contamina la vitalidad con podredumbre y acelera la erosión de la vida."
        },
        {
          "id": "passion-feast",
          "name": "Festín de Pasión",
          "level": 3,
          "cost": "Ninguno",
          "dicePool": "Resolución + Olvido contra Resolución + Compostura",
          "duration": "Pasiva",
          "description": "Permite subsistir de las Pasiones de los wraiths en lugar de sangre, lo que sostiene al vampiro durante largas estancias en las tierras de los muertos a costa de atormentar al espíritu del que se alimenta.",
          "amalgama": "Fortaleza 2"
        },
        {
          "id": "shadow-perspective",
          "name": "Perspectiva de Sombra",
          "level": 3,
          "cost": "1 Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "Proyecta los sentidos en cualquier sombra a la vista —incluida la propia, si usa Arrojar Sombras— y ve y oye desde cualquier parte de ella. Su presencia allí es indetectable salvo por medios sobrenaturales."
        },
        {
          "id": "shadow-servant",
          "name": "Sirviente Sombrío",
          "level": 3,
          "cost": "1 Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "El vampiro otorga vida independiente a una parte de su sombra y la envía a espiar o a inquietar a sus enemigos.",
          "amalgama": "Auspex 1"
        },
        {
          "id": "touch-of-oblivion",
          "name": "Toque de Olvido",
          "level": 3,
          "cost": "1 Enardecimiento",
          "dicePool": "Fuerza + Pelea (si la víctima se resiste)",
          "duration": "Un turno",
          "description": "Un simple toque envejece de forma catastrófica la parte afectada: marchita un miembro, ahoga una garganta o ciega un par de ojos. Inflige 2 niveles de daño agravado y una herida incapacitante."
        },
        {
          "id": "stygian-shroud",
          "name": "Manto Estigio",
          "level": 4,
          "cost": "1 Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "Extiende una capa de oscuridad sobre un área circular igual al doble de su puntuación de Olvido en metros, que amortigua los sonidos y los vuelve indistintos. Desde fuera sólo se ve una sombra expandiéndose sobre cada superficie, incluidos los cuerpos de las víctimas."
        },
        {
          "id": "necrotic-plague",
          "name": "Plaga Necrótica",
          "level": 4,
          "cost": "1 Enardecimiento",
          "dicePool": "Inteligencia + Olvido contra Resistencia + Resistencia o Fortaleza",
          "duration": "Variable",
          "description": "Con un simple contacto, el vampiro envenena la sangre de la víctima con una enfermedad que arruina y asola su cuerpo. También puede hacerla contagiosa, para transmitir el mismo daño a otros mortales."
        },
        {
          "id": "tenebrous-avatar",
          "name": "Avatar Tenebroso",
          "level": 5,
          "cost": "2 Enardecimientos",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "El vampiro convierte su propia sustancia en sombra y se escurre por cualquier superficie y por las rendijas más minúsculas. Mientras esté en esta forma, sólo pueden dañarle el fuego y la luz solar."
        },
        {
          "id": "shadow-step",
          "name": "Caminar por las Sombras",
          "level": 5,
          "cost": "1 Enardecimiento",
          "dicePool": "N/A",
          "duration": "Un turno",
          "description": "Internándose en una sombra lo bastante grande para abarcarlo, el vampiro desaparece y sale un turno más tarde de otra sombra lejana que pueda ver, sea a simple vista o por medios místicos. El daño espiritual con el que a veces emerge sugiere que atraviesa algo nauseabundo."
        },
        {
          "id": "skuld-fulfilled",
          "name": "Skuld Cumplido",
          "level": 5,
          "cost": "2 Enardecimientos",
          "dicePool": "Resistencia + Olvido contra Resistencia + Resistencia o Fortaleza",
          "duration": "Variable",
          "description": "Reinfecta a una víctima con enfermedades de las que se había recuperado, rompe huesos sanados hace mucho y revoca la inmunidad al envejecimiento de los Ghouls. No funciona sobre vampiros, pero es una forma eficaz de saltárselos golpeando a sus sirvientes."
        }
      ]
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
          "cost": "1 Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "Añade el nivel de Potencia al daño sin armas y a las proezas de Fuerza. Añade la mitad de Potencia (redondeado hacia arriba) al daño de Pelea con Armas."
        },
        {
          "id": "relentless-grasp",
          "name": "Agarre Implacable",
          "level": 2,
          "cost": "1 Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "El agarre del vampiro se vuelve imposiblemente fuerte: una vez que se aferra a algo, sólo se suelta desmembrándolo. Suma su puntuación de Potencia como éxitos automáticos a cualquier intento de sujetarse o mantener una presa, aunque no a la presa inicial."
        },
        {
          "id": "uncanny-grip",
          "name": "Agarre Asombroso",
          "level": 3,
          "cost": "1 Enardecimiento",
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
          "cost": "1 Enardecimiento",
          "dicePool": "Manipulación + Potencia",
          "duration": "Una escena",
          "description": "Transmite rabia sobrenatural a criaturas cercanas, pudiendo desencadenar Frenesís en otros vampiros o brutalidad en mortales.",
          "amalgama": "Presencia 3"
        },
        {
          "id": "wrecker",
          "name": "Desguazador",
          "level": 3,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "La del Poder base",
          "description": "Aplica una fuerza violenta e indiscriminada contra un objeto estático para romperlo, aplastarlo y destruirlo. El tiempo que exige reunir esa fuerza lo hace inútil en una pelea, pero abre puertas, inmoviliza coches y hace ejemplos de estatuas. Requiere Bravura."
        },
        {
          "id": "draught-of-might",
          "name": "Sorbo de Poderío",
          "level": 4,
          "cost": "1 Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una noche (vampiros: hasta alimentarse)",
          "description": "La Sangre se satura con Potencia. Beber un Enardecimiento del usuario otorga al bebedor Potencia temporal igual a la mitad (redondeado hacia abajo) del donante, con acceso a los mismos Poderes (sin Amalgamas) hasta ese nivel."
        },
        {
          "id": "crash-down",
          "name": "Desplome",
          "level": 4,
          "cost": "1 Enardecimiento",
          "dicePool": "Fuerza + Potencia",
          "duration": "N/A",
          "description": "El vampiro clava el aterrizaje de Salto Vertiginoso a lo grande: se detiene de forma imparable en un punto y daña a cualquiera que esté cerca o debajo de donde cae. Requiere Salto Vertiginoso."
        },
        {
          "id": "fist-of-caine",
          "name": "Puño de Caín",
          "level": 5,
          "cost": "1 Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "Durante una escena, los ataques de Pelea causan daño agravado a la Salud tanto a mortales como sobrenaturales. Literalmente desgarra la carne y arranca extremidades con las manos desnudas."
        },
        {
          "id": "earthshock",
          "name": "Temblor de Tierra",
          "level": 5,
          "cost": "2 Enardecimientos",
          "dicePool": "Fuerza + Atletismo contra Destreza + Atletismo de cada objetivo",
          "duration": "Un uso",
          "description": "Golpea el suelo generando una onda de choque que derriba y aturde a todos los oponentes en un radio cercano. Los afectados caen al suelo y pierden su próxima acción."
        },
        {
          "id": "subtle-hammer",
          "name": "Martillo Sutil",
          "level": 5,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Pasiva",
          "description": "Cada parte del cuerpo del vampiro proyecta la suma de su fuerza: un capirotazo transmite el poder de un puñetazo entero y la punta de un dedo del pie parte el cemento. No lo hace más fuerte, sino capaz de usar su fuerza con una precisión inhumana: los ataques sin armas y las proezas de fuerza pasan a ser acciones secundarias de dos dados, una por turno."
        }
      ],
      "color": "#9a1a1a",
      "colorDark": "#6a0808",
      "colorGlow": "rgba(154,26,26,0.4)",
      "clanes": [
        "Brujah",
        "Lasombra",
        "Nosferatu"
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
          "duration": "Una escena",
          "description": "Añade el valor de Presencia a cualquier tirada de Intimidación. Atacar al usuario requiere una tirada de Resolución + Compostura dif. 2. Fascinación y Atemorizar no pueden usarse a la vez."
        },
        {
          "id": "awe",
          "name": "Fascinación",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "Manipulación + Presencia contra Compostura + Inteligencia",
          "duration": "Una escena",
          "description": "Añade Presencia a tiradas de Persuasión, Interpretación y otras de Carisma. Quien note el efecto puede resistir con contienda Compostura + Inteligencia. Victoria = inmune una escena; crítica = inmune toda la noche. Los efectos de Presencia no se acumulan."
        },
        {
          "id": "eyes-of-the-serpent",
          "name": "Ojos de la Serpiente",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "Carisma + Presencia contra Astucia + Compostura",
          "duration": "Una escena (o hasta romper el contacto)",
          "description": "Los ojos del vampiro se vuelven orbes rasgados de serpiente y congelan en el sitio al mortal que le sostenga la mirada. También puede hipnotizar así a otros vampiros, pero el efecto es fugaz y es probable que despierte la ira de la víctima.",
          "amalgama": "Protean 1"
        },
        {
          "id": "lingering-kiss",
          "name": "Beso Persistente",
          "level": 2,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Hasta resistirla",
          "description": "Los mortales alimentados se vuelven adictos al Beso. Añade el valor de Presencia como dados extra a cualquier tirada de Carisma posterior contra la víctima mordida. Puede provocar anemia, autolesión o muerte por adicción. Prueba de Fuerza de Voluntad dif. = Presencia semanal para resistir (3 semanas seguidas rompe el efecto)."
        },
        {
          "id": "melpominee",
          "name": "Melpómene",
          "level": 2,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "N/A",
          "description": "La voz del usuario se convierte en la de una sirena, capaz de embelesar o aterrorizar por sí sola. Puede aplicar Atemorizar, Encantamiento, Fascinación, Majestad y Mirada Aterradora sin ver al objetivo, que sólo necesita estar lo bastante cerca para oírle. No conserva su efecto grabada ni transmitida."
        },
        {
          "id": "entrancement",
          "name": "Encantamiento",
          "level": 3,
          "cost": "1 Enardecimiento",
          "dicePool": "Carisma + Presencia contra Compostura + Astucia",
          "duration": "Una hora (+1 por margen)",
          "description": "Enfoca el encanto en una persona (similar a enamoramiento). El usuario suma Presencia a cualquier reserva Social contra el sujeto en trance. Peticiones que dañen al sujeto o sus seres queridos exigen una contienda; un fallo termina el efecto y lo inmuniza el resto de la noche."
        },
        {
          "id": "dread-gaze",
          "name": "Mirada Aterradora",
          "level": 3,
          "cost": "1 Enardecimiento",
          "dicePool": "Carisma + Presencia contra Compostura + Resolución",
          "duration": "Un turno",
          "description": "Fallo: mortales solo defensa propia un turno; vampiros inafectados. Victoria: mortales huyen; vampiros solo defensa propia (o gastan Fuerza de Voluntad = margen). Victoria crítica: mortales paralizados o en posición fetal; vampiros hacen Frenesí de terror dif. 3."
        },
        {
          "id": "thrown-voice",
          "name": "Voz Arrojada",
          "level": 3,
          "cost": "1 Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "La voz del vampiro emana de cualquier punto a la vista, como susurro o como grito, y suena como si él estuviera allí. También puede dejarla en un lugar para que siga seduciendo o aterrorizando a quien atraiga, según el Poder que la acompañe.",
          "amalgama": "Auspex 1"
        },
        {
          "id": "summon",
          "name": "Invocación",
          "level": 4,
          "cost": "1 Enardecimiento",
          "dicePool": "Manipulación + Presencia contra Compostura + Inteligencia",
          "duration": "Una noche",
          "description": "Convoca a alguien sobre quien haya usado Fascinación, Encantamiento, Majestad o que haya probado su Sangre. El objetivo sabe quién lo convoca y dónde está. Victoria = puede acudir o no; crítica = llega lo antes posible salvo riesgo inmediato. No se pondrá en peligro físico o financiero."
        },
        {
          "id": "irresistible-voice",
          "name": "Voz Irresistible",
          "level": 4,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Pasiva",
          "description": "Basta que se escuche la voz del usuario para aplicar Poderes de Dominación. No funciona a través de medios electrónicos (teléfono, TV, interfonos).",
          "amalgama": "Dominación 1"
        },
        {
          "id": "suffuse-the-edifice",
          "name": "Cubrir el Edificio",
          "level": 4,
          "cost": "El del Poder base",
          "dicePool": "Como el Poder base (Fascinación, Atemorizar o Majestad)",
          "duration": "La del Poder base",
          "description": "Mientras está dentro de un edificio o lugar semejante, el vampiro extiende Fascinación, Atemorizar y Majestad a la estructura misma. Cualquiera que esté dentro o lo observe desde fuera reacciona al edificio como si el propio vampiro estuviera presente."
        },
        {
          "id": "star-magnetism",
          "name": "Magnetismo de Estrella",
          "level": 5,
          "cost": "+1 Enardecimiento (sobre el Poder base)",
          "dicePool": "N/A",
          "duration": "La del Poder base",
          "description": "Fascinación, Atemorizar y Encantamiento pueden transmitirse por transmisiones en directo (no grabaciones). Si se usa Encantamiento, hay que pronunciar el nombre de la víctima con claridad (afecta a una persona). Los demás lo perciben como encantador, pero no sobrenaturalmente."
        },
        {
          "id": "majesty",
          "name": "Majestad",
          "level": 5,
          "cost": "2 Enardecimientos",
          "dicePool": "Carisma + Presencia contra Compostura + Resolución",
          "duration": "Una escena",
          "description": "Los presentes solo pueden mirarlo boquiabiertos o desviar la mirada con miedo/sumisión. Actuar en su contra (excepto por supervivencia) requiere contienda Compostura + Resolución contra Carisma + Presencia. Victoria = un turno libre por punto de margen; solo la victoria crítica resiste toda la escena."
        }
      ],
      "color": "#9a3a6a",
      "colorDark": "#6a1a4a",
      "colorGlow": "rgba(154,58,106,0.4)",
      "clanes": [
        "Brujah",
        "El Ministerio",
        "Ravnos",
        "Toreador",
        "Ventrue"
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
          "duration": "A voluntad",
          "description": "Los ojos brillan rojos. Ignora cualquier penalización a la visión por oscuridad, incluso sobrenatural. La apariencia inhumana otorga +2 dados a la reserva de Intimidación contra mortales."
        },
        {
          "id": "weight-of-the-feather",
          "name": "Peso de la Pluma",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "Astucia + Supervivencia",
          "duration": "A voluntad",
          "description": "Reduce su masa efectiva. Inmune al daño por caídas, colisiones y ser arrojado; no activa sensores de presión. La fuerza se reduce proporcionalmente (no sirve para saltos más largos). Si es reactivo (caída súbita), tirada a dificultad 3."
        },
        {
          "id": "feral-weapons",
          "name": "Armas Salvajes",
          "level": 2,
          "cost": "1 Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "Extiende sus armas naturales (uñas hasta garras, colmillos hasta dagas). +2 al daño de Pelea; agravado contra mortales y superficial —no reducido a la mitad— contra vampiros."
        },
        {
          "id": "vicissitude",
          "name": "Vicisitud",
          "level": 2,
          "cost": "1 Enardecimiento",
          "dicePool": "Resolución + Protean",
          "duration": "Permanente",
          "description": "El vampiro exige obediencia a su propia carne: piel, músculo y hueso pueden esculpirse o retorcerse en otras formas, desde herramientas corporales útiles hasta adornos expresivos. El resultado a veces es desconcertantemente hermoso y otras sólo monstruoso, y las transformaciones mayores cobran un altísimo precio a su físico.",
          "amalgama": "Dominación 2"
        },
        {
          "id": "shapechange",
          "name": "Cambiar de Forma",
          "level": 3,
          "cost": "1 Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "Se transforma en un animal de masa similar (típicamente lobo, felino grande o serpiente gigante) asociado al Clan. La transformación tarda un turno sin poder hacer nada más. Adquiere Atributos Físicos, sentidos y Habilidades del animal, y sus límites naturales."
        },
        {
          "id": "earth-meld",
          "name": "Fusión con la Tierra",
          "level": 3,
          "cost": "1 Enardecimiento",
          "dicePool": "N/A",
          "duration": "Un día o más",
          "description": "Se hunde en superficie natural (roca, tierra desnuda, hierba) — no funciona en hormigón ni asfalto. Tarda un turno; deja los objetos transportados en la superficie. Es consciente de su entorno salvo durante el sueño diurno. Sube la noche siguiente salvo Letargo."
        },
        {
          "id": "fleshcrafting",
          "name": "Moldear Carne",
          "level": 3,
          "cost": "1 Enardecimiento",
          "dicePool": "Resolución + Protean contra Resistencia + Resolución",
          "duration": "Permanente",
          "description": "Amplía el dominio sobre la carne a los cuerpos ajenos. Es un Poder temido con razón, porque muchos de quienes lo usan tienen fama de torturadores inhumanos, aunque otros lo emplean con gran efecto para mejorar y adaptar a sus sirvientes y aliados. Requiere Vicisitud.",
          "amalgama": "Dominación 2"
        },
        {
          "id": "metamorphosis",
          "name": "Metamorfosis",
          "level": 4,
          "cost": "1 Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "(Prerrequisito: Cambiar de Forma) Otorga una forma animal adicional (murciélago, rata, insectos inusualmente grandes o serpientes) y permite cambiar el tamaño."
        },
        {
          "id": "horrid-form",
          "name": "Forma Horrenda",
          "level": 4,
          "cost": "1 Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "El vampiro asume una forma verdaderamente monstruosa, con garras terribles, colmillos prominentes y músculos nervudos: su Bestia hecha carne, casi siempre la misma cada vez. Activarla lleva un turno completo, durante el cual sólo puede defenderse con sus reservas previas. Requiere Vicisitud.",
          "amalgama": "Dominación 2"
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
          "cost": "1-3 Enardecimientos",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "Se convierte en niebla intangible: atraviesa tuberías, hendiduras y grietas. La transformación tarda 3 turnos (acelerable con Enardecimientos extra, uno por turno). Se mueve a velocidad de paseo; no puede hablar, atacar ni usar la mayoría de Disciplinas. Vulnerable solo a luz solar, fuego y ataques sobrenaturales inmateriales."
        },
        {
          "id": "one-with-the-land",
          "name": "Uno con la Tierra",
          "level": 5,
          "cost": "2 Enardecimientos",
          "dicePool": "N/A",
          "duration": "Un día o más",
          "description": "Como Fusión con la Tierra, pero sin que le limite la composición de la superficie en la que descansa: hay vampiros que se introducen en los muros de sus haciendas. Además, mantiene una consciencia preternatural de lo que ocurre en el dominio. Requiere Fusión con la Tierra.",
          "amalgama": "Animalismo 2"
        }
      ],
      "color": "#3a7a4a",
      "colorDark": "#1a4a2a",
      "colorGlow": "rgba(58,122,74,0.4)",
      "clanes": [
        "El Ministerio",
        "Gangrel",
        "Tzimisce"
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
          "cost": "1+ Enardecimiento",
          "dicePool": "Resolución + Hechicería de Sangre (para controlar la corrosión con precisión)",
          "duration": "N/A",
          "description": "Altera su Sangre haciéndola corrosiva al contacto con materiales muertos: disuelve ropa, madera, metal, cerrojo o grilletes. El Ansia gastado determina la potencia del ácido."
        },
        {
          "id": "extinguish-vitae",
          "name": "Extinguir Vitae",
          "level": 2,
          "cost": "1 Enardecimiento",
          "dicePool": "Inteligencia + Hechicería de Sangre contra Resistencia + Compostura",
          "duration": "N/A",
          "description": "Contienda contra un vampiro en su línea de visión mientras se concentra un turno. Victoria = +1 al Ansia del objetivo; victoria crítica = +2. Si la víctima ve al usuario, puede identificarlo con Inteligencia + Ocultismo contra Astucia + Subterfugio."
        },
        {
          "id": "track-secrets",
          "name": "Rastrear Secretos",
          "level": 2,
          "cost": "1 Enardecimiento",
          "dicePool": "Inteligencia + Hechicería de Sangre",
          "duration": "Una noche",
          "description": "El hechicero desata riachuelos de su Sangre que buscan información sobre un tema de su elección, lo que le permite rastrear bibliotecas enteras en cuestión de minutos. Lo investigado queda después con una delatora mancha de sangre."
        },
        {
          "id": "blood-of-potency",
          "name": "Sangre de Potencia",
          "level": 3,
          "cost": "1 Enardecimiento",
          "dicePool": "Resolución + Hechicería de Sangre",
          "duration": "Escena o noche",
          "description": "Tirada Resolución + Hechicería de Sangre dif. 2 + Potencia de Sangre actual. Victoria = +1 Potencia de Sangre esa escena; victoria crítica = +2. Permite superar el límite de Potencia por Generación mientras dure."
        },
        {
          "id": "scorpions-touch",
          "name": "Toque de Escorpión",
          "level": 3,
          "cost": "1+ Enardecimiento",
          "dicePool": "Fuerza + Hechicería de Sangre contra Resistencia + Ocultismo o Fortaleza",
          "duration": "Una escena",
          "description": "Cada Enardecimiento cubre un arma cuerpo a cuerpo o permite escupir. Si impacta, contienda Fuerza + Hechicería de Sangre contra Resistencia + Ocultismo (o Fortaleza). Daño = margen: agravado a mortales, superficial no reducido a vampiros. Un mortal con siquiera 1 punto cae inconsciente."
        },
        {
          "id": "theft-of-vitae",
          "name": "Robo de Vitae",
          "level": 4,
          "cost": "1 Enardecimiento",
          "dicePool": "Astucia + Hechicería de Sangre contra Astucia + Ocultismo",
          "duration": "Una alimentación",
          "description": "Abre una herida en un mortal a distancia; la sangre sale disparada hacia la boca del usuario. Se alimenta al doble de velocidad (triple con victoria crítica). No puede hacer nada más mientras dure. La armadura no protege (la víctima se desangra dentro del traje). La herida se cierra al acabar."
        },
        {
          "id": "blood-aegis",
          "name": "Égida de Sangre",
          "level": 4,
          "cost": "1+ Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "El vampiro obliga a su Vitae a formar una barrera protectora: una temblorosa capa de Sangre que se mueve sola para interceptar los proyectiles que se acercan. Cada Enardecimiento gastado reduce en 5 el daño de los ataques a distancia, hasta agotarse."
        },
        {
          "id": "cauldron-of-blood",
          "name": "Caldero de Sangre",
          "level": 5,
          "cost": "1 Enardecimiento (y 1+ Mácula)",
          "dicePool": "Resolución + Hechicería de Sangre contra Compostura + Ocultismo o Fortaleza",
          "duration": "Un turno",
          "description": "Requiere tocar a la víctima. Contienda Resolución + Hechicería de Sangre contra Compostura + Ocultismo (o Fortaleza). Cada punto de margen causa 1 punto de daño agravado. Un mortal con al menos 1 punto muere entre gritos. Un vampiro añade 1 Ansia por punto de daño hasta llegar a Ansia 5."
        },
        {
          "id": "baals-caress",
          "name": "Caricia de Baal",
          "level": 5,
          "cost": "1+ Enardecimiento",
          "dicePool": "Fuerza + Hechicería de Sangre contra Resistencia + Ocultismo o Fortaleza",
          "duration": "Una escena",
          "description": "Como Toque de Escorpión pero letal: si impacta, cada punto de margen causa daño agravado a mortales y vampiros por igual. Un mortal con siquiera 1 punto de daño muere al instante. Si un vampiro sufre agravado, tirada de nuevo — victoria = Letargo al dormir."
        }
      ],
      "color": "#aa1a2a",
      "colorDark": "#7a0a10",
      "colorGlow": "rgba(170,26,42,0.4)",
      "clanes": [
        "Banu Haqim",
        "Tremere"
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
          "cost": "1 Enardecimiento",
          "dicePool": "Resolución + Alquimia contra Fuerza + Atletismo",
          "duration": "Un turno (o sostenido)",
          "description": "Levanta, empuja o tira de un objeto o persona <100 kg a <10 m que pueda ver. Objetos frágiles pueden romperse. Cuchillos manejables con Resolución + Alquimia (−2 dados), daño +1. Contra sujeto resistente, contienda; con victoria, tirarlo 1 m por marge, causa superficial. Sostener flotando requiere tirada dif. 3 cada turno."
        },
        {
          "id": "profane-hieros-gamos",
          "name": "Hieros Gamos Profano",
          "level": 1,
          "cost": "1 Enardecimiento (destilación)",
          "dicePool": "Resistencia/Manipulación/Inteligencia + Alquimia (según método)",
          "duration": "Permanente",
          "description": "Permite cambiar de sexo biológico aprovechando la naturaleza fluida de la condición de Sangre Débil. El proceso tarda horas y requiere destilación."
        },
        {
          "id": "haze",
          "name": "Neblina",
          "level": 1,
          "cost": "1 Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "Nube de vapor alrededor del alquimista que oculta rasgos y silueta. Quien intente identificarlo o golpearlo con armas a distancia sufre −2 dados. Puede extenderse a un grupo de hasta 5 personas gastando otro Enardecimiento."
        },
        {
          "id": "envelop",
          "name": "Envolver",
          "level": 2,
          "cost": "1 Enardecimiento",
          "dicePool": "Astucia + Alquimia contra Resistencia + Supervivencia",
          "duration": "Una escena",
          "description": "La niebla se arremolina en torno a un objetivo a la vista: −3 dados a detección visual y ataques a distancia. Además, contra un mortal, contienda Astucia + Alquimia contra Resistencia + Supervivencia: victoria = solo puede toser sin actuar; victoria crítica = pierde la consciencia. Un solo objetivo a la vez."
        },
        {
          "id": "defractionate",
          "name": "Defraccionar",
          "level": 3,
          "cost": "1 Enardecimiento (destilación)",
          "dicePool": "Resistencia/Manipulación/Inteligencia + Alquimia (según método)",
          "duration": "N/A",
          "description": "Elixir que renueva la sangre médica fraccionada, permitiendo alimentarse a vampiros sin el Mérito Garganta de Hierro. Cada éxito en la destilación convierte una bolsa (sacia 1 Ansia)."
        },
        {
          "id": "aerial-impulse",
          "name": "Ímpetu Aéreo",
          "level": 4,
          "cost": "1 Enardecimiento",
          "dicePool": "Fuerza + Alquimia contra Fuerza + Atletismo (si se resiste)",
          "duration": "Una escena",
          "description": "Vuela o se desplaza a velocidad de carrera en cualquier dirección. Cargar a un humano reduce la velocidad a paso normal. Agarrar y cargar a un sujeto involuntario o derribar a un volador requiere contienda Fuerza + Alquimia contra Fuerza + Atletismo."
        },
        {
          "id": "awaken-the-sleeper",
          "name": "Despertar al Durmiente",
          "level": 5,
          "cost": "1 Enardecimiento (destilación)",
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
