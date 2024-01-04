/* eslint-disable react/no-unescaped-entities */
import {} from "react";
import "./Terms.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Terms = () => {
  return (
    <>
      <motion.div
        className="terms_parent_container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
      >
        <h1 className="trms_conditons">Terms & Conditions</h1>
        <div className="terms_content_controller">
          <div className="div_1">
            <div className="header_txt">
              <strong> Yo! Zlaam back in the building! </strong>
              <br />
              Before we dive into my awesome web dev skills, let{"'"}s lay down
              some ground rules like real ones. Consider this a virtual
              handshake, a mutual understanding of what{"'"}s cool and what ain
              {"'"}t when it comes to our collaboration.
            </div>
            <span className="bolder">What I{"'"}m all about:</span>
            <ul className="flexing">
              <li className="regular">
                <strong>1.</strong> Bringing your digital dreams to life:
                Websites, apps, you name it. I{"'"}m like the tech genie in a
                code lamp, ready to make your visions shine online.
              </li>
              <li className="regular">
                <strong>2.</strong> Quality before everything: I ain{"'"}t no
                shoddy side hustle. I polish my code like a championship trophy,
                delivering projects that work flawlessly and look slicker than a
                freshly waxed skateboard.
              </li>
              <li className="regular">
                <strong>3.</strong> Communication on point: No ghosting here.
                You{"'"}ll be in the loop, every step of the way, from
                brainwaves to launch and beyond.
              </li>
            </ul>
            <div className="bolder">Now, some real talk:</div>
            <ul>
              <li className="regular">
                <strong>1.</strong> No sketchy stuff: My skills are off-limits
                for anything shady, like building websites for weapon
                trafficking or promoting illegal substances. That{"'"}s a hard
                no, homie.
              </li>
              <li className="regular">
                <strong>2.</strong>Gambling gets a pass: Sorry, high rollers,
                but crafting online casinos ain{"'"}t my jam. Let{"'"}s keep
                this PG-13, yeah?
              </li>
              <li className="regular">
                <strong>3.</strong>Respect the copyright: Don{"'"}t ask me to
                build your site on stolen content. Let{"'"}s keep it original
                and legal, or risk getting slapped by the copyright police.
              </li>
            </ul>
            <div className="dark_green">
              "So, that{"'"}s the dealio! If you{"'"}re cool with these terms,
              let{"'"}s build something epic together.
              <Link to={"/contact"} className="txt_blue default">
                {" "}
                Just hit me up
              </Link>{" "}
              &nbsp; and let{"'"}s get coding!"
              <br />
              Peace out, yo!
            </div>
            <div className="bolder">Zlaam, the Web Dev Wizard....</div>
          </div>
          <div className="div_2"></div>
        </div>
      </motion.div>
    </>
  );
};

export default Terms;
