"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import {
  IconBrandGithub,
  IconBrandDiscord,
  IconWorld,
  IconBuilding,
} from "@tabler/icons-react";
import * as THREE from "three";

export default function Home() {
  useEffect(() => {
    initThreeJS();
  }, []);

  return (
    <div className="min-h-screen bg-[#080604] px-4 py-6 md:py-8 flex items-center justify-center relative">
      <div className="w-full max-w-md mx-auto relative z-10">
        {/* Entire container with frosted acrylic effect */}
        <div className="bg-[#080604] rounded-3xl shadow-sm border-dashed border-[#45311b] overflow-hidden animate-fade-in backdrop-blur-lg bg-white/5">
          {/* Header with logo and project name */}
          <div className="p-4 md:p-6 flex items-center justify-center">
            <img
              src="/icon.svg"
              alt="Project Logo"
              className="h-7 w-7 md:h-8 md:w-8 mr-2"
            />
            <h1 className="text-xl md:text-2xl font-medium text-[#fefefe]">
              project jam
            </h1>
          </div>
          {/* Main content */}
          <div className="px-4 md:px-6 pb-6 text-center space-y-4">
            <h2 className="text-lg md:text-xl font-medium text-[#fefefe] flex items-center justify-center gap-1.5 animate-slide-up">
              we love open source{" "}
              <Heart className="h-4 w-4 md:h-5 md:w-5 text-[#de7f18]" />
            </h2>
            <div className="mt-4 text-left bg-transparent rounded-xl p-4 md:p-5 border border-[#45311b] hover:border-[#de7f18] transition-colors animate-slide-up stagger-1 backdrop-blur-sm">
              <h3 className="text-[#de7f18] font-medium mb-2 md:text-lg">
                about our project
              </h3>
              <p className="text-[#f2d9c0] text-sm md:text-base mb-3">
                check out our project where we&apos;re working on some cool
                stuff:
              </p>
              <ul className="text-[#f2d9c0] text-sm md:text-base list-disc list-inside space-y-2">
                <li className="animate-fade-in stagger-1">
                  <Link
                    href="https://github.com/project-jam/jamutilities"
                    className="text-[#fefefe] hover:text-[#de7f18] transition-colors"
                  >
                    jamutilities
                  </Link>{" "}
                  - an almost multipurpose discord bot
                </li>
                <li className="animate-fade-in stagger-2">
                  <Link
                    href="https://github.com/project-jam/pure-chalk"
                    className="text-[#fefefe] hover:text-[#de7f18] transition-colors"
                  >
                    pure-chalk
                  </Link>{" "}
                  - a fork of chalk.js for html users
                </li>
                <li className="animate-fade-in stagger-3">
                  <Link
                    href="https://github.com/project-jam/profane-detect"
                    className="text-[#fefefe] hover:text-[#de7f18] transition-colors"
                  >
                    profane-detect
                  </Link>{" "}
                  - a smart profanity filter w/ homoglygh and a long list of words using our algorithm >:)
                </li>
              </ul>
              <h3 className="text-[#de7f18] font-medium mt-5 mb-2 md:text-lg">
                coming soon: jamengine
              </h3>
              <p className="text-[#f2d9c0] text-sm md:text-base">
                we&apos;re working on jamengine, our upcoming project that will
                revolutionize how you build web applications. stay tuned for
                more info!
              </p>
            </div>
          </div>
          {/* Footer */}
          <div className="p-4 md:p-6 border-t border-dashed border-[#45311b] text-center text-sm md:text-base text-[#f2d9c0] space-y-3">
            <div className="flex items-center justify-center gap-1.5">
              follow us on{" "}
              <Link
                href="https://github.com/project-jam"
                className="text-[#fefefe] hover:text-[#de7f18] transition-colors inline-flex items-center"
              >
                <IconBrandGithub className="h-5 w-5 md:h-6 md:w-6" />
              </Link>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              and use our <DiscordHover /> bot!
              <span className="ml-1 px-2 py-0.5 text-xs md:text-sm bg-[#de7f18] text-[#080604] rounded-full">
                beta
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Add Three.js canvas here */}
      <canvas id="three-canvas" className="absolute inset-0 z-0" />
    </div>
  );
}

