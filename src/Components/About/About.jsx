import about1 from "../../assets/images/about1.svg";
import about2 from "../../assets/images/about2.svg";
import about3 from "../../assets/images/about3.svg";
import about4 from "../../assets/images/about4.svg";
import universal from "../../assets/images/about.jpg";
  import location_icon from "../../assets/images/location_icon.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="about">
      <div className="container">
        <div className="about_box">
          <div
            className="about_card_text"
            data-aos="fade-right"
            data-aos-offset="-50"
          >
            <h2 className="about_title">Loyiha haqida</h2>
            <p className="about_text">
              Bibishox Urgut tumanida barpo etilayotgan yangi turar-joy
              kompleksi boʻlib, zamonaviy arxitektura va qulay yashash
              sharoitlari bilan ajralib turadi.
            </p>
            <p className="about_text">
              Ushbu majmua hududdagi eng soʻnggi meʼmorchilik talablariga mos
              ravishda qurilgan va aholiga yuqori sifatli, farovon yashash
              imkoniyatini taqdim etadi.
            </p>
          </div>

          <div className="about_card_left" data-aos="fade-left">
            <img className="about_card_left_img" src={universal} alt="" />
            <div className="about_map_text">
              <p className="about_map_text_text">
                Majmua oʻzining shinam xonadonlari va qulay yashash sharoitlari
                bilan oilalar uchun eng muqobil tanlovga aylanadi.
              </p>
              <p className="about_map_text_text2">Xaritada ko‘rish</p>
            </div>
          </div>
          <div className="about_card_icons" data-aos="fade-right">
            <div className="about_card_icon">
              <div className="about_icon_text">
                <div className="about_icon_text_card">
                  <svg
                    className="about_icon_text_img"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 17.793H2.93001C4.38001 17.793 5.56 18.983 5.56 20.423V32.123C5.56 33.573 4.37001 34.753 2.93001 34.753H2V17.793Z"
                      stroke="#251941"
                      stroke-width="1.1999"
                      stroke-miterlimit="22.9256"
                      stroke-linecap="round"
                    />
                    <path
                      d="M8.72006 21.0723H5.56006V31.4823H8.72006V21.0723Z"
                      stroke="#251941"
                      stroke-width="1.1999"
                      stroke-miterlimit="22.9256"
                      stroke-linecap="round"
                    />
                    <path
                      d="M29.5801 21.413L26.8201 26.183C21.1401 22.903 16.0001 19.933 10.3101 16.653C8.35007 15.523 8.21008 14.063 8.99008 12.713L10.3401 10.373L29.5801 21.413Z"
                      stroke="#251941"
                      stroke-width="1.1999"
                      stroke-miterlimit="22.9256"
                      stroke-linecap="round"
                    />
                    <path
                      d="M38.0199 17.7429L34.2999 24.1929L10.3398 10.3729C11.2398 8.82287 11.7498 7.93287 12.6398 6.38287C13.1998 5.40287 14.6799 4.35287 16.6599 5.50287L38.0199 17.7429Z"
                      stroke="#251941"
                      stroke-width="1.1999"
                      stroke-miterlimit="22.9256"
                      stroke-linecap="round"
                    />
                    <path
                      d="M10.8301 13.7539L14.7101 15.9939"
                      stroke="#251941"
                      stroke-width="1.1999"
                      stroke-miterlimit="22.9256"
                      stroke-linecap="round"
                    />
                    <path
                      d="M27.71 24.6428C27.71 24.6428 29.1199 25.5228 30.7599 24.9928C32.3999 24.4728 32.8999 23.3828 32.8999 23.3828"
                      stroke="#251941"
                      stroke-width="1.1999"
                      stroke-miterlimit="22.9256"
                      stroke-linecap="round"
                    />
                    <path
                      d="M8.73047 27.9728H12.6605C13.9605 27.9728 15.5505 27.9528 17.0705 26.8728C18.6005 25.7928 19.4805 23.5628 20.2405 22.3828"
                      stroke="#251941"
                      stroke-width="1.1999"
                      stroke-miterlimit="22.9256"
                      stroke-linecap="round"
                    />
                    <path
                      d="M8.73047 24.5326H12.3105C13.2905 24.5326 14.1205 24.6126 15.0705 23.9826C16.0305 23.3526 16.8905 21.3226 17.2205 20.6426"
                      stroke="#251941"
                      stroke-width="1.1999"
                      stroke-miterlimit="22.9256"
                      stroke-linecap="round"
                    />
                    <path
                      d="M32.9998 17.5938C33.8198 17.5938 34.4898 18.2638 34.4898 19.0838C34.4898 19.9038 33.8198 20.5738 32.9998 20.5738C32.1798 20.5738 31.5098 19.9038 31.5098 19.0838C31.5098 18.2638 32.1798 17.5938 32.9998 17.5938Z"
                      stroke="#251941"
                      stroke-width="1.1999"
                      stroke-miterlimit="22.9256"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                24/7 Qo'riqlash va video kuzatuv
              </div>
              <div className="about_icon_text">
                <div className="about_icon_text_card">
                  <svg
                    className="about_icon_text_img"
                    width="70"
                    height="70"
                    viewBox="0 0 70 78"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.3223 68.654H15.0723V68.904C15.0723 68.9631 15.0726 69.0246 15.0729 69.088C15.0753 69.602 15.0783 70.241 14.9324 70.7779C14.8515 71.0755 14.7305 71.3172 14.5585 71.4831C14.3928 71.6429 14.1616 71.75 13.8181 71.75H1.36432C1.0954 71.75 0.815838 71.6168 0.599082 71.3938C0.382626 71.171 0.25 70.8801 0.25 70.596V1.404C0.25 1.11992 0.382626 0.828977 0.599082 0.606225C0.815839 0.383164 1.0954 0.25 1.36432 0.25H68.6357C68.9046 0.25 69.1842 0.383164 69.4009 0.606225C69.6174 0.828977 69.75 1.11992 69.75 1.404V70.596C69.75 70.8801 69.6174 71.171 69.4009 71.3938C69.1842 71.6168 68.9046 71.75 68.6357 71.75H56.1819C55.828 71.75 55.5927 71.6418 55.4261 71.4824C55.2533 71.3171 55.1336 71.0764 55.0549 70.7795C54.9174 70.2606 54.9223 69.6482 54.9264 69.1418C54.927 69.0594 54.9277 68.9799 54.9277 68.904V68.654H54.6777H15.3223ZM12.4239 17.172V16.922H12.4095C12.4619 16.617 12.6113 16.3834 12.8206 16.2146C13.09 15.9973 13.4764 15.874 13.923 15.874H56.007C56.469 15.874 56.8545 16.0052 57.1196 16.2257C57.38 16.4423 57.5411 16.758 57.5411 17.172V68.76V69.01H57.7911H66.8166H67.0666V68.76V3.24V2.99H66.8166H3.14843H2.89843V3.24V68.76V69.01H3.14843H12.1739H12.4239V68.76V17.172ZM15.2874 18.578H15.0374V18.828V65.628V65.878H15.2874H33.4433H33.6933V65.628V18.828V18.578H33.4433H15.2874ZM36.4518 18.578H36.2018V18.828V65.628V65.878H36.4518H54.6077H54.8577V65.628V18.828V18.578H54.6077H36.4518Z"
                      fill="#251941"
                      stroke="white"
                      stroke-width="0.5"
                    />
                    <path
                      d="M27.3817 10.2829L27.274 10.2316L27.1664 10.2831C26.9333 10.3946 26.6811 10.5758 26.4298 10.7702C26.3096 10.8632 26.1948 10.9549 26.0793 11.0472C25.9372 11.1608 25.794 11.2752 25.6384 11.3938C25.3678 11.6001 25.1001 11.7866 24.8414 11.9212C24.5811 12.0566 24.3481 12.1297 24.1438 12.1297C23.5767 12.1297 23.189 12.017 22.9485 11.8375C22.7764 11.7091 22.6627 11.5338 22.6172 11.2984H22.6307V11.0484C22.6307 10.942 22.6875 10.7988 22.8293 10.6179C22.9677 10.4414 23.1649 10.2572 23.3924 10.0734C23.6994 9.82545 24.0306 9.60134 24.3201 9.4054C24.4678 9.30544 24.6047 9.21282 24.722 9.12809L24.722 9.1281L24.7239 9.12668C24.8473 9.03573 24.9828 8.9275 25.1228 8.81559C25.1816 8.76855 25.2413 8.72086 25.3012 8.67353C25.5079 8.51033 25.7265 8.34414 25.957 8.19549C26.4199 7.897 26.9058 7.6859 27.405 7.69988C27.8186 7.73234 28.3089 7.98473 28.8017 8.32211C29.1492 8.56005 29.471 8.82024 29.7492 9.04526C29.8645 9.13846 29.9722 9.22562 30.0713 9.30267L30.0711 9.30289L30.0809 9.30978C30.1971 9.39151 30.3263 9.47797 30.4591 9.56679L30.4876 9.5858C30.6314 9.682 30.7798 9.78163 30.9268 9.88533C31.2226 10.094 31.5015 10.3116 31.7109 10.5355C31.9233 10.7627 32.038 10.9688 32.0556 11.153C32.0715 11.3198 32.0122 11.5219 31.7475 11.7632L31.7475 11.7632L31.7455 11.765C31.4058 12.0816 31.0363 12.1792 30.6499 12.1469C30.2522 12.1136 29.8295 11.9413 29.4094 11.6997C28.9913 11.4593 28.5948 11.1615 28.2482 10.8947C28.2123 10.8671 28.1769 10.8397 28.1419 10.8127C28.0101 10.7109 27.8854 10.6146 27.7735 10.5326C27.6344 10.4307 27.4993 10.3389 27.3817 10.2829Z"
                      fill="#251941"
                      stroke="white"
                      stroke-width="0.5"
                    />
                    <path
                      d="M39.939 8.66509C39.9419 8.63592 39.9565 8.58589 39.9992 8.51451C40.0458 8.43649 40.1157 8.35025 40.2026 8.26335C40.3775 8.08841 40.5954 7.93661 40.7619 7.86061C41.2624 7.64212 41.6852 7.67112 42.1605 7.92428C42.3394 8.02219 42.8265 8.36875 43.3154 8.73996C43.5566 8.9231 43.7924 9.10778 43.9828 9.2638C44.1795 9.42511 44.311 9.54246 44.3579 9.59603L44.4851 9.74139L44.6579 9.65501C44.9257 9.52109 45.2474 9.27028 45.5786 9.01208C45.5933 9.00058 45.6081 8.98907 45.6229 8.97756C45.9808 8.69867 46.3668 8.40035 46.7693 8.16233C47.1729 7.92363 47.5731 7.75799 47.9561 7.72747C48.3279 7.69783 48.6972 7.79399 49.0588 8.10808C49.3289 8.34763 49.3835 8.54784 49.363 8.71437C49.3397 8.90277 49.2132 9.11591 48.9852 9.35235C48.7613 9.58464 48.4678 9.81096 48.1625 10.0292C48.055 10.106 47.9441 10.1831 47.8351 10.2589C47.6452 10.391 47.4609 10.5192 47.3101 10.6351C47.1303 10.768 46.9424 10.9174 46.7543 11.067C46.7218 11.0928 46.6894 11.1186 46.657 11.1443C46.4339 11.3213 46.2106 11.4961 45.99 11.6512C45.5351 11.9709 45.1433 12.1679 44.8339 12.1679C44.2116 12.1679 43.7184 11.9652 43.2554 11.6678C43.0216 11.5177 42.7972 11.3446 42.5662 11.16C42.5143 11.1185 42.4619 11.0763 42.409 11.0337C42.23 10.8896 42.0452 10.7408 41.8546 10.5996C41.7358 10.5072 41.5923 10.4046 41.4425 10.2974C41.3829 10.2548 41.3223 10.2114 41.2619 10.1677C41.0441 10.0103 40.82 9.84248 40.6174 9.6658C40.414 9.48835 40.2404 9.30876 40.119 9.13009C40.0043 8.96135 39.9453 8.80696 39.939 8.66509Z"
                      fill="#251941"
                      stroke="white"
                      stroke-width="0.5"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M62.0332 33.5403C62.0332 34.8357 63.9402 35.2675 64.408 33.9361C65.0917 32.101 62.0332 31.4893 62.0332 33.5403Z"
                      fill="#251941"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M62.0332 38.3221C62.0332 39.5454 63.2566 40.1212 64.0842 39.4015C64.444 39.1137 64.5879 38.5739 64.444 38.1062C63.9762 36.6669 62.0332 37.2786 62.0332 38.358V38.3221Z"
                      fill="#251941"
                    />
                  </svg>
                </div>
                Shovqinsiz liftlar
              </div>
              <div className="about_icon_text">
                <div className="about_icon_text_card">
                  <img
                    className="about_icon_text_img"
                    src={location_icon}
                    alt=""
                  />
                </div>
                Qulay joylashuv
              </div>
              <div className="about_icon_text">
                <div className="about_icon_text_card">
                  <svg
                    className="about_icon_text_img"
                    width="72"
                    height="61"
                    viewBox="0 0 72 61"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.0486853 54.013C0.462481 53.4976 1.02228 53.3995 1.65513 53.3995C7.05865 53.424 12.4622 53.424 17.8658 53.424H18.7421C17.2086 47.1667 18.8881 42.2346 24.7054 39.3389C28.7216 37.3513 32.7378 37.9402 36.194 40.7621C40.2102 44.0503 41.2568 48.369 39.8208 53.3259C41.4272 53.3259 43.0337 53.375 44.6158 53.3014C45.3217 53.2523 45.8571 52.6879 46.0762 52.0008C47.1228 48.7862 48.1451 45.5471 49.1918 42.2099C48.0235 42.2099 46.9038 42.2099 45.7842 42.2099C43.3501 42.2099 41.5246 40.4186 41.549 38.0629C41.5733 35.7318 43.3745 33.9895 45.7842 33.9895C47.6584 33.9895 49.5082 33.9895 51.5041 33.9895C51.285 33.5723 51.139 33.2043 50.9199 32.9099C50.4087 32.2472 49.8977 31.6092 49.3135 31.0204C49.0945 30.7995 48.7293 30.6523 48.3885 30.6032C43.2527 29.7689 38.7985 27.5605 34.9283 24.125C33.6628 22.9963 32.4456 21.7448 31.2773 20.4933C29.8413 18.9229 30.0116 16.4935 31.5937 14.9231C33.3706 13.1808 35.1474 11.4631 36.8999 9.72087C37.0703 9.57366 37.2407 9.42644 37.3381 9.25473C37.7762 8.66572 37.4597 7.90499 36.7296 7.80689C36.5105 7.7824 36.2671 7.80689 36.0237 7.80689C24.5107 7.80689 12.9977 7.80689 1.50909 7.80689C0.851893 7.80689 0.365096 7.65968 0.0243285 7.09529V6.23634C0.413768 5.79468 0.900578 5.64746 1.50909 5.64746C13.1194 5.67209 24.7054 5.67209 36.2914 5.67209C38.2387 5.67209 39.4313 6.62901 39.6504 8.37128C39.7721 9.35283 39.4557 10.1872 38.7985 10.8743C38.1413 11.5612 37.4841 12.2239 36.8025 12.9355C37.7519 14.0397 38.7011 15.1685 39.6504 16.2973C40.2102 16.9598 40.2102 17.5978 39.7233 18.0394C39.1879 18.5057 38.6038 18.383 38.0196 17.696C37.0947 16.6162 36.1698 15.5121 35.0745 14.2606C34.3198 15.0949 33.5897 15.8555 32.8838 16.6653C32.2753 17.3769 32.2509 18.3585 32.8838 19.0701C36.5591 23.2171 40.8187 26.4807 46.2709 27.9285C46.3683 27.953 46.49 27.9776 46.7578 28.0266C45.6381 26.7015 44.6158 25.4991 43.6179 24.3212C42.9363 23.5115 42.2305 22.7018 41.5733 21.892C41.0378 21.254 41.0378 20.6405 41.549 20.1988C42.06 19.7572 42.6443 19.8308 43.1797 20.4933C46.2953 24.1495 49.4352 27.8058 52.5264 31.4867C53.6217 32.7871 53.9138 34.3331 53.4026 35.9526C51.6501 41.4983 49.922 47.0194 48.1208 52.5407C47.5123 54.43 45.9059 55.5589 43.9099 55.5589C42.3765 55.5589 40.843 55.5834 39.3097 55.5589C38.8228 55.5343 38.5307 55.6815 38.2143 56.0987C33.76 62.2579 24.7054 62.2333 20.2511 56.0742C19.9834 55.6815 19.6913 55.5589 19.2288 55.5589C13.3141 55.5834 7.3995 55.5589 1.48476 55.5834C0.851907 55.5834 0.340768 55.4362 0 54.8718M29.2814 40.4432C24.2916 40.4677 20.2998 44.5166 20.3242 49.596C20.3485 54.5283 24.4133 58.5526 29.3544 58.5526C34.2469 58.5526 38.2629 54.4792 38.2629 49.4978C38.2629 44.492 34.2469 40.4432 29.2814 40.4432ZM51.1634 36.1489C49.2161 36.1489 47.3906 36.0998 45.5894 36.1734C44.4454 36.2225 43.7153 37.0814 43.7153 38.1365C43.7153 39.1917 44.494 40.026 45.6381 40.0751C47.0498 40.1241 48.4373 40.0996 49.8977 40.0996C50.2871 38.7991 50.7252 37.523 51.1634 36.1489Z"
                      fill="#251941"
                    />
                    <path
                      d="M0.0723105 29.4719C0.48206 28.9347 1.0364 28.8579 1.66308 28.8579C8.65289 28.8835 15.6187 28.8835 22.5845 28.8579C23.0184 28.8579 23.5246 28.7812 23.9102 28.5509C24.6815 28.1415 24.9708 27.0415 24.4886 26.2483C22.4158 22.7687 20.0778 19.5707 16.3659 17.8821C14.4377 16.9866 12.4131 16.4493 10.3161 16.4237C7.37555 16.3981 4.45905 16.3981 1.51846 16.4237C0.867684 16.4237 0.385624 16.2446 0.0481846 15.6817V14.7862C0.385624 14.3513 0.795401 14.1211 1.34976 14.1211C4.43496 14.1467 7.54428 14.0698 10.6053 14.1723C16.4142 14.4024 20.9937 17.1656 24.3923 22.1291C24.9708 22.9733 25.5492 23.8432 26.1036 24.7387C26.9712 26.0948 27.0677 27.5531 26.3205 28.9859C25.5974 30.393 24.3923 31.0582 22.8737 31.0582C15.7152 31.0582 8.58063 31.0582 1.39794 31.0582C0.771261 31.0582 0.337439 30.8792 0 30.3163"
                      fill="#251941"
                    />
                    <path
                      d="M61.0722 24.4334V52.423C61.6462 52.423 62.1962 52.423 62.7223 52.423C64.9942 52.4473 66.429 53.9333 66.453 56.2232C66.453 57.1732 66.453 58.1476 66.453 59.122C66.429 60.1451 65.9028 60.7054 64.9223 60.7054C61.6461 60.7054 58.3699 60.7054 55.0936 60.7054C54.0892 60.7054 53.587 60.1451 53.587 59.0976C53.5631 58.0989 53.587 57.1244 53.587 56.1256C53.587 53.9577 55.0219 52.4473 57.1502 52.3986C57.7242 52.3743 58.298 52.3986 58.9198 52.3986V24.4091C55.1414 23.922 52.1282 22.1679 49.9998 18.9282C48.3736 16.4678 47.7519 13.7394 48.0866 10.8162C48.828 4.58001 53.874 0.0491096 59.9482 0.000397551C65.8073 -0.0483145 71.0206 4.3853 71.8336 10.1098C72.3597 13.6419 71.6423 16.8331 69.49 19.6588C67.3616 22.4847 64.5159 24.0192 61.0722 24.4334ZM60.02 2.16849C54.5675 2.16849 50.1194 6.69939 50.1194 12.2534C50.1194 17.7831 54.6153 22.3385 60.02 22.3385C65.4246 22.3385 69.9205 17.7588 69.9205 12.2292C69.9205 6.69939 65.4486 2.14413 60.02 2.16849ZM55.6676 58.5373H64.3245C64.3485 58.3181 64.3485 58.1232 64.3485 57.9526C64.3485 57.2706 64.3723 56.5885 64.3245 55.9064C64.2528 55.0538 63.7505 54.6154 62.8897 54.6154C60.9765 54.6154 59.0634 54.6154 57.1502 54.6154C56.2175 54.6154 55.6914 55.1269 55.6676 56.0769C55.6436 56.8808 55.6676 57.6603 55.6676 58.5373Z"
                      fill="#251941"
                    />
                    <path
                      d="M12.658 36.6911C12.0838 36.6911 11.5096 36.7232 10.9355 36.6911C10.2895 36.6591 9.85884 36.0508 9.88279 35.2824C9.90674 34.5462 10.3612 33.9378 10.9833 33.9059C12.1317 33.8738 13.28 33.8738 14.4284 33.9059C15.0982 33.9059 15.5289 34.4822 15.5289 35.3145C15.505 36.1148 15.1222 36.6592 14.4523 36.6592C13.8542 36.7232 13.2561 36.6911 12.658 36.6911Z"
                      fill="#251941"
                    />
                    <path
                      d="M28.9004 43.7656C31.4687 43.885 33.698 45.8184 33.8675 48.2294C34.0614 50.8553 32.3169 53.1469 29.821 53.5765C27.2043 54.0061 24.7084 52.4545 24.0784 49.9959C23.8604 49.1126 24.1027 48.5159 24.7327 48.3489C25.4353 48.1578 25.92 48.5159 26.1622 49.399C26.6227 51.3326 28.7791 52.192 30.4511 51.1417C31.6142 50.4017 32.0745 48.9456 31.5172 47.6805C30.96 46.3913 29.5303 45.7469 28.1734 46.1049C27.9796 46.1527 27.7857 46.2242 27.5677 46.2958C26.9861 46.4391 26.4772 46.1765 26.2835 45.6275C26.0653 45.0546 26.3077 44.5772 26.8165 44.3624C27.4707 44.0759 28.1976 43.9565 28.9004 43.7656Z"
                      fill="#251941"
                    />
                    <path
                      d="M58.2859 13.5166C58.2859 14.7255 58.2859 15.8588 58.2859 16.9922C58.2653 17.8989 57.9557 18.3775 57.3365 18.3523C56.7793 18.327 56.4903 17.8737 56.4697 16.9922C56.4697 13.7684 56.4697 10.5447 56.4903 7.32095C56.4903 6.16241 56.9031 5.68381 57.8319 5.65865C58.6367 5.65865 59.421 5.63348 60.2053 5.65865C62.1041 5.68381 63.5075 7.37128 63.5282 9.56251C63.5488 11.7284 62.1041 13.4662 60.2467 13.5417C59.6068 13.5417 58.9876 13.5166 58.2859 13.5166ZM58.3271 11.2498C59.0496 11.2498 59.7306 11.275 60.4118 11.2498C61.134 11.1995 61.6501 10.5196 61.6707 9.63802C61.6914 8.7566 61.2167 7.97572 60.515 7.90021C59.7926 7.82471 59.0496 7.87505 58.3271 7.87505V11.2498Z"
                      fill="#251941"
                    />
                  </svg>
                </div>
                Yerosti avtoturargoh
              </div>

              <div className="about_icon_text">
                <div className="about_icon_text_card">
                  <svg
                    className="about_icon_text_img"
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.9322 26.9368V28.4541C12.0339 28.4541 7.94068 28.6936 6.81356 28.514C1.73164 27.6755 2.95763 20.4285 7.9209 20.4285C9.16667 20.4285 10.2542 21.0274 10.887 21.6862C12.4096 23.2833 11.5791 22.1054 14.5254 22.1054C15.4153 22.1054 15.9492 22.5047 16.4831 22.8641C16.048 23.5229 15.5932 24.1019 15.0593 24.7806C14.5452 25.3995 13.9322 25.8587 13.9322 26.9368ZM17.5311 25.4195C18.0452 24.6409 18.6582 23.9621 19.2316 23.1835L23.661 17.4937C24.6299 16.2959 24.9463 15.9166 26.0734 17.3939C26.3701 17.7732 26.6271 18.0927 26.9435 18.492L32.2627 25.2798C27.1808 25.2598 22.5932 25.4195 17.5311 25.4195ZM39.935 39.9734V35.2619H41.5961V40.4326H40.3898C40.0537 40.4326 39.935 40.3328 39.935 39.9734ZM36.0396 35.2818H37.7006V40.4526H36.0396V35.2818ZM16.3446 45.6033V43.6269L33.7853 43.4672V45.4436L16.3446 45.6033ZM62.339 47.2604L62.4972 51.2133C61.6667 50.9937 61.3503 49.8557 60.5396 49.8557C59.6893 49.8557 59.3333 50.3748 59.3333 51.0735C59.3333 52.3912 62.4972 54.1281 62.4972 55.0265V58.061C60.7768 58.061 57.9294 56.7434 56.9209 55.0265C55.2006 52.0718 54.2316 51.373 54.2316 48.3384C54.2316 45.6632 55.4774 43.3474 56.822 41.9898C63.3079 35.5014 73.1751 40.6522 73.1751 48.019C73.1751 51.2532 72.5424 52.8903 70.6441 55.1862C69.5565 56.4839 66.7288 58.0411 64.7514 58.0411C64.7514 50.5145 64.0791 52.3712 67.0452 49.4365C68.6271 47.8793 68.0339 46.8212 66.5509 46.8212C66.0367 46.8212 65.1864 48.039 64.7514 48.3384C64.7514 47.0408 64.9096 46.1623 63.9802 45.7631C63.0311 45.3438 62.339 46.1623 62.339 47.2604ZM36.0396 42.7085C38.3333 42.7085 44.5028 42.4091 46.1638 43.1078C47.9633 43.8665 48.6356 45.5634 49.6836 47.3003L59.2542 63.4514C60.0057 64.3498 61.3305 65.3679 62.517 65.4678V68.8018C60.5791 68.8018 58.5028 69.0214 57.1384 66.9451C56.7825 66.3861 56.5057 65.9469 56.1695 65.348L53.2034 60.297C51.7203 57.8015 46.5989 48.3784 45.096 47.2404C42.6638 45.3638 39.7373 45.8828 36.0791 45.8828V42.7085H36.0396ZM21.9011 47.8793H27.774V50.3149H21.9011V47.8793ZM36.0396 48.3384C38.6497 48.3384 41.9322 47.9392 43.4944 48.9973C44.3051 49.5563 47.8051 55.7651 48.517 56.983C49.1497 58.101 49.7825 59.2788 50.4746 60.317C45.6695 59.179 40.8249 61.5747 38.5113 65.3879C37.9576 66.2863 37.1271 67.8036 37.0876 69.1212H36.178V56.983C36.178 53.9284 36.0396 51.393 36.0396 48.3384ZM16.4831 54.2479V47.8793H19.4887V55.6254C19.4887 58.5801 19.6469 61.0157 19.6469 63.9704C19.0734 63.9305 19.1723 63.8107 18.4407 63.8107C18.1638 60.5765 17.8672 59.2389 17.1158 56.4839C16.8983 55.7252 16.4831 55.0065 16.4831 54.2479ZM21.9011 52.7306H27.774V55.1662H21.9011V52.7306ZM23.2458 60.0175H21.9011V57.5819L27.4576 57.4222C28.1299 57.4222 27.9124 58.2008 27.9124 59.8578C26.1723 59.8778 25.0057 60.0175 23.2458 60.0175ZM59.9463 60.0175C60.8559 60.0375 61.548 60.4567 62.4972 60.4767V63.0521C61.7853 62.6728 61.4492 62.533 60.9746 61.8542C60.7373 61.5548 60.0254 60.3769 59.9463 60.0175ZM12.4294 53.03C13.517 53.03 14.5847 56.2443 14.9407 57.3423C15.4548 58.9395 15.8898 61.1954 16.048 63.0521C14.5254 62.6927 14.1893 62.3733 12.5876 62.7526C11.9746 61.5747 10.5706 60.7762 9.28531 60.4767C9.34463 60.317 10.7288 53.03 12.4294 53.03ZM64.7514 60.4767C68.8644 60.4767 73.9266 56.3042 74.678 53.03C75.0339 53.1099 75.291 53.1898 75.5876 53.3295C75.5876 55.9648 75.5876 58.6001 75.5876 61.2154C75.5876 63.9505 75.7458 66.1865 75.7458 68.9615H74.5396C74.5396 62.533 75.0141 63.3515 71.3757 63.3515H64.9096C64.8898 62.1737 64.7514 61.6346 64.7514 60.4767ZM21.9011 65.6275V62.2934H27.9124V69.1212H24.3136C23.404 69.1212 23.226 69.2809 22.3559 69.2809C22.3559 66.1266 21.9011 66.7255 21.9011 65.6275ZM3.84746 66.5458C3.84746 63.6311 7.16949 61.1954 10.2542 63.5712C10.7684 63.9704 11.3814 65.328 11.9548 65.328C13.0028 65.328 14.0508 64.3098 15.6723 65.8271C16.3446 66.466 16.7006 66.2464 17.5706 66.1266C20.2203 65.7273 20.6158 69.2809 19.4689 69.2809H5.21186C4.51977 69.2809 3.84746 67.6439 3.84746 66.5458ZM30.1667 65.6275V47.8593H33.7655V69.1012H30.3051C30.3249 67.7636 30.1667 67.025 30.1667 65.6275ZM64.8898 65.6275H72.1073V67.4442C72.1073 68.2029 72.2458 68.123 72.2655 68.8018H64.8898V65.6275ZM47.3107 69.1212H39.5C39.5396 67.4642 41.2599 65.5676 42.3079 64.5294C44.4831 62.3933 48.3588 61.9341 51.2655 63.0122C51.7401 63.1918 52.0763 63.1918 52.3729 63.5712L55.5763 68.9815C52.6497 68.9815 50.2373 69.1212 47.3107 69.1212ZM1 73.8328V71.457C1.0791 70.7184 1.37571 70.1394 2.20621 69.5804C2.08757 69.0414 1.87006 68.7619 1.71186 68.103C0.70339 63.7109 4.12429 60.3968 7.0113 60.317C7.0113 58.4603 8.94915 50.5944 12.4294 50.5944C13.2599 50.5944 13.4379 50.8939 14.0904 51.0536V37.6975C14.1497 37.2383 14.5254 36.7792 14.9802 36.7792C16.7797 36.7792 16.3249 38.4362 16.3249 41.1713H33.6073V27.6555H16.3446V33.5849C16.3446 33.9442 15.8107 34.5032 15.435 34.5032C13.6356 34.5032 13.9322 33.0658 13.9322 30.8697H6.87288C5.31073 30.8697 3.53107 29.7917 2.77966 28.9332C-1.21469 24.3814 2.79943 17.0346 9.22599 18.1725C10.3927 18.3722 11.935 19.1508 12.4492 19.9294C14.209 19.0709 16.5621 20.0092 18.0057 20.9875L22.5537 15.098C23.0678 14.5191 23.7401 14 24.7684 14C27.0226 14 27.4181 15.3975 28.6441 16.775L35.6045 25.5193C36.2966 26.4976 36.0396 31.6483 36.0396 32.966C39.065 32.966 41.5763 32.8063 44.6017 32.8063C45.5904 32.8063 46.8559 32.6665 46.8559 34.0241C46.8559 35.5214 45.3729 35.2419 43.8503 35.2419C43.8701 35.9207 44.0085 35.8408 44.0085 36.5995V40.3927C45.4124 40.3927 46.1638 40.4326 47.5283 41.0914C49.4266 42.0297 51.5621 45.3039 51.839 46.4618H52.1356C52.1356 45.1242 53.0057 43.3274 53.5593 42.429C57.5734 35.721 66.5311 34.5432 72.1864 40.213C73.6695 41.6904 74.8559 43.8864 75.291 46.0226C75.7655 48.3784 75.6469 48.4782 75.4492 50.7142C76.6158 51.2732 78 50.9138 78 52.8304V73.4734C78 74.1522 77.4859 74.7911 77.0508 75.0905C76.3983 75.5497 75.8842 75.4499 74.8559 75.4499C73.8079 75.4299 73.4322 75.6096 72.4633 75.6096H49.4463C46.0254 75.6096 43.0198 75.7693 39.5198 75.7693C32.6977 75.7693 25.8955 75.7693 19.0734 75.7693C17.2542 75.7693 15.9689 75.929 14.1102 75.929C12.4096 75.929 10.709 75.929 8.9887 75.929C6.95198 75.929 2.95763 76.2884 1.85028 75.39C1.41525 75.0706 1 74.5116 1 73.8328ZM3.25424 73.5333V71.7166C15.4746 71.7166 27.2401 71.5569 39.4802 71.5569L66.6893 71.3971C69.8927 71.3971 72.5819 71.2374 75.7062 71.2374V73.2139C51.4633 73.2338 27.5367 73.5333 3.25424 73.5333Z"
                      fill="#251941"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M42 16.3912C42 18.4615 43.7149 20 45.4494 20H51.7373C52.6637 20 53.3339 19.1073 52.8805 18.3285C52.4075 17.5118 51.3036 17.6828 50.0816 17.6828L45.272 17.7018C43.5769 17.2459 44.385 14.4348 46.3167 13.922C48.5638 13.3332 47.5782 14.0739 48.485 11.8137C48.8398 10.921 49.5099 9.9333 50.2195 9.43946C52.0724 8.18587 54.3392 7.86298 56.4088 8.83166C57.6506 9.42047 58.4391 10.3512 59.0107 11.5098C59.3458 12.2126 59.2867 12.9343 59.7597 13.3902C60.8241 14.4348 61.6323 12.7824 63.4851 15.0046C64.037 15.6694 64.3524 15.6694 65.4957 15.6694C66.4024 15.6694 67.2894 15.6694 68.1961 15.6694C68.5903 16.2582 68.6494 15.8404 68.6494 16.828C68.6494 17.3029 68.0384 17.6258 67.585 17.6828C67.0725 17.7397 66.0673 17.6828 65.4957 17.6828C64.2539 17.6828 56.1132 17.5878 55.5021 17.7397C54.0435 18.1006 54.3194 20 55.8963 20L67.2894 19.867C72.3551 19.905 72.02 13.4471 67.585 13.3522C65.6139 13.3142 65.3774 13.6561 64.6087 12.8963C62.8741 11.1489 61.8294 12.1746 61.2972 11.0349C60.351 9.0216 59.3261 7.57809 56.9016 6.60941C52.4666 4.82399 47.6571 7.16021 46.297 11.0349C46.0014 11.8897 46.3956 11.4908 45.272 11.9087C43.4783 12.5924 42 14.3778 42 16.3912Z"
                      fill="#251941"
                    />
                  </svg>
                </div>
                Bolalar o‘yingohi
              </div>
              <div className="about_icon_text">
                <div className="about_icon_text_card">
                  <svg
                    className="about_icon_text_img"
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.15076 5.06804C8.86226 5.25346 8.49132 5.45947 8.49132 5.66549V14.8745H17.3319V5.80971C17.2907 5.56248 16.1985 4.77962 15.0857 4.03795C14.0759 3.37869 13.0868 2.76064 12.8807 2.65763L9.39805 4.92383L9.15076 5.06804ZM28.2332 4.44999C27.5737 4.86202 26.6258 5.43887 26.6258 5.66549V14.8745H35.4664V5.80971C35.4664 5.48008 34.3124 4.77961 33.6529 4.36758L33.282 4.14096C32.8286 3.83193 32.4577 3.56411 32.1486 3.33749C31.551 2.90485 31.2419 2.69883 30.9946 2.69883C30.7473 2.69883 30.4382 2.92545 29.8406 3.35809C29.5521 3.56411 29.1605 3.83193 28.6659 4.18216L28.2332 4.44999ZM45.4197 5.06804C45.1312 5.23285 44.7603 5.45947 44.7603 5.64489V14.8539H53.6009V5.7891C53.5597 5.56248 52.4675 4.77962 51.3753 4.03795C50.3655 3.35809 49.3557 2.76064 49.1497 2.65763L45.667 4.92383L45.4197 5.06804ZM64.5022 4.44999C63.8427 4.86202 62.8948 5.43887 62.8948 5.66549V14.8745H71.7354V5.80971C71.7354 5.48008 70.5813 4.77961 69.9219 4.36758L69.551 4.14096C69.0976 3.83193 68.7061 3.56411 68.397 3.33749C67.7993 2.90485 67.4902 2.69883 67.2429 2.69883C66.9957 2.69883 66.6865 2.92545 66.0889 3.35809C65.7798 3.58471 65.3883 3.85254 64.9143 4.18216L64.5022 4.44999ZM75.7332 17.2231H4.5141V26.0613H75.7332V17.2231ZM17.1052 28.4305H8.49132V52.0195H17.3319V28.6571C17.3319 28.5541 17.3319 28.4923 17.3113 28.4717C17.2907 28.4511 17.2288 28.4305 17.1052 28.4305ZM24.0499 28.4305H19.7017V52.0195H24.2766V28.6571C24.2766 28.5541 24.2766 28.4923 24.256 28.4717C24.2147 28.4511 24.1529 28.4305 24.0499 28.4305ZM35.2397 28.4305H26.6052V52.0195H35.4458V28.6571C35.4458 28.5541 35.4458 28.4923 35.4252 28.4717C35.4252 28.4511 35.3633 28.4305 35.2397 28.4305ZM42.1844 28.4305H37.8362V52.0195H42.4111V28.6571C42.4111 28.5541 42.4111 28.4923 42.3905 28.4717C42.3492 28.4511 42.2874 28.4305 42.1844 28.4305ZM53.3948 28.4305H44.7603V52.0195H53.6009V28.6571C53.6009 28.5541 53.6009 28.4923 53.5803 28.4717C53.5597 28.4511 53.4978 28.4305 53.3948 28.4305ZM60.3189 28.4305H55.9707V52.0195H60.5455V28.6571C60.5455 28.5541 60.5455 28.4923 60.5249 28.4717C60.4837 28.4511 60.4219 28.4305 60.3189 28.4305ZM71.5293 28.4305H62.8948V52.0195H71.7354V28.6571C71.7354 28.5541 71.7354 28.4923 71.7148 28.4717C71.6941 28.4511 71.6323 28.4305 71.5293 28.4305ZM75.7332 54.3887H4.5141V63.2269H75.7332V54.3887ZM17.3319 65.5755H8.49132V73.5278H17.3319V65.5755ZM35.4664 65.5755H26.6258V73.5278H35.4664V65.5755ZM53.6009 65.5755H44.7603V73.5278H53.6009V65.5755ZM2 26.0201V16.5638C2 15.0599 2.68004 14.8333 4.14317 14.8333L6.14208 14.8745V4.77962C6.14208 4.09976 7.64642 3.15207 8.67679 2.51342L9.2538 2.14259C9.87202 1.73055 10.3666 1.38032 10.7787 1.09189C11.7885 0.370832 12.3037 0 12.8807 0C13.4577 0 13.9729 0.370832 15.0033 1.09189C15.4154 1.40092 15.9306 1.75115 16.5488 2.18379C16.8167 2.3486 17.0846 2.51342 17.3525 2.67823C18.5065 3.3993 19.7017 4.12036 19.7017 5.06804V14.8745H24.2766V4.77962C24.2766 4.12036 26.0488 2.98726 26.9967 2.41041L27.3883 2.16319C28.0065 1.75115 28.5011 1.40092 28.9132 1.1125C29.923 0.370832 30.4382 0 31.0152 0C31.5922 0 32.1074 0.370832 33.1377 1.09189C33.5499 1.38032 34.0651 1.75115 34.6833 2.16319C34.9512 2.3486 35.2191 2.51342 35.4664 2.65763C36.6204 3.37869 37.8156 4.09976 37.8156 5.04744V14.8539H42.3905V4.75901C42.3905 4.09976 44.1627 2.96666 45.1106 2.38981L45.5022 2.14259C46.1204 1.73055 46.6356 1.35972 47.0477 1.07129C48.0987 0.309027 48.6139 -0.0618054 49.2939 0.0412035C49.9121 0.123611 50.5922 0.597452 51.9317 1.54513C52.6323 2.03958 53.4978 2.65763 54.6106 3.37869L54.8579 3.52291C55.4143 3.87314 55.9913 4.22337 55.9913 5.08864V14.8951H60.5662V4.80022C60.5662 4.14096 62.3384 3.00786 63.2863 2.43101L63.6779 2.18379C64.2961 1.77175 64.8113 1.40092 65.2234 1.1125C66.2744 0.35023 66.7896 -0.0206019 67.4696 0.0824071C68.0878 0.164814 68.7679 0.638655 70.1074 1.58634C70.808 2.08078 71.6735 2.67823 72.7657 3.4199L73.013 3.56411C73.5694 3.91434 74.1464 4.26457 74.1464 5.12985V14.9363L74.9295 14.9157C75.2798 14.8951 75.6301 14.8951 75.9599 14.8951C77.0727 14.8951 77.9794 15.0599 77.9794 15.9046V27.6888C77.9794 28.4099 77.2581 28.5541 76.2484 28.5541C75.9393 28.5541 75.5889 28.5335 75.218 28.5335C74.8883 28.5129 74.538 28.5129 74.167 28.4923V52.0813L74.9089 52.0607C75.2798 52.0401 75.6508 52.0401 76.0011 52.0401C77.0933 52.0401 78 52.1843 78 52.9054V64.8544C78 65.5755 77.0933 65.7197 76.0011 65.7197C75.6508 65.7197 75.2798 65.6991 74.9089 65.6991L74.167 65.6785V74.7433C74.167 75.1553 74.064 75.4644 73.8373 75.6704C73.6312 75.8764 73.3015 76 72.91 76H61.5553C61.3286 76 61.0813 75.8764 60.8959 75.691C60.7104 75.5056 60.5868 75.2789 60.5868 75.0317V65.6785H56.0119V74.7433C56.0119 75.1553 55.9089 75.4644 55.6822 75.6704C55.4761 75.8764 55.1464 76 54.7549 76H43.4002C43.1735 76 42.9262 75.8764 42.7408 75.691C42.5553 75.5056 42.4317 75.2789 42.4317 75.0317V65.6785H37.8568V74.7433C37.8568 75.1553 37.7538 75.4644 37.5271 75.6704C37.321 75.8764 36.9913 76 36.5998 76H25.2451C25.0184 76 24.7711 75.8764 24.5857 75.691C24.4002 75.5056 24.2766 75.2789 24.2766 75.0317V65.6785H19.7017V74.7433C19.7017 75.1553 19.5987 75.4644 19.372 75.6704C19.1453 75.8764 18.8362 76 18.4447 76H7.09002C6.86334 76 6.61605 75.8764 6.43059 75.691C6.24512 75.5056 6.12147 75.2789 6.12147 75.0317V65.6785C5.66811 65.6785 5.27657 65.6991 4.90564 65.6991C4.55531 65.7197 4.2462 65.7197 3.99892 65.7197C2.59761 65.7197 2 65.4725 2 63.9686V53.7913C2 52.2873 2.59761 52.0401 3.99892 52.0401C4.2462 52.0401 4.55531 52.0607 4.90564 52.0607C5.25597 52.0813 5.66811 52.0813 6.12147 52.0813V28.6571C6.12147 28.4511 5.87419 28.3893 5.58568 28.3893L4.72017 28.4305C4.34924 28.4305 3.38069 28.4511 3.09219 28.3893C2.32972 28.2451 2.2679 28.039 2.14425 27.6682L2.12364 27.5858C2.08243 27.4828 2.06182 27.2974 2.04121 27.0295C2.02061 26.7617 2.02061 26.4321 2 26.0201ZM66.5217 60.0336C65.3883 60.0336 64.667 59.8482 64.667 58.8799C64.667 57.7674 65.4089 57.582 66.6453 57.582C66.9132 57.582 67.243 57.6026 67.5933 57.6026C67.9848 57.6232 68.397 57.6232 68.8709 57.6232C69.3449 57.6232 69.6746 57.9528 69.8395 58.3649C69.8807 58.5091 69.9219 58.6739 69.9219 58.8387C69.9219 59.0035 69.9013 59.1683 69.8395 59.3126C69.6952 59.704 69.3243 59.9924 68.7267 59.9924C68.2733 59.9924 67.8406 60.013 67.449 60.013C67.1193 60.0336 66.7896 60.0336 66.5217 60.0336ZM48.3872 60.0336C47.2538 60.0336 46.5325 59.8482 46.5325 58.8799C46.5325 57.7674 47.2744 57.582 48.5108 57.582C48.7787 57.582 49.1085 57.6026 49.4588 57.6026C49.8503 57.6232 50.2625 57.6232 50.7364 57.6232C51.2104 57.6232 51.5401 57.9528 51.705 58.3649C51.7668 58.5091 51.7874 58.6739 51.7874 58.8387C51.7874 59.0035 51.7668 59.1683 51.705 59.3126C51.5607 59.704 51.1898 59.9924 50.5922 59.9924C50.1388 59.9924 49.7061 60.013 49.3145 60.013C48.9642 60.0336 48.6551 60.0336 48.3872 60.0336ZM12.1388 60.0336C10.9642 60.0336 10.2429 59.8482 10.2429 58.8799C10.2429 58.4679 10.346 58.1589 10.5727 57.9528C10.7787 57.7468 11.1085 57.6232 11.5 57.6232C11.8297 57.6232 12.1594 57.6026 12.4685 57.6026C13.9729 57.5408 15.3948 57.479 15.5597 58.7151V58.7563V58.7975C15.4978 59.0653 15.3742 59.4156 15.1475 59.6628C14.962 59.8688 14.7354 60.013 14.4469 60.013C13.9523 60.013 13.5195 60.0336 13.1074 60.0542C12.757 60.0336 12.4273 60.0336 12.1388 60.0336ZM30.2733 60.0336C29.0987 60.0336 28.3774 59.8482 28.3774 58.8799C28.3774 58.4679 28.4805 58.1589 28.7072 57.9528C28.9132 57.7468 29.2429 57.6232 29.6345 57.6232C29.9642 57.6232 30.2939 57.6026 30.603 57.6026C32.1074 57.5408 33.5293 57.479 33.6941 58.7151V58.7563V58.7975C33.6323 59.0653 33.5087 59.4156 33.282 59.6628C33.0965 59.8688 32.8698 60.013 32.5813 60.013C32.0868 60.013 31.654 60.0336 31.2419 60.0542C30.8915 60.0336 30.5618 60.0336 30.2733 60.0336ZM48.3872 22.8886C47.2332 22.8886 46.5325 22.7032 46.5325 21.7349C46.5325 21.3229 46.6356 21.0138 46.8623 20.8078C47.0683 20.6018 47.398 20.4782 47.7896 20.4782C48.0987 20.4782 48.3872 20.4782 48.6757 20.4576C49.6442 20.437 50.6128 20.3958 51.2104 20.6842C51.808 20.9726 52.0347 21.5289 51.5401 22.559L51.4783 22.662L51.1486 22.7444C51.0043 22.7856 50.8807 22.8268 50.5922 22.8268C50.1388 22.8268 49.7061 22.8474 49.3145 22.8474C48.9642 22.8886 48.6551 22.8886 48.3872 22.8886ZM66.5217 22.8886C65.3883 22.8886 64.667 22.7032 64.667 21.7349C64.667 21.3229 64.7701 21.0138 64.9967 20.8078C65.2028 20.6018 65.5119 20.4782 65.9241 20.4782C66.2332 20.4782 66.5217 20.4782 66.8102 20.4576C67.7787 20.437 68.7473 20.3958 69.3449 20.6842C69.9425 20.9726 70.1692 21.5289 69.6746 22.559L69.6128 22.662L69.2831 22.7444C69.1388 22.7856 69.0152 22.8268 68.7267 22.8268C68.2733 22.8268 67.8406 22.8474 67.4696 22.8474C67.1193 22.8886 66.7896 22.8886 66.5217 22.8886ZM30.2527 22.8886C29.1193 22.8886 28.398 22.7032 28.398 21.7349C28.398 20.6224 29.1193 20.437 30.3145 20.437C30.5618 20.437 30.8503 20.437 31.1594 20.4576C31.5098 20.4782 31.8807 20.4782 32.2928 20.4782C32.9523 20.4782 33.3644 20.7872 33.5499 21.1992C33.6117 21.3435 33.6529 21.5289 33.6529 21.6731C33.6529 21.8379 33.6117 22.0027 33.5499 22.1469C33.385 22.5178 33.0141 22.8268 32.4371 22.8268C31.9837 22.8268 31.551 22.8474 31.1594 22.8474C30.8297 22.8886 30.5206 22.8886 30.2527 22.8886ZM12.0976 22.8886C10.9436 22.8886 10.2429 22.7032 10.2429 21.7349C10.2429 20.6224 10.9642 20.437 12.1594 20.437C12.4067 20.437 12.6952 20.437 13.0043 20.4576C13.3547 20.4782 13.7256 20.4782 14.1377 20.4782C14.7972 20.4782 15.2093 20.7872 15.3948 21.1992C15.4566 21.3435 15.4978 21.5289 15.4978 21.6731C15.4978 21.8379 15.4566 22.0027 15.3948 22.1469C15.2299 22.5178 14.859 22.8268 14.282 22.8268C13.8286 22.8268 13.3959 22.8474 13.0043 22.8474C12.6952 22.8886 12.3861 22.8886 12.0976 22.8886ZM71.7354 65.5755H62.8948V73.5278H71.7354V65.5755Z"
                      fill="#251941"
                    />
                  </svg>
                </div>
                Yopiq va xavfsiz hovli
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
