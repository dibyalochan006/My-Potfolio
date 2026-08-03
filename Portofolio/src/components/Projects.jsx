import React from 'react';
/* eslint-disable-next-line no-unused-vars */
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import Contact from './Contact';

const Projects = () => {
    const projectsData = [
    {
        title: "Product Insights Analysis",
        tech: "Python | Pandas | Matplotlib",
        description:
            "Analyzed product sales data using Python, Pandas, and Matplotlib. Performed data cleaning, exploratory data analysis (EDA), and visualization to identify sales trends, customer behavior, and product performance. Generated actionable business insights through charts and statistical analysis.",
        links: {
            github: "https://github.com/dibyalochan006/product-insights-analysis",
            demo: "#"
        }
    },

    {
        title: "SQL Data Analysis Project",
        tech: "SQL Server | T-SQL",
        description:
            "Performed business data analysis using SQL Server by writing complex SQL queries, including Joins, CTEs, Window Functions, Aggregate Functions, Subqueries, and CASE statements. Extracted valuable insights to support data-driven business decisions.",
        links: {
            github: "https://github.com/dibyalochan006/sql-data-analysis-project",
            demo: "#"
        }
    },

    {
        title: "Excel Data Analysis Dashboard",
        tech: "Microsoft Excel | Pivot Tables | Dashboard",
        description:
            "Created an interactive Excel dashboard using Pivot Tables, Pivot Charts, KPI Cards, Slicers, Conditional Formatting, and Excel formulas. Designed the dashboard to analyze business performance and present key metrics in a clear, visually appealing format.",
        links: {
            github: "https://github.com/dibyalochan006/excel-data-analysis-dashboard",
            demo: "#"
        }
    },

    {
        title: "Personal Portfolio Website",
        tech: "React.js | JavaScript | CSS",
        description:
            "Designed and developed a responsive personal portfolio website using React.js to showcase my Data Analytics projects, technical skills, certifications, resume, and GitHub repositories with a modern and recruiter-friendly interface.",
        links: {
            github: "https://github.com/dibyalochan006",
            demo: "#"
        }
    },

    {
        title: "Power BI Sales Dashboard (Coming Soon)",
        tech: "Power BI | DAX | Power Query",
        description:
            "Currently building an interactive Power BI dashboard featuring KPI cards, slicers, drill-through reports, and business insights using real-world sales data. The project will demonstrate advanced dashboard design and data visualization techniques.",
        links: {
            github: "#",
            demo: "#"
        }
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
                                    <a href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "6px",
                                            color: "var(--text-primary)",
                                            textDecoration: "none"
                                        }}
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
