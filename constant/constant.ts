import FB from "@/public/social-icons/facebook.png";
import IG from "@/public/social-icons/instagram.png";
import X from "@/public/social-icons/x.png";
import TG from "@/public/social-icons/telegram.png";
import YT from "@/public/social-icons/youtube.png";
import TT from "@/public/social-icons/tiktok.png";

import VISA from "@/public/payment-icons/visa.png";
import JCB from "@/public/payment-icons/jcb.png";
import MC from "@/public/payment-icons/master-card.png";
import ST from "@/public/payment-icons/stripe.png";

import avatar from "@/public/images/avatar.png";

export const paymentIcons = [
  {
    icon: VISA,
    title: "Visa",
    link: "https://www.visa.com",
  },
  {
    icon: MC,
    title: "Mastercard",
    link: "https://www.mastercard.com",
  },
  {
    icon: JCB,
    title: "JCB",
    link: "https://www.global.jcb",
  },
  {
    icon: ST,
    title: "Stripe",
    link: "https://stripe.com",
  },
];

export const navList = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Pricing",
    path: "/pricing",
  },
  {
    title: "Support",
    path: "/support",
  },
  {
    title: "FAQs",
    path: "/faqs",
  },
  {
    title: "Tutorial",
    path: "/",
  },
];

export const socialIcons = [
  {
    icon: FB,
    title: "Facebook",
    link: "https://www.facebook.com/yourpage",
  },
  {
    icon: IG,
    title: "Instagram",
    link: "https://www.instagram.com/yourpage",
  },
  {
    icon: X,
    title: "X",
    link: "https://twitter.com/yourpage",
  },
  {
    icon: TG,
    title: "Telegram",
    link: "https://t.me/yourpage",
  },
  {
    icon: YT,
    title: "YouTube",
    link: "https://www.youtube.com/yourpage",
  },
  {
    icon: TT,
    title: "TikTok",
    link: "https://www.tiktok.com/@yourpage",
  },
];

export const quickLinks = [
  {
    title: "Home",
    link: "/about",
  },
  {
    title: "Pricing",
    link: "/pricing",
  },
  {
    title: "Support",
    link: "/support",
  },
  {
    title: "Tutorials",
    link: "/tutorials",
  },
  {
    title: "FAQs",
    link: "/faqs",
  },
];

export const legalLinks = [
  {
    title: "Terms of Service",
    link: "/terms-of-service",
  },
  {
    title: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    title: "Payment Policy",
    link: "/payment-policy",
  },
  {
    title: "Refund Policy",
    link: "/refund-policy",
  },
];

export const testimonials = [
  {
    name: "John Williams",
    avatar: avatar,
    rating: 4,
    comment:
      "OHHHH Thanks god !!!! Finally there is someone making it for me to use on my projects. Love ya",
  },
  {
    name: "Sarah Chen",
    avatar: avatar,
    rating: 5,
    comment:
      "This is exactly what I needed for my file management. The security features are top-notch!",
  },
  {
    name: "Michael Rodriguez",
    avatar: avatar,
    rating: 4,
    comment:
      "Great interface and super easy to use. Exactly what I was looking for in a private file sharing system.",
  },
];

export const steps = [
  {
    number: "01",
    title: "Upload Your Files",
    description: "Upload Your Files Instantly With Secure Encryption.",
    // icon: "/images/Group 200.png",
    icon: "/images/icons/upload.png",
  },
  {
    number: "02",
    title: "Manage Securely",
    description: "Effortlessly Organize And Protect Your Data.",
    icon: "/images/icons/secure.png",
  },
  {
    number: "03",
    title: "Unlimited Access",
    description: "Access Your Files From Anywhere, Anytime, Securely.",
    icon: "/images/icons/access.png",
  },
  {
    number: "04",
    title: "Seamless Sharing",
    description:
      "Share Your Files Easily With Secure Links And Instant Access.",
    icon: "/images/icons/share.png",
  },
];

export const pricingPlans = {
  monthly: [
    {
      title: "Basic",
      price: "Free",
      desc: "Get started for free",
      msg: "What you will get",
      features: [
        { feature: "5 GB Storage", included: true },
        { feature: "Basic Sharing", included: true },
        { feature: "File Encryption", included: true },
        { feature: "Email Support", included: false },
        { feature: "Advanced Security", included: false },
      ],
      buttonText: "Sign Up Free",
    },
    {
      title: "Basic",
      price: "Free",
      desc: "Get started for free",
      msg: "What you will get",
      features: [
        { feature: "10 GB Storage", included: true },
        { feature: "Advanced Sharing", included: true },
        { feature: "File Encryption", included: true },
        { feature: "Email Support", included: true },
        { feature: "Basic Security", included: true },
      ],
      buttonText: "Sign Up Free",
    },
    {
      title: "Pro",
      price: 9.99,
      period: "month",
      msg: "What you will get",
      desc :"Power + Security for Individuals",
      features: [
        { feature: "50 GB Storage", included: true },
        { feature: "Advanced Sharing", included: true },
        { feature: "File Encryption", included: true },
        { feature: "Priority Support", included: true },
        { feature: "Advanced Security", included: true },
      ],
      buttonText: "Get Started",
      popular: true,
    },
    {
      title: "Enterprise",
      price: "Custom",
      msg: "What you will get",
      desc :"Built for Teams & Businesses",
      features: [
        { feature: "Unlimited Storage", included: true },
        { feature: "Team Sharing", included: true },
        { feature: "Advanced Encryption", included: true },
        { feature: "24/7 Support", included: true },
        { feature: "Custom Security", included: true },
      ],
      buttonText: "Contact Sales",
    },
  ],
  yearly: [
    {
      title: "Basic",
      price: "Free",
      desc: "Get started for free",
      msg: "What you will get",
      features: [
        { feature: "5 GB Storage", included: true },
        { feature: "Basic Sharing", included: true },
        { feature: "File Encryption", included: true },
        { feature: "Email Support", included: false },
        { feature: "Advanced Security", included: false },
      ],
      buttonText: "Sign Up Free",
    },
    {
      title: "Basic",
      price: "Free",
      desc: "Get started for free",
      msg: "What you will get",
      features: [
        { feature: "10 GB Storage", included: true },
        { feature: "Advanced Sharing", included: true },
        { feature: "File Encryption", included: true },
        { feature: "Email Support", included: true },
        { feature: "Basic Security", included: true },
      ],
      buttonText: "Sign Up Free",
    },
    {
      title: "Pro",
      price: 99.99,
      period: "year",
      desc :"Power + Security for Individuals",
      msg: "What you will get",
      features: [
        { feature: "50 GB Storage", included: true },
        { feature: "Advanced Sharing", included: true },
        { feature: "File Encryption", included: true },
        { feature: "Priority Support", included: true },
        { feature: "Advanced Security", included: true },
      ],
      buttonText: "Get Started",
      popular: true,
    },
    {
      title: "Enterprise",
      desc :"Built for Teams & Businesses",
      price: "Custom",
      msg: "What you will get",
      features: [
        { feature: "Unlimited Storage", included: true },
        { feature: "Team Sharing", included: true },
        { feature: "Advanced Encryption", included: true },
        { feature: "24/7 Support", included: true },
        { feature: "Custom Security", included: true },
      ],
      buttonText: "Contact Sales",
    },
  ],
};
