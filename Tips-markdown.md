## <span style="color:orange">Avant de commencer, quelques tips de base pour utiliser Markdown dans VSCode:</span>

* _ce_ (pour écrire en italique _ ce _ sans les espaces)
* **vraiment** (pour écrire en gras ** vraiment ** sans les espaces)
* on peut utiliser les deux dans la même ligne et les enjamber
* pour afficher les caractères litéraux sans les formater : avec "\ " avant le début du caractère et avant le caractère fermant
* `surligné` ( **\`surligné\`** pour écrire en surligné entre backtips - **3 backtips** pour surligné un bloc :)
  ```
  def codeblock_example():
  print("Hello world!")
  ```
  comme ceci : <br>
  \``` <br>
  def codeblock_example(): <br>
  print("Hello world!") <br>
  \```

* pour titrer : de niveau 1 (le plus gros) à niveau 6 (le plus petit) :

# Titre de niveau 1 (# Titre de Niveau 1)
## Titre de niveau 2 (## Titre de niveau 2)
### Titre de niveau 3 (### Titre de niveau 3)
#### Titre de niveau 4 (#### Titre de niveau 4)
##### Titre de niveau 5 (##### Titre de niveau 5)
###### Titre de niveau 6 (###### Titre de niveau 6)
<br>

* créer des liens vers d'autres sites web sur le Web
  * **lien inline** : [**Visitez GitHub !**](www.github.com) >> [**ton texte**](_ton lien_)<br>
tu peux faire de l'emphase avec du gras,<br>
tu peux créer des liens à l'intérieur des titres :
    #### Les dernières nouvelles de [la BBC](www.bbc.com/news)

  * **lien référence** : tu peux ainsi mettre les liens plusieurs et ne le changer qu'à un seul endroit pour les modifier tous :

    Voulez-vous [voir quelque chose d'amusant][un endroit amusant] ?
    Eh bien, est-ce que j'ai [le site Web pour vous][un autre endroit amusant] !

    [un endroit amusant]: www.zombo.com
    [un autre endroit amusant]: www.stumbleupon.com
\[un endroit amusant]: www.zombo.com <br>
\[un autre endroit amusant]: www.stumbleupon.com <br>

* créer des images :
  * **inline image link** : <br>
  ![Un joli tigre](https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg) <br>
  !\[Un joli tigre](https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg) <br>
    le "!" permet de créer directement le fichier en ligne (pour qu'on le voit directement, sinon ce n'est qu'un lien qui redirige vers l'image)<br>
  * **image de référence** : même principe (sans oublier le "!") <br>
    ![Chat noir][Noir] <br>
    ![Chat Orange][Orange] <br>

    [Noir]: https://upload.wikimedia.org/wikipedia/commons/a/a3/81_INF_DIV_SSI.jpg
    [Orange]: https://m.media-amazon.com/images/I/312pYGy9jJL._SX342_SY445_.jpg

    \![Chat noir\][Noir] <br>
    \![Chat Orange\][Orange] <br>

    \[Noir]: https://upload.wikimedia.org/wikipedia/commons/a/a3/81_INF_DIV_SSI.jpg <br>
    \[Orange]: https://m.media-amazon.com/images/I/312pYGy9jJL._SX342_SY445_.jpg

<br>

* créer une citation en bloc : ">" en préfixe du bloc (lignes vierges aussi)
  >"Ses yeux l'avaient appelé et son âme avait sauté à l'appel. Vivre, errer, tomber, triompher, recréer la vie à partir de la vie !"

* créer des listes non ordonnées :  préfacer chaque élément de la liste avec un astérisque (* )
  * Farine
  * Fromage
  * Tomates
    créer une liste ordonnée :
      1. Couper le fromage
      2. Trancher les tomates
      3. Frotter les tomates dans la farine
On peut imbriquer les listes

* tu peux créer des tableaux :

  | Header 1 | Header 2 | Header 3 | Header 4 |
  | -------- | -------- | -------- | -------- |
  | Row 1, Col 1 | Row 1, Col 2 |Row 1, Col 3 | Row 1, Col 4 |
  | Row 2, Col 1 | Row 2, Col 2 |Row 2, Col 3 | Row 2, Col 4 |

  En utilisante les | et les - :<br>

  | Header 1 | Header 2 | Header 3 | Header 4 | <br>
  | -------- | -------- | -------- | -------- | <br>
  | Row 1, Col 1 | Row 1, Col 2 |Row 1, Col 3 | Row 1, Col 4 | <br>
  | Row 2, Col 1 | Row 2, Col 2 |Row 2, Col 3 | Row 2, Col 4 | <br>
<br>
* Les fichiers Markdown supportent les balises **HTML** :
  * images avec les attributs HTML : <br>
  \<img src="https://upload.wikimedia.org/wikipedia/commons/a/a3/81_INF_DIV_SSI.jpg" alt="Alt text" width="200" height="200">

  * tu peux styliser avec du HTML et du CSS :<br>
  * \<span style="color:green">This is a green text.\</span> <br>
  <span style="color:green">This is a green text.</span>
