import { ProjectController } from "./controllers";

const ProjectView = (function () {
  function display(project) {
    let main = document.querySelector('#projects');
    main.innerHTML = '';
    let projectView = document.createElement('div');
    projectView.classList.add('project');

    let items = project.getItems();
    for (const item of items) {
      ItemView.display(item, projectView);
    }

    main.appendChild(projectView);
  }

  const addItemBtn = document.querySelector('#add-item');
  addItemBtn.addEventListener('click', ProjectController.addItem);

  const btn = document.querySelector('#add-new-item');
  btn.addEventListener('click', ProjectController.showItemForm);

  return Object.assign({}, { display });
})();

const ItemView = (function () {
  function expandItem(item, element) {
    const div = document.createElement('div');
    div.classList.add('expanded-item');

    const ul = document.createElement('ul');

    let desc = document.createElement('li');
    desc.textContent = item.desc;
    let date = document.createElement('li');
    date.textContent = item.date;

    ul.appendChild(desc);
    ul.appendChild(date);

    div.appendChild(ul);
    element.appendChild(div);
  }

  function collapseItem(element) {
    let div = element.querySelector('.expanded-item');
    element.removeChild(div);
  }

  function display(item, projectView) {
    let view = document.createElement('p');
    view.textContent = item.title;
    view.classList.add('todo-item');
    view.addEventListener('click', e => {
      if (e.target.querySelector('.expanded-item')) {
        collapseItem(e.target);
      } else {
        expandItem(item, e.target);
      }
    });
    projectView.appendChild(view);
  }

  return Object.assign({}, { display });
})();

export { ProjectView, ItemView };
