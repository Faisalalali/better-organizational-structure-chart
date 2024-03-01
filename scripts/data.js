import { Person, Organization, CommitteeOrSection } from './classes.js';

// Create persons
const FaisalAlali = new Person(1, 'Faisal Alali', 'faisal-alali.jpg');
const FaresAlnazlawi = new Person(2, 'Fares Alnazlawi', 'fares-alnazlawi.jpg');
const TarekAljawi = new Person(3, 'Tarek Aljawi');
const AhmadAlqanbar = new Person(4, 'Ahmad Alqanber');
const AbdulmuhsinAbabtain = new Person(5, 'Abdulmuhsin Ababtain', 'abdulmuhsin-ababtain.jpg');
const MiraanAlkatib = new Person(6, 'Miraan Alkatib', 'miraan-alkatib.jpg');
const MohammedAlmodhhi = new Person(7, 'Mohammed Almodhhi', 'mohammed-almodhhi.jpg');
const AnasBukhari = new Person(8, 'Anas Bukhari', 'anas-bukhari.jpg');
const YazanFintani = new Person(9, 'Yazan Fintani');
const AbdulhadiZubailah = new Person(10, 'Abdulhadi Zubailah', 'abdulhadi-zubailah.jpg');
const AbdullahAlfaisal = new Person(11, 'Abdullah Alfaisal');
const AbdulmohsenRasheed = new Person(12, 'Abdulmohsen Rasheed', 'abdulmohsen-rasheed.jpg');
const AhmedAttas = new Person(13, 'Ahmed Attas');
const DhiaaddinHamidaddin = new Person(14, 'Dhiaaddin Hamidaddin', 'dhiaaddin-hamidaddin.jpg');
const IsmailHawsawi = new Person(15, 'Ismail Hawsawi');
const MohammedAlmuallimi = new Person(16, 'Mohammed Almuallimi', 'mohammed-almuallimi.jpg');
const OsamaBamardouf = new Person(17, 'Osama Bamardouf', 'osama-bamardouf.jpg');
const RayyanAlghamdi = new Person(18, 'Rayyan Alghamdi');
const RedhaKattoa = new Person(19, 'Redha Kattoa', 'redha-kattoa.jpg');
const SalemAlsaqaf = new Person(20, 'Salem Alsaqaf', 'salem-alsaqaf.png');
const OmarAlmohammadi = new Person(21, 'Omar Almohammadi');
const MajedAlmadani = new Person(22, 'Majed Almadani');
const AbdullahAzhar = new Person(23, 'Abdullah Azhar');
const SuhaibHalawani = new Person(24, 'Suhaib Halawani');
const HassanAlobaid = new Person(25, 'Hassan Alobaid', 'hassan-alobaid.jpg');
const AbdulrahmanAzhar = new Person(26, 'Abdulrahman Azhar');
const MohammedAhmed = new Person(27, 'Mohammed Ahmed', 'mohammed-ahmed.jpg');
const AbdulhadiSidam = new Person(28, 'Abdulhadi Sidam');
const IbrahimAtiq = new Person(29, 'Ibrahim Atiq');
const MansourAlsharif = new Person(30, 'Mansour Alsharif');
const MansourAldosari = new Person(31, 'Mansour Aldosari', 'mansour-aldosari.jpg');
const AnmarAbdulhamid = new Person(32, 'Anmar Faisal');
const NawafHamdi = new Person (33, 'Nawaf Hamdi', 'nawaf-hamdi.jpg');
const AbdulrahmanAlsuliman = new Person(34, 'Abdulrahman Alsuliman');
const RawafAlmosa = new Person(35, 'Rawaf Almosa');
const AliAlnimer = new Person(36, 'Ali Alnimer', 'ali-alnimer.jpg');
const MohammedAlghamdi = new Person(37, 'Mohammed Alghamdi');
const WaleedAlzahrani = new Person(38, 'Waleed Alzahrani');
const NizarNoor = new Person(39, 'Nizar Noor', 'nizar-noor.jpg');
const MohammadBamusa = new Person(40, 'Mohammad Bamusa');
const NawafOthman = new Person(41, 'Nawaf Othman');
const MazenAlshehri = new Person(42, 'Mazen Alshehri');
const KhaledAlali = new Person(43, 'Khaled Alali');
const AbdulazizAlhumaid = new Person(44, 'Abdulaziz Alhumaid');
const AbdulelahAlem = new Person(45, 'Abdulelah Alem');
const SaeedAlghamdi = new Person(46, 'Saeed Alghamdi');
const AbdulazizObayed = new Person(47, 'Abdulaziz Obayed');
const KhaledMadany = new Person(48, 'Khaled Madany');
const FaresBanjar = new Person(49, 'Fares Banjar', 'fares-banjar.jpg');
const AhmedAlsayed = new Person(50, 'Ahmed Alsayed');
const AbdulhadiAljuaidi = new Person(51, 'Abdulhadi Aljuaidi');
const SaadAlsuhail = new Person(52, 'Saad Alsuhail');
const AliAljubran = new Person(53, 'Ali Aljubran');
const OmarAlnajar = new Person(54, 'Omar Alnajar');
const MohammedTuhami = new Person(55, 'Mohammed Tuhami');
const AmerDughairy = new Person(56, 'Amer Dughairy');
const JehadAlharbi = new Person(57, 'Jehad Alharbi');


