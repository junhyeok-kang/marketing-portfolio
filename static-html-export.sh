#!/bin/bash

# 프로젝트 빌드 및 내보내기
echo "정적 사이트 빌드 시작..."
npm run build

# GitHub Pages 저장소로 파일 복사
echo "GitHub Pages 저장소로 파일 복사 중..."
rm -rf ../junhyeok-kang.github.io/*
cp -R ./out/* ../junhyeok-kang.github.io/
touch ../junhyeok-kang.github.io/.nojekyll

echo "GitHub Pages 저장소로 변경사항 커밋 및 푸시 중..."
cd ../junhyeok-kang.github.io
git add .
git commit -m "feat: 포트폴리오 사이트 업데이트"
git push origin main

echo "배포 완료! GitHub Pages에서 사이트 확인: https://junhyeok-kang.github.io" 