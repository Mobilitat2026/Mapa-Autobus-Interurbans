<script setup>
import { ref } from 'vue'
const x = ref('—')
const y = ref('—')
const sdkStatus = ref('Pendiente de conectar el SDK de MLightCAD')
const fileName = ref('Ningún DWG cargado')
const layers = ref([])
const onPointerMove = (event) => {
  const rect = event.currentTarget.getBoundingClientRect()
  // Coordenadas de pantalla provisionales. Sustituir por coordenadas CAD del SDK.
  x.value = (event.clientX - rect.left).toFixed(2)
  y.value = (rect.bottom - event.clientY).toFixed(2)
}
const onFile = (event) => {
  const file = event.target.files?.[0]
  if (!file) return
  fileName.value = file.name
  sdkStatus.value = 'Archivo seleccionado; el visor real requiere la biblioteca MLightCAD y su inicialización.'
}
</script>

<template>
  <main class="app-shell">
    <header class="topbar">
      <div class="brand-mark">M</div>
      <div><h1>Mapa Autobús Interurbans</h1><p>Visor CAD · prueba MLightCAD</p></div>
      <label class="file-button">Seleccionar DWG<input type="file" accept=".dwg,.dxf" @change="onFile" /></label>
    </header>
    <section class="toolbar">
      <span class="status-dot"></span><span>{{ sdkStatus }}</span>
      <span class="filename">{{ fileName }}</span>
    </section>
    <section class="workspace">
      <aside class="side-panel">
        <h2>Capas</h2>
        <p class="muted">Las capas se mostrarán aquí cuando se conecte el SDK.</p>
        <ul v-if="layers.length"><li v-for="layer in layers" :key="layer">{{ layer }}</li></ul>
        <div class="note"><strong>Nota de integración</strong><p>Esta versión es el esqueleto de la aplicación. Todavía no renderiza archivos DWG: hace falta incorporar el paquete/SDK autorizado de MLightCAD y adaptar su API de carga, capas y coordenadas.</p></div>
      </aside>
      <section class="viewer" @pointermove="onPointerMove">
        <div class="viewer-grid"></div>
        <div class="empty-state"><div class="cad-icon">CAD</div><h2>Área del visor</h2><p>El visor MLightCAD se inicializará en esta zona.</p><p class="muted">Seleccionar un DWG solo identifica el archivo; no lo dibuja todavía.</p></div>
        <div class="coord-bar"><span>COORDENADAS DE PANTALLA</span><strong>X: {{ x }}</strong><strong>Y: {{ y }}</strong></div>
      </section>
    </section>
    <footer>Prototipo de integración · no sustituye el visor actual hasta validar la carga del DWG.</footer>
  </main>
</template>
