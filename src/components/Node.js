import React, { useEffect, useRef } from 'react';

const Node = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const nodes = [];
    const nodeCount = 80;
    const connections = [];

    class Node {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.size = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.8 + 0.2;
        this.pulse = Math.random() * Math.PI * 2;
        this.color = '#ffffff';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += 0.02;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        const pulseSize = Math.max(0.5, this.size + Math.sin(this.pulse) * 2);
        
        ctx.save();
        ctx.globalAlpha = this.opacity;
        
        // Outer glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, pulseSize * 3, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, pulseSize * 3);
        gradient.addColorStop(0, this.color + '40');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Core
        ctx.beginPath();
        ctx.arc(this.x, this.y, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        ctx.restore();
      }
    }

    const initNodes = () => {
      for (let i = 0; i < nodeCount; i++) {
        nodes.push(new Node());
      }
    };

    const drawConnections = () => {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            const opacity = (200 - distance) / 200 * 0.3;
            
            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            
            const gradient = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            gradient.addColorStop(0, nodes[i].color);
            gradient.addColorStop(1, nodes[j].color);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.restore();

            // Data packets
            if (Math.random() < 0.001) {
              const packet = {
                x: nodes[i].x,
                y: nodes[i].y,
                targetX: nodes[j].x,
                targetY: nodes[j].y,
                progress: 0,
                color: nodes[i].color
              };
              connections.push(packet);
            }
          }
        }
      }
    };

    const drawDataPackets = () => {
      for (let i = connections.length - 1; i >= 0; i--) {
        const packet = connections[i];
        packet.progress += 0.02;

        if (packet.progress >= 1) {
          connections.splice(i, 1);
          continue;
        }

        const x = packet.x + (packet.targetX - packet.x) * packet.progress;
        const y = packet.y + (packet.targetY - packet.y) * packet.progress;

        ctx.save();
        ctx.globalAlpha = 1 - packet.progress;
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = packet.color;
        ctx.fill();
        
        // Trail effect
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 8);
        gradient.addColorStop(0, packet.color + '60');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fill();
        
        ctx.restore();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      nodes.forEach(node => {
        node.update();
        node.draw();
      });

      drawConnections();
      drawDataPackets();
      
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initNodes();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="neural-network"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default Node;