'use client'
import { BeadIconAnimated } from "./BeadIconAnimated";
import { QRCode } from "./QRCode";
import React from 'react'

export default function Home() {
  return (
    <main>
      <h1 className="text-danger">Hello Bootstrap</h1>
      <BeadIconAnimated/>
      <QRCode />
    </main>
  )
}