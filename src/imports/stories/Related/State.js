import R from 'ramda';

let appState = {
  secondsElapsed: 0,
  todos: [
    {id: 1, text: 'Milk', nutrients: { proteins: 33 }},
    {id: 2, text: 'Cheese', nutrients: { proteins: 22 }},
    {id: 3, text: 'Jolt cola', nutrients: { proteins: 11 }}
  ],
  chart: {
    data: {
      labels: [],
      datasets: [
        {
          label: "My First dataset",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [],
          spanGaps: false,
        }
      ]
    },
    options: {
      legend: {
        display: true,
        labels: {
          fontColor: 'rgb(255, 99, 132)'
        }
      }
    }
  }
};

appState.chart.data.labels = R.map(R.prop('text'), appState.todos)
appState.chart.data.datasets[0].data = R.map(R.prop('id'), appState.todos)

const secondsElapsedLens = R.lensProp('secondsElapsed');
const incSecondsElapsed = R.over(secondsElapsedLens, R.inc);

appState.timerChart = R.clone(appState.chart)
appState.timerChart.data.labels = ["secondsElapsed"]
appState.timerChart.data.datasets[0].data = [0]

// const render = App.render(document.getElementById('app'));
//
// //first render
// render(appState);
//
setInterval(() => {
  appState = incSecondsElapsed(appState);
  appState.timerChart.data.datasets[0].data = [appState.secondsElapsed]
  // render(appState);
}, 1000);

export default appState
