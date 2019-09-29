import { HumanStateType } from './constants';

/**
 * This export function tate Machine
 */
export function generateState(state, props, stateName) {
  switch (stateName) {
    case HumanStateType.HUMAN_WAIT: // стоит и жедет
      return {
        name: stateName,
        machine: {
          isHumanGoing: true,
          isHumanToRun: true,
          isHumanSleep: false,
          isHumanSeat: true,
          isHumanSeatInSofa: true,
          isHumanUpWithSofa: false,
          isHumanNotSleep: false,
          isHumanWait: true,
        },
      };
    case HumanStateType.HUMAN_SEAT: // просто сидит
      return {
        name: stateName,
        machine: {
          isHumanGoing: true,
          isHumanToRun: false,
          isHumanSleep: false,
          isHumanSeat: true,
          isHumanSeatInSofa: false,
          isHumanUpWithSofa: false,
          isHumanNotSleep: false,
          isHumanWait: true,
        },
      };
    case HumanStateType.HUMAN_GOING: // идет
      return {
        name: stateName,
        machine: {
          isHumanGoing: true,
          isHumanToRun: true,
          isHumanSleep: false,
          isHumanSeat: true,
          isHumanSeatInSofa: true,
          isHumanUpWithSofa: false,
          isHumanNotSleep: false,
          isHumanWait: true,
        },
      };
    case HumanStateType.HUMAN_SEAT_ON_SOFA: // сел на софу(диван)
      return {
        name: stateName,
        machine: {
          isHumanGoing: false,
          isHumanToRun: false,
          isHumanSleep: true,
          isHumanSeat: false,
          isHumanSeatInSofa: true,
          isHumanUpWithSofa: true,
          isHumanNotSleep: false,
          isHumanWait: true,
        },
      };
    case HumanStateType.HUMAN_UP_WITH_SOFA: // встал с софы (дивана)
      return {
        name: stateName,
        machine: {
          isHumanGoing: true,
          isHumanToRun: false,
          isHumanSleep: false,
          isHumanSeat: false,
          isHumanSeatInSofa: true,
          isHumanUpWithSofa: true,
          isHumanNotSleep: false,
          isHumanWait: false,
        },
      };
    case HumanStateType.HUMAN_TO_RUN: // быстро побежал
      return {
        name: stateName,
        machine: {
          isHumanGoing: true,
          isHumanToRun: true,
          isHumanSleep: false,
          isHumanSeat: false,
          isHumanSeatInSofa: false,
          isHumanUpWithSofa: false,
          isHumanNotSleep: false,
          isHumanWait: false,
        },
      };
    case HumanStateType.HUMAN_SLEEP: // уснул
      return {
        name: stateName,
        machine: {
          isHumanGoing: false,
          isHumanToRun: false,
          isHumanSleep: true,
          isHumanSeat: false,
          isHumanSeatInSofa: false,
          isHumanUpWithSofa: false,
          isHumanNotSleep: true,
          isHumanWait: false,
        },
      };
    case HumanStateType.HUMAN_NOT_SLEEP: // проснулся
      return {
        name: stateName,
        machine: {
          isHumanGoing: false,
          isHumanToRun: false,
          isHumanSleep: true,
          isHumanSeat: false,
          isHumanSeatInSofa: false,
          isHumanUpWithSofa: true,
          isHumanNotSleep: true,
          isHumanWait: false,
        },
      };
    // default state
    default:
      return {
        name: stateName,
        machine: {
          isHumanGoing: true,
          isHumanToRun: true,
          isHumanSleep: false,
          isHumanSeat: true,
          isHumanSeatInSofa: true,
          isHumanUpWithSofa: false,
          isHumanNotSleep: false,
          isHumanWait: true,
        },
      };
  }
}
