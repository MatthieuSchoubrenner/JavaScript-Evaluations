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
  var nb = document.getElementById('nbOeuf').value;
  var chiffreAffaire;


  var getPoule = tabPoule.find(allias => allias.nom === document.getElementById('nom').value);
  if (race != '' && nom != '' && couleur != '' && nb != '' && couleurPoule != '') {
    if (getPoule) {
      document.getElementById('doublon').style.display = "inline-block";
    } else {
      document.getElementById('doublon').style.display = "none";
      nbSemaine = Math.round(nbOeuf.value * 7);
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
        couleurPoule: couleurPoule,
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

  var text = '<tr>';
  text += '<td>Race</td>';
  text += '<td>Nom</td>';
  text += '<td>Couleur de poule</td>';
  text += '<td>Couleur oeuf</td>';
  text += '<td>oeuf par jour</td>';
  text += '<td>oeuf par semaine</td>';
  text += '<td>oeuf par mois</td>';
  text += '<td>oeuf par annee</td>';
  text += '<td>chiffre affaire annuel</td>';
  text += '</tr>';

  tabPoule.sort((a, b) => {
    return a.nb - b.nb
  });
  tabPoule.reverse();

  for (res of tabPoule) {
    text += '<tr>';
    text += '<td>' + res.race + '</td>';
    text += '<td>' + res.nom + '</td>';
    text += '<td>' + res.couleurPoule + '</td>';
    text += '<td>' + res.couleur + '</td>';
    text += '<td>' + res.nb + '</td>';
    text += '<td>' + res.nbSemaine + '</td>';
    text += '<td>' + res.nbMois + '</td>';
    text += '<td>' + res.nbAnnee + '</td>';
    text += '<td>' + res.chiffreAffaire + '</td>';
    text += '</tr>';
  }
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