function DiscordHover() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(!open);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  const handleMouseEnter = () => {
    if (!("ontouchstart" in window)) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!("ontouchstart" in window)) {
      timeoutRef.current = setTimeout(() => {
        setOpen(false);
      }, 500);
    }
  };

  return (
    <div
      ref={menuRef}
      className="relative inline-block"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <IconBrandDiscord className="h-5 w-5 md:h-6 md:w-6 text-[#fefefe] hover:text-[#de7f18] transition-colors cursor-pointer" />
      {open && (
        <div className="absolute z-50 flex gap-3 bg-[#0d0906] border-2 border-[#de7f18] rounded-full px-3 py-1.5 -left-2 bottom-7 shadow-lg transform transition-all duration-300 ease-in-out animate-fade-in">
          <a
            href="https://discord.com/oauth2/authorize?client_id=1299803479308767355"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-2 rounded-full bg-[#1a130d] hover:bg-[#2d2d2d] transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <IconWorld className="h-5 w-5 md:h-6 md:w-6 text-[#de7f18]" />
          </a>
          <a
            href="https://discord.com/oauth2/authorize?client_id=1299803479308767355&permissions=8&integration_type=0&scope=bot+applications.commands"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-2 rounded-full bg-[#1a130d] hover:bg-[#2d2d2d] transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <IconBuilding className="h-5 w-5 md:h-6 md:w-6 text-[#de7f18]" />
          </a>
        </div>
      )}
    </div>
  );
}

function initThreeJS() {
  const canvas = document.getElementById("three-canvas");
  const width = window.innerWidth;
  const height = window.innerHeight;

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(0, width, 0, height, 1, 2);
  camera.position.z = 2;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setClearColor(0, 0);
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);

  const geometry = new THREE.PlaneGeometry(width, height);
  geometry.translate(width / 2, height / 2, 0);

  const vertexShader = `
    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const snoiseFunction = `
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+10.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

    float snoise(vec3 v) {
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

      vec3 i = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);

      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);

      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;

      i = mod289(i);
      vec4 p = permute(permute(permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0))
                + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                + i.x + vec4(0.0, i1.x, i2.x, 1.0));

      float n_ = 0.142857142857;
      vec3 ns = n_ * D.wyz - D.xzx;

      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_);

      vec4 x = x_ * ns.x + ns.yyyy;
      vec4 y = y_ * ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);

      vec4 b0 = vec4(x.xy, y.xy);
      vec4 b1 = vec4(x.zw, y.zw);

      vec4 s0 = floor(b0) * 2.0 + 1.0;
      vec4 s1 = floor(b1) * 2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));

      vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

      vec3 p0 = vec3(a0.xy, h.x);
      vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z);
      vec3 p3 = vec3(a1.zw, h.w);

      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;

      vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 105.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }
  `;

  const fragmentShader = `
        uniform vec3 color;
        uniform float time;

        ${snoiseFunction}

        void main() {
          float levels = 8.0;
          float noise = snoise(vec3(gl_FragCoord.xy * 0.005, time * -0.075)); // Slower movement
          noise = (noise + 1.0) / 2.0;

          float lower = floor(noise * levels) / levels;
          float lowerDiff = noise - lower;

          // Increased threshold for thicker topographic lines
          if (lowerDiff > 0.02) discard;

          gl_FragColor = vec4(vec3(0.871, 0.498, 0.094), 1.0);
        }
    `;

  const material = new THREE.ShaderMaterial({
    uniforms: {
      color: { value: new THREE.Color(0xde7f18) },
      time: { value: 0 },
    },
    vertexShader,
    fragmentShader,
    side: THREE.BackSide,
    transparent: true,
  });

  const plane = new THREE.Mesh(geometry, material);
  scene.add(plane);

  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    material.uniforms.time.value = clock.startTime + clock.getElapsedTime();
    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener("resize", () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    camera.right = newWidth;
    camera.bottom = newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
    geometry.dispose();
    const newGeometry = new THREE.PlaneGeometry(newWidth, newHeight);
    newGeometry.translate(newWidth / 2, newHeight / 2, 0);
    plane.geometry = newGeometry;
  });
}
