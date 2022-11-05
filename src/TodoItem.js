export default function TodoItem(title, desc, date, priority) {
  return Object.assign({}, { title, desc, date, priority });
}
