import { clients } from "../constants";
import styles, { layout } from "../style";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-6 mb-24`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-4 cursor-pointer transition-all duration-[0.4s] hover:brightness-200`}
          >
            <img
              src={client.logo}
              alt="client_logo"
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
