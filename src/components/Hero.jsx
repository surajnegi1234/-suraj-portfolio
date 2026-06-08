import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { personalInfo } from '../data';

const PARTICLE_COUNT = 55;

function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let raf;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.35,
      dy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.5 ? '99,102,241' : '139,92,246',
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > W) p.dx *= -1;
        if (p.y < 0 || p.y > H) p.dy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
        ctx.fill();
      });
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((q) => {
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(99,102,241,${0.07 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      raf = requestAnimationFrame(draw);
    };

    draw();
    const onResize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }} />;
}

const socials = [
  { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  { icon: FiPhone, href: `tel:${personalInfo.phone}`, label: 'Phone' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Mesh gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }} />
        <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }} />
      </div>

      <Particles />

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Status badge */}
        <motion.div variants={item}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 text-xs font-mono text-emerald-400 border border-emerald-500/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          Available for opportunities · {personalInfo.location}
        </motion.div>

        {/* Name */}
        <motion.div variants={item}>
          <h1 className="font-black leading-none tracking-tight mb-4">
            <span className="block text-5xl sm:text-7xl lg:text-8xl text-white">
              {personalInfo.name.split(' ')[0]}
            </span>
            <span className="block text-5xl sm:text-7xl lg:text-8xl gradient-text">
              {personalInfo.name.split(' ')[1]}
            </span>
          </h1>
        </motion.div>

        {/* Role */}
        <motion.div variants={item} className="mb-6">
          <span className="inline-block font-mono text-base sm:text-lg text-indigo-300 border border-indigo-500/30 rounded-lg px-4 py-1.5 glass">
            {'<'} {personalInfo.role} {' />'}
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p variants={item}
          className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.tagline} Crafting seamless digital experiences from{' '}
          <span className="text-indigo-400">backend APIs</span> to{' '}
          <span className="text-purple-400">beautiful UIs</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-wrap justify-center gap-4 mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-white"
          >
            View My Work <FiArrowDown className="w-4 h-4" />
          </motion.button>
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="btn-outline"
          >
            Get in Touch <FiMail className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Socials */}
        <motion.div variants={item} className="flex justify-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label} href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer" aria-label={label}
              whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.9 }}
              className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            >
              <Icon className="w-4 h-4" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-slate-600 flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-indigo-400" />
          </motion.div>
          <span className="text-xs text-slate-600 font-mono tracking-widest">SCROLL</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
