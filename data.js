import { Person, Organization, CommitteeOrSection } from './classes.js';

// Create persons
const FaisalAlali = new Person(1, 'Faisal Alali');
const FaresAlnazlawi = new Person(2, 'Fares Alnazlawi');
const TarekAljawi = new Person(3, 'Tarek Aljawi');
const AhmadAlqanbar = new Person(4, 'Ahmad Alqanber');
const AbdulmuhsinAbabtain = new Person(5, 'Abdulmuhsin Ababtain');
const MiraanAlkatib = new Person(6, 'Miraan Alkatib');
const MohammedAlmodhhi = new Person(7, 'Mohammed Almodhhi');
const AnasBukhari = new Person(8, 'Anas Bukhari');
const YazanFintani = new Person(9, 'Yazan Fintani');
const AbdulhadiZubailah = new Person(10, 'Abdulhadi Zubailah');
const AbdullahAlfaisal = new Person(11, 'Abdullah Alfaisal');
const AbdulmohsenRasheed = new Person(12, 'Abdulmohsen Rasheed');
const AhmedAttas = new Person(13, 'Ahmed Attas');
const DhialddinHamidalddin = new Person(14, 'Dhialddin Hamidalddin');
const IsmailHawsawi = new Person(15, 'Ismail Hawsawi');
const MohammedAlmuallimi = new Person(16, 'Mohammed Almuallimi');
const OsamaBamardouf = new Person(17, 'Osama Bamardouf');
const RayyanAlghamdi = new Person(18, 'Rayyan Alghamdi');
const RedhaKattoa = new Person(19, 'Redha Kattoa');
const SalemAlsaqaf = new Person(20, 'Salem Alsaqaf');
const OmarAlmohammadi = new Person(21, 'Omar Almohammadi');
const MajedAlmadani = new Person(22, 'Majed Almadani');
const AbdullahAzhar = new Person(23, 'Abdullah Azhar');
const SuhaibHalawani = new Person(24, 'Suhaib Halawani');
const HassanAlobaid = new Person(25, 'Hassan Alobaid');
const AbdulrahmanAzhar = new Person(26, 'Abdulrahman Azhar');


// Create organization for year 2018
const org2018 = new Organization(2018);
org2018.setPresident(AnasBukhari);


// Create organization for year 2019
const org2019 = new Organization(2019);
org2019.setPresident(MohammedAlmodhhi);
org2019.setVicePresident(AbdulmuhsinAbabtain);

// Create section
const classicGamesSection2019 = new CommitteeOrSection('Classic Games');
// classicGamesSection2019.setDirector();
classicGamesSection2019.addAssistantDirector(FaisalAlali);
org2019.addSection(classicGamesSection2019);


// Create organization for year 2020
const org2020 = new Organization(2020);
org2020.setPresident(MiraanAlkatib);
org2020.setVicePresident(TarekAljawi);

// Create section
const classicGamesSection2020 = new CommitteeOrSection('Classic Games');
classicGamesSection2020.setDirector(FaisalAlali);
org2020.addSection(classicGamesSection2020);

// Create section
const eGamesSection2020 = new CommitteeOrSection('E-Games');
eGamesSection2020.setDirector(FaresAlnazlawi);
org2020.addSection(eGamesSection2020);


// Create organization for year 2021
const org2021 = new Organization(2021);
org2021.setPresident(TarekAljawi);
org2021.setVicePresident(AhmadAlqanbar);

// Create section
const classicGamesSection2021 = new CommitteeOrSection('Classic Games');
classicGamesSection2021.setDirector(FaisalAlali);
org2021.addSection(classicGamesSection2021);

// Create section
const eGamesSection2021 = new CommitteeOrSection('E-Games');
eGamesSection2021.setDirector(FaresAlnazlawi);
org2021.addSection(eGamesSection2021);


// Create organization for year 2022
const org2022 = new Organization(2022);
org2022.setPresident(FaresAlnazlawi);
org2022.setVicePresident(FaisalAlali);
org2022.setAccountant(AhmedAttas);

// Create section
const classicGamesSection2022 = new CommitteeOrSection('Classic Games');
classicGamesSection2022.setDirector(AbdulrahmanAzhar);
classicGamesSection2022.addAssistantDirector(AbdullahAlfaisal);

// Create section
const eGamesSection2022 = new CommitteeOrSection('E-Games');
eGamesSection2022.setDirector(OmarAlmohammadi);
eGamesSection2022.addAssistantDirector(MajedAlmadani);
eGamesSection2022.addMember(OsamaBamardouf);
eGamesSection2022.addMember(HassanAlobaid);
eGamesSection2022.addMember(SuhaibHalawani);

// Create section
const modernGamesSection2022 = new CommitteeOrSection('Modern Games');
modernGamesSection2022.setDirector(AbdulhadiZubailah);
modernGamesSection2022.addAssistantDirector(AbdulmohsenRasheed);
modernGamesSection2022.addMember(IsmailHawsawi);

// Create committee
const mediaCommittee2022 = new CommitteeOrSection('Media');
mediaCommittee2022.setDirector(DhialddinHamidalddin);

// Create committee
const orgnizationalCommittee2022 = new CommitteeOrSection('Organizational');
orgnizationalCommittee2022.setDirector(RedhaKattoa);
orgnizationalCommittee2022.addAssistantDirector(SalemAlsaqaf);
orgnizationalCommittee2022.addAssistantDirector(AbdullahAzhar);

// Create committee
const developmentCommittee2022 = new CommitteeOrSection('Development');
developmentCommittee2022.setDirector(MohammedAlmuallimi);
developmentCommittee2022.addAssistantDirector(TarekAljawi);

// Add the sections to the organization
org2022.addSection(classicGamesSection2022);
org2022.addSection(eGamesSection2022);
org2022.addSection(modernGamesSection2022);
org2022.addCommittee(mediaCommittee2022);
org2022.addCommittee(orgnizationalCommittee2022);
org2022.addCommittee(developmentCommittee2022);


// Store the organizations in an array
const organizations = [org2018, org2019, org2020, org2021, org2022];

// Function to get the data as JSON
export function getOrganizationDataAsJson() {
  return organizations;
}