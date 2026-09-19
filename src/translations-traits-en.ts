// English translations overlay for the Core Traits data (Attributes and Skills).
// Applied over the Spanish base data in `traits.ts` when language resolves to English.
//
// Same contract as the base data: follow the corebook closely — same readings, same
// examples, same detail — but phrase it ourselves rather than transcribing. See the
// header of `traits.ts`.
//
// `combos` is keyed by the *attribute id*, not by its name — the base data owns the
// order and which attributes pair with the Skill, so an overlay only supplies the
// example sentence and can never invent a pairing the rules do not have.

export type TraitTranslation = {
  name: string
  description: string
  dots: string[]
  note?: string
  specialties?: string[]
  combos?: Record<string, string>
  aka?: string[]
}

// All trait ids — typed so a typo in the overlay's keys is a compile error.
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

export const TRAITS_EN: Record<TraitId, TraitTranslation> = {

  // ── ATTRIBUTES: PHYSICAL ─────────────────────────────────────────────────────

  'fuerza': {
    name: 'Strength',
    description: 'Strength determines how large a mortal you can lift, how hard you can hit them, and how much exertion you can demand from your inert body.',
    note: 'In brackets, roughly the weight you can lift with your arms without an Attribute test.',
    dots: [
      'You crush a beer can effortlessly (20 kg: a Christmas tree, a stop sign).',
      'Your build is thoroughly average (45 kg: a toilet).',
      'You beat down a wooden door (115 kg: a large adult, an empty coffin, a fridge).',
      'You are an excellent physical specimen, most likely with visible muscle (180 kg: an occupied coffin, an empty dumpster).',
      'Your strength is prodigious: you smash open a thin metal door, tear a hole in a chain-link fence or break a door lock (250 kg: a motorcycle, a piano).',
    ],
  },

  'destreza': {
    name: 'Dexterity',
    description: 'Dexterity governs your agility and grace of movement, how fast you pull your chest away from the stake heading for your heart, and how steady your hands stay when time is against you.',
    dots: [
      'You run without trouble, but balance and dodging give you grief.',
      'You have a decent sprint and now and then you even look graceful.',
      'Your agility draws notice, and you are as well coordinated as a trained amateur.',
      'You excel at acrobatics and move in ways very few humans could.',
      'Your movements come out fluid and hypnotic, very nearly superhuman.',
    ],
  },

  'resistencia': {
    name: 'Stamina',
    description: 'Your physical endurance. Stamina soaks the damage your body takes — a bullet, a hunter’s sword — and lets you carry on through danger and the hardest effort.',
    note: 'Your Health equals your Stamina + 3.',
    dots: [
      'Even the most trivial exertion leaves you spent.',
      'You take a beating, though you would do better to make peace.',
      'Several days of hard backpacking cause you no trouble at all.',
      'You would win a marathon, or bear enormous amounts of pain; physically, at least.',
      'Not even as a mortal would anything have made you sweat.',
    ],
  },

  // ── ATTRIBUTES: SOCIAL ───────────────────────────────────────────────────────

  'carisma': {
    name: 'Charisma',
    description: 'Charisma measures your natural charm, grace and appeal. With it, people come to you and feeding becomes far easier. It does not depend on being good-looking: there is a separate Merit for that.',
    dots: [
      'You speak clearly, though hardly anyone will pay attention.',
      'You come across as pleasant despite being undead, and might even keep friends.',
      'People trust you without thinking about it, and you make friends effortlessly.',
      'Your personal magnetism is considerable and followers stick to you like flies.',
      'If you set your mind to it, you could lead a whole city into rebellion.',
    ],
  },

  'manipulacion': {
    name: 'Manipulation',
    description: 'Manipulation is your knack for twisting a situation until others adopt your point of view, lying believably, and walking away after conning someone without anybody noticing.',
    dots: [
      'As long as you play it straight, you talk others into doing what you want.',
      'Your talent for deceit overcomes the will of the undecided and the naive.',
      'You never pay full price for anything.',
      'You have the makings of a cult leader or a politician.',
      'You would talk the Prince into buying desert land, or even into lifting the Blood Hunt on you.',
    ],
  },

  'compostura': {
    name: 'Composure',
    description: 'Composure lets you keep your calm, master your emotions and settle others down despite their nerves. It also stands for your cool head in any circumstance, in a firefight or in an intimate encounter alike.',
    note: 'Your Willpower equals your Composure + Resolve.',
    dots: [
      'The slightest insult or confrontation can set off a Frenzy.',
      'You master your predatory instincts in nearly any situation that is not hostile.',
      'Others come to you for advice when the blood hits the fan.',
      'You bluff at cards without breaking a sweat and keep your Beast under some control.',
      'Your Beast is little more than a pet.',
    ],
  },

  // ── ATTRIBUTES: MENTAL ───────────────────────────────────────────────────────

  'inteligencia': {
    name: 'Intelligence',
    description: 'Intelligence measures your capacity to reason, to research and to apply logic. You remember and analyse the information that reaches you from books or from your senses. No puzzle or mystery holds out against someone truly intelligent.',
    dots: [
      'You read and write fluently, though some terms get past you.',
      'You are clever enough to recognise your own limitations.',
      'You are a cultured person and connect clues without difficulty.',
      'It would not be odd for Clan Tremere to ask for your judgement.',
      'The word “genius” falls short of the depth and reach of your intellect.',
    ],
  },

  'astucia': {
    name: 'Wits',
    description: 'Wits is for thinking fast and getting it right on little information. “You hear a noise” is Wits; “you hear two guards approaching” is Intelligence. With it you smell an ambush, or answer the Harpy right there in open court instead of finding the perfect reply the following night.',
    dots: [
      'You get it in the end, but you need someone to explain it.',
      'You work out the odds at poker or pull the emergency brake in time. Nearly always.',
      'You read a situation and hit on the best way out straight away.',
      'You are never caught flat-footed and always have a clever answer ready.',
      'You think and answer at a speed most people cannot follow.',
    ],
  },

  'resolucion': {
    name: 'Resolve',
    description: 'Resolve provides focus and determination, and measures your concentration and mental fortitude. It is what gives you the stamina for watches that last until dawn, and what shuts distractions out.',
    note: 'Your Willpower equals your Composure + Resolve.',
    dots: [
      'Your attention span is minimal except for genuinely urgent matters.',
      'You sit and wait for a bite, as long as the wait does not drag on too far.',
      'Distracting you costs more effort than most people are willing to spend.',
      'You force your way through to a deduction over any obstacle at all.',
      'You think clearly mid-firefight, or watch the door through a blood orgy and then pick up every last casing and wipe up every last drop.',
    ],
  },

  // ── PHYSICAL SKILLS ──────────────────────────────────────────────────────────

  'armas-de-fuego': {
    name: 'Firearms',
    description: 'Leaving a victim with holes in their throat means a thorough Second Inquisition investigation; leaving one with holes in their head is just another Saturday night in Baltimore. Cainites reach for Firearms not only for human reasons — efficiency and thrill — but also to hold the Masquerade together. It covers small arms, from the concealed pistol to the assault rifle, and other larger trigger-operated pieces such as crossbows and man-portable rocket launchers. It also covers cleaning them, clearing jams and reloading fast.',
    dots: [
      'You have fired a pistol a couple of times, at a range or in less formal settings.',
      'You know how to keep the weapon clean, strip it and put it back together.',
      'You have been through the worst — “seen the elephant”, if you are over a century old — and come out alive.',
      'You make trick shots, hit without aiming, fire on the run and practically anything else that ends in a gunshot.',
      'You have been practising since Winchester opened its doors.',
    ],
    specialties: ['Gunsmithing', 'Crossbows', 'Fast Draw', 'Sniping', 'Manual Reloading', 'Trick Shots', 'Gun Dealing'],
    combos: {
      'destreza':   'Shoot accurately.',
      'astucia':    'Shoot while using cover.',
      'resolucion': 'Take aim and wait patiently.',
    },
  },

  'artesania': {
    name: 'Craft',
    description: 'Craft broadly covers handiwork, the making of objects and tools — beautiful and functional alike — and the applied arts, from pottery to building and fortifying your own haven.',
    note: 'The moment you take this Skill you receive a free Specialty. Unlike almost every other Skill, you may hold more Specialties than you have dots in Craft.',
    dots: [
      'You are an amateur, but you know what you have got in hand.',
      'Your handiwork draws admiration for how well everything you make functions.',
      'Your creations may come out beautiful or terrifying, but their intent is always clear.',
      'The mortals and Kindred who know your work respect it a great deal.',
      'You are often the one chosen to make the centrepiece of Elysium gatherings.',
    ],
    specialties: ['Carpentry', 'Sewing', 'Design', 'Sculpture', 'Weaponsmithing', 'Engraving', 'Painting'],
    combos: {
      'destreza':     'Make or repair something precisely.',
      'inteligencia': 'Design how an object should be built.',
      'resolucion':   'Work for hours on a complicated piece.',
    },
  },

  'atletismo': {
    name: 'Athletics',
    description: 'Athletics lets you leave a pursuer behind, jump clear of the car bearing down on you, and climb and swim like a healthy, sturdy person.',
    note: 'You may use Athletics in place of any other physical combat Skill in a conflict roll, but then you do not actually strike your opponent, however many successes you get.',
    dots: [
      'You always paid attention in gym class and you can still jump.',
      'Dead though you are, you keep the fitness of a mortal who exercises regularly.',
      'You are strong as an oak and could go professional. In night fixtures, at least.',
      'With what you do at parkour, who needs to turn into a bat?',
      'Olympic records are within your reach: only a handful of humans manage what you do. Vampires mistake your ability for a Physical Discipline.',
    ],
    specialties: ['Acrobatics', 'Endurance', 'Climbing', 'Throwing', 'Swimming', 'Parkour', 'Jumping', 'Archery'],
    combos: {
      'destreza':    'Jump, climb or perform acrobatics.',
      'fuerza':      'Lift, push or jump with power.',
      'resistencia': 'Run or swim for a long time.',
    },
  },

  'conducir': {
    name: 'Drive',
    description: 'Anyone — except perhaps a five-hundred-year-old vampire — can learn to handle a car. The Drive Skill covers doing it fast and safely in adverse conditions or under stress: off-road, fleeing an ambush at speed, winning street races, or shaking off a Second Inquisition pursuit.',
    dots: [
      'You drive cautiously and are unlikely to make a mistake.',
      'You floor it without fear of a crash, as long as visibility cooperates.',
      'You have won car races, which has earned you a good name among the Anarchs.',
      'You could work as a stunt driver, or be the personal chauffeur of the local Prince or Baron.',
      'You know cars inside and out. Few match you in skill and knowledge.',
    ],
    specialties: ['Stunts', 'Trucks', 'Street Racing', 'Evasion', 'Vintage Models', 'Motorcycles', 'Tailing', 'Off-Road Vehicles'],
    combos: {
      'destreza':   'Pull off a difficult manoeuvre.',
      'astucia':    'Find a route out of a chase.',
      'resolucion': 'Keep driving precisely for hours.',
    },
  },

  'latrocinio': {
    name: 'Larceny',
    aka: ['Crime', 'Security'],
    description: 'This Skill means knowing the tools and techniques for picking locks, planting bugs, defeating ordinary car and burglar alarms, forging by hand, hot-wiring vehicles or even cracking safes, plus no end of ways to force entry to a place. It also serves to install an “impenetrable” security system, or to deduce how and where the systems failed in a break-in. The Ventrue most likely call it “Security”.',
    note: 'Most high-end systems now run on computer control, closed circuit or electronic alarms, so beating them may call for Technology as well.',
    dots: [
      'You pick a simple lock or empty the pocket of someone inattentive.',
      'You hot-wire a car or shoplift without difficulty.',
      'You locate security cameras and alarms and work out the best way around them.',
      'You beat a keypad, re-encode an ID card or open a safe.',
      'You break into a bank vault. Or out of one.',
    ],
    specialties: ['Alarms', 'Breaking and Entering', 'Security Analysis', 'Safecracking', 'Pickpocketing', 'Forgery', 'Lockpicking', 'Grand Theft Auto'],
    combos: {
      'destreza':     'Pick a lock.',
      'inteligencia': 'Plan a heist.',
      'astucia':      'Improvise when something goes wrong.',
    },
  },

  'pelea': {
    name: 'Brawl',
    description: 'Brawl lets you reach your target when you throw a punch, a kick or a swipe of the claws. As long as you hold no weapon the attack counts as brawling, and it may run from the most elegant aikijutsu to the dirtiest street scrap.',
    dots: [
      'Your childhood was rough and you had to fight for your place. You know a couple of moves.',
      'You picked up some training in hitting hard and accurately.',
      'You handle yourself more than well in a scrap.',
      'Either you were trained to Spetsnaz standard, or you have spent decades of unlife fighting.',
      'You would win an MMA tournament without reaching for your vampiric Powers.',
    ],
    specialties: ['Animals', 'Sport Fighting', 'In Beast Form', 'Werewolves', 'Armed Mortals', 'Unarmed Mortals', 'Bar Fights', 'Prey', 'Kindred'],
    combos: {
      'fuerza':      'Throw a powerful punch.',
      'destreza':    'Dodge and counter-attack.',
      'resistencia': 'Hold out in a grapple.',
    },
  },

  'pelea-con-armas': {
    name: 'Melee',
    aka: ['Close Combat', 'Hand-to-hand Weapons'],
    description: 'Use Melee to wield knives, chains, baseball bats and the like. Stakes, which tend to end up in the hands of would-be hunters, also fall under this Skill.',
    dots: [
      'You swing a bat or a sword and usually reach whoever you meant to.',
      'Your obvious ease with a weapon in hand would make an attacker think twice.',
      'Your skill with a melee weapon is known throughout the domain.',
      'Some fools brought a gun to your knife fight.',
      'You are the domain’s weapon master, and Kindred from everywhere seek you out for your skill.',
    ],
    specialties: ['Improvised Weapons', 'Chains', 'Knives', 'Fencing', 'Swords', 'Stakes', 'Clubs', 'Disarming Strikes', 'Axes', 'Batons'],
    combos: {
      'destreza': 'Fence or make precise attacks.',
      'fuerza':   'Strike with a heavy weapon.',
      'astucia':  'Exploit an opening in your enemy’s guard.',
    },
  },

  'sigilo': {
    name: 'Stealth',
    description: 'Stealth lets you shadow a target unseen, which makes the vampires who master it unmatched hunters. It gives them the ability to spy, slip away and blend into a crowd when needed.',
    dots: [
      'You are hard to see if you hide under cover of darkness or in camouflage clothing.',
      'You slip past distracted observers and stalk unwary victims without raising suspicion.',
      'Moving carefully and hiding easily, you dodge the security patrols.',
      'Your subtle, silent walk would make you a good ninja — or an enemy worthy of one.',
      'The Banu Haqim would ask your advice on stalking and hiding, if they managed to find you.',
    ],
    specialties: ['Disguise', 'Ambushes', 'Hiding', 'Silent Movement', 'Crowds', 'Wilderness', 'Shadowing', 'Urban'],
    combos: {
      'destreza':   'Move silently.',
      'astucia':    'Find a good hiding place.',
      'resolucion': 'Stay hidden for a long time.',
    },
  },

  'supervivencia': {
    name: 'Survival',
    description: 'Survival gives you the ability to subsist in the wild and in other hostile environments long enough to get back to civilisation: navigating by the stars, putting up an improvised haven, or spotting a werewolf before it is too late. Some of its uses work just as well in parks, industrial estates and the other wastelands of the urban jungle.',
    dots: [
      'You know the trails and the natural surroundings of your domain.',
      'You spend more time outdoors than in, and you track anyone who cannot handle themselves in the woods.',
      'You subsist away from the city, setting traps for mortals and building a haven for yourself.',
      'You thrive outside the city as the predator you are.',
      'The Gangrel travel with you in packs, if they can keep up.',
    ],
    specialties: ['Forests', 'Hunting', 'Desert', 'Urban Exploration', 'Jungle', 'Tracking', 'Havens', 'Traps'],
    combos: {
      'resistencia': 'Hold out for days in harsh conditions.',
      'astucia':     'Find food, water or shelter.',
      'resolucion':  'Push on despite exhaustion.',
    },
  },

  // ── SOCIAL SKILLS ────────────────────────────────────────────────────────────

  'callejeo': {
    name: 'Streetwise',
    description: 'Streetwise lets you understand and negotiate with street and underworld society. You decode code words and in-house slang, read the markings in graffiti and mimic gang signs.',
    dots: [
      'You know where to get drugs and sex in your domain.',
      'You know which gangs work your area, their colours and their rivalries. You may even have a tag of your own.',
      'You tell the good stuff from the bad, get hold of guns and pass unnoticed among street people or gangbangers.',
      'When a gangster says “I know a guy”, they mean you.',
      'You hire, orchestrate or arrange almost any criminal activity anywhere in the city.',
    ],
    specialties: ['Gangs', 'Drugs', 'Graffiti', 'Black Market', 'Personal Reputation', 'Bribery', 'Urban Survival', 'Gun Running', 'Fencing Stolen Goods'],
    combos: {
      'carisma':      'Get contacts on the street.',
      'manipulacion': 'Get information out of someone.',
      'astucia':      'Work out fast who to go to.',
    },
  },

  'etiqueta': {
    name: 'Etiquette',
    description: 'Etiquette is the ability to recognise the social conventions of the moment and respond to them, to set new protocol, and to please everyone around you with your manners. It is used in high society, Kindred and mortal alike.',
    dots: [
      'You know how to address your local ruler without a misstep.',
      'You know the rules of etiquette in every nightspot in the domain.',
      'You impress others with your command of manners, deference and elegance.',
      'Your conduct sets trends, above all when you do something that shakes the rules up.',
      'The Keeper of Elysium and the Harpies look to you when setting the domain’s protocol.',
    ],
    specialties: ['Anarch', 'Camarilla', 'Corporate', 'Elysium', 'Feudal', 'Secret Society', 'One Percent'],
    combos: {
      'carisma':      'Make a good impression at a reception.',
      'manipulacion': 'Turn social rules to your advantage.',
      'inteligencia': 'Know an unfamiliar protocol.',
    },
  },

  'interpretacion': {
    name: 'Performance',
    description: 'Performance covers a very wide range of arts, from dance to comedy to storytelling. You may be an inspired performer or simply an enthusiastic student of the performing arts.',
    note: 'Taking this Skill earns you a free Specialty.',
    dots: [
      'You are the life of the party, but you would not dare take your act to a stage.',
      'You have performed for audiences to mixed reviews: some adore you and some detest you.',
      'You are an expert student of whichever performing art you chose.',
      'You perform your art impressively, outdoing the Toreador in every respect.',
      'Improvising holds no fear for you: a different audience every night, a different show every night.',
    ],
    specialties: ['Singing', 'Comedy', 'Dance', 'Drama', 'Guitar', 'Public Speaking', 'Wind Instruments', 'Percussion', 'Poetry', 'Rap', 'Keyboards', 'Violin'],
    combos: {
      'carisma':      'Captivate an audience.',
      'destreza':     'Play a piece of music.',
      'manipulacion': 'Play a part in order to deceive.',
    },
  },

  'intimidacion': {
    name: 'Intimidation',
    description: 'Intimidation is the power to frighten, coerce, threaten and get tough with someone to win a social victory. Vampires who resort to it do not hesitate to crush their enemies’ wills — and sometimes their fingers.',
    dots: [
      'You land a cutting insult effectively.',
      'You force your way past most humans without difficulty.',
      'Your swagger and cruelty have earned you a reputation.',
      'You are far beyond simple physical threats.',
      'Even other Kindred take a step back if you take one forward.',
    ],
    specialties: ['Veiled Threats', 'Physical Coercion', 'Extortion', 'Insults', 'Interrogation', 'Staredowns'],
    combos: {
      'fuerza':       'Threaten with physical force.',
      'manipulacion': 'Threaten with blackmail.',
      'carisma':      'Intimidate through sheer presence.',
    },
  },

  'liderazgo': {
    name: 'Leadership',
    description: 'Leadership gives you the ability to head a crowd, command a detachment, raise your followers’ morale or put down a rebellion. A strong Prince or Baron needs Leadership, or risks losing the throne.',
    dots: [
      'You have run informal clubs and know how to organise like-minded Kindred.',
      'Your voice is heard at meetings and even your superiors listen now and then.',
      'You take command on the battlefield and lead your soldiers to their deaths.',
      'You inspire the wounded and dying to act, as long as you are there to guide them.',
      'Your words fill vampires’ hearts with force enough to make them feel alive again.',
    ],
    specialties: ['Group Dynamics', 'Inspiration', 'War Pack', 'Command', 'Oratory', 'Praxis'],
    combos: {
      'carisma':      'Inspire a group.',
      'manipulacion': 'Get others to do what you want.',
      'inteligencia': 'Coordinate a complex strategy.',
    },
  },

  'perspicacia': {
    name: 'Insight',
    description: 'Insight gives you the ability to read body language, catch subtle cues in expression and tone, and separate truth from lies. It also lets you sense and understand the motivation behind another’s actions.',
    dots: [
      'You see past empty threats.',
      'You catch the hidden emotions of humans and sometimes even of Kindred.',
      'You provide psychotherapy more effectively still than someone who is not planning to snack on their patient.',
      'You are an undead lie detector. Only the very best con artists get one past you.',
      'People may be books of blood, but printed in good large type that is easy to read.',
    ],
    specialties: ['Ambitions', 'Desires', 'Lie Detection', 'Empathy', 'Phobias', 'Interrogation', 'Motives', 'Vices'],
    combos: {
      'astucia':      'Tell that someone is lying.',
      'inteligencia': 'Analyse someone’s motives.',
      'resolucion':   'Watch patiently until you find something out.',
    },
  },

  'persuasion': {
    name: 'Persuasion',
    description: 'Reach for Persuasion when you want to convince someone that you know what is good for them and that a single bite is nothing to worry about. A skilled persuader plays on their victims’ emotions and appeals to their peers’ reason. It works in courts of law and the Prince’s court alike, in boardrooms, bars and bedrooms.',
    dots: [
      'You sell something to a buyer who came in motivated already.',
      'You always land a discount or come out of the latest rumour well.',
      'You always find a compromise in any conflict.',
      'The other side starts looking for a settlement the moment you appear in court, mortal or vampiric.',
      'You could be the genuine silver-tongued devil.',
    ],
    specialties: ['Legal Argument', 'Fast Talk', 'Interrogation', 'Negotiation', 'Haggling', 'Rhetoric'],
    combos: {
      'carisma':      'Convince through likeability.',
      'manipulacion': 'Convince through deceit.',
      'inteligencia': 'Convince through argument.',
    },
  },

  'subterfugio': {
    name: 'Subterfuge',
    description: 'Subterfuge is the art of lying convincingly, spinning a tale and giving good excuses for bad actions. It defines your talent for intrigue, secrecy and duplicity. It is also used to seduce, and to imitate mortal behaviour.',
    dots: [
      'You tell simple, believable lies.',
      'You trick the most credulous, young and old, into handing over their things.',
      'You operate on several levels at once, telling lies you want discovered so they prop up others.',
      'You hold out indefinitely undercover: a perfect double agent. Maybe you are one!',
      'Nobody believes you have a single dot of Subterfuge.',
    ],
    specialties: ['Bluffing', 'Feigning Mortality', 'Innocence', 'The Long Con', 'Impeccable Lies', 'Seduction'],
    combos: {
      'manipulacion': 'Lie to get something.',
      'carisma':      'Deceive through charm.',
      'astucia':      'Invent a lie on the spot.',
    },
  },

  'trato-con-animales': {
    name: 'Animal Ken',
    aka: ['Animals'],
    description: 'Animal Ken lets you cow and calm animals, and even win their friendship. With it you predict how an animal will react to a given situation, train a domesticated one, or try to soothe or enrage others. Without this Skill, most creatures avoid vampires or turn aggressive towards them.',
    dots: [
      'Animals shy away from you, but they neither bolt nor try to bite.',
      'Around you they are docile and behave as though you were not there, unless you build a relationship with them.',
      'They treat you as a warm and friendly master, as long as you do not provoke them.',
      'You draw animals to you. Few of those that attack keep the aggression up.',
      'You sense animals’ feelings and thoughts, and they sense yours, and act on them.',
    ],
    specialties: ['Soothing', 'Horses', 'Falconry', 'Attack Training', 'Specialist Training', 'Cats', 'Wolves', 'Dogs', 'Rats', 'Snakes'],
    combos: {
      'carisma':      'Calm an animal.',
      'manipulacion': 'Get an animal to do something.',
      'inteligencia': 'Understand an animal’s behaviour.',
    },
  },

  // ── MENTAL SKILLS ────────────────────────────────────────────────────────────

  'academicismo': {
    name: 'Academics',
    description: 'Academics reflects understanding, higher education and the ability to research in the humanities and liberal arts. The study of history, for instance, is hardly “just academic” when your immortal enemies lived through that period and left their mark on it.',
    note: 'Taking this Skill earns you a free Specialty. Foreign languages are handled through the Linguistics Merit.',
    dots: [
      'Basic primary and secondary education; night classes at a community college.',
      'Basic university education, or tutelage under a mediocre mentor; a four-year degree.',
      'Advanced university study or careful personal tutelage; a brilliant degree, a doctorate.',
      'Specialised study beyond university, in subjects very few people understand.',
      'Refined, advanced scholarship; you are likely sought out for guidance and advice.',
    ],
    specialties: ['Architecture', 'Research', 'Teaching', 'Philosophy', 'History', 'Art History', 'Literature', 'Journalism', 'Theology'],
    combos: {
      'inteligencia': 'Recall historical information.',
      'astucia':      'Connect data from different sources.',
      'resolucion':   'Work through a complex academic problem.',
    },
  },

  'ciencias': {
    name: 'Science',
    aka: ['Sciences'],
    description: 'Science is an enormously broad field, running from the basic principles of life to an understanding of universal entropy. The laws of science rule the mortal world, and the vampires who mean to rule that world have to study them.',
    note: 'Its dot levels match those of Academics, from “some study” to “world-famous scholar”. Like it, this Skill grants a free Specialty.',
    dots: [
      'You dabble, and you understand the principles behind the basic elements of life.',
      'You explain accurately the scientific theories behind Embracing another vampire.',
      'You would make an excellent research director: you run a laboratory, interpret findings and keep up with research in most fields. You also repair scientific equipment.',
      'You are an expert in your field and in every field connected to it.',
      'Few colleagues match you, and the rest come to you for advice.',
    ],
    specialties: ['Astronomy', 'Biology', 'Demolitions', 'Physics', 'Genetics', 'Geology', 'Engineering', 'Mathematics', 'Chemistry'],
    combos: {
      'inteligencia': 'Analyse a substance or phenomenon.',
      'astucia':      'Draw conclusions from incomplete data.',
      'resolucion':   'Keep a line of research going for a long time.',
    },
  },

  'consciencia': {
    name: 'Awareness',
    aka: ['Alertness', 'Perception'],
    description: 'Awareness governs your perception. With it you would spot a Banu Haqim before they strike, see a key tossed into the wastebasket, or catch a trace of perfume still in the air.',
    dots: [
      'You usually realise when something is out of place.',
      'You detect a behavioural pattern or erratic conduct in someone.',
      'You see past most disguises and sense hidden dangers or clues.',
      'Even when you are distracted, little escapes your perception.',
      'Your senses are those of a wild animal.',
    ],
    specialties: ['Camouflage', 'Ambushes', 'The Wild', 'Instincts', 'Concealed Objects', 'Hearing', 'Smell', 'Traps', 'Sight'],
    combos: {
      'astucia':      'Notice someone approaching, or that something supernatural is near.',
      'resolucion':   'Keep up a long watch despite distractions.',
      'inteligencia': 'Read strange details in the surroundings and work out what an anomaly means.',
    },
  },

  'finanzas': {
    name: 'Finance',
    description: 'Finance lets you identify market trends, invest shrewdly, manipulate stocks and see a crash coming. It also serves to appraise — and trace — other people’s wealth and close financial deals. Generally you can value art, property and any other asset without a criminal origin. The Ventrue prize this Skill above some Disciplines.',
    dots: [
      'You run a business and keep its books.',
      'You run a corporate division or a bank branch, and file thoroughly plausible tax returns.',
      'International trade has made you a respectable broker on foreign markets.',
      'Investment banking follows your financial judgement, and committing fraud costs you no trouble at all.',
      'You make money do anything at all, including stick to your pockets or crush nations.',
    ],
    specialties: ['Art', 'Banking', 'Money Laundering', 'Forensic Accounting', 'Corporate Finance', 'Currency Manipulation', 'Stock Market', 'Black Market', 'Appraisal'],
    combos: {
      'inteligencia': 'Analyse accounts or investments.',
      'astucia':      'Spot an opportunity quickly.',
      'manipulacion': 'Talk someone into investing.',
    },
  },

  'investigacion': {
    name: 'Investigation',
    description: 'Investigation lets you solve cases by mundane or mysterious means, find clues, interpret them and follow the trail of missing people. Vampires find it especially useful when a vessel gets away from them.',
    dots: [
      'You love a good mystery novel and picture yourself as an amateur detective.',
      'You have basic criminology down and know the signature methods of the local crooks.',
      'You are, or could be, a professional detective. Nothing escapes you at a crime scene.',
      'The Sheriff turns to you when unknown factions threaten the safety of the domain.',
      'You set riddles for others and lead an enigmatic existence very few unravel.',
    ],
    specialties: ['Traffic Analysis', 'Murder', 'Forensics', 'Criminology', 'Deduction', 'Missing Persons', 'Paranormal Mysteries'],
    combos: {
      'inteligencia': 'Analyse a crime scene.',
      'astucia':      'Connect seemingly unrelated clues.',
      'resolucion':   'Follow an investigation for days.',
    },
  },

  'medicina': {
    name: 'Medicine',
    description: 'Medicine lets you put damaged people back together and diagnose a victim’s cause of death or illness. It also serves for handling medical equipment, prescribing drugs and reducing — or increasing — blood flow.',
    note: 'This is the Skill with which characters heal aggravated Health damage on mortals.',
    dots: [
      'You have basic anatomy down and tell venous circulation from arterial. You perform CPR and first aid.',
      'You readily treat emergencies and minor illnesses, and make a diagnosis.',
      'Your training lets you carry out major operations and treat serious wounds.',
      'You diagnose every illness but the rarest.',
      'You are a renowned expert physician, called on by mortals and immortals alike.',
    ],
    specialties: ['Surgery', 'Pharmacy', 'Phlebotomy', 'Haematology', 'Pathology', 'First Aid', 'Emergency Care', 'Veterinary'],
    combos: {
      'inteligencia': 'Diagnose an illness.',
      'destreza':     'Perform an operation.',
      'resolucion':   'Work an emergency for hours.',
    },
  },

  'ocultismo': {
    name: 'Occult',
    description: 'Occult represents knowledge of the mystic world, running from the rites and practices of Masons and Rosicrucians to those of Noddists and true mages. You recognise occult signs and folk magic practices, whether or not they work.',
    dots: [
      'You know the legends of Caine and the Antediluvians, and may have read the Book of Nod.',
      'You separate truth from nonsense in popular occultism.',
      'You have first-hand experience of something inexplicable, even by Kindred standards.',
      'You would recite the names of most Antediluvians and even make sense of a Tremere ritual.',
      'The Tremere and the Banu Haqim consult you on arcane knowledge.',
    ],
    specialties: ['Alchemy', 'Ghosts', 'Grimoires', 'Fae', 'Werewolves', 'Infernalism', 'Magi', 'Blood Magic', 'Necromancy', 'Noddism', 'Parapsychology', 'Voudoun'],
    combos: {
      'inteligencia': 'Recognise a ritual or creature.',
      'astucia':      'Read clues about something supernatural.',
      'resolucion':   'Research a mystery over a long time.',
    },
  },

  'politica': {
    name: 'Politics',
    description: 'Politics covers diplomacy and bureaucracy, human and vampiric alike. You work with city government — and perhaps lobby it — and maybe with higher levels too. Among Kindred you know the inside news, which Sect rules where, who is at war with whom, and where the bodies are buried. Literally.',
    dots: [
      'You follow mortal politics in your regnum and know at least what the Elders tell you.',
      'You exert influence locally, or you know who can.',
      'You would run political campaigns or parties, or make waves in your Sect as a rising star.',
      'You know who holds the real power in your area, among the living and the undead alike.',
      'You would guess who the anonymous members of the Camarilla’s Inner Circle are.',
    ],
    specialties: ['Anarch', 'Camarilla', 'Clan', 'Diplomacy', 'City Government', 'Media', 'State Politics', 'National Politics'],
    combos: {
      'inteligencia': 'Know the structures of power.',
      'manipulacion': 'Manipulate a politician.',
      'astucia':      'Know who actually holds the power.',
    },
  },

  'tecnologia': {
    name: 'Technology',
    description: 'As a Skill, Technology is a moving target: it governs the use and understanding of those “technical developments most vampires find baffling”. In 1870 that would have been steam engines and electricity; today it is computers and information systems, which of course now handle very nearly everything.',
    dots: [
      'You know how to upgrade a home PC and protect it from viruses.',
      'You hide your IP, fly drones and fake a digital photograph.',
      'You write and release your own viruses without fear of being traced.',
      'The Prince might call you personally to handle cybersecurity in their domain.',
      'On the internet nobody knows you are a vampire, or even that you exist.',
    ],
    specialties: ['Artillery', 'Computer Building', 'Coding', 'Hacking', 'Data Mining', 'Networks', 'Surveillance Systems', 'Phones'],
    combos: {
      'inteligencia': 'Program or understand a system.',
      'destreza':     'Repair hardware.',
      'astucia':      'Improvise a technical fix.',
    },
  },

}
