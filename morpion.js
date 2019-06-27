// code ~100 lignes de code avec 5 fonctions
/* Done : nettoyer les commentaires */
// inner.html va nous permettre de dire qui a gagner

// TODO : renommer variable
// capturer toutes les cases
// Done  : améliorer titre function
// Définit le tour des X ou des O(return)                [!]
let i = 0;
const cases = document.querySelectorAll('.case');
/**
 * Crée une instance de Cercle
 * @constructor
 * @this {Cercle}
 * @param {number} r Le rayon désiré du cercle.
 */
function tour() {
  i++;
  return i % 2 === 0 ? 'O' : 'X';
}
let PlayerX = 0;
let element1 = document.getElementById("MyScore1");

let PlayerO = 0;
let element2 = document.getElementById("MyScore2");


// for Each=pour chacune tu appliques ce que je vais dire
/**
 * Crée une instance de Cercle
 * @constructor
 * @this {Cercle}
 * @param {number} gagnant Le rayon désiré du cercle.
 */
function afficherGagnant(gagnant) {
  alert(`${gagnant} a gagné !`);
  viderCase();
if ('X'=== gagnant) {
PlayerX++;
  }
else {
PlayerO++;
  }
element1.innerHTML = PlayerX
element2.innerHTML = PlayerO
}
/**
 * Crée une instance de Cercle
 * @constructor
 * @this {Cercle}
 * @param {number} cases Le rayon désiré du cercle.
 */
function tableauEstPlein(cases) {
  for (let i = 0; i < cases.length; i++) {
    if (cases[i].innerHTML=='') {
      return false;
    }
  }
  return true;
}
// Done : améliorer titre function
// exemple : conditionner l'appel à la fonctionitswon à 5 itérations
// (indice compteur de tours à 5)après 5 tour quelqu'un peut gagner  [!]
/**
 * Crée une instance de Cercle
 * @constructor
 * @this {Cercle}
 * @param {number} r Le rayon désiré du cercle.
 */
function isWon() {
// LIGNES

  // Done : commenter chaque cas de conditions avec l'observation.
  // Donc dans le cas "if" on va verifier que dans chaque case,
  // si il y a quelque chose dans les cases
  // horizontales et ensuite on va enregister
  // si il y a plusieurs cases du meme groupe (X) ou (O)
  if (cases[0].innerHTML !== '') {
    if (cases[0].innerHTML === cases[1].innerHTML) {
      if (cases[1].innerHTML === cases[2].innerHTML) {
        afficherGagnant(cases[0].innerHTML);
      }
    }
  }
  if (cases[3].innerHTML !== '') {
    if (cases[3].innerHTML === cases[4].innerHTML) {
      if (cases[4].innerHTML === cases[5].innerHTML) {
        afficherGagnant(cases[3].innerHTML);
      }
    }
  }
  if (cases[6].innerHTML !== '') {
    if (cases[6].innerHTML === cases[7].innerHTML) {
      if (cases[7].innerHTML === cases[8].innerHTML) {
        afficherGagnant(cases[6].innerHTML);
      }
    }
  }
  if (cases[0].innerHTML !== '') {
    if (cases[0].innerHTML === cases[3].innerHTML) {
      if (cases[3].innerHTML === cases[6].innerHTML) {
        afficherGagnant(cases[0].innerHTML);
      }
    }
  }
  if (cases[1].innerHTML !== '') {
    if (cases[1].innerHTML === cases[4].innerHTML) {
      if (cases[4].innerHTML === cases[7].innerHTML) {
        afficherGagnant(cases[1].innerHTML);
      }
    }
  }
  if (cases[2].innerHTML !== '') {
    if (cases[2].innerHTML === cases[5].innerHTML) {
      if (cases[5].innerHTML === cases[8].innerHTML) {
        afficherGagnant(cases[2].innerHTML);
      }
    }
  }
  if (cases[0].innerHTML !== '') {
    if (cases[0].innerHTML === cases[4].innerHTML) {
      if (cases[4].innerHTML === cases[8].innerHTML) {
        afficherGagnant(cases[0].innerHTML);
      }
    }
  }
  if (cases[2].innerHTML !== '') {
    if (cases[2].innerHTML === cases[4].innerHTML) {
      if (cases[4].innerHTML === cases[6].innerHTML) {
        afficherGagnant(cases[2].innerHTML);
      }
    }
  }
  // blabla : à ce stade vérifier que aucun des lignes diagonales
  // n'a 3 fois le meme signe (et qu'elles sont toutes pleines)
  // TODO : vérifier que else ne vérifie pas déjà l'égalité / match nul
  // else {console.log("match nul ?")}
  // Le jeu est fini Match nul
  // Pour damien rafraichir après une égalité
  // Mon joli commentaire
  if (tableauEstPlein(cases)) {
    viderCase();
    alert('Match nul !!!!');
  }
}
/**
 * Crée une instance de Cercle
 * @constructor
 * @this {Cercle}
 * @param {number} r Le rayon désiré du cercle.
 */
function viderCase() {
  const cases = document.querySelectorAll('.case');

  for (let i= 0; i < cases.length; i++) {
    cases[i].innerHTML = '';
  }
}
// permet de dire que pour chaque click on va avoir un X ou un O
// si ça n'éxiste pas et bien tu écris dedans / si éxiste tu n'écris pas dedans
// si mon compteur de tours inférieur à 4 rien, sinon verification
/**
 * Crée une instance de Cercle
 * @constructor
 * @this {Cercle}
 * @param {number} r Le rayon désiré du cercle.
 */
function jouer() {
  if (!this.innerHTML) this.innerHTML= tour();
  isWon();
}
// for each = pour chacune des cases tu appliques ce que je vais te dire
cases.forEach((elt) => elt.addEventListener('click', jouer));