import {useState} from "react";
import './App.css';
import Box from './component/Box';

// 1. 2 boxes ( title, photo, result)
// 2. rock paper scissors buttons
// 3. If you click a button, the result is shown in the box
// 4. computer randomly chooses the item
// 5. the result is decided depending on the result of 3, 4
// 6. The border color is changed according to the result. (win - green / loose - red / tie - black )
const choice = {
  rock: {
    name: "Rock",
    img: "https://img.freepik.com/free-psd/beautiful-stone-studio_23-2151860821.jpg"
  },
  scissors: {
    name: "Scissors",
    img: "https://www.artnews.com/wp-content/uploads/2022/07/AdobeStock_507713455.jpeg"
  },
  paper: {
    name: "Paper",
    img: "https://m.media-amazon.com/images/I/51m2-A2n1CL.jpg"
  }
}

function App() {

  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice)); 
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }

  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);

    // user === computer -> tie
    // user === rock, computer === scissors -> user wins
    // user === rock, computer === paper -> user loses
    // user === scissors, computer === paper -> user wins
    // user === scissors, computer === rock -> user loses
    // user === paper, computer === rock -> user wins
    // user === paper, computer === scissors -> user loses

    if ( user.name === computer.name ) {
      return "Tie";
    } else if ( user.name === "Rock") 
      return computer.name === "Scissors"?"Win":"Lose";
    else if (user.name === "Scissors") 
      return computer.name === "Paper"?"Win":"Lose";
    else if (user.name === "Paper") 
      return computer.name === "Rock"?"Win":"Lose";
    
  }

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>

      <div className="main">
        <button className="button" onClick={() => play("rock")}>Rock</button>
        <button className="button" onClick={() => play("scissors")}>Scissors</button>
        <button className="button" onClick={() => play("paper")}>Paper</button>
      </div>
    </div>
  );
}

export default App;
