// components/PowerfulFeatures.tsx
import React from 'react';
import Image from 'next/image';

interface FeatureIconProps {
    imageSrc: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    customClass?: string; // NEW prop
}

const FeatureIcon: React.FC<FeatureIconProps> = ({ imageSrc, top, left, right, bottom, customClass }) => {
    return (
        <div
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 ${customClass ?? ''}`}
            style={{ top, left, right, bottom }}
        >
            <Image
                src={imageSrc}
                alt="Feature icon"
                width={100}
                height={100}
                className="rounded-full"
            />
        </div>
    );
};


const PowerfulFeatures: React.FC = () => {
    return (
        <section className="py-6 px-4 text-white relative overflow-hidden">
            {/* Main heading */}
            <div className='absolute top-15 right-220'>
                <img src="/images/PowerfullFeaturesimgs/shade.png" alt="side shade" />
            </div>


            <div className="text-center">
                <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold">Powerful Features <br />At Your Fingertips.</h2>
            </div>
            <div className="relative mx-auto w-full max-w-3xl aspect-square">
                <div className="relative w-full h-full">
                    <div className="absolute inset-0">
                        <Image
                            src="/images/Powerfullfeaturesimgs/circle-large.png"
                            alt="Large circle"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    <div className="absolute  inset-[19%]">
                        <Image
                            src="/images/PowerfullFeaturesimgs/circle-medium.png"
                            alt="Medium circle"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className="absolute md:top-95 top-40 inset-[30%]">
                        <Image
                            src="/images/PowerfullFeaturesimgs/circle-small.png"
                            alt="Small circle"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Features positioned correctly */}
                    <FeatureIcon
                        imageSrc="/images/PowerfullFeaturesimgs/FeatureIcon1.png"
                        top="23%"
                        left="50%"
                        customClass="feature-icon"

                    />


                    <FeatureIcon
                        imageSrc="/images/PowerfullFeaturesimgs/FeatureIcon2.png"
                        top="50%"
                        right="-5%"
                        customClass="feature-icon"
                    />

                    <FeatureIcon
                        imageSrc="/images/PowerfullFeaturesimgs/FeatureIcon3.png"
                        bottom="38%"
                        right="37%"
                        customClass="feature-icon"
                    />

                    <FeatureIcon
                        imageSrc="/images/PowerfullFeaturesimgs/FeatureIcon4.png"
                        bottom="45%"
                        right="20%"
                        customClass="feature-icon"
                    />

                    <FeatureIcon
                        imageSrc="/images/PowerfullFeaturesimgs/FeatureIcon5.png"
                        top="38%"
                        left="35%"
                        customClass="feature-icon"
                    />

                    <FeatureIcon
                        imageSrc="/images/PowerfullFeaturesimgs/FeatureIcon6.png"
                        top='50%'
                        left="7%"
                        customClass="feature-icon"
                    />
                </div>
            </div>
        </section>
    );
};

export default PowerfulFeatures;