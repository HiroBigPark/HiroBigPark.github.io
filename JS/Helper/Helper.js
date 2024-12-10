"use strict"; // 厳格モード構文
// クラス定義＆コンストラクタ
var Test = function (){
  _msg : "hello Test"
}
Test.msg = "Test";

var Helper = function (){ 
  //レシーバ値NGはnewだけする。
  _msg : "hello Helper"
}
//  静的プロパティ
Helper.msg = "hello";
Helper.create = function(){
  return new Helper();
};
