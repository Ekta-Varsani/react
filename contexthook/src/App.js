import logo from './logo.svg';
import './App.css';
import CompA from './Component/CompA';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <CompA />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
