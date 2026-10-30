//enlish hindi swicher 

// // src/components/GetInTouch.jsx
// import { motion, useReducedMotion } from "framer-motion";
// import { ArrowRight, MapPin, Phone } from "lucide-react";
// import { useLanguage } from "../context/LanguageContext";
// import getInTouchImage from "../assets/images/contact-image.png";

// const container = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 18 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.55,
//       ease: "easeOut",
//     },
//   },
// };

// export default function GetInTouch() {
//   const { lang } = useLanguage();
//   const isHi = lang === "hi";

//   const reduceMotion = useReducedMotion();
//   const initial = reduceMotion ? false : "hidden";

//   return (
//     <section
//       id="contact"
//       aria-labelledby="get-in-touch-heading"
//       className="relative isolate overflow-hidden bg-gradient-to-b from-white via-[#F3F8F5]/60 to-white py-10 sm:py-20 md:-mt-20 lg:py-20"
//     >
//       {/* Subtle decorative ambient glows */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 -z-10"
//       >
//         <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#0F5743]/[0.04] blur-3xl" />
//         <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#ED6E21]/[0.04] blur-3xl" />
//       </div>

//       <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12 2xl:max-w-[1440px]">
//         {/* Two-column contact layout */}
//         <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
//           {/* Left Column: Heading, Description, Contact Cards, and CTA */}
//           <motion.div
//             variants={container}
//             initial={initial}
//             whileInView="show"
//             viewport={{ once: true, amount: 0.15 }}
//             className="flex min-w-0 flex-col justify-between text-left"
//           >
//             {/* Header Group */}
//             <div>
//               <motion.div
//                 variants={fadeUp}
//                 className="flex items-center gap-3"
//               >
//                 <span
//                   aria-hidden="true"
//                   className="h-[2px] w-9 bg-[#ED6E21] sm:w-11"
//                 />
//                 <p className="m-0 text-xs font-semibold uppercase tracking-[0.18em] text-[#ED6E21] sm:text-[13px]">
//                   {isHi ? "संपर्क करें" : "GET IN TOUCH"}
//                 </p>
//               </motion.div>

//               <motion.h2
//                 id="get-in-touch-heading"
//                 variants={fadeUp}
//                 className="mt-4 text-[2rem] font-extrabold leading-[1.12] tracking-tight min-[400px]:text-4xl sm:text-[2.75rem] xl:text-[3rem]"
//               >
//                 <span className="block text-[#0A4033]">
//                   {isHi ? "आइए, अगला कदम" : "Let’s Take the Next"}
//                 </span>
//                 <span className="mt-1 block text-[#ED6E21]">
//                   {isHi ? "साथ मिलकर बढ़ाएँ" : "Step Together"}
//                 </span>
//               </motion.h2>

//               <motion.div
//                 variants={fadeUp}
//                 aria-hidden="true"
//                 className="mt-4 h-[3px] w-14 rounded-full bg-gradient-to-r from-[#ED6E21] to-[#0F5743]"
//               />

//               <motion.p
//                 variants={fadeUp}
//                 className="mt-5 max-w-xl text-sm leading-relaxed text-[#26332E] sm:text-[15px]"
//               >
//                 {isHi
//                   ? "क्या आपको हमारी जमा योजनाओं, ऋण सुविधाओं या सदस्यता प्रक्रिया के बारे में जानकारी चाहिए? हमारा कार्यालय आपको उपलब्ध विकल्पों और लागू आवश्यकताओं को समझने में सहायता कर सकता है।"
//                   : "Have questions about our deposit schemes, loan facilities, or membership process? Our office can help you understand the available options and applicable requirements."}
//               </motion.p>

