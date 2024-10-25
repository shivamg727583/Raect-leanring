import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import Home from './Components/Home';
import Tasks from './Components/Tasks';
import Items from './Components/Items';

function App() {
 
  return (
    <div className='w-full h-screen p-10 '>
    <Header />


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/task" element={<Tasks />} />
      <Route path="/task/:id" element={<Items/>} />


    </Routes>
    </div>
  )
}

export default App