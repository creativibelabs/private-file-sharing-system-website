import Image from "next/image";
import React from "react";

interface ContactCardProps {
  title: string;
  btnText: string;
  src: string;
  alt: string;
  imgWidth: number;
  imgHeight: number;
}

const ContactCard = ({
  title,
  btnText,
  src,
  alt,
  imgWidth,
  imgHeight,
}: ContactCardProps) => {
  return (
    <div className="p-6 flex items-center justify-between rounded-2xl border border-emerald-300 backdrop-blur-sm  relative transition-all duration-300 hover:shadow-[0_4px_30px_rgba(16,185,129,0.4)] bg-gradient-to-r from-emerald-600/50 to-emerald-900/50 ">
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <button className="mt-4 text-white border px-4 py-2 rounded-full">
          {btnText}
        </button>
      </div>
      <Image
        src={src}
        alt={alt}
        width={imgWidth}
        height={imgHeight}
      />
    </div>
  );
};

export default ContactCard;
