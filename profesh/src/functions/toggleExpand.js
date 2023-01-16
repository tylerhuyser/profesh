export default function toggleExpand(id, expanded, setExpanded) {

  let opportunitiesContainer = document.getElementById(`${id}`)
  opportunitiesContainer.classList.toggle('expanded')
  console.log(expanded)

  if (!expanded.includes(id)) {
    setExpanded(prevExpand => {
      return [...prevExpand, id]
    });
    console.log(expanded)
  };
  if (expanded.includes(id)) {
    setExpanded(prevExpand => {
      console.log(prevExpand);
      return (prevExpand.filter(e => e !== id))
    })
    console.log(expanded)
  };
}