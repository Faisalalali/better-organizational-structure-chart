import { getOrganizationDataAsJson } from './data.js';

const chartContainer = document.getElementById('chart-container');
const yearSlider = document.getElementById('year-slider');
const organizationDataJson = getOrganizationDataAsJson();

console.log(organizationDataJson);

function createMemberElement(member, role = 'member') {
  const memberElement = document.createElement('div');
  memberElement.classList.add('member', role);
  memberElement.setAttribute("data-id", member.id);

  const memberImage = document.createElement('img');
  memberImage.classList.add('member-image');
  memberImage.src = member.image;
  memberImage.alt = member.name;

  const memberName = document.createElement('p');
  memberName.textContent = member.name;

  memberElement.appendChild(memberImage);
  memberElement.appendChild(memberName);

  return memberElement;
}

function createRoleSection(name, director, assistantDirectors = [], members = []) {
  const roleSection = document.createElement('div');
  roleSection.classList.add('role-section');

  const roleName = document.createElement('h3');
  roleName.textContent = name;
  roleSection.appendChild(roleName);

  const subRolesContainer = document.createElement('div');
  subRolesContainer.classList.add('sub-roles-container');

  if (director) {
    const directorAssistantRow = document.createElement('div');
    directorAssistantRow.classList.add('director-assistant-row');
    directorAssistantRow.appendChild(createMemberElement(director, 'director'));

    assistantDirectors.forEach(assistantDirector => {
      directorAssistantRow.appendChild(createMemberElement(assistantDirector, 'assistant'));
    });

    subRolesContainer.appendChild(directorAssistantRow);
  }

  members.forEach(member => {
    subRolesContainer.appendChild(createMemberElement(member));
  });

  roleSection.appendChild(subRolesContainer);

  return roleSection;
}

function displayOrganizationStructure(year, shouldAnimate = false) {
  const oldMemberPositions = shouldAnimate
    ? Array.from(chartContainer.querySelectorAll(".member")).map((member) => ({
      id: member.getAttribute("data-id"),
      element: member, // Store the member element
      rect: member.getBoundingClientRect(),
    }))
    : [];

  chartContainer.innerHTML = "";
  chartContainer.appendChild(yearSlider);

  const yearData = organizationDataJson.find((data) => data.year === year);

  if (yearData) {
    const presidentSection = createRoleSection('President', yearData.president);
    chartContainer.appendChild(presidentSection);

    const vicePresidentSection = createRoleSection('Vice President', yearData.vicePresident);
    const accountantSection = createRoleSection('Accountant', yearData.accountant);
    const vpAccountantContainer = createDivWithClass('vp-accountant-container');

    vpAccountantContainer.appendChild(vicePresidentSection);
    vpAccountantContainer.appendChild(accountantSection);
    chartContainer.appendChild(vpAccountantContainer);

    const sectionsContainer = createDivWithClass('sections-container');
    chartContainer.appendChild(sectionsContainer);

    yearData.sections.forEach(section => {
      const sectionSection = createRoleSection(section.name, section.director, section.assistantDirectors, section.members);
      sectionsContainer.appendChild(sectionSection);
    });

    const committeesContainer = createDivWithClass('committees-container');
    chartContainer.appendChild(committeesContainer);

    yearData.committees.forEach(committee => {
      const committeeSection = createRoleSection(committee.name, committee.director, committee.assistantDirectors, committee.members);
      committeesContainer.appendChild(committeeSection);
    });
  }

  if (shouldAnimate) {
    animateMemberPositions(oldMemberPositions);
  }
}

function createDivWithClass(className) {
  const divElement = document.createElement('div');
  divElement.classList.add(className);
  return divElement;
}

function animateMemberPositions(oldMemberPositions) {
  const newMembers = Array.from(chartContainer.querySelectorAll(".member"));

  newMembers.forEach((newMember) => {
    const id = newMember.getAttribute("data-id");
    const oldMember = oldMemberPositions.find((member) => member.id === id);

    if (oldMember) {
      const newMemberRect = newMember.getBoundingClientRect();
      const dx = oldMember.rect.left - newMemberRect.left;
      const dy = oldMember.rect.top - newMemberRect.top;

      newMember.style.transform = `translate(${dx}px, ${dy}px)`;
      newMember.style.transition = "none";

      setTimeout(() => {
        requestAnimationFrame(() => {
          newMember.style.transition = "transform 0.5s, opacity 0.5s";
          newMember.style.transform = "";
        });
      }, 20);
    } else {
      newMember.style.opacity = 0;
      setTimeout(() => {
        requestAnimationFrame(() => {
          newMember.style.transition = "opacity 0.5s";
          newMember.style.opacity = 1;
        });
      }, 20);
    }
  });

  oldMemberPositions.forEach((oldMember) => {
    const id = oldMember.id;
    const newMember = newMembers.find((member) => member.getAttribute("data-id") === id);

    if (!newMember) {
      const fadeOutMember = oldMember.element.cloneNode(true);
      fadeOutMember.style.position = "fixed";
      fadeOutMember.style.left = `${oldMember.rect.left}px`;
      fadeOutMember.style.top = `${oldMember.rect.top}px`;
      fadeOutMember.style.opacity = 1;
      document.body.appendChild(fadeOutMember);

      setTimeout(() => {
        requestAnimationFrame(() => {
          fadeOutMember.style.transition = "opacity 0.5s";
          fadeOutMember.style.opacity = 0;
        });
      }, 20);

      setTimeout(() => {
        document.body.removeChild(fadeOutMember);
      }, 520);
    }
  });
}

yearSlider.addEventListener('input', () => {
  displayOrganizationStructure(parseInt(yearSlider.value), true);
});

displayOrganizationStructure(parseInt(yearSlider.value));