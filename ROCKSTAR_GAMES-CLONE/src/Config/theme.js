export const media = {
    desktop: '1440px',
    tablet: '1024px',
    mobile: '500px'
}

const theme = {
    ...media,
    stockFont: `Noto Serif TC, serif`,
    mainBackgroundColor: 'rgb(252, 175, 23)',
    // colorBackground: (opacity = 1) => `rgba(33, 38, 47, ${opacity})`,
    boxShadow: '0 2px 5px 0 rgb(0 0 0 / 10%)'
}

export default theme;
