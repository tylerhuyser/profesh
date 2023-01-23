import toggleMenu from './toggleMenu.js'

export default function handleOpenForm(formMode, setFormMode, state, setState, job, setActiveJob) {
  setFormMode(formMode)
  toggleMenu(state, setState);
  if (job) {
    setActiveJob(job)
  }
}