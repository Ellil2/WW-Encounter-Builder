
//____________________________________________________________________________________________________


//User Input


//____________________________________________________________________________________________________

function typeChoiceFunction() {
   originChoice = prompt("Which Titan is your Titanspawn from ? (Possibilities: Muspelheim, Nyx, Soku no Kumi, Aether, Amaunet, Terra, Nun, Death)");
  if (originChoice === "Muspelheim") {
       subOriginChoice = prompt("What Avatar of Muspelheim is your Titanspawn linked to ? (Possibilities: Vrtra, Surtr, Prometheus, Any)");
  }
  else if (originChoice === "Nyx") {
       subOriginChoice = prompt("What Avatar of Nyx is your Titanspawn linked to ? (Possibilities: Nott, Fenrir, Apep, Any)");
  }
  else if (originChoice === "Terra") {
       subOriginChoice = prompt("What Avatar of Terra is your Titanspawn linked to ? (Possibilities: Dis Pater, Gaia, Ourea, Crom Cruach, Kur, Any)");
  }
  else if (originChoice === "Nun") {
       subOriginChoice = prompt("What Avatar of Nun is your Titanspawn linked to ? (Possibilities: Yam, Tiamat, Abzu, Cipactli, Any)");
  }
  else if (originChoice === "Aether") {
       subOriginChoice = prompt("What Avatar of Aether is your Titanspawn linked to ? (Possibilities: Aten, Hyperion, Any)");
  }
  else if (originChoice === "Death") {
       subOriginChoice = prompt("What Avatar of Death is your Titanspawn linked to ? (Possibilities: Styx, Grim Reaper, Any)");
  }
  else if (originChoice === "Soku no Kumi") {
       subOriginChoice = prompt("What Avatar of Soku no Kumi is your Titanspawn linked to ? (Possibilities: Huehueteotl, Mikaboshi, Erebus, Any)");
  }
  else if (originChoice === "Amaunet") {
       subOriginChoice = prompt("What Avatar of Amaunet is your Titanspawn linked to ? (Possibilities: Huracan, Typhon, Ouranos, Any)");
  }
  else {
    typeChoiceFunction();
    return;
}
}


typeChoice = prompt("Is your NPC a Mythborn, Titanspawn or Human ?");
if (typeChoice === "Titanspawn") {
    typeChoiceFunction();
}


else if (typeChoice === "Mythborn") {
   var originChoice = prompt("Which Otherworld is your Mythborn from ? (Possibilities: Jade Sea, Fairie, Dark Forest");
}
else if (typeChoice === "Human") { 
   var originChoice = prompt("What organization is your character from ? (Possibilities: Illuminati, Cabal, Necromancer)");}
  


function legendChoiceFunction() {
    legendChoice = prompt("Is your " + typeChoice + "'s Legend Level Godborn, Demigod or God ?");
if (legendChoice === "Godborn" || legendChoice === "Demigod" || legendChoice === "God") {
  behaviorChoiceFunction();
}

else {
    legendChoiceFunction();
    return;
}
};

function behaviorChoiceFunction() {
  behaviorChoice = prompt("What is your " + typeChoice + "'s behavior like ? Aggressive, Diplomatic or Friendly ?");  
if (behaviorChoice === "Aggressive" || behaviorChoice === "Diplomatic" || behaviorChoice === "Friendly") {
 intelligenceChoiceFunction();
}

else {
    behaviorChoiceFunction();
    return;
}
};

function intelligenceChoiceFunction() {
 intelligenceChoice = prompt("What is your " + typeChoice + "'s Intelligence Level ? Feral or Human?");
if (intelligenceChoice === "Feral" || intelligenceChoice === "Human") {
    combat1ChoiceFunction();
}

else {
    intelligenceChoiceFunction();
    return;
}
};

function combat1ChoiceFunction() {
 combatChoice1 = prompt("What is your " + typeChoice + "'s combat style' ? Warrior, Mage, or Rogue ?");
if (combatChoice1 === "Warrior" || combatChoice1 === "Mage" || combatChoice1 === "Rogue") {
    combat2ChoiceFunction();
}

else {
    combat1ChoiceFunction();
    return;
}
};

