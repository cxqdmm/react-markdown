//  0 < n < 24;

import { IRange } from './interface';

function formatTime(n: number) {
  const s = '00' + n;
  return s.slice(s.length - 2);
}

export function transformNum2Time(n: number) {
  const hour = Math.floor(n / 60);
  const minutes = n % 60;

  return `${formatTime(hour)}:${formatTime(minutes)}:00`;
}

// export function timeStrToNum(n: string) {
//   const [s1, s2, s3] = n.split(':');
//   const n1 = parseInt(s1);
//   const n2 = parseInt(s2) / 60;
//   const n3 = parseInt(s3) / 600;

//   return n1 + n2 + n3s
// }

export function transformRange2Time(range: IRange) {
  return `${transformNum2Time(range[0])}~${transformNum2Time(range[1])}`;
}
