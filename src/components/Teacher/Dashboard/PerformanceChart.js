import { faker } from '@faker-js/faker';
import { Grid, useTheme } from '@mui/material';

import { Chart } from 'src/components/Chart';

function PerformanceChart() {
  const theme = useTheme();

  const labels = ['Term1', 'Term2', 'Term3'];

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
          formatter(grade) {
            return 'Average (' + grade + ')';
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
      name: 'Mathematics',
      data: labels.map(() =>
        faker.datatype.number({
          min: 30,
          max: 96
        })
      )
    },
    {
      name: 'English',
      data: labels.map(() =>
        faker.datatype.number({
          min: 30,
          max: 96
        })
      )
    },
    {
      name: 'Science',
      data: labels.map(() =>
        faker.datatype.number({
          min: 30,
          max: 96
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
        <Chart options={chartOptions} series={data} type="bar" height={300} />
      </Grid>
    </Grid>
  );
}

export default PerformanceChart;
