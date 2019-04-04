# GitHub - 협업시 사용하는 Fork 기능


## What is Fork?

- 다른 사람의 GitHub Repository를 Fork하여 다른 사람의 Remote Repository 내용을 변경 및 저장 할 수 있는 기능. (권한에 따라 다른 사람의 repository를 수정 할 수도 있지만, 수정 못 할 수도 있다.)


## Why use?

1. 2명, 5명, 10명 이상 등의 사람들과 협업 및 공동 프로젝트 시 사용한다.
2. 협업하는 사람들 각각의 코드를 개인 brach에서 관리 후 최종 중앙 관리자가 확인 하여 병합할 수 있어 원본파일 훼손을 막아 쾌적한 개발 가능. (유추)


## Fork Structure

***Main Remote Repository(Main 관리자)*** --- ***My Repository*** --- ***Local Repository***
1. ***Main Remote Repository(Main 관리자)*** - Fork한 Repository. Main 관리자. 처음 Repository를 만든 사람.
2. ***My Repository*** - 나의 Repository. Fork된 Repository. 추후 Local Repository에서 작업한 내용을 Push 후 Main Repository로 Pull Request를 전송하는 곳.
3. ***Local Repository*** - 내 컴퓨터의 Repository.


## How to use? (출처: [codesquad-docs](https://github.com/code-squad/codesquad-docs/tree/master/codereview))

1. 저장소 브랜치에 자신의 github 아이디에 해당하는 브랜치가 있는지 확인한다. 브랜치가 없는 경우 마스터에게 브랜치 생성을 요청한다. 
2. 프로젝트를 자신의 계정으로 fork한다. 저장소 우측 상단의 fork 버튼을 활용한다.
3. fork한 프로젝트를 자신의 컴퓨터로 clone한 후 디렉토리로 이동한다.

```js
git clone -b {본인_아이디} --single-branch https://github.com/{본인_아이디}/{저장소 아이디}
ex) git clone -b javajigi --single-branch https://github.com/javajigi/java-racingcar
```
4. 기능 구현을 위한 브랜치 생성

```js
git checkout -b 브랜치이름
ex) git checkout -b step1
```

5. 기능 구현 후 add, commit
6. 본인 원격 저장소에 올리기

```js
git push origin 브랜치이름
ex) git push origin step1
```

7. github 서비스에서 pull request를 보낸다.
    -pull request는 original 저장소의 브랜치(자신의 github 아이디)와 앞 단계에서 생성한 브랜치 이름을 기준으로 한다. pull request를 통해 피드백을 받으면 코드를 수정한 후 같은 브랜치에 add, commit, push 작업을 반복한다.

```js
ex) code-squad/java-racingcar javajigi 브랜치 기준 => javajigi/java-racingcar step1
```

8. 리뷰어는 피드백을 마무리하고 codesquad 저장소로 merge한다.
9. merge를 완료했다는 통보를 받으면 브랜치 변경 및 작업 브랜치 삭제(option)한다.

```js
git checkout 본인_아이디
git branch -D 삭제할_브랜치이름
ex) git checkout javajigi
ex) git branch -D step1
```

10. merge한 codesquad 저장소와 동기화하기 위해 codesquad 저장소 추가(최초 한번만)

```js
git remote add {저장소_별칭} base_저장소_url
ex) git remote add upstream https://github.com/code-squad/java-racingcar.git
// 위와 같이 codesquad 저장소를 추가한 후 전체 remote 저장소 목록을 본다.
git remote -v
```

11. codesquad 저장소에서 자기 브랜치 가져오기(또는 갱신하기)

```js
git fetch upstream {본인_아이디}
ex) git fetch upstream javajigi
```

12. codesquad 저장소 브랜치와 동기화하기

```js
git rebase upstream/본인_아이디
ex) git rebase upstream/javajigi
```

13. 4단계부터 다시 진행