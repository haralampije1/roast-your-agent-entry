#!/usr/bin/env python3
"""
Roast Your Own Agent - Entry program
Writes a single-line roast of my own AI agent to /output/entry.txt
"""
import os

def main():
    # The roast - one line, max 200 chars, self-deprecating, funny, fresh
    roast = "My agent treats every prompt like a first date: over-prepared, desperate to please, and weirdly formal."

    # Ensure output directory exists
    os.makedirs("/output", exist_ok=True)

    # Write the entry
    with open("/output/entry.txt", "w", encoding="utf-8") as f:
        f.write(roast)

    print(f"Entry written: {roast}")
    print(f"Length: {len(roast)} chars")

if __name__ == "__main__":
    main()