export default function Icon({ name, className = "" }) {
  return <i className={`uil uil-${name} text-2xl ${className}`}></i>;
}
