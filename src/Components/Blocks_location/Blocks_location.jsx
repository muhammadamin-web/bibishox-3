/* eslint-disable react/no-unescaped-entities */
import blocks_location1 from "../../assets/images/about1.png";

import universal from "../../assets/images/blocks_location.jpg";
import house from "../../assets/images/house.png";

const Blocks_location = () => {
  return (
    <div className="blocks_location">
      <div className="container">
        <div className="blocks_location_box">
          <div className="blocks_location_card_left">
            <div className="blocks_location_card_left_box">
              <img
                className="blocks_location_card_left_box_img"
                src={universal}
                alt=""
              />
            </div>
            <div className="blocks_location_map_text">
              <p className="blocks_location_map_text_text">
              Bibishox majmuasidagi har bir xonadon yuqori funksionallik va qulaylikni taʼminlash maqsadida rejalashtirilgan.
              </p>
              {/* <p className="blocks_location_map_text_text2">Xaritada ko‘rish</p> */}
            </div>
          </div>

          <div className="blocks_location_card_text">
            <h2 className="blocks_location_title">Majmua arxitekturasi</h2>
            <p className="blocks_location_text blocks_location_text_1">
            Bibishox Urgut tumanida zamonaviy arxitektura va yuqori sifatli qurilish materiallarini oʻzida mujassam etgan yangi loyiha hisoblanadi. Majmua oʻzining chiroyli dizayni, funksionalligi va estetik jozibasi bilan ajralib turadi.
            </p>
            <p className="blocks_location_text">
            Majmuaning arxitekturasi zamonaviy dizayn tamoyillariga mos ravishda ishlab chiqilgan. Binolar soddalik va zamonaviylikni birlashtirgan chiroyli tashqi koʻrinishga ega. Har bir binoning dizayni, zamonaviy uslub va innovatsion yondashuvni oʻzida mujassam etadi.
            </p>
          </div>

          <div className="blocks_location_card_icons">
            <div className="blocks_location_card_icon">
            <div className="blocks_location_icon_text">
                <div className="blocks_location_svg_box">
                  <svg
                    className="blocks_location_svg_card"
                    width="81"
                    height="80"
                    viewBox="0 0 81 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M69.3526 3.02509C70.8393 3.67813 71.3685 4.80813 71.3434 6.41542C71.2929 16.7873 71.3182 27.1842 71.3182 37.556C71.3182 38.8118 71.041 39.2889 70.2849 39.2889C69.529 39.2889 69.2014 38.7867 69.2014 37.5059V6.21457C69.2014 5.13458 69.1762 5.0844 68.0926 5.0844H9.85564C8.82251 5.0844 8.79727 5.13473 8.79727 6.16439C8.79727 16.6115 8.79727 27.0588 8.79727 37.5059C8.79727 37.8323 8.77202 38.1587 8.69645 38.4853C8.54529 39.0126 8.14201 39.2638 7.63807 39.2135C7.10888 39.1633 6.78134 38.8369 6.70561 38.3094C6.68052 38.0835 6.68052 37.8323 6.68052 37.6064C6.68052 27.2093 6.7056 16.7873 6.65527 6.39033C6.65527 4.78305 7.15922 3.65288 8.64611 3"
                      fill="#000"
                    />
                    <path
                      d="M8.70966 69.7535H12.1721V12.6891C12.1721 11.1387 12.3996 10.8887 13.9665 10.8887H64.0586C65.6003 10.8887 65.853 11.1637 65.853 12.6891V68.7783V69.7786H69.3155V68.9284C69.3155 61.3014 69.3155 53.6744 69.3155 46.0476C69.3155 45.7724 69.3155 45.4974 69.3659 45.2224C69.4923 44.6722 69.8462 44.347 70.4275 44.3971C71.0087 44.4471 71.3626 44.7972 71.4131 45.3974C71.4385 45.5974 71.4131 45.8224 71.4131 46.0225V68.9033V69.7786C71.6406 69.8036 71.8175 69.8285 71.9945 69.8285C73.4603 69.8785 74.3449 70.6537 74.4459 72.079C74.5218 73.0293 74.5218 74.0047 74.4207 74.9548C74.3197 76.3553 73.4098 77.1304 71.9691 77.1304C65.7014 77.1304 59.4335 77.1304 53.1404 77.1304C37.5215 77.1304 21.9024 77.1054 6.28336 77.1554C4.66582 77.1554 3.42742 76.2802 3.50331 74.4047C3.52855 73.6295 3.47806 72.8543 3.52855 72.1041C3.62969 70.6538 4.48895 69.8785 5.95486 69.8285C6.10649 69.8285 6.28336 69.8285 6.56136 69.8285V68.9784V46.0225C6.56136 45.7975 6.53612 45.5474 6.56136 45.3224C6.63725 44.7723 6.96574 44.4221 7.52175 44.3721C8.05252 44.3221 8.43166 44.6222 8.55804 45.1224C8.63377 45.3974 8.63377 45.7225 8.63377 46.0225C8.63377 53.6495 8.63377 61.2765 8.63377 68.9284M56.047 69.7535C56.047 69.7285 56.047 69.6784 56.047 69.6535C53.7218 68.7783 51.3966 67.9281 49.0462 67.0529C47.6055 66.5278 47.3275 66.1276 47.3275 64.6273C47.3275 49.9736 47.3275 35.3198 47.3023 20.6662C47.3023 19.4909 47.7319 18.7657 48.8187 18.2656C52.3064 16.6651 55.7436 15.0147 59.2062 13.3893C59.4083 13.2893 59.6104 13.1643 59.9138 13.0143H17.9849C18.3893 13.1892 18.5916 13.3143 18.819 13.3893C22.3068 15.0147 25.7945 16.6651 29.2823 18.2905C30.2427 18.7406 30.6976 19.3908 30.6976 20.4661C30.6723 35.2448 30.6976 49.9985 30.6976 64.7772C30.6976 66.0276 30.3437 66.5278 29.1307 66.9779C28.1197 67.3529 27.1088 67.728 26.0977 68.103C24.7331 68.6283 23.3429 69.1284 21.9782 69.6286C21.9782 69.6535 22.0036 69.7035 22.0036 69.7285H56.047V69.7535ZM63.73 13.6394C63.452 13.7643 63.1994 13.8394 62.9971 13.9395C58.7259 15.9399 54.4547 17.9655 50.1835 19.941C49.6275 20.1909 49.4504 20.4661 49.4504 21.0912C49.4758 30.8438 49.4758 40.5962 49.4758 50.3486C49.4758 54.9999 49.4758 59.676 49.4504 64.3522C49.4504 64.8523 49.6275 65.0773 50.0823 65.2274C54.0503 66.6778 58.0182 68.1781 61.9862 69.6035C62.517 69.8036 63.1487 69.7535 63.7554 69.8285V13.6394H63.73ZM14.2952 69.9036C15.028 69.7535 15.7104 69.7285 16.3169 69.5035C20.2091 68.103 24.0507 66.6278 27.9428 65.2274C28.3977 65.0524 28.5999 64.8773 28.5999 64.3522C28.5745 49.8735 28.5745 35.3698 28.5999 20.8912C28.5999 20.4661 28.4988 20.2411 28.0692 20.041C23.6463 17.9904 19.2233 15.8899 14.8005 13.8143C14.6489 13.7394 14.472 13.7143 14.2952 13.6394V69.9036ZM39.0125 71.854H6.76363C6.56136 71.854 6.38449 71.854 6.20762 71.854C5.82848 71.8291 5.65161 71.9792 5.65161 72.3793C5.67686 72.9295 5.65161 73.4545 5.65161 73.9796C5.65161 74.9798 5.65161 74.9798 6.68774 74.9798H71.3374C71.5142 74.9798 71.6659 74.9548 71.8429 74.9798C72.2219 75.0049 72.3989 74.8548 72.3989 74.4547C72.3735 73.8796 72.3989 73.3294 72.3989 72.7792C72.3989 71.8289 72.3989 71.8291 71.4385 71.8291H39.0125V71.854Z"
                      fill="#000"
                    />
                    <path
                      d="M61.8529 52.7502C61.8529 56.109 61.8038 59.4933 61.8773 62.8521C61.9019 64.3534 60.9455 64.8368 59.7683 64.3534C57.7082 63.4627 55.6238 62.6484 53.5392 61.7833C52.6073 61.4017 52.4111 61.0964 52.4111 60.0022C52.4111 54.2261 52.4111 48.4754 52.4111 42.6993C52.4111 41.4016 52.8035 40.969 54.0298 40.9436C56.1388 40.8926 58.2478 40.8672 60.3324 40.8672C61.3868 40.8672 61.8283 41.3252 61.8283 42.4194C61.8529 45.8799 61.8529 49.3151 61.8529 52.7502ZM54.4466 43.0556V43.997C54.4466 48.9842 54.4711 53.9716 54.422 58.9589C54.422 59.6715 54.6183 60.0022 55.2559 60.2313C56.7519 60.7911 58.2234 61.4271 59.7683 62.0632V43.0556H54.4466Z"
                      fill="#000"
                    />
                    <path
                      d="M61.8515 28.2708C61.8515 31.4324 61.8515 34.5698 61.8515 37.7313C61.8515 38.9289 61.4592 39.2881 60.2576 39.2881C58.1979 39.2881 56.1382 39.2881 54.0785 39.2641C52.8771 39.2641 52.4111 38.8091 52.4111 37.6594C52.4111 32.4862 52.4111 27.2888 52.4111 22.1154C52.4111 21.3491 52.7054 20.8701 53.4165 20.5348C55.5252 19.5288 57.6339 18.5228 59.7181 17.445C60.9687 16.7985 61.925 17.493 61.8761 18.7623C61.8024 21.9239 61.8515 25.0854 61.8515 28.2708ZM59.7672 19.6725C59.4976 19.7923 59.3013 19.8641 59.1052 19.9599C57.732 20.6306 56.3835 21.3251 54.9858 21.9479C54.5444 22.1394 54.3972 22.4029 54.3972 22.8579C54.4219 27.4325 54.3972 32.031 54.3972 36.6056V37.2523H59.7428V19.6725H59.7672Z"
                      fill="#000"
                    />
                    <path
                      d="M16.1716 52.7136C16.1716 49.3253 16.1716 45.9115 16.1716 42.5232C16.1716 41.2749 16.5884 40.8672 17.7901 40.8672C19.8746 40.8926 21.9592 40.9182 24.0191 40.9436C25.1963 40.9691 25.5887 41.4022 25.5887 42.574C25.5887 48.4082 25.5887 54.2677 25.5887 60.1017C25.5887 60.9425 25.2454 61.452 24.485 61.7578C22.376 62.5984 20.267 63.4646 18.1825 64.3562C17.1279 64.8149 16.0979 64.4072 16.1225 62.8786C16.2205 59.4903 16.1716 56.1021 16.1716 52.7136ZM18.2806 43.0581V62.0634C19.8746 61.401 21.3951 60.7387 22.9156 60.1527C23.4306 59.9488 23.6023 59.7196 23.6023 59.1336C23.5777 54.0385 23.5777 48.9176 23.5777 43.797C23.5777 43.5677 23.5532 43.3385 23.5532 43.0327H18.2806V43.0581Z"
                      fill="#000"
                    />
                    <path
                      d="M16.147 28.1618C16.147 25.0272 16.1959 21.8687 16.1225 18.7103C16.0981 17.5139 17.0276 16.7961 18.2751 17.4421C20.3786 18.5189 22.5067 19.5238 24.6348 20.5528C25.2953 20.8638 25.5887 21.3183 25.5887 22.0362C25.5887 27.2525 25.5887 32.4927 25.5887 37.7089C25.5887 38.8336 25.1239 39.2642 23.9499 39.2642C21.8707 39.2881 19.7917 39.2881 17.7125 39.2881C16.5874 39.2881 16.1715 38.9052 16.1715 37.8046C16.147 34.5984 16.147 31.368 16.147 28.1618ZM23.4606 37.2542C23.5095 37.1586 23.534 37.1107 23.534 37.0628C23.534 32.2533 23.5585 27.4199 23.534 22.6106C23.534 22.4192 23.2894 22.132 23.0938 22.0362C21.724 21.3423 20.3297 20.6724 18.9356 20.0025C18.7153 19.9067 18.4952 19.8109 18.2262 19.6913V37.2782H23.4606V37.2542Z"
                      fill="#000"
                    />
                  </svg>
                </div>
                Mеtalloplastik
                dеrazalar
              </div>
              <div className="blocks_location_icon_text">
                <div className="blocks_location_svg_box">
                  <svg
                                      className="blocks_location_svg_card"

                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.77638 61.8436V9.15643C2.39706 9.15643 2.01759 9.15643 1.66349 9.15643C0.929927 9.13105 0.5 8.72635 0.5 7.99294C0.5 5.71641 0.5 3.46525 0.5 1.18887C0.5 0.429927 0.929928 0.0252277 1.7141 0C1.86592 0 2.04297 0 2.22001 0H69.78C71.2471 0 71.5 0.252881 71.5 1.77062V7.56286C71.5 8.85294 71.1965 9.15643 69.9064 9.15643H69.2488V61.8436C69.6029 61.8436 69.9824 61.8436 70.3365 61.8436C71.0701 61.8689 71.5 62.2989 71.5 63.0072C71.5 65.2836 71.5 67.5348 71.5 69.8111C71.5 70.5701 71.0701 70.9748 70.2859 71C70.1341 71 70.0076 71 69.8558 71H2.16941C0.828866 71 0.525227 70.6965 0.525227 69.3812V63.4371C0.525227 62.1472 0.828866 61.8436 2.1188 61.8436M69.1982 2.35237H2.85237V6.85467H69.1982V2.35237ZM2.85237 68.673H69.1982V64.1707H2.85237V68.673ZM9.70704 32.0221H22.2275V9.20704H9.70704V32.0221ZM62.3183 9.20704H49.7979V32.0221H62.3183V9.20704ZM9.70704 61.793H22.2275V38.9779H9.70704V61.793ZM49.7979 61.793H62.3183V38.9779H49.7979V61.793ZM29.1832 44.6185H42.842V26.3815H29.1832V44.6185ZM42.842 9.20704H29.1832V19.4258H42.842V9.20704ZM29.1832 61.793H42.842V51.5743H29.1832V61.793ZM7.32929 9.20704H5.12875V61.8183H7.32929V9.20704ZM26.8057 9.23227H24.6051V61.8183H26.8057V9.23227ZM47.4201 9.20704H45.2196V61.8183H47.4201V9.20704ZM66.8965 9.23227H64.6959V61.8183H66.8965V9.23227ZM42.842 21.8033H29.1832V24.0039H42.842V21.8033ZM42.842 47.0213H29.1832V49.2219H42.842V47.0213ZM22.2275 34.425H9.73227V36.6256H22.2527V34.425H22.2275ZM62.293 34.3997H49.7979V36.6256H62.293V34.3997Z"
                      fill="#000"
                    />
                  </svg>
                </div>
                Fasadi chidamli matеriallardan{" "}
              </div>

              <div className="blocks_location_icon_text">
                <div className="blocks_location_svg_box">
                  <svg
                    className="blocks_location_svg_card"
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2062_2522)">
                      <path
                        d="M4 28.8458C4.4473 28.5054 4.8946 28.1164 5.38888 27.849C19.4901 20.3623 33.6147 12.8756 47.6923 5.36471C48.5869 4.87843 49.3166 4.87843 50.2112 5.36471C58.0975 9.66715 66.0073 13.9451 73.9172 18.1991C74.6939 18.6122 75 19.147 75 20.0706C74.9764 29.9151 74.9764 39.784 75 49.6287C75 50.5036 74.7175 51.0384 73.9642 51.4274C59.6512 59.0112 45.3382 66.5953 31.0252 74.2034C30.3661 74.5681 29.7775 74.5924 29.0713 74.2278C21.0673 69.8768 13.0634 65.55 5.05941 61.199C4.65909 60.9802 4.35319 60.6399 4 60.3482M72.6224 21.6264C72.2928 21.7965 72.0574 21.8938 71.8455 21.9909C58.5212 29.0645 45.1734 36.1379 31.8491 43.1872C31.3548 43.4545 31.2135 43.7463 31.2135 44.3052C31.2371 53.0074 31.2371 61.7337 31.2371 70.4359V71.2865C31.5432 71.1408 31.7078 71.0678 31.8962 70.9707C45.2912 63.8728 58.686 56.7507 72.0808 49.6772C72.5281 49.4341 72.6458 49.1667 72.6458 48.6806C72.6224 39.9299 72.6458 31.1549 72.6458 22.4041V21.6264H72.6224ZM6.40116 31.398C6.37759 31.5924 6.37759 31.6897 6.37759 31.787C6.37759 40.7321 6.37759 49.6773 6.35418 58.6224C6.35418 59.0599 6.5424 59.2301 6.87203 59.4246C14.005 63.2651 21.1379 67.13 28.2474 70.995C28.4121 71.0921 28.6004 71.1651 28.8124 71.2381C28.8124 71.0436 28.836 70.9705 28.836 70.8734C28.836 61.9525 28.8358 53.0317 28.8594 44.1108C28.8594 43.649 28.6711 43.4545 28.318 43.2601C23.4449 40.6348 18.5955 38.0096 13.746 35.3844C11.2977 34.0475 8.89658 32.7592 6.40116 31.398ZM71.1864 19.5845C70.9744 19.4387 70.8803 19.3901 70.7627 19.3171C63.6296 15.4523 56.4966 11.6116 49.3873 7.74668C48.9635 7.52794 48.7046 7.67387 48.375 7.84397C35.0979 14.8932 21.7971 21.9425 8.51983 28.9915C8.30804 29.0888 8.0961 29.2346 7.83717 29.3805C8.11966 29.5506 8.3316 29.6478 8.51983 29.7694C15.441 33.5127 22.3621 37.2561 29.2831 41.0238C29.8247 41.3155 30.2484 41.3155 30.8134 41.0238C42.066 35.0441 53.3186 29.0644 64.5949 23.0848C66.7371 21.9423 68.9029 20.7756 71.1864 19.5845Z"
                        fill="#000"
                      />
                      <path
                        d="M64.4225 20.4778C64.4466 21.1175 64.0133 21.4375 63.508 21.7082C61.2457 22.8894 58.9833 24.0952 56.721 25.2763C54.4346 26.4821 52.1483 27.6633 49.8619 28.8937C49.164 29.2629 48.5623 29.2629 47.8644 28.8937C43.1713 26.3591 38.4782 23.8491 33.7611 21.3636C33.2076 21.0683 32.7262 20.7485 32.7021 20.0349C32.7021 19.3459 33.1834 19.0013 33.7371 18.706C38.406 16.2697 43.0991 13.8089 47.768 11.3235C48.5142 10.9298 49.164 10.9544 49.886 11.3727C54.3866 13.9565 58.8871 16.5405 63.3876 19.1242C63.9411 19.395 64.4706 19.7149 64.4225 20.4778ZM47.5756 14.2765C43.9174 16.1959 40.3073 18.0908 36.6251 20.0349C40.3073 22.0035 43.8933 23.9229 47.5756 25.8916V14.2765ZM60.644 20.4039C57.082 18.3615 53.6405 16.3927 50.1268 14.375V25.9162C53.6405 24.0705 57.058 22.2742 60.644 20.4039Z"
                        fill="#000"
                      />
                      <path
                        d="M29.9331 21.6172C30.2862 21.7392 30.614 21.8368 30.9165 22.0077C35.7326 24.5953 40.5235 27.2072 45.3394 29.819C45.8438 30.0875 46.2976 30.4292 46.2976 31.064C46.2976 31.7474 45.8438 32.0891 45.2889 32.3577C40.4982 34.7254 35.7074 37.1177 30.9165 39.5098C30.2609 39.8272 29.681 39.8272 29.0254 39.4853C24.0581 36.9467 19.0656 34.4325 14.0479 31.9182C13.5184 31.6498 13.0644 31.3081 13.0644 30.6733C13.0392 29.9899 13.5184 29.6482 14.0731 29.3796C19.0656 26.9142 24.0329 24.4243 29.0254 21.9344C29.328 21.788 29.6305 21.7148 29.9331 21.6172ZM28.622 24.937C24.7894 26.841 21.0323 28.7205 17.1493 30.6488C21.0323 32.6261 24.8146 34.5301 28.622 36.4586V24.937ZM42.3136 31.015C38.5818 28.989 34.9761 27.0363 31.2948 25.0346V36.4829C35.0013 34.6767 38.5818 32.8702 42.3136 31.015Z"
                        fill="#000"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2062_2522">
                        <rect
                          width="72"
                          height="72"
                          fill="white"
                          transform="translate(4 4)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                Xonalar o‘rtasidagi dеvorlar gazoblokdan
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blocks_location;
