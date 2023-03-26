import { useEffect, useRef, useState } from "react";

export function HeadlineDynamicText() {
  const headlineElementsRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const headlineElements = headlineElementsRef.current.querySelectorAll(
      ".headline-dynamic-text"
    );

    const totalHeadlines = headlineElements.length;
    let intervalId;

    if (totalHeadlines) {
      intervalId = setInterval(() => {
        const currentElement = headlineElements[currentIndex];
        currentElement?.classList.remove(
          "headline-text-active",
          "animate-slideDownIn"
        );
        currentElement?.classList.add(
          "headline-text-inactive",
          "animate-slideDownOut",
          "hidden-css"
        );

        const nextIndex = (currentIndex + 1) % totalHeadlines;
        const nextElement = headlineElements[nextIndex];
        nextElement?.classList.add(
          "headline-text-active",
          "animate-slideDownIn"
        );
        nextElement?.classList.remove(
          "headline-text-inactive",
          "animate-slideDownOut",
          "hidden-css"
        );

        setTimeout(() => {
          currentElement?.classList.remove("top-0");
        }, 1000);

        setCurrentIndex(nextIndex);
      }, 2000);
    }

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div ref={headlineElementsRef}>
      <div className='block py-1 px-0 leading-5 text-4xl'>
        <div className='align-bottom headline-slide-down mb-5'>
          Help us create
        </div>
        <div className='headline-dynamic-wrapper text-shadow'>
          <span className='headline-dynamic-text headline-text-active'>
            4kImages
          </span>
          <span className='headline-dynamic-text headline-text-inactive'>
            FullBlogs
          </span>
          <span className='headline-dynamic-text headline-text-inactive'>
            Influencerposts
          </span>
          <span className='headline-dynamic-text headline-text-inactive'>
            Ads
          </span>
        </div>
      </div>
    </div>
  );
}
