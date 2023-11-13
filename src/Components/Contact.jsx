import React from "react";
import "../styles/Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact us</h1>
        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="Abc@gmail.com" />
          </div>
          <div>
            <label>Msg.</label>
            <input
              type="text"
              required
              placeholder="Tell Us About Problem..."
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
