import TodoItem from "./TodoItem";
import ProjectManager from "./ProjectManager";
import { ProjectView } from "./views";

const ProjectController = (function () {

  function showItemForm() {
    document.querySelector('#item-form').classList.toggle('hidden');
  }

  function addItem() {
    let title = document.querySelector('#title').value;
    let desc = document.querySelector('#desc').value;
    let date = document.querySelector('#date').value;
    let priority = document.querySelector('#priority').value;

    let item = TodoItem(title, desc, date, priority);
    //TODO don't always add to default
    let project = ProjectManager.getProject("Default");
    project.addItem(item);
    ProjectView.display(project);
  }

  function removeItem(itemView) {
    let projectName = itemView.getAttribute('data-project');
    let index = itemView.getAttribute('data-index');
    let project = ProjectManager.getProject(projectName);

    project.removeItem(index);
    ProjectView.display(project);
  }

  return Object.assign({}, { showItemForm, addItem, removeItem });
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
