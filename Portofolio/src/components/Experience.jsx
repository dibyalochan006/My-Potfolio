import React from 'react';
/* eslint-disable-next-line no-unused-vars */
import { motion } from 'framer-motion';
import { FaBootstrap, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import Contact from './Contact';

const Experience = () => {
    const experienceData = [
        {
    type: "internship",
    title: "Associate Data Analyst Intern",
    organization: "Intellectra AI Solutions Pvt. Ltd.",
    duration: "Jun 2026 - Present",
    location: "Hyderabad, India",

    description:
        "Currently working as an Associate Data Analyst Intern while undergoing structured industry training in Data Analytics and working on real-time client projects.",

    achievements: [
        "Completed structured training in SQL, Excel, Power BI, Python, and Data Analytics concepts.",
        "Worked on project-based assignments using real-world business datasets.",
        "Performed data cleaning, transformation, and exploratory data analysis (EDA).",
        "Created interactive dashboards and reports using Excel and Power BI.",
        "Collaborated with mentors and internal teams on live analytics projects.",
        "Applied SQL queries to extract business insights and support decision-making.",
        "Learning industry best practices in reporting, visualization, and business analytics."
    ],

    technologies: [
        "SQL",
        "Excel",
        "Power BI",
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Data Visualization",
        "Business Analytics"
    ]
},
        {
            type: 'internship',
            title: 'Full Stack Developer Intern',
            organization: 'Info Era Software Services Pvt. Ltd.',
            duration: 'July 7, 2025 – August 7, 2025',
            location: 'Online ',
            achievements: [
                'Completed a Full Stack Development internship at Info Era Software Services Pvt. Ltd. with hands-on industry exposure.',
                'Worked on backend development using Node.js and learned full-stack application architecture.',
                'Gained practical experience in API development, database handling, and server-side logic.',
                'Developed problem-solving skills by working on real-time development tasks and projects.',
                'Recognized for outstanding performance, dedication, and timely completion of assigned work.'
            ],
            technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB']
        },
        {
            type: 'Workshop',
            title: 'AI Introductory Workshop',
            organization: 'GIET University',
            location: 'Online',
            achievements: [
                'Successfully participated in an AI Introductory Workshop organized in collaboration with GIET University and OptimalAgents.ai.',
                'Gained foundational knowledge of Artificial Intelligence concepts and real-world AI applications.',
                'Learned the basics of machine learning workflows and intelligent system design.',
                'Explored practical use cases of AI in automation and decision-making systems.'
            ],
            technologies: [
                'Artificial Intelligence (AI)',
                'Machine Learning Fundamentals',
                'Intelligent Agents',
                'AI Automation Concepts',
                'Real-World AI Applications',
                
            ]
        },
        {
            type: 'course',
            title: 'Full Stack Web Development - Course',
            organization: 'Nxt Wave CCBP4.0',
            duration: '2023 Nov - Ongoing',
            location: 'Online',
            description: 'Completed a comprehensive program covering both frontend and backend technologies,Database, including real-world projects and deployment.',
            achievements: [
                'Built multiple responsive web applications using HTML, CSS, and JavaScript',
                'Developed dynamic frontends with React.js and optimized state management.',
               
                'Implemented database operations with MongoDB and performed CRUD functionalities.',
                'Deployed full-stack projects to live servers for public access.',
                'I also learn Python and SQL through this program'
            ],
            technologies: ['HTML', 'CSS', 'JavaScript','Bootstrap', 'Node.js', 'Express.js', 'React.js', 'MongoDB','Python','SQL', 'Git & GitHub']
        }
    ];

    return (
        <>
        <section id="experience" style={{
            padding: 'var(--section-padding)',
            background: 'var(--bg-secondary)'
        }}>
            <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                        Experience
                    </h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--accent-primary)', margin: '0 auto', borderRadius: '2px' }} />
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            style={{
                                background: 'var(--bg-primary)',
                                padding: '2rem',
                                borderRadius: '15px',
                                border: '1px solid var(--glass-border)',
                                maxWidth: '900px',
                                margin: '0 auto',
                                width: '100%',
                                display: 'flex',
                                gap: '1.5rem',
                                alignItems: 'flex-start'
                            }}
                        >
                            <div style={{
                                background: exp.type === 'internship' ? 'rgba(139, 92, 246, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                                padding: '1rem',
                                borderRadius: '10px',
                                color: exp.type === 'internship' ? 'var(--accent-secondary)' : 'var(--accent-primary)',
                                fontSize: '1.5rem'
                            }}>
                                {exp.type === 'internship' ? <FaBriefcase /> : <FaGraduationCap />}
                            </div>
                            <div style={{ width: '100%' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '0.5rem', alignItems: 'flex-start' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{exp.title}</h3>
                                    <span style={{ color: 'var(--accent-primary)', fontWeight: '600' }}>{exp.duration}</span>
                                </div>
                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem', alignItems: 'center' }}>
                                    <h4 style={{ color: 'var(--accent-secondary)', fontSize: '1.1rem', fontWeight: '500' }}>
                                        {exp.organization}
                                    </h4>
                                    {exp.location && (
                                        <span style={{
                                            padding: '4px 12px',
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            borderRadius: '15px',
                                            fontSize: '0.85rem',
                                            color: 'var(--text-secondary)',
                                            border: '1px solid var(--glass-border)'
                                        }}>
                                            {exp.location}
                                        </span>
                                    )}
                                </div>
                                {exp.description && (
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                                        {exp.description}
                                    </p>
                                )}
                                {exp.achievements && exp.achievements.length > 0 && (
                                    <div style={{ marginBottom: '1rem' }}>
                                        <h4 style={{ color: 'var(--text-primary)', fontWeight: '600', marginBottom: '0.8rem', fontSize: '1rem' }}>
                                            Key Achievements:
                                        </h4>
                                        <ul style={{ listStyle: 'none', paddingLeft: '0', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                            {exp.achievements.map((achievement, idx) => (
                                                <li key={idx} style={{ 
                                                    marginBottom: '0.5rem',
                                                    paddingLeft: '1.5rem',
                                                    position: 'relative'
                                                }}>
                                                    <span style={{
                                                        position: 'absolute',
                                                        left: '0',
                                                        color: '#22c55e',
                                                        fontSize: '1rem'
                                                    }}>✓</span>
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {exp.technologies && exp.technologies.length > 0 && (
                                    <div>
                                        <h4 style={{ color: 'var(--text-primary)', fontWeight: '600', marginBottom: '0.8rem', fontSize: '1rem' }}>
                                            Technologies Used:
                                        </h4>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                            {exp.technologies.map((tech, idx) => (
                                                <span key={idx} style={{
                                                    padding: '6px 14px',
                                                    background: 'rgba(139, 92, 246, 0.1)',
                                                    borderRadius: '20px',
                                                    fontSize: '0.85rem',
                                                    color: 'var(--accent-secondary)',
                                                    border: '1px solid rgba(139, 92, 246, 0.3)',
                                                    fontWeight: '500'
                                                }}>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
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

export default Experience;
