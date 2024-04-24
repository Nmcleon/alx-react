const { List } = require('immutable');

function getListObject(array) {
  return List(array);
}

function addElementToList(list, element) {
  return list.push(element);
}

export { getListObject, addElementToList };