function combat2ChoiceFunction() {
 combatChoice2 = prompt("What is your " + typeChoice + "'s combat speciality' ? Support, Fighter, or Controller ?");
if (combatChoice2 === "Support" || combatChoice2 === "Fighter" || combatChoice2 === "Controller") {}

else {
    combat2ChoiceFunction();
    return;
}
};

legendChoiceFunction();


var Aspect = function(name,type,origin,subOrigin,legend,intelligence,behavior,combat1,combat2) {
  this.name = name;
  this.type = type;
  this.origin = origin;
  this.subOrigin = subOrigin;
  this.legend = legend;
  this.intelligence = intelligence;
  this.behavior = behavior;
  this.combat1 = combat1;
  this.combat2 = combat2;
  
};
//____________________________________________________________________________________________________

//Titanspawn High Concept Chooser ----------------------------------------------------------------


//____________________________________________________________________________________________________

var highConcept = [
 fenrisAlpha = new Aspect("Fenris Alpha", "Titanspawn", "Nyx", "Fenrir", "God","Human","behavior","Warrior"),
 fireWyrm = new Aspect("Fire Wyrm", "Titanspawn", "Muspelheim", "Surtr","God","Feral","behavior","Warrior"),
 nottTroll = new Aspect("Night Troll", "Titanspawn", "Nyx", "Nott", "Godborn","Human","behavior","Warrior"),
 fireGiant = new Aspect("Fire Giant", "Titanspawn", "Muspelheim", "Surtr","God","Human","behavior","Warrior"),
 cherubAngel = new Aspect("Cherub", "Titanspawn", "Aether", "Aten", "Godborn","Human","behavior","Mage"),
 sunDrake = new Aspect("Sun Drake","Titanspawn","Aether","Aten","God","Human","behavior","behavior","Mage"),
 archAngel = new Aspect("Archangel", "Titanspawn", "Aether", "Aten", "God","Human","behavior","Warrior"),
 seerAngel = new Aspect("Harbinger of Aten", "Titanspawn", "Aether", "Aten", "God","Human","behavior","Mage"),
 sandDjinn = new Aspect("Sand Djinn","Titanspawn","Aether","Hyperion","Demigod", "Human","behavior","Warrior"),
 sandWyrm = new Aspect("Sand Wyrm","Titanspawn","Aether","Hyperion","Godborn","Feral","behavior","Warrior"),
 lightPhoenix = new Aspect("Light Phoenix","Titanspawn","Aether","Aten","God","Feral","behavior","Mage"),
 fireAnt = new Aspect("Fire Ant","Titanspawn","Muspelheim","Prometheus","Godborn","Feral","behavior","Rogue"),
 burntElf = new Aspect("Burnt Elf","Titanspawn","Muspelheim","Surtr","Godborn","Human","behavior","Rogue"),
 fenrisWolf = new Aspect("Fenris Wolf","Titanspawn","Nyx","Fenrir","Godborn","Feral","behavior","Rogue"),
 fenrisGiant = new Aspect("Fenris Giant","Titanspawn","Nyx","Fenrir","God","Feral","behavior","Warrior"),
 nightDragon = new Aspect("Night Dragon","Titanspawn","Nyx","Apep","Demigod","Human","behavior","Mage"),
 nightWyrm = new Aspect("Night Wyrm","Titanspawn","Nyx","Apep","God","Feral","behavior","Warrior"),
 volcanoCyclops = new Aspect("Volcano Cyclops","Titanspawn","Muspelheim","Prometheus","Demigod","Human","behavior","Warrior"),
 nightGiant = new Aspect("Night Giant","Titanspawn","Nyx","Nott","God","Human","behavior","Warrior"),
 midnightHorror = new Aspect("Midnight Horror","Titanspawn","Nyx","Nott","Demigod","Feral","behavior","Mage"),
 lesserPhoenix = new Aspect ("Lesser Phoenix","Titanspawn","Aether","Aten","Godborn","Feral","behavior","Mage"),
 angel = new Aspect("Knight Angel","Titanspawn","Aether","Aten","Demigod","Human","behavior","Warrior"),
 angelSeer = new Aspect("Angel Seer","Titanspawn","Aether","Aten","Demigod","Human","behavior","Mage"),  
 armoredWight = new Aspect("Armored Wight","Titanspawn","Death","Grim Reaper","Demigod","Feral","behavior","Warrior"),
 ashGiant = new Aspect("Ash Giant","Titanspawn","Muspelheim","Vrtra","God","Feral","behavior","Warrior"),
 blightScarab = new Aspect("Blight Scarab","Titanspawn","Terra","Crom Cruach","Godborn","Feral","behavior","Rogue"),
 blightWyrm = new Aspect("Blight Wyrm","Titanspawn","Terra","Crom Cruach","God","Feral","behavior","Warrior"),
 bringerDepths = new Aspect("Bringer of the Depths","Titanspawn","Nun","Yam","God","Human","behavior","Mage"),
 chainedSoul = new Aspect("Chained Soul","Titanspawn","Death","Styx","Godborn","Feral","behavior","Mage"),
 cloudBreaker = new Aspect("Cloud Breaker","Titanspawn","Amaunet","Typhon","God","Human","behavior","Warrior"),
 darkSilencer = new Aspect("Dark Silencer","Titanspawn","Soku no Kumi","Huehueteotl","Demigod","Human","behavior","Mage"),
 dryadAshes = new Aspect("Dryad of Ashes","Titanspawn","Muspelheim","Surtr","Godborn","Human","behavior","Mage"),
 facelessLegionnaire = new Aspect("Faceless Legionnaire","Titanspawn","Soku no Kumi","Huehueteotl","Godborn","Human","behavior","Warrior"),
 fireColossus = new Aspect("Fire Colossus","Titanspawn","Muspelheim","Prometheus","God","Feral","behavior","Warrior"),
 fireLord = new Aspect("Fire Lord","Titanspawn","Muspelheim","Surtr","God","Human","behavior","Mage"),
 frogElder = new Aspect("Frog Elder","Titanspawn","Terra","Gaia","Godborn","Human","behavior","Mage"),
 giantCentipede = new Aspect("Giant Centipede","Titanspawn","Terra","Crom Cruach","Demigod","Feral","behavior","Warrior"),
 graniteGolem = new Aspect("Granite Golem","Titanspawn","Terra","Ourea","Godborn","Human","behavior","Warrior"),
 lampDjinn = new Aspect("Lamp Djinn","Titanspawn","Aether","Hyperion","Godborn","Human","behavior","Mage"),
 lavaLegionnaire = new Aspect("Lava Legionnaire","Titanspawn","Muspelheim","Vrtra","Demigod","Feral","behavior","Warrior"),
 lightningCoatl = new Aspect("Lightning Coatl","Titanspawn","Amaunet","Huracan","God","Human","behavior","Mage"),
 steelCoatl = new Aspect("Steel Coatl","Titanspawn","Amaunet","Huracan","Demigod","Human","behavior","Warrior"),
 steelSerpent = new Aspect("Steel Serpent","Titanspawn","Terra","Dis Pater","Godborn","Feral","behavior","Rogue"),
 orthosSpawn = new Aspect("Orthos Spawn","Titanspawn","Terra","Gaia","Godborn","Feral","behavior","Warrior"),
 depthsPriest = new Aspect("Priest of the Depths","Titanspawn","Nun","Yam","Demigod","Human","behavior","Mage"),
 shadeWidow = new Aspect("Shade Widow","Titanspawn","Soku no Kumi","Mikaboshi","God","Feral","behavior","Rogue"),
 soulReaper = new Aspect("Soul Reaper","Titanspawn","Death","Grim Reaper","Demigod","Human","behavior","Warrior"),
 soulSearer = new Aspect("Soul Searer","Titanspawn","Death","Grim Reaper","God","Feral","behavior","Mage"),
 stitchedHorror = new Aspect("Stitched Horror","Titanspawn","Soku no Kumi","Huehueteotl","Demigod","Feral","behavior","Warrior"),
 swampHulk = new Aspect("Swamp Hulk","Titanspawn","Terra","Gaia","Demigod","Feral","behavior","Warrior"),
 undeadKing = new Aspect("Undead King","Titanspawn","Death","Styx","Demigod","Human","behavior","Warrior"),
 worldBurner = new Aspect("World Burner","Titanspawn","Muspelheim","Vrtra","God","Human","behavior","Mage"),
 arachnidBroodmother = new Aspect("Arachnid Broodmother","Titanspawn","Terra","Crom Cruach","Demigod","Human","behavior","Rogue"), 
 batKing = new Aspect("Bat King","Titanspawn","Death","Camatotz","God","Human","behavior","Rogue"),
 erebusChosen = new Aspect("Chosen of Erebus","Titanspawn","Soku no Kumi","Erebus","God","Human","behavior","Warrior"),
 deepOne = new Aspect("Deep One","Titanspawn","Nun","Abzu","Demigod","Feral","behavior","Warrior"),    
 forestSoulstealer = new Aspect("Forest Soulstealer","Titanspawn","Death","Styx","Demigod","Feral","behavior","Mage"),    
 hopeEater = new Aspect("Hope Eater","Titanspawn","Nyx","Nott","Demigod","Feral","behavior","Mage"),    
 drownedKeeper = new Aspect("Keeper of the Drowned","Titanspawn","Nun","Abzu","Godborn","Human","behavior","Warrior"),    
 livingAvalanche = new Aspect("Living Avalanche","Titanspawn","Terra","Ourea","God","Feral","behavior","Mage"),
 lurkingNightmare = new Aspect("Lurking Nightmare","Titanspawn","Nyx","Fenrir","Demigod","Feral","behavior","Mage"),    
 magmaCentaur = new Aspect("Magma Centaur","Titanspawn","Muspelheim","Prometheus","Godborn","Human","behavior","Rogue"),    
 magmaSpewer = new Aspect("Magma Spewer","Titanspawn","Muspelheim","Surtr","Godborn","Feral","behavior","Mage"),    
 nightbringer = new Aspect("Nightbringer","Titanspawn","Nyx","Nott","God","Human","behavior","Mage"),    
 salamander = new Aspect("Salamander","Titanspawn","Muspelheim","Vrtra","Godborn","Human","behavior","Mage"), 
 savageChimera = new Aspect("Savage Chimera","Titanspawn","Terra","Gaia","Demigod","Feral","behavior","Warrior"),
 seaSerpent = new Aspect("Sea Serpent","Titanspawn","Nun","Yam","Demigod","Feral","behavior","Warrior"),    
 stoneColossus = new Aspect("Stone Colossus","Titanspawn","Terra","Ourea","Demigod","","behavior","Warrior"),    
 surtrJuggernaut = new Aspect("Surtr Juggernaut","Titanspawn","Muspelheim","Surtr","God","Human","behavior","Warrior"),
 fomorian = new Aspect("Fomorian","Titanspawn","Terra","Crom Cruach","Godborn","Human","behavior","Warrior"),
 fomorianChieftain = new Aspect("Fomorian Chieftain","Titanspawn","Terra","Crom Cruach","Demigod","Human","behavior","Warrior"),
 fomorianOgre = new Aspect("Fomorian Ogre","Titanspawn","Terra","Crom Cruach","God","Human","behavior","Warrior"),    
 valkyrie = new Aspect("Valkyrie","Titanspawn","Death","Styx","Demigod","Human","behavior","Warrior"),
 bringerEclipse = new Aspect("Bringer of Eclipse","Titanspawn","Nyx","Nott","God","Human","behavior","Mage"), 
 fireRevenant = new Aspect("Fire Revenant","Titanspawn","Muspelheim","Surtr","Demigod","Human","behavior","Mage"),    
 fomorianHound = new Aspect("Fomorian Hound","Titanspawn","Terra","Crom Cruach","Godborn","Feral","behavior","Rogue"),    
 forestGiant = new Aspect("Forest Giant","Titanspawn","Terra","Gaia","God","Human","behavior","Warrior"),
 garmSpawn = new Aspect("Garm Spawn","Titanspawn","Muspelheim","Surtr","Godborn","Feral","behavior","Warrior"),    
 shadowFiend = new Aspect("Shadow Fiend","Titanspawn","Suki no Kumi","Mikaboshi","God","Human","behavior","Rogue"),    
 steelcladGiant = new Aspect("Steelclad Giant","Titanspawn","Terra","Dis Pater","God","Human","behavior","Warrior"),
 twistedSoulcursed = new Aspect("Twisted Soulcursed","Titanspawn","Death","Camatotz","God","Feral","behavior","Mage"),    
    
    /* name = new Aspect("name","Titanspawn","origin","subOrigin","legend","intelligence","behavior","combat1"),*/

]
    
   

