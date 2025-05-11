import FooterLayoutDefault from "./LayoutDefault";
import FooterLayoutTransparent from "./LayoutTransparent";

const Footer = ({ layout }) => {
  switch (layout) {
    case 'transparent':
      return <FooterLayoutTransparent />;
    default:
      return <FooterLayoutDefault />;
  }
};
export default Footer;
