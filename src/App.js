// import logo from './logo.svg';
import { useSelector } from 'react-redux';
import './App.css';

// import { H } from './Pages/Home';
import Navbar from './Components/Navbar';
import MainRoute from './Pages/MainRoute';
import { Registerpage } from './Pages/Registerpage';
import Navbar2 from './Components/Nav/Navbar2';

function App() {

  const isAuth=useSelector((store)=>
    store.reducer.isAuth
  )

  return (
    <div className="App">
      {isAuth?(<Navbar2/>):(<Navbar/>)}
      
<MainRoute/>

    </div>
  );
}

export default App;
