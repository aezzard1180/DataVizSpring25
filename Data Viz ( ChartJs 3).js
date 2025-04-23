var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'polarArea',
          data: {
            labels: [
              'Alaska Airlines',
              'Hawaiian Airlines',
              'Southwest Airlines',
              'United',
              'American',
              'Delta'
            ],
            datasets: [{
              label: '# of Incidents',
              data: [5, 1, 8, 14, 17, 24],
              backgroundColor: [
                'rgb(58, 131, 219)',
                'rgb(196, 25, 171)',
                'rgb(255, 195, 0)',
                'rgb(0, 61, 148)',
                'rgb(225, 217, 217)',
                'rgb(224, 12, 12)'
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
                text: 'Hawaiian Airlines was the safest U.S. based airline between 2000 and 2014'
              },
              subtitle: {
                display: true,
                text: 'Out of the airlines based in the U.S., Hawaiian Airlines only had one incident, which was not fatal, in that 14 year period. Southwest is the only other airline that did not have a fatal incident.' 
              }
            }
          }
        });