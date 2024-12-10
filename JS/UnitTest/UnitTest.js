"use strict";

// クラス定義＆コンストラクタ
var UnitTest = function (){
  _Title : "UnitTest",
  _Case : "Case",
  _CaseNo : 1
};

//  静的プロパティ
UnitTest.Title = "UnitTest";
UnitTest.Case = "Case";
UnitTest.CaseNo = 1;

UnitTest.assert = function(p1){
  if (!condition) {
    console.assert(p1,UnitTest.Title+UnitTest.Case+UnitTest.CaseNo);
  }
  return p1;
};
