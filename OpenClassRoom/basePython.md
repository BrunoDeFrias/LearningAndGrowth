### print("Hello World!")

### Déclarer ou Inistialiser une variable
greetings = "Hello World"
age = 39
name = "Bob"
new_skill = "web developer"

### Afficher des variables
print(`f`"{greetings}, I'm {name} and {age} years old and I'm a {new_skill}")

### Déterminer le type de valeur
type()
print(f"Type nom: {type(nom)}")

### List
plateformes_sociales = ["Facebook", "Instagram", "Snapchat", "Twitter"]
plateformes_sociales[0] = "Facebook
plateformes_sociales[-1] = "Twitter"
* **ajout** plateformes_sociales.append("Tiktok")
* **remove** plateformes_sociales.remove("Tiktok")
* **size** len(plateformes_sociales) >>> 4
* **tri** plateformes_sociales.sort() (par ordre aphabétique)

### Tuples
plateformes_sociales_tuple = ("Facebook", "Instagram", "TikTok", "Twitter")

🔎 Les tuples utilisent aussi un index
⚠️ Les tuples sont **immuables**, alors que les listes sont **modifiables**

### Trouver un élément

    nombres = [1,2,3,4,5]
    5 in nombres
    True
    8 in nombres
    False

### Dictionary, "dict"

nouvelle_campagne = {
"responsable_de_campagne": "Jeanne d'Arc",
"nom_de_campagne": "Campagne nous aimons les chiens",
"date_de_début": "01/01/2020",
"influenceurs_importants": ["@MonAmourDeChien", "@MeilleuresFriandisesPourChiens"]
}

* **create** a dict : `newDict = {}` or `newDict = dict()`
  * `newDict[key] = value` (pour créer ou pour accéder à une valeur)
* **supprimer une paire clé-valeur** : `del newDict[key]`
* **vérifiez l'existence d'une clé spécifique** :
`key in newDict` >>> *True* or *False*

### Conditions

    if condition:
      sth
    elif condition:
      sth
    else:

⚠️ ne pas oublier les : après la conditions ou après else

* Opérateurs logiques **and**, **or**, **not**
* Expressions compartives *Egal à* : a == b | *non égal à* : a != b

Les *matchs case*

    fruit = "pomme"
    match fruit:
        case "pomme":
            print("J'aime les pommes !")
        case "banane":
            print("Je n'aime pas les bananes.")
        case "orange":
            print("Les oranges sont bonnes pour la santé.")
        case _:
            print("Je ne connais pas ce fruit.")

⚠️ ne pas oublier les :

🔎 **input()** équivalent de `get chomp`

### Boucles
#### For

    races_de_chien = ["golden retriever", "chihuahua", "terrier", "carlin"]
    for chien in races_de_chien:
      print(chien)

    for x in range(5):
      print(x)

#### While

    capacite_maximale = 10
    capacite_actuelle = 3
    while capacite_actuelle < capacite_maximale:
      capacite_actuelle += 1

##### Break
    for i in range(10):
      if i == 5:
        break
      print(i)

##### Continue
    liste = [1, 2, 3, 4, 5]
    for element in liste:
        if element == 3:
            continue
        print(element)

### Fonctions
    def calculer_somme(a, b):
      resultat = a + b
      return resultat


### Ecrire du bon code
1. écrire du code de façon structurée
2. **DRY** (*Don't Repeat Yourself*)
3. **Single Responsability** : chaque fontction doit être responsable d'une seule tâche
4. **Commentez** son code *#comme ceci*
5. **Documentez** son code (*docstrings*) :
avec les `"""`

        def somme(a, b):
          """
          Cette fonction calcule la somme de deux nombres et retourne le résultat.

          Parameters:
          a (int): le premier nombre
          b (int): le deuxième nombre

          Returns:
          int: la somme de a et b
          """
          return a + b

et `help(somme)` affiche la docstring de la fct somme

6. **Try/except** (affiche un msg d'erreur personnalisé sans faire cracher le programme):

    while True:
    try:
      x = int(input("Entrez un nombre entier : "))
      break
    except ValueError:
      print("Oops ! Ce n'est pas un nombre entier. Essayez encore...")

🔎 Tu peux mettre autant de *except* que tu veux
⚠️ un *except* par type d'erreur, ne pas tout regrouper en une seule erreur

7. Respectez les **standards de code** [PEP 8](https://peps.python.org/pep-0008/) et [PEP 20](https://www.python.org/dev/peps/pep-0020/)

### Importez des packages Python
#### Importer un module
    import mon_module.py
    resultat = mon_module.ma_fonction()
ou

    from mon_module import ma_fonction
    resultat = ma_fonction()

⚠️ Il est généralement recommandé de placer toutes les déclarations d'importation en début de fichier Python, avant toute autre instruction.

#### Créer et importer un package
📚 **Package** = un **dossier** contenant un **ensemble de modules** Python. Les packages permettent **d'organiser** votre code en sous-dossiers, et de créer des hiérarchies de modules.

Pour créer un package, vous devez simplement créer un dossier contenant un fichier nommé `__init__.py`  . Ce fichier est utilisé pour initialiser le package, et peut contenir du code d'initialisation si nécessaire.

    import mon_package.mon_module
    resultat = mon_package.mon_module.ma_fonction()
ou

    💡 from mon_package.mon_module import ma_fonction   .

🕵🏻‍♂️ De nombreux packages populaires sont disponibles sur des dépôts en ligne tels que [PyPI](https://pypi.org/), et peuvent être facilement installés à l'aide d'un gestionnaire de packages tel que `pip`  .

#### Installer des packages avec pip
📚 **pip** = gestionnaire de package Python
📚 **gestionnaire de package** = outil qui permet d’installer et de gérer des packages supplémentaires dans votre terminal.

    pip install <nom-du-package>
Pour voir les packages déjà installés :

    pip freeze

📚 Il va afficher une liste de tous les packages existants, qu’on appelle **dépendances**, dans votre terminal.

### Extraction web

📚 **ETL** (Extract, Transform, Load)
* ➡️ **Récupération** des données d'un site web
* ➡️ on les **formate** comme on le souhaite
* ➡️ **stockage** dans un fichier CSV

🌐 Package **Requests** avec la fct `.get()` pour récupérer le code HTML du site

    import requests

    url = "https://www.example.com"
    page = requests.get(url)

🔎 Il faut maintenant **parser** les éléments que nous voulons
↪️ avec le package **Beautiful Soup**

    import requests

    from bs4 import BeautifulSoup

    url = "https://www.gov.uk/search/news-and-communications"
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')

On peut accéder à tous les éléments de la page :

    soup.title
    soup.title.string
    soup.find_all('a')
    soup.find(id="lien1")
    soup.find_all("p", class_="title")
