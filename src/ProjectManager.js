import Project from "./Project";

const ProjectManager = (function () {
  let projects = [];

  function initialize() {
    let project = Project("Default");
    addProject(project);
  }

  function addProject(project) {
    projects.push(project);
  }

  function getProject(name) {
    return projects.find(p => p.name === name);
  }

  return Object.assign({}, { initialize, addProject, getProject });
})();

export default ProjectManager;
