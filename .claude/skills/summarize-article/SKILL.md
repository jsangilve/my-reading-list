---
name: summarize-article
description: Summarize an article from a URL. Use when the user wants to get a TLDR, key takeaways, and summary from a web article or blog post.
allowed-tools: WebFetch
---

# Summarize Article Skill

This skill fetches an article from a URL and generates a structured markdown summary.

## Usage Examples

- `/summarize-article https://example.com/article` - Summarize the article at the given URL

## Implementation Instructions

### Step 1: Parse Arguments

The user must provide a URL as an argument:
- If no URL is provided, ask the user to provide one and stop

### Step 2: Fetch and Analyze the Article

Use WebFetch to retrieve the article content with the following prompt:

```
Extract and analyze this article. Provide:
1. The article title
2. The author (if available)
3. The publication date (if available, in YYYY-MM-DD format)
4. The main topic and thesis
5. All key points and arguments made
6. Any data, statistics, or evidence presented
7. The conclusion or call to action
```

### Step 3: Generate the Summary

Based on the fetched content, generate a markdown document with the following structure:

```markdown
# [Article Title]

**Source:** [URL]
**Author:** [Author if available]
**Published:** [Publication date if available, in YYYY-MM-DD format]

---

## TLDR

[1-2 sentences capturing the essence of the article]

---

## Key Takeaways

- [Takeaway 1]
- [Takeaway 2]
- [Takeaway 3]
- [Add more as needed, aim for 3-5 takeaways]

---

## Summary

[2-4 paragraphs providing a comprehensive summary of the article's content, arguments, and conclusions]
```

## Important Notes

- ALWAYS include the source URL for reference
- Keep the TLDR extremely concise (1-2 sentences max)
- Takeaways should be actionable or insightful bullet points
- The summary should capture the main arguments without excessive detail
- If the article cannot be fetched, inform the user and suggest they check the URL
- DO NOT add your own opinions or analysis beyond what's in the article
- Preserve the author's main intent and conclusions accurately

## Sub-skill Invocation

**CRITICAL:** If this skill was invoked from another skill (e.g., `/process-article`), you MUST return control to the parent skill immediately after outputting the summary. Do NOT stop execution or wait for user input. The parent skill has additional steps to complete.
