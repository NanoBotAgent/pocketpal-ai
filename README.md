<div align="center">

# NebulaAI

**A private AI assistant that runs entirely on your phone — with hybrid GPU/CPU control.**

Chat with language models, give them a voice, and let them use tools — all on-device. No account, no cloud, no internet required.

**New in NebulaAI:** Fine-tuned control over GPU/CPU layer splitting. Choose 100% GPU, 80/20, 50/50, 20/80, or 100% CPU — or set a custom ratio. Balance speed, battery, and thermal performance your way.

</div>

---

## Features

- **On-device inference** — runs GGUF models locally using CPU, GPU (Metal/OpenCL), and NPU (Hexagon)
- **Hybrid GPU/CPU split** — choose how many model layers run on GPU vs CPU with preset ratios or a custom slider
- **Private by design** — conversations never leave your device
- **Works offline** — download a model once, chat anywhere
- **Text-to-speech** — Kokoro TTS for natural voice output
- **Pals** — customizable AI assistants with personality
- **PalsHub** — community marketplace for sharing AI assistant personas
- **Tool-use** — calculator, date/time, HTML rendering
- **Hugging Face integration** — browse and download models directly
- **Benchmarking** — built-in performance measurement
- **Video Pals** — AI assistants with video capabilities

## GPU/CPU Split

NebulaAI introduces a hybrid inference mode that lets you control the balance between GPU and CPU processing:

- **100% GPU** — maximum speed, higher battery drain
- **80/20** — mostly GPU with CPU fallback for less critical layers
- **50/50** — balanced performance and efficiency
- **20/80** — mostly CPU, GPU for critical layers only
- **100% CPU** — maximum battery life, lowest speed
- **Custom** — fine-tune the exact percentage with a slider

The split is computed from the model's actual layer count, so `n_gpu_layers` is always set correctly regardless of model size.

## Design

- **Space Grotesk** for display/headlines
- **Manrope** for body text
- **JetBrains Mono** for code
- Glassmorphism cards on a slate-950 dark canvas
- Emerald-400/500 primary accent
- Smooth animations throughout

## License

MIT — forked from [PocketPal AI](https://github.com/a-ghorbani/pocketpal-ai) by Asghar Ghorbani.
