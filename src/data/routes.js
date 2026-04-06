// Hardcoded route waypoints for The Helix (Building Z)
// SVG coordinates match the HelixFloorPlan viewBox="0 0 390 440"
//
// Floor plan layout (cross-corridor design):
//   Main vertical corridor:   x=165–225, y=20–380  (entrance spine)
//   Horizontal corridor:      x=20–370,  y=185–245  (east–west branch)
//
//   Rooms off the horizontal corridor:
//     TOP-LEFT:    Mahony Hall   x=20–158,  y=20–180   door at (89, 183)
//     TOP-RIGHT:   Helix Theatre x=232–370, y=20–180   door at (301, 183)
//     BOTTOM-LEFT: Box Office    x=20–158,  y=252–352  door at (89, 249)
//     BOTTOM-RIGHT: Café Bar     x=232–370, y=252–352  door at (301, 249)
//
//   Staircase landmark at intersection: cx=195, cy=215
//   Entrance vestibule: x=148–242, y=383–427

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
      { instruction: 'Walk straight through the foyer', detail: 'along the main corridor for 30m', icon: 'straight' },
      { instruction: 'Pass the Helix Staircase on your right', detail: 'the signature spiral staircase', icon: 'straight' },
      { instruction: 'Turn left', detail: 'into the west corridor', icon: 'left' },
      { instruction: 'Mahony Hall entrance on your right', detail: 'doors marked Mahony Hall', icon: 'arrive' },
    ],
    waypoints: [
      { x: 195, y: 405 },
      { x: 195, y: 350 },
      { x: 195, y: 215 },
      { x: 89,  y: 215 },
      { x: 89,  y: 183 },
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
      { instruction: 'Walk straight through the foyer', detail: 'along the main corridor for 30m', icon: 'straight' },
      { instruction: 'Pass the Helix Staircase on your left', detail: 'the signature spiral staircase', icon: 'straight' },
      { instruction: 'Turn right', detail: 'into the east corridor', icon: 'right' },
      { instruction: 'Helix Theatre entrance on your left', detail: 'doors marked Helix Theatre', icon: 'arrive' },
    ],
    waypoints: [
      { x: 195, y: 405 },
      { x: 195, y: 350 },
      { x: 195, y: 215 },
      { x: 301, y: 215 },
      { x: 301, y: 183 },
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
      { instruction: 'Walk straight through the foyer', detail: 'along the main corridor for 30m', icon: 'straight' },
      { instruction: 'Take the Helix Staircase to Level 1', detail: 'the signature spiral staircase ahead', icon: 'stairs' },
      { instruction: 'Continue along Level 1 corridor', detail: 'follow signs for The Space', icon: 'straight' },
      { instruction: 'The Space entrance on your right', detail: 'Studio Theatre — Level 1', icon: 'arrive' },
    ],
    waypoints: [
      { x: 195, y: 405 },
      { x: 195, y: 350 },
      { x: 195, y: 215 },
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
      { instruction: 'Walk straight ahead', detail: 'along the main corridor', icon: 'straight' },
      { instruction: 'Turn right', detail: 'into the east corridor', icon: 'right' },
      { instruction: 'Helix Café Bar entrance on your right', detail: 'Ground floor, east side', icon: 'arrive' },
    ],
    waypoints: [
      { x: 195, y: 405 },
      { x: 195, y: 350 },
      { x: 195, y: 215 },
      { x: 301, y: 215 },
      { x: 301, y: 249 },
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
      { instruction: 'Walk straight ahead', detail: 'along the main corridor', icon: 'straight' },
      { instruction: 'Turn left', detail: 'into the west corridor', icon: 'left' },
      { instruction: 'Box Office entrance on your left', detail: 'Ground floor, west side', icon: 'arrive' },
    ],
    waypoints: [
      { x: 195, y: 405 },
      { x: 195, y: 350 },
      { x: 195, y: 215 },
      { x: 89,  y: 215 },
      { x: 89,  y: 249 },
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
      { instruction: 'Enter via the step-free entrance', detail: 'Level access — Collins Avenue North', icon: 'enter' },
      { instruction: 'Accessible entrance straight ahead', detail: 'No steps throughout', icon: 'arrive' },
    ],
    waypoints: [
      { x: 195, y: 405 },
      { x: 195, y: 383 },
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
      { instruction: 'Walk straight through the foyer', detail: 'along the main corridor', icon: 'straight' },
      { instruction: 'Accessible lift on your left', detail: 'Serves Ground, Level 1 and Level 2', icon: 'arrive' },
    ],
    waypoints: [
      { x: 195, y: 405 },
      { x: 195, y: 350 },
      { x: 165, y: 215 },
    ],
  },
}

// Fallback for non-Helix locations in the demo
export const defaultDemoRoute = helixRoutes['mahony-hall']
