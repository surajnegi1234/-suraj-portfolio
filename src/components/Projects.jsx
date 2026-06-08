import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX, FiLayers } from 'react-icons/fi';
import { projects } from '../data';

function ProjectCard({ project, index, inView, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -6 }}
      className="glass glass-hover rounded-2xl overflow-hidden group cursor-pointer relative"
      onClick={() => onOpen(project)}
    >
      {/* Gradient preview area */}
      <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(-45deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: index * 0.15 + 0.3 }}
          className="w-16 h-16 rounded-2xl glass flex items-center justify-center"
          style={{ border: `1px solid ${project.color}40` }}
        >
          <FiLayers className="w-7 h-7" style={{ color: project.color }} />
        </motion.div>

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center gap-3"
          style={{ background: 'rgba(2,6,23,0.7)', backdropFilter: 'blur(4px)' }}
        >
          <span className="text-white text-sm font-semibold glass px-4 py-2 rounded-full border border-white/10">
            View Details
          </span>
        </motion.div>

        {project.featured && (
          <div className="absolute top-3 right-3">
            <span className="text-xs font-mono px-2 py-1 rounded-full"
              style={{ background: `${project.color}20`, color: project.color, border: `1px solid ${project.color}40` }}>
              Featured
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="mb-1">
          <p className="text-xs text-slate-500 font-mono">{project.subtitle}</p>
          <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
            {project.title}
          </h3>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-4">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="flex gap-2 flex-wrap mb-4">
          {project.metrics.map((m) => (
            <span key={m} className="text-xs text-slate-400 bg-slate-800/60 px-2 py-1 rounded-lg border border-slate-700/50">
              {m}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 3).map((t) => (
              <span key={t} className="text-xs font-mono px-2 py-0.5 rounded-full"
                style={{ background: `${project.color}10`, color: project.color, border: `1px solid ${project.color}25` }}>
                {t}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="text-xs font-mono text-slate-500 px-2 py-0.5">+{project.tech.length - 3}</span>
            )}
          </div>

          <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
            <motion.a
              href={project.github} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}
              className="w-8 h-8 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-white"
            >
              <FiGithub className="w-3.5 h-3.5" />
            </motion.a>
            <motion.a
              href={project.live} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}
              className="w-8 h-8 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-white"
            >
              <FiExternalLink className="w-3.5 h-3.5" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Modal({ project, onClose }) {
  if (!project) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: 'rgba(2,6,23,0.85)', backdropFilter: 'blur(20px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="glass rounded-2xl w-full max-w-2xl overflow-hidden"
          style={{ border: `1px solid ${project.color}30` }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`h-52 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center`}>
            <div className="w-20 h-20 rounded-2xl glass flex items-center justify-center"
              style={{ border: `1px solid ${project.color}40` }}>
              <FiLayers className="w-9 h-9" style={{ color: project.color }} />
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 glass rounded-xl flex items-center justify-center text-slate-300 hover:text-white"
            >
              <FiX className="w-4 h-4" />
            </button>
          </div>

          <div className="p-8">
            <p className="text-xs text-slate-500 font-mono mb-1">{project.subtitle}</p>
            <h2 className="text-2xl font-black text-white mb-3">{project.title}</h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">{project.description}</p>

            <div className="mb-6">
              <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-sm px-3 py-1.5 rounded-full font-mono"
                    style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <motion.a
                href={project.github} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="btn-outline flex-1 justify-center"
              >
                <FiGithub className="w-4 h-4" /> View Code
              </motion.a>
              <motion.a
                href={project.live} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="btn-primary flex-1 justify-center text-white"
              >
                <FiExternalLink className="w-4 h-4" /> Live Demo
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm">
            A selection of production-grade applications I've engineered and shipped.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} inView={inView} onOpen={setSelected} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="flex justify-center mt-12"
        >
          <motion.a
            href="https://github.com/surajnegi"
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            className="btn-outline"
          >
            <FiGithub className="w-4 h-4" /> View All on GitHub
          </motion.a>
        </motion.div>
      </div>

      <Modal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
