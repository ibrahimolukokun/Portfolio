import Data from "@data/sections/latest-posts.json";
import Date from '@library/date';
import Link from "next/link";
import Image from 'next/image';

const LatestPostsSection = ( { posts, paddingTop = 0, paddingBottom = 90 } ) => {    
    return (
        <>
            {/* blog */}
            <div className={`mil-p-${paddingTop}-${paddingBottom}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mil-mb90">
                            <span className="mil-suptitle mil-accent mil-mb30 mil-up">{Data.subtitle}</span>
                            <h2 className="mil-fs42 mil-up">{Data.title}</h2>
                        </div>
                        {posts.slice(0, Data.numOfItems).map((item, key) => (
                        <div className="col-lg-6" key={`latest-posts-item-${key}`}>
                            <Link href={item.link} target="_blank" rel="noopener noreferrer" className="mil-blog-card mil-mb30 mil-c-read">
                                <div className="mil-card-cover mil-up">
                                    <div className="mil-hover-frame">
                                        <Image src={item.image} fill sizes="(max-width: 768px) 100vw, 50vw" alt={item.title} className="mil-scale-img" data-value-1="1" data-value-2="1.25" />
                                    </div>
                                    <div className="mil-hover-overlay"></div>
                                </div>
                                <h4 className="mil-text mil-fs26 mil-mb30 mil-up">{item.title}</h4>
                                <p className="mil-soft mil-up"><Date dateString={item.date} /></p>
                            </Link>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* blog end */}
        </>
    );
};

export default LatestPostsSection;
