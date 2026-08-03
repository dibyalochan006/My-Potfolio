import React from 'react';
/* eslint-disable-next-line no-unused-vars */
import { motion } from 'framer-motion';
import { FaDownload, FaRocket, FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Contact from './Contact';

const Hero = () => {
    const handleResumeDownload = () => {
        const link = document.createElement('a');
        // file placed in `public/` should be referenced from root '/'
        link.href = '/Portofolio/public/RESUME01.pdf';
        // set a simple filename for the downloaded file
        link.download = 'RESUME01.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'var(--section-padding)',
            background: 'var(--gradient-bg)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '10%',
                width: '300px',
                height: '300px',
                background: 'var(--accent-glow)',
                filter: 'blur(100px)',
                borderRadius: '50%',
                zIndex: 0
            }} />
            <div style={{
                position: 'absolute',
                bottom: '20%',
                left: '10%',
                width: '200px',
                height: '200px',
                background: 'rgba(139, 92, 246, 0.3)',
                filter: 'blur(80px)',
                borderRadius: '50%',
                zIndex: 0
            }} />

            <div className="hero-container" style={{
                maxWidth: 'var(--container-width)',
                width: '100%',
                zIndex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '4rem'
            }}>
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ flex: 1 }}
                >
                    <span style={{
                        color: 'var(--accent-primary)',
                        fontWeight: '600',
                        letterSpacing: '2px',
                        textTransform: 'uppercase'
                    }}>
                        Hello, I am
                    </span>
                    <h1 style={{
                        fontSize: '4rem',
                        fontWeight: '800',
                        margin: '1rem 0',
                        background: 'linear-gradient(to right, #f1f5f9, #94a3b8)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        lineHeight: 1.1
                    }}>
                        Dibyalochan Dandapat
                    </h1>
                    <h2 style={{
                        fontSize: '2rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '2rem'
                    }}>
                        Data Analyst | SQL | Python | Power BI | Excel | Pandas
                    </h2>
                    <p style={{
                        maxWidth: '600px',
                        margin: '0 0 3rem 0',
                        fontSize: '1.1rem',
                        lineHeight: '1.6',
                        color: 'var(--text-secondary)'
                    }}>
                        I am an aspiring Data Analyst with strong skills in SQL, Python, Excel, Power BI, and Pandas. I enjoy cleaning, analyzing, and visualizing data to uncover meaningful business insights. I have completed several real-world data analysis projects and continuously improve my analytical skills through hands-on practice.
                    </p>

                    <div className="hero-buttons" style={{ display: 'flex', gap: '1.5rem' }}>
                        <Link to="/contact" style={{
                            padding: '12px 30px',
                            background: 'var(--accent-primary)',
                            color: 'white',
                            borderRadius: '30px',
                            fontWeight: '600',
                            border: '2px solid var(--accent-primary)',
                            transition: 'var(--transition-fast)',
                            display: 'inline-block',
                            textDecoration: 'none'
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.background = 'transparent';
                                e.target.style.color = 'var(--accent-primary)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'var(--accent-primary)';
                                e.target.style.color = 'white';
                            }}
                        >
                            Contact Me
                        </Link>
                        <button onClick={handleResumeDownload} style={{
                            padding: '12px 30px',
                            background: 'transparent',
                            color: 'var(--text-primary)',
                            borderRadius: '30px',
                            fontWeight: '600',
                            border: '2px solid var(--text-secondary)',
                            transition: 'var(--transition-fast)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            textDecoration: 'none',
                            cursor: 'pointer'
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.borderColor = 'var(--accent-primary)';
                                e.target.style.color = 'var(--accent-primary)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.borderColor = 'var(--text-secondary)';
                                e.target.style.color = 'var(--text-primary)';
                            }}
                        >
                            Resume <FaDownload />
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
                >
                    <div style={{
                        position: 'relative',
                        width: '350px',
                        height: '350px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '4px solid var(--accent-primary)',
                        filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.3))'
                    }}>
                        <img
                            // public assets should be referenced from root '/', not with project folders
                            src="/profile-Photo.jpeg"
                            alt="Dibyalochan"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                </motion.div>
            </div>

            <style>{`
                @media (max-width: 968px) {
                    .hero-container {
                        flex-direction: column-reverse;
                        text-align: center;
                    }
                    .hero-content {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .hero-buttons {
                        justify-content: center !important;
                    }
                    p {
                        margin: 0 auto 3rem auto !important;
                    }
                    .hero-image div {
                        width: 280px !important;
                        height: 280px !important;
                        margin-bottom: 2rem;
                    }
                }
            `}</style>
        </section>

        {/* About Me Section */}
        <section id="about" style={{
            padding: 'var(--section-padding)',
            background: 'linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary))',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Gradient Effect */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
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
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        marginBottom: '1rem',
                        color: 'var(--text-primary)'
                    }}>
                        About Me
                    </h2>
                    <div style={{
                        width: '80px',
                        height: '4px',
                        background: 'linear-gradient(to right, #8b5cf6, #3b82f6)',
                        margin: '0 auto',
                        borderRadius: '2px'
                    }} />
                </motion.div>

                {/* About Me Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        textAlign: 'center',
                        maxWidth: '800px',
                        margin: '0 auto 4rem auto'
                    }}
                >
                    <p style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                        color: 'var(--text-secondary)',
                        marginBottom: '1.5rem'
                    }}>
                        I am an aspiring Data Analyst currently pursuing a B.Tech in Computer Science and Engineering. I enjoy working with data to uncover meaningful insights and solve business problems. My expertise includes SQL, Python, Excel, Power BI, and Pandas, enabling me to clean, analyze, and visualize data effectively.
                    </p>
                    <p style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                        color: 'var(--text-secondary)',
                        marginBottom: '1.5rem'
                    }}>
                        I have completed multiple hands-on projects involving data cleaning, exploratory data analysis (EDA), dashboard creation, and business reporting. I continuously strengthen my analytical skills by solving SQL problems and working on real-world datasets.
                    </p>
                    <p style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                        color: 'var(--text-secondary)'
                    }}>
                        I am passionate about transforming raw data into actionable insights that support better decision-making and continuously learning new tools and technologies in the field of data analytics.
                    </p>
                </motion.div>

                {/* Trait Cards - Only Fast Learner and Problem Solver */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    maxWidth: '700px',
                    margin: '0 auto'
                }}>
                    {/* Fast Learner Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        style={{
                            background: 'var(--bg-primary)',
                            padding: '2rem',
                            borderRadius: '15px',
                            border: '2px solid #ef4444',
                            boxShadow: '0 4px 20px rgba(239, 68, 68, 0.15)',
                            textAlign: 'center',
                            transition: 'var(--transition-medium)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        whileHover={{ y: -5, boxShadow: '0 8px 30px rgba(239, 68, 68, 0.25)' }}
                    >
                        
                        <h3 style={{
                            fontSize: '1.3rem',
                            fontWeight: 'bold',
                            marginBottom: '0.8rem',
                            color: '#ef4444'
                        }}>
                            📊 Data Analysis
                        </h3>
                        <p style={{
                            color: 'var(--text-secondary)',
                            lineHeight: '1.6',
                            fontSize: '0.95rem'
                        }}>
                            Analyze datasets using SQL, Python, and Pandas to discover patterns and generate meaningful business insights.
                        </p>
                    </motion.div>

                    {/* Problem Solver Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        style={{
                            background: 'var(--bg-primary)',
                            padding: '2rem',
                            borderRadius: '15px',
                            border: '2px solid #f59e0b',
                            boxShadow: '0 4px 20px rgba(245, 158, 11, 0.15)',
                            textAlign: 'center',
                            transition: 'var(--transition-medium)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        whileHover={{ y: -5, boxShadow: '0 8px 30px rgba(245, 158, 11, 0.25)' }}
                    >
                       
                        <h3 style={{
                            fontSize: '1.3rem',
                            fontWeight: 'bold',
                            marginBottom: '0.8rem',
                            color: '#f59e0b'
                        }}>
                            📈 Data Visualization
                        </h3>
                        <p style={{
                            color: 'var(--text-secondary)',
                            lineHeight: '1.6',
                            fontSize: '0.95rem'
                        }}>
                            Build interactive dashboards and reports using Power BI and Excel to communicate data effectively.
                        </p>
                    </motion.div>
                    {/* Card-3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        style={{
                            background: 'var(--bg-primary)',
                            padding: '2rem',
                            borderRadius: '15px',
                            border: '2px solid #00c853',
                            boxShadow: '0 4px 20px rgba(239, 68, 68, 0.15)',
                            textAlign: 'center',
                            transition: 'var(--transition-medium)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        whileHover={{ y: -5, boxShadow: '0 8px 30px rgba(239, 68, 68, 0.25)' }}
                    >
                        
                        <h3 style={{
                            fontSize: '1.3rem',
                            fontWeight: 'bold',
                            marginBottom: '0.8rem',
                            color: '#00c853'
                        }}>
                            🧹 Data Cleaning
                        </h3>
                        <p style={{
                            color: 'var(--text-secondary)',
                            lineHeight: '1.6',
                            fontSize: '0.95rem'
                        }}>
                            Clean, transform, and prepare raw data for analysis using Excel, SQL, and Pandas.
                        </p>
                    </motion.div>
                    {/*  Card-4 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        style={{
                            background: 'var(--bg-primary)',
                            padding: '2rem',
                            borderRadius: '15px',
                            border: '2px solid #2196f3',
                            boxShadow: '0 4px 20px rgba(239, 68, 68, 0.15)',
                            textAlign: 'center',
                            transition: 'var(--transition-medium)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        whileHover={{ y: -5, boxShadow: '0 8px 30px rgba(239, 68, 68, 0.25)' }}
                    >
                        
                        <h3 style={{
                            fontSize: '1.3rem',
                            fontWeight: 'bold',
                            marginBottom: '0.8rem',
                            color: '#2196f3'
                        }}>
                            🗄 Database Management
                        </h3>
                        <p style={{
                            color: 'var(--text-secondary)',
                            lineHeight: '1.6',
                            fontSize: '0.95rem'
                        }}>
                            Write efficient SQL queries, joins, CTEs, window functions, and optimize data retrieval.
                        </p>
                    </motion.div>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    #about {
                        padding: 60px 20px !important;
                    }
                    #about h2 {
                        font-size: 2rem !important;
                    }
                    #about > div > div:last-child {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
        
        <Contact />
    </>
    );
};

export default Hero;
