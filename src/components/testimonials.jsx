import { feedback } from "../util/constants";
import { style } from "../util/style";
import { FeedbackCard } from "./";

function Testimonials() {
  return (
    <div className={`${style.paddingY} ${style.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div
        className={`w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]`}
      >
        <h2 className={`${style.heading2}`}>
          Odamlar biz haqimizda qanday fikirda
        </h2>
        <div className={`w-full md:mt-10 mt-6`}>
          <p className={`${style.paragraph} text-left max-w-[550px]`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
            praesentium dolorem reiciendis recusandae! Ex, atque iste.
          </p>
        </div>
      </div>

      <div
        className={`flex flex-wrap sm:justify-start justify-center w-full relative z-[1]`}
      >
        {feedback &&
          feedback.map((item, idx) => (
            <FeedbackCard idx={idx} feedback={item} />
          ))}
      </div>
    </div>
  );
}

export default Testimonials;
