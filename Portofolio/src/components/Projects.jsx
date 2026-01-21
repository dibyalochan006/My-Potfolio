import React from 'react';
/* eslint-disable-next-line no-unused-vars */
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import Contact from './Contact';

const Projects = () => {
    const projectsData = [
        {
           title: "Meet Tour Management System in Railways",
           tech: "Full-Stack (MERN Stack)",
           description: "A full-stack web application designed for the Railway Department to manage and book employee and  passenger tours with secure authentication, booking management, and itinerary generation.",
           links: { github: "#", demo: "#" }

        },
        {
           title: "Nxt_Watch App",
           tech: "React Project",
           description: "Built a job search application using React.js that allows users to authenticate, search for jobs, apply filters, and view detailed job descriptions. Implemented protected routes, API integration, and a responsive UI for a smooth user experience.",
           links: { github: "#", demo: "#" }

        },
        {
           title: "Jobby App",
           tech: "React Project",
           description: "Developed a YouTube-like video streaming application using React.js. Implemented user authentication, protected routes, video listing, video detail view, search functionality, and light/dark theme support. Integrated APIs for dynamic content rendering and ensured a responsive, user-friendly UI.",
           links: { github: "#", demo: "#" }

        },
        {
           title: "My-Potfolio",
           tech: "React Project",
           description: "A responsive personal portfolio website built using React JS to showcase my skills, projects, and experience. It features a clean UI, reusable components, and smooth navigation, helping recruiters easily explore my work.",
           links: { github: "#", demo: "#" }

        },
         {
           title: "Nxt-Trendz-Payment",
           tech: "React Project",
           description: "Nxt-Trendz-Payment is a React JS application that implements a secure and user-friendly payment flow for an e-commerce platform. It demonstrates order summary, payment confirmation, and smooth navigation.",
           links: { github: "#", demo: "#" }

        },
        
            
    ];

    return (
        <>
        <section id="projects" style={{
            padding: 'var(--section-padding)',
            background: 'var(--bg-primary)'
        }}>
            <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                        Projects
                    </h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--accent-primary)', margin: '0 auto', borderRadius: '2px' }} />
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                background: 'var(--glass-bg)',
                                borderRadius: '15px',
                                overflow: 'hidden',
                                border: '1px solid var(--glass-border)',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                            whileHover={{ y: -10 }}
                        >
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>
                                    <FaCode size={20} />
                                    <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>{project.tech}</span>
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                                    {project.title}
                                </h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6', flex: 1 }}>
                                    {project.description}
                                </p>
                                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                                    <a href={project.links.github} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '5px',
                                        color: 'var(--text-primary)',
                                        transition: 'var(--transition-fast)'
                                    }}
                                        onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                                        onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
                                    >
                                        <FaGithub /> Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
        <Contact />
        </>
    );
};

export default Projects;
