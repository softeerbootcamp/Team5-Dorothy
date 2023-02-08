const canvas = document.body.querySelector('canvas');

const CheckTime = [];

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
