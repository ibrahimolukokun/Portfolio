import Link from "next/link";
import Date from '@library/date';

const RecentPosts = ({ items, numOfItems }) => {
  return (
    <>
        <div className="mil-p-0-60">
          <h2 className="mil-fs-42 mil-mb60 mil-up">Recent post</h2>
          {items.slice(0, numOfItems).map((item, key) => (
          <Link href={`/blog/${item.id}`} key={`recent-post-item-${key}`} className="mil-blog-card mil-card-sm mil-mb30 mil-c-read">
              <div className="mil-card-cover mil-up">
                  <div className="mil-hover-frame">
                      <img src={item.image} alt={item.title} className="mil-scale-img" data-value-1="1" data-value-2="1.25" />
                  </div>
              </div>
              <div className="mil-descr mil-up">
                  <h4 className="mil-text mil-fs18 mil-mb10">{item.title}</h4>
                  <p className="mil-soft mil-fs12"><Date dateString={item.date} /></p>
              </div>
          </Link>
          ))}
        </div>
    </>
  );
};
export default RecentPosts;