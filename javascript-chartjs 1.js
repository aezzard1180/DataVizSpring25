var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1985-1999', '2000-2014'],
        datasets: [{
            label: '# of Fatal Accidents',
            data: [14, 1],
            backgroundColor: [
                '#e64444'
            ]
        },
        {
            label: '# of Incidents',
            data: [76, 6],
            backgroundColor: [
                '#3858c8'
            ],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Aeroflot improved in safety',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Between 1985 and 1999, Aeroflot had the highest number of incidents out of all airlines for those years at 76 with 14 of those being fatal. Between 2000 and 2014, the airline had six incidents with one being fatal.',
                font: {
                  size: 14
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                stacked: true
            },
            x: {
                stacked: true
            }
        },
    },
});