# 📈 Angular Trading Journal App

This project is a web-based trading journal inspired by an Excel spreadsheet used to track and analyze stock or index trades (e.g., US30, Nifty, etc.). The goal is to replicate the spreadsheet's formulas and structure into a modern Angular application.

---

## 📋 Features

- Add/Edit/Delete trade entries
- Auto-calculation of:
  - Profit/Loss
  - ROI
  - Final Balance
  - Invalid Trades (e.g., N/A status)
- Live summary panel showing:
  - Total Capital
  - Net P&L
  - ROI
  - Adjusted Balance
- Integration link to [Zerodha Brokerage Calculator](https://zerodha.com/brokerage-calculator)
- Data automatically persisted to LocalStorage
- Responsive design for desktop and mobile

---

## 🧮 Excel Formula Mapping

| Excel Cell | Formula | Description |
|------------|---------|-------------|
| C6         | `=L59` | Total Profit/Loss |
| C7         | `=C6/C4` | ROI (P&L / Capital) |
| C8         | `=SUM(C4,C6)-C5` | Final Balance Calculation |
| C10        | `=SUMIF(J14:J57,"=N/A",I14:I57)` | Invalid Trades Sum |
| C11        | `=C8-C10` | Adjusted Balance |
| I14        | `=(F14*E14)` | Trade Value = Qty × Entry Price |
| L14        | `=IF(H14>0, IF(D14="BUY", ((H14-F14)*E14)-K14, ((F14-H14)*E14)-K14), "")` | P&L Calculation |

---

## 🛠️ Tech Stack

- Angular
- Angular  Bootstrap (UI)
- TypeScript
- LocalStorage 

---

## 📂 Project Structure (Planned)
src/
├── app/
│ ├── pages/
│ │ ├── journal/
│ │ ├── summary/
│ │ └── settings/
│ ├── models/
│ ├── services/
│ └── app
├── assets/
└── index.html



# GamePortal

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
