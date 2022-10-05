import React, { useEffect } from 'react'
import style from './StarRating.module.css';

function StarRating({ reviews, displayDetails = true }) {

    const starTotal = reviews.reduce((last, current) => {
      return last + current.star_rating;
    }, reviews[0].star_rating);

    const starAverage = (Math.round(starTotal / reviews.length * 10) / 10);

    const fullStars = Math.floor(starAverage);

    const starArr = [];

    for(let i = 1; i <= fullStars; i++)
    {
      starArr.push(1);
    }

    const partialStar = starAverage - fullStars;
    starArr.push(partialStar);
    const emptyStars = 5 - starArr.length;

    for(let i=1; i<=emptyStars; i++) {
      starArr.push(0);
    }

    const stars = starArr.map(val => {
      return <div className={style.starBox} style={{background: `linear-gradient(90deg, #ff643d, #ff643d ${val * 100}%, #bbbac0 ${val * 100}%)`}}>★</div>
    })

    const details = displayDetails ? <div className={style.data}> 
      <b className={style.average}>{starAverage}</b> ({reviews.length} reviews)</div> 
      : null;

    return (   
    <div className={style.starComponent}>
      <div className={style.starsBox} >
        {stars}
      </div>
      {details}
    </div>
    )
  
}

export default StarRating;