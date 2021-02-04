// VAR GLOBALE
var tabPoule = [];
var nbSemaine;
var nbMois;
var nbAnnee;
var chiffreAffaire;
var chiffreAffaireAnnuel = 0;

// OBLIGATOIRE
function rouge() {
  var race = document.getElementById('race').value;
  var nom = document.getElementById('nom').value;
  var couleur = document.getElementById('couleur').value;
  var nb = document.getElementById('nb').value;

  // RACE
  if (race == '') {
    document.getElementById('erreurRace').style.display = "inline-block";
  } else {
    document.getElementById('erreurRace').style.display = "none";
  }

  // NOM
  if (nom == '') {
    document.getElementById('erreurNom').style.display = "inline-block";
  } else {
    document.getElementById('erreurNom').style.display = "none";
  }

  // COULEUR OEUF
  if (couleur == '') {
    document.getElementById('erreurCouleur').style.display = "inline-block";
  } else {
    document.getElementById('erreurCouleur').style.display = "none";
  }

  // NOMBRE OEUFS
  if (nb == '') {
    document.getElementById('erreurNBoeuf').style.display = "inline-block";
  } else {
    document.getElementById('erreurNBoeuf').style.display = "none";
  }
}

// FONCTION AJOUTER
function ajouter() {
  document.getElementById('poule').style.display = "block";
  document.getElementById('tableau').style.display = "none";
  var race = document.getElementById('race').value;
  var nom = document.getElementById('nom').value;
  var couleur = document.getElementById('couleur').value;
  var nb = document.getElementById('nb').value;
  var chiffreAffaire;


  var getPoule = tabPoule.find(allias => allias.nom === document.getElementById('nom').value);
  if (race != '' && nom != '' && couleur != '' && nb != '') {
    if (getPoule) {
      document.getElementById('doublon').style.display = "inline-block";
    } else {
      document.getElementById('doublon').style.display = "none";
      nbSemaine = Math.round(nb.value * 7);
      nbMois = Math.round((nbSemaine * 4.33) - ((nbSemaine * 4.33) * 0.05));
      nbAnnee = Math.round(nbMois * 12);

      if (couleur = 'beige') {
        chiffreAffaire = Math.round(1 * nbAnnee);
      }
      if (couleur = 'bleu') {
        chiffreAffaire = Math.round(1.2 * nbAnnee);
      }
      if (couleur = 'vert') {
        chiffreAffaire = Math.round(1.3 * nbAnnee);
      }
      if (couleur = 'brun') {
        chiffreAffaire = Math.round(2 * nbAnnee);
      }
      if (couleur = 'blanc') {
        chiffreAffaire = Math.round(1.6 * nbAnnee);
      }
      tabPoule.push({
        race: race,
        nom: nom,
        couleur: couleur,
        nb: nbOeuf.value,
        nbSemaine: nbSemaine,
        nbMois: nbMois,
        nbAnnee: nbAnnee,
        chiffreAffaire: chiffreAffaire
      });
      chiffreAffaireAnnuel += chiffreAffaire;
    }
    console.log(tabPoule)
  }
}

// FONCTION AFFICHER
function afficher() {
  document.getElementById('poule').style.display = "none";
  document.getElementById('tableau').style.display = "block";
  document.getElementById('chiffreAffaireAnnuel').innerHTML = "Le chiffre d'affaire annuel est de " + chiffreAffaireAnnuel + " €";
  document.getElementById('table').innerHTML = text;

}

// <!-- ,~. -->
//    <!-- ,-'__ `-, -->
//   <!-- {,-'  `. }              ,')
//  ,( a )   `-.__         ,',')~,
// <=.) (         `-.__,==' ' ' '}
//   (   )                      /)
//    `-'\   ,                    )
//        |  \        `~.        /
//        \   `._        \      /
//         \     `._____,'    ,'
//          `-.             ,'
//             `-._     _,-'
//                 77jj'
//                //_||
//             __//--'/`         
//           ,--'/`  ' -->