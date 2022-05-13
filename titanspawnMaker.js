

function displayTest(){
	  var x = document.getElementById("mainTab");
	  var y = document.getElementById("resultTab");

  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";  } else {
    x.style.display = "none";
    y.style.display = "block";    }
}
var enemyOneDone = 0


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

         
       
function generatorManager(){
playerNumberVar = document.getElementById("playerNumber").value
playerLevelVar = (document.getElementById("playerLevel").value)
fightTypeVar = document.getElementById("fightType").value
fightDifficultyVar = document.getElementById("fightDifficulty").value
document.getElementById("outputText2").innerHTML = ""
document.getElementById("outputText").innerHTML = ""


if(fightTypeVar == 3){

npcChoice(NPC1Final)

}
else{

npcChoice(NPC1Final)	
npcChoice(NPC2Final)
}
enemyOneDone=0
}

function alertFightLevel(){
playerNumberVar = document.getElementById("playerNumber").value
playerLevelVar = (document.getElementById("playerLevel").value)
fightTypeVar = document.getElementById("fightType").value
fightDifficultyVar = document.getElementById("fightDifficulty").value
alert(Math.floor((((playerLevelVar-0.5)*4)+20)*(playerNumberVar)*(1.5-(fightDifficultyVar/4))))
	
}

function enemyOptions(){
	if(document.getElementById("fightType").value != "3" && numberOfNPCs == 2){
			
			document.getElementById("confirmNPC2Button").style="display:block"
			document.getElementById("NPC2").style="display:block"
	}
	else{document.getElementById("confirmNPC2Button").style="display:none"
			document.getElementById("NPC2").style="display:none"
	}
}

function npcChoice(chosenNPC){
	


//playerNumberVar = 4
//playerLevelVar = 7
//fightTypeVar = 2
//fightDifficultyVar = 1

fightCompute = Math.floor((((playerLevelVar-0.5)*5)+10)*(playerNumberVar)*(1.5-(fightDifficultyVar/4)))


if(document.getElementById("fightType").value==1){
decision(fightCompute/2,0)}
else if(document.getElementById("fightType").value==2){
decision(fightCompute/2,1)}
else if(document.getElementById("fightType").value==3){
decision(fightCompute,0)}
else if(document.getElementById("fightType").value==4){
decision(fightCompute/2,1)}

     // fightCompute est la difficulté du combat, basé sur les variables choisies.
//stuntBonus is put to 1 to avoid endless loops
     function decision(argument,numberOn){ 
skillBonus = 0
stuntBonus = 1
stuntBonus2 = 1
legendaryBonus = 0
legendaryBonus2 = 0
physicalStressBonus = 0
mentalStressBonus = 0
enemyNumber = 0
sceneBonus = 0
fightComputeGroup = argument

sceneAspectsActive = false

     // L'ennemi est pour l'instant a stats de base, puis des stats lui sont attribués en fonction de la valeur de fightCompute

while(fightComputeGroup > 0){
      

if (chosenNPC[3].name === "Tank" ) {buffChooser = Math.ceil(Math.random() * 7)}
else if (chosenNPC[3].name === "Damage Dealer" ) {buffChooser = Math.ceil(Math.random() * 7)}
else if (chosenNPC[3].name === "Party Face" ) {buffChooser = Math.ceil(Math.random() * 10)}
else if (chosenNPC[3].name === "Support-Controller" ) {buffChooser = Math.ceil(Math.random() * 10)}   
else if (chosenNPC[3].name === "Skill Monkey" ) {buffChooser = Math.ceil(Math.random() * 10)}

if (buffChooser == 1 && skillBonus <= Math.floor(playerLevelVar/2+playerNumberVar/2)+4){skillBonus += 1; fightComputeGroup -= 6+Math.floor(skillBonus/2); enemyNumber += numberOn};
if (buffChooser == 2 && skillBonus <= Math.floor(playerLevelVar/2+playerNumberVar/2)+4){skillBonus += 1; fightComputeGroup -= 6+Math.floor(skillBonus/2); enemyNumber += numberOn};
if (buffChooser == 3 && legendaryBonus <= 4)		{legendaryBonus += 1; fightComputeGroup -= 3; enemyNumber += numberOn };
if (buffChooser == 4 && legendaryBonus2 <= 4)		{legendaryBonus2 += 1; fightComputeGroup -= 3; enemyNumber += numberOn };      
if (buffChooser == 5 && physicalStressBonus <= 4)	{physicalStressBonus += 1; mentalStressBonus += 1; fightComputeGroup -= 2; enemyNumber += numberOn }; 
if (buffChooser == 6)								{stuntBonus2 += 1; fightComputeGroup -= 1; enemyNumber += numberOn }; 
if (buffChooser == 7)								{stuntBonus += 1; fightComputeGroup -= 1; enemyNumber += numberOn }; 
if (buffChooser == 8)								{stuntBonus2 += 1; fightComputeGroup -= 1; enemyNumber += numberOn }; 
if (buffChooser == 9)								{stuntBonus += 1; fightComputeGroup -= 1; enemyNumber += numberOn }; 
if (buffChooser == 10)								{stuntBonus += 1; fightComputeGroup -= 1; enemyNumber += numberOn }; 
//1 of fight difficulty = +1 throughout the Combat

} 
          //_______________________________________________//
          // Décide en fonction du niveau des joueurs le niveau de Légende du Titanspawn (notamment permet de générer des Titanspawn uniques pour des joueurs tres high level)
          // Décide aussi le type de fight (2 petits ennemis, un gros boss, etc)
         npcChoiceLoop()}
//function to clarify the legendChoice maker    

//Setting up a Boss and his Minions     
    

 // A ce moment-là, le type de combat, et la difficulté du PNJ, est décidée. La répartition Stunts/Skills/etc est décidée
 
    function npcChoiceLoop() {

//____________________________________________________________________________________________________


//User Input: L'individu choisi le type de PNJ, origine, role, etc.


//____________________________________________________________________________________________________

    
var Stunt = function(description,dangerlevel,stuntType,stuntCombat2,type,NPCtype) {
  this.description = description;
  this.dangerlevel = dangerlevel;
  this.stuntType = stuntType;
  this.stuntCombat2 = stuntCombat2;
  this.type=type;
  this.NPCtype = NPCtype   
};
         
         

// _______________________________________
    
    
// Default Titanspawn  -----------------------------------
// Si aucune High Concept ne fit tous les critères, plusieurs High Concept sont générés pour donner des options quand meme 

// _______________________________________

 
//if (typeof highConceptOptaions[3] === 'undefined') {
  
    
    // Titans Options
	
	
	var firstAspectList = [
	
//Titans
	
	["Light",["Sun", "Sand", "Light","Bright","Shining","Radiant"],[]],
	["Night",["Bat","Night","Blind","Midnight", "Moonlit", "Nightmare","Dark","Somber","Twilight","Gloomy"],["Silencer"]],
	["Death",["Chained","Death", "Soul Eating","Dark","Grief","Grave","Ghost","Oblivion","Ruin"],["Wight","Abomination","Ghoul"]],
	["Ocean",["Drowned", "Naga", "Lizard","Sea","Mist","Ocean","Tentacled","Abyss","Ancient","Amphibian","Froglike","Shark"],[]],
	["Sky",["Wind", "Cloud", "Lightning","Flying","Mist","Fog","Sky","Heavenly"]],
	["Fire",["Lava", "Burnt","Fire", "Ash","Blazing","Heat","Charred","Glowing","Devouring","Incandescent","Searing","Flaming","Pyromaniac","Ash"],[]],
	["World",["Swamp", "Rock", "Stone","Forest","Jungle","Giant","Mountain"],[]],
	["Depths",["Ancient", "Chtonic","Abyssal", "Deep","Cavern","Underground","Cavern","Slithering"],[]],
	["Order",["Faceless","Arcane","Stoic", "Marble", "Glass","Steel","Perfect","Calm","Inscrutable"],["Legionnaire"]],
	
//Mythborn
	
	["Winter Court",["Enchanting","Dark", "Cold", "Fey","Subtle","Freezing","Winter","Wild"],[]],
	["Summer Court",["Enchanting","Bright", "Warm", "Fey","Subtle","Burning","Summer","Wild"],[]],
	["Shambhala",["Ancient", "Meditative", "Arrogant","Righteous","Calm","Insctrutable"],[]],
	["Dark Forest",["Wild", "Angry", "Unforgiving","Violent","Feral","Hidden","Forest"],[]],
	["Jade Sea",["Draconic", "Wild", "Mighty","Ancient","Unstoppable","Winged","Slithering"],[]],

	
	
//Enlightened
	
	["Circle of Merlin",["Druidic","Enlightened","Noble"],["Knight"]],
	["Order of the Jade Fist",["Disciplined","Determined"],["Martial Artist","Knight"]],
	["Cabal",["Mysterious","Secretive"],[]],
	["Illuminati",["Devious"],["Illuminati","Freemason"]],
	

//Gods



//Roles

	["Tank",["Armored"],["Soldier","Legionnaire","Footsoldier","Servant","Guard","Defender","Sentinel","Champion"]],
	["Damage Dealer",[],["Elite","Assassin","Killer","Butcher","Enforcer","Fighter","Gladiator","Sentinel","Champion","Warrior"]],
	["Party Face",[],["Manipulator","Schemer","Agent","Conspirator","Deceiver","Prophet","Orator","Infiltrator","Diplomat"]],
	["Support-Controller",[],["Channeler","Mage","Prophet","Conjurer","Enchanter","Magus","Shaman","Thaumaturge","Warlock","Occultist","Priest"]],	
	["Skill Monkey",[],["Rogue","Trickster","Prophet","Sneak","Engineer","Scoundrel","Problemsolver"]],
	
//Type-specific

	["Titan",[],["Golem","Giant","Colossus","Wyrm","Cyclops","Djinn","Ogre","Troll"]],
	["Mythborn",[],[]],
	

	
//SecondOrigin-specific (Titanspawn)

	["Abzu",[],["Kraken"]],
	["Aten",["Angel"],["Knight","Paladin"]],
	["Crom Cruach",["Noxious","Blight"],["Fomorian"]],
	["Dis Pater",["Gemstone","Ornate"],[]],
	["Fenrir",["Fenris"],["Wolf"]],
	["Gaia",["Fungus"],["Hydra"]],
	["Heqet",["Frog"],[]],
	["Mikaboshi",["Void"],[]],
	["Prometheus",["Foundry","Clockwork"],["Gnome"]],
	["Ourea",["Granite","Ourea"],["Living Avalanche"]],
	["Vrtra",["Desert","Drought"],[]],	
	["Xiuhtecuhtli",["Exhuberant"],["Fire Dancer"]],
	[,[],[]],	
	[,[],[]],

//SecondOrigin-specific (Mythborn)

	["Light Elf",["Golden"],[]],
	["Dark Elf",["Silver"],[]]

 ]
 
originDefaultRandom = [] 
 combat1DefaultRandom = []
 
 for(i=0;i<firstAspectList.length;i++){if(chosenNPC[3].name === firstAspectList[i][0] || chosenNPC[0].type === firstAspectList[i][0] || chosenNPC[0].originString === firstAspectList[i][0] || chosenNPC[0].name === firstAspectList[i][0] || chosenNPC[0].secondOrigin === firstAspectList[i][0]){originDefaultRandom = originDefaultRandom.concat(firstAspectList[i][1])}}
 for(i=0;i<firstAspectList.length;i++){if(chosenNPC[3].name === firstAspectList[i][0] || chosenNPC[0].type === firstAspectList[i][0] || chosenNPC[0].originString === firstAspectList[i][0] || chosenNPC[0].name === firstAspectList[i][0] || chosenNPC[0].secondOrigin === firstAspectList[i][0]){combat1DefaultRandom = combat1DefaultRandom.concat(firstAspectList[i][2])}}



//combat1DefaultRandom = combat1Default[Math.floor(Math.random() * combat1Default.length)];
defaultOriginAspect = new Aspect( originDefaultRandom[Math.floor(Math.random()*originDefaultRandom.length)] + " " + combat1DefaultRandom[Math.floor(Math.random()*combat1DefaultRandom.length)],"0","0",["31"],["2","3"],"2")    



var rand = defaultOriginAspect.name


if(enemyNumber > 1){rand += " (" + enemyNumber + ")"};


//____________________________________________________________________________________________________


//First Aspect Chooser ---------------------------------------------------------------------------
// Génère un Aspect basé sur l'Origine

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
     "He Comes at Night"], "Titanspawn", "Night"),
 orderAspects = new Aspect([
     "Geometry Fanatic",
     "Obsessed with Perfection",
     "Hatred of Chaos",
     "Confirmity Above All",
     "Made from Marble",
     "Hunger of Order",
     "Fear of Chaos",
     "Unnervingly Direct",
     "Indoctrinator",
     "Relentless Advance"], "Titanspawn", "Order"),
 fireAspects = new Aspect([
     "Rage-Filled",
     "Walking Blaze",
     "Ash Maker",
     "Self Combustion",
     "Living Bomb",
     "I am the Fire in Firearms",
     "Mad Inventor",
     "Hatred of Water",
     "Walking Volcano"], "Titanspawn", "Fire"),
 lightAspects = new Aspect([
     "Light Cannot be Stopped",
     "A Light Into the Darkness",
     "Unworthy of My Sight",
     "Bright-Eyed Followers",
     "Sear Their Eyes",
     "Fervorous Faith",
     "Light Bringer",
     "Bright Presence"], "Titanspawn", "Light"),
 waterAspects = new Aspect([
     "Drowning is Sacred",
     "To The Depths",
     "Amphibian",
     "Freezing Heart",
     "Drown Them All"],"Titanspawn","Ocean"),  
 shadowAspects = new Aspect([
     "Extinguish the Light",
     "Reign Through Fear",
     "Shadow on the Land",
     "Shadow Affinity"],"Titanspawn","Depths"),
 skyAspects = new Aspect([
     "The Skies are Mine",
     "One With the Sky"],"Titanspawn","Sky"), 
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
     "Horrid Stench"],"Titanspawn","World"),
 deathAspects = new Aspect([
     "Cold Embrace",
     "Feast of Souls"],"Titanspawn","Death"),
 
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
     "Walk Under the Sun"], "Mythborn", "Summer Court"), 
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
     "He Comes at Night"], "Mythborn", "Winter Court"),      
 jadeSeaAspects = new Aspect([
     "Fire Breath",
     "Frost Breath",
     "Water Mastery",
     "Sky Mastery",
     "The Master",
     "Tyrant",
     "Arrogant",
     "Wise",
     "Poison Breath"], "Mythborn", "Jade Sea"),  
 darkForestAspects = new Aspect([
     "Creepy",
     "One with the Earth",
     "Attuned to the Forest",
     "Entling Servants",
     "Care for the Community",
     "Animal Companions"], "Mythborn", "Dark Forest"),      
 shambhalaAspects = new Aspect([
     "Wise",
     "Karmic Obsession",
     "Well Connected",
     "Enlightened Allies",
     "Cultist Servants",
     "Respect for the Gods"], "Mythborn", "Shambhala"),      
    
	 merlinAspects = new Aspect([
     "Wise",
     "Gallant",
     "Disciple of Merlin",
     "Mythborn Allies",
     "Forest Dweller",
     "Respect your Oaths"], "Enlightened", "Circle of Merlin"),      
    
	 jadefistAspects = new Aspect([
     "Underground Warrior",
     "Ancient Wealth",
     "Well Connected",
     "Friend to the Weak",
     "Honor Above All",
     "Protect Our Own"], "Enlightened", "Order of the Jade Fist"),      
    
	 cabalAspects = new Aspect([
     "Downright Creepy",
     "Hidden Talents",
     "Innder Darkness",
     "Arcane Knowledge",
     "Clarity of Purpose",
     "Disciple of the Kaballah"], "Enlightened", "Cabal"),      
    
	 illuminatiAspects = new Aspect([
     "Greed is Good",
     "Power Hungry",
     "Me First...What 'Others'?",
     "Bribery is Magic",
     "Impeccable Suit",
     "No Such Thing as Small Profit"], "Enlightened", "Illuminati"),      
    
	
	
// name = new Aspect("name","type","origin"),
]



var aspect1Options = aspect1.filter(function (el) {
  return el.origin === chosenNPC[0].originString
});

var rand2 = aspect1Options[0].name[Math.floor(Math.random()*(aspect1Options[0].name.length))];

//____________________________________________________________________________________________________


//Second Aspect Chooser ---------------------------------------------------------------------------
// Génère un Aspect basé sur la personnalité

//____________________________________________________________________________________________________


var rand3 = chosenNPC[1][0][3][0][Math.floor(Math.random()*(chosenNPC[1][0][3][0].length))] + " " + chosenNPC[1][2][3][1][Math.floor(Math.random()*(chosenNPC[1][2][3][1].length))]


//____________________________________________________________________________________________________


//Legendary Abilities  + 3rd Aspect Chooser ------------------------------------------------------------------
// Choisi les Legendaries en fonction de l'origine, puis un Aspect basé sur les Legendaries choisies.

//____________________________________________________________________________________________________




var rand5 = (chosenNPC[2][0][2].aspectVariables[0] + " " + chosenNPC[2][1][2].aspectVariables[1] + "<br><b>Legendary Abilities:</b> <br>  &nbsp;&nbsp;\n" + chosenNPC[2][0][0] + " (" + legendaryBonus + ")<br>&nbsp;&nbsp; \n" + chosenNPC[2][1][0] + " (" + legendaryBonus2 + ")")



//____________________________________________________________________________________________________


//Skills Maker ------------------------------------------------------------------


//____________________________________________________________________________________________________


var randSkills = (chosenNPC[1][0][0] + " +" + (2+skillBonus) +  ","+
     chosenNPC[1][1][0] + " +"  + (1+skillBonus) +  ","+
     chosenNPC[1][2][0] + " +"  + (1+skillBonus) +  ","+
     chosenNPC[1][3][0] + " +"  + (1+skillBonus));
//Sorts the highest skills, top first, and gives them a game-normal value. Adds skill bonus from numbers/Boss         
      
 
//name = new Aspect("name","type","origin","subOrigin","legend","intelligence","behavior","combat1","combat2"),


//____________________________________________________________________________________________________


//Stunts Maker ------------------------------------------------------------------


