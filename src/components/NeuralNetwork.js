import React, { useEffect, useRef } from 'react';

// The corrected NeuralNetwork component
const NeuralNetwork = () => {
    // A ref to hold the canvas DOM element
    const canvasRef = useRef(null);
    // A ref to hold the animation frame ID for cleanup
    const animationFrameIdRef = useRef();

    useEffect(() => {
        // Get the canvas element and its 2D context
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        let width = window.innerWidth;
        let height = window.innerHeight;
        let target = { x: width / 2, y: height / 2 };
        let points = [];
        const closestCount = 5;

        // Resize the canvas to fit the window
        const resizeCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            // Re-initialize points on resize to fill the new dimensions
            initPoints();
        };

        // Class to represent a point/node in the network
        class Point {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.originX = x;
                this.originY = y;
                this.active = 0;
                this.closest = [];
            }

            // Method to draw the point as a circle
            draw() {
                if (this.active > 0) {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, 2 + this.active * 3, 0, Math.PI * 2, false);
                    ctx.fillStyle = `rgba(156,217,249,${this.active})`;
                    ctx.fill();
                }
            }
        }

        // Initialize points on the canvas
        const initPoints = () => {
            points = [];
            for (let x = 0; x < width; x += width / 20) {
                for (let y = 0; y < height; y += height / 20) {
                    const px = x + Math.random() * (width / 20);
                    const py = y + Math.random() * (height / 20);
                    points.push(new Point(px, py));
                }
            }
            // For each point, find the 'closestCount' nearest points
            for (let i = 0; i < points.length; i++) {
                let sortedPoints = [...points];
                sortedPoints.sort((a, b) => getDistance(points[i], a) - getDistance(points[i], b));
                points[i].closest = sortedPoints.slice(1, closestCount + 1);
            }
        };

        // Draws the lines connecting nearby points
        const drawLines = (p) => {
            if (p.active <= 0) return;
            for (let i = 0; i < p.closest.length; i++) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.closest[i].x, p.closest[i].y);
                ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
                ctx.stroke();
            }
        };

        // Main animation loop
        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Update point activity based on mouse proximity
            for (let i = 0; i < points.length; i++) {
                const distance = getDistance(target, points[i]);
                if (distance < 4000) {
                    points[i].active = 0.3;
                } else if (distance < 20000) {
                    points[i].active = 0.1;
                } else if (distance < 40000) {
                    points[i].active = 0.02;
                } else {
                    points[i].active = 0;
                }
                
                // Draw lines and points
                drawLines(points[i]);
                points[i].draw();
            }

            // Request the next animation frame
            animationFrameIdRef.current = requestAnimationFrame(animate);
        };

        // Event handler for mouse movement
        const mouseMove = (e) => {
            target.x = e.clientX;
            target.y = e.clientY;
        };

        // Utility function to calculate squared distance
        const getDistance = (p1, p2) => {
            return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
        };

        // Initial setup
        resizeCanvas();
        animate();

        // Add event listeners for interactivity and responsiveness
        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('resize', resizeCanvas);

        // Cleanup function
        return () => {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameIdRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                pointerEvents: 'none',
                backgroundColor: '#0d1117',
            }}
        />
    );
};

export default NeuralNetwork;
