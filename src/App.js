
import './App.css';
import Register from './component/register/Register';
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button";

function App() {
  return (
    <Container> 
    <div className="App">
      <header className="App-header">
       <h1 className='text-danger'>Hoşgeldiniz</h1>

      </header>
      <Button variant="success"> Hadi Bize Katılmak İçin Tıkla</Button>
      <Register/>
    </div>
    </Container>
  );
}

export default App;
