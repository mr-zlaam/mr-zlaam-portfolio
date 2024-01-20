import { useContext, useEffect } from "react";
import "./Contact.scss";
import { Link } from "react-router-dom";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import { Context } from "../../05_Exporter.js";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";

const Contact = () => {
  let pageName = "Contact";
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Zlaam | ${pageName}`;
  }, [pageName]);
  const { isDarkMode } = useContext(Context);
  return (
    <>
      <div className="contact_container">
        <span className="cta term_navigator">
          <Link
            className={`${
              isDarkMode ? "link_animation_light " : "link_animation_light "
            }`}
            to={"/terms"}
          >
            Read This Before Contact <LiaExternalLinkSquareAltSolid />
          </Link>
        </span>

        <div className="parent_contact_wrapper">
          <div className="contact_wrapper">
            <div className="email icon_control ">
              <span>
                <MdEmail className="icon" />
              </span>
              <span className="cta">
                <Link
                  target="_blank"
                  className={`${
                    isDarkMode
                      ? "link_animation_light white_color"
                      : "link_animation_dark black_color"
                  }`}
                  to="mailto:mrzalaam@gmail.com"
                >
                  mrzalaam@gmail.com
                </Link>
              </span>
            </div>
            <div className="messenger icon_control">
              <span className="icon">
                <BsMessenger className="icon" />
              </span>
              <span className="cta">
                <Link
                  target="_blank"
                  className={`${
                    isDarkMode
                      ? "link_animation_light white_color"
                      : "link_animation_dark black_color"
                  }`}
                  to={"https://www.facebook.com/messages/t/100052341221564"}
                >
                  Messenger
                </Link>
              </span>
            </div>
            <div className="linkedin icon_control">
              <span className="icon">
                <FaLinkedin className="icon" />
              </span>
              <span className="cta">
                <Link
                  target="_blank"
                  className={`${
                    isDarkMode
                      ? "link_animation_light white_color"
                      : "link_animation_dark black_color"
                  }`}
                  to={"https://www.linkedin.com/in/mr-zalaam-29b944296/"}
                >
                  LinkedIn
                </Link>
              </span>
            </div>
            <div className="github icon_control">
              <span className="icon">
                <IoLogoGithub className="icon" />
              </span>
              <span className="cta">
                <Link
                  target="_blank"
                  className={`${
                    isDarkMode
                      ? "link_animation_light white_color"
                      : "link_animation_dark black_color"
                  }`}
                  to={"https://github.com/mr-zlaam"}
                >
                  Github
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
