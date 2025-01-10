# Patch Note (10.15 / 3.1)
- 새로고침해도 듣던 노래 끊기지 않도록 변경

# Patch Note (10.13 / 3.1)
- 재생 수 조회 기능 추가
- 조회수 순(인기순)으로 정렬 


# Patch Note (10.12 / 3.1)
- 2025.01.07 수정본 배포
## Front
- list에 Lazy Loading 적용(필요한 곳만 렌더링)
- 브라우저의 IntersectionObserver지원 유무 확인 후 (지원하지 않으면 전체 한번에 렌더링)
- 성능 향상

## Back
- 동일


## 실행 명령어들
- ./run.sh
- ./delete.sh
- 
- docker run -d --name=mongodb -p 17017:27017 --restart=always --network=devapp-net sushijin/mongodb:3.1
- docker run -d --name=backend --network=devapp-net --restart=always -e PORT=8000 -e GUESTBOOK_DB_ADDR=mongodb:27017 sushijin/backend:10.12
- docker run -d --name=frontend -p 3000:8000 --network=devapp-net --restart=always -e PORT=8000 -e GUESTBOOK_API_ADDR=backend:8000 sushijin/frontend:10.12
- 
- docker cp frontend:/frontend ~/LABs/project/
- docker cp backend:/backend ~/LABs/project/
- 
- docker build -t sushijin/backend:10.12 .
- docker tag sushijin/backend:10.6 sushijin/backend:10.12
- docker push sushijin/backend:10.12
- 
- docker build -t sushijin/frontend:10.12 .
- docker tag sushijin/frontend:10.12 sushijin/frontend:10.12
- docker push sushijin/frontend:10.12



# Patch Note (10.11 / 3.1)

## Front
- 재생상태 저장 기능 구현(새로 고침해도 재생중인 시간 저장)+ 
- 로컬 저장유지 구현 / (세션 유지 철회)

## Back
- 동일


## 실행 명령어들
- ./run.sh
- ./delete.sh
- 
- docker run -d --name=mongodb -p 17017:27017 --restart=always --network=devapp-net sushijin/mongodb:3.1
- docker run -d --name=backend --network=devapp-net --restart=always -e PORT=8000 -e GUESTBOOK_DB_ADDR=mongodb:27017 sushijin/backend:10.11
- docker run -d --name=frontend -p 3000:8000 --network=devapp-net --restart=always -e PORT=8000 -e GUESTBOOK_API_ADDR=backend:8000 sushijin/frontend:10.11
- 
- docker cp frontend:/frontend ~/LABs/project/
- docker cp backend:/backend ~/LABs/project/
- 
- docker build -t sushijin/backend:10.11 .
- docker tag sushijin/backend:10.6 sushijin/backend:10.11
- docker push sushijin/backend:10.11
- 
- docker build -t sushijin/frontend:10.11 .
- docker tag sushijin/frontend:10.11 sushijin/frontend:10.11
- docker push sushijin/frontend:10.11


# Patch Note (10.8 / 3.1)

## Front
- 세션 저장 유지 구현중

## Back
- 동일


## 실행 명령어들
- ./run.sh
- ./delete.sh
- 
- docker run -d --name=mongodb -p 17017:27017 --restart=always --network=devapp-net sushijin/mongodb:3.1
- docker run -d --name=backend --network=devapp-net --restart=always -e PORT=8000 -e GUESTBOOK_DB_ADDR=mongodb:27017 sushijin/backend:10.6
- docker run -d --name=frontend -p 3000:8000 --network=devapp-net --restart=always -e PORT=8000 -e GUESTBOOK_API_ADDR=backend:8000 sushijin/frontend:10.6
- 
- docker cp frontend:/frontend ~/LABs/project/
- docker cp backend:/backend ~/LABs/project/
- 
- docker build -t sushijin/backend:10.6 .
- docker tag sushijin/backend:10.6 sushijin/backend:10.6
- docker push sushijin/backend:10.6
- 
- docker build -t sushijin/frontend:10.6 .
- docker tag sushijin/frontend:10.6 sushijin/frontend:10.6
- docker push sushijin/frontend:10.6

