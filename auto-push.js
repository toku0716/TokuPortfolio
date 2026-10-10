const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

// 監視対象ファイル
const WATCH_FILES = ['index.html', 'style.css', 'space-3d.js', 'README.md'];
const DEBOUNCE_MS = 2000; // 変更後2秒待機（連続入力をまとめる）

let timer = null;
let isProcessing = false;

console.log('👀 [Auto Commit & Push] ファイル監視を開始しました...');
console.log('📝 監視対象:', WATCH_FILES.join(', '));
console.log('💡 VS Code でファイルを編集・保存すると、自動でコミット＆プッシュされます。');
console.log('--------------------------------------------------');

function autoCommitAndPush() {
    if (isProcessing) return;
    isProcessing = true;

    try {
        // 変更があるか確認
        const status = execSync('git status --porcelain', { encoding: 'utf-8' }).trim();
        if (!status) {
            isProcessing = false;
            return;
        }

        console.log('\n⚡️ 変更を検知しました。自動コミット＆プッシュを開始します...');
        
        // 変更されたファイル一覧を取得
        const changedFiles = status.split('\n').map(line => line.trim().split(' ').pop()).join(', ');
        const timestamp = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });
        const commitMsg = `auto: update ${changedFiles} (${timestamp})`;

        // git add & commit & push
        execSync('git add index.html style.css space-3d.js README.md 2>/dev/null || git add .');
        execSync(`git commit -m "${commitMsg}"`, { stdio: 'inherit' });
        console.log('🚀 GitHub へプッシュ中...');
        execSync('git push', { stdio: 'inherit' });
        
        console.log(`✅ [${timestamp}] 自動プッシュが完了しました！\n`);
    } catch (err) {
        console.error('❌ エラーが発生しました:', err.message);
    } finally {
        isProcessing = false;
    }
}

// ファイル監視の登録
WATCH_FILES.forEach(file => {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
        fs.watch(fullPath, (eventType) => {
            if (eventType === 'change' || eventType === 'rename') {
                if (timer) clearTimeout(timer);
                timer = setTimeout(autoCommitAndPush, DEBOUNCE_MS);
            }
        });
    }
});
