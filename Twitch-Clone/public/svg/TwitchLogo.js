import * as React from "react"

const TwitchLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    style={{
      enableBackground: "new 0 0 40 40",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path style={{
        fill: "#a970ff",
      }} className="st0" d="m13 8-5 5v18h6v5l5-5h4l9-9V8z" id="Layer_1">
    </path>
    <path
      style={{
        fill: "#fff",
      }}
      d="m26 25 4-4V10H14v15h4v4l4-4z"
      id="Layer_2"
    >
    </path>
    <path style={{
        fill: "#a970ff",
      }} className="st0" d="M20 14h2v6h-2v-6zm7 0v6h-2v-6h2z" id="Layer_3">
    </path>
  </svg>
)

export default TwitchLogo
