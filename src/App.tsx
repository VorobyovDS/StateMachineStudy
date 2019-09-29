import * as React from 'react';
import HumanStates from './components/Human/HumanStates';

class App extends React.Component {
  public render() {
    return (
      <div className={'main'}>
        <HumanStates/>
      </div>
    );
  }
}

export default App;