var highConceptOptions = [];

for(i=0; i < highConcept.length; i++) {
  if (
    typeChoice === highConcept[i].type && 
    originChoice === highConcept[i].origin &&
    subOriginChoice === highConcept[i].subOrigin && 
    legendChoice === highConcept[i].legend &&
    intelligenceChoice === highConcept[i].intelligence) 
  {
      highConceptOptions.push(highConcept[i].name)
  }
  else if (typeChoice === highConcept[i].type && 
   originChoice === highConcept[i].origin &&
   subOriginChoice === "Any" && 
   legendChoice === highConcept[i].legend &&
   intelligenceChoice === highConcept[i].intelligence)
  {
   highConceptOptions.push(highConcept[i].name)
  }
};

if (typeof highConceptOptions[i] === 'undefined') {
for(i=0; i < highConcept.length; i++) {
  if (
    typeChoice === highConcept[i].type && 
    originChoice === highConcept[i].origin &&
    legendChoice === highConcept[i].legend &&
    intelligenceChoice === highConcept[i].intelligence) 
  {
      highConceptOptions.push(highConcept[i].name)
  }
}
};
    
// _______________________________________
    
    
// Default Titanspawn Experiments -----------------------------------
    

// _______________________________________

 
if (typeof highConceptOptions[i] === 'undefined') {
  
    
    // Titans Options
if (originChoice === "Aether") {
    var originDefault = ["Sun", "Sand", "Light"]
}
else if (originChoice === "Nyx") {
    var originDefault = ["Night", "Midnight", "Moonlit", "Nightmare"]
}
else if (originChoice === "Death") {
    var originDefault = ["Death", "Soul Eating", "Light"]
}
else if (originChoice === "Soku no Kumi") {
    var originDefault = ["Darkness", "Faceless", "Silent"]
}
else if (originChoice === "Nun") {
    var originDefault = ["Drowned", "Naga", "Lizard"]
}
else if (originChoice === "Amaunet") {
    var originDefault = ["Wind", "Cloud", "Lightning"]
}
else if (originChoice === "Muspelheim") {
    var originDefault = ["Lava", "Fire", "Ash"]
}
else if (originChoice === "Terra") {
    var originDefault = ["Swamp", "Rock", "Stone","Forest","Jungle","Giant"]
}

// Combat 1 Options
if (combatChoice1 === "Warrior") {
    var combat1Default = ["Warrior","Soldier","Legionnaire","Footsoldier","Cultist"]
}
else if (combatChoice1 === "Mage") {
    var combat1Default = ["Sorcerer", "Prophet", "Worshipper"]
}
else if (combatChoice1 === "Rogue") {
    var combat1Default = ["Scout", "Archer", "Assassin"]
}

    
var originDefaultRandom = originDefault[Math.floor(Math.random() * originDefault.length)];
var combat1DefaultRandom = combat1Default[Math.floor(Math.random() * combat1Default.length)];

highConceptOptions.push(originDefaultRandom + " " + combat1DefaultRandom)


}
      

 

