"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

import { useEffect } from "react";

const PageBanner = ({ pageTitle, breadTitle, bgImage }) => {
  const asPath = usePathname();

  let clearBreadTitle;

  if ( breadTitle != undefined ) {
    clearBreadTitle = breadTitle;
  } else {
    const regex = /(<([^>]+)>)/gi;
    clearBreadTitle = pageTitle.replace(regex, "");
  }

  if ( pageTitle == 'Search: %s' ) {
    const searchParams = useSearchParams();
    const query = searchParams.get('key');
    
    pageTitle = 'Search: '+query;
  }
  
  useEffect(() => {
    
  }, []);

  return (
    
    <>
      {/* banner */}
      <div className="mil-banner-inner">
          <div className="container">
              <div className="mil-banner-text">
                  <div>
                      <h1 className="mil-fs68 mil-mb30" dangerouslySetInnerHTML={{__html : pageTitle}} />
                      <ul className="mil-breadcrumbs">
                          <li><Link href="/" className="mil-c-gone">Home</Link></li>
                          {asPath.indexOf('/blog/') != -1 && asPath.indexOf('/blog/page/') == -1 &&
                          <li>
                            <Link href="/blog" className="mil-c-gone">Blog</Link>
                          </li>
                          }
                          {asPath.indexOf('/projects/') != -1 &&
                          <li>
                            <Link href="/projects" className="mil-c-gone">Projects</Link>
                          </li>
                          }
                          {asPath.indexOf('/services/') != -1 &&
                          <li>
                            <Link href="/services" className="mil-c-gone">Services</Link>
                          </li>
                          }
                          <li><a dangerouslySetInnerHTML={{__html : clearBreadTitle}} /></li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className="mil-banner-img">
              <Image src={bgImage} fill sizes="100vw" priority alt="banner" className="mil-scale-img" data-value-1=".90" data-value-2="1.11" />
          </div>
      </div>
      {/* banner end */}
    </>
  );
};
export default PageBanner;
