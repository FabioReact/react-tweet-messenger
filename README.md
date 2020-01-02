## Instructions
Proposer une interface simple d'envoi et d'affichage de messages.<br />
Un message est composé d'un Pseudo, et d'un Texte.<br />
Un message peut être privé ou public. La distinction d'affichage reste à votre convenance.<br />

## Choix de l'affichage
Ici on ne parle pas de "conversation" je n'ai donc pas opté pour une conversation qui afficherait tous les messages entre deux personnes (type messenger).
On ne parle pas non plus de channel (on élimine ainsi une messagerie type Slack).<br />
J'ai donc opté pour un "tweeter like" où l'on peut envoyer un message public (donc un tweet) ou un message privé (comme un tweet à destinataire unique) pour répondre le plus fidèlement à la demande.<br />

## Choix technologiques
Il s'agit ici d'une application très succincte. J'aurais pu utiliser redux (ou autre librairie) mais ça faisait beaucoup de boilerplate pour cette application demo.<br />
Dans le cas d'une application plus importante j'aurais à minima utilisé React Context, ou bien Redux.<br />
J'ai cependant découpé mon application entre dossier "composants" (composants réutilisables à souhait) et "pages" (composant qui n'a pas vocation à être réutilisé ailleurs).<br />
J'ai également créé un custom hook (useFetch) afin de faire des fetchs beaucoup plus simplement et d'avoir un plus haut niveau d'abstraction.<br />
On gagnerait à mettre en place également un système de souscription ou à minima de polling en background.<br />
Je préfère également utiliser les modules css afin de créer des composants très réutilisables tout en ayant le style séparé du javascript.<br />
J'ai opté pour des functionnals component pour utiliser les dernières fonctionnalités mais j'aurais pu également le faire avec des class selon la version de React que vous utilisez.<br />
N'hésitez pas à me contacter si vous avez des questions ;). Merci de m'avoir lu.<br />

## Scripts nécessaires

Pour exécuter correctement cette application, il faudra exécuter ces deux scripts:<br />

### `yarn server`

Nécessaire au lancement au bon fonctionnement de cette application. Simile une API créé avec json-server. <br />
L'API sera disponible à cette adresse: [http://localhost:400](http://localhost:400).<br />
Un délai de 600 millisecondes à été volontairement ajouté pour simuler le temps de réponse d'un serveur distant.<br />
Une fois cette commande exécutée, vous pourrez alors faire un yarn start.<br />

### `yarn start`

Lance le serveur de développement.
L'application sera disponible à cette adresse: [http://localhost:3000](http://localhost:3000).<br />
