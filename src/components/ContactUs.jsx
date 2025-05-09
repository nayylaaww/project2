const ContactUs = ({ onClose }) => {
  return (
    <div className="contact-popup-container">
      <div className="contact-popup">
        <img src="/contact.png" alt="Contact Info" className="contact-image" />
        <button className="close-btn" onClick={onClose}>✖</button>
      </div>
    </div>
  );
};

export default ContactUs;
                                                                                                                                                                                                                                                                                                                                                                                                          