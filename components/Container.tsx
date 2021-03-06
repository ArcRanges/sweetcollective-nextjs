export default function Container({ className = "", children }) {
  return (
    <div className={`container px-5 md:px-10 xl:px-0 mx-auto ${className}`}>
      {children}
    </div>
  );
}