//____________________________________________________________________________________________________
// name = new Stunt("description","dangerlevel"),
    //Here only varname, Name, combat1 and combat2 matter, and the Effect part is under "type"
	
	
	/*
function stuntCalculator(bonusType,costLevelSetter){
 randomEffect2 = Math.floor(Math.random() * costLevelSetter)
 randomEffect = randomEffect2 + 1 + bonusType  
}
     
// randomEffect2 here is the Cost of the ability, while randomEffect is the actual power of the ability
     
stuntCalculator(stuntBonus,4)         
stuntEffect = []

function stuntEffectCreator(){
     
  stuntEffect = [
// These are the Active Effects.
       // Lvl 2
energyBlast = new Stunt("use a Legendary Ability for free as an Attack action",2,"Legendary",[2,0,0,0],"Active",["Group1","Boss","Solo","Group2"]),
mysticPower = new Stunt("use a Legendary Ability for free to Create a Personal Advantage",2,"Legendary",[2,4,3,0],"Active",["Group1","Boss","Solo","Group2"]),
innerPower = new Stunt("invoke " + rand + " for free as an Attack action",2,"Personal Aspect",[2,0,0,0],"Active",["Group1","Boss","Solo","Group2"]),
outerPower = new Stunt("invoke " + rand + " for free as a Create an Advantage action",2,"Personal Aspect",[1,3,4,0],"Active",["Group1","Boss","Solo","Group2"]),
mysticConstruct = new Stunt("use a Legendary Ability for free to Create a Situational Advantage",2,"Legendary",[1,2,3,4],"Active",["Group1","Boss","Solo","Group2"]),
affectOther = new Stunt("use a Legendary Ability for free to Create a Character Advantage",2,"Legendary",[1,2,3,4],"Active",["Group1","Boss","Solo","Group2"]),
uniqueNature = new Stunt("invoke " + rand + " for free to Create a Character Advantage",2,"Personal Aspect",[1,2,3,4],"Active",["Group1","Boss","Solo","Group2"]),
allyHelp = new Stunt("give an ally a Free Invocation on an Aspect",2,"Any",[1,4,0,0],"Active",["Group1","Boss","Solo","Group2"]),
fatePointGain = new Stunt("gain a Fate Point",2,"Fate Point",[1,2,3,4],"Active",["Group1","Boss","Solo","Group2"]), 
regeneration = new Stunt("Remove a Minor Consequence from an ally",2,"Defense",[1,0,0,0],"Active",["Group1","Boss","Solo","Group2"]),
regeneration = new Stunt("Remove a Minor Consequence from yourself",2,"Any",[4,0,0,0],"Active",["Group1","Boss","Solo","Group2"]),        
       // Lvl 3
aspectBonusAlly = new Stunt("when an ally invokes an Aspect you created, gain +3 instead",3,"Any",[1,3,4,0],"Active",["Group1","Boss","Solo","Group2"]), 
massweaken3 = new Stunt("all enemies have -1 on their next Defense roll",3,"Any",[3,2,4,0],"Active",["Group1","Boss","Solo","Group2"]), 
        // Lvl 4
legendNature = new Stunt("you can use your Legendary Ability for free using non-Legendary Rolls until the end of the Scene",4,"Legendary",[1,3,4,0],"Active",["Group1","Boss","Solo","Group2"]),
energyBlast4 = new Stunt("use a Legendary Ability for free as an Attack action twice",4,"Legendary",[2,0,0,0],"Active",["Group1","Boss","Solo","Group2"]),
mysticPower4 = new Stunt("use a Legendary Ability for free to Create a Personal Advantage twice",4,"Legendary",[1,4,3,0],"Active",["Group1","Boss","Solo","Group2"]),
innerPower4 = new Stunt("invoke \"" + rand + "\" for free as an Attack action twice",4,"Personal Aspect",[2,0,0,0],"Active",["Group1","Boss","Solo","Group2"]),
outerPower4 = new Stunt("invoke " + rand + " for free as a Create an Advantage action twice",4,"Personal Aspect",[1,2,3,4],"Active",["Group1","Boss","Solo","Group2"]),
      // Lvl 5


//_____________________
     
   ]  
function pushStunt2(uses){
for(i=-4;i<40;i++){
// These are the Active Effects.
  stuntEffect.push(shieldScaler = new Stunt("an ally has +" + i + " on their next Defense roll (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[0,1,4,0],"Active",["Group1","Boss","Solo","Group2"]));
  stuntEffect.push(defendScaler = new Stunt("get +"+i+" to your next Defense roll (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Defense",[2,4,0,0],"Active",["Group1","Boss","Solo","Group2"]));
  stuntEffect.push(createAspectScaler = new Stunt("automatically create an Aspect that requires a +"+i+" opposition to remove (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[1,3,4,0],"Active",["Group1","Boss","Solo","Group2"]));
  stuntEffect.push(massfogScaled = new Stunt("all enemies have -"+Math.ceil(i/2)+" on their next Attack roll (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[1,4,3,0],"Active",["Group1","Boss","Solo","Group2"]))
  stuntEffect.push(healAlly = new Stunt("heal an ally's Stress and Consequences to a total of "+ Math.ceil(i*0.75) + " (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[1,0,4,0],"Active",["Group1","Boss","Group2"]))     
  stuntEffect.push(shield = new Stunt("gain the \"Shield\" Personal Aspect and get two +"+ Math.ceil(i/2) + " Stress Boxes (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[0,4,0,0],"Active",["Group1","Boss","Group2"]))     
  stuntEffect.push(shield = new Stunt("create the \"Shield\" Personal Aspect on an ally. They get two +"+ Math.ceil(i/2) + " Stress Boxes (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[0,1,4,0],"Active",["Group1","Boss","Group2"]))     
  stuntEffect.push(situationBuff = new Stunt("The next time you create a Situation Aspect, all enemies have -"+Math.ceil(i/3)+" to a Skill while it is Active (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[1,3,4,2],"Active",["Group1","Boss","Group2","Solo"]))     
  stuntEffect.push(soloBuff = new Stunt("The next time you create a Character Aspect, the target has -"+Math.ceil(i/2)+" to two Skills while it is Active (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[1,3,4,2],"Active",["Group1","Boss","Group2","Solo"]))     
  stuntEffect.push(attackSelfBuff = new Stunt("the next time you create a Character Aspect, your next Attack gains +"+Math.ceil(i)+" if it is Active (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[0,0,4,2],"Active",["Group1","Boss","Group2","Solo"]))     
  stuntEffect.push(attackAllyBuff = new Stunt("the next time you create a Character Aspect, an ally's next Attack gains +"+Math.ceil(i)+"if it is Active (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[1,3,4,0],"Active",["Group1","Boss","Group2"]))     
  stuntEffect.push(attackSelfBuff = new Stunt("the next time you create a Situation Aspect, your next Attack gains +"+Math.ceil(i/3)+" for each target if it is Active (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[0,0,4,2],"Active",["Group1","Boss","Group2","Solo"]))     
  stuntEffect.push(defenseSelfBuff = new Stunt("the next time you create a Personal Aspect, you have +"+Math.ceil(i/3)+" to Defense Rolls while it is Active (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[0,1,4,0],"Active",["Group1","Boss","Group2","Solo"]))     
  stuntEffect.push(defenseAllyBuff = new Stunt("the next time you create a Personal Aspect, the target ally has +"+Math.ceil(i/3)+" to Defense Rolls while it is Active (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[0,1,4,0],"Active",["Group1","Boss","Group2"]))     
  stuntEffect.push(stackSelfBuff = new Stunt("the next time you create a Situation Aspect, you gain +"+Math.ceil(i/3)+" to a Skill every turn it is Active (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[3,1,4,2],"Active",["Group1","Boss","Group2","Solo"]))     
  stuntEffect.push(stackOtherBuff = new Stunt("the next time you create a Situation Aspect, an ally gains +"+Math.ceil(i/3)+" to a Skill every turn it is Active (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[3,1,4,2],"Active",["Group1","Boss","Group2"]))     
  stuntEffect.push(stackSelfHeal = new Stunt("the next time you create a Situation Aspect, you heal a Stress Box or Consequence up to a value of +"+Math.ceil(i/3)+" every turn it is Active (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[0,0,4,0],"Active",["Group1","Boss","Group2","Solo"]))     
  stuntEffect.push(stackOtherHeal = new Stunt("the next time you create a Situation Aspect, an ally heals a Stress Box or Consequence up to a value of +"+Math.ceil(i/3)+" every turn it is Active (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[0,1,4,0],"Active",["Group1","Boss","Group2"]))     
  stuntEffect.push(stackSelfLegend = new Stunt("the next time you create a Situation Aspect, you gain  "+Math.ceil(i/9)+" Legendary Ability uses every turn it is Active (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[0,0,4,0],"Active",["Group1","Boss","Group2","Solo"]))     
      
     
}}
       
   pushStunt2(1);      
   pushStunt2(2);      
   pushStunt2(3); 
// Creates Stutns for 1-3 uses. New function needed for Passives

     // Crée des Stunts a différents niveaux de puissance, permettant plusieurs permutations du meme Stunt en fonction du niveau du combat.
function pushStuntPassives(){
for(i=-4;i<40;i++){
  stuntEffect.push(physicalResist = new Stunt("you have +" + Math.ceil(i/3) + " to Defense Rolls against Physical attacks ",i,"Any",[3,4,0,0],"Passive",["Group1","Boss","Solo","Group2"]));
  stuntEffect.push(magicResist = new Stunt("you have +" + Math.ceil(i/2) + " to Defense Rolls against Non-Physical attacks ",i,"Any",[3,4,0,0],"Passive",["Group1","Boss","Solo","Group2"]));
  stuntEffect.push(rageAlly = new Stunt("you have the \"Rage\" Aspect and have +" + Math.ceil(i*0.75) + " to Attack Rolls when an ally has suffered a Consequence",i,"Any",[0,2,4,0],"Passive",["Group1","Boss","Group2"]));
  stuntEffect.push(allyChannel = new Stunt("you have the \"Empowered\" Aspect and have +" + Math.ceil(i*0.50) + " to Attack Rolls until an ally has suffered a Consequence",i,"Any",[0,2,4,0],"Passive",["Group1","Boss","Group2"]));
  stuntEffect.push(allyChannel2 = new Stunt("you have the \"Empowered\" Aspect and have +" + Math.ceil(i*0.75) + " to Defense Rolls until an ally suffers a Consequence",i,"Any",[0,2,4,0],"Passive",["Group1","Boss","Group2"]));
  stuntEffect.push(allyBuff = new Stunt("you have the \"Protector\" Aspect and your allies have +" + Math.ceil(i/3) + " to Defense Rolls until you are Taken Out",i,"Any",[1,0,4,0],"Passive",["Group1","Boss","Group2"]));
  stuntEffect.push(allyEnrage = new Stunt("you have the \"Enrager\" Aspect and your allies have +" + Math.ceil(i/3) + " to Attack Rolls until you are Taken Out",i,"Any",[0,1,4,0],"Passive",["Group1","Boss","Group2"]));
  stuntEffect.push(bleedEnrage = new Stunt("you have +" + Math.ceil(i/5) + " to Attack Rolls every time you take a Consequence ",i,"Any",[2,4,0,0],"Passive",["Group1","Boss","Solo","Group2"]));
  stuntEffect.push(bleedBuff = new Stunt("you have +" + Math.ceil(i/4) + " to Create an Advantage Rolls every time you take a Consequence ",i,"Any",[2,4,3,1],"Passive",["Group1","Boss","Solo","Group2"]));
  stuntEffect.push(lifeSteal = new Stunt("you gain a +" + Math.ceil(i/2) + " Stress Box every time you inflict a Consequence",i,"Any",[2,4,0,0],"Passive",["Group1","Boss","Solo","Group2"]));
  stuntEffect.push(thorns = new Stunt("whenever an enemy attacks you in melee, they take an Attack at +"+ Math.ceil(i/2) + " against Physique",i,"Any",[2,4,0,0],"Passive",["Group1","Boss","Solo","Group2"]));
  stuntEffect.push(antiMagy = new Stunt("you have the \"Dampening Field\" Aspect and all enemies have -"+ Math.ceil(i/4) + " to Legendary Rolls until you are Taken Out",i,"Any",[1,4,3,0],"Passive",["Group1","Boss","Solo","Group2"]));
  stuntEffect.push(weakAttack = new Stunt("you have the \"Weakening Attack\" Aspect and an enemy gets -"+ Math.ceil(i/2) + " to a Skill when you inflict Physical Stress or a Physical Consequence on them",i,"Any",[1,4,3,0],"Passive",["Group1","Boss","Solo","Group2"]));
  stuntEffect.push(aspectBonus5 = new Stunt("until the end of the Scene, when you invoke a Personal Aspect or an Aspect you created, gain an additional +"+Math.floor(i/3+1)+" ",i,"Any",[1,3,4,0],"Passive",["Group1","Boss","Solo","Group2"]))
  stuntEffect.push(aspectBonusAlly = new Stunt("until the end of the Scene, whenever an ally invokes an Aspect you created, they gain an additional +"+Math.floor(i/3+1)+" ",i,"Any",[1,3,4,0],"Passive",["Group1","Boss","Group2"]))     
    
}}
pushStuntPassives()
pushStuntPassives()
pushStuntPassives()


}

stuntEffectCreator()

         
var stuntCost = [ 
 
// These are the Active Costs.
// Ceci est ajouté aux Stunts pour leur donner un cout - ainsi un Stunt plus fort peut etre compensé par un coute plus fort. Deux PNJ du meme niveau
// avec le meme Stunt auront des effets différents grace au cout.
     
       // Lvl 0
free = new Stunt("At any time, ",0,"Any",[1,2,3,4],"Active",["Group1","Boss","Solo","Group2"]),
       // Lvl 1
recklessAttack = new Stunt("On your turn, ",1,"Defense",[1,2,3,0],"Active",["Group1","Boss","Solo","Group2"]), 
mentalStress1 =  new Stunt("On your turn, ",1,"Any",[1,2,3,4],"Active",["Group1","Boss","Solo","Group2"]),   
physicalStress1 =  new Stunt("On your turn, ",1,"Any",[1,2,3,0],"Active",["Group1","Boss","Solo","Group2"]),        
       // Lvl 2  
fatePoint = new Stunt("For 1 Fate Point, ",2,"Fate Point",[1,2,3,4],"Active",["Group1","Boss","Solo","Group2"]),  
fatePoint2 = new Stunt("For 1 Legendary Ability use, ",2,"Legendary",[1,2,3,4],"Active",["Group1","Boss","Solo","Group2"]),  
mentalStress2 =  new Stunt("Take 2 Mental Stress, ",2,"Any",[1,2,3,4],"Active",["Group1","Boss","Solo","Group2"]),   
lowPain = new Stunt("You take a Minor Physical Consequence, and ",2,"Defense",[1,2,3,0],"Active",["Group1","Boss","Solo","Group2"]),        
physicalStress2 =  new Stunt("Take 2 Physical Stress, ",2,"Any",[1,2,3,0],"Active",["Group1","Boss","Solo","Group2"]),   
     // Lvl 3
newAspect = new Stunt("You gain the Aspect: 'Vulnerable', and ",3,"Any",[1,3,0,0],"Active",["Group1","Boss","Solo","Group2"]),     
recklessAttack3 = new Stunt("Gain -3 to your next Defense Roll, and ",3,"Defense",[1,2,3,0],"Active",["Group1","Boss","Solo","Group2"]),
focus = new Stunt("Lose your Action this turn, and ",3,"Any",[1,3,0,0],"Active",["Group1","Boss","Solo","Group2"]),
mentalStress3 =  new Stunt("Take 3 Mental Stress, ",3,"Any",[1,2,3,4],"Active",["Group1","Boss","Solo","Group2"]),   
transform = new Stunt("Remove an Aspect you created, and ",3,"Any",[1,3,4,0],"Active",["Group1","Boss","Solo","Group2"]),                     
physicalStress3 =  new Stunt("Take 3 Physical Stress, ",4,"Any",[1,2,3,0],"Active",["Group1","Boss","Solo","Group2"]),   

// These are the Passive Costs.

recklessAttack = new Stunt("Passively, ",0,"Any",[1,2,3,4],"Passive",["Group1","Boss","Solo","Group2"]),   
recklessAttack = new Stunt("Passively, ",1,"Any",[1,2,3,4],"Passive",["Group1","Boss","Solo","Group2"]), 
recklessAttack2 = new Stunt("Passively, ",2,"Any",[1,2,3,4],"Passive",["Group1","Boss","Solo","Group2"]), 
recklessAttack3 = new Stunt("You have -1 to all Defense Rolls, ",3,"Any",[1,2,3,4],"Passive",["Group1","Boss","Solo","Group2"]), 
recklessAttack4 = new Stunt("You have -1 to all Defense Rolls, ",4,"Any",[1,2,3,4],"Passive",["Group1","Boss","Solo","Group2"]), 

     
   ]       
   
var stuntEffectOptions = [];
var stuntCostOptions = [];

   // Prend le niveau du Stunt, le cout, le niveau du combat et les points accordés aux Stunts, et génère des Stunts.   
     
function stuntChooser (targettedArray,targettedSecondArray){   
     
for(h=0; h < targettedArray.length; h++) {
  if ((randomEffect === targettedArray[h].dangerlevel))
{ stuntEffectOptions.push(targettedArray[h]) }}

 randEffect = stuntEffectOptions[Math.floor(Math.random() * stuntEffectOptions.length)];
    
for(j=0; j < stuntCost.length; j++) {
  if ((randomEffect2 ===  Math.floor(stuntCost[j].dangerlevel))){
  stuntCostOptions.push(stuntCost[j])   
  }} 
     
 randCost = stuntCostOptions[Math.floor(Math.random() * stuntCostOptions.length)];

}
stuntChooser(stuntEffect,stuntEffectOptions);
while((randCost.stuntType === randEffect.stuntType  && (randEffect.stuntType !== "Any" || randCost.stuntType !== "Any")) || (randEffect.type !== randCost.type)){
stuntChooser(stuntEffect,stuntEffectOptions);
}
  
stuntResultActives = randCost.description + randEffect.description  
// This is the result of the Stunt making function for Active Stunts
     */
	 
var stuntEffect = function(specificity,effect,costMultiplier,roles) {
  this.specificity = specificity;
  this.effect = effect;
  this.costMultiplier = costMultiplier;
  this.roles = roles;
}	 
	 
	function stuntDeciderFunction(relevantBonus,relevantRole){
		
 
//stuntBonus is the core value 

	
	//Start of Triggers Pack

var triggersModifier = Math.ceil(Math.random()*3)

var triggers = [

onYourTurn = new stuntEffect("N/A","(Uses: " + triggersModifier + ") On your turn, ",1*triggersModifier,"Any"),
onYourTurn2 = new stuntEffect("N/A","(Uses: " + triggersModifier + ") On your turn, ",1*triggersModifier,"Any"),
onYourTurn3 = new stuntEffect("N/A","(Uses: " + triggersModifier + ") On your turn, ",1*triggersModifier,"Any"),
onYourTurn4 = new stuntEffect("N/A","(Uses: " + triggersModifier + ") On your turn, ",1*triggersModifier,"Any"),
combatStart = new stuntEffect("N/A","At the start of Combat, ",1,"Any"),
everyTurn = new stuntEffect("N/A","Every turn, ",5,"Any"),
consequenceTaken = new stuntEffect("N/A","When you take a Consequence, ",1.5,"Any"),
nextTurn = new stuntEffect("N/A","(Uses: " + triggersModifier + ") Next turn, ",0.8*triggersModifier,"Any"),
attackAction = new stuntEffect("N/A","Whenever you perform an Attack action, ",2,"Any"),
attackAction = new stuntEffect("N/A","Whenever you perform a Defend action, ",3,"Any"),
attackAction = new stuntEffect("N/A","Whenever you perform a Create an Aspect action, ",2,"Any"),
attackAction = new stuntEffect("N/A","Whenever you perform an Overcome action, ",1,"Any"),
adjacentAlly = new stuntEffect("N/A","The first " + triggersModifier + " times you are adjacent to an ally, ",1.5*triggersModifier,"Any"),
adjacentEnemy = new stuntEffect("N/A","The first " + triggersModifier + " times you are adjacent to an enemy, ",1*triggersModifier,"Any"),
enemyConsequenceTaken = new stuntEffect("N/A","Whenever an enemy takes a Consequence, ",1,"Any"),
enemyConsequenceTaken2 = new stuntEffect("N/A","Whenever an enemy takes a Consequence, ",1,"Any")

]	 

// This bit finds a random Trigger, then makes sure that relevantBonus is high enough to pay for it, then divides relevantBonus by the Trigger's cost
		function establishTrigger(){
	 chosenTrigger = triggers[Math.floor(Math.random()*triggers.length)]
	 }
	 establishTrigger()
	 while(relevantBonus/chosenTrigger.costMultiplier<1){establishTrigger()}
	 relevantBonus /= chosenTrigger.costMultiplier
	 
	 
	//End of Triggers Pack

	//Start of Duration Pack 1
var durations1Modifier = Math.ceil(Math.random()*3)

var durations1 = [

limitedTurns = new stuntEffect("N/A","for " + (durations1Modifier+1) + " Round(s), ",1*(durations1Modifier+1),"Any"),
limitedTurns2 = new stuntEffect("N/A","for " + (durations1Modifier+1) + " Round(s), ",1*(durations1Modifier+1),"Any"),
wholeFight = new stuntEffect("N/A","every turn for the rest of the Fight, ",5,"Any"),
instant = new stuntEffect("N/A","for a Round, ",1,"Any"),
instant2 = new stuntEffect("N/A","for a Round, ",1,"Any"),
instant3 = new stuntEffect("N/A","for a Round, ",1,"Any"),
instant4 = new stuntEffect("N/A","for a Round, ",1,"Any"),

createAlly = new stuntEffect("NA","create an 'Ally' Aspect at + "+ (durations1Modifier+playerLevelVar*2+2) +" which has the ability: While active, ",durations1Modifier*2,"Any"),
]	 

// This bit finds a random Trigger, then makes sure that relevantBonus is high enough to pay for it, then divides relevantBonus by the Trigger's cost
		function establishDurations1(){
	 chosenDuration1 = durations1[Math.floor(Math.random()*durations1.length)]
	 }
	 establishDurations1()
	 while(relevantBonus/chosenDuration1.costMultiplier<1){establishDurations1()}
	 relevantBonus /= chosenDuration1.costMultiplier



	 //End of Durations Pack 1
	 

	 //Start of Durations Pack 2
var durations2Modifier = Math.ceil(Math.random()*3)

var durations2 = [

amplifier = new stuntEffect("N/A",", increased by " + durations2Modifier + " every turn ",1+durations2Modifier*1.25,"Any"),
limitedTurns2 = new stuntEffect("N/A",". The effect is repeated on adjacent targets on your next Turn",1.75,"Any"),
noDuration21 = new stuntEffect("N/A","",1,"Any"),
noDuration22 = new stuntEffect("N/A","",1,"Any"),
noDuration23 = new stuntEffect("N/A","",1,"Any"),
noDuration24 = new stuntEffect("N/A","",1,"Any"),
noDuration25 = new stuntEffect("N/A","",1,"Any"),
noDuration26 = new stuntEffect("N/A","",1,"Any"),
]	 

// This bit finds a random Trigger, then makes sure that relevantBonus is high enough to pay for it, then divides relevantBonus by the Trigger's cost
		function establishDurations2(){
	 chosenDuration2 = durations2[Math.floor(Math.random()*durations2.length)]
	 }
	 establishDurations2()
	 while(relevantBonus/chosenDuration2.costMultiplier<1){establishDurations2()}
	 relevantBonus /= chosenDuration2.costMultiplier


	 //End of Durations Pack 2
	 
	 	 //Start of Targets Pack Enemies
	 		function establishTargets(){
var targetsModifier = Math.ceil(Math.random()*3)
	 allyOrEnemy = Math.random()


var targets1 = [

aoe = new stuntEffect("N/A","enemies in an area with a radius of "+(targetsModifier+1)+" Hex ",targetsModifier*1.5,"Any"),
enemyAoe = new stuntEffect("N/A","an enemy and its allies within "+(targetsModifier)+" Hex ",targetsModifier*1.5,"Any"),
nearbyEnemies = new stuntEffect("N/A","enemies within "+(targetsModifier+1)+" Hex(es) of you ",targetsModifier*1.5,"Any"),
enemyAttack = new stuntEffect("enemyAction","enemies that perform an Attack Action ",1,"Any"),
enemyAspect = new stuntEffect("enemyAction","enemies that perform a Create an Aspect Action ",1,"Any"),
enemyDefend = new stuntEffect("enemyAction","enemies that perform a Defend Action ",1,"Any"),
enemyOvercome = new stuntEffect("enemyAction","enemies that perform an Overcome Action ",1,"Any"),
lineEnemy = new stuntEffect("N/A","enemies in a line of "+(targetsModifier+1)+" Hex ",targetsModifier/2,"Any"),
allEnemies = new stuntEffect("N/A","all enemies ",targetsModifier*playerNumberVar,"Any"),
multipleEnemies = new stuntEffect("N/A",targetsModifier+1 + " enemies ",targetsModifier+1,"Any"),
//smallDebuff = new stuntEffect("N/A","has -1 to Physique ",1,"Any")

]	

var targets2 = [

selfTarget = new stuntEffect("N/A","you ",1,"Any"),
allyTarget = new stuntEffect("N/A","an ally ",1,"Any"),
allAllies = new stuntEffect("N/A","all allies ",2,"Any"),
selfTarget2 = new stuntEffect("N/A","you ",1,"Any"),
allyTarget2 = new stuntEffect("N/A","an ally ",1,"Any"),
allAllies2 = new stuntEffect("N/A","all allies ",2,"Any"),


allyAttack = new stuntEffect("allyAction","allies that perform an Attack Action ",1,"Any"),
allyAspect = new stuntEffect("allyAction","allies that perform a Create an Aspect Action ",1,"Any"),
allyDefend = new stuntEffect("allyAction","allies that perform a Defend Action ",1,"Any"),
allyOvercome = new stuntEffect("allyAction","allies that perform an Overcome Action ",1,"Any"),
//smallDebuff = new stuntEffect("N/A","has -1 to Physique ",1,"Any")

]	 

// This bit finds a random Trigger, then makes sure that stuntBonus is high enough to pay for it, then divides stuntBonus by the Trigger's cost

	 chosenTargets = targets1[Math.floor(Math.random()*targets1.length)]

	if(allyOrEnemy >0.50){chosenTargets = targets1[Math.floor(Math.random()*targets1.length)]}
	else{chosenTargets = targets2[Math.floor(Math.random()*targets2.length)]}
	 }	 
	 establishTargets()

	 while(relevantBonus/chosenTargets.costMultiplier<1){establishTargets()}

	 relevantBonus /= chosenTargets.costMultiplier
	 
	

	 //End of Targets Pack Enemies
	 
	 //Start of Effect Pack Enemies
	 		function establishEffects1(){
var effects1Modifier = Math.ceil(Math.random()*(playerLevelVar*2+2))

var effects1 = [

attackDebuff = new stuntEffect("enemyAction","gain(s) -"+effects1Modifier+" to their Attack Actions ",effects1Modifier/2,["Support-Controller","Party Face"]),
defendDebuff = new stuntEffect("enemyAction","gain(s) -"+effects1Modifier+" to their Defend Actions ",effects1Modifier/2,["Support-Controller","Party Face"]),
attackDebuff2 = new stuntEffect("enemyAction","gain(s) -"+effects1Modifier+" to their Attack Actions ",effects1Modifier/2,["Support-Controller","Party Face"]),
defendDebuff2 = new stuntEffect("enemyAction","gain(s) -"+effects1Modifier+" to their Defend Actions ",effects1Modifier/2,["Support-Controller","Party Face"]),
aspectDebuff = new stuntEffect("enemyAction","gain(s) -"+effects1Modifier+" to their Create an Aspect Actions ",effects1Modifier/2,["Support-Controller"]),
overcomeDebuff = new stuntEffect("enemyAction","gain(s) -"+effects1Modifier+" to their Overcome Actions ",effects1Modifier/3,["Support-Controller"]),
ALLDebuff = new stuntEffect("enemyAction","gain(s) -"+(effects1Modifier+playerLevelVar*2+2)+" to ALL their Actions ",effects1Modifier,["Support-Controller","Party Face"]),
loseLegendary = new stuntEffect("NA","lose(s) "+effects1Modifier +" Legendary Ability uses ",effects1Modifier*3,["Support-Controller"]),
attackSimple = new stuntEffect("NA","take(s) an Attack at +"+(effects1Modifier+playerLevelVar*2),effects1Modifier,["Tank","Damage Dealer"]),
attackSimple2 = new stuntEffect("NA","take(s) an Attack at +"+(effects1Modifier+playerLevelVar*2),effects1Modifier,["Tank","Damage Dealer"]),
pullEnemy = new stuntEffect("NA","is/are pulled towards you by "+effects1Modifier+" Hexes ",effects1Modifier/2,["Tank","Party Face"]),
pushEnemy = new stuntEffect("NA","is/are pushed away from you by "+effects1Modifier+" Hexes ",effects1Modifier/2,["Skill Monkey","Support-Controller"]),
legendaryBlock = new stuntEffect("AspectCreation","cannot use Legendary Abilities for "+effects1Modifier+" Round(s) ",effects1Modifier,["Support-Controller","Tank"]),
incapacitated = new stuntEffect("AspectCreation","gain(s) the 'Incapacitated' Aspect created at +"+(effects1Modifier+playerLevelVar*2),effects1Modifier*1.5,"Support-Controller"),
cantMove = new stuntEffect("AspectCreation","gain(s) the 'Unable to Move' Aspect created at +"+(effects1Modifier+playerLevelVar*2),effects1Modifier,["Support-Controller"]),
mindControl = new stuntEffect("AspectCreation","gain(s) the 'Mind Control' Aspect created at +"+(effects1Modifier+playerLevelVar*2),effects1Modifier*2,["Support-Controller","Party Face"]),
//smallDebuff = new stuntEffect("N/A","has -1 to Physique ",1,"Any")

]

var effects2 = [

attackBuff = new stuntEffect("allyAction","gain(s) +"+effects1Modifier+" to Attack Actions ",effects1Modifier/2,["Damage Dealer","Party Face","Support-Controller","Skill Monkey"]),
defendBuff = new stuntEffect("allyAction","gain(s) +"+effects1Modifier+" to Defend Actions ",effects1Modifier/2,["Tank","Support-Controller","Skill Monkey"]),
attackBuff2 = new stuntEffect("allyAction","gain(s) +"+effects1Modifier+" to Attack Actions ",effects1Modifier/2,["Damage Dealer","Party Face","Support-Controller","Skill Monkey"]),
defendBuff2 = new stuntEffect("allyAction","gain(s) +"+effects1Modifier+" to Defend Actions ",effects1Modifier/2,["Tank","Support-Controller","Skill Monkey"]),
//aspectBuff = new stuntEffect("allyAction","gain(s) +"+effects1Modifier+" to Create an Aspect Actions ",effects1Modifier/2,["Party Face","Support-Controller","Skill Monkey"]),
overcomeBuff = new stuntEffect("allyAction","gain(s) +"+effects1Modifier+" to Overcome  and Create and Aspect Actions ",effects1Modifier/1.5,["Party Face","Support-Controller","Skill Monkey"]),
ALLBuff = new stuntEffect("allyAction","gain(s) +"+effects1Modifier+" to ALL Actions ",effects1Modifier,["Party Face","Support-Controller","Skill Monkey"]),
buffLegendary = new stuntEffect("NA","gain(s) "+effects1Modifier +" Legendary Ability uses ",effects1Modifier*3,["Support-Controller","Skill Monkey","Damage Dealer"]),
buffMove = new stuntEffect("NA","move(s) "+effects1Modifier +" Hexes ",effects1Modifier/4,["Support-Controller","Skill Monkey","Damage Dealer","Tank","Party Face"]),

shieldAlly = new stuntEffect("NA","gain(s) a 'Shield' Aspect that prevents damage, created at + "+ (effects1Modifier+playerLevelVar*2+2),effects1Modifier,["Tank"]),
hideAlly = new stuntEffect("NA","become(s) near-impossible to target ('Flight', 'Invisibility', etc)",effects1Modifier*2,["Skill Monkey","Tank","Damage Dealer"]),




]	 

if(relevantRole.name !== "Select Role"){
	effects1 = effects1.filter(function (el) {
  return (el.roles.indexOf(relevantRole.name) != -1)
})

	
	effects2 = effects2.filter(function (ol) {
  return (ol.roles.indexOf(relevantRole.name) != -1)
	})}



// This bit finds a random Trigger, then makes sure that stuntBonus is high enough to pay for it, then divides stuntBonus by the Trigger's cost
	if(allyOrEnemy >0.50){chosenEffects1 = effects1[Math.floor(Math.random()*effects1.length)]; }
	else{chosenEffects1 = effects2[Math.floor(Math.random()*effects2.length)]}
	 
	 }
	 establishEffects1()
	 
	while(relevantBonus/chosenEffects1.costMultiplier<1 || chosenEffects1.specificity === chosenTargets.specificity ){establishEffects1()} 

	//chosenEffects1.roles.indexOf(document.getElementById("mainRole").value || chosenEffects1.specificity === chosenTargets.specificity


	 relevantBonus /= chosenEffects1.costMultiplier
	 
	 totalFinalVarRight = relevantBonus



	 //End of Effect Pack Enemies
	// console.log(relevantBonus + " | " +  chosenTrigger.effect + chosenDuration1.effect + "an enemy " + chosenEffects1.effect + chosenDuration2.effect)

endText =  chosenTrigger.effect + chosenDuration1.effect + chosenTargets.effect + chosenEffects1.effect + chosenDuration2.effect
	 //console.log(endText)
	 }
