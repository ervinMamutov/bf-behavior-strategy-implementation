/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5ae5f73d2df0a959bf00141f */

/* this exercise has 2 distractors */

export function updateLight(current) {
  if (current === 'green') {
    return 'yellow';
  } else if (current === 'yellow') {
    return 'red';
  }
  return 'green';
}
