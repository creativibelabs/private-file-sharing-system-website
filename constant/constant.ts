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
