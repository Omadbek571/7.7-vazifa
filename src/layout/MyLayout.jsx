import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../imges/logo.svg";
import { useTranslation } from "react-i18next"; 

function MyLayout({ children }) {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("uz");

  function handleChange(e) {
    setLang(e.target.value);
  }

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <div>
      <nav className="flex items-center justify-between p-4 bg-white shadow-md border-2 border-black">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Brave Logo" className="h-8" />
          <span className="font-bold text-4xl text-black">Brave</span>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-bold">
              {t("home")} 
            </Link>
          </li>
          <li>
            <Link to="/card" className="text-gray-700 hover:text-blue-600 font-bold">
              {t("card")} 
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-gray-700 hover:text-blue-600 font-bold">
              {t("products")} 
            </Link>
          </li>
        </ul>
        <select onChange={handleChange} value={lang} className="select select-bordered w-12 text-white">
          <option value="uz">uz</option>
          <option value="ru">ru</option>
          <option value="en">en</option>
        </select>
      </nav>
      {children}
    </div>
  );
}

export default MyLayout;
