export function createMemberElement(member, role = 'member') {
  const memberElement = document.createElement('div');
  memberElement.classList.add('member', role);
  memberElement.setAttribute('data-id', member.id);

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