# Patch Note (10.6 / 3.1)

## Front
-다크 모드 토글 추가
-다크모드 직접 구현 - dark()는 마음대로 바꾸기에 직접 수정함



## 실행 명령어들
- ./run.sh
- ./delete.sh
- 
- docker run -d --name=mongodb -p 17017:27017 --restart=always --network=devapp-net sushijin/mongodb:3.1
- docker run -d --name=backend --network=devapp-net --restart=always -e PORT=8000 -e GUESTBOOK_DB_ADDR=mongodb:27017 sushijin/backend:10.6
- docker run -d --name=frontend -p 3000:8000 --network=devapp-net --restart=always -e PORT=8000 -e GUESTBOOK_API_ADDR=backend:8000 sushijin/frontend:10.6
- 
- docker cp frontend:/frontend ~/LABs/project/
- docker cp backend:/backend ~/LABs/project/
- 
- docker build -t sushijin/backend:10.6 .
- docker tag sushijin/backend:10.6 sushijin/backend:10.6
- docker push sushijin/backend:10.6
- 
- docker build -t sushijin/frontend:10.6 .
- docker tag sushijin/frontend:10.6 sushijin/frontend:10.6
- docker push sushijin/frontend:10.6


# Patch Note (10.5 / 3.1)

## Front
-재생 상태 표시 추가
-무음 상태에서도 재생상태 체크 가능



## 실행 명령어들
- ./run.sh
- ./delete.sh
- 
- docker run -d --name=mongodb -p 17017:27017 --restart=always --network=devapp-net sushijin/mongodb:3.1
- docker run -d --name=backend --network=devapp-net --restart=always -e PORT=8000 -e GUESTBOOK_DB_ADDR=mongodb:27017 sushijin/backend:10.5
- docker run -d --name=frontend -p 3000:8000 --network=devapp-net --restart=always -e PORT=8000 -e GUESTBOOK_API_ADDR=backend:8000 sushijin/frontend:10.5
- 
- docker cp frontend:/frontend ~/LABs/project/
- docker cp backend:/backend ~/LABs/project/
- 
- docker build -t sushijin/backend:10.5 .
- docker tag sushijin/backend:10.5 sushijin/backend:10.6
- docker push sushijin/backend:10.5
- 
- docker build -t sushijin/frontend:10.5 .
- docker tag sushijin/frontend:10.5 sushijin/frontend:10.5
- docker push sushijin/frontend:10.5

# Patch Note (10.4 /3.1)
- 다크모드 추가 - dark()를 통한 구현
## Front
- Back에서 데이터 리스트 잘 받아와지는지 확인 후 개선
- 데이터 컬럼 추가

## Back
- DB → Backend에서 데이터 받는 조건을 완화 시킴
- `index.js` 데이터 컬럼 추가

## DB

- 1. 데이터는 잘 들어갔으나  Back에서 데이터를 받아들이지 못하는 오류 발생
        a. 원인: backend/index.js에서 새로 추가된 두 컬럼의 타입을 Number로 명시하였으나 데이터 삽입 중 import.js로 인해 string 타입으로 기입됨
            (타입 에러) --> import.js에 데이터 변환 로직 추가
    
- 2. 데이터 타입 변경후에도 데이터 받지 못함
        b. 원인: views(조회 수)의 기본값으로 전부 0 으로 설정하였다 --> 0을 false로 인식해서 데이터를 못받아들임
            (해결) --> 기본 값 0을 1로 수정


