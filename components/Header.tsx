export default function Header({ opacity }: { opacity: number }) {
  const menuItems = [
    { name: "About Us", href: "/" },
    { name: "Projects", href: "/" },
    { name: "Contact", href: "/" },
  ];

  return (
    <div
      className={`fixed bg-background w-full p-2 px-4 flex justify-between items-center font-Poppins uppercase text-foreground shadow-lg duration-500 ${
        opacity === 0 ? "opacity-0 pointer-events-none" : `opacity-${opacity}`
      }`}
    >
      <div>
        <a className="relative inline-block overflow-hidden group cursor-pointer px-2 tracking-widest">
          <p className="relative z-10 top-1 transition-transform duration-600 group-hover:-translate-y-full text-foreground">
            Ibrahim Khan
          </p>
          <p className="absolute z-10 top-1 w-full text-background transition-transform duration-300 delay-200 translate-y-full group-hover:translate-y-0">
            Ibrahim Khan
          </p>
          {/* Background */}
          <div className="absolute left-[-10%] top-1 w-[120%] h-full bg-accent transition-transform duration-500 scale-y-0 origin-bottom group-hover:scale-y-100"></div>
        </a>
      </div>

      <ul className="flex gap-4">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.href} className="relative inline-block overflow-hidden group cursor-pointer px-2">
              {/* Text */}
              <p className="relative z-10 top-1 transition-transform duration-500 group-hover:-translate-y-full text-foreground">
                {item.name}
              </p>
              <p className="absolute z-10 top-1 w-full text-background transition-transform duration-300 delay-200 translate-y-full group-hover:translate-y-0">
                {item.name}
              </p>

              {/* Background */}
              <div className="absolute left-0 top-1 w-full h-full bg-accent transition-transform duration-500 scale-y-0 origin-bottom group-hover:scale-y-100"></div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
