import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--bg-secondary)',
            padding: '3rem 0',
            textAlign: 'center',
            borderTop: '1px solid var(--glass-border)',
            marginTop: 'auto'
        }}>
            <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 20px' }}>
                <div style={{ width: '100%', height: '1px', background: 'var(--glass-border)', marginBottom: '2rem' }} />

                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    &copy; {new Date().getFullYear()} Dibyalochan Dandapat. All rights reserved.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                    <a href="https://github.com/dibyalochan006 " target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'var(--transition-fast)' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/dibyalochan-data-analyst/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'var(--transition-fast)' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                        <FaLinkedin />
                    </a>
                    <a href="mailto:dibyalochandandapat2@gmail.com" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'var(--transition-fast)' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
