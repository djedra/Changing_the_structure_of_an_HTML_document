const form = document.querySelector('form')
const tasksList = document.querySelector('.tasks__list')

form.addEventListener('submit', (e) => {
  e.preventDefault()



  const tasksInput = document.querySelector('.tasks__input')
  if(tasksInput.value) {

    const addTask = `<div class="task">
                            <div class="task__title">
                            ${tasksInput.value}
                            </div>
                            <a href="#" class="task__remove">×</a>
                            </div>`;

    tasksList.insertAdjacentHTML('beforeend', addTask)

    form.reset()


  }
})



tasksList.addEventListener('click', (e) => {
  if(event.target.className === 'task__remove')
    e.target.parentElement.remove();
})