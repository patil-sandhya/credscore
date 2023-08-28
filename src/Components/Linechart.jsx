import { Line } from 'react-chartjs-2';
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);
function Monthchart() {
    
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June','July','August','September','October','November','December'],
    datasets: [
      {
        label: 'Monthly Overall Cibil Score',
        data: [700, 750, 650, 700, 702, 744,735,733,766,754,775,800],
        backgroundColor: '#adf7d8',
        borderColor: '#34eb9b',
        borderWidth: 3,
      },
    ],
  };

  const chartOptions = {
    responsive:true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{width:"90%",height:"200px",marginLeft:"5%",backgroundColor:"white",borderRadius:"10px"}} >
      <Line data={chartData} options={chartOptions}  />
    </div>
  );
    
  }
  
  export default Monthchart;