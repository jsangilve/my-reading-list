# Welcome - Agent Communication Protocol

**Source:** https://agentcommunicationprotocol.dev/introduction/welcome
**Author:** BeeAI / Linux Foundation
**Published:** 2026 (date not specified)

---

## TLDR

ACP (Agent Communication Protocol) is an open, vendor-agnostic REST-based protocol that enables AI agents built with different frameworks to communicate and collaborate seamlessly, solving the fragmentation problem in modern AI systems.

---

## Key Takeaways

- **Solves agent fragmentation:** Modern AI agents are built in isolation across different frameworks (LangChain, CrewAI, custom code), making interoperability difficult. ACP provides a standardized bridge.
- **REST-based, no SDK required:** Uses familiar HTTP conventions, works with curl/Postman out of the box. Python and TypeScript SDKs available for those who want them.
- **Supports all modalities:** Uses MimeTypes for content identification — text, images, audio, video, or custom binary formats all work without protocol modifications.
- **Async-first with sync support:** Built for long-running agent tasks but fully supports synchronous communication.
- **Offline discovery:** Agents can be discovered even when inactive by embedding metadata in distribution packages.
- **Open governance:** Developed under Linux Foundation alongside BeeAI as reference implementation.

---

## Summary

The Agent Communication Protocol (ACP) addresses a growing problem in AI development: agents built with different frameworks can't easily work together. Teams rebuild similar functionality, point-to-point integrations don't scale, and each framework has its own patterns.

ACP solves this by providing a standardized RESTful API that supports synchronous and asynchronous communication, streaming, stateful and stateless patterns, and online/offline agent discovery. The protocol is implementation-agnostic — it doesn't care how your agent is built internally.

The article outlines several use cases: flexible agent replacement (swap agents without modifying integration points), multi-agent collaboration (specialized agents working as coordinated teams), cross-platform integration (connecting agents across your tech stack), and inter-company partnerships (secure agent collaboration between organizations).

Key technical features include REST-based communication using standard HTTP patterns, MimeType-based content handling for any data format, and async-first design for long-running tasks. The protocol is simple enough to use with curl but has official SDKs for Python and TypeScript.
