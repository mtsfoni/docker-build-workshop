# Hinweise zu Übung 1

## Ziel
Erstelle ein Docker Image, das deine Node.js-App automatisch installiert und startet. Das Ziel ist, die Anwendung mit einem einzigen Befehl im Container auszuführen.

## Wichtige Dockerfile-Befehle
- **FROM**: Wähle ein passendes Basis-Image (z.B. node:22)
- **WORKDIR**: Setze das Arbeitsverzeichnis im Container (z.B. /app)
- **COPY**: Kopiere Quellcode und package.json ins Image
- **RUN**: Installiere Abhängigkeiten mit npm install
- **CMD**: Starte die App mit node index.js

## Tipp
Du kannst den Task Runner nutzen: Klicke auf den Button `Docker: Build and Run Exercise 1` unten im Explorer (linke Seite in VS Code). Damit werden Build und Run automatisch ausgeführt.

## Erwartetes Ergebnis
Der Container sollte beim Start die Node.js-App ausführen und die Begrüßung anzeigen:
```
🚀 Welcome to your first Dockerized Node.js app!
```

Viel Erfolg!
