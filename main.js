var relatedinfo = [
  {
    name: 'MudOS',
    url: 'https://github.com/fluffos/fluffos/tree/mudos-v22.02',
    desc: 'MudOS原始老版本（停止维护）',
  },
  {
    name: 'FluffOS',
    url: 'https://github.com/fluffos/fluffos',
    desc: 'MudOS衍生项目，与 MudOS 基本兼容，推荐',
  },
  {
    name: 'WebTelnet',
    url: 'https://github.com/mudchina/webtelnet',
    desc: 'Web方式 访问 MUD 的 Proxy，可以用浏览器或手机玩 MUD，推荐',
  },
  {
    name: 'LPMuds.net',
    url: 'http://lpmuds.net/',
    desc: 'LPMUD英文网站',
  },
];

var mudinfo = [
  {
    name: '东方故事II',
    proj: 'es2',
    charset: 'GBK',
    game_url: '',
  },
  {
    name: '东方故事II',
    proj: 'es2-utf8',
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
    name: '金庸群侠传',
    proj: 'jy',
    charset: 'GBK',
    game_url: '',
  },
  {
    name: '风云再起Ⅱ',
    proj: 'fy2',
    charset: 'GBK',
    game_url: '',
  },
  {
    name: '风云再起Ⅱ - 美国版',
    proj: 'fy2-us',
    charset: 'GBK',
    game_url: '',
  },
  {
    name: '风云III',
    proj: 'fy3',
    charset: 'GBK',
    game_url: '',
  },
  {
    name: '风云4',
    proj: 'fy4',
    charset: 'GBK',
    game_url: '',
  },
  {
    name: '三界神话',
    proj: 'sjsh',
    charset: 'GBK',
    game_url: '',
  },
  {
    name: '西游记4.5',
    proj: 'xyj45',
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
  {
    name: '泥潭III',
    proj: 'nitan3',
    charset: 'GBK',
    game_url: '',
  },
];

function listMuds(){
  var table = $('<table>').appendTo('div#mudlist');
  table.append('<tr><th></th><th>游戏名称</th><th>字符集/编码</th><th>项目／源代码</th><th>游戏网址</th></tr>');
  var n = mudinfo.length;
  for(var i=0; i<n; i++) {
    var mud = mudinfo[i];
    var proj_url = 'https://github.com/mudchina/' + mud.proj;
    table.append('<tr><td>' + (i+1) + '</td><td>' + mud.name + '</td><td>' + mud.charset + '</td><td><a href="' + proj_url + '">' + proj_url + '</a></td><td>' + mud.game_url + '</td></tr>');
  }
}

function listRelated(){
  var table = $('<table>').appendTo('div#related');
  table.append('<tr><th></th><th>名称</th><th>说明</th><th>网址</th></tr>');
  var n = relatedinfo.length;
  for(var i=0; i<n; i++) {
    var item = relatedinfo[i];
    table.append('<tr><td>' + (i+1) + '</td><td>' + item.name + '</td><td>' + item.desc + '</td><td><a href="' + item.url + '">' + item.url + '</a></td></tr>');
  }
}

$(document).ready(function(){
  listMuds();
  listRelated();
});
