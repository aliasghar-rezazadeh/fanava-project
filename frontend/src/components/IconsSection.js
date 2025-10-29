import React, { useState } from "react";

import { ReactComponent as SvgIcon1 } from '../assets/images/home/e-fas-wifi.svg';
import { ReactComponent as SvgIcon6 } from '../assets/images/home/e-fas-sim.svg';
import { ReactComponent as SvgIcon2 } from '../assets/images/home/e-fas-network.svg';
import { ReactComponent as SvgIcon3 } from '../assets/images/home/e-fas-server.svg';
import { ReactComponent as SvgIcon4 } from '../assets/images/home/e-fas-headset.svg';
import { ReactComponent as SvgIcon5 } from '../assets/images/home/e-fas-broadcast.svg';

import "./IconsSection.css";

const IconsSection = () => {
  const [selected, setSelected] = useState(1);

  const iconData = [
    {
      id: 1,
      Icon: SvgIcon1,
      title: "اینترنت پرسرعت ثابت",
      desc: "سرویس ADSL فن‌آوا با سرعت بالا، پایداری فوق‌العاده و پشتیبانی حرفه‌ای، اینترنتی مطمئن برای کاربران خانگی و اداری فراهم می‌کند. با پوشش گسترده و تعرفه‌های متنوع، تجربه‌ای سریع و مقرون‌به‌صرفه از اینترنت را در سراسر ایران ارائه می‌دهد. فن‌آوا، انتخاب هوشمند اینترنت پرسرعت."
    },
    {
      id: 2,
      Icon: SvgIcon6,
      title: "LTE",
      desc: "سرویس TD-LTE فن‌آوا اینترنت پرسرعت بی‌سیم را بدون نیاز به خط تلفن، با نصب سریع و پوشش گسترده ارائه می‌دهد. این سرویس مناسب کاربران خانگی و سازمانی است که به سرعت بالا، پایداری و پشتیبانی مطمئن نیاز دارند. فن‌آوا، انتخابی هوشمند برای اینترنت نسل جدید."
    },
    {
      id: 3,
      Icon: SvgIcon3,
      title: "دیتاسنتر",
      desc: "سرویس دیتاسنتر فن‌آوا با زیرساختی ایمن، پایدار و مطابق با استانداردهای بین‌المللی، میزبانی مطمئن برای سرورها و اطلاعات سازمانی فراهم می‌کند. با پشتیبانی ۲۴/۷، پهنای باند بالا و امنیت فیزیکی و شبکه‌ای، فن‌آوا انتخابی حرفه‌ای برای میزبانی و خدمات دیتاسنتری است."
    },
    {
      id: 4,
      Icon: SvgIcon4,
      title: "تلفن ثابت",
      desc: "سرویس VoIP فن‌آوا ارتباط تلفنی پایدار، باکیفیت و مقرون‌به‌صرفه را از طریق اینترنت برای سازمان‌ها و کسب‌وکارها فراهم می‌کند. با امکاناتی مانند تماس تصویری، انتقال تماس و مرکز تماس هوشمند، فن‌آوا انتخابی حرفه‌ای برای ارتقای ارتباطات سازمانی و کاهش هزینه‌های تلفن است."
    },
    {
      id: 5,
      Icon: SvgIcon5,
      title: "پهنای باند",
      desc: "سرویس پهنای باند اختصاصی فن‌آوا، اینترنتی پرسرعت، پایدار و امن را برای سازمان‌ها و مراکز داده فراهم می‌کند. این سرویس با SLA تضمین‌شده، مانیتورینگ ۲۴/۷ و کیفیت حرفه‌ای، مناسب کسب‌وکارهایی است که به ارتباطی مطمئن و بدون قطعی نیاز دارند. فن‌آوا، تضمین کیفیت ارتباط."
    },
    {
      id: 6,
      Icon: SvgIcon2,
      title: "شبکه اختصاصی مجازی",
      desc: "سرویس شبکه اختصاصی مجازی (VPN) فن‌آوا، ارتباطی امن، پایدار و رمزنگاری‌شده را بین شعب و دفاتر سازمانی فراهم می‌کند. این سرویس با کیفیت بالا، پشتیبانی تخصصی و بستر مطمئن، مناسب کسب‌وکارهایی است که به انتقال داده محرمانه و اتصال امن نیاز دارند. فن‌آوا، امنیت در ارتباطات."
    },
  ];

  const activeItem = iconData.find(item => item.id === selected);

  return (
    <section className="icons-section">
      <div className="icon-row">
        {iconData.map(({ id, Icon }) => (
          <div
            key={id}
            className={`icon-box ${selected === id ? "active" : ""}`}
            onClick={() => setSelected(id)}
          >
            <Icon className="icon" />
          </div>
        ))}
      </div>

      {activeItem && (
        <div className="icon-description fade-in">
          <h3 className="icon-title">{activeItem.title}</h3>
          <p className="icon-text">{activeItem.desc}</p>
        </div>
      )}
    </section>
  );
};

export default IconsSection;
