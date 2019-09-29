import * as React from 'react';

import { HumanStateType, humanInitialState } from './constants';
import { generateState } from './generateState';

interface IHumanTypeProps {
}

interface IHumanTypeState {
  name: string;
  machine: {
    isHumanGoing: boolean,
    isHumanToRun: boolean,
    isHumanSleep: boolean,
    isHumanNotSleep: boolean,
    isHumanSeat: boolean,
    isHumanSeatInSofa: boolean,
    isHumanUpWithSofa: boolean,
    isHumanWait: boolean,
  };
  selected?: string;
}

export default class HumanTypeState extends React.Component<
  IHumanTypeProps,
  IHumanTypeState> {
  constructor(props) {
    super(props);

    this.state = { name: null, machine: { ...humanInitialState }, selected: HumanStateType.HUMAN_WAIT };
  }

  /**
   * State machine binding
   */
  goToState = (stateName) => {
    this.setState(generateState(this.state, this.props, stateName));
  };

  handleClickState = (currentTypeState) => {
    this.goToState(currentTypeState);

    this.setState({
      selected: currentTypeState,
    });
  };

  render() {
    const {
      isHumanGoing,
      isHumanToRun,
      isHumanSleep,
      isHumanSeat,
      isHumanSeatInSofa,
      isHumanUpWithSofa,
      isHumanNotSleep,
      isHumanWait,
    } = this.state.machine;

    return (
      <div className={'state_test'}>
        {isHumanWait &&
          <div className={`st_item ${this.state.selected === HumanStateType.HUMAN_WAIT && '__active'}`} onClick={this.handleClickState.bind(null, HumanStateType.HUMAN_WAIT)}>
            <span className={'st_action'}>
              Стоять и ждать
            </span>
            <span className={'st_current_state'}>
              Стоит и ждет
            </span>
          </div>}
        {isHumanGoing &&
          <div className={`st_item ${this.state.selected === HumanStateType.HUMAN_GOING && '__active'}`} onClick={this.handleClickState.bind(null, HumanStateType.HUMAN_GOING)}>
            <span className={'st_action'}>
              Идти
            </span>
            <span className={'st_current_state'}>
              Идет
            </span>
          </div>}
        {isHumanToRun &&
          <div className={`st_item ${this.state.selected === HumanStateType.HUMAN_TO_RUN && '__active'}`} onClick={this.handleClickState.bind(null, HumanStateType.HUMAN_TO_RUN)}>
            <span className={'st_action'}>
              Бежать
            </span>
            <span className={'st_current_state'}>
              Бежит
            </span>
          </div>}
        {isHumanSleep &&
          <div className={`st_item ${this.state.selected === HumanStateType.HUMAN_SLEEP && '__active'}`} onClick={this.handleClickState.bind(null, HumanStateType.HUMAN_SLEEP)}>
            <span className={'st_action'}>
              Уснуть
            </span>
            <span className={'st_current_state'}>
              Уснул
            </span>
          </div>}
        {isHumanNotSleep &&
          <div className={`st_item ${this.state.selected === HumanStateType.HUMAN_NOT_SLEEP && '__active'}`} onClick={this.handleClickState.bind(null, HumanStateType.HUMAN_NOT_SLEEP)}>
            <span className={'st_action'}>
              Проснуться
            </span>
            <span className={'st_current_state'}>
              Проснулся
            </span>
          </div>}
        {isHumanSeat &&
          <div className={`st_item ${this.state.selected === HumanStateType.HUMAN_SEAT && '__active'}`} onClick={this.handleClickState.bind(null, HumanStateType.HUMAN_SEAT)}>
            <span className={'st_action'}>
              Сидеть
            </span>
            <span className={'st_current_state'}>
              Сидит
            </span>
          </div>}
        {isHumanSeatInSofa &&
          <div className={`st_item ${this.state.selected === HumanStateType.HUMAN_SEAT_ON_SOFA && '__active'}`} onClick={this.handleClickState.bind(null, HumanStateType.HUMAN_SEAT_ON_SOFA)}>
            <span className={'st_action'}>
              Сесть на диван
            </span>
            <span className={'st_current_state'}>
              Сидит на диване
            </span>
          </div>}
        {isHumanUpWithSofa &&
          <div className={`st_item ${this.state.selected === HumanStateType.HUMAN_UP_WITH_SOFA && '__active'}`} onClick={this.handleClickState.bind(null, HumanStateType.HUMAN_UP_WITH_SOFA)}>
            <span className={'st_action'}>
              Встать с дивана
            </span>
            <span className={'st_current_state'}>
              Встал с дивана
            </span>
          </div>}
      </div>
    );
  }
}
