import Image, { StaticImageData } from "next/image";
import React from "react";

interface UserCardProps {
  name: string;
  avatar: StaticImageData | string;
  rating: number;
  comment: string;
}

const UserCard = ({ name, avatar, rating, comment }: UserCardProps) => {
  return (
    <div className="bg-emerald-900/40 rounded-2xl p-6 border border-emerald-800 backdrop-blur-sm">
      <div className="space-y-13">
        <div className="relative">
          <span className="absolute -top-3 left-0 text-emerald-400 text-4xl">"</span>
          <p className="text-gray-100 text-sm leading-relaxed pt-4">
            {comment}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full overflow-hidden">
            <Image
              src={avatar}
              alt={name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-gray-100 font-medium">{name}</h3>
            <div className="flex gap-1">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-4 h-4 ${
                    index < rating ? "text-[#39FF14]" : "text-emerald-50/30"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard; 