# Neurogine Core Network Module

A centralized networking infrastructure module responsible for handling API communication, asynchronous data fetching, request/response interceptors, server-state caching, and shared data stores within the Neurogine mobile ecosystem.

---

## 🏛️ Module Responsibility

As part of the **Neurogine Micro-Module Architecture**, this repository serves as the single source of truth for all networking and data synchronization concerns:

* **API Interceptors & Client:** Houses base Axios/HTTP client configurations, global header injections, and error interceptors.
* **Server State Management:** Encapsulates **TanStack Query (React Query)** wrappers, custom hooks, and caching strategies.
* **Shared Network Store:** Manages central cache stores, token state persistence, and global network status.
* **Network Contracts:** Provides strict TypeScript interfaces for API requests, responses, and error payloads.

---

## 🛠️ Tech Stack & Standards

| Category | Technologies |
| :--- | :--- |
| **Framework & Language** | React Native, TypeScript |
| **Package Manager** | Yarn |
| **HTTP Client** | Axios |
| **Server State & Caching** | TanStack Query (React Query) |

---

## 📁 Directory Structure

```text
neurogine-core-network/
├── src/
│   ├── Api/        # Axios instances, HTTP clients, and endpoint callers
│   ├── Query/      # TanStack Query custom hooks, query clients, and mutation helpers
│   ├── Store/      # Network state storage, cache handlers, and middleware
│   └── Types/      # API interfaces, response wrappers, and network types
├── package.json
└── tsconfig.json