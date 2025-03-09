// ***** main timeline
export interface Timeline {
  header: {
    rou: number;
    hun: number;
    fan: number;
  };
  footer: {
    dob: number;
    contact: number;
    arrow: number;
    cv: number;
    tg: number;
    tw: number;
  };
}

export const timeline: Timeline = {
  header: {
    rou: 0,
    hun: 0.1,
    fan: 0.2,
  },
  footer: {
    dob: 1.25,
    contact: 1.5,
    arrow: 1.55,
    cv: 1.6,
    tg: 1.65,
    tw: 1.7,
  },
};

// ***** index page timeline
interface TimelineIndex {
  uiDev: number;
  design: number;
  motion: number;
  ampersand: number;
  frontend: number;
  imgProjects: number;
  imgMe: number;
  imgMeOverlay: number;
  creative: number;
  coding: number;
  available: number;
  availableAnswer: number;
}

const start = timeline.header.fan;
const difference = 0.1;

const tlIndex: TimelineIndex = {
  uiDev: start,
  design: start + difference,
  motion: start + difference * 2,
  ampersand: start + difference * 3,
  frontend: start + difference * 4,
  imgProjects: start + difference * 5,
  imgMe: start + difference * 6,
  imgMeOverlay: start + difference * 7,
  creative: start + difference * 8,
  coding: start + difference * 9,
  available: start + difference * 10,
  availableAnswer: start + difference * 11,
};

export const timelineIndex: Timeline & TimelineIndex = {
  ...timeline,
  ...tlIndex,
};

// ***** me page timeline
interface TimelineMe {
  now: 0.35;
  nowContent: 0.5;
  meCarousel: 1.5;
  nameWords: 0.8;
}

const tlMe: TimelineMe = {
  now: 0.35,
  nowContent: 0.5,
  meCarousel: 1.5,
  nameWords: 0.8,
};

export const timelineMe: Timeline & TimelineMe = { ...timeline, ...tlMe };
