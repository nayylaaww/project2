const ContactUs = ({ onClose }) => {
    return (
      <div className="contact-popup-container">
        <div className="contact-popup">
          <button className="close-btn" onClick={onClose}>X</button>
          <img src="/contact.png" alt="Contact Info" className="contact-image" />
        </div>
      </div>
    );
  };
  
  export default ContactUs;
  