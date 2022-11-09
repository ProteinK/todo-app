import Project from "./Project";
import TodoItem from "./TodoItem";

const ProjectManager = (function () {
  let projects = [];

  function initialize() {
    if (!localStorage.getItem('Default')) {
      let project = Project("Default");
      project.collapsed = false;
      addProject(project);
      localStorage.setItem('Default', JSON.stringify(project));
    } else {
      for (const key in localStorage) {
        let item = localStorage.getItem(key);
        if (item !== null) {
          let project = makeProjectFromStorage(item);
          if (project.name !== 'Default') {
            project.collapsed = true;
          }
          addProject(project);
        }
      }
    }
  }

  function makeProjectFromStorage(p) {
    p = JSON.parse(p);
    let project = Project(p.name);
    project.collapsed = p.collapsed;
    p.items.forEach(i => {
      let item = TodoItem(i.title, i.desc, i.date, i.priority);
      project.addItem(item);
    });
    return project;
  }

  function addProject(project) {
    projects.push(project);
  }

  function getProject(name) {
    return projects.find(p => p.name === name);
  }

  function getProjects() {
    return projects;
  }

  function removeProject(name) {
    let index = projects.findIndex(p => p.name === name);
    projects.splice(index, 1);
  }

  return Object.assign({}, { initialize, addProject, getProject, getProjects, removeProject });
})();

export default ProjectManager;
