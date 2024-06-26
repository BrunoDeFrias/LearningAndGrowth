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

## <span style="color:darkcyan;">Détection de la présence d'attaquants</span>

📚 **Logs** (ou **journaux d'évènements**) : chaque évènement qui se produit dans le SI (ouvrir un fichier, supprimer un dossier, accéder à une application…) sont tracées
↪️ permettent aux équipes de surveillance et de détection de vérifier si des events sont anormaux.

Cela grâce à un outil `SIEM`.

📚 **SIEM** (*Security Information & Event Management*, ou *gestion des informations et des événements de sécurité*) : permet de centraliser et d'analyser les traces dispos sur les différents éléments composant le SI;

#### L'équipe SOC (Security Operations Center)

➡️ Chargée de la détection d'activités suspectes ou malveillantes

* définir les événements qui doivent déclencher une alerte de sécurité ;
* paramétrer les outils en fonction des besoins ;
* mettre à jour régulièrement les règles de détection entraînant les alertes, et les procédures associées ;
* recevoir, trier et prioriser les alertes reçues via les outils mis en place ;
* analyser l’impact des incidents détectés ;
* alerter à un niveau supérieur si l’impact est important et/ou si la remédiation nécessite d’impliquer d’autres équipes (équipes de réponse à incident, notamment) ;
* proposer des recommandations pour remédier à certains incidents.

1. `Analyste de la menace `, ou *analyst threat intelligence*
   ➡️ chargée d'étudier l'évolution de la menace qui pèsent sur les organisations.*
     * collecter et analyser des données sur les attaquants
     * communiquer aux équipes chargées de détection sur ces attaquants potentiels
  ☝🏻 faire de la *veille*
<br>

### Les grandes étapes d’un incident selon l’ANSSI

<p align="center">
<img src="https://user.oc-static.com/upload/2024/06/21/17189636320327_Cyberse%CC%81curite_Static_01%20%281%29.png" alt="Temps de gestion d'incident" width="500" height="auto"></p>

#### Gestion de crise (pilotage)

1. Mobiliser les personnes et ressources nécessaires via une organisation en **cellules de crise**

📚 **Cellule de crise** : regroupement de personnes ayant comme priorité la résolution de la crise (processus ,moyens et outils préalablement définis) divisible en plusieurs cellules en fonction de la taille de l'entreprise, *dont la coordination et la communication entre elles sont des éléments clés de la gestion de la crise*

  * `cellule de crise stratétgique/décisionnelle` gérée par la direction de l'hôpital
  * `cellule de crise opérationnelle /technique` gérée pas le RSSI
  * `cellule de crise opérationnelle /métier` gérée par les membres de l'équipe du métier

2. Mettre en place les outils de communication entre les parties prenantes

📚 **Mode dégradé** : mode de fonctionnement sans les ressources (outils, locaux, personnel, etc.) habituelles
➡️ pour assurer la reprise des opérations le plus tôt possible et sans risque pour le SI

* **Pour la cellule de crise stratégique / décisionnelle** :
<p align="center">
<img src="https://user.oc-static.com/upload/2023/05/15/16841576590746_P2C2-1%20%282%29.png" alt="objectifs de la cellule de crise stratégique" width="500" height="auto"></p>

☝🏻 `PCA` : réduire les impacts d'indisponibilité des services menés habituellement par une organisation.

* **Pour la cellule de crise opérationnelle /technique**

<p align="center">
<img src="https://user.oc-static.com/upload/2023/05/15/16841578939016_P2C2-2%20%282%29.png" alt="objectifs de la cellule de crise opérationnelle" width="500" height="auto"></p>

⚠️ Les gestion de la crise réside en grande partie dans une bonne **communication**, avec les **équipes Communication** pour informer l'extérieur

#### Investigations

➡️ **Équipes d'investigation** après les premières investigations de l'équipe SOC, sur les incidents très complexes

* À quelles données, applications du système informatique, l’attaquant a-t-il eu accès ?
* Quelles actions a-t-il menées ?
* Comment est-il entré dans le système d'information ?

📚 **Analyse forensique** (*digital forensics*) : investigations numériques souvent menées par :
* **CERT** (*Computer Emergency Response Team*, ou *équipe de réponse aux urgences informatiques*)
* **CIRST** (*Computer Security Incident Response Team*, ou équipe de réponse aux incidents de sécurité informatique)
