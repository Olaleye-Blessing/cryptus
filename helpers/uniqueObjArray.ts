interface ArryObj {
  [key: string | number]: any;
}

export const uniqueObjArray = <D extends {}>(arr: D[], id: keyof D) =>
  arr.filter(
    (item, index, array) => array.findIndex((t) => t[id] === item[id]) === index
  );
