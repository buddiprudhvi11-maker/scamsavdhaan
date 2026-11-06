# ScamSavdhaan (Everyday Scam & Fake Message Scanner)
> **Citizen Suraksha Prototype** for Indian Citizens & Senior Citizens

**ScamSavdhaan** is a production-grade, privacy-first, fully client-side web application designed to help everyday citizens quickly identify and protect themselves against SMS phishing, fake utility disconnection threats, WhatsApp unknown links, malicious `.apk` malware traps, and impersonation scams.

---

## 🚀 Key Features

### 1. 100% Client-Side Detection Engine (`lib/scanner.ts`)
- **Zero API keys or servers required:** All heuristics, regex parsing, span highlighting, and safety scoring happen entirely inside the browser.
- **Urgency & Artificial Panic Detection:** Identifies manufactured deadlines (e.g. *"disconnected tonight at 9:30 PM"*, *"within 24 hours"*, *"arrest warrant"*).
- **Link & Malware APK Inspection:** Flags `.apk` Android installers, shortened URLs (`bit.ly`, `tinyurl`), unknown WhatsApp links (`wa.me/`, `chat.whatsapp.com/`), and deceptive domains (`.xyz`, `sbi-online-kyc.com`, `indpost-tracking.xyz`).
- **TRAI DLT Header vs. Personal Mobile Number Verification:** Checks whether institutional alerts originate from legitimate alphanumeric telecom headers (`VM-HDFCBK`) or unauthorized personal 10-digit mobile numbers.

### 2. Senior-Citizen Accessibility
- High-contrast typography and large tap targets (minimum 44px height).
- **Plain Language Text-to-Speech:** Click "Listen in Plain Language" to hear the verdict read aloud via Web Speech API in natural speech.
- Clear color coding: Deep Red for Critical/Scam, Amber for Suspicious, Forest Green for Legitimate Bank Notices.

### 3. Interactive Visual Dissection (Scam Anatomy)
- Message text is color-coded with interactive highlights:
  - 🔴 **Red:** Urgency & Coercion triggers
  - 🟠 **Orange:** Malicious APKs & unknown WhatsApp/phishing links
  - 🟡 **Yellow:** Financial lures & KYC credential traps
- Clicking any highlighted phrase pops open an explanation of the psychological manipulation tactic used by fraud syndicates.

### 4. Actionable Safety Checklist & Chakshu One-Click Reporting
- Interactive safety checklist with progress tracking.
- Pre-formats an incident report tailored for the **Department of Telecommunications (DoT) Chakshu / Sanchar Saathi Portal** (`sancharsaathi.gov.in/sfc/`) and **National Cyber Helpline 1930**.

### 5. Multilingual Support
Instant dynamic language toggle between:
- English
- हिंदी (Hindi)
- తెలుగు (Telugu)
- தமிழ் (Tamil)

### 6. Live Trending Scam Ticker
Community defense feed tracking 5 active Indian fraud operations:
1. WhatsApp Unknown Links (wa.me) & Wedding / Challan APK Trojans
2. Fake Customs & Courier Parcel Scams (FedEx / India Post)
3. "Digital Arrest" & Fake Police Video Call Coercion
4. Part-Time YouTube Review / VIP Stock Task Scams
5. EPFO & Bank PAN Update Phishing

---

## 💻 Tech Stack & Structure

```
m:\scamfinder\
├── index.html                     # Standalone single-page app (Zero-dependency, instant browser run)
├── lib\
│   └── scanner.ts                 # Realistic client-side heuristic & regex detection engine
├── src\
│   ├── components\
│   │   ├── EmergencyBanner.tsx    # High-contrast 1930 helpline & cybercrime.gov.in banner
│   │   ├── Header.tsx             # Brand header with language selector toggle
│   │   ├── HeroInput.tsx          # 3-tab input (Text, Simulated OCR, Sender/Link) & presets
│   │   ├── ThreatGauge.tsx        # Dynamic radial risk gauge & metric breakdown
│   │   ├── ScamAnatomy.tsx        # Interactive color-coded visual text dissection
│   │   ├── ActionChecklist.tsx    # Interactive tickbox safety checklist
│   │   ├── ChakshuModal.tsx       # Pre-formatted DoT Chakshu incident complaint modal
│   │   ├── TrendingScamsTicker.tsx# Live community trending scam feed
│   │   └── VerdictDashboard.tsx   # Results container with speech synthesis
│   ├── App.tsx                    # Root application component
│   ├── main.tsx                   # React 18 entrypoint
│   └── index.css                  # Tailwind CSS styling and pulse animations
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

---

## 🏃‍♂️ How to Run

### Instant Browser Run:
Simply open `m:\scamfinder\index.html` in any web browser. Everything is bundled and ready to use immediately without any build steps or npm commands!

### With Vite / Node.js (when available):
```bash
npm install
npm run dev
```

