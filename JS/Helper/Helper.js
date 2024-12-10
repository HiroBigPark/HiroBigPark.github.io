"use strict"; // 厳格モード構文
// クラス定義＆コンストラクタ
function Test(){
  _msg : "hello"
}
Test.msg = "Test";

function Helper(){ 
  //レシーバ値NGはnewだけする。
/*
_create : function(){
  return new Helper();
  },
*/
  _msg : "hello"
}
//  静的プロパティ
Helper.msg = "hello";
Helper.prototype.create = function(){
  return new Helper();
};
