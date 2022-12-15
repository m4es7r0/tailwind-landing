import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap gap-[75px] sm:mb-16 mb-6`}
    >
      {stats.map((el, index) => (
        <>
          <div key={el.id} className={`${styles.flexCenter} flex-1 max-w-fit`}>
            <h4 className="text-white font-poppins font-semibold xs:text-[40px] xs:leading-[53px] text-[30px] leading-[43px]">
              {el.value}
            </h4>
            <p className="text-gradient font-poppins xs:text-[20px] xs:leading-[26px] text-[15px] leading-[21px] uppercase ml-4">
              {el.title}
            </p>
          </div>
          {stats.length - 1 === index ? null : (
            <span className="text-dimWhite font-poppins xs:text-[20px] xs:leading-[26px] text-[15px] leading-[21px] uppercase lg:block hidden">
              |
            </span>
          )}
        </>
      ))}
    </section>
  );
};

export default Stats;
