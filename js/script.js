// common function
function getInputValueById(inputId) {
    const inputFieldValue = document.getElementById(inputId)
    const inputValue = parseFloat(inputFieldValue.value)
    
    return inputValue

}


// Triangle Area Calculate
function triangleArea() {
    const base = getInputValueById("input-base")
    const height = getInputValueById("input-height")

    const area = 0.5 * base * height

    const areaDisplayField = document.getElementById('triangle-area-display')

    areaDisplayField.innerText = area;

}

// Rectangle Area Calculate

function rectangleArea() {
    const width = getInputValueById("input-width")
    const length = getInputValueById("input-length")

    const area = width * length

    const areaDisplayField = document.getElementById('rectangle-area-display')

    areaDisplayField.innerText = area;


}

// Parallelogram Area Calculate

function parallelogramArea() {
    const base = getInputValueById("input-parallel-base")
    const height = getInputValueById("input-parallel-height")

    const area = base * height

    const areaDisplayField = document.getElementById('parallelogram-area-display')

    areaDisplayField.innerText = area;


}
// Rhombus Area Calculate

function rhombusArea() {
    const d1 = getInputValueById("input-d1")
    const d2 = getInputValueById("input-d2")

    const area = 0.5 * d1 * d2

    const areaDisplayField = document.getElementById('rhombus-area-display')

    areaDisplayField.innerText = area;


}
// Pentagon Area Calculate

function pentagonArea() {
    const p = getInputValueById("input-p")
    const b = getInputValueById("input-b")

    const area = 0.5 * p * b

    const areaDisplayField = document.getElementById('pentagon-area-display')

    areaDisplayField.innerText = area;


}
// Pentagon Area Calculate

function ellipseArea() {
    const a = getInputValueById("input-a")
    const b = getInputValueById("input-ellipse-b")

    const area = Math.PI * a * b
    
    
    const areaDisplayField = document.getElementById('ellipse-area-display')

    areaDisplayField.innerText = area;


}
