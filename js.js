let input=document.querySelectorAll('input');
console.log(input);
input.forEach((value)=> {
    console.log(value);
    value.setAttribute('readonly');
});