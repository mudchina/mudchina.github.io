var mudinfo = [
  {
    name: '东方故事II',
    proj: 'es2-mudlib-utf8',
    charset: 'UTF8',
    game_url: '',
  },
  {
    name: '侠客行100',
    proj: 'xkx100',
    charset: 'GBK',
    game_url: '',
  },
  {
    name: '侠客行2001',
    proj: 'xkx2001',
    charset: 'GBK',
    game_url: '',
  },
  {
    name: '梦幻西游2002版',
    proj: 'mhxy2002',
    charset: 'GBK',
    game_url: '',
  },
  {
    name: '西游记2006',
    proj: 'xyj2006',
    charset: 'GBK',
    game_url: '',
  },
];

$(document).ready(function(){
  var mudlist = $('<table>').appendTo('div#mudlist');
  mudlist.append('<tr><th></th><th>游戏名称</th><th>字符集/编码</th><th>项目／源代码</th><th>游戏网址</th></tr>');

  var n = mudinfo.length;
  for(var i=0; i<n; i++) {
    var mud = mudinfo[i];
    var proj_url = 'https://github.com/mudchina/' + mud.proj;
    mudlist.append('<tr><td>' + (i+1) + '</td><td>' + mud.name + '</td><td>' + mud.charset + '</td><td><a href="' + proj_url + '">' + proj_url + '</a></td><td>' + mud.game_url + '</td></tr>');
  }
});
