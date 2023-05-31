import './App.css';
import Cars from './components/Cars'
import Footer from './components/Footer';
import Header from './components/Header';
import CarView from './components/CarView';
import { Route, Router, Routes, useRoutes } from 'react-router-dom';




function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>

        <Route path='/' element={<Cars />}></Route>
        <Route path='./viewCar/:id' element={<CarView />}></Route>
      </Routes>

      <Footer />
    </div>
  )
}

export default App;
