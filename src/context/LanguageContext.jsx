// src/context/LanguageContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "kalyan_urban_lang";

export const translations = {
  en: {
    navbar: {
      brandAria: "Kalyan Urban Co-operative Credit Society Limited",
      logoAlt: "Kalyan Urban Logo",
      navAria: "Primary Navigation",
      mobileTitle: "Navigation",
      languageLabel: "Language",
      contactUs: "Contact Us",
      openMenu: "Open Navigation Menu",
      closeMenu: "Close Navigation Menu",
      items: [
        { label: "Home", href: "#home", id: "home" },
        { label: "About Us", href: "#about", id: "about" },
        { label: "Our Services", href: "#services", id: "services" },
        { label: "Why Choose Us", href: "#why-us", id: "why-us" },
        { label: "How to Get Started", href: "#process", id: "process" },
        { label: "FAQs", href: "#faq", id: "faq" },
      ],
    },
    hero: {
      eyebrow: "Your Financial Goals. Our Commitment.",
      headingLine1: "Build Your Savings.",
      headingLine2: "Plan Your Future.",
      description:
        "Discover savings opportunities and financial solutions designed around your needs. Kalyan Urban Co-operative Credit Society Limited aims to support its members through accessible deposit schemes, loan facilities, and responsible financial services.",
      exploreServices: "Explore Our Services",
      contactUs: "Contact Us",
      trustItems: [
        "Trusted Co-operative Society",
        "Member-Focused Approach",
        "Savings-Oriented Solutions",
      ],
      pills: [
        "Accessible Deposits",
        "Loan Facilities",
        "Responsible Financial Services",
      ],
      imageAlt:
        "A smiling family saving coins in a jar in front of a modern home, with a growth arrow rising behind them",
    },
    about: {
      eyebrow: "About Us",
      headingLine1: "Empowering Members Through",
      headingLine2: "Cooperative Financial Growth",
      description:
        "Kalyan Urban Co-operative Credit Society Limited is dedicated to promoting financial discipline, secure savings habits, and accessible credit support for our members in Gondia, Maharashtra.",
      missionTitle: "Our Mission",
      missionDesc:
        "To provide transparent, dependable, and accessible savings and credit facilities that help our members achieve financial stability and growth.",
      visionTitle: "Our Vision",
      visionDesc:
        "To be a trusted, member-first co-operative credit society recognized for integrity, responsible service, and community financial empowerment.",
    },
    services: {
      eyebrow: "Our Services",
      headingLine1: "Comprehensive Deposit &",
      headingLine2: "Loan Solutions",
      description:
        "Explore member-focused deposit schemes and credit facilities tailored to support your personal, family, and business milestones.",
      depositsTab: "Deposit Schemes",
      loansTab: "Loan Facilities",
      items: {
        fixedDeposit: {
          title: "Fixed Deposit",
          desc: "Set aside lump-sum savings for a fixed tenure with steady, dependable returns.",
        },
        recurringDeposit: {
          title: "Recurring Deposit",
          desc: "Build disciplined monthly savings systematically toward your future goals.",
        },
        savingsAccount: {
          title: "Savings Account",
          desc: "Convenient day-to-day savings facility for society members with easy access.",
        },
        dailyDeposit: {
          title: "Daily Deposit Scheme",
          desc: "Flexible small daily collections ideal for shopkeepers, traders, and self-employed members.",
        },
        goldLoan: {
          title: "Gold Loan",
          desc: "Quick and transparent credit against gold ornaments with streamlined documentation.",
        },
        vehicleLoan: {
          title: "Vehicle Loan",
          desc: "Financing support for two-wheelers and four-wheelers for eligible society members.",
        },
        businessLoan: {
          title: "Business Loan",
          desc: "Working capital and expansion support to help local businesses and entrepreneurs grow.",
        },
        personalLoan: {
          title: "Personal / Member Loan",
          desc: "Timely credit assistance for family needs, education, medical expenses, or emergencies.",
        },
      },
    },
    whyChooseUs: {
      eyebrow: "Why Choose Us",
      headingLine1: "Built on Trust, Transparency,",
      headingLine2: "and Member Care",
      description:
        "We combine cooperative values with attentive personal service to support every stage of your financial journey.",
      reasons: [
        {
          title: "Member-Centric Service",
          desc: "Every deposit plan and loan facility is structured around the practical needs of our members.",
        },
        {
          title: "Transparent Process",
          desc: "Clear documentation, straightforward eligibility terms, and honest communication at every step.",
        },
        {
          title: "Accessible Local Support",
          desc: "Dedicated assistance at our Rawanwadi, Gondia head office whenever you need guidance.",
        },
        {
          title: "Responsible Financial Practices",
          desc: "Committed to disciplined co-operative management and secure handling of member funds.",
        },
      ],
    },
    getStarted: {
      eyebrow: "How to Get Started",
      headingLine1: "Simple Steps to Become",
      headingLine2: "a Society Member",
      description:
        "Joining Kalyan Urban Co-operative Credit Society Limited is straightforward. Visit our office and our team will guide you through each step.",
      steps: [
        {
          no: "01",
          title: "Visit Our Office",
          desc: "Connect with our team at our Head Office on Gondia–Balaghat Road, Rawanwadi, Gondia.",
        },
        {
          no: "02",
          title: "Complete Documentation",
          desc: "Submit the membership application form along with standard KYC identity and address proofs.",
        },
        {
          no: "03",
          title: "Verify & Approve",
          desc: "Our office reviews your application in accordance with society norms and eligibility policies.",
        },
        {
          no: "04",
          title: "Access Services",
          desc: "Start utilizing deposit schemes, savings accounts, and eligible loan facilities.",
        },
      ],
    },
    faq: {
      eyebrow: "Frequently Asked Questions",
      headingLine1: "Frequently Asked",
      headingLine2: "Questions",
      description:
        "Find answers to common questions about our membership, deposit schemes, loan facilities, and other services.",
      imageAlt:
        "A large navy question mark with chat bubbles, a plant, FAQ letter blocks, stacked books, a checklist, gold coins and a pen, representing frequently asked questions about deposits, loans and membership",
      items: [
        {
          no: "01",
          question: "Which deposit schemes are available?",
          answer:
            "Available options may include Fixed Deposits, Recurring Deposits, savings accounts, daily deposit schemes, and other applicable plans. Contact our office to confirm current availability.",
          tone: "orange",
        },
        {
          no: "02",
          question: "Who can apply for a loan?",
          answer:
            "Eligible members may apply for available loan facilities, subject to the society's policies, documentation, and approval process.",
          tone: "green",
        },
        {
          no: "03",
          question: "How can I check current interest rates?",
          answer:
            "Please contact our office for the latest applicable interest rates, deposit tenures, loan terms, and charges.",
          tone: "orange",
        },
        {
          no: "04",
          question: "How do I become a member?",
          answer:
            "Contact our office for membership eligibility, required documents, and the application procedure.",
          tone: "green",
        },
        {
          no: "05",
          question: "Where can I get more information?",
          answer:
            "You can contact our office directly using the phone number and address provided below.",
          tone: "orange",
        },
      ],
    },
    getInTouch: {
      eyebrow: "GET IN TOUCH",
      headingLine1: "Let’s Take the Next",
      headingLine2: "Step Together",
      description:
        "Have questions about our deposit schemes, loan facilities, or membership process? Our office can help you understand the available options and applicable requirements.",
      societyName: "Kalyan Urban Co-operative Credit Society Limited",
      addressLabel: "Head Office Address:",
      addressValue:
        "Beside Sai Ashirwad Motors, Gondia–Balaghat Road, Rawanwadi, Gondia, Maharashtra.",
      phoneLabel: "Phone Number:",
      phoneValue: "7776000664",
      ctaText: "Call Us to Know More",
      ctaAria: "Call Us to Know More at 7776000664",
      imageAlt:
        "Customer support representative at Kalyan Urban Co-operative Credit Society Limited assisting members on the phone at her desk with a laptop, plant, and contact icons",
    },
    footer: {
      societyName: "KALYAN URBAN CO-OPERATIVE CREDIT SOCIETY LIMITED",
      tagline: "Your Financial Goals. Our Commitment.",
      description:
        "Providing member-focused savings schemes and loan facilities with a commitment to trust, transparency, and responsible service.",
      quickLinksTitle: "Quick Links",
      quickLinks: [
        { label: "Home", href: "#home", id: "home" },
        { label: "About Us", href: "#about", id: "about" },
        { label: "Our Services", href: "#services", id: "services" },
        { label: "FAQs", href: "#faq", id: "faq" },
        { label: "Contact Us", href: "#contact", id: "contact" },
      ],
      servicesTitle: "Our Services",
      services: [
        { label: "Fixed Deposit", key: "fd" },
        { label: "Recurring Deposit", key: "rd" },
        { label: "Savings Account", key: "sa" },
        { label: "Gold Loan", key: "gl" },
        { label: "Vehicle Loan", key: "vl" },
        { label: "Business Loan", key: "bl" },
      ],
      contactTitle: "Contact Us",
      locationLine1: "Rawanwadi, Gondia,",
      locationLine2: "Maharashtra",
      phone: "7776000664",
      hoursLine1: "Mon - Sat: 9:00 AM - 6:00 PM",
      hoursLine2: "Sunday: By Appointment",
      disclaimer:
        "All services are subject to eligibility, applicable terms, and approval.",
      copyright:
        "© 2026 Kalyan Urban Co-operative Credit Society Limited. All Rights Reserved.",
      privacyPolicy: "Privacy Policy",
      termsConditions: "Terms & Conditions",
      disclaimerLink: "Disclaimer",
    },
  },

  hi: {
    navbar: {
      brandAria: "कल्याण अर्बन को-ऑपरेटिव क्रेडिट सोसायटी लिमिटेड",
      logoAlt: "कल्याण अर्बन लोगो",
      navAria: "मुख्य नेविगेशन",
      mobileTitle: "नेविगेशन",
      languageLabel: "भाषा चुनें",
      contactUs: "संपर्क करें",
      openMenu: "नेविगेशन मेनू खोलें",
      closeMenu: "नेविगेशन मेनू बंद करें",
      items: [
        { label: "होम", href: "#home", id: "home" },
        { label: "हमारे बारे में", href: "#about", id: "about" },
        { label: "हमारी सेवाएँ", href: "#services", id: "services" },
        { label: "हमें क्यों चुनें", href: "#why-us", id: "why-us" },
        { label: "कैसे जुड़ें", href: "#process", id: "process" },
        { label: "सामान्य प्रश्न", href: "#faq", id: "faq" },
      ],
    },
    hero: {
      eyebrow: "आपके वित्तीय लक्ष्य। हमारी प्रतिबद्धता।",
      headingLine1: "अपनी बचत बढ़ाएँ।",
      headingLine2: "अपना भविष्य संवारें।",
      description:
        "आपकी आवश्यकताओं के अनुरूप तैयार किए गए बचत अवसरों और वित्तीय समाधानों को जानें। कल्याण अर्बन को-ऑपरेटिव क्रेडिट सोसायटी लिमिटेड सुलभ जमा योजनाओं, ऋण सुविधाओं और जिम्मेदार वित्तीय सेवाओं के माध्यम से अपने सदस्यों को सहयोग प्रदान करने के लिए प्रतिबद्ध है।",
      exploreServices: "हमारी सेवाएँ देखें",
      contactUs: "संपर्क करें",
      trustItems: [
        "विश्वसनीय सहकारी संस्था",
        "सदस्य-केंद्रित दृष्टिकोण",
        "बचत-उन्मुख वित्तीय समाधान",
      ],
      pills: [
        "सुलभ जमा योजनाएँ",
        "ऋण सुविधाएँ",
        "जिम्मेदार वित्तीय सेवाएँ",
      ],
      imageAlt:
        "आधुनिक घर के सामने सिक्कों के जार में बचत करता हुआ एक मुस्कुराता परिवार",
    },
    about: {
      eyebrow: "हमारे बारे में",
      headingLine1: "सहकारी वित्तीय विकास के माध्यम से",
      headingLine2: "सदस्यों का सशक्तिकरण",
      description:
        "कल्याण अर्बन को-ऑपरेटिव क्रेडिट सोसायटी लिमिटेड गोंदिया, महाराष्ट्र में अपने सदस्यों के लिए वित्तीय अनुशासन, सुरक्षित बचत आदतों और सुलभ ऋण सहायता को बढ़ावा देने के लिए समर्पित है।",
      missionTitle: "हमारा उद्देश्य",
      missionDesc:
        "पारदर्शी, विश्वसनीय और सुलभ बचत एवं ऋण सुविधाएँ प्रदान करना जो हमारे सदस्यों को वित्तीय स्थिरता और प्रगति प्राप्त करने में सहायता करें।",
      visionTitle: "हमारी दृष्टि",
      visionDesc:
        "ईमानदारी, जिम्मेदार सेवा और सामुदायिक वित्तीय सशक्तिकरण के लिए पहचानी जाने वाली एक भरोसेमंद, सदस्य-प्रथम सहकारी पतसंस्था बनना।",
    },
    services: {
      eyebrow: "हमारी सेवाएँ",
      headingLine1: "संपूर्ण जमा एवं",
      headingLine2: "ऋण समाधान",
      description:
        "अपने व्यक्तिगत, पारिवारिक और व्यावसायिक लक्ष्यों को पूरा करने के लिए डिज़ाइन की गई सदस्य-केंद्रित जमा योजनाओं और ऋण सुविधाओं की जानकारी प्राप्त करें।",
      depositsTab: "जमा योजनाएँ",
      loansTab: "ऋण सुविधाएँ",
      items: {
        fixedDeposit: {
          title: "सावधि जमा (Fixed Deposit)",
          desc: "निश्चित अवधि के लिए अपनी एकमुश्त बचत सुरक्षित रखें और विश्वसनीय प्रतिफल प्राप्त करें।",
        },
        recurringDeposit: {
          title: "आवर्ती जमा (Recurring Deposit)",
          desc: "नियमित मासिक बचत के माध्यम से अपने भविष्य के लक्ष्यों के लिए योजनाबद्ध कोष तैयार करें।",
        },
        savingsAccount: {
          title: "बचत खाता (Savings Account)",
          desc: "संस्था के सदस्यों के लिए दैनिक लेन-देन और सुरक्षित बचत हेतु सुविधाजनक खाता।",
        },
        dailyDeposit: {
          title: "दैनिक जमा योजना",
          desc: "व्यापारियों, दुकानदारों और स्वरोजगार सदस्यों के लिए छोटी दैनिक बचत की लचीली सुविधा।",
        },
        goldLoan: {
          title: "स्वर्ण ऋण (Gold Loan)",
          desc: "सरल दस्तावेज़ीकरण और पारदर्शी प्रक्रिया के साथ सोने के आभूषणों पर त्वरित ऋण सुविधा।",
        },
        vehicleLoan: {
          title: "वाहन ऋण (Vehicle Loan)",
          desc: "पात्र सदस्यों के लिए दोपहिया और चारपहिया वाहन खरीदने हेतु सुलभ वित्तीय सहायता।",
        },
        businessLoan: {
          title: "व्यवसाय ऋण (Business Loan)",
          desc: "स्थानीय व्यापारियों और उद्यमियों को कार्यशील पूंजी तथा व्यवसाय विस्तार हेतु ऋण सहयोग।",
        },
        personalLoan: {
          title: "व्यक्तिगत / सदस्य ऋण",
          desc: "पारिवारिक आवश्यकताओं, शिक्षा, चिकित्सा या आपातकालीन जरूरतों के लिए समय पर ऋण सहायता।",
        },
      },
    },
    whyChooseUs: {
      eyebrow: "हमें क्यों चुनें",
      headingLine1: "विश्वास, पारदर्शिता और",
      headingLine2: "सदस्य सेवा पर आधारित",
      description:
        "हम आपकी वित्तीय यात्रा के हर चरण में सहयोग देने के लिए सहकारी मूल्यों और व्यक्तिगत सेवा का समन्वय करते हैं।",
      reasons: [
        {
          title: "सदस्य-केंद्रित सेवा",
          desc: "प्रत्येक जमा योजना और ऋण सुविधा हमारे सदस्यों की व्यावहारिक आवश्यकताओं को ध्यान में रखकर बनाई गई है।",
        },
        {
          title: "पारदर्शी प्रक्रिया",
          desc: "स्पष्ट दस्तावेज़ीकरण, सरल पात्रता नियम और हर चरण में ईमानदार संवाद।",
        },
        {
          title: "सुलभ स्थानीय सहयोग",
          desc: "रावणवाड़ी, गोंदिया स्थित हमारे मुख्य कार्यालय में मार्गदर्शन के लिए समर्पित टीम।",
        },
        {
          title: "जिम्मेदार वित्तीय प्रबंधन",
          desc: "अनुशासित सहकारी प्रबंधन और सदस्यों की जमा राशि की सुरक्षा के प्रति पूर्ण प्रतिबद्धता।",
        },
      ],
    },
    getStarted: {
      eyebrow: "कैसे जुड़ें",
      headingLine1: "संस्था का सदस्य बनने के",
      headingLine2: "सरल चरण",
      description:
        "कल्याण अर्बन को-ऑपरेटिव क्रेडिट सोसायटी लिमिटेड से जुड़ना अत्यंत सरल है। हमारे कार्यालय पधारें, हमारी टीम हर चरण में आपका मार्गदर्शन करेगी।",
      steps: [
        {
          no: "01",
          title: "हमारे कार्यालय पधारें",
          desc: "गोंदिया–बालाघाट रोड, रावणवाड़ी, गोंदिया स्थित हमारे मुख्य कार्यालय में हमारी टीम से संपर्क करें।",
        },
        {
          no: "02",
          title: "दस्तावेज़ पूरे करें",
          desc: "सदस्यता आवेदन पत्र के साथ आवश्यक केवाईसी (KYC) पहचान और पते के प्रमाण जमा करें।",
        },
        {
          no: "03",
          title: "सत्यापन एवं स्वीकृति",
          desc: "हमारा कार्यालय संस्था के नियमों और पात्रता नीतियों के अनुसार आपके आवेदन की जाँच करता है।",
        },
        {
          no: "04",
          title: "सेवाओं का लाभ लें",
          desc: "सदस्यता स्वीकृत होने के बाद जमा योजनाओं, बचत खातों और पात्र ऋण सुविधाओं का लाभ उठाएँ।",
        },
      ],
    },
    faq: {
      eyebrow: "सामान्य प्रश्न (FAQs)",
      headingLine1: "अक्सर पूछे जाने वाले",
      headingLine2: "प्रश्न",
      description:
        "हमारी सदस्यता, जमा योजनाओं, ऋण सुविधाओं और अन्य सेवाओं से जुड़े सामान्य प्रश्नों के उत्तर यहाँ पाएँ।",
      imageAlt:
        "जमा योजनाओं, ऋण सुविधाओं और सदस्यता से संबंधित सामान्य प्रश्नों को दर्शाता हुआ चित्रण",
      items: [
        {
          no: "01",
          question: "कौन-कौन सी जमा योजनाएँ उपलब्ध हैं?",
          answer:
            "उपलब्ध विकल्पों में सावधि जमा (Fixed Deposit), आवर्ती जमा (Recurring Deposit), बचत खाते, दैनिक जमा योजनाएँ और अन्य लागू योजनाएँ शामिल हो सकती हैं। वर्तमान उपलब्धता की पुष्टि के लिए कृपया हमारे कार्यालय से संपर्क करें।",
          tone: "orange",
        },
        {
          no: "02",
          question: "ऋण के लिए कौन आवेदन कर सकता है?",
          answer:
            "पात्र सदस्य संस्था की नीतियों, आवश्यक दस्तावेज़ीकरण और स्वीकृति प्रक्रिया के अधीन उपलब्ध ऋण सुविधाओं के लिए आवेदन कर सकते हैं।",
          tone: "green",
        },
        {
          no: "03",
          question: "मैं वर्तमान ब्याज दरों की जानकारी कैसे प्राप्त कर सकता हूँ?",
          answer:
            "नवीनतम लागू ब्याज दरों, जमा अवधि, ऋण शर्तों और शुल्कों की जानकारी के लिए कृपया हमारे कार्यालय से संपर्क करें।",
          tone: "orange",
        },
        {
          no: "04",
          question: "मैं संस्था का सदस्य कैसे बन सकता हूँ?",
          answer:
            "सदस्यता पात्रता, आवश्यक दस्तावेजों और आवेदन प्रक्रिया की जानकारी के लिए हमारे कार्यालय से संपर्क करें।",
          tone: "green",
        },
        {
          no: "05",
          question: "मुझे अधिक जानकारी कहाँ से मिल सकती है?",
          answer:
            "आप नीचे दिए गए फ़ोन नंबर और पते के माध्यम से सीधे हमारे मुख्य कार्यालय से संपर्क कर सकते हैं।",
          tone: "orange",
        },
      ],
    },
    getInTouch: {
      eyebrow: "संपर्क करें",
      headingLine1: "आइए साथ मिलकर अगला",
      headingLine2: "कदम बढ़ाएँ",
      description:
        "क्या आपके पास हमारी जमा योजनाओं, ऋण सुविधाओं या सदस्यता प्रक्रिया के बारे में कोई प्रश्न हैं? हमारा कार्यालय आपको उपलब्ध विकल्पों और आवश्यक शर्तों को समझने में पूरी सहायता करेगा।",
      societyName: "कल्याण अर्बन को-ऑपरेटिव क्रेडिट सोसायटी लिमिटेड (Kalyan Urban Co-operative Credit Society Limited)",
      addressLabel: "मुख्य कार्यालय का पता:",
      addressValue:
        "साईं आशीर्वाद मोटर्स के बाजू में, गोंदिया–बालाघाट रोड, रावणवाड़ी, गोंदिया, महाराष्ट्र।",
      phoneLabel: "फ़ोन नंबर:",
      phoneValue: "7776000664",
      ctaText: "अधिक जानकारी के लिए कॉल करें",
      ctaAria: "अधिक जानकारी के लिए 7776000664 पर कॉल करें",
      imageAlt:
        "कल्याण अर्बन को-ऑपरेटिव क्रेडिट सोसायटी लिमिटेड में फ़ोन पर सदस्यों की सहायता करती हुई प्रतिनिधि",
    },
    footer: {
      societyName: "KALYAN URBAN CO-OPERATIVE CREDIT SOCIETY LIMITED",
      tagline: "आपके वित्तीय लक्ष्य। हमारी प्रतिबद्धता।",
      description:
        "विश्वास, पारदर्शिता और जिम्मेदार सेवा की प्रतिबद्धता के साथ सदस्य-केंद्रित बचत योजनाएँ और ऋण सुविधाएँ प्रदान करना।",
      quickLinksTitle: "त्वरित लिंक",
      quickLinks: [
        { label: "होम", href: "#home", id: "home" },
        { label: "हमारे बारे में", href: "#about", id: "about" },
        { label: "हमारी सेवाएँ", href: "#services", id: "services" },
        { label: "सामान्य प्रश्न", href: "#faq", id: "faq" },
        { label: "संपर्क करें", href: "#contact", id: "contact" },
      ],
      servicesTitle: "हमारी सेवाएँ",
      services: [
        { label: "सावधि जमा (Fixed Deposit)", key: "fd" },
        { label: "आवर्ती जमा (Recurring Deposit)", key: "rd" },
        { label: "बचत खाता (Savings Account)", key: "sa" },
        { label: "स्वर्ण ऋण (Gold Loan)", key: "gl" },
        { label: "वाहन ऋण (Vehicle Loan)", key: "vl" },
        { label: "व्यवसाय ऋण (Business Loan)", key: "bl" },
      ],
      contactTitle: "संपर्क करें",
      locationLine1: "रावणवाड़ी, गोंदिया,",
      locationLine2: "महाराष्ट्र",
      phone: "7776000664",
      hoursLine1: "सोम - शनि: सुबह 9:00 - शाम 6:00",
      hoursLine2: "रविवार: पूर्वानुमति से (By Appointment)",
      disclaimer:
        "सभी सेवाएँ पात्रता, लागू नियम व शर्तों तथा स्वीकृति के अधीन हैं।",
      copyright:
        "© 2026 कल्याण अर्बन को-ऑपरेटिव क्रेडिट सोसायटी लिमिटेड। सर्वाधिकार सुरक्षित।",
      privacyPolicy: "गोपनीयता नीति",
      termsConditions: "नियम एवं शर्तें",
      disclaimerLink: "अस्वीकरण",
    },
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      return saved === "hi" || saved === "en" ? saved : "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore storage errors in private browsing
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const setLanguage = (nextLang) => {
    if (nextLang === "en" || nextLang === "hi") {
      setLangState(nextLang);
    }
  };

  const t = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider value={{ lang, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}