totalFinalVarRight = 0
	 for(i=0;i<100;i++){
		
		 if(totalFinalVarRight>=1.1 || totalFinalVarRight<=0.9 ){stuntDeciderFunction(stuntBonus,chosenNPC[3])}
	 else{break}
	 
	 }

var rand6 = endText
	 

//stuntDeciderFunction(modifiedStuntBonus2)	 
//var rand7 = endText
totalFinalVarRight = 0

	 for(i=0;i<100;i++){
		
		 if(totalFinalVarRight>=1.1 || totalFinalVarRight<=0.9 ){stuntDeciderFunction(stuntBonus2,chosenNPC[4])}
	 else{break}
	 }
	var rand7 = "<br>\n- " + endText 

	//console.log(rand6 + rand7) 
	
//"Select Role"

//____________________________________________________________________________________________________


// Stress Maker ------------------------------------------------------------------
// Génère plus ou moins de Stress et Conséquences en fonction du niveau du combat

//____________________________________________________________________________________________________

physicalStress = ["<br>\nPhysical Stress: -1 ","-2 ","-3 ","Mild ","Medium "]

mentalStress = ["<br>\nMental Stress: -1 ","-2 ","-3 ","Mild ","Medium "]

function damageMaker(damageType,stringType){
if(damageType === 0){stringType[0] += ""}
if(damageType === 1){stringType[1] += "-2 "}
if(damageType === 2){stringType[0] += "-1 "; stringType[2] += "-3 "}
if(damageType === 3){stringType[0] += "-1 "; stringType[3] += "Mild "; stringType[2] += "-3 "}
if(damageType === 4){stringType[0] += "-1 "; stringType[4] += "Medium "; stringType[2] += "-3 "}
if(damageType === 5){stringType[0] += "-1 "; stringType[3] += "Mild "; stringType[4] += "Medium "; stringType[2] += "-3 "}
}

damageMaker(physicalStressBonus,physicalStress)
damageMaker(mentalStressBonus,mentalStress)
randPhysical = physicalStress[0] + physicalStress[1] + physicalStress[2] + physicalStress[3] + physicalStress[4]
randMental = mentalStress[0] + mentalStress[1] + mentalStress[2] + mentalStress[3] + mentalStress[4]






//____________________________________________________________________________________________________


// NPC Text Maker ------------------------------------------------------------------


//____________________________________________________________________________________________________




if(enemyOneDone != 1){
document.getElementById("outputText").innerHTML="<b> Aspects: </b><br>&nbsp;&nbsp;" + rand  + "<br>&nbsp;&nbsp;" + rand2 + "<br>&nbsp;&nbsp;" + rand3 + "<br>\n&nbsp;&nbsp;"    + rand5 + "<br>\n<b> Skills:</b> " + randSkills + "<br><b>\nStunts:</b> <br>\n- " + rand6 + rand7 + randPhysical + randMental + " </p>"; 
}
else{
document.getElementById("outputText2").innerHTML="<b> Aspects: </b><br>&nbsp;&nbsp;" + rand  + "<br>&nbsp;&nbsp;" + rand2 + "<br>&nbsp;&nbsp;" + rand3 + "<br>\n&nbsp;&nbsp;"  + rand5  + "<br>\n<b> Skills:</b> " + randSkills + "<br><b>\nStunts:</b> <br>\n- " +  rand6 + rand7 + randPhysical + randMental + " </p>"; 
	}

enemyOneDone += 1   


 

	}}
//npcChoice()


//____________________________________________________________________________________________________


// Scene Mechanics Maker ------------------------------------------------------------------


//____________________________________________________________________________________________________




var Scene = function(name,description) {
  this.name = name;
  this.description = description;
};

var setSceneType = function(){

var sceneAspects = [
breakout = new Scene("Breakout","The party is surrounded ('Groups of Enemies' + Challenging Difficulty) and have to make their escape. Enemies will prioritise creating Aspects that block the way to the exit and Incapacitate the party."),
escort = new Scene("Escort","The party is escorting a character. Enemies will prioritise killing the escorted character, so the Party has to keep enemies away and create defensive Aspects. The goal is to escape the Scene."),
channeling = new Scene("Channeling","The party is channeling a ritual, and needs to survive a number of turns. Set Difficulty at 'Challenging' for a 5-6-round Channel, or 'Brutal' for a 3-4 round Channel "),
interrupt = new Scene("Interrupt","The party is attempting to stop a Channeling. One of the Enemies is the Channeler, and stopping the Channeling forces the enemy to Concede the Conflict. Killing the Channneler, or Overcoming the Ritual at a Difficulty of (Number of Players X Level of Players X 4) will stop the Channel"),
KingoftheHill = new Scene("King of the Hill","The party is attempting to gain control over an important position. All party members have to be on or adjacent to the Objective Hex. The Objective Hex and adjacent Hexes is protected by a defensive Aspect at a Difficulty of (Number of Players X Level of Players X 2). Enemies will work to block the party and hold their defensive position"),
CapturetheFlag = new Scene("Capture the Flag","The party is attempting to gain control over an important position while protecting their own. A party member has to pick up the Objective and get back to the party's Objective. The Enemy Objective Hex and adjacent Hexes is protected by a defensive Aspect at a Difficulty of (Number of Players X Level of Players). Enemies will work to block the party and hold their defensive position"),
SpaceInvaders = new Scene("Space Invaders","The party is holding back a tide of enemies trying to get past them (Difficulty: Challenging or Brutal). Every turn, an Enemy takes a Consequence. Enemies will try to Incapacitate the party or get them out of the way. You may add a Defensive Aspect that holds enemies back temporarily. If so, set Difficulty to Challenging"),
SolvethePuzzle = new Scene("Solve the Puzzle","The party is trying to find the key to a spell, mystery, or piece of technology. If they unlock it, they can immediately end the Combat."),
escort = new Scene("Escort","The party is trying to defend an item or position of value, and must keep the enemy away from it at all costs. Enemies will focus on disabling or displacing the Party to get to the Objective."),


]

var randomSceneAspect = Math.floor(Math.random()*sceneAspects.length)

document.getElementById("SceneAspects1").innerHTML = sceneAspects[randomSceneAspect].name 
document.getElementById("SceneAspects2").innerHTML = sceneAspects[randomSceneAspect].description


document.getElementById("SceneAspects3").innerHTML = sceneAspects[randomSceneAspect].name 
document.getElementById("SceneAspects4").innerHTML = sceneAspects[randomSceneAspect].description}

var setSceneTerrain = function(){

var terrainAspects = [
TightQuarters = new Scene("Tight Quarters","The fight takes place over a two-Hex-thick line or canyon."),
Minefield = new Scene("Minefield","When moving more than a Hex in one Turn, roll 4DF. on a natural -1 or less result, characters take 1 un-defendable Damage."),
TheRaid = new Scene("The Raid","The fight takes place over multiple levels, linked by a one-Hex staircase or ramp."),
Abyss = new Scene("Abyss","An abyss splits the room in two. One or two one-Hex bridges allow the room to be crossed. Bridges can be created - or destroyed."),
FloorisLava = new Scene("Floor is Lava","Every turn, multiple Hexes become unpassable. A character forced into one of those Hexes automatically takes a Consequence."),
DifficultTerrain  = new Scene("Difficult Terrain","Players and NPCs don't get their free move on their turns"),
Cluttered = new Scene("Cluttered","About half the Hexes are filled with destructible terrain. Base difficulty to destroy terrain is equal to the Players' Level"),
TheHighGround = new Scene("The High Ground","There are ledges or platforms around the Battlefield with the Aspect 'High Ground', which can be freely invoked at will for relevant Actions."),
]

var randomSceneTerrain = Math.floor(Math.random()*terrainAspects.length)

document.getElementById("SceneTerrain1").innerHTML = terrainAspects[randomSceneTerrain].name
document.getElementById("SceneTerrain2").innerHTML = terrainAspects[randomSceneTerrain].description

document.getElementById("SceneTerrain3").innerHTML = terrainAspects[randomSceneTerrain].name
document.getElementById("SceneTerrain4").innerHTML = terrainAspects[randomSceneTerrain].description


}

var setSceneBonus = function(){

var bonusAspects = [
Prisoner = new Scene("Prisoner","Have the enemy Concede the Conflict whilst at least one has a Serious Consequence Aspect or a similarly-disabling one."),
NoSurvivors = new Scene("No Survivors","Destroy all enemies before they can escape."),
InformationExtraction = new Scene("Information Extraction","Choose 3 Hexes around the battlemap to contain Information, requiring a relevant expertise Roll (Lore, Notice, etc). These are lost once Conflict ends."),
Loot = new Scene("Loot","Choose 3 Hexes around the battlemap to contain Loot, requiring relevant rolls to pick up and carry away. These are lost once Conflict ends."),
ProveyourWorth = new Scene("Prove your Worth","Players can use Successes with Style and Legendary Successes to impress whoever is judging the party, instead of using them to directly help in the Combat."),
]

var randomSceneBonus = Math.floor(Math.random()*bonusAspects.length)

document.getElementById("SceneBonusObjectives1").innerHTML = bonusAspects[randomSceneBonus].name
document.getElementById("SceneBonusObjectives2").innerHTML = bonusAspects[randomSceneBonus].description

document.getElementById("SceneBonusObjectives3").innerHTML = bonusAspects[randomSceneBonus].name
document.getElementById("SceneBonusObjectives4").innerHTML = bonusAspects[randomSceneBonus].description


}



//____________________________________________________________________________________________________


// Godborn Maker Input ------------------------------------------------------------------
//This is gonna go very wrong

//____________________________________________________________________________________________________


//Objects definition
var LegendaryAbility = function(name,description,values,legendaries,aspectVariables) {
  this.name = name;
  this.description = description;
  this.values = values;
  this.legendaries = legendaries;
  this.aspectVariables = aspectVariables;
};

var Role = function(name,legendaries,skills) {
  this.name = name;
  this.legendaries = legendaries;
  this.skills = skills;

};
var secondOrigin = function(name,type,description,originString,originVar,approaches,domains,personalities,totalValues) {
  this.name = name;
  this.type = type;
  this.description = description;
  this.originString = originString;
  this.originVar = originVar;
  this.approaches = approaches;
  this.domains = domains;
  this.personalities = personalities;
  this.totalValues = totalValues;
};
var parameterCalculator = function(name,type,values,legendaries,skills) {
  this.name = name;
  this.type = type;
  this.values = values;
  this.legendaries = legendaries;
  this.skills = skills;

};
var adjective = function(name,values) {
  this.name = name;
  this.values = values;

};

var radios=["logos1","logqos2","logos3","logos4","kosmos1","kosmos2","kosmos3","kosmos4","eros1","eros2","eros3","eros4"]
var displayArray = []


var rolesChoiceArray = [
Default = new Role("Select Role",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),
MeatShield = new Role("Tank",[2,4,3,1,3,2,3,1,1,3,3,2,-1,-1,3,-2,1,-2,-1,0,2,3,0,2,-1,3,1,-1,2,2,4,3,-1,1,2,2,-2,-1,3,2,-3,-2,0,-2,-1,4,3,4,2,-1,1,-1,0,-2,3,1,-1,2,-2,-1,-2,3,2,1,-2,3],[3,-2,-1,2,1,4,3,3,4,3,-1,-2,1,0,4]),
DamageDealer = new Role("Damage Dealer",[2,0,0,1,2,3,2,4,2,4,3,-2,-3,-1,-2,4,1,-1,0,3,1,3,4,-1,3,2,1,0,-1,4,2,-1,3,1,2,2,3,1,3,3,-4,4,1,1,4,1,4,2,-1,-2,4,-2,-2,-1,1,2,3,4,2,1,2,1,4,4,-2,3],[3,-1,-2,3,-2,4,4,1,1,0,-1,-2,4,4,3]),
PartyFace = new Role("Party Face",[1,1,0,3,1,4,2,-3,-3,-4,-3,1,4,3,3,1,1,2,4,2,4,1,-2,4,-1,-1,-1,-2,-1,-3,-3,-2,3,4,-1,-1,1,0,-3,-2,1,-3,-3,3,-2,-1,-4,-4,4,4,-4,4,4,-2,-3,3,-2,2,2,1,2,3,1,4,1,-2],[1,0,4,2,1,-2,2,2,-1,4,4,4,-2,-1,0]),
SkillMonkey = new Role("Skill Monkey",[4,4,3,4,4,4,4,-2,-3,-2,-1,4,2,2,2,-1,-1,4,3,2,2,0,-2,-1,-1,3,2,1,2,-1,-1,1,-1,-2,1,2,-2,3,1,3,3,0,1,4,2,1,-2,-3,-1,-2,-1,0,-1,3,2,1,2,2,4,-2,3,3,1,2,4,1],[3,4,1,4,2,1,4,4,1,0,1,4,1,4,3]),
SupportController = new Role("Support-Controller",[4,4,3,3,4,4,4,1,3,3,4,4,4,2,4,1,3,4,4,3,4,4,1,4,-1,3,3,4,3,2,3,3,4,3,2,3,3,0,3,3,-1,-2,3,2,2,4,-1,-1,4,4,0,4,4,2,4,2,1,2,0,1,1,-1,-3,-1,4,4],[2,-1,4,4,4,2,4,1,2,3,4,-1,-2,1,4]),


]

var parametersArray = [
// Approaches
Careful = new parameterCalculator("Careful","Approach",[0,15,0],[],[]),
Clever = new parameterCalculator("Clever","Approach",[20,0,0],[],[]),
Flashy = new parameterCalculator("Flashy","Approach",[5,10,10],[],[]),
Forceful = new parameterCalculator("Forceful","Approach",[0,15,15],[],[]),
Quick = new parameterCalculator("Quick","Approach",[10,0,10],[],[]),
Sneaky = new parameterCalculator("Sneaky","Approach",[15,0,15],[],[]),

// Domains

War = new parameterCalculator("War Deity","Domain",[0,10,15],[],[]),
Wisdom = new parameterCalculator("Wisdom Deity","Domain",[20,20,0],[],[]),
Leader = new parameterCalculator("Leader of the Gods","Domain",[10,20,5],[],[]),
Father = new parameterCalculator("Progenitor of the Gods","Domain",[10,15,10],[],[]),
Fertility = new parameterCalculator("Fertility Deity","Domain",[0,5,15],[],[]),
Love = new parameterCalculator("Love Deity","Domain",[0,0,20],[],[]),
Travel = new parameterCalculator("Travel Deity","Domain",[5,0,5],[],[]),
Water = new parameterCalculator("Water Deity","Domain",[5,10,10],[],[]),
Sky = new parameterCalculator("Sky Deity","Domain",[15,15,0],[],[]),
Wit = new parameterCalculator("Wit Deity","Domain",[15,0,10],[],[]),
Death = new parameterCalculator("Death Deity","Domain",[0,10,10],[],[]),
Fire = new parameterCalculator("Fire Deity","Domain",[5,5,10],[],[]),
Earth = new parameterCalculator("Earth Deity","Domain",[0,15,20],[],[]),
Justice = new parameterCalculator("Justice Deity","Domain",[15,20,0],[],[]),
Moon = new parameterCalculator("Moon Deity","Domain",[0,15,15],[],[]),
Sun = new parameterCalculator("Sun Deity","Domain",[15,15,10],[],[]),
Knowledge = new parameterCalculator("Knowledge Deity","Domain",[20,0,0],[],[]),
Darkness = new parameterCalculator("Darkness Deity","Domain",[5,10,15],[],[]),
Crafting = new parameterCalculator("Crafting Deity","Domain",[15,5,5],[],[]),
Nature = new parameterCalculator("Nature Deity","Domain",[0,10,15],[],[]),
Order = new parameterCalculator("Order Deity","Domain",[5,20,0],[],[]),

// Roles

General = new parameterCalculator("General","Personality",[8,16,4],[],[]),
Politician = new parameterCalculator("Politician","Personality",[12,16,8],[],[]),
FreeSpirit = new parameterCalculator("Free Spirit","Personality",[12,0,12],[],[]),
King = new parameterCalculator("King","Personality",[8,16,12],[],[]),
Mother = new parameterCalculator("Mother","Personality",[0,8,16],[],[]),
Thinker = new parameterCalculator("Thinker","Personality",[20,0,0],[],[]),
Harmonizer = new parameterCalculator("Harmonizer","Personality",[4,8,16],[],[]),
Prince = new parameterCalculator("Prince","Personality",[12,8,12],[],[]),
Enforcer = new parameterCalculator("Enforcer","Personality",[4,16,8],[],[]),
Manipulator = new parameterCalculator("Manipulator","Personality",[12,4,12],[],[]),
Trickster = new parameterCalculator("Trickster","Personality",[8,0,12],[],[]),
Diplomat = new parameterCalculator("Diplomat","Personality",[12,12,8],[],[]),
Protector = new parameterCalculator("Protector","Personality",[4,16,4],[],[]),
Hunter = new parameterCalculator("Hunter","Personality",[4,8,16],[],[]),

// Pantheons

Greek = new parameterCalculator("Greek","God",[16,8,12],[],[]),
Chinese = new parameterCalculator("Chinese","God",[8,16,4],[],[]),
African = new parameterCalculator("African","God",[4,8,12],[],[]),
Egyptian = new parameterCalculator("Egyptian","God",[8,20,4],[],[]),
Norse = new parameterCalculator("Norse","God",[8,8,16],[],[]),
Maori = new parameterCalculator("Maori","God",[4,8,16],[],[]),
Japanese = new parameterCalculator("Japanese","God",[4,16,16],[],[]),
Aztec = new parameterCalculator("Aztec","God",[4,12,12],[],[]),
Indian = new parameterCalculator("Indian","God",[12,16,12],[],[]),
Celtic = new parameterCalculator("Celtic","God",[4,8,16],[],[]),
Inca = new parameterCalculator("Inca","God",[8,12,8],[],[]),
BogiMuzhchin = new parameterCalculator("Slavic","God",[8,12,8],[],[]),

// Titans

Light = new parameterCalculator("Light","Titan",[12,18,0],[],[]),
Ocean = new parameterCalculator("Ocean","Titan",[2,10,10],[],[]),
OrderTitan = new parameterCalculator("Order","Titan",[10,20,0],[],[]),
World = new parameterCalculator("World","Titan",[2,10,10],[],[]),
FireTitan = new parameterCalculator("Fire","Titan",[6,12,16],[],[]),
Patala = new parameterCalculator("Depths","Titan",[0,10,10],[],[]),
SkyTitan = new parameterCalculator("Sky","Titan",[12,8,4],[],[]),
Night = new parameterCalculator("Night","Titan",[5,10,15],[],[]),
DeathTitan = new parameterCalculator("Death","Titan",[0,10,10],[],[]),


// Mythborn

SummerCourt = new parameterCalculator("Summer Court","Otherworld",[5,5,12],[],[]),
WinterCourt = new parameterCalculator("Winter Court","Otherworld",[0,5,12],[],[]),
DarkForest = new parameterCalculator("Dark Forest","Otherworld",[0,10,16],[],[]),
Shambhala = new parameterCalculator("Shambhala","Otherworld",[4,8,16],[],[]),
JadeSea = new parameterCalculator("Jade Sea","Otherworld",[5,10,10],[],[]),
//Utopia = new parameterCalculator("Utopia","Otherworld",[15,5,15],[],[]),

// Enlightened

Illuminati = new parameterCalculator("Illuminati","Enlightened",[12,4,0],[],[]),
OrderoftheJadeFist = new parameterCalculator("Order of the Jade Fist","Enlightened",[12,16,6],[],[]),
Cabal = new parameterCalculator("Cabal","Enlightened",[16,4,4],[],[]),
CircleofMerlin = new parameterCalculator("Circle of Merlin","Enlightened",[4,14,4],[],[]),


// Party Roles


Face = new parameterCalculator("Face","Role",[0,0,0],[],[]),
Tank = new parameterCalculator("Tank","Role",[0,0,0],[],[]),
DamageDealer = new parameterCalculator("Damage Dealer","Role",[0,0,0],[],[]),
SkillMonkey = new parameterCalculator("Skill Monkey","Role",[0,0,0],[],[]),
SupportController = new parameterCalculator("Support-Controller","Role",[0,0,0],[],[])


]


