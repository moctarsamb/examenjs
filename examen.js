//EXO 1
//===>1. Centrer, souligner, changer la police d'ecriture en "algerian" et colorier en "antiquewhite" le texte "Quatre Images Un Mot"
var titre = document.getElementById('titreJeu');
titre.setAttribute('align', 'center'); // ou bien titre.style.textAlign="center";
titre.style.textDecoration = 'underline';
titre.style.color = 'antiquewhite';
titre.style.fontFamily = 'algerian';
//===>2. Mettre le niveau 2 à la place du 1 du premier span
var niveau = document.getElementsByTagName('span')[0];
niveau.textContent = '2';
//===>3. Ajouter l'image 4.png manquante dans le tableau
var img = document.getElementById('img4');
img.setAttribute('src', 'images/4.png');
//===>4. Enlever les bordure du tableau
var table = document.getElementsByTagName('table')[0];
table.removeAttribute('border');
//===>5. Appliquer un border-radius de 20% à toutes les images du tableau
var allImgs = table.getElementsByTagName('img');
for (var i = 0; i < allImgs.length; i++) {
	allImgs[i].style.borderRadius = '20%';
}
//===>6. Afficher la lettre 'H' au bouton dont l'id = "lettre2" et la lettre 'L' à celui d'id="lettre4"
var lettre2 = document.getElementById('lettre2');
lettre2.textContent = 'H';
var lettre4 = document.getElementById('lettre4');
lettre4.textContent = 'L';
//===>7.Mettre 'Y' à la place de la lettre 'X';
var x = document.getElementById('6');
x.textContent = 'Y';
//===>8.Appliquer des padding à gauche et à droite du lien de class="btnRset"
var lien = document.getElementsByClassName('btnRset')[0];
lien.style.paddingLeft = '10px';
lien.style.paddingRight = '10px';
//===>9.Arrondire les bordures du lien de class="btnRset" de 15% et mettre son opacité a 0.3
lien.style.borderRadius = '15%';
lien.style.opacity = '0.3';
//===>10. Bonnus

//EXO2
//===>1. Ajouter le titre de page (<title>) "Examen JS"
var title = document.getElementsByTagName('title')[0];
title.textContent = 'Examen JS';
//
//Mettre une hauteur de 500px
//Changer la couleur de background en #393939
//===>2.Ajouter un élément hr avec le size=5 et la couleur = darkred dans la division de classe container
var hr = document.createElement('hr');
hr.setAttribute('size', '5');
hr.setAttribute('color', 'darkred');
var div2 = document.getElementsByClassName('container')[0];
div2.appendChild(hr);
//===>3.Ajouter une division avec class=exam, id="lastDiv", hauteur = 500px et couleur d'arrière-plan = #393939 dans la division de class="container"
var div = document.createElement('div');
div.setAttribute('class', 'exam');
div.setAttribute('id', 'lastDiv');
div.style.height = '500px';
div.style.backgroundColor = '#393939';
div2.appendChild(div);
//===>4.Changer le type de la liste ordonnée en i et de la liste non ordonnée en circle
var ol = document.getElementsByTagName('ol')[0];
ol.setAttribute('type', 'i');
var ul = document.getElementsByTagName('ul')[0];
ul.setAttribute('type', 'circle');
//===>5.Ajouter l'item "SVP!!! Sortez des qu'on vous le demande." à la liste non ordonnée et metter sa couleur à "darkred";
var newLi = document.createElement('li');
newLi.textContent = "SVP!!! Sortez des qu'on vous le demande.";
newLi.style.color = 'darkred';
ul.appendChild(newLi);
//===>6. Ajouter deux paragraphes séparés par un hr à la divison crée à la question N°3 avec les contenu suivant :
//1er Paragraphe : "Ceci est examen de JavaScrip et particulièrement sur le DOM"
//2ieme Paragraphe : "Document Object Model";
var p1 = document.createElement('p');
p1.textContent = 'Ceci est examen de JavaScrip et particulièrement sur le DOM';
var p2 = document.createElement('p');
p2.textContent = 'Document Object Model';
var hr2 = document.createElement('hr');
div.appendChild(p1);
div.appendChild(hr2);
div.appendChild(p2);
//===>7. Appliquer pour tous les paragraphes de la div d'id="lastDiv" :
//padding : 2%
//police : "veranda"
//taille : 300%
//align : center
var allP = div.getElementsByTagName('p');
for (var i = 0; i < allP.length; i++) {
	allP[i].style.padding = '2%';
	allP[i].style.fontFamily = 'veranda';
	allP[i].style.fontSize = '300%';
	allP[i].setAttribute('align', 'center');
}

//===>8. Remplacer les images 1.png, 2.png, 3.png et 4.png respectivement par 5.png, 6.png, 7.png, et 8.png.
//===>9. Afficher "Effacer" à la place de "reset" dans le lien de class="btnRset" au centre
var lien = document.getElementsByClassName('btnRset')[0];
lien.textContent = 'Effacer';

//===>10. Bonus (:
var reset = document.getElementsByClassName('lettre');
var lettresTTT = document.getElementsByClassName('btn btnLettre')
for (let index = 0; index < reset.length; index++) {
	const element = reset[index];
	element.innerHTML = '';
}
var objets = [];
var lettres = document.getElementsByClassName('lettre');
function change(ele) {
    var elemt = ele.id;
    var reponse = "";
	var lettres = document.getElementsByClassName('lettre');
	for (var j = 1; j <= lettres.length; j++) {
		var lettre = document.getElementById('lettre' + j);
		if (lettre.innerHTML == '') {
			lettre.innerHTML = ele.innerHTML;
			obj = {
				ancien: ele.id,
				nouveau: j
            };
            objets.push(obj)
            ele.innerHTML = ""
            reponse = reponse + ""+ lettre.innerHTML
			break;
        }
        else{
            reponse = reponse + ""+ lettre.innerHTML
        }
    }
    if (reponse.toUpperCase() == "CHALEUR") {
    }
}
function retour(ele){
    var nouv = ele.id.substring(6)
    var indexRetour = -1
    for(var j=0 ; j< objets.length ; j++) {
        var obj = objets[j]
        if(obj != null){  
            if (obj.nouveau == Number(nouv) ){
                for (let ind = 0; ind < lettresTTT.length; ind++) {
                    const element = lettresTTT[ind];
                    if (element.id == Number(obj.ancien)) {
                        element.innerHTML = ele.innerHTML;
                        ele.innerHTML = "";
                        indexRetour = j
                        break;
                    }   
                }
            }
        }

    };
    if(indexRetour != -1) objets[indexRetour] = null 
  }

function effacer() {
	var reset = document.getElementsByClassName('lettre');
	for (let index = 0; index < reset.length; index++) {
        const element = reset[index];
        if(element.innerHTML != "") retour(element);
    }
    
var images = document.getElementsByClassName('img')
    for(var i=0; i< images.length; i++){
        let element = images[i]
        element.src="images/" + (i+5)+ ".png"
    }
}
