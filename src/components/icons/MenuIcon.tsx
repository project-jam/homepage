// components/MenuIcon.tsx
const MenuIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width={16} height={16} viewBox="0 0 20 20" {...props}>
      <path
        fill="transparent"
        strokeWidth={2}
        stroke="white"
        strokeLinecap="square"
        d="M 2 2.5 L 20 2.5"
      />
      <path
        fill="transparent"
        strokeWidth={2}
        stroke="white"
        strokeLinecap="square"
        d="M 2 9.423 L 20 9.423"
      />
      <path
        fill="transparent"
        strokeWidth={2}
        stroke="white"
        strokeLinecap="square"
        d="M 2 16.346 L 20 16.346"
      />
    </svg>
  )
}

export default MenuIcon;

