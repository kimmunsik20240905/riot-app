# Riot Games Information App

## 프로젝트 개요
Riot Games API를 활용하여 리그 오브 레전드의 챔피언, 아이템, 로테이션 정보를 제공하고, 사용자가 원하는 정보를 손쉽게 확인할 수 있는 Next.js 기반 웹 애플리케이션입니다. 최신 Next.js 기능과 TypeScript, Tailwind CSS를 활용하여 개발되었습니다. 이 프로젝트는 GitHub에 저장하고, Vercel로 배포하였습니다.

- **제작 기간:** 2024.12.15 ~ 2024.12.19

---

## 기술 스택
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwind-css&logoColor=white)


---

## 페이지 구성 및 기능

### **공통사항**
- `src/app/layout.tsx`를 통해 네비게이션 메뉴 관리
- 스타일링은 Tailwind CSS로 구현
- 전체적으로 반응형 UI로 구현

---

### **페이지 구성**

#### **1. Home (메인 페이지)**
- **경로**: `/`
- **기능**: 
  - Riot Games API의 활용 정보를 소개
  - 주요 페이지로 이동할 수 있는 카드형 링크 제공 (챔피언 목록, 금주 로테이션, 아이템 목록)
  - 카드에는 각 페이지와 관련된 이미지를 표시

#### **2. Champions (챔피언 목록)**
- **경로**: `/champions`
- **기능**:
  - Riot Games API에서 가져온 챔피언 목록 데이터를 표시
  - 각 챔피언의 이름, 제목, 이미지가 포함된 카드형 UI
  - 카드 클릭 시 해당 챔피언의 상세 페이지로 이동
- **렌더링 방식**: ISR 렌더링

#### **3. Champion Rotation (금주 로테이션)**
- **경로**: `/rotation`
- **기능**:
  - 금주의 무료 로테이션 챔피언 목록을 표시
  - 각 로테이션 챔피언의 이름, 제목, 이미지가 포함된 카드형 UI
  - 카드 클릭 시 해당 챔피언의 상세 페이지로 이동
- **렌더링 방식**: `Tanstack Query`를 사용한 CSR 렌더링

#### **4. Items (아이템 목록)**
- **경로**: `/items`
- **기능**:
  - Riot Games API에서 가져온 아이템 목록 데이터를 표시
  - 각 아이템의 이름, 간략 설명, 이미지가 포함된 카드형 UI
  - 카드 클릭 시 해당 아이템의 상세 페이지로 이동
- **렌더링 방식**: SSG 렌더링

#### **5. Champion Detail (챔피언 상세)**
- **경로**: `/champions/:id`
- **기능**:
  - 선택한 챔피언의 상세 정보를 표시
  - 챔피언의 이름, 제목, 설명, 이미지, 스탯(공격력, 방어력 등) 표시
- **렌더링 방식**: SSR 렌더링

#### **6. Item Detail (아이템 상세)**
- **경로**: `/items/:id`
- **기능**:
  - 선택한 아이템의 상세 정보를 표시
  - 아이템의 이름, 설명, 이미지, 세부 효과 표시
  - HTML 형식의 설명 데이터를 렌더링하여 사용자에게 표시
- **렌더링 방식**: SSR 렌더링

---

## 프로젝트 결과물
- **배포 링크**: [Riot Games Information App](https://riot-app.vercel.app/)

**프로젝트에 대한 피드백과 개선 제안은 언제나 환영합니다!** 😊
