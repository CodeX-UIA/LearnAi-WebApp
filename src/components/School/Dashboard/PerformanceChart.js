import { faker } from '@faker-js/faker';
import { Grid, useTheme } from '@mui/material';

import { Chart } from 'src/components/Chart';

function PerformanceChart() {
  const theme = useTheme();

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  const chartOptions = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    fill: {
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.1,
        inverseColors: false,
        opacityFrom: 0.8,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    colors: [theme.colors.primary.main],
    dataLabels: {
      enabled: false
    },
    theme: {
      mode: theme.palette.mode
    },
    stroke: {
      show: true,
      colors: [theme.colors.primary.main],
      width: 3
    },
    legend: {
      show: false
    },
    labels: labels,
    grid: {
      show: false
    },
    xaxis: {
      labels: {
        show: true
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: true,
      tickAmount: 5
    },
    tooltip: {
      x: {
        show: true
      },
      y: {
        title: {
          formatter() {
            return 'Average gpa:';
          }
        }
      },
      marker: {
        show: false
      }
    }
  };

  const data = [
    {
      name: 'Student Performance',
      data: labels.map(() =>
        faker.datatype.number({
          min: 1,
          max: 4
        })
      )
    }
  ];

  return (
    <Grid
      container
      spacing={3}
      direction="row"
      alignItems="stretch"
      justifyContent="center"
    >
      <Grid xs={12}>
      <iframe style={{background: "#21313C",border: "none",borderRadius: "2px",boxShadow:" 0 2px 10px 0 rgba(70, 76, 79, .2)"}} width="640" height="480" src="https://charts.mongodb.com/charts-sih-tdvlv/embed/charts?id=6375ddf9-ed9b-4d9b-872c-5277678674f0&maxDataAge=3600&theme=dark&autoRefresh=true"></iframe>
        {/* <tableau-viz id="tableauViz"       
  	src='https://public.tableau.com/shared/6Z63RT4NW?:display_count=n&:origin=viz_share_link'      
 	  toolbar="bottom" hide-tabs>
		</tableau-viz> */}
        {/* <Chart options={chartOptions} series={data} type="area" height={300} /> */}
      </Grid>
    </Grid>
  );
}

export default PerformanceChart;
