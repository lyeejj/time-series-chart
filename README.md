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

## 구현 설명

### 1. 차트 만들기

> ✅ **[Chart.tsx](https://github.com/lyeejj/time-series-chart/blob/main/src/components/Chart.tsx)**

- 데이터를 시각화하기 위한 차트 라이브러리로 Recharts를 선정했습니다.
- Recharts는 리액트와의 통합이 용이하고 커스텀이 가능합니다. 또한 문서화가 잘 되어 있어 쉽게 사용이 가능하다고 판단하여 사용하게 되었습니다.
- 공식문서에 나와있는 다양한 차트와 컴포넌트를 통해 편리하게 적용하여 구현할 수 있었습니다.

### 호버 기능 구현

> ✅ **[CustomTooltip.tsx](https://github.com/lyeejj/time-series-chart/blob/main/src/components/CustomTooltip.tsx)**

```tsx
<Tooltip content={<CustomTooltip />} />
```

- 기본 툴팁을 사용하지 않고 커스텀 툴팁을 만들어 호버 했을때 id, value_area, value_bar 데이터가 보일 수 있도록 만들었습니다.

### 필터링 기능 구현

> ✅ **[FilterBtnList.tsx](https://github.com/lyeejj/time-series-chart/blob/main/src/components/FilterBtnList.tsx), [Chart.tsx](https://github.com/lyeejj/time-series-chart/blob/main/src/components/Chart.tsx)**

```tsx
<Bar
	yAxisId="right"
	dataKey="value_bar"
	barSize={20}
	fill="#a8a4e5"
	onClick={chartData => handleSelectedId(chartData.id)}
>
	{chartData.map((entry, index) => (
		<Cell key={index} fill={entry.id === selectedId ? '#7871dd' : '#a8a4e5'} />
	))}
</Bar>
```

- 필터링 버튼 리스트 컴포넌트를 만들어 버튼 클릭시 동일한 id값을 가진 데이터 구역이 하이라이트되도록 만들었습니다.
- 선택된 id값과 데이터의 id값이 일치하는지 판단하여 차트의 데이터 구역의 색상을 변경시켜 효과를 주었습니다.
- 데이터 구역 클릭시에도 선택된 id값을 변경시켜 필터링 기능이 적용됩니다.

### 2. 관심사 분리와 재사용

- HttpClient 클래스를 만들어 변경에 유연하도록 구현했습니다.
- axios Instance를 활용했습니다.
- useChartData와 useFilterData 를 따로 생성하여 로직을 분리하여 구체화된 코드가 관리되도록 했습니다.
- useChartData : httpClient를 통해 데이터를 불러온 값과 id값들을 담기위해 new Set을 이용하여 중복없이 id값들을 담아 리턴해줍니다.
- useFilterData : 필터링에 필요한 선택된 id값과 함수들을 리턴해줍니다.

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
