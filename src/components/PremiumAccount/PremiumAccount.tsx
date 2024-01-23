import config from "../../utils/config";
import "./PremiumAccount.css";

const PremiumAccount = () => {
  return (
    <div className="PremiumAccount">
      <div className="career-container">
        <img
          src={`${config.image_base}/assets/images/career.svg`}
          alt="career icon"
        />
      </div>
      <div className="PremiumAccount-content">
        <h2>Premium Account</h2>
        <p>
          You have a premium account, granting you access to all the remarkable
          features offered by ResumeDone. With this privilege, you can indulge
          in the freedom of downloading an unlimited number of resumes and cover
          letters in both PDF and Word formats.
        </p>
      </div>
    </div>
  );
};

export default PremiumAccount;
