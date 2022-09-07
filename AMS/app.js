// AWS EC2 배포하기

// 1. EC2 ubuntu로 인스턴스
// AWS 페이지에 로그인하고 서비스 탭 옆에 EC2 검색

// mysql 설치 명령어
// 우분투 서버를 업데이트 하고 그리고 mysql-server 설치
// sudo apt-get update
// sudo apt-get install mysql-server

// EC2 우분투 mysql 접속

// sudo mysql -u root -p 

// DB세팅

// 1. 사용할 DB하나 만들어주자
// create database 이름

// 확인
// show databases;

// 사용할 유저 생성
// create user 'rnr9928'@'%' identified by '9928';

// 만든 유저에게 DB권한을 주자
// grant all on mydb.* to 'rnr9928'@'%';

// 권한이 주어졌는지 확인
// show grants for 'rnr9928';


// 인스턴스 페이지
// 하단에 보안 탭 클릭
// 보안 그룹 클릭

// 인바운드 규칙 : 네트워크에 들어오는 정보
// 클라이언트에서 서버로 향하는 것

// 아웃바운드 규칙 : 네트워크에서 나가는 정보
// 클라이언트에서 요청하고 서버에서 클라이언트로 다시 보내주는 것

// sudo vi /etc/mysql/mysql.conf.d/mysqld.cnf;
// :wq! 저장 후 종료


// 워크 벤치 키고
// connection 추가

// connection 옵션은 hostname에 인스턴스 퍼블릭 IPv4 DNS 주소 입력

// port 는 3306번

// mysql 서버 재실행 해줘야함
// sudo service mysql restart