"use strict"; // 厳格モード構文
// クラス定義＆コンストラクタ
function Helper(){
  "use strict"; // 厳格モード構文(関数レベルの厳格モード構文)  
  //レシーバ値NGはnewだけする。
};
//  静的プロパティ
Helper.msg = "hello";
Helper.create = function(){
  return new Helper();
};
