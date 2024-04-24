import { Map } from 'immutable';
import { List } from 'immutable';

export function concatElement(page1, page2) {
  const List1 = List(page1);
  const List2 = List(page2);

  return List1.concat(List2);
}

export function mergeElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);

  return map1.merge(map2);
}
