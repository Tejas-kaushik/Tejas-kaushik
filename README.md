# Hi, I'm Tejas Kaushik 👋

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/tejas-kaushik-62435b405)
[![Email](https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:tejaskaushik04@gmail.com)

BEng Electronics & Software Engineering student at the University of Glasgow. I build complete devices — deterministic firmware in C/C++ on bare-metal and FreeRTOS targets, the networked software layer above it, and the Python tooling around both.

Seeking a **Summer 2027 embedded / systems software placement**.

---

### 🛠 Tech Stack

**Languages:**
![C](https://img.shields.io/badge/C-A8B9CC?style=flat-square&logo=c&logoColor=black)
![C++](https://img.shields.io/badge/C++-00599C?style=flat-square&logo=cplusplus&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![SQL](https://img.shields.io/badge/SQL-4479A1?style=flat-square&logo=postgresql&logoColor=white)
![MATLAB](https://img.shields.io/badge/MATLAB-0076A8?style=flat-square&logo=mathworks&logoColor=white)

**Embedded & Real-Time:**
![FreeRTOS](https://img.shields.io/badge/FreeRTOS-008C45?style=flat-square&logo=freertos&logoColor=white)
![ESP32](https://img.shields.io/badge/ESP32-E7352C?style=flat-square&logo=espressif&logoColor=white)
![ARM Cortex-M](https://img.shields.io/badge/ARM_Cortex--M-0091BD?style=flat-square&logo=arm&logoColor=white)
![Bare Metal](https://img.shields.io/badge/Bare--Metal-2C3E50?style=flat-square)
![PID Control](https://img.shields.io/badge/PID_Control-5D6D7E?style=flat-square)
![I²C / SPI / UART](https://img.shields.io/badge/I²C_·_SPI_·_UART-34495E?style=flat-square)
![PWM / ADC](https://img.shields.io/badge/PWM_·_ADC-34495E?style=flat-square)

**Hardware & Test:**
![OrCAD](https://img.shields.io/badge/OrCAD_Capture-00843D?style=flat-square)
![PSpice](https://img.shields.io/badge/PSpice-006F62?style=flat-square)
![Oscilloscope](https://img.shields.io/badge/Oscilloscope-7D3C98?style=flat-square)
![Logic Analyser](https://img.shields.io/badge/Logic_Analyser-7D3C98?style=flat-square)
![PCB Bring-Up](https://img.shields.io/badge/PCB_Bring--Up-873600?style=flat-square)

**Software & Tooling:**
![Django](https://img.shields.io/badge/Django-092E20?style=flat-square&logo=django&logoColor=white)
![WebSockets](https://img.shields.io/badge/WebSockets-010101?style=flat-square&logo=socketdotio&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy-013243?style=flat-square&logo=numpy&logoColor=white)
![pytest](https://img.shields.io/badge/pytest-0A9EDC?style=flat-square&logo=pytest&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white)

---

### 📌 Current Focus & Highlights

- ⚙️ **Building:** hard-real-time firmware, deterministic control loops, and the networked tooling that makes them debuggable.
- 🎓 **BEng (Hons) Electronics & Software Engineering** at the University of Glasgow.
- 🔬 **Working across the stack:** analogue signal chain → PCB → firmware → live telemetry, verified on a scope rather than assumed.
- 🎯 **Looking for:** a Summer 2027 embedded / systems software placement.

---

### 🚀 Selected Projects

#### [esp32-line-follower](https://github.com/Tejas-kaushik/esp32-line-follower) — C++ / FreeRTOS
Autonomous line-following robot built from discrete components, with dual-core real-time firmware written from first principles.

- 200 Hz PID control loop as a hard-real-time FreeRTOS task pinned to a dedicated core, isolated from the Wi-Fi stack by mutex-guarded shared state
- Timing determinism verified under sustained network load — measured loop frequency held steady at 200 Hz throughout
- Live in-browser telemetry and tuning dashboard on an async WebSocket server hosted on the ESP32, cutting a gain-tuning iteration from a full rebuild-and-reflash cycle to an instant update
- Weighted-average IR line estimation, filtered-derivative PID with feed-forward corner slowdown, dead-band motor linearisation, auto-calibration persisted to flash

#### [transient-trace-analyzer](https://github.com/Tejas-kaushik/transient-trace-analyzer) — Python
CLI tool that extracts transient parameters from oscilloscope time/voltage traces.

- RC time constant by the 63.2% method; RLC damping factor, damped and natural frequencies from automated peak detection
- Installable package structure (`io` / `models` / `signals` / `report`) with a pytest suite and GitHub Actions CI on every push and pull request
- Outputs annotated plots, a markdown report and machine-readable metrics

#### Heart-Rate Monitor (PPG) — Embedded + custom PCB
Full photoplethysmography signal chain, end to end.

- Analogue acquisition → filtering → beat detection → live BPM on an LCD and LED-matrix display
- Schematic capture and PCB layout in OrCAD, board bring-up completed
- Signal chain validated on an oscilloscope against a DAC-generated reference

#### [find_my_recipe_team_3A](https://github.com/HibaBaig/find_my_recipe_team_3A) — Django, team of 4
Recipe discovery and sharing application — authentication, social features, multi-field search, ratings, AJAX interactions.

- I wrote the automated test suite: model, view and smoke tests
- Delivered across 102 commits using feature branches, pull requests and code review

---

### 🔬 Lab & Coursework

- [rc-rlc-transient-labs](https://github.com/Tejas-kaushik/rc-rlc-transient-labs) — RC/RLC characterisation (time constant, resonance, damping) validated against PSpice
- [reverse-counter-display](https://github.com/Tejas-kaushik/reverse-counter-display) — breadboard reverse counter with 7-segment display, debugged by signal tracing
- **NXP FRDM-KL25Z PWM control** — hardware PWM LED control at 1 kHz, scope-verified, with a ~20 ms debounce lockout tuned to a measured ~1.2 ms switch bounce

---

### 📊 GitHub Activity

<p align="center">
  <img src="https://github-readme-stats-fast.vercel.app/api?username=Tejas-kaushik&show_icons=true&theme=tokyonight&hide_border=true" alt="Tejas's GitHub Stats" />
  <img src="https://github-readme-stats-fast.vercel.app/api/top-langs/?username=Tejas-kaushik&layout=compact&theme=tokyonight&hide_border=true" alt="Top Languages" />
</p>

---

📫 **tejaskaushik04@gmail.com** · [LinkedIn](https://www.linkedin.com/in/tejas-kaushik-62435b405)
