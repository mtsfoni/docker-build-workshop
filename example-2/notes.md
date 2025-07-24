# Hinweise zu Übung 2

## Ziel
Verbessere die Dockerfile, sodass die Node.js-App sicher und effizient gebaut wird. Achte auf Caching, entferne unnötige Dateien und vermeide, dass der Container als root läuft.

Achte dabei besonders auf:
- ⚡ **Caching optimieren**: Installiere Dependencies früh, bevor du alles andere kopierst
- 🧹 **Unnötige Dateien ignorieren** mit `.dockerignore`
- 🔐 **Nicht als root** laufen lassen: Erstelle einen Benutzer und nutze `USER`

## Wichtige Dockerfile-Erkenntnisse

- **.dockerignore funktioniert wie .gitignore**  
  → Alles, was nicht ins Git gehört (z. B. `node_modules`, `.env`, `.git`), gehört auch nicht ins Docker-Image

- **Caching basiert auf der Reihenfolge der Befehle**  
  → Je früher sich etwas ändert, desto eher wird alles danach neu gebaut  
  💡 Faustregel: `COPY package.json` + `RUN npm install` zuerst, erst danach den Rest

- **Container sollten nicht als root laufen**  
  → Ein eigener User erhöht die Sicherheit  
  Beispiel:
  ```dockerfile
  RUN groupadd -r appuser && useradd -r -g appuser appuser
  USER appuser

## Tipp
Nutze den Task Runner: Klicke auf den Button `Docker: Build and Run Exercise 2` unten im Explorer (linke Seite in VS Code). Damit werden Build und Run automatisch ausgeführt.

## Erwartetes Ergebnis
Der Container sollte beim Start die App sicher ausführen und die Meldung anzeigen:
```
✅ App is running!
```

Viel Erfolg!