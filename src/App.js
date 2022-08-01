import logo from './logo.svg';
import './App.css';
import Demo from './Components/Demo';
import Profile from './Components/Profile';
import List from './Components/List';
import Welcome,{ WelcomeClass } from './Components/Welcome';

function App() {
  let titleHereA = "Hello ";
  let titleHereB = "there";
  let dataName = "anil";
  return (
    <div className='app'>
      {/* <Demo title={ titleHereA + titleHereB } dataName={ dataName } />
      <Demo />
      <h3><u>Conditional Rendering</u></h3>
      <Profile /> */}
      {/* <List title="BMW" heading="BMW-1" subHeading="BMW-1.1" content="BMW......" /> */ }
      <Welcome name="Anil Bishnoi" />
      <WelcomeClass name="Anil Bishnoi" />
    </div>
  );
}

export default App;
