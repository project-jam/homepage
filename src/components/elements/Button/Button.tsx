// components/Button.tsx
import Link from 'next/link';

interface ButtonProps {
  href: string;
  text: string;
}

const Button = ({ href, text }: ButtonProps) => {
  return (
    <Link
      href={href}
      className="inline-block mt-6 py-3 px-6 bg-orange-500 text-white rounded-full text-lg 
        border-2 border-transparent 
        transition-all duration-300 ease-in-out 
        hover:border-orange-500 hover:bg-transparent hover:text-orange-500"
    >
      {text}
    </Link>
  );
};

export default Button;

