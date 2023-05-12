const header1 = document.getElementById("name1");
const header2 = document.getElementById("name2");
const PrimaryOptic = document.getElementById("POptics");
const PrimaryBarrel = document.getElementById("PBarrel");
const PrimaryUnderbarrel = document.getElementById("PUnderbarrel");
const PrimaryOther = document.getElementById("POther");
const PrimaryAmmo = document.getElementById("PAmmo");
const PrimaryError = document.getElementById("primaryError")
const SecondaryError = document.getElementById("secondaryError")
const SecondaryOptic = document.getElementById("SOptics");
const SecondaryBarrel = document.getElementById("SBarrel");
const SecondaryOther = document.getElementById("SOther");
const SecondaryAmmo = document.getElementById("SAmmo");
const Melee=document.getElementById("Melee");
const Grenade=document.getElementById("Grenade");

//Weapons

import { Primaries,Secondaries,Melees,Grenades } from "./weapons.js";


//Optics
const IronSights=[
    "DEFAULT",
    "H&K SIGHT",
    "FULL RING SIGHT",
    "HALF RING SIGHT",
    "BACKUP SIGHT",
    "STEYR SIGHT",
    "DOUBLE OPEN SIGHT",
    "IZHMASH SIGHT",
    "SUPER SLIM SIGHT",
    "DIOPTER SIGHT",
    "BUIS SIGHT",
    "KEL-TEC SIGHT",
    "KALASHNIKOV SIGHT",
    "KAC SIGHT",
    "1200M SIGHT",
    "H&K EXPORT SIGHT",
    "HERSTAL SIGHT",
    "BUNDESWEHR SIGHT",
    "IWI SIGHT",
    "CARRY HANDLE SIGHT",
    "QUICK RELEASE SIGHT",
    "MBUS SIGHT",
    "AAC FLIP UP SIGHT",
    "DUAL APERTURE SIGHT"
]
const IronSights2=[
    "DEFAULT",
    "H&K SIGHT",
    "FULL RING SIGHT",
    "HALF RING SIGHT",
    "BACKUP SIGHT",
    "STEYR SIGHT",
    "DOUBLE OPEN SIGHT",
    "IZHMASH SIGHT",
    "SUPER SLIM SIGHT",
    "DIOPTER SIGHT",
    "BUIS SIGHT",
    "KEL-TEC SIGHT",
    "KALASHNIKOV SIGHT",
    "KAC SIGHT",
    "1200M SIGHT",
    "H&K EXPORT SIGHT",
    "HERSTAL SIGHT",
    "IWI SIGHT",
    "CARRY HANDLE SIGHT",
    "QUICK RELEASE SIGHT",
    "MBUS SIGHT",
    "AAC FLIP UP SIGHT",
    "DUAL APERTURE SIGHT"
]
//STG-44
const IronSights3=[
    "DEFAULT",
    "BACKUP SIGHT",
    "DOUBLE OPEN SIGHT",
    "SUPER SLIM SIGHT",
    "DIOPTER SIGHT",
    "BUIS SIGHT",
    "KEL-TEC SIGHT",
    "KAC SIGHT",
    "1200M SIGHT",
    "HERSTAL SIGHT",
    "IWI SIGHT",
    "CARRY HANDLE SIGHT",
    "QUICK RELEASE SIGHT",
    "MBUS SIGHT",
    "AAC FLIP UP SIGHT",
    "DUAL APERTURE SIGHT"
]
const RedDots=[
    "Z-POINT",
    "EOTECH XPS2",
    "DELTA SIGHT",
    "MARS",
    "EOTECH 552",
    "MINI SIGHT",
    "COMP AIMPOINT",
    "PKA-S",
    "REFLEX SIGHT",
    "KOBRA SIGHT",
    "COYOTE SIGHT",
    "MICRODOT MINI",
    "PILAD 3",
    "KOBRA EKP SIGHT",
    "ACRO P-1 SIGHT",
    "BARKSA ELECTRO SIGHT",
    "EOTECH M40",
    "KOUSAKU SIGHT",
    "MICRODOT SRS",
    "OKP-7",
    "UH-1 SIGHT",
    "DDHB REFLEX",
    "DCL 120",
    "KOUSAKU OLED SIGHT"
]
const Scopes=[
    "C79",
    "PK-A",
    "M145",
    "MALCOLM 3X SCOPE",
    "PSO-1 SCOPE",
    "TA44 ACOG",
    "ACOG SCOPE",
    "VCOG 6X SCOPE",
    "TA33 ACOG",
    "HENSOLDT 3X SIGHT",
    "HENSOLDT Z24",
    "SWAROVSKI SCOPE",
    "TA11 ACOG",
    "PU-1 SCOPE",
    "FF-3X NV",
    "PSO-1M2 SCOPE",
    "TA01 ACOG",
    "ELECTRA SX",
    "REFLECTOR SCOPE",
    "VCOG 8X SCOPE",
    "SUSAT SCOPE",
    "GLOBAL OFFENSIVE"
]
//M14
const Scopes2=[
    "C79",
    "PK-A",
    "M145",
    "MALCOLM 3X SCOPE",
    "TA44 ACOG",
    "ACOG SCOPE",
    "VCOG 6X SCOPE",
    "MALCOLM 6X SCOPE",
    "TA33 ACOG",
    "HENSOLDT Z24",
    "TA11 ACOG",
    "PU-1 SCOPE",
    "FF-3X NV",
    "TA01 ACOG",
    "ELECTRA SX",
    "REFLECTOR SCOPE",
    "VCOG 8X SCOPE",
    "SUSAT SCOPE",
    "GLOBAL OFFENSIVE"
]
const SpecialSights=[
    "OEG",
    "MAGLITE",
    "AMT-TERMINATOR",
    "HANDMADE SIGHT",
    "PLAGUE INSIGHT",
    "ANIMU SIGHT",
    "FURRO SIGHT",
    "👌👍",
    "ANTI SIGHT"
]
const POptics={
    "DEFAULT":[...IronSights2,...RedDots,...Scopes,...SpecialSights],
    //ARs
    "AK12":[...IronSights,...RedDots,...Scopes,...SpecialSights],
    "AN-94":[...IronSights2,...RedDots,...Scopes,...SpecialSights],
    "AS VAL":[...IronSights2,...RedDots,...Scopes,...SpecialSights],
    "SCAR-L":[...IronSights,...RedDots,...Scopes,...SpecialSights,"PM II"],
    "AUG A1":[...IronSights2,...RedDots,...Scopes,...SpecialSights],
    "M16A4":[...IronSights,...RedDots,...Scopes,...SpecialSights],
    "G36":[...IronSights,...RedDots,...Scopes,...SpecialSights,"HENSOLDT DUAL OPTIC"],
    "M16A1":[...IronSights2,...RedDots,...Scopes,...SpecialSights,"COLT RETRO SCOPE"],
    "M16A3":[...IronSights,...RedDots,...Scopes,...SpecialSights],
    "TYPE 20":[...IronSights,...RedDots,...Scopes,...SpecialSights,"REMOVE IRONS","PM II"],
    "AUG A2":[...IronSights2,...RedDots,...Scopes,...SpecialSights],
    "K2":[...IronSights2,...RedDots,...Scopes,...SpecialSights],
    "FAMAS F1":[...IronSights2,...RedDots,...Scopes,...SpecialSights],
    "AK47":[...IronSights2,...RedDots,...Scopes,...SpecialSights],
    "AUG A3":[...IronSights,...RedDots,...Scopes,...SpecialSights],
    "L85A2":[...IronSights2,...RedDots,...Scopes,...SpecialSights],
    "HK416":[...IronSights2,...RedDots,...Scopes,...SpecialSights],
    "AK74":[...IronSights2,...RedDots,...Scopes,...SpecialSights],
    "AKM":[...IronSights2,...RedDots,...Scopes,...SpecialSights],
    "AK103":[...IronSights2,...RedDots,...Scopes,...SpecialSights],
    "TAR-21":[...IronSights2,...RedDots,...Scopes,...SpecialSights],
    "TYPE-88":[...IronSights2,...RedDots,...Scopes,...SpecialSights],
    "M231":[...IronSights2,...RedDots,...Scopes,...SpecialSights],
    "C7A2":[...IronSights2,...RedDots,...Scopes,...SpecialSights],
    "STG-44":[...IronSights3,...RedDots,...Scopes,...SpecialSights],
    "G11K2":[...IronSights2,...RedDots,...Scopes,...SpecialSights],
    "M14":[...RedDots,...Scopes2,"CARRY HANDLE SIGHT","OEG","MAGLITE","AMT-TERMINATOR","HANDMADE SIGHT","PLAGUE INSIGHT"],
    "BEOWULF ECR":[...IronSights2,...RedDots,...Scopes,...SpecialSights],
    "SCAR-H":[...IronSights,...RedDots,...Scopes,...SpecialSights,"PM II"],
    "AK12BR":[...IronSights,...RedDots,...Scopes,...SpecialSights],
    "G3A3":[...IronSights2,...RedDots,...Scopes,...SpecialSights],
    "AG-3":[...IronSights2,...RedDots,...Scopes,...SpecialSights],
    "HK417":[...IronSights2,...RedDots,...Scopes,...SpecialSights],
    "HENRY 45-70":[...IronSights2,...RedDots,...Scopes,...SpecialSights,'MALCOLM 6X SCOPE'],
    "FAL 50.00":[...IronSights2,...RedDots,...Scopes,...SpecialSights]

}

