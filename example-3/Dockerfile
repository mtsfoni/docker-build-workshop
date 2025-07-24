FROM golang:1.24 AS builder

# Create unprivileged user and group
RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser

WORKDIR /src
RUN go mod init example.com/hello

COPY hello.go .
RUN go build -ldflags="-s -w" -o hello

FROM scratch

# Copy binary and use non-root user
COPY --from=builder /etc/passwd /etc/passwd
COPY --from=builder /etc/group /etc/group
COPY --from=builder /src/hello /hello

USER appuser

CMD  ["/hello"]
