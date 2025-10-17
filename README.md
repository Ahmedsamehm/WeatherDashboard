# 🌦️ Weather Dashboard  
---
<img width="1731" height="841" alt="localhost_5173_" src="https://github.com/user-attachments/assets/f6972891-5ae9-4bbc-8cf0-97cde3761516" />

Real-time weather dashboard built with **React 19**, **TypeScript**, and **Vite**.  
Designed from a [Figma community design](https://www.figma.com/community/file/1410567203716932869) and powered by [WeatherAPI](https://www.weatherapi.com/).  

---

## 🧭 Overview  

The app displays current weather conditions and a 3-day forecast with a clean and responsive dark-themed interface.  

---

## 🌤️ Core Features  

### ☀️ Current Weather  
- Wind Status  
- Visibility  
- UV Index  
- Humidity  
- Live Weather Condition  
- Weather in 2 Other Countries  

### 📅 3-Day Forecast  
- Daily temperature  
- Trend indicator (increase or decrease)  

### 🖥️ Interface  
- Based on a real Figma design  
- Responsive and mobile-first  
- Dark theme support  

---

## ⚙️ Tech Stack  

| Category | Tools |
|-----------|-------|
| Framework | React 19 + Vite |
| Language | TypeScript |
| Styling | Tailwind CSS + ShadCN UI |
| Data Fetching | Axios |
| API | [WeatherAPI](https://www.weatherapi.com/) |
| Structure | Custom Hooks + Utils + Modular Folders |

---

🗂️ Folder Structure



```
📁 pages
└──  📁 dashboard/
    ├──  📁 _Hooks/
    │    ├── 📄 useForecast.ts
    │    └── 📄 useRandomCountries.ts
    ├──  📁 _components/
    │    ├── 📄 Forecast.tsx
    │    ├── 📄 Header.tsx
    │    ├── 📄 OthersCountries.tsx
    │    ├── 📄 TodayHighlights.tsx
    │    └── 📄 WeatherCard.tsx
    └── 📄 page.tsx
```