const SOptics={
    "DEFAULT":[...IronSights,...RedDots,...Scopes,...SpecialSights]
}
//Barrels
const Barrels=[
    "CARBINE BARREL",
    "BARS BARREL"
]
const Muzzles=[
    "DEFAULT",
    "FLASH HIDER",
    "COMPENSATOR",
    "MUZZLE BREAK",
    "T-BRAKE",
    "X-RING",
    "HALBEK DEVICE",
    "LOUDENER",
    "MUZZLE BOOSTER"
]
const Suppressors=[
    "SUPPRESSOR",
    "R2 SUPPRESSOR",
    "ARS SUPPRESSOR",
    "PBS-1 SUPPRESSOR",
    "PBS-4 SUPPRESSOR",
    "MUFFLER",
    "OIL FILTER",
]
//HENRY 410
const Suppressors2=[
    "SUPPRESSOR",
    "R2 SUPPRESSOR",
    "ARS SUPPRESSOR",
    "PBS-1 SUPPRESSOR",
    "PBS-4 SUPPRESSOR",
    "MUFFLER",
]
const PBarrels={
    "DEFAULT":[...Muzzles,...Suppressors],
    //ARs
    "AK12":[...Barrels,...Muzzles,...Suppressors],
    "AN-94":[...Muzzles,...Suppressors],
    "AS VAL":["DEFAULT","SUPPRESSOR..?"],
    "SCAR-L":[...Muzzles,...Suppressors,"CARBINE BARREL","SQUAD BARREL"],
    "AUG A1":["CARBINE BARREL",...Muzzles,...Suppressors],
    "M16A4":["CARBINE BARREL",...Muzzles,...Suppressors],
    "G36":[...Muzzles,...Suppressors],
    "M16A1":[...Muzzles,...Suppressors],
    "M16A3":["CARBINE BARREL",...Muzzles,...Suppressors],
    "TYPE 20":[...Muzzles,...Suppressors,"CARBINE BARREL","SQUAD BARREL","INTEGRAL SUPPRESSOR"],
    "AUG A2":["CARBINE BARREL",...Muzzles,...Suppressors],
    "K2":[...Muzzles,...Suppressors,"CARBINE BARREL","SQUAD BARREL"],
    "FAMAS F1":[...Muzzles,...Suppressors,"CARBINE BARREL","SQUAD BARREL"],
    "AK47":["CARBINE BARREL",...Muzzles,...Suppressors],
    "AUG A3":["CARBINE BARREL",...Muzzles,...Suppressors],
    "L85A2":["CARBINE BARREL",...Muzzles,...Suppressors],
    "HK416":[...Muzzles,...Suppressors,"CARBINE BARREL","SQUAD BARREL"],
    "AK74":["CARBINE BARREL",...Muzzles,...Suppressors],
    "AKM":["CARBINE BARREL",...Muzzles,...Suppressors],
    "AK103":[...Barrels,...Muzzles,...Suppressors,"SQUAD BARREL"],
    "TAR-21":["CTAR BARREL",...Muzzles,...Suppressors],
    "TYPE-88":[...Muzzles,...Suppressors,"CARBINE BARREL","SQUAD BARREL"],
    "M231":["CARBINE BARREL",...Muzzles,...Suppressors],
    "C7A2":["CARBINE BARREL",...Muzzles,...Suppressors,"LSW BARREL"],
    "STG-44":[...Muzzles,...Suppressors],
    "G11K2":[...Muzzles,...Suppressors],
    "M14":[...Muzzles,...Suppressors],
    "BEOWULF ECR":[...Muzzles,...Suppressors],
    "SCAR-H":[...Muzzles,...Suppressors],
    "AK12BR":[...Muzzles,...Suppressors],
    "G3A3":[...Muzzles,...Suppressors],
    "AG-3":[...Muzzles,...Suppressors],
    "HK417":[...Muzzles,...Suppressors,"SHORT BARREL","SQUAD BARREL"],
    "HENRY 45-70":[...Muzzles,...Suppressors2],
    "FAL 50.00":[...Muzzles,...Suppressors]

}
const SBarrels={
    "DEFAULT":[...Muzzles,...Suppressors]
}
//Underbarrels
const Accessories=[
    "DEFAULT",
    "FLASHLIGHT",
    "RED LASER",
    "GREEN LASER",
    "BLUE LASER",
    "YELLOW LASER",
    "TRI LASER"
]
const Grips=[
    "VERTICAL GRIP",
    "ANGLED GRIP",
    "POTATO GRIP",
    "SKELETON GRIP",
    "FOLDING GRIP",
    "STUBBY GRIP",
    "PISTOL GRIP",
    "SIDEWAYS GRIP",
    "HERA CQR GRIP",
    "CHAINSAW GRIP"
]
const Grips2=[
    "VERTICAL GRIP",
    "ANGLED GRIP",
    "POTATO GRIP",
    "SKELETON GRIP",
    "FOLDING GRIP",
    "STUBBY GRIP",
    "PISTOL GRIP",
    "SIDEWAYS GRIP",
    "HERA CQR GRIP",
    "CHAINSAW GRIP",
    "ROMANIAN GRIP"
]
const PUnderbarrels={
    "DEFAULT":[...Accessories,...Grips],
     //ARs
    "AK12":[...Accessories,...Grips],
    "AN-94":[...Accessories,...Grips2],
    "AS VAL":[...Accessories,...Grips],
    "SCAR-L":[...Accessories,...Grips],
    "AUG A1":[...Accessories,...Grips],
    "M16A4":[...Accessories,...Grips],
    "G36":[...Accessories,...Grips2],
    "M16A1":[...Accessories,...Grips],
    "M16A3":[...Accessories,...Grips],
    "TYPE 20":[...Accessories,...Grips],
    "AUG A2":[...Accessories,...Grips],
    "K2":[...Accessories,...Grips],
    "FAMAS F1":[...Accessories,...Grips],
    "AK47":[...Accessories,...Grips2],
    "AUG A3":[...Accessories,...Grips],
    "L85A2":[...Accessories,...Grips],
    "HK416":[...Accessories,...Grips],
    "AK74":[...Accessories,...Grips2],
    "AKM":[...Accessories,...Grips2],
    "AK103":[...Accessories,...Grips2],
    "TAR-21":[...Accessories,...Grips],
    "TYPE-88":[...Accessories,...Grips2],
    "M231":[...Accessories,...Grips],
    "C7A2":[...Accessories,...Grips],
    "STG-44":[...Accessories,...Grips],
    "G11K2":[...Accessories,...Grips2],
    "M14":[...Accessories,...Grips2],
    "BEOWULF ECR":[...Accessories,...Grips2],
    "SCAR-H":[...Accessories,...Grips],
    "AK12BR":[...Accessories,...Grips],
    "G3A3":[...Accessories,...Grips],
    "AG-3":[...Accessories,...Grips],
    "HK417":[...Accessories,...Grips],
    "HENRY 45-70":[...Accessories,...Grips],
    "FAL 50.00":[...Accessories,...Grips2]
}
//Others
const OAccessories=[
    "DEFAULT",
    "FLASHLIGHT",
    "RED LASER",
    "GREEN LASER",
    "BLUE LASER",
    "YELLOW LASER",
    "TRI LASER",
    "BALLISTICS TRACKER"
]
const CantedSight=[
    "CANTED IRON SIGHT",
    "CANTED DELTA SIGHT",
    "CANTED ACOG SCOPE",
    "CANTED ANIMU SIGHT",
    "CANTED FURRO SIGHT"
]
const Stocks=[
    "RETRACT STOCK"
]
const POther={
    "DEFAULT":[...OAccessories,...CantedSight],
     //ARs
    "AK12":[...OAccessories,...CantedSight,...Stocks],
    "AN-94":[...OAccessories,...CantedSight,...Stocks],
    "AS VAL":[...OAccessories,...CantedSight,...Stocks,"FULL STOCK"],
    "SCAR-L":[...OAccessories,...CantedSight,...Stocks,"REMOVE STOCK"],
    "AUG A1":[...OAccessories,...CantedSight],
    "M16A4":[...OAccessories,...CantedSight,...Stocks,"REMOVE STOCK","COLLAPSIBLE STOCK"],
    "G36":[...OAccessories,...CantedSight,...Stocks],
    "M16A1":[...OAccessories,...CantedSight],
    "M16A3":[...OAccessories,...CantedSight,...Stocks,"REMOVE STOCK","COLLAPSIBLE STOCK","BURST GROUPING"],
    "TYPE 20":[...OAccessories,...CantedSight,...Stocks,"REMOVE STOCK","EXTEND STOCK"],
    "AUG A2":[...OAccessories,...CantedSight],
    "K2":[...OAccessories,...CantedSight,...Stocks,"FULL STOCK"],
    "FAMAS F1":[...OAccessories,...CantedSight,"FAMAS G2"],
    "AK47":[...OAccessories,...CantedSight,...Stocks,"REMOVE STOCK","COLLAPSIBLE STOCK"],
    "AUG A3":[...OAccessories,...CantedSight],
    "L85A2":[...OAccessories,...CantedSight],
    "HK416":[...OAccessories,...CantedSight,...Stocks,"FULL STOCK"],
    "AK74":[...OAccessories,...CantedSight,...Stocks,"REMOVE STOCK","COLLAPSIBLE STOCK"],
    "AKM":[...OAccessories,...CantedSight,...Stocks,"REMOVE STOCK","COLLAPSIBLE STOCK"],
    "AK103":[...OAccessories,...CantedSight,...Stocks,"REMOVE STOCK"],
    "TAR-21":[...OAccessories,...CantedSight],
    "TYPE-88":[...OAccessories,...CantedSight,...Stocks,"FULL STOCK","REMOVE STOCK"],
    "M231":[...OAccessories,...CantedSight,"WIRE STOCK"],
    "C7A2":[...OAccessories,...CantedSight,...Stocks,"FULL STOCK","REMOVE STOCK"],
    "STG-44":[...OAccessories],
    "G11K2":[...OAccessories,...CantedSight],
    "M14":[...OAccessories],
    "BEOWULF ECR":[...OAccessories,...CantedSight,...Stocks,"REMOVE STOCK","COLLAPSIBLE STOCK"],
    "SCAR-H":[...OAccessories,...CantedSight,...Stocks,"REMOVE STOCK"],
    "AK12BR":[...OAccessories,...CantedSight,...Stocks],
    "G3A3":[...OAccessories,...CantedSight,...Stocks,"COLLAPSIBLE STOCK"],
    "AG-3":[...OAccessories,...CantedSight,...Stocks,"FULL STOCK"],
    "HK417":[...OAccessories,...CantedSight,...Stocks,"FULL STOCK"],
    "HENRY 45-70":[...OAccessories,...CantedSight,"REMOVE STOCK","MARKSMAN KIT"],
    "FAL 50.00":[...OAccessories,...CantedSight]
}
const SOther={
    "DEFAULT":[...OAccessories,...CantedSight]
}
//Ammo
const Ammo=[
    "DEFAULT",
    "ARMOR PIERCING",
    "HOLLOW POINT",
    "TRACERLESS",
]
const PAmmo={
    "DEFAULT":[...Ammo],
     //ARs
    "AK12":[...Ammo,"SUPER ARMOR PIERCING"],
    "AN-94":[...Ammo,"7.62X39MM","SUPER ARMOR PIERCING"],
    "AS VAL":[...Ammo,"EXTENDED MAG"],
    "SCAR-L":[...Ammo,"9X19MM",".223 REM"],
    "AUG A1":[...Ammo,"9X19MM",".223 REM"],
    "M16A4":[...Ammo,"7.62X39MM",".223 REM",".25-45 SHARPS"],
    "G36":[...Ammo,".300 BLK",".223 REM"],
    "M16A1":[...Ammo,"M855",".223 REM"],
    "M16A3":[...Ammo,"7.62X39MM",".223 REM",".25-45 SHARPS"],
    "TYPE 20":[...Ammo,"EXTENDED MAG","EXTENDED MAG","60RD DRUM"],
    "AUG A2":[...Ammo,"7.62X39MM",".223 REM"],
    "K2":[...Ammo,".223 REM","7.62X39MM"],
    "FAMAS F1":[...Ammo,".223 REM"],
    "AK47":[...Ammo],
    "AUG A3":[...Ammo,".300 BLK",".223 REM"],
    "L85A2":[...Ammo,".223 REM"],
    "HK416":[...Ammo,".300 BLK",".223 REM"],
    "AK74":[...Ammo,"SUPER ARMOR PIERCING"],
    "AKM":[...Ammo,"BANANA",".366 SHOT",".366 SP"],
    "AK103":[...Ammo,"5.5X45MM"],
    "TAR-21":[...Ammo,"DUPLEX",".223 REM"],
    "TYPE-88":[...Ammo,"SUPER ARMOR PIERCING","30RD MAG","7.62X39MM"],
    "M231":[...Ammo,"M855",".223 REM"],
    "C7A2":[...Ammo,".223 REM","7.62X39MM",".20 TACT"],
    "STG-44":[...Ammo,"5.5X45MM"],
    "G11K2":[...Ammo],
    "M14":[...Ammo,"SILENT","6.5MM"],
    "BEOWULF ECR":[...Ammo,".458 SOCOM","5.56X45MM",".410 BORE"],
    "SCAR-H":[...Ammo,"SILENT","7.62X39MM"],
    "AK12BR":[...Ammo,"7.62X39MM","12.7X55MM"],
    "G3A3":[...Ammo,"SILENT",".45 ACP"],
    "AG-3":[...Ammo,"SILENT"],
    "HK417":[...Ammo,"SILENT"],
    "HENRY 45-70":["PLUS P","TRACERLESS",".30-30",".357 MAGNUM",".410 BORE","DEFAULT"],
    "FAL 50.00":[...Ammo,"SILENT","5.56X45MM",".45 ACP"]
}
const SAmmo={
    "DEFAULT":[...Ammo]
}


