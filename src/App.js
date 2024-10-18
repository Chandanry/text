
import './App.css';
// import About from './components/about';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {
  return (
<>
<Navbar title="TextUtils" about="About" />
<div className="container">
<Textform heading="Enter Text to Change."/> 
{/* {<About /> */}
</div>
</>
  );
}

export default App;
