import "./Contact.scss";
import { useState } from "react";
const Contact = () => {
  const [message, setMessage] = useState(false);
  const handelSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    console.log('submit');
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="/images/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onClick={ handelSubmit}>
          <input type="text" placeholder="Email" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button type="submit">Send</button>
          {message && (
            <sapn style={{ color: "crimson" }}>Thanks for your message!</sapn>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
