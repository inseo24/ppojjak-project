# Animation Audit — danielsun.space 구조/모션 참고

> 목적: danielsun.space의 **구조 / UX 흐름 / 레이아웃 / 타이포그래피 계층 / 카드 구성 / 애니메이션 패턴**만 참고해
> 현재 프로젝트(더미 콘텐츠, "Jordan Lake" 페르소나)에 적용한다. 브랜드명·로고·이미지·실제 프로젝트명·이메일·문구는
> 복사하지 않는다.

## 1. 관찰 환경

- desktop viewport: 1440×900
- mobile viewport: 390×844
- 참고 사이트는 **Framer**로 빌드되어 있어 (`<meta name="generator" content="Framer ...">`) 런타임 모션 로직이
  난독화된 JS 번들 안에 있다. 정확한 곡선/딜레이 수치를 코드 레벨로는 추출할 수 없으므로, 아래 표는 Framer의
  기본 "Appear/whileInView" 프리셋 관례와 실측 관찰을 바탕으로 한 스펙이다 (사용자 제공 기준 스펙 반영).

## 2. 현재 배포 사이트(머지 전 버전) vs 참고 사이트 비교

| 항목 | 현재 사이트(이전) | 참고 사이트 | 격차 |
| --- | --- | --- | --- |
| Floating nav 진입 | 애니메이션 없음(즉시 표시) | opacity/translateY/scale 페이드인 | 추가 필요 |
| Hero 배경 | 단색 `#f5f5f5` | yellow/cream radial gradient | 추가 필요 |
| Hero 타이틀 크기 | 고정 `text-7xl`~`text-[10rem]` (브레이크포인트 점프) | `clamp()` 기반 연속 스케일링, line-height 0.9 | 보정 필요 |
| 섹션 padding | `py-28` 고정 | 화면폭에 비례하는 넉넉한 padding | `clamp()`로 보정 |
| 프로젝트 카드 hover | 이미지만 살짝 scale | 카드 자체 lift(y) + 이미지 scale + shadow | 추가 필요 |
| 카드/섹션 reveal | 단일 IntersectionObserver, opacity+y만 | stagger, 카드별 scale/rotate 보정 포함 | 보정 필요 |
| 모바일 메뉴 | nav 자체 숨김, 메뉴 버튼/패널 없음 | Menu 버튼 → 패널 오픈, ESC/외부 클릭 닫힘 | 신규 구현 필요 |
| reduced motion | CSS `@media (prefers-reduced-motion)`로 transform 제거 | 동일 패턴 추정 | 유지 + 컴포넌트 레벨 보강 |

## 3. 모션 스펙 표

| 요소 | 트리거 | 초기 상태 | 최종 상태 | duration | delay | easing | 구현 방법 | 현재 사이트 문제 | 수정 방향 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Floating Nav | page load | opacity 0, y -16, scale .96 | opacity 1, y 0, scale 1 | 0.5s | 0.1s | easeOut (custom bezier) | Framer Motion (`motion.header`) | 진입 애니메이션 없이 바로 표시됨 | `initial`/`animate`로 헤더에 페이드+스케일 추가 |
| Hero intro text | page load | opacity 0, y 24 | opacity 1, y 0 | 0.5s | 0.2s | cubic-bezier(.22,1,.36,1) | Framer Motion (`Reveal` + `fadeUpSmall`) | 즉시 표시, 강약 없음 | Reveal로 래핑, delay 200ms |
| Hero huge title | page load | opacity 0, y 36 | opacity 1, y 0 | 0.65s | 0.35s | cubic-bezier(.22,1,.36,1) | Framer Motion (`Reveal` + `fadeUp`) | 브레이크포인트 점프형 폰트, 등장 애니메이션 없음 | `clamp()` 타이포 + Reveal 진입 |
| Hero decorative visuals | page load | opacity 0, scale .92, rotate -3deg | opacity 1, scale 1, rotate 0 | 0.9s | stagger 80ms | easeOut | Framer Motion (`Reveal` + `popIn`) | 정적 이미지, 등장 효과 없음 | `popIn` variant로 순차 등장 |
| Section heading | scroll in | opacity 0, y 32 | opacity 1, y 0 | 0.65s | 0s | cubic-bezier(.22,1,.36,1) | `whileInView` (`Reveal` + `fadeUp`) | 기존에도 opacity+y만 있었음(유지) | 동일 패턴 유지, viewport amount 0.2 |
| Project cards | scroll in | opacity 0, y 48, scale .98 | opacity 1, y 0, scale 1 | 0.6s | stagger 80ms | cubic-bezier(.22,1,.36,1) | `whileInView` (`Reveal` + `cardEntrance`) | 카드별 delay만 있고 scale 변화 없었음 | `cardEntrance` variant로 scale 추가 |
| Project card | hover | y 0, shadow 기본, image scale 1 | y -6px, shadow 증가, image scale 1.035 | 0.24~0.4s | 0s | ease | CSS transition (`.project-card`) | 이미지 scale만 있고 카드 lift/shadow 없었음 | `.project-card`/`.preview img` 클래스로 lift+shadow+이미지 스케일 분리 적용 |
| Button / CTA | hover | scale 1, shadow 기본 | scale 1.05, shadow/glow 증가 | 0.2s | 0s | ease-out | CSS transition (Tailwind utility) | scale만 있고 glow 없었음 | `hover:shadow-xl hover:shadow-accent/30` 추가 |
| Nav item | hover | 기본 텍스트 색 | accent 색상으로 전환 | 0.2s | 0s | ease | CSS transition | 색상 전환만 존재(유지 가능한 수준) | 그대로 유지, padding으로 hit-area만 보강 |
| Mobile menu | click | opacity 0, y -8 | opacity 1, y 0 | 0.3s | 0s | cubic-bezier(.22,1,.36,1) | Framer Motion `AnimatePresence` | 모바일 메뉴 자체가 없었음(데스크톱 nav가 그냥 사라짐) | Menu 버튼 + 패널 신규 구현, ESC/항목 클릭 시 닫힘, body scroll lock |
| Story/Process visual cards | scroll in | opacity 0, y 32, rotate -2deg | opacity 1, y 0, rotate 0 | 0.75s | stagger 80~140ms | easeOut | Framer Motion (`Reveal` + `fadeUpTilt`/`popIn`) | rotate 보정 없이 단순 페이드만 있었음 | portrait·sunburst 카드에 `fadeUpTilt`/`popIn` 적용 |
| Footer/social links | hover | opacity/underline 없음 | color 전환 + y -2px | 0.2s | 0s | ease | CSS transition (`.footer-link`) | hover 시 색상만 전환, 이동감 없었음 | `.footer-link`에 `translateY(-2px)` 추가 |

