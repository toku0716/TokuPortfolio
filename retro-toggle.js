/**
 * Retro Mode Toggle & Web 1.0 Controller
 * ネット黎明期（HTML 3.2 / 静止単色背景）モードと現代モードの切替
 */
(() => {
  const STORAGE_KEY = 'toku_portfolio_mode';
  let isRetro = false;

  // Web拍手のローカル保存カウント
  let clapCount = parseInt(localStorage.getItem('toku_clap_count') || '7', 10);

  // アクセスカウンター（ローカルで訪問ごとに進む演出）
  let visitCount = parseInt(localStorage.getItem('toku_visit_count') || '14289', 10) + 1;
  localStorage.setItem('toku_visit_count', visitCount);

  // モード適用関数
  function applyMode(retroMode, save = true) {
    isRetro = retroMode;
    const modernView = document.getElementById('modern-view');
    const retroView = document.getElementById('retro-view');
    const canvas = document.getElementById('webgl-canvas');

    if (isRetro) {
      document.body.classList.add('retro-active');
      if (modernView) modernView.style.display = 'none';
      if (retroView) retroView.style.display = 'block';
      if (canvas) canvas.style.display = 'none';
      if (save) localStorage.setItem(STORAGE_KEY, 'retro');
      window.scrollTo(0, 0);
    } else {
      document.body.classList.remove('retro-active');
      if (modernView) modernView.style.display = 'block';
      if (retroView) retroView.style.display = 'none';
      if (canvas) canvas.style.display = 'block';
      if (save) localStorage.setItem(STORAGE_KEY, 'modern');
    }
  }

  // 初期化
  document.addEventListener('DOMContentLoaded', () => {
    // URLパラメータやハッシュの確認
    const urlParams = new URLSearchParams(window.location.search);
    const hasRetroParam = urlParams.get('mode') === 'retro' || window.location.hash === '#retro';
    const savedMode = localStorage.getItem(STORAGE_KEY);

    if (hasRetroParam || savedMode === 'retro') {
      applyMode(true, false);
    }

    // 切替ボタンのイベント設定
    const toRetroBtns = document.querySelectorAll('.js-to-retro-btn');
    toRetroBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        applyMode(true);
      });
    });

    const toModernBtns = document.querySelectorAll('.js-to-modern-btn');
    toModernBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        applyMode(false);
      });
    });

    // カウンター表示の更新
    const counterEl = document.getElementById('retro-counter-val');
    if (counterEl) {
      counterEl.textContent = String(visitCount).padStart(7, '0');
    }

    // Web拍手ボタン
    const clapBtn = document.getElementById('retro-clap-btn');
    const clapText = document.getElementById('retro-clap-count');
    if (clapText) clapText.textContent = clapCount;

    if (clapBtn) {
      clapBtn.addEventListener('click', () => {
        clapCount++;
        localStorage.setItem('toku_clap_count', clapCount);
        if (clapText) clapText.textContent = clapCount;
        alert('＼(^o^)／ Web拍手ありがとうございました！\n管理人（Toku）の励みになります！');
      });
    }

    // BBS / カキコボタンのダミーアラート
    const bbsBtn = document.getElementById('retro-bbs-btn');
    if (bbsBtn) {
      bbsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('【お知らせ】\n掲示板（BBS）は荒らし対策のため一時停止中です。\n御用の方は X (Twitter) または GitHub へどうぞ！');
      });
    }

    // キリ番報告ボタン
    const kiribanBtn = document.getElementById('retro-kiriban-btn');
    if (kiribanBtn) {
      kiribanBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('【キリ番GETの方へ】\n踏み逃げ禁止です！ぜひ報告してくださいね★');
      });
    }
  });
})();
