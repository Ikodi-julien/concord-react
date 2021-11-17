TESTS AVANT DEPLOIEMENT CONCORD

* L'utilisateur peut se logguer depuis concord :
  - Redirigé vers auth-ikodi -> ok
  
* L'utilisateur a accès aux différentes pages:
  - Page discovery :
    - Affiche les salons -> ok
    - La recherche et le tri fonctionnent -> ok
  - Page paramètres :
    - Pseudo, email, tags, avatar sont corrects -> ok
    * L'utilisateur peut modifier ses paramètres :
      - Modif de pseudo :
        - auth-server DB -> ok
        - concord-server DB -> ok
      - Modif d'email ->
        - auth-server DB -> ok
        - concord-server DB -> ok
      - Modif de tags :
        - concord-server DB -> ok
      - Modif d'avatar :
        - concord-server DB -> ok
      - Modif de mot de passe :
        - Message en cas d'erreur -> ok
        - auth-server DB -> ok
      - Suppression du compte :
        - auth-server DB -> ok
        - concord-server DB -> ok
        - logout -> ok
      
  - Page Home :
    - Affiche les salons visités et recommandés -> ok
    

* Les salons (websockets) fonctionnent:
  - Affichage du salon avec messages et utilisateurs en DB -> ok
  - Affichage de mon pseudo dans la liste utilisateurs -> ok
  - Envoi message -> 
  - Mise à jour page Home -> ok
  
* Le logout fonctionne -> ok
