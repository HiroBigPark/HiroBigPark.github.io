"use strict"; // 厳格モード構文
// クラス定義＆コンストラクタ
function Helper(){
  "use strict", // 厳格モード構文(関数レベルの厳格モード構文)  
  //レシーバ値NGはnewだけする。
  var _msg = "hello",
  var _create = function(){
  return new Helper();
  }
};
//  静的プロパティ
Helper.msg = "hello";
Helper.create = function(){
  return new Helper();
};