// Create organization for year 2018
const org2018 = new Organization(2018);
org2018.setPresident(AnasBukhari);
org2018.setVicePresident(MohammedAlghamdi);

// Create section
const classicGamesSection2018 = new CommitteeOrSection('Classic Games');
classicGamesSection2018.setDirector(WaleedAlzahrani);
classicGamesSection2018.addAssistantDirector(NizarNoor);
classicGamesSection2018.addAssistantDirector(MohammadBamusa);
org2018.addSection(classicGamesSection2018);

// Create section
const modernGamesSection2018 = new CommitteeOrSection('Modern Games');
modernGamesSection2018.setDirector(MazenAlshehri);
modernGamesSection2018.addAssistantDirector(NawafOthman);
modernGamesSection2018.addAssistantDirector(AbdulhadiSidam);
org2018.addSection(modernGamesSection2018);

// Create section
const eGamesSection2018 = new CommitteeOrSection('E-Games');
eGamesSection2018.setDirector(KhaledAlali);
eGamesSection2018.addAssistantDirector(FaresBanjar);
org2018.addSection(eGamesSection2018);

// Create section
const eSportSection2018 = new CommitteeOrSection('E-Sport');
eSportSection2018.setDirector(MansourAldosari);
eSportSection2018.addAssistantDirector(AbdulazizAlhumaid);
org2018.addSection(eSportSection2018);

// Create committee
const mediaCommittee2018 = new CommitteeOrSection('Media');
mediaCommittee2018.setDirector(AliAlnimer);
mediaCommittee2018.addAssistantDirector(AbdulelahAlem);
org2018.addCommittee(mediaCommittee2018);

// Create committee
const orgnizationalCommittee2018 = new CommitteeOrSection('Organizational');
orgnizationalCommittee2018.setDirector(AbdulazizObayed);
orgnizationalCommittee2018.addAssistantDirector(MohammedAlghamdi);
orgnizationalCommittee2018.addAssistantDirector(SaeedAlghamdi);
orgnizationalCommittee2018.addAssistantDirector(TarekAljawi);
orgnizationalCommittee2018.addAssistantDirector(KhaledMadany);
org2018.addCommittee(orgnizationalCommittee2018);




// Create organization for year 2019
const org2019 = new Organization(2019);
org2019.setPresident(MohammedAlmodhhi);
org2019.setVicePresident(AbdulmuhsinAbabtain);
org2019.setAccountant(MiraanAlkatib);

// Create section
const classicGamesSection2019 = new CommitteeOrSection('Classic Games');
classicGamesSection2019.setDirector(MansourAlsharif);
classicGamesSection2019.addAssistantDirector(FaisalAlali);
org2019.addSection(classicGamesSection2019);

// Create section
const modernGamesSection2019 = new CommitteeOrSection('Modern Games');
modernGamesSection2019.setDirector(AnmarAbdulhamid);
modernGamesSection2019.addAssistantDirector(AbdulhadiSidam);
modernGamesSection2019.addAssistantDirector(AbdulrahmanAlsuliman);
org2019.addSection(modernGamesSection2019);

// Create section
const eGamesSection2019 = new CommitteeOrSection('E-Games');
eGamesSection2019.setDirector(TarekAljawi);
eGamesSection2019.addAssistantDirector(FaresAlnazlawi);
org2019.addSection(eGamesSection2019);

// Create section
const eSportSection2019 = new CommitteeOrSection('E-Sport');
eSportSection2019.setDirector(MansourAldosari);
eSportSection2019.addAssistantDirector(RawafAlmosa);
org2019.addSection(eSportSection2019);

