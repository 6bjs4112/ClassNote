import React from 'react'

export default function GitDeploy() {
    return (
    <> 
        <h2>Git 배포</h2>
        * https://git-scm.com 접속해서 다운 (윈도우 64)<br />
        * 설치 후 인증<br />
        &nbsp;&nbsp;&nbsp; ㄴgit config --global user.name 'git계정명'<br />
        &nbsp;&nbsp;&nbsp; ㄴgit config --global user.email 'git이메일'<br />
        <hr />

        <h2>Github 레파지토리 생성 및 업로드</h2>
        * git init ( 현재 작업 폴더를 Github에 연결)<br />
        * git add 파일명 / git add . ( 수정된 모든 파일 )<br />
        * git commit -m "기록할 메세지" ( add할 파일들을 스테이지에 올림 )<br />
        * git branch main ( 사용자 )<br />
        * git remote add origin https://github.com/6bjs4112/react-basic.git ( 레파지토리 재연결 )<br />
        &nbsp;&nbsp;&nbsp; ㄴgit remote set-url origin https://내 레파지토리 url ( 수정 )<br />
        &nbsp;&nbsp;&nbsp; ㄴgit remote -v ( 연결된 레파지토리 URL 확인 )<br />
        * git push origin main ( 레파지토리에 업로드 )<br />
        ----<br />
        * git pull origin main ( 레파지토리의 내용을 로컬에 다운로드 )<br />
        * git status ( 깃 현재 상태 확인 )<br />
        <hr />

        <h2>gh-pages</h2>
        * react모듈 설치 ( npm i gh-pages )<br />
        * package.json 설정<br />
        &nbsp;&nbsp;&nbsp;ㄴ"homepage": "https://6bjs4112.github.io/react-basic",<br />
        &nbsp;&nbsp;&nbsp;ㄴ"scripts": &#123;"predeploy": "npm run build"&#125;<br />
        &nbsp;&nbsp;&nbsp;ㄴ"scripts": &#123;"deploy": "gh-pages -d build"&#125;<br />
        * App.js 가서 (basename 설정) BrowserRouter basename='/레파지토리명'<br /><br />
        * 터미널창 (npm run build > npm run deploy)
    </>
    )
}
