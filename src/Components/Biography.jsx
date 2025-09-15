import React from "react";
import BiographySection from "./BiographySection";
import tmImage1 from "../assets/tmImage1.PNG";
import tmImage2 from "../assets/tmImage2.JPG";
import tmImage3 from "../assets/tmImage3.jfif";
import billBoard2 from "../assets/billBoard2.PNG";


const Biography = () => {
  const sections = [
    {
      text: "Emmanuel Linus is a dynamic entrepreneur and visionary leader, best known as the Founder and Chief Executive Officer of Talkmuch Global LTD, a multi-business enterprise committed to building innovative and sustainable ventures across Africa. With a clear vision to create a diverse portfolio spanning technology, fintech, lifestyle, and commerce, Emmanuel has quickly established himself as one of the continent’s forward-thinking business leaders. His entrepreneurial journey formally began with the founding of Talkmuch Global LTD on January 21, 2022, a company officially registered with the Corporate Affairs Commission (CAC) on February 13, 2025. Under his leadership, Talkmuch Global has evolved into a growing brand with multiple subsidiaries that reflect his commitment to innovation, accessibility, and customer satisfaction.",
      imgSrc: tmImage1,
    },
    {
      text: "The company’s first venture, Talkmuch Accessories & More, transformed from a small retail outlet into rapidly expanding lifestyle and technology brand. Today, it is well-positioned to become a market leader in Africa’s tech and accessories industry, offering high-quality, affordable gadgets and smart solutions. With plans to introduce Talkmuch-branded products and expand across Africa, Emmanuel is steering the company toward long-term growth, product innovation, and global competitiveness.Building on this success, he launched TalkMuch Xchange in September 2023, a subsidiary dedicated to cryptocurrency and digital services. TM Xchange provides secure cryptocurrency trading, gift card exchange, and digital solutions, supported by 24/7 customer service and a reputation for transparency and reliability. Through this venture, Emmanuel is advancing financial inclusion and bridging the gap between everyday users and emerging digital finance opportunities.",
      imgSrc: tmImage2,
      reverse: true,
    },
    {
      text: "Beyond individual ventures, Emmanuel Linus envisions Talkmuch Global LTD as a multi-industry empire operating across smart technology, cryptocurrency & fintech, food & hospitality, and e-commerce. His long-term strategy is to build a dynamic ecosystem of businesses that not only generate profit but also create jobs, foster innovation, and contribute meaningfully to Africa’s economic growth.As a forward-looking entrepreneur, Emmanuel actively champions collaboration and partnerships, believing in the power of collective effort to drive innovation and lasting impact. Guided by values of integrity, quality, and customer trust, he continues to position Talkmuch Global LTD as a company with strong local roots and global ambitions.",
      imgSrc: tmImage3,
    },
    {
      text: "Through resilience, vision, and a passion for excellence, Emmanuel Linus is shaping a legacy of entrepreneurship that will inspire future generations and establish Talkmuch Global LTD as a trusted brand across industries in Africa and beyond.",
      imgSrc: billBoard2,
      reverse: true,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {sections.map((section, index) => (
        <BiographySection key={index} {...section} />
      ))}
    </section>
  );
};

export default Biography;
