import React from "react";
import "./rating.scss";

const Rating = (props: any) => {
  const { rating, numReviews } = props;
  return (
    <div>
      <div className="rating">
        <span>
          <i
            className={
              rating >= 1
                ? "fas fa-star"
                : rating >= 0.5
                ? "fa-solid fa-star-half-stroke"
                : "fa-regular fa-star"
            }
          />
        </span>
        <span>
          <i
            className={
              rating >= 2
                ? "fas fa-star"
                : rating >= 1.5
                ? "fa-solid fa-star-half-stroke"
                : "fa-regular fa-star"
            }
          />
        </span>
        <span>
          <i
            className={
              rating >= 3
                ? "fas fa-star"
                : rating >= 2.5
                ? "fa-solid fa-star-half-stroke"
                : "fa-regular fa-star"
            }
          />
        </span>
        <span>
          <i
            className={
              rating >= 4
                ? "fas fa-star"
                : rating >= 3.5
                ? "fa-solid fa-star-half-stroke"
                : "fa-regular fa-star"
            }
          />
        </span>
        <span>
          <i
            className={
              rating >= 5
                ? "fas fa-star"
                : rating >= 4.5
                ? "fa-solid fa-star-half-stroke"
                : "fa-regular fa-star"
            }
          />
        </span>
        <span> {numReviews} reviews</span>
      </div>
    </div>
  );
};

export default Rating;
