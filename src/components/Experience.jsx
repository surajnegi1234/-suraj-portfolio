import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiCalendar, FiChevronDown, FiCheck } from 'react-icons/fi';
import { experience } from '../data';

function ExperienceCard({ job, index, inView }) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline dot */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 z-10 items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
          className="w-4 h-4 rounded-full border-2 border-slate-700"
          style={{ background: job.color, boxShadow: `0 0 20px ${job.color}60` }}
        />
      </div>

      {/* Card container — alternate sides on desktop */}
      <div className={`md:w-[46%] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
        <motion.div
          whileHover={{ y: -2 }}
          className="glass glass-hover rounded-2xl overflow-hidden"
          style={{ borderColor: expanded ? `${job.color}30` : undefined }}
        >
          {/* Top accent bar */}
          <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${job.color}, transparent)` }} />

          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded-full border"
                    style={{ color: job.color, borderColor: `${job.color}40`, background: `${job.color}10` }}
                  >
                    {job.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{job.company}</h3>
                <p className="text-indigo-400 font-semibold text-sm">{job.role}</p>
              </div>
              <motion.button
                onClick={() => setExpanded(!expanded)}
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 rounded-full glass flex items-center justify-center flex-shrink-0 text-slate-400 hover:text-white transition-colors"
              >
                <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <FiChevronDown className="w-4 h-4" />
                </motion.span>
              </motion.button>
            </div>

            {/* Meta */}
            <div className="flex flex-wrap gap-3 mb-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <FiCalendar className="w-3 h-3" /> {job.period}
              </span>
              <span className="flex items-center gap-1">
                <FiMapPin className="w-3 h-3" /> {job.location}
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-4">{job.description}</p>

            {/* Expandable highlights */}
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-white/5 pt-4 mb-4">
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">Key Highlights</p>
                    <ul className="flex flex-col gap-2">
                      {job.highlights.map((h, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.07 }}
                          className="flex items-start gap-2 text-sm text-slate-300"
                        >
                          <FiCheck className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: job.color }} />
                          {h}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5">
              {job.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full font-mono"
                  style={{ background: `${job.color}12`, color: job.color, border: `1px solid ${job.color}25` }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">Career</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline wrapper */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="h-full origin-top rounded-full"
              style={{ background: 'linear-gradient(to bottom, #6366f1, #8b5cf6, transparent)' }}
            />
          </div>

          <div className="flex flex-col gap-10">
            {experience.map((job, i) => (
              <ExperienceCard key={job.id} job={job} index={i} inView={inView} />
            ))}
          </div>
        </div>

        {/* Bottom badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center mt-12"
        >
          <div className="glass rounded-full px-6 py-3 flex items-center gap-3 text-sm">
            <FiBriefcase className="text-indigo-400 w-4 h-4" />
            <span className="text-slate-400">Currently open to</span>
            <span className="text-white font-semibold">Full-time & Freelance roles</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
