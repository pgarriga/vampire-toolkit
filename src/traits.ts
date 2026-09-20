/**
 * Core Traits — the 9 Attributes and 27 Skills of V5.
 *
 * Source: the official Spanish PDF *Vampiro La Mascarada 5ª edición - Rasgos
 * Centrales.pdf* (corebook, "Personajes"). The content follows the book closely —
 * same readings of each score, same examples, same level of detail — but **reworded**:
 * nothing here is a verbatim transcription. When you add or edit a trait, keep that
 * balance: faithful to what the book says, phrased in our own words.
 *
 * Names are the ones the book prints, so Latrocinio rather than "Crimen" and Pelea con
 * Armas rather than "Armas cuerpo a cuerpo"; the wordings a player may remember instead
 * live in `aka`, which the search matches and nothing renders.
 *
 * `dots` always holds exactly five entries, read as the score from 1 to 5 by position.
 * `combos` is Skills only: the three Attribute + Skill rolls that Skill turns up in,
 * stored by attribute **id** so an overlay only translates the example and the
 * attribute's name can never drift from its own entry.
 */
import type { TraitsData } from './types'

export const TRAITS_DATA: TraitsData = {
  traits: [

    // ══ ATRIBUTOS FÍSICOS ════════════════════════════════════════════════════

    {
      id: 'fuerza',
      name: 'Fuerza',
      kind: 'attribute',
      category: 'fisico',
      description: 'Fuerza determina cómo de grande puede ser el mortal al que consigas levantar, con cuánta potencia eres capaz de golpearle y cuánto esfuerzo puedes exigirle a tu cuerpo inerte.',
      note: 'Entre paréntesis, el peso aproximado que puedes levantar a brazo sin necesidad de una prueba de Atributo.',
      dots: [
        'Aplastas una lata de cerveza sin esfuerzo (20 kg: un árbol de Navidad, una señal de stop).',
        'Tienes una constitución del montón (45 kg: un inodoro).',
        'Derribas una puerta de madera a golpes (115 kg: un adulto corpulento, un ataúd vacío, una nevera).',
        'Eres un espécimen físico excelente, seguramente con músculo a la vista (180 kg: un ataúd ocupado, un contenedor de basura vacío).',
        'Tu fuerza es portentosa: revientas a golpes una puerta metálica fina, abres un boquete en una valla de tela metálica o partes el candado de una puerta (250 kg: una motocicleta, un piano).',
      ],
    },

    {
      id: 'destreza',
      name: 'Destreza',
      kind: 'attribute',
      category: 'fisico',
      description: 'Destreza rige tu agilidad y tu elegancia de movimientos, con qué rapidez apartas el pecho de la estaca que va hacia tu corazón y cuánta precisión conserva tu pulso cuando el tiempo apremia.',
      dots: [
        'Corres sin problema, pero el equilibrio y los esquives se te atragantan.',
        'Tienes un sprint decente y en ocasiones hasta pareces elegante.',
        'Tu agilidad llama la atención y te coordinas tan bien como un aficionado con entrenamiento a sus espaldas.',
        'Destacas en las acrobacias y te mueves como muy pocos humanos podrían.',
        'Tus movimientos resultan fluidos e hipnóticos, casi sobrehumanos.',
      ],
    },

    {
      id: 'resistencia',
      name: 'Resistencia',
      kind: 'attribute',
      category: 'fisico',
      description: 'Tu aguante físico. Resistencia absorbe el daño que recibe tu cuerpo —una bala, la espada de un cazador— y te permite seguir adelante pese al peligro y al esfuerzo más duro.',
      note: 'Tu Salud equivale a tu Resistencia + 3.',
      dots: [
        'Hasta el esfuerzo más insignificante te deja agotado.',
        'Encajas una paliza, aunque más te valdría hacer las paces.',
        'Varias jornadas de marcha dura con mochila no te suponen ningún problema.',
        'Ganarías una maratón, o soportarías enormes cantidades de dolor; al menos en lo físico.',
        'Ni siquiera siendo mortal habrías llegado a sudar por nada.',
      ],
    },

    // ══ ATRIBUTOS SOCIALES ═══════════════════════════════════════════════════

    {
      id: 'carisma',
      name: 'Carisma',
      kind: 'attribute',
      category: 'social',
      description: 'Carisma mide tu encanto, tu gracia y tu atractivo naturales. Si lo tienes, la gente se acerca a ti y alimentarte resulta mucho más fácil. No depende de ser guapo: para eso existe un Mérito aparte.',
      dots: [
        'Te expresas con claridad, aunque poca gente te prestará atención.',
        'Resultas agradable pese a tu condición de no-muerto, e incluso podrías conservar amigos.',
        'La gente confía en ti sin pensarlo y haces amigos sin esfuerzo.',
        'Tu magnetismo personal es notable y los seguidores se te pegan como moscas.',
        'Si te lo propusieras, llevarías una ciudad entera a la rebelión.',
      ],
    },

    {
      id: 'manipulacion',
      name: 'Manipulación',
      kind: 'attribute',
      category: 'social',
      description: 'Manipulación es tu habilidad para torcer una situación hasta que los demás hagan suyo tu punto de vista, mentir de forma creíble y marcharte después de timar a alguien sin que nadie lo advierta.',
      dots: [
        'Mientras vayas de frente, convences a los demás de hacer lo que quieres.',
        'Tu talento para el engaño vence la voluntad de indecisos e ingenuos.',
        'Jamás pagas el precio completo por nada.',
        'Darías el perfil de líder de una secta o de político.',
        'Convencerías al Príncipe de invertir en unos terrenos en mitad del desierto, o incluso de levantar la Caza de Sangre que pesa sobre ti.',
      ],
    },

    {
      id: 'compostura',
      name: 'Compostura',
      kind: 'attribute',
      category: 'social',
      description: 'Compostura te permite mantener la calma, dominar tus emociones y tranquilizar a los demás pese a su nerviosismo. También representa tu sangre fría en cualquier circunstancia, lo mismo en un tiroteo que en un encuentro íntimo.',
      note: 'Tu Fuerza de Voluntad equivale a tu Compostura + Resolución.',
      dots: [
        'El insulto o el enfrentamiento más nimio puede desatarte un Frenesí.',
        'Dominas tus instintos depredadores en casi cualquier situación que no sea hostil.',
        'Los demás acuden a ti en busca de consejo cuando la sangre salpica el ventilador.',
        'Te tiras un farol a las cartas sin despeinarte y mantienes a tu Bestia bajo cierto control.',
        'Tu Bestia es poco más que una mascota.',
      ],
    },

    // ══ ATRIBUTOS MENTALES ═══════════════════════════════════════════════════

    {
      id: 'inteligencia',
      name: 'Inteligencia',
      kind: 'attribute',
      category: 'mental',
      description: 'Inteligencia mide tu capacidad de razonar, investigar y aplicar la lógica. Recuerdas y analizas la información que te llega de los libros o de tus sentidos. Ningún rompecabezas ni misterio se resiste a alguien verdaderamente inteligente.',
      dots: [
        'Lees y escribes con soltura, aunque hay términos que se te escapan.',
        'Eres lo bastante listo para reconocer tus propias limitaciones.',
        'Eres una persona culta y relacionas pistas sin dificultad.',
        'No sería raro que el Clan Tremere consultara tu criterio.',
        'La palabra «genio» se queda corta para la hondura y el alcance de tu intelecto.',
      ],
    },

    {
      id: 'astucia',
      name: 'Astucia',
      kind: 'attribute',
      category: 'mental',
      description: 'Astucia sirve para pensar deprisa y acertar con poca información. «Oyes un ruido» es Astucia; «oyes acercarse a dos vigilantes» es Inteligencia. Con ella hueles una emboscada o le contestas a la Arpía allí mismo, en plena corte, en vez de dar con la respuesta perfecta a la noche siguiente.',
      dots: [
        'Acabas entendiéndolo, pero necesitas que alguien te lo explique.',
        'Calculas las probabilidades en el póquer o tiras del freno de emergencia a tiempo. Casi siempre.',
        'Lees una situación y das enseguida con la mejor vía de escape.',
        'Nunca te cogen a contrapié y siempre tienes lista una respuesta ingeniosa.',
        'Piensas y respondes a una velocidad que la mayoría no alcanza a seguir.',
      ],
    },

    {
      id: 'resolucion',
      name: 'Resolución',
      kind: 'attribute',
      category: 'mental',
      description: 'Resolución aporta atención y determinación, y mide tu concentración y tu fortaleza mental. Es lo que te da aguante para turnos de vigilancia que duran hasta el amanecer y lo que deja fuera las distracciones.',
      note: 'Tu Fuerza de Voluntad equivale a tu Compostura + Resolución.',
      dots: [
        'Tu capacidad de atención es mínima salvo para lo verdaderamente urgente.',
        'Te sientas a esperar a que piquen el anzuelo, siempre que la espera no se alargue demasiado.',
        'Distraerte cuesta más esfuerzo del que la mayoría está dispuesta a invertir.',
        'Te abres paso hasta una deducción por encima de cualquier obstáculo.',
        'Piensas con claridad en pleno tiroteo, o vigilas la puerta durante una orgía de sangre y luego recoges hasta el último casquillo y limpias hasta la última gota.',
      ],
    },

    // ══ HABILIDADES FÍSICAS ══════════════════════════════════════════════════

    {
      id: 'armas-de-fuego',
      name: 'Armas de Fuego',
      kind: 'skill',
      category: 'fisico',
      description: 'Dejar a una víctima con agujeros en la garganta significa una investigación a fondo de la Segunda Inquisición; dejarla con agujeros en la cabeza es un sábado cualquiera en Baltimore. Los Cainitas no recurren a las Armas de Fuego solo por motivos humanos —eficacia y emoción—, sino también para sostener la Mascarada. Cubre el manejo de armas cortas, desde la pistola oculta hasta el rifle de asalto, y de otras piezas mayores accionadas por gatillo, como ballestas y lanzacohetes portátiles. Incluye además limpiarlas, desencasquillarlas y recargarlas con rapidez.',
      dots: [
        'Has disparado una pistola un par de veces, en una galería de tiro o en contextos menos formales.',
        'Sabes mantener el arma limpia, desmontarla y volver a montarla.',
        'Has pasado por lo peor —«visto al elefante», si pasas del siglo— y has salido vivo.',
        'Haces tiros de exhibición, aciertas sin apuntar, disparas en carrera y prácticamente cualquier cosa que termine en un disparo.',
        'Llevas practicando desde que la Winchester abrió sus puertas.',
      ],
      specialties: ['Armería', 'Ballestas', 'Desenfundado Rápido', 'Francotirador', 'Recarga Manual', 'Tiros de Exhibición', 'Venta de Armas'],
      combos: [
        { attributeId: 'destreza',   example: 'Disparar con precisión.' },
        { attributeId: 'astucia',    example: 'Disparar aprovechando la cobertura.' },
        { attributeId: 'resolucion', example: 'Apuntar y esperar pacientemente.' },
      ],
    },

    {
      id: 'artesania',
      name: 'Artesanía',
      kind: 'skill',
      category: 'fisico',
      description: 'Artesanía abarca en general las manualidades, la creación de objetos y herramientas —tanto bellos como funcionales— y las artes aplicadas, desde la alfarería hasta la construcción y el refuerzo de tu propio refugio.',
      note: 'En cuanto adquieres esta Habilidad recibes una Especialidad gratuita. A diferencia de casi todas las demás, puedes tener más Especialidades que puntos en Artesanía.',
      dots: [
        'Eres un aficionado, pero sabes lo que traes entre manos.',
        'Tu destreza manual despierta admiración por lo bien que funciona todo lo que haces.',
        'Tus creaciones pueden resultar hermosas o terroríficas, pero su intención siempre queda clara.',
        'Los mortales y los Vástagos que conocen tu trabajo lo respetan mucho.',
        'Te eligen a menudo para crear la pieza central de las fiestas del Elíseo.',
      ],
      specialties: ['Carpintería', 'Costura', 'Diseño', 'Escultura', 'Forja de Armas', 'Grabado', 'Pintura'],
      combos: [
        { attributeId: 'destreza',     example: 'Fabricar o reparar algo con precisión.' },
        { attributeId: 'inteligencia', example: 'Diseñar cómo construir un objeto.' },
        { attributeId: 'resolucion',   example: 'Trabajar durante horas en una pieza complicada.' },
      ],
    },

    {
      id: 'atletismo',
      name: 'Atletismo',
      kind: 'skill',
      category: 'fisico',
      description: 'Atletismo te permite dejar atrás a un perseguidor, saltar para esquivar el coche que se te echa encima, y trepar y nadar como una persona sana y robusta.',
      note: 'Puedes emplear Atletismo en lugar de cualquier otra Habilidad Física de combate en una tirada de conflicto, pero entonces no llegas a golpear a tu oponente, por muchos éxitos que obtengas.',
      dots: [
        'Siempre atendías en clase de gimnasia y todavía eres capaz de saltar.',
        'Aunque estés muerto, conservas la forma de un mortal que hace ejercicio con regularidad.',
        'Eres fuerte como un roble y podrías dedicarte al deporte profesional. En partidos nocturnos, al menos.',
        'Con lo que haces en parkour, ¿para qué convertirse en murciélago?',
        'Las marcas olímpicas están a tu alcance: solo un puñado de humanos consigue lo que tú. Los vampiros confunden tu capacidad con una Disciplina Física.',
      ],
      specialties: ['Acrobacias', 'Aguante', 'Escalada', 'Lanzamiento', 'Natación', 'Parkour', 'Salto', 'Tiro con Arco'],
      combos: [
        { attributeId: 'destreza',    example: 'Saltar, trepar o hacer acrobacias.' },
        { attributeId: 'fuerza',      example: 'Levantar, empujar o saltar con potencia.' },
        { attributeId: 'resistencia', example: 'Correr o nadar durante mucho tiempo.' },
      ],
    },

    {
      id: 'conducir',
      name: 'Conducir',
      kind: 'skill',
      category: 'fisico',
      description: 'Cualquiera —salvo quizá un vampiro de quinientos años— puede aprender a llevar un coche. La Habilidad Conducir se refiere a hacerlo rápido y seguro en condiciones adversas o bajo tensión: campo a través, huyendo de una emboscada a toda velocidad, ganando carreras callejeras o zafándote de una persecución de la Segunda Inquisición.',
      dots: [
        'Conduces con prudencia y es difícil que cometas un error.',
        'Pisas a fondo sin miedo a estrellarte, siempre que la visibilidad acompañe.',
        'Has ganado carreras de coches, lo que te ha dado buena fama entre los Anarquistas.',
        'Podrías trabajar como especialista o ser el chófer personal del Príncipe o del Barón local.',
        'Conoces los coches del derecho y del revés. Pocos te igualan en pericia y conocimiento.',
      ],
      specialties: ['Acrobacias', 'Camiones', 'Carreras Urbanas', 'Evasión', 'Modelos Antiguos', 'Motocicletas', 'Seguimiento', 'Vehículos Todo Terreno'],
      combos: [
        { attributeId: 'destreza',   example: 'Hacer una maniobra complicada.' },
        { attributeId: 'astucia',    example: 'Encontrar una ruta para escapar de una persecución.' },
        { attributeId: 'resolucion', example: 'Mantener una conducción precisa durante horas.' },
      ],
    },

    {
      id: 'latrocinio',
      name: 'Latrocinio',
      kind: 'skill',
      category: 'fisico',
      aka: ['Crimen', 'Seguridad', 'Larceny'],
      description: 'Esta Habilidad supone conocer las herramientas y técnicas para forzar cerraduras, colocar micrófonos, anular alarmas corrientes de coche y antirrobo, falsificar a mano, puentear vehículos o incluso reventar cajas de caudales, además de un sinfín de maneras de entrar por la fuerza en un sitio. También sirve para instalar un sistema de seguridad «infranqueable» o deducir cómo y por dónde fallaron los sistemas en un allanamiento. Los Ventrue seguramente la llamen «Seguridad».',
      note: 'Hoy casi todos los sistemas de alto nivel llevan control informático, circuito cerrado o alarmas electrónicas, así que superarlos puede exigir también Tecnología.',
      dots: [
        'Abres una cerradura sencilla o vacías el bolsillo de alguien despistado.',
        'Puenteas un coche o robas en una tienda sin dificultad.',
        'Localizas cámaras y alarmas y determinas la mejor manera de evitarlas.',
        'Superas un teclado numérico, regrabas una tarjeta de identidad o abres una caja de caudales.',
        'Entras en la cámara acorazada de un banco. O sales de ella.',
      ],
      specialties: ['Alarmas', 'Allanamiento de Moradas', 'Análisis de Seguridad', 'Cajas de Caudales', 'Carterismo', 'Falsificación', 'Forzar Cerraduras', 'Robo de Vehículos'],
      combos: [
        { attributeId: 'destreza',     example: 'Forzar una cerradura.' },
        { attributeId: 'inteligencia', example: 'Planificar un robo.' },
        { attributeId: 'astucia',      example: 'Improvisar cuando algo sale mal.' },
      ],
    },

    {
      id: 'pelea',
      name: 'Pelea',
      kind: 'skill',
      category: 'fisico',
      description: 'Pelea permite alcanzar al objetivo cuando lanzas un puñetazo, una patada o un zarpazo. Mientras no empuñes ningún arma, el ataque cuenta como pelea, y puede ir del aikijutsu más elegante a la reyerta callejera más sucia.',
      dots: [
        'Tu infancia fue dura y tuviste que pelear por tu sitio. Conoces un par de movimientos.',
        'Recibiste algo de entrenamiento para golpear fuerte y con precisión.',
        'Te desenvuelves más que bien en una riña.',
        'O te entrenaron al nivel de la Spetsnaz, o llevas décadas de no-vida peleando.',
        'Ganarías un torneo de MMA incluso sin recurrir a tus Poderes vampíricos.',
      ],
      specialties: ['Animales', 'Combate Deportivo', 'En Forma de la Bestia', 'Hombres Lobo', 'Mortales Armados', 'Mortales sin Armas', 'Peleas de Bar', 'Presa', 'Vástagos'],
      combos: [
        { attributeId: 'fuerza',      example: 'Dar un puñetazo potente.' },
        { attributeId: 'destreza',    example: 'Esquivar y contraatacar.' },
        { attributeId: 'resistencia', example: 'Aguantar un forcejeo.' },
      ],
    },

    {
      id: 'pelea-con-armas',
      name: 'Pelea con Armas',
      kind: 'skill',
      category: 'fisico',
      aka: ['Armas cuerpo a cuerpo', 'Armas de cuerpo a cuerpo', 'Melee'],
      description: 'Emplea Pelea con Armas para blandir cuchillos, cadenas, bates de béisbol y similares. Las estacas, que suelen acabar en manos de aspirantes a cazador, también se usan con esta Habilidad.',
      dots: [
        'Manejas un bate o una espada y sueles alcanzar a quien pretendes.',
        'Tu evidente soltura con un arma en la mano haría que un atacante se lo pensara dos veces.',
        'Tu pericia con el arma cuerpo a cuerpo se conoce en todo el dominio.',
        'Unos insensatos trajeron una pistola a tu pelea de navajas.',
        'Eres el maestro de armas del dominio y te buscan Vástagos de todas partes por tu pericia.',
      ],
      specialties: ['Armas Improvisadas', 'Cadenas', 'Cuchillos', 'Esgrima', 'Espadas', 'Estacas', 'Garrotes', 'Golpes de Desarme', 'Hachas', 'Porras'],
      combos: [
        { attributeId: 'destreza', example: 'Esgrima o ataques precisos.' },
        { attributeId: 'fuerza',   example: 'Golpear con un arma pesada.' },
        { attributeId: 'astucia',  example: 'Aprovechar una apertura del enemigo.' },
      ],
    },

    {
      id: 'sigilo',
      name: 'Sigilo',
      kind: 'skill',
      category: 'fisico',
      description: 'Sigilo permite seguir a un objetivo a escondidas, lo que convierte en cazadores insuperables a los vampiros que la dominan. Les da la capacidad de espiar, escabullirse y confundirse entre la multitud cuando hace falta.',
      dots: [
        'Cuesta verte si te ocultas al amparo de la oscuridad o con ropa de camuflaje.',
        'Te escabulles de observadores distraídos y acechas a víctimas desprevenidas sin levantar sospechas.',
        'Moviéndote con cuidado y escondiéndote con facilidad, esquivas las patrullas de vigilancia.',
        'Tu andar sutil y silencioso te haría un buen ninja, o un enemigo digno de uno.',
        'Los Hijos de Haqim te pedirían consejo sobre cómo acechar y ocultarse, si lograran encontrarte.',
      ],
      specialties: ['Disfraz', 'Emboscadas', 'Esconderse', 'Movimiento Silencioso', 'Multitudes', 'Naturaleza', 'Seguimiento', 'Urbano'],
      combos: [
        { attributeId: 'destreza',   example: 'Moverse silenciosamente.' },
        { attributeId: 'astucia',    example: 'Encontrar un buen escondite.' },
        { attributeId: 'resolucion', example: 'Permanecer oculto durante mucho tiempo.' },
      ],
    },

    {
      id: 'supervivencia',
      name: 'Supervivencia',
      kind: 'skill',
      category: 'fisico',
      description: 'Supervivencia da la capacidad de subsistir en plena naturaleza y en otros entornos hostiles el tiempo necesario para regresar a la civilización: orientarte por las estrellas, montar un refugio improvisado o detectar a un hombre lobo antes de que sea tarde. Algunos de sus usos valen igual en parques, polígonos industriales y demás páramos de la jungla urbana.',
      dots: [
        'Conoces los senderos y el entorno natural que rodean tu dominio.',
        'Pasas más tiempo fuera que dentro y rastreas a cualquiera que no sepa moverse por el bosque.',
        'Subsistes lejos de la ciudad poniendo trampas para mortales y levantando un refugio para ti.',
        'Prosperas fuera de la ciudad como el depredador que eres.',
        'Los Gangrel te acompañan en manada, si consiguen seguirte el ritmo.',
      ],
      specialties: ['Bosques', 'Caza', 'Desierto', 'Exploración Urbana', 'Jungla', 'Rastreo', 'Refugios', 'Trampas'],
      combos: [
        { attributeId: 'resistencia', example: 'Aguantar días en condiciones difíciles.' },
        { attributeId: 'astucia',     example: 'Encontrar comida, agua o refugio.' },
        { attributeId: 'resolucion',  example: 'Seguir adelante pese al agotamiento.' },
      ],
    },

    // ══ HABILIDADES SOCIALES ═════════════════════════════════════════════════

    {
      id: 'callejeo',
      name: 'Callejeo',
      kind: 'skill',
      category: 'social',
      description: 'Callejeo permite entenderse y negociar con la sociedad de la calle y de los bajos fondos. Descifras palabras en clave y jerga propia, interpretas las marcas de los grafitis e imitas los signos de las bandas.',
      dots: [
        'Sabes dónde conseguir drogas y sexo en tu dominio.',
        'Sabes qué bandas operan en tu zona, sus colores y sus rivalidades. Puede que hasta tengas tu propia firma de grafiti.',
        'Distingues el buen material del malo, consigues pistolas y pasas desapercibido entre gente de la calle o pandilleros.',
        'Cuando un gánster dice «conozco a un tipo», habla de ti.',
        'Contratas, orquestas o arreglas casi cualquier actividad criminal en cualquier punto de la ciudad.',
      ],
      specialties: ['Bandas', 'Drogas', 'Grafitis', 'Mercado Negro', 'Reputación Personal', 'Sobornos', 'Supervivencia Urbana', 'Tráfico de Armas', 'Venta de Objetos Robados'],
      combos: [
        { attributeId: 'carisma',      example: 'Conseguir contactos en la calle.' },
        { attributeId: 'manipulacion', example: 'Sacar información de alguien.' },
        { attributeId: 'astucia',      example: 'Saber rápidamente a quién acudir.' },
      ],
    },

    {
      id: 'etiqueta',
      name: 'Etiqueta',
      kind: 'skill',
      category: 'social',
      description: 'Etiqueta es la capacidad de reconocer las convenciones sociales del momento y responder a ellas, de imponer protocolos nuevos y de contentar a todo tu entorno con tus buenos modales. Se emplea en la alta sociedad, tanto de Vástagos como de mortales.',
      dots: [
        'Sabes dirigirte a tu gobernante local sin dar un paso en falso.',
        'Conoces las normas de etiqueta de cada local nocturno del dominio.',
        'Impresionas a los demás con tu dominio de los modales, la deferencia y la elegancia.',
        'Tu conducta marca tendencia, sobre todo cuando haces algo que sacude las normas.',
        'El Guardián del Elíseo y las Arpías se fijan en ti para fijar el protocolo del dominio.',
      ],
      specialties: ['Anarquistas', 'Camarilla', 'Corporaciones', 'Elíseo', 'Feudal', 'Sociedad Secreta', 'Uno por Ciento'],
      combos: [
        { attributeId: 'carisma',      example: 'Causar buena impresión en una recepción.' },
        { attributeId: 'manipulacion', example: 'Utilizar las normas sociales en tu beneficio.' },
        { attributeId: 'inteligencia', example: 'Conocer un protocolo desconocido.' },
      ],
    },

    {
      id: 'interpretacion',
      name: 'Interpretación',
      kind: 'skill',
      category: 'social',
      description: 'Interpretación cubre un abanico muy amplio de artes, de la danza a la comedia y la narración. Puedes ser un intérprete inspirado o simplemente un alumno entusiasta de las artes escénicas.',
      note: 'Al adquirir esta Habilidad recibes una Especialidad gratuita.',
      dots: [
        'Eres el alma de la fiesta, pero no te atreverías a llevar tu número a un escenario.',
        'Has actuado ante público y las críticas fueron dispares: unos te adoran y otros te detestan.',
        'Eres un alumno experto en el arte escénico que hayas elegido.',
        'Ejecutas tu arte de forma impresionante, superando a los Toreador en todos los aspectos.',
        'Improvisar no te da ningún miedo: cada noche, un público distinto y un espectáculo distinto.',
      ],
      specialties: ['Canto', 'Comedia', 'Danza', 'Drama', 'Guitarra', 'Hablar en Público', 'Instrumentos de Viento', 'Percusión', 'Poesía', 'Rap', 'Teclados', 'Violín'],
      combos: [
        { attributeId: 'carisma',      example: 'Cautivar a un público.' },
        { attributeId: 'destreza',     example: 'Ejecutar una pieza musical.' },
        { attributeId: 'manipulacion', example: 'Interpretar un personaje para engañar.' },
      ],
    },

    {
      id: 'intimidacion',
      name: 'Intimidación',
      kind: 'skill',
      category: 'social',
      description: 'Intimidación es el poder de amedrentar, coaccionar, amenazar y ponerte duro con alguien para lograr una victoria social. Los vampiros que recurren a ella no dudan en aplastar las voluntades —y a veces los dedos— de sus enemigos.',
      dots: [
        'Sueltas un insulto mordaz con eficacia.',
        'Te abres paso por la fuerza entre la mayoría de los humanos sin dificultad.',
        'Tu fanfarronería y tu crueldad te han labrado una reputación.',
        'Estás muy por encima de las simples amenazas físicas.',
        'Hasta los demás Vástagos retroceden un paso si tú das uno al frente.',
      ],
      specialties: ['Amenazas Veladas', 'Coacción Física', 'Extorsión', 'Insultos', 'Interrogatorio', 'Miradas Intimidatorias'],
      combos: [
        { attributeId: 'fuerza',       example: 'Amenazar mediante fuerza física.' },
        { attributeId: 'manipulacion', example: 'Amenazar con chantaje.' },
        { attributeId: 'carisma',      example: 'Intimidar mediante presencia personal.' },
      ],
    },

    {
      id: 'liderazgo',
      name: 'Liderazgo',
      kind: 'skill',
      category: 'social',
      description: 'Liderazgo te da la capacidad de encabezar a una multitud, comandar un destacamento, levantar la moral de tus seguidores o sofocar una rebelión. Un Príncipe o un Barón fuertes necesitan Liderazgo, o se arriesgan a perder el trono.',
      dots: [
        'Has dirigido clubes informales y sabes organizar a Vástagos de ideas afines.',
        'Tu voz se oye en las reuniones e incluso tus superiores escuchan de vez en cuando.',
        'Tomas el mando en el campo de batalla y conduces a tus soldados hacia la muerte.',
        'Inspiras a los heridos y moribundos para que actúen, mientras estés allí para guiarlos.',
        'Tus palabras llenan el corazón de los vampiros con fuerza suficiente para hacerlos sentir vivos otra vez.',
      ],
      specialties: ['Dinámicas de Grupo', 'Inspiración', 'Manada de Guerra', 'Mando', 'Oratoria', 'Praxis'],
      combos: [
        { attributeId: 'carisma',      example: 'Inspirar a un grupo.' },
        { attributeId: 'manipulacion', example: 'Conseguir que otros hagan lo que quieres.' },
        { attributeId: 'inteligencia', example: 'Coordinar una estrategia compleja.' },
      ],
    },

    {
      id: 'perspicacia',
      name: 'Perspicacia',
      kind: 'skill',
      category: 'social',
      description: 'Perspicacia te da la capacidad de leer el lenguaje corporal, captar señales sutiles en la expresión y el tono, y separar las verdades de las mentiras. También te permite percibir y comprender la motivación que hay detrás de los actos ajenos.',
      dots: [
        'Ves más allá de las amenazas vacías.',
        'Captas las emociones ocultas de los humanos y a veces incluso las de los Vástagos.',
        'Ofreces psicoterapia con más eficacia todavía que quien no pretende merendarse a su paciente.',
        'Eres un detector de mentiras no-muerto. Solo los mejores estafadores logran colarte una.',
        'La gente puede ser un libro de sangre, pero impreso en letra bien grande y fácil de leer.',
      ],
      specialties: ['Ambiciones', 'Deseos', 'Detectar Mentiras', 'Empatía', 'Fobias', 'Interrogatorio', 'Motivaciones', 'Vicios'],
      combos: [
        { attributeId: 'astucia',      example: 'Detectar que alguien miente.' },
        { attributeId: 'inteligencia', example: 'Analizar las motivaciones de alguien.' },
        { attributeId: 'resolucion',   example: 'Observar pacientemente hasta descubrir algo.' },
      ],
    },

    {
      id: 'persuasion',
      name: 'Persuasión',
      kind: 'skill',
      category: 'social',
      description: 'Recurre a Persuasión cuando quieras convencer a alguien de que sabes lo que le conviene y de que un solo bocado no tiene importancia. Un persuasor hábil juega con las emociones de sus víctimas y apela a la razón de sus iguales. Sirve tanto en los tribunales legales como en los del Príncipe, en consejos de administración, bares y alcobas.',
      dots: [
        'Le vendes algo a un comprador que ya venía motivado.',
        'Siempre logras un descuento o sales bien parado del último rumor.',
        'Siempre encuentras una solución de compromiso en cualquier conflicto.',
        'La otra parte empieza a buscar un acuerdo en cuanto apareces en el tribunal, sea mortal o vampírico.',
        'Podrías ser el auténtico diablo de lengua de plata.',
      ],
      specialties: ['Argumentación Legal', 'Charlatanería', 'Interrogatorio', 'Negociación', 'Regatear', 'Retórica'],
      combos: [
        { attributeId: 'carisma',      example: 'Convencer mediante simpatía.' },
        { attributeId: 'manipulacion', example: 'Convencer mediante engaño.' },
        { attributeId: 'inteligencia', example: 'Convencer mediante argumentos.' },
      ],
    },

    {
      id: 'subterfugio',
      name: 'Subterfugio',
      kind: 'skill',
      category: 'social',
      description: 'Subterfugio es el arte de mentir de forma convincente, largar una trola y dar buenas excusas para malas acciones. Define tu talento para la intriga, el secreto y la duplicidad. También se emplea para seducir y para imitar el comportamiento de los mortales.',
      dots: [
        'Cuentas mentiras sencillas y creíbles.',
        'Engañas a los más cándidos, jóvenes y mayores, para que te entreguen sus cosas.',
        'Operas en varios niveles a la vez, soltando mentiras que quieres que se descubran para apuntalar otras.',
        'Aguantas indefinidamente como infiltrado: un agente doble perfecto. ¡Puede que lo seas!',
        'Nadie cree que tengas ni un solo punto de Subterfugio.',
      ],
      specialties: ['Faroles', 'Fingir Mortalidad', 'Inocencia', 'La Gran Estafa', 'Mentiras Impecables', 'Seducción'],
      combos: [
        { attributeId: 'manipulacion', example: 'Mentir para conseguir algo.' },
        { attributeId: 'carisma',      example: 'Engañar mediante encanto.' },
        { attributeId: 'astucia',      example: 'Inventar una mentira sobre la marcha.' },
      ],
    },

    {
      id: 'trato-con-animales',
      name: 'Trato con Animales',
      kind: 'skill',
      category: 'social',
      aka: ['Animales', 'Animal Ken'],
      description: 'Trato con Animales te permite amedrentar y calmar a los animales, e incluso ganarte su amistad. Con ella predices cómo reaccionará un animal ante una situación concreta, adiestras a uno domesticado o intentas apaciguar o enfurecer a otros. Sin esta Habilidad, casi todas las criaturas evitan a los vampiros o se vuelven agresivas con ellos.',
      dots: [
        'Los animales se apartan de ti con timidez, pero ni salen corriendo ni intentan morderte.',
        'A tu alrededor se muestran dóciles y actúan como si no estuvieras, salvo que entables una relación con ellos.',
        'Te tratan como si fueras un amo cálido y amistoso, mientras no los provoques.',
        'Atraes a los animales hacia ti. Pocos de los que te atacan mantienen la agresión.',
        'Percibes los sentimientos y pensamientos de los animales, y ellos los tuyos, y actúan en consecuencia.',
      ],
      specialties: ['Apaciguar', 'Caballos', 'Cetrería', 'Entrenamiento de Ataque', 'Entrenamiento Especialista', 'Gatos', 'Lobos', 'Perros', 'Ratas', 'Serpientes'],
      combos: [
        { attributeId: 'carisma',      example: 'Calmar a un animal.' },
        { attributeId: 'manipulacion', example: 'Conseguir que un animal haga algo.' },
        { attributeId: 'inteligencia', example: 'Comprender el comportamiento de un animal.' },
      ],
    },

    // ══ HABILIDADES MENTALES ═════════════════════════════════════════════════

    {
      id: 'academicismo',
      name: 'Academicismo',
      kind: 'skill',
      category: 'mental',
      description: 'Academicismo refleja la comprensión, la educación superior y la capacidad de investigar en humanidades y artes liberales. El estudio de la historia, por ejemplo, difícilmente es «solo académico» cuando tus enemigos inmortales vivieron ese período y dejaron su huella en él.',
      note: 'Al adquirir esta Habilidad obtienes una Especialidad gratuita. Para las lenguas extranjeras se emplea el Mérito Lingüística.',
      dots: [
        'Educación primaria y secundaria básica; clases nocturnas en un centro de formación superior.',
        'Educación universitaria básica, o la tutela de un mentor mediocre; una carrera de cuatro años.',
        'Estudios universitarios avanzados o una tutela personal esmerada; una carrera brillante, un doctorado.',
        'Estudios especializados más allá de la universidad, en materias que muy pocos comprenden.',
        'Erudición refinada y avanzada; es probable que te busquen para pedirte guía y consejo.',
      ],
      specialties: ['Arquitectura', 'Documentación', 'Enseñanza', 'Filosofía', 'Historia', 'Historia del Arte', 'Literatura', 'Periodismo', 'Teología'],
      combos: [
        { attributeId: 'inteligencia', example: 'Recordar información histórica.' },
        { attributeId: 'astucia',      example: 'Relacionar datos de distintas fuentes.' },
        { attributeId: 'resolucion',   example: 'Resolver un problema académico complejo.' },
      ],
    },

    {
      id: 'ciencias',
      name: 'Ciencias',
      kind: 'skill',
      category: 'mental',
      aka: ['Ciencia'],
      description: 'Ciencias es un campo amplísimo que va de los principios básicos de la vida a la comprensión de la entropía universal. Las leyes de la ciencia gobiernan el mundo de los mortales, y los vampiros que aspiran a gobernar ese mundo tienen que estudiarlas.',
      note: 'Sus niveles son equiparables a los de Academicismo, desde «algunos estudios» hasta «erudito de fama mundial». Igual que ella, otorga una Especialidad gratuita.',
      dots: [
        'Haces tus pinitos y comprendes los principios que hay tras los elementos básicos de la vida.',
        'Explicas con precisión las teorías científicas relacionadas con el Abrazo a otro vampiro.',
        'Serías un excelente director científico: diriges un laboratorio, interpretas hallazgos y te mantienes al día de la investigación en casi cualquier campo. Además, reparas equipo científico.',
        'Eres experto en tu campo y en todos los que se relacionan con él.',
        'Pocos colegas te igualan, y el resto acude a ti en busca de consejo.',
      ],
      specialties: ['Astronomía', 'Biología', 'Demoliciones', 'Física', 'Genética', 'Geología', 'Ingeniería', 'Matemáticas', 'Química'],
      combos: [
        { attributeId: 'inteligencia', example: 'Analizar una sustancia o fenómeno.' },
        { attributeId: 'astucia',      example: 'Sacar conclusiones de datos incompletos.' },
        { attributeId: 'resolucion',   example: 'Mantener una investigación durante mucho tiempo.' },
      ],
    },

    {
      id: 'consciencia',
      name: 'Consciencia',
      kind: 'skill',
      category: 'mental',
      aka: ['Alerta', 'Percepción', 'Awareness'],
      description: 'Consciencia gobierna tu percepción. Con ella avistarías a un Hijo de Haqim antes de que ataque, verías una llave lanzada a la papelera o captarías un resto de perfume en el aire.',
      dots: [
        'Sueles darte cuenta de cuándo algo está fuera de lugar.',
        'Detectas un patrón de conducta o un comportamiento errático en alguien.',
        'Ves más allá de la mayoría de los disfraces y percibes peligros o pistas ocultas.',
        'Aunque estés distraído, pocas cosas escapan a tu percepción.',
        'Tus sentidos son los de un animal salvaje.',
      ],
      specialties: ['Camuflaje', 'Emboscadas', 'Entorno Natural', 'Instintos', 'Objetos Ocultos', 'Oído', 'Olfato', 'Trampas', 'Vista'],
      combos: [
        { attributeId: 'astucia',      example: 'Detectar que alguien se acerca o notar que algo sobrenatural está cerca.' },
        { attributeId: 'resolucion',   example: 'Mantener una vigilancia prolongada pese a las distracciones.' },
        { attributeId: 'inteligencia', example: 'Interpretar detalles extraños del entorno y qué significa una anomalía.' },
      ],
    },

    {
      id: 'finanzas',
      name: 'Finanzas',
      kind: 'skill',
      category: 'mental',
      description: 'Finanzas te permite identificar las tendencias del mercado, invertir con acierto, manipular acciones y anticipar una caída bursátil. También sirve para tasar —y rastrear— la riqueza ajena y cerrar acuerdos económicos. Por lo general puedes valorar obras de arte, propiedades y cualquier otro bien que no tenga un origen delictivo. Los Ventrue aprecian esta Habilidad más que algunas Disciplinas.',
      dots: [
        'Llevas un negocio y te encargas de sus libros.',
        'Diriges una división corporativa o una sucursal bancaria, y presentas declaraciones de la renta de lo más plausibles.',
        'El comercio internacional te ha convertido en un buen corredor de bolsa en mercados extranjeros.',
        'La banca de inversión sigue tu criterio financiero, y cometer un fraude no te supone dificultad alguna.',
        'Consigues que el dinero haga cualquier cosa, incluso pegarse a tus bolsillos o aplastar naciones.',
      ],
      specialties: ['Arte', 'Bancos', 'Blanqueo de Dinero', 'Contabilidad Forense', 'Finanzas Corporativas', 'Manipulación de Divisas', 'Mercado de Acciones', 'Mercado Negro', 'Valoración Estimada'],
      combos: [
        { attributeId: 'inteligencia', example: 'Analizar cuentas o inversiones.' },
        { attributeId: 'astucia',      example: 'Detectar rápidamente una oportunidad.' },
        { attributeId: 'manipulacion', example: 'Convencer a alguien para invertir.' },
      ],
    },

    {
      id: 'investigacion',
      name: 'Investigación',
      kind: 'skill',
      category: 'mental',
      description: 'Investigación te permite resolver casos por medios mundanos o misteriosos, encontrar pistas, interpretarlas y seguir el rastro de personas desaparecidas. Los vampiros la consideran especialmente útil cuando se les escapa un recipiente.',
      dots: [
        'Te encantan las buenas novelas de misterio y te imaginas como detective aficionado.',
        'Dominas la criminología básica y conoces los métodos característicos de los granujas locales.',
        'Eres, o podrías ser, detective profesional. Nada escapa a tu atención en la escena de un crimen.',
        'El Sheriff recurre a ti cuando facciones desconocidas amenazan la seguridad del dominio.',
        'Preparas acertijos para los demás y llevas una existencia enigmática que muy pocos desentrañan.',
      ],
      specialties: ['Análisis de Tráfico', 'Asesinatos', 'Ciencia Forense', 'Criminología', 'Deducción', 'Desaparecidos', 'Misterios Paranormales'],
      combos: [
        { attributeId: 'inteligencia', example: 'Analizar una escena del crimen.' },
        { attributeId: 'astucia',      example: 'Conectar pistas aparentemente inconexas.' },
        { attributeId: 'resolucion',   example: 'Seguir una investigación durante días.' },
      ],
    },

    {
      id: 'medicina',
      name: 'Medicina',
      kind: 'skill',
      category: 'mental',
      description: 'Medicina te permite recomponer a las personas dañadas y diagnosticar las causas de muerte o enfermedad de una víctima. También sirve para manejar equipo médico, recetar fármacos y reducir —o aumentar— el flujo sanguíneo.',
      note: 'Es la Habilidad con la que los personajes curan daño agravado a la Salud de los mortales.',
      dots: [
        'Tienes nociones de anatomía básica y distingues la circulación venosa de la arterial. Practicas RCP y primeros auxilios.',
        'Tratas sin dificultad urgencias y enfermedades menores, y emites un diagnóstico.',
        'Tu formación te permite realizar operaciones mayores y tratar heridas graves.',
        'Diagnosticas todas las enfermedades salvo las más raras.',
        'Eres un médico experto de renombre y te reclaman tanto mortales como inmortales.',
      ],
      specialties: ['Cirugía', 'Farmacia', 'Flebotomía', 'Hematología', 'Patología', 'Primeros Auxilios', 'Urgencias', 'Veterinaria'],
      combos: [
        { attributeId: 'inteligencia', example: 'Diagnosticar una enfermedad.' },
        { attributeId: 'destreza',     example: 'Realizar una operación.' },
        { attributeId: 'resolucion',   example: 'Atender una emergencia durante horas.' },
      ],
    },

    {
      id: 'ocultismo',
      name: 'Ocultismo',
      kind: 'skill',
      category: 'mental',
      description: 'Ocultismo representa el conocimiento del mundo místico, y va desde los ritos y prácticas de masones y rosacruces hasta los de nodistas y magos verdaderos. Reconoces signos ocultistas y prácticas de magia popular, funcionen o no.',
      dots: [
        'Conoces las leyendas de Caín y los Antediluvianos, y puede que hayas leído el Libro de Nod.',
        'Separas la verdad de las sandeces del ocultismo popular.',
        'Tienes experiencia de primera mano con algo inexplicable, incluso para el criterio de los Vástagos.',
        'Recitarías los nombres de casi todos los Antediluvianos e incluso comprenderías un ritual Tremere.',
        'Los Tremere y los Hijos de Haqim te consultan sobre conocimientos arcanos.',
      ],
      specialties: ['Alquimia', 'Fantasmas', 'Grimorios', 'Hadas', 'Hombres Lobo', 'Infernalismo', 'Magi', 'Magia de Sangre', 'Necromancia', 'Nodismo', 'Parapsicología', 'Vudú'],
      combos: [
        { attributeId: 'inteligencia', example: 'Reconocer un ritual o criatura.' },
        { attributeId: 'astucia',      example: 'Interpretar pistas sobre algo sobrenatural.' },
        { attributeId: 'resolucion',   example: 'Investigar un misterio durante mucho tiempo.' },
      ],
    },

    {
      id: 'politica',
      name: 'Política',
      kind: 'skill',
      category: 'mental',
      description: 'Política abarca la diplomacia y la burocracia, tanto humanas como vampíricas. Trabajas con el gobierno municipal —y quizá ejerces presión sobre él— y puede que también con instancias superiores. Entre los Vástagos conoces las novedades internas, qué Secta domina en cada lugar, quién está en guerra con quién y dónde están enterrados los cuerpos. Literalmente.',
      dots: [
        'Sigues la política mortal de tu regnum y sabes al menos lo que cuentan los Antiguos.',
        'Ejerces influencia a nivel local, o conoces a quien puede ejercerla.',
        'Dirigirías campañas o partidos políticos, o armarías revuelo en tu Secta como joven promesa.',
        'Sabes quién ostenta el poder real en tu área, tanto entre los vivos como entre los no-muertos.',
        'Adivinarías quiénes son los miembros anónimos del Círculo Interior de la Camarilla.',
      ],
      specialties: ['Anarquistas', 'Camarilla', 'Clan', 'Diplomacia', 'Gobierno Municipal', 'Medios de Comunicación', 'Política Estatal', 'Política Nacional'],
      combos: [
        { attributeId: 'inteligencia', example: 'Conocer las estructuras de poder.' },
        { attributeId: 'manipulacion', example: 'Manipular a un político.' },
        { attributeId: 'astucia',      example: 'Saber quién tiene realmente el poder.' },
      ],
    },

    {
      id: 'tecnologia',
      name: 'Tecnología',
      kind: 'skill',
      category: 'mental',
      description: 'Como Habilidad, Tecnología es un blanco móvil: rige el uso y la comprensión de esos «avances técnicos que a la mayoría de los vampiros les resultan desconcertantes». En 1870 habrían sido las máquinas de vapor y la electricidad; hoy son las computadoras y los sistemas informáticos, que por supuesto se encargan ya de casi todo.',
      dots: [
        'Sabes mejorar un PC doméstico y protegerlo de los virus.',
        'Ocultas tu IP, pilotas drones y falsificas una fotografía digital.',
        'Creas y liberas tus propios virus sin temor a que te localicen.',
        'El Príncipe podría llamarte en persona para que te ocupes de la ciberseguridad de su dominio.',
        'En internet nadie sabe que eres un vampiro, ni siquiera que existes.',
      ],
      specialties: ['Artillería', 'Construcción de Computadoras', 'Escribir Código', 'Hackear', 'Minería de Datos', 'Redes', 'Sistemas de Vigilancia', 'Teléfonos'],
      combos: [
        { attributeId: 'inteligencia', example: 'Programar o comprender un sistema.' },
        { attributeId: 'destreza',     example: 'Reparar hardware.' },
        { attributeId: 'astucia',      example: 'Improvisar una solución técnica.' },
      ],
    },

  ],
}
