import toggleMenu from './toggleMenu.js'

export default function handleMouseDown(formMode, setFormMode, state, setState) {
  setFormMode(formMode)
  toggleMenu(state, setState);
}