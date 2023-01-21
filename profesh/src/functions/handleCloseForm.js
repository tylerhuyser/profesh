import toggleMenu from './toggleMenu.js'

export default function handleCloseForm(setFormMode, state, setState, setActiveJob) {
  setFormMode("")
  toggleMenu(state, setState);
  setActiveJob(null)
}