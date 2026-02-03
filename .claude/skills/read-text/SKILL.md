---
name: read-text
description: Read text aloud using Microsoft Edge TTS. Use when the user wants to convert text to speech, read content aloud, or generate audio from text.
allowed-tools: Bash, Read, Write
---

# Read Text Skill

This skill converts text to speech using edge-tts (Microsoft Edge Text-to-Speech) and plays it back or saves it to a file.

## Usage Examples

- `/read-text "Hello, world!"` - Read the provided text aloud
- `/read-text file.txt` - Read the contents of a file aloud
- `/read-text "Some text" --save output.mp3` - Save speech to an audio file instead of playing

## Implementation Instructions

### Step 1: Check for edge-tts Installation

First, check if edge-tts is installed:

```bash
which edge-tts
```

If not installed, inform the user and offer to install it:

```bash
pip install edge-tts
```

### Step 2: Parse Arguments

The skill accepts the following argument patterns:
- Direct text in quotes: `/read-text "text to read"`
- File path: `/read-text path/to/file.txt`
- With save flag: `/read-text "text" --save output.mp3` or `/read-text file.txt --save output.mp3`

Parse the arguments to determine:
1. The text source (direct text or file path)
2. Whether to save to file (--save flag) or play immediately

### Step 3: Get the Text Content

If the argument is a file path:
- Use the Read tool to get the file contents
- If the file doesn't exist, inform the user and stop

If the argument is direct text:
- Use the text as-is

### Step 4: List Available Voices (Optional)

You can optionally show available voices with:

```bash
edge-tts --list-voices
```

Common voices include:
- `en-US-AriaNeural` (Female, US English)
- `en-US-GuyNeural` (Male, US English)
- `en-GB-SoniaNeural` (Female, UK English)
- `en-GB-RyanNeural` (Male, UK English)

### Step 5: Generate and Play/Save Speech

Create a temporary file in the scratchpad directory for the audio:

```bash
SCRATCHPAD="/private/tmp/claude-501/-Users-jose-personal-my-reading-list/9354cdea-7181-43e9-8c32-7f27f05985c5/scratchpad"
OUTPUT_FILE="$SCRATCHPAD/tts_output.mp3"
```

Generate the speech using edge-tts:

```bash
edge-tts --text "Your text here" --write-media "$OUTPUT_FILE" --voice "en-US-AriaNeural"
```

**If saving to file (--save flag provided):**
- Move the generated file to the user-specified location
- Inform the user where the file was saved

**If playing immediately (no --save flag):**
- Play the audio using the system's default player:
  - macOS: `afplay "$OUTPUT_FILE"`
  - Linux: `mpv "$OUTPUT_FILE"` or `ffplay "$OUTPUT_FILE"`
  - Inform the user the audio is playing

### Step 6: Cleanup

Remove the temporary file if it was only for playback:

```bash
rm "$OUTPUT_FILE"
```

## Important Notes

- Use the scratchpad directory for temporary files, not `/tmp`
- Default to `en-US-AriaNeural` voice for US English
- Keep text length reasonable - very long texts may take time to generate
- If edge-tts fails, provide the error message to the user
- Audio files are saved in MP3 format by default
- The skill should handle both direct text input and file reading
- Always inform the user what's happening (generating speech, playing, saving, etc.)

## Advanced Options

Users can customize by requesting:
- Different voices: "use a British accent" or "use a male voice"
- Rate adjustment: "read slower" (add `--rate=-20%` to edge-tts command)
- Volume adjustment: "read louder" (add `--volume=+20%` to edge-tts command)

Example with customization:
```bash
edge-tts --text "Your text" --write-media "$OUTPUT_FILE" --voice "en-GB-RyanNeural" --rate=-10% --volume=+10%
```
