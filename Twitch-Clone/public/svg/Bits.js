import * as React from "react"

const Bits = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    style={{
      enableBackground: "new 0 0 20 20",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path
      d="m3 12 7-10 7 10-7 6-7-6zm2.7-.3L10 5.5l4.3 6.2-.9.7L10 11l-3.5 1.4-.8-.7z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#efeff1",
      }}
    />
  </svg>
)

export default Bits
