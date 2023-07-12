/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5e249517427162000136e463 */

export function updateLight(current) {
  const lights = ['green', 'yellow', 'red'];
  const newLightIndex = lights.indexOf(current) + 1;
  return newLightIndex < 3 ? lights[newLightIndex] : lights[0];
}
