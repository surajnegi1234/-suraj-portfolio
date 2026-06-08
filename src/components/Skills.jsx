import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiFirebase,
  SiRedux, SiJavascript, SiGit, SiSocketdotio, SiJsonwebtokens,
} from 'react-icons/si';
import { skills } from '../data';

const iconMap = {
  React: { Icon: SiReact, color: '#61DAFB' },
  'Node.js': { Icon: SiNodedotjs, color: '#339933' },
  MongoDB: { Icon: SiMongodb, color: '#47A248' },
  Express: { Icon: SiExpress, color: '#aaaaaa' },
  Firebase: { Icon: SiFirebase, color: '#FFCA28' },
  Redux: { Icon: SiRedux, color: '#764ABC' },
  JavaScript: { Icon: SiJavascript, color: '#F7DF1E' },
  'Git & GitHub': { Icon: SiGit, color: '#F05032' },
  'Socket.IO': { Icon: SiSocketdotio, color: '#999999' },
  'JWT Authentication': { Icon: SiJsonwebtokens, color: '#d63aff' },
};

const categoryColors = {
  Frontend: '#6366f1',
  Backend: '#8b5cf6',
  Database: '#06b6d4',
  Cloud: '#f59e0b',
  Security: '#10b981',
  Tools: '#f43f5e',
};

function SkillBar({ skill, index, inView }) {
  const color = categoryColors[skill.category] || '#6366f1';

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 flex items-center justify-center">
            {(() => {
              const entry = iconMap[skill.name];
              if (entry) return <entry.Icon style={{ color: entry.color }} className="w-4 h-4" />;
              return <span className="w-2 h-2 rounded-full" style={{ background: color }} />;
            })()}
          </span>
          <span className="text-sm font-medium text-slate-300">{skill.name}</span>
          <span
            className="text-[10px] px-1.5 py-0.5 rounded-full font-mono"
            style={{ background: `${color}15`, color, border: `1px solid ${color}25` }}
          >
            {skill.category}
          </span>
        </div>
        <span className="text-xs font-mono text-slate-500">{skill.level}%</span>
      </div>

      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.07 + 0.3, ease: 'easeOut' }}
          className="h-full rounded-full relative"
          style={{ background: `linear-gradient(90deg, ${color}90, ${color})` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
            style={{ background: color, boxShadow: `0 0 8px ${color}` }} />
        </motion.div>
      </div>
    </motion.div>
  );
}

function TechOrb({ Icon, color, name, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05, type: 'spring' }}
      whileHover={{ scale: 1.15, y: -4 }}
      className="flex flex-col items-center gap-2 group"
    >
      <div
        className="w-14 h-14 rounded-2xl glass flex items-center justify-center transition-all duration-300"
        style={{ border: `1px solid ${color}25` }}
      >
        <Icon className="w-6 h-6 transition-all duration-300 group-hover:scale-110" style={{ color }} />
      </div>
      <span className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors font-mono">{name}</span>
    </motion.div>
  );
}

const techOrbs = [
  { Icon: SiReact, color: '#61DAFB', name: 'React' },
  { Icon: SiNodedotjs, color: '#339933', name: 'Node.js' },
  { Icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
  { Icon: SiExpress, color: '#aaa', name: 'Express' },
  { Icon: SiFirebase, color: '#FFCA28', name: 'Firebase' },
  { Icon: SiRedux, color: '#764ABC', name: 'Redux' },
  { Icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript' },
  { Icon: SiGit, color: '#F05032', name: 'Git' },
  { Icon: SiSocketdotio, color: '#888', name: 'Socket.IO' },
  { Icon: SiJsonwebtokens, color: '#d63aff', name: 'JWT' },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/2 w-[400px] h-[400px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">Expertise</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </motion.div>

        {/* Tech orbs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl p-8 mb-8"
        >
          <p className="section-label text-center mb-6">Core Technologies</p>
          <div className="flex flex-wrap justify-center gap-6">
            {techOrbs.map((orb, i) => (
              <TechOrb key={orb.name} {...orb} index={i} inView={inView} />
            ))}
          </div>
        </motion.div>

        {/* Skills bars */}
        <div className="glass rounded-2xl p-8">
          <p className="section-label mb-6">Proficiency Levels</p>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
            {skills.map((s, i) => (
              <SkillBar key={s.name} skill={s} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
