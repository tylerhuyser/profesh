import toggleMenu from './toggleMenu.js'

export default function handleMouseDown(state, setState, eventType) {
  toggleMenu(state, setState);
  console.log(`${eventType} clicked`);
}