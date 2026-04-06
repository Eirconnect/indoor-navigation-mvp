// DCU Glasnevin Campus — Building reference data
// Source: dcu.ie/campus-maps, DCU Campus Explorer

export const buildings = {
  helix: {
    id: 'helix',
    code: 'Z',
    name: 'The Helix',
    fullName: 'The Helix Centre for the Performing Arts',
    address: 'Collins Avenue Extension, Glasnevin, Dublin 9',
    floors: ['G', '1', '2'],
    floorLabels: { G: 'Ground Floor', 1: 'Level 1', 2: 'Level 2' },
    entrances: ['Main Entrance (Collins Avenue)', 'Side Entrance (East)'],
    primaryEntrance: 'Main Entrance (Collins Avenue)',
    description:
      'Performing arts centre at the north end of DCU Glasnevin campus. Home to Mahony Hall (1,300 capacity), Helix Theatre (433), and The Space studio theatre (132).',
  },
  library: {
    id: 'library',
    code: 'Y',
    name: "O'Reilly Library",
    fullName: "John and Aileen O'Reilly Library",
    floors: ['LG', 'G', '1', '2'],
    floorLabels: { LG: 'Lower Ground', G: 'Ground Floor', 1: 'Level 1', 2: 'Level 2' },
    primaryEntrance: 'Main Entrance (The Mall)',
  },
  'u-building': {
    id: 'u-building',
    code: 'KA',
    name: 'Student Centre',
    fullName: 'The U Building — Student Centre',
    floors: ['G', '1', '2'],
    floorLabels: { G: 'Ground Floor', 1: 'Level 1', 2: 'Level 2' },
    primaryEntrance: 'Main Entrance (The Mall)',
  },
}
