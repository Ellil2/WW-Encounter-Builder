//    epicStrength = new LegendaryAbility(["Epic Strength","Mighty","Goliath"],[["Titanspawn","1","99"],["Titanspawn","2","99"],["Titanspawn","3","99"],["Titanspawn","4","99"],["Titanspawn","5","99"],["Titanspawn","6","99"],["Titanspawn","7","99"],["Mythborn","4","99"],["Mythborn","3","99"],["Mythborn","5","99"]],["1"],["1","2","3","4"])
//fireDestruction = new LegendaryAbility[["Invokation: Fire - Destruction","Pyromancer","Pyromaniac"]],[["Titanspawn","1","12"],["Titanspawn","1","11"],["Titanspawn","1","13"],["Mythborn","1","11"],["Mythborn","1","12"],["Mythborn","1","14"],["Mythborn","1","15"],["Mythborn","3","99"],["Mythborn","4","44"],["Mythborn","5","99"]],["1","2"],["2","3","4"]
// 
function legendaryAttribute(){
//____________________________________________________________________________________________________


//Set Name


//____________________________________________________________________________________________________
abilityName = prompt("What is the Name of your Legendary Ability ?")
name1 = prompt("What is the First-Part Aspect Name from your Legendary Ability ?")
name2 = prompt("What is the Second-Part Aspect Name from your Legendary Ability ?")
variableName = abilityName.replace(/\s/g, '');
name =  variableName + " = new LegendaryAbility([\"" + abilityName + "\"" + ",\"" + name1 + "\"" + ",\"" + name2 + "\"]"      


//____________________________________________________________________________________________________


//Set NPC Types

//____________________________________________________________________________________________________


function typeChoiceFunction (){
typeChoicePrompt = prompt("What type of creature is your NPC ? \n1- Titanspawn \n2- Mythborn");
if (typeChoicePrompt == "1") {titanspawnTypeChoiceFunction();
}
else if (typeChoicePrompt == "2") {mythbornTypeChoiceFunction()}
else if (typeChoicePrompt !== "1" && typeChoicePrompt !== "2"){typeChoiceFunction()}
}
npcOptions = ""
    typeChoiceFunction()  

function restart(){
    if(npcOptions === ""){npcOptions += ("[\"" + typeChoice + "\"" + ",\"" + originChoice + "\"" + ",\"" + subOriginChoice + "\"]");  titanspawnTypeChoiceFunction()} 
    else{npcOptions += (",[\"" + typeChoice + "\"" + ",\"" + originChoice + "\"" + ",\"" + subOriginChoice + "\"]");  titanspawnTypeChoiceFunction()}
}

function restart2(){
    if(npcOptions === ""){npcOptions += ("[\"" + typeChoice + "\"" + ",\"" + originChoice + "\"" + ",\"" + subOriginChoice + "\"]");  mythbornTypeChoiceFunction()} 
    else{npcOptions += (",[\"" + typeChoice + "\"" + ",\"" + originChoice + "\"" + ",\"" + subOriginChoice + "\"]");  mythbornTypeChoiceFunction()}
}

function titanspawnTypeChoiceFunction() {
typeChoice = "Titanspawn";

     originChoice = prompt("Which Titan is your Titanspawn from ? Possibilities: \n1 - Muspelheim \n2 - Nyx \n3 - Soku no Kumi \n4 - Aether \n5 - Amaunet \n6 - Terra \n7 - Nun \n8 - Death \n99 - Move to Mythborn \n0 - End");
  if (originChoice === "1") {
       subOriginChoice = prompt("What Avatar of Muspelheim is your Titanspawn linked to ?  \n11 - Vrtra  \n12 - Surtr \n13 - Prometheus \n99 - Any");
  restart()}
  else if (originChoice === "2") {
       subOriginChoice = prompt("What Avatar of Nyx is your Titanspawn linked to ?  \n21 - Nott \n22 - Fenrir \n23 - Apep \n24 - Selene \n99 - Any");
  restart()}
  else if (originChoice === "3") {
       subOriginChoice = prompt("What Avatar of Soku no Kumi is your Titanspawn linked to ? \n31 - Huehueteotl \n32 - Mikaboshi \n33 - Erebus \n99 Any");
  restart()}
  else if (originChoice === "4") {
       subOriginChoice = prompt("What Avatar of Aether is your Titanspawn linked to ? \n41 - Aten\n42 -  Hyperion\n99 -  Any");
  restart()}
  else if (originChoice === "5") {
       subOriginChoice = prompt("What Avatar of Amaunet is your Titanspawn linked to ? \n51 -  Huracan\n52 -  Typhon\n53 -  Ouranos\n99 -  Any");
  restart();}
  else if (originChoice === "6") {
       subOriginChoice = prompt("What Avatar of Terra is your Titanspawn linked to ? Possibilities:\n61 -  Gaia\n62 -  Kur\n63 -  Dis Pater\n64 - Ourea \n65 - Crom Cruach \n99 -  Any");  
  restart();}
  else if (originChoice === "7") {
       subOriginChoice = prompt("What Avatar of Nun is your Titanspawn linked to ? Possibilities: \n71 Yam \n72 -  Tiamat \n73 -  Abzu \n74 -  Cipactli \n99 -  Any");  
  restart();}

  else if (originChoice === "8") {
       subOriginChoice = prompt("What Avatar of Death is your Titanspawn linked to ? Possibilities: \n81 - Styx\n82 -  Grim Reaper \n83 -  Camatotz \n99 -  Any");
 restart();}
 
  else if (originChoice === "0") {
    return; }

  else if (originChoice === "99") {
    mythbornTypeChoiceFunction(); }    
  
    else{titanspawnTypeChoiceFunction();}

}
      
function mythbornTypeChoiceFunction(){     
typeChoice = "Mythborn"; 
     originChoice = prompt("Which Race is your Mythborn  ? Possibilities: \n1 - Summer Court of Fairie \n2 - Winter Court of Fairie \n3 - Jade Sea \n4 - Dark Forest \n5 - Shambhala \n6 - Atlantis \n0 - End");
  if (originChoice === "1") {
       subOriginChoice = prompt("What type of Summer Court Fairie Mythborn is your NPC ?  \n11 - Fey  \n12 - Elf \n13 - Small Folk \n14 - Pixie \n15 - Nymph \n98 - Any");
  restart2()}
  else if (originChoice === "2") {
       subOriginChoice = prompt("What type of Winter Court Fairie Mythborn is your NPC ?  \n21 - Fey  \n22 - Elf \n23 - Small Folk \n24 - Pixie \n25 - Nymph \n98 - Any");
  restart2()}
  else if (originChoice === "3") {
       subOriginChoice = prompt("What type of Jade Sea Mythborn is your NPC ?  \n31 - Western Dragon  \n32 - Eastern Dragon \n33 - Wyvern \n34 - Coatl \n35 - Naga \n98 - Any");
  restart2()}
  else if (originChoice === "4") {
       subOriginChoice = prompt("What type of Dark Forest Mythborn is your NPC ?  \n41 - Ent  \n42 - Small Folk \n43 - Garou \n44 - Witch  \n98 - Any");
  restart2()}
  else if (originChoice === "5") {
       subOriginChoice = prompt("What type of Shambhala Mythborn is your NPC ?  \n51 - Raksasha  \n52 - Asura \n53 - Nymph \n54 - Naga \n98 - Any");
  restart2()}
  else if (originChoice === "6") {
       subOriginChoice = prompt("What type of Atlantis Mythborn is your NPC ?  \n61 - Triton  \n62 - Nymph \n98 - Any");
  restart2()}        
  else if (originChoice === "0") {
    return; }  
  
    else{mythbornTypeChoiceFunction();}
}         

//____________________________________________________________________________________________________


//Set Combat 1

//____________________________________________________________________________________________________
combat1Options = ""

function combat1ChoiceFunction() {
 combatChoice1 = prompt("What is your NPC's combat style ? \n 1 - Warrior\n 2 - Mage\n 3 - Rogue \n 0 - End");
    if (combatChoice1 === "1" || combatChoice1 === "2" || combatChoice1 === "3") {
        if(combat1Options === ""){ combat1Options += ("\"" + combatChoice1 +  "\"");combat1ChoiceFunction(); }
        else{combat1Options += (",\"" + combatChoice1 +  "\"");combat1ChoiceFunction();}
    }

   
};
combat1ChoiceFunction()

//____________________________________________________________________________________________________


//Set Combat 2

//____________________________________________________________________________________________________
combat2Options = ""

function combat2ChoiceFunction() {
 combatChoice2 = prompt("What is your NPC's combat speciality ? \n1 - Support \n2 - Fighter \n3 - Controller \n4 - Tank \n 0 - End");
    if (combatChoice2 === "1" || combatChoice2 === "2" || combatChoice2 === "3" || combatChoice2 === "4") {
        if(combatChoice2 === ""){ combatChoice2 += ("\"" + combatChoice2 +  "\"");combat2ChoiceFunction(); }
        else{combat2Options += (",\"" + combatChoice2 +  "\"");combat2ChoiceFunction(); }}
    
}
combat2ChoiceFunction()

//____________________________________________________________________________________________________


//Set Intelligence

//____________________________________________________________________________________________________


intelligenceOptions = ""

function intelligenceChoiceFunction() {
 intelligenceChoice = prompt("What is your NPC's Intelligence ? \n1 - Feral \n2 - Human \n 0 - End");
    if (intelligenceChoice === "1" || intelligenceChoice === "2" || intelligenceChoice === "3" || intelligenceChoice === "4") {
        if(intelligenceChoice === ""){ intelligenceOptions += ("\"" + intelligenceChoice +  "\"");intelligenceChoiceFunction(); }
        else{intelligenceOptions += (",\"" + intelligenceChoice +  "\"");intelligenceChoiceFunction(); }}
    
}
intelligenceChoiceFunction()



alert(name + ",[" + npcOptions + "],[" + combat1Options + "],[" + combat2Options + "],[" + intelligenceOptions + "]),")
}
