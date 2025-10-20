# Weather App

React로 만든 날씨 앱입니다.

## 기능

- 현재 위치 기반 날씨 정보 표시
- 여러 도시의 날씨 정보 조회 (후쿠오카, 도쿄, 인천공항)
- 섭씨/화씨 온도 표시
- 실시간 날씨 설명

## 설치 및 실행

1. 프로젝트 클론
```bash
git clone [repository-url]
cd weather-app
```

2. 의존성 설치
```bash
npm install
```

3. 환경변수 설정
프로젝트 루트에 `.env` 파일을 생성하고 다음 내용을 추가하세요:
```
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```

4. 개발 서버 실행
```bash
npm run dev
```

## API 키 발급

OpenWeatherMap에서 무료 API 키를 발급받으세요:
1. https://openweathermap.org/api 접속
2. 회원가입 후 API 키 발급
3. `.env` 파일에 API 키 추가

## 기술 스택

- React
- Vite
- Bootstrap
- OpenWeatherMap API