var rand = highConceptOptions[Math.floor(Math.random() * highConceptOptions.length)];

//____________________________________________________________________________________________________


//First Aspect Chooser ---------------------------------------------------------------------------


//____________________________________________________________________________________________________


var aspect1 = [
 nightHunger = new Aspect("Hunger of Night", "Titanspawn", "Nyx"),
 walkingVolcano = new Aspect("Walking Volcano", "Titanspawn", "Muspelheim"),
 lightFear = new Aspect("Fear of the Light", "Titanspawn", "Nyx"),
 waterHatred = new Aspect("Hatred of Water", "Titanspawn", "Muspelheim"),
 brightPresence = new Aspect("Bright Presence", "Titanspawn", "Aether"),
 darknessBorn = new Aspect("Born of the Darkness","Titanspawn","Nyx"),
 nightStalker = new Aspect("Night Stalker","Titanspawn","Nyx"),
 lightBringer = new Aspect("Light Bringer","Titanspawn","Aether"),
 ashMaker = new Aspect("Ash Maker","Titanspawn","Muspelheim"),
 walkingBlaze = new Aspect("Walking Blaze","Titanspawn","Muspelheim"),   
 drownThemAll = new Aspect("Drown Them All","Titanspawn","Nun"),  
 toTheDepths = new Aspect("To The Depths","Titanspawn","Nun"),
 deathIsSacred = new Aspect("Death is Sacred","Titanspawn","Death"),
 fervorousFaith = new Aspect("Fervorous Faith","Titanspawn","Aether"),
 shadowOnTheLand = new Aspect("Shadow on the Land","Titanspawn","Soku no Kumi"),
 jungleBorn = new Aspect("Born in the Jungle","Titanspawn","Terra"),
 searTheirEyes = new Aspect("Sear Their Eyes","Titanspawn","Aten"),
 unworthyofmySight = new Aspect("Unworthy of My Sight","Titanspawn","Aten"),
 selfCombustion = new Aspect("Self Combustion","Titanspawn","Muspelheim"),
 oneWithNature = new Aspect("One With Nature","Titanspawn","Terra"),
 oneWiththeSky = new Aspect("One With the Sky","Titanspawn","Amaunet"),
 natureLove = new Aspect("Nature Lover","Titanspawn","Terra"),
 pyreFanatic  = new Aspect("Pyre Fanatic","Titanspawn","Muspelheim"),
 graveyardDweller = new Aspect("Graveyard Dweller","Titanspawn","Death"),
 deathLover = new Aspect("Lover of Death","Titanspawn","Death"),
 extinguishLight = new Aspect("Extinguish the Light","Titanspawn","Soku no Kumi"),
 lightIntoDarkness = new Aspect("A Light Into the Darkness","Titanspawn","Aether"),
 weAreLegion = new Aspect("We are Legion","Titanspawn","Terra"),
 asNumerous = new Aspect("As Many of Us as Stars in the Sky","Titanspawn","Nyx"),
 cannotStopLight = new Aspect("Light Cannot be Stopped","Titanspawn","Aether"),
 horridStench = new Aspect("Horrid Stench","Titanspawn","Terra"),
 rottingPresence  = new Aspect("Rotting Presence","Titanspawn","Terra"),
 stellarLight = new Aspect("Stellar Light","Titanspawn","Nyx"),
 shadowAffinity = new Aspect("Shadow Affinity","Titanspawn","Soku no Kumi"), 
 fullMoon = new Aspect("Full Moon","Titanspawn","Nyx"),
 divineWhiteness = new Aspect("Divine Whiteness","Titanspawn","Aether"),
   
    
    
// name = new Aspect("name","type","origin"),
]

