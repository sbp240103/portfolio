import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.png';
import mail from '../../assets/mail.jpg';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.jpg';
import leetcode from '../../assets/leetcode.png';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "097b26a1-d6f7-4ad9-9115-61da99732701");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("mail sent successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to send me a message 
            about anything you want me to work on. You can contact me anytime.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <a href="mailto:mbbsbnpv@gamil.com" target="_blank" rel="noopener noreferrer">
                <img src={mail} alt="Email" />
              </a>
            </div>
            <div className="contact-detail">
              <a href="https://www.linkedin.com/in/pushkar-singh-5095362b6/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </div>
            <div className="contact-detail">
              <a href="https://github.com/sbp240103" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" />
              </a>
            </div>
            <div className="contact-detail">
              <a href="https://leetcode.com/u/sbp2003/" target="_blank" rel="noopener noreferrer">
                <img src={leetcode} alt="LeetCode" />
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' required />

          <label>Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' required />

          <label>Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>

          <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
