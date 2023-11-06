import React from 'react'

export const BeadIconAnimated = React.memo((props: React.SVGProps<SVGSVGElement>) => {
  const animationStyle = {
    animation: 'rotate 1.2s ease-in-out infinite',
    transformOrigin: 'center center',
  }

  return (
    <svg
      width="45px"
      height="45px"
      viewBox="0 0 792 528"
      fill="none"
      // @ts-ignore
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <style>
        {`
          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            80% {
              transform: rotate(360deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <g style={animationStyle}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M396 35.319C317.09 80.965 264 166.282 264 264c0 97.717 53.09 183.035 132 228.681C357.169 515.144 312.086 528 264 528 118.197 528 0 409.803 0 264S118.197 0 264 0c48.086 0 93.169 12.856 132 35.319Z"
          fill="#FF9F2A"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M396 35.319C474.91 80.965 528 166.282 528 264c0 97.717-53.09 183.035-132 228.681C434.831 515.144 479.914 528 528 528c145.803 0 264-118.197 264-264S673.803 0 528 0c-48.086 0-93.169 12.856-132 35.319Z"
          fill="#40C277"
        />
      </g>
    </svg>
  )
})

BeadIconAnimated.displayName = "BeadIconAnimated"