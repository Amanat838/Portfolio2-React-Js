import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const SkyE = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        MERN Stack Developer Intern
        <span className="text-textGreen tracking-wide">@SkyElectric</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2020 - Dec 2020
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Assisted in developing and deploying full-stack web applications using
          MongoDB, Express.js, React.js, and Node.js, contributing to scalable
          project architecture.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Designed and integrated RESTful APIs to enable seamless communication
          between frontend and backend services.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated with senior developers to implement secure authentication
          and authorization using JWT and middleware.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Participated in code reviews, bug fixing, and feature enhancements,
          improving overall system efficiency and user experience.
        </li>
      </ul>
    </motion.div>
  );
};

export default SkyE;
