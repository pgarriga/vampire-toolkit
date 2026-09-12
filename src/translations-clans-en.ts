// English translations overlay for V5 clan data
// Applied over the Spanish base data in src/clans.ts when language is English

import type { ClanIconType } from './types'

export type ClanTraitTranslation = {
  name: string
  description: string
}

export type ClanTranslation = {
  name: string
  nickname: string
  verbs: string[]
  description: string
  bane: ClanTraitTranslation
  compulsion: ClanTraitTranslation
}

export const CLANS_EN: Record<ClanIconType, ClanTranslation> = {

  'banu-haqim': {
    name: 'Banu Haqim',
    nickname: 'The Judges',
    verbs: ['adjudicate', 'punish', 'discipline', 'execute', 'judge'],
    description: 'Warriors and scholars in equal measure, the Banu Haqim hold their own to a standard most Kindred find intolerable. For centuries they stood apart from the Camarilla, selling their services as assassins; many have now sworn to the Ivory Tower without giving up their thirst for justice. Their Blood drives them to drink from those who break their Convictions.',
    bane: {
      name: 'Blood Addiction',
      description: 'When a Banu Haqim slakes at least one Hunger level from another vampire, they must make a Hunger Frenzy test at Difficulty 2 + Bane Severity. On a failure they gorge themselves on vitae, opening the door to possible Diablerie.',
    },
    compulsion: {
      name: 'Judgment',
      description: 'Driven to punish wrongdoing, the vampire must slake at least one Hunger level from anyone who acts against their own Convictions. Until they do, they suffer a three-dice penalty to all pools, ending when satisfied or when the scene does.',
    },
  },

  brujah: {
    name: 'Brujah',
    nickname: 'The Rebels',
    verbs: ['fight', 'oppose', 'protest', 'rebel', 'resist'],
    description: 'Idealists with their fangs clenched. The Brujah were philosophers and warrior-poets before they became the engine behind nearly every uprising of the night. They burn with rage against any authority they judge unjust, and that same rage consumes them: few clans keep the Beast so close to the surface.',
    bane: {
      name: 'Violent Temper',
      description: 'Fury simmers permanently beneath the surface. Subtract dice equal to Bane Severity from any roll made to resist a fury frenzy.',
    },
    compulsion: {
      name: 'Rebellion',
      description: 'The Brujah must defy an authority figure, contradict what is expected of them, or change someone\'s mind. Until they manage it they suffer a two-dice penalty to all pools.',
    },
  },

  gangrel: {
    name: 'Gangrel',
    nickname: 'The Beasts',
    verbs: ['stalk', 'endure', 'shapeshift', 'fight', 'prowl'],
    description: 'Nomads, survivors and loners. The Gangrel stand closer to the Beast than any other Kindred and consider it an advantage rather than a curse: they change shape, run with wolves and sleep beneath the earth. The older they grow, the less of the human being remains.',
    bane: {
      name: 'Bestial Features',
      description: 'On entering frenzy the Gangrel gains as many animal features as their Bane Severity. Each feature reduces one Attribute by 1 and lasts until the following night. Riding the Wave limits it to a single feature and a single lost point.',
    },
    compulsion: {
      name: 'Feral Impulses',
      description: 'The vampire regresses to an animal state: for one scene they suffer a three-dice penalty to any roll involving Manipulation or Intelligence and can only speak in one-word sentences.',
    },
  },

  hecata: {
    name: 'Hecata',
    nickname: 'The Necromancers',
    verbs: ['document', 'investigate', 'summon and bind ghosts', 'resurrect', 'watch'],
    description: 'The great family of death. The Hecata gather the old Giovanni, Samedi, Nagaraja and other necromantic lines under a single surname and a single business: death, in all its profitable forms. They deal with ghosts the way others deal with suppliers, and nurse their family feuds with centuries of patience.',
    bane: {
      name: 'Painful Kiss',
      description: 'Their Kiss brings agony rather than ecstasy. The Hecata can only feed by causing injury and blood loss; an unwilling mortal who can escape will try to, and vampires they bite risk terror frenzy.',
    },
    compulsion: {
      name: 'Morbidity',
      description: 'The vampire needs to move something across the border between life and death. Any action not taken to end something or bring it back suffers a two-dice penalty.',
    },
  },

  lasombra: {
    name: 'Lasombra',
    nickname: 'The Manipulators',
    verbs: ['cheat', 'achieve', 'command', 'pull strings', 'persevere'],
    description: 'Highborn predators who regard darkness as their birthright. Pillars of the Sabbat for centuries, many Lasombra have defected en masse to the Camarilla, where their ambition and their contempt for weakness remain undimmed. For them the end justifies any means, and failure is unforgivable.',
    bane: {
      name: 'Distorted Image',
      description: 'Their reflection and recorded image come out twisted. Technology rolls to interact through electronic means take a Difficulty of 2 + Bane Severity, and electronic detection systems suffer a penalty equal to that Severity when trying to register them.',
    },
    compulsion: {
      name: 'Ruthlessness',
      description: 'The next time the vampire fails an action, they suffer a two-dice penalty to all rolls until they succeed at a fresh attempt at that same action.',
    },
  },

  malkavian: {
    name: 'Malkavian',
    nickname: 'The Oracles',
    verbs: ['divine', 'comprehend', 'confuse', 'perceive', 'predict'],
    description: 'Every Malkavian is broken, and something the rest cannot see slips in through the crack. Their madness is no ornament: it is both the price and the source of an insight that verges on prophecy. Some hear the Cobweb that binds the clan, others speak in riddles that only make sense weeks later.',
    bane: {
      name: 'Fractured Perspective',
      description: 'Every Malkavian carries a specific mental affliction, agreed with the Storyteller. When they suffer a Bestial Failure or a Compulsion, that affliction takes over: for the whole scene, subtract their Bane Severity from one category of dice pools (Physical, Social or Mental).',
    },
    compulsion: {
      name: 'Delusion',
      description: 'For one scene the vampire suffers a two-dice penalty to rolls involving Dexterity, Manipulation, Composure or Wits. In exchange, while it lasts they resist terror frenzy more easily.',
    },
  },

  ministry: {
    name: 'The Ministry',
    nickname: 'The Tempters',
    verbs: ['cultivate', 'deceive', 'influence', 'negotiate', 'persuade'],
    description: 'Once known as the Followers of Set, the Ministers preach liberation through transgression: they find the chain that binds a person and help them break it, knowing that whoever breaks a chain usually ends up bound to them instead. They move through sects, cults and vices with the patience of centuries.',
    bane: {
      name: 'Abhors the Light',
      description: 'Exposed to direct illumination, natural or artificial, the Minister suffers a penalty equal to their Bane Severity to all dice pools. Sunlight also deals them additional aggravated damage.',
    },
    compulsion: {
      name: 'Transgression',
      description: 'The vampire must entice someone — or themselves — into breaking a Conviction. Meanwhile they suffer a two-dice penalty to any pool unrelated to the temptation. It ends once they cause at least one Stain.',
    },
  },

  nosferatu: {
    name: 'Nosferatu',
    nickname: 'The Monstrosities',
    verbs: ['stalk', 'spy', 'investigate', 'observe', 'conceal'],
    description: 'The Embrace deforms them beyond recognition, and that sentence has made them the finest spies of the night. They live in tunnels and sewers, move where nobody looks, and trade in the one commodity that never loses value: information. No prince is better informed than the one served by a Nosferatu.',
    bane: {
      name: 'Repulsiveness',
      description: 'The Nosferatu is monstrous to look at and cannot pass for human: they permanently carry the Repulsive Flaw. Any attempt to disguise themselves or feign normality suffers a penalty equal to their Bane Severity.',
    },
    compulsion: {
      name: 'Cryptophilia',
      description: 'The vampire needs to obtain a secret they do not yet know. Any action that does not bring them closer to that secret suffers a two-dice penalty.',
    },
  },

  ravnos: {
    name: 'Ravnos',
    nickname: 'The Nomads',
    verbs: ['evade', 'trick', 'deceive', 'bluff', 'wander'],
    description: 'Survivors of a catastrophe that all but wiped the clan off the earth. The Ravnos cannot put down roots: the Blood punishes them for sleeping twice in the same place, so they live in perpetual motion, travelling light and solving problems with cunning, deception and a recklessness that borders on suicidal.',
    bane: {
      name: 'Doomed',
      description: 'If the Ravnos daysleeps in the same place more than once in seven nights, roll a number of dice equal to their Bane Severity: they take 1 point of aggravated damage for each 10 rolled.',
    },
    compulsion: {
      name: 'Tempting Fate',
      description: 'The vampire must tackle the problem in front of them by the most daring and dangerous route available. Any safer solution suffers a two-dice penalty, until the problem is solved or becomes impossible.',
    },
  },

  salubri: {
    name: 'Salubri',
    nickname: 'The Hunted',
    verbs: ['conceal', 'redeem', 'resist', 'survive'],
    description: 'A near-extinct clan, slandered so thoroughly that most Kindred believe them a fairy tale. The Salubri bear a third eye on the brow and a calling as healers or warrior-guardians that sets them against everything the Camarilla stands for. So few remain that each one is coveted prey.',
    bane: {
      name: 'Hunted',
      description: 'Their vitae is addictive: any non-Salubri vampire who drinks from them must pass a Hunger Frenzy test or keep feeding uncontrollably. Their third eye also weeps blood when they activate Disciplines, which can set off the frenzy of any hungry Kindred nearby.',
    },
    compulsion: {
      name: 'Affective Empathy',
      description: 'Another\'s suffering overwhelms them. Any action not aimed at easing that person\'s pain suffers a two-dice penalty.',
    },
  },

  toreador: {
    name: 'Toreador',
    nickname: 'The Seducers',
    verbs: ['enchant', 'perform', 'obsess', 'seduce', 'tempt'],
    description: 'The clan of beauty, and of those who pursue it because they can no longer create it. Patrons, artists and divas, the Toreador surround themselves with the exquisite because eternity without it is unbearable. Their refinement is genuine and so is their cruelty: few things are as cold as a Toreador who has grown bored of you.',
    bane: {
      name: 'Aesthetic Fixation',
      description: 'Ugliness weakens them. In surroundings they do not find beautiful, their Discipline pools suffer a penalty equal to their Bane Severity.',
    },
    compulsion: {
      name: 'Obsession',
      description: 'Something beautiful seizes their attention completely: they can speak of nothing else, and any action unrelated to that object suffers a two-dice penalty, until it leaves their sight or the scene ends.',
    },
  },

  tremere: {
    name: 'Tremere',
    nickname: 'The Warlocks',
    verbs: ['learn', 'study', 'perfect', 'perform rituals and sorcery', 'scheme'],
    description: 'Mortal mages who stole immortality and paid for it. For centuries their Pyramid was the most disciplined structure in the Camarilla, until the destruction of their Vienna Chantry shattered it. Today they are rival houses of sorcerers with no clear leadership, and that has made them more dangerous, not less.',
    bane: {
      name: 'Deficient Blood',
      description: 'Their vitae has lost the power to enslave other Kindred: a Tremere cannot create Blood Bonds with other vampires, though they can still be bound themselves. Binding a mortal takes as many additional drinks as their Bane Severity.',
    },
    compulsion: {
      name: 'Perfectionism',
      description: 'Nothing short of excellence will do. They suffer a two-dice penalty to all pools; repeating the action reduces it to one die, and it disappears on the second repeat. It ends on a critical win with a Skill or when the scene does.',
    },
  },

  tzimisce: {
    name: 'Tzimisce',
    nickname: 'The Dragons',
    verbs: ['control', 'modify', 'possess', 'take', 'transfigure'],
    description: 'Feudal lords of old Europe who shape flesh as though it were clay. The Tzimisce are territorial to the point of pathology: they need to possess — a land, a bloodline, a cause — and treat the body, their own and others\', as one more material on which to impose their will. Their courtesy is exquisite and their cruelty artisanal.',
    bane: {
      name: 'Grounded',
      description: 'Each Tzimisce chooses a charge they are bound to: a place, a group of people, or something more abstract. They must spend the day surrounded by what they guard; otherwise they take aggravated Willpower damage on waking.',
    },
    compulsion: {
      name: 'Covetousness',
      description: 'The vampire must take possession of something present in the scene. Any action not serving that purpose suffers a two-dice penalty.',
    },
  },

  ventrue: {
    name: 'Ventrue',
    nickname: 'The Aristocrats',
    verbs: ['govern', 'influence', 'lead', 'rule', 'resist'],
    description: 'The Blue Bloods consider themselves the born leaders of the Kindred, and they have said so for long enough that they are largely right: most Camarilla princes are Ventrue. They rule through money, tradition and an unshakeable self-assurance, even when they are wrong.',
    bane: {
      name: 'Rarefied Tastes',
      description: 'They can only feed on one very specific kind of mortal. Drinking the blood of anyone outside that preference forces them to spend Willpower equal to their Bane Severity, or they vomit the blood back up without slaking any Hunger.',
    },
    compulsion: {
      name: 'Arrogance',
      description: 'They need someone to obey an order of theirs, and must manage it without supernatural means such as Dominate. Until they do, they suffer a two-dice penalty to all pools.',
    },
  },
}
