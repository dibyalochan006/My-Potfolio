import React from 'react';
/* eslint-disable-next-line no-unused-vars */
import { motion } from 'framer-motion';
import { FaGraduationCap, FaTrophy, FaBook, FaUserTie } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Contact from './Contact';

const Education = () => {
    const educationData = [
        {
            degree: "B.Tech in Computer Science and Engineering",
            institution: "Gandhi Institute for Education and Technology, Khordha",
            duration: "2022 – 2026",
            grade: "Current CGPA: 7.70",
            description: "Specializing in full-stack development and Python Developer."
        },
        {
            degree: "Council of Higher Secondary Education, Odisha (XII)",
            institution: "SAI BRUNDABAN HIGHER SECONDARY SCHOOL, MAYURABHANJ",
            duration: "2020 - 2022",
            grade: "",
            description: "Specialized in Science stream with focus on Physics, Chemistry, and Mathematics."
        },
        {
            degree: "Board of Secondary Education, Odisha (X)",
            institution: "RADHAKRISHNAN GOVT HIGH SCHOOL, MAYURBHANJ",
            duration: "2019 - 2020",
            grade: "",
            description: "Completed foundational education with main focus on Mathematics, Science, History, Geography, Hindi, MIL, and English."
        }
    ];

    return (
        <>
        <section id="education" style={{
            padding: 'var(--section-padding)',
            background: 'var(--bg-secondary)'
        }}>
            <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        marginBottom: '1rem'
                    }}>
                        Education
                    </h2>
                    <div style={{
                        width: '60px',
                        height: '4px',
                        background: 'var(--accent-primary)',
                        margin: '0 auto',
                        borderRadius: '2px'
                    }} />
                </motion.div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{
                                background: 'var(--bg-primary)',
                                padding: '2.5rem',
                                borderRadius: '20px',
                                border: '1px solid var(--glass-border)',
                                boxShadow: 'var(--glass-shadow)',
                                textAlign: 'center',
                                transition: 'var(--transition-medium)'
                            }}
                            whileHover={{ 
                                y: -5, 
                                boxShadow: '0 8px 30px rgba(139, 92, 246, 0.2)',
                                borderColor: 'rgba(139, 92, 246, 0.3)'
                            }}
                        >
                            <div style={{
                                background: 'rgba(139, 92, 246, 0.1)',
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem auto',
                                color: 'var(--accent-secondary)',
                                fontSize: '1.5rem'
                            }}>
                                <FaGraduationCap />
                            </div>
                            <h3 style={{ 
                                fontSize: '1.5rem', 
                                fontWeight: 'bold', 
                                marginBottom: '0.8rem',
                                color: 'var(--text-primary)'
                            }}>
                                {edu.degree}
                            </h3>
                            <p style={{ 
                                color: 'var(--accent-secondary)', 
                                fontWeight: '500', 
                                marginBottom: '0.8rem',
                                fontSize: '1.1rem'
                            }}>
                                {edu.institution}
                            </p>
                            <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: '0.95rem',
                                marginBottom: '1rem',
                                fontWeight: '500'
                            }}>
                                {edu.duration}
                            </p>
                            {edu.grade && (
                                <p style={{
                                    color: 'var(--accent-primary)',
                                    fontSize: '0.95rem',
                                    marginBottom: '1rem',
                                    fontWeight: '600'
                                }}>
                                    {edu.grade}
                                </p>
                            )}
                            <p style={{ 
                                color: 'var(--text-secondary)', 
                                lineHeight: '1.7',
                                fontSize: '0.95rem',
                                textAlign: 'center'
                            }}>
                                {edu.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* Key Achievements Section */}
        <section style={{
            padding: 'var(--section-padding)',
            background: 'var(--bg-primary)',
            position: 'relative'
        }}>
            <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        marginBottom: '1rem',
                        color: 'var(--text-primary)'
                    }}>
                        Key Achievements
                    </h2>
                    <div style={{
                        width: '80px',
                        height: '4px',
                        background: 'linear-gradient(to right, #8b5cf6, #3b82f6)',
                        margin: '0 auto',
                        borderRadius: '2px'
                    }} />
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    {/* Academic Excellence Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{
                            background: 'var(--bg-secondary)',
                            padding: '2.5rem',
                            borderRadius: '20px',
                            border: '1px solid var(--glass-border)',
                            boxShadow: 'var(--glass-shadow)',
                            textAlign: 'center',
                            transition: 'var(--transition-medium)'
                        }}
                        whileHover={{ y: -5, boxShadow: '0 8px 30px rgba(245, 158, 11, 0.2)' }}
                    >
                        <div style={{
                            width: '70px',
                            height: '70px',
                            margin: '0 auto 1.5rem auto',
                            background: 'rgba(245, 158, 11, 0.1)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#f59e0b',
                            fontSize: '2rem'
                        }}>
                            <FaTrophy />
                        </div>
                        <h3 style={{
                            fontSize: '1.3rem',
                            fontWeight: 'bold',
                            marginBottom: '1rem',
                            color: 'var(--text-primary)'
                        }}>
                            Academic Excellence
                        </h3>
                        <p style={{
                            color: 'var(--text-secondary)',
                            lineHeight: '1.6',
                            fontSize: '0.95rem'
                        }}>
                            Maintained high GPA throughout academic career
                        </p>
                    </motion.div>

                    {/* Research Projects Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        style={{
                            background: 'var(--bg-secondary)',
                            padding: '2.5rem',
                            borderRadius: '20px',
                            border: '1px solid var(--glass-border)',
                            boxShadow: 'var(--glass-shadow)',
                            textAlign: 'center',
                            transition: 'var(--transition-medium)'
                        }}
                        whileHover={{ y: -5, boxShadow: '0 8px 30px rgba(34, 197, 94, 0.2)' }}
                    >
                        <div style={{
                            width: '70px',
                            height: '70px',
                            margin: '0 auto 1.5rem auto',
                            background: 'rgba(34, 197, 94, 0.1)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#22c55e',
                            fontSize: '2rem'
                        }}>
                            <FaBook />
                        </div>
                        <h3 style={{
                            fontSize: '1.3rem',
                            fontWeight: 'bold',
                            marginBottom: '1rem',
                            color: 'var(--text-primary)'
                        }}>
                            Research Projects
                        </h3>
                        <p style={{
                            color: 'var(--text-secondary)',
                            lineHeight: '1.6',
                            fontSize: '0.95rem'
                        }}>
                            Completed 5+ research projects in web technologies and Python(Mini Projects)
                        </p>
                    </motion.div>

                    {/* Leadership Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        style={{
                            background: 'var(--bg-secondary)',
                            padding: '2.5rem',
                            borderRadius: '20px',
                            border: '1px solid var(--glass-border)',
                            boxShadow: 'var(--glass-shadow)',
                            textAlign: 'center',
                            transition: 'var(--transition-medium)'
                        }}
                        whileHover={{ y: -5, boxShadow: '0 8px 30px rgba(59, 130, 246, 0.2)' }}
                    >
                        <div style={{
                            width: '70px',
                            height: '70px',
                            margin: '0 auto 1.5rem auto',
                            background: 'rgba(59, 130, 246, 0.1)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#3b82f6',
                            fontSize: '2rem'
                        }}>
                            <FaUserTie />
                        </div>
                        <h3 style={{
                            fontSize: '1.3rem',
                            fontWeight: 'bold',
                            marginBottom: '1rem',
                            color: 'var(--text-primary)'
                        }}>
                            Leadership
                        </h3>
                        <p style={{
                            color: 'var(--text-secondary)',
                            lineHeight: '1.6',
                            fontSize: '0.95rem'
                        }}>
                            Led student organizations and technical teams
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Ready to Learn More Section */}
        <section style={{
            padding: 'var(--section-padding)',
            background: 'linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary))',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Dotted Pattern Background */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                opacity: 0.3,
                zIndex: 0
            }} />
            
            <div style={{ 
                maxWidth: 'var(--container-width)', 
                margin: '0 auto',
                position: 'relative',
                zIndex: 1,
                textAlign: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        marginBottom: '1.5rem',
                        color: 'var(--text-primary)'
                    }}>
                        Ready to Learn More?
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.8',
                        maxWidth: '700px',
                        margin: '0 auto 2.5rem auto'
                    }}>
                        Check out my projects and experience to see how I've applied my education in real-world scenarios.
                    </p>
                    <Link 
                        to="/projects"
                        style={{
                            display: 'inline-block',
                            padding: '14px 40px',
                            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                            color: 'white',
                            borderRadius: '30px',
                            fontWeight: '600',
                            fontSize: '1rem',
                            textDecoration: 'none',
                            boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)',
                            transition: 'var(--transition-medium)',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 6px 20px rgba(139, 92, 246, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.3)';
                        }}
                    >
                        View Projects
                    </Link>
                </motion.div>
            </div>
        </section>

        <Contact />
    </>
    );
};

export default Education;