//               {/* Mobile and tablet image */}
//               <motion.figure
//                 variants={fadeUp}
//                 className="group/img relative mt-6 mb-0 aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#0F5743]/50 bg-[#F3F8F5] shadow-[0_24px_50px_-24px_rgba(10,64,51,0.60)] transition-[border-color,box-shadow] duration-300 ease-in-out hover:border-[#0F5743]/90 hover:shadow-[0_28px_56px_-22px_rgba(10,64,51,0.80)] lg:hidden"
//               >
//                 <img
//                   src={getInTouchImage}
//                   alt={
//                     isHi
//                       ? "कल्याण अर्बन कार्यालय में सदस्यों की सहायता करती ग्राहक सेवा प्रतिनिधि"
//                       : "Customer support representative assisting members at her desk"
//                   }
//                   loading="lazy"
//                   decoding="async"
//                   className="block h-full w-full transform-gpu object-cover object-center transition-transform duration-500 ease-out group-hover/img:scale-105 motion-reduce:transition-none motion-reduce:group-hover/img:scale-100"
//                 />
//               </motion.figure>
//             </div>

//             {/* Contact Cards and CTA */}
//             <div className="mt-7 flex flex-col gap-4 sm:mt-8">
//               {/* Address Card */}
//               <motion.div variants={fadeUp} className="group/card">
//                 <div className="transform-gpu rounded-2xl border border-[#ED6E21]/60 bg-gradient-to-br from-[#ED6E21]/[0.10] to-[#ED6E21]/[0.03] p-4 shadow-[0_10px_26px_-20px_rgba(237,110,33,0.55)] transition-[translate,box-shadow,border-color] duration-300 ease-in-out group-hover/card:-translate-y-[3px] group-hover/card:border-[#ED6E21]/99 group-hover/card:shadow-[0_18px_38px_-20px_rgba(237,110,33,0.70)] motion-reduce:transition-none motion-reduce:group-hover/card:translate-y-0 sm:p-5">
//                   <div className="flex items-start gap-3.5 sm:gap-4">
//                     <span
//                       aria-hidden="true"
//                       className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ED6E21]/10 text-[#ED6E21] transition-colors duration-300 group-hover/card:bg-[#ED6E21]/15 sm:h-12 sm:w-12"
//                     >
//                       <MapPin className="h-5 w-5 stroke-[2.2]" />
//                     </span>

//                     <div className="min-w-0 flex-1">
//                       <h3 className="m-0 text-[15px] font-extrabold leading-snug text-[#0A4033] sm:text-base">
//                         Kalyan Urban Co-operative Credit Society Limited
//                       </h3>

//                       <div className="mt-1.5 flex items-center gap-1.5 text-xs font-bold text-[#0A4033]">
//                         <MapPin
//                           aria-hidden="true"
//                           className="h-3.5 w-3.5 shrink-0 text-[#0F5743]"
//                         />
//                         <span>
//                           {isHi ? "मुख्य कार्यालय का पता:" : "Head Office Address:"}
//                         </span>
//                       </div>

//                       <p className="m-0 mt-1 text-xs leading-relaxed text-[#26332E] sm:text-[13px]">
//                         {isHi
//                           ? "साई आशीर्वाद मोटर्स के पास, गोंदिया–बालाघाट रोड, रावनवाड़ी, गोंदिया, महाराष्ट्र।"
//                           : "Beside Sai Ashirwad Motors, Gondia–Balaghat Road, Rawanwadi, Gondia, Maharashtra."}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Phone Number Card */}
//               <motion.div variants={fadeUp} className="group/card">
//                 <div className="transform-gpu rounded-2xl border border-[#0F5743]/60 bg-gradient-to-br from-[#0F5743]/[0.10] to-[#0F5743]/[0.03] p-4 shadow-[0_10px_26px_-20px_rgba(10,64,51,0.35)] transition-[translate,box-shadow,border-color] duration-300 ease-in-out group-hover/card:-translate-y-[3px] group-hover/card:border-[#0F5743]/99 group-hover/card:shadow-[0_18px_38px_-20px_rgba(10,64,51,0.70)] motion-reduce:transition-none motion-reduce:group-hover/card:translate-y-0 sm:p-5">
//                   <div className="flex items-center gap-3.5 sm:gap-4">
//                     <span
//                       aria-hidden="true"
//                       className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0F5743]/10 text-[#1D63B8] transition-colors duration-300 group-hover/card:bg-[#0F5743]/15 sm:h-12 sm:w-12"
//                     >
//                       <Phone className="h-5 w-5 fill-current" />
//                     </span>

