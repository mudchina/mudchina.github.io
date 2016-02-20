var mudinfo = [
  {
    name: '东方故事II',
    desc: '',
    proj_url: 'https://github.com/mudchina/es2-mudlib-utf8',
    charset: 'UTF8',
    game_url: '',
  },
  {
    name: '侠客行100',
    desc: '',
    proj_url: 'https://github.com/mudchina/xkx100',
    charset: 'GBK',
    game_url: '',
  },
  {
    name: '侠客行2001',
    desc: '',
    proj_url: 'https://github.com/mudchina/xkx2001',
    charset: 'GBK',
    game_url: '',
  },
  {
    name: '梦幻西游2002版',
    desc: '',
    proj_url: 'https://github.com/mudchina/mhxy2002',
    charset: 'GBK',
    game_url: '',
  },
];

$(document).ready(function(){
  var mudlist = $('<table>').appendTo('div#mudlist');
  mudlist.append('<tr><th></th><th>游戏名称</th><th>简介</th><th>字符集/编码</th><th>项目／源代码</th><th>DEMO网址</th></tr>');

  var n = mudinfo.length;
  for(var i=0; i<n; i++) {
    var mud = mudinfo[i];
    mudlist.append('<tr><td>' + (i+1) + '</td><td>' + mud.name + '</td><td>' + mud.desc + '</td><td>' + mud.charset + '</td><td><a href="' + mud.proj_url + '">' + mud.proj_url + '</a></td><td>' + mud.game_url + '</td></tr>');
  }
});
