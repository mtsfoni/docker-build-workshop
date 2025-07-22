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

