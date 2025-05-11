import React, { Fragment } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import OkaiLayout from "@layouts/OkaiLayout";

import ProductReviewItem from "@components/products/ProductReviewItem";
import ProductButtonsSection from "@components/products/ProductButtons";
import ShareButtonsSection from "@components/ShareButtons";
import ProductRelatedSection from "@components/products/ProductRelated";

const ProductImagesSlider = dynamic( () => import("@components/sliders/ProductImages"), { ssr: true } );
const ProductTabs = dynamic( () => import("@components/products/ProductTabs"), { ssr: true } );

export const metadata = {
  title: {
		default: "Product",
	},
  description: AppData.settings.siteDescription,
}

async function ProductPage() {
  const ProductData = {
    "images": [
      {
        "image": "/img/store/item/1.png",
        "alt": "image"
      },
      {
        "image": "/img/store/item/2.png",
        "alt": "image"
      },
      {
        "image": "/img/store/item/3.png",
        "alt": "image"
      }
    ],
    "title": "Padded orange chair",
    "price": "529.99",
    "currency": "$",
    "stockStatus": "Avaliable",
    "rating": 4,
    "short": "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules."
  }

  async function ProductDescription() {
    return (
      <>
        <h2 className="mil-fs32 mil-up mil-mb30">Description</h2>
        <p className="mil-text mil-soft mil-up">Fringilla phasellus, placerat auctor litora consectetur praesent netus aptent ut ornare netus dictum vivamus et volutpat, nunc lorem enim urna pellentesque egestas gittis ut magna consequat nibh turpis.</p>
      </>
    );
  };

  async function ProductReviews() {
    const ReviewsData = [
      {
        "title": "Very tasty",
        "name": "Emma Newman",
        "rating": 5,
        "image": "/img/faces/1.jpg",
        "date": "04.03.2024",
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugiat totam nobis quas unde excepturi inventore possimus laudantium provident, rem eligendi velit. Aut molestias, ipsa itaque laborum, natus tempora, ut soluta animi ducimus dignissimos deserunt doloribus in reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum!"
      },
      {
        "title": "I have lunch here every day",
        "name": "Paul Trueman",
        "rating": 5,
        "image": "/img/faces/2.jpg",
        "date": "02.03.2024",
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugiat totam nobis quas unde excepturi inventore possimus laudantium provident, rem eligendi velit. Aut molestias, ipsa itaque laborum, natus tempora, ut soluta animi ducimus dignissimos deserunt doloribus in reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum!"
      }
    ];
    
    return (
        <ul className="mil-comments">
          {ReviewsData.map((item, key) => (
          <li key={`product-reviews-item-${key}`}>
            <ProductReviewItem item={item} key={key} />
          </li>
          ))}
        </ul>
    );
  };

  const tabs = [
    {
      "slug": "description",
      "name": "Description"
    },
    {
      "slug": "reviews",
      "name": "Reviews"
    }
  ];

  const related = [
    {
      "title": "Rest hammock",
      "image": "/img/store/1.png",
      "price": "279.95",
      "currency": "$"
    },
    {
      "title": "Yellow collection bookcase",
      "image": "/img/store/2.png",
      "price": "155.25",
      "currency": "$"
    },
    {
      "title": "Tricolore chair",
      "image": "/img/store/3.png",
      "price": "127.50",
      "currency": "$"
    },
    {
      "title": "Product prototype",
      "image": "/img/store/4.png",
      "price": "199.99",
      "currency": "$"
    }
  ]

  return (
    <OkaiLayout>
      {/* product */}
      <div className="mil-p-240-0 mil-992-p-150-0">
          <div className="container">
              <div className="row mil-jcc">
                  <div className="col-md-8">
                      <ProductImagesSlider items={ProductData.images} />

                      <span className="mil-suptitle mil-accent mil-mb30 mil-up">{ProductData.stockStatus}</span>
                      <h2 className="mil-fs42 mil-up mil-mb30">{ProductData.title}</h2>
                      <div className="mil-rating mil-mb60 mil-up">
                          <div className="mil-stars">
                              {[1,2,3,4,5].map((item, key) => (
                              <Fragment key={`product-rating-item-${key}`}>
                              {item <= ProductData.rating ? (
                              <i className="far fa-star"></i>
                              ) : (
                              <i className="far fa-star mil-empty"></i>
                              )}
                              </Fragment>
                              ))}
                          </div>
                          <p>{ProductReviews.length} customer reviews</p>
                      </div>
                      <p className="mil-fs30 mil-soft mil-mb60 mil-up">{ProductData.currency}{ProductData.price}</p>
                      <p className="mil-text mil-soft mil-mb60 mil-up">{ProductData.short}</p>

                      <ProductButtonsSection />
                      
                      <ShareButtonsSection />
                      
                      <ProductTabs 
                        items={tabs}
                        active={"description"}
                      />

                      {tabs.map((tab, key) => (
                      <div id={`tab-${tab.slug}`} className={key == 0 ? "mil-tab-content mil-current" : "mil-tab-content"} key={`product-tab-${key}`}>
                          {tab.slug == 'description' && <ProductDescription />}
                          {tab.slug == 'reviews' && <ProductReviews />}
                      </div>
                      ))}
                  </div>
                  
                  <ProductRelatedSection items={related} />
                  
              </div>
          </div>
      </div>
      {/* product end */}
    </OkaiLayout>
  );
};
export default ProductPage;