## 실행 명령어들
- ./run.sh
- ./delete.sh
- 
- docker run -d --name=mongodb -p 17017:27017 --restart=always --network=devapp-net sushijin/mongodb:3.1
- docker run -d --name=backend --network=devapp-net --restart=always -e PORT=8000 -e GUESTBOOK_DB_ADDR=mongodb:27017 sushijin/backend:10.4
- docker run -d --name=frontend -p 3000:8000 --network=devapp-net --restart=always -e PORT=8000 -e GUESTBOOK_API_ADDR=backend:8000 sushijin/frontend:10.4
- 
- docker cp frontend:/frontend ~/LABs/project/
- docker cp backend:/backend ~/LABs/project/
- 
- docker build -t sushijin/backend:10.4 .
- docker tag sushijin/backend:10.4 sushijin/backend:10.4
- docker push sushijin/backend:10.4
- 
- docker build -t sushijin/frontend:10.4 .
- docker tag sushijin/frontend:10.4 sushijin/frontend:10.4
- docker push sushijin/frontend:10.4


# Patch Note (10.2 /3.1)
## Front
- 쿠버네티스 마이그레이션을 위해 구조 소폭 변경

## Back
- DB → Backend에서 데이터 받는 조건을 완화 시킴
- `index.js` 데이터 컬럼 추가


## DB
- DB 구조에 `tracknum`, `views` 컬럼 추가:
  ```json
  {
    "_id": {
      "$oid": "677559f78ff1878a393986dc"
    },
    "mp3": "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/559/aktiv-1698886854-uBxD5BMO42.mp3",
    "title": "AKTIV",
    "artist": "4URA & VinDon",
    "slength": "2:37",
    "image": "https://i1.sndcdn.com/artworks-MAta6tCqg2nfn428-xBYydQ-t500x500.jpg",
    "tracknum": 10,
    "views": 1
  }


## 실행 명령어들
- ./run.sh
- ./delete.sh
- 
- docker run -d --name=mongodb -p 17017:27017 --restart=always --network=devapp-net sushijin/mongodb:3.1
- docker run -d --name=backend --network=devapp-net --restart=always -e PORT=8000 -e GUESTBOOK_DB_ADDR=mongodb:27017 sushijin/backend:10.2
- docker run -d --name=frontend -p 3000:8000 --network=devapp-net --restart=always -e PORT=8000 -e GUESTBOOK_API_ADDR=backend:8000 sushijin/frontend:10.2
- 
- docker cp frontend:/frontend ~/LABs/project/
- docker cp backend:/backend ~/LABs/project/
- 
- docker build -t sushijin/backend:10.3 .
- docker tag sushijin/backend:10.3 sushijin/backend:10.3
- docker push sushijin/backend:10.3
- 
- docker build -t sushijin/frontend:10.3 .
- docker tag sushijin/frontend:10.3 sushijin/frontend:10.3
- docker push sushijin/frontend:10.3


# Patch Note (10.1 /3.1)

## DB
- DB 구조에 `tracknum` 컬럼 추가:
  ```json
  {
    "_id": {
      "$oid": "677559f78ff1878a393986dc"
    },
    "mp3": "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/559/aktiv-1698886854-uBxD5BMO42.mp3",
    "title": "AKTIV",
    "artist": "4URA & VinDon",
    "slength": "2:37",
    "image": "https://i1.sndcdn.com/artworks-MAta6tCqg2nfn428-xBYydQ-t500x500.jpg",
    "tracknum": 10
  }


## 실행 명령어들
- ./run.sh
- ./delete.sh
- 
- docker run -d --name=mongodb -p 17017:27017 --restart=always --network=devapp-net sushijin/mongodb:3.1
- docker run -d --name=backend --network=devapp-net --restart=always -e PORT=8000 -e GUESTBOOK_DB_ADDR=mongodb:27017 sushijin/backend:10.2
- docker run -d --name=frontend -p 3000:8000 --network=devapp-net --restart=always -e PORT=8000 -e GUESTBOOK_API_ADDR=backend:8000 sushijin/frontend:10.2
- 
- docker cp frontend:/frontend ~/LABs/project/
- docker cp backend:/backend ~/LABs/project/
- 
- docker build -t sushijin/backend:10.3 .
- docker tag sushijin/backend:10.3 sushijin/backend:10.3
- docker push sushijin/backend:10.3
- 
- docker build -t sushijin/frontend:10.3 .
- docker tag sushijin/frontend:10.3 sushijin/frontend:10.3
- docker push sushijin/frontend:10.3



