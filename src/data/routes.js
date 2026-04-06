// Hardcoded route waypoints for The Helix (Building Z)
// Coordinates are relative to the SVG floor plan viewBox
// Will be mapped to the IndoorMap SVG during Navigation screen build

export const helixRoutes = {
  // Route from Collins Avenue entrance to Mahony Hall
  'mahony-hall': {
    locationId: 'mahony-hall',
    startLabel: 'Collins Avenue Entrance',
    endLabel: 'Mahony Hall',
    totalTime: 3,
    totalDistance: '180m',
    steps: [
      { instruction: 'Enter through the main entrance', detail: 'Collins Avenue, North Entrance', icon: 'enter' },
      { instruction: 'Walk straight ahead', detail: 'through the main foyer for 30m', icon: 'straight' },
      { instruction: 'Pass the Box Office on your left', detail: 'continue along the foyer corridor', icon: 'straight' },
      { instruction: 'Turn left', detail: 'at the Helix staircase landmark', icon: 'left' },
      { instruction: 'Mahony Hall is ahead', detail: 'entrance doors on your right', icon: 'arrive' },
    ],
    // SVG waypoint coordinates — to be set during map build
    waypoints: [
      { x: 195, y: 680 },
      { x: 195, y: 560 },
      { x: 195, y: 460 },
      { x: 130, y: 460 },
      { x: 130, y: 340 },
    ],
  },

  // Route from Collins Avenue entrance to Helix Theatre
  'helix-theatre': {
    locationId: 'helix-theatre',
    startLabel: 'Collins Avenue Entrance',
    endLabel: 'Helix Theatre',
    totalTime: 4,
    totalDistance: '210m',
    steps: [
      { instruction: 'Enter through the main entrance', detail: 'Collins Avenue, North Entrance', icon: 'enter' },
      { instruction: 'Walk straight ahead', detail: 'through the main foyer for 30m', icon: 'straight' },
      { instruction: 'Turn right', detail: 'at the foyer junction', icon: 'right' },
      { instruction: 'Continue along East Corridor', detail: 'for 60m', icon: 'straight' },
      { instruction: 'Helix Theatre entrance on your left', detail: '', icon: 'arrive' },
    ],
    waypoints: [
      { x: 195, y: 680 },
      { x: 195, y: 560 },
      { x: 195, y: 460 },
      { x: 260, y: 460 },
      { x: 260, y: 340 },
    ],
  },

  // Route to The Space (Level 1)
  'the-space': {
    locationId: 'the-space',
    startLabel: 'Collins Avenue Entrance',
    endLabel: 'The Space',
    totalTime: 5,
    totalDistance: '240m',
    steps: [
      { instruction: 'Enter through the main entrance', detail: 'Collins Avenue, North Entrance', icon: 'enter' },
      { instruction: 'Walk straight ahead', detail: 'through the main foyer for 30m', icon: 'straight' },
      { instruction: 'Take the Helix staircase', detail: 'the signature spiral staircase ahead', icon: 'stairs' },
      { instruction: 'Continue on Level 1', detail: 'follow signs for The Space', icon: 'straight' },
      { instruction: 'The Space entrance on your right', detail: 'Studio Theatre — Level 1', icon: 'arrive' },
    ],
    waypoints: [
      { x: 195, y: 680 },
      { x: 195, y: 560 },
      { x: 195, y: 460 },
      { x: 195, y: 360 },
      { x: 195, y: 260 },
    ],
  },

  // Route to Helix Café Bar
  'helix-cafe': {
    locationId: 'helix-cafe',
    startLabel: 'Collins Avenue Entrance',
    endLabel: 'Helix Café Bar',
    totalTime: 2,
    totalDistance: '90m',
    steps: [
      { instruction: 'Enter through the main entrance', detail: 'Collins Avenue, North Entrance', icon: 'enter' },
      { instruction: 'Walk straight ahead', detail: 'through the main foyer for 30m', icon: 'straight' },
      { instruction: 'Helix Café Bar is on your right', detail: 'Ground floor, main foyer area', icon: 'arrive' },
    ],
    waypoints: [
      { x: 195, y: 680 },
      { x: 195, y: 560 },
      { x: 250, y: 520 },
    ],
  },

  // Route to Box Office
  'box-office': {
    locationId: 'box-office',
    startLabel: 'Collins Avenue Entrance',
    endLabel: 'Box Office',
    totalTime: 2,
    totalDistance: '80m',
    steps: [
      { instruction: 'Enter through the main entrance', detail: 'Collins Avenue, North Entrance', icon: 'enter' },
      { instruction: 'Box Office is immediately on your left', detail: 'Ground floor, main entrance foyer', icon: 'arrive' },
    ],
    waypoints: [
      { x: 195, y: 680 },
      { x: 140, y: 600 },
    ],
  },
}
