# Mapa-Autobus-Interurbans — MLightCAD prueba

Prototipo Vue + Vite preparado para alojarse en GitHub Pages. Incluye la estructura de la interfaz, un área reservada para el visor, un selector de archivo y una banda que muestra X/Y de pantalla al mover el ratón.

## Importante: estado de esta prueba

**Este ZIP todavía no incorpora el motor/SDK real de MLightCAD.** Por tanto, no puede representar el contenido de `Mapa Autobus interurbans 2025.dwg`. Las X/Y que aparecen son coordenadas de pantalla provisionales, no coordenadas del dibujo. Para completar la integración hacen falta el paquete oficial de MLightCAD, sus archivos de distribución y la API/documentación exacta de carga DWG, consulta de capas y transformación de coordenadas.

## Requisitos

- Node.js LTS y npm.
- Acceso autorizado al SDK/paquete de MLightCAD.
- El DWG de trabajo, que no se incluye en este ZIP.

## Ejecutar en local

```bash
npm install
npm run dev
```

Abre la dirección local que indique Vite. Para compilar:

```bash
npm run build
npm run preview
```

## Publicar en GitHub Pages

El flujo `.github/workflows/deploy.yml` compila la aplicación y publica `dist` al activar Pages con GitHub Actions. En el repositorio, selecciona **Settings → Pages → Build and deployment → GitHub Actions**.

## Próximo paso técnico

Integrar el SDK real en `src/App.vue`, inicializar el visor dentro de `.viewer`, cargar el DWG, enumerar/activar capas y reemplazar las coordenadas de pantalla por las coordenadas CAD que devuelva el motor.
