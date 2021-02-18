import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'  
]

const Buttons = (props) => {
  return (
    <div>
      <button onClick={props.increaseVotes}>Vote</button>
      <button onClick={props.randomAnecdote}>Next Anecdote</button>
    </div>
  )
}

const Points = (props) => {
  const {selected, votes, anecdotes} = props
  let ptsArray = new Array(anecdotes.length).fill(0)
  ptsArray[selected] = votes
  console.log(ptsArray, votes)
  return (
    <div>has {votes} votes</div>
  )

}


const App = (props) => {
  let ptsArray = new Array(anecdotes.length).fill(0)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({
    vote: 0, resetVotes: 0
  })  
  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * (props.anecdotes.length)))
    //setVotes(0)
    setVotes({...votes, resetVote: 0})
  }
  const increaseVotes = () => {
    // const newVote = {
    //   ...votes,
    //   vote: votes.vote + 1,
    // }
    setVotes({...votes, vote: votes.vote + 1})
  }

  return (
    <div>
      {props.anecdotes[selected]}
      <Points votes={votes.vote} selected={selected} anecdotes={props.anecdotes}/>
      <Buttons randomAnecdote={randomAnecdote}  increaseVotes={increaseVotes}/>
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App anecdotes={anecdotes}/>
  </React.StrictMode>,
  document.getElementById('root')
);


