import { BeadIconAnimated } from "../BeadIconAnimated";
import { QRCode } from "../QRCode";
import React from 'react'

import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "core-js/stable";
import { GetServerSideProps } from "next";

// export const getServerSideProps = (async (context) => {
//   return {
//     redirect: {
//       permanent: false,
//       destination: "https://www.google.com"
//     }
//   }
// }) satisfies GetServerSideProps

export default function Home() {
  return (
    <main>
      <h1 className="text-danger">Hello Bootstrap</h1>
      <BeadIconAnimated/>
      <QRCode />
    </main>
  )
}