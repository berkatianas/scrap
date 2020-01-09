// On définit un tableau au départ
const table = [-77, -2, 3, -4, 7, 8, 9, 5];

// On suppose que le tableau ne contient par de chiffre 0 à la base, alors on le push
table.push(0);
// On fait un tri du plus petit au plus grand (Oui pour classer le zero dans le tableau)
table.sort((a, b) => a - b);
// On boucle sur le tableau pour chercher le zero, le but c'est de récupérer les 2 chiffres avant et apres le zero
for (let i = 0; i < table.length; i++) {
  // on cherche le Zero
  if (table[i] === 0) {
    // Quand on le trouve, on vérifie la valeur absolue des 2 chiffres
    if (Math.abs(table[i - 1]) < Math.abs(table[i + 1])) {
      // On affiche le chiffre le plus grand
      console.log(table[i - 1]);
    } else console.log(table[i + 1]);
  }
}
//Affichage du tableau
console.log(table);

// Je n'ai pas fait le cas si un tableau contien des String ou des VAR, j'ai essayé d'etre
//le plus simple possible pour vous montrer le résultat
