'use client'

import "@netless/canvas-polyfill";
import { BeadIconAnimated } from "./BeadIconAnimated";
import { QRCode } from "./QRCode";
//
export default function Home() {
  return (
    <main>
      <h1 className="text-danger">Hello Bootstrap</h1>
      <BeadIconAnimated/>
      <QRCode/>
    </main>
  )
}