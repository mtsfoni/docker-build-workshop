# docker-build-workshop

# Slides

---

Whats a dockerfile

-> Graphic:
Dockerfile -> Docker build -> Image -> Docker run -> Container

---

Basic Commands

`From`,  `Copy`, `Run`, `CMD`


---

Example-1

---

| Type                | Description                        | Use Case                              | Example                                                |
| ------------------- | ---------------------------------- | ------------------------------------- | ------------------------------------------------------ |
| `scratch`           | Empty. The abyss.                  | Final stage for compiled binaries     | `FROM scratch`                                         |
| `busybox`, `alpine` | Minimal Linux + POSIX tools        | Small containers, simple scripts      | `FROM busybox`, `FROM alpine`                          |
| SDK/Runtime Images  | Full-featured language stack       | Build & run apps (Java, .NET, Python) | `FROM mcr.microsoft.com/dotnet/sdk`, `FROM openjdk:17` |
| `distroless`        | Runtime-only, no shell, no baggage | Secure production deployments         | `FROM gcr.io/distroless/java`                          |



---

Example-3






further dockerfile settings

Brief mention of environment variables (ENV)
Healthchecks (HEALTHCHECK)


For documentation:

Exposing ports (EXPOSE)
Volume mounts (VOLUME)

outlook:

Tagging and pushing images to a registry



lets go like this:

Theory A (0-10):
- What is a Dockerfile
- Basic Dockerfile Commands
- Basic Base Image Overview

Exercise 1 (10-15)
Build a Dockerfile that execute the index.js in node

Theory B (15-25)
- Users
- Caching
- .dockerignore

Exercise 2 (25-30)
Showcase previosuly learned things


Theory Z (35-40):
Multistage Build
Scratch/Distroless

Excurse (40-45)
Multistagebuild with FROM scratch 