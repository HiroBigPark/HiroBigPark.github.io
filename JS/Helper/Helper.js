"use strict"; // 厳格モード構文
// クラス定義＆コンストラクタ
function Test(){
  _msg : "hello Test"
}
Test.msg = "Test";

function Helper(){ 
  //レシーバ値NGはnewだけする。
  create : function(){
  return new Helper();
  },
  _msg : "hello Helper"
}
//  静的プロパティ
Helper.msg = "hello";
Helper.prototype.create = function(){
  return new Helper();
};
