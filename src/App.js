import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import StudentAdd from './components/StudentAdd';
import ViewAllStudent from './components/ViewAllStudent';
import StudentMark from './components/StudentMark';

function App() {
  return (
    <div>


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/addstudent' element={<StudentAdd />} />
          <Route path='/viewall' element={<ViewAllStudent/>} />
          <Route path='/viewmark' element={<StudentMark/>} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