// Create committee
const mediaCommittee2019 = new CommitteeOrSection('Media');
mediaCommittee2019.setDirector(AliAlnimer);
mediaCommittee2019.addAssistantDirector(NawafHamdi);
mediaCommittee2019.addAssistantDirector(DhiaaddinHamidaddin);
org2019.addCommittee(mediaCommittee2019);




// Create organization for year 2020
const org2020 = new Organization(2020);
org2020.setPresident(MiraanAlkatib);
org2020.setVicePresident(TarekAljawi);

// Create section
const classicGamesSection2020 = new CommitteeOrSection('Classic Games');
classicGamesSection2020.setDirector(FaisalAlali);
classicGamesSection2020.addAssistantDirector(AbdulmohsenRasheed);
classicGamesSection2020.addAssistantDirector(MohammedAhmed);
org2020.addSection(classicGamesSection2020);

// Create section
const modernGamesSection2020 = new CommitteeOrSection('Modern Games');
modernGamesSection2020.setDirector(AbdulhadiSidam);
modernGamesSection2020.addAssistantDirector(IbrahimAtiq);
org2020.addSection(modernGamesSection2020);

// Create section
const eGamesSection2020 = new CommitteeOrSection('E-Games');
eGamesSection2020.setDirector(FaresAlnazlawi);
eGamesSection2020.addAssistantDirector(OsamaBamardouf);
org2020.addSection(eGamesSection2020);

// Create section
const eSportSection2020 = new CommitteeOrSection('E-Sport');
eSportSection2020.setDirector(OmarAlmohammadi);
eSportSection2020.addAssistantDirector(MajedAlmadani);
org2020.addSection(eSportSection2020);

// Create committee
const mediaCommittee2020 = new CommitteeOrSection('Media');
mediaCommittee2020.setDirector(DhiaaddinHamidaddin);
org2020.addCommittee(mediaCommittee2020);




// Create organization for year 2021
const org2021 = new Organization(2021);
org2021.setPresident(TarekAljawi);
org2021.setVicePresident(AhmadAlqanbar);
org2021.setAccountant(RedhaKattoa);

// Create section
const classicGamesSection2021 = new CommitteeOrSection('Classic Games');
classicGamesSection2021.setDirector(FaisalAlali);
classicGamesSection2021.addAssistantDirector(AbdulrahmanAzhar);
org2021.addSection(classicGamesSection2021);

// Create section
const modernGamesSection2021 = new CommitteeOrSection('Modern Games');
modernGamesSection2021.setDirector(AbdulhadiZubailah);
modernGamesSection2021.addAssistantDirector(AbdulmohsenRasheed);
org2021.addSection(modernGamesSection2021);

// Create section
const eGamesSection2021 = new CommitteeOrSection('E-Games');
eGamesSection2021.setDirector(FaresAlnazlawi);
eGamesSection2021.addAssistantDirector(OsamaBamardouf);
org2021.addSection(eGamesSection2021);

// Create section
const eSportSection2021 = new CommitteeOrSection('E-Sport');
eSportSection2021.setDirector(OmarAlmohammadi);
eSportSection2021.addAssistantDirector(MajedAlmadani);
org2021.addSection(eSportSection2021);

// Create committee
const mediaCommittee2021 = new CommitteeOrSection('Media');
mediaCommittee2021.setDirector(DhiaaddinHamidaddin);
mediaCommittee2021.addAssistantDirector(RayyanAlghamdi);
mediaCommittee2021.addAssistantDirector(NawafHamdi);
org2021.addCommittee(mediaCommittee2021);

// Create committee
const orgnizationalCommittee2021 = new CommitteeOrSection('Organizational');
orgnizationalCommittee2021.setDirector(MiraanAlkatib);
org2021.addCommittee(orgnizationalCommittee2021);

// Create committee
const developmentCommittee2021 = new CommitteeOrSection('Development');
developmentCommittee2021.setDirector(AhmadAlqanbar);
developmentCommittee2021.addAssistantDirector(RedhaKattoa);
org2021.addCommittee(developmentCommittee2021);




// Create organization for year 2022
const org2022 = new Organization(2022);
org2022.setPresident(FaresAlnazlawi);
org2022.setVicePresident(FaisalAlali);
org2022.setAccountant(AhmedAttas);

