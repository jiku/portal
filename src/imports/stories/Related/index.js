import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import App from './App';
// import App from '../../src/components/app'
import appState from './State'

import Timer from '../../src/components/timer';
import TodoList from '../../src/components/todo-list';
import Chart from '../../src/components/chart';
import TimerChart from '../../src/components/timerChart';

// const render = App.render(document.getElementById('app'));

storiesOf('App', module)
  // .add('Normal state', (appState) => render(appState)//( // Target not a dom element
  // );
  // .add('Normal state', (appState) => (
  //   <App appState={appState} />
  // ));
  // .add('Normal state', () => (
  //   <App /> // NOTE: No data
  // ))
  .add('Normal state', () => (
    <App /> // NOTE: No data
  ))
  // .add('App here wont work', () => (
  //   (<div className="container">
  //     <h1>App name</h1>
  //     <Timer secondsElapsed={appState.secondsElapsed} />
  //     <TimerChart chart={appState.timerChart} />
  //     <TodoList todos={appState.todos} />
  //     <Chart chart={appState.chart} />
  //   </div>)

  // Hmm.render = R.curry((node, props) => ReactDOM.render(<App {...props}/>, node));
  // ));

storiesOf('Chart', module)
  .add('Normal static', () => (
    <Chart chart={appState.chart} /> // NOTE: No dynamic data, but renders
  ))

storiesOf('Timer', module)
  .add('Normal static', () => (
    <Timer secondsElapsed={appState.secondsElapsed} /> // NOTE: No dynamic data, but renders
  ))
