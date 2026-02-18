# Existential Dread and the End of Programming

**Source:** https://davidwhitney.co.uk/blog/2026/02/17/existential_dread_and_the_end_of_programming/
**Author:** David Whitney
**Published:** 2026-02-17

---

## TLDR

After decades of incremental AI progress, late 2025 frontier models (Anthropic Opus 4.6, Google Codex) combined with tooling like Claude Code and OpenCode have fundamentally changed software development—autonomous agents can now complete complex programming tasks that would take experienced engineers weeks to solve, in hours or days. The author believes this marks "the end of programming" as a profession, grappling with existential dread about the future of their lifelong craft while acknowledging the unprecedented productivity gains.

---

## Key Takeaways

- **The temperature changed**: AI coding tools crossed from "neat trick" to genuinely category-defining in late 2025, capable of autonomous multi-day programming tasks
- **Real-world impact**: Author solved a complex mainframe data extraction/reverse engineering problem in days that would normally take weeks—the AI decompiled Win32 executables, identified compression algorithms, and built custom renderers
- **Code has no intrinsic value anymore**: When everyone has access to tools that can generate code nearly for free, traditional software economics break down
- **Programming languages frozen**: New language adoption unlikely because models work best with JavaScript, Python, C#, Java due to training data—we're "generationally stuck" with current languages
- **Enterprise shift**: Small teams of "taste-makers" will orchestrate AI agents across entire systems rather than teams owning individual components
- **Human cost**: Unclear where next generation of software experts will come from if they don't get enough "time under the desk" doing repetitions to develop good taste
- **Not AGI required**: Models don't need to get significantly better—current capabilities + better tooling (MCP, context management) are already transformative

---

## Summary

David Whitney, a programmer since age 11, describes experiencing an existential crisis as he realizes AI-assisted programming has crossed a threshold from useful tool to potential profession-ender. After taking time off in late 2025, he returned to find the latest frontier models (Anthropic's Opus 4.6, Google's Codex) combined with tools like Claude Code and OpenCode can now autonomously complete complex programming tasks that would take experienced teams weeks or months.

He provides a striking example: given only encrypted mainframe data with no schema and a 1990s Win32 viewer tool, an AI agent reverse-engineered the entire system in two days. It detected compression patterns, decompiled the executable, identified the encryption library and hard-coded keys, and built a compatible renderer—work that would normally take a skilled team weeks. Simultaneously, he had other agents completing languishing side projects and building architectural visualization systems, experiencing unprecedented productivity while feeling "exhausted" and like a "baby dev again" trying to keep up with the pace of AI-generated code.

Whitney argues this fundamentally changes software economics: when code is nearly free to generate, it has no intrinsic value. Traditional SaaS business models break down when anyone can generate custom software to solve routine business problems. The future likely belongs to whoever can operate software reliably, maintain data sovereignty, and provide high-quality APIs for agent-driven integrations. He predicts consumer software will face a "bloodbath" once platforms like Android enable on-demand app generation—why download a workout tracker when your AI can build one instantly?

For programming languages, this creates stagnation: new languages won't achieve mainstream adoption because models work best with languages that have massive training corpora (JavaScript, Python, C#, Java). We're likely "generationally stuck" with current languages and incremental improvements. This feels personally heartbreaking to Whitney, who has built his identity around the craft of programming and has given talks treating "code as art."

The enterprise opportunity lies in small teams of highly skilled engineers using AI to reason about entire distributed systems cohesively, rather than subdividing into teams owning components. These "taste-makers" will establish patterns, orchestrate agents, and maintain guard rails. Success will require heavy investment in automated testing, continuous delivery/testing systems, agent-friendly APIs (A2A protocols), and maintaining experts who can guide and correct AI-generated code.

Whitney closes with profound ambivalence: he's never been more productive or had more fun building, yet he's watching the end of his profession and identity. Like a painter at the dawn of photography, his craft may become a niche hobby rather than a viable career. He worries about the "extractivist nature" of the technology, the concentration of knowledge work profits toward a handful of hyperscalers, and how the next generation will develop taste and expertise if they never get enough repetitions writing code themselves. "I expect I'll still be programming for the rest of my life," he writes, "but I'm not sure what the industry around me will look like as I do it."
