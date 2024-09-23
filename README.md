# 실행 방법

1. node 버전 확인 (v20.12.1)

```bash
node -v
```

2. 버전이 다른 경우

- [nvm설치 및 사용법](https://sound-programming.tistory.com/186)
- 해당 링크에서 nvm을 가지고 version을 v20.12.1로 맞춘다.

3. 버전이 같은 경우

- node_modules 설치

```bash
npm install
```

- 실행

```bash
npm run dev
```

4. 문제 해결 내용

- third screen useEffect 의존성 문제
    <details>

  ### 문제 해결 요약

  - 이 코드는 **useCallback** 을 사용하여 불필요한 함수 재생성을 방지하고, 의존성 배열에 포함된 상태 변화에 따라 checkValid 함수가 효율적으로 실행되도록 최적화했습니다. 그러나 useCallback에서 사용하는 centuries와 continents 배열이 매 렌더링마다 새로 생성되어 의존성 배열이 변경된 것으로 인식되었고, 이를 해결하기 위해 **useMemo**로 상수 배열을 메모이제이션하여 참조가 유지되도록 했습니다. 이로 인해 useCallback이 불필요하게 재생성되지 않도록 최적화했습니다.

  - 해결 방법:

    1. useCallback 사용 이유:

       - checkValid 함수는 특정 상태(pickContinent, pickCentury)가 변경될 때만 실행되어야 합니다. **useCallback**을 사용하여 checkValid가 의존성 배열에 있는 값들이 변경될 때만 재생성되도록 하여, 함수 재생성을 방지하고 성능을 최적화했습니다.

    2. useMemo로 배열 메모이제이션:

       - centuries와 continents는 상수 배열로, 매 렌더링마다 새로 생성될 필요가 없습니다. 그러나 매 렌더링 시 새로운 참조가 생성되면 React는 의존성 배열이 변경된 것으로 판단하므로, 이를 해결하기 위해 **useMemo**로 두 배열을 메모이제이션했습니다. 이렇게 함으로써 렌더링 간에 동일한 참조를 유지하여 useCallback이 불필요하게 재생성되지 않도록 했습니다.

    3. 최적화된 useCallback:
       - checkValid 함수는 이제 useMemo로 메모이제이션된 centuries와 continents 배열을 참조하여, 필요할 때만 재생성되고 의존성 배열이 정확하게 관리됩니다. 이를 통해 상태 변경에 따라 필요한 경우에만 함수가 재생성되어 성능이 최적화되었습니다.

  - 결과:
    - 불필요한 재렌더링과 useCallback의 재생성 문제가 해결되었습니다.
    - useMemo를 통해 상수 배열의 참조를 유지하여 의존성 배열 관리가 개선되었고, useCallback은 상태 변경 시에만 효율적으로 재생성됩니다.
    - 전체적으로 React의 성능이 최적화되었습니다.
    </details>
