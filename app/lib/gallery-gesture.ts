export type GalleryGestureIntent = "pending" | "horizontal" | "vertical";

const INTENT_THRESHOLD = 8;
const HORIZONTAL_DOMINANCE = 1.25;

export function getGalleryGestureIntent(deltaX: number, deltaY: number): GalleryGestureIntent {
  const distanceX = Math.abs(deltaX);
  const distanceY = Math.abs(deltaY);

  if (Math.max(distanceX, distanceY) < INTENT_THRESHOLD) return "pending";
  if (distanceX > distanceY * HORIZONTAL_DOMINANCE) return "horizontal";
  if (distanceY >= distanceX) return "vertical";

  return "pending";
}
