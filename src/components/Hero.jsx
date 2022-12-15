import GetStarted from "./GetStarted";

import styles from "../style";
import { discount, robot } from "../assets";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-1 px-2.5 mb-4 bg-discount-gradient rounded-xl font-poppins uppercase text-white">
        <img src={discount} alt="discount" className="h-8 w-8 mr-3" />
        <p className="xs:text-lg text-[13px]">
          20% <span className="text-dimWhite">DISCOUNT FOR</span> 1 MONTH{" "}
          <span className="text-dimWhite">ACCOUNT</span>
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-white text-5xl ss:text-7xl ss:leading-[100px] leading-[75px]">
          The Next <br className="sm:block hidden" />
          <span className="text-gradient">Generation </span> <br />
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      <h1 className="font-poppins font-semibold text-white text-5xl ss:text-7xl ss:leading-[100px] leading-[75px] w-full">
        Payment Method.
      </h1>

      <p className={`${styles.paragraph} max-w-[470px] mt-10`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. <br /> We examine annual percentage rates,
        annual fees.
      </p>
    </div>

    <div className={`ss:hidden mt-10 py-4 ${styles.flexCenter}`}>
      <GetStarted />
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={robot}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      {/* gradient end */}
    </div>
  </section>
);

export default Hero;
