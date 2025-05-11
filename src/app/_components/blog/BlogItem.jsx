import Link from "next/link";
import Date from '@library/date';
import Image from 'next/image';

const BlogItem = ({ item, index }) => {
  return (
    <>
      <Link href={`/blog/${item.id}`} className="mil-blog-card mil-mb60 mil-c-read">
        <div className="mil-card-cover mil-up">
            <div className="mil-hover-frame">
                <Image src={item.image} fill sizes="(max-width: 768px) 100vw, 50vw" alt={item.title} className="mil-scale-img" data-value-1="1" data-value-2="1.25" />
            </div>
            <div className="mil-hover-overlay"></div>
        </div>
        <h4 className="mil-text mil-fs26 mil-mb30 mil-up">{item.title}</h4>
        <p className="mil-soft mil-up"><Date dateString={item.date} /></p>
      </Link>      
    </>
  );
};
export default BlogItem;
  