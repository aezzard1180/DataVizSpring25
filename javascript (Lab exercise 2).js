var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'polarArea',
          data: {
            labels: [
              'Eatinig and Drinking',
              'Personal Care',
              'TV/Radio',
              'Other Leisure Activities',
              'Seeing Friends',
              'Shopping',
              'Other unpaid work'
            ],
            datasets: [{
              label: 'Time Spent',
              data: [100, 52, 127, 53, 23, 20, 33],
              backgroundColor: [
                'rgb(255, 104, 104)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)',
                'rgb(201, 110,247)',
                'rgb(247, 158, 110)'
              ]
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'People in China spend a lot of time watching TV or listening to the radio'
              },
              subtitle: {
                display: true, 
                text: 'When people in China are not at work or sleeping, they spend a lot of their time watching TV or listending to the radio'
              }
            }
          }
        });