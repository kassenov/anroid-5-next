import { BeadIconAnimated } from "./BeadIconAnimated";
import { QRCode } from "./QRCode";
import React from 'react'

import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "core-js/stable";

export default function Home() {
  return (
    <main>
      <h1 className="text-danger">Hello Bootstrap</h1>
      <BeadIconAnimated/>
      <QRCode />
    </main>
  )
}