function randomizeAttachments(Primary,Secondary){
    if(!(Primary in POptics)){
        Primary="DEFAULT";
        PrimaryError.innerText="Primary weapon does not have designated attachment selection. Using default list"
    }else{
        PrimaryError.innerText=":)";
    }
    if(!(Secondary in SOptics)){
        Secondary="DEFAULT";
        SecondaryError.innerText="Secondary weapon does not have designated attachment selection. Using default list"
    }else{
        SecondaryError.innerText=":)";
    }
    //Primary block
    let randomPOptic = POptics[Primary][Math.floor(Math.random() * POptics[Primary].length)];
    PrimaryOptic.innerText=randomPOptic;
    let randomPBarrel = PBarrels[Primary][Math.floor(Math.random() * PBarrels[Primary].length)];
    PrimaryBarrel.innerText=randomPBarrel;
    let randomPUnderarrel = PUnderbarrels[Primary][Math.floor(Math.random() * PUnderbarrels[Primary].length)];
    PrimaryUnderbarrel.innerText=randomPUnderarrel;
    let randomPOther = POther[Primary][Math.floor(Math.random() * POther[Primary].length)];
    PrimaryOther.innerText=randomPOther;
    let randomPAmmo = PAmmo[Primary][Math.floor(Math.random() * PAmmo[Primary].length)];
    PrimaryAmmo.innerText=randomPAmmo;
    //Secondary block
    let randomSOptic = SOptics[Secondary][Math.floor(Math.random() * SOptics[Secondary].length)];
    SecondaryOptic.innerText=randomSOptic;
    let randomSBarrel = SBarrels[Secondary][Math.floor(Math.random() * SBarrels[Secondary].length)];
    SecondaryBarrel.innerText=randomSBarrel;
    let randomSOther = SOther[Secondary][Math.floor(Math.random() * SOther[Secondary].length)];
    SecondaryOther.innerText=randomSOther;
    let randomSAmmo = SAmmo[Secondary][Math.floor(Math.random() * SAmmo[Secondary].length)];
    SecondaryAmmo.innerText=randomSAmmo;
}
console.log(Primaries.length+Secondaries.length)
function randomize(){
    
    //Primary
    let randomPrimary = Primaries[Math.floor(Math.random() * Primaries.length)][0];
    header1.innerText=randomPrimary;
    //Secondary
    let randomSecondary = Secondaries[Math.floor(Math.random() * Secondaries.length)][0];
    header2.innerText=randomSecondary;
    randomizeAttachments(randomPrimary,randomSecondary);
    //Grenade
    let randomGrenade = Grenades[Math.floor(Math.random() * Grenades.length)][0];
    Grenade.innerText=randomGrenade;
    //Melee
    let randomMelee = Melees[Math.floor(Math.random() * Melees.length)];
    Melee.innerText=randomMelee;
}
const button=document.getElementById("randButton");
button.addEventListener('click',function(){
    randomize();
});