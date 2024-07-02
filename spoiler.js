/************************************
  MyBB.ru
  Спойлер персональной информации V.3
  Версия: V1.0.1
  Authors: Deff, Alex_63
  Дата: 01.01.2016
  Последние изменения: 03.01.2016
************************************/

(function() {
  FORUM.unPack = function (a) {return decodeURIComponent(escape(atob(a.replace(/[^A-Za-z0-9\/\=\+]/g,""))));}
  FORUM.Pack = function (a) {return btoa(unescape(encodeURIComponent(a))).replace(/=+$/gim,'');}

  $('.post-content .spoiler-box>div[onclick*="toggleClass"]:contains("for Nick(s)|")').each(function() {
    var sp = $(this).parent();if(GroupID==3){sp.remove();return true;}
    var title = FORUM.unPack($(this).text().replace(/for Nick\(s\)\|/mgi,'')).split(',');
    var tf=false,nk=$(this).parents('.post').find('.pa-author>a').text();if(nk==UserLogin){tf=true;}
    if(!(tf||$('#mod-options').length||$.inArray(UserLogin,title)!=-1)){sp.remove();return true}
    if($('#mod-options').length&&$.inArray(UserLogin,title)==-1){var s='';}
    else if($.inArray(UserLogin,title)!=-1){s=' для '+UserLogin;}
    else if(tf){s='';}$(this).html('<b style="color:red">Скрытое сообщение'+s+'</b>');
    var cnt=sp.find('blockquote>p');cnt0=cnt.html();cnt0=FORUM.unPack(cnt0);cnt.html(cnt0);
    if(s=='')sp.addClass('private-spoiler');
  });

  function encoder(arr) {
    var cnt = arr[1].replace(/\n/gim,'<br>');
    cnt = cnt.replace(/\[b\](.*?)\[\/b\]/gi,'<strong>$1</strong>');
    cnt = cnt.replace(/\[i\](.*?)\[\/i\]/gi,'<span style="font-style:italic">$1</span>');
    cnt = cnt.replace(/\[u\](.*?)\[\/u\]/gi,'<em class="bbuline">$1</em>');
    cnt = cnt.replace(/\[s\](.*?)\[\/s\]/gi,'<del>$1</del>');
    cnt = cnt.replace(/\[h\](.*?)\[\/h\]/gi,'<span class="highlight-text">$1</span>');
    cnt = cnt.replace(/\[hr\]/g,'<hr>');
    cnt = cnt.replace(/\[you\]/g,UserLogin);
    cnt = cnt.replace(/\[sup\](.*?)\[\/sup\]/gi,'<sup>$1</sup>');
    cnt = cnt.replace(/\[sub\](.*?)\[\/sub\]/gi,'<sub>$1</sub>');
    cnt = cnt.replace(/\[font=(.*?)\](.*?)\[\/font\]/gi,'<span style="font-family: $1;">$2</span>');
    cnt = cnt.replace(/\[size=(.*?)\](.*?)\[\/size\]/gi,'<span style="font-size: $1px;">$2</span>');
    cnt = cnt.replace(/\[color=(.*?)\](.*?)\[\/color\]/gi,'<span style="color: $1">$2</span>');
    cnt = cnt.replace(/\[align=(.*?)\](.*?)\[\/align\]/gi,'<span style="display: block; text-align: $1">$2</span>');
    cnt = cnt.replace(/\[img\](.*?)\[\/img\]/gi,'<img src="$1" class="postimg" />');
    cnt = cnt.replace(/\[img=(.*?)\](.*?)\[\/img\]/gi,'<img src="$2" class="postimg" title="$1" alt="$1" />');
    cnt = cnt.replace(/\[url=(.*?)\](.*?)\[\/url\]/gi,'<a href="$1">$2</a>');
    cnt = cnt.replace(/\[url\](.*?)\[\/url\]/gi,'<a href="$1">$1</a>');
    var SObj = FORUM.get('editor.smile.smilies'),SDir = FORUM.get('editor.smile.dir');
    for (var s in SObj) {
       var reg = new RegExp('\\s'+s.replace(/([\'\-\^\|\(\)])/g,'\\$1')+'\\s','gm');
       cnt = cnt.replace(reg,' <img src="'+SDir+'/'+SObj[s]+'" alt="'+s+'"> ');
    }  cnt = FORUM.Pack(cnt);$("#main-reply").val(arr[0]+cnt+arr[2]);
  }
  Wraper_SP = function() {
    var bound = '###spForYOU###';
    if($('#main-reply').getSelection().length<1){alert('Не выделен текст для скрытого сообщения.\nВыделите текст и нажмите на кнопку.');return false}
    var Nam = '';Nam = prompt("Скрытое сообщение для следующих ников\n\nВведите через запятую нужные ник(и):","");
    Nam = Nam.split(/\s?\s?\s?,\s?\s?\s?/ig).join(',');Nam=FORUM.Pack(Nam);//Nam=Nam.replace(/=+$/gim,'');
    var a = "[", b = "]",end = bound+a+'/spoiler'+b;var start = a+'spoiler="for Nick(s)|'+Nam+'"'+b+bound;
    $("#main-reply").focus(); bbcode(start,end);var arr=$("#main-reply").val().split(bound);encoder(arr);
  }
  if($('#pun-edit,#pun-post,#pun-viewtopic').length) {
    var tit = "Спойлер персональной информации";
    $('#form-buttons #button-spoiler').after('<td id="button-sp_for_you" title="'+tit+'" align="center" valign="center">\
    <img style="height:22px;width:22px;margin:-4px -2px 0 -2px;" src="src="/i/blank.gif" onclick="Wraper_SP()"/></td>');
  }
}());
