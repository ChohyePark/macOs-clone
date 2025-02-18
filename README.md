# MacOS Clone  
저는 오랫동안 맥북을 사용하면서 Mac OS의 UI/UX에 깊은 인상을 받았습니다.<br/>
아이콘을 클릭할 때의 반응성, Dock의 자연스러운 확대/축소, 창이 부드럽게 열리고 닫히는 애니메이션 등, <br/>
단순한 디자인을 넘어 사용자 경험을 극대화하는 인터랙션이 돋보였습니다.

이러한 경험을 직접 구현해보고 싶었고, 이를 위해 Mac OS의 다양한 UI 요소를 리액트 컴포넌트 단위로 설계했습니다. <br/>
이렇게 하면 유지보수와 확장성이 용이할 뿐만 아니라, 개별 요소를 독립적으로 개발하고 최적화할 수 있기 때문에
리액트가 가장 적합한 선택이라고 판단했습니다.

일반적인 데스크톱 UI, 배경화면 설정 기능을 제공하며, Dock의 아이콘을 클릭하면 다음과 같은 기능을 사용할 수 있습니다.
- 🏃 **런데이 아이콘**: 클릭하면 운동 기록을 확인할 수 있습니다.  
- ✉️ **이메일 아이콘**: 클릭하면 배경 음악이 재생되며, 작성한 편지를 볼 수 있습니다.  

앞으로도 더 많은 기능이 추가될 예정입니다. 😊


## 🍎 Demo
[Live Demo](https://chohyepark.github.io/macOs-clone/)를 클릭하면 서비스를 확인할 수 있습니다.

## Live Interaction 
<p align="center">
  <img src="https://github.com/user-attachments/assets/a42c8905-daeb-446d-8daf-e3b19a8e6ea0"
       alt="Image"
       width="800px">
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/847bdb8d-3878-45d1-9b6b-d6be67d70e6d"
       alt="Image"
       width="800px">
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/5821ad97-0d12-4f15-ae4a-f88279b556d0"
       alt="Image"
       width="800px">
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/ead4abdc-c3f8-4444-a53d-040ace81afd8"
       alt="Image"
       width="800px">
</p>

## Stack
- Framework: React
- Language: JavaScript
- Library: Framer Motion
- Stylesheet: SCSS

## Folder Structure

```bash
src
 ┣ actions
 ┣ components
 ┃ ┣ Dock
 ┃ ┃ ┣ Dock.js
 ┃ ┃ ┗ Dock.scss
 ┃ ┣ DropDown
 ┃ ┃ ┣ DropDown.js
 ┃ ┃ ┗ DropDown.scss
 ┃ ┣ EmailMenu
 ┃ ┃ ┣ EmailMenu.js
 ┃ ┃ ┗ EmailMenu.scss
 ┃ ┣ LoadingWindow
 ┃ ┃ ┣ LoadingWindow.js
 ┃ ┃ ┗ LoadingWindow.scss
 ┃ ┣ NavBar
 ┃ ┃ ┣ NavBar.js
 ┃ ┃ ┗ NavBar.scss
 ┃ ┣ Page
 ┃ ┃ ┣ Page.js
 ┃ ┃ ┗ Page.scss
 ┃ ┣ PopUp
 ┃ ┃ ┣ PopUp.js
 ┃ ┃ ┗ PopUp.scss
 ┃ ┣ RundayMenu
 ┃ ┃ ┣ RundayMenu.js
 ┃ ┃ ┗ RundayMenu.scss
 ┃ ┗ WallpaperMenu
 ┃ ┃ ┣ WallPaperMenu.js
 ┃ ┃ ┗ WallPaperMenu.scss
 ┣ reducers
 ┃ ┣ initialState.js
 ┃ ┗ reducer.js
 ┣ resources
 ┃ ┣ fonts
 ┃ ┗ images
 ┣ utils
 ┃ ┗ helpers
 ┃ ┃ ┣ getDate.js
 ┃ ┃ ┣ getDropDownContent.js
 ┃ ┃ ┣ getRundays.js
 ┃ ┃ ┣ getWallPapers.js
 ┃ ┃ ┣ toggleMin.js
 ┃ ┃ ┗ toggleVis.js
 ┣ App.css
 ┣ App.js
 ┣ App.test.js
 ┣ index.css

```