//                     <div className="min-w-0 flex-1">
//                       <p className="m-0 text-xs font-bold text-[#0A4033]">
//                         {isHi ? "फ़ोन नंबर:" : "Phone Number:"}
//                       </p>
//                       <a
//                         href="tel:7776000664"
//                         className="mt-0.5 inline-block text-lg font-extrabold tracking-tight text-[#0A4033] transition-colors duration-300 hover:text-[#ED6E21] focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F5743]/40 sm:text-xl"
//                       >
//                         7776000664
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Call to Action */}
//               <motion.div variants={fadeUp} className="group/card">
//                 <a
//                   href="tel:7776000664"
//                   aria-label={
//                     isHi
//                       ? "अधिक जानकारी के लिए 7776000664 पर कॉल करें"
//                       : "Call Us to Know More at 7776000664"
//                   }
//                   className="relative flex w-full transform-gpu items-center justify-between overflow-hidden rounded-2xl border border-[#ED6E21]/20 bg-gradient-to-r from-[#ED6E21] via-[#ED6E21] to-[#C95716] p-3.5 text-white shadow-[0_14px_28px_-14px_rgba(237,110,33,0.55)] transition-[translate,box-shadow,border-color,filter] duration-300 ease-in-out group-hover/card:-translate-y-[3px] group-hover/card:border-[#ED6E21] group-hover/card:shadow-[0_20px_38px_-14px_rgba(237,110,33,0.7)] group-hover/card:brightness-[1.02] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#ED6E21]/40 active:translate-y-0 motion-reduce:transition-none motion-reduce:group-hover/card:translate-y-0 sm:p-4"
//                 >
//                   <span className="relative z-10 flex items-center gap-3.5 sm:gap-4">
//                     <span
//                       aria-hidden="true"
//                       className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#ED6E21] shadow-sm transition-transform duration-300 ease-in-out group-hover/card:scale-105 motion-reduce:transition-none sm:h-11 sm:w-11"
//                     >
//                       <Phone className="h-4 w-4 fill-current sm:h-5 sm:w-5" />
//                     </span>

//                     <span className="text-sm font-extrabold tracking-wide text-white sm:text-base">
//                       {isHi ? "अधिक जानकारी के लिए कॉल करें" : "Call Us to Know More"}
//                     </span>
//                   </span>

//                   <span
//                     aria-hidden="true"
//                     className="relative z-10 mr-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-white transition-[transform,background-color] duration-300 ease-in-out group-hover/card:translate-x-1 group-hover/card:bg-white/30 motion-reduce:transition-none motion-reduce:group-hover/card:translate-x-0 sm:h-9 sm:w-9"
//                   >
//                     <ArrowRight className="h-4 w-4 stroke-[2.5]" />
//                   </span>
//                 </a>
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Right Column: Dedicated Image — desktop only */}
//           <motion.div
//             variants={fadeUp}
//             initial={initial}
//             whileInView="show"
//             viewport={{ once: true, amount: 0.15 }}
//             className="hidden min-w-0 lg:flex lg:h-full"
//           >
//             <figure className="group/img relative m-0 aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#0F5743]/50 bg-[#F3F8F5] shadow-[0_24px_50px_-24px_rgba(10,64,51,0.60)] transition-[border-color,box-shadow] duration-300 ease-in-out hover:border-[#0F5743]/90 hover:shadow-[0_28px_56px_-22px_rgba(10,64,51,0.80)] sm:aspect-[16/11] lg:aspect-auto lg:h-full">
//               <img
//                 src={getInTouchImage}
//                 alt={
//                   isHi
//                     ? "कल्याण अर्बन में सदस्यों की सहायता करती ग्राहक सेवा प्रतिनिधि"
//                     : "Customer support representative at Kalyan Urban assisting members on the phone at her desk"
//                 }
//                 loading="lazy"
//                 decoding="async"
//                 className="block h-full w-full transform-gpu object-cover object-center transition-transform duration-500 ease-out will-change-transform group-hover/img:scale-105 motion-reduce:transition-none motion-reduce:group-hover/img:scale-100 lg:absolute lg:inset-0"
//               />
//             </figure>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }   




