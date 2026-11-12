import type { MouseEvent, ReactNode } from "react"

type ArrowLinkProps = {
  children: ReactNode
  href: string
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
  className?: string
}

const ArrowLink = ({
  children,
  href,
  onClick,
  className = "",
}: ArrowLinkProps) => {
  return (
    <a className={`arrow-link ${className}`} href={href} onClick={onClick}>
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </a>
  )
}

export default ArrowLink
