
function showsidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}


function hidesidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
function showsearchbar() {
    const navbarsearchbar = document.querySelector('.navbarsearchbar')
    navbarsearchbar.style.display = 'flex'
}
 
let age = 12;
switch (age) {
    case 12:
        console.log("your not eligible");
        break;
    case 23:
        console.log("your eligible");
        break;
    default:
        console.log("actiom denied");
}
let i = 1;
do {
    console.log("huxun", i);
    i++;
}while(i <= 100)