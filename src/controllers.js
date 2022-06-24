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
    let project = ProjectManager.getProject("Default");
    project.addItem(item);
    ProjectView.display(project);
  }

  return Object.assign({}, { showItemForm, addItem });
})();

export { ProjectController };
