# Optymalizacje Performance - PD Fotografia

## Wprowadzone usprawnienia

### 1. ✅ Mniejsze rozmiary obrazów

**Pliki:** `Home.jsx`, `Horses.jsx`, `Dogs.jsx`, `Events.jsx`

**Zmiana:** Zamiast pobierać obrazy w pełnej rozdzielczości (`full`), teraz preferowane są mniejsze wersje:
- `large` (~1024px szerokości)
- `medium_large` (~768px szerokości)
- `full` jako fallback

**Efekt:** Redukcja rozmiaru obrazów z ~2-5MB do ~100-300KB każdy.

```javascript
// Przed:
url: media.source_url || media.media_details?.sizes?.full?.source_url

// Po:
const sizes = media.media_details?.sizes;
const url = sizes?.large?.source_url || 
            sizes?.medium_large?.source_url || 
            sizes?.full?.source_url || 
            media.source_url;
```

---

### 2. ✅ Lazy Loading dla wszystkich obrazów

**Pliki:** 
- `OfferPageHeader.jsx`
- `OfferPageAbout.jsx`
- `TypesOfSessions.jsx`
- `Gallery.jsx` (już było)
- `About.jsx` (już było)
- `BlueBar.jsx` (już było)
- `Offer.jsx` (już było)

**Zmiana:** Dodano atrybut `loading="lazy"` do wszystkich tagów `<img>`.

**Efekt:** Obrazy poniżej widocznego obszaru (below the fold) są ładowane dopiero gdy użytkownik do nich przewinie.

```jsx
<img src={imageUrl} loading="lazy" />
```

---

### 3. ✅ Paginacja galerii Portfolio

**Plik:** `Gallery.jsx`

**Zmiana:** Zamiast ładować wszystkie ~70 obrazów naraz, galeria:
- Początkowo wyświetla 8 obrazów
- Przycisk "Pokaż więcej" ładuje kolejne 8
- Układ: 2 rzędy z horyzontalnym scrollem (`grid-rows-2 grid-flow-col`)

**Efekt:** Początkowe ładowanie strony ~8x szybsze.

```javascript
const IMAGES_PER_PAGE = 8;
const [visibleCount, setVisibleCount] = useState(IMAGES_PER_PAGE);
const visibleImages = images.slice(0, visibleCount);
```

---

### 4. ✅ Optymalizacja API calls (wcześniej zrobione)

**Pliki:** `Home.jsx`, `Horses.jsx`, `Dogs.jsx`, `Events.jsx`

**Zmiana:** 
- Użycie parametru `_embed` w WordPress REST API
- Eliminacja N+1 problemu (osobny fetch dla każdego media)
- Priorytetowe ładowanie Hero (Above the fold)

**Efekt:** Redukcja z ~20+ żądań HTTP do 2 żądań.

```javascript
// Przed: 1 fetch na posty + N fetchów na media
fetch(`/wp-json/wp/v2/posts?categories=11`)
// potem dla każdego:
fetch(`/wp-json/wp/v2/media/${post.featured_media}`)

// Po: 1 fetch z embed
fetch(`/wp-json/wp/v2/posts?categories=11&_embed`)
```

---

## Przyszłe możliwe optymalizacje

### 5. 🔄 Cloudflare CDN (w trakcie konfiguracji)
- Cache-Control headers dla obrazów
- Automatyczna minifikacja
- CDN edge caching

### 6. ⏳ WebP/AVIF format obrazów
- Kompresja bez utraty jakości
- Plugin WordPress: ShortPixel lub Imagify

### 7. ⏳ Preload krytycznych obrazów
```html
<link rel="preload" as="image" href="hero-image.webp" />
```

### 8. ⏳ Skeleton loading
- Placeholdery podczas ładowania obrazów
- Lepszy UX przy wolnym połączeniu

---

## Jak sprawdzić efekty

1. **Chrome DevTools → Network tab** - sprawdź rozmiary ładowanych obrazów
2. **Lighthouse** - uruchom audyt Performance
3. **Chrome DevTools → Performance tab** - zmierz LCP (Largest Contentful Paint)

---

*Ostatnia aktualizacja: 14 stycznia 2026*
