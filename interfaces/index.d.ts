interface BtnLinkProps {
  title: string;
  link: string;
}

interface SectionProps {
  backgroundColor?: string;
  image: any;
  title: string;
  heading: string;
  content: string;
  buttonProps: BtnLinkProps;
}

type Feature = {
  title: string;
  content: string;
  icon: string;
}

interface FeaturesSectionProps {
  features: Feature[]
}

// Product Card
interface ProductItem {
  id: string;
  title: string;
  price: number;
  slug: string;
  tags: string[];
  thumbnail: any;
}

interface ProductCardState extends ProductItem {
  showAddToCart: boolean;
}

interface ProductCardContext {
  state: ProductCardState;
  handlers: any;
}