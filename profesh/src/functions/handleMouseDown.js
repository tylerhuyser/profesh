import toggleMenu from './toggleMenu.js'

export default function handleMouseDown(formMode, setFormMode, state, setState, job, setActiveJob) {
  setFormMode(formMode)
  toggleMenu(state, setState);
  if (job) {
    setActiveJob(job)
  }
}