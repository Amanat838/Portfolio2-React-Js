import { useState } from "react";
import SectionTitle from "./SectionTitle";
import SkyE from "./works/SkyE";
import Devsinc from "./works/Devsinc";
import CUE from "./works/CUE";

const Experience = () => {
  const [workCUS, setWorkCUS] = useState(true);
  const [workDevsinc, setWorkDevsinc] = useState(false);
  const [workSkyE, setWorkSkyE] = useState(false);

  const handleCUS = () => {
    setWorkCUS(true);
    setWorkDevsinc(false);
    setWorkSkyE(false);
  };

  const handleDevsinc = () => {
    setWorkCUS(false);
    setWorkDevsinc(true);
    setWorkSkyE(false);
  };

  const handleSkyE = () => {
    setWorkCUS(false);
    setWorkDevsinc(false);
    setWorkSkyE(true);
  };
  return (
    <section id="experience" className="py-10 lg:py-24">
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleCUS}
            className={`${
              workCUS
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            CodeUpScale
          </li>
          <li
            onClick={handleDevsinc}
            className={`${
              workDevsinc
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Devsinc
          </li>
          <li
            onClick={handleSkyE}
            className={`${
              workSkyE
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            SkyElectric
          </li>
        </ul>
        {workCUS && <CUE />}
        {workDevsinc && <Devsinc />}
        {workSkyE && <SkyE />}
      </div>
    </section>
  );
};

export default Experience;