//inquiry form

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Phone,
  User,
  PhoneCall,
  LayoutGrid,
  ChevronDown,
  FileText,
  AlertCircle,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const WHATSAPP_NUMBER = "7776000664";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function GetInTouch() {
  const { lang } = useLanguage();
  const isHi = lang === "hi";
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : "hidden";

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    interestedIn: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const content = {
    formHeading: isHi ? "पूछताछ फॉर्म" : "Send an Inquiry",
    formDescription: isHi
      ? "अपनी जानकारी भरें। हमारी टीम आपसे संपर्क करेगी।"
      : "Fill in your details and our team will get in touch with you.",
    labels: {
      fullName: isHi ? "पूरा नाम" : "Full Name",
      mobileNumber: isHi ? "मोबाइल नंबर" : "Mobile Number",
      interestedIn: isHi ? "किसमें रुचि है?" : "Interested In",
      message: isHi ? "आपका संदेश" : "Your Message",
    },
    placeholders: {
      fullName: isHi ? "अपना पूरा नाम लिखें" : "Enter your full name",
      mobileNumber: isHi ? "10 अंकों का मोबाइल नंबर" : "Enter 10-digit mobile number",
      interestedIn: isHi ? "सेवा चुनें" : "Select a service",
      message: isHi ? "अपना संदेश लिखें..." : "Write your message...",
    },
    services: isHi
      ? [
          "सावधि जमा (FD)",
          "मासिक जमा (RD)",
          "बचत खाता",
          "दैनिक जमा",
          "मासिक पेंशन",
          "सोने तारण कर्ज",
          "वाहन कर्ज",
          "व्यवसाय कर्ज",
          "कृषि उपकरण कर्ज",
          "अन्य",
        ]
      : [
          "Fixed Deposit (FD)",
          "Recurring Deposit (RD)",
          "Savings Account",
          "Daily Deposit",
          "Monthly Pension",
          "Gold Loan",
          "Vehicle Loan",
          "Business Loan",
          "Agriculture Equipment Loan",
          "Other",
        ],
    buttons: {
      sendInquiry: isHi
        ? "WhatsApp पर पूछताछ भेजें"
        : "Send Inquiry on WhatsApp",
      chatDirectly: isHi
        ? "WhatsApp पर सीधे चैट करें"
        : "Chat Directly on WhatsApp",
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobileNumber") {
      setFormData((prev) => ({
        ...prev,
        [name]: value.replace(/\D/g, "").slice(0, 10),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = isHi ? "कृपया अपना नाम दर्ज करें।" : "Please enter your name.";
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = isHi
        ? "कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें।"
        : "Please enter a valid 10-digit mobile number.";
    }

    if (!formData.interestedIn) {
      newErrors.interestedIn = isHi
        ? "कृपया अपनी रुचि चुनें।"
        : "Please select a service.";
    }

    if (!formData.message.trim()) {
      newErrors.message = isHi
        ? "कृपया अपना संदेश लिखें।"
        : "Please enter your message.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const whatsappMessage = isHi
      ? `नई पूछताछ\n\nनाम: ${formData.fullName}\nमोबाइल नंबर: ${formData.mobileNumber}\nरुचि: ${formData.interestedIn}\nसंदेश: ${formData.message}`
      : `New Inquiry\n\nName: ${formData.fullName}\nMobile Number: ${formData.mobileNumber}\nInterested In: ${formData.interestedIn}\nMessage: ${formData.message}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Reset inquiry form after opening WhatsApp
    setFormData({
      fullName: "",
      mobileNumber: "",
      interestedIn: "",
      message: "",
    });

    setErrors({});
  };

  return (
    <section
      id="contact"
      aria-labelledby="get-in-touch-heading"
      className="relative isolate overflow-hidden bg-gradient-to-b from-white via-[#F3F8F5]/60 to-white py-10 sm:py-20 md:-mt-20 lg:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#0F5743]/[0.04] blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#ED6E21]/[0.04] blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12 2xl:max-w-[1440px]">
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          {/* Left Column: Existing Contact Content */}
          <motion.div
            variants={container}
            initial={initial}
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="flex min-w-0 flex-col justify-between text-left"
          >
            <div>
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-3"
              >
                <span
                  aria-hidden="true"
                  className="h-[2px] w-9 bg-[#ED6E21] sm:w-11"
                />
                <p className="m-0 text-xs font-semibold uppercase tracking-[0.18em] text-[#ED6E21] sm:text-[13px]">
                  {isHi ? "संपर्क करें" : "GET IN TOUCH"}
                </p>
              </motion.div>

              <motion.h2
                id="get-in-touch-heading"
                variants={fadeUp}
                className="mt-4 text-[2rem] font-extrabold leading-[1.12] tracking-tight min-[400px]:text-4xl sm:text-[2.75rem] xl:text-[3rem]"
              >
                <span className="block text-[#0A4033]">
                  {isHi ? "आइए, अगला कदम" : "Let’s Take the Next"}
                </span>
                <span className="mt-1 block text-[#ED6E21]">
                  {isHi ? "साथ मिलकर बढ़ाएँ" : "Step Together"}
                </span>
              </motion.h2>

              <motion.div
                variants={fadeUp}
                aria-hidden="true"
                className="mt-4 h-[3px] w-14 rounded-full bg-gradient-to-r from-[#ED6E21] to-[#0F5743]"
              />

              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-xl text-sm leading-relaxed text-[#26332E] sm:text-[15px]"
              >
                {isHi
                  ? "क्या आपको हमारी जमा योजनाओं, ऋण सुविधाओं या सदस्यता प्रक्रिया के बारे में जानकारी चाहिए? हमारा कार्यालय आपको उपलब्ध विकल्पों और लागू आवश्यकताओं को समझने में सहायता कर सकता है।"
                  : "Have questions about our deposit schemes, loan facilities, or membership process? Our office can help you understand the available options and applicable requirements."}
              </motion.p>
            </div>

            {/* Existing Contact Cards and CTA */}
            <div className="mt-7 flex flex-col gap-4 sm:mt-8">
              {/* Address Card */}
              <motion.div variants={fadeUp} className="group/card">
                <div className="transform-gpu rounded-2xl border border-[#ED6E21]/60 bg-gradient-to-br from-[#ED6E21]/[0.10] to-[#ED6E21]/[0.03] p-4 shadow-[0_10px_26px_-20px_rgba(237,110,33,0.55)] transition-[translate,box-shadow,border-color] duration-300 ease-in-out group-hover/card:-translate-y-[3px] group-hover/card:border-[#ED6E21]/99 group-hover/card:shadow-[0_18px_38px_-20px_rgba(237,110,33,0.70)] motion-reduce:transition-none motion-reduce:group-hover/card:translate-y-0 sm:p-5">
                  <div className="flex items-start gap-3.5 sm:gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ED6E21]/10 text-[#ED6E21] transition-colors duration-300 group-hover/card:bg-[#ED6E21]/15 sm:h-12 sm:w-12"
                    >
                      <MapPin className="h-5 w-5 stroke-[2.2]" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3 className="m-0 text-[15px] font-extrabold leading-snug text-[#0A4033] sm:text-base">
                        Kalyan Urban Co-operative Credit Society Limited
                      </h3>

                      <div className="mt-1.5 flex items-center gap-1.5 text-xs font-bold text-[#0A4033]">
                        <MapPin
                          aria-hidden="true"
                          className="h-3.5 w-3.5 shrink-0 text-[#0F5743]"
                        />
                        <span>
                          {isHi ? "मुख्य कार्यालय का पता:" : "Head Office Address:"}
                        </span>
                      </div>

                      <p className="m-0 mt-1 text-xs leading-relaxed text-[#26332E] sm:text-[13px]">
                        {isHi
                          ? "साई आशीर्वाद मोटर्स के पास, गोंदिया–बालाघाट रोड, रावनवाड़ी, गोंदिया, महाराष्ट्र।"
                          : "Beside Sai Ashirwad Motors, Gondia–Balaghat Road, Rawanwadi, Gondia, Maharashtra."}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Phone Number Card */}
              <motion.div variants={fadeUp} className="group/card">
                <div className="transform-gpu rounded-2xl border border-[#0F5743]/60 bg-gradient-to-br from-[#0F5743]/[0.10] to-[#0F5743]/[0.03] p-4 shadow-[0_10px_26px_-20px_rgba(10,64,51,0.35)] transition-[translate,box-shadow,border-color] duration-300 ease-in-out group-hover/card:-translate-y-[3px] group-hover/card:border-[#0F5743]/99 group-hover/card:shadow-[0_18px_38px_-20px_rgba(10,64,51,0.70)] motion-reduce:transition-none motion-reduce:group-hover/card:translate-y-0 sm:p-5">
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0F5743]/10 text-[#1D63B8] transition-colors duration-300 group-hover/card:bg-[#0F5743]/15 sm:h-12 sm:w-12"
                    >
                      <Phone className="h-5 w-5 fill-current" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="m-0 text-xs font-bold text-[#0A4033]">
                        {isHi ? "फ़ोन नंबर:" : "Phone Number:"}
                      </p>
                      <a
                        href="tel:7776000664"
                        className="mt-0.5 inline-block text-lg font-extrabold tracking-tight text-[#0A4033] transition-colors duration-300 hover:text-[#ED6E21] focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F5743]/40 sm:text-xl"
                      >
                        7776000664
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div variants={fadeUp} className="group/card">
                <a
                  href="tel:7776000664"
                  aria-label={
                    isHi
                      ? "अधिक जानकारी के लिए 7776000664 पर कॉल करें"
                      : "Call Us to Know More at 7776000664"
                  }
                  className="relative flex w-full transform-gpu items-center justify-between overflow-hidden rounded-2xl border border-[#ED6E21]/20 bg-gradient-to-r from-[#ED6E21] via-[#ED6E21] to-[#C95716] p-3.5 text-white shadow-[0_14px_28px_-14px_rgba(237,110,33,0.55)] transition-[translate,box-shadow,border-color,filter] duration-300 ease-in-out group-hover/card:-translate-y-[3px] group-hover/card:border-[#ED6E21] group-hover/card:shadow-[0_20px_38px_-14px_rgba(237,110,33,0.7)] group-hover/card:brightness-[1.02] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#ED6E21]/40 active:translate-y-0 motion-reduce:transition-none motion-reduce:group-hover/card:translate-y-0 sm:p-4"
                >
                  <span className="relative z-10 flex items-center gap-3.5 sm:gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#ED6E21] shadow-sm transition-transform duration-300 ease-in-out group-hover/card:scale-105 motion-reduce:transition-none sm:h-11 sm:w-11"
                    >
                      <Phone className="h-4 w-4 fill-current sm:h-5 sm:w-5" />
                    </span>

                    <span className="text-sm font-extrabold tracking-wide text-white sm:text-base">
                      {isHi ? "अधिक जानकारी के लिए कॉल करें" : "Call Us to Know More"}
                    </span>
                  </span>

                  <span
                    aria-hidden="true"
                    className="relative z-10 mr-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-white transition-[transform,background-color] duration-300 ease-in-out group-hover/card:translate-x-1 group-hover/card:bg-white/30 motion-reduce:transition-none motion-reduce:group-hover/card:translate-x-0 sm:h-9 sm:w-9"
                  >
                    <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Inquiry Form (Replaces Image) */}
          <motion.div
            variants={fadeUp}
            initial={initial}
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="min-w-0"
          >
            <div className="h-full rounded-3xl border border-[#0F5743]/40 bg-white p-5 shadow-[0_20px_50px_-18px_rgba(15,87,67,0.20)] sm:p-7 md:p-8">
              <div
                aria-hidden="true"
                className="h-[3px] w-11 rounded-full bg-[#ED6E21]"
              />

              <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-[#0F5743] sm:text-[1.75rem]">
                {content.formHeading}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[#4F6059] sm:text-sm">
                {content.formDescription}
              </p>

              <form
                onSubmit={handleWhatsAppSubmit}
                noValidate
                className="mt-6 space-y-4"
              >
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="inquiry-fullName"
                    className="block text-xs font-bold text-[#0F5743] sm:text-[13px]"
                  >
                    {content.labels.fullName}{" "}
                    <span className="text-[#ED6E21]">*</span>
                  </label>
                  <div className="relative mt-1.5">
                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#7A8B84]">
                      <User aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <input
                      id="inquiry-fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder={content.placeholders.fullName}
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={errors.fullName ? "error-fullName" : undefined}
                      className={`w-full rounded-xl border bg-white py-2.5 pl-10 pr-4 text-sm text-[#1E2E28] placeholder-[#94A39D] transition-colors focus:outline-none focus:ring-2 ${
                        errors.fullName
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                          : "border-gray-400 focus:border-[#0F5743] focus:ring-[#0F5743]/20"
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p id="error-fullName" role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label
                    htmlFor="inquiry-mobileNumber"
                    className="block text-xs font-bold text-[#0F5743] sm:text-[13px]"
                  >
                    {content.labels.mobileNumber}{" "}
                    <span className="text-[#ED6E21]">*</span>
                  </label>
                  <div className="relative mt-1.5">
                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#7A8B84]">
                      <PhoneCall aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <input
                      id="inquiry-mobileNumber"
                      name="mobileNumber"
                      type="tel"
                      inputMode="numeric"
                      required
                      maxLength={10}
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      placeholder={content.placeholders.mobileNumber}
                      aria-invalid={Boolean(errors.mobileNumber)}
                      aria-describedby={errors.mobileNumber ? "error-mobileNumber" : undefined}
                      className={`w-full rounded-xl border bg-white py-2.5 pl-10 pr-4 text-sm text-[#1E2E28] placeholder-[#94A39D] transition-colors focus:outline-none focus:ring-2 ${
                        errors.mobileNumber
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                          : "border-gray-400 focus:border-[#0F5743] focus:ring-[#0F5743]/20"
                      }`}
                    />
                  </div>
                  {errors.mobileNumber && (
                    <p id="error-mobileNumber" role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{errors.mobileNumber}</span>
                    </p>
                  )}
                </div>

                {/* Interested In */}
                <div>
                  <label
                    htmlFor="inquiry-interestedIn"
                    className="block text-xs font-bold text-[#0F5743] sm:text-[13px]"
                  >
                    {content.labels.interestedIn}{" "}
                    <span className="text-[#ED6E21]">*</span>
                  </label>
                  <div className="relative mt-1.5">
                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#7A8B84]">
                      <LayoutGrid aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <select
                      id="inquiry-interestedIn"
                      name="interestedIn"
                      required
                      value={formData.interestedIn}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.interestedIn)}
                      aria-describedby={errors.interestedIn ? "error-interestedIn" : undefined}
                      className={`w-full appearance-none rounded-xl border bg-white py-2.5 pl-10 pr-10 text-sm transition-colors focus:outline-none focus:ring-2 ${
                        formData.interestedIn ? "text-[#1E2E28]" : "text-[#94A39D]"
                      } ${
                        errors.interestedIn
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                          : "border-gray-400 focus:border-[#0F5743] focus:ring-[#0F5743]/20"
                      }`}
                    >
                      <option value="" disabled>
                        {content.placeholders.interestedIn}
                      </option>
                      {content.services.map((service) => (
                        <option key={service} value={service} className="text-[#1E2E28]">
                          {service}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-[#7A8B84]">
                      <ChevronDown aria-hidden="true" className="h-4 w-4" />
                    </span>
                  </div>
                  {errors.interestedIn && (
                    <p id="error-interestedIn" role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{errors.interestedIn}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="inquiry-message"
                    className="block text-xs font-bold text-[#0F5743] sm:text-[13px]"
                  >
                    {content.labels.message}{" "}
                    <span className="text-[#ED6E21]">*</span>
                  </label>
                  <div className="relative mt-1.5">
                    <span className="pointer-events-none absolute left-0 top-3 flex items-center pl-3.5 text-[#7A8B84]">
                      <FileText aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <textarea
                      id="inquiry-message"
                      name="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={content.placeholders.message}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "error-message" : undefined}
                      className={`w-full resize-y rounded-xl border bg-white py-2.5 pl-10 pr-4 text-sm text-[#1E2E28] placeholder-[#94A39D] transition-colors focus:outline-none focus:ring-2 ${
                        errors.message
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                          : "border-gray-400 focus:border-[#0F5743] focus:ring-[#0F5743]/20"
                      }`}
                    />
                  </div>
                  {errors.message && (
                    <p id="error-message" role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Inquiry on WhatsApp */}
                <div className="pt-1.5">
                  <motion.div variants={fadeUp} className="group/card">
                    <button
                      type="submit"
                      className="relative flex w-full transform-gpu items-center justify-center gap-2.5 overflow-hidden rounded-xl border border-[#0F5743]/20 bg-gradient-to-r from-[#0F5743] via-[#0F5743] to-[#0A4033] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_14px_28px_-14px_rgba(15,87,67,0.55)] transition-[translate,box-shadow,border-color,filter] duration-300 ease-in-out group-hover/card:-translate-y-[3px] group-hover/card:border-[#0F5743] group-hover/card:shadow-[0_20px_38px_-14px_rgba(15,87,67,0.7)] group-hover/card:brightness-[1.02] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0F5743]/35 active:translate-y-0 motion-reduce:transition-none motion-reduce:group-hover/card:translate-y-0 sm:text-[15px]"
                    >
                      <MessageCircle className="h-5 w-5 transition-transform duration-300 ease-in-out group-hover/card:scale-105 motion-reduce:transition-none" />
                      <span>
                        {isHi ? "व्हाट्सऐप पर पूछताछ भेजें" : "Send Inquiry on WhatsApp"}
                      </span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover/card:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover/card:translate-x-0" />
                    </button>
                  </motion.div>
                </div>

                {/* Direct WhatsApp Chat */}
                {/* <div>
                  <motion.div variants={fadeUp} className="group/card">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={isHi ? "व्हाट्सऐप पर सीधे चैट करें" : "Chat Directly on WhatsApp"}
                      className="relative flex w-full transform-gpu items-center justify-center gap-2.5 overflow-hidden rounded-xl border border-[#0F5743]/65 bg-white px-5 py-3 text-sm font-semibold text-[#0F5743] shadow-[0_8px_20px_-12px_rgba(15,87,67,0.35)] transition-[translate,box-shadow,border-color,filter,background-color] duration-300 ease-in-out group-hover/card:-translate-y-[3px] group-hover/card:border-[#0F5743] group-hover/card:bg-[#F3F8F5] group-hover/card:shadow-[0_20px_38px_-14px_rgba(15,87,67,0.4)] group-hover/card:brightness-[1.02] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0F5743]100 active:translate-y-0 motion-reduce:transition-none motion-reduce:group-hover/card:translate-y-0 sm:text-[15px]"
                    >
                      <MessageCircle className="h-5 w-5 transition-transform duration-300 ease-in-out group-hover/card:scale-105 motion-reduce:transition-none" />
                      <span>
                        {isHi ? "व्हाट्सऐप पर सीधे चैट करें" : "Chat Directly on WhatsApp"}
                      </span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover/card:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover/card:translate-x-0" />
                    </a>
                  </motion.div>
                </div> */}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
