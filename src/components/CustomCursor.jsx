import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animate = () => {
      outlineX += (mouseX - outlineX) * 0.12;
      outlineY += (mouseY - outlineY) * 0.12;
      outline.style.left = `${outlineX}px`;
      outline.style.top = `${outlineY}px`;
      raf = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      dot.style.width = '12px';
      dot.style.height = '12px';
      dot.style.background = '#8b5cf6';
      outline.style.width = '50px';
      outline.style.height = '50px';
      outline.style.borderColor = 'rgba(139,92,246,0.5)';
    };

    const onLeave = () => {
      dot.style.width = '8px';
      dot.style.height = '8px';
      dot.style.background = '#6366f1';
      outline.style.width = '36px';
      outline.style.height = '36px';
      outline.style.borderColor = 'rgba(99,102,241,0.6)';
    };

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className="cursor-outline" />
    </>
  );
}
