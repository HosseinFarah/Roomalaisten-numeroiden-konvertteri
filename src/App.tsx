import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { romanToDecimal, validateRoman } from "./romanConverter";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [errMassage, setErrMessage] = useState<string | null>(null);
  

  const handleConvert = () => {
    const validationError = validateRoman(input);
    if (validationError) {
      toast.error(validationError); // Show validation error as toast
      setResult(validationError);
      setErrMessage(validationError);
      return;
    }

    try {
      const decimal = romanToDecimal(input);
      const successMessage = `Desimaaliarvo: ${decimal}`;
      toast.success(successMessage); // Show success message as toast
      setResult(successMessage);
      setErrMessage(null);
    } catch (error) {
      const errorMessage = (error as Error).message;
      toast.error(errorMessage); // Show conversion error as toast
      setResult(errorMessage);
      setErrMessage(errorMessage);
    }
  };

  return (
    <>
      <h1 className="text-center text-secondary fs-3">Roomalaisten numeroiden konvertteritehtävä</h1>
      <hr className='mb-4 border-2 border-warning'/>

      <div
        className="card p-4 mx-auto mt-4"
        style={{
          maxWidth: '500px',
          borderRadius: '15px',
          boxShadow: errMassage === null
            ? '0 0 31px rgba(30, 139, 195, 0.9)' // Blue shadow for valid
            : '0 0 31px rgba(207, 0, 15, 0.9)', // Red shadow for invalid
        }}
      >
        <input
          type="text"
          className="form-control mb-3 text-center fs-5 rounded border-info text-success"
          placeholder="Syötä roomalainen numero"
          value={input}
          onChange={(e) => setInput(e.target.value.toUpperCase())}
        />
        <div className="d-flex justify-content-center">
          <button  onClick={handleConvert} className="btn btn-warning w-50 shadow-xl fs-6 rounded">
          Muuntaa
          </button>
        </div>
        {result && (
          <p
            className="mt-3 text-center"
            style={{ color: errMassage !== null ? 'red' : 'green' }}
          >
            {result}
          </p>
        )}
      </div>
      <ToastContainer position="top-center" autoClose={1500} />
      <footer className="text-center mt-4 text-secondary">
        <hr className='mb-2 border-1 border-secondary'/>
        Developed by Hossein Farahkordmahaleh
      </footer>
    </>
  );
}

export default App;
