# <span style="color:darkred;">Découverte cybersécurité</span>

## <span style="color:darkcyan;">La CNIL</span>

`Commission Nationale de l'Informatique et des Libertés`
Elle est le **régulateur des données personnelles** : elle aide les professionnels et les particuliers à protéger ce type de données.

## <span style="color:darkcyan;">Système d'information (SI)</span>

📘 **Définition** :

* `SI` : l’ensemble des ressources informatiques d’une organisation (ordinateurs, tablettes, serveurs, logiciels, applications, objets connectés, etc.), des ressources organisationnelles et des ressources humaines utiles pour traiter de l’information. Vous le trouverez aussi sous la dénomination SI, utilisée dans le reste du cours.

* `Vulnérabilité` ou `faille`
    - ➡️ faiblesse dans le SI qui peut être utilisé pour lancer une attaque.
    - ↪️ `exploitation de vulnérabilité`

☝🏻 MdP faible = vulnérabilité

*Swiss Cheese Model*
<!-- !["Swiss Cheese Model"](https://user.oc-static.com/upload/2023/05/15/16841577969373_P1C3-1%20%283%29.png) -->
<p align="center">
<img src="https://user.oc-static.com/upload/2023/05/15/16841577969373_P1C3-1%20%283%29.png" alt="Swiss Cheese Model" width="400" height="auto"></p>

---

**🕵🏻‍♂️ Équipes d'investigation**
➡️ Reconsitution des étapes de l'attaque
###### Concepts à connaître :
📚 **Dark Web** : anonymat - espace d'achat / vente de données ou logiciels malveillants
📚 **Logiciel malveillant** ou **malware** : (*malicious software*) pour nuire à un SI
📚 **Phishing** ou **hameçonnage** : technique pour escroquer des victimes et récupérer leurs données
📚 **Chiffrement** : procédé par lequel on rend des données lisible uniquement par la personne qui détient ce qu'on appelle une **"clé de chiffrement"**
📚 **Kill chain** : concept permettant de modéliser l'enchaînement des actions d'un attaquant

*Kill Chain :*
<p align="center">
<img src="https://user.oc-static.com/upload/2023/04/25/1682428501913_P1C3-2%20%281%29.png" alt="Kill Chain" width="500" height="auto"></p>

1. **Reconnaissance** : l’attaquant recherche et identifie sa cible.
2. **Armement** : l’attaquant crée ou achète son outil d’intrusion (un logiciel malveillant, ou malware) sur le dark web. Ce malware exploite une ou plusieurs vulnérabilités dans le système d’information cible.
3. **Livraison** : le logiciel malveillant est transmis à la cible (dans la pièce jointe d’un mail ou via une clé USB, par exemple).
4. **Exploitation** : le logiciel malveillant exploite la vulnérabilité identifiée au préalable, c’est-à-dire qu’il tire parti des faiblesses du système d'information cible.
5. **Installation** : l’attaquant s'introduit sur le système d'information cible et, via des “mouvements latéraux”, infecte d’autres éléments du système d'information (autres ordinateurs, autres comptes utilisateurs, etc.). Il étudie le système de l’intérieur.
6. **Commandement et contrôle** : l’attaquant s’installe de façon permanente dans le système d'information cible.
7. **Actions sur l’objectif** : l’attaquant réalise ses objectifs initiaux, tels que le vol de données, la destruction de données, ou le chiffrement pour demander une rançon.



[MITRE ATT&CK](https://attack.mitre.org/) : *ATT&CK pour Adversarial Tactics, Techniques, and Common Knowledge*
➡️ modèles plus pointus pour décrypter les attaques

## <span style="color:darkcyan;">Qui sont les attaquants ?</span>

📚 **Menace** : cause potentielle d'un évènement qui nuit à une victime via des impacts organisationnels, financiers, légaux et en termes d'images.
📚 **La surface d’attaque** : ensemble des composants d’un système d'information qui peuvent être attaqués. Plus on ajoute de composants au système d'information (nouveau logiciel, nouvel objet connecté, etc.), plus la surface d’attaque augmente.

#### Les types d'attaques les plus courants

* **Déni de service,** ou **DDOS** (*Distributed Denial of Service*)
  ↪️ attaquer pour faire **tomber** un site internet par exemple.
  ❓ nombreuses requêtes envoyées simultanément en très grand nombre depuis une multitude de robots.
  📚 **sabotage**
<br>

* **Attaques de type ingénierie sociale**
  ↪️ Exploiter des erreurs ou comportements humains
  📚 comme le **phishing**
  ➡️ Impact financiers et légaux (fuite de données, entrée dans un SI)
  ☝🏻 Visent bcp les particuliers (mails, SMS, call)
  <br>

* **Malware**
  ↪️ paralyser le SI, ou l'ordinateur d'un particulier (Cheval de Troie, virus informatique)
  📚 **ransomware**
  ☝🏻 attaques souvent *combinés* pour réussir à s'introduire dans un SI
<br>

* **Supply chain** (ou *attaque de la chaîne logistique*)
  ↪️ attaquer une cible via un de ses fournisseurs, en 2 tps, SI du fournisseur puis sur la cible finale.
