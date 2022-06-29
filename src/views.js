import { ProjectController } from "./controllers";

const ProjectView = (function () {
  function display(project) {
    let main = document.querySelector('#projects');

    // clear out the project view first
    let temp = main.querySelector(`.project[data-project=${project.name}]`);
    if (temp) {
      main.removeChild(temp);
    }

    let projectView = document.createElement('div');
    projectView.classList.add('project');
    projectView.setAttribute('data-project', project.name);

    let items = project.getItems();
    for (let i = 0; i < items.length; i++) {
      let item = project.getItem(i);
      ItemView.display(item, i, project.name, projectView);
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

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
      ProjectController.removeItem(element);
    });
    div.appendChild(removeBtn);

    element.appendChild(div);
  }

  function collapseItem(element) {
    let div = element.querySelector('.expanded-item');
    element.removeChild(div);
  }

  function display(item, index, projectName, projectView) {
    let view = document.createElement('div');
    view.setAttribute('data-index', index);
    view.setAttribute('data-project', projectName);
    let p = document.createElement('p');
    p.textContent = item.title;
    view.classList.add('todo-item');
    p.addEventListener('click', e => {
      if (view.querySelector('.expanded-item')) {
        collapseItem(view);
      } else {
        expandItem(item, view);
      }
    });
    view.appendChild(p);
    projectView.appendChild(view);
  }

  return Object.assign({}, { display });
})();

export { ProjectView, ItemView };
