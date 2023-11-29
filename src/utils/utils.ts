export function toDictionaryById(list: any[]): { [key: string]: any } {
  return list.reduce((dictionary, item) => {
    const { id, ...rest } = item;

    dictionary[id] = { id, ...rest };

    return dictionary;
  }, {});
}
