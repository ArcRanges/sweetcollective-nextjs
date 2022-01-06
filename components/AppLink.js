import Link from "next/link";

export default function AppLink({ href, children, className = "", ...rest }) {
  return (
    <Link href={href} {...rest}>
      <a
        className={`hover:opacity-70 hover:border-b-2 pb-2 hover:border-yellow-700 transition duration-300 ease-linear ${className}`}
      >
        {children}
      </a>
    </Link>
  );
}
