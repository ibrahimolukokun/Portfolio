import Link from "next/link";

const ProductRelated = ({ items }) => {
  return (
    <>
        <div>
            <h2 className="mil-fs-42 mil-mb60 mil-up">Categories</h2>
            <ul className="mil-category">
                {items.map((item, key) => (
                <li className="mil-up" key={`blog-categories-item-${key}`}>
                  <Link href={`/blog/category/${item.id}`}>{item.title}</Link>
                </li>
                ))}
            </ul>
        </div>
    </>
  );
};
export default ProductRelated;