// components/PowerfulFeatures.tsx
import React from 'react';
import Image from 'next/image';

interface FeatureIconProps {
    imageSrc: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
}

const FeatureIcon: React.FC<FeatureIconProps> = ({ imageSrc, top, left, right, bottom }) => {
    return (
        <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110"
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Powerful Features <br />At Your Fingertips.</h2>
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
                    <div className="absolute top-95 inset-[30%]">
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
                    />
                   

                    <FeatureIcon
                        imageSrc="/images/PowerfullFeaturesimgs/FeatureIcon2.png"
                        top="50%"
                        right="-5%"
                    />

                    <FeatureIcon
                        imageSrc="/images/PowerfullFeaturesimgs/FeatureIcon3.png"
                        bottom="38%"
                        right="37%"
                    />

                    <FeatureIcon
                        imageSrc="/images/PowerfullFeaturesimgs/FeatureIcon4.png"
                        bottom="45%"
                        right="20%"
                    />

                    <FeatureIcon
                        imageSrc="/images/PowerfullFeaturesimgs/FeatureIcon5.png"
                        top="38%"
                        left="35%"
                    />

                    <FeatureIcon
                        imageSrc="/images/PowerfullFeaturesimgs/FeatureIcon6.png"
                        top='50%'
                        left="7%"
                    />
                </div>
            </div>
        </section>
    );
};

export default PowerfulFeatures;