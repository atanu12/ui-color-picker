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
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer ,toast } from 'react-toastify';

function App() {

  const notify = () => toast.success("Copied");  
  return (
    <div className="App" >
      <div className="header">
        <h1>AM Color Picker</h1>
      </div>
     <div className="colors" onClick={notify}>
     <RedColor />
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
     <ToastContainer
position="top-center"
autoClose={1100}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    </div>
  );
}

export default App;