var aspect1Options = [];

for(i=0; i < aspect1.length; i++) {
  if (typeChoice === aspect1[i].type && 
      originChoice === aspect1[i].origin) {
  aspect1Options.push(aspect1[i].name)
};
};

var rand2 = aspect1Options[Math.floor(Math.random() * aspect1Options.length)];

//____________________________________________________________________________________________________


//Second Aspect Chooser ---------------------------------------------------------------------------


//____________________________________________________________________________________________________

var aspect2 = [
 sadisticGenius = new Aspect("Sadistic Genius","type","origin","subOrigin","legend","Human","Aggressive"),
 berserkerBrute = new Aspect("Berserker Brute","type","origin","subOrigin","legend","Feral","Aggressive"),
 honorableWarrior = new Aspect("Honorable Warrior","type","origin","subOrigin","legend","Human","Diplomatic"),
 wiseBeast = new Aspect("Wise Beast","type","origin","subOrigin","legend","Feral","Diplomatic"),
 sadisticBrute = new Aspect("Sadistic Brute","type","origin","subOrigin","legend","Feral","Aggressive"),
 patientPolitician = new Aspect("Patient Politician","type","origin","subOrigin","legend","Human","Diplomatic"),
 reasonCivilized = new Aspect("No Reason Why We Can't Be Civilized", "type","origin","subOrigin","legend","Human","Diplomatic"),
 subteltyPower = new Aspect("Subtlety Is Its Own Power","type","origin","subOrigin","legend","Human","Diplomatic)"),
 justBusiness = new Aspect("Nothing Personal, It's Just Business","type","origin","subOrigin","legend","Human","Diplomatic"),
 strongRule = new Aspect("Only the Strong Are Fit to Rule","type","origin","subOrigin","legend","Human","Aggressive"),
 politicsGame = new Aspect("Politics Is My Favorite Game","type","origin","subOrigin","legend","Human","Manipulative"),
 speakSoftly = new Aspect("Speak Softly but Carry a Big Stick","type","origin","subOrigin","legend","Human","Diplomatic"),
 upholdLaw = new Aspect("Uphold the Law","type","origin","subOrigin","legend","Human","Diplomatic"),
 mercyCruelty = new Aspect("No Mercy, but No Cruelty","type","origin","subOrigin","legend","Human","Aggressive"),
 worthyRespected = new Aspect("A Worthy Foe Should Be Respected","type","origin","subOrigin","legend","Human","Aggressive"),
 theAlpha = new Aspect("The Alpha","type","origin","subOrigin","legend","Feral","Aggressive"),
 theElder = new Aspect("The Elder","type","origin","subOrigin","legend","Feral","Diplomatic"),
 longTermPerspective = new Aspect("Long Term Perspective","type","origin","subOrigin","legend","Human","Diplomatic"),
 penBeforeSword = new Aspect("The Pen is Mightier","type","origin","subOrigin","legend","Human","Diplomatic"),
 greatEmpathy = new Aspect("Great Empathy","type","origin","subOrigin","legend","Human","Diplomatic"),
 tyrant = new Aspect("Tyrant","type","origin","subOrigin","legend","Human","Aggressive"),
 beastTyrant = new Aspect("Beast Tyrant","type","origin","subOrigin","legend","Feral","Aggressive"),
 leaderofMen = new Aspect("Leader of Men","type","origin","subOrigin","legend","Human","Diplomatic"),
 general = new Aspect("General","type","origin","subOrigin","legend","Human","Aggressive"),
 powerHungry = new Aspect("Power Hungry","type","origin","subOrigin","legend","Human","Diplomatic"),
 gentleBeast = new Aspect("Gentle Beast","type","origin","subOrigin","legend","Feral","Diplomatic"),
 bully = new Aspect("Bully","type","origin","subOrigin","legend","Human","Aggressive")

 


  
// name = new Aspect("name","type","origin","subOrigin","legend","intelligence","behavior")

 
]

