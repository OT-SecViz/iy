"use strict";

$(function () {
    chart1();
    chart2();
    chart3();
    chart4();

    var sparkline_values = [10, 7, 4, 8, 5, 8, 6, 5, 2, 4, 7, 4, 9, 6, 5, 9];
    var sparkline_values_chart = [2, 6, 4, 8, 3, 5, 2, 7];
    var sparkline_values_bar = [10, 7, 4, 8, 5, 8, 6, 5, 2, 4, 7, 4, 9, 10, 7, 4, 8, 5, 8, 6, 5, 2, 4, 7, 4, 9, 8, 6, 5, 2, 4, 7, 4, 9, 10, 2, 4, 7, 4, 9, 7, 4, 8, 5, 8, 6, 5];
    $(".sparkline-bar").sparkline(sparkline_values_bar, {
        type: "bar",
        width: "100%",
        height: "100",
        barColor: "white",
        barWidth: 2
    });

    $('.sparkline-inline').sparkline(sparkline_values, {
        type: 'line',
        width: '100%',
        height: '100',
        lineWidth: 1,
        lineColor: 'white',
        fillColor: 'rgba(87,75,144,.25)',
        highlightSpotColor: "rgba(63,82,227,.1)",
        highlightLineColor: "rgba(63,82,227,.1)",
        spotRadius: 3,
    });
    if ($("#activity-scroll").length) {
        $("#activity-scroll")
            .css({
                height: 400
            })
            .niceScroll();
    }

    if ($("#support-scroll").length) {
        $("#support-scroll")
            .css({
                height: 400
            })
            .niceScroll();
    }
    if ($("#project-team-scroll").length) {
        $("#project-team-scroll")
            .css({
                height: 400
            })
            .niceScroll();
    }

});



function chart1() {
    var options = {
        chart: {
            height: 240,
            type: "line",
            zoom: {
                enabled: !1
            }
            ,
            toolbar: {
                show: !1
            }
        }
        ,
        dataLabels: {
            enabled: !1
        }
        ,
        stroke: {
            width: 3, curve: "smooth", dashArray: [0, 8]
        }
        ,
        series: [{
            name: "Smoke", data: [15, 48, 36, 20, 40, 60, 35, 20, 16, 31, 22, 11]
        }
            ,
        {
            name: "Water Leakage", type: "area", data: [8, 22, 60, 35, 17, 24, 48, 37, 56, 22, 32, 38]
        }
        ],
        colors: ["#ff92ae",
            "#5560b4"],
        //      colors: ["#3dc7be", "#ffa117"],
        fill: {
            opacity: [1, .15]
        }
        ,
        markers: {
            size: 0,
            hover: {
                sizeOffset: 6
            }
        }
        ,
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            labels: {
                style: {
                    colors: '#8e8da4',
                }
            },
        },
        yaxis: {
            labels: {
                style: {
                    color: '#8e8da4',
                }
            }
        },
        grid: {
            borderColor: "#f1f1f1"
        }
    }

        ;

    var chart = new ApexCharts(document.querySelector("#revenue"), options);

    chart.render();
}

function chart2() {
 

    var chart = document.getElementById('amchart1');
    var donutChart = echarts.init(chart);
    var colorPalette = ['#bdbdbd', '#b59bd8', '#429bff']
    

    donutChart.setOption({
   tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c}'
    },
    legend: {
        data: ['Connected', 'Offline', 'Resume', 'Suspend']
    },
    series: [
        {
            name: '',
            type: 'pie',
            selectedMode: 'single',
            color: colorPalette,
            radius: [0, '35%'],
            label: {
                position: 'inner',
                fontSize: 12,
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 92, name: 'Detectify'},
                {value: 85, name: 'Airwits'},
                {value: 69, name: 'LeakDevice', selected: true}
            ]
        },
        {
            name: '',
            type: 'pie',
            radius: ['55%', '70%'],
            labelLine: {
                length: 30,
            },
            label: {
                show: false,
                position: 'center'
            },
            data: [
                {value: 789, name: 'Connected',
                itemStyle: {
                color: '#5560b4'}
                },
                {value: 62, name: 'Offline',
                itemStyle: {
                color: '#D4D8E2'}
                },
                 {value: 90, name: 'Resume',
                itemStyle: {
                color: '#fFBA69'}
                },
                {value: 162, name: 'Suspend',
                itemStyle: {
                color: '#ff92ae'}
                }
                
            ]
        }
    ]
     });
    }


function chart3() {

var ctx = document.getElementById("myChart2").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [{
      label: 'Threats',
      data: [78, 54, 95, 52, 102, 72, 68],
      borderWidth: 2,
      backgroundColor: '#D4D8E2',
      borderColor: '#D4D8E2',
      borderWidth: 2,
      pointBackgroundColor: '#ffffff',
      pointRadius: 4
    }, {
      label: 'Attacks',
      data: [18, 27, 51, 34, 22, 36, 12],
      borderWidth: 2,
      backgroundColor: 'rgba(255,164,38,.9)',
      borderColor: 'transparent',
      borderWidth: 0,
      pointBackgroundColor: '#999',
      pointRadius: 4
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          drawBorder: false,
          color: '#f2f2f2',
        },
        ticks: {
          beginAtZero: true,
          stepSize: 30,
          fontColor: "#8e8da4", // Font Color
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          fontColor: "#8e8da4", // Font Color
        }
      }]
    },
  }
});

}

function chart4() {

    var chart = document.getElementById('try');
    var tChart = echarts.init(chart);

    tChart.setOption({
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // Use axis to trigger tooltip
            type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
        }
    },
    legend: {
        data: ['Malware Injection', 'DDoS/DoS', 'Reply Attack', 'Ransomware', 'Supply Attack']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['Total']
    },
    series: [
        {
            name: 'Direct',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [320]
        },
        {
            name: 'Mail Ad',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [120]
        },
        {
            name: 'Affiliate Ad',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [83]
        },
        {
            name: 'Video Ad',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [75]
        },
        {
            name: 'Search Engine',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [52]
        }
    ]
});

}


