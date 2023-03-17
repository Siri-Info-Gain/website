import { apple, bill, google, facebook, instagram, twitter, linkedin } from "../assets";
import styles, { layout } from "../style";
import { footerLinks, socialMedia } from "../constants";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        A global brand in <br className="sm:block hidden" /> technology outsourcing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      As an information technology solutions and services provider, 
      we have significant experience in systems and applications integration, web services, enterprise resource planning, 
      Cloud based technologies, data warehousing, business intelligence, electronic data interchange, 
      and B2B solutions. 
      </p>
    {/*
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
          */}
      
    </div>
  </section>
);

export default Billing;
