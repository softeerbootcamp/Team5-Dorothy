# HMG소프티어부트캠프 5조 팀프로젝트: Dorothy

## 서비스 소개

### 배포: [dorothy-5z.site](http://dorothy-5z.site)</br>
<img src="https://user-images.githubusercontent.com/45064913/217983847-fbf53593-cdc2-47cb-9d43-1a4475503803.gif" width="100%">

**<p align="center">🧚‍♂️출석부, 공간대여 기능 탑재 공유오피스 관리 플랫폼🧚‍♀️**</br></p>
Dorothy는 위치기반 출석부, 실시간 공간대여 관리 기능을 탑재한 공유오피스 관리를 위한 플랫폼입니다!</br>
코드스쿼드의 시설 관리로부터 영감을 얻어 시작한 프로젝트로 코드스쿼드부터 다양한 공유 오피스를 지원할 수 있는 기능을 탑재하고 있습니다</br>

## 기능 소개

### 트랙 생성
![ezgif-2-1df9951af7](https://user-images.githubusercontent.com/45064913/220901949-5bcb0771-0e43-4716-80ab-b0e2386e75c2.gif)

### 출석 버튼
![ezgif-5-5d00f4a3fd](https://user-images.githubusercontent.com/45064913/220898950-1910ef60-7a22-48c7-aa42-e844f032ae90.gif)

### 공간 대여 
![ezgif-2-f12328d2d5](https://user-images.githubusercontent.com/45064913/220899965-e562a458-0930-40f1-ba72-a077daa54be7.gif)

### 월간 출석
![ezgif-2-4ec6d8b765](https://user-images.githubusercontent.com/45064913/220900946-c1fd2743-37b7-4cba-b47d-235d680f656c.gif)


## 기술 스택
FrontEnd</br>
- dev</br>
    <img src="https://img.shields.io/badge/HTML-E34F26?style=flat&logo=HTML5&logoColor=white"/>
    <img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=CSS3&logoColor=white"/>
    <img src="https://img.shields.io/badge/Scss-CC6699?style=flat&logo=Sass&logoColor=white"/>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/>
    <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=Axios&logoColor=white"/>
- Package Manager</br>
    <img src="https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white"/>
- Code Formatter</br>
    <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=Prettier&logoColor=white"/>
    <img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=ESLint&logoColor=white"/>
- Deploy</br>
    <img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=Vite&logoColor=white"/>

BackEnd</br>
- dev</br>
    <img src="https://img.shields.io/badge/Java-007396?style=flat&logo=OpenJDK&logoColor=white"/>
    <img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=flat&logo=SpringBoot&logoColor=white"/>
    <img src="https://img.shields.io/badge/JUnit5-25A162?style=flat&logo=JUnit5&logoColor=white"/>
    <img src="https://img.shields.io/badge/Mockito-25A162?style=flat&logo=Mocha&logoColor=white"/>
- DB</br>
    <img src="https://img.shields.io/badge/Redis-DC382D?style=flat&logo=Redis&logoColor=white"/>
    <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white"/>
- Deploy</br>
    <img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=flat&logo=Amazon EC2&logoColor=white"/>
    <img src="https://img.shields.io/badge/NGINX-009639?style=flat&logo=NGINX&logoColor=white"/>
    <img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=Docker&logoColor=white"/>
    
## API 명세
<img width="857" alt="스크린샷 2023-02-17 오전 11 54 08" src="https://user-images.githubusercontent.com/64524916/219537895-b758f170-6df9-4549-aabf-f5c657e67d54.png">

## 배포 아키텍처
![제목 없는 다이어그램 drawio](https://user-images.githubusercontent.com/64524916/219539878-ca17b5e7-9654-4a83-b269-2d6b22427921.png)

## SecurityFilter Architecture
![image](https://user-images.githubusercontent.com/64524916/217993894-2c75638d-e847-48c7-ad9f-a90d196909f6.png)

## 라이브러리
```
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
},
"devDependencies": {
    "@typescript-eslint/eslint-plugin": "^5.50.0",
    "@typescript-eslint/parser": "^5.50.0",
    "eslint": "^8.33.0",
    "eslint-config-prettier": "^8.6.0",
    "eslint-plugin-prettier": "^4.2.1",
    "prettier": "^2.8.3",
    "typescript": "^4.9.3",
    "vite": "^4.0.0"
},
"dependencies": {
    "axios": "^1.3.0",
    "sass": "^1.58.0"
}
```

## 디렉토리 구조
```
📂 frontend > src
├─ 📂 apis  ▶️ Axios 서버 통신 위한 파일 모음
├─ 📂 assets  ▶️ svg 등 이미지 파일 모음
├─ 📂 components  ▶️ 재사용되는 컴포넌트 별 스타일, 코드 모음
├─ 📂 pages  ▶️ 조건에 따라 라우팅되는 페이지
├─ 📂 store  ▶️ api 사용을 위한 axios 함수 모음
└─ 📂 styles ▶️ 공통적으로 사용되는 스타일 값
```
```
📂 backend > src
├─ 📂 main/java/dev/be/dorothy
│    ├─ 📂 aspect ▶️ distributed lock aspect 관련 클래스 모음 
│    ├─ 📂 attendance ▶️ 회원 출석 기능
│    ├─ 📂 common ▶️ 스케줄러, 공통 응답 객체 등 공통 관심 사항
│    ├─ 📂 config ▶️ configuration 관련 클래스 
│    ├─ 📂 exception ▶️ 커스텀 http exception 클래스 모음
│    ├─ 📂 mapper ▶️ mapStruct를 이용한 dto-entity 간 매핑
│    ├─ 📂 member ▶️ 회원 계정 관련 처리를 위한 클래스 모음
│    ├─ 📂 notice ▶️ 공지사항 기능
│    ├─ 📂 redis ▶️ 레디스 관련 config, Dao 클래스 정의
│    ├─ 📂 reservation ▶️ 공간 예약 기능
│    ├─ 📂 security ▶️ Security Filter 관련 클래스 모음
│    ├─ 📂 track ▶️ 트랙 선택, 조회 기능
│    └── DorothyApplication.java ▶️ main 함수  
└─ 📂 test ▶️ (설명)
```

## Documnetation
[<img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=White"/>](https://quilled-subway-cd9.notion.site/HMG-5-5-a119522089fc453c9cfea93db85002ca)</br>
[<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=Github&logoColor=White"/>](https://github.com/orgs/softeerbootcamp/projects/6/)

## 팀원 소개
<table border="" cellspacing="0" cellpadding="0">
    <tr width="100%">
        <td align="center"><a href= "https://github.com/solchan98">solchan</a></td>
        <td align="center"><a href= "https://github.com/miinjoo">김민주</a></td>
        <td align="center"><a href= "https://github.com/pjs0418">pjs0418</a></td>
        <td align="center"><a href= "https://github.com/hoonystory98">Taehun Jeong</a></td>
        <td align="center"><a href= "https://github.com/i5046821854">YoungShin Lee</a></td>
    </tr>
    <tr width="100%">
        <td  align="center"><img src = "https://avatars.githubusercontent.com/u/64524916?v=4" width="100px"/></td>
        <td  align="center"><img src = "https://user-images.githubusercontent.com/97172766/220890944-e95c8f45-c296-4e56-a10e-269fd0d6e972.png" width="100px" /></td>
        <td  align="center"><img src = "https://avatars.githubusercontent.com/u/33286894?v=4" width="100px"/></td>
        <td  align="center"><img src = "https://avatars.githubusercontent.com/u/45064913?v=4" width="100px" /></td>
        <td  align="center"><img src = "https://user-images.githubusercontent.com/97172766/220899825-c515be94-893f-4282-8a20-9a6007000d39.png" width="100px"/></td>
    </tr>
    <tr width="100%">
      <td align="center">
        BE
      </td>
      <td align="center">
        FE
      </td>
      <td align="center">
         BE
      </td>
      <td align="center">
        FE
      </td>
      <td align="center">
         BE
      </td>
   </tr>
</table>
