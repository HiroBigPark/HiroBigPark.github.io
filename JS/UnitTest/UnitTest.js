"use strict"; // 厳格モード構文

// クラス定義＆コンストラクタ
var UnitTest=UnitTest||function(){};
/*
UnitTest = function (){
  _Title : "UnitTest",
  _Case : "Case",
  _CaseNo : 1
};
*/

//  静的プロパティ
UnitTest.Title = "UnitTest";
UnitTest.Case = "Case";
UnitTest.CaseNo = 1;

UnitTest.assert = function(p1){
  //(!p1)||true?
  var msg="テスト";
  //var msg=""+UnitTest.Title+UnitTest.Case+UnitTest.CaseNo;
  console.assert(p1,"テスト");
  return p1;
};
