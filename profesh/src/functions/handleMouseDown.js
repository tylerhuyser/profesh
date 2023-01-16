import toggleMenu from './toggleMenu.js'

export default function handleMouseDown(e, state, setState, eventType) {
  toggleMenu(state, setState);
  console.log(`${eventType} clicked`);
  e.stopPropagation();
}