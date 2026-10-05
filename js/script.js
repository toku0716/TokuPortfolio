/**
 * Yuuki Portfolio & Link Hub - Pure JavaScript
 * 2026 Human-Crafted Architecture
 */

// Project detailed database for modal
const projectsData = {
  'oshiss': {
    title: '推しサポ (Oshiss / Oshiss-Web)',
    subtitle: '端末内完結・安心プライバシーの推し活総合支援アプリ',
    year: '2026',
    category: 'WEB & アプリ',
    accentColor: '#e11d48',
    icon: 'heart-handshake',
    description: '「大切な推し活データを安全に、誰にも見られず管理したい」という個人のプライバシーニーズに応えるため、外部サーバーへのデータ保存を一切行わない完全ローカル（IndexedDB）完結の設計を実現。WebRTC（PeerJS）を用いた6桁暗号化コードによる端末間直接同期、PWAオフライン対応などを備えています。',
    features: [
      '完全ローカル完結型ストレージ（外部サーバーへのデータ送信ゼロ）',
      '端末間（PC⇔スマホ）のWebRTC直接データ同期（6桁コード認証）',
      '推しごとの予定・ToDo・グッズ・購入額の可視化',
      'オフライン完全対応のPWA（Progressive Web App）仕様'
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'IndexedDB', 'WebRTC (PeerJS)', 'PWA'],
    demoUrl: 'https://toku0716.github.io/oshi_web/',
    githubUrl: 'https://github.com/toku0716/oshi_web'
  },
  'macos-suite': {
    title: 'macOS Native Utility Suite',
    subtitle: 'Swiftによる軽量・高速・美しいデスクトップユーティリティ群',
    year: '2025 - 2026',
    category: 'MACOS NATIVE',
    accentColor: '#2563eb',
    icon: 'layers',
    description: 'AppleのHuman Interface Guidelinesを忠実に再現したmacOS専用アプリ群（ZipVault, Task Manager, Finder拡張, Video Player, Photo App）。SwiftUIとAppKitを組み合わせ、OS標準機能のように軽快で直感的な操作感を実現しています。',
    features: [
      'Macネイティブの高速レンダリングと省電力設計',
      'Zip暗号化ボールト（mac_zip_vault）による安全なアーカイブ保管',
      'プロセス監視とリソース最適化ユーティリティ（mac_task_manager）'
    ],
    techStack: ['Swift 6', 'SwiftUI', 'AppKit', 'Combine', 'macOS SDK'],
    demoUrl: '',
    githubUrl: 'https://github.com/toku0716'
  },
  'dev-browser': {
    title: 'DevBrowser',
    subtitle: 'エンジニアの制作効率を最大化する特化型ブラウザ',
    year: '2026',
    category: '開発ツール',
    accentColor: '#0284c7',
    icon: 'compass',
    description: 'モバイル端末とデスクトップ画面を1画面内で並行プレビューし、スクロールや操作をシンクロさせてUI崩れを素早く発見できるツール。Web制作者のデイリーワークフローを加速します。',
    features: [
      'マルチデバイス画面の同時スクロール＆イベント同期プレビュー',
      'レスポンシブブレークポイントのワンクリック切り替え',
      'キャッシュバイパスとクリーンな検証環境の即時提供'
    ],
    techStack: ['TypeScript', 'Electron', 'Node.js', 'DevTools', 'Tailwind CSS'],
    demoUrl: '',
    githubUrl: 'https://github.com/toku0716'
  },
  'c-text-editor': {
    title: 'C Text Editor & GUI',
    subtitle: '低レイヤーメモリ管理とターミナルバッファを追求したエディタ',
    year: '2025',
    category: '低レイヤー / C',
    accentColor: '#475569',
    icon: 'terminal',
    description: 'VT100エスケープシーケンスによるターミナル生モード制御、ギャップバッファによる高速な文字列挿入・削除、低レイヤーのファイルI/Oを学究的かつ実用的に追求したプロジェクト。GUI版も併せて開発。',
    features: [
      '外部ライブラリゼロのピュアCによるポータブル設計',
      '効率的なメモリギャップバッファによる大容量テキスト編集',
      'ターミナルrawモードでのリアルタイムキーイベント捕捉'
    ],
    techStack: ['C99', 'POSIX APIs', 'Terminal VT100', 'Data Structures'],
    demoUrl: '',
    githubUrl: 'https://github.com/toku0716'
  },
  'aituber-app': {
    title: 'AITuber Interactive Engine',
    subtitle: 'リアルタイム対話＆感情連動型次世代AIアバター',
    year: '2026',
    category: 'AI・対話',
    accentColor: '#7c3aed',
    icon: 'bot',
    description: 'ユーザーの音声入力をリアルタイム認識し、感情分析とLLMレスポンスを生成。発話内容に応じて「笑顔」「驚き」「共感」などのアバター表情を動的に切り替え、自然な会話のやりとりを可能にする対話エンジンです。ローカルLLM連携にも対応しています。',
    features: [
      'リアルタイム音声入力からの超低遅延レスポンス生成',
      '感情分析エンジンによるアバター表情の自動スイッチング',
      'ローカルLLM対応による完全プライベート動作モード'
    ],
    techStack: ['Python', 'Ollama / OpenAI API', 'SpeechRecognition', 'Voice AI', 'WebSocket'],
    demoUrl: '',
    githubUrl: 'https://github.com/toku0716'
  },
  'akushu-repo-app': {
    title: 'Akushu Repo App (握手会レポ・会話記録)',
    subtitle: 'ファンイベントの感動を逃さないタイムラインレポ記録',
    year: '2025',
    category: 'WEB & アプリ',
    accentColor: '#059669',
    icon: 'message-square-text',
    description: '「レポを書こうとした時には記憶が薄れてしまう」という課題を解決。話した内容とメンバーの反応をチャット風UIでサクサク入力・画像付き保存できるファン特化型メモアプリです。',
    features: [
      'チャット形式の吹き出し入力による直感的な会話ログ記録',
      '推し別・日付別のタイムラインアーカイブと検索機能',
      'SNS共有用のレポ画像自動生成・エクスポート機能'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'LocalStorage', 'PWA'],
    demoUrl: '',
    githubUrl: 'https://github.com/toku0716'
  },
  'ollama-dashboard': {
    title: 'Ollama Dashboard & Manager',
    subtitle: 'ローカルLLM運用のためのリッチなGUIコントロールパネル',
    year: '2026',
    category: 'AI・対話',
    accentColor: '#4f46e5',
    icon: 'cpu',
    description: 'ターミナル操作が主となるOllamaを直感的に操作できるダッシュボード。モデルのパラメータ変更、コンテキスト長設定、レスポンス速度測定、プロンプトテンプレート管理を一元化します。',
    features: [
      'モデル一覧のワンクリックダウンロード・削除・稼働状況監視',
      'プロンプトテンプレート保存と即時テストチャット',
      'トークン生成速度（tokens/sec）とVRAM使用状況の可視化'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Ollama REST API'],
    demoUrl: '',
    githubUrl: 'https://github.com/toku0716'
  },
  'kids-sound-play': {
    title: 'Kids Sound Play (知育サウンドアプリ)',
    subtitle: '音と触覚で好奇心を刺激する幼児向けセーフティアプリ',
    year: '2025',
    category: 'WEB & アプリ',
    accentColor: '#d97706',
    icon: 'sparkle',
    description: 'カラフルな図形やキャラクターをタップすることで、音階や楽しい効果音が鳴る知育アプリ。余計な広告や外部リンクを排除し、親御さんが安心して渡せる設計を追求しました。',
    features: [
      'マルチタッチ対応による軽快な同時発音',
      '誤タップを防ぐチャイルドロックUI構造',
      '耳に優しいアコースティック調のサウンドプリセット'
    ],
    techStack: ['TypeScript', 'Web Audio API', 'Mobile UX', 'Accessibility'],
    demoUrl: '',
    githubUrl: 'https://github.com/toku0716'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLinksFilter();
  initWorksFilterAndSearch();
  initModal();
  initClipboardAndShare();
  initScrollSpy();
});

/* ==========================================================================
   Theme Management (Light / Dark)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const sunIcon = document.getElementById('sunIcon');
  const moonIcon = document.getElementById('moonIcon');

  const savedTheme = localStorage.getItem('portfolio_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;

  applyTheme(isDark);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentIsDark = document.documentElement.classList.contains('dark');
      applyTheme(!currentIsDark);
    });
  }

  function applyTheme(dark) {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio_theme', 'dark');
      if (sunIcon) sunIcon.style.display = 'block';
      if (moonIcon) moonIcon.style.display = 'none';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
      if (sunIcon) sunIcon.style.display = 'none';
      if (moonIcon) moonIcon.style.display = 'block';
    }
  }
}

/* ==========================================================================
   Links Category Filter (Link Hub)
   ========================================================================== */
function initLinksFilter() {
  const filterButtons = document.querySelectorAll('[data-link-filter]');
  const linkCards = document.querySelectorAll('.link-item, .link-card');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-link-filter');
      linkCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   Works Category Filter & Live Search
   ========================================================================== */
function initWorksFilterAndSearch() {
  const categoryButtons = document.querySelectorAll('[data-work-filter]');
  const searchInput = document.getElementById('worksSearchInput');
  const searchClear = document.getElementById('worksSearchClear');
  const workCards = document.querySelectorAll('.work-cell, .work-card');
  const noResultsEl = document.getElementById('worksNoResults');

  let currentCategory = 'all';
  let currentQuery = '';

  function filterWorks() {
    let visibleCount = 0;

    workCards.forEach((card) => {
      const cardCategory = card.getAttribute('data-category');
      const cardText = (card.textContent || '').toLowerCase();

      const matchesCategory = currentCategory === 'all' || cardCategory === currentCategory;
      const matchesSearch = !currentQuery || cardText.includes(currentQuery);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (noResultsEl) {
      noResultsEl.style.display = visibleCount === 0 ? 'block' : 'none';
    }

    if (searchClear) {
      searchClear.style.display = currentQuery ? 'block' : 'none';
    }
  }

  categoryButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      categoryButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-work-filter') || 'all';
      filterWorks();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentQuery = (e.target.value || '').trim().toLowerCase();
      filterWorks();
    });
  }

  if (searchClear && searchInput) {
    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      currentQuery = '';
      filterWorks();
      searchInput.focus();
    });
  }
}

