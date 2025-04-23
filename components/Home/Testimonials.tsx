import React from "react";
import UserCard from "../shared/UserCard";
import { testimonials } from "@/constant/constant";

const Testimonials = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <UserCard
          key={index}
          name={testimonial.name}
          avatar={testimonial.avatar}
          rating={testimonial.rating}
          comment={testimonial.comment}
        />
      ))}
    </div>
  );
};

export default Testimonials; 