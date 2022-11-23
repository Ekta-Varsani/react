import logo from './logo.svg';
import './App.css';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CardForm from './CardForm'

function App() {
  const stripePromise = loadStripe("pk_test_51LGcrmItXZ8PhVwXtF6JVeSqNAOtuVGRGwSS3N6ghBslmL43k9rJjIfvcpmUOJS1oXJzBCpkDt4kNgVutPkIRtkR00oPNEur4C");
  return (
    <div className="App">
      
       <Elements stripe={stripePromise}>
         <CardForm />
       </Elements>
    </div>
  );
}

export default App;
