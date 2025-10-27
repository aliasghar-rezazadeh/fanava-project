import React, { useState } from "react";
import "./Header.css";
import logo from '../../assets/images/fanava-logo.png';

function Header() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));
  };

  const closeMenu = () => setOpenMenu(null);

  return (
    <header className="he-header" onMouseLeave={closeMenu}>
      
      <div className="he-logo">
        <img src={logo} alt="fanava logo" />
      </div>

      <nav className="he-nav" aria-label="main navigation">
        <ul className="he-menu">

          <li className="he-menu-item"
            onMouseEnter={() => setOpenMenu("products")}
            >
            
            <div className="he-menu-titr"
              onClick={() => toggleMenu("products")}
              aria-expanded={openMenu === "products"}
              >
              محصولات و خدمات
            </div>

            <ul className={`he-submenu ${openMenu === "products" ? "open" : ""}`}>
              <div>
                <p>خدمات خانگی</p>
                <li><a href="#">اینترنت پرسرعت ADSL2+</a></li>
                <li><a href="#">اینترنت پر سرعت LTE</a></li>
                <li><a href="#">پهنای باند اشتراکی</a></li>
                <li><a href="#">برج ها و مجتمع ها</a></li>
              </div>
            </ul>
          </li>

          <li className="he-menu-item"
            onMouseEnter={() => setOpenMenu("support")}
            >
            
            <div className="he-menu-titr"
              onClick={() => toggleMenu("support")}
              aria-expanded={openMenu === "support"}
              >
              پشتیبانی
            </div>

            <ul className={`he-submenu ${openMenu === "support" ? "open" : ""}`}>
              <div>
                <p>خدمات پشتیبانی</p>
                <li><a href="#">مناطق تحت پوشش</a></li>
                <li><a href="#">تست سرعت</a></li>
                <li><a href="#">پرسش و پاسخ</a></li>
                <li><a href="#">صدای مشتری</a></li>
                <li><a href="#">ارتباط با پشتیبانی</a></li>
                <li><a href="#">محتوای آموزشی</a></li>
              </div>
            </ul>
          </li>
          <li className="he-menu-item"
            onMouseEnter={() => setOpenMenu("about-us")}>

            <div
              className="he-menu-titr"
              onClick={() => toggleMenu("about-us")}
              aria-expanded={openMenu === "about-us"}
              >
              درباره ما
            </div>
            <ul className={`he-submenu ${openMenu === "about-us" ? "open" : ""}`}>
              <div>
                <p>درباره فن آوا</p>
                <li><a href="#">درباره فن آوا</a></li>
                <li><a href="#">اخبار و تازه ها</a></li>
                <li><a href="#">ارتباط باما</a></li>
                <li><a href="#">فرصت های همکاری</a></li>
              </div>
            </ul>
          </li>

        </ul>
      </nav>

      <div className="he-cta">
        <button className="h-button he-button-1">خدمات سازمانی</button>
        <button className="h-button he-button-2">پنل کاربری</button>
      </div>
      
      
    </header>
  );
}

export default Header;
