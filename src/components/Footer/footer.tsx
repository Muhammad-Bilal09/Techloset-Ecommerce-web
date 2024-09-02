import { FiSend } from "react-icons/fi";
import { FaGoogle, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { CiHeadphones } from "react-icons/ci";
import Logo from "../../assets/images/logoSecond.png";
import HeadPhone from "../../assets/images/headphone.svg";
import { FooterLinkSectionProps, FooterLink } from "../../types/types";
import { footerLinks } from "../../constants/footerLinks";

const FooterLinkSection: React.FC<FooterLinkSectionProps> = ({
  title,
  items,
}) => (
  <div className="w-full md:w-1/4 px-4 mb-10 md:mb-0">
    <h2 className="title-font lg:w-[125px] lg:h-[29px] font-medium text-primary tracking-widest text-sm mb-3">
      {title}
    </h2>
    <nav>
      <ul>
        {items.map((item, index) => (
          <li className="flex items-center my-3 gap-3" key={index}>
         <div className="bg-list lg:w-[10px] lg:h-[10px] rounded-full"></div>
            <a className="text-primary hover:underline">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-footer body-font lg:h-[551px] pt-4 mt-5">
      <div className="bg-white h-auto mx-auto lg:mx-[60px] flex flex-col lg:flex-row rounded-2xl ml-[18px] mr-[18px] lg:mt[42px] justify-between items-center mt-7 lg:w-[1320px] lg:h-[139px]">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:w-auto">
          <p className="text-primary lg:text-3xl font-bold ml-[39px] mr-[39px] mt-[14px] lg:w-[319px] lg:h-[44px] lg:ml-[95px] lg:my-[44px] mb-4 ">
            Subscribe NewSeletter
          </p>
          <div className="relative text-white mx-[22px] lg:ml-[137px] mb-[10px] lg:mb-0">
            <input
              type="email"
              placeholder="Email address"
              className="bg-orange text-white p-2 rounded-lg w-full lg:w-[388px] lg:px-[25px] lg:h-[63px]"
            />
            <FiSend className="absolute right-3 top-1 lg:top-4 text-white text-3xl" />
          </div>
        </div>
        <div className="flex items-center text-center mx-[71px] mb-[14px] lg:w-[197px] lg:h-[45px] lg:text-left mt-4 lg:mt-0">
          <img src={HeadPhone} alt="" />
          <p>call us (+98) 0234 456 789</p>
        </div>
      </div>

      <div className="container lg:w-[1313px] lg:h-[247px] px-5 py-12 lg:gap-20 mx-auto flex flex-wrap md:flex-nowrap">
        <div className="w-full  md:w-64 flex-shrink-0 text-center md:text-left mb-10 md:mb-0">
          <a className="flex title-font font-medium items-center justify-center md:justify-start">
            <img className="w-32 h-10 p-2" src={Logo} alt="Logo" />
          </a>
          <ul className="mt-4">
            <li>
              <a href="#" className="text-primary hover:underline">
                64 St James Boulevard, Howsvik, ZE2
              </a>
            </li>
            <hr className="my-4" />
            <li className="flex justify-center md:justify-start space-x-3">
              <a href="#" className="text-primary text-xl">
                <FaGoogle />
              </a>
              <a href="#" className="text-primary text-xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-primary text-xl">
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-grow flex flex-wrap gap-20 md:pl-20">
          {footerLinks.map((section, index) => (
            <FooterLinkSection
              key={index}
              title={section.title}
              items={section.items}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
