"use client";

import { useEffect, useRef, useState } from "react";

const ProductTabs = ({items, active}) => {
  const [filterKey, setFilterKey] = useState(active);
  
  useEffect(() => {
      
  }, []);

  useEffect(() => {
    var tab_id = 'tab-'+filterKey;
    var tabContents = document.querySelectorAll('.mil-tab-content');
    tabContents.forEach(function (content) {
        content.classList.remove('mil-current');
    });
    var tabContentElement = document.getElementById(tab_id);
    if (tabContentElement) {
        tabContentElement.classList.add('mil-current');
    }
    if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
    }       
  }, [filterKey]);
  
  const handleFilterKeyChange = (key, e) => {
      e.preventDefault();
      setFilterKey(key);
      const filterLinks = document.querySelectorAll(".mil-tabs li");
      filterLinks.forEach((filter) => {
          const filterValue = filter.getAttribute("data-tab");
          if (filterValue == 'tab-'+key) {
              filter.classList.add("mil-current");
          } else {
              filter.classList.remove("mil-current");
          }
      });
  };

  return (
    <>
      <ul className="mil-tabs mil-up">
        {items.map((tab, key) => (
        <li className={tab.slug == active ? "mil-tab-link mil-current mil-fs18" : "mil-tab-link mil-fs18"} data-tab={`tab-${tab.slug}`} key={`product-tabs-item-${key}`} onClick={(e) => handleFilterKeyChange(tab.slug, e)}>{tab.name}</li>
        ))}
      </ul>
    </>
  );
};
export default ProductTabs;
