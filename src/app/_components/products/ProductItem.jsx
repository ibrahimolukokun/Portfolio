import Link from "next/link";
import Image from 'next/image';

const ProductItem = ({ item, index }) => {
  return (
    <>
      <Link href={"/product"} className="mil-store-card mil-c-view mil-up">
          <div className="mil-cover-frame mil-mb30">
              <Image src={item.image} fill sizes="(max-width: 768px) 100vw, 25vw" alt={item.title} />
          </div>
          <div className="mil-description">
              <h5 className="mil-fs18 mil-mb15">{item.title}</h5>
              <p className="mil-soft">{item.currency}{item.price}</p>
          </div>
      </Link>
    </>
  );
};
export default ProductItem;
