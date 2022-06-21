import TodoItem from "./TodoItem";
import Project from './Project';
import { ProjectView, ItemView } from "./views";

let project = Project();
let item = TodoItem("something");

project.addItem(item);
project.addItem(TodoItem('idk', 'stuff'));

ProjectView.display(project);