var secondOriginArray = [
 Tūmatauenga= new secondOrigin("Tūmatauenga","God","God of War and Subdueing ",Maori.name,Maori,[Forceful,Flashy,Clever],[War,Leader],[King,General]), 
 TaneMahuta= new secondOrigin("Tane Mahuta","God","God of Nature",Maori.name,Maori,[Clever,Forceful,Careful],[Nature,Wisdom],[Harmonizer,Thinker]), 
 Tangaroa= new secondOrigin("Tangaroa","God","God of the Sea",Maori.name,Maori,[Careful,Forceful,Sneaky],[Water],[FreeSpirit,Harmonizer]), 
 Tawhirimatea= new secondOrigin("Tawhirimatea","God","Renegade God of Weather, Lightning and Clouds",Maori.name,Maori,[Forceful,Flashy,Sneaky],[Sky],[FreeSpirit,General]), 
 Rehua= new secondOrigin("Rehua","God","God of Stars",Maori.name,Maori,[Careful,Clever,Sneaky],[Sky,Wisdom],[Thinker,FreeSpirit]), 
 HineNuiTePo= new secondOrigin("Hine-nui-te-po","God","Goddess of Night and Death",Maori.name,Maori,[Clever,Sneaky,Careful],[Death,Moon],[Thinker,Politician]), 
 Ruaumoko= new secondOrigin("Ruaumoko","God","God of Warmth, Earthquakes and Volcanoes",Maori.name,Maori,[Careful,Clever,Forceful],[Earth,Fire],[Harmonizer]), 
 Rongo= new secondOrigin("Rongo","God","God of Peace and Culture",Maori.name,Maori,[Clever,Sneaky,Careful],[Fertility,Wisdom],[Politician,Thinker]),
 HaumiaTiketike= new secondOrigin("Haumia-Tiketike","God","God of Wild Food",Maori.name,Maori,[Sneaky,Forceful,Careful],[Wit,Nature],[Hunter]),
 Mahuika= new secondOrigin("Mahuika","God","Goddess of Fire ",Maori.name,Maori,[Forceful,Flashy,Quick],[Fire],[FreeSpirit]),

 Anubis= new secondOrigin("Anubis","God","God of Death and Judge of the Underworld ",Egyptian.name,Egyptian,[Clever,Careful,Forceful],[Death,Justice],[Enforcer]),
 Horus= new secondOrigin("Horus","God","God of Justice",Egyptian.name,Egyptian,[Clever,Forceful,Quick],[Justice,Leader],[Prince,Politician]),
 Hathor= new secondOrigin("Hathor","God","Goddess of Love, Fertility and Motherhood",Egyptian.name,Egyptian,[Careful,Flashy,Clever],[Fertility ,Sun],[Mother,Diplomat]),
 Isis= new secondOrigin("Isis","God","Goddess of Magic, Inventor of Heku",Egyptian.name,Egyptian,[Clever,Sneaky,Careful],[Wisdom,Wit],[Politician,Thinker]),
 Osiris= new secondOrigin("Osiris","God","Lord of the Underworld",Egyptian.name,Egyptian,[Clever,Flashy,Sneaky],[Death],[King]),
 AtumRe= new secondOrigin("Atum Re","God","God of the Sun",Egyptian.name,Egyptian,[Clever,Flashy,Forceful],[Father,Sun],[King]),
 Set= new secondOrigin("Set","God","God of Sky and Guardian of the Desert",Egyptian.name,Egyptian,[Clever,Sneaky,Forceful],[Sky],[Manipulator,Protector]),
 Sekhmet= new secondOrigin("Sekhmet","God","Goddess of War",Egyptian.name,Egyptian,[Forceful,Quick,Flashy],[War],[General,Hunter]),
 Bastet= new secondOrigin("Bastet","God","Keeper of Secrets",Egyptian.name,Egyptian,[Clever,Sneaky,Quick],[Wisdom],[Thinker,Protector]),
 Hapi= new secondOrigin("Hapi","God","God of Healing and Self-Sacrifice",Egyptian.name,Egyptian,[Flashy,Careful,Clever],[Fertility,Love],[Harmonizer,Protector]), 
 Khepri= new secondOrigin("Khepri","God","Goddess of Leadership",Egyptian.name,Egyptian,[Forceful,Clever,Sneaky],[War,Wit],[General,Enforcer]),
 Ptah= new secondOrigin("Ptah","God","God of Artistry",Egyptian.name,Egyptian,[Clever,Quick,Flashy],[Crafting],[Thinker,FreeSpirit]),
 Rain= new secondOrigin("Rain","God","Goddess of the Veil",Egyptian.name,Egyptian,[Careful,Clever,Forceful],[Death,Travel],[FreeSpirit,Protector]),
 Sobek= new secondOrigin("Sobek","God","God of Water and Retribution",Egyptian.name,Egyptian,[Careful,Forceful,Sneaky],[Water],[FreeSpirit,Hunter]),
 Thoth= new secondOrigin("Thoth","God","God of Knowledge",Egyptian.name,Egyptian,[Clever,Sneaky,Quick],[Wisdom],[Thinker]),
 Geb= new secondOrigin("Geb","God","God of the Earth",Egyptian.name,Egyptian,[Careful,Flashy,Clever],[Earth],[Protector]),

 Agni= new secondOrigin("Agni","God","God of FIre and Sacrifice",Indian.name,Indian,[Clever,Flashy,Careful],[Fire],[FreeSpirit]),
 Brahma= new secondOrigin("Brahma","God","The Creator",Indian.name,Indian,[Clever,Careful,Sneaky],[Knowledge,Father],[Thinker]),
 Ganesha= new secondOrigin("Ganesha","God","God of good luck and Wisdom",Indian.name,Indian,[Clever,Forceful,Sneaky],[Travel,Wisdom],[Harmonizer,Protector]),
 Indra= new secondOrigin("Indra","God","God of war and weather",Indian.name,Indian,[Forceful,Clever,Flashy],[Sky,Leader],[King]),
 Kali= new secondOrigin("Kali","God","Goddess of annihilation",Indian.name,Indian,[Forceful,Flashy,Quick],[War,Darkness],[Enforcer]),
 Lakshmi= new secondOrigin("Lakshmi","God","Goddess of fortune",Indian.name,Indian,[Clever,Careful,Sneaky],[Wit],[FreeSpirit,Manipulator]),
 Parvati= new secondOrigin("Parvati","God","Goddess of feminity",Indian.name,Indian,[Clever,Sneaky,Careful],[Love,Fertility],[Diplomat,Mother]),
 Sarasvati= new secondOrigin("Sarasvati","God","Goddess of artists",Indian.name,Indian,[Flashy,Careful,Sneaky],[Crafting],[FreeSpirit]),
 Shiva= new secondOrigin("Shiva","God","The Destroyer",Indian.name,Indian,[Clever,Flashy,Forceful],[Order,Father],[FreeSpirit,Thinker]),
 Surya= new secondOrigin("Surya","God","God of the sun",Indian.name,Indian,[Flashy,Forceful,Quick],[Sun],[FreeSpirit]),
 Vishnu= new secondOrigin("Vishnu","God","The Preserver",Indian.name,Indian,[Careful,Forceful,Clever],[Wisdom,Order],[Protector,Harmonizer]),
 Yama= new secondOrigin("Yama","God","Lord of the Dead",Indian.name,Indian,[Sneaky,Careful,Clever],[Death],[Enforcer,Thinker]),
 Murugan= new secondOrigin("Murugan","God","General of the Divine Armies",Indian.name,Indian,[Forceful,Flashy,Quick],[War],[General]),
 
 Aphrodite= new secondOrigin("Aphrodite","God","Goddess of love and beauty",Greek.name,Greek,[Flashy,Forceful,Careful],[Love],[Manipulator]),
 Apollo= new secondOrigin("Apollo","God","God of prophecy, the sun, and art",Greek.name,Greek,[Flashy,Careful,Clever],[Sun,Crafting],[Politician]),
 Archimedes= new secondOrigin("Archimedes","God","God of Logic",Greek.name,Greek,[Clever,Careful,Forceful],[Crafting,Knowledge],[Thinker]),
 Ares= new secondOrigin("Ares","God","God of War",Greek.name,Greek,[Forceful,Flashy,Careful],[War],[General]),
 Artemis= new secondOrigin("Artemis","God","Goddess of chastity, the moon, and hunting",Greek.name,Greek,[Careful,Sneaky,Quick],[Moon,War],[FreeSpirit]),
 Athena= new secondOrigin("Athena","God","Goddess of strategy and wisdom",Greek.name,Greek,[Clever,Careful,Forceful],[War,Wisdom],[General]),
 Demeter= new secondOrigin("Demeter","God","Goddess of Nature and Agriculture",Greek.name,Greek,[Flashy,Forceful,Clever],[Fertility],[Mother]),
 Dionysus= new secondOrigin("Dionysus","God","God of Wine, Friendship and Liberty",Greek.name,Greek,[Flashy,Careful,Clever],[Wit],[FreeSpirit,Harmonizer]),
 Gerald= new secondOrigin("Gerald","God","God of Rock 'n' Roll",Greek.name,Greek,[Flashy,Forceful,Quick],[Fire,War],[Enforcer]),
 Hades= new secondOrigin("Hades","God","Ruler of the Underworld",Greek.name,Greek,[Careful,Sneaky,Clever],[Death],[Politician,King]),
 Hephaestus= new secondOrigin("Hephaestus","God","God of the Forge and Invention",Greek.name,Greek,[Clever,Careful,Forceful],[Crafting,Fire],[Thinker]),
 Hera= new secondOrigin("Hera","God","Goddess of marriage and politics",Greek.name,Greek,[Forceful,Sneaky,Clever],[Leader,Fertility],[]),
 Herakles= new secondOrigin("Herakles","God","God of Strength",Greek.name,Greek,[Forceful,Flashy,Quick],[War],[Prince,Enforcer]),
 Hermes= new secondOrigin("Hermes","God","God of thieves, merchants, and tricksters",Greek.name,Greek,[Quick,Clever,Sneaky],[Travel,Wit],[FreeSpirit]),
 Lyra= new secondOrigin("Lyra","God","Goddess of Freedom",Greek.name,Greek,[Clever,Quick,Sneaky],[Sky,Wit],[FreeSpirit]),
 Poseidon= new secondOrigin("Poseidon","God","God of the sea",Greek.name,Greek,[Flashy,Forceful,Careful],[Water],[King,FreeSpirit]),
 Zeus= new secondOrigin("Zeus","God","God of Leadership, Thunder, Sky, and Power",Greek.name,Greek,[Flashy,Forceful,Clever],[Leader,Sky],[King,Politician]),

 Aganju= new secondOrigin("Aganju","God","God of War",African.name,African,[Forceful,Flashy,Quick],[War,Nature],[Enforcer]),
 Anansi= new secondOrigin("Anansi","God","Spider God of Tricks and Knowledge",African.name,African,[Clever,Flashy,Quick],[Knowledge,Wisdom],[Trickster,Harmonizer]),
Ayao= new secondOrigin("Ayao","God","Goddess of Air",African.name,African,[Clever,Forceful,Sneaky],[Sky,Wit],[Hunter,General]),
Azaka= new secondOrigin("Azaka","God","Goddess of Lightning",African.name,African,[Flashy,Clever,Quick],[Sky,Fire],[FreeSpirit]),
BaronSamedi= new secondOrigin("Baron Samedi","God","God of Death, Keeper of Guinee",African.name,African,[Flashy,Clever,Sneaky],[Death],[FreeSpirit,Harmonizer]),
Damballa= new secondOrigin("Damballa","God","God of the Sky",African.name,African,[Careful,Clever,Sneaky],[Sky],[Prince,Thinker]),
DeAllende= new secondOrigin("De-Allende","God","The Dreamweaver",African.name,African,[Clever,Quick,Flashy],[Moon,Knowledge],[Thinker,Trickster]),
Eledumare= new secondOrigin("Eledumare","God","Primordial Trinity, Father of the Gods",African.name,African,[Careful,Flashy,Forceful],[Father],[General]),
Erzulie= new secondOrigin("Erzulie","God","Goddess of Love and Flowers",African.name,African,[Flashy,Clever,Sneaky],[Love,Wit],[Harmonizer,Protector]),
Kalfu= new secondOrigin("Kalfu","God","God of Darkness",African.name,African,[Clever,Sneaky,Quick],[Darkness,Travel],[Manipulator,Trickster]),
Legba= new secondOrigin("Legba","God","God of Crossroads, Psychopomp",African.name,African,[Careful,Clever,Quick],[Wisdom,Travel],[Protector,Thinker]),
MamanBrigitte= new secondOrigin("Maman Brigitte","God","Goddess of Death",African.name,African,[Flashy,Careful,Quick],[Death],[FreeSpirit,Harmonizer]),
Olorun= new secondOrigin("Olorun","God","Primordial Trinity, and Ruler of Ikole Orun",African.name,African,[Careful,Clever,Forceful],[Leader,Sun],[King,Protector]),
Ogoun= new secondOrigin("Ogoun","God","God of Iron and Crafting",African.name,African,[Careful,Clever,Sneaky],[Crafting],[FreeSpirit]),
Shapona= new secondOrigin("Shapona","God","God of Earth, Disease and Healing",African.name,African,[Sneaky,Clever,Careful],[Earth,Death],[FreeSpirit,Thinker]),
Simbi= new secondOrigin("Simbi","God","God of Rain and Magic",African.name,African,[Sneaky,Clever,Careful],[Nature,Fertility],[Enforcer,Thinker]),
Yemoja= new secondOrigin("Yemoja","God","Goddess of Fertility and Women",African.name,African,[Careful,Clever,Quick],[Fertility],[Mother,Diplomat]),

Change= new secondOrigin("Chang'e","God","Goddess of the Moon",Chinese.name,Chinese,[Clever,Quick,Sneaky],[Moon],[Diplomat,Harmonizer]),
Chiyou= new secondOrigin("Chiyou","God","God of War",Chinese.name,Chinese,[Clever,Forceful,Quick],[War],[General,Thinker]),
Erlang= new secondOrigin("Erlang","God","God of Truth",Chinese.name,Chinese,[Clever,Careful,Quick],[Leader,Justice],[General,Enforcer]),
Fuxi= new secondOrigin("Fuxi","God","Creator Goddess and Muse of mankind",Chinese.name,Chinese,[Careful,Quick,Clever],[Father,Knowledge],[FreeSpirit,Thinker]),
GaoYao= new secondOrigin("Gao Yao","God","God of Law",Chinese.name,Chinese,[Forceful,Clever,Careful],[Knowledge,Justice],[Enforcer,Thinker]),
GuanYu= new secondOrigin("Guan Yu","God","18th Jade Emperor, God of Martial Power and Brotherhoods",Chinese.name,Chinese,[Forceful,Clever,Flashy],[Justice,War],[General,Enforcer]),
Houyi= new secondOrigin("Houyi","God","God of the Sun and Archery",Chinese.name,Chinese,[Forceful,Flashy,Clever],[Sun],[Diplomat,Politician]),
LeiGong= new secondOrigin("Lei Gong","God","God of Thunder",Chinese.name,Chinese,[Flashy,Forceful,Clever],[Sky,Fire],[Enforcer,Protector]),
Nezha= new secondOrigin("Nezha","God","God of Honor and Youth",Chinese.name,Chinese,[Flashy,Quick,Clever],[Justice,Wit],[Protector,FreeSpirit]),
Nuwa= new secondOrigin("Nuwa","God","Creator Goddess and Muse of mankind",Chinese.name,Chinese,[Careful,Quick,Clever],[Father,Knowledge],[FreeSpirit,Thinker]),
Shangdi= new secondOrigin("Shangdi","God","Yellow Emperor, Overseer of Tiàn",Chinese.name,Chinese,[Forceful,Clever,Careful],[Leader,Order],[King,Enforcer]),
Shennong= new secondOrigin("Shennong","God","God of Agriculture and Medicine",Chinese.name,Chinese,[Clever,Careful,Quick],[Knowledge,Nature],[Thinker,Harmonizer]),
SunWukong= new secondOrigin("Sun Wukong","God","Monkey King, God of Trickery and Strength",Chinese.name,Chinese,[Flashy,Quick,Clever],[Wit],[FreeSpirit,Trickster]),
Xiwangmu= new secondOrigin("Xiwangmu","God","Queen-Mother of the West and Keeper of the Golden Orchard",Chinese.name,Chinese,[Careful,Quick,Clever],[Wisdom,Nature],[Mother,Harmonizer]),
Yanluo= new secondOrigin("Yanluo","God","Overseer of the Dead and Keeper of Di Yu",Chinese.name,Chinese,[Clever,Forceful,Sneaky],[Death],[Thinker,Enforcer]),
Zhuanxu= new secondOrigin("Zhuanxu","God","Chinese",Chinese.name,Chinese,[Forceful,Clever,Quick],[Sky],[Enforcer,General]),

Aengus= new secondOrigin("Aengus","God","God of Love and Youth",Celtic.name,Celtic,[Flashy,Quick,Forceful],[Love,Wit],[Harmonizer,Protector]),
Aine= new secondOrigin("Aine","God","Goddess of Summer, Agriculture and Wealth",Celtic.name,Celtic,[Careful,Quick,Sneaky],[Nature,Fertility],[Diplomat,Protector]),
Brigid= new secondOrigin("Brigid","God","Goddess of Spring, Fertility and Dawn",Celtic.name,Celtic,[Clever,Careful,Quick],[Fertility,Sky],[Diplomat,Thinker]),
Cernunnos= new secondOrigin("Cernunnos","God","God of Druidism and Nature",Celtic.name,Celtic,[Clever,Careful,Sneaky],[Nature],[Harmonizer,FreeSpirit]),
Dagda= new secondOrigin("Dagda","God","God of Masculinity and Magic, High King of Ireland",Celtic.name,Celtic,[Flashy,Forceful,Quick],[War,Nature],[General,King]),
DianCécht= new secondOrigin("Dian Cécht","God","God of Crafting and Healing",Celtic.name,Celtic,[Careful,Clever,Forceful],[Nature,Knowledge],[Thinker,Protector]),
Fand= new secondOrigin("Fand","God","Goddess of Mist",Celtic.name,Celtic,[Sneaky,Clever,Careful],[Water,Sky],[FreeSpirit]),
Lugh= new secondOrigin("Lugh","God","God of Sky and Oaths",Celtic.name,Celtic,[Clever,Forceful,Quick],[Sky,Justice],[Enforcer,General]),
ManannanmacLir= new secondOrigin("Manannan mac Lir","God","God of the Sea and Psychopomp",Celtic.name,Celtic,[Careful,Clever,Sneaky],[Water,Travel],[FreeSpirit,Protector]),
Morrigan= new secondOrigin("The Morrigan","God","Goddess of War and Prophecy",Celtic.name,Celtic,[Forceful,Clever,Quick],[War,Death],[Thinker,Hunter]),
Niamh= new secondOrigin("Niamh","God","Queen of Tir na nÓg",Celtic.name,Celtic,[Clever,Careful,Quick],[Travel,Leader],[King,Harmonizer]),
NiemhMairbh= new secondOrigin("Niemh Mairbh","God","God of Retribution",Celtic.name,Celtic,[Sneaky,Clever,Forceful],[Death,Darkness],[Manipulator,Enforcer]),
Ogma= new secondOrigin("Ogma","God","God of Strength and Eloquence",Celtic.name,Celtic,[Clever,Forceful,Careful],[War,Knowledge],[Thinker,General]),
Zerris= new secondOrigin("Zerris","God","Machine-God of Technology",Celtic.name,Celtic,[Clever,Careful,Forceful],[Crafting,Fire],[Thinker]),

Chasqua= new secondOrigin("Chasqua","God","Goddess of Love, Happiness and Health",Inca.name,Inca,[Clever,Careful,Flashy],[Love, Nature],[Harmonizer,FreeSpirit]),
Cochamama= new secondOrigin("Cochamama","God","Goddess of the Sea",Inca.name,Inca,[Careful,Clever,Forceful],[Water, Wisdom],[Mother,Harmonizer]),
Illapa= new secondOrigin("Illapa","God","God of War and Weather",Inca.name,Inca,[Clever,Sneaky,Forceful],[War, Sky],[Protector,Enforcer]),
Inti= new secondOrigin("Inti","God","God of the Sun",Inca.name,Inca,[Flashy,Forceful,Quick],[Leader, Sun],[King,Enforcer]),
Kilyamama= new secondOrigin("Kilyamama","God","Goddess of the Moon",Inca.name,Inca,[Clever,Careful,Flashy],[Moon, Knowledge],[Politician,Thinker]),
Supay= new secondOrigin("Supay","God","God of the Underworld",Inca.name,Inca,[Clever,Sneaky,Quick],[Death, Earth],[Manipulator,Enforcer]),
Urcaguary= new secondOrigin("Urcaguary","God","God of Metal and Greed",Inca.name,Inca,[Flashy,Quick,Forceful],[Earth, Crafting],[FreeSpirit,Manipulator]),
Viracocha= new secondOrigin("Viracocha","God","God of Creation and the Sky",Inca.name,Inca,[Clever,Careful,Forceful],[Father, Order],[Thinker]),

Rod= new secondOrigin("Rod","God","Great Creator, God of Birth",BogiMuzhchin.name,BogiMuzhchin,[Careful,Sneaky,Clever],[Father],[FreeSpirit]),
 Lada= new secondOrigin("Lada","God","Goddess of Summer, Love, Marriage and Beauty",BogiMuzhchin.name,BogiMuzhchin,[Clever,Careful,Flashy],[Love ,Sun],[Mother,Diplomat]),
 Perun= new secondOrigin("Perun","God","God of Sky, Thunder and Lightning",BogiMuzhchin.name,BogiMuzhchin,[Forceful,Flashy,Clever],[Sky],[King,Protector]),
 Dodola= new secondOrigin("Dodola","God","Goddess of Rain",BogiMuzhchin.name,BogiMuzhchin,[Careful,Sneaky,Clever],[Water ,Nature],[Mother,Protector]),
 Svarog= new secondOrigin("Svarog","God","God of Fire and Smithing",BogiMuzhchin.name,BogiMuzhchin,[Clever,Careful,Sneaky],[Fire ,Crafting],[FreeSpirit,Thinker]),
 Dazbog= new secondOrigin("Dazbog","God","God of Sun and Wealth",BogiMuzhchin.name,BogiMuzhchin,[Flashy,Quick,Forceful],[Sun],[Harmonizer,FreeSpirit]),
 Svetovid= new secondOrigin("Svetovid","God","God of Fertility and Abundance",BogiMuzhchin.name,BogiMuzhchin,[Clever,Sneaky,Careful],[Fertility ,Nature],[FreeSpirit,Harmonizer]),
 Veles= new secondOrigin("Veles","God","God of Earth, Underworld and Trickery",BogiMuzhchin.name,BogiMuzhchin,[Clever,Sneaky,Quick],[Earth ,Death],[Trickster,FreeSpirit]),
 Dziewona= new secondOrigin("Dziewona","God","Goddess of Hunt and the Moon",BogiMuzhchin.name,BogiMuzhchin,[Clever,Quick,Careful],[Wisdom,Moon],[Mother,Harmonizer]),
 Belobog= new secondOrigin("Belobog","God","God of Good Fortune",BogiMuzhchin.name,BogiMuzhchin,[Forceful,Quick,Flashy],[Order ,Sun],[Enforcer,Harmonizer]),
 Chernobog= new secondOrigin("Chernobog","God","God of Misfortune",BogiMuzhchin.name,BogiMuzhchin,[Clever,Sneaky,Careful],[Order ,Darkness],[Thinker,Enforcer]),
 Hors= new secondOrigin("Hors","God","God of Medicine and Arts",BogiMuzhchin.name,BogiMuzhchin,[Careful,Clever,Flashy],[Nature ,Knowledge],[Harmonizer,Protector]),
 Jarilo= new secondOrigin("Jarilo","God","God of War and Spring",BogiMuzhchin.name,BogiMuzhchin,[Careful,Quick,Forceful],[War,Sun],[Protector,Prince]),
 Morana= new secondOrigin("Morana","God","Goddess of Harvest, Winter and Death",BogiMuzhchin.name,BogiMuzhchin,[Careful,Forceful,Quick],[Death,Water],[Enforcer,Harmonizer]),

 Baldur= new secondOrigin("Baldur","God","God of Light, Beauty, Love and Happiness.",Norse.name,Norse,[Flashy,Careful,Quick],[Love,Fertility],[FreeSpirit,Prince]), 
 Freya= new secondOrigin("Freya","God","Goddess of the Gold, and War.",Norse.name,Norse,[Clever,Forceful,Flashy],[War,Crafting],[Diplomat,Manipulator]), 
 Freyr= new secondOrigin("Freyr","God","God of Farming, Weather and Fertility.",Norse.name,Norse,[Careful,Clever,Sneaky],[Fertility],[Harmonizer]), 
 Frigg= new secondOrigin("Frigg","God","Queen of the Gods.",Norse.name,Norse,[Clever,Sneaky,Careful],[Leader],[Politician,King]), 
 Heimdall= new secondOrigin("Heimdall","God","Protector of Asgard",Norse.name,Norse,[Sneaky,Careful,Clever],[Justice],[Protector,Manipulator]), 
 Hel= new secondOrigin("Hel","God","Goddess of the Dead, Overseer of Helheim",Norse.name,Norse,[Clever,Forceful,Sneaky],[Death],[Enforcer]), 
 Odin= new secondOrigin("Odin","God","King of Asgard, God of Magic, Wisdom, and Prophecy",Norse.name,Norse,[Clever,Sneaky,Forceful],[Leader,Father],[King,Manipulator]), 
 Sif= new secondOrigin("Sif","God","Goddess of Marriage",Norse.name,Norse,[Careful,Clever,Forceful],[Love,Fertility],[Harmonizer]), 
 Thor= new secondOrigin("Thor","God","God of Thunder and War",Norse.name,Norse,[Forceful,Flashy,Quick],[War,Sky],[FreeSpirit,Protector]), 
 Tyr= new secondOrigin("Tyr","God","God of Victory",Norse.name,Norse,[Forceful,Clever,Quick],[Justice,War],[Enforcer,General]), 
 Vidar= new secondOrigin("Vidar","God","God of Vengeance",Norse.name,Norse,[Forceful,Clever,Sneaky],[Justice,Darkness],[Enforcer,Protector]), 
 Loki= new secondOrigin("Loki","God","Trickster God",Norse.name,Norse,[Clever,Sneaky,Quick],[Wit],[Manipulator,Trickster]), 
 Bragi= new secondOrigin("Bragi","God","God of Poets",Norse.name,Norse,[Clever,Flashy,Careful],[Wit,Light],[FreeSpirit]), 
 Vali= new secondOrigin("Vali","God","God of Debate and Duel",Norse.name,Norse,[Flashy,Quick,Forceful],[Justice],[Enforcer]), 
 Ullr= new secondOrigin("Ullr","God","God of Survival",Norse.name,Norse,[Careful,Clever,Forceful],[Nature,Travel],[Hunter,Protector]), 
 
 Amaterasu= new secondOrigin("Amaterasu","God","Goddess of the Sun",Japanese.name,Japanese,[Clever,Flashy,Careful],[Sun,Leader],[Politician,Mother]), 
 Hachiman= new secondOrigin("Hachiman","God","God of Swordfighting, Archery and Change",Japanese.name,Japanese,[Clever,Forceful,Quick],[War,Wisdom],[Thinker,Leader]), 
 Izanagi= new secondOrigin("Izanagi","God","Lord of the Sky",Japanese.name,Japanese,[Careful,Quick,Sneaky],[Father,Sky],[FreeSpirit,Thinker]), 
 Raiden= new secondOrigin("Raiden","God","Lord of Thunder and Lightning",Japanese.name,Japanese,[Flashy,Forceful,Quick],[Sky],[FreeSpirit]), 
 Izanami= new secondOrigin("Izanami","God","Queen of the Underworld",Japanese.name,Japanese,[Clever,Careful,Sneaky],[Death,Earth],[Enforcer,Manipulator]), 
 Ryujin= new secondOrigin("Ryujin","God","Dragon God of the Ocean Depths",Japanese.name,Japanese,[Forceful,Sneaky,Careful],[Water,Wit],[Thinker,King]), 
 Susanoo= new secondOrigin("Susano-o","God","Lord of Sea and Storms",Japanese.name,Japanese,[Flashy,Forceful,Clever],[Water,Travel],[FreeSpirit,Harmonizer]), 
 TsukiYomi= new secondOrigin("Tsuki-Yomi","God","God of the Moon",Japanese.name,Japanese,[Clever,Sneaky,Careful],[Moon],[Diplomat]), 
 Inari= new secondOrigin("Inari","God","Androgynous God/Goddess of Foxes and Prosperity",Japanese.name,Japanese,[Clever,Careful,Sneaky],[Wit,Fertility],[Trickster,Harmonizer]), 
 AmenoUzume= new secondOrigin("Ame no Uzume","God","Goddess of Dawn, Mirth and Revelry",Japanese.name,Japanese,[Clever,Flashy,Sneaky],[Love,Wit,Sun],[Harmonizer,Diplomat]), 
 Sarutahiko= new secondOrigin("Sarutahiko","God","God of Strength and Guidance",Japanese.name,Japanese,[Careful,Forceful,Clever],[War,Wisdom],[Protector]),

 Ellykha= new secondOrigin("Ellykha","God","Goddess of Spilt Blood",Aztec.name,Aztec,[Forceful,Flashy,Quick],[War],[Enforcer]), 
 Huitzilopochtli= new secondOrigin("Huitzilopochtli","God","God of Blood, War and the Sun, Cardinal God of the South",Aztec.name,Aztec,[Forceful,Flashy,Clever],[War,Sun,Leader],[General]), 
 Miclántecuhtli= new secondOrigin("Miclántecuhtli","God","God of the Dead and Spirits",Aztec.name,Aztec,[Careful,Clever,Sneaky],[Death],[Thinker]), 
 Quetzalcoátl= new secondOrigin("Quetzalcoátl","God","God of Light, Civilization and Creation, Cardinal God of the West",Aztec.name,Aztec,[Clever,Careful,Flashy],[Leader,Wisdom],[Harmonizer,Politician]), 
 Tezcatlipoca= new secondOrigin("Tezcatlipoca","God","God of Change, Night and Destruction, Cardinal God of the North",Aztec.name,Aztec,[Clever,Sneaky,Forceful],[Moon,Darkness],[King]), 
 Tlazoltéotl= new secondOrigin("Tlazoltéotl","God","Goddess of Filth",Aztec.name,Aztec,[Flashy,Careful,Clever],[Fertility,Love],[Harmonizer,Manipulator]), 
 XipeTotec= new secondOrigin("Xipe Totec","God","God of Maize and Growth, Cardinal God of the East",Aztec.name,Aztec,[Clever,Sneaky,Forceful],[Fertility,Darkness],[Trickster]), 
 Xochipilli= new secondOrigin("Xochipilli","God","God of Art, Dance and Flowers",Aztec.name,Aztec,[Flashy,Clever,Forceful],[Crafting,Nature],[FreeSpirit,Protector]), 
 Xochiquetzal= new secondOrigin("Xochiquetzal","God","Goddess of Fertility and Female Power",Aztec.name,Aztec,[Clever,Forceful,Sneaky],[Fertility,Love],[Mother,Protector]), 
 Xolotl= new secondOrigin("Xolotl","God","God of Lightning, Death and Psychopomp",Aztec.name,Aztec,[Forceful,Clever,Careful],[Death,Sky],[Protector,Enforcer]), 

 Huracán= new secondOrigin("Huracán","Titan","Sky as Tempest",SkyTitan.name,SkyTitan,[Forceful,Quick,Clever],[Sky],[Enforcer,Hunter]), 
 Ouranos= new secondOrigin("Ouranos","Titan","SkyTitan as Calm",SkyTitan.name,SkyTitan,[Clever,Careful,Forceful],[Sky,Father],[Thinker,Protector]), 
 Shu= new secondOrigin("Shu","Titan","Sky as Stillness",SkyTitan.name,SkyTitan,[Quick,Clever,Sneaky],[Sky,Order],[Enforcer,Manipulator]), 
 Typhon= new secondOrigin("Typhon","Titan","Sky as Destruction",SkyTitan.name,SkyTitan,[Forceful,Clever,Quick],[Sky,War],[Enforcer,Hunter]),
 Tlaloc= new secondOrigin("Tlaloc","Titan","Titan of Rain",SkyTitan.name,SkyTitan,[Clever,Flashy,Quick],[Sky,Water],[FreeSpirit]),

 Atlas= new secondOrigin("Atlas","Titan","Titan of Gravity",OrderTitan.name,OrderTitan,[Careful,Forceful,Flashy],[Order,Earth],[FreeSpirit,Protector]),
 Coeus= new secondOrigin("Coeus","Titan","Titan of Knowledge",OrderTitan.name,OrderTitan,[Clever,Sneaky,Careful],[Order,Knowledge],[Thinker,Manipulator]),
 Kronus= new secondOrigin("Kronus","Titan","Titan of Control",OrderTitan.name,OrderTitan,[Forceful,Clever,Careful],[Leader,Order],[King,General]),
 Themis= new secondOrigin("Themis","Titan","Titan of Law",OrderTitan.name,OrderTitan,[Careful,Clever,Forceful],[Order,Justice],[Thinker,Diplomat]),
 Chronos= new secondOrigin("Chronos","Titan","Titan of Time",OrderTitan.name,OrderTitan,[Careful,Clever,Forceful],[Order],[FreeSpirit,Thinker]),

 Aten= new secondOrigin("Aten","Titan","Titan of Brightness",Light.name,Light,[Forceful,Flashy,Clever],[Sun],[King]),
 Helios= new secondOrigin("Helios","Titan","Titan of the Sun",Light.name,Light,[Clever,Flashy,Quick],[Sun],[FreeSpirit]),
 Hemera= new secondOrigin("Hemera","Titan","Titan of Day",Light.name,Light,[Careful,Flashy,Clever],[Sun,Fertility],[Harmonizer,Mother]),
 Hyperion= new secondOrigin("Hyperion","Titan","Titan of Glory",Light.name,Light,[Flashy,Forceful,Careful],[Leader,Sun],[General,King]),
 Zhulong= new secondOrigin("Zhulong","Titan","Titan of Illumination",Light.name,Light,[Clever,Careful,Flashy],[Wisdom,Sun],[Thinker]),

 Sedna= new secondOrigin("Sedna","Titan","Titan of the Providing Sea",Ocean.name,Ocean,[Clever,Careful,Sneaky],[Water,Fertility],[Harmonizer]),
 Charybdis= new secondOrigin("Charybdis","Titan","Titan of Drowning",Ocean.name,Ocean,[Forceful,Flashy,Sneaky],[Water,Death],[Hunter,Manipulator]),
 Yam= new secondOrigin("Yam","Titan","Titan of the Raging Sea",Ocean.name,Ocean,[Forceful,Flashy,Clever],[Leader,Water],[King,Manipulator]),

 Heget= new secondOrigin("Heget","Titan","Titan of Fertility",Ocean.name,Ocean,[Forceful,Clever,Sneaky],[Water,Fertility],[Protector]),
 Gaia= new secondOrigin("Gaia","Titan","Titan of Life",World.name,World,[Forceful,Careful,Flashy],[Fertility,Nature],[Mother]),
 GreenMan= new secondOrigin("The Green Man","Titan","Titan of Nature",World.name,World,[Sneaky,Careful,Flashy],[Nature],[Harmonizer,FreeSpirit]),
 Ourea= new secondOrigin("Ourea","Titan","Titan of Mountains",World.name,World,[Careful,Clever,Forceful],[Earth],[Thinker]),
 Kur= new secondOrigin("Kur","Titan","Titan of Expanse",World.name,World,[Forceful,Careful,Clever],[Earth,Travel],[FreeSpirit]),

 Surtr= new secondOrigin("Surtr","Titan","Titan of Destruction",FireTitan.name,FireTitan,[Forceful,Flashy,Quick],[Fire],[General,King]),
 Prometheus= new secondOrigin("Prometheus","Titan","Titan of Invention",FireTitan.name,FireTitan,[Clever,Quick,Flashy],[Fire,Crafting],[Thinker,FreeSpirit]),
 Kagutsuchi= new secondOrigin("Kagutsuchi","Titan","Titan of Lava",FireTitan.name,FireTitan,[Flashy,Forceful,Quick],[Fire,Earth],[Protector]),
 Nemesis= new secondOrigin("Nemesis","Titan","Titan of Divine Retribution",FireTitan.name,FireTitan,[Forceful,Careful,Flashy],[Fire,Justice],[Enforcer]),
 Vrtra= new secondOrigin("Vrtra","Titan","Titan of Drought",FireTitan.name,FireTitan,[Flashy,Careful,Clever],[Fire,Death],[Manipulator]),
 Xiuhtecuhtli= new secondOrigin("Xiuhtecuhtli","Titan","Titan of Life",FireTitan.name,FireTitan,[Flashy,Quick,Clever],[Fire,Fertility],[Harmonizer]),
 Auahituroa= new secondOrigin("Auahituroa","Titan","Titan of Stellar Fire",FireTitan.name,FireTitan,[Flashy,Forceful,Quick],[Fire,Sky],[FreeSpirit]),

Abzu= new secondOrigin("Abzu","Titan","Titan of The Abyss",Patala.name,Patala,[Careful,Sneaky,Forceful],[Water,Darkness],[Manipulator]),
CromCruach= new secondOrigin("Crom Cruach","Titan","Titan of Decay",Patala.name,Patala,[Forceful,Sneaky,Quick],[Earth,Death],[General,Enforcer]),
DisPater= new secondOrigin("Dis Pater","Titan","Titan of Riches",Patala.name,Patala,[Clever,Flashy,Careful],[Earth,Crafting],[Harmonizer]),
Erebus= new secondOrigin("Erebus","Titan","Titan of Darkness",Patala.name,Patala,[Careful,Sneaky,Clever],[Earth,Darkness],[Diplomat,Thinker]),
Erlik= new secondOrigin("Erlik","Titan","Titan of Underground",Patala.name,Patala,[Forceful,Flashy,Sneaky],[Earth,Death],[King,Manipulator]),
Tiamat= new secondOrigin("Tiamat","Titan","Titan of Water as Life",Ocean.name,Ocean,[Clever,Careful,Sneaky],[Water,Fertility],[Mother]),

Apep= new secondOrigin("Apep","Titan","Titan of Darkness",Night.name,Night,[Clever,Forceful,Sneaky],[Darkness],[Hunter,Manipulator]),
Mikaboshi= new secondOrigin("Mikaboshi","Titan","Titan of Void",Night.name,Night,[Clever,Forceful,Sneaky],[Darkness,Death],[Manipulator,Enforcer]),
Nut= new secondOrigin("Nut","Titan","Titan of Stars",Night.name,Night,[Careful,Sneaky,Clever],[Darkness,Sky],[Thinker,Protector]),
Nott= new secondOrigin("Nott","Titan","Titan of the Veil",Night.name,Night,[Careful,Clever,Forceful],[Darkness,Sky],[Thinker,Enforcer]),
Fenrir= new secondOrigin("Fenrir","Titan","Titan of Fear",Night.name,Night,[Forceful,Clever,Quick],[Darkness,Death],[Hunter]),
Dracula= new secondOrigin("Dracula","Titan","Titan of Nightmares",Night.name,Night,[Clever,Forceful,Flashy],[Death,Darkness],[Hunter,Manipulator]),
Selene= new secondOrigin("Selene","Titan","Titan of Moon",Night.name,Night,[Clever,Careful,Quick],[Darkness,Moon],[Enforcer,Diplomat]),
Hypnos= new secondOrigin("Hypnos","Titan","Titan of Sleep",Night.name,Night,[Clever,Sneaky,Quick],[Darkness,Order],[Harmonizer,Thinker]),


Camazotz= new secondOrigin("Camazotz","Titan","Titan of Devouring",DeathTitan.name,DeathTitan,[Forceful,Flashy,Quick],[Death],[Hunter]),
GrimReaper= new secondOrigin("Grim Reaper","Titan","Titan of the Great Equalizer",DeathTitan.name,DeathTitan,[Forceful,Flashy,Clever],[Death],[King]),
Styx= new secondOrigin("Styx","Titan","Titan of the Journey",DeathTitan.name,DeathTitan,[Careful,Clever,Quick],[Death,Travel],[Harmonizer]),
Nirrti= new secondOrigin("Nirrti","Titan","Titan of Horror",DeathTitan.name,DeathTitan,[Flashy,Forceful,Sneaky],[Death],[Manipulator]),


Sōhei= new secondOrigin("Sōhei","Enlightened","Japanese Warrior Monks",OrderoftheJadeFist.name,OrderoftheJadeFist,[Forceful,Clever,Quick],[War,Wisdom],[General,Diplomat]),
Yamabushi= new secondOrigin("Yamabushi","Enlightened","Japanese Hermit Monks",OrderoftheJadeFist.name,OrderoftheJadeFist,[Careful,Clever,Forceful],[Wisdom,Nature],[Thinker,FreeSpirit]),
Shaolin= new secondOrigin("Shaolin","Enlightened","Chinese Warrior Monks",OrderoftheJadeFist.name,OrderoftheJadeFist,[Forceful,Flashy,Careful],[War,Knowledge],[Enforcer,FreeSpirit]),
Cuauhtlocelotl= new secondOrigin("Cuauhtlocelotl","Enlightened","Aztec Animal Warriors",OrderoftheJadeFist.name,OrderoftheJadeFist,[Sneaky,Clever,Careful],[War,Nature],[Hunter]),
TeutonicKnights= new secondOrigin("Teutonic Knights","Enlightened","Secretive European Monks",OrderoftheJadeFist.name,OrderoftheJadeFist,[Sneaky,Clever,Careful],[Darkness,Crafting],[Hunter,Politician]),
TheSevenTriads= new secondOrigin("The Seven Triads","Enlightened","Chinese Criminal Gangs",OrderoftheJadeFist.name,OrderoftheJadeFist,[Sneaky,Forceful,Clever],[Darkness,Wit],[Enforcer,Politician]),
Yakuza= new secondOrigin("Yakuza","Enlightened","Japanese Criminal Gangs",OrderoftheJadeFist.name,OrderoftheJadeFist,[Forceful,Sneaky,Quick],[Order,War],[Enforcer,Manipulator]),
DzheydBratstvo= new secondOrigin("Dzheyd Bratstvo","Enlightened","Russian Criminal Gang",OrderoftheJadeFist.name,OrderoftheJadeFist,[Forceful,Flashy,Quick],[Darkness,Sky],[Enforcer]),
SicilianMafia= new secondOrigin("Sicilian Mafia","Enlightened","Italian Criminal Gang",OrderoftheJadeFist.name,OrderoftheJadeFist,[Flashy,Careful,Forceful],[Water,Travel],[Prince,Diplomat]),
TheTecuani= new secondOrigin("The Tecuani","Enlightened","Latin American Criminal Gang",OrderoftheJadeFist.name,OrderoftheJadeFist,[Careful,Sneaky,Forceful],[Nature,Darkness],[Hunter]),

Keter= new secondOrigin("Keter","Enlightened","Prophets and Scholars",Cabal.name,Cabal,[Clever,Careful,Forceful],[Wisdom],[Thinker]),
Binah= new secondOrigin("Binah","Enlightened","Analysts and Wizards",Cabal.name,Cabal,[Careful,Clever,Flashy],[Fertility,Wit],[Mother,Thinker]),
Chokhmah= new secondOrigin("Chokhmah","Enlightened","Creative Geniuses",Cabal.name,Cabal,[Clever,Flashy,Quick],[Father,Crafting],[Thinker,Prince]),
Daat= new secondOrigin("Da'at","Enlightened","Secretive Leaders of the Cabal",Cabal.name,Cabal,[Careful,Clever,Sneaky],[Leader],[King,General]),
Gevurah= new secondOrigin("Gevurah","Enlightened","Righteous Enforcers",Cabal.name,Cabal,[Flashy,Forceful,Quick],[Fire,Justice],[Enforcer]),
Chesed= new secondOrigin("Chesed","Enlightened","Healers and Diplomats",Cabal.name,Cabal,[Careful,Clever,Sneaky],[Love,Water],[Harmonizer]),
Tipheret= new secondOrigin("Tipheret","Enlightened","Ensurers of Balance",Cabal.name,Cabal,[Clever,Flashy,Careful],[Order,Travel],[Diplomat,Harmonizer]),
Hod= new secondOrigin("Hod","Enlightened","Problem-Solvers",Cabal.name,Cabal,[Clever,Forceful,Sneaky],[Wit,Sky],[Enforcer,Thinker]),
Netzach= new secondOrigin("Netzach","Enlightened","Generals and Businessmen",Cabal.name,Cabal,[Forceful,Flashy,Quick],[War,Leader],[General,Manipulator]),
Yesod= new secondOrigin("Yesod","Enlightened","Link between the Spiritual and Physical",Cabal.name,Cabal,[Careful,Forceful,Sneaky],[Nature,Travel],[Enforcer,FreeSpirit]),
Malkuth= new secondOrigin("Malkuth","Enlightened","Ground Operatives",Cabal.name,Cabal,[Sneaky,Careful,Clever],[Nature],[Enforcer]),

CopperLodge= new secondOrigin("Copper Lodge","Enlightened","Biochemists",Illuminati.name,Illuminati,[Clever,Careful,Flashy],[Nature,Crafting],[Thinker]),
BronzeLodge= new secondOrigin("Bronze Lodge","Enlightened","Artists",Illuminati.name,Illuminati,[Flashy,Quick,Clever],[Sun,Wit],[FreeSpirit]),
SilverLodge= new secondOrigin("Silver Lodge","Enlightened","Engineers and Inventors",Illuminati.name,Illuminati,[Clever,Flashy,Quick],[Crafting],[Thinker]),
GoldLodge= new secondOrigin("Gold Lodge","Enlightened","Bankers",Illuminati.name,Illuminati,[Careful,Clever,Sneaky],[Order,Knowledge],[Thinker,Manipulator]),
OrichalcumLodge= new secondOrigin("Orichalcum Lodge","Enlightened","Specialists of the Occult Arts",Illuminati.name,Illuminati,[Clever,Forceful,Careful],[Knowledge,Darkness],[Thinker]),
IronLodge= new secondOrigin("Iron Lodge","Enlightened","Believers in Self-Improvement",Illuminati.name,Illuminati,[Forceful,Flashy,Quick],[War,Father],[Enforcer,Thinker]),
LeadLodge= new secondOrigin("Lead Lodge","Enlightened","Criminals and Ne'er-do-wells",Illuminati.name,Illuminati,[Sneaky,Careful,Quick],[Darkness,Earth],[Manipulator,Enforcer]),
SteelLodge= new secondOrigin("Steel Lodge","Enlightened","Warriors of the Illuminati",Illuminati.name,Illuminati,[Forceful,Flashy,Quick],[War],[Enforcer]),
MercuryLodge= new secondOrigin("Mercury Lodge","Enlightened","Scientists and Philosophers",Illuminati.name,Illuminati,[Clever,Careful,Flashy],[Knowledge],[Thinker]),
GalahadsCastle= new secondOrigin("Galahad\'s Castle","Enlightened","Destroyers of Evil and Wickedness",CircleofMerlin.name,CircleofMerlin,[Flashy,Forceful,Quick],[Sun,War],[Enforcer]),
PercivalsCastle= new secondOrigin("Percival\'s Castle","Enlightened","Protectors of Relics and Lands",CircleofMerlin.name,CircleofMerlin,[Careful,Quick,Clever],[Knowledge,War],[Protector]),
GawainsCastle= new secondOrigin("Gawain's Castle","Enlightened","Duelists and Assassins",CircleofMerlin.name,CircleofMerlin,[Flashy,Careful,Quick],[War,Death],[Enforcer]),
LamorakCastle= new secondOrigin("Lamorak\'s Castle","Enlightened","Brawlers and Street Fighters",CircleofMerlin.name,CircleofMerlin,[Forceful,Flashy,Quick],[Earth,Darkness],[Enforcer]),
BorsCastle= new secondOrigin("Bors\' Castle","Enlightened","Wanderers and Storytellers",CircleofMerlin.name,CircleofMerlin,[Careful,Clever,Sneaky],[Travel],[FreeSpirit]),

Templars= new secondOrigin("Templars","Enlightened","Amibitious European Oligarchs",OrderoftheJadeFist.name,OrderoftheJadeFist,[Clever,Sneaky,Forceful],[Justice,Earth],[Politician,Protector]), 
TristansCastle= new secondOrigin("Tristan's Castle","Enlightened","Diplomats",CircleofMerlin.name,CircleofMerlin,[Careful,Flashy,Clever],[Sun,Nature],[Harmonizer]), 
GeraintsCastle= new secondOrigin("Geraint's Castle","Enlightened","Druidic Experts",CircleofMerlin.name,CircleofMerlin,[Clever,Careful,Quick],[Nature],[FreeSpirit]), 
GarethsCastle= new secondOrigin("Gareth's Castle","Enlightened","Infiltrators and Information Gatherers",CircleofMerlin.name,CircleofMerlin,[Sneaky,Careful,Quick],[Darkness,Knowledge],[Trickster]), 
BediveresCastle= new secondOrigin("Bedivere's Castle","Enlightened","Craftsmen",CircleofMerlin.name,CircleofMerlin,[Clever,Flashy,Quick],[Crafting],[Protector]), 
KaysCastle= new secondOrigin("Kay's Castle","Enlightened","Brutish Enforcers",CircleofMerlin.name,CircleofMerlin,[Forceful,Flashy,Quick],[War],[Enforcer]), 
GaherisCastle= new secondOrigin("Gaheri's Castle","Enlightened","Internal Police",CircleofMerlin.name,CircleofMerlin,[Sneaky,Flashy,Careful],[Darkness,Order],[Protector,Manipulator]), 
ArthursCastle= new secondOrigin("Arthur's Castle","Enlightened","Leaders of the Knights",CircleofMerlin.name,CircleofMerlin,[Flashy,Careful,Clever],[Leader],[King,General]), 
Lancelot= new secondOrigin("Lancelot","Enlightened","Secret Order",CircleofMerlin.name,CircleofMerlin,[Sneaky,Careful,Clever],[Darkness],[Enforcer,Manipulator]),

SummerNymph= new secondOrigin("Summer Nymph","Mythborn","Spirits of Springs and Flowers",SummerCourt.name,SummerCourt,[Flashy,Quick,Clever],[Sun,Fertility],[FreeSpirit,Harmonizer]),
SummerDryad= new secondOrigin("Summer Dryad","Mythborn","Spirits of Trees and Mountains",SummerCourt.name,SummerCourt,[Careful,Flashy,Forceful],[Nature,Sun],[FreeSpirit,Trickster]),
LightElf= new secondOrigin("Light Elf","Mythborn","Organized, Martial Spirits of Fields and Plains",SummerCourt.name,SummerCourt,[Forceful,Careful,Flashy],[Sun,Nature],[General,Diplomat]),
SummerFey= new secondOrigin("Summer Fey","Mythborn","Spirits of Forests and Meadows",SummerCourt.name,SummerCourt,[Sneaky,Clever,Careful],[Wit,Sun],[Trickster,Diplomat]),
SummerNaiad= new secondOrigin("Summer Naiad","Mythborn","Spirits of the Sea",SummerCourt.name,SummerCourt,[Careful,Sneaky,Forceful],[Water,Nature],[Trickster,Harmonizer]),
Korrigans= new secondOrigin("Summer Korrigans","Mythborn","Spirits of the Roots and Soil",SummerCourt.name,SummerCourt,[Clever,Sneaky,Quick],[Nature],[FreeSpirit]),
Gnomes= new secondOrigin("Summer Gnomes","Mythborn","Spirits of Technology and Creativity",SummerCourt.name,SummerCourt,[Clever,Flashy,Quick],[Nature,Crafting],[Thinker]),
Leprechauns= new secondOrigin("Summer Leprechauns","Mythborn","Spirits of Wealth and Fertility",SummerCourt.name,SummerCourt,[Sneaky,Quick,Clever],[Nature,Fertility],[Trickster,FreeSpirit]),

WinterNymph= new secondOrigin("Winter Nymph","Mythborn","Spirits of Springs and Ice",WinterCourt.name,WinterCourt,[Flashy,Quick,Clever],[Moon,Nature],[FreeSpirit,Trickster]),
WinterDryad= new secondOrigin("Winter Dryad","Mythborn","Spirits of Trees and Mountains",WinterCourt.name,WinterCourt,[Careful,Flashy,Forceful],[Nature,Darkness],[FreeSpirit,Trickster]),
DarkElf= new secondOrigin("Dark Elf","Mythborn","Organized, Martial Spirits of Caves and Fjords",WinterCourt.name,WinterCourt,[Forceful,Careful,Flashy],[Darkness,Earth],[General,Enforcer]),
WinterFey= new secondOrigin("Winter Fey","Mythborn","Spirits of Forests and Swamps",WinterCourt.name,WinterCourt,[Sneaky,Clever,Careful],[Wit,Darkness],[Manipulator]),
WinterNaiad= new secondOrigin("Winter Naiad","Mythborn","Spirits of the Sea",WinterCourt.name,WinterCourt,[Careful,Sneaky,Forceful],[Water,Darkness],[Trickster]),
WinterKorrigans= new secondOrigin("Winter Korrigans","Mythborn","Spirits of the Roots and Soil",WinterCourt.name,WinterCourt,[Clever,Sneaky,Quick],[Nature],[FreeSpirit]),
WinterGnomes= new secondOrigin("Winter Gnomes","Mythborn","Spirits of Technology and Creativity",WinterCourt.name,WinterCourt,[Clever,Flashy,Quick],[Darkness,Crafting],[Thinker]),
WinterLeprechauns= new secondOrigin("Winter Leprechauns","Mythborn","Spirits of Wealth and Caves",WinterCourt.name,WinterCourt,[Sneaky,Quick,Clever],[Nature,Death],[Manipulator,FreeSpirit]),

EasternDragon= new secondOrigin("Eastern Dragon","Mythborn","Wise Dragons of Asia",JadeSea.name,JadeSea,[Clever,Careful,Flashy],[Water,Nature],[Thinker,Diplomat]), 
WesternDragon= new secondOrigin("Western Dragon","Mythborn","Mighty and Proud Dragons of Northern Europe",JadeSea.name,JadeSea,[Forceful,Flashy,Clever],[Sky,Nature],[King,Manipulator]), 
Coatl= new secondOrigin("Coatl","Mythborn","Free and Wild Dragons of South America",JadeSea.name,JadeSea,[Flashy,Clever,Sneaky],[Sky],[FreeSpirit]), 
Naga= new secondOrigin("Naga","Mythborn","Organized and Ruthless Dragons of South Asia",JadeSea.name,JadeSea,[Forceful,Quick,Clever],[Water,Order],[Enforcer,Politician]), 
Wyvern= new secondOrigin("Wyvern","Mythborn","Poisonous and Wicked Dragons of Western Europe",JadeSea.name,JadeSea,[Quick,Forceful,Flashy],[Death,Earth],[Enforcer,Manipulator]),

Wereboar = new secondOrigin("Were-boar","Mythborn","Industrious and Brash Were-Boars",DarkForest.name,DarkForest,[Forceful,Clever,Flashy],[Crafting,Nature],[Enforcer,Thinker]), 
LoupGarou= new secondOrigin("Loup-Garou","Mythborn","Proud and Wily Werewolves",DarkForest.name,DarkForest,[Sneaky,Clever,Quick],[Moon,Nature],[Politician,Enforcer]), 
Hag= new secondOrigin("Hag","Mythborn","Wicked Witches",DarkForest.name,DarkForest,[Clever,Sneaky,Careful],[Death,Darkness],[FreeSpirit,Trickster]), 
Ent= new secondOrigin("Ent","Mythborn","Walking Trees",DarkForest.name,DarkForest,[Forceful,Careful,Flashy],[Nature],[FreeSpirit]), 
Minotaur= new secondOrigin("Minotaur","Mythborn","Half-Bull Hulking Giants",DarkForest.name,DarkForest,[Forceful,Flashy,Quick],[War],[Enforcer]), 
Centaur = new secondOrigin("Centaur","Mythborn","Genius but Impulsive Half-Horses",DarkForest.name,DarkForest,[Clever,Careful,Quick],[Knowledge,War],[Thinker]), 
Satyr= new secondOrigin("Satyr","Mythborn","Eccentric Half-Goat",DarkForest.name,DarkForest,[Quick,Sneaky,Flashy],[Fertility],[Trickster]), 
Rakshasa= new secondOrigin("Rakshasa","Mythborn","Evil Demons",Shambhala.name,Shambhala,[Forceful,Flashy,Clever],[War,Darkness],[Enforcer,Manipulator]), 
Asura= new secondOrigin("Asura","Mythborn","Ancient Enemies of the Gods",Shambhala.name,Shambhala,[Flashy,Clever,Careful],[Fire,Order],[Politician]), 


Vanara= new secondOrigin("Vanara","Mythborn","Militaristic Half-Monkeys",Shambhala.name,Shambhala,[Flashy,Clever,Sneaky],[Nature,War],[Enforcer,Diplomat])
]

