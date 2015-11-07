function npcChoice(){
     
//playerNumberVar = 3
//playerLevelVar = 6
//fightTypeVar = 3
//fightDifficultyVar = 1

fightCompute = (((6+playerLevelVar*3)+fightDifficultyVar*3)*playerNumberVar)

     function decision(argument,numberOn){ 
skillBonus = 0
stuntBonus = 0
stuntBonus2 = 0
legendaryBonus = 0
legendaryBonus2 = 0
enemyNumber = 0
fightComputeGroup = argument

while(fightComputeGroup > 0){
     
     if(stuntBonus >= 4+playerLevelVar+playerNumberVar || stuntBonus2 >= 4+playerLevelVar+playerNumberVar){buffChooser = Math.floor(Math.random() * 4+1)}
     else if(legendaryBonus >= 2 || legendaryBonus2 >= 2){buffChooser = Math.floor(Math.random() * 2+1)}
     else if((stuntBonus >= 4+playerLevelVar)&&(legendaryBonus >= 2 || legendaryBonus2 >= 2)){buffChooser = Math.floor(Math.random() * 2+1)} 
     else{buffChooser = Math.floor(Math.random() * 6+1)}     
     
if (buffChooser == 1){skillBonus += 1; fightComputeGroup -= 8; enemyNumber += numberOn};
if (buffChooser == 2){skillBonus += 1; fightComputeGroup -= 8; enemyNumber += numberOn};
if (buffChooser == 3){legendaryBonus += 1; fightComputeGroup -= 4; enemyNumber += numberOn };
if (buffChooser == 4){legendaryBonus2 += 1; fightComputeGroup -= 4; enemyNumber += numberOn };     
if (buffChooser == 5){stuntBonus += 1; fightComputeGroup -= 1; enemyNumber += numberOn }; 
if (buffChooser == 6){stuntBonus2 += 1; fightComputeGroup -= 1; enemyNumber += numberOn }; 
          


}   npcChoiceLoop()}
    

//Setting up a Boss and his Minions     
if (fightTypeVar == 1){
if (playerLevelVar <= 2){legendChoice = "2"}
else if (playerLevelVar <= 4){legendChoice = "3"}
else if (playerLevelVar <= 6){legendChoice = "3"}
     
decision(fightCompute/2,0)
if (playerLevelVar <= 2){legendChoice = "1"}
else if (playerLevelVar <= 4){legendChoice = "2"}
else if (playerLevelVar <= 6){legendChoice = "3"}
decision(fightCompute/2-6 ,1)
}     
    
//Setting up a Crowd of Mobs
else if (fightTypeVar == 2){
if (playerLevelVar <= 2){legendChoice = "1"}
else if (playerLevelVar <= 4){legendChoice = "2"}
else if (playerLevelVar <= 6){legendChoice = "3"}
     
decision(fightCompute/2,1)
decision(fightCompute/2,1 )
}     

//Setting up one big enemy
else if (fightTypeVar == 3){
if (playerLevelVar <= 2){legendChoice = "2"}
else if (playerLevelVar <= 4){legendChoice = "3"}
else if (playerLevelVar <= 6){legendChoice = "3"}
     
decision(fightCompute*0.75,0)
//This sets the Difficulty of the One Big Enemy setting. It is set lower because of the Defense Stats.
}     

 
 
    function npcChoiceLoop() {

//____________________________________________________________________________________________________


//User Input


//____________________________________________________________________________________________________

typeChoice = "nope"

function typeChoiceFunction (){
typeChoicePrompt = prompt("What type of creature is your NPC ? \n1- Titanspawn \n2- Mythborn");
if (typeChoicePrompt == "1") {titanspawnTypeChoiceFunction();
}
else if (typeChoicePrompt == "2") {mythbornTypeChoiceFunction()}
else if (typeChoicePrompt !== "1" && typeChoicePrompt !== "2"){typeChoiceFunction()}
}
         

function titanspawnTypeChoiceFunction() {
typeChoice = "Titanspawn";

     originChoice = prompt("Which Titan is your Titanspawn from ? Possibilities: \n1 - Muspelheim \n2 - Nyx \n3 - Soku no Kumi \n4 - Aether \n5 - Amaunet \n6 - Terra \n7 - Nun \n8 - Death ");
  if (originChoice === "1") {
       subOriginChoice = prompt("What Avatar of Muspelheim is your Titanspawn linked to ?  \n11 - Vrtra  \n12 - Surtr \n13 - Prometheus \n99 - Any");
  }
  else if (originChoice === "2") {
       subOriginChoice = prompt("What Avatar of Nyx is your Titanspawn linked to ?  \n21 - Nott \n22 - Fenrir \n23 - Apep \n99 - Any");
  }
  else if (originChoice === "3") {
       subOriginChoice = prompt("What Avatar of Soku no Kumi is your Titanspawn linked to ? \n31 - Huehueteotl \n32 - Mikaboshi \n33 - Erebus \n99 Any");
  }
  else if (originChoice === "4") {
       subOriginChoice = prompt("What Avatar of Aether is your Titanspawn linked to ? \n41 - Aten\n42 -  Hyperion\n99 -  Any");
  }
  else if (originChoice === "5") {
       subOriginChoice = prompt("What Avatar of Amaunet is your Titanspawn linked to ? \n51 -  Huracan\n52 -  Typhon\n53 -  Ouranos\n99 -  Any");
  }
  else if (originChoice === "6") {
       subOriginChoice = prompt("What Avatar of Terra is your Titanspawn linked to ? Possibilities:\n61 -  Gaia\n62 -  Kur\n63 -  Dis Pater\n64 - Ourea \n65 - Crom Cruach \n99 -  Any");  }
  else if (originChoice === "7") {
       subOriginChoice = prompt("What Avatar of Nun is your Titanspawn linked to ? Possibilities: \n71 Yam \n72 -  Tiamat \n73 -  Abzu \n74 -  Cipactli \n99 -  Any");  }

  else if (originChoice === "8") {
       subOriginChoice = prompt("What Avatar of Death is your Titanspawn linked to ? Possibilities: \n81 - Styx\n82 -  Grim Reaper \n83 -  Camatotz \n99 -  Any");
  }
 
  else {
    titanspawnTypeChoiceFunction();
    return;
}
}
         
function mythbornTypeChoiceFunction(){     
typeChoice = "Mythborn"; 
     originChoice = prompt("Which Race is your Mythborn  ? Possibilities: \n1 - Summer Court of Fairie \n2 - Winter Court of Fairie \n3 - Jade Sea \n4 - Dark Forest \n5 - Shambhala \n6 - Atlantis");
  if (originChoice === "1") {
       subOriginChoice = prompt("What type of Summer Court Fairie Mythborn is your NPC ?  \n11 - Fey  \n12 - Elf \n13 - Small Folk \n14 - Pixie \n15 - Nymph \n98 - Any");
  }
  else if (originChoice === "2") {
       subOriginChoice = prompt("What type of Winter Court Fairie Mythborn is your NPC ?  \n21 - Fey  \n22 - Elf \n23 - Small Folk \n24 - Pixie \n25 - Nymph \n98 - Any");
  }
  else if (originChoice === "3") {
       subOriginChoice = prompt("What type of Jade Sea Mythborn is your NPC ?  \n31 - Western Dragon  \n32 - Eastern Dragon \n33 - Wyvern \n34 - Coatl \n35 - Naga \n98 - Any");
  }
  else if (originChoice === "4") {
       subOriginChoice = prompt("What type of Dark Forest Mythborn is your NPC ?  \n41 - Ent  \n42 - Small Folk \n43 - Garou \n44 - Witch  \n98 - Any");
  }
  else if (originChoice === "5") {
       subOriginChoice = prompt("What type of Shambhala Mythborn is your NPC ?  \n51 - Raksasha  \n52 - Asura \n53 - Nymph \n54 - Naga \n98 - Any");
  }
  else if (originChoice === "6") {
       subOriginChoice = prompt("What type of Atlantis Mythborn is your NPC ?  \n61 - Triton  \n62 - Nymph \n98 - Any");
  }        
}         
         



function behaviorChoiceFunction() {
  behaviorChoice = prompt("What is your NPC's behavior like ? \n 1 - Aggressive \n 2 - Diplomatic");  
    if (behaviorChoice === "1" || behaviorChoice === "2") {
 intelligenceChoiceFunction();
}

else {
    behaviorChoiceFunction();
    return;
}
};

function intelligenceChoiceFunction() {
 intelligenceChoice = prompt("What is your NPC's Intelligence Level ? \n1 - Feral \n2 - Human");
    if (intelligenceChoice === "1" || intelligenceChoice === "2") {
    combat1ChoiceFunction();
}

else {
    intelligenceChoiceFunction();
    return;
}
};

function combat1ChoiceFunction() {
 combatChoice1 = prompt("What is your NPC's combat style' ? \n 1 - Warrior\n 2 - Mage\n 3 - Rogue ");
    if (combatChoice1 === "1" || combatChoice1 === "2" || combatChoice1 === "3") {
    combat2ChoiceFunction();
}

else {
    combat1ChoiceFunction();
    return;
}
};

function combat2ChoiceFunction() {
 combatChoice2 = prompt("What is your NPC's combat speciality' ? \n1 - Support \n2 - Fighter \n3 - Controller \n4 - Tank");
    if (combatChoice2 === "1" || combatChoice2 === "2" || combatChoice2 === "3" || combatChoice2 === "4") {}

else {
    combat2ChoiceFunction();
    return;
}
 combatChoice2Int = parseInt(combatChoice2);
};
typeChoiceFunction();
behaviorChoiceFunction();


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
    
var Stunt = function(description,dangerlevel,stuntType,stuntCombat2) {
  this.description = description;
  this.dangerlevel = dangerlevel;
  this.stuntType = stuntType;
  this.stuntCombat2 = stuntCombat2;    
};
         
         
//____________________________________________________________________________________________________

//Titanspawn High Concept Chooser ----------------------------------------------------------------


//____________________________________________________________________________________________________

var highConcept = [
    // Titanspawn
 agentVoid = new Aspect("Agent of the Void","Titanspawn","3",["32"],["2"],"2","behavior","2","http://i.imgur.com/DnRaFjz.jpg"), 
 ancientWitch = new Aspect("Ancient Witch","Titanspawn","6",["65"],["2"],"2","behavior","2","http://i.imgur.com/IIpthjn.jpg"),
 angel = new Aspect("Knight Angel","Titanspawn","4",["41"],["2","1"],"2","behavior","1","http://i.imgur.com/KVbDBKh.jpg"),
 angelPriest = new Aspect("Angel Priest","Titanspawn","4",["41"],["2","1"],"2","behavior","2","http://i.imgur.com/brXas2u.jpg"),  
 arachnidBroodmother = new Aspect("Arachnid Broodmother","Titanspawn","6",["65"],["2"],"2","behavior","3","http://i.imgur.com/2APpNX1m.jpg"), 
 archAngel = new Aspect("Archangel", "Titanspawn", "4",[ "41"], ["3"],"2","behavior","1","http://i.imgur.com/S9hj0PO.jpg"),
 armoredWight = new Aspect("Armored Wight","Titanspawn","8",["82"],["2"],"1","behavior","1","http://i.imgur.com/6gW6XJw.jpg"),
 ashGiant = new Aspect("Ash Giant","Titanspawn","1",["11"],["3"],"1","behavior","1","http://i.imgur.com/2chmjUal.jpg"),
 batKing = new Aspect("Bat King","Titanspawn","8",["83"],["3"],"2","behavior","3","http://i.imgur.com/J6qYdeBl.jpg"),
 blightScarab = new Aspect("Blight Scarab","Titanspawn","6",["65"],["1","2"],"1","behavior","3","http://i.imgur.com/0KFPydk.jpg"),
 blightsteelColossus = new Aspect("Blightsteel Colossus","Titanspawn","6",["65"],["3","2"],"1","behavior","1","http://i.imgur.com/Q69GOwI.jpg"),
 blightWyrm = new Aspect("Blight Wyrm","Titanspawn","6",["65"],["3","2"],"1","behavior","1","http://i.imgur.com/KRreRap.jpg"),
 bringerDepths = new Aspect("Bringer of the Depths","Titanspawn","7",["71"],["3","2"],"2","behavior","2","http://i.imgur.com/x7XYmT2.jpg"),
 bringerEclipse = new Aspect("Bringer of Eclipse","Titanspawn","2",["21"],["3"],"2","behavior","2","http://i.imgur.com/qOxA24a.jpg"), 
 burntElf = new Aspect("Burnt Elf","Titanspawn","1",["12"],["1","2"],"2","behavior","3","http://i.imgur.com/ScsuifE.jpg"),
 chainedSoul = new Aspect("Chained Soul","Titanspawn","8",["81"],["1","2"],"1","behavior","2","http://i.imgur.com/MVbhgr7.png"),
 cherubAngel = new Aspect("Cherub", "Titanspawn", "4", ["41"], ["1"],"2","behavior","2","http://i.imgur.com/NxEFxT5.jpg"),
 clockworkGnome = new Aspect("Clockwork Gnome","Titanspawn","6",["63"],["1"],"2","behavior","1","http://i.imgur.com/61HINJL.jpg"),
 clockWorkGnome = new Aspect("Clockwork Gnome","Titanspawn","1",["13"],["1"],"2","behavior","1","http://i.imgur.com/61HINJL.jpg"),
 cloudBreaker = new Aspect("Cloud Breaker","Titanspawn","5",["52"],["3"],"2","behavior","1","http://i.imgur.com/9DKIlZZ.jpg"),
 cloudDjinn = new Aspect("Cloud Djinn","Titanspawn","5",["53"],["2","3"],"2","behavior","1","http://i.imgur.com/TOtMBMR.jpg"),
 corpseSpider = new Aspect("Corpse Spider","Titanspawn","8",["83"],["1"],"1","behavior","1","http://i.imgur.com/19vnxLK.jpg"),
 darkQueen = new Aspect("Dark Queen","Titanspawn","2",["21","23"],["3"],"2","behavior","1","http://i.imgur.com/k5BQY0O.jpg"),
 darkSilencer = new Aspect("Dark Silencer","Titanspawn","3",["31"],["2"],"2","behavior","2","http://i.imgur.com/aHAPoov.jpg"),
 deepOne = new Aspect("Deep One","Titanspawn","7",["73"],["2"],"1","behavior","1","http://i.imgur.com/g65FPvi.jpg"),    
 depthsPriest = new Aspect("Priest of the Depths","Titanspawn","7",["71"],["2"],"2","behavior","2","http://i.imgur.com/beJkyqO.jpg"),
 desertSnake = new Aspect("Desert Snake","Titanspawn","4",["42"],["1"],"1","behavior","1","http://i.imgur.com/NlocRHB.png"), 
 djilluminatus = new Aspect("Djinn Illuminatus","Titanspawn","4",["41"],["2","3"],"2","behavior","2","http://i.imgur.com/adypqZz.jpg"),  
 drownedKeeper = new Aspect("Keeper of the Drowned","Titanspawn","7",["73"],["1"],"2","behavior","1","http://i.imgur.com/IZdInGS.jpg"),    
 dryadAshes = new Aspect("Dryad of Ashes","Titanspawn","1",["12"],["1"],"2","behavior","2","http://i.imgur.com/lcUN7j6.jpg"),
 facelessLegionnaire = new Aspect("Faceless Legionnaire","Titanspawn","3",["31"],["1"],"2","behavior","1","http://i.imgur.com/uwizIO6.jpg"),
 fenrisAlpha = new Aspect("Fenris Alpha", "Titanspawn", "2", ["22"], ["3","2"],"2","behavior","1","http://i.imgur.com/wnyudvk.jpg"),
 fenrisGiant = new Aspect("Fenris Giant","Titanspawn","2",["22"],["3","2"],"1","behavior","1","http://i.imgur.com/tdC6osc.jpg"),
 fenrisWolf = new Aspect("Fenris Wolf","Titanspawn","2",["22"],["1","2"],"1","behavior","3","http://i.imgur.com/Cxl9cvM.jpg"),
 festerhideBoar = new Aspect("Festerhide Boar","Titanspawn","6",["65"],["1","2"],"1","http://i.imgur.com/ee5c2xL.jpg"),
 fireAnt = new Aspect("Fire Ant","Titanspawn","1",["13"],["1"],"1","behavior","3","http://i.imgur.com/s1HeQz8.png"),
 fireBird = new Aspect("Fire Bird","Titanspawn","1",["12"],["1"],"1","behavior","1","http://i.imgur.com/uQCV2Ja.jpg"),
 fireColossus = new Aspect("Fire Colossus","Titanspawn","1",["13"],["3"],"1","behavior","1","http://i.imgur.com/4QvgyCw.jpg"),
 fireGiant = new Aspect("Fire Giant", "Titanspawn", "1", ["12"],["3","2"],"2","behavior","1","http://imgur.com/NOT7aEY.jpg"),
 fireLord = new Aspect("Fire Lord","Titanspawn","1",["12"],["3"],"2","behavior","2","http://i.imgur.com/Zug0tO7.jpg"),
 fireRevenant = new Aspect("Fire Revenant","Titanspawn","1",["12"],["2"],"2","behavior","2","http://i.imgur.com/r5DyVWO.jpg"),    
 fireWyrm = new Aspect("Fire Wyrm", "Titanspawn", "1", ["12"],["2","3"],"1","behavior","1"),
 fomorian = new Aspect("Fomorian","Titanspawn","6",["65"],["1"],"2","behavior","1","http://i.imgur.com/t5jfTfs.jpg"),
 fomorianChieftain = new Aspect("Fomorian Chieftain","Titanspawn","6",["65"],["2"],"2","behavior","1","http://i.imgur.com/cWUrgVF.jpg"),
 fomorianHound = new Aspect("Fomorian Hound","Titanspawn","6",["65"],["1"],"1","behavior","3","http://i.imgur.com/lKa51EE.jpg"),    
 fomorianOgre = new Aspect("Fomorian Ogre","Titanspawn","6",["65"],["3"],"2","behavior","1","http://i.imgur.com/Lpfz0CZ.jpg"),    
 fomorianWarlock = new Aspect("Fomorian Warlock","Titanspawn","6",["65"],["2"],"2","behavior","1","http://i.imgur.com/bzS9Wpf.jpg"),
 forestGiant = new Aspect("Forest Giant","Titanspawn","6",["61"],["3","2"],"2","behavior","1","http://i.imgur.com/wGM3H2q.jpg"),
 forestSoulstealer = new Aspect("Forest Soulstealer","Titanspawn","8",["81"],["2"],"1","behavior","2","http://i.imgur.com/giFh9jh.jpg"),    
 frogElder = new Aspect("Frog Elder","Titanspawn","6",["61"],["1","2"],"2","behavior","2","http://i.imgur.com/iZ8e1CF.jpg"),
 garmSpawn = new Aspect("Garm Spawn","Titanspawn","1",["12"],["1"],"1","behavior","1","http://i.imgur.com/zzRa39l.jpg"),    
 gemstoneGolem = new Aspect("Gemstone Golem","Titanspawn","6",["64"],["3","2"],"1","behavior","1","http://i.imgur.com/xZYlvx0.jpg"),
 ghoul = new Aspect("Ghoul","Titanspawn","8",["83"],["1","2"],"1","behavior","1","http://i.imgur.com/GArrLAM.jpg"),    
 giantCentipede = new Aspect("Giant Centipede","Titanspawn","6",["65"],["2"],"1","behavior","1","http://i.imgur.com/ZgPBeOf.jpg"),
 giantRat = new Aspect("Giant Rat","Titanspawn","6",["65"],["1"],"1","behavior","1","http://i.imgur.com/MmWJhbk.jpg"),
 graniteGolem = new Aspect("Granite Golem","Titanspawn","6",["64"],["2","3"],"1","behavior","1","http://i.imgur.com/PuVZbml.jpg"),
 hopeEater = new Aspect("Hope Eater","Titanspawn","2","21",["2"],"1","behavior","2","http://i.imgur.com/xD3KDRG.jpg"),    
 lampDjinn = new Aspect("Lamp Djinn","Titanspawn","4",["42"],["1"],"2","behavior","2","http://i.imgur.com/tQ3VBYm.png"),
 lavaWyrm = new Aspect("Lava Wyrm","Titanspawn","1",["12","11"],["3","2"],"1","behavior","2","http://i.imgur.com/9UC0iDn.jpg"),
 lavaLegionnaire = new Aspect("Lava Legionnaire","Titanspawn","1",["11"],["1","2"],"1","behavior","1","http://i.imgur.com/zJWcnO7.jpg"),
 lesserPhoenix = new Aspect ("Lesser Phoenix","Titanspawn","4",["41"],["1","2"],"1","behavior","2","http://i.imgur.com/O4FF87t.jpg"),
 lightningCoatl = new Aspect("Lightning Coatl","Titanspawn","5",["51"],["3","2"],"2","behavior","2","http://i.imgur.com/IcSsvbJ.jpg"),
 lightPhoenix = new Aspect("Light Phoenix","Titanspawn","4",["41"],["3"],"1","behavior","2","http://i.imgur.com/i88n5m9.jpg"),
 livingAvalanche = new Aspect("Living Avalanche","Titanspawn","6",["64"],["3"],"1","behavior","2","http://i.imgur.com/0Uss89H.jpg"),
 livingRock = new Aspect("Living Rock","Titanspawn","6",["64"],["1"],"1","behavior","1","http://i.imgur.com/hLkwoXK.jpg"),
 lurkingNightmare = new Aspect("Lurking Nightmare","Titanspawn","2",["22"],["2"],"1","behavior","2","http://i.imgur.com/WXGcGud.jpg"),    
 magmaCentaur = new Aspect("Magma Centaur","Titanspawn","1",["13"],["1"],"2","behavior","3","http://i.imgur.com/Ft3kTC1.jpg"),    
 magmaSpewer = new Aspect("Magma Spewer","Titanspawn","1",["12"],["1"],"1","behavior","2","http://i.imgur.com/XDgXXTZ.jpg"),    
 midnightHorror = new Aspect("Midnight Horror","Titanspawn","2",["21"],["2","1"],"1","behavior","2","http://i.imgur.com/BQYxMsV.jpg"),
 nightbringer = new Aspect("Nightbringer","Titanspawn","2",["21"],["3"],"2","behavior","2","http://i.imgur.com/LXaTRtk.jpg"),    
 nightDragon = new Aspect("Night Dragon","Titanspawn","2",["23"],["2","3"],"2","behavior","2","http://i.imgur.com/DiPKaVJ.jpg"),
 nightGiant = new Aspect("Night Giant","Titanspawn","2",["21"],["3"],"2","behavior","1","http://i.imgur.com/Nw8ms5d.jpg"),
 nightTroll = new Aspect("Night Troll", "Titanspawn", "2", ["21"], ["1","2"],"2","behavior","1","http://i.imgur.com/b2Ak1bC.jpg"),
 nightWyrm = new Aspect("Night Wyrm","Titanspawn","2",["23"],["3","2"],"1","behavior","1","http://i.imgur.com/VeL4N81.jpg"),
 orthosSpawn = new Aspect("Orthos Spawn","Titanspawn","6",["61"],["1","2"],"1","behavior","1","http://i.imgur.com/Lj6xNZ6.jpg"),
 runicGuardian = new Aspect("Runic Guardian","Titanspawn","6",["62"],["2"],"2","behavior","1","http://i.imgur.com/qg8pAwX.jpg"),
 sandDjinn = new Aspect("Sand Djinn","Titanspawn","4",["42"],["2","3"], "1","behavior","1","http://i.imgur.com/XVGRtx3.jpg"),
 sandWyrm = new Aspect("Sand Wyrm","Titanspawn","4",["42"],["1","2"],"1","behavior","1","http://i.imgur.com/URi7YQt.jpg"),
 salamander = new Aspect("Salamander","Titanspawn","1",["11"],["1","2"],"2","behavior","2","http://i.imgur.com/5KPNuzG.jpg"), 
 savageChimera = new Aspect("Savage Chimera","Titanspawn","6",["61"],["2"],"1","behavior","1","http://i.imgur.com/zBe9FIH.jpg"),
 seaDjinn = new Aspect("Sea Djinn","Titanspawn","7",["72"],["2","3"],"2","behavior","1","http://i.imgur.com/ZRZoQ8e.png"),
 seaSerpent = new Aspect("Sea Serpent","Titanspawn","7",["71"],["2","3"],"1","behavior","1","http://i.imgur.com/KqlrRh2.jpg"),    
 seaWitch = new Aspect("Sea Witch","Titanspawn","7",["74"],["2","1"],"2","1","behavior","1","http://i.imgur.com/e2PmzPe.jpg"),
 seerAngel = new Aspect("Harbinger of Aten", "Titanspawn", "4", ["41"], ["3","2"],"2","behavior","2","http://i.imgur.com/EtjtCdu.jpg"),
 shadeWidow = new Aspect("Shade Widow","Titanspawn","3",["32"],["3","2"],"1","behavior","3","http://i.imgur.com/x3wYmvw.jpg"),
 shadowFiend = new Aspect("Shadow Fiend","Titanspawn","3",["32"],["3","2"],"2","behavior","3","http://i.imgur.com/yvx7qo7.jpg"),    
 skeleton = new Aspect("Skeleton","Titanspawn","8",["82"],["1"],"1","behavior","1","http://i.imgur.com/GndSLar.jpg"),
 skeletonWarlock = new Aspect("Skeleton Warlock","Titanspawn","8",["82"],["1"],"2","behavior","1","http://i.imgur.com/omxMk0d.jpg"),
 spawnAbyss = new Aspect("Spawn of the Abyss","Titanspawn","7",["73"],["2"],"1","behavior","1","http://i.imgur.com/NNDxxLI.jpg"),
 soulReaper = new Aspect("Soul Reaper","Titanspawn","8",["82"],["2"],"2","behavior","1","http://i.imgur.com/FqQoOzE.jpg"),
 soulSearer = new Aspect("Soul Searer","Titanspawn","8",["82"],["3","2"],"1","behavior","2","http://i.imgur.com/kxkMaW8.jpg"),
 steelcladGiant = new Aspect("Steelclad Giant","Titanspawn","6",["63"],["3","2"],"2","behavior","1","http://i.imgur.com/q50wOJu.jpg"),
 steelCoatl = new Aspect("Steel Coatl","Titanspawn","5",["51"],["2"],"2","behavior","1","http://i.imgur.com/wtEnkkm.jpg"),
 steelSerpent = new Aspect("Steel Serpent","Titanspawn","6",["63"],["1","2"],"1","behavior","3","http://i.imgur.com/D6Sd5Mf.jpg"),
 stitchedHorror = new Aspect("Stitched Horror","Titanspawn","3",["31"],["2"],"1","behavior","1","http://i.imgur.com/TeJEYrH.jpg"),
 stoneColossus = new Aspect("Stone Colossus","Titanspawn","6",["64"],["2"],"","behavior","1","http://i.imgur.com/rMuOrWP.jpg"),    
 stoneDragon = new Aspect("Stone Dragon","Titanspawn","6",["62"],["3","2"],"2","behavior","1","http://i.imgur.com/Ra20tJ6.png"), 
 stormbornMyrmidon = new Aspect("Stormborn Myrmidon","Titanspawn","5",["52"],["2","3"],"2","behavior","1","http://i.imgur.com/0EVug2Z.jpg"),
 sunDrake = new Aspect("Sun Drake","Titanspawn","4",["41"],["3","2"],"2","behavior","behavior","2","http://i.imgur.com/x6yjUl8.jpg"),
 surtrJuggernaut = new Aspect("Surtr Juggernaut","Titanspawn","1",["12"],["3"],"2","behavior","1","http://i.imgur.com/NOT7aEY.jpg"),
 swampHulk = new Aspect("Swamp Hulk","Titanspawn","6",["61"],["2","3"],"1","behavior","1","http://i.imgur.com/5XFk0gT.jpg"),
 thunderDragon = new Aspect("Thunder Dragon","Titanspawn","5",["51"],["3","2"],"2","behavior","1","http://i.imgur.com/rrk7dTl.jpg"),  
 tideSpoutTyrant = new Aspect("Tidespout Tyrant","Titanspawn","7",["71"],["2","3"],"2","http://i.imgur.com/xvhPIhR.jpg"),
 twistedSoulcursed = new Aspect("Twisted Soulcursed","Titanspawn","8",["82"],["3","2"],"1","behavior","2","http://i.imgur.com/uuMetIe.jpg"), 
 undeadKing = new Aspect("Undead King","Titanspawn","8",["81"],["2","3"],"2","behavior","1","http://i.imgur.com/aYufjEf.jpg"),
 valkyrie = new Aspect("Valkyrie","Titanspawn","8",["81"],["2"],"2","behavior","1","http://i.imgur.com/1CvhuV0.jpg"),
 volcanoCyclops = new Aspect("Volcano Cyclops","Titanspawn","1",["13"],["2","1"],"2","behavior","1","http://i.imgur.com/GKTE8TB.jpg"),
 warpedCockRoach = new Aspect("Warped Cockroach","Titanspawn","6",["65"],["1"],"1","behavior","1","http://i.imgur.com/UNNxvNm.jpg"),
 worldBurner = new Aspect("World Burner","Titanspawn","1",["11"],["3"],"2","behavior","2","http://i.imgur.com/xYxHR10.jpg"),

     
 
     
    // Mythborn  

 darkElfSoldier = new Aspect("Dark Elf Soldier","Mythborn","1",["22"],["1","2"],"2"),
 summerCourtNoble = new Aspect("Summer Court Noble","Mythborn","1",["21"],["2","3"],"2"),
 winterCourtNoble = new Aspect("Winter Court Noble","Mythborn","1",["21"],["2","3"],"2"),    
 mabChosen = new Aspect("Mab's Chosen","Mythborn","1",["22"],["2","3"],"2"),
 titaniaChosen = new Aspect("Titania's Chosen","Mythborn","2",["12"],["1","2"],"2"),
 centaurHunter = new Aspect("Centaur Hunter","Mythborn","4",["43"],["1","2"],"2"), 
 blackKnight = new Aspect("Black Knight","Mythborn","2",["22"],["2"],"2"),   
 minotaur = new Aspect("Minautor","Mythborn","4",["43"],["2"],"2"),
 shadowUnicorn = new Aspect("Shadow Unicorn","Mythborn","2",["21"],["2"],"1"),
 sSprite = new Aspect("Sprite","Mythborn","1",["14"],["1"],"1"),
 timberWolf = new Aspect("Timber Wolf","Mythborn","4",["43"],["1"],"1"),
 diamondFairy = new Aspect("Diamond Fairy","Mythborn","2",["21"],["2"],"2"),
 willowFairy = new Aspect("Willow Fairy","Mythborn","1",["11"],["1"],"2"),
 twoHeadedDragon = new Aspect("Two-Headed Dragon","Mythborn","3",["33"],["2","3"],"2"),
 furnaceWhelp = new Aspect("Furnace Whelp","Mythborn","3",["31"],["1","2"],"1"),  
 brimstoneDragon = new Aspect("Brimstone Dragon","Mythborn","3",["31"],["2","3"],"2"),
    
    
    /* name = new Aspect("name","Mythborn","origin","subOrigin","legend","intelligence","behavior","combat1"),*/

]
    
   


var highConceptOptions = [];

for(i=0; i < highConcept.length; i++) {
   if(
    (legendChoice === highConcept[i].legend[0] || legendChoice === highConcept[i].legend[1] || legendChoice === highConcept[i].legend[2]) &&
     typeChoice === highConcept[i].type &&
     originChoice === highConcept[i].origin &&
    (subOriginChoice === highConcept[i].subOrigin[0] || subOriginChoice === highConcept[i].subOrigin[1] || subOriginChoice === highConcept[i].subOrigin[2])  &&
    intelligenceChoice === highConcept[i].intelligence)
  {
      highConceptOptions.push(highConcept[i])
  }
  else if (typeChoice === highConcept[i].type && 
   typeChoice === highConcept[i].type &&
   originChoice === highConcept[i].origin &&
   subOriginChoice === "99" && 
   (legendChoice === highConcept[i].legend[0] || legendChoice === highConcept[i].legend[1] || legendChoice === highConcept[i].legend[2]) &&
   (intelligenceChoice === highConcept[i].intelligence))
  {
   highConceptOptions.push(highConcept[i])
  }
};
/*
if (typeof highConceptOptions[0] === 'undefined') {
for(i=0; i < highConcept.length; i++) {
  if (
    typeChoice === highConcept[i].type && 
    originChoice === highConcept[i].origin &&
   (legendChoice === highConcept[i].legend[0] || legendChoice === highConcept[i].legend[1] || legendChoice === highConcept[i].legend[2]) &&
    intelligenceChoice === highConcept[i].intelligence) 
  {
      highConceptOptions.push(highConcept[i])
  }
}
};
*/

// _______________________________________
    
    
// Default Titanspawn  -----------------------------------
    

// _______________________________________

 
if (typeof highConceptOptions[0] === 'undefined') {
  
    
    // Titans Options
if (typeChoice === "Titanspawn" && originChoice === "4") {
     originDefault = ["Sun", "Sand", "Light"]
}
else if (typeChoice === "Titanspawn" && originChoice === "2") {
     originDefault = ["Night", "Midnight", "Moonlit", "Nightmare"]
}
else if (typeChoice === "Titanspawn" && originChoice === "8") {
     originDefault = ["Death", "Soul Eating"]
}
else if (typeChoice === "Titanspawn" && originChoice === "3") {
     originDefault = ["Darkness", "Faceless", "Silent"]
}
else if (typeChoice === "Titanspawn" && originChoice === "7") {
     originDefault = ["Drowned", "Naga", "Lizard"]
}
else if (typeChoice === "Titanspawn" && originChoice === "5") {
     originDefault = ["Wind", "Cloud", "Lightning"]
}
else if (typeChoice === "Titanspawn" && originChoice === "1") {
     originDefault = ["Lava", "Fire", "Ash"]
}
else if (typeChoice === "Titanspawn" && originChoice === "6") {
     originDefault = ["Swamp", "Rock", "Stone","Forest","Jungle","Giant"]
}

// Combat 1 Options
    if (intelligenceChoice === "2") {
if (typeChoice === "Titanspawn" && combatChoice1 === "1") {
     combat1Default = ["Soldier","Legionnaire","Footsoldier","Cultist"]
}
else if (typeChoice === "Titanspawn" && combatChoice1 === "2") {
     combat1Default = ["Sorcerer", "Prophet", "Worshipper"]
}
else if (typeChoice === "Titanspawn" && combatChoice1 === "3") {
     combat1Default = ["Scout", "Archer", "Assassin"]
}
    }
    
else {
if (typeChoice === "Titanspawn" && combatChoice1 === "1") {
     combat1Default = ["Beast","Monster","Creature","Colossus"]
}
else if (typeChoice === "Titanspawn" && combatChoice1 === "2") {
     combat1Default = ["Invoker", "Primordial", "Servant"]
}
else if (typeChoice === "Titanspawn" && combatChoice1 === "3") {
     combat1Default = ["Lurker", "Creeper", "Hunter"]    
}
     
     
     
}
}
    
    // Mythborn Options

     
if (typeChoice === "Mythborn" && originChoice === "2") {
    if (subOriginChoice === "21") { originDefault = ["Winter Fey"]}
    else if (subOriginChoice === "22") { originDefault = ["Svartalfheim", "Dark Elf"]}
    else if (subOriginChoice === "23") { originDefault = ["Leprechaun", "Ice Korrigan", "Korrigan","Gnome"]}
    else if (subOriginChoice === "24") { originDefault = ["Pixie"]}
    else if (subOriginChoice === "25") { originDefault = ["Stream Nymph", "Pine Dryad", "Frozen Dryad"]}
    else if (subOriginChoice === "99") { originDefault = ["Svartalfheim", "Dark Elf","Leprechaun", "Ice Korrigan", "Korrigan","Gnome","Pixie","Stream Nymph", "Pine Dryad", "Frozen Dryad"]}
}
else if (typeChoice === "Mythborn" && originChoice === "1") {
    if (subOriginChoice === "11") { originDefault = ["Summer Fey"]}
    else if (subOriginChoice === "12") { originDefault = ["Alfheim", "Light Elf"]}
    else if (subOriginChoice === "13") { originDefault = ["Leprechaun", "Summer Korrigan", "Korrigan","Gnome"]}
    else if (subOriginChoice === "14") { originDefault = ["Pixie"]}
    else if (subOriginChoice === "15") { originDefault = ["Vine Nymph", "Jungle Dryad", "Spring Dryad"]}
    else if (subOriginChoice === "98") { originDefault = ["Alfheim", "Light Elf","Leprechaun", "Summer Korrigan", "Korrigan","Gnome","Pixie","Vine Nymph", "Jungle Dryad", "Spring Dryad"]}
}
    
else if (typeChoice === "Mythborn" && originChoice === "3") {
    if (subOriginChoice === "31") { originDefault = ["Moutain Dragon","Forest Dragon","Cave Dragon"]}
    else if (subOriginChoice === "32") { originDefault = ["River Dragon", "Chinese Dragon"]}
    else if (subOriginChoice === "33") { originDefault = ["Wyvern"]}
    else if (subOriginChoice === "34") { originDefault = ["Coatl"]}
    else if (subOriginChoice === "35") { originDefault = ["Naga"]}
    else if (subOriginChoice === "99") { originDefault = ["Moutain Dragon","Forest Dragon","Cave Dragon","River Dragon", "Chinese Dragon","Wyvern","Coatl"]}
 
}
else if (typeChoice === "Mythborn" && originChoice === "4") {
    if (subOriginChoice === "41") { originDefault = ["Ent"]}
    else if (subOriginChoice === "42") { originDefault = ["Leprechaun", "Korrigan","Gnome"]}
    else if (subOriginChoice === "43") { originDefault = ["Loup-Garou","Were-Boar","Were-Spider","Were-Eagle","Were-Snake","Were-Bear"]}
    else if (subOriginChoice === "44") { originDefault = ["Hag"]}
    else if (subOriginChoice === "99") { originDefault = ["Leprechaun", "Korrigan","Gnome","Loup-Garou","Were-Boar","Were-Spider","Were-Eagle","Were-Snake","Were-Bear","Hag"]}
 
}
else if (typeChoice === "Mythborn" && originChoice === "5") {
    if (subOriginChoice === "51") { originDefault = ["Raksasha"]}
    else if (subOriginChoice === "52") { originDefault = ["Asura"]}
    else if (subOriginChoice === "53") { originDefault = ["Dryad","Nymph"]}
    else if (subOriginChoice === "54") { originDefault = ["Naga"]}
    else if (subOriginChoice === "99") { originDefault = ["Naga","Raksasha","Asura","Dryad","Nymph"]}
}
else if (typeChoice === "Mythborn" && originChoice === "6") {
    if (subOriginChoice === "61") { originDefault = ["Triton"]}
    else if (subOriginChoice === "52") { originDefault = ["Sea Nymph"]}
    else if (subOriginChoice === "99") { originDefault = ["Naga","Raksasha","Asura","Dryad","Nymph"]}
}     
          
// Combat 1 Options
    if (intelligenceChoice === "2") {
if (typeChoice === "Mythborn" && combatChoice1 === "1") {
     combat1Default = ["Fighter","Guard","Warrior","Brawler"]
}
else if (typeChoice === "Mythborn" && combatChoice1 === "2") {
     combat1Default = ["Sorcerer", "Mage", "Druid"]
}
else if (typeChoice === "Mythborn" && combatChoice1 === "3") {
     combat1Default = ["Scout", "Archer", "Assassin"]
}
    }
    
else {
if (typeChoice === "Mythborn" && combatChoice1 === "1") {
     combat1Default = ["Beast","Monster","Creature"]
}
else if (typeChoice === "Mythborn" && combatChoice1 === "2") {
     combat1Default = ["Wildcaller", "Mythcaller"]
}
else if (typeChoice === "Mythborn" && combatChoice1 === "3") {
     combat1Default = ["Lurker", "Creeper", "Hunter"]    
}    
    

    
} 
if (typeof highConceptOptions[0] === 'undefined') { 
combat1DefaultRandom = combat1Default[Math.floor(Math.random() * combat1Default.length)];
originDefaultRandom = originDefault[Math.floor(Math.random() * originDefault.length)];
defaultOriginAspect = new Aspect(originDefaultRandom + " " + combat1DefaultRandom,"0","0",["31"],["2","3"],"2"),     
highConceptOptions.push(defaultOriginAspect)        
};
  
 
var randHighConcept = Math.floor(Math.random() * highConceptOptions.length)
var imageLink = highConceptOptions[randHighConcept].combat2;
   
         if (enemyNumber <= 0) {var rand = highConceptOptions[randHighConcept].name}
         else{var rand = highConceptOptions[randHighConcept].name + " (" + enemyNumber + ")"} ;


//____________________________________________________________________________________________________


//First Aspect Chooser ---------------------------------------------------------------------------


//____________________________________________________________________________________________________


var aspect1 = [
 nightAspects = new Aspect([
     "Stellar Light",
     "Full Moon",
     "Blind",
     "Night Stalker",
     "Born of the Darkness",
     "Hunger of Night",
     "Fear of the Light",
     "Behind You",
     "Child Snatcher",
     "He Comes at Night"], "Titanspawn", "2"),
 fireAspects = new Aspect([
     "Pyre Fanatic",
     "Walking Blaze",
     "Ash Maker",
     "Self Combustion",
     "Living Bomb",
     "I am the Fire in Firearms",
     "Mad Inventor",
     "Hatred of Water",
     "Walking Volcano"], "Titanspawn", "1"),
 lightAspects = new Aspect([
     "Divine Whiteness",
     "Light Cannot be Stopped",
     "A Light Into the Darkness",
     "Unworthy of My Sight",
     "Bright-Eyed Followers",
     "Sear Their Eyes",
     "Fervorous Faith",
     "Light Bringer",
     "Bright Presence"], "Titanspawn", "4"),
 waterAspects = new Aspect([
     "Drowning is Sacred",
     "To The Depths",
     "Amphibian",
     "Freezing Heart",
     "Drown Them All"],"Titanspawn","7"),  
 shadowAspects = new Aspect([
     "Extinguish the Light",
     "Reign Through Fear",
     "Shadow on the Land",
     "Shadow Affinity"],"Titanspawn","3"),
 skyAspects = new Aspect([
     "The Skies are Mine",
     "One With the Sky"],"Titanspawn","5"), 
 earthAspects = new Aspect([
     "Rotting Presence",
     "Symbiosis",
     "Born in the Jungle",
     "One With Nature",
     "Nature Lover",
     "Insatiable Hunger",
     "Hard as a Rock",
     "At One with the Land",
     "Underground Native",
     "Walking Factory",
     "We are Legion",
     "Horrid Stench"],"Titanspawn","6"),
 deathAspects = new Aspect([
     "Cold Embrace",
     "Feast of Souls"],"Titanspawn","8"),
 
 fairieSummerAspects = new Aspect([
     "Warm Embrace",
     "Summer is Coming",
     "Serve the Queen",
     "Worshipper of the Day",
     "Trickster",
     "Burning Touch",
     "Earthly Beauty",
     "Jungle Child",
     "Child Snatcher",
     "Walk Under the Sun"], "Mythborn", "1"), 
  fairieWInterAspects = new Aspect([
     "Cold Embrace",
     "Winter is Coming",
     "Serve the Queen",
     "Worshipper of the Night",
     "Trickster",
     "Cold Touch",
     "Ethereal Beauty",
     "Snow Lover",
     "Child Snatcher",
     "He Comes at Night"], "Mythborn", "2"),      
 jadeSeaAspects = new Aspect([
     "Fire Breath",
     "Frost Breath",
     "Water Mastery",
     "Sky Mastery",
     "The Master",
     "Tyrant",
     "Arrogant",
     "Wise",
     "Poison Breath"], "Mythborn", "3"),  
 darkForestAspects = new Aspect([
     "Creepy",
     "One with the Earth",
     "Attuned to the Forest",
     "Entling Servants",
     "Care for the Community",
     "Animal Companions"], "Mythborn", "4"),      
 shambhalaAspects = new Aspect([
     "Wise",
     "Karmic Obsession",
     "Well Connected",
     "Enlightened Allies",
     "Cultist Servants",
     "Respect for the Gods"], "Mythborn", "5"),      
    
// name = new Aspect("name","type","origin"),
]

var aspect1Options = [];

for(i=0; i < aspect1.length; i++) {
  if (typeChoice === aspect1[i].type && 
      originChoice === aspect1[i].origin) {
  var chosenAspect = aspect1[i].name[Math.floor(Math.random() * aspect1[i].name.length)];
  aspect1Options.push(chosenAspect)
};
};

var rand2 = aspect1Options[Math.floor(Math.random() * aspect1Options.length)];

//____________________________________________________________________________________________________


//Second Aspect Chooser ---------------------------------------------------------------------------


//____________________________________________________________________________________________________

var aspect2 = [
 sadisticGenius = new Aspect("Sadistic Genius","type","origin","subOrigin","legend","2","1"),
 berserkerBrute = new Aspect("Berserker Brute","type","origin","subOrigin","legend","1","1"),
 honorable1 = new Aspect("Honorable Beast","type","origin","subOrigin","legend","2","2"),
 wiseBeast = new Aspect("Wise Beast","type","origin","subOrigin","legend","1","2"),
 sadisticBrute = new Aspect("Sadistic Brute","type","origin","subOrigin","legend","1","1"),
 patientPolitician = new Aspect("Patient Politician","type","origin","subOrigin","legend","2","2"),
 reasonCivilized = new Aspect("No Reason Why We Can't Be Civilized", "type","origin","subOrigin","legend","2","2"),
 subteltyPower = new Aspect("Subtlety Is Its Own Power","type","origin","subOrigin","legend","2","2)"),
 justBusiness = new Aspect("Nothing Personal, It's Just Business","type","origin","subOrigin","legend","2","2"),
 strongRule = new Aspect("Only the Strong Are Fit to Rule","type","origin","subOrigin","legend","2","1"),
 politicsGame = new Aspect("Politics Is My Favorite Game","type","origin","subOrigin","legend","2","Manipulative"),
 speakSoftly = new Aspect("Speak Softly but Carry a Big Stick","type","origin","subOrigin","legend","2","2"),
 upholdLaw = new Aspect("Uphold the Law","type","origin","subOrigin","legend","2","2"),
 mercyCruelty = new Aspect("No Mercy, but No Cruelty","type","origin","subOrigin","legend","2","1"),
 worthyRespected = new Aspect("A Worthy Foe Should Be Respected","type","origin","subOrigin","legend","2","1"),
 theAlpha = new Aspect("The Alpha","type","origin","subOrigin","legend","1","1"),
 theElder = new Aspect("The Elder","type","origin","subOrigin","legend","1","2"),
 longTermPerspective = new Aspect("Long Term Perspective","type","origin","subOrigin","legend","2","2"),
 penBeforeSword = new Aspect("The Pen is Mightier","type","origin","subOrigin","legend","2","2"),
 greatEmpathy = new Aspect("Great Empathy","type","origin","subOrigin","legend","2","2"),
 tyrant = new Aspect("Tyrant","type","origin","subOrigin","legend","2","1"),
 beastTyrant = new Aspect("Beast Tyrant","type","origin","subOrigin","legend","1","1"),
 leaderofMen = new Aspect("Leader of Men","type","origin","subOrigin","legend","2","2"),
 general = new Aspect("General","type","origin","subOrigin","legend","2","1"),
 powerHungry = new Aspect("Power Hungry","type","origin","subOrigin","legend","2","2"),
 gentleBeast = new Aspect("Gentle Beast","type","origin","subOrigin","legend","1","2"),
 bully = new Aspect("Bully","type","origin","subOrigin","legend","2","1"),
 neverSurrender = new Aspect("Never Surrender","type","originChoice","subOriginChoice","legendChoice","2","1"),
 carefuLBeast = new Aspect("Careful Beast","type","origin","subOrigin","legend","1","2"),
 outForMyself = new Aspect("Out for Myself","type","originChoice","subOriginChoice","legendChoice","2","1"),
 bestThereIs = new Aspect("The Best There Is","type","originChoice","subOriginChoice","legendChoice","2","2"),
 alwaysAngry = new Aspect("I'm Always Angry","type","originChoice","subOriginChoice","legendChoice","2","1"),


  
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
abilityOne = legendaryBonus
abilityTwo = legendaryBonus2        



if (legendChoice === "3") {
     abilityOne += 3
     abilityTwo += 2
     skillAbilityOne =  3
     stuntBonus += 3
}

else if (legendChoice === "2") {
     abilityOne += 2
     abilityTwo += 1
     skillAbilityOne =  2
     stuntBonus += 2
}

else if (legendChoice === "1") {
     abilityOne += 1 + legendaryBonus2
     skillAbilityOne =  1
     stuntBonus += 1
}


var abilities = [ 

     
     //_______________________________________________________________________________
     //Titanspawn
     //________________________________________________________________________________
    //Light
sunWarden = new Aspect("Sun Warden","Titanspawn","4","42","Invokation: Light - Sun (" + abilityOne + ")","Epic Physique (" + abilityTwo + ")","behavior","1","2"),
sunPriest = new Aspect("Sun Priest","Titanspawn","4","41","Invokation: Light - Sun (" + abilityOne + ")","Heku - Riot (" + abilityTwo + ")","behavior","2","3"),
crowdDazzler = new Aspect("Crowd Dazzler","Titanspawn","4","41","Heku - Riot (" + abilityOne + ")","Invokation: Light - Illumination (" + abilityTwo + ")","behavior","2","3"),
lightShepard = new Aspect("Light Shepard","Titanspawn","4","41","Heku - Soothe (" + abilityOne + ")","Invokation: Light - Blind (" + abilityTwo + ")","behavior","2","3"),
desertWarden = new Aspect("Desert Warden","Titanspawn","4","42","Invokation: Light - Sand (" + abilityOne + ")","Epic Physique (" + abilityTwo + ")","behavior","1","3"),
sunRay = new Aspect("Rays of the Sun","Titanspawn","4","41","Invokation: Light - Energy (" + abilityOne + ")","Epic Dexterity (" + abilityTwo + ")","behavior","3","2"),
    // Night
distantStar = new Aspect("Distant Star","Titanspawn","2","21","Invokation: Night - Veil(" + abilityOne + ")","Epic Dexterity(" + abilityTwo + ")","behavior","3","1"),
veilMaker = new Aspect("Veil Maker","Titanspawn","2","21","Invokation: Night - Obscurity  (" + abilityOne + ")","Illusion (" + abilityTwo + ")","behavior","2","3"),
fearMongerer = new Aspect("Fear Mongerer","Titanspawn","2","22","Invokation: Night - Fear (" + abilityOne + ")","Epic Presence (" + abilityTwo + ")","behavior","2","3"),
nightProwler = new Aspect("Night Prowler","Titanspawn","2","22","Epic Strength (" + abilityOne + ")","Invokation: Night - Obscurity (" + abilityTwo + ")","behavior","3","2"),
fenrisCaller = new Aspect("Fenris Wildcaller","Titanspawn","2","22","Zoothropy: Wolf (" + abilityOne + ")","Epic Physique (" + abilityTwo + ")","behavior","2","2"),
nightMaker = new Aspect("Night Maker","Titanspawn","2","23","Invokation: Night - Darkness (" + abilityOne + ")","Epic Physique (" + abilityTwo + ")","behavior","2","3"),
apophisAnnihilator = new Aspect("Apophis Annihilator","Titanspawn","2","23","Zoothropy: Snake (" + abilityOne + ")","Invokation: Night - Fear (" + abilityTwo + ")","behavior","1","2"),
    // Earth
earthcaller = new Aspect("Earthcaller","Titanspawn","6","61","Invokation: Earth - Summoning(" + abilityOne + ")","Invokation: Earth - Nature(" + abilityTwo + ")","behavior","2","1"),
jungleShaman = new Aspect("Jungle Shaman","Titanspawn","6","61","Invokation: Earth - Nature(" + abilityOne + ")","Invokation: Death - Shamanism(" + abilityTwo + ")","behavior","2","3"),
groundShaker = new Aspect("Ground Shaker","Titanspawn","6","64","Invokation: Earth - Stone(" + abilityOne + ")","Epic Strength(" + abilityTwo + ")","behavior","2","3"),
blightsoilDruid = new Aspect("Blightsoil Druid","Titanspawn","6","65","Druidism: Green(" + abilityOne + ")","Invokation: Earth - Decay(" + abilityTwo + ")","behavior","2","1"),
earthblighter = new Aspect("Earthblighter","Titanspawn","6","65","Invokation: Earth - Decay(" + abilityOne + ")","Epic Physique(" + abilityTwo + ")","behavior","1","2"),
geolord = new Aspect("Geolord","Titanspawn","6","62","Invokation: Earth - Land(" + abilityOne + ")","Epic Strength(" + abilityTwo + ")","behavior","1","2"),
earthBreaker = new Aspect("Earth Breaker","Titanspawn","6","62","Invokation: Earth - Stone (" + abilityOne + ")","Epic Physique (" + abilityTwo + ")","behavior","1","2"),
earthWarden = new Aspect("Earth Warden","Titanspawn","6","61","Invokation: Earth - Nature(" + abilityOne + ")","Epic Physique(" + abilityTwo + ")","behavior","1","1"),
   // Water
keeperDrowned = new Aspect("Keeper of the Drowned","Titanspawn","7","74","Invokation: Death - Necromancy(" + abilityOne + ")","Invokation: Water - Terror(" + abilityTwo + ")","behavior","2","2"),
waterCrafter = new Aspect("Water Crafter","Titanspawn","7","72","Invokation: Water - Life(" + abilityOne + ")","Hematurgy: Itztli(" + abilityTwo + ")","behavior","2","1"),
seaSinger = new Aspect("Sea Singer"," + typeChoice + ","7","71","Invokation: Water - Sea(" + abilityOne + ")","Epic Appearance - Hypnosis(" + abilityTwo + ")","behavior","2","3"),  
     //Death
ghostWhisperer = new Aspect("Ghost Whisperer","Titanspawn","8","81","Invokation: Death - Shamanism(" + abilityOne + ")","Epic Will(" + abilityTwo + ")","behavior","2","1"),
lordDead = new Aspect("Lord of the Dead","Titanspawn","8","82","Invokation: Death - Necromancy(" + abilityOne + ")","Epic Physique: Strength(" + abilityTwo + ")","behavior","1","1"),
necromancer = new Aspect("Necromancer","Titanspawn","8","81","Invokation: Death - Necromancy(" + abilityOne + ")","Voodoo - Mind Control(" + abilityTwo + ")","behavior","2","3"),
plagueBringer = new Aspect("Plaguebringer","Titanspawn","8","82","Invokation: Death - Reaper(" + abilityOne + ")","Invokation: Earth - Decay(" + abilityTwo + ")","behavior","2","3"),
  //Light
ancientOracle = new Aspect("Ancient Oracle","Titanspawn","4","41","Wyrdseeing: Prophecy(" + abilityOne + ")","Invokation: Light - Illumination(" + abilityTwo + ")","behavior","2","1"),
sunChaser = new Aspect("Sun Chaser","Titanspawn","4","42","Epic Speed(" + abilityOne + ")","Invokation: Light - Sun(" + abilityTwo + ")","behavior","3","2"),
gifterBlindness = new Aspect("Gifter of Blindness","Titanspawn","4","41","Invokation: Light - Brightness(" + abilityOne + ")","Epic Speed(" + abilityTwo + ")","behavior","3","3"),
dawnbreakAssassin = new Aspect("Dawnbreak Assassin","Titanspawn","4","42","Invokation: Light - Brightness(" + abilityOne + ")","Epic Speed(" + abilityTwo + ")","behavior","3","2"),
discipleDeceit = new Aspect("Disciple of Deceit","Titanspawn","4","41","Epic Appearance: Illusion(" + abilityOne + ")","Invokation: Light - Brightness(" + abilityTwo + ")","behavior","3","1"),
// Darkness
voidMage = new Aspect("Voidmage","Titanspawn","3","32","Invokation: Darkness - Void(" + abilityOne + ")","Wyrdseeing: Mystery(" + abilityTwo + ")","behavior","2","3"),
// Wind
stormBinder = new Aspect("Stormbinder","Titanspawn","5","51","Invokation: Sky - Storm(" + abilityOne + ")","Voodoo: Mind Control(" + abilityTwo + ")","behavior","2","3"),
// Fire
forgeMaster = new Aspect("Forgemaster","Titanspawn","1",["13","12"],"Invokation: Fire - Creation(" + abilityOne + ")","Invokation: Earth - Shaping(" + abilityTwo + ")","behavior","1","1"),
flameWaker = new Aspect("Flame Waker","Titanspawn","1",["12","11"],"Invokation: Fire - Summoning(" + abilityOne + ")","Epic Will(" + abilityTwo + ")","behavior","2","1"),
landScorcher = new Aspect("Land Scorcher","Titanspawn","1",["11","12"],"Invokation: Fire - Destruction(" + abilityOne + ")","Epic Strength(" + abilityTwo + ")","behavior","1","2"),

     //________________________________________________________________________________
     //Mythborn
     //________________________________________________________________________________

fireDancer = new Aspect("Fire Dancer","Mythborn","1","15","Invokation: Fire - Destruction(" + abilityOne + ")","Epic Physique: Speed(" + abilityTwo + ")","behavior","1","2"),     
monsoonMaker = new Aspect("Monsoon Maker"," + Mythborn + ","1","11","Fey Sorcerer: Summer(" + abilityOne + ")","Invokation: Sky - Storm(" + abilityTwo + ")","behavior","2","3"),     
cruelTrickster = new Aspect("Cruel Trickster","Mythborn","2",["21","22","23","24"],"Epic Appearance: Glamour(" + abilityOne + ")","Invokation: Frost(" + abilityTwo + ")","behavior","2","3"),
windDancer = new Aspect("Wind Dancer","Mythborn","2",["24","22","21"],"Invokation: Sky - Wind(" + abilityOne + ")","Epic Speed(" + abilityTwo + ")","behavior","3","2"),
banisher = new Aspect("Banisher","Mythborn","4","44","Invokation: Death - Void(" + abilityOne + ")","Epic Will(" + abilityTwo + ")","behavior","2","3"),
ancientDruid = new Aspect("Ancient Druid","Mythborn","4",["44"],"Druidism: Green Druid(" + abilityOne + ")","Invokation: Death - Shamanism(" + abilityTwo + ")","behavior","2","3"),
sunWarden = new Aspect("Sun Warden","Mythborn","1","12","Invokation: Light - Sun (" + abilityOne + ")","Epic Physique (" + abilityTwo + ")","behavior","1","2"),
sunPriest = new Aspect("Sun Priest","Mythborn","1","12","Invokation: Light - Sun (" + abilityOne + ")","Heku - Riot (" + abilityTwo + ")","behavior","2","3"),
crowdDazzler = new Aspect("Crowd Dazzler","Mythborn","1","11","Heku - Riot (" + abilityOne + ")","Invokation: Light - Illumination (" + abilityTwo + ")","behavior","2","3"),
lightShepard = new Aspect("Light Shepard","Mythborn","1","13","Heku - Soothe (" + abilityOne + ")","Invokation: Light - Blind (" + abilityTwo + ")","behavior","2","3"),
desertWarden = new Aspect("Desert Warden","Mythborn","3",["31","33"],"Invokation: Light - Sand (" + abilityOne + ")","Epic Physique (" + abilityTwo + ")","behavior","1","3"),
sunRay = new Aspect("Rays of the Sun","Mythborn","3",["31","32","33"],"Invokation: Light - Energy (" + abilityOne + ")","Epic Dexterity (" + abilityTwo + ")","behavior","3","2"),
distantStar = new Aspect("Distant Star","Mythborn","2",["21","24"],"Invokation: Night - Veil(" + abilityOne + ")","Epic Dexterity(" + abilityTwo + ")","behavior","3","1"),
veilMaker = new Aspect("Veil Maker","Mythborn","2",["21"],"Invokation: Night - Obscurity  (" + abilityOne + ")","Illusion (" + abilityTwo + ")","behavior","2","3"),
fearMongerer = new Aspect("Fear Mongerer","Mythborn","4",["44"],"Invokation: Night - Fear (" + abilityOne + ")","Ability i (" + abilityTwo + ")","behavior","2","3"),
nightProwler = new Aspect("Night Prowler","Mythborn","4",["43"],"Epic Strength (" + abilityOne + ")","Invokation: Night - Obscurity (" + abilityTwo + ")","behavior","3","2"),
fenrisCaller = new Aspect("Fenris Wildcaller","Mythborn","4",["43"],"Zoothropy: Wolf (" + abilityOne + ")","Epic Physique (" + abilityTwo + ")","behavior","2","2"),
nightMaker = new Aspect("Night Maker","Mythborn","4",["44","43"],"Invokation: Night - Darkness (" + abilityOne + ")","Epic Physique (" + abilityTwo + ")","behavior","2","3"),
earthcaller = new Aspect("Earthcaller","Mythborn","4",["41","44","42"],"Invokation: Earth - Summoning(" + abilityOne + ")","Invokation: Earth - Nature(" + abilityTwo + ")","behavior","2","1"),
jungleShaman = new Aspect("Jungle Shaman","Mythborn","4",["41","42","44"],"Invokation: Earth - Nature(" + abilityOne + ")","Invokation: Death - Shamanism(" + abilityTwo + ")","behavior","2","3"),
groundShaker = new Aspect("Ground Shaker","Mythborn","3",["32","31","33"],"Invokation: Earth - Stone(" + abilityOne + ")","Epic Strength(" + abilityTwo + ")","behavior","2","3"),
blightsoilDruid = new Aspect("Blightsoil Druid","Mythborn","4",["44","41","43","42"],"Druidism: Green(" + abilityOne + ")","Invokation: Earth - Decay(" + abilityTwo + ")","behavior","2","1"),
earthblighter = new Aspect("Earthblighter","Mythborn","4",["44","41","43","42"],"Invokation: Earth - Decay(" + abilityOne + ")","Epic Physique(" + abilityTwo + ")","behavior","1","2"),
geolord = new Aspect("Geolord","Mythborn","4",["44","41","43","42"],"Invokation: Earth - Land(" + abilityOne + ")","Epic Strength(" + abilityTwo + ")","behavior","1","2"),
earthBreaker = new Aspect("Earth Breaker","Mythborn","4",["44","41","43"],"Invokation: Earth - Stone (" + abilityOne + ")","Epic Physique (" + abilityTwo + ")","behavior","1","2"),
earthWarden = new Aspect("Earth Warden","Mythborn","4",["44","41","43","42"],"Invokation: Earth - Nature(" + abilityOne + ")","Epic Physique(" + abilityTwo + ")","behavior","1","1"),
druidClaw = new Aspect("Druid of the Claw","Mythborn","4",["44","43"],"Zoothropy: Bear(" + abilityOne + ")","Epic Physique(" + abilityTwo + ")","behavior","1","1"),
keeperDrowned = new Aspect("Keeper of the Drowned","Mythborn","6",["61"],"Invokation: Death - Necromancy(" + abilityOne + ")","Invokation: Water - Terror(" + abilityTwo + ")","behavior","2","2"),
waterCrafter = new Aspect("Water Crafter","Mythborn","6",["62","61"],"Invokation: Water - Life(" + abilityOne + ")","Hematurgy: Itztli(" + abilityTwo + ")","behavior","2","1"),
seaSinger = new Aspect("Sea Singer","Mythborn","6",["61","62"],"Invokation: Water - Sea(" + abilityOne + ")","Epic Appearance - Hypnosis(" + abilityTwo + ")","behavior","2","3"),  
necromancer = new Aspect("Necromancer","Mythborn","4",["44"],"Invokation: Death - Necromancy(" + abilityOne + ")","Voodoo - Mind Control(" + abilityTwo + ")","behavior","2","3"),
plagueBringer = new Aspect("Plaguebringer","Mythborn","4",["44","43"],"Invokation: Death - Reaper(" + abilityOne + ")","Invokation: Earth - Decay(" + abilityTwo + ")","behavior","2","3"),
ancientOracle = new Aspect("Ancient Oracle","Mythborn","3",["31","32","33","34","35"],"Wyrdseeing: Prophecy(" + abilityOne + ")","Invokation: Light - Illumination(" + abilityTwo + ")","behavior","2","1"),
sunChaser = new Aspect("Sun Chaser","Mythborn","1",["42"],"Epic Speed(" + abilityOne + ")","Invokation: Light - Sun(" + abilityTwo + ")","behavior","3","2"),
dawnbreakAssassin = new Aspect("Dawnbreak Assassin","Mythborn","2",["22","21"],"Invokation: Light - Brightness(" + abilityOne + ")","Epic Speed(" + abilityTwo + ")","behavior","3","2"),
discipleDeceit = new Aspect("Disciple of Deceit","Mythborn","2",["21","24","25","22"],"Epic Appearance: Illusion(" + abilityOne + ")","Invokation: Light - Brightness(" + abilityTwo + ")","behavior","3","1"),
stormBinder = new Aspect("Stormbinder","Mythborn","3",["31","32","33","34","35"],"Invokation: Sky - Storm(" + abilityOne + ")","Voodoo: Mind Control(" + abilityTwo + ")","behavior","2","3"),
]     
     
     
     
     // name = new Aspect("name","type","origin","subOrigin","Ability j (" + abilityOne + ")","Ability i (" + abilityTwo + ")","behavior","combat1","combat2"),

var abilitiesOptions = [];

for(g=0; g < abilities.length; g++) {
  if (typeChoice === abilities[g].type &&
    (originChoice === abilities[i].origin[0] || originChoice === abilities[i].origin[1] || originChoice === abilities[i].origin[2])  &&
    (subOriginChoice === abilities[i].subOrigin[0] || subOriginChoice === abilities[i].subOrigin[1] || subOriginChoice === abilities[i].subOrigin[2])  &&
      combatChoice1 === abilities[g].combat1 && 
      combatChoice2 === abilities[g].combat2) {
      if (legendChoice === "1") {
  abilitiesOptions.push(abilities[g].name + "<br><b>Legendary Abilities:</b> <br>  &nbsp;&nbsp;"+ abilities[g].legend) 
      }
      else {
  abilitiesOptions.push(abilities[g].name + "<br><b>Legendary Abilities:</b> <br>  &nbsp;&nbsp;" + abilities[g].legend + " <br> &nbsp;&nbsp; " + abilities[g].intelligence) 
      }
  //Legend here is the first Legendary Ability, Intelligence is the second Legendary Ability
  }
}

if (typeof abilitiesOptions[0] === 'undefined') {
for(g=0; g < abilities.length; g++) {
  if (typeChoice === abilities[g].type &&
      originChoice === abilities[g].origin  &&
    (subOriginChoice === abilities[i].subOrigin[0] || subOriginChoice === abilities[i].subOrigin[1] || subOriginChoice === abilities[i].subOrigin[2])  &&
      combatChoice1 === abilities[g].combat1) {
      if (legendChoice === "1") {
  abilitiesOptions.push(abilities[g].name + "<br><b>Legendary Abilities:</b> <br>&nbsp;&nbsp;"+ abilities[g].legend) 
      }
      else {
  abilitiesOptions.push(abilities[g].name + "<br><b>Legendary Abilities:</b> <br>&nbsp;&nbsp;"+ abilities[g].legend + " <br>  &nbsp;&nbsp;" + abilities[g].intelligence) 
      }
  //Legend here is the first Legendary Ability, Intelligence is the second Legendary Ability
  }
}
}

if (typeof abilitiesOptions[0] === 'undefined') {
for(g=0; g < abilities.length; g++) {
  if (typeChoice === abilities[g].type &&
      originChoice === abilities[g].origin) {
      if (legendChoice === "1") {
  abilitiesOptions.push(abilities[g].name + "<br><b>Legendary Abilities:</b> <br>  &nbsp;&nbsp;" + abilities[g].legend) 
      }
      else {
  abilitiesOptions.push(abilities[g].name + "<br><b>Legendary Abilities:</b> <br>  &nbsp;&nbsp;" + abilities[g].legend + " <br> &nbsp;&nbsp;" + abilities[g].intelligence) 
      }
  //Legend here is the first Legendary Ability, Intelligence is the second Legendary Ability
  }
}
}
    
    
var rand5 = abilitiesOptions[Math.floor(Math.random() * abilitiesOptions.length)];

//____________________________________________________________________________________________________


//Skills Maker ------------------------------------------------------------------


//____________________________________________________________________________________________________

var Skill = function(name,level){
  this.name = name;
  this.level = level;  
}   

var skillOptions = [
fight = new Skill (" Fight: +",1),
will = new Skill (" Will: +",0),
rapport = new Skill (" Rapport: +",0),
physique = new Skill (" Physique: +",0),
presence = new Skill (" Presence: +",0),
stealth = new Skill (" Stealth: +",0),
lore = new Skill (" Lore: +",0),
notice = new Skill (" Notice: +",0)
]

if (behaviorChoice === "1"){presence.level += 2}
else if (behaviorChoice === "2"){rapport.level += 2}

if (intelligenceChoice === "1"){will.level += 2}
else if (intelligenceChoice === "2"){lore.level += 2}

if (combatChoice1 === "1"){fight.level += 1;physique.level += 2}
else if (combatChoice1 === "2"){will.level += 1;lore.level += 1}
else if (combatChoice1 === "3"){stealth.level += 3;fight.level += 2}
   
if (combatChoice2 === "1"){will.level += 2;lore.level += 2;notice.level+=1;stealth.level += 1}
else if (combatChoice2 === "2"){fight.level += 3;stealth.level += 1;physique.level+=1}
else if (combatChoice2 === "3"){lore.level += 1;will.level += 2;stealth.level += 1;presence.level+=1;rapport.level+=1}
else if (combatChoice2 === "4"){fight.level += 2;notice.level += 1;physique.level +=3;will.level += 2}

skillOptions.sort(function(a,b) {
    return b.level-a.level;     });
         
var randSkills = (skillOptions.sort()[0].name + (2+skillAbilityOne+skillBonus) +  ","+
     skillOptions.sort()[1].name + (1+skillAbilityOne+skillBonus) +  ","+
     skillOptions.sort()[2].name + (1+skillAbilityOne+skillBonus) +  ","+
     skillOptions.sort()[3].name + (1+skillAbilityOne+skillBonus));
//Sorts the highest skills, top first, and gives them a game-normal value. Adds skill bonus from numbers/Boss         

      
 
//name = new Aspect("name","type","origin","subOrigin","legend","intelligence","behavior","combat1","combat2"),


//____________________________________________________________________________________________________


//Stunts Maker ------------------------------------------------------------------


//____________________________________________________________________________________________________
// name = new Stunt("description","dangerlevel"),
    //Here only varname, Name, combat1 and combat2 matter, and the Effect part is under "type"
   
    
   var stuntEffect = [

       // Lvl 2
energyBlast = new Stunt("use a Legendary Ability for free as an Attack action",2,"Legendary",[2,0,0,0]),
mysticPower = new Stunt("use a Legendary Ability for free to Create a Personal Advantage",2,"Legendary",[2,4,3,0]),
innerPower = new Stunt("invoke " + rand + " for free as an Attack action",2,"Personal Aspect",[2,0,0,0]),
outerPower = new Stunt("invoke " + rand + " for free as a Create an Advantage action",2,"Personal Aspect",[1,3,4,0]),
mysticConstruct = new Stunt("use a Legendary Ability for free to Create a Situational Advantage",2,"Legendary",[1,2,3,4]),
affectOther = new Stunt("use a Legendary Ability for free to Create a Character Advantage",2,"Legendary",[1,2,3,4]),
uniqueNature = new Stunt("invoke " + rand + " for free to Create a Character Advantage",2,"Personal Aspect",[1,2,3,4]),
allyHelp = new Stunt("give an ally a Free Invocation on an Aspect",2,"Any",[1,4,0,0]),
fatePointGain = new Stunt("gain a Fate Point",2,"Fate Point",[1,2,3,4]), 
regeneration = new Stunt("Remove a Minor Consequence from an ally",2,"Defense",[1,0,0,0]),
regeneration = new Stunt("Remove a Minor Consequence from yourself",2,"Any",[4,0,0,0]),        
       // Lvl 3
aspectBonusAlly = new Stunt("when an ally invokes an Aspect you created, gain +3 instead",3,"Any",[1,3,4,0]), 
massweaken3 = new Stunt("all enemies have -1 on their next Defense roll",3,"Any",[3,2,4,0]), 
        // Lvl 4
flight = new Stunt("you have the Aspect: Flight until the end of the Scene",4,"Any",[2,1,0,0]),
advantageMaker = new Stunt("have +1 to two Skills",4,"Skill",[1,2,3,4]),    
legendNature = new Stunt("you can use your Legendary Ability for free using non-Legendary Rolls until the end of the Scene",4,"Legendary",[1,3,4,0]),
energyBlast4 = new Stunt("use a Legendary Ability for free as an Attack action twice",4,"Legendary",[2,0,0,0]),
mysticPower4 = new Stunt("use a Legendary Ability for free to Create a Personal Advantage twice",4,"Legendary",[1,4,3,0]),
innerPower4 = new Stunt("invoke \"" + rand + "\" for free as an Attack action twice",4,"Personal Aspect",[2,0,0,0]),
outerPower4 = new Stunt("invoke " + rand + " for free as a Create an Advantage action twice",4,"Personal Aspect",[1,2,3,4]),
      // Lvl 5
 

      // Lvl 6


//_____________________
     
   ]  
function pushStunt(uses){
for(i=2;i<30;i++){
  stuntEffect.push(shieldScaler = new Stunt("an ally has +" + i + " on their next Defense roll (Uses: "+uses+")",i*uses,"Any",[0,1,4,0]));
  stuntEffect.push(theEliteScaler = new Stunt("gain +" + i + " to a Skill to Create an Advantage for one Action (Uses: "+uses+")",i*uses,"Skill",[1,3,4,0]));
  stuntEffect.push(theRecklessScaler = new Stunt("gain +"+i+" to a Skill to Attack for one Action (Uses: "+uses+")",i*uses,"Skill",[2,0,0,0]));
  stuntEffect.push(fogScaler = new Stunt("an enemy has -"+i+" on their next Attack roll (Uses: "+uses+")",i*uses,"Any",[1,3,0,0]));
  stuntEffect.push(defendScaler = new Stunt("get +"+i+" to your next Defense roll (Uses: "+uses+")",i*uses,"Defense",[2,4,0,0]));
  stuntEffect.push(createAspectScaler = new Stunt("automatically create an Aspect that requires a +"+i+" opposition to remove (Uses: "+uses+")",i*uses,"Any",[1,3,4,0]));
  stuntEffect.push(weakenScaler = new Stunt("an enemy has -"+i+" on their next Defense roll (Uses: "+uses+")",i*uses,"Any",[2,1,0,0]));
  stuntEffect.push(skilledScaler = new Stunt("have +"+Math.floor(i/2+1)+" to a Skill for the rest of the Scene (Uses: "+uses+")",i*uses,"Skill",[1,2,3,4]));
  stuntEffect.push(advantageMaker = new Stunt("have +"+Math.floor(i/4+1)+" to two Skills (Uses: "+uses+")",i*uses,"Skill",[1,2,3,4]));
  stuntEffect.push(massfogScaled = new Stunt("all enemies have -"+Math.floor(i/2+1)+" on their next Attack roll (Uses: "+uses+")",i*uses,"Any",[1,4,3,0]))
  stuntEffect.push(mindfogScaled = new Stunt("an enemy has -"+i+" on their next Create an Advantage Rolls (Uses: "+uses+")",i*uses,"Any",[1,3,4,0])) 
  stuntEffect.push(fogScaled = new Stunt("an enemy has -"+i+" on their next Attack roll (Uses: "+uses+")",i*uses,"Any",[1,4,3,0]))
  stuntEffect.push(massmindfogScaled = new Stunt("all enemies have -"+Math.floor(i/2+1)+" on their next Create an Advantage Rolls (Uses: "+uses+")",i*uses,"Any",[1,3,4,0]))   
  stuntEffect.push(instagibScaled = new Stunt("automatically deal a "+Math.floor(i*0.8)+"-shift Damage to an enemy (Uses: "+uses+")",i*uses,"Any",[2,0,0,0]))
  stuntEffect.push(aspectBonus5 = new Stunt("until the end of the Scene, when you invoke a Personal Aspect or an Aspect you created, gain +"+Math.floor(i/3+2)+" instead (Uses: "+uses+")",i*uses,"Any",[1,3,4,0]))
  stuntEffect.push(aspectBonusAlly = new Stunt("until the end of the Scene, whenever an ally invokes an Aspect you created, gain +"+Math.floor(i/3+2)+" instead (Uses: "+uses+")",i*uses,"Any",[1,3,4,0]))     }
}
       
   pushStunt(1);      
   pushStunt(2);      
   pushStunt(3);      
         
         
         
var stuntCost = [    
       // Lvl 0
free = new Stunt("On your turn, ",0,"Any",[1,2,3,4]),
       // Lvl 1
recklessAttack = new Stunt("On your turn, ",1,"Defense",[1,2,3,0]), 
mentalStress1 =  new Stunt("On your turn, ",1,"Any",[1,2,3,4]),   
painGain = new Stunt("Whenever you receive a Consequence, ",1,"Any",[2,4,0,0]),
friendPainGain = new Stunt("Whenever an ally receives a Consequence, ",1,"Any",[1,3,0,0]),
physicalStress1 =  new Stunt("On your turn, ",1,"Any",[1,2,3,0]),        
       // Lvl 2  
fatePoint = new Stunt("For 1 Fate Point, ",2,"Fate Point",[1,2,3,4]),  
fatePoint2 = new Stunt("For 1 Legendary Ability use, ",2,"Legendary",[1,2,3,4]),  
mentalStress2 =  new Stunt("Take 2 Mental Stress, ",2,"Any",[1,2,3,4]),   
lowPain = new Stunt("You take a Minor Physical Consequence, and ",2,"Defense",[1,2,3,0]),        
physicalStress2 =  new Stunt("Take 2 Physical Stress, ",2,"Any",[1,2,3,0]),   
     // Lvl 3
newAspect = new Stunt("You gain the Aspect: 'Vulnerable', and ",3,"Any",[1,3,0,0]),     
recklessAttack3 = new Stunt("Gain -3 to your next Defense Roll, and ",3,"Defense",[1,2,3,0]),
focus = new Stunt("Lose your Action this turn, and ",3,"Any",[1,3,0,0]),
mentalStress3 =  new Stunt("Take 3 Mental Stress, ",3,"Any",[1,2,3,4]),   
transform = new Stunt("Remove an Aspect you created, and ",3,"Any",[1,3,4,0]),                     
physicalStress3 =  new Stunt("Take 3 Physical Stress, ",4,"Any",[1,2,3,0]),   
     // Lvl 4
extreme = new Stunt("You take a Medium Physical Consequence, and ",4,"Defense",[1,2,3,0]),
mentalStress4 =  new Stunt("Take 4 Mental Stress, ",4,"Any",[1,2,3,4]),   
physicalStress4 =  new Stunt("Take 4 Physical Stress, ",4,"Any",[1,2,3,0]),   
     // Lvl 5
brutal = new Stunt("You take a Major Physical Consequence, and ",5,"Defense",[1,2,3,0]), 
mentalStress5 =  new Stunt("Take 6 Mental Stress, ",5,"Any",[1,2,3,4]),   
recklessAttack5 = new Stunt("Gain -5 to your next Defense Roll, and ",5,"Defense",[1,2,3,0]),              
physicalStress6 =  new Stunt("Take 6 Physical Stress, ",5,"Any",[1,2,3,0]),   
     // Lvl 6
   
      
   ]       
 

function stuntCalculator(bonusType){
 randomEffect2 = Math.floor(Math.random() * 6)
 randomEffect = randomEffect2 + skillAbilityOne + bonusType  
}
stuntCalculator(stuntBonus)         

var stuntEffectOptions = [];
var stuntCostOptions = [];

     
function stuntChooser (){  
     
for(h=0; h < stuntEffect.length; h++) {
  if ((randomEffect === stuntEffect[h].dangerlevel) && (stuntEffect[h].stuntCombat2[0] === combatChoice2Int || stuntEffect[h].stuntCombat2[1] === combatChoice2Int || stuntEffect[h].stuntCombat2[2] === combatChoice2Int || stuntEffect[h].stuntCombat2[3] === combatChoice2Int))
{ stuntEffectOptions.push(stuntEffect[h]) }}

    
for(j=0; j < stuntCost.length; j++) {
  if ((randomEffect2 === stuntCost[j].dangerlevel) && (stuntCost[j].stuntCombat2[0] === combatChoice2Int || stuntCost[j].stuntCombat2[1] === combatChoice2Int || stuntCost[j].stuntCombat2[2] === combatChoice2Int || stuntCost[j].stuntCombat2[3] === combatChoice2Int)){
  stuntCostOptions.push(stuntCost[j])   
  }} 
     
 randEffect = stuntEffectOptions[Math.floor(Math.random() * stuntEffectOptions.length)];
 randCost = stuntCostOptions[Math.floor(Math.random() * stuntCostOptions.length)];


}
stuntChooser();
      

if(randCost.stuntType === randEffect.stuntType  && (randEffect.stuntType !== "Any" || randCost.stuntType !== "Any")){
stuntChooser();
}
    
     
var rand6 = ("<br><b>\nStunts:</b> <br>\n- " + randCost.description + randEffect.description)    
               
//____________________________________________________________________________________________________


//Stunts Maker 2 ------------------------------------------------------------------


//____________________________________________________________________________________________________

function stuntCalculator2(){
 randomEffect4 = Math.floor(Math.random() * 6)
 randomEffect3 = randomEffect4 + skillAbilityOne + stuntBonus2 
}
stuntCalculator2(stuntBonus2)      

var stuntEffectOptions2 = [];
var stuntCostOptions2 = [];
    


   
function stuntChooser2 (){  
    

for(h=0; h < stuntEffect.length; h++) {
  if ((randomEffect3 === stuntEffect[h].dangerlevel) && (stuntEffect[h].stuntCombat2[0] === combatChoice2Int || stuntEffect[h].stuntCombat2[1] === combatChoice2Int || stuntEffect[h].stuntCombat2[2] === combatChoice2Int || stuntEffect[h].stuntCombat2[3] === combatChoice2Int))
{ stuntEffectOptions2.push(stuntEffect[h]) }}

    
for(j=0; j < stuntCost.length; j++) {
  if ((randomEffect4 === stuntCost[j].dangerlevel) && (stuntCost[j].stuntCombat2[0] === combatChoice2Int || stuntCost[j].stuntCombat2[1] === combatChoice2Int || stuntCost[j].stuntCombat2[2] === combatChoice2Int || stuntCost[j].stuntCombat2[3] === combatChoice2Int)){
  stuntCostOptions2.push(stuntCost[j])   
  }}      
     
     
 randEffect2 = stuntEffectOptions2[Math.floor(Math.random() * stuntEffectOptions2.length)];
 randCost2 = stuntCostOptions2[Math.floor(Math.random() * stuntCostOptions2.length)];

}
stuntChooser2();

if(randCost2.stuntType === randEffect2.stuntType && (randEffect2.stuntType !== "Any" || randCost2.stuntType !== "Any")){
stuntChooser2();
}

          
var rand7 = ("<br>\n- " + randCost2.description + randEffect2.description)     

if (typeof imageLink === 'undefined') {     
var myWindow = window.open("", "_blank","width=400, height=400");
myWindow.document.write("<TITLE>Generated NPC</TITLE>")
myWindow.document.write("<BODY BGCOLOR='#297ACC'>")
myWindow.document.write("<p style='font-family:arial'><b>Aspects: </b><br>&nbsp;&nbsp;" + rand  + "<br>&nbsp;&nbsp;" + rand2 + "<br>&nbsp;&nbsp;" + rand3 + "<br>\n&nbsp;&nbsp;"   + rand5 + "<br>\n<b>Skills:</b> " + randSkills + rand6 + rand7 + " </p>");   
myWindow.document.write("</BODY>")
myWindow.document.write("</HTML>")}

else{
var myWindow = window.open("", "_blank","width=500, height=800");
myWindow.document.write("<TITLE>Generated NPC</TITLE>")
myWindow.document.write("<BODY BGCOLOR='#297ACC'>")
myWindow.document.write("<p style='font-family:arial'><b>Aspects: </b><br>&nbsp;&nbsp;" + rand  + "<br>&nbsp;&nbsp;" + rand2 + "<br>&nbsp;&nbsp;" + rand3 + "<br>\n&nbsp;&nbsp;"   + rand5 + "<br>\n<b>Skills:</b> " + randSkills + rand6 + rand7 + " </p>");   
myWindow.document.write('<img src=' +  imageLink + '" alt="Image" width=100% height=auto >')
//myWindow.document.write('<img src="http://i.imgur.com/uuMetIe.jpg" alt="Image"width=100% height=60% >')
     
myWindow.document.write("</BODY>")
myWindow.document.write("</HTML>")}     
}
}

npcChoice();

