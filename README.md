# Kopia strony glownej INTBA CREATORS Minecraft

Ten folder zawiera przerobiony snapshot strony glownej pod spolecznosc Minecraft tworzaca pluginy.

Zawartosc:
- `app/page.jsx` - komponent landing page bez pobierania pluginow.
- `app/globals.css` - zielony motyw i style landing page.
- `public/brand/intba-creators-logo.png` - logo INTBA CREATORS.
- `public/brand/intba-creators-render.png` - render postaci przyciety pod hero.
- `public/plugins/papierosy.png` - logo pluginu Papierosy.
- `public/plugins/cigarettes.png` - logo pluginu Cigarettes.
- `public/flags` - flagi jezykow.

Sciezki assetow w `page.jsx` sa takie same jak w aplikacji Next.js, czyli np. `/brand/intba-creators-logo.png`.

## Plugin downloads

Pierwszy plugin ma przygotowany slot pobierania:

```text
public/plugins/papierosy.jar
```

Gdy plik `papierosy.jar` zostanie wrzucony do tego folderu, zrob commit, push i deploy na Vercel. Przycisk pobierania na stronie zacznie wtedy wskazywac na `/plugins/papierosy.jar`.
