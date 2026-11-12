type BrandLogoProps = {
  light?: boolean
}

const BrandLogo = ({ light = true }: BrandLogoProps) => {
  return (
    <span
      className={`brand-logo ${light ? "brand-logo--light" : ""}`}
      aria-label="MAXMO"
    >
      MAXMO
    </span>
  )
}

export default BrandLogo
