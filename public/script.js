
function calculate() {
    const rollWidth = parseFloat(document.getElementById('rollWidth').value);
    const graphicWidth = parseFloat(document.getElementById('graphicWidth').value);
    const graphicHeight = parseFloat(document.getElementById('graphicHeight').value);

    if (isNaN(rollWidth) || isNaN(graphicWidth) || isNaN(graphicHeight)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }

    const piecesPerRow = Math.floor(rollWidth / graphicWidth);
    const area = graphicWidth * graphicHeight;

    document.getElementById('result').innerText = `Pieces per row: ${piecesPerRow}\nArea : ${area.toFixed(2)} cm²`;
}