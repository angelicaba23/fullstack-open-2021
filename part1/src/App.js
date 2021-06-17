
import './App.css';
import Mensaje from './Mensaje';
const Description = () =>{
  return <p>Esta es una prueba</p>

}
function App() {
  const info = 'Hello world!'
  const a = 2
  const b = 3
  return (
    <div className="App">
      {info + ', from Angelica'} 
      <h1>Hola</h1>
      <Mensaje color='red' nombre ='Ange'/>
      <Mensaje color= 'blue' nombre = 'Martha'/>
      <Mensaje></Mensaje>
      <Description />
      
      <br />  
      <p>el resultado es:</p>
      {a + b}

    </div>
  );
}

export default App;
