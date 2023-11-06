import { BeadIconAnimated } from "../BeadIconAnimated";
import { QRCode } from "../QRCode";
import React from 'react'

// import { GetServerSideProps } from "next";

import '../globals.css'

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
      <h1 className="text-3xl font-bold underline">
        Hello Tailwind!
      </h1>
      <BeadIconAnimated/>
      <QRCode />
    </main>
  )
}