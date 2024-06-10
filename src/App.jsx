

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Parent from './Components/Parent'
import Child from './Components/Child'





function App() {
  const route = createBrowserRouter(

    createRoutesFromElements(
      <Route>
        <Route path='/' element= {<Parent />}/>
        <Route path='/child' element={<Child/>}/>
       
      </Route>
    )
  )

  return (
    <>
 <RouterProvider router={route}/>
    </>
  )
}

export default App