// Create section
const classicGamesSection2022 = new CommitteeOrSection('Classic Games');
classicGamesSection2022.setDirector(AbdulrahmanAzhar);
classicGamesSection2022.addAssistantDirector(AbdullahAlfaisal);
org2022.addSection(classicGamesSection2022);

// Create section
const modernGamesSection2022 = new CommitteeOrSection('Modern Games');
modernGamesSection2022.setDirector(AbdulhadiZubailah);
modernGamesSection2022.addAssistantDirector(AbdulmohsenRasheed);
modernGamesSection2022.addAssistantDirector(IsmailHawsawi);
modernGamesSection2022.addAssistantDirector(YazanFintani);
org2022.addSection(modernGamesSection2022);

// Create section
const eGamesSection2022 = new CommitteeOrSection('Video Games');
eGamesSection2022.setDirector(OmarAlmohammadi);
eGamesSection2022.addAssistantDirector(MajedAlmadani);
eGamesSection2022.addAssistantDirector(OsamaBamardouf);
eGamesSection2022.addAssistantDirector(HassanAlobaid);
eGamesSection2022.addAssistantDirector(SuhaibHalawani);
org2022.addSection(eGamesSection2022);

// Create committee
const mediaCommittee2022 = new CommitteeOrSection('Media');
mediaCommittee2022.setDirector(DhiaaddinHamidaddin);
org2022.addCommittee(mediaCommittee2022);

// Create committee
const orgnizationalCommittee2022 = new CommitteeOrSection('Organizational');
orgnizationalCommittee2022.setDirector(RedhaKattoa);
orgnizationalCommittee2022.addAssistantDirector(SalemAlsaqaf);
orgnizationalCommittee2022.addAssistantDirector(AbdullahAzhar);
org2022.addCommittee(orgnizationalCommittee2022);

// Create committee
const developmentCommittee2022 = new CommitteeOrSection('Development');
developmentCommittee2022.setDirector(MohammedAlmuallimi);
developmentCommittee2022.addAssistantDirector(TarekAljawi);
org2022.addCommittee(developmentCommittee2022);


// Create organization for year 2022
const org2023 = new Organization(2023);
org2023.setPresident(DhiaaddinHamidaddin);
org2023.setVicePresident(MajedAlmadani);
org2023.setAccountant(AhmedAttas);

// Create section
const classicGamesSection2023 = new CommitteeOrSection('Classic Games');
classicGamesSection2023.setDirector(AhmedAlsayed);
classicGamesSection2023.addAssistantDirector(AbdullahAlfaisal);
org2023.addSection(classicGamesSection2023);

// Create section
const modernGamesSection2023 = new CommitteeOrSection('Modern Games');
modernGamesSection2023.setDirector(IsmailHawsawi);
modernGamesSection2023.addAssistantDirector(AbdulhadiAljuaidi);
org2023.addSection(modernGamesSection2023);

// Create section
const eGamesSection2023 = new CommitteeOrSection('Video Games');
eGamesSection2023.setDirector(HassanAlobaid);
eGamesSection2023.addAssistantDirector(SuhaibHalawani);
org2023.addSection(eGamesSection2023);

// Create committee
const mediaCommittee2023 = new CommitteeOrSection('Media');
mediaCommittee2023.setDirector(SaadAlsuhail);
org2023.addCommittee(mediaCommittee2023);

// Create committee
const designCommittee2023 = new CommitteeOrSection('Design');
designCommittee2023.setDirector(AliAljubran);
org2023.addCommittee(designCommittee2023);

// Create committee
const developmentCommittee2023 = new CommitteeOrSection('Development');
developmentCommittee2023.setDirector(OmarAlnajar);
org2023.addCommittee(developmentCommittee2023);

// Create committee
const orgnizationalCommittee2023 = new CommitteeOrSection('Organizational');
orgnizationalCommittee2023.setDirector(MohammedTuhami);
org2023.addCommittee(orgnizationalCommittee2023);

// Create committee
const innerEventsCommittee2023 = new CommitteeOrSection('Inner Events');
innerEventsCommittee2023.setDirector(AmerDughairy);
org2023.addCommittee(innerEventsCommittee2023);

const keeperCommittee2023 = new CommitteeOrSection('Keeper');
keeperCommittee2023.setDirector(JehadAlharbi);
org2023.addCommittee(keeperCommittee2023);


// Store the organizations in an array
const organizations = [org2018, org2019, org2020, org2021, org2022, org2023];

// Function to get the data as JSON
export function getOrganizationDataAsJson() {
  return organizations;
}