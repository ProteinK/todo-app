import TodoItem from "./TodoItem";
import Project from "./Project";
import ProjectManager from "./ProjectManager";
import { ProjectView } from "./views";

const ProjectController = (function () {

  function showProjectForm() {
    document.querySelector('#project-form').classList.toggle('hidden');
  }

  function showItemForm() {
    let projects = ProjectManager.getProjects();
    const select = document.querySelector('#picked-project');
    select.innerHTML = '';

    for (const project of projects) {
      let option = document.createElement('option');
      option.value = project.name;
      option.textContent = project.name;
      if (option.value === 'Default') {
        option.selected = true;
      }
      select.appendChild(option);
    }

    document.querySelector('#item-form').classList.toggle('hidden');
  }

  function addProject() {
    let projectName = document.querySelector('#project-name').value;
    let project = Project(projectName);
    ProjectManager.addProject(project);
  }

  function addItem() {
    let title = document.querySelector('#title').value;
    let desc = document.querySelector('#desc').value;
    let date = document.querySelector('#date').value;
    let priority = document.querySelector('#priority').value;

    let item = TodoItem(title, desc, date, priority);

    let projectName = document.querySelector('#picked-project').value;
    let project = ProjectManager.getProject(projectName);
    project.addItem(item);
    if (projectName === 'Default') {
      ProjectView.display(project, false);
    }
    else {
      ProjectView.display(project);
    }
  }

  function removeItem(itemView) {
    let projectName = itemView.getAttribute('data-project');
    let index = itemView.getAttribute('data-index');
    let project = ProjectManager.getProject(projectName);

    project.removeItem(index);
    ProjectView.display(project);
  }

  return Object.assign({}, { showItemForm, addItem, removeItem, showProjectForm, addProject });
})();

const ItemController = (function () {

  function editItem(itemView) {
    let projectName = itemView.getAttribute('data-project');
    let index = itemView.getAttribute('data-index');
    let project = ProjectManager.getProject(projectName);

    let item = project.getItem(index);

    let inputs = itemView.querySelectorAll('input');
    let btn = itemView.querySelector('button#edit');

    // first click
    if (inputs[0].readOnly) {
      for (const input of inputs) {
        input.readOnly = false;
      }
      btn.textContent = 'Done';
    } else {
      // finished editing
      for (const input of inputs) {
        input.readOnly = true;
        item[input.name] = input.value;
      }
      btn.textContent = 'Edit';
    }
  }

  return Object.assign({}, { editItem });
})();

export { ProjectController, ItemController };
