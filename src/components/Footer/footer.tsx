import { FiSend } from "react-icons/fi";
import { FaGoogle, FaFacebook, FaWhatsapp } from "react-icons/fa";
import Logo from "../../assets/images/logoSecond.png";
import HeadPhone from "../../assets/images/headphone.svg";
import { FooterLinkSectionProps } from "../../types/types";
import { footerLinks } from "../../constants/footerLinks";

const FooterLinkSection: React.FC<FooterLinkSectionProps> = ({
  title,
  items,
}) => (
  <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-6 md:mb-0">
    <h2 className="title-font font-medium text-primary tracking-widest text-sm mb-3">
      {title}
    </h2>
    <nav>
      <ul>
        {items.map((item, index) => (
          <li className="flex items-center my-2 gap-3" key={index}>
            <div className="bg-list w-[10px] h-[10px] rounded-full"></div>
            <a className="text-primary hover:underline">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-footer body-font pt-4 mt-5">
      <div className="bg-white lg:mx-[60px] flex flex-col lg:flex-row rounded-2xl mx-4 lg:mt-10 justify-between items-center p-6 lg:p-10 space-y-6 lg:space-y-0">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full">
          <p className="text-primary lg:text-3xl font-bold mb-4 lg:mb-0">
            Subscribe Newsletter
          </p>
          <div className="relative mx-6 lg:ml-[137px] lg:mr-[88px]">
            <input
              type="email"
              placeholder="Email address"
              className="bg-orange  p-3 rounded-[20px] w-full lg:w-[300px]"
            />
            <FiSend className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-2xl" />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <img src={HeadPhone} alt="Headphone" className="w-8 h-8" />
          <p>Call us (+98) 0234 456 789</p>
        </div>
      </div>
      <div className="container mx-auto lg:px-[63px] py-12 flex flex-wrap justify-between">
        <div className="w-full md:w-64 flex-shrink-0 text-center md:text-left mb-6">
          <a className="flex justify-center md:justify-start">
            <img className="w-32 h-10" src={Logo} alt="Logo" />
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
        <div className="w-full md:flex-1 flex flex-wrap justify-between md:pl-20 gap-6">
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