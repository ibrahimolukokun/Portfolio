import ProductItem from "@components/products/ProductItem";

const ProductRelated = ({ items }) => {
  return (
    <>
        <div className="col-12 mil-p-120-60">
            <h2 className="mil-fs42 mil-up mil-mb90">You may also like</h2>
            <div className="row">
                {items.map((item, key) => (
                <div className="col-md-6 col-lg-3 mil-mb60" key={`related-products-item-${key}`}>
                    <ProductItem item={item} index={key} />
                </div>
                ))}
            </div>
        </div>
    </>
  );
};
export default ProductRelated;