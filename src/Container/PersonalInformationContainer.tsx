import { useState, MouseEvent } from "react";
import PersonalInformation from "../components/PersonalInformation/PersonalInformation";

const PersonalInformationContainer = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    city: "",
    postalCode: "",
    address: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleOnChange = (name: string, value: string) => {
    setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleOnSubmit = (e: MouseEvent) => {
    e.preventDefault();
    alert(JSON.stringify(state));
  };
  return (
    <>
      <PersonalInformation {...{ state, handleOnChange, handleOnSubmit }} />
    </>
  );
};

export default PersonalInformationContainer;
