export default function toggleExpand(id, expanded, setExpanded) {

  // OLD TOGGLE EXPAND METHOD

  // let jobCard = document.getElementById(`${id}`)

  // if (!expanded.includes(id)) {
  //   jobCard.classList.add('expanded')
  //   setExpanded(prevExpand => {
  //     return [...prevExpand, id]
  //   });
  // };
  // if (expanded.includes(id)) {
  //   jobCard.classList.remove('expanded')
  //   setExpanded(prevExpand => {
  //     console.log(prevExpand);
  //     return (prevExpand.filter(e => e !== id))
  //   })
  // };

  // NEW TOGGLE EXPAND METHOD

  let newJobCard = document.getElementById(`${id}`)
  console.log(expanded[0])
  let oldJobCard = document.getElementById(`${expanded[0]}`)

  if (!expanded.includes(id) && oldJobCard) {
    oldJobCard.classList.remove('expanded')
    newJobCard.classList.add('expanded')
    setExpanded([id])
  } 
  if (!expanded.includes(id)) {
    newJobCard.classList.add('expanded')
    setExpanded([id])
  } 
  if (expanded.includes(id)) {
    oldJobCard.classList.remove('expanded')
    setExpanded([])
  }
}