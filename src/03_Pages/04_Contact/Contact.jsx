import { useContext, useEffect } from "react";
import "./Contact.scss";
import { Link } from "react-router-dom";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import { Context } from "../../index";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io5";

const Contact = () => {
  const Icons = [
    {
      Icon: MdEmail,
      IconName: "Email",
      path: `mailto:mrzalaam@gmail.com`,
    },
    {
      Icon: BsMessenger,
      IconName: "Messenger",
      path: `https://www.facebook.com/messages/t/100052341221564`,
    },
    {
      Icon: FaLinkedin,
      IconName: "LinkedIn",
      path: `https://www.linkedin.com/in/mr-zlaam-29b944296/`,
    },
    {
      Icon: IoLogoGithub,
      IconName: "Github",
      path: `https://github.com/mr-zlaam`,
    },
    {
      Icon: IoLogoTwitter,
      IconName: "Twitter",
      path: `https://twitter.com/mr_zlaam`,
    },
  ];
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
            to={"/this-page-is-not-available-right-now-we-will-update-it-soon"}
          >
            Read This Before Contact <LiaExternalLinkSquareAltSolid />
          </Link>
        </span>

        <div className="parent_contact_wrapper">
          <div className="contact_wrapper">
            {Icons?.map((icon) => {
              return (
                <div key={icon.IconName} className="icon_control">
                  <span>{<icon.Icon className="icon" />}</span>
                  <span className="cta">
                    <Link
                      to={icon.path}
                      target="_blank"
                      className={`${
                        isDarkMode
                          ? "link_animation_light white_color"
                          : "link_animation_dark black_color"
                      }`}
                    >
                      {icon.IconName}
                    </Link>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
