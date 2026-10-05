/**
 * MetaCroSS - Bold White Deep Space Flight Engine (Three.js)
 * 漆黒の深宇宙を、濃く鮮烈な純白の星々が静かに流れるスターフィールド演出
 * （生命彫刻は削除、純粋な白の宇宙航行に特化）
 */
(() => {
  if (typeof THREE === 'undefined') {
    console.error('Three.js is not loaded.');
    return;
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  // キャンバスの配置
  const canvas = document.createElement('canvas');
  canvas.id = 'webgl-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '-1';
  document.body.appendChild(canvas);

  // シーン・カメラ・レンダラー
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x000000, 0.0006);

  const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 3500);
  camera.position.z = 1000;

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // ============================================================
  // 濃い白の星光テクスチャ（芯がギュッと強く輝く純白の星）
  // ============================================================
  const createBoldStarTexture = () => {
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 64;
    pCanvas.height = 64;
    const ctx = pCanvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.35, 'rgba(255, 255, 255, 0.98)');
    grad.addColorStop(0.65, 'rgba(255, 255, 255, 0.5)');
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2);
    ctx.fill();
    return new THREE.CanvasTexture(pCanvas);
  };

  const boldStarTexture = createBoldStarTexture();

  // ============================================================
  // 濃い白の深宇宙スターフィールド（無数の星々が前進・航行）
  // ============================================================
  const starCount = 2600;
  const positions = new Float32Array(starCount * 3);
  const baseSpeeds = new Float32Array(starCount);
  const spreadX = 2400;
  const spreadY = 2400;
  const spreadZ = 2800;

  for (let i = 0; i < starCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * spreadX;
    positions[i * 3 + 1] = (Math.random() - 0.5) * spreadY;
    positions[i * 3 + 2] = Math.random() * spreadZ - (spreadZ - 1000);
    baseSpeeds[i] = Math.random() * 0.9 + 0.5;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 6.2, // 濃く鮮明な白
    map: boldStarTexture,
    transparent: true,
    opacity: 1.0,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const stars = new THREE.Points(geometry, material);
  scene.add(stars);

  // ============================================================
  // インタラクション（マウス旋回、スクロール加速、クリックワープ）
  // ============================================================
  let mouseX = 0;
  let mouseY = 0;
  let targetCamX = 0;
  let targetCamY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
    mouseY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    targetCamX = mouseX * 280;
    targetCamY = -mouseY * 220;
  }, { passive: true });

  let scrollSpeedBonus = 0;
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const diff = Math.abs(currentScrollY - lastScrollY);
    scrollSpeedBonus = Math.min(diff * 0.12, 6.0);
    lastScrollY = currentScrollY;
  }, { passive: true });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  // クリック時のワープ加速
  let warpWave = 0;
  window.addEventListener('click', () => {
    warpWave = 1.0;
  });

  // ============================================================
  // アニメーションループ（白の深宇宙航行）
  // ============================================================
  let isRunning = true;
  document.addEventListener('visibilitychange', () => {
    isRunning = !document.hidden;
  });

  function animate() {
    if (!isRunning) {
      requestAnimationFrame(animate);
      return;
    }

    // カメラの旋回（宇宙船の操縦感覚）
    camera.position.x += (targetCamX - camera.position.x) * 0.035;
    camera.position.y += (targetCamY - camera.position.y) * 0.035;
    camera.lookAt(0, 0, 0);

    // 星々の前進移動
    const pos = geometry.attributes.position.array;
    const speedMultiplier = 1.0 + scrollSpeedBonus + warpWave * 3.2;

    for (let i = 0; i < starCount; i++) {
      const zIdx = i * 3 + 2;
      pos[zIdx] += baseSpeeds[i] * speedMultiplier;

      // 手前を通過した星は最奥へループ再生
      if (pos[zIdx] > 1050) {
        pos[zIdx] = -spreadZ + 1050;
        pos[i * 3] = (Math.random() - 0.5) * spreadX;
        pos[i * 3 + 1] = (Math.random() - 0.5) * spreadY;
      }
    }
    geometry.attributes.position.needsUpdate = true;

    // 減衰
    scrollSpeedBonus *= 0.93;
    if (warpWave > 0) {
      warpWave -= 0.025;
      if (warpWave < 0) warpWave = 0;
    }

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
})();
