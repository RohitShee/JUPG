import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider,} from 'react-router-dom'
import HomePage from "./pages/HomePage"
import RoomsPage from './pages/RoomsPage';
import RoomPage from './pages/RoomPage';
import AddRoomPage from './pages/AddRoomPage';
import LoginPage from './pages/LoginPage';
import SignInPage from './pages/SignInPage';
import UserPage from './pages/UserPage';
import EditRoomPage from './pages/EditRoomPage';


function App() {
 
  const router= createBrowserRouter(
  
    createRoutesFromElements(
      <Route path='/'>  
          <Route index element={<HomePage/>}/>
          <Route path='/rooms' element={<RoomsPage/>}/>
          <Route path='/rooms/:id' element={<RoomPage/>}/>
          <Route path='/add-room' element={<AddRoomPage />}/>
          <Route path='/log-in' element={<LoginPage />} />
          <Route path='/sign-up' element={<SignInPage />} />
          <Route path='/:username' element={<UserPage/>}/>
          <Route path='/edit-room/:id' element={<EditRoomPage />}/>
          {/*<Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
          <Route path='/edit-job/:id' element={<EditJobPage editJobSubmit={updateJob}/>} loader={jobLoader}  />
         
          <Route path='*' element={<NotFoundPage/>}/>*/}
      </Route>
  )
  );
  

  return <RouterProvider router={router}/>;
}

export default App
