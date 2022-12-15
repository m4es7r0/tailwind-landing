import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-full h-full relative z-[5]" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-6`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <div className="flex flex-wrap exm:justify-start justify-center gap-8 mt-12">
        <img
          src={apple}
          alt="app store"
          className="max-w-fit cursor-pointer transition-all border border-transparent rounded-[10px] hover:border-white"
        />
        <img
          src={google}
          alt="google market"
          className="max-w-fit cursor-pointer transition-all border border-transparent rounded-[10px] hover:border-white"
        />
      </div>
    </div>
  </section>
);

export default Billing;
