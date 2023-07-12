/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5adb82cd43f6f7525400142f */

export const updateLight = (current) =>
  ({
    green: 'yellow',
    yellow: 'red',
    red: 'green',
  }[current]);