function compare(a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

function godPlacer(){
	//Creates a Score for each God and places them in the Triangle.
	//Ends with a Logos/Kosmos/Eros Score
	for(e=0;e<secondOriginArray.length;e++){
		totalScore = [0,0,0]
		
		approachesScore = [0,0,0]
		for(g=0;g<secondOriginArray[e].approaches.length;g++){
			approachesScore[0] += secondOriginArray[e].approaches[g].values[0]/(g+1)
			approachesScore[1] += secondOriginArray[e].approaches[g].values[1]/(g+1)
			approachesScore[2] += secondOriginArray[e].approaches[g].values[2]/(g+1)
		}
		domainsScore = [0,0,0]
		for(g=0;g<secondOriginArray[e].domains.length;g++){
			domainsScore[0] += secondOriginArray[e].domains[g].values[0]
			domainsScore[1] += secondOriginArray[e].domains[g].values[1]
			domainsScore[2] += secondOriginArray[e].domains[g].values[2]
		}
		for(p=0;p<domainsScore.length;p++){domainsScore[p]/=g}

		personalitiesScore = [0,0,0]
		for(g=0;g<secondOriginArray[e].personalities.length;g++){
			personalitiesScore[0] += secondOriginArray[e].personalities[g].values[0]
			personalitiesScore[1] += secondOriginArray[e].personalities[g].values[1]
			personalitiesScore[2] += secondOriginArray[e].personalities[g].values[2]
		}
		for(p=0;p<personalitiesScore.length;p++){personalitiesScore[p]/=g}

		originVarScore = [0,0,0]
			originVarScore[0] += secondOriginArray[e].originVar.values[0]
			originVarScore[1] += secondOriginArray[e].originVar.values[1]
			originVarScore[2] += secondOriginArray[e].originVar.values[2]	
		
			
		for(p=0;p<originVarScore.length;p++){originVarScore[p]/=g}
		if(secondOriginArray[e].type === "Titan"){for(g=0;g<totalScore.length;g++){totalScore[g] = Math.round((approachesScore[g]*0.10 + domainsScore[g]*0.25 + personalitiesScore[g]*0.25 + originVarScore[g]*0.40)*10)/10}}
		else{for(g=0;g<totalScore.length;g++){totalScore[g] = Math.round((approachesScore[g]*0.15 + domainsScore[g]*0.35 + personalitiesScore[g]*0.35 + originVarScore[g]*0.15)*10)/10}}

		secondOriginArray[e].totalValues = totalScore
	
		//for(g=0;g<totalScore.length;g++){if(secondOriginArray[e].totalValues[g] <10){secondOriginArray[e].totalValues[g]/=4} else{secondOriginArray[e].totalValues[g] += (20-secondOriginArray[e].totalValues[g])/4}}
	/*	
	logosScore = secondOriginArray[e].totalValues[0]
	kosmosScore = secondOriginArray[e].totalValues[1];
	erosScore = secondOriginArray[e].totalValues[2];
	
	
	logosScore = 10
	kosmosScore = 10
	erosScore = 20
	*/
//	displayArray.push(secondOriginArray[e].name + ": " + (Math.round((logosScore)*10)/10) + "," + (Math.round((kosmosScore)*10)/10) + "," + (Math.round((erosScore)*10)/10) + "\n")
//	addPoint()
		}
//alert(displayArray)

}

godPlacer()

function drawTriangle(){
var ax=300;
var ay=300;
var bx=0;
var by=300;
var cx=150;
var cy=300-Math.sqrt(3)*150;


var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();  
ctx.moveTo(ax,ay);  
ctx.lineTo(bx,by);  
ctx.lineTo(cx,cy);  
 ctx.fillStyle = "lightgrey";
ctx.fill(); 
}


//This adds a point to the canvas.
function addPoint(){

	//	calculateScore2()

// calculateScore();
/*
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.arc(150,200,4,0,2*Math.PI);
ctx.stroke();
 ctx.fillStyle = "black";
ctx.fill()
*/

// Dragon to Logos is 300;300 to 75;300-Math.sqrt(3)*75 (or 170)
// Kaos to Kosmos is 0;300 to 225 / 300-Math.sqrt(3)*75 (or 170)
// Ananke to Eros is 150;300-Math.sqrt(3) *150 (or 40) to 150;300


var logosPoint = [300,300,75,170,225,130]
var kosmosPoint = [0,300,225,170,-225,130]
var erosPoint = [150,40,150,300,0,-260]

var finalLogosPoint = [logosPoint[0]-logosPoint[4]*(logosScore/20),logosPoint[1]-logosPoint[5]*(logosScore/20)]
var finalKosmosPoint = [kosmosPoint[0]-kosmosPoint[4]*(kosmosScore/20),kosmosPoint[1]-kosmosPoint[5]*(kosmosScore/20)]
var finalErosPoint = [erosPoint[0]-erosPoint[4]*(erosScore/20),erosPoint[1]-erosPoint[5]*(erosScore/20)]
var finalPoint = [(finalLogosPoint[0]+finalKosmosPoint[0]+finalErosPoint[0])/3,(finalLogosPoint[1]+finalKosmosPoint[1]+finalErosPoint[1])/3]

//finalPoint[0] is the length of the journey divided by the Logos Score. finalPoint[1] is the same for the height. This makes them coordinates.


// Forbidden Places
// 300/300 -> 150/40
// point is at 168,180
// Middle is at 150,213
// Difference is 18, -33
// 1.7333
	var basePoint = [finalPoint[0],finalPoint[1]]
	//basePoint is the final point, before exaggeration
/*	
	var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.arc(finalPoint[0],finalPoint[1],4,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle = "black";
ctx.fill()
*/

for(i=0;i<100;i++){
	var difference = [finalPoint[0]-150,finalPoint[1]-213]
	//Difference is the final point coordinates minus the coordinates of the exact middle of the Triangle
	while((basePoint[0]-150)*1.7333 < (basePoint[1]-40) && ((basePoint[0]-150)*1.7333 > -(basePoint[1]-40)) && basePoint[1]<300)
	//as long as the length of the finalpoint has not reached an edge, it can be modified. basepoint becomes an exaggeration of finalpoint until either coordinate becomes out of bounds
		{
	basePoint[0]+= difference[0]/20
	basePoint[1]+= difference[1]/20
	//exaggerates the distance between basePoint and the center of the graph until one of the coordinates goes out of bounds
	}

}
middleDistance = [basePoint[0]-150,basePoint[1]-213]
	// distance between the edge and the center
	//now we have the distance between basePoint and the center, and finalPoint and the center

	// Difference is the distance between finalPoint and the center
	//MiddleDistance is the distance between basePoint and the center 
basicRatio = (basePoint[1]-213)/(difference[1]+0.1)
	//the lower the ratio the closest to the extreme the point is
finalToBasic = [basePoint[0]-finalPoint[0],basePoint[1]-finalPoint[1]]	

	//finalToBasic is the distance between the finalPoint and the basicPoint
	// now we set uberFinalPoint based on the ratio: the smaller the ratio, the more basePoint is heavy
//	var uberFinalPoint = [((finalPoint[0]*(basicRatio+5))+(basePoint[0]*(15-basicRatio)))/20,((finalPoint[1]*(basicRatio+5))+(basePoint[1]*(15-basicRatio)))/20]
	var uberFinalPoint = [finalPoint[0]+(finalToBasic[0]/(basicRatio/2+0.5)),finalPoint[1]+(finalToBasic[1]/(basicRatio/2)+0.5)]
	//the basicRatio can be used to set how the exagerration is made.

//	alert(Math.round(finalPoint[0]) + "," + Math.round(finalPoint[1]) + "   " + Math.round(uberFinalPoint[0]) + "," + Math.round(uberFinalPoint[1]) + "  " + secondOriginArray[e].name)
var c=document.getElementById("myCanvas");
var ctz=c.getContext("2d");
ctz.beginPath();
//ctz.arc(uberFinalPoint[0],uberFinalPoint[1],4,0,2*Math.PI);
ctz.arc(uberFinalPoint[0],uberFinalPoint[1],4,0,2*Math.PI);

ctz.stroke();
ctz.fillStyle = "black"
//console.log(colorChoice2[crt])
//console.log("rgb(" + [colorChoice1[b],colorChoice2[crt],255].join(',') + ')')
ctz.fill()



}

function calculateScore(){

	matchArray = []

for(p=0;p<secondOriginArray.length;p++){
	matchArray.push([Math.abs(secondOriginArray[p].totalValues[0]-logosScore)+Math.abs(secondOriginArray[p].totalValues[1]-kosmosScore)+Math.abs(secondOriginArray[p].totalValues[2]-erosScore),secondOriginArray[p]])

	}
 matchArray.sort(function(a, b){return a[0] - b[0]}); 
addPoint()
		switchDivs("myCanvas")
	switchDivs("questionsDiv")
alert("The God you are closest to is " + matchArray[0][1].name + ", " +  matchArray[0][1].originString + " " + matchArray[0][1].description + "\nWiki Link: \nhttp://wyrduk.wikidot.com/" + matchArray[0][1].name) 	
	personalityMatcher()
}


function calculateScore2(){
	logosScore = 0;
	kosmosScore = 0;
	erosScore = 0;

	
	for(n=0;n<radios.length;n++){
		
var rates = document.getElementsByName(radios[n]);
var rate_value;
for(var v = 0; v < rates.length; v++){
    if(rates[v].checked){
        rate_value = rates[v].value;
    }
}
	if(n<4){logosScore+=parseInt(rate_value)}
	else if(n<8){kosmosScore+=parseInt(rate_value)}
	else {erosScore+=parseInt(rate_value)} 
	}


calculateScore()
addPoint()
//		switchDivs("myCanvas")
//	switchDivs("questionsDiv")	
	}
	
	
function switchDivs(selectedDiv) {
  var x = document.getElementById(selectedDiv);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


//27 similar results, 37 unique ones
//37 final results (removing middle): 6 basic, 6 more advanced versions, then 6 mixes of those, then 6 final advanced and 6 mixes on each sides
/*How this will work: 
1 all neutral (4 neutral)
IF all numbers are the same
---
6 with neutral words except a mild version of the side (3 neutrals, one normal)
IF Two sides are the same and one is one level of difference
---
6 with neutral words except a strong version of the side (2 neutals, two normal)
IF Two sides are the same and one is two levels of difference
6 with mixes (2 neutrals, one strong from each common side)
IF There is one at 2.5, one at 7.5, one at 12.5
---
6 with very strong words (2 neutrals, two strong)
IF Two sides are the same and one is three levels of difference
12 with strong words and mixes (1 neutral, two strong, one strong of the relevant side)
*/

function personalityMatcher(){	

//while(logosScore > 0 && kosmosScore > 0 && erosScore > 0){logosScore -= 1;kosmosScore -=1;erosScore -=1}

	matchArrayAdjectives = []

for(p=0;p<adjectiveArray.length;p++){
	matchArrayAdjectives.push([Math.abs(adjectiveArray[p].values[0]-logosScore)+Math.abs(adjectiveArray[p].values[1]-kosmosScore)+Math.abs(adjectiveArray[p].values[2]-erosScore),adjectiveArray[p]])
	}
 matchArrayAdjectives.sort(function(a, b){return a[0] - b[0]}); 
//console.log(matchArrayAdjectives)
addPoint()
alert("You are: \n-" + matchArrayAdjectives[0][1].name + "\n-" +  matchArrayAdjectives[1][1].name + "\n-" +  matchArrayAdjectives[2][1].name + "\n-" +  matchArrayAdjectives[3][1].name
+ "\n \nYou are not: \n-"  + matchArrayAdjectives[matchArrayAdjectives.length-1][1].name + "\n-" +  matchArrayAdjectives[matchArrayAdjectives.length-2][1].name) 	

}

//


adjectiveArray = [


// 2.5 Logos 

//Balanced = new adjective("Balanced",[2.5,2.5,2.5]),
//	Balanced = new adjective("Balanced",[7.5,2.5,2.5]),
//	Balanced = new adjective("Balanced",[12.5,12.5,12.5]),
//	Balanced = new adjective("Balanced",[17.5,17.5,17.5]),
Enthusiastic = new adjective("Enthusiastic",[2.5,2.5,7.5]),
//	Enthusiastic = new adjective("Enthusiastic",[7.5,7.5,12.5]),
//	Enthusiastic = new adjective("Enthusiastic",[12.5,12.5,17.5]),
Emotional = new adjective("Emotional",[2.5,2.5,12.5]),
//	Emotional = new adjective("Emotional",[7.5,7.5,17.5]),
Passionate = new adjective("Passionate",[2.5,2.5,17.5]),

Stable = new adjective("Stable",[2.5,7.5,2.5]),
//	Stable = new adjective("Stable",[7.5,12.5,7.5]),
//	Stable = new adjective("Stable",[12.5,17.5,12.5]),
Intuitive = new adjective("Intuitive",[2.5,7.5,7.5]),
//	Intuitive = new adjective("Intuitive",[7.5,12.5,12.5]),
//	Intuitive = new adjective("Intuitive",[12.5,17.5,17.5]),
Friendly = new adjective("Friendly",[2.5,7.5,12.5]),
//	Friendly = new adjective("Friendly",[7.5,12.5,17.5]),
Empathetic = new adjective("Empathetic",[2.5,7.5,17.5]),

Conservative = new adjective("Conservative",[2.5,12.5,2.5]),
//	Conservative = new adjective("Conservative",[7.5,17.5,7.5]),
DownToEarth = new adjective("Down-to-earth",[2.5,12.5,7.5]),
//	DownToEarth = new adjective("Down-to-earth",[7.5,17.5,12.5]),
Impulsive = new adjective("Impulsive",[2.5,12.5,12.5]),
//	Impulsive = new adjective("Impulsive",[7.5,17.5,17.5]),
Nurturing = new adjective("Nurturing",[2.5,12.5,17.5]),

Traditionalist = new adjective("Very Traditionalist",[2.5,17.5,2.5]),
Pragmatic = new adjective("Pragmatic",[2.5,17.5,7.5]),
Protective = new adjective("Protective",[2.5,17.5,12.5]),
Wild = new adjective("Wild",[2.5,17.5,17.5]),

// 7.5 Logos 

Patient = new adjective("Patient",[7.5,2.5,2.5]),
//	Patient = new adjective("Patient",[12.5,7.5,7.5]),
//	Patient = new adjective("Patient",[17.5,12.5,12.5]),
Disorganised = new adjective("Disorganised",[7.5,2.5,7.5]),
//	Disorganised = new adjective("Disorganised",[12.5,7.5,12.5]),
//	Disorganised = new adjective("Disorganised",[17.5,12.5,17.5]),
Spontaneous = new adjective("Spontaneous",[7.5,2.5,12.5]),
//	Spontaneous = new adjective("Spontaneous",[12.5,7.5,17.5]),
Instinctive = new adjective("Instinctive",[7.5,2.5,17.5]),

Realistic = new adjective("Realistic",[7.5,7.5,2.5]),
//	Realistic = new adjective("Realistic",[12.5,12.5,7.5]),
//	Realistic = new adjective("Realistic",[17.5,17.5,12.5]),

Practical = new adjective("Practical",[7.5,12.5,2.5]),
//	Practical = new adjective("Practical",[12.5,17.5,7.5]),

Sensible = new adjective("Sensible",[7.5,17.5,2.5]),

// 12.5 Logos 

Calm = new adjective("Calm",[12.5,2.5,2.5]),
//	Calm = new adjective("Calm",[17.5,7.5,7.5]),
Cynical = new adjective("Cynical",[12.5,2.5,7.5]),
//	Cynical = new adjective("Cynical",[17.5,7.5,12.5]),
Rebellious = new adjective("Rebellious",[12.5,2.5,12.5]),
//	Rebellious = new adjective("Rebellious",[17.5,7.5,17.5]),
Idealistic = new adjective("Idealistic",[12.5,2.5,17.5]),

Studious = new adjective("Studious",[12.5,7.5,2.5]),
//	Studious = new adjective("Studious",[17.5,12.5,7.5]),

Devoted = new adjective("Devoted",[12.5,12.5,2.5]),
//	Devoted = new adjective("Devoted",[17.5,17.5,7.5]),

Formal = new adjective("Formal",[12.5,17.5,2.5]),

// 17.5 Logos 

Analytical = new adjective("Analytical",[17.5,2.5,2.5]),
Inquisitive = new adjective("Inquisitive",[17.5,2.5,7.5]),
Individualistic = new adjective("Individualistic",[17.5,2.5,12.5]),
Chaotic = new adjective("Chaotic",[17.5,2.5,17.5]),

Ambitious = new adjective("Ambitious",[17.5,7.5,2.5]),

PurposeDriven = new adjective("Purpose-Driven",[17.5,12.5,2.5]),

Spiritual = new adjective("Spiritual",[17.5,17.5,2.5])
]


function godRecommender(){
	
//Ceci est l'explorateur - tout simple, filter a travers les keywords et rien de plus.

secondOriginArray = secondOriginArray.sort(compare)

if(
document.getElementById("origins").options[document.getElementById("origins").selectedIndex].value != "noPreference" ||
document.getElementById("approaches").options[document.getElementById("approaches").selectedIndex].value != "noPreference" ||
document.getElementById("domains").options[document.getElementById("domains").selectedIndex].value != "noPreference" ||
document.getElementById("personality").options[document.getElementById("personality").selectedIndex].value != "noPreference"){

// Filters the Origins

var newSecondOriginArray = secondOriginArray


if(document.getElementById("origins").options[document.getElementById("origins").selectedIndex].value != "noPreference"){
if(document.getElementById("origins").options[document.getElementById("origins").selectedIndex].value === "Gods"){newSecondOriginArray = newSecondOriginArray.filter(function (entry) { return entry.originVar.type ===  "God"})}
else if(document.getElementById("origins").options[document.getElementById("origins").selectedIndex].value === "Titans"){newSecondOriginArray = newSecondOriginArray.filter(function (entry) { return entry.originVar.type ===  "Titan"})}
else if(document.getElementById("origins").options[document.getElementById("origins").selectedIndex].value === "Otherworlds"){newSecondOriginArray = newSecondOriginArray.filter(function (entry) { return entry.originVar.type === "Otherworld"})}
else if(document.getElementById("origins").options[document.getElementById("origins").selectedIndex].value === "SecretSocieties"){newSecondOriginArray = newSecondOriginArray.filter(function (entry) { return entry.originVar.type === "Enlightened" })}
else{newSecondOriginArray = newSecondOriginArray.filter(function (entry) { return entry.originVar.name === document.getElementById("origins").options[document.getElementById("origins").selectedIndex].value; })}
}

/*
// Filter the Approaches
if(document.getElementById("approaches").options[document.getElementById("approaches").selectedIndex].value != "noPreference"){newSecondOriginArray = newSecondOriginArray.filter(function (entry) {
return entry.approaches[0].name === document.getElementById("approaches").options[document.getElementById("approaches").selectedIndex].value || entry.approaches[1].name === document.getElementById("approaches").options[document.getElementById("approaches").selectedIndex].value || entry.approaches[2].name === document.getElementById("approaches").options[document.getElementById("approaches").selectedIndex].value
})}

// Filters the Domains
if(document.getElementById("domains").options[document.getElementById("domains").selectedIndex].value != "noPreference"){newSecondOriginArray = newSecondOriginArray.filter(function (entry) {
if(entry.domains.length === 1){return entry.domains[0].name === document.getElementById("domains").options[document.getElementById("domains").selectedIndex].value; }
if(entry.domains.length === 2){return entry.domains[0].name === document.getElementById("domains").options[document.getElementById("domains").selectedIndex].value || entry.domains[1].name === document.getElementById("domains").options[document.getElementById("domains").selectedIndex].value; }
})}*/

// Filter the Personalities
if(document.getElementById("personality").options[document.getElementById("personality").selectedIndex].value != "noPreference"){newSecondOriginArray = newSecondOriginArray.filter(function (entry) {
if(entry.personalities.length === 1){return entry.personalities[0].name === document.getElementById("personality").options[document.getElementById("personality").selectedIndex].value; }
if(entry.personalities.length === 2){return entry.personalities[0].name === document.getElementById("personality").options[document.getElementById("personality").selectedIndex].value || entry.personalities[1].name === document.getElementById("personality").options[document.getElementById("personality").selectedIndex].value; }
})}

godCounter = 0
if(newSecondOriginArray.length === 0){document.getElementById("noMatch").innerHTML = "No Match Found !"}
if(newSecondOriginArray.length != 0){document.getElementById("noMatch").innerHTML = " Click an Origin to check the recommended Attributes"}
document.getElementById("hoverer").innerHTML = "(Hover over an Origin for extra information)"


if(newSecondOriginArray.length % 3 === 1){newSecondOriginArray.push( Default= new secondOrigin(""))}
else if(newSecondOriginArray.length % 3 === 2){newSecondOriginArray.push( Default= new secondOrigin(""));newSecondOriginArray.push( Default= new secondOrigin(""))}

var table = document.getElementById("Table");
	table.innerHTML = "";
	 
	 for(i=2;i<newSecondOriginArray.length+3;i+=3){
godCounter+=1
 if(godCounter <= 3){

var row = table.insertRow(-1);

var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);


cell1.id = i.toString()
cell3.id = i.toString()
cell5.id = i.toString()

if(newSecondOriginArray[i-2]){cell1.innerHTML = newSecondOriginArray[i-2].name;cell1.title = newSecondOriginArray[i-2].originString + " " + newSecondOriginArray[i-2].description}
if(newSecondOriginArray[i-2] && newSecondOriginArray[i-2].name.length !=0){
if(parametersArray.indexOf(newSecondOriginArray[i-2].originVar) < 63){cell2.innerHTML = '<a href="http://wyrduk.wikidot.com/' + newSecondOriginArray[i-2].name + '"  target="_blank">Link</a>'}
else{cell2.innerHTML = '<a href="http://wyrduk.wikidot.com/' + newSecondOriginArray[i-2].originString + '"  target="_blank">Link</a>'}}
if(newSecondOriginArray[i-1]){cell3.innerHTML = newSecondOriginArray[i-1].name;cell3.title = newSecondOriginArray[i-1].originString + " " + newSecondOriginArray[i-1].description}
if(newSecondOriginArray[i-1] && newSecondOriginArray[i-1].name.length !=0){
if(parametersArray.indexOf(newSecondOriginArray[i-1].originVar) < 63){cell4.innerHTML = '<a href="http://wyrduk.wikidot.com/' + newSecondOriginArray[i-1].name + '"  target="_blank">Link</a>'}
else{cell4.innerHTML = '<a href="http://wyrduk.wikidot.com/' + newSecondOriginArray[i-1].originString + '"  target="_blank">Link</a>'}}
if(newSecondOriginArray[i]){cell5.innerHTML = newSecondOriginArray[i].name;cell5.title = newSecondOriginArray[i].originString + " " + newSecondOriginArray[i].description}
if(newSecondOriginArray[i] && newSecondOriginArray[i].name.length !=0){
if(parametersArray.indexOf(newSecondOriginArray[i].originVar) < 63){cell6.innerHTML = '<a href="http://wyrduk.wikidot.com/' + newSecondOriginArray[i].name + '"  target="_blank">Link</a>'}
else{cell6.innerHTML = '<a href="http://wyrduk.wikidot.com/' + newSecondOriginArray[i].originString + '"  target="_blank">Link</a>'}}

cell1.onclick = function() { for(i=2;i<document.getElementById("Table").rows.length*3;i+=3){
if(this.id === i.toString()){ChosenGod = newSecondOriginArray[i-2].name}}LegendaryMakerTotal()}
cell3.onclick = function() { for(i=2;i<document.getElementById("Table").rows.length*3;i+=3){
if(this.id === i.toString()){ChosenGod = newSecondOriginArray[i-1].name}}LegendaryMakerTotal()}
cell5.onclick = function() { for(i=2;i<document.getElementById("Table").rows.length*3;i+=3){
if(this.id === i.toString()){ChosenGod = newSecondOriginArray[i].name}}LegendaryMakerTotal()}


	 }
}}
}

function exampleLegendaryMaker(){

Total = new parameterCalculator("Total","Select Role",[0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])

  counter = 0
  for(i=0;i<newAbilitiesArray.length;i++){

	//Adds the Domains
	if(godFound.domains.length === 1){Total.legendaries[i] += godFound.domains[0].legendaries[i]/2}
	if(godFound.domains.length === 2){Total.legendaries[i] += (godFound.domains[0].legendaries[i] + godFound.domains[1].legendaries[i])/4}

	//Adds the chosen Roles (Face, Tank, etc)
	Total.legendaries[i]+=Math.floor((roleFound.legendaries[i]/20*6+roleFound2.legendaries[i]/20*4)) 
} 	 


  for(i=0;i<skillsArray.length;i++){
	//Adds the Origin 
	Total.skills[i] += godFound.originVar.skills[i]/2 
	//Adds the Domains
	if(godFound.domains.length === 1){Total.skills[i] += godFound.domains[0].skills[i]/2}
	if(godFound.domains.length === 2){Total.skills[i] += (godFound.domains[0].skills[i] + godFound.domains[1].skills[i])/4}
	//Adds Personalities
	if(godFound.personalities.length === 1){Total.skills[i] += godFound.personalities[0].skills[i]/2}
	if(godFound.personalities.length === 2){Total.skills[i] += (godFound.personalities[0].skills[i] + godFound.personalities[1].skills[i])/4}
	//Adds Roles
	Total.skills[i]+=Math.floor((roleFound.skills[i]/20*6+roleFound2.skills[i]/20*4)) 

	//Adds the LKE Scores 
	logosScore = godFound.totalValues[0]
	kosmosScore = godFound.totalValues[1]
	erosScore = godFound.totalValues[2]
} 	



function adder(value){
	
//the adder function looks through all Legendaries, if any are on a relevant score. If so they are added to the Total array.

{for(i=0;i<newAbilitiesArray.length;i++){if(Math.round(Total.legendaries[i])==value){ legendariesFound.push([newAbilitiesArray[i].name,newAbilitiesArray[i].description,value,newAbilitiesArray[i]]);}
}}
{for(i=0;i<skillsArray.length;i++){if(Math.round(Total.skills[i])==value){ skillsFound.push([skillsArray[i].name,skillsArray[i].description,value,skillsArray[i].aspectVariables]);}
}}
}

for(o=10;o>-10;o--){adder(o)}

//At this point, legendariesFound is a full Array with all the Legendaries and their score based on Domain/Roles
//Next, the following function creates a sister array, matchArrayLegendaries, which does the same based on LKE Scores

LegendaryAbilityMatcher()

//Finally, both Arrays, sorted with their own Score, are compared and added to a third array.

finalLegendariesArray = []
for(e=0;e<legendariesFound.length;e++){
	for(f=0;f<matchArrayLegendaries.length;f++){
		if(legendariesFound[e][0] == matchArrayLegendaries[f][1].name){finalLegendariesArray.push([legendariesFound[e][0],e+f,legendariesFound[e][3]])}
	}
}
 finalLegendariesArray.sort(function(a, b){return a[1] - b[1]}); 

for(i=0;i<2;i++){document.getElementById("LegendaryFound" + (i+1)).innerHTML = finalLegendariesArray[i][0]}
for(i=0;i<2;i++){document.getElementById("LegendaryFound" + (i+1)).title = finalLegendariesArray[i][2].description}

for(i=0;i<4;i++){document.getElementById("SkillFound" + (i+1)).innerHTML = skillsFound[i][0]}
for(i=0;i<4;i++){document.getElementById("SkillFound" + (i+1)).title = skillsFound[i][1]}


}

function LegendaryAbilityMatcher(){	

//This looks at the Logos/Kosmos/Eros Scores and matches the nearest Legendary Abilities. The first Array Element of matchArrayLegendaries elements is how close that Legendary Ability is with a score.

//while(logosScore > 0 && kosmosScore > 0 && erosScore > 0){logosScore -= 1;kosmosScore -=1;erosScore -=1}


	matchArrayLegendaries = []

for(p=0;p<newAbilitiesArray.length;p++){
	matchArrayLegendaries.push([Math.abs(newAbilitiesArray[p].values[0]-logosScore)+Math.abs(newAbilitiesArray[p].values[1]-kosmosScore)+Math.abs(newAbilitiesArray[p].values[2]-erosScore),newAbilitiesArray[p]])
	}
 matchArrayLegendaries.sort(function(a, b){return a[0] - b[0]}); 

//	 for(p=0;p<matchArrayLegendaries.length;p++){console.log(matchArrayLegendaries[p][1].name + " " + matchArrayLegendaries[p][0])	 }



}

function LegendaryMakerTotal(){
// This changes the function code based on whether LegendaryMakerTotal is used for the Godborn Maker or the NPC Maker

document.getElementById("confirmNPC1Button").style="display:block"

	
	legendariesFound = []
	skillsFound = []
	  godFound = secondOriginArray.filter(function (entry) { return entry.name === ChosenGod; })[0]
  roleFound2 = rolesChoiceArray.filter(function (entry) { return entry.name === ChosenSecondRole; })[0]	
  roleFound = rolesChoiceArray.filter(function (entry) { return entry.name === ChosenFirstRole; })[0]

exampleLegendaryMaker()  


document.getElementById("hoverer2").innerHTML = "(Hover for more information)"
}


function addOption(selectChoice) {
 	if(document.getElementById("continent").value === "God"){newOriginArray = parametersArray.filter(function (entry) { return entry.type === "God" })}
	if(document.getElementById("continent").value === "Otherworld"){newOriginArray = parametersArray.filter(function (entry) { return entry.type === "Otherworld" })}
	if(document.getElementById("continent").value === "Titan"){newOriginArray = parametersArray.filter(function (entry) { return entry.type === "Titan" })}
	if(document.getElementById("continent").value === "Enlightened"){newOriginArray = parametersArray.filter(function (entry) { return entry.type === "Enlightened" })}


for (j = 0; j < 100; j++) {
  selectChoice.options[0] = null;
}	
for (i = 0; i < newOriginArray.length; i++) {
    var x = selectChoice;
    var option = document.createElement("option");
    option.text = newOriginArray[i].name;
    option.value = newOriginArray[i].name;

   x.add(option);
}
}
/*
function addOriginOption(selectChoice) {

for (j = 0; j < 100; j++) {
  selectChoice.options[0] = null;
}	 
for (i = 0; i < secondOriginArray.length; i++) {
if(document.getElementById("OriginSelect").value === secondOriginArray[i].originString){	
    var x = selectChoice;
    var option = document.createElement("option");
    option.text = secondOriginArray[i].name;
    option.value = secondOriginArray[i].name;
   x.add(option);
}}
}
*/


function lengthChecker(){
	length = ""
for(i=0;i<secondOriginArray.length;i++){
length+= secondOriginArray[i].name + ": " + secondOriginArray[i].legendaries.length + "\n"
}
	alert(length)
}
function addAnAbilityMaker(){
abilityName = prompt("What is the Name of this Ability ?")
variableName = abilityName.replace(/\s/g, '');
newLegendary =	[]
for(i=0;i<parametersArray.length;i++){
newLegendary.push(prompt(parametersArray[i].name + " - " + abilityName))
}
alert(variableName + " = new LegendaryAbility(\"" + abilityName + "\",[" + newLegendary + "])")
}


function addAnAbility(){
	newAbilitiesArray = [
DruidismGreenDruid = new LegendaryAbility("Green Druid","- Summon an Ent to aid you in battle\n- Entangle enemies with roots.",[8,8,12],[-1,2,-1,0,2,-2,-2,1,0,1,-2,-2,2,-1,0,1,2,1,1,4,02,2,-1,3,3],["Nature-Loving","Druid"]),
Mythcalling = new LegendaryAbility("Mythcalling","- Summon a swarm of bees,\n- Empower your animal companion.",[8,10,12],[2,2,2,3,3,3,2,1,1,2,-1,0,1,-2,2,2,2,0,3,3,1,-2,1,0,2,3],["Mythcalling","Mythcaller"]),
DruidismFeySorcerySummer = new LegendaryAbility("Fey Sorcery - Summer","- Send a scorching ray of heat\n- Make yourself irresistibly attractive.",[12,6,8],[-2,-1,-1,0,3,1,-1,0,1,0,-4,3,2,-2,-4,4,0,-3,1,3,-1,4,2,2,3,2],["Mischievous","Sorcerer"]),
DruidismFeySorceryWinter = new LegendaryAbility("Fey Sorcery - Winter","- Raise a blizzard.\n- Create an illusion of yourself.",[11,5,12],[-1,2,0,-3,-4,-2,2,2,1,2,2,-3,-1,-2,2,-4,1,3,1,2,0,4,2,3,3,1],["Devious","Warlock"]),
DruidismTechnodruidism = new LegendaryAbility("Technodruidism","- Manipulate electrical currents.\n- Take remote control of a computer system.",[15,5,6],[-2,1,-2,-3,1,-2,-1,-2,-3,3,-1,1,2,0,0,-1,2,-1,4,2,-2,-1,2,2,4,1],["Cyborg","Technodruid"]),
//HematurgyYahuar = new LegendaryAbility("Yahuar","- Raise a Bone Shield to protect your allies.\n- Heal your allies.",[6,14,10],[2,0,0,0,1,1,-2,1,-1,-2,0,1,-1,1,-1,1,-1,-1,-2,-3,2,-3,2,-1,-2,2],["Self Sacrificial","Bloodsharer"]),
//HematurgyItztli = new LegendaryAbility("Itztli","- Desecrate a sacred location.\n- Sacrifice an enemy for more power.",[8,16,10],[1,0,0,-1,0,0,-1,-1,0,-1,1,1,0,0,-1,2,-1,-1,-2,-1,0,-3,0,2,0,-1],["Blood Drinking","Executioner"]),
InvokationDeathNecromancy = new LegendaryAbility("Spiritwalking - Necromancy","- Raise the dead.\n- Consume Souls to gain power.",[6,12,10],[1,1,0,-2,-3,-3,2,1,0,1,3,-1,1,-1,0,-1,0,1,0,-2,-1,1,-2,1,2,1,1],["Soulstealing","Necromancer"]),
InvokationDeathShamanism = new LegendaryAbility("Spiritwalking - Shamanism","- Gain the advice of an ancient wise spirit.\n- Tap into the power of a sanctified place.",[8,8,7],[-1,3,0,-1,-2,-2,4,3,1,1,4,1,2,2,2,0,1,2,-2,-2,1,2,1,0,4,3],["Shamanistic","Shaman"]),
InvokationDeathDestruction = new LegendaryAbility("Death - Destruction","- Send beams of pure Death\n- Crumble a wall to dust.",[0,10,13],[2,0,0,-2,-3,-2,2,2,1,-1,3,1,1,-1,1,-2,0,3,-1,-2,0,-3,0,4,1,-2],["Murderous","Killer"]),
InvokationDeathHorror = new LegendaryAbility("Death - Horror","- Terrify enemies.\n- Turn ghosts into insane wraiths.",[4,9,12],[0,0,1,-2,-3,-1,1,1,1,-1,1,1,1,-1,1,-3,-1,1,0,-1,-2,2,1,-1,0,2],["Horrifying","Terror"]),
ChwalRider = new LegendaryAbility("Chwal - Rider","- See through the eyes on an unsuspecting individual.\n- Mark and find individuals.",[11,9,3],[-1,0,0,1,0,-1,2,2,1,3,1,-1,0,2,3,0,2,1,0,-1,0,1,-2,-3,4,2],["Watchful","Spy"]),
ChwalPuppeteer = new LegendaryAbility("Chwal - Puppeteer","- Control an individual’s actions.\n- Stop an enemy mid-strike.",[6,7,12],[-2,0,2,0,0,1,2,2,0,2,3,0,1,0,3,-1,2,2,0,-1,1,1,-2,-3,2,4],["Manipulative","Puppetmaster"]),
WyrdseeingMystery = new LegendaryAbility("Mystery","- Reveal information hidden in the tangles of Fate.\n- Detect Fatebindings between two targets.",[16,16,4],[-1,4,2,-1,-2,1,1,3,2,2,0,2,-1,3,4,2,4,1,0,1,2,-1,-1,-2,4,2],["Wise","Master"]),
WyrdseeingProphecy = new LegendaryAbility("Prophecy","- Sense an attack or ambush coming.\n- Decipher the future of an individual.",[18,18,4],[-2,4,2,2,1,2,1,1,1,2,1,1,0,2,3,2,4,1,1,1,2,-2,2,-3,4,3],["Prophetic","Prophet"]),
EpicPhysiologyEpicStrength = new LegendaryAbility("Epic Strength","- Lift a car.\n- Rip a man in half.",[5,11,13],[4,-3,1,-1,-2,-3,-4,-2,1,-3,-2,2,3,2,-3,1,-3,-2,0,-1,-1,-2,2,4,1,-1],["Mighty","Goliath"]),
EpicPhysiologyEpicToughness = new LegendaryAbility("Epic Toughness","- Shrug off a fireball\n- Run without stopping for days.",[5,8,14],[4,-2,1,2,2,-2,-3,-1,0,-2,1,0,3,4,-2,1,-2,-2,-1,0,3,-2,4,1,-1,0],["Resilient","Hulk"]),
EpicPhysiologyEpicSenses = new LegendaryAbility("Epic Senses","- Gain amazing hearing\n- See from miles away.",[5,10,15],[1,2,0,1,1,3,2,0,2,3,-2,2,1,3,4,1,2,3,-1,0,-1,0,3,1,3,-1],["Perceptive","Hunter"]),
EpicPhysiologyBeauty = new LegendaryAbility("Epic Beauty","- Charm others.\n- Pacify others with awe.",[8,6,16],[-3,-2,2,2,3,4,0,1,1,2,-2,2,1,-1,3,3,0,-1,-2,1,-2,4,-1,-2,-2,-1],["Beautiful","Supermodel"]),
FireDestruction = new LegendaryAbility("Fire - Destruction","- Burn a forest down\n- Throw a fireball.",[5,10,10],[2,-2,-2,-2,-1,0,-3,-4,1,-3,1,6,0,0,-2,4,-3,-3,1,0,-3,-1,-2,-2,-2,4,1,-1],["Destructive","Pyromancer"]),
FireLife = new LegendaryAbility("Fire - Life","- Ressurect mortals\n- Heal allies.",[6,9,15],[-2,2,2,3,2,2,-2,-3,-2,-3,-4,5,1,-1,-3,6,-2,-3,2,1,-2,1,3,-1,1,4],["Bright","Lifebinder"]),
FireInvention = new LegendaryAbility("Fire - Invention","- Create an impossibly large gun.- Hack a computer.",[12,4,8],[1,2,0,-2,-3,-2,-3,-4,1,2,-3,5,2,0,-3,2,1,-3,6,-3,1,-2,2,2,4,1],["Genius","Inventor"]),
FireMagma = new LegendaryAbility("Fire - Magma","- Create and control flows of magma\n- Rupture volcanoes from the ground.",[5,13,13],[1,-2,-1,-2,0,-1,-3,-4,1,-3,1,4,3,-1,-3,1,-3,-4,1,0,-2,-3,3,3,-1,1],["Magma","Earthmelter"]),
FireDrought = new LegendaryAbility("Fire - Drought","- Dry up water and blood.\n- Turn enemies to ash.",[6,9,13],[1,-3,-2,-3,-4,-3,-4,-6,2,-3,2,4,0,-2,-4,1,-3,1,0,-2,-3,-2,1,2,-1,4],["Droughtbringing","Lifeeater"]),
FireStrife = new LegendaryAbility("Fire - Strife","- Turn friends against each other.\n- Start a bar fight.",[6,15,12],[4,-1,0,-3,-3,3,-1,0,1,1,0,4,-2,-4,1,3,-1,-3,-2,-3,-2,4,2,1,2,4],["Rabble-Rousing","Anarchist"]),
WaWorldgingSea = new LegendaryAbility("Water - Raging Sea","- Create anger.\n- Raise a tidal wave.",[6,10,9],[1,-1,-2,-3,0,-3,1,5,3,-1,0,-4,-1,-2,2,-2,-1,1,-3,-2,-3,-2,1,2,2,3],["Raging","Leviathan"]),
WaterAbyss = new LegendaryAbility("Depths - Abyss","- Summon creatures from the dark Abyss.- Drown your enemies.",[5,9,12],[-2,1,1,3,2,-3,1,4,-3,-2,2,-4,-1,-3,-2,-4,1,3,-2,-4,-3,2,4,2,0,1],["Abyssal","Crusher"]),
WaterLife = new LegendaryAbility("Water - Life","- Spring forth impossible animals.\n- Fortify your allies.",[4,12,10],[-4,2,1,3,2,1,1,4,1,2,-4,-4,1,0,2,-3,0,-3,-2,2,0,1,3,-2,-2,4],["Seafaring","Lifebringer"]),
LightBrightness = new LegendaryAbility("Light - Brightness","- Blind your enemies\n- Dazzle an audience.",[12,18,8],[1,-2,3,-1,-2,3,0,-2,1,1,-3,2,-1,0,-4,3,-2,-4,-3,-2,1,4,2,-1,-2,3],["Bright","Lightbringer"]),
LightIllumination = new LegendaryAbility("Light - Illumination","- Engage in intense concentration to reveal mysteries\n- Inspire others to create and learn.",[16,12,1],[-2,3,2,-3,-2,2,2,-1,-1,2,-3,2,-1,-2,3,4,3,-4,2,0,1,1,-2,-3,4,2],["Illuminated","Genius"]),
LightSun = new LegendaryAbility("Light - Sun","- Send rays of heat.\n- Travel on a sunbeam.",[14,12,6],[-1,-2,2,-1,-2,0,-1,-3,2,-2,-4,3,1,-1,-4,6,-1,-4,0,1,0,2,2,3,0,2],["Sunlit","Sunwalker"]),
SkyDestruction = new LegendaryAbility("Sky - Destruction","- Crush enemies with storms.\n- Summon tornadoes.",[6,9,7],[2,-2,0,-2,-3,-2,-1,0,4,-2,2,2,1,1,-1,1,-2,0,-2,-2,-1,-2,-1,4,-2,-1],["Stormborn","Skybreaker"]),
SkyTempest = new LegendaryAbility("Sky - Tempest","- Create Storms.\n- Fly.",[8,10,6],[3,-2,1,-2,-1,-2,1,2,4,-1,1,0,2,1,0,-2,-3,1,-2,-1,-1,-2,2,3,1,2],["Tempest","Skylord"]),
SkyPeace = new LegendaryAbility("Sky - Peace","- Pacify Enemies\n- Stop a bullet in its tracks.",[10,8,4],[-4,2,1,1,1,2,2,2,4,0,-3,-3,2,2,3,1,2,-2,0,1,3,3,3,-2,1,2],["Calm","Peacemaker"]),
SkyRain = new LegendaryAbility("Sky - Rain","- Create a soothing rain\n- Summon a raging monsoon.",[13,7,7],[-2,2,1,2,3,1,2,4,4,1,-2,-4,-1,-2,0,-3,1,-2,-3,1,-1,0,-1,-2,2,3],["Soothing","Rainbinder"]),
DarknessVoid = new LegendaryAbility("Night - Void","- Remove the sense of sight or hearing from your foes.\n- Erase an enemy from existence.",[6,8,10],[2,-2,-1,-3,-4,-3,0,-2,-2,-3,3,-1,1,-2,1,-3,-2,4,-2,-3,-2,2,-2,4,-3,-4],["Voidwalking","Voidwalker"]),
DarknessShadows = new LegendaryAbility("Depths - Shadows","- Hide in shadows\n- Remove light.",[6,8,8],[-2,0,-2,-3,-2,1,2,0,-1,3,2,-2,-1,-3,3,-3,-1,4,0,1,-1,1,2,-2,4,3],["Blinding","Visionbreaker"]),
DarknessUnderground = new LegendaryAbility("Depths - Underground","- See in the dark.\n- Have the Earth swallow enemies.",[3,10,12],[-1,-1,-2,1,2,-2,2,-2,-4,0,3,-2,3,1,-4,-4,1,4,2,2,1,-2,2,-2,-1,4],["Underground","Cavern Dweller"]),
WorldAbundance = new LegendaryAbility("Depths - Abundance","- Summon riches.\n- Summon weapons for a whole army.",[5,10,12],[-2,1,2,1,3,1,2,2,2,-1,-3,0,3,0,-1,2,1,-2,4,2,2,1,0,-1,4,3],["Metalcrafting","Engineer"]),
WorldLife = new LegendaryAbility("World - Life","- Summon plants and animals.\n- Heal a forest.",[1,10,14],[-3,2,1,4,4,2,0,2,-1,-2,-4,1,4,-1,0,3,1,-2,1,3,-1,-2,2,2,3,4],["Creating","Progenitor"]),
WorldStone = new LegendaryAbility("World - Stone","- Crush enemies with a boulder.\n- Turn your fist into stone.",[7,10,10],[3,1,1,-2,-2,-2,-1,0,-1,-2,0,1,4,2,-2,-2,0,1,2,2,3,-2,5,3,1,3],["Avalanche","Earthbreaker"]),
WorldDecay = new LegendaryAbility("World - Decay","- Rot an enemy from the inside.\n- Summon an army of worms.",[2,11,10],[3,-3,-2,-2,1,-2,-1,-2,-4,-3,4,1,4,-3,-2,-3,-3,3,0,2,-2,-3,1,4,2,3],["Plague","Blighter"]),
WorldExpanse = new LegendaryAbility("World - Expanse","- Travel quickly.\n- Plague your foes with exotic diseases.",[5,8,12],[-1,1,1,0,2,-1,3,2,3,-1,-2,-1,4,0,0,1,2,-2,0,3,-2,-1,2,0,4,3],["Travelling","Wanderer"]),
OrderGravity = new LegendaryAbility("Order - Gravity","- Slam an enemy into the floor.\n- Float into the air.",[5,13,6],[1,2,2,-1,-2,1,3,1,0,1,1,2,2,3,2,1,3,0,1,1,4,-2,3,2,2,4],["Titanic","Goliath"]),
OrderControl = new LegendaryAbility("Order - Control","- Compel someone to obey your orders.\n- Take control of an ongoing spell.",[7,15,0],[2,2,3,-2,-2,2,1,1,2,-2,-1,2,3,4,2,2,1,1,1,1,4,2,3,0,-1,3],["Tyrannical","Ruler"]),
KannagaranoMichi = new LegendaryAbility("Kannagara no Michi","- Bond yourself to a Kami or Mythborn.\n- Separate a Legendary being from its power source.",[7,8,11],[2,4,2,2,3,2,2,2,0,1,-4,0,3,0,2,2,-2,-2,1,5,-2,4,3,3,4,2],["Nature-bound","Kami-Friend"]),
//TheMiddleWay = new LegendaryAbility("The Middle Way","- Distance yourself from Reality to resist uses of Legendary Abilities.\n- Project yourself to your ideal Self to increase your mental abilities.",[14,6,6],[-3,4,0,0,0,1,0,0,1,2,-2,0,-2,0,0,0,2,-2,-2,0,0,0,2,-2,0,1],["Enlightened","Wise One"]),
Isfet = new LegendaryAbility("Isfet","- Gain the Isfet Aspect “Compulsive Liar”.\n- Gain the Isfet Aspect “Greed is Good”.",[10,4,16],[2,-1,3,-2,2,3,1,2,2,3,2,3,1,-4,3,3,2,4,-1,2,-4,3,3,1,3,4,3],["Sinful","Sinner"]),
Nihilism = new LegendaryAbility("Nihilism","- Deny the existence of Legend to harm Legendary beings.\n- Rely on Reason to defend against Legendary attacks.",[14,4,14],[1,4,2,-2,0,1,1,2,1,3,0,1,1,2,1,1,4,2,-2,1,2,0,4,4,3,3],["Nihilistic","Nihilist"]),
OrderKnowledge = new LegendaryAbility("Order - Knowledge","- Learn ancient mysteries.\n- Have an incredible memory.",[12,8,2],[-2,3,-1,-2,-1,1,0,2,0,2,-1,1,2,2,1,0,4,-2,2,0,4,-2,-1,-1,4,2],["Wise","Sage"]),
NightMoon = new LegendaryAbility("Night - Moon","- Turn someone insane.\n- Soothe a pained friend.",[6,10,9],[-1,1,-1,0,2,1,2,2,2,3,2,-4,-1,-2,6,-4,1,-3,-1,1,-2,4,1,-1,3,4],["Sorrowful","Lunatic"]),
NightDarkness = new LegendaryAbility("Night - Obscurity","- Blind an enemy.\n- Hide in the shadows.",[8,6,10],[1,-1,1,-2,-2,-3,-2,2,2,1,2,-3,1,-4,-3,-4,1,5,-2,-1,-4,0,3,1,4,3],["Dark","Skulker"]),
NightVeil = new LegendaryAbility("Night - Veil","- Turn invisible.\n- Defend yourself from magic.",[8,8,6],[-2,1,-1,-2,-2,1,2,2,2,2,2,-4,1,1,3,-4,1,4,0,0,1,0,2,1,3,4],["Veiled","Veiler"]),
NightStars = new LegendaryAbility("Night - Stars","- Divine the future.\n- Call down the fire of the Stars.",[8,8,6],[-2,4,2,1,-1,2,2,1,3,2,-2,1,-1,1,3,1,4,-2,0,0,1,1,-1,-2,4,3],["Star-blessed","Stargazer"]),
NightFear = new LegendaryAbility("Night - Fear","- Terrify enemies.\n- Lurk hidden in the shadows.",[5,10,15],[1,-1,0,-2,-3,1,-1,1,2,0,2,-4,1,0,1,-4,-2,4,0,-1,-2,4,2,0,1,3],["Predatory","Terror"]),
TaiYiNature = new LegendaryAbility("Tai Yi - Nature","- Change an enemy into a servant.\n- Reshape a Titanspawn.",[7,17,7],[0,1,2,1,0,0,0,0,1,-2,-1,0,1,3,1,1,1,2,1,-1,4,-3,-2,-3,2,1],["Legend-Shaping","Legend-Shaper"]),
TaiYiFlow = new LegendaryAbility("Tai Yi - Flow","- Redirect a Spell.\n- Manipulate flows of Legend.",[10,14,4],[-1,2,0,1,2,2,2,2,1,1,1,1,-2,1,2,2,0,-1,0,2,3,-3,1,-1,3,2],["Masterful","Flowbinder"]),
FleshShaping = new LegendaryAbility("Flesh-Shaping","- Grow Wings.\n- Regrow an Arm.",[4,14,14],[2,-2,-1,1,1,-1,-2,-2,-3,-3,2,0,1,-1,-2,-2,-3,0,-3,-2,-3,-3,3,3,-2,-3],["Monstrous","Abomination"]),
EpicPresence = new LegendaryAbility("Epic Presence","- Give rousing speeches.\n- Intimidate an individual.",[11,15,8],[4,1,4,0,-2,2,-1,0,2,-1,2,3,1,3,-1,3,-2,1,-1,-2,2,4,2,-1,1,2],["Commanding","Commander"])

/*
Night - Nightmares
Death - Journey
Order - Law
*/
	]

	skillsArray = [

AthleticsSkill = new LegendaryAbility("Athletics","- Jump over a wall.\n- Run a sprint.",[0,0,0],[0,-1,2,1,4,2,2,-1,1,0,1,1,1,1,2,-2,-1,1,2,0,-1,2,-2,1,-1,1,0,1,-2,2,2,2,-2,0,3,0,-1,0,-2,2,4,1,-1,1,0,2,2,-1,0,-1,1,2,-1,0,2,1,0,2,2,1,3,2,0,2,1,1,2,2,2,-2,2,-1,1,-3,3,-1,4,0],[["Acrobatic","Delicate","Agile"],["Sprinter","Challenger","Leaper"]]),
Rapport = new LegendaryAbility("Rapport","- Make friends at a bar.\n- Mediate a negotiation.",[0,0,0],[2,1,1,-1,1,0,-3,2,2,3,3,4,3,2,1,1,1,1,2,-1,1,2,-2,-3,-1,1,-1,-3,2,1,2,4,-1,6,-1,-3,0,1,4,2,-3,-1,-1,1,-1,1,1,1,-1,1,1,2,0,3,-4,1,0,2,1,-3,2,2,-1,4,0,-1,3,-1,4,4,3,2,3,5,-1,-2,0,2],[["Amicable","Cordial","Calm"],["Mediator","Emissary","Agent"]]),
Technology = new LegendaryAbility("Technology","- Hack a computer\n- Build a grenade.",[0,0,0],[1,4,3,0,3,1,-1,1,0,-1,-1,0,1,0,1,2,1,3,3,1,1,2,2,-1,6,1,2,-1,1,2,0,-1,2,0,2,1,2,3,0,1,2,1,1,0,-1,-1,-2,-2,1,-1,-1,1,-2,2,-4,1,2,3,3,-2,1,2,-2,3,3,-2,2,-1,6,4,2,1,0,-2,2,1,5,3],[["Clever","Smart","Intelligent"],["Engineer","Tinkerer","Technophile"]]),
FirstAid = new LegendaryAbility("First Aid","- Patch a wound.\n- Find the antidote to a poison.",[0,0,0],[3,3,0,-1,1,0,1,1,-1,1,3,3,1,3,2,-1,2,2,3,1,0,2,1,-2,1,2,2,0,-2,1,-1,2,0,1,-2,-3,-2,-3,1,3,-2,0,1,1,1,0,1,1,-1,0,0,1,1,2,1,2,1,3,3,-2,1,1,1,4,1,0,2,-1,2,-1,3,2,4,2,3,-2,3,3],[["Helpful","Kind","Friendly"],["Healer","Savior","Medic"]]),
Fight = new LegendaryAbility("Fight","- Swing a sword.\n- Throw a punch.",[0,0,0],[-1,-2,2,4,2,-2,4,-2,1,-2,-2,-3,-2,1,2,-2,2,3,3,3,0,2,-1,1,0,1,1,4,0,-1,3,-1,-2,-2,3,4,0,-2,0,4,4,2,0,1,0,2,2,-1,1,-1,1,2,-1,2,3,3,2,3,4,-1,3,1,2,3,2,3,2,1,1,-2,4,0,2,-3,1,4,0,1],[["Brawling","Belligerent","Mighty"],["Fighter","Warrior","Elite"]]),
Lore = new LegendaryAbility("Lore","- Know a magical incantation.\n- Know ancient history.",[0,0,0],[2,4,0,-1,1,-1,-2,4,1,0,1,-1,2,2,1,3,2,1,2,2,3,3,4,1,2,3,2,-2,1,2,1,2,4,2,-2,-3,1,-1,2,1,-2,0,1,-1,2,-2,-2,1,-1,1,-2,-1,1,2,0,1,2,2,1,2,2,3,2,3,2,2,4,4,3,3,1,4,3,-2,1,2,4,3],[["Wise","Ancient","Learned"],["Erudite","Scholar","Teacher"]]),
Notice = new LegendaryAbility("Notice","- Get the drop on an enemy.\n- Find clues.",[0,0,0],[4,2,0,-1,2,2,3,1,2,0,-1,3,2,2,3,4,1,2,-1,4,3,4,1,2,0,1,-1,3,2,0,1,-1,1,2,-2,3,1,2,2,4,4,0,-1,1,-1,1,2,0,1,-1,1,0,-1,2,3,1,0,2,3,4,3,3,1,3,2,0,0,1,3,3,4,2,1,0,3,2,4,1],[["Perceptive","Attentive","Keen-Eyed"],["Scout","Lookout","Hunter"]]),
Physique = new LegendaryAbility("Physique","- Run a marathon.\n- Withstand physical trauma.",[0,0,0],[-1,-2,2,2,0,-1,4,-2,2,3,3,1,-1,2,2,-1,2,3,4,2,0,3,-2,1,2,2,1,3,-1,-2,2,3,-1,-2,1,4,-2,-3,-2,4,3,1,-1,1,0,1,1,-1,0,-1,1,2,-1,-2,4,2,1,5,3,0,3,-1,2,3,1,3,2,2,1,-2,3,-1,1,-2,5,1,2,1],[["Tough","Thick-Skinned","Unbreakable"],["Giant","Bruiser","Tank"]]),
Presence = new LegendaryAbility("Presence","- Order soldiers.\n- Interrogate a suspect.",[0,0,0],[1,2,4,3,0,-2,4,-1,4,0,-1,1,-1,1,3,-2,3,3,2,4,-1,4,-2,2,-1,-1,1,4,2,-2,4,1,0,1,2,3,1,-2,2,3,1,1,1,1,2,1,1,0,0,-1,0,1,0,4,3,2,2,3,3,4,2,1,4,4,2,3,2,4,1,2,4,3,2,4,2,-1,-2,2],[["Authoritative","Commanding","Loud"],["Commander","Leader","Chief"]]),
Manipulation = new LegendaryAbility("Manipulation","- Trick an enemy.\n- Talk your way past an annoying bouncer.",[0,0,0],[4,3,1,2,0,2,-2,0,2,-1,-2,4,0,2,0,3,1,-2,-2,-1,4,-3,1,4,0,-1,2,0,4,-1,3,0,0,-1,1,-2,6,4,2,-2,-1,0,1,1,0,-1,-1,1,1,-2,0,0,-1,4,1,1,3,0,-2,4,1,4,3,4,4,2,-1,2,3,5,0,3,1,5,1,-1,0,2],[["Manipulative","Deceiving","Cheating"],["Trickster","Betrayer","Liar"]]),
Resources = new LegendaryAbility("Resources","- Buy a car.\n- Hire mercenaries.",[0,0,0],[1,0,4,1,2,0,-2,-1,1,0,2,3,1,1,2,-1,1,2,4,0,1,2,1,2,2,3,2,0,3,-3,4,2,-2,1,4,-1,2,-1,1,0,-2,1,1,1,2,0,-2,1,1,1,-1,-1,0,3,-3,2,2,3,3,1,2,-1,2,4,2,-1,4,4,4,4,1,2,3,2,-2,-3,4,0],[["Rich","Wealthy","Important"],["Noble","Aristocrat","Merchant"]]),
Marksmanship = new LegendaryAbility("Marksmanship","- Shoot a bow.\n- Throw a fireball with accuracy.",[0,0,0],[3,1,2,2,4,2,4,-1,1,-1,-2,2,1,2,3,-1,1,3,1,2,2,4,-2,2,2,1,1,3,-1,0,1,-2,-3,-1,3,3,1,0,-1,4,5,1,0,1,0,0,1,1,0,1,1,0,-1,3,2,2,2,1,3,2,4,3,2,3,3,2,1,2,4,1,3,0,2,-2,-3,5,2,2],[["Trained","Patient","Ruthless"],["Marskman","Sniper","Deadshot"]]),
Stealth = new LegendaryAbility("Stealth","- Pickpocket a target.\n- Skulk unnoticed.",[0,0,0],[2,2,-2,-1,3,5,1,1,-2,-1,-2,2,3,2,-1,3,3,-3,2,-1,4,-4,-1,4,0,1,-1,1,0,2,-1,-2,1,0,1,2,3,4,-1,-2,4,0,0,1,-1,0,1,-1,1,-1,1,0,-1,-3,3,1,-1,0,-3,5,3,4,2,2,4,4,0,-1,3,2,1,4,1,-2,2,1,4,1],[["Sneaky","Nasty","Devious"],["Informant","Betrayer","Assassin"]]),
Will = new LegendaryAbility("Will","- Resist mental attacks.\n- Control magical powers by sheer will.",[0,0,0],[2,4,1,2,1,-1,2,3,4,3,2,3,2,2,3,4,3,3,4,4,4,3,1,3,2,3,4,3,4,4,4,3,3,2,1,3,3,1,2,4,4,1,1,2,1,1,1,0,0,1,1,2,0,3,4,2,0,4,3,2,3,4,3,3,3,4,3,4,2,3,4,3,2,0,3,-2,2,2],[["Willful","Headstrong","Determined"],["Veteran","Professional","Old-Timer"]]),

]	
	//Gives each Parameter the relevant Legendaries 
for(i=0;i<newAbilitiesArray.length;i++){
	FilteredParametersArray = parametersArray.filter(function (entry) { return entry.type === "Domain" || entry.type === "Role"; })
for(j=0;j<FilteredParametersArray.length;j++){
	FilteredParametersArray[j].legendaries.push(newAbilitiesArray[i].legendaries[j])
}}
	//console.log(parametersArray)

	//Gives each Parameter the relevant Skills (unchanged)
for(i=0;i<skillsArray.length;i++){
for(j=0;j<parametersArray.length;j++){
	parametersArray[j].skills.push(skillsArray[i].legendaries[j])
}}

}
addAnAbility()

	for(i=0;i<newAbilitiesArray.length;i++){
			displayArrayTest = []
	for(p=21;p<newAbilitiesArray[i].legendaries.length-5;p++){
	displayArrayTest.push(newAbilitiesArray[i].legendaries[p])}
		//(newAbilitiesArray[i].name + " - " + displayArrayTest )
	}

//addAnAbilityMaker()

// Test the length of Legendaries
//lengthChecker()
// Test the Legendaries
//exampleLegendaryMaker(legendaryAbilitiesArray,godFound.legendaries,roleFound.legendaries,roleFound2.legendaries,9,wyrdbornFound.legendaries)
// Test the Skills
//exampleLegendaryMaker(skillsArray,godFound.skills,roleFound.skills,roleFound2.skills,7,wyrdbornFound.skills)
// Create an Ability
//addAnAbilityMaker()
// Test the Legendaries AND Skills. Adds the extra Abilities
//LegendaryMakerTotal()

// This function handles the tabs
function openNW(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = [
	document.getElementById("Display1"),
	document.getElementById("Display2"),
	document.getElementById("Display3")]    
	
	for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = [
	document.getElementById("Display1Tab"),
	document.getElementById("Display2Tab"),
	document.getElementById("Display3Tab")]
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
	
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
ChosenFirstRole = "Select Role"
ChosenSecondRole = "Select Role"
ChosenGod = "Woop"	

function setChosenPantheon(selectedBox){
//curatedName = selectedBox.options[selectedBox.selectedIndex].value.substr(0,selectedBox.options[selectedBox.selectedIndex].value.indexOf(":"))
curatedName = selectedBox.options[selectedBox.selectedIndex].value
	

document.getElementById ("PantheonLink").href = "http://wyrduk.wikidot.com/"+ curatedName;
document.getElementById ("PantheonLink").innerHTML = "Wiki Link: "+ curatedName;

document.getElementById('OriginLink').style.display = 'none'

}
function setChosenGod(selectedBox){
document.getElementById ("OriginLink").href = "http://wyrduk.wikidot.com/"+ selectedBox.options[selectedBox.selectedIndex].value;
document.getElementById ("OriginLink").innerHTML = "Wiki Link: "+ selectedBox.options[selectedBox.selectedIndex].value;
	ChosenGod = selectedBox.options[selectedBox.selectedIndex].value;
document.getElementById('OriginLink').style.display = 'block'
}
function setFirstRole(selectedBox){
ChosenFirstRole = selectedBox.options[selectedBox.selectedIndex].value}
	
function setSecondRole(selectedBox){
	ChosenSecondRole = selectedBox.options[selectedBox.selectedIndex].value;}

	
	//__________________________________________________
	// Roles
	
	var rolesLists = new Array(5) 
	rolesLists["empty"] = ["Select a Main Role"]; 
	rolesLists["Tank"] = ["Select Role","Damage Dealer", "Party Face", "Skill Monkey", "Support-Controller"]; 
	rolesLists["Damage Dealer"] = ["Select Role","Tank", "Party Face", "Skill Monkey", "Support-Controller"]; 
	rolesLists["Party Face"] = ["Select Role","Tank", "Damage Dealer", "Skill Monkey", "Support-Controller"]; 
	rolesLists["Skill Monkey"] = ["Select Role","Tank", "Damage Dealer", "Party Face", "Support-Controller"]; 
	rolesLists["Support-Controller"] = ["Select Role","Tank", "Damage Dealer", "Party Face", "Skill Monkey"]; 

function rolesChange(selectObj2) { 
	var idx = selectObj2.selectedIndex; 
	var which = selectObj2.options[idx].value; 
	cList2 = rolesLists[which]; 
	var cSelect = document.getElementById("secondRole"); 
	var len=cSelect.options.length; 
	while (cSelect.options.length > 0) { cSelect.remove(0); } 
	var newOption; 
	for (var i=0; i<cList2.length; i++) { 
	newOption = document.createElement("option"); 
	newOption.value = cList2[i]; // assumes option string and value are the same 
	newOption.text=cList2[i]; 
	try { 
	cSelect.add(newOption); // this will fail in DOM browsers but is needed for IE 
	} 
	catch (e) { 
	cSelect.appendChild(newOption); 
	} 
	} 
	} 

value = 0
function clearContents(element) {
if(value == 0){
  element.value = '';}
value+=1
}

function characterSheetSpawn() {



document.getElementById('inputTextToSave').value = "Aspects:     " +"\n" + document.getElementById('highConcept').value + "\n " + document.getElementById('trouble').value + "\n " + document.getElementById('aspect1').value + "\n " + document.getElementById('aspect2').value +"\n " + document.getElementById('aspect3').value + "\n     \n" + "Skills: \n+3: " + document.getElementById('31').value + "\n+2: " + document.getElementById('21').value + ", " + document.getElementById('22').value + "\n+1: " + document.getElementById('11').value +", " + document.getElementById('12').value +", " + document.getElementById('13').value + "\n     \n" + "Stunts: " + "\n" + document.getElementById('stunt1').value + "\n " + document.getElementById('stunt2').value + "\n " + document.getElementById('stunt3').value + "\n     \n" + "Legendary Abilities: " + "\n " + document.getElementById('legend1').value + "\n " + document.getElementById('legend2').value + "\n " + document.getElementById('legend3').value + "\n\n "
}	
	
//__________________________________________________
//__________________________________________________
//__________________________________________________
//__________________________________________________
//__________________________________________________
//__________________________________________________
//__________________________________________________

//NPC MAKER

//__________________________________________________
//__________________________________________________
//__________________________________________________
//__________________________________________________
//__________________________________________________
//__________________________________________________
//__________________________________________________

numberOfNPCs = 1
function confirmChoice1(){

	NPC1Final = [godFound,skillsFound,finalLegendariesArray,roleFound,roleFound2]
	
	document.getElementById("NPC1").innerHTML = finalLegendariesArray[0][0] + "<br>" + finalLegendariesArray[1][0] + "<br><br>" + skillsFound[0][0] + "<br>" + skillsFound[1][0] + "<br>" + skillsFound[2][0] + "<br>" + skillsFound[3][0] + "<br>"
	document.getElementById("finalGeneratorButton").style="font-size : 32px; display:block; horizontal: 50%;"
	document.getElementById("generatorTooltip").style="display:block;"
	
		if(document.getElementById("fightType").value != "3"){
			numberOfNPCs = 2
			document.getElementById("confirmNPC2Button").style="display:block"
			document.getElementById("NPC2").style="display:block"
	}
	else{
		document.getElementById("confirmNPC2Button").style="display:none"
		document.getElementById("NPC2").style="display:none"
		}
	

}

function confirmChoice2(){
	

	numberOfNPCs = 1
	NPC2Final = [godFound,skillsFound,finalLegendariesArray,roleFound,roleFound2]

	document.getElementById("NPC2").innerHTML = finalLegendariesArray[0][0] + "<br>" + finalLegendariesArray[1][0] + "<br><br>" + skillsFound[0][0] + "<br>" + skillsFound[1][0] + "<br>" + skillsFound[2][0] + "<br>" + skillsFound[3][0] + "<br>"

}
 





