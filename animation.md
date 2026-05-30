# Three.js Animation Guide — When to Use Which Skill

A quick-reference for picking the right Three.js skill based on what you're trying to build.

---

## Skill Map

| Skill | What it covers |
|---|---|
| `threejs-fundamentals` | Scene, camera, renderer, Object3D, math utilities |
| `threejs-animation` | Keyframe clips, AnimationMixer, skeletal, morph targets, blending |
| `threejs-geometry` | Built-in shapes, BufferGeometry, instancing, point clouds |
| `threejs-shaders` | GLSL, ShaderMaterial, vertex displacement, custom effects |
| `threejs-materials` | PBR, basic, phong, toon, glass, multi-material |
| `threejs-lighting` | Lights, shadows, HDR/IBL, environment maps |
| `threejs-interaction` | Raycasting, click/hover, camera controls, drag |
| `threejs-loaders` | GLTF/GLB, textures, HDR, async loading, compression |
| `threejs-postprocessing` | Bloom, DOF, SSAO, glitch, vignette, custom screen shaders |
| `threejs-textures` | UV mapping, video texture, canvas texture, render targets |

---

## Decision Guide — Pick by Goal

### "I need to set up a 3D scene for the first time"
**→ `threejs-fundamentals`**
- Scene + camera + renderer boilerplate
- Object3D hierarchy, transforms, groups
- Clock for frame-rate-independent animation
- Responsive canvas + resize handling

---

### "I want objects to move, rotate, or follow a path over time"
**→ `threejs-animation`**

| Scenario | Approach |
|---|---|
| Simple spinning / floating | Procedural: `mesh.rotation.y += delta` in loop |
| Smooth follow / spring physics | Spring class or smooth damp in `threejs-animation` |
| Circular / figure-8 orbit | `Math.cos/sin(elapsed)` oscillation |
| Keyframe-driven motion | `AnimationClip` + `AnimationMixer` + `AnimationAction` |
| GLTF model with walk/run animations | `GLTFLoader` → `AnimationMixer` → `clipAction()` |
| Blend idle → walk → run | `action.setEffectiveWeight()` per frame |
| Face expressions / shape keys | Morph targets via `morphTargetInfluences[]` |

---

### "I want to render many copies of the same object efficiently"
**→ `threejs-geometry`** (InstancedMesh)
- Thousands of trees, particles, stars — use `InstancedMesh`
- Custom vertex shapes — use `BufferGeometry`
- Point clouds — `Points` + `PointsMaterial`

---

### "I want a visual effect written in GLSL / custom shader"
**→ `threejs-shaders`**

| Scenario | Pattern |
|---|---|
| Vertex wave / ripple animation | `ShaderMaterial` with `time` uniform, displace `position` |
| Fresnel rim glow on objects | Fresnel pattern in fragment shader |
| Noise-based distortion | Value noise GLSL + `time` uniform |
| Dissolve / reveal effect | Discard pixels below noise threshold |
| Modify a built-in material (e.g. StandardMaterial + wave) | `onBeforeCompile` injection |

---

### "I need realistic-looking surfaces or special material types"
**→ `threejs-materials`**

| Look | Material |
|---|---|
| Realistic (PBR) | `MeshStandardMaterial` |
| Glass / water / transmission | `MeshPhysicalMaterial` with `transmission: 1` |
| Car paint with clearcoat | `MeshPhysicalMaterial` with `clearcoat: 1` |
| Cartoon / cel-shaded | `MeshToonMaterial` |
| Unlit flat color / wireframe | `MeshBasicMaterial` |
| Full GLSL control | `ShaderMaterial` / `RawShaderMaterial` |

---

### "My scene looks flat or too dark"
**→ `threejs-lighting`**

| Scenario | Setup |
|---|---|
| Quick fill light | `AmbientLight` |
| Outdoor daylight | `HemisphereLight` (sky/ground) + `DirectionalLight` (sun) |
| Studio product shot | Three-point: key + fill + back `DirectionalLight` |
| Realistic reflections | HDR env map via `RGBELoader` → `scene.environment` |
| Soft shadows | `PCFSoftShadowMap` on renderer + `castShadow` on light |
| Animated lights | Orbit or pulse `light.position` / `light.intensity` in loop |

