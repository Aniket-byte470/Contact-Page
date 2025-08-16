import { useState } from "react";
import "./App.css";
import Navigation from "./Components/Navigation.jsx";
import ContactHeader from "./Components/ContactHeader.jsx";
import ContactForm from "./Components/ContactForm.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navigation />
      <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
