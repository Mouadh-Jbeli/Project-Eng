function afficherDate() {
    let time = new Date()
    const jourFrnc  = [ "Lundi" , "Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"]
    const jourAng = time.toString().substring(0,3)
    let indice
    switch (jourAng) {
    case 'Mon': indice = 0; break;
    case 'Tue': indice = 1; break;
    case 'Wed': indice = 2; break;
    case 'Thu': indice = 3; break;
    case 'Fri': indice = 4; break;
    case 'Sat': indice = 5; break;
    case 'Sun': indice = 6; break;
}   
    const nomMois = ["Janvier" , "fevrier" , "mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","decembre"]
    let jour = jourFrnc[indice]
    let numjour = time.getDate()
    let mois =nomMois[time.getMonth()]
    let anne = time.getFullYear()
    
    if (numjour < 10) {
        numjour = "0" + numjour

        
    }
    document.getElementById("dateFooter").innerHTML = jour + " " + numjour + " " + mois+" "+anne+" "


    
}
function playVideo() {
  const v = document.getElementById('pubVideo');
  if (!v) return;
  v.play();
  const desc = document.getElementById('adDesc');
  if (desc) desc.style.display = 'none';
}
function pauseVideo() {
  const v = document.getElementById('adVideo');
  if (!v) return;
  v.pause();
  const desc = document.getElementById('adDesc');
  if (desc) desc.style.display = 'block';
}