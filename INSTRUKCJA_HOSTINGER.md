# Instrukcja konfiguracji Hostingera

## Przegląd

To repozytorium jest skonfigurowane do automatycznego wdrażania na Hostinger. Kod źródłowy znajduje się w katalogu `PD-fotografia`, a skompilowana wersja (dist) jest generowana automatycznie.

## Jak to działa?

1. Gdy wykonasz `git push` do gałęzi `main`, GitHub Actions automatycznie:
   - Zainstaluje zależności npm
   - Zbuduje projekt z katalogu `PD-fotografia`
   - Skopiuje zawartość folderu `dist` do gałęzi `deploy`

2. Następnie Hostinger pobiera pliki z gałęzi `deploy` i wdraża je na Twoją stronę

## Konfiguracja Hostingera - Instrukcja krok po kroku

### 1. Zaloguj się do panelu Hostinger
- Przejdź do https://hpanel.hostinger.com/
- Zaloguj się swoim kontem

### 2. Znajdź sekcję Git
- W panelu głównym znajdź opcję "Git" lub "Wersjonowanie" (Version Control)
- Może to być w sekcji "Advanced" lub bezpośrednio w menu głównym

### 3. Połącz repozytorium GitHub
- Kliknij "Połącz repozytorium" lub "Connect repository"
- Wybierz GitHub jako dostawcę
- Autoryzuj dostęp do swojego konta GitHub (jeśli to pierwsze połączenie)
- Wybierz repozytorium: `Dewciak/PD-strona`

### 4. Skonfiguruj wdrożenie
**WAŻNE**: Ustaw następujące parametry:

- **Gałąź (Branch)**: `deploy` ← To jest najważniejsze!
- **Katalog docelowy**: `public_html` (lub inny katalog, gdzie chcesz mieć stronę)
- **Ścieżka źródłowa**: pozostaw puste (pliki są w katalogu głównym gałęzi deploy)

### 5. Zapisz i wykonaj pierwsze wdrożenie
- Kliknij "Zapisz" lub "Connect"
- Hostinger automatycznie pobierze pliki z gałęzi `deploy`
- Strona będzie gotowa za kilka minut

## Ważne informacje

### Struktura repozytorium
```
PD-strona/
├── PD-fotografia/          ← Kod źródłowy (React + Vite)
│   ├── src/                ← Pliki źródłowe
│   ├── dist/               ← Skompilowane pliki (generowane automatycznie)
│   └── package.json
├── .github/
│   └── workflows/
│       └── deploy.yml      ← Konfiguracja automatycznego wdrażania
└── README.md
```

### Gałęzie
- **main** - główna gałąź z kodem źródłowym
- **deploy** - automatycznie generowana gałąź ze skompilowanymi plikami (do Hostingera)

### NIE EDYTUJ gałęzi deploy ręcznie!
Wszystkie pliki w gałęzi `deploy` są generowane automatycznie. Jeśli coś zmienisz ręcznie, zostanie to nadpisane przy następnym wdrożeniu.

## Testowanie lokalnie

### Instalacja
```bash
cd PD-fotografia
npm install
```

### Uruchomienie serwera deweloperskiego
```bash
npm run dev
```
Strona będzie dostępna pod adresem: http://localhost:5173

### Budowanie (compile)
```bash
npm run build
```
Wynik będzie w katalogu `PD-fotografia/dist`

## Aktualizowanie strony

Aby zaktualizować stronę na Hostingerze:

1. Wprowadź zmiany w kodzie źródłowym (katalog `PD-fotografia/src/`)
2. Przetestuj lokalnie używając `npm run dev`
3. Wykonaj commit i push do gałęzi `main`:
   ```bash
   git add .
   git commit -m "Opis zmian"
   git push origin main
   ```
4. GitHub Actions automatycznie zbuduje i wdroży zmiany
5. Po kilku minutach zmiany będą widoczne na Twojej stronie

## Rozwiązywanie problemów

### Wdrożenie nie działa
1. Sprawdź status GitHub Actions w zakładce "Actions" w repozytorium
2. Upewnij się, że workflow `Deploy to Hostinger` zakończył się sukcesem
3. Sprawdź czy gałąź `deploy` została zaktualizowana

### Strona nie aktualizuje się
1. Sprawdź panel Hostingera - może być potrzebne ręczne "Pull" z repozytorium
2. Sprawdź czy Hostinger ma dostęp do gałęzi `deploy`
3. Wyczyść cache przeglądarki (Ctrl + Shift + R)

### Błędy w GitHub Actions
1. Sprawdź logi w zakładce "Actions"
2. Upewnij się, że wszystkie testy przechodzą lokalnie
3. Sprawdź czy `npm run build` działa lokalnie

## Pomoc
W razie problemów:
- Sprawdź dokumentację Hostingera: https://support.hostinger.com
- Przejrzyj logi w GitHub Actions
- Skontaktuj się z supportem Hostingera
