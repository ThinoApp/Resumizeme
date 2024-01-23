import { useState } from "react";
import config from "../../utils/config";
import "./Nav.css";
import { boards, templates } from "./Nav.utils";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`Nav ${isOpen ? "close" : "open"}`}>
      <div
        className={`Nav-mobile-menu ${!isOpen ? "open" : "close"}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`Nav-main ${isOpen ? "show" : "hide"}`}>
        <div className="Nav-header">
          <img
            src={`${config.image_base}/assets/images/Resumizeme.svg`}
            alt="logo"
          />
        </div>
        <div className="Nav-liste">
          <h3>
            <img
              src={`${config.image_base}/assets/images/icon template.svg`}
              alt="icon template"
            />
            <span>My templates</span>
          </h3>
          <div className="search-container">
            <img
              src={`${config.image_base}/assets/images/icon search.svg`}
              alt="icon search"
            />
            <input type="text" placeholder="Search" />
          </div>
          <ul className="Nav-liste">
            {templates.star.map((item, index) => (
              <li className="Nav-item" key={"star" + index}>
                <img
                  src={`${config.image_base}/assets/images/star.png`}
                  alt="icon star"
                />
                <span>{item}</span>
              </li>
            ))}
            {templates.wait.map((item, index) => (
              <li className="Nav-item" key={"wait" + index}>
                <img
                  src={`${config.image_base}/assets/images/clock.png`}
                  alt="icon clock"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="Nav-liste">
          <h3>
            <img
              src={`${config.image_base}/assets/images/icon board.png`}
              alt="icon board"
            />
            My boards
            <img
              src={`${config.image_base}/assets/images/icon mini add.png`}
              alt="icon mini add"
            />
          </h3>
          <ul className="Nav-liste">
            {boards.open.map((item, index) => (
              <li className="Nav-item" key={"open" + index}>
                <img
                  src={`${config.image_base}/assets/images/folder.png`}
                  alt="icon folder"
                />
                <span>{item}</span>
              </li>
            ))}
            {boards.close.map((item, index) => (
              <li className="Nav-item" key={"board" + index}>
                <img
                  src={`${config.image_base}/assets/images/lock.png`}
                  alt="icon lock"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="Nav-footer">
          <img
            src={`${config.image_base}/assets/images/carla.png`}
            alt="avatar icon"
          />
          <p>Carla</p>
          <img
            src={`${config.image_base}/assets/images/icon settings.svg`}
            alt="icon settings"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
