/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5ad7addd0646981db800307b */

export function updateLight(current) {
  if (current === 'green') {
    return 'yellow';
  }
  if (current === 'yellow') {
    return 'red';
  }
  if (current === 'red') {
    return 'green';
  }
}
