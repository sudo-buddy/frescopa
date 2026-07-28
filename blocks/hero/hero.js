export default function decorate(block) {
  block.setAttribute('data-target-scope', 'hero-mbox');
  const buttonContainers = [...block.querySelectorAll('.button-container')];
  if (buttonContainers.length > 1) {
    const wrapper = document.createElement('p');
    wrapper.className = 'button-container';
    buttonContainers[0].replaceWith(wrapper);
    buttonContainers.forEach((p) => {
      wrapper.append(...p.childNodes);
      if (p !== buttonContainers[0]) p.remove();
    });
  }
}