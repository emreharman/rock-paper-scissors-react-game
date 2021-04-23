import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import GameStatus from "./components/GameStatus";
import Choices from "./components/Choices";
import Computer from "./components/Computer";
import Modal from "./components/Modal";

function App() {
  const [choosenIcon, setChoosenIcon] = useState("");
  const [wins, setWins] = useState(0);
  const [loses, setLoses] = useState(0);
  const [isCompared, setIsCompared] = useState(false);
  const [compChoice, setCompChoice] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    if (choosenIcon != "") {
      console.log(choosenIcon);
      console.log(compChoice);
      if (choosenIcon == "paper") {
        if (compChoice == "paper") {
          setResult("Draw");
        }
        if (compChoice == "rock") {
          setResult("Win");
          setWins(wins + 1);
        }
        if (compChoice == "scissors") {
          setResult("Loose");
          setLoses(loses + 1);
        }
      }
      if (choosenIcon == "rock") {
        if (compChoice == "rock") {
          setResult("Draw");
        }
        if (compChoice == "scissors") {
          setResult("Win");
          setWins(wins + 1);
        }
        if (compChoice == "paper") {
          setResult("Loose");
          setLoses(loses + 1);
        }
      }
      if (choosenIcon == "scissors") {
        if (compChoice == "scissors") {
          setResult("Draw");
        }
        if (compChoice == "paper") {
          setResult("Win");
          setWins(wins + 1);
        }
        if (compChoice == "rock") {
          setResult("Loose");
          setLoses(loses + 1);
        }
      }
      setIsCompared(true);
    }
    if (isCompared) {
      console.log(isCompared);
      setTimeout(() => {
        setIsCompared(false);
      }, 500);
    }
  }, [choosenIcon]);
  return (
    <div className="App">
      <div className="header">
        <Header />
        <GameStatus wins={wins} loses={loses} />
      </div>
      <div className="content">
        <Choices
          setChoosenIcon={setChoosenIcon}
          setCompChoice={setCompChoice}
        />
        <Computer />
        {isCompared && (
          <div className="modal">
            <Modal result={result} />
          </div>
        )}
        <div className="reset">
          <button
            onClick={() => {
              setChoosenIcon("");
              setCompChoice("");
              setIsCompared(false);
              setWins(0);
              setLoses(0);
              setResult("");
            }}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
