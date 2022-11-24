import { faker } from '@faker-js/faker';
import { Grid, useTheme } from '@mui/material';

import { Chart } from 'src/components/Chart';

function PredictedPerformanceChart() {
  const theme = useTheme();

  const labels = ["Term1 22'", "Term2 22'", "Term3 22'"];

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
        <Chart options={chartOptions} series={data} type="area" height={300} />
      </Grid>
    </Grid>
  );
}

export default PredictedPerformanceChart;
