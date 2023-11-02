import { QRCode as ReactQRCode } from 'react-qrcode-logo'
import React from 'react'

export function QRCode() {
  return (
    <ReactQRCode
      value="lightning:LNTB3640N1PJ3A773PP5U09UPQ8SQG6JDVCSCDAY9PFJXAMF7XP3Z2ER07QT2VSZLHUCD8LSDPZ09PXVVPJGVUNJ5RWYQKJQSTDV9K9X6R0WQCQZZSXQZJHSP5R7GUW3PGUPHUFFPSDVPY7LJVEFV5TGLJ80T4YRVD9CQ4UDE7QEXS9QYYSSQZLP32K4FKY0WR8P9JHFZK5569GA4YFZGF4VV0XL6FP5EP9ZU3T445DVJWGNAHYNSS5M77D6J82AUQDTZ55TKVEGVFGJNC8QE7VET8QCPE3THEU"
      size={220}
      qrStyle="dots"
      eyeRadius={5}
      eyeColor={{
        outer: '#F7931A',
        inner: '#224466',
      }}
      bgColor="#FFFFFF"
      fgColor="#000000"
      logoImage="https://assets.devs.beadpay.io/coin-lightning.svg"
      logoPadding={4}
      removeQrCodeBehindLogo={true}
      logoPaddingStyle="circle"
    />
  )
}
