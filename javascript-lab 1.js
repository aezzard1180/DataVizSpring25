var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#3cba9f",
                backgroundColor: "rgb(60,186,159,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, {
                data: [
                {x: 68.3, y: 5878},
                ],
                label: "Indonesia",
                borderColor: "#fa5858",
                backgroundColor:"rgb(250,88,88,0.1)",
                borderWidth:2,

              }, {
                data: [
                {x: 71.9, y: 11461},
                ],
                label: "Brazil",
                borderColor: "#84d46a",
                backgroundColor:"rgb(132,212,106,0.1)",
                borderWidth:2,

              }, {
                data: [
                  {x: 65.4, y: 13173},
                ],
                label: "Russia",
                borderColor: "#983dff",
                backgroundColor: "rgb(152,61,255,0.1)",
                borderWidth:2, 
              }, {
                data: [
                  {x: 62.6, y: 3366},
                ],
                label: "Pakistan",
                borderColor: "#ff7eb3",
                backgroundColor: "rgb(255,126,179,0.1)",
                borderWidth:2, 
              }, {
                data: [
                  {x: 65.8, y: 1632}
                ],
                label: "Bangladesh",
                borderColor: "#96A2FA",
                backgroundColor: "rgb(150,162,250,0.1)",
                borderWidth:2,
              }, {
                data: [
                  {x: 81.1, y: 32193},
                ],
                label: "Japan",
                borderColor: "#c8a7a0",
                backgroundColor: "rgb(200,167,160,0.1)",
                borderWidth:2,
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Japan has the highest life expectancy',
                font: {
                  size: 18
                }
              },
              subtitle: {
                display: true,
                text: 'Out of the top 10 life expectancies, Japan has the highest per GDP',
              }
            },
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'GDP Per Capita'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Life Expectancy'
                  }
              }
            }
          }
        });
