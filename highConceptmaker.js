function highConcept () {
var name = prompt("What is your High Concept's Name ?")
var varname = prompt("What is your NPC's variable name ?")
var typeChoice = prompt("Is your NPC a Titanspawn, or a Mythborn ?")

if (typeChoice === "Titanspawn"){
originChoice = prompt("Which Titan is your Titanspawn from ? (Possibilities: \n1 - Muspelheim \n2 - Nyx \n3 -  Soku no Kumi \n4 - Aether \n5 -  Amaunet \n6 -  Terra \n7 -  Nun, \n8 - Death ");
  if (originChoice === "1") {
       subOriginChoice = prompt("What Avatar of Muspelheim is your Titanspawn linked to ?  \n11 - Vrtra  \n12 - Surtr \n13 - Prometheus ");  }
  else if (originChoice === "2") {
       subOriginChoice = prompt("What Avatar of Nyx is your Titanspawn linked to ?  \n21 - Nott \n22 - Fenrir \n23 - Apep)"); }
  else if (originChoice === "3") {
       subOriginChoice = prompt("What Avatar of Soku no Kumi is your Titanspawn linked to ? \n31 - Huehueteotl \n32 - Mikaboshi \n33 - Erebus");  }
  else if (originChoice === "4") {
       subOriginChoice = prompt("What Avatar of Aether is your Titanspawn linked to ? \n41 - Aten\n42 -  Hyperion"); }
  else if (originChoice === "5") {
       subOriginChoice = prompt("What Avatar of Amaunet is your Titanspawn linked to ? \n5.1 -  Huracan\n5.2 -  Typhon\n5.3 -  Ouranos");  }
  else if (originChoice === "6") {
       subOriginChoice = prompt("What Avatar of Terra is your Titanspawn linked to ? Possibilities:\n61 -  Gaia\n62 -  Kur\n63 -  Dis Pater\n64 - Ourea \n65 - Crom Cruach ");  }
  else if (originChoice === "7") {
       subOriginChoice = prompt("What Avatar of Nun is your Titanspawn linked to ? Possibilities: \n71 Yam \n72 -  Tiamat \n73 -  Abzu \n74 -  Cipactli");  }
  else if (originChoice === "8") {
       subOriginChoice = prompt("What Avatar of Death is your Titanspawn linked to ? Possibilities: \n81 - Styx\n82 -  Grim Reaper");  }
}
     
else if (typeChoice === "Mythborn") {
   originChoice = prompt("Which Race is your Mythborn  ? Possibilities: \n1 - Summer Court of Fairie \n2 - Winter Court of Fairie \n3 - Jade Sea \n4 - Dark Forest \n5 - Shambhala");
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
}     
     
 intelligenceChoice = prompt("What s your " + typeChoice + "'s Intelligence Level ? \n1 - Feral \n2 - Human");
 legendChoice = prompt("Is your " + typeChoice + "'s Legend Level: \n1 - Godborn \n2 - Demigod  \n3 - God ");
 imageLink = prompt("What is the image link for this NPC ?")
     
     
     
alert(""+ varname +" = new Aspect(\""+  name +"\",\""+ typeChoice +"\",\""+ originChoice +"\",[\""+ subOriginChoice +"\"],[\""+ legendChoice +"\"],\""+ intelligenceChoice +"\",\"behavior\",\"2\"," + imageLink + "\")");
}
