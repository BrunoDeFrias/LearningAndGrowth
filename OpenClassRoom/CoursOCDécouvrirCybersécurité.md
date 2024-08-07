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

☝🏻 `PCA` (*Plan de continuité d'activité*): réduire les impacts d'indisponibilité des services menés habituellement par une organisation.

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

Menée en **amont** (veille), **pendant** (collecte et analyse) et **après** (rapport et piste d'amélioration)

#### Remédiation

📚 (par l'ANSSI) projet de reprise de contrôle d'un SI compromis et rétablissement d'un état de fonctionnement suffisant

Par la cellule de crise opérationnelle / technique :
1. **Endiguement** : empêcher l'attaquant de progresser dans le système d'information
2. **Éviction** : chasser l'attaquant du coeur du SI pour en rétablir la confiance
3. **Éradication** : éliminer tout accès de l'attaquant des composants du SI
4. **Reconstruction** : En parallèle de l'*éviction* et de l'*éradication*, reconstruire et renforcer la sécurité de SI pour mieux résister à la présente attaque aux prochaines.

Lors de la **reconstruction** :

**Reprise** (*recovery*) : nettoyage, récupération des données (isolées, inaccessibles et saines), redémarrage des applications - ☝🏻 Bien connaître son SI

☝🏻 **PRA** (*Plan de reprise d'activité*) : essentiel pour prioriser les actions lors de cette phase

**Renforcement du SI** :
  * passer à une version Windows plus récente, avec les dernières maj de sécurité
  * installer de nvx outils de détection des cyberattaques
  * sensibiliser les users du SI au phishing
  * améliorer ses procédures utiles en cas d'attaques

➡️ **Retour d'expérience** (ou *RETEX*) organisées à chaud et à froid pour qu'en découle un **plan d'action**
↪️ = `améliorer la résilience de son SI`

📚 **résilience d'un SI** : capacité à fonctionner en cas d'incident ou de crise, à retrouver son fonctionnement normal le plus rapidement et le plus efficacement possible.
🕵🏻‍♂️ **Responsable de gestion de crise** pour assurer et améliorer la *résilience* d'une organisation
☝🏻 **participation à des exercices** pour assurer la résilience du SI en `testant la préparation de ses équipes et la pertinence de ses documents (procédure de gestion de crise, PCA, PRA)`

## <span style="color:darkcyan;">Organisation des professionnels de la cybersécurité</span>

### Les réglementations

Entre autres :
* 📚 **[RGPD](https://www.cnil.fr/fr/reglement-europeen-protection-donnees)** (*Règlement général sur la protection des données*) : règlement européen qui impose la sécurité à caractère personnel (art. 32) ou encore la notification à l'autorité de contrôle d''une violation des données à caractère personnel (art. 33)
* **La protection des infrastructures vitales** via la *loi de programmation militaire (LPM)* qui impose pour les OIV (Opérateurs d'Importance Vitale) des règles strictes renforçant la sécurité des organisations vitales pour la France.
* **Certification HDS** : hébergement de données de santé
* **PCI-DSS** (*Payment Card Industry Data Security Standard*) : pour encadrer la sécurité des paiements avec CB

### Les organisations diverses

* Les **régulateurs** (comme la CNIL) : qui posent les règles communes, des obligations légales à respecter
* les **fournisseurs de services sépcialisés en cybersécurité**
* les **éditeurs de solutions de sécurité**
* les **organisations publiques** qui collaborent avec les **agences gouvernementales de cybersécurité**
  * ANSSI (France)
  * l’ENISA (European Union Agency for Cybersecurity) au niveau européen
  * le NCSC (National Cyber Security Centre, ou Centre national de cybersécurité) en Grande-Bretagne
  * Le CCB (Centre for Cybersecurity Belgium) en Belgique ;
  * le CISA (Cybersecurity & Infrastructure Security Agency) aux États-Unis.

> Ces agences ont pour mission
> * coordonner les efforts concernant la cybersécurité sur leur territoire
> * accompagner les organisations et les particuliers dans la lutte contre les cyberattaques, notamment en fournissant des ressources et des services
> * agir dans les domaines politique, diplomatique et militaire pour protéger les infrastructures critiques du ou des pays concernés.

* les **institutions internationales non gouvernementales** publiant des documents qui font référence
  * **l'ISO** (*Internation Standard Organization*) : ISO 27000 (en particulier la norme ISO 27001 sur le management de la sécurité de l’information) pour la cybersécurité
  * le **NIST** (*National Institute of Standards and Technology*) : a publié le référentiel `cybersecurity framework`
* les **associations sépcialisées**
  * le **CLUSIF**
  * le **CESIN**
  * le **CLub 27001**

###  Valeurs portées par les acteurs de la cybersécurité

* **🫱🏻‍🫲🏿 Coopération entre tous les acteurs**
* **💪 Résilience**
* **🙏🏻 Humilité et amélioration continue**

###  Les équipes qui mettent en oeuvre la cybersécurité
* Equipe informatique ou équipe IT en collaboration forte avec
* Equipe de cybersécurité
* Equipe de développement

⚠️ **Enjeux** : introduire le plus en amont possible la sécurité par ces équipes
↪️ 📚 **sécurité "by design" et "by default**

🕵🏻‍♂️ **Ingénieur / responsable de la sécurité applicative** ou *security champions* au sein de l'équipe de développement ou **DevSecOps** pour  nommer l'intéfration de la sécurité à la chaîne de développement.
🕵🏻‍♂ **️Architecte sécurité** : responsable des choix techniques des projets, et s'assure qu'ils repectent les exigences de sécurité
🕵🏻‍♂ **️Auditeur de cybersécurité** : évaluation indépendantes de cybersécurité sur des sujets spécifiques de conformité (ISO 27001, RGPD, etc.)
`🕵🏻‍♂️ **Pentester** (ou *Auditeur de sécurité technique*) : évalue l'efficacité des mesures techniques de sécurité mises en place pour protéger des solutions. Il teste la sécurité en simulant des attaques, et propose des plans de correction aux vulnérabilités trouvées`

### Les équipes qui gèrent les priorités

📚 **Approche par le risque** : prioriser une liste de tâches qui peut sembler infinie

🕵🏻‍♂️ **Analyste des risques cybersécurité** : réalise des analyses de risques sur la base de processus de gestion des risques préalablement établies.
* identifier ce que l’entreprise souhaite protéger
* identifier, évaluer et prioriser les risques pesant sur l’organisation ou sur des périmètres spécifiques
* proposer un plan d’action permettant de traiter les risques identifiés
* faire valider et suivre la mise en œuvre du plan de traitement des risques
* communiquer avec les parties prenantes et leur rapporter les informations pertinentes

📚 **Risques en termes de conformité** : risques pouvant avoir des forts impacts légaux (sujets de conformité légale ou contractuelle : gestion des fournisseurs et des contrats, droit de propriété intellectuelle, protection des données personnelles, clauses de confidentialités dans les contrats des employés, etc.)
↪️ 🕵🏻‍♂️ **Chargé de conformité** : avec des normes et des réglementations de cybersécurité
* identifier les manquements en termes de conformité à des normes ou réglementations
* définir un plan de mise en conformité et piloter la mise en œuvre de ce plan
* coordonner les parties prenantes internes et externes participant à la mise en conformité
* contribuer à la stratégie de cybersécurité sur le volet conformité

 🕵🏻‍♂️ **délégué à la protection des données** (DPD ou DPO pour *Data Protection Officer*)

### Comment tout est orchestré

🕵🏻‍♂️ **RSSI** : prévenir et protéger :
* définir la stratégie et la feuille de route sécurité de l’organisation ou de son périmètre de responsabilité, en fonction des enjeux et des risques identifiés
* piloter l’organisation sécurité (recrutement, ressources, budget) ;
* représenter la sécurité en interne (auprès du comité de direction, des employés) et en externe (avec les autorités de régulation, les clients) ;
* définir les politiques de sécurité et piloter leur implémentation opérationnelle ;
* assurer la culture sécurité et la sensibilisation des employés ;
* contrôler le respect des politiques et procédures de sécurité (contrôles permanents, audits) ;
* selon la taille de l’organisation, le RSSI a également les mains dans l’opérationnel, et participe à la mise en œuvre de la feuille de route définie.

📚 **Zero trust** : vérifier que l'identité de la personne qui réaliser des actions sur le SI est bien celle qu'on pense être.

<p align="center">
<img src="https://user.oc-static.com/upload/2023/05/22/1684747396215_P3C4-1%20%281%29.png" alt="Organisation de l'équipe sécurité informatique" width="500" height="auto"></p>
