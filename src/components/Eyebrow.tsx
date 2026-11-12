import type { ReactNode } from "react"

type EyebrowProps = {
  children: ReactNode
  light?: boolean
}

const Eyebrow = ({ children, light = false }: EyebrowProps) => {
  return (
    <p className={`eyebrow ${light ? "eyebrow--light" : ""}`}>{children}</p>
  )
}

export default Eyebrow
