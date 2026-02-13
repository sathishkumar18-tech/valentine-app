import { useState } from "react";
import "./App.css";

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [position, setPosition] = useState({ top: "50%", left: "60%" });
  const [count, setCount] = useState(0);

  const moveNoButton = () => {
    const messages = [
      "Are you sure? 😢",
      "Think again 😭",
      "Last chance 😤"
    ];

    if (count < messages.length) {
      alert(messages[count]);
    }

    setCount(count + 1);

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    setPosition({
      top: `${y}px`,
      left: `${x}px`
    });
  };

  return (
    <div className="container">
      <h1>Do you love me ❤️ sathish ❤️?</h1>

      <button className="yes" onClick={() => setShowMessage(true)}>
        Yes 😍
      </button>

      <button
        className="no"
        style={{ top: position.top, left: position.left }}
        onMouseEnter={moveNoButton}
      >
        No 😢
      </button>

      {showMessage && <h2 className="message">I knew it 💖 Love you 😘</h2>}
    </div>
  );
}

export default App;
