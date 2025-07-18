import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { navLink } from '../../constants/index';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);
  const tl = useRef(gsap.timeline({ paused: true }));

  useGSAP(() => {
    // GSAP popup animation
    tl.current = gsap.timeline({ paused: true })
      .to(overlayRef.current, { opacity: 1, duration: 0.3, pointerEvents: 'auto' })
      .fromTo(menuRef.current,
        { scale: 0.8, opacity: 0, y: -30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' },
        '<0.1'
      );
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    menuOpen ? tl.current.reverse() : tl.current.play();
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-5 py-4 z-50 bg-transparent">
      {/* Logo */}
      <a href="#home" className="flex items-center gap-2">
        <p className="font-bold text-xl">NikXArjun</p>
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-lg">
        {navLink.map((link) => (
          <li key={link.id}>
            <a href={link.link} className="hover:text-yellow-400 transition">{link.title}</a>
          </li>
        ))}
      </ul>

      {/* Hamburger Button */}
      <button
        className="md:hidden flex flex-col gap-1 z-50"
        onClick={toggleMenu}
      >
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </button>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm opacity-0 pointer-events-none z-40"
        onClick={toggleMenu}
      ></div>

      {/* Popup Menu */}
      <div
        ref={menuRef}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 rounded-3xl bg-[#111] text-white p-8 flex flex-col gap-6 text-center z-50 shadow-2xl"
        style={{ opacity: 0 }}
      >
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <ul className="flex flex-col gap-4">
          {navLink.map((link) => (
            <li key={link.id}>
              <a href={link.link} className="hover:text-yellow-400 transition" onClick={toggleMenu}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
