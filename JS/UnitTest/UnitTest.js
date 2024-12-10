"use strict"; // 厳格モード構文

// クラス定義＆コンストラクタ
var UnitTest=UnitTest||function(){};
/*
UnitTest = function (){
  _Title : "UnitTest",
  _Case : "Case",
  _CaseNo : 0
};
*/

//  静的プロパティ
UnitTest.Title = "UnitTest";
UnitTest.Case = "Case";
UnitTest.CaseNo = 0;

UnitTest.start = function(p1,p2){
  //UnitTest.Title=p1;
  //UnitTest.Case=p2;
  UnitTest.CaseNo = 0;
  UnitTest.is(p1);
  UnitTest.is(p2);
}

UnitTest.is = function(p1){
  UnitTest.CaseNo = UnitTest.CaseNo + 1;
  var msg=UnitTest.Title+" "+UnitTest.Case+" "+UnitTest.CaseNo;
  console.log(p1,msg); 
  //p1||console.log(p1,msg); 
};

UnitTest.eq = function(p1,p2){
  return p1 === p2;
}
