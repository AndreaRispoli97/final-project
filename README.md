# Final Project in Java: Scuola di Danza

Il mio progetto ha l'obiettivo di essere un gestionale per una scuola di danza creando un backoffice con Spring e un frontend con React per visualizzare i corsi disponibili con eventuali offerte.

---
## Frontend con React

Per i visitatori, senza autenticazione, è stata creata un app in React dove è possibile visionare tutti i corsi disponibili e, entrando nel dettaglio di un singolo corso, sarà presente una breve descrizione con eventuali promozioni, se presenti.
Quest'app comunica col backend tramite chiamate AJAX ad API REST, utilizzando la libreria Axios.

---
## Backend con Java

Dopo aver effettuato il login accediamo al gestione dove sarà possibile gestire:

- L'aggiunta/modifica/eliminazione di eventuali corsi.
- L'aggiunta/modifica/eliminazione di eventuali promozioni per ogni singolo corso.
- Visione di tutti gli studenti iscritti, con possibilità di aggiungere/modificare/eliminare, con possibilità di vedere i corsi a cui è iscritto ogni singolo studente.

Sono presenti sia relazioni 1:N(Corso:Promozioni) sia N:N(Studenti:Corsi).
Tutte le entità hanno implementate le operazioni CRUD.

## 🛠 Skills Usate
HTML, CSS, JavaScript, React, Axios, Node.js, Java, Spring Security, Spring Boot, Spring Data JPA, Hibernate, Maven, Thymeleaf.

## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/andrea-rispoli-b4a4a4388/)
## 🚀 Come iniziare

1. **Clona il repository**
   ```bash
   git clone https://github.com/AndreaRispoli97/final-project.git
   cd final-project
   ```

2. **Backend (Spring Boot)**
   - Requisiti: Java 17+, Maven
   - Vai nella cartella `/backend_java` e lancia:
     ```bash
     mvn spring-boot:run
     ```

3. **Frontend (React)**
   - Requisiti: Node.js 18+
   - Vai nella cartella `/frontend_react` e lancia:
     ```bash
     npm install
     npm start
     ```
