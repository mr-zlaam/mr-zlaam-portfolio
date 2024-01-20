/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect } from "react";
import "./Terms.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Context } from "../../05_Exporter.js";
const Terms = () => {
  const { isDarkMode } = useContext(Context);
  let pageName = "Terms & Conditions";
  useEffect(() => {
    document.title = `Zlaam | ${pageName}`;
    window.scrollTo(0, 0);
  }, [pageName]);
  const hero = `${
    isDarkMode ? "link_animation_light " : "link_animation_dark "
  }`;

  return (
    <>
      <motion.div
        className="terms_parent_container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
      >
        <h1 className="trms_conditons">Terms & Conditions</h1>
        <div className="terms_content_controller">
          <div className="header_txt">
            <strong> Accept my gratitude! </strong>
            <br />
            Before we dive into my awesome web dev skills, let's lay down some
            ground rules like real ones. Consider this a virtual handshake, a
            mutual understanding of what's cool and what ain 't when it comes to
            our collaboration.
          </div>
          <span className="bolder">What I'm all about:</span>
          <ol className="flexing">
            <li className="regular">
              Bringing your digital dreams to life: Websites, apps, you name it.
              I'm like the tech genie in a code lamp, ready to make your visions
              shine online.
            </li>
            <li className="regular">
              Quality before everything: I ain't no shoddy side hustle. I polish
              my code like a championship trophy, delivering projects that work
              flawlessly and look slicker than a freshly waxed skateboard.
            </li>
            <li className="regular">
              Communication on point: No ghosting here. You 'll be in the loop,
              every step of the way, from brainwaves to launch and beyond.
            </li>
          </ol>
          <div className="bolder">Now, some real talk:</div>
          <ol className="flexing">
            <li className="regular">
              No sketchy stuff: My skills are off-limits for anything shady,
              like building websites for weapon trafficking or promoting illegal
              substances. That's a hard no, homie.
            </li>
            <li className="regular">
              Gambling gets a pass: Sorry, high rollers, but crafting online
              casinos ain't my jam. Let's keep this PG-13, yeah?
            </li>
            <li className="regular">
              I can't Work with Django Template Engine. If you just want to
              create backend using
              <strong className="drf"> DRF (Django Rest-Framework) </strong>
              then feel free to contact me.
            </li>
            <li className="regular">
              <strong>For Payment:</strong> If you want to hire me locally, then
              you've got to pay me <strong className="drf">30%</strong> upfront.
              In other cases, like if you hire me through{" "}
              <Link className={`drf ${hero}`}>Fiver</Link> or{" "}
              <Link className={`drf ${hero}`}>UpWork</Link>, then there is no
              need to pay upfront.
            </li>
          </ol>
          <span className="cta quote">
            "So, that's the deal! If you're cool with these terms, let 's build
            something epic together.
            <Link
              to={"/contact"}
              className={`${
                isDarkMode ? "link_animation_light " : "link_animation_dark "
              }`}
            >
              &nbsp; Just hit me up
            </Link>
            and let's get coding!"
            <br />
            Peace out!
          </span>
          <div className="bolder">Zlaam, the Web Dev Wizard....</div>
        </div>
      </motion.div>
    </>
  );
};

export default Terms;
