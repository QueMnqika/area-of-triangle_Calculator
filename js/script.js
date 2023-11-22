let inputBase = document.querySelector('#baseInput')
let inputHeight = document.querySelector('#heightInput')
let btn = document.querySelector('#btn')
let generatedOutput = document.querySelector('[data-output-value]')
let clear = document.querySelector('[data-clear]')

btn.addEventListener('click', (value) => {
    // let base = inputBase.value/2 
    results = inputBase.value/2 * inputHeight.value
    area = eval(results)
    generatedOutput.innerHTML = area + 'cm' + '<sup>2</sup>'
    setTimeout(() => {
        generatedOutput.textContent = ''
    }, 5000);
})

clear.addEventListener('click', (value) => {
    if (inputBase.value != '' || inputHeight.value != '') {
        inputBase.value = ''
        inputHeight.value = ''
    }
})