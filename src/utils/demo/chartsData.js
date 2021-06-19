export const doughnutLegends = [
  { title: 'Shirts', color: 'bg-blue-500' },
  { title: 'Shoes', color: 'bg-teal-600' },
  { title: 'Bags', color: 'bg-purple-600' },
]

export const lineLegends = [
  { title: 'Registrants', color: 'bg-teal-600' },
  { title: 'Scans', color: 'bg-purple-600' },
]

export const barLegends = [
  { title: 'Shoes', color: 'bg-teal-600' },
  { title: 'Bags', color: 'bg-purple-600' },
]

export const doughnutOptions = {
  data: {
    datasets: [
      {
        data: [33, 33, 33],
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: ['#0694a2', '#1c64f2', '#7e3af2'],
        label: 'Dataset 1',
      },
    ],
    labels: ['Shoes', 'Shirts', 'Bags'],
  },
  options: {
    responsive: true,
    cutoutPercentage: 80,
  },
  legend: {
    display: false,
  },
}

export const lineOptions = {
  data: {
    labels: ['Dec 1st', 'Dec 8th', 'Dec 15th', 'Dec 22nd', 'Dec 29th', 'Jan 5th', 'Jan 12th', 'Jan 18th', 'Jan 26th', 'Feb 2nd', 'Feb 9th', 'Feb 16th', 'Feb 23rd', 'March 2nd', 'March 9th','March 16th','March 23rd','March 30th','April 6th','April 13th','April 20th','April 27th','May 4th','May 11th','May 18','May 25','June 1st','June 8th','June 15th','June 17th'],
    datasets: [
      {
        label: 'Scans',
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: '#7e3af2',
        borderColor: '#7e3af2',
        data: [0,0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 81, 20, 72, 139, 149, 144, 151, 171, 213, 193, 122,134,191,210,174,171,189,44],
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
  legend: {
    display: false,
  }
}

export const barOptions = {
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Shoes',
        backgroundColor: '#0694a2',
        // borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [-3, 14, 52, 74, 33, 90, 70],
      },
      {
        label: 'Bags',
        backgroundColor: '#7e3af2',
        // borderColor: window.chartColors.blue,
        borderWidth: 1,
        data: [66, 33, 43, 12, 54, 62, 84],
      },
    ],
  },
  options: {
    responsive: true,
  },
  legend: {
    display: false,
  },
}
