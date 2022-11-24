import { Grid, useTheme } from '@mui/material';

import { Chart } from 'src/components/Chart';

function LearningDisabilityChart({ data }) {
  const theme = useTheme();

  let colors = [];
  let values = [];
  let labels = [];

  data?.map(({ name, value, color }) => {
    colors.push(color);
    values.push(value);
    labels.push(name);
  });

  const chartOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '60%'
        }
      }
    },
    colors: colors,
    dataLabels: {
      enabled: false,
      formatter(val) {
        return `${val}%`;
      },
      style: {
        colors: [theme.colors.alpha.trueWhite[100]]
      },
      background: {
        enabled: true,
        foreColor: theme.colors.alpha.trueWhite[100],
        padding: 8,
        borderRadius: 4,
        borderWidth: 0,
        opacity: 0.3,
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 1,
          color: theme.colors.alpha.black[70],
          opacity: 0.5
        }
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        color: theme.colors.alpha.black[50],
        opacity: 0.5
      }
    },
    fill: {
      opacity: 1
    },
    labels: labels,
    legend: {
      labels: {
        colors: theme.colors.alpha.trueWhite[100]
      },
      show: false
    },
    stroke: {
      width: 0
    },
    theme: {
      mode: theme.palette.mode
    }
  };

  const chartSeries = values;

  return (
    <Grid
      item
      sm={8}
      xs={12}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Chart
        height={220}
        type="donut"
        options={chartOptions}
        series={chartSeries}
      />
    </Grid>
  );
}

export default LearningDisabilityChart;
