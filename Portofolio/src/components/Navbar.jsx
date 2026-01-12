import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../styles/variables.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Education', path: '/education' },
        { name: 'Skills', path: '/skills' },
        { name: 'Experience', path: '/experience' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    const navStyles = {
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        background: scrolled 
            ? 'linear-gradient(90deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%)' 
            : 'linear-gradient(90deg, rgba(26, 26, 46, 0.85) 0%, rgba(22, 33, 62, 0.85) 50%, rgba(26, 26, 46, 0.85) 100%)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 173, 181, 0.25)' : 'none',
        transition: 'all 0.4s ease',
        padding: scrolled ? '0.9rem 2rem' : '1.3rem 2rem',
        borderBottom: scrolled ? '2px solid rgba(0, 173, 181, 0.4)' : 'none'
    };

    return (
        <nav style={navStyles}>
            <div style={{
                maxWidth: '1300px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <NavLink to="/" style={{
                    fontSize: '1.7rem',
                    fontWeight: '800',
                    textDecoration: 'none',
                    background: 'linear-gradient(135deg, #00adb5, #00d4ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: '1px',
                    transition: 'all 0.3s ease',
                    filter: 'drop-shadow(0 0 10px rgba(0, 173, 181, 0.4))'
                }} className="logo">
                    Dibyalochan Dandapat
                </NavLink>

                <ul style={{ 
                    display: 'flex', 
                    gap: '2.5rem',
                    alignItems: 'center'
                }} className="desktop-menu">
                    {navLinks.map((link) => (
                        <li key={link.name} style={{ listStyle: 'none' }}>
                            <NavLink
                                to={link.path}
                                className="nav-link"
                                style={({ isActive }) => ({
                                    color: isActive ? '#00d4ff' : '#b4b4c5',
                                    fontSize: '0.95rem',
                                    fontWeight: '600',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    letterSpacing: '0.5px',
                                    textShadow: isActive ? '0 0 10px rgba(0, 212, 255, 0.5)' : 'none'
                                })}
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className="mobile-toggle" onClick={toggleMenu} style={{ 
                    fontSize: '1.5rem', 
                    color: '#00d4ff', 
                    cursor: 'pointer', 
                    display: 'none',
                    transition: 'all 0.3s ease',
                    filter: 'drop-shadow(0 0 8px rgba(0, 212, 255, 0.4))'
                }}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    width: '100%',
                    background: 'linear-gradient(180deg, rgba(26, 26, 46, 0.98) 0%, rgba(22, 33, 62, 0.98) 100%)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    borderTop: '2px solid rgba(0, 173, 181, 0.4)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                    animation: 'slideDown 0.3s ease'
                }}>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={toggleMenu}
                            style={({ isActive }) => ({
                                color: isActive ? '#00d4ff' : '#b4b4c5',
                                fontSize: '1.05rem',
                                fontWeight: '600',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                padding: '0.8rem',
                                width: '100%',
                                textAlign: 'center',
                                textShadow: isActive ? '0 0 10px rgba(0, 212, 255, 0.5)' : 'none'
                            })}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            )}

            <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .logo:hover {
          filter: drop-shadow(0 0 15px rgba(0, 173, 181, 0.6)) !important;
          transform: scale(1.02);
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #00adb5, #00d4ff);
          box-shadow: 0 0 8px rgba(0, 173, 181, 0.6);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover {
          color: #00d4ff !important;
          text-shadow: 0 0 10px rgba(0, 212, 255, 0.5) !important;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .mobile-toggle:hover {
          transform: scale(1.1);
          filter: drop-shadow(0 0 12px rgba(0, 212, 255, 0.6)) !important;
        }
        
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
