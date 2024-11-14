import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

  function App() {
    return(
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={'This is Main Page'}></Route>
            <Route path='/a' element={'This is A Page'}></Route>
            <Route path='/b' element={'This is B Page'}></Route>
            <Route path='/c' element={'This is C Page'}></Route>
            <Route path='/*' element={'NotFound'}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  };

  export default App;