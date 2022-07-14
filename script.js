function openNav() {
    
    let abrir = document.getElementById('navigation');

    if (abrir.className === "navigation") {
        abrir.className += " menujs";
        document.getElementById('treeline-icon').innerHTML = '&Cross;';
    } 
    
    else {
        abrir.className = 'navigation';
        document.getElementById('treeline-icon').innerHTML = "&#9776;";
    }
}