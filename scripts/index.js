
// triangle function
function triangleCalc(){
    const base = getValueById('triangle-base');
    const height = getValueById('triangle-height');
    const area = (base * height)/2;
    showResult('result-triangle',area);
    return area;

}
// rectangle function
function rectangleCalc(){
    const width = getValueById('rectangle-width');
    const height = getValueById('rectangle-height');
    const area = height * width;
    showResult('result-rectangle', area);
    return area;
}

// parallelogram function
function parallelogramCalc(){
    const base = getValueById('parallelogram-base');
    const height = getValueById('parallelogram-height');
    const area = base * height;
    showResult('result-parallelogram',area);
    return area;
}

// rhombus function
function rhombusCalc(){
    const d1 =getValueById('rhombus-d1');
    const d2 =getValueById('rhombus-d2');
    const area = d1 * d2;
    showResult('result-rhombus',area);
    return area;
}

// pentagon function
function pentagonCalc(){
    const perimeter = getValueById('pentagon-perimeter');
    const apothem = getValueById('pentagon-apothem');
    const area = (perimeter*apothem)/2;
    showResult('result-pentagon',area);
    return area;
}

// ellipse function
function ellipseCalc(){
    const a = getValueById('a');
    const b = getValueById('b');
    const area = 3.14*a*b;
    showResult('result-ellipse',area);
    return area;
}

// common function for getting parameter value from a figure
function getValueById(elementID){
    const inputField = document.getElementById(elementID);
    const inputValue = inputField.value;
    const value = parseFloat(inputValue);
    return value;
  
}

// common function for showing result on html
function showResult(element,area){
    if(area >0){
        const result = document.getElementById(element);
        result.innerHTML = area+' cm<sup>2</sup>';
    }else{
        alert('invalid input');
        return;
    }
}

// common function for hover background
const hoverEffect = document.getElementsByClassName('card');
hoverEffect.addEventListener('onmousemove',function(){
    hoverEffect.style.background = "#FBBCED";
})











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