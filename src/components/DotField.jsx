import React, { useEffect, useRef } from 'react';

const DotFieldBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
    
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId;
        let isMounted = true;

        let width = (canvas.width = canvas.parentElement.offsetWidth || window.innerWidth);
        let height = (canvas.height = canvas.parentElement.offsetHeight || window.innerHeight);

        const spacing = 24;
        const baseRadius = 0.95;

        let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
        let scrollY = window.scrollY;
        let targetScrollY = window.scrollY;

        const handleResize = () => {
            if (!canvas || !canvas.parentElement) return;
            width = canvas.width = canvas.parentElement.offsetWidth;
            height = canvas.height = canvas.parentElement.offsetHeight;
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.targetX = e.clientX - rect.left;
            mouse.targetY = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.targetX = -1000;
            mouse.targetY = -1000;
        };

        const handleScroll = () => {
            targetScrollY = window.scrollY;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('scroll', handleScroll, { passive: true });

        const render = () => {
            if (!isMounted || !ctx || !canvas) return;

            mouse.x += (mouse.targetX - mouse.x) * 0.1;
            mouse.y += (mouse.targetY - mouse.y) * 0.1;
            scrollY += (targetScrollY - scrollY) * 0.08;

            ctx.clearRect(0, 0, width, height);

        const parallaxOffsetY = (scrollY * 0.25) % spacing;
        const cols = Math.ceil(width / spacing) + 2;
        const rows = Math.ceil(height / spacing) + 2;
        const zoomRadius = 85;

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                const origX = i * spacing;
                const origY = j * spacing - parallaxOffsetY;

                const dx = mouse.x - origX;
                const dy = mouse.y - origY;
                const dist = Math.sqrt(dx * dx + dy * dy);

                let drawX = origX;
                let drawY = origY;
                let dotRadius = baseRadius;
                let alpha = 0.1;

                if (dist < zoomRadius) {
                    const factor = 1 - dist / zoomRadius;
                    const distortionForce = Math.sin(factor * Math.PI) * 4;
                    const angle = Math.atan2(dy, dx);
                    
                    drawX = origX - Math.cos(angle) * distortionForce;
                    drawY = origY - Math.sin(angle) * distortionForce;

                    dotRadius = baseRadius + factor * 0.7;
                    alpha = 0.1 + factor * 0.35;
                }

            ctx.beginPath();
            ctx.arc(drawX, drawY, dotRadius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(226, 232, 240, ${alpha})`;
            ctx.fill();
            }
        }
      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
            }} />
    );
};

export default DotFieldBackground;