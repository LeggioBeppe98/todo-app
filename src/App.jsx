
import './App.css'
import Main from './components/Main';
import Sidebar from './components/Sidebar'; 

function App() {
  
  const user ={id: 1, name: "John Doe", image: "https://github.com/lifeisfoo.png"};
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar user={user} />
        <Main />
      </div>
    </div>
  )
}

export default App
