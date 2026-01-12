import React from 'react';
/* eslint-disable-next-line no-unused-vars */
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer, FaDatabase, FaBrain, FaTools } from 'react-icons/fa';
import Contact from './Contact';

const Skills = () => {
    const skillsData = [
        {
            category: "Languages",
            icon: FaCode,
            color: "#3b82f6",
            skills: ["JavaScript", "Python"]
        },
        {
            category: "Frontend",
            icon: FaLaptopCode,
            color: "#8b5cf6",
            skills: ["HTML5", "CSS3", "React", "Bootstrap"]
        },
        {
            category: "Backend",
            icon: FaServer,
            color: "#22c55e",
            skills: ["Node.js", "Express.js"]
        },
        {
            category: "Databases",
            icon: FaDatabase,
            color: "#f59e0b",
            skills: ["MongoDB", "SQL"]
        },
        
        {
            category: "Tools",
            icon: FaTools,
            color: "#ef4444",
            skills: ["Git", "GitHub"]
        }
    ];

    return (
        <>
        <section id="skills" style={{
            padding: 'var(--section-padding)',
            background: 'var(--bg-secondary)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Effects */}
            <div style={{
                position: 'absolute',
                top: '10%',
                right: '5%',
                width: '400px',
                height: '400px',
                background: 'rgba(59, 130, 246, 0.05)',
                filter: 'blur(100px)',
                borderRadius: '50%',
                zIndex: 0
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '5%',
                width: '300px',
                height: '300px',
                background: 'rgba(139, 92, 246, 0.05)',
                filter: 'blur(80px)',
                borderRadius: '50%',
                zIndex: 0
            }} />

            <div style={{ 
                maxWidth: 'var(--container-width)', 
                margin: '0 auto',
                position: 'relative',
                zIndex: 1
            }}>
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
                        Technical Skills
                    </h2>
                    <div style={{ 
                        width: '80px', 
                        height: '4px', 
                        background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', 
                        margin: '0 auto', 
                        borderRadius: '2px' 
                    }} />
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1100px',
                    margin: '0 auto'
                }}>
                    {skillsData.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <motion.div
                                key={item.category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                style={{
                                    background: 'var(--bg-primary)',
                                    padding: '2.5rem',
                                    borderRadius: '20px',
                                    border: `2px solid ${item.color}40`,
                                    boxShadow: `0 4px 20px ${item.color}15`,
                                    transition: 'var(--transition-medium)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                                whileHover={{ 
                                    y: -8, 
                                    boxShadow: `0 8px 30px ${item.color}25`,
                                    borderColor: `${item.color}60`
                                }}
                            >
                                {/* Icon Header */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    marginBottom: '1.5rem',
                                    paddingBottom: '1rem',
                                    borderBottom: `2px solid ${item.color}30`
                                }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        background: `${item.color}15`,
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: item.color,
                                        fontSize: '1.5rem'
                                    }}>
                                        <IconComponent />
                                    </div>
                                    <h3 style={{
                                        color: item.color,
                                        margin: 0,
                                        fontSize: '1.3rem',
                                        fontWeight: 'bold'
                                    }}>
                                        {item.category}
                                    </h3>
                                </div>

                                {/* Skills Tags */}
                                <div style={{ 
                                    display: 'flex', 
                                    flexWrap: 'wrap', 
                                    gap: '0.75rem' 
                                }}>
                                    {item.skills.map((skill, skillIndex) => (
                                        <motion.span 
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                                            style={{
                                                padding: '8px 16px',
                                                background: `${item.color}10`,
                                                borderRadius: '25px',
                                                fontSize: '0.9rem',
                                                fontWeight: '500',
                                                color: item.color,
                                                border: `1px solid ${item.color}30`,
                                                transition: 'var(--transition-fast)',
                                                cursor: 'default'
                                            }}
                                            whileHover={{
                                                scale: 1.05,
                                                background: `${item.color}20`,
                                                borderColor: `${item.color}50`
                                            }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    #skills {
                        padding: 60px 20px !important;
                    }
                    #skills h2 {
                        font-size: 2rem !important;
                    }
                    #skills > div > div:last-child {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
        <Contact />
        </>
    );
};

export default Skills;
