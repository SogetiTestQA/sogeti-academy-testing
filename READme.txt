# Sogeti Academy Testing Project

## 📋 Project Overview
Dit project bevat geautomatiseerde tests gebouwd met Playwright en TypeScript voor test automation training.

## 🚀 Project naar GitHub uploaden (Step-by-Step)

### Stap 1: GitHub Repository aanmaken
1. Ga naar [GitHub.com](https://github.com) en log in
2. Klik op de groene **"New"** knop (of het **"+"** icoon → **"New repository"**)
3. Vul repository naam in: `sogeti-academy-testing`
4. Voeg beschrijving toe: `Playwright Test Automation Project for Sogeti Academy`
5. Zet repository op **Public** of **Private** (naar keuze)
6. **NIET** aanvinken: "Add a README file" (we hebben er al een)
7. Klik op **"Create repository"**

### Stap 2: Git initialiseren in je lokale project
```powershell
# Navigeer naar je project directory
Set-Location "C:\Users\scankara\sogeti-academy-testing"

# Initialiseer git repository
git init

# Voeg alle bestanden toe aan staging
git add .

# Maak eerste commit
git commit -m "Initial commit: Playwright test automation project setup"
```

### Stap 3: Verbind lokaal project met GitHub
```powershell
# Voeg GitHub repository toe als remote origin
git remote add origin https://github.com/JOUW-USERNAME/sogeti-academy-testing.git

# Verander branch naam naar main (als nodig)
git branch -M main

# Push je code naar GitHub
git push -u origin main
```

### Stap 4: .gitignore bestand aanmaken (optioneel maar aanbevolen)
```powershell
# Maak .gitignore bestand aan
New-Item -Path ".gitignore" -ItemType File

# Voeg inhoud toe aan .gitignore
@"
# Node modules
node_modules/

# Test results
test-results/
allure-results/
playwright-report/

# Environment variables
.env
.env.local

# Logs
*.log

# OS generated files
.DS_Store
Thumbs.db

# IDE files
.vscode/
.idea/

# Temporary files
*.tmp
"@ | Out-File -FilePath ".gitignore" -Encoding UTF8
```

### Stap 5: Updates naar GitHub pushen
```powershell
# Na wijzigingen in je code:
git add .
git commit -m "Beschrijving van je wijzigingen"
git push origin main
```

## 🔄 Project van GitHub clonen (voor anderen)

### Voor teamleden die het project willen gebruiken:
```powershell
# Clone het project
git clone https://github.com/JOUW-USERNAME/sogeti-academy-testing.git

# Navigeer naar project
Set-Location sogeti-academy-testing

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```


## 🧪 Test Commands / Commando's

### Basis test commands:
```powershell
# Alle tests uitvoeren
npx playwright test

#script keyword use
# Tests in specifieke browser
npm run chrome          # Chrome browser (headed)
npm run firefox         # Firefox browser (headed)  
npm run webkit          # Safari/WebKit browser (headed)

# Alle browsers tegelijk
npm run allBrowsers

# Met tags
npm run smoke           # @smoke tests
npm run regression      # @regression tests
npm run allTags         # Beide tags

# Specifiek test bestand
npx playwright test tests/example.spec.ts

# In debug mode
npx playwright test --debug

# Met UI mode
npx playwright test --ui


### 📊 Allure Reporting:
```powershell
# Test uitvoeren en Allure rapport genereren
npx playwright test

# Allure rapport bekijken
npx allure serve allure-results

# Allure rapport genereren (zonder server)
npx allure generate allure-results --clean
```

## 📁 Project Structure

```
├── data/           # Test data (JSON, CSV bestanden)
├── pages/          # Page Object Model classes  
├── tests/          # Test bestanden (.spec.ts)
├── utils/          # Helper functies en utilities
├── allure-results/ # Allure rapport data
└── test-results/   # Playwright test resultaten
```

## 🏗️ Folder Descriptions

- **data/**: Test gegevens opslag (JSON, CSV, Excel bestanden)
- **pages/**: Page Object Model klassen voor elke webpagina
- **tests/**: Hoofdmap voor alle test scenario's (.spec.ts bestanden)
- **utils/**: Herbruikbare helper functies en utilities

## 🔍 Useful Commands

```powershell
# Playwright config controleren
npx playwright show-config

# Test genereren
npx playwright codegen <url>

# Screenshots van tests
npx playwright test --screenshot=only-on-failure

# Video opname
npx playwright test --video=retain-on-failure

# Trace viewer
npx playwright show-trace trace.zip



## 📖 Documentation

- [Playwright Documentation](https://playwright.dev/)
- [Allure Report Documentation](https://docs.qameta.io/allure/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

1. Maak een nieuwe branch: `git checkout -b feature/nieuwe-test`
2. Commit je wijzigingen: `git commit -m 'Add nieuwe test'`
3. Push naar branch: `git push origin feature/nieuwe-test`
4. Maak een Pull Request

hallo ik ben jeroen
