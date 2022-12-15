import Button from "./reuse/Button";
import styles, { layout } from "../style";
import { card } from "../assets";

const CardDeal = () => (
  <section id="deal" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-6 mb-12`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-full h-full relative z-[5]" />
    </div>
  </section>
);

export default CardDeal;
