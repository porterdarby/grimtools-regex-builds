const all_skills = [
    {
        "class_name": "Soldier",
        "class_skills": [
            {"name": "Blade Arc", "skills": [{"name": "Clean Sweep"}, {"name": "Laceration"}]},
            {"name": "Blitz", "skills": [{"name": "Blindside"}]},
            {"name": "Cadence", "skills": [{"name": "Fighting Form"}, {"name": "Deadly Momentum"}]},
            {"name": "Forcewave", "skills": [{"name": "Rending Force"}, {"name": "Internal Trauma"}]},
            {"name": "Overguard", "skills": []},
            {"name": "War Cry" [{"name": "Break Morale"}]},
            {"name": "Decorated Soldier", "skills": []},
            {"name": "Fighting Spirit", "skills": []},
            {"name": "Markovian's Advantage", "skills": []},
            {"name": "Menhir's Will", "skills": []},
            {"name": "Military Conditioning", "skills": []},
            {"name": "Scars of Battle", "skills": []},
            {"name": "Shield Training", "skills": []},
            {"name": "Veterancy", "skills": []},
            {"name": "Zolhan's Technique", "skills": []},
            {"name": "Counter Strike", "skills": []},
            {"name": "Menhir's Bulwark", "skills": []},
            {"name": "Oleron's Rage", "skills": []},
            {"name": "Field Command", "skills": [{"name": "Squad Tactics"}]}
        ]
    },
    {
        "class_name": "Demolitionist",
        "class_skills": [
            {"name": "Blackwater Cocktail", "skills": [{"name": "High Potency"}, {"name": "Demon Fire"}, {"name": "Agonizing Flames"}]},
            {"name": "Canister Bomb", "skills": [{"name": "Concussive Bomb"}, {"name": "Improved Casing"}]},
            {"name": "Fire Strike", "skills": [{"name": "Explosive Strike"}, {"name": "Static Strike"}, {"name": "Brimstone"}]},
            {"name": "Flashbang", "skills": [{"name": "Searing Light"}]},
            {"name": "Grenado", "skills": [{"name": "High Impact"}, {"name": "Shattering Blast"}]},
            {"name": "Mortar Trap", "skills": [{"name": "Heavy Ordnance"}, {"name": "\"The Big One\""}]},
            {"name": "Stun Jacks", "skills": [{"name": "Quick Jacks"}, {"name": "Full Spread"}]},
            {"name": "Thermite Mine", "skills": [{"name": "Hellfire Mine"}]},
            {"name": "Blast Shield", "skills": []},
            {"name": "Ulzuin's Chosen", "skills": []},
            {"name": "Flamed Touched", "skills": [{"name": "Temper"}]},
            {"name": "Vindicative Flame", "skills": [{"name": "Ulzuin's Wrath"}]}
        ]
    }, {
        "class_name": "Occultist",
        "class_skills": [
            {"name": "Blood of Dreeg", "skills": [{"name": "Aspect of the Guardian"}]},
            {"name": "Blood Pox", "skills": [{"name": "Fevered Rage"}, {"name": "Wasting"}, {"name": "Black Death"}]},
            {"name": "Curse of Frailty", "skills": [{"name": "Vulnerability"}]},
            {"name": "Doom Bolt", "skills": []},
            {"name": "Dreeg's Evil Eye", "skills": [{"name": "Blood Burst"}, {"name": "Focused Gaze"}, {"name": "Terrifying Gaze"}, {"name": "Vile Eruption"}]},
            {"name": "Sigil of Consumption", "skills": [{"name": "Destruction"}]},
            {"name": "Bonds of Bysmiel", "skills": [{"name": "Manipulation"}]},
            {"name": "Possession", "skills": []},
            {"name": "Solael's Witchfire", "skills": [{"name": "Consecrated Blade"}, {"name": "Second Rite"}]},
            {"name": "Summon Familiar", "skills": [{"name": "Mend Flesh"}, {"name": "Storm Spirit"}, {"name": "Lightning Strike"}]},
            {"name": "Summon Hellhound", "skills": [{"name": "Ember Claw"}, {"name": "Hellfire"}, {"name": "Infernal Breath"}]}
        ]
    }, {
        "class_name": "Nightblade",
        "class_skills": [
            {"name": "Amarasta's Blade Burst", "skills": [{"name": "Lethal Assault"}]},
            {"name": "Blade Barrier, Blade Trap", "skills": [{"name": "Devouring Blades"}]},
            {"name": "Phantasmal Blades", "skills": [{"name": "Frenetic Throw"}, {"name": "Heart Seeker"}, {"name": "Nether Edge"}]},
            {"name": "Pneumatic Burst", "skills": [{"name": "Breath of Belgothian"}, {"name": "Shadow Dance"}, {"name": "Elemental Awakening"}]},
            {"name": "Ring of Steel", "skills": [{"name": "Ring of Frost"}, {"name": "Circle of Slaughter"}]},
            {"name": "Shadow Strike", "skills": [{"name": "Nidalla's Justifiable Ends"}, {"name": "Nightfall"}]},
            {"name": "Anatomy of Murder", "skills": []},
            {"name": "Dual Blades", "skills": [{"name": "Belgothian's Shears"}, {"name": "Hidden Hands"}, {"name": "Amarasta's Quick Cut"}, {"name": "Whirling Death"}, {"name": "Execution"}]},
            {"name": "Merciless Repertoire", "skills": []},
            {"name": "Phantasmal Armor", "skills": []},
            {"name": "Veil of Shadow", "skills": [{"name": "Night's Chill"}]},
            {"name": "Blade Spirit", "skills": []}
        ]
    }, {
        "class_name": "Aranist",
        "class_skills": [
            {"name": "Albrecht's Aether Ray", "skills": [{"name": "Tainted Power"}, {"name": "Disintegration"}]},
            {"name": "Callidor's Tempest", "skills": [{"name": "Wrath of Agrivix"}, {"name": "Inferno"}]},
            {"name": "Devastation", "skills": []},
            {"name": "Maiven's Sphere of Protection", "skills": [{"name": "Conversion"}]},
            {"name": "Mirror of Ereoctes, Nullification, Olexra's Flash Freeze", "skills": [{"name": "Absolute Zero"}]},
            {"name": "Panetti's Replicating Missile", "skills": [{"name": "Distortion"}, {"name": "Supercharged"}, {"name": "Proliferation"}]},
            {"name": "Trozan's Sky Shard", "skills": [{"name": "Frozen Core"}, {"name": "Shattered Star"}]},
            {"name": "Arcane Will", "skills": []},
            {"name": "Fabric of Reality", "skills": []},
            {"name": "Inner Focus", "skills": []},
            {"name": "Mental Alacrity", "skills": []},
            {"name": "Iskandra's Elemental Exchange", "skills": [{"name": "Manifestation"}, {"name": "Overload"}, {"name": "Elemental Balance"}]},
            {"name": "Reckless Power", "skills": []},
            {"name": "Star Pact", "skills": []}
        ]
    }, {
        "class_name": "Shaman",
        "class_skills": [
            {"name": "Brute Force", "skills": [{"name": "Feral Hunger"}, {"name": "Upheaval"}]},
            {"name": "Devouring Swarm", "skills": []},
            {"name": "Grasping Vines", "skills": [{"name": "Entangling Vines"}]},
            {"name": "Primal Strike", "skills": [{"name": "Thunderous Strike"}, {"name": "Torrent"}, {"name": "Storm Surge"}]},
            {"name": "Savagery", "skills": [{"name": "Might of the Bear"}, {"name": "Tenacity of the Boar"}, {"name": "Storm Touched"}]},
            {"name": "Mogdrogen's Pact", "skills": [{"name": "Heart of the Wild"}, {"name": "Oak Skin"}]},
            {"name": "Primal Bond", "skills": []},
            {"name": "Stormcaller's Pact", "skills": []},
            {"name": "Conjure Primal Spirit", "skills": []},
            {"name": "Storm Totem", "skills": []},
            {"name": "Summon Briarthorn", "skills": [{"name": "Ground Slam"}, {"name": "Emboldening Presence"}]},
            {"name": "Wendigo Totem", "skills": [{"name": "Blood Pact"}]},
            {"name": "Wind Devil", "skills": [{"name": "Raging Tempest"}, {"name": "Maelstrom"}]}
        ]
    }, {
        "class_name": "Inquisitor",
        "class_skills": [
            {"name": "Flames of Ignaffar", "skills": [{"name": "Intensify"}, {"name": "Infernal Purge"}, {"name": "Endless Flame"}]},
            {"name": "Horn of Gandarr", "skills": []},
            {"name": "Inquisitor Seal", "skills": [{"name": "Arcane Empowerment"}]},
            {"name": "Rune of Hagarrad", "skills": [{"name": "Biting Cold"}, {"name": "Chillsurge"}]},
            {"name": "Rune of Kalastor", "skills": [{"name": "Ignition"}]},
            {"name": "Storm Box of Elgoloth", "skills": [{"name": "Allagast's Arcane Net"}, {"name": "Lightning Tether"}]},
            {"name": "Word of Pain", "skills": [{"name": "Word of Agony"}, {"name": "Death Sentence"}]},
            {"name": "Word of Renewal", "skills": [{"name": "Word of Arms"}, {"name": "Vigor"}, {"name": "Steel Resolve"}]},
            {"name": "Artifact Handling", "skills": []},
            {"name": "Bursting Round", "skills": []},
            {"name": "Chilling Rounds", "skills": []},
            {"name": "Deadly Aim", "skills": []},
            {"name": "Ranged Expertise", "skills": []},
            {"name": "Storm Spread", "skills": []},
            {"name": "Aura of Censure", "skills": []},
            {"name": "Aura of Conviction", "skills": []}
        ]
    }, {
        "class_name": "Necromancer",
        "class_skills": [
            {"name": "Bone Harvest", "skills": [{"name": "Harvester of Death"}, {"name": "Dread"}, {"name": "Soul Harvest"}]},
            {"name": "Call of the Grave", "skills": []},
            {"name": "Drain Essence", "skills": [{"name": "Gravechill"}, {"name": "Hungering Reach"}, {"name": "Decomposition"}]},
            {"name": "Ill Omen", "skills": []},
            {"name": "Mark of Torment"},
            {"name": "Ravenous Earth", "skills": [{"name": "Decay"}, {"name": "Foul Eruption"}]},
            {"name": "Reap Spirit", "skills": []},
            {"name": "Siphon Souls", "skills": [{"name": "Blood Boil"}]},
            {"name": "Necrotic Edge", "skills": []},
            {"name": "Reaping Strike", "skills": []},
            {"name": "Harbinger of Souls", "skills": []},
            {"name": "Master of Death", "skills": []},
            {"name": "Spectral Binding", "skills": [{"name": "Spectral Wrath"}]},
            {"name": "Raise Skeletons", "skills": [{"name": "Undead Legion"}, {"name": "Will of the Crypt"}]},
            {"name": "Reap Spirit", "skills": []},
            {"name": "Summon Blight Fiend", "skills": [{"name": "Unstable Anomaly"}, {"name": "Rotting Fumes"}, {"name": "Blight Burst"}]}
        ]
    }, {
        "class_name": "Oathkeeper",
        "class_skills": [
            {"name": "Aegis of Menhir", "skills": [{"name": "Avenging Shield"}, {"name": "Aegis of Thorns"}, {"name": "Reprisal"}]},
            {"name": "Ascension", "skills": [{"name": "Clarity of Purpose"}]},
            {"name": "Eye of Reckoning", "skills": [{"name": "Soulfire"}]},
            {"name": "Judgment", "skills": [{"name": "Crushing Verdict"}, {"name": "Heart of Wrath"}]},
            {"name": "Righteous Fervor", "skills": [{"name": "Dreeg's Reproach"}, {"name": "Consecration"}, {"name": "Retribution"}]},
            {"name": "Vire's Might", "skills": [{"name": "Volcanic Might"}, {"name": "Volcanic Stride"}, {"name": "Tectonic Shift"}]},
            {"name": "Resilience", "skills": []},
            {"name": "Safeguard", "skills": []},
            {"name": "Shattering Smash", "skills": []},
            {"name": "Smite", "skills": []},
            {"name": "Divine Mandate", "skills": []},
            {"name": "Path of the Three", "skills": []},
            {"name": "Presence of Virtue", "skills": [{"name": "Haven"}, {"name": "Rebuke"}]},
            {"name": "Summon Guardian of Empyrion", "skills": [{"name": "Celestial Presence"}]}
        ]
    }
]


function get_skills_for_class(class_name){
    all_skills.forEach(obj => function (){if (obj.class_name == class_name){return obj.class_skills}})
}