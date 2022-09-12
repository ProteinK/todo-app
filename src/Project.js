export default function Project(name) {
  let items = [];
  let collapsed = true;

  const proto = {
    addItem(item) {
      items.push(item);
    },

    getItems() {
      return items;
    },

    getItem(index) {
      return items[index];
    },

    removeItem(index) {
      items.splice(index, 1);
    }
  };

  return Object.assign(Object.create(proto), { name, collapsed });
}
