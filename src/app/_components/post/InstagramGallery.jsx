const ProductRelated = ({ items }) => {
  return (
    <>
        <div className="mil-p-0-60">
            <h2 className="mil-fs-42 mil-mb60 mil-up">Instagram gallery</h2>
            <div className="mil-instagram mil-up">
                {items.map((item, key) => (
                <div className="mil-insta" key={`instagram-gallery-item-${key}`}>
                    <a href={item.link} target="_blank">  
                      <img src={item.image} alt={item.alt} />
                    </a>
                </div>
                ))}
            </div>
        </div>
    </>
  );
};
export default ProductRelated;