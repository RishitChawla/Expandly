"use client"

import type { CSSProperties } from "react"

interface PlaceholderImageProps {
  width: number
  height: number
  text?: string
  className?: string
  style?: CSSProperties
  bgColor?: string
  textColor?: string
  isCircle?: boolean
}

export function PlaceholderImage({
  width,
  height,
  text,
  className = "",
  style = {},
  bgColor = "#f0f0f0",
  textColor = "#888888",
  isCircle = false,
}: PlaceholderImageProps) {
  const displayText = text || `${width}×${height}`

  return (
    <div
      className={`flex items-center justify-center overflow-hidden ${isCircle ? "rounded-full" : "rounded-lg"} ${className}`}
      style={{
        width,
        height,
        backgroundColor: bgColor,
        color: textColor,
        fontSize: Math.min(width, height) * 0.1,
        fontWeight: "bold",
        ...style,
      }}
    >
      {displayText}
    </div>
  )
}
