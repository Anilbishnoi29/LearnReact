import logo from './logo.svg';
import './App.css';
import Demo from './Components/Demo';
import Profile from './Components/Profile';
import List from './Components/List';

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
      <List />
    </div>
  );
}

export default App;
