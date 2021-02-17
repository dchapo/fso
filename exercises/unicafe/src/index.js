import React, {useState} from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const FeedbackHeader = () => {
  return (
    <h1>give feedback</h1>
  )
}

const Button = (props) => {

  return (
    <div>
      <button onClick={props.goodBtnClick}>good</button>
      <button onClick={props.neutralBtnClick}>neutral</button>
      <button onClick={props.badBtnClick}>bad</button>
    </div>
  )
}

const StatiticsHeader = () => {
  return (
    <h1>Statistics</h1>
  )
}

const Statistics = (props) => {
  if (props.all == 0) {
    return (
      <div>
        <span>No feedback given</span>
      </div>
    )
  }
  return (

    <table>
      <tbody>
        <tr>
          <td><Statistic text="good" /></td> 
          <td><Statistic value={props.good} /></td>
        </tr>
        <tr>
          <td><Statistic text="neutral" /></td>  
          <td><Statistic value={props.neutral} /></td>
        </tr>
        <tr>
          <td><Statistic text="bad" /></td>  
          <td><Statistic value={props.bad} /></td>
        </tr>
        <tr>
          <td><Statistic text="all" /></td>  
          <td><Statistic value={props.all} /></td>
        </tr>
        <tr>
          <td><Statistic text="average" /></td>  
          <td><Statistic value={props.average} /></td>
        </tr>
        <tr>
          <td><Statistic text="positive" /></td>  
          <td><Statistic value={props.positive} /></td><td>&#37;</td>
        </tr>
      </tbody>
    </table>
  )
}

const Statistic = (props) => {
  return (
    <div>{props.text} {props.value}</div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  //const [all, setAll] = useState(0)
  // const [average, setAverage] = useState(0)
  // const [positive, setPositive] = useState(0)

  const goodBtnClick = () => {
    setGood(good + 1)
  }
  const neutralBtnClick = () => {
    setNeutral(neutral + 1)
  }
  const badBtnClick = () => {
    setBad(bad + 1)
  }

  const total = good + bad + neutral

  return (
    <div>
      <FeedbackHeader />
      <Button goodBtnClick={goodBtnClick} neutralBtnClick={neutralBtnClick} badBtnClick={badBtnClick}/>
      <StatiticsHeader />
      <Statistics good={good} neutral={neutral} bad={bad} all={good + neutral + bad} average={(good - bad)/total} positive={(good / total) * 100}/>
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


