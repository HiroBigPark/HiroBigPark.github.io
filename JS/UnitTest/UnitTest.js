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

//  静的メソッド

UnitTest.is = function(p1){
  UnitTest.CaseNo = UnitTest.CaseNo + 1;
  var msg=UnitTest.Title+" "+UnitTest.Case+" "+UnitTest.CaseNo;
  console.log(p1,msg); 
  //p1||console.log(p1,msg); 
};

UnitTest.eq = function(p1,p2){
  return p1 === p2;
}

UnitTest.start = function(p1,p2){
  UnitTest.Title=p1;
  UnitTest.Case=p2;
  UnitTest.CaseNo = 0;
  console.log("Start"+UnitTest.Title+" "+UnitTest.Case);
}

UnitTest.case = function(p1,p2){
//p1===undefined||
  UnitTest.Case=p1;
  UnitTest.CaseNo = p2;
  console.log("Start"+UnitTest.Title+" "+UnitTest.Case);
}
