"use strict"; // 厳格モード構文
// クラス定義＆コンストラクタ
var Test = function (){
  _name : "Test Class"
}
Test.msg = "Test";

var Helper = function (){ 
  //レシーバ値NGはnewだけする。
  _name : "Helper Class"
}
//  静的プロパティ
Helper.msg = "Helper";
Helper.create = function(){
  return new Helper();
};
