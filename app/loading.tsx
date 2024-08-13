import React from 'react'

/**
 * Function component representing a loading animation.
 *
 * @return {JSX.Element} The loading animation UI.
 */
export default function AppLoading() {
  return (
    <div>
      <div className="w-full h-screen flex items-center justify-center bg-zinc-100">
        <div className="w-[250px] h-[250px] relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-700 to-blue-500" />
          <div className="absolute top-0 left-0 w-[70%] h-full bg-gradient-to-r from-pink-600 to-orange-400" />
          <svg
            className="w-[250px] h-[250px] mx-auto"
            viewBox="0 0 38 38"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
                <stop stopColor="#fff" stopOpacity="0" offset="0%" />
                <stop stopColor="#fff" stopOpacity=".631" offset="63.14%" />
                <stop stopColor="#fff" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
              <g transform="translate(1 1)">
                <path
                  d="M36 18c0-9.94-8.06-18-18-18"
                  id="Oval-2"
                  stroke="url(#a)"
                  strokeWidth="3"
                />
                <circle fill="#fff" cx="36" cy="18" r="1">
                  <animate
                    attributeName="cx"
                    from="15"
                    to="36"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}
