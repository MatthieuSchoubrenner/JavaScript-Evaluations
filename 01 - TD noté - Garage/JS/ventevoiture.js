function calcul() {
  var marque = document.getElementById('marque').value;
  var modele = document.getElementById('modele').value;
  var type = document.getElementById('type').value;
  var origine = document.getElementById('origine').value;
  var kilometres = document.getElementById('km').value;
  var valeur = document.getElementById('valeur').value;
  var travaux = document.getElementById('travaux').value;

  if (marque == '') {
    document.getElementById('erreurMarque').innerHTML = 'Veuillez saisir la marque du véhicule';
    document.getElementById('erreurMarque').classList.add('error');
  } else {
    document.getElementById('erreurMarque').innerHTML = "";
  }
  // FIN MARQUE


  if (modele == '') {
    document.getElementById('erreurModele').innerHTML = 'Veuillez sélectionner le modèle du véhicule';
    document.getElementById('erreurModele').classList.add('error');
  } else {
    document.getElementById('erreurModele').innerHTML = "";
  }
  // FIN MODELE

  if (type == '') {
    document.getElementById('erreurType').innerHTML = 'Veuillez sélectionner le type de carburant';
    document.getElementById('erreurType').classList.add('error');
  } else {
    document.getElementById('erreurType').innerHTML = "";
  }
  // FIN TYPE

  if (origine == '') {
    document.getElementById('erreurOrigine').innerHTML = "Veuillez sélectionner le pays d'origine";
    document.getElementById('erreurOrigine').classList.add('error');
  } else {
    document.getElementById('erreurOrigine').innerHTML = "";
  }
  // FIN ORIGINE

  if (kilometres == '') {
    document.getElementById('erreurKm').innerHTML = 'Veuillez indiquez le nombre de kilomètres';
    document.getElementById('erreurKm').classList.add('error');
  } else {
    document.getElementById('erreurKm').innerHTML = "";
  }
  // FIN KILOMETRES

  if (valeur == '') {
    document.getElementById('erreurValeur').innerHTML = 'Veuillez indiquez la valeur neuve du véhicule';
    document.getElementById('erreurValeur').classList.add('error');
  } else {
    document.getElementById('erreurValeur').innerHTML = "";
  }
  // FIN VALEUR

  if (travaux == '') {
    document.getElementById('erreurTravaux').innerHTML = 'Veuillez indiquez si des réparations sont à faires';
    document.getElementById('erreurTravaux').classList.add('error');
  } else {
    document.getElementById('erreurTravaux').innerHTML = "";
  }
  // FIN TRAVAUX

  if (kilometres > 50000) {
    document.getElementById('btn').style.display = "none";
  }


  if (marque != '' && modele != '' && type != '' && origine != '' && kilometres != '' && valeur != '' && travaux != '') {
    document.getElementById('btn').style.display = "block";
  }

}

function estimation() {
  var marque = document.getElementById('marque').value;
  var modele = document.getElementById('modele').value;
  var type = document.getElementById('type').value;
  var origine = document.getElementById('origine').value;
  var kilometres = document.getElementById('km').value;
  var valeur = document.getElementById('valeur').value;
  var travaux = document.getElementById('travaux').value;
  var result = 0;

  // FRANCE-DIESEL-ESSENCE-TRAVAUX
  if (origine == 'france' && type == 'essence' && travaux == 'oui') {
    result = valeur - (kilometres * 0.10);

  } else if (origine == 'france' && type == 'essence' && travaux == 'non') {
    result = valeur - (kilometres * 0.09);
  }

  if (origine == 'france' && type === 'diesel' && travaux == 'oui') {
    result = valeur - (kilometres * 0.11);

  } else if (origine == 'france' && type == 'diesel' && travaux == 'non') {
    result = valeur - (kilometres * 0.10);
  }

  // ALLEMAGNE-DIESEL-ESSENCE-TRAVAUX
  if (origine == 'allemagne' && type == 'essence' && travaux == 'oui') {
    result = valeur - (kilometres * 0.06);

  } else if (origine == 'allemagne' && type == 'essence' && travaux == 'non') {
    result = valeur - (kilometres * 0.08);
  }

  if (origine == 'allemagne' && type == 'diesel' && travaux == 'oui') {
    result = valeur - (kilometres * 0.10);

  } else if (origine == 'allemagne' && type == 'diesel' && travaux == 'non') {
    result = valeur - (kilometres * 0.09);
  }

  // ITALIE-DIESEL-ESSENCE-TRAVAUX
  if (origine == 'italie' && type == 'essence' && travaux == 'oui') {
    result = valeur - (kilometres * 0.05);

  } else if (origine == 'italie' && type == 'essence' && travaux == 'non') {
    result = valeur - (kilometres * 0.07);
  }

  if (origine == 'italie' && type == 'diesel' && travaux == 'oui') {
    result = valeur - (kilometres * 0.09);

  } else if (origine == 'italie' && type == 'diesel' && travaux == 'non') {
    result = valeur - (kilometres * 0.08);
  }

  document.getElementById('marque2').innerHTML = marque;
  document.getElementById('modele2').innerHTML = modele;
  document.getElementById('type2').innerHTML = type;
  document.getElementById('km2').innerHTML = kilometres;
  document.getElementById('origine2').innerHTML = origine;
  document.getElementById('travaux2').innerHTML = travaux;
  document.getElementById('result').innerHTML = "Le prix estimé sera donc de: " + Math.round(result) + " €";
  document.getElementById('result').classList.add('success');
}