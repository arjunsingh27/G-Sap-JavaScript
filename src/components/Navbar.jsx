import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { navLink } from '../../constants/index';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const tl = useRef(gsap.timeline({ paused: true }));

  useGSAP(() => {
    // Navbar blur animation on scroll
    gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'top top',
        end: '+=300',
        scrub: true,
      }
    }).fromTo(
      'nav',
      { backdropFilter: 'blur(0px)' },
      { backdropFilter: 'blur(10px)', ease: 'power1.inOut' }
    );

    // GSAP menu open/close animation
    tl.current = gsap.timeline({ paused: true })
      .fromTo(menuRef.current, 
        { x: '100%' },  // Start hidden (off screen)
        { x: '0%', duration: 0.5, ease: 'power3.out' }  // Slide in
      )
      .fromTo(menuRef.current.querySelectorAll('li'), 
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 0.4 },
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

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 w-3/4 h-full bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center gap-6 text-xl text-white"
        style={{ transform: 'translateX(100%)' }}
      >
        <ul className="flex flex-col gap-6">
          {navLink.map((link) => (
            <li key={link.id}>
              <a href={link.link} onClick={toggleMenu}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
