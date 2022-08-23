import './App.css';
import { CryptoList } from './CryptoList';
import CryptoProvider from "./CryptoContext";

function App() {
  return (
    <CryptoProvider>
      <div className="App">
        <CryptoList />
      </div>
    </CryptoProvider>

  );
}

export default App;
