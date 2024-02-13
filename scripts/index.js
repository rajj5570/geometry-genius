function triangleAreaCalc(){
    const base = areaCalc('triangle-base');
    const height = areaCalc('triangle-height');
    const area = (base * height)/2;
    return area;
}

function areaCalc(inputId){
    const inputField =  document.getElementById(inputId);
    const inputText = inputField.value;
    const value = parseFloat(inputText);
return value;

}