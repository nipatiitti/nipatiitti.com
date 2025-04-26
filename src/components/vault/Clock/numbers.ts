export type ClockTime = [number, number]
export type ClockRow = [ClockTime, ClockTime]
export type ClocksNumber = [ClockRow, ClockRow, ClockRow]

/*
We are drawing numbers with 6 cloks so, where each clock needs 2 degree values (for both hands).
So a total of 12 values are needed to draw a number. The format is:
N: [
    [
      [0, 0], // first clock
      [0, 0], // second clock
    ],
    [
      [0, 0], // third clock
      [0, 0], // fourth clock
    ],
    [
      [0, 0], // fifth clock
      [0, 0], // sixth clock
    ], 
]
*/
export const numbers: {
  [key: number]: ClocksNumber
} = {
  0: [
    [
      [90, 180],
      [270, 180],
    ],
    [
      [0, 180],
      [0, 180],
    ],
    [
      [90, 0],
      [270, 0],
    ],
  ],
  1: [
    [
      [135, 135],
      [180, 180],
    ],
    [
      [135, 135],
      [0, 180],
    ],
    [
      [135, 135],
      [0, 0],
    ],
  ],
  2: [
    [
      [90, 90],
      [270, 180],
    ],
    [
      [90, 180],
      [270, 0],
    ],
    [
      [90, 0],
      [270, 270],
    ],
  ],
  3: [
    [
      [90, 90],
      [270, 180],
    ],
    [
      [90, 90],
      [270, 0],
    ],
    [
      [90, 90],
      [270, 0],
    ],
  ],
  4: [
    [
      [180, 180],
      [180, 180],
    ],
    [
      [90, 0],
      [270, 180],
    ],
    [
      [135, 135],
      [0, 0],
    ],
  ],
  5: [
    [
      [90, 180],
      [270, 270],
    ],
    [
      [90, 0],
      [270, 145],
    ],
    [
      [90, 90],
      [270, 35],
    ],
  ],
  6: [
    [
      [180, 10],
      [135, 135],
    ],
    [
      [180, 0],
      [270, 180],
    ],
    [
      [125, 0],
      [235, 0],
    ],
  ],
  7: [
    [
      [90, 90],
      [270, 180],
    ],
    [
      [135, 135],
      [0, 180],
    ],
    [
      [135, 135],
      [0, 0],
    ],
  ],
  8: [
    [
      [90, 155],
      [270, 205],
    ],
    [
      [55, 180],
      [305, 180],
    ],
    [
      [90, 0],
      [270, 0],
    ],
  ],
  9: [
    [
      [90, 225],
      [270, 180],
    ],
    [
      [315, 90],
      [0, 180],
    ],
    [
      [135, 135],
      [0, 0],
    ],
  ],
}
