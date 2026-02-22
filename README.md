# AI Developer Path

Web interactiva para seguir una ruta de aprendizaje desde fundamentos de IA hasta diseño de sistemas en producción.

## Tabla de contenido
- [Qué hace esta web](#qué-hace-esta-web)
- [Funciones principales](#funciones-principales)
- [Cómo usarla](#cómo-usarla)
- [Sistema de progreso](#sistema-de-progreso)
- [Importar y exportar estado](#importar-y-exportar-estado)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Ejecución local](#ejecución-local)
- [Notas técnicas](#notas-técnicas)

## Qué hace esta web
`AI Developer Path` presenta un roadmap completo de formación en IA con:

- 5 bloques temáticos
- 10 capítulos
- 5 exámenes de bloque
- 12 logros desbloqueables
- Seguimiento de XP y progreso persistente

La interfaz incluye:

- Fondo animado con `Three.js`
- Tarjetas de capítulos con recursos externos
- Modal de detalle por capítulo
- Sistema de notificaciones tipo toast
- Panel de estado con importación/exportación de progreso

## Funciones principales
<details>
<summary><strong>Roadmap interactivo</strong></summary>

- Expandir/colapsar bloques del temario.
- Marcar capítulos como completados o pendientes.
- Marcar exámenes como aprobados o pendientes.
- Abrir recursos de estudio por capítulo.

</details>

<details>
<summary><strong>Gamificación</strong></summary>

- XP por capítulo completado: `+50`
- XP por examen aprobado: `+100`
- Barra de XP en la navegación.
- Logros automáticos por hitos (capítulos, exámenes y XP).

</details>

<details>
<summary><strong>Persistencia y sincronización</strong></summary>

- Guardado automático en `localStorage`.
- Exportación de progreso a `.json`.
- Importación validada desde archivo `.json`.
- Reset completo con confirmación.

</details>

## Cómo usarla
1. Abre `ai-course.html` en tu navegador.
2. Entra a **Mapa de Aprendizaje** y abre un bloque.
3. Haz clic en un capítulo para ver detalles y recursos.
4. Marca el capítulo como completado desde el modal.
5. Marca el examen del bloque cuando corresponda.
6. Revisa **Panel de Progreso** y **Logros** para ver tu avance.

## Sistema de progreso
El estado que maneja la app incluye:

- `completedChapterIds`: capítulos completados
- `completedChapters`: total de capítulos completados
- `passedExams`: exámenes aprobados
- `unlockedAchievements`: logros desbloqueados
- `xp`: experiencia acumulada
- `streak`: racha de capítulos completados
- `_savedAt`: timestamp del último guardado

El estado se guarda en:

- Clave `localStorage`: `ai_course_state`

## Importar y exportar estado
Desde el panel **Gestor de Progreso** puedes:

- Exportar tu progreso actual a un JSON descargable.
- Importar un JSON arrastrándolo al drop zone o seleccionándolo manualmente.
- Resetear todo el progreso (acción irreversible).

Validaciones de importación:

- Solo se aceptan IDs de capítulos y exámenes conocidos.
- `xp` debe ser un número positivo.
- Debe existir estructura JSON válida.

## Estructura del proyecto
```text
AI_WEB/
├─ ai-course.html   # estructura y contenido de la web
├─ ai-course.css    # estilos visuales
├─ ai-course.js     # lógica de UI, estado, progreso, logros e import/export
└─ README.md
```

## Ejecución local
Opción rápida:

1. Doble clic en `ai-course.html`.

Opción recomendada (servidor local):

```powershell
cd C:\Users\user\OneDrive\Escritorio\AI_WEB
python -m http.server 5500
```

Luego abre:

- `http://localhost:5500/ai-course.html`

## Notas técnicas
- Dependencia externa: `Three.js` vía CDN.
- El contenido de capítulos/exámenes/logros está definido en constantes dentro de `ai-course.js`.
- La interacción se gestiona con listeners y `data-action` (sin handlers inline en HTML).
