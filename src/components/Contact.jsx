import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiPhone } from 'react-icons/fi';
import { personalInfo } from '../data';

const socials = [
  { Icon: FiGithub, href: personalInfo.github, label: 'GitHub', color: '#6366f1' },
  { Icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: '#0A66C2' },
  { Icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email', color: '#06b6d4' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(ellipse, #6366f1 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-16"
        >
          <p className="section-label">Let's Talk</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm">
            Open to full-time roles, freelance contracts, and exciting collaborations. Let's build something great.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left – info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Ready to collaborate?</h3>

              <div className="flex flex-col gap-4 mb-8">
                {[
                  { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email', value: personalInfo.email, color: '#6366f1' },
                  { icon: FiPhone, href: `tel:${personalInfo.phone}`, label: 'Phone', value: personalInfo.phone, color: '#8b5cf6' },
                  { icon: FiMapPin, href: null, label: 'Location', value: personalInfo.location, color: '#06b6d4' },
                ].map(({ icon: Icon, href, label, value, color }) => (
                  <div key={label}
                    className={`flex items-center gap-4 ${href ? 'group cursor-pointer' : ''}`}
                    onClick={() => href && window.open(href)}
                  >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${color}15`, border: `1px solid ${color}25` }}>
                      <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">{label}</p>
                      <p className="text-slate-300 group-hover:text-white transition-colors text-sm font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="section-label mb-4">Find me online</p>
              <div className="flex gap-3">
                {socials.map(({ Icon, href, label, color }) => (
                  <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}
                    className="w-11 h-11 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <motion.div whileHover={{ scale: 1.01 }}
              className="glass rounded-2xl p-6 border border-emerald-500/20"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
                </span>
                <span className="text-emerald-400 font-semibold text-sm">Available Now</span>
              </div>
              <p className="text-slate-400 text-sm">
                Open to new opportunities. Typical response time:{' '}
                <span className="text-white font-medium">within 24 hours</span>.
              </p>
            </motion.div>
          </motion.div>

          {/* Right – form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 flex flex-col gap-5">
              {[
                { id: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@company.com' },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">{label}</label>
                  <input id={id} type={type} required placeholder={placeholder}
                    value={form[id]} onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                    className="w-full bg-slate-800/60 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-all"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">Message</label>
                <textarea id="message" required rows={5} placeholder="Tell me about your project or opportunity..."
                  value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-slate-800/60 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-all resize-none"
                />
              </div>
              <motion.button type="submit"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className={`btn-primary text-white justify-center w-full ${sent ? '!bg-emerald-600' : ''}`}
              >
                {sent ? 'Message Sent! ✓' : <><FiSend className="w-4 h-4" /> Send Message</>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
