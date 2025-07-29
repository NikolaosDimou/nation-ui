# 🌍 Nation UI - Angular Application

This is the frontend Angular application for the Nation Data Case Study. It consumes data from the Spring Boot REST API and visualizes:

- ✅ A list of countries with navigation to their spoken languages
- ✅ A table of countries with their max GDP-to-population ratio
- ✅ A filterable table by region and year for population and GDP

---

## 📁 Project Structure

```
src/
├── app/
│   ├── core/                # Models and shared services
│   ├── country-details/     # Shows languages per country
│   └── features/
│       ├── home/            # Home screen & nav
│       ├── list/            # List of countries
│       ├── ratios/          # GDP/Population ratio table
│       └── stats/           # Table with region & year filters
```

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js `v18+`
- Angular CLI: `npm install -g @angular/cli`
- Backend API running at `http://localhost:8080`

### 📦 Install Dependencies

```bash
npm install
```

### ▶️ Run the Application

```bash
ng serve
```

Then open [http://localhost:4200](http://localhost:4200)

---

## 🌐 Routing Overview

| Path                        | Description                                  |
|-----------------------------|----------------------------------------------|
| `/`                         | Home page with navigation                    |
| `/countries`               | Ordered list of countries                    |
| `/countries/:id/languages` | Languages spoken in a selected country       |
| `/ratios`                 | Countries with highest GDP/population ratio |
| `/stats`                  | Full table with filters for region and year |

---

## 🛠 Technologies Used

- Angular 17 (standalone components)
- TypeScript
- Angular Router
- SCSS

---

## 📄 License

For educational and demonstration purposes.
