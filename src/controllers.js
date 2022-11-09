import TodoItem from "./TodoItem";
import Project from "./Project";
import ProjectManager from "./ProjectManager";
import { MainView } from "./views";

const ProjectController = (function () {

  function submitItemForm(e) {
    if (e.keyCode === 13) {
      addItem();
    }
  }

  function submitProjectForm(e) {
    if (e.keyCode === 13) {
      addProject();
    }
  }

  function showProjectForm() {
    const projectForm = document.querySelector('#project-form');
    let isHidden = projectForm.classList.toggle('hidden');
    if (!isHidden) {
      projectForm.querySelector('input:first-of-type').focus();
    }
  }

  function showItemForm() {
    const itemForm = document.querySelector('#item-form');
    let isHidden = itemForm.classList.toggle('hidden');
    itemForm.setAttribute('data-project', this.parentElement.getAttribute('data-project'));
    if (!isHidden) {
      itemForm.querySelector('input:first-of-type').focus();
    }
  }

  function addProject() {
    const projectForm = document.querySelector('#project-form');
    let projectName = projectForm.querySelector('#project-name').value;
    let project = Project(projectName);
    localStorage.setItem(project.name, JSON.stringify(project));
    ProjectManager.addProject(project);

    projectForm.classList.toggle('hidden');
    MainView.display();
  }

  function removeProject(project, projectView) {
    localStorage.removeItem(project.name);
    ProjectManager.removeProject(project.name);
    let main = document.querySelector('#projects');
    main.removeChild(projectView);
    MainView.display();
  }

  function addItem() {
    const itemForm = document.querySelector('#item-form');
    let title = itemForm.querySelector('#title').value;
    let desc = itemForm.querySelector('#desc').value;
    let date = itemForm.querySelector('#date').value;
    let priority = itemForm.querySelector('#priority').value;

    let item = TodoItem(title, desc, date, priority);

    let projectName = itemForm.getAttribute('data-project');
    let project = ProjectManager.getProject(projectName);
    project.addItem(item);
    localStorage.setItem(projectName, JSON.stringify(project));

    itemForm.classList.toggle('hidden');
    MainView.display();
  }

  function removeItem(itemView) {
    let projectName = itemView.getAttribute('data-project');
    let index = itemView.getAttribute('data-index');
    let project = ProjectManager.getProject(projectName);

    project.removeItem(index);
    localStorage.setItem(project.name, JSON.stringify(project));
    MainView.display();
  }

  return Object.assign({}, {
    showItemForm, addItem, removeItem,
    showProjectForm, addProject, submitItemForm, submitProjectForm,
    removeProject
  });
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

      localStorage.setItem(project.name, JSON.stringify(project));
    }
  }

  return Object.assign({}, { editItem });
})();

export { ProjectController, ItemController };
