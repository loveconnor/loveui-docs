import localFont from "next/font/local"

export const loveSans = localFont({
  src: [
    {
      path: "../../../public/fonts/LoveSans-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/LoveSans-LightItalic.woff",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../../public/fonts/LoveSans-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/LoveSans-RegularItalic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/fonts/LoveSans-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/LoveSans-MediumItalic.woff",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../../public/fonts/LoveSans-Semibold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/LoveSans-SemiboldItalic.woff",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../../public/fonts/LoveSans-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/LoveSans-BoldItalic.woff",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-sans",
  display: "swap",
})

// Keep a dedicated font variable for code surfaces that consume --font-mono.
export const loveMono = localFont({
  src: [{ path: "../../../public/fonts/LoveSans-Regular.woff", weight: "400", style: "normal" }],
  variable: "--font-mono",
  display: "swap",
})
