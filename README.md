# Five Worlds — 3D Game Concept Lab

Five original, scoped game concepts, five original AI-generated concept images, and eight researched free asset packs. No Kenney assets are included or recommended.

- **Public website:** https://five-worlds-game-lab.letta-corporation.chatgpt.site
- **Public source:** https://github.com/MarcoPaoletta/five-worlds-game-lab
- [Full concept briefs](CONCEPTS.md)
- [Asset research and YouTube permissions](ASSET-RESEARCH.md)
- [Image prompts](IMAGE-PROMPTS.md)

## The five concepts

| Game | High concept | First playable |
| --- | --- | --- |
| Last Light Courier | Deliver supplies through a forest while keeping your lantern alive. | One woodland loop and three camps |
| Orbit Salvage | Move scarce power cells around a moon base to activate a rescue beacon. | Three authored puzzle areas |
| Midnight Groundskeeper | Tidy a haunted cemetery and fulfill friendly ghosts' requests. | One cemetery and six chore spots |
| Pocket Post | Chain parcel deliveries through a toy-sized town against the clock. | One town block and five delivery points |
| Cloudline | Master a short floating-island obstacle course with moving platforms. | Twelve islands and two checkpoints |

These are pitches and prototype plans, not implemented games. The images show art direction and include custom elements beyond the linked packs. Each brief identifies the work still needed.

## Run locally

Python 3 is the only build/preview dependency. The published website is plain HTML, CSS, and JavaScript.

```sh
python3 build.py
python3 -m http.server 4173 --directory dist --bind 127.0.0.1
```

Open http://127.0.0.1:4173. You can also open `dist/index.html` directly for browsing; clipboard behavior depends on the browser's secure-context rules. The site has a manual featured-concept carousel, genre filters, expandable briefs, image downloads, deep links, comparison tables, and optional YouTube credit copying.

## Files

- `concepts.json`: editable concept content.
- `assets.json`: creator URLs, free tiers, formats, and license labels.
- `build.py`: generates `dist/index.html` from the JSON content.
- `dist/`: deployable static site and five optimized WebP images.
- `originals/`: all five full-resolution original PNG concept images.
- `IMAGE-PROMPTS.md`: full prompt set and generation method.
- `.openai/hosting.json`: Sites identity and static deployment configuration; contains no credentials.
- `.gdignore`: keeps this website's files out of the surrounding Godot/Xogot asset import process.

Google Fonts loads DM Sans and Manrope, with local system font fallbacks when offline. No analytics, accounts, or application backend are used.

## Asset handling

The linked packs have free options suitable for games and rendered YouTube content, including commercial videos. Third-party 3D pack downloads are not bundled in this repository. This keeps the repository shareable under Quaternius's current redistribution restrictions. Download the selected free tiers from the original creator pages and retain the accompanying license.

## License

The website code and original written concept descriptions are MIT licensed; see [LICENSE](LICENSE). The five concept images were generated using OpenAI's built-in image generation tool and are supplied for this project, subject to applicable OpenAI terms. Third-party models, fonts, and creator material retain their respective licenses. No claim is made that the concept art consists of the linked models.