---

### "I want the user to click, hover, or drag 3D objects"
**→ `threejs-interaction`**

| Scenario | Tool |
|---|---|
| Click to select object | `Raycaster.intersectObjects()` on click |
| Hover highlight | `Raycaster` on `mousemove`, change `material.color` |
| Orbit / zoom camera | `OrbitControls` with `enableDamping` |
| First-person camera | `PointerLockControls` |
| Drag objects in scene | `DragControls` |
| Move/rotate/scale gizmo | `TransformControls` |
| Touch support | Convert `event.touches[0]` to NDC coords |

---

### "I need to load a 3D model, texture, or environment"
**→ `threejs-loaders`**

| Asset type | Loader |
|---|---|
| 3D model (standard) | `GLTFLoader` → `.glb` file |
| Compressed geometry | `GLTFLoader` + `DRACOLoader` |
| HDR environment | `RGBELoader` → `PMREMGenerator` |
| Regular image texture | `THREE.TextureLoader` |
| Multiple assets at once | `Promise.all([...])` with promisified loaders |
| Show progress bar | `THREE.LoadingManager` with `onProgress` |

---

### "I want screen-level visual polish: glow, blur, grain, color grade"
**→ `threejs-postprocessing`**

| Effect | Pass |
|---|---|
| Glow / bloom on bright areas | `UnrealBloomPass` |
| Selective bloom (only certain objects) | Layer-based bloom pattern |
| Soft focus / depth of field | `BokehPass` |
| Ambient occlusion | `SSAOPass` |
| Edge outline on selected object | `OutlinePass` |
| Film grain | `FilmPass` |
| Vignette darkening | `ShaderPass(VignetteShader)` |
| Custom screen distortion | `ShaderPass` with custom GLSL |
| Anti-aliasing | `FXAAShader` (fast) or `SMAAPass` (quality) |

> Always use `composer.render()` instead of `renderer.render()` when post-processing is active.

---

### "I need images on surfaces, video backgrounds, or dynamic textures"
**→ `threejs-textures`**

| Scenario | Approach |
|---|---|
| Static image on mesh | `TextureLoader` → `material.map` |
| Video playing on a plane | `VideoTexture` from `<video>` element |
| Draw text / canvas art on mesh | `CanvasTexture` from 2D canvas |
| Dynamic mirror / reflection | `CubeCamera` → `cubeRenderTarget.texture` |
| Render scene into another surface | `WebGLRenderTarget` |
| Tiling / repeating ground texture | `texture.repeat.set(n, n)` + `RepeatWrapping` |

---

## Common Combinations

| What you're building | Skills needed |
|---|---|
| Animated hero background (floating shapes) | `fundamentals` + `geometry` + `animation` + `lighting` |
| Interactive 3D product viewer | `fundamentals` + `loaders` + `materials` + `interaction` + `lighting` |
| Glowing particle system | `geometry` (Points) + `shaders` + `postprocessing` (bloom) |
| GLTF character with walk animation | `loaders` + `animation` + `lighting` + `materials` |
| Cinematic scene with effects | `fundamentals` + `lighting` + `postprocessing` (DOF, bloom, vignette) |
| Mouse-reactive 3D scene | `fundamentals` + `interaction` (raycaster/mouse) + `animation` |
| Water / fluid surface | `geometry` + `shaders` (vertex displacement) + `materials` (physical) |

---

## Quick Performance Rules

- Use `threejs-geometry` InstancedMesh for >100 identical objects
- Use `threejs-shaders` instead of many separate materials for animated effects
- Cap `postprocessing` passes — each pass = full-screen render cost
- Use `threejs-loaders` DRACO + KTX2 for production-size assets
- Always call `geometry.dispose()`, `material.dispose()`, `texture.dispose()` when removing objects
