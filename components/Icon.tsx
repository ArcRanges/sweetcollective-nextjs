export default function Icon({ name, className = "", type = "uil", ...rest }) {
  if (type === "uil")
    return (
      <i className={`uil uil-${name} text-2xl ${className}`} {...rest}></i>
    );
  return <i className={`uis uis-${name} text-2xl ${className}`} {...rest}></i>;
}
