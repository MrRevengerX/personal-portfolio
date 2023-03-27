import React from "react";

function Footer() {
  return (
    <footer class="bg-violet-200 rounded-t-lg dark:bg-gray-900 w-screen">
      <div class="max-w-6xl mx-auto p-4 md:px-6 md:py-8">
        <div class="flex flex-col sm:flex-row items-center justify-between">
          <svg
            className="cursor-pointer h-8 mr-3 mb-4 sm:mb-0 fill-black dark:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1101.41 256.28"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <g data-name="Layer 2">
              <path d="m16.34 54.06 116.29 63.05-20.69 43.71-59.65-9.26-46.16-29.68L0 163.95l40.44 71.49 36.09 4.63 20.83 16.21 25.06-11.03 3.13-20.16 11.44 2.73 12.12-10.89L150.2 128l-5.72-10.89 29.41-40.99 5.59-64.14-43.44-3.95L119.83 0l-11.71 6.54-41.67.13 2.86 20.56-30.36 22.34-22.61 4.49z" />
              <path d="m30.18 111.07 9.36-2.54 18.15 11.53 16.89-15.07 14.52 3 1.27 11.43-34.13 14.26-26.06-22.61z" />
              <path d="m54.61 106.49 2.4-1.91.96 1.73 1.81-.41.5 2.18-3.72 1.95-1.95-3.54z" />
              <text
                transform="matrix(.98 0 -.19 .98 166.57 208.25)"
                style={{
                  fontSize: "252.17px",
                  fontFamily: "Teko-Medium,Teko",
                  fontWeight: 500,
                }}
              >
                {"REVENGERX"}
              </text>
            </g>
          </svg>

          <ul class="flex flex-wrap items-center text-sm font-medium gap-5 text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="https://www.linkedin.com/in/ravindusenruwan/"
                class="hover:text-my-purple-400 transition-colors duration-200 ease-in-out"
                target={"_blank"}
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/MrRevengerX"
                class="hover:text-my-purple-400 transition-colors duration-200 ease-in-out"
                target={"_blank"}
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.behance.net/ravindusenruwan"
                class="hover:text-my-purple-400 transition-colors duration-200 ease-in-out"
                target={"_blank"}
              >
                Behance
              </a>
            </li>
            <li>
              <a
                href="mailto:ravindusenruwan@gmail.com"
                class="hover:text-my-purple-400 transition-colors duration-200 ease-in-out"
                target={"_blank"}
              >
                Gmail
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="text-center block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a
            href="https://revengerx.dev/"
            class="hover:text-my-purple-400 transition-colors duration-200 ease-in-out"
          >
            RevengerX
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
