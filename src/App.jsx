import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Counter } from './features/counter/Counter'

import Home from './components/Home'
import Blog from './components/blog/Blog'

function App() {

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col overflow-hidden">
        <div className='w-screen flex justify-center items-center mb-auto'>
          <Navbar/> 
        </div>
        <div className='flex w-screen h-full justify-between gap-4 items-center'>
          <Sidebar/>
          <div className="divider"></div> 
          <div className='w-full h-full bg-base-200 mr-3 mb-5 flex justify-center items-center border rounded-sm'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/counter/' element={<Counter/>}/>
              <Route path='/blog/' element={<Blog/>}/>
            </Routes>
          </div>
        </div>
    </div>
  )
}

export default App
