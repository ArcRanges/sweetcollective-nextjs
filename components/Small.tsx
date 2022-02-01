export default function Small({ className = "", children, bold = false }) {
  return (
    <span
      className={`text-xs uppercase ${bold ? "font-bold" : ""} ${className}`}
    >
      {children}
    </span>
  );
}
