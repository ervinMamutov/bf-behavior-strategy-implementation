/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5ad9bc6a0be029ab0800071b */

export function updateLight(current) {
  return current === 'yellow'
    ? 'red'
    : current === 'green'
    ? 'yellow'
    : 'green';
}
