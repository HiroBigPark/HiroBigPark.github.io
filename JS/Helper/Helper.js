"use strict"; // 厳格モード構文
// クラス定義＆コンストラクタ
function Test(){
  _msg : "hello",
  _create : function(){
  return new Helper();
  }
};
function Helper(){
  "use strict", // 厳格モード構文(関数レベルの厳格モード構文)  
  //レシーバ値NGはnewだけする。
  _msg : "hello",
  _create : function(){
  return new Helper();
  }
};
//  静的プロパティ
Helper.msg = "hello";
Helper.create = function(){
  return new Helper();
};
