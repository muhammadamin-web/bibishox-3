/* eslint-disable react/no-unescaped-entities */
import universal from "../../assets/images/location.jpg";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Location = () => {
  useEffect(() => {
    AOS.init({

      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="location">
      <div className="container">
        <div className="location_box">
          <div className="location_card_left" data-aos="fade-right" data-aos-offset="-200">
            <img src={universal} alt="" className="location_img" />
          </div>
          <div className="location_card1" data-aos="fade-left" data-aos-offset="-200">
            <h3 className="location_title"> Loyiha joylashuvi</h3>
            <p className="location_text">
            Loyiha Urgut tumanining rivojlanayotgan hududida qurilayotgan boʻlib, uning joylashuvi aholi uchun yuqori darajadagi qulayliklarni taʼminlaydi.

            </p>
            <p className="location_text">
            Majmua Urgut tumanining markaziy qismiga yaqin joyda qurilgan boʻlib, bu yerdan shahar markazidagi asosiy infratuzilma obyektlariga oson va tez yetib borish mumkin.

            </p>
            <p className="location_text">
            Majmua joylashgan hudud tez rivojlanayotgan boʻlib, kelgusida yangi infratuzilma obyektlarining qurilishi va rivojlanishi kutilmoqda. Bu esa majmuani nafaqat yashash uchun qulay, balki sarmoya uchun ham istiqbolli joyga aylantiradi.            </p>
          </div>
          <div className="location_card2" data-aos="fade-left" data-aos-offset="-200">
            <p className="location_text2">
          <span> Bibishox </span> — oila bagʻrida tinch va totuv hayot kechirish uchun moʻljallangan 
            uylar. Har bir rezident uchun eng qulay imkoniyatlar taqdim etamiz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
