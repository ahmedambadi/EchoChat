import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/homepage"
import { SocketProvider } from "./socketprovider";
import Chatui from './pages/chatUI';

function App() {
  return(

<SocketProvider>
 <BrowserRouter>
   <Routes>
      <Route
      path='/'
      element={<Home/>}
      />
      <Route
      path='/chatroom'
      element={<Chatui/>}
      />
   </Routes>
 </BrowserRouter>
</SocketProvider>

  )
}



export default App
