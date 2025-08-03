import { motion } from "framer-motion";
const Banner = () => {
  return (
    <section id="home" className="py-10 md:py-24 flex flex-col gap-4 lg:gap-8">
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lg:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Syed Amanat Ali.
        <span className="text-textDark mt-2 lg:mt-4 text-5xl">
          Transforming concepts into code ⚡
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        I am a web developer with 4+ years of experience in Frontend Development and 2+ years of experience in Full Stack Development. I have a
        strong foundation in DSA & OOP and am skilled in
        creating user-friendly and responsive web applications with API integration.
       
      </motion.p>
      <a href="https://github.com/Amanat838?tab=repositories" target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          Check out my projects!
        </motion.button>
      </a>
    </section>
  );
};

export default Banner;
