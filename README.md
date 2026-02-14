# pedidos-veloz

# Loja Veloz – Plataforma de Pedidos

## Descrição
Projeto de **microsserviços** para a Loja Veloz, utilizando **Docker Compose** para desenvolvimento local.  
Arquitetura inclui:

- **API Gateway**
- **Serviço de Pedidos**
- **Serviço de Pagamentos**
- **Serviço de Estoque**
- **Banco de Dados PostgreSQL**

Todos os serviços sobem com um único comando, usando containers isolados e rede interna para comunicação.

---

## Pré-requisitos

- Docker Desktop instalado ([Link](https://www.docker.com/products/docker-desktop/))
- VS Code ou terminal

---

## Como Rodar

1. Abra o terminal na pasta do projeto (onde está `docker-compose.yml`).

2. Execute:

```bash
docker compose up --build