## 4. 구현 메모

- 공용 모션 프리셋은 `src/lib/motion.ts`에 모아 재사용한다 (`easeOutExpo`, `fadeUp`, `fadeUpSmall`,
  `fadeUpTilt`, `popIn`, `cardEntrance`, `staggerContainer`).
- 스크롤 reveal은 `src/components/Reveal.tsx`(Framer Motion `whileInView`, `viewport={{ once: true, amount: 0.2 }}`)
  로 통일했다. `useReducedMotion()`이 true면 opacity만 즉시 전환되는 변형으로 치환된다(transform 계열 제거).
- 카드 hover는 transform/box-shadow만 사용해 레이아웃 시프트가 생기지 않도록 했고, 이미지 스케일은 `overflow-hidden`
  래퍼(`.preview`) 안에서만 일어나도록 분리했다.
- 모바일 메뉴는 `AnimatePresence` + `Escape` 키 리스너 + `body.style.overflow = "hidden"` 스크롤 락을 추가했고,
  메뉴 항목 클릭 시 자동으로 닫힌다.
- `@media (hover: none)`로 터치 디바이스에서는 카드/링크의 transform 기반 hover가 발생하지 않도록 했다.

## 5. 검증 체크리스트

- [x] `npm run build` 통과 (TypeScript/Turbopack)
- [x] desktop 1440×900에서 hero 진입 시 nav → intro text → title → role tag 순서로 단계적 등장
- [x] 스크롤 시 section heading, project card가 순차(stagger)로 등장
- [x] project card hover 시 y 이동 + 이미지 스케일 + shadow 동시 적용, 레이아웃 시프트 없음
- [x] CTA 버튼 hover 시 scale + shadow glow 적용
- [x] mobile 390×844에서 hero title이 컨테이너를 벗어나지 않음 (`clamp(64px, 14vw, 200px)`)
- [x] mobile 메뉴: Menu 버튼 클릭 → 패널 오픈(slide+fade), 항목 클릭 시 자동 닫힘, ESC로도 닫힘, 열려있는 동안 배경 스크롤 잠금
- [x] `prefers-reduced-motion: reduce`에서 transform 기반 효과 제거(opacity만 즉시 전환)
- [x] 원본 사이트의 이름("Daniel Sun"), 이메일(`hello@danielsun.space`), 실제 프로젝트명 등을 더미 콘텐츠
      ("Jordan Lake", `hello@jordanlake.dev`, Lumen/Pulsewave/... 등)로 교체

## 6. 남은 한계 / 추가 개선 포인트

- Framer 런타임 코드를 직접 디버깅할 수 없어 정확한 ms/이징 수치는 합리적 추정치이며, 1:1 수치 복제는 아니다.
- 카드 그리드는 현재 2열(desktop)/1열(mobile)로 고정되어 있어, 참고 사이트처럼 카드 크기가 섹션마다 다른
  비대칭 그리드는 구현하지 않았다 (콘텐츠 구조를 크게 바꾸지 않기 위한 의도적 보류).
- 데스크톱 커서 반응형 효과(예: 마우스 추적형 살짝 기울이는 카드)는 적용하지 않았다 — 참고 사이트에서도
  명확히 확인되지 않았고, 과한 모션을 피하라는 요구사항과도 맞지 않아 보류.
