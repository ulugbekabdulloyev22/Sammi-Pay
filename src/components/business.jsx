import { features } from "../util/constants";
import { layout, style } from "../util/style";
import Button from "./button";
import FeatureCard from "./feature-card";

function Business() {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${style.heading2}`}>
          Bizne rivojlantiring <br className="sm:block hidden" /> pulni hal
          qilamiz
        </h2>
        <p className={`${style.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iure
          maiores, eius quae et earum? Vel aperiam beatae quidem dolorum!
        </p>

        <Button styles={`mt-10`} />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features &&
          features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
      </div>
    </section>
  );
}

export default Business;
