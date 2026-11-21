// 초 -> 00:00 형식으로 바꾸기
export function formatTime(sec) {
  let min = Math.floor(sec / 60);
  let s = sec % 60;

  if (min < 10) min = '0' + min;
  if (s < 10) s = '0' + s;

  return min + ':' + s;
}