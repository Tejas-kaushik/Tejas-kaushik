# Tejas Kaushik

**BEng Electronics & Software Engineering — University of Glasgow**

Embedded software and real-time systems. I build complete devices: deterministic
firmware in C/C++ on bare-metal and FreeRTOS targets, the networked software layer
above it, and the Python tooling around both.

Seeking a **Summer 2027 embedded / systems software placement**.

---

## Selected work

### [esp32-line-follower](https://github.com/Tejas-kaushik/esp32-line-follower) · C++ / FreeRTOS
Autonomous line-following robot built from discrete components, with dual-core
real-time firmware written from first principles.

- 200 Hz PID control loop as a hard-real-time FreeRTOS task pinned to a dedicated
  core, isolated from the Wi-Fi stack by mutex-guarded shared state
- Timing determinism verified under sustained network load — measured loop
  frequency held steady at 200 Hz throughout
- Live in-browser telemetry and tuning dashboard on an async WebSocket server
  hosted on the ESP32, cutting a gain-tuning iteration from a full rebuild-and-
  reflash cycle to an instant update
- Weighted-average IR line estimation, filtered-derivative PID with feed-forward
  corner slowdown, dead-band motor linearisation, auto-calibration persisted to flash

### [transient-trace-analyzer](https://github.com/Tejas-kaushik/transient-trace-analyzer) · Python
CLI tool that extracts transient parameters from oscilloscope time/voltage traces.

- RC time constant by the 63.2% method; RLC damping factor, damped and natural
  frequencies from automated peak detection
- Installable package structure (`io` / `models` / `signals` / `report`) with a
  pytest suite and GitHub Actions CI on every push and pull request
- Outputs annotated plots, a markdown report and machine-readable metrics

### Heart-Rate Monitor (PPG) · Embedded + custom PCB
Full photoplethysmography signal chain, end to end.

- Analogue acquisition → filtering → beat detection → live BPM on an LCD and
  LED-matrix display
- Schematic capture and PCB layout in OrCAD, board bring-up completed
- Signal chain validated on an oscilloscope against a DAC-generated reference

### [find_my_recipe_team_3A](https://github.com/HibaBaig/find_my_recipe_team_3A) · Django, team of 4
Recipe discovery and sharing application — authentication, social features,
multi-field search, ratings, AJAX interactions.

- I wrote the automated test suite: model, view and smoke tests
- Delivered across 102 commits using feature branches, pull requests and code review

---

## Lab and coursework

- [rc-rlc-transient-labs](https://github.com/Tejas-kaushik/rc-rlc-transient-labs) —
  RC/RLC characterisation (time constant, resonance, damping) validated against PSpice
- [reverse-counter-display](https://github.com/Tejas-kaushik/reverse-counter-display) —
  breadboard reverse counter with 7-segment display, debugged by signal tracing
- NXP FRDM-KL25Z hardware PWM LED control at 1 kHz, scope-verified, with a ~20 ms
  debounce lockout tuned to a measured ~1.2 ms switch bounce

---

## Tools

**Languages** C · C++ · Python · Java · JavaScript · SQL · MATLAB
**Embedded** FreeRTOS · bare-metal · ESP32 · ARM Cortex-M · PID control · I²C / SPI / UART · PWM · ADC
**Hardware** OrCAD Capture · PSpice · oscilloscope · logic analyser · board bring-up
**Software** Django · WebSocket / async servers · pytest · GitHub Actions · Git

---

📫 tejaskaushik04@gmail.com · [LinkedIn](https://www.linkedin.com/in/tejas-kaushik-62435b405)
