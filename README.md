# Time-Series-Chart Assignment

리액트와 차트 라이브러리를 이용하여 시계열 차트를 구현한 프로젝트입니다

## 실행 방법

```jsx
npm install
npm start
```

## 구현 화면
<img width='680px' alt="chart-assignment" src="https://github.com/lyeejj/time-series-chart/assets/72495998/7a27e391-5b5b-4c59-a165-9104512f25b3" />

🔗 [배포 링크](https://time-series-chart-project.vercel.app/)


## 기술 스택 및 사용한 라이브러리

기술 스택

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/Emotion-DB7093?style=for-the-badge&logo=Emotion&logoColor=white"/> <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"/> <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"/> <img src="https://img.shields.io/badge/husky-FF4088?style=for-the-badge&logo=hugo&logoColor=white">

추가 라이브러리

<img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/> <img src="https://img.shields.io/badge/Recharts-FF6384?style=for-the-badge&logo=Recharts&logoColor=white"/>

## 폴더 구조

```
📦src
 ┣ 📂api
 ┃ ┗ 📜httpClient.ts
 ┣ 📂components
 ┃ ┣ 📜Chart.tsx
 ┃ ┣ 📜CustomTooltip.tsx
 ┃ ┗ 📜FilterBtnList.tsx
 ┣ 📂constants
 ┃ ┗ 📜constants.ts
 ┣ 📂hooks
 ┃ ┣ 📜useChartData.tsx
 ┃ ┗ 📜useFilterId.tsx
 ┣ 📂pages
 ┃ ┣ 📜ChartPage.tsx
 ┃ ┗ 📜NotFoundPage.tsx
 ┣ 📂styles
 ┃ ┗ 📜globalStyle.ts
 ┣ 📂types
 ┃ ┗ 📜index.ts
 ┣ 📂utils
 ┃ ┗ 📜getDate.ts
 ┣ 📜App.tsx
 ┗ 📜index.tsx
```
