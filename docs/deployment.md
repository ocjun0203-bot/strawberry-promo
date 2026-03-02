# 배포 가이드

## 아키텍처

```
git push origin main
    → GitHub Actions (.github/workflows/deploy.yml)
    → Netlify API 자동 배포
    → https://xxx.netlify.app
```

## 최초 설정 (1회만)

### 1. Netlify 사이트 생성
1. https://netlify.com 로그인
2. "Add new site" → "Deploy manually" → 프로젝트 폴더 드래그 업로드
3. 사이트 생성 후 **Site ID** 복사 (Site Configuration → Site ID)

### 2. Netlify 토큰 발급
1. Netlify → User Settings → Personal Access Tokens
2. "New access token" 클릭 → 이름 입력 후 발급
3. 토큰 값 복사 (한 번만 표시됨)

### 3. GitHub Secrets 등록
GitHub 저장소 → Settings → Secrets and variables → Actions → "New repository secret"

| Secret 이름 | 값 |
|------------|-----|
| `NETLIFY_AUTH_TOKEN` | 위에서 발급한 Netlify 토큰 |
| `NETLIFY_SITE_ID` | Netlify Site ID |

## 이후 배포 방법

```bash
git add .
git commit -m "변경 내용 설명"
git push origin main
# → GitHub Actions가 자동으로 Netlify에 배포
```

GitHub 저장소의 **Actions 탭**에서 배포 진행 상황을 확인할 수 있습니다.

## 수동 배포 (선택)

```bash
npm install         # 최초 1회
npm run deploy      # netlify-cli로 직접 배포
```

## Netlify Forms 확인

문의 폼 제출 데이터: Netlify 대시보드 → 해당 사이트 → **Forms 탭**

이메일 알림 설정: Forms 탭 → Form notifications → Add notification → Email
