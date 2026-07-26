// English translations overlay for VtM V5 discipline/power data
// Applied over the Spanish base data when language is set to English

export type PowerTranslation = {
  name: string
  cost: string
  dicePool: string
  duration: string
  description: string
  amalgama?: string
}

export type DisciplineTranslation = {
  name: string
  description: string
  tipo: string
  amenaza: string
  resonancia: string
  clanes?: string[]
  powers: Record<string, PowerTranslation>
}

// All discipline IDs — typed so a typo in EN's keys is a compile error
type DisciplineId =
  | 'animalism'
  | 'auspex'
  | 'celerity'
  | 'dominate'
  | 'fortitude'
  | 'obfuscation'
  | 'potence'
  | 'presence'
  | 'protean'
  | 'blood-sorcery'
  | 'thin-blood-alchemy'

export const EN: Record<DisciplineId, DisciplineTranslation> = {

  // ── ANIMALISM ────────────────────────────────────────────────────────────────
  animalism: {
    name: 'Animalism',
    description: 'A Discipline that allows the vampire to connect with animals and with the inner Beast. Masters of Animalism become one with their Beasts and can control animals, suppress the Beast of other vampires, and more.',
    tipo: 'Mental',
    amenaza: 'Low to medium. Although talking to animals may seem eccentric, only the more violent applications of the Discipline provoke more than a few raised eyebrows.',
    resonancia: 'Animal blood, preferably wild.',
    powers: {
      'sense-the-beast': {
        name: 'Sense the Beast',
        cost: 'None',
        dicePool: 'Resolve + Animalism vs. Composure + Subterfuge',
        duration: 'Passive',
        description: 'Detects the predatory nature and hostility of nearby creatures. Identifies vampires, werewolves and other supernaturals. Works actively or passively (warns of aggressive intent). A critical win reveals the exact type and current Hunger/Rage.',
      },
      'bond-famulus': {
        name: 'Bond Famulus',
        cost: 'The animal must be fed the user\'s Blood on three separate nights, each requiring a Rouse Check from the user.',
        dicePool: 'Charisma + Animal Ken',
        duration: 'Only death frees a famulus once Bonded.',
        description: 'Creates a permanent mental bond with an animal, turning it into a familiar (famulus). Only one may be held. The famulus does not age while receiving Blood and can be used at no cost with Feral Whispers and Subsume the Spirit.',
      },
      'feral-whispers': {
        name: 'Feral Whispers',
        cost: 'One Rouse Check per animal type chosen for the scene. No cost if used on the famulus.',
        dicePool: 'Manipulation + Animalism, Charisma + Animalism',
        duration: 'One scene',
        description: 'Two-way communication with animals, and summoning them. Difficulty scales with the task (e.g. watching a park diff. 3; defending a place with its life diff. 6). The margin on the summoning roll sets how many animals answer.',
      },
      'unliving-hive': {
        name: 'Unliving Hive',
        cost: 'No additional cost',
        dicePool: 'N/A',
        duration: 'Passive',
        description: '(Amalgam: Obfuscation 2) Extends all Animalism powers to insect swarms. Can be bonded as a famulus and nest inside the vampire\'s own body.',
        amalgama: 'Obfuscation 2',
      },
      'quell-the-beast': {
        name: 'Quell the Beast',
        cost: 'One Rouse Check',
        dicePool: 'Charisma + Animalism vs. Stamina + Resolve',
        duration: 'One scene or as many turns as the margin of victory +1',
        description: 'A win against a mortal leaves them apathetic, unable to act except to survive. Against a vampire, prevents them from taking a Blood Surge and denies messy criticals. A critical win against a vampire also ends their Frenzy.',
      },
      'animal-succulence': {
        name: 'Animal Succulence',
        cost: 'None',
        dicePool: 'N/A',
        duration: 'Passive',
        description: 'Feeding on animals sates 1 extra Hunger, and Blood Potency counts as 2 levels lower for animal-blood penalties. Consuming the vampire\'s own famulus sates 4 Hunger (never the last one) and raises the Attribute most tied to that animal by +2 until the next feeding.',
      },
      'subsume-the-spirit': {
        name: 'Subsume the Spirit',
        cost: 'One Rouse Check. None if used on the famulus.',
        dicePool: 'Manipulation + Animalism',
        duration: 'One scene / indefinitely (on a critical win)',
        description: 'Transfers the vampire\'s consciousness into an animal\'s body, controlling it completely and using all its senses. The vampiric body remains unconscious during the possession.',
      },
      'animal-dominion': {
        name: 'Animal Dominion',
        cost: 'Two Rouse Checks',
        dicePool: 'Charisma + Animalism',
        duration: 'A single scene or until the order is fulfilled, whichever is shorter',
        description: 'Dominates entire herds or groups of animals simultaneously as if they were a single entity. On a critical win, control is absolute with no additional roll needed.',
      },
      'drawing-out-the-beast': {
        name: 'Drawing Out the Beast',
        cost: 'One Rouse Check',
        dicePool: 'Wits + Animalism vs. Composure + Resolve',
        duration: 'The duration of the Frenzy',
        description: 'Instead of rolling Willpower to resist a fear or fury Frenzy, roll against the target\'s Composure + Resolve. On a win, the target Frenzies in the vampire\'s place. On a fail, the vampire Frenzies as normal. Cannot transfer a Hunger Frenzy.',
      },
    },
  },

  // ── AUSPEX ───────────────────────────────────────────────────────────────────
  auspex: {
    name: 'Auspex',
    description: 'Among the greatest gifts and worst curses of vampires, Auspex allows Kindred to discern truth from lies, probe the minds of those around them, and perceive reality at a level different from other beings.',
    tipo: 'Mental',
    amenaza: 'Low. Auspex never manifests visibly to the naked eye or causes effects that cannot be rationalized.',
    resonancia: 'Phlegmatic. Artists (especially photographers) and visionaries, certain schizophrenics, users of psychoactive substances, detectives.',
    powers: {
      'heightened-senses': {
        name: 'Heightened Senses',
        cost: 'None',
        dicePool: 'Wits + Resolve',
        duration: 'Until deactivated',
        description: 'Adds the Auspex score as extra dice to all Perception rolls. Under extreme stimuli (loud blasts, bright flashes, overwhelming smells), requires a Wits + Resolve, diff. 3, or suffers −3 dice to all perception rolls for the rest of the scene.',
      },
      'sense-the-unseen': {
        name: 'Sense the Unseen',
        cost: 'None',
        dicePool: 'Wits + Auspex or Resolve + Auspex',
        duration: 'Passive',
        description: 'Attunes the senses to hidden presences: users of Obfuscation, spies using Auspex, ghosts, latent Blood Sorcery rituals. Storyteller-driven passive detection; against an actively hiding entity, a Wits + Auspex contest against the target\'s relevant pool.',
      },
      premonition: {
        name: 'Premonition',
        cost: 'None or one Rouse Check',
        dicePool: 'Resolve + Auspex',
        duration: 'Passive',
        description: 'Receives flashes of intuition, hunches, or visions about immediate dangers. The Storyteller may grant passive clues without the player requesting them.',
      },
      'shared-senses': {
        name: 'Shared Senses',
        cost: 'One Rouse Check',
        dicePool: 'Resolve + Auspex',
        duration: 'One scene',
        description: 'See, hear and feel through another mortal or vampire. Line of sight required for strangers; usable at distance on anyone holding the user\'s Blood. The victim can detect it with Sense the Unseen and eject it via a Wits + Resolve contest (an ejected user cannot try again until the following night).',
      },
      'scry-the-soul': {
        name: 'Scry the Soul',
        cost: 'One Rouse Check',
        dicePool: 'Intelligence + Auspex vs. Composure + Subterfuge',
        duration: 'One turn or at the Storyteller\'s discretion',
        description: 'Reads a person\'s aura. Margin determines how many questions the Storyteller answers truthfully: emotional state, Resonance, whether they\'re supernatural, whether they\'re under Blood Sorcery, whether they\'ve committed Diablerie in the past year. A critical win reveals something unexpected.',
      },
      'spirits-touch': {
        name: 'Spirit\'s Touch',
        cost: 'One Rouse Check',
        dicePool: 'Intelligence + Auspex',
        duration: 'One turn',
        description: 'By touching an object or place, relives the emotions and impressions left by those who used it (psychometry). The more intense the original emotion, the clearer the vision.',
      },
      clairvoyance: {
        name: 'Clairvoyance',
        cost: 'One Rouse Check',
        dicePool: 'Intelligence + Auspex',
        duration: 'A few minutes to gather information, up to one night for surveillance',
        description: 'Projects the senses to any known location or one that can be visualized, observing remotely without being physically present.',
      },
      possession: {
        name: 'Possession',
        cost: 'Two Rouse Checks',
        dicePool: 'Resolve + Auspex vs. Resolve + Intelligence',
        duration: 'Until ended, voluntarily or otherwise',
        description: '(Amalgam: Dominate 3) Only on mortals (Ghouls must first be Bonded). Requires prior eye contact. The vampire\'s body enters a Torpor-like trance; aggravated damage to the host breaks it. A total failure makes the victim immune to further Possession attempts for the rest of the story.',
        amalgama: 'Dominate 3',
      },
      telepathy: {
        name: 'Telepathy',
        cost: 'One Rouse Check (plus 1 Willpower with unwilling vampires)',
        dicePool: 'Resolve + Auspex vs. Wits + Subterfuge',
        duration: 'Approximately one minute per Rouse Check. Extended to a full scene with willing subjects.',
        description: 'Reads minds and projects one\'s own thoughts. Can extract specific memories, communicate without words, or detect lies directly from the source.',
      },
    },
  },

  // ── CELERITY ─────────────────────────────────────────────────────────────────
  celerity: {
    name: 'Celerity',
    description: 'Celerity allows vampires to move faster than any natural creature. It does more than grant supernatural speed: vampires who employ it truly seem to think almost as fast as they act.',
    tipo: 'Physical',
    amenaza: 'Medium to high. Most Celerity powers are clearly inhuman, and the only thing saving it is that they are very hard to capture on film or photograph.',
    resonancia: 'Choleric. Absolute fear and terror, runners, athletes, users of alkaloids and amphetamines, regular players of first-person shooters and other fast-action games.',
    powers: {
      'cats-grace': {
        name: 'Cat\'s Grace',
        cost: 'None',
        dicePool: 'N/A',
        duration: 'Passive',
        description: 'Superhuman balance and elegance. Never trips or falls involuntarily; can move over unstable, narrow, or slippery surfaces without difficulty.',
      },
      'rapid-reflexes': {
        name: 'Rapid Reflexes',
        cost: 'None',
        dicePool: 'N/A',
        duration: 'Passive',
        description: 'No penalty to defense pools for lack of cover against firearm attacks. Also, may take one minor action (up to 2 dice) per turn for free — reloading, preparing a weapon, etc.',
      },
      fleetness: {
        name: 'Fleetness',
        cost: 'One Rouse Check',
        dicePool: 'N/A',
        duration: 'One scene',
        description: 'Adds the Celerity rating as extra dice to non-combat Dexterity pools. Once per turn, may defend using Dexterity + Athletics.',
      },
      blink: {
        name: 'Blink',
        cost: 'One Rouse Check',
        dicePool: 'Dexterity + Athletics or as needed',
        duration: 'One turn',
        description: 'Moves in a straight line at invisible speed, repositioning in combat or escaping before anyone can react. Witnesses only see the start and end points.',
      },
      traversal: {
        name: 'Traversal',
        cost: 'One Rouse Check',
        dicePool: 'Dexterity + Athletics',
        duration: 'One turn',
        description: 'Runs up walls, across ceilings, even over water with a running start. Difficulty between 3 (angled surface with traction) and 6 (slick vertical or water). Margin sets the distance reached; more than 60 m of water or 30 stories usually exceeds range.',
      },
      'unerring-aim': {
        name: 'Unerring Aim',
        cost: 'One Rouse Check',
        dicePool: 'N/A',
        duration: 'One attack',
        description: '(Amalgam: Auspex 2) Time slows perceptibly, allowing shots or throws of impossible precision even against moving targets.',
        amalgama: 'Auspex 2',
      },
      'draught-of-elegance': {
        name: 'Draught of Elegance',
        cost: 'One Rouse Check',
        dicePool: 'N/A',
        duration: 'One night; for vampires, until next feeding or Hunger 5',
        description: 'The Blood is saturated with Celerity. Drinking one Rouse Check\'s worth from the user grants the drinker temporary Celerity equal to half (rounded down) the donor\'s, with access to the same powers (no Amalgams) up to that level.',
      },
      'lightning-strike': {
        name: 'Lightning Strike',
        cost: 'One Rouse Check',
        dicePool: 'Normal combat pool (Dexterity + Athletics or Brawl)',
        duration: 'One attack',
        description: 'Strikes at invisible speed before the target can react; the attack is at difficulty 1. An opponent with Celerity 5 can cancel this power by spending their own Rouse Check and defending at the same speed.',
      },
      'split-second': {
        name: 'Split Second',
        cost: 'One Rouse Check',
        dicePool: 'Normal action pool according to activity',
        duration: 'Approximately one action, at Storyteller\'s discretion',
        description: 'Can act at the same instant they are attacked, interrupting the attacker\'s action before it completes. Can use this action to attack, escape, or perform any quick action.',
      },
    },
  },

  // ── DOMINATE ─────────────────────────────────────────────────────────────────
  dominate: {
    name: 'Dominate',
    description: 'Dominate is a Discipline of mental control, primarily used to bend mortals to the vampire\'s will. At higher levels it can affect even other Kindred. Dominate requires direct eye contact to function.',
    tipo: 'Mental',
    amenaza: 'Low to medium. Dominate\'s effects are subtle by design; its victims rarely know they\'ve been used.',
    resonancia: 'Melancholic. Accountants, mathematicians, writers, obsessives, introverted types.',
    powers: {
      compel: {
        name: 'Compel',
        cost: 'None',
        dicePool: 'Charisma + Dominate vs. Intelligence + Resolve',
        duration: 'No more than one scene',
        description: 'Imposes a simple, irresistible one-word command through eye contact: one phrase, one action. The victim executes it immediately even if against their interests.',
      },
      'cloud-memory': {
        name: 'Cloud Memory',
        cost: 'None',
        dicePool: 'Charisma + Dominate vs. Wits + Resolve',
        duration: 'Indefinite',
        description: 'With the word "Forget!", makes the victim forget the current moment and the last few minutes (enough to cover a shallow feeding or brief encounter). No roll needed against an unprepared mortal. If pressured, the victim notices missing minutes.',
      },
      dementation: {
        name: 'Dementation',
        cost: 'One Rouse Check per scene',
        dicePool: 'Manipulation + Dominate vs. Composure + Intelligence',
        duration: 'One scene',
        description: '(Amalgam: Obfuscation 2) Through casual conversation, one attack per turn deals superficial Willpower damage. A mortal Impaired by this suffers a breakdown or psychotic episode. A vampire hit succumbs to a Compulsion chosen by the user.',
        amalgama: 'Obfuscation 2',
      },
      mesmerize: {
        name: 'Mesmerize',
        cost: 'One Rouse Check',
        dicePool: 'Manipulation + Dominate vs. Intelligence + Resolve',
        duration: 'Until the order is executed or the scene ends, whichever comes first',
        description: 'Hypnotizes the victim by implanting complex commands they will execute as if their own. Requires prolonged eye contact and relative silence.',
      },
      'submerged-directive': {
        name: 'Submerged Directive',
        cost: 'No additional cost',
        dicePool: 'As Mesmerize',
        duration: 'Passive (never expires)',
        description: 'Extends Mesmerize to implant orders with conditional triggers: the command lies dormant until a specific event set by the vampire occurs.',
      },
      'forgetful-mind': {
        name: 'Forgetful Mind',
        cost: 'One Rouse Check',
        dicePool: 'Manipulation + Dominate vs. Intelligence + Resolve',
        duration: 'Indefinite',
        description: 'Rewrites or erases entire fragments of memory. Each point of margin adds or removes one memory. The victim recalls them as vague and blurry, apt to collapse under interrogation. A critical win crafts perfect, indistinguishable memories.',
      },
      rationalize: {
        name: 'Rationalize',
        cost: 'No additional cost',
        dicePool: 'N/A',
        duration: 'Indefinite',
        description: 'Victims defend as their own any action taken under Dominate. If pressed, they may roll Wits + Awareness diff. 5 to question their own statement (and possibly their sanity). Prolonged exposure can cause severe mental trauma.',
      },
      'terminal-decree': {
        name: 'Terminal Decree',
        cost: 'No additional cost for Hunger, but the Humanity cost can be severe',
        dicePool: 'As the Dominate power used',
        duration: 'Passive',
        description: 'Removes the automatic failure on orders that cause death or serious harm; they can now be resisted with a normal roll (per the amplified power). Can make mortals commit suicide or vampires walk into fire. Severe Humanity cost.',
      },
      'mass-manipulation': {
        name: 'Mass Manipulation',
        cost: 'One Rouse Check plus the cost of the amplified power',
        dicePool: 'As the amplified power, against the strongest opponent in the group',
        duration: 'As the amplified power',
        description: 'Amplifies any other Dominate power to affect groups of mortals or vampires. All victims must see the user\'s eyes. The roll is made against the strongest opponent in the group.',
      },
    },
  },

  // ── FORTITUDE ────────────────────────────────────────────────────────────────
  fortitude: {
    name: 'Fortitude',
    description: 'Fortitude is the Discipline of physical and mental resilience. It allows vampires to shrug off blows that would destroy others and resist mental assault.',
    tipo: 'Physical',
    amenaza: 'Low to medium. Fortitude\'s passive effects are invisible and the active ones easy to rationalize as adrenaline or toughness.',
    resonancia: 'Phlegmatic. Stubborn or stoic individuals, soldiers, abuse survivors, the deeply principled.',
    powers: {
      'unswayable-mind': {
        name: 'Unswayable Mind',
        cost: 'None',
        dicePool: 'N/A',
        duration: 'Passive',
        description: 'Mystical resistance to mundane mental manipulation: coercion, drugs, torture, interrogation. Adds Fortitude to all resistance rolls against such effects.',
      },
      resilience: {
        name: 'Resilience',
        cost: 'None',
        dicePool: 'N/A',
        duration: 'Passive',
        description: 'Adds the Fortitude rating directly as extra Health boxes. Passive and permanent; immediately increases the vampire\'s total resilience.',
      },
      'enduring-beasts': {
        name: 'Enduring Beasts',
        cost: 'None (for famulus); one Rouse Check (for other animals)',
        dicePool: 'Stamina + Animalism (for animals other than famulus)',
        duration: 'One scene',
        description: '(Amalgam: Animalism 1) Shares part of the vampire\'s supernatural toughness with the animals under their control, increasing their resistance to damage.',
        amalgama: 'Animalism 1',
      },
      toughness: {
        name: 'Toughness',
        cost: 'One Rouse Check',
        dicePool: 'N/A',
        duration: 'One scene',
        description: 'Converts an amount of aggravated damage equal to the Fortitude score into superficial when suffering it. That superficial cannot be healed during the scene. Converts per scene (not per wound). Can be triggered reflexively when hit with aggravated via Wits + Survival diff. 3.',
      },
      'defy-bane': {
        name: 'Defy Bane',
        cost: 'One Rouse Check',
        dicePool: 'Wits + Survival (to activate reflexively)',
        duration: 'One scene or until it expires, whichever comes first',
        description: 'Temporary resistance to fire, sunlight and other wounds that threaten Final Death. Can be activated reflexively when hit with aggravated via Wits + Survival diff. 3.',
      },
      'fortify-the-inner-facade': {
        name: 'Fortify the Inner Façade',
        cost: 'None',
        dicePool: 'N/A',
        duration: 'One scene',
        description: 'Protects the mind against Dominate, Auspex, and other mental powers. Adds Fortitude to resistance rolls against powers that affect the mind.',
      },
      'draught-of-endurance': {
        name: 'Draught of Endurance',
        cost: 'One Rouse Check',
        dicePool: 'N/A',
        duration: 'One night; for vampires, until next feeding or Hunger 5',
        description: 'The Blood is saturated with Fortitude. Drinking one Rouse Check\'s worth from the user grants the drinker temporary Fortitude equal to half (rounded down) the donor\'s, with access to the same powers (no Amalgams) up to that level.',
      },
      'prowess-from-pain': {
        name: 'Prowess from Pain',
        cost: 'One Rouse Check',
        dicePool: 'N/A',
        duration: 'One scene',
        description: 'The vampire no longer suffers penalties from Health damage during the turn, including fire (but not sunlight). A critical win on an attack roll bypasses this power.',
      },
      'flesh-of-marble': {
        name: 'Flesh of Marble',
        cost: 'Two Rouse Checks',
        dicePool: 'N/A',
        duration: 'One scene',
        description: 'The vampire ignores the first source of physical damage each turn, including fire (but not sunlight). If there\'s confusion over which is "first", the vampire ignores whichever source deals the most damage that turn. A critical hit on an attack bypasses this power.',
      },
    },
  },

  // ── OBFUSCATION ──────────────────────────────────────────────────────────────
  obfuscation: {
    name: 'Obfuscation',
    description: 'Obfuscation is the Discipline of concealment and misdirection, allowing vampires to hide themselves, others, or objects from perception.',
    tipo: 'Mental',
    amenaza: 'Low to medium. When used subtly, Obfuscation is essentially undetectable by mundane means.',
    resonancia: 'Phlegmatic. Shy, introverted, or easily overlooked people; spies, private investigators, and the deeply secretive.',
    powers: {
      'cloak-of-shadows': {
        name: 'Cloak of Shadows',
        cost: 'None',
        dicePool: 'N/A',
        duration: 'One scene',
        description: 'When still and with some cover, the vampire blends into the environment. Practically invisible to anyone who does not know exactly where to look.',
      },
      'silence-of-death': {
        name: 'Silence of Death',
        cost: 'None',
        dicePool: 'N/A',
        duration: 'One scene',
        description: 'Silences footsteps, clothing, minor collisions and other personal sounds. Only Sense the Unseen (Auspex 1) can detect the user. Does not cancel sounds the user makes outside their personal space (throwing objects, slamming doors).',
      },
      'unseen-passage': {
        name: 'Unseen Passage',
        cost: 'One Rouse Check',
        dicePool: 'Wits + Stealth (to remain hidden while moving)',
        duration: 'One scene or until detected',
        description: 'Moves while staying hidden. Works automatically as long as the user emits no overwhelming smells and no sounds louder than a whisper. Only if the user draws attention may an observer roll to detect. Cannot be used to vanish while being observed (auto-fails).',
      },
      'ghost-in-the-machine': {
        name: 'Ghost in the Machine',
        cost: 'No additional cost',
        dicePool: 'N/A',
        duration: 'As the power used',
        description: 'On live feeds, viewers are treated as facing the vampire directly. On recordings and photos, +3 difficulty to identify (image appears blurred). +3 dice to pools for evading electronic surveillance and automated countermeasures.',
      },
      'mask-of-a-thousand-faces': {
        name: 'Mask of a Thousand Faces',
        cost: 'One Rouse Check',
        dicePool: 'Manipulation + Subterfuge (to pass unnoticed actively)',
        duration: 'One scene',
        description: 'No roll. Adopts the appearance of a forgettable stranger of the same sex and similar build; clothing adapts to fit the setting (a night watchman in an office, an assembler in a factory). Provides no ID and won\'t pass an identity check. Sense the Unseen still detects.',
      },
      vanish: {
        name: 'Vanish',
        cost: 'As the enhanced power',
        dicePool: 'Wits + Obfuscation vs. Wits + Awareness',
        duration: 'As the enhanced power',
        description: '(Prerequisite: Cloak of Shadows) Vanishes even under direct observation. On a win, the observer wonders whether the vampire was ever there. On a critical win, the vampire is fully erased from their memory. Does not affect vampire memories. Once per scene.',
      },
      conceal: {
        name: 'Conceal',
        cost: 'One Rouse Check',
        dicePool: 'Intelligence + Obfuscation',
        duration: 'One night, with one additional night per point of margin on the win',
        description: '(Amalgam: Auspex 3) Hides an inanimate object by touch. Difficulty between 2 (a ring in a drawer of keepsakes) and 6 (a house in an open plaza). Max size: a two-story house. Also hides its contents if the observer doesn\'t enter. One night +1 per margin point.',
        amalgama: 'Auspex 3',
      },
      'impostors-guise': {
        name: 'Impostor\'s Guise',
        cost: 'One Rouse Check',
        dicePool: 'Wits + Obfuscation, Manipulation + Performance',
        duration: 'One scene',
        description: '(Prerequisite: Mask of a Thousand Faces) Adopts the exact appearance of a specific known person, including voice and mannerisms.',
      },
      'cloak-the-gathering': {
        name: 'Cloak the Gathering',
        cost: 'One Rouse Check plus the cost of the extended power',
        dicePool: 'N/A',
        duration: 'As the extended power',
        description: 'Extends any Obfuscation power to a nearby group without a roll. Members can still see each other. If someone other than the user is exposed, the rest stay hidden. If the user is exposed, everyone is exposed.',
      },
    },
  },

  // ── POTENCE ──────────────────────────────────────────────────────────────────
  potence: {
    name: 'Potence',
    description: 'Potence is the Discipline of physical power, granting supernatural strength that allows vampires to perform feats no mortal could match.',
    tipo: 'Physical',
    amenaza: 'High. Potence\'s effects are often obvious and difficult to explain away.',
    resonancia: 'Choleric. Angry, violent, or passionate individuals; athletes, soldiers, abusers.',
    powers: {
      'lethal-body': {
        name: 'Lethal Body',
        cost: 'None',
        dicePool: 'N/A',
        duration: 'Passive',
        description: 'Unarmed attacks may cause aggravated Health damage to mortals, at the user\'s choice. They ignore one level of armor per Potence dot.',
      },
      'soaring-leap': {
        name: 'Soaring Leap',
        cost: 'None',
        dicePool: 'N/A',
        duration: 'Passive',
        description: 'Leaps up 3× Potence dots in meters vertically, and 5× Potence dots horizontally. No running start needed.',
      },
      prowess: {
        name: 'Prowess',
        cost: 'One Rouse Check',
        dicePool: 'N/A',
        duration: 'One scene',
        description: 'Adds the Potence rating to unarmed damage and Strength feats. Adds half of Potence (rounded up) to Melee damage.',
      },
      'uncanny-grip': {
        name: 'Uncanny Grip',
        cost: 'One Rouse Check',
        dicePool: 'N/A',
        duration: 'One scene',
        description: 'Automatic success on any climbing roll on non-metallic surfaces. Leaves visible marks or deformations (Intelligence + Investigation diff. 2 to spot). Can hang from a wall or ceiling for a scene. Thin glass surfaces may shatter from the pressure.',
      },
      'brutal-feed': {
        name: 'Brutal Feed',
        cost: 'None',
        dicePool: 'N/A',
        duration: 'One feeding',
        description: 'Fully drains a human in seconds (usually one turn). Each Hunger point sated deals one aggravated Health damage to the victim. On vampires only superficial. In combat, used after a successful Brawl attack with fangs. Armor doesn\'t protect.',
      },
      'spark-of-rage': {
        name: 'Spark of Rage',
        cost: 'One Rouse Check',
        dicePool: 'Manipulation + Potence',
        duration: 'One scene',
        description: '(Amalgam: Presence 3) Transmits supernatural rage to nearby creatures, potentially triggering Frenzies in other vampires or brutality in mortals.',
        amalgama: 'Presence 3',
      },
      'draught-of-might': {
        name: 'Draught of Might',
        cost: 'One Rouse Check',
        dicePool: 'N/A',
        duration: 'One night; for vampires, until next feeding or Hunger 5',
        description: 'The Blood is saturated with Potence. Drinking one Rouse Check\'s worth from the user grants the drinker temporary Potence equal to half (rounded down) the donor\'s, with access to the same powers (no Amalgams) up to that level.',
      },
      'fist-of-caine': {
        name: 'Fist of Caine',
        cost: 'One Rouse Check',
        dicePool: 'N/A',
        duration: 'One scene',
        description: 'For a scene, Brawl attacks deal aggravated Health damage to both mortals and supernaturals. Literally tears flesh and rips limbs off with bare hands.',
      },
      'earthshock': {
        name: 'Earthshock',
        cost: 'Two Rouse Checks',
        dicePool: 'Strength + Athletics vs. Dexterity + Athletics of each target',
        duration: 'One use',
        description: 'Strikes the ground generating a shockwave that knocks down and stuns all opponents within a nearby radius. Those affected fall to the ground and lose their next action.',
      },
    },
  },

  // ── PRESENCE ─────────────────────────────────────────────────────────────────
  presence: {
    name: 'Presence',
    description: 'Presence is a Discipline that expresses the vampire\'s bipolar existence. It serves to attract victims or scatter them in terror. It allows crowd control, emotional manipulation, and forced devotion. Presence affects the emotions of those subjected to it, not their minds.',
    tipo: 'Mental',
    amenaza: 'Low to medium. Being a subtle power, people rarely realize they have been affected by Presence.',
    resonancia: 'Sanguine. The beautiful and lustful, those completely infatuated with the vampire, models, actors and movie stars, convincing public speakers, YouTube stars and Instagram influencers.',
    powers: {
      daunt: {
        name: 'Daunt',
        cost: 'None',
        dicePool: 'Charisma + Presence vs. Composure + Resolve',
        duration: 'One scene or until ended intentionally',
        description: 'Adds the Presence rating to any Intimidation roll. Attacking the user requires a Resolve + Composure diff. 2 roll. Awe and Daunt cannot be used at the same time.',
      },
      awe: {
        name: 'Awe',
        cost: 'None',
        dicePool: 'Manipulation + Presence vs. Composure + Intelligence',
        duration: 'One scene or until ended intentionally',
        description: 'Adds Presence to Persuasion, Performance and other Charisma rolls. Anyone who realizes may resist with a Composure + Intelligence contest. A win = immune for a scene; a critical = immune for the whole night. Presence effects don\'t stack.',
      },
      'lingering-kiss': {
        name: 'Lingering Kiss',
        cost: 'None',
        dicePool: 'N/A',
        duration: 'Until successfully resisted',
        description: 'Fed mortals become addicted to the Kiss. Adds the Presence rating as extra dice to any subsequent Charisma roll against the bitten victim. Can cause anemia, self-harm or death from addiction. A Willpower roll at diff. = Presence weekly to resist (3 consecutive weeks breaks it).',
      },
      entrancement: {
        name: 'Entrancement',
        cost: 'One Rouse Check',
        dicePool: 'Charisma + Presence vs. Composure + Wits',
        duration: 'One hour plus one more per point of margin',
        description: 'Focuses the charm on one person (like infatuation). The user adds Presence to any Social pool against the entranced subject. Requests that harm the subject or their loved ones require another contest; a failure ends the effect and makes the subject immune for the rest of the night.',
      },
      'dread-gaze': {
        name: 'Dread Gaze',
        cost: 'One Rouse Check',
        dicePool: 'Charisma + Presence vs. Composure + Resolve',
        duration: 'One turn',
        description: 'Fail: mortals only self-defense for a turn; vampires unaffected. Win: mortals flee; vampires only self-defense (or spend Willpower = margin). Critical win: mortals freeze or curl fetal; vampires make a fear Frenzy check diff. 3.',
      },
      summon: {
        name: 'Summon',
        cost: 'One Rouse Check',
        dicePool: 'Manipulation + Presence vs. Composure + Intelligence',
        duration: 'One night',
        description: 'Summons someone on whom Awe, Entrancement or Majesty has been used, or who has tasted the user\'s Blood. The target knows who is calling and where they are. Win = may answer or not; critical = comes as fast as possible barring immediate risk. Will not place themselves in physical or financial danger.',
      },
      'irresistible-voice': {
        name: 'Irresistible Voice',
        cost: 'No additional cost',
        dicePool: 'N/A',
        duration: 'Passive',
        description: '(Amalgam: Dominate 1) Hearing the user\'s voice is enough to apply Dominate powers. Does not work through electronic media (phones, TVs, intercoms).',
        amalgama: 'Dominate 1',
      },
      'star-magnetism': {
        name: 'Star Magnetism',
        cost: 'One additional Rouse Check',
        dicePool: 'N/A',
        duration: 'As the power used',
        description: 'Awe, Daunt and Entrancement can be transmitted via live broadcasts (not recordings). If using Entrancement, the victim\'s name must be spoken clearly (affects one person). Everyone else viewing the broadcast finds the user charming, but not supernaturally so.',
      },
      majesty: {
        name: 'Majesty',
        cost: 'Two Rouse Checks',
        dicePool: 'Charisma + Presence vs. Composure + Resolve',
        duration: 'One scene',
        description: 'Onlookers can only stare open-mouthed or look away in fear/submission. Acting against the user (other than for survival) requires a Composure + Resolve contest against Charisma + Presence. Win = one free turn per margin point; only a critical win resists the whole scene.',
      },
    },
  },

  // ── PROTEAN ──────────────────────────────────────────────────────────────────
  protean: {
    name: 'Protean',
    description: 'Protean is the Discipline of shapeshifting and physical transformation. It allows vampires to take on animal forms, meld with the earth, and transform their bodies in various ways.',
    tipo: 'Physical',
    amenaza: 'High. Physical transformation is difficult to explain away under any circumstances.',
    resonancia: 'Varies. Gangrel and other feral types; those deeply connected to nature.',
    powers: {
      'eyes-of-the-beast': {
        name: 'Eyes of the Beast',
        cost: 'None',
        dicePool: 'N/A',
        duration: 'As long as desired',
        description: 'Eyes glow red. Ignores any vision penalty from darkness, even supernatural. The inhuman appearance grants +2 dice to Intimidation pools against mortals.',
      },
      'weight-of-the-feather': {
        name: 'Weight of the Feather',
        cost: 'None',
        dicePool: 'Wits + Survival',
        duration: 'As long as desired',
        description: 'Reduces effective mass. Immune to damage from falls, collisions and being thrown; does not trigger pressure sensors. Strength is reduced proportionally (no use for longer jumps). Reactive use (sudden fall) requires a difficulty 3 roll.',
      },
      'feral-weapons': {
        name: 'Feral Weapons',
        cost: 'One Rouse Check',
        dicePool: 'N/A',
        duration: 'One scene',
        description: 'Extends natural weapons (nails to claws, fangs to daggers). +2 to Brawl damage; aggravated against mortals, superficial —not halved— against vampires.',
      },
      shapechange: {
        name: 'Shapechange',
        cost: 'One Rouse Check',
        dicePool: 'N/A',
        duration: 'One scene, unless one wishes to end it sooner',
        description: 'Transforms into an animal of similar mass (typically wolf, large cat or giant snake) tied to the Clan. Transformation takes one turn, during which no other action is possible. Gains the animal\'s Physical Attributes, senses and Skills, and its natural limits.',
      },
      'earth-meld': {
        name: 'Earth Meld',
        cost: 'One Rouse Check',
        dicePool: 'N/A',
        duration: 'One day or more, or until disturbed',
        description: 'Sinks into a natural surface (rock, bare earth, grass) — does not work on concrete or asphalt. Takes one turn; carried objects are left on the surface. Aware of surroundings except during daytime sleep. Rises the following night unless in Torpor.',
      },
      metamorphosis: {
        name: 'Metamorphosis',
        cost: 'One Rouse Check',
        dicePool: 'N/A',
        duration: 'One scene, unless one wishes to end it sooner',
        description: '(Prerequisite: Shapechange) Grants an additional animal form (bat, rat, unusually large insects or snakes) and allows changing size.',
      },
      'the-unfettered-heart': {
        name: 'The Unfettered Heart',
        cost: 'None',
        dicePool: 'N/A',
        duration: 'Passive',
        description: 'The heart moves freely inside the chest. +3 difficulty to stake outside combat; in melee, the stake only pierces on a critical victory. If staked, the vampire can roll Strength + Resolve, difficulty 5, once per hour to expel it (not possible at Hunger 5).',
      },
      'mist-form': {
        name: 'Mist Form',
        cost: 'One to three Rouse Checks',
        dicePool: 'N/A',
        duration: 'One scene, unless one wishes to end it sooner',
        description: 'Becomes intangible mist: seeps through pipes, cracks and crevices. Transformation takes 3 turns (accelerable with extra Rouse Checks, one per turn). Moves at walking speed; cannot speak, attack or use most Disciplines. Only vulnerable to sunlight, fire and immaterial supernatural attacks.',
      },
    },
  },

  // ── BLOOD SORCERY ────────────────────────────────────────────────────────────
  'blood-sorcery': {
    name: 'Blood Sorcery',
    description: 'Blood Sorcery is a Discipline of mystical blood manipulation. Tremere and Banu Haqim practitioners can sense, alter, and weaponize Vitae in ways that defy natural explanation.',
    tipo: 'Sorcery',
    amenaza: 'High. The effects of Blood Sorcery are visible, unnatural, and undeniably supernatural.',
    resonancia: 'Varies. Occultists, scholars, and those with strong spiritual connections.',
    powers: {
      'a-taste-for-blood': {
        name: 'A Taste for Blood',
        cost: 'None',
        dicePool: 'Resolve + Blood Sorcery',
        duration: 'N/A',
        description: 'On tasting a drop, identifies the Resonance and intensity (if human), whether it belongs to a mortal, Ghoul, vampire or other supernatural, and relative Blood Potency (so the likely Generation margin). A critical also reveals whether they\'ve committed Diablerie, and the exact Generation (±1).',
      },
      'corrosive-vitae': {
        name: 'Corrosive Vitae',
        cost: 'One or more Rouse Checks',
        dicePool: 'Resolve + Blood Sorcery (to control corrosion precisely)',
        duration: 'N/A',
        description: 'Alters their Blood making it corrosive on contact with dead materials: dissolves cloth, wood, metal, locks, or shackles. The Hunger spent determines the acid\'s potency.',
      },
      'extinguish-vitae': {
        name: 'Extinguish Vitae',
        cost: 'One Rouse Check',
        dicePool: 'Intelligence + Blood Sorcery vs. Stamina + Composure',
        duration: 'N/A',
        description: 'Contest against a vampire in line of sight while concentrating for a turn. Win = +1 Hunger to the target; critical = +2. If the victim sees the user, they can identify them with Intelligence + Occult vs. Wits + Subterfuge.',
      },
      'blood-of-potency': {
        name: 'Blood of Potency',
        cost: 'One Rouse Check',
        dicePool: 'Resolve + Blood Sorcery',
        duration: 'One scene or one night',
        description: 'Resolve + Blood Sorcery roll at diff. 2 + current Blood Potency. Win = +1 Blood Potency that scene; critical = +2. Allows exceeding the per-Generation Blood Potency cap while it lasts.',
      },
      'scorpions-touch': {
        name: 'Scorpion\'s Touch',
        cost: 'One or more Rouse Checks',
        dicePool: 'Strength + Blood Sorcery vs. Stamina + Occult or Fortitude',
        duration: 'The poison retains its potency for one scene',
        description: 'Each Rouse Check coats a melee weapon or fuels a spit attack. On a hit, contest Strength + Blood Sorcery vs. Stamina + Occult (or Fortitude). Damage = margin: aggravated to mortals, superficial (not halved) to vampires. A mortal taking even 1 point drops unconscious.',
      },
      'theft-of-vitae': {
        name: 'Theft of Vitae',
        cost: 'One Rouse Check',
        dicePool: 'Wits + Blood Sorcery vs. Wits + Occult',
        duration: 'One feeding',
        description: 'Opens a wound in a mortal at range; the blood streams into the user\'s mouth. Feeds at double normal speed (triple on a critical). Cannot do anything else while active. Armor does not protect (the victim bleeds out inside the suit). The wound closes when the effect ends.',
      },
      'cauldron-of-blood': {
        name: 'Cauldron of Blood',
        cost: 'One Rouse Check and gaining one (or more) Stains',
        dicePool: 'Resolve + Blood Sorcery vs. Composure + Occult or Fortitude',
        duration: 'One turn',
        description: 'Requires touching the victim. Contest Resolve + Blood Sorcery vs. Composure + Occult (or Fortitude). Each margin point deals 1 aggravated damage. A mortal taking at least 1 point dies screaming. A vampire adds 1 Hunger per damage point until Hunger reaches 5.',
      },
      'baals-caress': {
        name: 'Baal\'s Caress',
        cost: 'One or more Rouse Checks',
        dicePool: 'Strength + Blood Sorcery vs. Stamina + Occult or Fortitude',
        duration: 'The poison retains its potency for one scene',
        description: 'Like Scorpion\'s Touch but lethal: on a hit, each margin point deals aggravated to mortals and vampires alike. A mortal taking even 1 point dies instantly. If a vampire suffers aggravated, roll again — a win means they enter Torpor when they next sleep.',
      },
    },
  },

  // ── THIN-BLOOD ALCHEMY ───────────────────────────────────────────────────────
  'thin-blood-alchemy': {
    name: 'Thin-Blood Alchemy',
    description: 'The Thin Blood of the last Generations has almost no power of its own, but certain Thin-Bloods have learned to use it as a catalyst. By mixing strongly resonant human blood and sometimes other substances with their own Vitae, alchemists can simulate a wide range of powers from other Disciplines and create some unique powers of their own.',
    tipo: 'Special (Thin-Blood only)',
    amenaza: 'Varies according to the powers it mimics and the method used.',
    resonancia: 'The Resonance required for each formula, so it varies accordingly.',
    clanes: ['Thin-Blood'],
    powers: {
      'far-reach': {
        name: 'Far Reach',
        cost: 'One Rouse Check',
        dicePool: 'Resolve + Alchemy vs. Strength + Athletics',
        duration: 'One turn, unless sustained',
        description: 'Lift, push or pull an object or person under 100 kg within 10 m of sight. Fragile objects may break. Knives handled with Resolve + Alchemy (−2 dice), +1 damage. Against a resisting target, contest; on a win, throw them 1 m per margin, dealing superficial. Sustaining a hover requires diff. 3 each turn.',
      },
      'profane-hieros-gamos': {
        name: 'Profane Hieros Gamos',
        cost: 'One Rouse Check (distillation)',
        dicePool: 'Stamina/Manipulation/Intelligence + Alchemy (by method)',
        duration: 'Permanent until performed again',
        description: 'Allows changing biological sex, taking advantage of the fluid nature of the Thin-Blood condition. The process takes hours and requires distillation.',
      },
      haze: {
        name: 'Haze',
        cost: 'One Rouse Check',
        dicePool: 'N/A',
        duration: 'One scene or until voluntarily ended',
        description: 'Vapor cloud around the alchemist that conceals features and darkens their silhouette. Anyone trying to identify them or hit them with ranged weapons suffers −2 dice. Can be extended to a group of up to 5 people by spending another Rouse Check.',
      },
      envelop: {
        name: 'Envelop',
        cost: 'One Rouse Check',
        dicePool: 'Wits + Alchemy vs. Stamina + Survival',
        duration: 'Until the scene ends or the alchemist ends the effect voluntarily',
        description: 'Mist swirls around a chosen target in sight: −3 dice to visual detection and ranged attacks. Against a mortal, additionally contest Wits + Alchemy vs. Stamina + Survival: win = target can only cough, no acting; critical = target passes out. Only one target at a time.',
      },
      defractionate: {
        name: 'Defractionate',
        cost: 'One Rouse Check (distillation)',
        dicePool: 'Stamina/Manipulation/Intelligence + Alchemy (by method)',
        duration: 'N/A',
        description: 'Elixir that renews fractionated medical blood so vampires can feed on it without the Iron Gullet Merit. Each success on the distillation roll converts one bag (sates 1 Hunger).',
      },
      'aerial-impulse': {
        name: 'Aerial Impulse',
        cost: 'One Rouse Check',
        dicePool: 'Strength + Alchemy vs. Strength + Athletics (if resisted)',
        duration: 'One scene',
        description: 'Fly or move at running speed in any direction. Carrying a human-sized subject reduces speed to walking pace. Grabbing and carrying an unwilling subject or knocking down a flying user requires a Strength + Alchemy vs. Strength + Athletics contest.',
      },
      'awaken-the-sleeper': {
        name: 'Awaken the Sleeper',
        cost: 'One Rouse Check (distillation)',
        dicePool: 'Stamina/Manipulation/Intelligence + Alchemy (by method)',
        duration: 'N/A',
        description: 'Elixir mixed with human blood that wakes a vampire from Torpor. Each success above 2 on the distillation lets it wake a vampire of Blood Potency = (successes − 2) or lower.',
      },
    },
  },
}
