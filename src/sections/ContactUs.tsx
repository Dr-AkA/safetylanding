'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';

export const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, camera, renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth;
    const height = 500;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Optional lighting for non-normal materials
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 0, 50);
    scene.add(light);

    // Load SVG
    const loader = new SVGLoader();
    loader.load('/assets/safety_2_only_logo.svg',
      (data) => {
        const paths = data.paths;
        const group = new THREE.Group();

        paths.forEach((path) => {
          const shapes = SVGLoader.createShapes(path);
          shapes.forEach((shape) => {
            const geometry = new THREE.ExtrudeGeometry(shape, {
              depth: 1,
              bevelEnabled: false,
            });
            const material = new THREE.MeshNormalMaterial(); // Visible without lights
            const mesh = new THREE.Mesh(geometry, material);
            group.add(mesh);
          });
        });

        // Scale and center
        group.scale.set(0.1, -0.1, 0.1); // Flip Y and scale down
        group.position.set(-5, -5, 0);
        scene.add(group);
      },
      undefined,
      (err) => {
        console.error('SVG load error:', err);
      }
    );

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-black overflow-x-clip">
      <div ref={containerRef} className="w-full h-[500px]" />
    </section>
  );
};
