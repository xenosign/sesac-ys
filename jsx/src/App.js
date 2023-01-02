import logo from './logo.svg';
import './App.css';

function App() {
  const helloStr = "Hello, first exercise";

  function clickAlert() {
    alert("클릭 됨");
  }

  return (
    <div className="App">
      <div onClick={clickAlert}>{helloStr}</div>
    </div >
  );
}
export default App;

