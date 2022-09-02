import { ProjectController, ItemController } from "./controllers";

const ProjectView = (function () {
  function display(project, collapsed = true) {
    let main = document.querySelector('#projects');

    // clear out the project view first
    let temp = main.querySelector(`.project[data-project=${project.name}]`);
    if (temp) {
      main.removeChild(temp);
    }

    let projectView = document.createElement('div');
    projectView.classList.add('project');
    projectView.setAttribute('data-project', project.name);
    let title = document.createElement('h1');
    title.textContent = project.name;
    title.addEventListener('click', () => {
      display(project, !collapsed);
    });

    projectView.appendChild(title);

    if (!collapsed) {
      let items = project.getItems();
      for (let i = 0; i < items.length; i++) {
        let item = project.getItem(i);
        ItemView.display(item, i, project.name, projectView);
      }
    }

    let btn = document.createElement('btn');
    btn.textContent = 'Add new item';
    btn.id = 'add-new-item';
    btn.addEventListener('click', ProjectController.showItemForm);
    projectView.append(btn);

    main.appendChild(projectView);
  }

  const addItemBtn = document.querySelector('#add-item');
  addItemBtn.addEventListener('click', ProjectController.addItem);

  const addProjectBtn = document.querySelector('#add-project');
  addProjectBtn.addEventListener('click', ProjectController.addProject);

  const newProjectBtn = document.querySelector('#add-new-project');
  newProjectBtn.addEventListener('click', ProjectController.showProjectForm);

  return Object.assign({}, { display });
})();

const ItemView = (function () {
  function expandItem(item, element) {
    const main = document.createElement('div');
    main.classList.add('expanded-item');

    const div = document.createElement('div');

    let desc = document.createElement('input');
    desc.value = item.desc;
    desc.readOnly = true;
    desc.name = 'desc';
    let date = document.createElement('input');
    date.setAttribute('type', 'date');
    date.value = item.date;
    date.readOnly = true;
    date.name = 'date';

    div.appendChild(desc);
    div.appendChild(date);

    main.appendChild(div);

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.id = 'edit';
    editBtn.addEventListener('click', () => {
      ItemController.editItem(element);
    });
    main.appendChild(editBtn);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
      ProjectController.removeItem(element);
    });
    main.appendChild(removeBtn);

    element.appendChild(main);
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

    if (item.priority == 1) {
      view.classList.add('item-priority-1');
    } else if (item.priority == 2) {
      view.classList.add('item-priority-2');
    } else {
      view.classList.add('item-priority-3');
    }

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
