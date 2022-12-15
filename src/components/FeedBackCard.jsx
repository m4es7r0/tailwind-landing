import { quotes } from "../assets";

const FeedBackCard = (props) => {
  const { content, name, title, img } = props;

  return (
    <div className="feature-card flex flex-col justify-between xs:w-[370px] w-[320px] h-[395px] rounded-[20px] py-[60px] px-[40px] group">
      <div>
        <img
          src={quotes}
          alt="quotes"
          className="flex-1 object-contain transition-all duration-[0.4s] brightness-50 group-hover:brightness-100"
        />
        <p className="text-lg leading-8 tracking-[0.02em] text-white font-poppins mt-10">
          {content}
        </p>
      </div>

      <div className="flex flex-row items-center">
        <img src={img} alt={name} className="w-[48px] h-[48px] mr-4" />
        <div>
          <h6 className="text-white text-[20px] leading-8 font-poppins">
            {name}
          </h6>
          <p className="text-dimWhite font-poppins">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedBackCard;
