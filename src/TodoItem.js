export default function TodoItem(title, desc, date, priority) {
  const proto = {
    test() {
      console.log(this.title);
    }
  };

  return Object.assign(Object.create(proto), { title, desc, date, priority });
}
