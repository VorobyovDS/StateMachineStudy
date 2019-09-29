export const enum HumanStateType {
  HUMAN_WAIT = 'HUMAN_WAIT',
  HUMAN_GOING = 'HUMAN_GOING',
  HUMAN_TO_RUN = 'HUMAN_TO_RUN',
  HUMAN_SLEEP = 'HUMAN_SLEEP',
  HUMAN_NOT_SLEEP = 'HUMAN_NOT_SLEEP',
  HUMAN_SEAT = 'HUMAN_SEAT',
  HUMAN_SEAT_ON_SOFA = 'HUMAN_SEAT_ON_SOFA',
  HUMAN_UP_WITH_SOFA = 'HUMAN_UP_WITH_SOFA',
}

export const humanInitialState = {
  isHumanGoing: true,
  isHumanToRun: true,
  isHumanSleep: false,
  isHumanSeat: true,
  isHumanSeatInSofa: true,
  isHumanUpWithSofa: false,
  isHumanNotSleep: false,
  isHumanWait: true,
};
