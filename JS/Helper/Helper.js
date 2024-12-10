"use strict"; // 厳格モード構文

// クラス定義＆コンストラクタ
var Helper=Helper||function(){};

//  静的プロパティ
Helper.msg = "Helper";
Helper.create = function(){
  return new Helper();
};
