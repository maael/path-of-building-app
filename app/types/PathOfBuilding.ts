export interface PathOfBuilding {
  maxX:            number;
  constants:       Constants;
  skillSprites:    SkillSprites;
  minX:            number;
  extraImages:     ExtraImage[];
  imageZoomLevels: number[];
  nodes:           { [key: string]: Node };
  assets:          Assets;
  classes:         Class[];
  maxY:            number;
  groups:          Group[];
  minY:            number;
  jewelSlots:      number[];
}

export interface Assets {
  centershadow:                            AscendancyButton;
  centerranger:                            AscendancyButton;
  keystoneFrameAllocated:                  AscendancyButton;
  classesSaboteur:                         AscendancyButton;
  jewelSocketActiveRed:                    AscendancyButton;
  orbit2Active:                            AscendancyButton;
  jewelSocketActiveAltBlue:                AscendancyButton;
  notableFrameAllocated:                   AscendancyButton;
  vaalJewelCircle2:                        string[];
  classesGuardian:                         AscendancyButton;
  jewelSocketActiveRedAlt:                 AscendancyButton;
  karuiJewelCircle2:                       string[];
  orbit4Intermediate:                      AscendancyButton;
  keystoneFrameUnallocated:                AscendancyButton;
  ascendancyFrameLargeNormal:              AscendancyButton;
  classesDeadeye:                          AscendancyButton;
  vaalJewelCircle1:                        string[];
  classesElementalist:                     AscendancyButton;
  groupBackgroundMediumAlt:                AscendancyButton;
  orbit3Intermediate:                      AscendancyButton;
  orbit3Active:                            AscendancyButton;
  orbit2Intermediate:                      AscendancyButton;
  ascendancyFrameLargeAllocated:           AscendancyButton;
  classesHierophant:                       AscendancyButton;
  imgPSFadeCorner:                         string[];
  backgroundStrInt:                        AscendancyButton;
  ascendancyFrameSmallNormal:              AscendancyButton;
  backgroundStrDex:                        AscendancyButton;
  centerwitch:                             AscendancyButton;
  psSkillFrameActive:                      AscendancyButton;
  psGroupBackground1:                      AscendancyButton;
  backgroundStr:                           AscendancyButton;
  backgroundInt:                           AscendancyButton;
  centerduelist:                           AscendancyButton;
  psSkillFrame:                            AscendancyButton;
  backgroundDexInt:                        AscendancyButton;
  orbit1Normal:                            AscendancyButton;
  psSkillFrameHighlighted:                 AscendancyButton;
  orbit4Normal:                            AscendancyButton;
  orbit1Active:                            AscendancyButton;
  psPointsFrame:                           string[];
  background1:                             AscendancyButton;
  jewelFrameAllocated:                     AscendancyButton;
  classesAssassin:                         AscendancyButton;
  jewelSocketActivePrismatic:              AscendancyButton;
  classesInquisitor:                       AscendancyButton;
  centerscion:                             AscendancyButton;
  classesChampion:                         AscendancyButton;
  templarJewelCircle2:                     string[];
  orbit2Normal:                            AscendancyButton;
  psGroupBackground3:                      AscendancyButton;
  classesGladiator:                        AscendancyButton;
  psGroupBackground2:                      AscendancyButton;
  classesChieftain:                        AscendancyButton;
  jewelSocketActivePrismaticAlt:           AscendancyButton;
  jewelSocketActiveLegion:                 AscendancyButton;
  jewelSocketActiveAbyss:                  AscendancyButton;
  jewelSocketActiveBlue:                   AscendancyButton;
  ascendancyButtonHighlight:               AscendancyButton;
  centermarauder:                          AscendancyButton;
  jewelSocketClusterAltNormal1Medium:      AscendancyButton;
  classesRaider:                           AscendancyButton;
  ascendancyMiddle:                        AscendancyButton;
  classesBerserker:                        AscendancyButton;
  classesJuggernaut:                       AscendancyButton;
  lineConnectorNormal:                     AscendancyButton;
  classesAscendant:                        AscendancyButton;
  notableFrameUnallocated:                 AscendancyButton;
  templarJewelCircle1:                     string[];
  jewelSocketAltActive:                    AscendancyButton;
  groupBackgroundSmallAlt:                 AscendancyButton;
  blightedNotableFrameCanAllocate:         AscendancyButton;
  ascendancyFrameSmallAllocated:           AscendancyButton;
  ascendancyFrameLargeCanAllocate:         AscendancyButton;
  eternalEmpireJewelCircle1:               string[];
  imgPSFadeSide:                           string[];
  jewelSocketAltCanAllocate:               AscendancyButton;
  blightedNotableFrameAllocated:           AscendancyButton;
  classesOccultist:                        AscendancyButton;
  orbit4Active:                            AscendancyButton;
  ascendancyButton:                        AscendancyButton;
  jewelSocketClusterAltCanAllocate1Large:  AscendancyButton;
  orbit1Intermediate:                      AscendancyButton;
  jewelCircle1:                            string[];
  jewelSocketClusterAltNormal1Large:       AscendancyButton;
  jewelSocketActiveAltPurple:              AscendancyButton;
  jewelSocketClusterAltCanAllocate1Small:  AscendancyButton;
  jewelSocketClusterAltCanAllocate1Medium: AscendancyButton;
  jewelSocketClusterAltNormal1Small:       AscendancyButton;
  jewelSocketActiveLegionAlt:              AscendancyButton;
  groupBackgroundLargeHalfAlt:             AscendancyButton;
  classesNecromancer:                      AscendancyButton;
  classesSlayer:                           AscendancyButton;
  jewelSocketActiveGreenAlt:               AscendancyButton;
  jewelSocketActiveBlueAlt:                AscendancyButton;
  lineConnectorActive:                     AscendancyButton;
  marakethJewelCircle1:                    string[];
  psLineDecoHighlighted:                   AscendancyButton;
  psLineDeco:                              AscendancyButton;
  ascendancyButtonPressed:                 AscendancyButton;
  jewelFrameUnallocated:                   AscendancyButton;
  jewelSocketAltNormal:                    AscendancyButton;
  psStartNodeBackgroundInactive:           AscendancyButton;
  marakethJewelCircle2:                    string[];
  karuiJewelCircle1:                       string[];
  jewelCircle1Inverse:                     string[];
  jewelFrameCanAllocate:                   AscendancyButton;
  jewelSocketActiveAltRed:                 AscendancyButton;
  notableFrameCanAllocate:                 AscendancyButton;
  jewelSocketActiveAbyssAlt:               AscendancyButton;
  centertemplar:                           AscendancyButton;
  classesTrickster:                        AscendancyButton;
  blightedNotableFrameUnallocated:         AscendancyButton;
  jewelSocketActiveGreen:                  AscendancyButton;
  ascendancyFrameSmallCanAllocate:         AscendancyButton;
  classesPathfinder:                       AscendancyButton;
  orbit3Normal:                            AscendancyButton;
  keystoneFrameCanAllocate:                AscendancyButton;
  eternalEmpireJewelCircle2:               string[];
  lineConnectorIntermediate:               AscendancyButton;
  backgroundDex:                           AscendancyButton;
}

