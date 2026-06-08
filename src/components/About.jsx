import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMapPin, FiCode, FiLayers, FiZap, FiBook } from 'react-icons/fi';
import { stats, personalInfo, education } from '../data';

const cards = [
  { icon: FiCode, title: 'Clean Code', desc: 'Writing maintainable, scalable code with proper validation and structured error handling.', color: '#6366f1' },
  { icon: FiLayers, title: 'Full Stack', desc: 'Comfortable across the entire stack — from MongoDB schemas to React PWA frontends.', color: '#8b5cf6' },
  { icon: FiZap, title: 'Performance', desc: 'Obsessed with optimizing query response times, bundle sizes, and real-time data flows.', color: '#06b6d4' },
];

function StatCounter({ value, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }} className="text-center"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }} animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.6, type: 'spring' }}
        className="text-3xl sm:text-4xl font-black gradient-text mb-1"
      >
        {value}
      </motion.div>
      <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{label}</p>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-16"
        >
          <p className="section-label">About Me</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Crafting <span className="gradient-text">Digital Experiences</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Bio card */}
            <div className="glass rounded-2xl p-8 glow-border mb-5">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                  <FiMapPin className="text-indigo-400 w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-semibold">{personalInfo.name}</p>
                  <p className="text-slate-400 text-sm">{personalInfo.location}</p>
                </div>
                <span className="ml-auto text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-400/20">
                  Open to work
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm mb-3">
                I'm a <span className="text-indigo-400 font-medium">Full Stack MERN Developer</span> with 2+ years of experience shipping production applications. I've built everything from{' '}
                <span className="text-purple-400 font-medium">multi-tenant SaaS attendance platforms</span> to{' '}
                <span className="text-cyan-400 font-medium">Play Store mobile backends</span> with real-time notifications.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm">
                My background in Mechanical Engineering gave me strong problem-solving foundations that I now apply to software architecture — designing systems that are robust, maintainable, and built to scale.
              </p>
            </div>

            {/* Stats */}
            <div className="glass rounded-2xl p-6 grid grid-cols-4 gap-4">
              {stats.map((s) => <StatCounter key={s.label} value={s.value} label={s.label} />)}
            </div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="glass rounded-2xl p-6 mt-5"
            >
              <p className="section-label flex items-center gap-2">
                <FiBook className="w-3 h-3" /> Education
              </p>
              <div className="flex flex-col gap-4">
                {education.map((edu, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: edu.color }} />
                    <div>
                      <p className="text-white font-semibold text-sm">{edu.degree}</p>
                      <p className="text-slate-400 text-xs">{edu.institution} · {edu.location}</p>
                      <p className="text-slate-600 text-xs font-mono">{edu.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                whileHover={{ x: 4, scale: 1.01 }}
                className="glass glass-hover rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${card.color}20`, border: `1px solid ${card.color}30` }}>
                  <card.icon className="w-5 h-5" style={{ color: card.color }} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">{card.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* What I bring card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="glass rounded-2xl p-6"
            >
              <p className="section-label mb-4">What I Bring</p>
              <div className="grid grid-cols-2 gap-3">
                {['REST API Design', 'JWT & Auth', 'Real-time (Socket.IO)', 'Firebase & FCM', 'PWA Development', 'MongoDB Schemas'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="glass rounded-2xl p-6"
            >
              <p className="section-label">Professional Journey</p>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }} animate={inView ? { width: '78%' } : {}}
                    transition={{ duration: 1.3, delay: 0.9, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)' }}
                  />
                </div>
                <span className="text-sm font-bold text-white">2+ Yrs</span>
              </div>
              <p className="text-xs text-slate-500 mt-2">Across 3 companies — Clarice Systems, Digibells & Impact QA</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
