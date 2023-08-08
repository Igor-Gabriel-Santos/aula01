
import { FiSearch } from "react-icons/fi";
import './styles.css';
function App() {
  return (
    <div className="container">
     <h1 className="title">Buscador de Cep</h1>
     <div className="containerInput">
      <input type="text" placeholder="Digite aqui..." />
      <button className="buttonSearch">
        <FiSearch size={25} color="#f1f1f1"/>
      </button>
     </div>
    </div>
  );
}

export default App;

