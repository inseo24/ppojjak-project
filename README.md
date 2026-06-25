# ppojjak-project
뽀짝뽀짝 잠이 안올 때

## 포트폴리오 사이트

[danielsun.space](https://danielsun.space/) 스타일의 구조를 참고한 Next.js 기반 1페이지 포트폴리오입니다.
모든 텍스트/이미지 콘텐츠는 `src/data/data.json` 한 파일에서 관리합니다.

### 콘텐츠 수정하기

`src/data/data.json`을 열어 원하는 값만 바꾸면 됩니다. 예: 프로젝트 1번 이름/태그/이미지는
`work.projects[0]`의 `name_1`, `tags_1`, `image_1`. 이미지 파일은 `public/images/`에 넣고
경로(`/images/파일명`)를 적어주면 됩니다.

### 로컬 실행

```bash
npm install
npm run dev
```

### Vercel 배포

1. https://vercel.com 에서 GitHub로 로그인 후 "Add New Project"
2. `inseo24/ppojjak-project` 저장소 선택, Import
3. Framework Preset: Next.js (자동 감지), 기본 설정 그대로 Deploy
4. 이후 이 브랜치/main에 push할 때마다 자동으로 재배포됩니다 (Vercel Git 연동)
