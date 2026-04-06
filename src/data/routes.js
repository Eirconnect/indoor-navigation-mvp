// Hardcoded route waypoints for The Helix (Building Z)
// All SVG coordinates match the HelixFloorPlan viewBox="0 0 390 440"
// Building layout (top = north/stage end, bottom = Collins Avenue entrance):
//   y=12–212:  Mahony Hall (left) + Helix Theatre (right)
//   y=220–272: Main east-west corridor (Helix Staircase at cx=195, cy=246)
//   y=280–380: Box Office (left) + Main Foyer (centre) + Café Bar (right)
//   y=384–428: Entrance vestibule (Collins Avenue)

export const helixRoutes = {

  'mahony-hall': {
    locationId: 'mahony-hall',
    startLabel: 'Collins Avenue Entrance',
    endLabel: 'Mahony Hall',
    totalTime: 3,
    totalDistance: '180m',
    floor: 'Ground Floor',
    steps: [
      { instruction: 'Enter through the main entrance', detail: 'Collins Avenue, North Entrance', icon: 'enter' },
      { instruction: 'Walk straight through the foyer', detail: 'continue ahead for 30m', icon: 'straight' },
      { instruction: 'Pass the Helix Staircase on your right', detail: 'the signature spiral staircase', icon: 'straight' },
      { instruction: 'Turn left', detail: 'into the west corridor', icon: 'left' },
      { instruction: 'Mahony Hall entrance on your right', detail: 'doors marked Mahony Hall', icon: 'arrive' },
    ],
    waypoints: [
      { x: 195, y: 406 },
      { x: 195, y: 330 },
      { x: 195, y: 246 },
      { x: 100, y: 246 },
      { x: 100, y: 100 },
    ],
  },

  'helix-theatre': {
    locationId: 'helix-theatre',
    startLabel: 'Collins Avenue Entrance',
    endLabel: 'Helix Theatre',
    totalTime: 4,
    totalDistance: '210m',
    floor: 'Ground Floor',
    steps: [
      { instruction: 'Enter through the main entrance', detail: 'Collins Avenue, North Entrance', icon: 'enter' },
      { instruction: 'Walk straight through the foyer', detail: 'continue ahead for 30m', icon: 'straight' },
      { instruction: 'Pass the Helix Staircase on your left', detail: 'the signature spiral staircase', icon: 'straight' },
      { instruction: 'Turn right', detail: 'into the east corridor', icon: 'right' },
      { instruction: 'Helix Theatre entrance on your left', detail: 'doors marked Helix Theatre', icon: 'arrive' },
    ],
    waypoints: [
      { x: 195, y: 406 },
      { x: 195, y: 330 },
      { x: 195, y: 246 },
      { x: 294, y: 246 },
      { x: 294, y: 100 },
    ],
  },

  'the-space': {
    locationId: 'the-space',
    startLabel: 'Collins Avenue Entrance',
    endLabel: 'The Space',
    totalTime: 5,
    totalDistance: '240m',
    floor: 'Level 1',
    steps: [
      { instruction: 'Enter through the main entrance', detail: 'Collins Avenue, North Entrance', icon: 'enter' },
      { instruction: 'Walk straight through the foyer', detail: 'continue ahead for 30m', icon: 'straight' },
      { instruction: 'Take the Helix Staircase up to Level 1', detail: 'the signature spiral staircase ahead', icon: 'stairs' },
      { instruction: 'Continue along Level 1 corridor', detail: 'follow signs for The Space', icon: 'straight' },
      { instruction: 'The Space entrance on your right', detail: 'Studio Theatre — Level 1', icon: 'arrive' },
    ],
    waypoints: [
      { x: 195, y: 406 },
      { x: 195, y: 330 },
      { x: 195, y: 246 },
      { x: 195, y: 100 },
    ],
  },

  'helix-cafe': {
    locationId: 'helix-cafe',
    startLabel: 'Collins Avenue Entrance',
    endLabel: 'Helix Café Bar',
    totalTime: 2,
    totalDistance: '90m',
    floor: 'Ground Floor',
    steps: [
      { instruction: 'Enter through the main entrance', detail: 'Collins Avenue, North Entrance', icon: 'enter' },
      { instruction: 'Helix Café Bar is on your right', detail: 'Ground floor, east side of foyer', icon: 'arrive' },
    ],
    waypoints: [
      { x: 195, y: 406 },
      { x: 195, y: 330 },
      { x: 334, y: 330 },
    ],
  },

  'box-office': {
    locationId: 'box-office',
    startLabel: 'Collins Avenue Entrance',
    endLabel: 'Box Office',
    totalTime: 2,
    totalDistance: '80m',
    floor: 'Ground Floor',
    steps: [
      { instruction: 'Enter through the main entrance', detail: 'Collins Avenue, North Entrance', icon: 'enter' },
      { instruction: 'Box Office is immediately on your left', detail: 'Ground floor, west side of foyer', icon: 'arrive' },
    ],
    waypoints: [
      { x: 195, y: 406 },
      { x: 195, y: 330 },
      { x: 56, y: 330 },
    ],
  },

  'accessible-entrance-helix': {
    locationId: 'accessible-entrance-helix',
    startLabel: 'Collins Avenue Entrance',
    endLabel: 'Accessible Entrance',
    totalTime: 3,
    totalDistance: '180m',
    floor: 'Ground Floor',
    steps: [
      { instruction: 'Enter through the main entrance', detail: 'Step-free access, Collins Avenue North', icon: 'enter' },
      { instruction: 'Accessible entrance is directly ahead', detail: 'No steps — level access throughout', icon: 'arrive' },
    ],
    waypoints: [
      { x: 195, y: 406 },
      { x: 195, y: 360 },
    ],
  },

  'accessible-lift-helix': {
    locationId: 'accessible-lift-helix',
    startLabel: 'Collins Avenue Entrance',
    endLabel: 'Accessible Lift',
    totalTime: 4,
    totalDistance: '200m',
    floor: 'Ground Floor',
    steps: [
      { instruction: 'Enter through the main entrance', detail: 'Collins Avenue, North Entrance', icon: 'enter' },
      { instruction: 'Walk straight through the foyer', detail: 'continue ahead for 30m', icon: 'straight' },
      { instruction: 'Accessible lift on your left', detail: 'Serves all floors — Ground, Level 1, Level 2', icon: 'arrive' },
    ],
    waypoints: [
      { x: 195, y: 406 },
      { x: 195, y: 330 },
      { x: 130, y: 290 },
    ],
  },
}

// Fallback route used for non-Helix locations in the demo
export const defaultDemoRoute = helixRoutes['mahony-hall']
