import config from "../../utils/config";
import CustomInput from "../CustomInput/CustomInput";
import "./PersonalInformation.css";

const PersonalInformation = () => {
  return (
    <div className="PersonalInformation">
      <h2>Personal Information</h2>
      <div className="PersonalInformation-info">
        <form>
          <CustomInput
            type="text"
            label="First name"
            placeholder="Enter your first name"
            className="form-control"
          />
          <CustomInput
            type="text"
            label="Last name"
            placeholder="Enter your last name"
            className="form-control"
          />
          <CustomInput
            type="text"
            label="City"
            placeholder="Enter Your city"
            className="form-control"
          />
          <CustomInput
            type="text"
            label="Postal Code"
            placeholder="Your postal code"
            className="form-control"
          />
          <CustomInput
            type="text"
            label="Adress"
            placeholder="Enter your Adress"
            className="form-control adress"
          />
          <CustomInput
            type="email"
            label="Email"
            placeholder="Enter Your email"
            className="form-control"
            checked={true}
          />
          <CustomInput
            type="number"
            label="Phone"
            placeholder="Enter your phone"
            className="form-control"
          />
          <CustomInput
            type="password"
            label="Password"
            placeholder="Enter your password"
            className="form-control"
          />

          <p className="useToLog">
            Use this email to log in to your
            <span> resumedone.io </span>
            account and receive notifications.
          </p>
          <div className="btn-submit-container">
            <button>Save</button>
          </div>
        </form>
        <img
          src={`${config.image_base}/assets/images/avatar.png`}
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default PersonalInformation;
