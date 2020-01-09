//la méthode reduce permet tout simplement d'appliquer une fonction
//qui est un acculumateur qui a pour but de traiter chaque valeur d'un array
//pour la réduire et ne rendre qu'une seule variable à la fin.

// Pour votre exemple : [ 0, 1, 2, 3, 4 ].reduce( ( acc, curr ) => acc + curr, 10);
// la ligne de code va rendre la valeur 20 je vous explique pourquoi:

// la méthode fera la somme de chaque valeur du tableau,et à la fin va ajouter cela à 10 qui est
// le dernier parametre de la fonction.

// Si par exemple on aura acc - curr au lieu de acc+curr, on aurai du avoir 0 :
// Car ce qui allait s'éxecuter normalement c'est 10-10 qui est 0.
