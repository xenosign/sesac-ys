import './App.css';
import Comparing from './components/Comparing';
import Condition from './components/Condition';
import Counter from './components/Counter';
import Ex5 from './components/Ex5';
import ItemList from './components/ItemList';
import List from './components/List';
import Thumb from './components/Thumb';
import CustomList from './components/CustomList';
import CustomObj from './components/CustomObj';
import ColorInput from './components/ColorInput';
import RandomQuiz from './components/RandomQuiz';
import TestRef from './components/TestRef';
import ChangeFocus from './components/ChangeFocus';
import RefDOM from './components/RefDOM';
import Table from './components/Table';
import ConditionalRender from './components/ConditionalRender';
import FancyBorder from './components/FancyBorder';
import Profile from './components/Profile';
import Board from './components/Board';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">홈 페이지 이동</Link>
          </li>
          <li>
            <Link to="/profile">프로필 페이지 이동</Link>
          </li>
          <li>
            <Link to="/board">게시판 페이지 이동</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </div>
  );
}
export default App;
