import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import StudentAdd from './components/StudentAdd';
import ViewAllStudent from './components/ViewAllStudent';
import StudentMark from './components/StudentMark';
import StudentLogin from './components/StudentLogin';
import StudentMarkAdd from './components/StudentMarkAdd';

function App() {
  return (
    <div>


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/addstudent' element={<StudentAdd />} />
          <Route path='/viewall' element={<ViewAllStudent/>} />
          <Route path='/viewmark' element={<StudentMark/>} />
          <Route path='/studlogin' element={<StudentLogin/>} />
          <Route path='/addmark' element={<StudentMarkAdd/>} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
