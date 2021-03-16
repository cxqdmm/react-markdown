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

export function transformRange2Time(range?: IRange) {
  if (!range) return '';
  return `${transformNum2Time(range[0])}~${transformNum2Time(range[1])}`;
}

// 合并区间
export function mergeRanges(ranges: IRange[]): IRange[] {
  if (!ranges || !ranges.length) return [];
  ranges.sort((a, b) => a[0] - b[0]);
  let merged: IRange[] = [[...ranges[0]]];
  for (let i = 1; i < ranges.length; i++) {
    if (merged[merged.length - 1][1] >= ranges[i][0]) {
      merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], ranges[i][1]);
    } else {
      merged.push([...ranges[i]]);
    }
  }
  return merged;
}

// 计算区间交集
export function intersect(r1: IRange, r2: IRange): IRange | undefined {
  const len1 = r1[1] - r1[0] + (r2[1] - r2[0]);
  const len2 = Math.max(r1[1], r2[1]) - Math.min(r1[0], r2[0]);
  if (len2 < len1) {
    return [Math.max(r1[0], r2[0]), Math.min(r1[1], r2[1])];
  }
  return undefined;
}
