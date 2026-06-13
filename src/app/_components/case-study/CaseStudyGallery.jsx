"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { MdClose, MdChevronLeft, MdChevronRight, MdZoomIn } from "react-icons/md";

const CaseStudyGallery = ({ gallery = [], title = "" }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const activeItem = activeIndex !== null ? gallery[activeIndex] : null;
  const hasMultiple = gallery.length > 1;

  const close = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((index) =>
      index === null ? null : (index - 1 + gallery.length) % gallery.length
    );
  }, [gallery.length]);

  const showNext = useCallback(() => {
    setActiveIndex((index) =>
      index === null ? null : (index + 1) % gallery.length
    );
  }, [gallery.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, close, showNext, showPrev]);

  if (!gallery.length) return null;

  return (
    <>
      <section className="ib-case-study__gallery" aria-label="Project gallery">
        <div className="ib-container">
          <span className="ib-section__label">Screens</span>
          <h2 className="ib-case-study__section-title">Product in context</h2>
          <div className="ib-case-study__gallery-grid">
            {gallery.map((item, index) => (
              <figure key={index} className="ib-case-study__gallery-item">
                <button
                  type="button"
                  className="ib-case-study__gallery-trigger"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View full size: ${item.alt || item.caption || title}`}
                >
                  <div className="ib-case-study__gallery-frame">
                    <Image
                      src={item.image}
                      alt={item.alt || item.caption || title}
                      fill
                      quality={80}
                      sizes="(max-width: 900px) 100vw, 50vw"
                      className="ib-case-study__gallery-img"
                      unoptimized={item.image?.endsWith(".gif")}
                    />
                    <span className="ib-case-study__gallery-zoom" aria-hidden="true">
                      <MdZoomIn />
                    </span>
                  </div>
                </button>
                {item.caption && (
                  <figcaption>{item.caption}</figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      </section>

      {activeItem && (
        <div
          className="ib-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Full size image viewer"
        >
          <button
            type="button"
            className="ib-lightbox__backdrop"
            onClick={close}
            aria-label="Close full size view"
          />

          <div className="ib-lightbox__content">
            <button
              type="button"
              className="ib-lightbox__close"
              onClick={close}
              aria-label="Close"
            >
              <MdClose />
            </button>

            {hasMultiple && (
              <>
                <button
                  type="button"
                  className="ib-lightbox__nav ib-lightbox__nav--prev"
                  onClick={showPrev}
                  aria-label="Previous image"
                >
                  <MdChevronLeft />
                </button>
                <button
                  type="button"
                  className="ib-lightbox__nav ib-lightbox__nav--next"
                  onClick={showNext}
                  aria-label="Next image"
                >
                  <MdChevronRight />
                </button>
              </>
            )}

            <div className="ib-lightbox__figure">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeItem.image}
                alt={activeItem.alt || activeItem.caption || title}
                className="ib-lightbox__img"
              />
            </div>

            {(activeItem.caption || hasMultiple) && (
              <div className="ib-lightbox__footer">
                {activeItem.caption && (
                  <p className="ib-lightbox__caption">{activeItem.caption}</p>
                )}
                {hasMultiple && (
                  <p className="ib-lightbox__counter">
                    {activeIndex + 1} / {gallery.length}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CaseStudyGallery;
