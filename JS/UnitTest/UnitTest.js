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
  var msg=UnitTest.Title+" "+UnitTest.Case+" "+UnitTest.CaseNo;
  p1||console.log(p1,msg);
  return p1;  
};
