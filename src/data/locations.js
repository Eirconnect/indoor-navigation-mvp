// Hardcoded DCU destinations
// Room code format: Building Letter + Floor (G=Ground, 1, 2, 3) + Room Number
// e.g. ZG01 = The Helix (Z), Ground Floor, Room 01

export const locations = [
  {
    id: 'mahony-hall',
    name: 'Mahony Hall',
    subtitle: 'Ground Floor · The Helix (Building Z)',
    building: 'helix',
    floor: 'G',
    code: 'ZG01',
    category: 'venue',
    walkTime: 3,
    distance: '180m',
    route: 'via Main Foyer Corridor',
  },
  {
    id: 'helix-theatre',
    name: 'Helix Theatre',
    subtitle: 'Ground Floor · The Helix (Building Z)',
    building: 'helix',
    floor: 'G',
    code: 'ZG02',
    category: 'venue',
    walkTime: 4,
    distance: '210m',
    route: 'via East Corridor',
  },
  {
    id: 'the-space',
    name: 'The Space',
    subtitle: 'Level 1 · The Helix (Building Z)',
    building: 'helix',
    floor: '1',
    code: 'Z101',
    category: 'venue',
    walkTime: 5,
    distance: '240m',
    route: 'via Helix Staircase',
  },
  {
    id: 'helix-cafe',
    name: 'Helix Café Bar',
    subtitle: 'Ground Floor · The Helix (Building Z)',
    building: 'helix',
    floor: 'G',
    code: 'ZG03',
    category: 'food',
    walkTime: 2,
    distance: '90m',
    route: 'via Main Foyer',
  },
  {
    id: 'box-office',
    name: 'Box Office',
    subtitle: 'Ground Floor · The Helix (Building Z)',
    building: 'helix',
    floor: 'G',
    code: 'ZG04',
    category: 'service',
    walkTime: 2,
    distance: '80m',
    route: 'via Main Entrance Foyer',
  },
  {
    id: 'oreilly-library',
    name: "O'Reilly Library",
    subtitle: 'Ground Floor · Building Y',
    building: 'library',
    floor: 'G',
    code: 'YG01',
    category: 'study',
    walkTime: 6,
    distance: '320m',
    route: 'via The Mall',
  },
  {
    id: 'student-centre',
    name: 'Student Centre',
    subtitle: 'Ground Floor · The U Building (KA)',
    building: 'u-building',
    floor: 'G',
    code: 'KAG01',
    category: 'social',
    walkTime: 8,
    distance: '450m',
    route: 'via The Mall South',
  },
]

// Default suggestions shown on the Search screen
export const suggestedLocations = [
  locations[0], // Mahony Hall
  locations[5], // O'Reilly Library
  locations[6], // Student Centre
]
