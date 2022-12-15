import { feedback } from "../constants";
import styles from "../style";
import FeedBackCard from "./FeedBackCard";

const Testimonals = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        What people are <br className="sm:block hidden" /> saying about us
      </h2>
      <p
        className={`${styles.paragraph} max-w-[455px] md:self-center self-start md:mt-0 mt-6`}
      >
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className="flex flex-1 flex-wrap gap-6 justify-center sm:mt-12 mt-6 p-5 exs:p-0">
      {feedback.map((el) => (
        <FeedBackCard
          key={el.id}
          content={el.content}
          name={el.name}
          title={el.title}
          img={el.img}
        />
      ))}
    </div>
  </section>
);

export default Testimonals;
