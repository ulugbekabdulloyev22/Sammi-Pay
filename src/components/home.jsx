import { discount, robot } from "../assets";
import { style } from "../util/style";
import Button from "./button";

function Home() {
  return (
    <section
      id="home"
      className={`${style.paddingY} flex md:flex-row flex-col`}
    >
      {/* Animation image */}
      <div className={`flex-1 ${style.flexStart} md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt="romot"
          className={`w-[100%] h-[100%] relative z-10 rounded-lg`}
        />
      </div>

      {/* Informarion */}
      <div
        className={`flex-1 ${style.flexStart} flex-col xl:px-0 sm:px-16 px-6 relative`}
      >
        {/* Discount informarion */}
        <div className="flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 bg-slate-500 bg-discount-gradient">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${style.paragraph} ml-2`}>
            <span className="text-white">20%</span> Chegirma{" "}
            <span className="text-white">1 Oylik</span> Hisob Uchun
          </p>
        </div>

        {/* Title */}
        <div className={`w-full`}>
          <h1 className={`${style.heading1}`}>
            Yangi Avlod <br />{" "}
            <span className="text-gradient">To'lov Usuli</span>
          </h1>
        </div>

        {/* Description */}
        <p className={`${style.paragraph} mt-5 max-w-[550px]`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
          ipsum eos et maxime alias voluptas voluptatibus temporibus, ipsam
          facere pariatur, perspiciatis doloribus aut autem perferendis.
        </p>

        {/* Getting Started */}
        <Button styles={"mt-3"} />

        {/* Gradient Background */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 blue__gradient" />
        <div className="absolute z-[1] w-[50%] h-[50%] right-20 bottom-20 white__gradient" />
      </div>
    </section>
  );
}

export default Home;
