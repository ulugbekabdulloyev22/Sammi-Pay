import { style } from "../util/style";

function FeatureCard({ feature }) {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] cursor-pointer feature-card transition-all duration-500`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${style.flexCenter} bg-lightBlue`}
      >
        <img
          src={feature.icon}
          alt={feature.title}
          className={`w-[50%] h-[50%] object-contain`}
        />
      </div>

      <div className={`flex-1 flex flex-col ml-3`}>
        <h4
          className={`font-montserrat font-semibold text-white text-[18px] leading-[23px] mb-1`}
        >
          {feature.title}
        </h4>
        <p
          className={`font-montserrat font-normal text-lightWhite text-[16px] leading-[24px]`}
        >
          {feature.content}
        </p>
      </div>
    </div>
  );
}

export default FeatureCard;
