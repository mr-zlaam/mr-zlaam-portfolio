import { useEffect } from "react";
import { BsMessenger } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io5";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Contact.scss";

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
  return (
    <>
      <div className="contact_container">
        <span className="cta term_navigator">
          <Link
            className={`
             link_animation_light 
            }`}
            onClick={() => alert("We will Update this page soon")}
            to={"/contact"}
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
                      className={`link_animation_light white_color`}
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
