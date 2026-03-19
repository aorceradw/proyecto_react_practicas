import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const canvasRef = useRef(null);
    const kanjiRef = useRef(null);
    const romajiRef = useRef(null);
    const definicionRef = useRef(null);
    const ctaRef = useRef(null);
    const [listo, setListo] = useState(false);

    const threeRefs = useRef({
        scene: null,
        camera: null,
        renderer: null,
        stars: [],
        nebula: null,
        animationId: null
    });

    useEffect(() => {
        const { current: refs } = threeRefs;

        // Escena
        refs.scene = new THREE.Scene();
        refs.scene.fog = new THREE.FogExp2(0x000000, 0.00025);

        // Cámara
        refs.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            2000
        );
        refs.camera.position.z = 100;
        refs.camera.position.y = 20;

        // Renderer
        refs.renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: true,
            alpha: true
        });
        refs.renderer.setSize(window.innerWidth, window.innerHeight);
        refs.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        refs.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        refs.renderer.toneMappingExposure = 0.5;

        // Estrellas
        const crearEstrellas = () => {
            const starCount = 5000;
            for (let i = 0; i < 3; i++) {
                const geometry = new THREE.BufferGeometry();
                const positions = new Float32Array(starCount * 3);
                const colors = new Float32Array(starCount * 3);
                const sizes = new Float32Array(starCount);

                for (let j = 0; j < starCount; j++) {
                    const radius = 200 + Math.random() * 800;
                    const theta = Math.random() * Math.PI * 2;
                    const phi = Math.acos(Math.random() * 2 - 1);

                    positions[j * 3] = radius * Math.sin(phi) * Math.cos(theta);
                    positions[j * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
                    positions[j * 3 + 2] = radius * Math.cos(phi);

                    const color = new THREE.Color();
                    const colorChoice = Math.random();
                    if (colorChoice < 0.7) {
                        color.setHSL(0, 0, 0.8 + Math.random() * 0.2);
                    } else if (colorChoice < 0.9) {
                        // rose gold
                        color.set('#E8C4BC');
                    } else {
                        // ice blue
                        color.set('#C8D4E8');
                    }

                    colors[j * 3] = color.r;
                    colors[j * 3 + 1] = color.g;
                    colors[j * 3 + 2] = color.b;
                    sizes[j] = Math.random() * 2 + 0.5;
                }

                geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
                geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
                geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

                const material = new THREE.ShaderMaterial({
                    uniforms: {
                        time: { value: 0 },
                        depth: { value: i }
                    },
                    vertexShader: `
                        attribute float size;
                        attribute vec3 color;
                        varying vec3 vColor;
                        uniform float time;
                        uniform float depth;
                        void main() {
                            vColor = color;
                            vec3 pos = position;
                            float angle = time * 0.05 * (1.0 - depth * 0.3);
                            mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
                            pos.xy = rot * pos.xy;
                            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
                            gl_PointSize = size * (300.0 / -mvPosition.z);
                            gl_Position = projectionMatrix * mvPosition;
                        }
                    `,
                    fragmentShader: `
                        varying vec3 vColor;
                        void main() {
                            float dist = length(gl_PointCoord - vec2(0.5));
                            if (dist > 0.5) discard;
                            float opacity = 1.0 - smoothstep(0.0, 0.5, dist);
                            gl_FragColor = vec4(vColor, opacity);
                        }
                    `,
                    transparent: true,
                    blending: THREE.AdditiveBlending,
                    depthWrite: false
                });

                const stars = new THREE.Points(geometry, material);
                refs.scene.add(stars);
                refs.stars.push(stars);
            }
        };

        // Nebulosa — colores rose + ice en vez de azul/rosa genérico
        const crearNebulosa = () => {
            const geometry = new THREE.PlaneGeometry(8000, 4000, 100, 100);
            const material = new THREE.ShaderMaterial({
                uniforms: {
                    time: { value: 0 },
                    color1: { value: new THREE.Color('#E8C4BC') },
                    color2: { value: new THREE.Color('#C8D4E8') },
                    opacity: { value: 0.15 }
                },
                vertexShader: `
                    varying vec2 vUv;
                    uniform float time;
                    void main() {
                        vUv = uv;
                        vec3 pos = position;
                        float elevation = sin(pos.x * 0.01 + time) * cos(pos.y * 0.01 + time) * 20.0;
                        pos.z += elevation;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                    }
                `,
                fragmentShader: `
                    uniform vec3 color1;
                    uniform vec3 color2;
                    uniform float opacity;
                    uniform float time;
                    varying vec2 vUv;
                    void main() {
                        float mixFactor = sin(vUv.x * 10.0 + time) * cos(vUv.y * 10.0 + time);
                        vec3 color = mix(color1, color2, mixFactor * 0.5 + 0.5);
                        float alpha = opacity * (1.0 - length(vUv - 0.5) * 2.0);
                        gl_FragColor = vec4(color, alpha);
                    }
                `,
                transparent: true,
                blending: THREE.AdditiveBlending,
                side: THREE.DoubleSide,
                depthWrite: false
            });

            const nebula = new THREE.Mesh(geometry, material);
            nebula.position.z = -1050;
            refs.scene.add(nebula);
            refs.nebula = nebula;
        };

        // Animación
        const animate = () => {
            refs.animationId = requestAnimationFrame(animate);
            const time = Date.now() * 0.001;

            refs.stars.forEach(starField => {
                if (starField.material.uniforms) {
                    starField.material.uniforms.time.value = time;
                }
            });

            if (refs.nebula?.material.uniforms) {
                refs.nebula.material.uniforms.time.value = time * 0.5;
            }

            // Movimiento flotante suave de cámara
            refs.camera.position.x = Math.sin(time * 0.1) * 2;
            refs.camera.position.y = 20 + Math.cos(time * 0.15) * 1;
            refs.camera.lookAt(0, 10, -600);

            refs.renderer.render(refs.scene, refs.camera);
        };

        crearEstrellas();
        crearNebulosa();
        animate();
        setListo(true);

        const handleResize = () => {
            refs.camera.aspect = window.innerWidth / window.innerHeight;
            refs.camera.updateProjectionMatrix();
            refs.renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(refs.animationId);
            window.removeEventListener('resize', handleResize);
            refs.stars.forEach(s => { s.geometry.dispose(); s.material.dispose(); });
            if (refs.nebula) { refs.nebula.geometry.dispose(); refs.nebula.material.dispose(); }
            refs.renderer.dispose();
        };
    }, []);

    // Animación de entrada del texto con GSAP
    useEffect(() => {
        if (!listo) return;

        const tl = gsap.timeline();

        tl.from(kanjiRef.current, {
            y: 80,
            opacity: 0,
            duration: 1.8,
            ease: 'power4.out'
        })
        .from(romajiRef.current, {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.8')
        .from(definicionRef.current, {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.5')
        .from(ctaRef.current, {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.3');

        return () => tl.kill();
    }, [listo]);

    return (
        <section className="hero">
            {/* Fondo Three.js */}
            <canvas ref={canvasRef} className="hero-canvas" />

            {/* Overlay oscuro encima del canvas */}
            <div className="hero-overlay" />

            {/* Contenido */}
            <div className="hero-contenido">
                <h1 ref={kanjiRef} className="hero-kanji">進化</h1>
                <div ref={romajiRef} className="hero-romaji">
                    <span className="hero-barra">/</span>
                    <span className="hero-romaji-texto">SHINKA</span>
                    <span className="hero-barra">/</span>
                </div>
                <p ref={definicionRef} className="hero-definicion">
                    Evolución. El salto que no tiene vuelta atrás.
                </p>
                <Link ref={ctaRef} to="/trabajos" className="hero-cta">
                    Descubrir
                </Link>
            </div>

            {/* Scroll indicator */}
            <div className="hero-scroll">
                <span className="hero-scroll-linea" />
                <span className="hero-scroll-texto">scroll</span>
            </div>
        </section>
    );
}