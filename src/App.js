import logo from './logo.svg';
import './App.css';
import RedColor from './components/RedColor';
import BlueGrey from './components/BlueGrey';
import Amber from './components/Amber';
import Blue from './components/Blue';
import Brown from './components/Brown';
import Cyan from './components/Cyan';
import DeepOrange from './components/DeepOrange';
import DeepPurple from './components/DeepPurple';
import Green from './components/Green';
import Grey from './components/Grey';
import Indigo from './components/Indigo';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>AM Color Picker</h1>
      </div>
     <RedColor/>
     <BlueGrey/>
     <Amber/>
     <Blue/>
     <Brown/>
     <Cyan/>
     <DeepOrange/>
     <DeepPurple/>
     <Green/>
     <Grey/>
     <Indigo/>

    </div>
  );
}

export default App;
