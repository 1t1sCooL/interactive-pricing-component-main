export const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);

export const progressPercent = (value: number, min: number, max: number): number =>
  max === min ? 0 : ((clamp(value, min, max) - min) / (max - min)) * 100;
