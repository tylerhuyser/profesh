export default function handleInputChange(e, setInputValues) {
  console.log(e.target)
  let { name, value } = e.target
  setInputValues(prevState => ({
    ...prevState,
    fields: {
      ...prevState.fields,
      [name]: value
    }
  }))
}