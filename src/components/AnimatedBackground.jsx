import React, { useEffect, useRef } from 'react';
import './AnimatedBackground.css';

function AnimatedBackground() {
    const mouseGlowRef = useRef(null);
    const mousePosition = useRef({ x: 0, y: 0 });
    const currentPosition = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mousePosition.current = { x: e.clientX, y: e.clientY };
        };

        const animate = () => {
            if (mouseGlowRef.current) {
                // Smooth interpolation for fluid movement
                currentPosition.current.x += (mousePosition.current.x - currentPosition.current.x) * 0.15;
                currentPosition.current.y += (mousePosition.current.y - currentPosition.current.y) * 0.15;

                // Use transform instead of left/top for better performance
                mouseGlowRef.current.style.transform = `translate(${currentPosition.current.x}px, ${currentPosition.current.y}px)`;
            }
            requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className="animated-gradient-bg">
            <div className="gradient-orb orb-1"></div>
            <div className="gradient-orb orb-2"></div>
            <div className="gradient-orb orb-3"></div>
            <div className="gradient-orb orb-4"></div>
            <div ref={mouseGlowRef} className="mouse-glow" />
        </div>
    );
}

export default AnimatedBackground;
