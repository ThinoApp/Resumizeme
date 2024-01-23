import config from "../../utils/config";
import "./CustomInput.css";

interface Props {
  type: string;
  label: string;
  value: string;
  name: string;
  handleOnChange: (name: string, value: string) => void;
  className: string;
  placeholder?: string;
  checked?: boolean;
}

const CustomInput = ({
  type,
  label,
  className,
  placeholder = "",
  checked = false,
  handleOnChange,
  name,
  value,
}: Props) => {
  return (
    <fieldset className={`CustomInput ${className}`}>
      <legend>{label}</legend>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={(e) => handleOnChange(name, e.target.value)}
      />
      {checked && (
        <img
          src={`${config.image_base}/assets/images/icon badge check.svg`}
          alt="icon badge check"
        />
      )}
    </fieldset>
  );
};

export default CustomInput;
