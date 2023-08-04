export function createDivWithClass(className) {
  const divElement = document.createElement('div');
  divElement.classList.add(className);
  return divElement;
}

export function animateMemberPositions(oldMemberPositions, chartContainer) {
  const newMembers = Array.from(chartContainer.querySelectorAll('.member'));

  newMembers.forEach(newMember => {
    const id = newMember.getAttribute('data-id');
    const oldMember = oldMemberPositions.find(member => member.id === id);

    if (oldMember) {
      const newMemberRect = newMember.getBoundingClientRect();
      const dx = oldMember.rect.left - newMemberRect.left;
      const dy = oldMember.rect.top - newMemberRect.top;

      newMember.style.transform = `translate(${dx}px, ${dy}px)`;
      newMember.style.transition = 'none';

      setTimeout(() => {
        requestAnimationFrame(() => {
          newMember.style.transition = 'transform 0.5s, opacity 0.5s';
          newMember.style.transform = '';
        });
      }, 20);
    } else {
      newMember.style.opacity = 0;
      setTimeout(() => {
        requestAnimationFrame(() => {
          newMember.style.transition = 'opacity 0.5s';
          newMember.style.opacity = 1;
        });
      }, 20);
    }
  });

  oldMemberPositions.forEach(oldMember => {
    const id = oldMember.id;
    const newMember = newMembers.find(member => member.getAttribute('data-id') === id);

    if (!newMember) {
      const fadeOutMember = oldMember.element.cloneNode(true);
      fadeOutMember.style.position = 'fixed';
      fadeOutMember.style.left = `${oldMember.rect.left}px`;
      fadeOutMember.style.top = `${oldMember.rect.top}px`;
      fadeOutMember.style.opacity = 1;
      document.body.appendChild(fadeOutMember);

      setTimeout(() => {
        requestAnimationFrame(() => {
          fadeOutMember.style.transition = 'opacity 0.5s';
          fadeOutMember.style.opacity = 0;
        });
      }, 20);

      setTimeout(() => {
        document.body.removeChild(fadeOutMember);
      }, 520);
    }
  });
}
