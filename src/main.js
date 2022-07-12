import { ProjectView } from "./views";
import ProjectManager from "./ProjectManager";

ProjectManager.initialize();

ProjectView.display(ProjectManager.getProject("Default"), false);

