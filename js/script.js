/**
 * Yuuki - Portfolio & Link Hub
 * Pure JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
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
    }, 2800);
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

  // Share button in header
  const shareBtn = document.getElementById('shareBtn');
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      const shareData = {
        title: 'Yuuki | ポートフォリオ（ZEN大学生・ソフトウェアエンジニア）',
        text: 'ZEN大学生・ソフトウェアエンジニアYuukiの公式ポートフォリオです。',
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
  const sections = ['about', 'casestudy', 'academic', 'skills', 'links'];
  const navLinks = document.querySelectorAll('.nav-item');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 180;
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${id}`) {
              link.style.color = 'var(--text-main)';
              link.style.fontWeight = '700';
            } else {
              link.style.color = 'var(--text-muted)';
              link.style.fontWeight = '600';
            }
          });
          break;
        }
      }
    }
  }, { passive: true });
}
