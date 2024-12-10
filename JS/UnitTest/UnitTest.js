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
  var ans=p1||"失敗";
  console.log(msg+ans); 
  //p1||console.log(p1,msg); 
};

UnitTest.eq = function(p1,p2){
  return p1 === p2;
}

UnitTest.title = function(p1,p2,p3){
  UnitTest.Title=p1||UnitTest.Title;
  UnitTest.Case=p2||UnitTest.Case;
  UnitTest.CaseNo = p2||UnitTest.CaseNo;
  console.log("開始 "+UnitTest.Title);
}

UnitTest.start = function(p1,p2){
  UnitTest.Case=p1||UnitTest.Case;
  UnitTest.CaseNo=p2||0;
  console.log("Case "+UnitTest.Case);
}
