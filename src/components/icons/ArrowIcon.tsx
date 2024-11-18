// components/ArrowIcon.tsx
const ArrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={15} height={16} fill="none" {...props}>
      <path
        fill="#fff"
        fillOpacity={0.6}
        fillRule="evenodd"
        d="m7.488 4.987 4.14 4.14-.873.873-3.267-3.267L4.22 10l-.873-.873 4.14-4.14Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default ArrowIcon;

