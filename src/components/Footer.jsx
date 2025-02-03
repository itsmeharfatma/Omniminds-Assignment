import { footerLinks, languages } from "../constants";
import CTA from "./Cta";

const Footer = () => {
  return (
    <footer className="min-container">
      <CTA />
      <div className="flex justify-between items-start gap-14 sm:gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a to="/">
            <h1 className="text-3xl font-bold text-white">Skill Showcase</h1>
          </a>
        </div>

        <div className="flex flex-1 justify-end lg:gap-10 gap-14 flex-wrap">
          <ul className="flex gap-10">
            {footerLinks.map((link) => (
              <li
                className="mt-2 text-gray-200 leading-normal hover:text-slate-gray cursor-pointer"
                key={link.label}
              >
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="border-t border-gray-200 my-8" />

      <div className="flex justify-between mt-6 max-sm:flex-col-reverse gap-4 max-sm:items-start items-center">
        <select
          className={`cursor-pointer py-1 bg-transparent border border-gray-300 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          }`}
        >
          {languages.map((item) => (
            <option
              key={item.value}
              value={item.value}
              className="flex cursor-default items-center px-3 py-2 bg-slate-100"
            >
              {item.label}
            </option>
          ))}
        </select>
        <p className="mt-0.5 text-gray-200">
          © 2024 Brand, Inc. • Privacy • Terms • Sitemap
        </p>
        <div className="flex gap-6">
          <i class="fa-brands fa-twitter text-blue-400 cursor-pointer"></i>
          <i class="fa-brands fa-facebook text-blue-600 cursor-pointer"></i>
          <i class="fa-brands fa-linkedin text-blue-500 cursor-pointer"></i>
          <i class="fa-brands fa-youtube text-red-500 cursor-pointer"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
