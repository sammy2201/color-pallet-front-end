import SectionTitle from "../../home/title/SectionTitle";
import featuresData from "./FeaturesData";
import SingleFeature from "../singleFeature/SingleFeature";

const YetToComeFeatures = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle title="Our Yet To Come Features" paragraph="" center />
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default YetToComeFeatures;
