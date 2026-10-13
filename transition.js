(() => {
  const destination = 'https://orbital-archive-rose.vercel.app/';
  let entering = false;
  window.addEventListener('laf:phase', ({ detail }) => {
    if (detail.phase !== 'DONE' || entering) return;
    entering = true;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canvas = document.createElement('canvas');
    canvas.setAttribute('aria-hidden', 'true');
    canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;z-index:1000;background:#000;pointer-events:none';
    document.body.append(canvas);
    const context = canvas.getContext('2d');
    const ratio = Math.min(devicePixelRatio, 2);
    const width = innerWidth, height = innerHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context.scale(ratio, ratio);
    const stars = Array.from({ length: 260 }, () => ({ angle: Math.random() * Math.PI * 2, radius: 12 + Math.random() * Math.hypot(width, height), speed: .5 + Math.random() }));
    const start = performance.now();
    const duration = reduced ? 150 : 1350;
    function frame(now) {
      const progress = Math.min(1, (now - start) / duration);
      context.fillStyle = '#000';
      context.fillRect(0, 0, width, height);
      if (!reduced) {
        const acceleration = 1 + progress * progress * 8;
        context.lineWidth = 1 + progress;
        for (const star of stars) {
          const radius = (star.radius * acceleration) % (Math.hypot(width, height) * .8);
          const tail = Math.max(0, radius - (15 + progress * 190) * star.speed);
          context.strokeStyle = `rgba(180,225,255,${.25 + progress * .65})`;
          context.beginPath();
          context.moveTo(width / 2 + Math.cos(star.angle) * tail, height / 2 + Math.sin(star.angle) * tail);
          context.lineTo(width / 2 + Math.cos(star.angle) * radius, height / 2 + Math.sin(star.angle) * radius);
          context.stroke();
        }
      }
      if (progress < 1) requestAnimationFrame(frame);
      else window.location.assign(destination);
    }
    requestAnimationFrame(frame);
  });
})();
