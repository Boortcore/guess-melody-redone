export default function renderScreen(screenView) {
  const mainContainer = document.querySelector(`section.main`);
  mainContainer.innerHTML = ``;
  mainContainer.appendChild(screenView.element);
}
