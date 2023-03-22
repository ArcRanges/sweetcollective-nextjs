export default function Container({ className = "", style = {}, children }) {
  return (
    <div
      className={`container px-4 py-8 sm:px-6 md:px-8 lg:px-10 xl:px-0 mx-auto ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
