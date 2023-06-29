!function(){function a(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function t(a,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function r(a,r,n){return r&&t(a.prototype,r),n&&t(a,n),Object.defineProperty(a,"prototype",{writable:!1}),a}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{eGC9:function(t,n,e){"use strict";e.r(n),e.d(n,"ChartsDemoModule",(function(){return d}));var o,b,c=e("ofXK"),i=e("tyNb"),s=e("LPYB"),l=e("fXoL"),h=[{path:"chartjs",component:(o=function(){function t(){a(this,t),this.lineChartData=[{label:"# of Votes",data:[10,19,3,5,2,3],borderWidth:1,fill:!1}],this.lineChartLabels=["2013","2014","2014","2015","2016","2017"],this.lineChartOptions={scales:{yAxes:[{ticks:{beginAtZero:!0}}]},legend:{display:!1},elements:{point:{radius:0}}},this.lineChartColors=[{borderColor:"rgba(255,99,132,1)"}],this.barChartData=[{label:"# of Votes",data:[10,19,3,5,2,3],borderWidth:1,fill:!1}],this.barChartLabels=["2013","2014","2014","2015","2016","2017"],this.barChartOptions={scales:{yAxes:[{ticks:{beginAtZero:!0}}]},legend:{display:!1},elements:{point:{radius:0}}},this.barChartColors=[{backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"]}],this.areaChartData=[{label:"# of Votes",data:[10,19,3,5,2,3],borderWidth:1,fill:!0}],this.areaChartLabels=["2013","2014","2014","2015","2016","2017"],this.areaChartOptions={},this.areaChartColors=[{borderColor:"rgba(255,99,132,1)",backgroundColor:"rgba(255,99,132,.2)"}],this.doughnutPieChartData=[{data:[30,40,30]}],this.doughnutPieChartLabels=["Pink","Blue","Yellow"],this.doughnutPieChartOptions={responsive:!0,animation:{animateScale:!0,animateRotate:!0}},this.doughnutPieChartColors=[{backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)"]}],this.scatterChartData=[{label:"First Dataset",data:[{x:-10,y:0},{x:0,y:3},{x:-25,y:5},{x:40,y:5}],borderWidth:1},{label:"Second Dataset",data:[{x:10,y:5},{x:20,y:-30},{x:-25,y:15},{x:-10,y:5}],borderWidth:1}],this.scatterChartOptions={scales:{xAxes:[{type:"linear",position:"bottom"}]}},this.scatterChartColors=[{backgroundColor:["rgba(255, 99, 132, 0.2)"],borderColor:["rgba(255,99,132,1)"]},{backgroundColor:["rgba(54, 162, 235, 0.2)"],borderColor:["rgba(54, 162, 235, 1)"]}]}return r(t,[{key:"ngOnInit",value:function(){}}]),t}(),o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=l.Fb({type:o,selectors:[["app-chartjs"]],decls:111,vars:29,consts:[[1,"page-header"],[1,"page-title"],["aria-label","breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["href","javascript:;"],["aria-current","page",1,"breadcrumb-item","active"],[1,"row"],[1,"col-lg-6","grid-margin","stretch-card"],[1,"card"],[1,"card-body"],[1,"card-title"],["baseChart","",3,"chartType","datasets","labels","options","colors"],[1,"col-lg-6","grid-margin","grid-margin-lg-0","stretch-card"],["baseChart","",3,"chartType","datasets","options","colors"]],template:function(a,t){1&a&&(l.Qb(0,"div",0),l.zc(1,"\n  "),l.Qb(2,"h3",1),l.zc(3,"\n    ChartJs\n  "),l.Pb(),l.zc(4,"\n  "),l.Qb(5,"nav",2),l.zc(6,"\n    "),l.Qb(7,"ol",3),l.zc(8,"\n      "),l.Qb(9,"li",4),l.Qb(10,"a",5),l.zc(11,"Charts"),l.Pb(),l.Pb(),l.zc(12,"\n      "),l.Qb(13,"li",6),l.zc(14,"ChartJs"),l.Pb(),l.zc(15,"\n    "),l.Pb(),l.zc(16,"\n  "),l.Pb(),l.zc(17,"\n"),l.Pb(),l.zc(18,"\n\n"),l.Qb(19,"div",7),l.zc(20,"\n  "),l.Qb(21,"div",8),l.zc(22,"\n    "),l.Qb(23,"div",9),l.zc(24,"\n      "),l.Qb(25,"div",10),l.zc(26,"\n        "),l.Qb(27,"h4",11),l.zc(28,"Line chart"),l.Pb(),l.zc(29,"\n        "),l.Mb(30,"canvas",12),l.zc(31,"\n      "),l.Pb(),l.zc(32,"\n    "),l.Pb(),l.zc(33,"\n  "),l.Pb(),l.zc(34,"\n  "),l.Qb(35,"div",8),l.zc(36,"\n    "),l.Qb(37,"div",9),l.zc(38,"\n      "),l.Qb(39,"div",10),l.zc(40,"\n        "),l.Qb(41,"h4",11),l.zc(42,"Bar chart"),l.Pb(),l.zc(43,"\n        "),l.Mb(44,"canvas",12),l.zc(45,"\n      "),l.Pb(),l.zc(46,"\n    "),l.Pb(),l.zc(47,"\n  "),l.Pb(),l.zc(48,"\n"),l.Pb(),l.zc(49,"\n"),l.Qb(50,"div",7),l.zc(51,"\n  "),l.Qb(52,"div",8),l.zc(53,"\n    "),l.Qb(54,"div",9),l.zc(55,"\n      "),l.Qb(56,"div",10),l.zc(57,"\n        "),l.Qb(58,"h4",11),l.zc(59,"Area chart"),l.Pb(),l.zc(60,"\n        "),l.Mb(61,"canvas",12),l.zc(62,"\n      "),l.Pb(),l.zc(63,"\n    "),l.Pb(),l.zc(64,"\n  "),l.Pb(),l.zc(65,"\n  "),l.Qb(66,"div",8),l.zc(67,"\n    "),l.Qb(68,"div",9),l.zc(69,"\n      "),l.Qb(70,"div",10),l.zc(71,"\n        "),l.Qb(72,"h4",11),l.zc(73,"Doughnut chart"),l.Pb(),l.zc(74,"\n        "),l.Mb(75,"canvas",12),l.zc(76,"\n      "),l.Pb(),l.zc(77,"\n    "),l.Pb(),l.zc(78,"\n  "),l.Pb(),l.zc(79,"\n"),l.Pb(),l.zc(80,"\n"),l.Qb(81,"div",7),l.zc(82,"\n  "),l.Qb(83,"div",13),l.zc(84,"\n    "),l.Qb(85,"div",9),l.zc(86,"\n      "),l.Qb(87,"div",10),l.zc(88,"\n        "),l.Qb(89,"h4",11),l.zc(90,"Pie chart"),l.Pb(),l.zc(91,"\n        "),l.Mb(92,"canvas",12),l.zc(93,"\n      "),l.Pb(),l.zc(94,"\n    "),l.Pb(),l.zc(95,"\n  "),l.Pb(),l.zc(96,"\n  "),l.Qb(97,"div",13),l.zc(98,"\n    "),l.Qb(99,"div",9),l.zc(100,"\n      "),l.Qb(101,"div",10),l.zc(102,"\n        "),l.Qb(103,"h4",11),l.zc(104,"Scatter chart"),l.Pb(),l.zc(105,"\n        "),l.Mb(106,"canvas",14),l.zc(107,"\n      "),l.Pb(),l.zc(108,"\n    "),l.Pb(),l.zc(109,"\n  "),l.Pb(),l.zc(110,"\n"),l.Pb()),2&a&&(l.yb(30),l.jc("chartType","line")("datasets",t.lineChartData)("labels",t.lineChartLabels)("options",t.lineChartOptions)("colors",t.lineChartColors),l.yb(14),l.jc("chartType","bar")("datasets",t.barChartData)("labels",t.barChartLabels)("options",t.barChartOptions)("colors",t.barChartColors),l.yb(17),l.jc("chartType","line")("datasets",t.areaChartData)("labels",t.areaChartLabels)("options",t.areaChartOptions)("colors",t.areaChartColors),l.yb(14),l.jc("chartType","doughnut")("datasets",t.doughnutPieChartData)("labels",t.doughnutPieChartLabels)("options",t.doughnutPieChartOptions)("colors",t.doughnutPieChartColors),l.yb(17),l.jc("chartType","pie")("datasets",t.doughnutPieChartData)("labels",t.doughnutPieChartLabels)("options",t.doughnutPieChartOptions)("colors",t.doughnutPieChartColors),l.yb(14),l.jc("chartType","scatter")("datasets",t.scatterChartData)("options",t.scatterChartOptions)("colors",t.scatterChartColors))},directives:[s.a],styles:[""]}),o)}],d=((b=r((function t(){a(this,t)}))).\u0275mod=l.Jb({type:b}),b.\u0275inj=l.Ib({factory:function(a){return new(a||b)},imports:[[c.c,i.l.forChild(h),s.b]]}),b)}}])}();