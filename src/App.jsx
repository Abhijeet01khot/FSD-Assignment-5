import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Player data submitted successfully!");
  };

  return (
    <div className="game-screen">

      <h1>◆ PLAYER REGISTRATION ◆</h1>

      <div className="main-container">

        {/* FORM */}

        <form onSubmit={handleSubmit} className="form-card">

          <div className="card-header">
            PLAYER SETUP
          </div>

          <div className="form-content">

            <label>PLAYER NAME</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />

            <label>EMAIL</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />

            <label>PHONE</label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone"
            />

            <label>MESSAGE</label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="4"
            ></textarea>

            <button type="submit">
              🎮 START GAME
            </button>

          </div>

        </form>

        {/* LIVE DATA */}

        <div className="preview-card">

          <div className="card-header">
            LIVE PLAYER DATA
          </div>

          <div className="preview-content">

            <div className="data-item">
              <span>NAME</span>
              <strong>
                {formData.name || "Waiting..."}
              </strong>
            </div>

            <div className="data-item">
              <span>EMAIL</span>
              <strong>
                {formData.email || "Waiting..."}
              </strong>
            </div>

            <div className="data-item">
              <span>PHONE</span>
              <strong>
                {formData.phone || "Waiting..."}
              </strong>
            </div>

            <div className="data-item">
              <span>MESSAGE</span>
              <strong>
                {formData.message || "Waiting..."}
              </strong>
            </div>

          </div>

        </div>

      </div>

      <p className="footer-text">
        DATA SYNCHRONIZED IN REAL TIME...
      </p>

    </div>
  );
}

export default App;