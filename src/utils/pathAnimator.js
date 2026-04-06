// Simulates user movement along a fixed set of waypoints
// Used by NavigationScreen to animate the user marker along the route

/**
 * Returns a position along the route at a given progress value (0–1)
 * Interpolates linearly between waypoints
 */
export function getPositionAtProgress(waypoints, progress) {
  if (!waypoints || waypoints.length < 2) return waypoints?.[0] ?? { x: 0, y: 0 }

  const totalSegments = waypoints.length - 1
  const scaledProgress = progress * totalSegments
  const segmentIndex = Math.min(Math.floor(scaledProgress), totalSegments - 1)
  const segmentProgress = scaledProgress - segmentIndex

  const from = waypoints[segmentIndex]
  const to = waypoints[segmentIndex + 1]

  return {
    x: from.x + (to.x - from.x) * segmentProgress,
    y: from.y + (to.y - from.y) * segmentProgress,
  }
}

/**
 * Returns the index of the current step based on progress through the route
 */
export function getCurrentStepIndex(steps, progress) {
  if (!steps || steps.length === 0) return 0
  const index = Math.floor(progress * steps.length)
  return Math.min(index, steps.length - 1)
}
