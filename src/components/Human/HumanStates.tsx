import * as React from 'react';

import { HumanStateType, changeMapState } from './constants';

interface IHumanTypeProps {
}

interface IHumanTypeState {
  name: string;
  currentState: string;
}

export default class HumanTypeState extends React.Component<IHumanTypeProps, IHumanTypeState> {
  _men: HTMLElement;

  _menEl = (el: HTMLElement) => {
    this._men = el;
  };

  constructor(props) {
    super(props);

    this.state = { name: null, currentState: HumanStateType.HUMAN_WAIT };
  }

  changeState = (nextState, changeBefore, changeAfter) => {
    if (this.canChangeState(nextState)) {
      changeBefore();
      this.changeToNextState(nextState);
      changeAfter();
    } else {
      console.log('Невозможно прейти из состояния ' + this.state.currentState + ' в ' + nextState);
    }
  };

  canChangeState = (nextState) => {
    const mapArray = changeMapState[this.state.currentState];
    return mapArray.includes(nextState);
  };

  changeToNextState = (nextState) => {
    this.setState({
      currentState: nextState
    })
  };

  handleGoingMen = (evt) => {
    switch (evt.keyCode) {

      case 65: {
        this.changeState(HumanStateType.HUMAN_GOING, () => {
          this._men.setAttribute('class', 'men');
          this._men.classList.add('__going_left');
        }, () => {console.log(this.state.currentState)});
        break;
      }
      case 68: {
        this.changeState(HumanStateType.HUMAN_GOING, () => {
          this._men.setAttribute('class', 'men');
          this._men.classList.add('__going_right');
        }, () => {console.log(this.state.currentState)});
        break;
      }

      case 87: {
        this.changeState(HumanStateType.HUMAN_WAIT, () => {
          this._men.setAttribute('class', 'men');
          this._men.classList.add('__wait');
        }, () => {console.log(this.state.currentState)});
        break;
      }

      case 83: {
        this.changeState(HumanStateType.HUMAN_SEAT, () => {
          this._men.setAttribute('class', 'men');
          this._men.classList.add('__seat');
        }, () => {console.log(this.state.currentState)});
      }
    }
  };

  componentDidMount():void {
    document.addEventListener('keydown', this.handleGoingMen);
  }

  render() {
    return (
      <div className={'state_test'}>
        <div ref={this._menEl} className={`men`}/>
      </div>
    );
  }
}
