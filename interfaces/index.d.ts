interface SectionProps {
  backgroundColor?: string;
  image: any;
  title?: string;
  heading?: string;
  content: any;
  buttonText?: string;
  buttonLink?: string;
}

type Feature = {
  title: string;
  content: string;
  icon: string;
}

interface FeaturesSectionProps {
  features: Feature[]
}

interface PageProps {
  pageTitle: string;
  sections: any;
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

// Post Item Card
interface PostItemProps {
  createdAt: string;
  slug: string;
  title: string;
  imgUrl: string;
}