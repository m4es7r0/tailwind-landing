import Button from "./reuse/Button";

import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content }) => (
  <div
    className={`md:max-w-[483px] max-w-full flex items-center flex-col xs:flex-row p-6 rounded-[20px] mb-10 last:mb-0 [&>*]:cursor-default feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue  mb-5 xs:mb-0`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>

    <div className="flex-1 flex flex-col ml-0 xs:ml-5 xs:place-items-start place-items-center">
      <h4 className="font-poppins font-semibold text-white text-lg leading-6 mb-2">
        {title}
      </h4>
      <p className="font-poppins text-dimWhite xs:text-start text-center">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h2>

        <p className={`${styles.paragraph} max-w-[542px] mt-6`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button styles="mt-16" />
      </div>

      <ul className={`${layout.sectionImg} flex-col list-none`}>
        {features.map((el) => (
          <FeatureCard key={el.id} {...el} />
        ))}
      </ul>
    </section>
  );
};

export default Business;
