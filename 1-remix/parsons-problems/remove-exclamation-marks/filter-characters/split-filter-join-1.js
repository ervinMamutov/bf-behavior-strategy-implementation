/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/58c58b7262f372bb330003a1 */

export function removeExclamationMarks(s) {
  var arr = s.split('');
  arr = arr.filter(function (e) {
    return e !== '!';
  });
  return arr.join('');
}
