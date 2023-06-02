import React from "react";
import { StarIcon } from "@heroicons/react/solid";

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = [];
  for (let i = 1; i <= 10; i++) {
    const starColor = i <= fullStars ? "text-yellow-400" : "text-gray-300";
    stars.push(<StarIcon key={i} className={`w-5 h-5 ${starColor}`} />);
  }

  if (hasHalfStar) {
    stars.splice(
      fullStars,
      1,
      <StarIcon key="half" className="w-5 h-5 text-yellow-400" />
    );
  }

  return <div className="flex items-center space-x-1">{stars}</div>;
};

export default Rating;
