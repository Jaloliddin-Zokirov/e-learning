import React from "react";
import { Link } from "react-router-dom";

const Footer = React.memo(() => {
  return (
    <footer className="py-10 bg-[linear-gradient(91.88deg,_#0e449b_0%,_#2964c2_100%)]">
      <div className="flex items-start justify-between flex-wrap gap-4 max-w-[90%] mx-auto pt-8 px-4 pb-16">
        <div>
          <Link to={"/"} className="flex items-center gap-2.5 w-[244px] mb-8">
            <img src="PSYEDU.svg" width={85} height={85} alt="site logo" />
            <p className="text-[0.6875rem] font-bold text-white">
              Maktab psixologlarining tajribasini oshirish platformasi
            </p>
          </Link>
          <ul className="flex items-center gap-3.5">
            <li>
              <Link className="flex flex-col items-center justify-center text-[#2964c2] w-8 h-8 bg-white rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1rem"
                  height="0.9375rem"
                  fill="none"
                  viewBox="0 0 16 15"
                >
                  <path
                    fill="currentColor"
                    d="M15.65 7.45c0 4.09-3.426 7.404-7.65 7.404-4.225 0-7.65-3.315-7.65-7.403C.35 3.36 3.774.047 8 .047c4.224 0 7.65 3.315 7.65 7.404ZM8.273 5.514c-.744.299-2.23.919-4.46 1.86-.363.139-.553.275-.57.408-.03.226.262.315.659.435l.168.052c.39.123.916.267 1.189.272.248.005.524-.094.83-.296 2.083-1.362 3.159-2.05 3.226-2.064.048-.01.114-.024.159.014.045.039.04.111.036.131-.03.12-1.173 1.149-1.766 1.682a17.792 17.792 0 0 0-.522.483c-.364.338-.635.592.015 1.007.312.2.562.364.811.528.273.18.544.359.896.582.09.057.175.115.258.173.317.219.602.415.954.384.204-.018.416-.204.523-.759.253-1.311.751-4.152.867-5.323a1.256 1.256 0 0 0-.013-.291.31.31 0 0 0-.11-.2.511.511 0 0 0-.296-.087c-.288.005-.729.154-2.854 1.009Z"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link className="flex flex-col items-center justify-center text-[#2964c2] w-8 h-8 bg-white rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.0625rem"
                  height="0.9375rem"
                  fill="none"
                  viewBox="0 0 17 15"
                >
                  <path
                    fill="currentColor"
                    d="M8.497 4.982c-1.405 0-2.551 1.11-2.551 2.469 0 1.36 1.146 2.469 2.55 2.469 1.406 0 2.552-1.11 2.552-2.47 0-1.359-1.146-2.468-2.551-2.468Zm7.651 2.469c0-1.023.01-2.036-.05-3.057-.059-1.185-.338-2.237-1.234-3.104C13.966.422 12.881.153 11.656.096 10.6.038 9.553.047 8.5.047 7.442.047 6.395.038 5.34.096 4.116.153 3.029.423 2.133 1.29 1.236 2.16.958 3.21.9 4.394.839 5.417.849 6.43.849 7.451c0 1.02-.01 2.035.05 3.056.06 1.185.339 2.237 1.234 3.104.898.869 1.983 1.137 3.208 1.195 1.056.057 2.103.048 3.158.048 1.056 0 2.103.009 3.157-.048 1.225-.058 2.312-.328 3.208-1.195.898-.869 1.175-1.919 1.234-3.104.062-1.02.05-2.034.05-3.056Zm-7.651 3.798c-2.172 0-3.925-1.696-3.925-3.798 0-2.103 1.753-3.8 3.925-3.8 2.172 0 3.925 1.697 3.925 3.8 0 2.102-1.753 3.798-3.925 3.798Zm4.086-6.866c-.507 0-.917-.396-.917-.887 0-.49.41-.887.917-.887.507 0 .916.396.916.887a.863.863 0 0 1-.268.628.918.918 0 0 1-.648.26Z"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link className="flex flex-col items-center justify-center text-[#2964c2] w-8 h-8 bg-white rounded-lg" to={'/'}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1rem"
                  height="0.9375rem"
                  fill="none"
                  viewBox="0 0 16 15"
                >
                  <path
                    fill="currentColor"
                    d="M5.406 8.602H3.39a4.384 4.384 0 0 1 0-2.303h2.015c-.053.382-.081.766-.085 1.152.004.385.032.77.085 1.151ZM3.884 5.147h1.734c.199-.71.478-1.397.833-2.048a4.686 4.686 0 0 0-2.567 2.048Zm8.229 0A4.721 4.721 0 0 0 9.537 3.1c.36.647.637 1.335.824 2.048m-2.363 6.886a7.713 7.713 0 0 0 1.14-2.279H6.858c.25.814.634 1.584 1.14 2.279Zm0-9.173A7.735 7.735 0 0 0 6.86 5.147h2.278A7.735 7.735 0 0 0 7.998 2.86ZM3.884 9.754a4.737 4.737 0 0 0 2.567 2.048 9.733 9.733 0 0 1-.833-2.048m10.03-8.062V13.21c0 .436-.179.855-.497 1.163a1.729 1.729 0 0 1-1.203.482h-11.9c-.45 0-.883-.173-1.202-.482a1.619 1.619 0 0 1-.498-1.163V1.692c0-.436.18-.855.498-1.163A1.73 1.73 0 0 1 2.048.047h11.9c.451 0 .884.173 1.203.482.318.308.498.727.498 1.163Zm-1.7 5.759a5.627 5.627 0 0 0-1.002-3.2 5.913 5.913 0 0 0-2.67-2.12 6.135 6.135 0 0 0-3.438-.328A6.014 6.014 0 0 0 3.79 3.379a5.704 5.704 0 0 0-1.628 2.948A5.586 5.586 0 0 0 2.5 9.654a5.804 5.804 0 0 0 2.192 2.585c.978.632 2.129.97 3.305.97a6.052 6.052 0 0 0 4.208-1.687 5.666 5.666 0 0 0 1.742-4.071Zm-3.272 0a9.21 9.21 0 0 1-.085 1.151h2.014a4.384 4.384 0 0 0 0-2.303h-2.014c.052.382.08.766.085 1.152Zm-1.14 4.351a4.746 4.746 0 0 0 2.577-2.048H10.36a8.835 8.835 0 0 1-.824 2.048ZM6.605 6.3a7.017 7.017 0 0 0 0 2.303h2.788c.059-.381.09-.766.094-1.151a8.132 8.132 0 0 0-.094-1.152H6.604Z"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full max-w-[360px] h-[187px]">
          <iframe
            className="rounded-xl w-full max-w-[320px] sm:max-w-[360px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.899290307712!2d69.21183067624544!3d41.35454267130387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8c3fa12f11a3%3A0xc849830383f1974d!2sA.AVLONIY%20NOMIDAGI%20PEDAGOGLARNI%20KASBIY%20RIVOJLANTIRISH%20VA%20YANGI%20METODIKALARGA%20O&#39;RGATISH%20MILLIY-TADQIQOT%20INSTITUTI!5e0!3m2!1sen!2s!4v1742970755489!5m2!1sen!2s"
            width="360"
            height="187"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* <img
            src="mapImage.png"
            width={360}
            height={187}
            alt="Nurkhan Street 21, Tashkent Map Location"
            className="rounded-xl w-full max-w-[320px] sm:max-w-[360px]"
          /> */}
          <p className="text-white font-semibold text-[0.75rem] underline">
            Abdulla Avloniy nomidagi pedagogik mahorat milliy instituti
          </p>
        </div>
        <ul className="flex flex-col gap-4">
          <li>
            <p className="flex items-center gap-2 text-[#00ff58] mb-2 font-medium text-[1rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                color="currentColor"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
              </svg>
              Telefon
            </p>
            <a className="text-[0.87rem] text-white" href="tel:+998975131905">
              +998 97 513 19 05
            </a>
          </li>
          <li>
            <p className="flex items-center gap-2 text-[#00ff58] mb-2 font-medium text-[1rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                color="curerntColor"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              Elektron pochta
            </p>
            <div className="flex flex-col">
              <a
                className="text-[0.87rem] text-white"
                href="mailto:jumanoverdavlat701@gmail.com"
              >
                jumanoverdavlat701@gmail.com
              </a>
            </div>
          </li>
          <li>
            <p className="flex items-center gap-2 text-[#00ff58] mb-2 font-medium text-[1rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                color="curerntColor"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
                <path d="M3.6 9h16.8M3.6 15h16.8" />
                <path d="M11.5 3a17 17 0 0 0 0 18" />
                <path d="M12.5 3a17 17 0 0 1 0 18" />
              </svg>
              Veb-sayt
            </p>
            <Link className="text-[0.87rem] text-white" to="/">
              www.psyedu.uz
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
});

export default Footer;
