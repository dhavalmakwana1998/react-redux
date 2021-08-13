import "./App.css";
import Counter from "./component/counter";
import { useDispatch, useSelector } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {
  const state = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h3>from home component : {state}</h3>
      <Counter />
      <button
        style={{ marginRight: "10px" }}
        onClick={() => dispatch(incNumber())}
      >
        Increment
      </button>
      <button
        style={{ marginLeft: "10px" }}
        onClick={() => dispatch(decNumber())}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
