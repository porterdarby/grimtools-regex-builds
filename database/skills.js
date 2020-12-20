const all_skills = [
    {
        "class_name": "Soldier",
        "class_skills": [
            {"name": "Blade Arc", "skills": [{"name": "Laceration"}], "default": false},
            {"name": "Blitz", "skills": [{"name": "Blindside"}], "default": false},
            {"name": "Cadence", "skills": [{"name": "Fighting Form"}, {"name": "Deadly Momentum"}], "default": false},
            {"name": "Forcewave", "skills": [{"name": "Rending Force"}, {"name": "Internal Trauma"}], "default": false},
            {"name": "Overguard", "skills": [], "default": false},
            {"name": "War Cry", "skills": [{"name": "Break Morale"}], "default": false},
            {"name": "Decorated Soldier", "skills": [], "default": false},
            {"name": "Fighting Spirit", "skills": [], "default": true},
            {"name": "Markovian's Advantage", "skills": [], "default": false},
            {"name": "Menhir's Will", "skills": [], "default": false},
            {"name": "Military Conditioning", "skills": [], "default": true},
            {"name": "Scars of Battle", "skills": [], "default": true},
            {"name": "Shield Training", "skills": [], "default": false},
            {"name": "Veterancy", "skills": [], "default": true},
            {"name": "Zolhan's Technique", "skills": [], "default": false},
            {"name": "Counter Strike", "skills": [], "default": false},
            {"name": "Menhir's Bulwark", "skills": [], "default": false},
            {"name": "Oleron's Rage", "skills": [], "default": false},
            {"name": "Field Command", "skills": [{"name": "Squad Tactics"}], "default": true}
        ]
    },
    {
        "class_name": "Demolitionist",
        "class_skills": [
            {"name": "Blackwater Cocktail", "skills": [{"name": "High Potency"}, {"name": "Demon Fire"}, {"name": "Agonizing Flames"}], "default": false},
            {"name": "Canister Bomb", "skills": [{"name": "Concussive Bomb"}, {"name": "Improved Casing"}], "default": false},
            {"name": "Fire Strike", "skills": [{"name": "Explosive Strike"}, {"name": "Static Strike"}, {"name": "Brimstone"}], "default": false},
            {"name": "Flashbang", "skills": [{"name": "Searing Light"}], "default": false},
            {"name": "Grenado", "skills": [{"name": "High Impact"}, {"name": "Shattering Blast"}], "default": false},
            {"name": "Mortar Trap", "skills": [{"name": "Heavy Ordnance"}, {"name": "\"The Big One\""}], "default": false},
            {"name": "Stun Jacks", "skills": [{"name": "Quick Jacks"}, {"name": "Full Spread"}], "default": false},
            {"name": "Thermite Mine", "skills": [{"name": "Hellfire Mine"}], "default": false},
            {"name": "Blast Shield", "skills": [], "default": true},
            {"name": "Ulzuin's Chosen", "skills": [], "default": false},
            {"name": "Flamed Touched", "skills": [{"name": "Temper"}], "default": true},
            {"name": "Vindicative Flame", "skills": [{"name": "Ulzuin's Wrath"}], "default": true}
        ]
    }, {
        "class_name": "Occultist",
        "class_skills": [
            {"name": "Blood of Dreeg", "skills": [{"name": "Aspect of the Guardian"}], "default": true},
            {"name": "Blood Pox", "skills": [{"name": "Fevered Rage"}, {"name": "Wasting"}, {"name": "Black Death"}], "default": false},
            {"name": "Curse of Frailty", "skills": [{"name": "Vulnerability"}], "default": true},
            {"name": "Doom Bolt", "skills": [], "default": false},
            {"name": "Dreeg's Evil Eye", "skills": [{"name": "Blood Burst"}, {"name": "Focused Gaze"}, {"name": "Terrifying Gaze"}, {"name": "Vile Eruption"}], "default": false},
            {"name": "Sigil of Consumption", "skills": [{"name": "Destruction"}], "default": false},
            {"name": "Bonds of Bysmiel", "skills": [{"name": "Manipulation"}], "default": false},
            {"name": "Possession", "skills": [], "default": false},
            {"name": "Solael's Witchfire", "skills": [{"name": "Consecrated Blade"}, {"name": "Second Rite"}], "default": false},
            {"name": "Summon Familiar", "skills": [{"name": "Mend Flesh"}, {"name": "Storm Spirit"}, {"name": "Lightning Strike"}], "default": false},
            {"name": "Summon Hellhound", "skills": [{"name": "Ember Claw"}, {"name": "Hellfire"}, {"name": "Infernal Breath"}], "default": false}
        ]
    }, {
        "class_name": "Nightblade",
        "class_skills": [
            {"name": "Amarasta's Blade Burst", "skills": [{"name": "Lethal Assault"}], "default": false},
            {"name": "Blade Barrier, Blade Trap", "skills": [{"name": "Devouring Blades"}], "default": false},
            {"name": "Phantasmal Blades", "skills": [{"name": "Frenetic Throw"}, {"name": "Heart Seeker"}, {"name": "Nether Edge"}], "default": false},
            {"name": "Pneumatic Burst", "skills": [{"name": "Shadow Dance"}, {"name": "Elemental Awakening"}], "default": true},
            {"name": "Ring of Steel", "skills": [{"name": "Ring of Frost"}, {"name": "Circle of Slaughter"}], "default": false},
            {"name": "Shadow Strike", "skills": [{"name": "Nidalla's Justifiable Ends"}, {"name": "Nightfall"}], "default": false},
            {"name": "Anatomy of Murder", "skills": [], "default": false},
            {"name": "Dual Blades", "skills": [{"name": "Belgothian's Shears"}, {"name": "Hidden Hands"}, {"name": "Amarasta's Quick Cut"}, {"name": "Whirling Death"}, {"name": "Execution"}], "default": false},
            {"name": "Merciless Repertoire", "skills": [], "default": false},
            {"name": "Phantasmal Armor", "skills": [], "default": true},
            {"name": "Veil of Shadow", "skills": [{"name": "Night's Chill"}], "default": true},
            {"name": "Blade Spirit", "skills": [], "default": false}
        ]
    }, {
        "class_name": "Aranist",
        "class_skills": [
            {"name": "Albrecht's Aether Ray", "skills": [{"name": "Disintegration"}], "default": false},
            {"name": "Callidor's Tempest", "skills": [{"name": "Inferno"}], "default": false},
            {"name": "Devastation", "skills": [], "default": false},
            {"name": "Maiven's Sphere of Protection", "skills": [{"name": "Conversion"}], "default": true},
            {"name": "Mirror of Ereoctes", "skills": [], "default": true},
            {"name": "Nullification", "skills": [], "default": true},
            {"name": "Olexra's Flash Freeze", "skills": [{"name": "Absolute Zero"}], "default": false},
            {"name": "Panetti's Replicating Missile", "skills": [{"name": "Distortion"}, {"name": "Supercharged"}, {"name": "Proliferation"}], "default": false},
            {"name": "Trozan's Sky Shard", "skills": [{"name": "Frozen Core"}, {"name": "Shattered Star"}], "default": false},
            {"name": "Arcane Will", "skills": [], "default": true},
            {"name": "Fabric of Reality", "skills": [], "default": false},
            {"name": "Inner Focus", "skills": [], "default": true},
            {"name": "Mental Alacrity", "skills": [], "default": false},
            {"name": "Iskandra's Elemental Exchange", "skills": [{"name": "Overload"}, {"name": "Elemental Balance"}], "default": true},
            {"name": "Reckless Power", "skills": [], "default": false},
            {"name": "Star Pact", "skills": [], "default": false}
        ]
    }, {
        "class_name": "Shaman",
        "class_skills": [
            {"name": "Brute Force", "skills": [{"name": "Feral Hunger"}, {"name": "Upheaval"}], "default": false},
            {"name": "Devouring Swarm", "skills": [], "default": false},
            {"name": "Grasping Vines", "skills": [{"name": "Entangling Vines"}], "default": false},
            {"name": "Primal Strike", "skills": [{"name": "Thunderous Strike"}, {"name": "Torrent"}, {"name": "Storm Surge"}], "default": false},
            {"name": "Savagery", "skills": [{"name": "Tenacity of the Boar"}, {"name": "Storm Touched"}], "default": false},
            {"name": "Mogdrogen's Pact", "skills": [{"name": "Heart of the Wild"}, {"name": "Oak Skin"}], "default": true},
            {"name": "Primal Bond", "skills": [], "default": false},
            {"name": "Stormcaller's Pact", "skills": [], "default": false},
            {"name": "Conjure Primal Spirit", "skills": [], "default": false},
            {"name": "Storm Totem", "skills": [], "default": false},
            {"name": "Summon Briarthorn", "skills": [{"name": "Ground Slam"}, {"name": "Emboldening Presence"}], "default": false},
            {"name": "Wendigo Totem", "skills": [{"name": "Blood Pact"}], "default": false},
            {"name": "Wind Devil", "skills": [{"name": "Raging Tempest"}, {"name": "Maelstrom"}], "default": false}
        ]
    }, {
        "class_name": "Inquisitor",
        "class_skills": [
            {"name": "Flames of Ignaffar", "skills": [{"name": "Intensify"}, {"name": "Infernal Purge"}, {"name": "Endless Flame"}], "default": false},
            {"name": "Horn of Gandarr", "skills": [], "default": false},
            {"name": "Inquisitor Seal", "skills": [{"name": "Arcane Empowerment"}], "default": true},
            {"name": "Rune of Hagarrad", "skills": [{"name": "Biting Cold"}, {"name": "Chillsurge"}], "default": false},
            {"name": "Rune of Kalastor", "skills": [{"name": "Ignition"}], "default": false},
            {"name": "Storm Box of Elgoloth", "skills": [{"name": "Allagast's Arcane Net"}, {"name": "Lightning Tether"}], "default": false},
            {"name": "Word of Pain", "skills": [{"name": "Word of Agony"}, {"name": "Death Sentence"}], "default": false},
            {"name": "Word of Renewal", "skills": [{"name": "Word of Arms"}, {"name": "Vigor"}, {"name": "Steel Resolve"}], "default": true},
            {"name": "Artifact Handling", "skills": [], "default": false},
            {"name": "Bursting Round", "skills": [], "default": false},
            {"name": "Chilling Rounds", "skills": [], "default": false},
            {"name": "Deadly Aim", "skills": [], "default": true},
            {"name": "Ranged Expertise", "skills": [], "default": false},
            {"name": "Storm Spread", "skills": [], "default": false},
            {"name": "Aura of Censure", "skills": [], "default": false},
            {"name": "Aura of Conviction", "skills": [], "default": false}
        ]
    }, {
        "class_name": "Necromancer",
        "class_skills": [
            {"name": "Bone Harvest", "skills": [{"name": "Harvester of Death"}, {"name": "Dread"}, {"name": "Soul Harvest"}], "default": false},
            {"name": "Call of the Grave", "skills": [], "default": true},
            {"name": "Drain Essence", "skills": [{"name": "Gravechill"}, {"name": "Hungering Reach"}, {"name": "Decomposition"}], "default": false},
            {"name": "Ill Omen", "skills": [], "default": false},
            {"name": "Mark of Torment", "skills": [], "default": true},
            {"name": "Ravenous Earth", "skills": [{"name": "Decay"}, {"name": "Foul Eruption"}], "default": false},
            {"name": "Reap Spirit", "skills": [], "default": false},
            {"name": "Siphon Souls", "skills": [{"name": "Blood Boil"}], "default": false},
            {"name": "Necrotic Edge", "skills": [], "default": false},
            {"name": "Reaping Strike", "skills": [], "default": false},
            {"name": "Harbinger of Souls", "skills": [], "default": false},
            {"name": "Master of Death", "skills": [], "default": false},
            {"name": "Spectral Binding", "skills": [{"name": "Spectral Wrath"}], "default": true},
            {"name": "Raise Skeletons", "skills": [{"name": "Undead Legion"}, {"name": "Will of the Crypt"}], "default": false},
            {"name": "Reap Spirit", "skills": [], "default": false},
            {"name": "Summon Blight Fiend", "skills": [{"name": "Unstable Anomaly"}, {"name": "Rotting Fumes"}, {"name": "Blight Burst"}], "default": false}
        ]
    }, {
        "class_name": "Oathkeeper",
        "class_skills": [
            {"name": "Aegis of Menhir", "skills": [{"name": "Avenging Shield"}, {"name": "Aegis of Thorns"}, {"name": "Reprisal"}], "default": false},
            {"name": "Ascension", "skills": [{"name": "Clarity of Purpose"}], "default": true},
            {"name": "Eye of Reckoning", "skills": [{"name": "Soulfire"}], "default": false},
            {"name": "Judgment", "skills": [{"name": "Crushing Verdict"}, {"name": "Heart of Wrath"}], "default": false},
            {"name": "Righteous Fervor", "skills": [{"name": "Dreeg's Reproach"}, {"name": "Consecration"}, {"name": "Retribution"}], "default": false},
            {"name": "Vire's Might", "skills": [{"name": "Volcanic Might"}, {"name": "Volcanic Stride"}, {"name": "Tectonic Shift"}], "default": false},
            {"name": "Resilience", "skills": [], "default": true},
            {"name": "Safeguard", "skills": [], "default": false},
            {"name": "Shattering Smash", "skills": [], "default": false},
            {"name": "Smite", "skills": [], "default": false},
            {"name": "Divine Mandate", "skills": [], "default": false},
            {"name": "Path of the Three", "skills": [], "default": false},
            {"name": "Presence of Virtue", "skills": [{"name": "Haven"}, {"name": "Rebuke"}], "default": true},
            {"name": "Summon Guardian of Empyrion", "skills": [{"name": "Celestial Presence"}], "default": false}
        ]
    }
]


function get_skills_for_class(class_name){
    for (let i=0; i<all_skills.length; i++){
        if (all_skills[i].class_name === class_name){
            return all_skills[i].class_skills;
        }
    }
}

function get_default_skills_for_class()