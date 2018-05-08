export default function getElementFromTemplate(string) {
  const fragment = document.createElement(`template`);
  fragment.innerHTML = string;
  return fragment.content;
}