var aspect2Options = [];

for(g=0; g < aspect2.length; g++) {
  if (behaviorChoice === aspect2[g].behavior && 
      intelligenceChoice === aspect2[g].intelligence) {
  aspect2Options.push(aspect2[g].name)
};
};

var rand3 = aspect2Options[Math.floor(Math.random() * aspect2Options.length)];

//____________________________________________________________________________________________________


//Legendary Abilities  + 3rd Aspect Chooser ------------------------------------------------------------------


//____________________________________________________________________________________________________


//Setting the Level of the Legendary Abilities

if (legendChoice === "God") {
    var abilityOne = 3
    var abilityTwo = 2
}

else if (legendChoice === "Demigod") {
    var abilityOne = 2
    var abilityTwo = 1
}

else if (legendChoice === "Godborn") {
    var abilityOne = 1
}


var abilities = [ 

    //Aether
 sunWarden = new Aspect("Sun Warden","type","Aether","subOrigin","Invokation: Light - Sun (" + abilityOne + ")","Epic Physique (" + abilityTwo + ")","behavior","Warrior","Fighter"),
 sunPriest = new Aspect("Sun Priest","type","Aether","subOrigin","Invokation: Light - Sun (" + abilityOne + ")","Heku - Riot (" + abilityTwo + ")","behavior","Mage","Controller"),
 crowdDazzler = new Aspect("Crowd Dazzler","type","Aether","subOrigin","Heku - Riot (" + abilityOne + ")","Invokation: Light - Illumination (" + abilityTwo + ")","behavior","Mage","Controller"),
 lightShepard = new Aspect("Light Shepard","type","Aether","subOrigin","Heku - Soothe (" + abilityOne + ")","Invokation: Light - Blind (" + abilityTwo + ")","behavior","Mage","Controller"),
 desertWarden = new Aspect("Desert Warden","type","Aether","subOrigin","Invokation: Light - Sand (" + abilityOne + ")","Epic Physique (" + abilityTwo + ")","behavior","Warrior","Controller"),
 sunRay = new Aspect("Rays of the Sun","type","Aether","subOrigin","Invokation: Light - Energy (" + abilityOne + ")","Epic Dexterity (" + abilityTwo + ")","behavior","Rogue","Fighter"),
    // Nyx
 veilMaker = new Aspect("Veil Maker","type","Nyx","Nott","Invokation: Night - Obscurity  (" + abilityOne + ")","Illusion (" + abilityTwo + ")","behavior","Mage","Controller"),
 fearMongerer = new Aspect("Fear Mongerer","type","Nyx","Fenrir","Invokation: Night - Fear (" + abilityOne + ")","Ability i (" + abilityTwo + ")","behavior","Mage","Controller"),
 nightProwler = new Aspect("Night Prowler","type","Nyx","Fenrir","Epic Strength (" + abilityOne + ")","Invokation: Night - Obscurity (" + abilityTwo + ")","behavior","Rogue","Fighter"),
 fenrisCaller = new Aspect("Fenris Wildcaller","type","Nyx","Fenrir","Zoothropy: Wolf (" + abilityOne + ")","Epic Physique (" + abilityTwo + ")","behavior","Mage","Fighter"),
 nightMaker = new Aspect("Night Maker","type","Nyx","Apep","Invokation: Night - Darkness (" + abilityOne + ")","Epic Physique (" + abilityTwo + ")","behavior","Mage","Controller"),
 apophisAnnihilator = new Aspect("Apophis Annihilator","type","Nyx","Apep","Zoothropy: Snake (" + abilityOne + ")","Invokation: Night - Fear (" + abilityTwo + ")","behavior","Warrior","Fighter"),
    // Terra
 earthBreaker = new Aspect("Earth Breaker","type","Terra","Kur","Ability j (" + abilityOne + ")","Ability i (" + abilityTwo + ")","behavior","combat1","combat2"),
   
    
]
// name = new Aspect("name","type","origin","subOrigin","Ability j (" + abilityOne + ")","Ability i (" + abilityTwo + ")","behavior","combat1","combat2"),

