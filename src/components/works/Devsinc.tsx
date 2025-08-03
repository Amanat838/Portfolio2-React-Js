import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Devsinc = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Frontend Developer
        <span className="text-textGreen tracking-wide">@Devsinc</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2021 - Dec 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed and maintained responsive, user-friendly web interfaces
          using React.js, JavaScript (ES6), and Tailwind CSS, improving page
          load speed by 30%.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated with designers and backend engineers to implement
          pixel-perfect UI components and ensure seamless API integration.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Optimized website performance through code splitting, lazy loading,
          and browser caching, resulting in a 25% boost in Lighthouse
          performance scores.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implemented cross-browser compatibility and mobile-first designs,
          enhancing user experience across multiple devices and screen sizes.
        </li>
      </ul>
    </motion.div>
  );
};

export default Devsinc;
