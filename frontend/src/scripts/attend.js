const canvas = document.body.querySelector('canvas');
const cxt = canvas.getContext('2d');
const labels = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];
const values = [25, 35, 20, 20];
const color = ['#282c37', '#9baec8', '#d9e1e8', '#2b90d9'];

// Total of all values
const total = data.values.reduce((a, b) => a + b, 0);

// Starting angle for the first wedge
let startAngle = 0;

// Loop through each value and draw a wedge
data.values.forEach((value, i) => {
    const endAngle = startAngle + (value / total) * Math.PI * 2;
    ctx.beginPath();
    ctx.arc(100, 100, 80, startAngle, endAngle);
    ctx.lineTo(100, 100);
    ctx.closePath();
    ctx.fillStyle = color[i];
    ctx.fill();
    startAngle = endAngle;
});
