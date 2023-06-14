
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home.jsx'
import Board from './page/Board';

function App() {
  return (
    <div className="flex text-center items-center justify-center h-full w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;
