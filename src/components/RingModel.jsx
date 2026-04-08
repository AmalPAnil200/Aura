import React, { useRef, useLayoutEffect } from "react";
import { useGLTF, useScroll, useEnvironment } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";

import ringGlb from "../assets/3d/ring_golden.glb";

export default function RingModel(props) {
  const { nodes, materials } = useGLTF(ringGlb);
  const groupRef = useRef();
  const scroll = useScroll();
  const tl = useRef();
  const { scene } = useThree();

  // Load an HDRI environment for realistic reflections
  const envMap = useEnvironment({ preset: "city" }); // or "sunset", "dawn", "apartment"

  useLayoutEffect(() => {
    // Apply environment map to the scene for IBL (image-based lighting)
    scene.environment = envMap;
    // Do NOT set scene.background unless you want it as bg too
  }, [envMap, scene]);

  useLayoutEffect(() => {
    Object.values(materials).forEach((material) => {
      // ❌ REMOVE: material.color.set("#d4af37") — this tints and breaks texture albedo
      // ✅ Only boost metalness/roughness if the GLB values need a nudge
      if (material.isMeshStandardMaterial || material.isMeshPhysicalMaterial) {
        material.metalness = Math.max(material.metalness ?? 0, 0.9);
        material.roughness = Math.min(material.roughness ?? 1, 0.2);
        material.envMapIntensity = 1.5;
        material.needsUpdate = true;
      }
    });
  }, [materials]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
    if (tl.current && scroll && typeof scroll.offset === 'number') {
      tl.current.seek(scroll.offset * tl.current.duration());
    }
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({ paused: true });

    // 0 -> 1: Transition to Craftsmanship
    tl.current.to(groupRef.current.position, { x: 2.5, y: -1, z: 1, duration: 1, ease: "power1.inOut" }, 0);
    tl.current.to(groupRef.current.rotation, { x: Math.PI / 4, z: Math.PI / 6, duration: 1, ease: "power1.inOut" }, 0);
    tl.current.to(groupRef.current.scale, { x: 2, y: 2, z: 2, duration: 1, ease: "power1.inOut" }, 0);

    // 1 -> 2: Transition to Ethos
    tl.current.to(groupRef.current.position, { x: -2.5, y: 0, z: 2, duration: 1, ease: "power1.inOut" }, 1);
    tl.current.to(groupRef.current.rotation, { x: Math.PI / 2, z: -Math.PI / 4, duration: 1, ease: "power1.inOut" }, 1);
    tl.current.to(groupRef.current.scale, { x: 2.5, y: 2.5, z: 2.5, duration: 1, ease: "power1.inOut" }, 1);

    // 2 -> 3: Transition to Legacy (Center/Close-up)
    tl.current.to(groupRef.current.position, { x: 0, y: 0, z: 4, duration: 1, ease: "power1.inOut" }, 2);
    tl.current.to(groupRef.current.rotation, { x: 0, z: 0, duration: 1, ease: "power1.inOut" }, 2);
    tl.current.to(groupRef.current.scale, { x: 1.4, y: 1.4, z: 1.4, duration: 1, ease: "power1.inOut" }, 2);

    // Total duration should match pages in ScrollControls for easier mapping. 
    // If pages=6, we want duration to be 6.
    tl.current.to({}, { duration: 1.5 }, 2); // Extends timeline from 3 to 4.5

    return () => { if (tl.current) tl.current.kill(); };
  }, []);

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <primitive object={nodes.Scene || nodes.scene || nodes[Object.keys(nodes)[0]]} />
    </group>
  );
}

useGLTF.preload(ringGlb);