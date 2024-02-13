

function triangleCalc(){
    const base = getValueById('triangle-base');
    const height = getValueById('triangle-height');
    const area = (base * height)/2;
    showResult('result-triangle',area);
    return area;

}

function rectangleCalc(){
    const width = getValueById('rectangle-width');
    const height = getValueById('rectangle-height');
    const area = height * width;
    showResult('result-rectangle', area);
    return area;
}

function getValueById(elementID){
    const inputField = document.getElementById(elementID);
    const inputValue = inputField.value;
    const value = parseFloat(inputValue);
    return value;
}

function showResult(element,area){
    const result = document.getElementById(element);
    result.innerHTML = area+' cm<sup>2</sup>';
}








// function triangleCalc(){
//     const inputBase = document.getElementById('triangle-base');
//     const inputBaseText = inputBase.value;
//     const base = parseFloat(inputBaseText);
//     console.log(base);

//     const inputHeight = document.getElementById('triangle-height');
//     const inputHeightText = inputHeight.value;
//     const height = parseFloat(inputHeightText);
//     console.log(height);
    

//     const area = (base*height)/2;
//     console.log(area);
//     triangleResult(area);
//     return area;
    

    
// }

// function triangleResult(area){
//     const triangle = document.getElementById('result');
//     triangle.innerHTML= area+'cm<sup>2</sup>';

// }