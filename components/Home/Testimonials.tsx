import React from "react";
import UserCard from "../shared/UserCard";
import { testimonials } from "@/constant/constant";
import Image from "next/image";

const Testimonials = () => {
  return (
    <>
    <div className="relative top-18 -left-4">
      <Image src={"/images/polygon.png"} width={100} height={100} alt="polygon icon" />
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
      <div className="relative -top-15 left-290 -z-1">
      <Image src={"/images/polygon.png"} width={100} height={100} alt="polygon icon" />
    </div>
    </>
  );
};

export default Testimonials;
