import { card } from "../assets";
import { layout, style } from "../util/style";
import Button from "./button";

function Contract() {
  return (
    <section id="products" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${style.heading2}`}>
          Bir necha oson qadamda <br className="sm:block hidden" /> kontrakt
          tuzish
        </h2>
        <p className={`${style.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quas
          officia vel! Modi consectetur cupiditate nihil sed consequatur et
          neque.
        </p>
        <Button styles={`mt-10`} />
      </div>
      <div className={`${layout.sectionImg}`}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
}

export default Contract;
