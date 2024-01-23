import config from "../../utils/config";
import "./CustomInput.css";

interface Props {
  type: string;
  label: string;
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
}: Props) => {
  return (
    <fieldset className={`CustomInput ${className}`}>
      <legend>{label}</legend>
      <input type={type} placeholder={placeholder} />
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
