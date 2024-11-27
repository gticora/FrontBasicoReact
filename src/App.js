import logo from './logo.svg';
import './App.css';
import ListaOrdenada from './components/ListaOrdenada';

function App() {

  const personas = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Luis', edad: 20 },
    { nombre: 'María', edad: 30 },
  ];

  return (
    <div className="container mt-4">
      <header className="text-center my-4">
        <h1 className="display-4 text-success">Bienvenido a mi aplicación React</h1>
      </header>
      <ListaOrdenada personas={personas} />
    </div>
  );

}

export default App;
