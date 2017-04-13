/**

  nodejs 모듈로 탐지하여 해당 파일들에 대한 검출력을 높임

  * 정확히 nodejs 모듈로 의도한 경우만 탐지
   - benchmark에서 총 7401개의 파일이 nodejs 모듈로 탐지됨

  * 추가된 경보 갯수: 총 558개
   - ASSIGN_SAME_VALUE:    1
   - CONSTANT_CONDITION:   8
   - UNUSED_DECL:         61
   - UNUSED_VAR_ASSIGN:   29
   - UNUSED_REQUIRE:     416

 * 사례 소개
   g039.BrowserQuest의 CONSTANT_CONDITION 경보

*/
