import "./App.css";
import InputForm from "./components/InputForm";
import SongList from "./components/SongList";
// import { useSelector, useDispatch } from "react-redux";
// import { bindActionCreators } from "redux";
// import { actionCreators } from "../src/state";

function App() {
  // const song = useSelector((state) => state.song);
  // const dispatch = useDispatch();

  // const { depositMoney, withdrawMoney } = bindActionCreators(
  //   actionCreators,
  //   dispatch
  // );

  return (
    <div className="App">
      <h1>WINC's Lil' Playlist</h1>
      <InputForm />
      <SongList />
    </div>
  );
}

export default App;
