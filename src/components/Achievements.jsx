import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiStar, FiCode, FiBriefcase, FiAward } from 'react-icons/fi';
import { FaGooglePlay } from 'react-icons/fa';
import { achievements, certifications } from '../data';

const iconMap = {
  FaGooglePlay: FaGooglePlay,
  FaBriefcase: FiBriefcase,
  FaCode: FiCode,
  FaStar: FiStar,
};

function useCounter(target, duration = 2000, enabled = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, enabled]);

  return count;
}

function AchievementCard({ item, index, inView }) {
  const count = useCounter(item.value, 1800, inView);
  const Icon = iconMap[item.icon] || FiStar;
  const colors = ['#6366f1', '#8b5cf6', '#06b6d4', '#f59e0b'];
  const color = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="glass glass-hover rounded-2xl p-6 text-center"
    >
      <div
        className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center"
        style={{ background: `${color}15`, border: `1px solid ${color}30` }}
      >
        <Icon className="w-6 h-6" style={{ color }} />
      </div>
      <div className="text-4xl font-black mb-1" style={{ color }}>
        {count}{item.suffix}
      </div>
      <p className="text-slate-400 text-sm font-medium">{item.label}</p>
    </motion.div>
  );
}

const certColors = { Google: '#4285F4', IBM: '#0f62fe', 'Coding Ninjas': '#f97316', 'Edunet / AICTE': '#10b981' };

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">Recognition</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Achievements &{' '}
            <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        {/* Counter grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {achievements.map((item, i) => (
            <AchievementCard key={item.label} item={item} index={i} inView={inView} />
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass rounded-2xl p-8"
        >
          <p className="section-label mb-6">Certifications & Credentials</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 glass-hover rounded-xl p-4 border border-white/5"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
                >
                  <FiAward className="w-5 h-5" style={{ color: cert.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm truncate">{cert.name}</p>
                  <p className="text-slate-500 text-xs">{cert.issuer}</p>
                </div>
                <span className="text-xs font-mono text-slate-500 flex-shrink-0">{cert.year}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
