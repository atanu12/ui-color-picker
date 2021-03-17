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
import LightGreen from './components/LightGreen';
import LightBlue from './components/LignBlue';
import Pink from './components/Pink';
import Purple from './components/Purple';
import Teal from './components/Teal';
import Limit from './components/Limit';
import Yellow from './components/Yellow';
import Orange from './components/Orange';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>AM Color Picker</h1>
      </div>
     <RedColor/>
     <Pink/>
     <Purple/>
     <DeepPurple/>
     <Indigo/>
     <Blue/>
     <LightBlue/>
     <Cyan/>
     <Teal/>
     <Green/>
     <LightGreen/>
     <Limit/>
     <Yellow/>
     <Amber/>
     <Orange/>
     <DeepOrange/>
     <Brown/>
     <Grey/>
     <BlueGrey/>
    
    </div>
  );
}

export default App;
