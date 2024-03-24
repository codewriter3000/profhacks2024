
//import { useEffect, useState} from 'react';
import { ChartJS } from 'chart.js/auto';
            
function Chartf () {

	const ctx = document.getElementById('myChart');
		
	new ChartJS(ctx, {
		type: 'bar',
		data: {
		labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
		datasets: [{
			label: '# of Votes',
			data: [12, 19, 3, 5, 2, 3],
			borderWidth: 1
		}]
		},
		options: {
		scales: {
			y: {
			beginAtZero: true
			}
		}
		}
	});

    return (
		<div>
			<canvas id="myChart"></canvas>
		</div>
    )
}

export default Chartf;