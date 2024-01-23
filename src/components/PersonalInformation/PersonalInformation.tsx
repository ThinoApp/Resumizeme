import { MouseEvent } from "react";
import config from "../../utils/config";
import CustomInput from "../CustomInput/CustomInput";
import "./PersonalInformation.css";
interface PersonalInformationProps {
  state: {
    firstName: string;
    lastName: string;
    city: string;
    postalCode: string;
    address: string;
    email: string;
    phone: string;
    password: string;
  };
  handleOnChange: (name: string, value: string) => void;
  handleOnSubmit: (e: MouseEvent) => void;
}

const PersonalInformation = ({
  state,
  handleOnChange,
  handleOnSubmit,
}: PersonalInformationProps) => {
  return (
    <div className="PersonalInformation">
      <h2>Personal Information</h2>
      <div className="PersonalInformation-info">
        <form>
          <CustomInput
            handleOnChange={handleOnChange}
            value={state.firstName}
            type="text"
            label="First name"
            name="firstName"
            placeholder="Enter your first name"
            className="form-control"
          />
          <CustomInput
            handleOnChange={handleOnChange}
            value={state.lastName}
            type="text"
            label="Last name"
            name="lastName"
            placeholder="Enter your last name"
            className="form-control"
          />
          <CustomInput
            handleOnChange={handleOnChange}
            value={state.city}
            type="text"
            label="City"
            name="city"
            placeholder="Enter Your city"
            className="form-control"
          />
          <CustomInput
            handleOnChange={handleOnChange}
            value={state.postalCode}
            type="text"
            label="Postal Code"
            name="postalCode"
            placeholder="Your postal code"
            className="form-control"
          />
          <CustomInput
            handleOnChange={handleOnChange}
            value={state.address}
            type="text"
            label="Address"
            name="address"
            placeholder="Enter your Address"
            className="form-control address"
          />
          <CustomInput
            handleOnChange={handleOnChange}
            value={state.email}
            type="email"
            label="Email"
            name="email"
            placeholder="Enter Your email"
            className="form-control"
            checked={true}
          />
          <CustomInput
            handleOnChange={handleOnChange}
            value={state.phone}
            type="number"
            label="Phone"
            name="phone"
            placeholder="Enter your phone"
            className="form-control"
          />
          <CustomInput
            handleOnChange={handleOnChange}
            value={state.password}
            type="password"
            label="Password"
            name="password"
            placeholder="Enter your password"
            className="form-control"
          />

          <p className="useToLog">
            Use this email to log in to your
            <span> resumedone.io </span>
            account and receive notifications.
          </p>
          <div className="btn-submit-container">
            <button onClick={handleOnSubmit}>Save</button>
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
