import { createMemberElement } from './members.js';

export function createRoleSection(name, director, assistantDirectors = [], members = []) {
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
