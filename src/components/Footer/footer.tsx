import { FiSend } from "react-icons/fi";
import { FaGoogle, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { CiHeadphones } from "react-icons/ci";
import Logo from "../../assets/images/logo.png";
import { FooterLinkSectionProps, FooterLink } from '../../types/types'; // Adjust the path as needed
import { footerLinks } from "../../constants/footerLinks";
// Component to render a section of footer links
const FooterLinkSection: React.FC<FooterLinkSectionProps> = ({ title, items }) => (
  <div className="w-full md:w-1/4 px-4 mb-10 md:mb-0">
    <h2 className="title-font font-medium text-primary tracking-widest text-sm mb-3">
      {title}
    </h2>
    <nav>
      <ul>
        {items.map((item, index) => (
          <li className="my-3" key={index}>
            <a className="text-primary hover:underline">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-300 body-font pt-4 mt-5">
      <div className="bg-white h-auto mx-auto lg:mx-[60px] flex flex-col lg:flex-row rounded-2xl ml-5 mr-5 lg:p-5 justify-between items-center mt-10 lg:h-[139px]">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:w-auto">
          <p className="text-primary lg:text-3xl font-bold mb-4 lg:mb-0">
            Subscribe NewSeletter
          </p>
          <div className="relative lg:ml-60 mb-4 lg:mb-0">
            <input
              type="email"
              placeholder="Email address"
              className="bg-orange text-white p-2 rounded-lg w-full lg:w-60"
            />
            <FiSend className="absolute right-2 top-2 text-white text-2xl" />
          </div>
        </div>
        <div className="flex items-center text-center lg:text-left mt-4 lg:mt-0">
          <CiHeadphones className="text-3xl mr-2" />
          <p>call us (+98) 0234 456 789</p>
        </div>
      </div>

      <div className="container px-5 py-12 mx-auto flex flex-wrap md:flex-nowrap">
        <div className="w-full md:w-64 flex-shrink-0 text-center md:text-left mb-10 md:mb-0">
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
        <div className="flex-grow flex flex-wrap md:pl-20">
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




































// import { FiSend } from "react-icons/fi";
// import { FaGoogle, FaFacebook, FaWhatsapp } from "react-icons/fa";
// import { CiHeadphones } from "react-icons/ci";
// import Logo from "../../assets/images/logo.png";

// export default function Footer() {
//   return (
//     <footer className="bg-blue-300 body-font pt-4 mt-5">
//       <div className="bg-white h-auto mx-auto lg:mx-[60px] flex flex-col lg:flex-row rounded-2xl ml-5 mr-5 lg:p-5 justify-between items-center mt-10 lg:h-[139px]">
//         <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:w-auto">
//           <p className="text-primary lg:text-3xl font-bold mb-4 lg:mb-0">
//             Subscribe NewSeletter
//           </p>
//           <div className="relative lg:ml-60 mb-4 lg:mb-0">
//             <input
//               type="email"
//               placeholder="Email address"
//               className="bg-orange text-white p-2 rounded-lg w-full lg:w-60"
//             />
//             <FiSend className="absolute right-2 top-2 text-white text-2xl" />
//           </div>
//         </div>
//         <div className="flex items-center text-center lg:text-left mt-4 lg:mt-0">
//           <CiHeadphones className="text-3xl mr-2" />
//           <p>call us (+98) 0234 456 789</p>
//         </div>
//       </div>

//       <div className="container px-5 py-12 mx-auto flex flex-wrap md:flex-nowrap">
//         <div className="w-full md:w-64 flex-shrink-0 text-center md:text-left mb-10 md:mb-0">
//           <a className="flex title-font font-medium items-center justify-center md:justify-start">
//             <img className="w-32 h-10 p-2" src={Logo} alt="Logo" />
//           </a>
//           <ul className="mt-4">
//             <li>
//               <a href="#" className="text-primary hover:underline">
//                 64 St James Boulevard, Howsvik, ZE2
//               </a>
//             </li>
//             <hr className="my-4" />
//             <li className="flex justify-center md:justify-start space-x-3">
//               <a href="#" className="text-primary text-xl">
//                 <FaGoogle />
//               </a>
//               <a href="#" className="text-primary text-xl">
//                 <FaFacebook />
//               </a>
//               <a href="#" className="text-primary text-xl">
//                 <FaWhatsapp />
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div className="flex-grow flex flex-wrap md:pl-20">
//           <div className="w-full md:w-1/4 px-4 mb-10 md:mb-0">
//             <h2 className="title-font font-medium text-primary tracking-widest text-sm mb-3">
//               Find Product
//             </h2>
//             <nav>
//               <ul>
//                 <li className="my-3">
//                   <a className="text-primary hover:underline">Brownze Arnold</a>
//                 </li>
//                 <li className="my-3">
//                   <a className="text-primary hover:underline">
//                     Chronograph Blue
//                   </a>
//                 </li>
//                 <li className="my-3">
//                   <a className="text-primary hover:underline">Smart Phone</a>
//                 </li>
//                 <li className="my-3">
//                   <a className="text-primary hover:underline">
//                     Hair Straightener
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//           <div className="w-full md:w-1/4 px-4 mb-10 md:mb-0">
//             <h2 className="title-font font-medium text-primary tracking-widest text-sm mb-3">
//               Get Help
//             </h2>
//             <nav>
//               <ul>
//                 <li className="my-3">
//                   <a className="text-primary hover:underline">Contact Us</a>
//                 </li>
//                 <li className="my-3">
//                   <a className="text-primary hover:underline">Privacy Policy</a>
//                 </li>
//                 <li className="my-3">
//                   <a className="text-primary hover:underline">Return Policy</a>
//                 </li>
//                 <li className="my-3">
//                   <a className="text-primary hover:underline">Payment Policy</a>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//           <div className="w-full md:w-1/4 px-4 mb-10 md:mb-0">
//             <h2 className="title-font font-medium text-primary tracking-widest text-sm mb-3">
//               About Us
//             </h2>
//             <nav>
//               <ul>
//                 <li className="my-3">
//                   <a className="text-primary hover:underline">News</a>
//                 </li>
//                 <li className="my-3">
//                   <a className="text-primary hover:underline">Services</a>
//                 </li>
//                 <li className="my-3">
//                   <a className="text-primary hover:underline">Our Policy</a>
//                 </li>
//                 <li className="my-3">
//                   <a className="text-primary hover:underline">FAQs</a>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//           <div className="w-full md:w-1/4 px-4 mb-10 md:mb-0">
//             <h2 className="title-font font-medium text-primary tracking-widest text-sm mb-3">
//               Categories
//             </h2>
//             <nav>
//               <ul>
//                 <li className="my-3">
//                   <a className="text-primary hover:underline">Customer Care</a>
//                 </li>
//                 <li className="my-3">
//                   <a className="text-primary hover:underline">News</a>
//                 </li>
//                 <li className="my-3">
//                   <a className="text-primary hover:underline">
//                     Automatic Watch
//                   </a>
//                 </li>
//                 <li className="my-3">
//                   <a className="text-primary hover:underline">About Us</a>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
