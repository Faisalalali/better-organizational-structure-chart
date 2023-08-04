import { getOrganizationDataAsJson } from './data.js';
import { createRoleSection } from './roles.js';
import { createDivWithClass, animateMemberPositions } from './helpers.js';

const chartContainer = document.getElementById('chart-container');
const yearSlider = document.getElementById('year-slider');
const organizationDataJson = getOrganizationDataAsJson();

console.log(organizationDataJson);

function displayOrganizationStructure(year, shouldAnimate = false) {
  const oldMemberPositions = shouldAnimate
    ? Array.from(chartContainer.querySelectorAll('.member')).map(member => ({
        id: member.getAttribute('data-id'),
        element: member, // Store the member element
        rect: member.getBoundingClientRect(),
      }))
    : [];

  chartContainer.innerHTML = '';
  chartContainer.appendChild(yearSlider);

  const yearData = organizationDataJson.find(data => data.year === year);

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
      const sectionSection = createRoleSection(
        section.name,
        section.director,
        section.assistantDirectors,
        section.members
      );
      sectionsContainer.appendChild(sectionSection);
    });

    const committeesContainer = createDivWithClass('committees-container');
    chartContainer.appendChild(committeesContainer);

    yearData.committees.forEach(committee => {
      const committeeSection = createRoleSection(
        committee.name,
        committee.director,
        committee.assistantDirectors,
        committee.members
      );
      committeesContainer.appendChild(committeeSection);
    });
  }

  if (shouldAnimate) {
    animateMemberPositions(oldMemberPositions, chartContainer);
  }
}

yearSlider.addEventListener('input', () => {
  displayOrganizationStructure(parseInt(yearSlider.value), true);
});

displayOrganizationStructure(parseInt(yearSlider.value));
