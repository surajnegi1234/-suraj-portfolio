import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';
import { personalInfo } from '../data';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.05 }}
          className="font-mono text-sm font-bold gradient-text"
        >
          SN<span className="text-indigo-400">.</span>
        </motion.button>

        <p className="text-slate-500 text-xs flex items-center gap-1.5">
          Built with <FiHeart className="text-rose-500 w-3 h-3" /> by {personalInfo.name} · {new Date().getFullYear()}
        </p>

        <motion.a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="text-xs text-slate-500 hover:text-slate-300 transition-colors font-mono"
        >
          @surajnegi
        </motion.a>
      </div>
    </footer>
  );
}
