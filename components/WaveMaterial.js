import * as THREE from 'three'
import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'

// Tutorial: https://www.youtube.com/watch?v=f4s1h2YETNY
const WaveMaterial = shaderMaterial(
    {
        time: 0,
        resolution: new THREE.Vector2(),
        pointer: new THREE.Vector2()
    },
  /*glsl*/ `
      varying vec2 vUv;
      void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectionPosition = projectionMatrix * viewPosition;
        gl_Position = projectionPosition;
        vUv = uv;
      }`,
  /*glsl*/ `
      uniform float time;
      uniform vec2 resolution;
      uniform vec2 pointer;
      varying vec2 vUv;      

      vec3 palette(float t) {
        vec3 a = vec3(0.928, 0.698, 1.928);
        vec3 b = vec3(1.288, 0.338, 2.638);
        vec3 c = vec3(1.038, 1.378, 0.885);
        vec3 d = vec3(-1.511, -2.131, -2.921);
        return a + b * cos(5.28318 * (c * t + d));
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy * 1.0 - resolution.xy) / resolution.y;      
        vec2 uv0 = uv;
        vec3 finalColor = vec3(0.0);
        uv = fract(uv * 1.5) - 0.5;     
        uv = sin(uv * 0.5) - pointer;     
        float d = length(uv) * exp(-length(uv0));
        vec3 col = palette(length(uv0) + time * 0.01);
        d = sin(d * 8.0 + time) / 8.0;
        d = abs(d);
        d = pow(0.08 / d, 0.8);
        finalColor += col * d;
        gl_FragColor = vec4(finalColor, 1.0);   
      }`
)

extend({ WaveMaterial })

export { WaveMaterial }

/* 
void main() {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / resolution.y;   

        to

void main() {
        vec2 uv = (gl_FragCoord.xy * 1.0 - resolution.xy) / resolution.y;   
*/