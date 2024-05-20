export function flatWithChildren<T extends { children?: T[] }>(data: T[]) {
  const result: T[] = [];

  const recall = (data: T[]) => {
    data.forEach((item) => {
      result.push(item);
      if (item.children) {
        recall(item.children);
      }
    });
  };

  recall(data);
  return result;
}
