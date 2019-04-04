# Git

## What is Git?
- 핀란드 소프트웨어 개발자 Linus Benedict Torvalds가 소스 관리를 효율적으로 하기위해 만든 버전관리도구 또는 형성관리도구로 DVCS (Distributed Version Control System)의 하나이다.
GitHub와는 완전히 다른 개념으로 GitHub은 원격저장소 (Remote Repository)이다.

## Why use?
1. 협업을 할 때, 코드가 길어질 수록, 많은 사람들이 참여할 수록 코드가 복잡해져 꼬인 코드, 오류, 충돌이 발생할 시 이를 다시 되돌려 이를 해결하기 위함.
2. 내가 작성한 코드의 이력을 관리할 수 있다.
3. 잘못된 시점을 찾아낼 수 있다.

## Git Structure
***Working Dir*** --- ***Stage*** --- ***Local Repository*** --- ***Remote Repository***
1. ***Working Dir*** - 현재 내가 작업하고 있는 컴퓨터의 directory or folder.
2. ***Stage*** - add 이후 .git의 object directory에 저장되는 곳. 이 곳에 올라야만 commit 가능.
3. ***Local Repository*** - commit 이후 저장되는 저장소. 커밋한 파일을 내 컴퓨터의 .git에 백업했다고 봐도 될듯.
4. ***Remote Repository*** - Git 사용시는 GitHub를 지칭하며, 다시말해 인터넷 저장소에 또 저장하여 안전하게 파일을 보관할 수 있는 곳.


## How to use?
1. 처음 Directory의 local repository로 지정하기 위해 `git init` 명령어로 .git 폴더 생성.
2. 새로운 작업을 하거나 작업이 수정되었을 시, 파일이 새로 추가되거나 파일 내용이 변경되었을 시 `git add *FileName*` 명령어를 입력하여 새로운 파일을 stage에 저장.
3. stage에 add된 파일의 집합, 파일 뭉치를 `git commit` 명령어를 입력하여 추후 shell에서 작성하도록 유도하는 변경 사항에 대한 세부내용을 작성 후 local repository에 저장.
    - 파일 하나씩 add후 하나씪 commit하는 경우도 있지만, 좋지 않은 방법으로 파일들을 add하여 stage에 저장한 뒤 한번에 커밋한다.
    - `git commit -m *간단한설명*`으로 작성할 수도 있지만, 자세한 내용을 적는게 좋으므로 `git commit`이후 세부내용을 자세히 작성하는 습관이 좋다.
4. `git remote add origin *url*`를 통해 원격 저장소와 연결 (origin에 대한 내용은 추후)
5. `git push (origin master)` 명령어로 원격저장소에 저장 요청.

## 추가 정리
1. `git status`라는 명령어를 쳤을 때, working directory의 내용만 바뀌었을 때는 *수정 전*이라고 나오며 add 이후에는 *수정 후*라고 나오고 local repository에 까지 저장완료했을 경우 변경사항이 없다고 나온다. (Working Directory, Stage, Local Repository의 내용이 모두 일치하기 때문)
2. `checkout`은 *HEAD*만 움직이는 것.
3. `reset`은 *HEAD*와 branch를 함께 움직이는 것. (차이 점 확인)
4. reset을 할 경우는 반드시 branch를 끼고 움직일 것. 단순히 hash name으로 commit 후 reset을 하게되면 작업 내용을 복구 할 수 없을 수 있음 (Garbage Collector)
5. 명령어 팁 : `HEAD^`는 HEAD 이전을 지칭 ( <ex> 이동시는 HEAD 이전으로 이동) / HEAD~'n'는 n번째 이전을 지칭 ( <ex> 이동시는 HEAD n번째 전으로 이동)
6. branch는 참조 변수이다.
7. `git log` 명령어 작성시 origin이 붙는 것이 원격 저장소 상의 최신 commit