/**
    nodejs 모듈에서 자주 발생하는 패턴으로서

    var fs = require("fs");

    위와 같이 모듈을 load하고 변수 fs를 사용하지 않는 경우임

    기존 UNUSED_VAR_ASSIGN 또는 UNUSED_DECL로 검출되었으나,
    해당하는 것을 별도의 규칙인 UNUSED_REQUIRE의 경보로 제공하기로 함
    - 좀 더 친절하고 상황에 맞는 경보 메시지
    - 규칙 집합 설정 편의

    사례 소개:
    g255.traceur-compiler의 UNUSED_REQUIRE

*/
