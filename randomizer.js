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
const Primaries=[
    //ARs
    "AK12",
    "AN-94",
    "AS VAL",
    "SCAR-L",
    "AUG A1",
    "M16A4",
    "G36",
    "M16A1",
    "M16A3",
    "TYPE 20",
    "AUG A2",
    "K2",
    "FAMAS F1",
    "AK47",
    "AUG A3",
    "L85A2",
    "HK416",
    "AK74",
    "AKM",
    "AK103",
    "TAR-21",
    "TYPE-88",
    "M231",
    "C7A2",
    "STG-44",
    "G11K2",
    //BRs
    "M14",
    "BEOWULF ECR",
    "SCAR-H",
    "AK12BR",
    "G3A3",
    "AG-3",
    "HK417",
    "HENRY 45-70",
    "FAL 50.00",
    //Carbines
    "M4A1",
    "G36K",
    "M4",
    "L22",
    "SCAR PDW",
    "AKU12",
    "GROZA-1",
    "OTS-126",
    "AK12C",
    "HONEY BADGER",
    "K1A",
    "SR-3M",
    "GROZA-4",
    "MC51",
    "FAL 50.63 PARA",
    "1858 CARBINE",
    "AK105",
    "JURY",
    "KAC SSR",
    "GRYOJET CARBINE",
    "C8A2",
    "X95R",
    "HK51B",
    "CAN CANNON",
    //Shotguns
    "KSG 12",
    "MODEL 870",
    "DBV12",
    "KS-23M",
    "SAIGA-12",
    "STEVENDS DB",
    "E-GUN",
    "AA-12",
    "SPAS-12",
    "DT11",
    "USAS-12",
    //PDW
    "MP5K",
    "UMP45",
    "G36C",
    "MP7",
    "MAC10",
    "P90",
    "COLT MARS",
    "MP5",
    "COLT SMG 633",
    "L2A3",
    "MP5SD",
    "MP10",
    "M3A1",
    "MP5/10",
    "UZI",
    "AUG A3 PARA XS",
    "K7",
    "AKS74U",
    "PPSH-41",
    "FAL PARA SHORTY",
    "KRISS VECTOR",
    "PP-19 BIZON",
    "MP40",
    "X95 SMG",
    "TOMMY GUN",
    "RAMA 1130",
    "BWC9 A",
    "FIVE-0",
    //DMRs
    "MK11",
    "SKS",
    "SL-8",
    "VSS VINTOREZ",
    "MSG90",
    "M21",
    "BEOWULF TCR",
    "SA58 SPR",
    "SCAR SSR",
    //LMGs
    "COLT LMG",
    "M60",
    "AUG HBAR",
    "MG36",
    "RPK12",
    "L86 LSW",
    "RPK",
    "HK21E",
    "HAMR IAR",
    "RPK74",
    "MG3KWS",
    "MGV-176",
    "STONER 96",
    "MG42",
    //Sniper rifles
    "INTERVENTION",
    "MODEL 700",
    "DRAGUNOV SVU",
    "AWS",
    "BFG 50",
    "AWM",
    "TRG-42",
    "MOSIN NAGANT",
    "DRAGUNOV SVDS",
    "M1903",
    "K14",
    "HECATE II",
    "FT300",
    "M107",
    "STERY SCOUT",
    "WA2000",
    "NTW-20"
]
const Secondaries=[
    //Pistols
    "G17",
    "M9",
    "M1911A1",
    "DESERT EAGLE L5",
    "G21",
    "G23",
    "M43A1",
    "G40",
    "KG-99",
    "G50",
    "FIVE SEVEN",
    "ZIP 22",
    "GI M1",
    "HARDBALLER",
    "IZHEVSK PB",
    "MAKAROV PM",
    "GB-22",
    "DESERT EAGLE XIX",
    "AUTOMAG III",
    "GYROJET MARK I",
    "GSP",
    "GRIZZLY",
    "M2011",
    "ALIEN",
    "AF2011-A1",
    //Machine Pistols
    "G18C",
    "93R",
    "PP-2000",
    "TEC-9",
    "MICRO UZI",
    "ŠKORPION VZ.61",
    "ASMI",
    "MP1911",
    "ARM PISTOL",
    //Revolvers
    "MP412 REX",
    "MATEBA 6",
    "1858 NEW ARMY",
    "REDHAWK 44",
    "JUDGE",
    "EXECUTIONER",
    //Other
    "SUPER SHORTY",
    "SFG 50",
    "M79 THUMPER",
    "ADVANCED COILGUN",
    "SAWED OFF",
    "SAIGA-12U",
    "OBREZ",
    "SASS 308"
]
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
    "DIAL APERTURE SIGHT"
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
    "DEFAULT":[...IronSights,...RedDots,...Scopes,...SpecialSights],
    //ARs
    "AK12":[...IronSights,...RedDots,...Scopes,...SpecialSights],
    "AN-94":[...IronSights,...RedDots,...Scopes,...SpecialSights],
    "AS VAL":[...IronSights,...RedDots,...Scopes,...SpecialSights],
    "SCAR-L":[...IronSights,...RedDots,...Scopes,...SpecialSights,"PM II"],
    "AUG A1":[...IronSights,...RedDots,...Scopes,...SpecialSights],
    "M16A4":[...IronSights,...RedDots,...Scopes,...SpecialSights],
    "G36":[...IronSights,...RedDots,...Scopes,...SpecialSights,"HENSOLDT DUAL OPTIC"],
    "M16A1":[...IronSights,...RedDots,...Scopes,...SpecialSights,"COLT RETRO SCOPE"],
    "M16A3":[...IronSights,...RedDots,...Scopes,...SpecialSights],
    "TYPE 20":[...IronSights,...RedDots,...Scopes,...SpecialSights,"REMOVE IRONS","PM II"],
    "AUG A2":[...IronSights,...RedDots,...Scopes,...SpecialSights],
    "K2":[...IronSights,...RedDots,...Scopes,...SpecialSights],
    "FAMAS F1":[...IronSights,...RedDots,...Scopes,...SpecialSights],
    "AK47":[...IronSights,...RedDots,...Scopes,...SpecialSights],
    "AUG A3":[...IronSights,...RedDots,...Scopes,...SpecialSights],
    "L85A2":[...IronSights,...RedDots,...Scopes,...SpecialSights],
    "HK416":[...IronSights,...RedDots,...Scopes,...SpecialSights],
    "AK74":[...IronSights,...RedDots,...Scopes,...SpecialSights],
    "AKM":[...IronSights,...RedDots,...Scopes,...SpecialSights],
    "AK103":[...IronSights,...RedDots,...Scopes,...SpecialSights],
    "TAR-21":[...IronSights,...RedDots,...Scopes,...SpecialSights],
    "TYPE-88":[...IronSights,...RedDots,...Scopes,...SpecialSights],
    "M231":[...IronSights,...RedDots,...Scopes,...SpecialSights],
    "C7A2":[...IronSights,...RedDots,...Scopes,...SpecialSights],
    "STG-44":[...IronSights,...RedDots,...Scopes,...SpecialSights],
    "G11K2":[...IronSights,...RedDots,...Scopes,...SpecialSights]
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
    "G11K2":[...Muzzles,...Suppressors]
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
const PUnderbarrels={
    "DEFAULT":[...Accessories,...Grips],
     //ARs
    "AK12":[...Accessories,...Grips],
    "AN-94":[...Accessories,...Grips,"ROMANIAN GRIP"],
    "AS VAL":[...Accessories,...Grips],
    "SCAR-L":[...Accessories,...Grips],
    "AUG A1":[...Accessories,...Grips],
    "M16A4":[...Accessories,...Grips],
    "G36":[...Accessories,...Grips,"ROMANIAN GRIP"],
    "M16A1":[...Accessories,...Grips],
    "M16A3":[...Accessories,...Grips],
    "TYPE 20":[...Accessories,...Grips],
    "AUG A2":[...Accessories,...Grips],
    "K2":[...Accessories,...Grips],
    "FAMAS F1":[...Accessories,...Grips],
    "AK47":[...Accessories,...Grips,"ROMANIAN GRIP"],
    "AUG A3":[...Accessories,...Grips],
    "L85A2":[...Accessories,...Grips],
    "HK416":[...Accessories,...Grips],
    "AK74":[...Accessories,...Grips,"ROMANIAN GRIP"],
    "AKM":[...Accessories,...Grips,"ROMANIAN GRIP"],
    "AK103":[...Accessories,...Grips,"ROMANIAN GRIP"],
    "TAR-21":[...Accessories,...Grips],
    "TYPE-88":[...Accessories,...Grips,"ROMANIAN GRIP"],
    "M231":[...Accessories,...Grips],
    "C7A2":[...Accessories,...Grips],
    "STG-44":[...Accessories,...Grips],
    "G11K2":[...Accessories,...Grips,"ROMANIAN GRIP"]
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
    "G11K2":[...OAccessories,...CantedSight]
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
    "G11K2":[...Ammo]
}
const SAmmo={
    "DEFAULT":[...Ammo]
}
//Grenades
const Grenades=[
    "M67 FRAG",
    "MK 2 FRAG",
    "M24 STICK",
    "M26 FRAG",
    "M560 MINI",
    "V40 MINI",
    "ROLY HG",
    "DYNAMITE-3",
    "DYNAMITE",
    "RGD-5 HE",
    "SEMTEX",
    "PB GRENADE",
    "BUNDLE CHARGE",
    "T-13 IMPACT",
    "RGN UDZS",
    "RGO UDZS"
]
//Melees
const Melees=[
    //One hand blades
    "CLEAVER",
    "KARAMBIT",
    "KRAMPUS KUKRI",
    "WAR FAN",
    "NATA HATCHET",
    "TANZINATE BLADE",
    "KUNAI",
    "TACTICAL SPATULA",
    "MEK'LETH",
    "TANTO",
    "HUNTING KNIFE",
    "KNIFE",
    "TRENCH KNIFE",
    "GOSPELL BLADE",
    "ENTRENCHER",
    "RITUAL SICKLE",
    "KAMA",
    "KEY",
    "ICE PICK",
    "MACHETE",
    "TOMAHAWK",
    "POCKET KNIFE",
    "HAVOC BLADE",
    "CUTTER",
    "JASON",
    "BRIDAL BRANDISHER",
    "DARKHEART",
    "STREITER",
    "BALISONG",
    "KOMMANDO",
    "LINKED SWORD",
    "CLASSIC KNIFE",
    "HRUNTING",
    //Two hand blades
    "ZIRCON TRIDENT",
    "NORDIC WAR AXE",
    "ICEMOURNE",
    "WORLD BUSTER",
    "NOOBSLAYER",
    "HATTORI",
    "CHOSEN ONE",
    "REAPER",
    "ZERO CUTTER",
    "NAGINATA",
    "TRAINING BAYONET",
    "LONGSWORD",
    "FIREAXE",
    "HARVESTER",
    "ZWEIHANDER",
    //One Hand Blunts
    "ASP BATON",
    "TOY GUN",
    "MAGLITE CLUB",
    "CROWBAR",
    "MJOLNIR",
    "KEYBOARD",
    "FLAME OF OLYMPIA",
    "PACIFIC FM",
    "FUMELEE",
    "CANDY CANE",
    "BARE FISTS",
    "TANZANITE PICK",
    "STICK GRENADE",
    "BLOXY",
    "HOLIDAY TEA",
    "TRENCH MACE",
    "CLONKER",
    "NIGHTSTICK",
    "STUN GUN",
    "UCHIWA",
    "FIXER",
    "BRASS KNUCKLES",
    "CRICKET BAT",
    "FRYING PAN",
    "ARM CANNON",
    "STARLIS FUNPOST",
    "THE COUNTDOWN",
    //Two hand blunts
    "SLEDGE HAMMER",
    "ZIRCON SLAMSICKLE",
    "WARHAMMER",
    "HOCKEY STICK",
    "SWEEPER",
    "BASEBALL BAT",
    "PADDLE",
    "CURSED SHINAI",
    "BANJO",
    "STYLIS BRUSH",
    "KANABO",
    "STOPPER",
    "THE AXE",
    "VOID STAFF",
    "MORNING STAR"
]
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

function randomize(){
    //Primary
    let randomPrimary = Primaries[Math.floor(Math.random() * Primaries.length)];
    header1.innerText=randomPrimary;
    //Secondary
    let randomSecondary = Secondaries[Math.floor(Math.random() * Secondaries.length)];
    header2.innerText=randomSecondary;
    randomizeAttachments(randomPrimary,randomSecondary);
    //Grenade
    let randomGrenade = Grenades[Math.floor(Math.random() * Grenades.length)];
    Grenade.innerText=randomGrenade;
    //Melee
    let randomMelee = Melees[Math.floor(Math.random() * Melees.length)];
    Melee.innerText=randomMelee;
}
