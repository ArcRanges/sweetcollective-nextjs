import FeaturesSection from "containers/FeaturesSection";
import ProductCollection from "containers/ProductCollection";
import RecentPosts from "containers/RecentPosts";
import Section from "containers/Section";

export const sectionTypes = {
  section: Section,
  productCollection: ProductCollection,
  featuresSection: FeaturesSection,
  posts: RecentPosts,
};

export default function DynamicSection({ sections = [] }: any) {
  return (
    <>
      {sections.map((section: any, key: number) => {
        const Component = sectionTypes[section.sys.contentType.sys.id];
        if (Component) return <Component {...section.fields} key={key} />;
        return null;
      })}
    </>
  );
}