export interface AscendancyButton {
  the02109: string;
  the01246: string;
  the03835: string;
  the02972: string;
}

export interface Class {
  baseStr:      number;
  name:         string;
  baseDex:      number;
  baseInt:      number;
  ascendancies: Ascendancy[];
}

export interface Ascendancy {
  name:               string;
  id:                 string;
  flavourTextRect?:   FlavourTextRect;
  flavourText?:       string;
  flavourTextColour?: string;
}

export interface FlavourTextRect {
  y:      number;
  x:      number;
  height: number;
  width:  number;
}

export interface Constants {
  classes:              Classes;
  orbitRadii:           number[];
  characterAttributes:  CharacterAttributes;
  skillsPerOrbit:       number[];
  pssCentreInnerRadius: number;
}

export interface CharacterAttributes {
  strength:     number;
  intelligence: number;
  dexterity:    number;
}

export interface Classes {
  dexIntClass:    number;
  dexClass:       number;
  intClass:       number;
  strDexClass:    number;
  strDexIntClass: number;
  strClass:       number;
  strIntClass:    number;
}

export interface ExtraImage {
  y:     number;
  x:     number;
  image: string;
}

export interface Group {
  y:        number;
  x:        number;
  nodes:    string[];
  orbits:   number[];
  isProxy?: boolean;
}

export interface Node {
  icon?:                   string;
  recipe?:                 Recipe[];
  in?:                     string[];
  orbitIndex?:             number;
  isNotable?:              boolean;
  group?:                  number;
  out?:                    string[];
  name?:                   string;
  skill?:                  number;
  orbit?:                  number;
  stats?:                  string[];
  reminderText?:           string[];
  isMastery?:              boolean;
  grantedStrength?:        number;
  ascendancyName?:         string;
  grantedDexterity?:       number;
  isAscendancyStart?:      boolean;
  isMultipleChoice?:       boolean;
  grantedIntelligence?:    number;
  isJewelSocket?:          boolean;
  expansionJewel?:         ExpansionJewel;
  grantedPassivePoints?:   number;
  flavourText?:            string[];
  isKeystone?:             boolean;
  isProxy?:                boolean;
  isMultipleChoiceOption?: boolean;
  isBlighted?:             boolean;
  classStartIndex?:        number;
}

export interface ExpansionJewel {
  index:   number;
  proxy:   string;
  size:    number;
  parent?: string;
}

export enum Recipe {
  AmberOil = "AmberOil",
  AzureOil = "AzureOil",
  BlackOil = "BlackOil",
  ClearOil = "ClearOil",
  CrimsonOil = "CrimsonOil",
  GoldenOil = "GoldenOil",
  IndigoOil = "IndigoOil",
  OpalescentOil = "OpalescentOil",
  SepiaOil = "SepiaOil",
  SilverOil = "SilverOil",
  TealOil = "TealOil",
  VerdantOil = "VerdantOil",
  VioletOil = "VioletOil",
}

export interface SkillSprites {
  notableActive:    KeystoneActive[];
  mastery:          KeystoneActive[];
  normalInactive:   KeystoneActive[];
  keystoneInactive: KeystoneActive[];
  normalActive:     KeystoneActive[];
  notableInactive:  KeystoneActive[];
  keystoneActive:   KeystoneActive[];
}

export interface KeystoneActive {
  coords:   { [key: string]: Coord };
  filename: string;
}

export interface Coord {
  y: number;
  x: number;
  w: number;
  h: number;
}
