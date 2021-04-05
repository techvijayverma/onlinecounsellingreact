import "../../../App.css";
import { useContext } from "react";
import { GameStateContext } from "./Contexts";

function Menu(props) {
  const { gameState, setGameState, userName, setUserName } = useContext(
    GameStateContext
  );
  return (
    <div className="Menu">
      <label>Please Attempt all Questions</label>
      <button><h4>{props.name}</h4></button>
      <button
        onClick={() => {
          setGameState("playing");
        }}
      >
        Enter
      </button>
    </div>
  );
}

export default Menu;
