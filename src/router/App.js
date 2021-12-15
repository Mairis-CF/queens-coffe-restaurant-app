//React router dom version 6.1.1
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Importing the views that we want to show
import Home from '../views/Home';
import Waiter from '../views/Waiter';
import Cook from '../views/Cook';

const App = () => {
  return (
  
  <BrowserRouter> 
   <Routes>
     <Route path='/' element={ <Home /> } />
     <Route path='/Waiter' element={ <Waiter /> } />
     <Route path='/Cook' element={ <Cook /> } />
   </Routes>
   </BrowserRouter>
   
  );
}

export default App;
