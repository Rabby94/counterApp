import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './views/Header';
import Pricing from './views/Pricing';
import StateData from './dataState/StateData';

function App() {
  return (
    <div>
      <div className='container'>
        <Header />
        <Pricing />
        {/* <StateData /> */}
      </div>      
    </div>
  );
}

export default App;
