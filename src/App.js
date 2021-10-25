import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {
  const song = useSelector((state) => state.song);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  console.log(song);
  return (
    <div className="App">
      <h2>{song}</h2>
      <button onClick={() => depositMoney(1)}>Add Song</button>
      <button onClick={() => withdrawMoney(1)}>Remove Song</button>
    </div>
  );
}

export default App;
