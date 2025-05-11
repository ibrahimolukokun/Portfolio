'use client';

import BlogItem from '@components/blog/BlogItem';

import { useEffect, useState, useCallback } from "react";

const PaginatedBlogPosts = ({ items, limit, columns = 2 }) => {

  const [data, setData] = useState(items.slice(0, limit));
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('Load more');

  const loadMoreData = async () => {
      setIsLoading(true);
      let newPostsData = items.slice(page*limit, (page+1)*limit);
      if ( newPostsData.length > 0 ) {
          setData(currentData => [...currentData, ...newPostsData]);
          setPage(currentPage => currentPage + 1);
      
          setTimeout(() => {
              setIsLoading(false);
          }, 500);
      } else {
          setLoadingText('No more');
      }
  };

  const onScroll = useCallback(async () => { 
      if (window.innerHeight + window.scrollY >= document.querySelector('.mil-blog-container').offsetTop + document.querySelector('.mil-blog-container').offsetHeight && !isLoading) {
          await loadMoreData();
      }
  }, [isLoading, page]); // Dependencies

  useEffect(() => {
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return (
    <>
      <div className="container mil-blog-container">
          <div className="row">
              {data.map((item, key) => (
              <div className={columns == 3 ? "col-lg-4": "col-lg-6"} key={`blog-item-${key}`}>
                  <BlogItem item={item} index={key} />
              </div>
              ))}
              {isLoading &&
              <div className="col-12">
                  <div className="mil-more-loader mil-mt-60 mil-up">
                      <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="mil-loader">
                          <path d="M20.7812 3.28125C20.7812 5.12695 19.2773 6.5625 17.5 6.5625C15.6543 6.5625 14.2188 5.12695 14.2188 3.28125C14.2188 1.50391 15.6543 0 17.5 0C19.2773 0 20.7812 1.50391 20.7812 3.28125ZM17.5 28.4375C19.2773 28.4375 20.7812 29.9414 20.7812 31.7188C20.7812 33.5645 19.2773 35 17.5 35C15.6543 35 14.2188 33.5645 14.2188 31.7188C14.2188 29.9414 15.6543 28.4375 17.5 28.4375ZM31.7188 14.2188C33.4961 14.2188 35 15.7227 35 17.5C35 19.3457 33.4961 20.7812 31.7188 20.7812C29.873 20.7812 28.4375 19.3457 28.4375 17.5C28.4375 15.7227 29.873 14.2188 31.7188 14.2188ZM6.5625 17.5C6.5625 19.3457 5.05859 20.7812 3.28125 20.7812C1.43555 20.7812 0 19.3457 0 17.5C0 15.7227 1.43555 14.2188 3.28125 14.2188C5.05859 14.2188 6.5625 15.7227 6.5625 17.5ZM7.38281 24.3359C9.22852 24.3359 10.6641 25.7715 10.6641 27.6172C10.6641 29.3945 9.22852 30.8984 7.38281 30.8984C5.60547 30.8984 4.10156 29.3945 4.10156 27.6172C4.10156 25.7715 5.60547 24.3359 7.38281 24.3359ZM27.5488 24.3359C29.3262 24.3359 30.8301 25.7715 30.8301 27.6172C30.8301 29.3945 29.3262 30.8984 27.5488 30.8984C25.7031 30.8984 24.2676 29.3945 24.2676 27.6172C24.2676 25.7715 25.7031 24.3359 27.5488 24.3359ZM7.38281 4.16992C9.22852 4.16992 10.6641 5.67383 10.6641 7.45117C10.6641 9.29688 9.22852 10.7324 7.38281 10.7324C5.60547 10.7324 4.10156 9.29688 4.10156 7.45117C4.10156 5.67383 5.60547 4.16992 7.38281 4.16992Z" />
                      </svg>
                      <p className="mil-text-16 mil-suptitle mil-light">{loadingText}</p>
                  </div>
              </div>
              }
          </div>
      </div>
    </>
  );
};
export default PaginatedBlogPosts;
  