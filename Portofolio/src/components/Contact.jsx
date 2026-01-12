import React, { useState } from 'react';
/* eslint-disable-next-line no-unused-vars */
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

/* Components */
const Info = ({ icon, title, value }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{
            width: '50px',
            height: '50px',
            background: 'rgba(59,130,246,0.1)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-primary)',
            fontSize: '1.2rem'
        }}>
            {icon}
        </div>
        <div>
            <h4 style={{ fontWeight: '600' }}>{title}</h4>
            <p style={{ color: 'var(--text-secondary)' }}>{value}</p>
        </div>
    </div>
);

const Input = ({ label, name, type, placeholder }) => (
    <div>
        <label style={labelStyle}>{label}</label>
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            style={inputStyle}
            required
        />
    </div>
);

/* Styles */
const labelStyle = {
    marginBottom: '0.5rem',
    color: 'var(--text-secondary)',
    display: 'block'
};

const inputStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid var(--glass-border)',
    background: 'var(--bg-secondary)',
    color: 'var(--text-primary)',
    outline: 'none'
};

const buttonStyle = {
    padding: '12px',
    background: 'var(--gradient-primary)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    marginTop: '1rem'
};

const Contact = () => {
    const [status, setStatus] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/mwpbqebp", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("success");
                setMessage("Message sent successfully! I'll get back to you soon.");
                form.reset();
                setTimeout(() => {
                    setStatus("");
                    setMessage("");
                }, 5000);
            } else {
                setStatus("error");
                setMessage("Failed to send message. Please try again.");
                setTimeout(() => {
                    setStatus("");
                    setMessage("");
                }, 5000);
            }
        } catch {
            setStatus("error");
            setMessage("Network error. Please try later.");
            setTimeout(() => {
                setStatus("");
                setMessage("");
            }, 5000);
        }
    };

    return (
        <section id="contact" style={{ padding: 'var(--section-padding)', background: 'var(--bg-secondary)' }}>
            <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto' }}>

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                        Get In Touch
                    </h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--accent-primary)', margin: '0 auto' }} />
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                    {/* Contact Info */}
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Contact Information</h3>

                        <Info icon={<FaEnvelope />} title="Email Me" value="dibyalochandandapat2@gmail.com" />
                        <Info icon={<FaPhone />} title="Call Me" value="+91 7008741663" />
                        <Info icon={<FaMapMarkerAlt />} title="Location" value="Mayurbhanj, Odisha" />
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{
                            background: 'var(--bg-primary)',
                            padding: '2rem',
                            borderRadius: '15px',
                            border: '1px solid var(--glass-border)'
                        }}
                    >
                        {status && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{
                                    padding: '1rem',
                                    borderRadius: '10px',
                                    marginBottom: '1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.8rem',
                                    background: status === 'success' 
                                        ? 'rgba(34, 197, 94, 0.1)' 
                                        : 'rgba(239, 68, 68, 0.1)',
                                    border: status === 'success' 
                                        ? '1px solid rgba(34, 197, 94, 0.3)' 
                                        : '1px solid rgba(239, 68, 68, 0.3)',
                                    color: status === 'success' ? '#22c55e' : '#ef4444'
                                }}
                            >
                                {status === 'success' ? <FaCheckCircle size={20} /> : <FaExclamationCircle size={20} />}
                                <span style={{ fontSize: '0.95rem', fontWeight: '500' }}>{message}</span>
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <Input label="Name" name="name" type="text" placeholder="Your Name" />
                            <Input label="Email" name="email" type="email" placeholder="Your Email" />

                            <div>
                                <label style={labelStyle}>Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Your Message"
                                    style={inputStyle}
                                    required
                                />
                            </div>

                            <button type="submit" style={buttonStyle}>
                                Send Message <FaPaperPlane />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
