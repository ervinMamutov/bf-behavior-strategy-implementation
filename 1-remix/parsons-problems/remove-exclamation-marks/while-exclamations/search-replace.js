/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/5e5ed30f4013f00001a33813 */

export function removeExclamationMarks(s) {
  while (s.search('!') >= 0) {
    s = s.replace('!', '');
  }
  return s;
}
