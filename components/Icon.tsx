export default function Icon({ name, className = "", ...rest }) {
  return <i className={`uil uil-${name} text-2xl ${className}`} {...rest}></i>;
}
