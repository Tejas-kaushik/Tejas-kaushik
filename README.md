<h1 align="center">Tejas Kaushik</h1>

<p align="center">
  <b>Software &amp; hardware engineer</b> · BEng Electronics and Software Engineering, University of Glasgow<br/>
  Systems software in C on Linux · real-time firmware · PCB design · tested, CI-backed tooling
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/tejas-kaushik-62435b405"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
  <a href="mailto:tejaskaushik04@gmail.com"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/></a>
  <img src="https://img.shields.io/badge/Open_to-Summer_2027_placements-2ea44f?style=for-the-badge" alt="Open to Summer 2027 placements"/>
</p>

---

## About

I build things end to end, from the analogue front end and the PCB, through the firmware, up to the servers and tools that talk to them, and I measure them rather than assume they work.

- **Software:** a Redis-compatible server in C on raw Linux system calls, Python tools packaged with tests and CI, and web apps in Django and JavaScript.
- **Hardware:** dual-core FreeRTOS firmware on the ESP32, ARM Cortex-M, schematic capture and PCB layout in OrCAD, board bring-up on the bench.
- **Looking for:** a Summer 2027 software or electronics engineering placement.

## Featured work

| Project | What it is | Headline result |
|---|---|---|
| [**mini-redis**](https://github.com/Tejas-kaushik/mini-redis) | Redis-compatible key-value server, C17, Linux | Matches Redis 8 throughput on GET/SET/INCR (persistence off), 10,000 concurrent clients |
| [**esp32-line-follower**](https://github.com/Tejas-kaushik/esp32-line-follower) | Autonomous robot, dual-core FreeRTOS firmware | 200 Hz PID loop held steady under sustained Wi-Fi load |
| [**transient-trace-analyzer**](https://github.com/Tejas-kaushik/transient-trace-analyzer) | Python CLI for oscilloscope trace analysis | Installable package, pytest suite, CI on every push |
| **PPG heart-rate monitor** | Analogue signal chain, firmware, custom PCB | Validated on a scope against a DAC reference |

### [mini-redis](https://github.com/Tejas-kaushik/mini-redis) · C17 · Linux · epoll

An in-memory key-value server built from scratch on Linux system calls, with no third-party libraries. It speaks the real Redis protocol, so the stock `redis-cli` and `redis-benchmark` work against it unmodified.

- Single-threaded `epoll` event loop over non-blocking sockets, hand-written zero-copy RESP2 parser, per-client backpressure
- Hash table with incremental rehashing and SipHash, lazy and active key expiry
- Append-only-file persistence that writes before replying, so an acknowledged write survives `kill -9`
- Profiled with `perf` and callgrind: **40% fewer instructions per request** (2,788 → 1,668) over seven measured changes
- 39 unit tests, 72 integration tests, parser fuzzing, a 3M-operation stress test and mutation testing; CI under AddressSanitizer, UBSan and valgrind

### [esp32-line-follower](https://github.com/Tejas-kaushik/esp32-line-follower) · C++ · FreeRTOS · ESP32

An autonomous line-following robot built from discrete components, with dual-core real-time firmware written from first principles.

- PID control loop as a hard-real-time FreeRTOS task pinned to its own core, isolated from the Wi-Fi stack by mutex-guarded shared state
- Timing verified under sustained network load: the measured loop frequency held at **200 Hz** throughout
- Live tuning dashboard on an async WebSocket server running on the ESP32, cutting a gain-tuning iteration from rebuild-and-reflash to an instant update
- Weighted-average IR line estimation, filtered-derivative PID with feed-forward corner slowdown, dead-band motor linearisation, calibration persisted to flash

### [transient-trace-analyzer](https://github.com/Tejas-kaushik/transient-trace-analyzer) · Python

A command-line tool that turns oscilloscope CSV traces into measured circuit parameters.

- RC time constant by the 63.2% method; RLC damping factor, damped and natural frequencies from automated peak detection
- Installable package (`io` / `models` / `signals` / `report`) with a pytest suite and GitHub Actions CI on every push and pull request
- Outputs annotated plots, a markdown report and machine-readable metrics

### PPG heart-rate monitor · embedded firmware · custom PCB

- Full photoplethysmography chain: analogue acquisition → filtering → beat detection → live BPM on an LCD and LED matrix
- Schematic and PCB layout in OrCAD, board bring-up completed
- Signal chain validated on an oscilloscope against a DAC-generated reference waveform

### More

- [**find_my_recipe_team_3A**](https://github.com/HibaBaig/find_my_recipe_team_3A): Django web app, team of four. I wrote the automated test suite (model, view and smoke tests); delivered over 102 commits with feature branches, pull requests and code review.
- **The Stramont:** multi-page website for a Glasgow café, built to the client's brief in HTML, CSS and JavaScript.
- **Summer 2026 engineering internship** (Technology Business Incubator, Graphic Era Hill University): networked air-quality monitor with a live web dashboard, and a 4-DOF robotic arm.

## Tech stack

**Languages**<br/>
<img src="https://skillicons.dev/icons?i=c,cpp,py,java,js,matlab&theme=dark" alt="C, C++, Python, Java, JavaScript, MATLAB"/>

**Systems, tooling and web**<br/>
<img src="https://skillicons.dev/icons?i=linux,bash,git,githubactions,vscode,django,react,html,css,bootstrap&theme=dark" alt="Linux, Bash, Git, GitHub Actions, VS Code, Django, React, HTML, CSS, Bootstrap"/>

**Embedded and hardware**<br/>
![FreeRTOS](https://img.shields.io/badge/FreeRTOS-008C45?style=flat-square&logo=freertos&logoColor=white)
![ESP32](https://img.shields.io/badge/ESP32-E7352C?style=flat-square&logo=espressif&logoColor=white)
![ARM Cortex-M](https://img.shields.io/badge/ARM_Cortex--M-0091BD?style=flat-square&logo=arm&logoColor=white)
![I²C · SPI · UART](https://img.shields.io/badge/I²C_·_SPI_·_UART-34495E?style=flat-square)
![PWM · ADC](https://img.shields.io/badge/PWM_·_ADC-34495E?style=flat-square)
![OrCAD](https://img.shields.io/badge/OrCAD_Capture-00843D?style=flat-square)
![PSpice](https://img.shields.io/badge/PSpice-006F62?style=flat-square)
![Oscilloscope](https://img.shields.io/badge/Oscilloscope_·_Logic_Analyser-7D3C98?style=flat-square)

**Testing and quality**<br/>
![pytest](https://img.shields.io/badge/pytest-0A9EDC?style=flat-square&logo=pytest&logoColor=white)
![Unity](https://img.shields.io/badge/Unity_(C_tests)-555555?style=flat-square)
![Sanitizers](https://img.shields.io/badge/ASan_·_UBSan-555555?style=flat-square)
![valgrind](https://img.shields.io/badge/valgrind-555555?style=flat-square)
![perf](https://img.shields.io/badge/perf_·_callgrind-555555?style=flat-square)

## Lab and coursework

- [rc-rlc-transient-labs](https://github.com/Tejas-kaushik/rc-rlc-transient-labs): RC and RLC characterisation (time constant, resonance, damping) validated against PSpice
- [reverse-counter-display](https://github.com/Tejas-kaushik/reverse-counter-display): breadboard reverse counter with a 7-segment display, debugged by signal tracing
- **NXP FRDM-KL25Z:** hardware PWM LED control at 1 kHz, scope-verified, with a ~20 ms debounce lockout tuned to a measured ~1.2 ms switch bounce

## GitHub activity

<p align="center">
  <img src="https://github-readme-stats-fast.vercel.app/api?username=Tejas-kaushik&show_icons=true&theme=tokyonight&hide_border=true" alt="GitHub stats" height="165"/>
  <img src="https://github-readme-stats-fast.vercel.app/api/top-langs/?username=Tejas-kaushik&layout=compact&theme=tokyonight&hide_border=true" alt="Top languages" height="165"/>
</p>

---

<p align="center">
  <a href="mailto:tejaskaushik04@gmail.com">tejaskaushik04@gmail.com</a> · <a href="https://www.linkedin.com/in/tejas-kaushik-62435b405">LinkedIn</a> · Glasgow, UK
</p>