/* ==========================================================================
   Project Detail Modal
   ========================================================================== */
function initModal() {
  const modalBackdrop = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const modalIcon = document.getElementById('modalIcon');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalYear = document.getElementById('modalYear');
  const modalCategory = document.getElementById('modalCategory');
  const modalDesc = document.getElementById('modalDesc');
  const modalFeatures = document.getElementById('modalFeatures');
  const modalTechTags = document.getElementById('modalTechTags');
  const modalDemoBtn = document.getElementById('modalDemoBtn');
  const modalGithubBtn = document.getElementById('modalGithubBtn');

  function openModal(projectId) {
    const data = projectsData[projectId];
    if (!data || !modalBackdrop) return;

    if (modalIcon) {
      modalIcon.style.backgroundColor = data.accentColor;
      const iconSvg = getIconSvg(data.icon, 24);
      modalIcon.innerHTML = iconSvg;
    }

    if (modalTitle) modalTitle.textContent = data.title;
    if (modalSubtitle) modalSubtitle.textContent = data.subtitle;
    if (modalYear) modalYear.textContent = `制作年: ${data.year}`;
    if (modalCategory) modalCategory.textContent = `カテゴリ: ${data.category}`;
    if (modalDesc) modalDesc.textContent = data.description;

    if (modalFeatures) {
      modalFeatures.innerHTML = data.features
        .map((f) => `<li class="modal-bullet-item"><span style="color:var(--accent-green);font-weight:bold;margin-right:4px;">✓</span><span>${f}</span></li>`)
        .join('');
    }

    if (modalTechTags) {
      modalTechTags.innerHTML = data.techStack
        .map((t) => `<span class="modal-tech-pill">${t}</span>`)
        .join('');
    }

    if (modalDemoBtn) {
      if (data.demoUrl) {
        modalDemoBtn.href = data.demoUrl;
        modalDemoBtn.style.display = 'inline-flex';
      } else {
        modalDemoBtn.style.display = 'none';
      }
    }

    if (modalGithubBtn) {
      if (data.githubUrl) {
        modalGithubBtn.href = data.githubUrl;
        modalGithubBtn.style.display = 'inline-flex';
      } else {
        modalGithubBtn.style.display = 'none';
      }
    }

    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Work card click listeners
  document.querySelectorAll('.work-cell, .work-card').forEach((card) => {
    card.addEventListener('click', (e) => {
      // Don't trigger modal if user directly clicked external link icon button inside card
      if ((e.target).closest('.icon-link-btn, .work-link-icon')) return;
      const projectId = card.getAttribute('data-project-id');
      if (projectId) openModal(projectId);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

/* ==========================================================================
   Clipboard Copy & Toast Notification & Share
   ========================================================================== */
function initClipboardAndShare() {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  const toastClose = document.getElementById('toastClose');
  let toastTimer = null;

  window.showToast = function (message) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    toast.classList.add('show');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  };

  if (toastClose) {
    toastClose.addEventListener('click', () => {
      if (toast) toast.classList.remove('show');
    });
  }

  // Copy buttons on link cards
  document.querySelectorAll('.copy-link-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const url = btn.getAttribute('data-url');
      const title = btn.getAttribute('data-title') || 'リンク';
      if (url) {
        navigator.clipboard.writeText(url).then(() => {
          window.showToast(`「${title}」のURLをコピーしました`);
        }).catch(() => {
          window.showToast('URLのコピーに失敗しました');
        });
      }
    });
  });

  // Contact email copy button
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = copyEmailBtn.getAttribute('data-email') || 'contact@example.com';
      navigator.clipboard.writeText(email).then(() => {
        window.showToast('メールアドレスをコピーしました');
      }).catch(() => {
        window.showToast('コピーに失敗しました');
      });
    });
  }

  // Share button in header
  const shareBtn = document.getElementById('shareBtn');
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      const shareData = {
        title: 'Yuuki | ZEN大学生・ソフトウェアエンジニア',
        text: 'ZEN大学生・ソフトウェアエンジニアYuukiのポートフォリオ兼リンク集です。',
        url: window.location.href
      };

      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        try {
          await navigator.share(shareData);
        } catch {
          // User dismissed dialog
        }
      } else {
        navigator.clipboard.writeText(window.location.href).then(() => {
          window.showToast('サイトURLをコピーしました');
        });
      }
    });
  }
}

/* ==========================================================================
   Navigation ScrollSpy
   ========================================================================== */
function initScrollSpy() {
  const sections = ['links', 'works', 'academic', 'skills', 'philosophy', 'contact'];
  const navLinks = document.querySelectorAll('.nav-item, .nav-link');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 200;
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
          break;
        }
      }
    }
  }, { passive: true });
}

/* ==========================================================================
   Icon SVG Helper (Pure SVG strings)
   ========================================================================== */
function getIconSvg(name, size = 20) {
  switch (name) {
    case 'heart-handshake':
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/><path d="m18 15-2-2"/><path d="m15 18-2-2"/></svg>`;
    case 'bot':
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`;
    case 'compass':
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`;
    case 'message-square-text':
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M13 8H7"/><path d="M17 12H7"/></svg>`;
    case 'cpu':
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>`;
    case 'layers':
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 12.5-8.58 3.91a2 2 0 0 1-1.66 0L2.6 12.5"/><path d="m22 17.5-8.58 3.91a2 2 0 0 1-1.66 0L2.6 17.5"/></svg>`;
    case 'terminal':
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>`;
    case 'sparkle':
    default:
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  }
}
