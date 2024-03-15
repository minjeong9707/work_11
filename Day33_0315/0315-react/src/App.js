import './App.css';
import ClassBind from './ClassBind';
import SyntheticEvent from './SyntheticEvent';
import Counter from './Counter';
import HandlerEx from './HandlerEx';
import ColorChange from './ColorChange';
import HiddenText from './HiddenText';
import FruitPrac from './FruitPrac';
import FruitState from './FruitState';

function App() {
  return (
    <div className="App">
      <ClassBind />

      <hr />
      <Counter />

      <hr />
      <HandlerEx />

      <hr />
      <ColorChange />

      <hr />
      <HiddenText />

      <hr />
      <FruitPrac />

      <hr />
      <FruitState />
    </div>
  );
}

export default App;
