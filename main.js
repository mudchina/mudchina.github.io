var mudinfo = [
  {
    name: '东方故事II (utf8)',
    desc: '',
    proj_url: 'https://github.com/mudchina/es2-mudlib-utf8',
    game_url: '',
  },
  {
    name: '侠客行100 (gbk)',
    desc: '',
    proj_url: 'https://github.com/mudchina/xkx100',
    game_url: '',
  },
  {
    name: '梦幻西游2002版 (gbk)',
    desc: '',
    proj_url: 'https://github.com/mudchina/mhxy2002',
    game_url: '',
  },
];

$(document).ready(function(){
  var mudlist = $('<table>').appendTo('div#mudlist');
  mudlist.append('<tr><th>游戏名称</th><th>简介</th><th>项目／源代码</th><th>游戏网址</th></tr>');

  var n = mudinfo.length;
  for(var i=0; i<n; i++) {
    var mud = mudinfo[i];
    mudlist.append('<tr><td>' + mud.name + '</td><td>' + mud.desc + '</td><td>' + mud.proj_url + '</td><td>' + mud.game_url + '</td></tr>');
  }
});
