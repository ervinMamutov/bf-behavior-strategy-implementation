/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/6074247d1252420001d90310 */

export function updateLight(current) {
  let lights = ['green', 'yellow', 'red'];
  return lights[lights.indexOf(current) + 1] || 'green';
}

// console.log(updateLight('green'));
