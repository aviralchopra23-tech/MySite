import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AIVisualization = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const width = containerRef.current.clientWidth;
    const height = 400;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    canvasRef.current.appendChild(renderer.domElement);

    // Neural nodes (spheres)
    const geometry = new THREE.SphereGeometry(0.1, 16, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0x4f46e5 });
    const nodes = [];

    for (let i = 0; i < 30; i++) {
      const node = new THREE.Mesh(geometry, material);
      node.position.set(
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      );
      scene.add(node);
      nodes.push(node);
    }

    // Animate nodes
    const animate = () => {
      requestAnimationFrame(animate);
      nodes.forEach((node) => {
        node.rotation.x += 0.01;
        node.rotation.y += 0.01;
      });
      renderer.render(scene, camera);
    };
    animate();

    // Fade in section
    gsap.from(containerRef.current, {
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });

    // Cleanup
    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-gray-50 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        AI Neural Network Visualization
      </h2>
      <div ref={canvasRef} className="mx-auto" />
    </section>
  );
};

export default AIVisualization;
