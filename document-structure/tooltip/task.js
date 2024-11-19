const tooltip = Array.from(document.querySelectorAll('.has-tooltip'))

tooltip.forEach((item, i) => {
  const title = item.getAttribute('title')
  item.insertAdjacentHTML('afterend', `<div class="tooltip">${title}</div>`)

const arrayDiv = Array.from(document.querySelectorAll('.tooltip'))
  tooltip[i].addEventListener('click', (e) => {
    e.preventDefault();
    let coords = item.getBoundingClientRect()
    let position = tooltip[i].dataset.position

    tooltip[i].nextSibling.style.left = coords.left + "px";
    tooltip[i].nextSibling.style.top = coords.bottom + "px";
    console.log(tooltip[i].nextSibling)
    tooltip[i].nextSibling.classList.toggle('tooltip_active')

    for (let j = 0; j < tooltip.length; j++) {
      if (tooltip[j].nextSibling.className === 'tooltip tooltip_active') {
        tooltip[j].nextSibling.classList.remove('tooltip_active')
        tooltip[i].nextSibling.classList.add('tooltip_active')
      }
    }
  })
})