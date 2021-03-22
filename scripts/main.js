/*const heading = document.querySelector('h1');
heading.textContent = 'SHEEEIT';*/
let cc = 0;
document.querySelector('html').onclick = function()
{
    cc = cc + 1;
    /*if(cc === 20)
    {
        alert('please stop clicking so much');
        cc = 0;
    }*/
    document.querySelector('label').textContent = cc;
}