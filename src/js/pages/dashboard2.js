$(function(){"use strict";/* ChartJS
   * -------
   * Here we will create a few charts using ChartJS
   */ // -----------------------
// - MONTHLY SALES CHART -
// -----------------------
// Get context with jQuery - using jQuery's .get() method.
var e=$("#salesChart").get(0).getContext("2d"),a=new Chart(e);// This will get the first returned node in the jQuery collection.
a.Line({labels:["January","February","March","April","May","June","July"],datasets:[{label:"Electronics",fillColor:"rgb(210, 214, 222)",strokeColor:"rgb(210, 214, 222)",pointColor:"rgb(210, 214, 222)",pointStrokeColor:"#c1c7d1",pointHighlightFill:"#fff",pointHighlightStroke:"rgb(220,220,220)",data:[65,59,80,81,56,55,40]},{label:"Digital Goods",fillColor:"rgba(60,141,188,0.9)",strokeColor:"rgba(60,141,188,0.8)",pointColor:"#3b8bba",pointStrokeColor:"rgba(60,141,188,1)",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(60,141,188,1)",data:[28,48,40,19,86,27,90]}]},{// Boolean - If we should show the scale at all
showScale:!0,// Boolean - Whether grid lines are shown across the chart
scaleShowGridLines:!1,// String - Colour of the grid lines
scaleGridLineColor:"rgba(0,0,0,.05)",// Number - Width of the grid lines
scaleGridLineWidth:1,// Boolean - Whether to show horizontal lines (except X axis)
scaleShowHorizontalLines:!0,// Boolean - Whether to show vertical lines (except Y axis)
scaleShowVerticalLines:!0,// Boolean - Whether the line is curved between points
bezierCurve:!0,// Number - Tension of the bezier curve between points
bezierCurveTension:.3,// Boolean - Whether to show a dot for each point
pointDot:!1,// Number - Radius of each point dot in pixels
pointDotRadius:4,// Number - Pixel width of point dot stroke
pointDotStrokeWidth:1,// Number - amount extra to add to the radius to cater for hit detection outside the drawn point
pointHitDetectionRadius:20,// Boolean - Whether to show a stroke for datasets
datasetStroke:!0,// Number - Pixel width of dataset stroke
datasetStrokeWidth:2,// Boolean - Whether to fill the dataset with a color
datasetFill:!0,// String - A legend template
legendTemplate:"<ul class='<%=name.toLowerCase()%>-legend'><% for (var i=0; i<datasets.length; i++){%><li><span style='background-color:<%=datasets[i].lineColor%>'></span><%=datasets[i].label%></li><%}%></ul>",// Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
maintainAspectRatio:!0,// Boolean - whether to make the chart responsive to window resizing
responsive:!0});// ---------------------------
// - END MONTHLY SALES CHART -
// ---------------------------
// -------------
// - PIE CHART -
// -------------
// Get context with jQuery - using jQuery's .get() method.
var b=$("#pieChart").get(0).getContext("2d"),c=new Chart(b);// Create pie or douhnut chart
// You can switch between pie and douhnut using the method below.
// -----------------
// - END PIE CHART -
// -----------------
/* jVector Maps
   * ------------
   * Create a world map with markers
   */ /* SPARKLINE CHARTS
   * ----------------
   * Create a inline charts with spark line
   */ // -----------------
// - SPARKLINE BAR -
// -----------------
// -----------------
// - SPARKLINE PIE -
// -----------------
// ------------------
// - SPARKLINE LINE -
// ------------------
c.Doughnut([{value:700,color:"#f56954",highlight:"#f56954",label:"Chrome"},{value:500,color:"#00a65a",highlight:"#00a65a",label:"IE"},{value:400,color:"#f39c12",highlight:"#f39c12",label:"FireFox"},{value:600,color:"#00c0ef",highlight:"#00c0ef",label:"Safari"},{value:300,color:"#3c8dbc",highlight:"#3c8dbc",label:"Opera"},{value:100,color:"#d2d6de",highlight:"#d2d6de",label:"Navigator"}],{// Boolean - Whether we should show a stroke on each segment
segmentShowStroke:!0,// String - The colour of each segment stroke
segmentStrokeColor:"#fff",// Number - The width of each segment stroke
segmentStrokeWidth:1,// Number - The percentage of the chart that we cut out of the middle
percentageInnerCutout:50,// This is 0 for Pie charts
// Number - Amount of animation steps
animationSteps:100,// String - Animation easing effect
animationEasing:"easeOutBounce",// Boolean - Whether we animate the rotation of the Doughnut
animateRotate:!0,// Boolean - Whether we animate scaling the Doughnut from the centre
animateScale:!1,// Boolean - whether to make the chart responsive to window resizing
responsive:!0,// Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
maintainAspectRatio:!1,// String - A legend template
legendTemplate:"<ul class='<%=name.toLowerCase()%>-legend'><% for (var i=0; i<segments.length; i++){%><li><span style='background-color:<%=segments[i].fillColor%>'></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",// String - A tooltip template
tooltipTemplate:"<%=value %> <%=label%> users"}),$("#world-map-markers").vectorMap({map:"world_mill_en",normalizeFunction:"polynomial",hoverOpacity:.7,hoverColor:!1,backgroundColor:"transparent",regionStyle:{initial:{fill:"rgba(210, 214, 222, 1)","fill-opacity":1,stroke:"none","stroke-width":0,"stroke-opacity":1},hover:{"fill-opacity":.7,cursor:"pointer"},selected:{fill:"yellow"},selectedHover:{}},markerStyle:{initial:{fill:"#00a65a",stroke:"#111"}},markers:[{latLng:[41.9,12.45],name:"Vatican City"},{latLng:[43.73,7.41],name:"Monaco"},{latLng:[-.52,166.93],name:"Nauru"},{latLng:[-8.51,179.21],name:"Tuvalu"},{latLng:[43.93,12.46],name:"San Marino"},{latLng:[47.14,9.52],name:"Liechtenstein"},{latLng:[7.11,171.06],name:"Marshall Islands"},{latLng:[17.3,-62.73],name:"Saint Kitts and Nevis"},{latLng:[3.2,73.22],name:"Maldives"},{latLng:[35.88,14.5],name:"Malta"},{latLng:[12.05,-61.75],name:"Grenada"},{latLng:[13.16,-61.23],name:"Saint Vincent and the Grenadines"},{latLng:[13.16,-59.55],name:"Barbados"},{latLng:[17.11,-61.85],name:"Antigua and Barbuda"},{latLng:[-4.61,55.45],name:"Seychelles"},{latLng:[7.35,134.46],name:"Palau"},{latLng:[42.5,1.51],name:"Andorra"},{latLng:[14.01,-60.98],name:"Saint Lucia"},{latLng:[6.91,158.18],name:"Federated States of Micronesia"},{latLng:[1.3,103.8],name:"Singapore"},{latLng:[1.46,173.03],name:"Kiribati"},{latLng:[-21.13,-175.2],name:"Tonga"},{latLng:[15.3,-61.38],name:"Dominica"},{latLng:[-20.2,57.5],name:"Mauritius"},{latLng:[26.02,50.55],name:"Bahrain"},{latLng:[.33,6.73],name:"S\xE3o Tom\xE9 and Pr\xEDncipe"}]}),$(".sparkbar").each(function(){var b=$(this);b.sparkline("html",{type:"bar",height:b.data("height")?b.data("height"):"30",barColor:b.data("color")})}),$(".sparkpie").each(function(){var b=$(this);b.sparkline("html",{type:"pie",height:b.data("height")?b.data("height"):"90",sliceColors:b.data("color")})}),$(".sparkline").each(function(){var b=$(this);b.sparkline("html",{type:"line",height:b.data("height")?b.data("height"):"90",width:"100%",lineColor:b.data("linecolor"),fillColor:b.data("fillcolor"),spotColor:b.data("spotcolor")})})});