import { apple, bill, google } from "../assets";
import { layout, style } from "../util/style";

function Billing() {
  return (
    <section id="features" className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img
          src={bill}
          alt="bill"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* Gradient Background */}
        <div className="absolute z-[3] -left-1/2 w-[50%] h-[55%] rounded-full top-0 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 rounded-full bottom-0 pink__gradient" />
        <div className="absolute z-[1] w-[40%] h-[40%] right-20 bottom-20 blue__gradient" />
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${style.heading2}`}>
          Hisob-kitob va fakturial <br className="sm:block hidden" /> osongina
          boshqaring
        </h2>
        <p className={`${style.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          dignissimos id neque magnam eaque! Vero dolores incidunt odio quae
          distinctio!
        </p>

        <div className={`flex flex-row flex-wrap sm:mt-10 mt-6`}>
          <img
            src={google}
            alt="google"
            className={`w-[129px] h-[49px] object-contain mr-5 cursor-pointer`}
          />
          <img
            src={apple}
            alt="apple"
            className={`w-[129px] h-[49px] object-contain mr-5 cursor-pointer`}
          />
        </div>
      </div>
    </section>
  );
}

export default Billing;
