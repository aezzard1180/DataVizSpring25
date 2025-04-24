var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
            'Malaysia Airlines',
            'American',
            'Air France',
            'Kenya Airways',
            'China Airlines'
        ],
        datasets: [{
            label: '# of Fatalities',
            data: ['537', '416', '337', '283', '225'],
            backgroundColor: [
                'rgb(137, 113, 219)',
                'rgb(190, 113, 219)',
                'rgb(219, 113, 195)',
                'rgb(219, 113, 142)',
                'rgb(219, 137, 113)',
                'rgb(219, 190, 113)'
            ],
            hoveroffset: 4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Top five airlines with the most fatalities from 2000 to 2014'
                },
            subtitle: {
                display: true,
                text: 'From 2000 to 2014, Malaysia Airlines had the most fatilites, though they only had 3 incidents with 2 being fatal in those 14 years.'
            }
        }
    }
});