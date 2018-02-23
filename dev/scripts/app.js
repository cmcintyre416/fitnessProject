import React from 'react';
import ReactDOM from 'react-dom';
import WorkoutList from'./components/WorkoutList.js'
import ShowExcercise from './components/ShowExcercise.js';

class App extends React.Component {

  render() {
    return (
      <div>
        <header>
          <div className="wrapper">
            <h1>WorkoutHub</h1>
          </div>
        </header>
        <main>
          <div className="wrapper">
            < WorkoutList/>
          </div>
        </main>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
