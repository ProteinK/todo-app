import { ProjectController } from "./controllers";

const ProjectView = (function () {
  function display(project) {
    let main = document.querySelector('#main-project');
    main.innerHTML = '';
    let items = project.getItems();
    for (const item of items) {
      ItemView.display(item);
    }

    const btn = document.createElement('button');
    btn.textContent = 'Add new item';
    btn.addEventListener('click', ProjectController.showItemForm);

    main.appendChild(btn);
  }

  const addItemBtn = document.querySelector('#add-item');
  addItemBtn.addEventListener('click', ProjectController.addItem);

  return Object.assign({}, { display });
})();

const ItemView = (function () {
  function display(item) {
    let test = document.createElement('p');
    test.textContent = item.title;
    document.querySelector('#main-project').appendChild(test);
  }

  return Object.assign({}, { display });
})();

export { ProjectView, ItemView };
