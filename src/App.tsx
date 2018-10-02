import * as React from 'react';
// import Counter from './components/Counter';
import Movies from './containers/Movies';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Movies />
      </div>
    );
  }
}

export default App;
