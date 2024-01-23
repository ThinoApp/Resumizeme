import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <p className="Footer-show-profile">
        <input type="checkbox" id="showProfile" />
        <label htmlFor="showProfile">
          Show my profile to serious employers on
          <span className="highlight"> hirethesbest.io </span>
          for free
        </label>
      </p>
      <div className="Footer-delete-account">
        <h3>Delete account</h3>
        <p>
          If you delete your account you’ll be permanently removing it from our
          systems - you can’t undo it.
        </p>
        <p className="Footer-confirm-delete">Yes, Delete my account</p>
      </div>

      <p className="Footer-get-in-touch">
        <span>Get in touch with our support team </span>
        if you have any question or want to leave some feedback. We’ll be happy
        to hear from you.
      </p>
      <ul className="Footer-privacy">
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
        <li>FAQ</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Footer;
