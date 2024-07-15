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
