import "./App.css";
import Counter from "./component/counter";
import { useDispatch, useSelector } from "react-redux";
import {
  incNumber,
  decNumber,
  decNumberBy,
  incNumberBy,
} from "./actions/index";

function App() {
  const state = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h3>from home component : {state}</h3>
      <Counter />
      <button style={{ margin: "10px" }} onClick={() => dispatch(decNumber())}>
        Decrement -
      </button>
      <button style={{ margin: "10px" }} onClick={() => dispatch(incNumber())}>
        Increment +
      </button>
      <br></br>

      <button
        style={{ margin: "10px" }}
        onClick={() => dispatch(decNumberBy())}
      >
        - Decrement by 5
      </button>
      <button
        style={{ margin: "10px" }}
        onClick={() => dispatch(incNumberBy())}
      >
        + Increment by 5
      </button>
    </div>
  );
}

export default App;
