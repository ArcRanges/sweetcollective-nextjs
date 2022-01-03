export default function Small({ className, children }) {
  return (
    <span className={`text-xs uppercase mb-2 ${className}`}>{children}</span>
  );
}
