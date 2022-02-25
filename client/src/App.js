import './App.css';
import Main from './views/Main';
import New from './views/New';
import Edit from './views/Edit';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/new' element={<New />} />
          <Route path='/edit/:id' element={<Edit />} />

        </Routes>
      </div>

    </BrowserRouter>
  );

}

export default App;
