const ProjectView = (function () {
  function display(project) {
    let items = project.getItems();
    for (const item of items) {
      ItemView.display(item);
    }
  }

  return Object.assign({}, { display });
})();

const ItemView = (function () {
  function display(item) {
    let test = document.createElement('p');
    test.textContent = 'test ' + item.title;
    document.querySelector('div').appendChild(test);
  }

  return Object.assign({}, { display });
})();

export { ProjectView, ItemView };
