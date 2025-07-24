# Hinweise zu Example 3

## Ziel
Dieses Beispiel zeigt, wie man mit Go ein schlankes, sicheres Container-Image mit Multi-Stage-Build erstellt.

---

## Was passiert hier?

- **Multi-Stage Build mit `golang:1.24` als Build-Umgebung**
  → Der Code wird in einem separaten Build-Container kompiliert

- **Erstellung eines nicht-root Benutzers (`appuser`)**
  → Für Sicherheit im finalen Container

- **`scratch` als Basis-Image für den Final-Container**
  → Enthält *gar nichts* außer der gebauten Binary → superkleines Image

- **Nur die benötigten Dateien werden übernommen:**
  - `/hello` Binary
  - `/etc/passwd` & `/etc/group` → damit der `USER appuser` funktioniert

- **`USER appuser`**
  → Container läuft **nicht als root**

- **`CMD ["/hello"]`**
  → Startet die gebaute Go-App beim Containerstart

---

## Ergebnis

✅ Ein extrem kleines, sicheres Container-Image (nur wenige MB) – perfekt für produktive Go-Anwendungen.

Bau das Image selbst:
```
docker build -t hello-scratch .
```

Vergleiche es mit der Größe von anderen Images:
```
docker images | grep hello-
```

Versuche dich mit dem Shell des Containers zu verbinden:
```
docker run -it hello-docker sh
docker run -it hello-scratch sh
```