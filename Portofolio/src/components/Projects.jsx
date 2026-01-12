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
            description: "A full-stack web application designed for the Railway Department to manage and book employee and passenger tours with secure authentication, booking management, and itinerary generation.",
            links: { github: "#", demo: "#" }
        },
        {
            title: "Full-Stack Airbnb Clone",
            tech: "Full-Stack (MVC Architecture)",
            description: "A full-featured web application replicating core Airbnb functionalities with secure authentication, MVC architecture, and file upload capabilities.",
            links: { github: "#", demo: "#" }
        },
        {
            title: "ID Card Generation System",
            tech: "MERN Stack (MongoDB, Express, React, Node)",
            description: "A complete employee ID generation platform supporting automated data entry, validation, and dynamic ID rendering with secure data storage.",
            links: { github: "#", demo: "#" }
        },
        {
            title: "Video Conferencing Platform",
            tech: "React, WebRTC, Socket.IO",
            description: "Real-time communication system similar to Zoom. Features video/audio transfer, live messaging, screen sharing, and multi-user rooms with low-latency interaction.",
            links: { github: "#", demo: "#" }
        },
        {
            title: "Remove Image Background",
            tech: "AI-Powered Web App",
            description: "A modern AI-powered web app that removes image backgrounds automatically using the Remove.bg API. Upload your photo and let AI do the magic in seconds!",
            links: { github: "#", demo: "#" }
        },
        {
            title: "Coders-of-Bangalore",
            tech: "Python, Data Analysis",
            description: "A curated dataset of Bangalore's tech creators and communities, containing usernames, followers, bios, and page types. Useful for data analysis, NLP, visualizations, and social-media research.",
            links: { github: "#", demo: "#" }
        },
        {
            title: "E-commerce Website",
            tech: "HTML, CSS, JavaScript",
            description: "This is a simple e-commerce website where users can view products, add them to the cart, and place orders. The website has a clean design, easy navigation, and basic shopping features.",
            links: { github: "#", demo: "#" }
        },
        {
            title: "Smart Quiz Collection",
            tech: "Frontend (HTML, CSS, JavaScript)",
            description: "Interactive HTML/CSS/JS quiz website with Reasoning, GK and Computer categories.",
            links: { github: "#", demo: "#" }
        },
        {
            title: "Sampark Travels",
            tech: "Full-Stack (MERN Stack)",
            description: "Sampark Travels is a trusted travel service offering comfortable vehicles, affordable tour packages, and reliable transportation for local and outstation journeys with a focus on safety, convenience, and customer satisfaction.",
            links: { github: "#", demo: "#" }
        },
        {
            title: "Jarvis Voice Assistant",
            tech: "Python, SpeechRecognition, pyttsx3",
            description: "Virtual assistant for system task automation. Performs voice-controlled lookups, reminders, app launching, and web automation.",
            links: { github: "#", demo: "#" }
        }
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
