#!/usr/bin/env node

import { readFileSync } from 'fs';
import { JSDOM } from 'jsdom';

// Set up DOM environment for mermaid
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
  pretendToBeVisual: true,
});
global.window = dom.window;
global.document = dom.window.document;
Object.defineProperty(global, 'navigator', {
  value: dom.window.navigator,
  writable: true,
});

// Import mermaid after DOM is set up
const mermaid = (await import('mermaid')).default;

// Initialize mermaid
mermaid.initialize({ startOnLoad: false, suppressErrors: true });

async function validate(code) {
  try {
    await mermaid.parse(code);
    console.log(JSON.stringify({ valid: true }));
    process.exit(0);
  } catch (error) {
    console.log(JSON.stringify({
      valid: false,
      error: error.message,
      line: error.hash?.line || null
    }));
    process.exit(1);
  }
}

// Read from file argument or stdin
const input = process.argv[2];

if (input) {
  // File path provided
  const code = readFileSync(input, 'utf-8');
  validate(code);
} else {
  // Read from stdin
  let code = '';
  process.stdin.setEncoding('utf-8');
  process.stdin.on('data', chunk => code += chunk);
  process.stdin.on('end', () => validate(code));
}
