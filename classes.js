// Person object
class Person {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

// Organization structure
class Organization {
  constructor(year) {
    this.year = year;
    this.president = null;
    this.vicePresident = null;
    this.accountant = null;
    this.committees = [];
    this.sections = [];
  }

  setPresident(person) {
    this.president = person;
  }

  setVicePresident(person) {
    this.vicePresident = person;
  }

  setAccountant(person) {
    this.accountant = person;
  }

  addCommittee(committee) {
    this.committees.push(committee);
  }

  addSection(section) {
    this.sections.push(section);
  }
}

// Committee or Section structure
class CommitteeOrSection {
  constructor(name) {
    this.name = name;
    this.director = null;
    this.assistantDirectors = [];
    this.members = [];
  }

  setDirector(person) {
    this.director = person;
  }

  addAssistantDirector(person) {
    this.assistantDirectors.push(person);
  }

  addMember(person) {
    this.members.push(person);
  }
}

export { Person, Organization, CommitteeOrSection };