export default function toggleExpand(id, expanded, setExpanded) {

  let jobCard = document.getElementById(`${id}`)

  if (!expanded.includes(id)) {
    jobCard.classList.add('expanded')
    setExpanded(prevExpand => {
      return [...prevExpand, id]
    });
  };
  if (expanded.includes(id)) {
    jobCard.classList.remove('expanded')
    setExpanded(prevExpand => {
      console.log(prevExpand);
      return (prevExpand.filter(e => e !== id))
    })
  };
}