export default function Project() {
  let items = [];

  const proto = {
    addItem(item) {
      items.push(item);
    },

    getItems() {
      return items;
    }
  };

  return Object.assign(Object.create(proto));
}
