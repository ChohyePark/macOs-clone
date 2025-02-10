# MacOS Clone  
React로 구현한 MacOS 환경입니다.  

일반적인 데스크톱 UI, 배경화면 설정 기능을 제공하며, Dock의 아이콘을 클릭하면 다음과 같은 기능을 사용할 수 있습니다  
- 🏃 **런데이 아이콘**: 클릭하면 운동 기록을 확인할 수 있습니다.  
- ✉️ **이메일 아이콘**: 클릭하면 배경 음악이 재생되며, 작성한 편지를 볼 수 있습니다.  

앞으로도 더 많은 기능이 추가될 예정입니다. 😊


## 🍎 Demo
[Live Demo](https://chohyepark.github.io/macOs-clone/)를 클릭하면 서비스를 확인할 수 있습니다.

## Live Interaction 
<p align="center">
  <img src="https://github.com/user-attachments/assets/a42c8905-daeb-446d-8daf-e3b19a8e6ea0"
       alt="Image"
       width="650px">
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/847bdb8d-3878-45d1-9b6b-d6be67d70e6d"
       alt="Image"
       width="650px">
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/5821ad97-0d12-4f15-ae4a-f88279b556d0"
       alt="Image"
       width="650px">
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/ead4abdc-c3f8-4444-a53d-040ace81afd8"
       alt="Image"
       width="650px">
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