var thirdAspectOptions = [];
var abilitiesOptions = [];

for(g=0; g < abilities.length; g++) {
  if (originChoice === abilities[g].origin  &&
      subOriginChoice === abilities[g].subOrigin &&
      combatChoice1 === abilities[g].combat1 && 
      combatChoice2 === abilities[g].combat2) {
      if (legendChoice === "Godborn") {
  abilitiesOptions.push(" \n" + abilities[g].legend) 
      }
      else {
  abilitiesOptions.push(" \n" + abilities[g].legend + " \n" + abilities[g].intelligence) 
      }
  //Legend here is the first Legendary Ability, Intelligence is the second Legendary Ability
  thirdAspectOptions.push(abilities[g].name) //Name here is the Third Aspect Name
  }
}

if (typeof thirdAspectOptions[i] === 'undefined') {
for(g=0; g < abilities.length; g++) {
  if (originChoice === abilities[g].origin  &&
      subOriginChoice === abilities[g].subOrigin &&
      combatChoice1 === abilities[g].combat1) {
      if (legendChoice === "Godborn") {
  abilitiesOptions.push(" \n" + abilities[g].legend) 
      }
      else {
  abilitiesOptions.push(" \n" + abilities[g].legend + " \n" + abilities[g].intelligence) 
      }
  //Legend here is the first Legendary Ability, Intelligence is the second Legendary Ability
  thirdAspectOptions.push(abilities[g].name) //Name here is the Third Aspect Name
  }
}
}

if (typeof thirdAspectOptions[i] === 'undefined') {
for(g=0; g < abilities.length; g++) {
  if (originChoice === abilities[g].origin  &&
      combatChoice1 === abilities[g].combat1 && 
      combatChoice2 === abilities[g].combat2) {
      if (legendChoice === "Godborn") {
  abilitiesOptions.push(" \n" + abilities[g].legend) 
      }
      else {
  abilitiesOptions.push(" \n" + abilities[g].legend + " \n" + abilities[g].intelligence) 
      }
  //Legend here is the first Legendary Ability, Intelligence is the second Legendary Ability
  thirdAspectOptions.push(abilities[g].name) //Name here is the Third Aspect Name
  }
}
}

var rand4 = thirdAspectOptions[Math.floor(Math.random() * thirdAspectOptions.length)];
var rand5 = abilitiesOptions[Math.floor(Math.random() * abilitiesOptions.length)];


alert ("High Concept: " + rand  + "\nFirst Aspect: " + rand2 + "\nSecond Aspect: " + rand3 + "\nThird Aspect: " + rand4 +  "\nLegendary Abilities: " + rand5)
