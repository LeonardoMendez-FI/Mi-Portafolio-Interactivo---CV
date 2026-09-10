# Mi Portafolio Interactivo - CV

Versión reorganizada para que el **contenido se edite desde archivos de datos**, sin modificar HTML, CSS o JavaScript cada vez que agregues un proyecto, curso, habilidad o experiencia.

## La regla principal

Para actualizar el contenido normal del CV utiliza solamente:

```text
data/
assets/
```

No necesitas modificar `components/`, `css/` o `js/` salvo que quieras cambiar el diseño o el comportamiento del sitio.

## Estructura

```text
├── data/
│   ├── personal.json       Datos personales, perfil y contacto
│   ├── projects.json       Proyectos
│   ├── experience.json     Experiencia
│   ├── courses.json        Cursos y eventos
│   ├── skills.json         Habilidades técnicas
│   ├── tools.json          Software y herramientas
│   ├── languages.json      Idiomas
│   ├── education.json      Formación académica
│   ├── achievements.json   Logros deportivos y otros datos
│   ├── ui.json             Textos de interfaz ES/EN
│   └── config.json         EmailJS y PDF
│
├── assets/
│   ├── profile/
│   ├── projects/
│   ├── experience/
│   └── courses/
│
├── components/             Estructura visual (normalmente no tocar)
├── css/                    Diseño (normalmente no tocar)
└── js/                     Lógica (normalmente no tocar)
```

## Cómo agregar un proyecto

### 1. Crea su carpeta

Ejemplo:

```text
assets/projects/robot-aruco/
```

Coloca ahí sus imágenes:

```text
cover.jpg
01.jpg
02.jpg
03.jpg
```

### 2. Abre `data/projects.json`

Copia un proyecto existente y modifica sus campos:

```json
{
  "id": "robot-aruco",
  "visible": true,
  "title": {
    "es": "Sistema de Medición de Error con ArUco",
    "en": "ArUco Positioning Error Measurement System"
  },
  "date": {
    "es": "Proyecto académico | 2026",
    "en": "Academic Project | 2026"
  },
  "technologies": ["Python", "OpenCV", "ArUco", "PySide6"],
  "items": [
    {
      "es": "Medición externa del error de posicionamiento de un robot móvil.",
      "en": "External measurement of a mobile robot positioning error."
    }
  ],
  "mediaFolder": "assets/projects/robot-aruco/",
  "gallery": ["cover.jpg", "01.jpg", "02.jpg", "03.jpg"],
  "links": {
    "github": "https://github.com/...",
    "demo": "",
    "documentation": ""
  }
}
```

Guarda el JSON. No hay que crear ninguna tarjeta manualmente: JavaScript la genera automáticamente.

## Reordenar contenido

El orden en el archivo JSON es el orden de aparición en el portafolio. Mueve el objeto completo hacia arriba o hacia abajo.

## Ocultar algo sin borrarlo

Cambia:

```json
"visible": true
```

a:

```json
"visible": false
```

Funciona para proyectos, cursos, habilidades, herramientas, idiomas, educación y demás elementos compatibles.

## Galerías

El navegador no puede descubrir automáticamente todos los archivos que existen dentro de una carpeta en GitHub Pages. Por eso la carpeta se declara una vez en `mediaFolder` y en `gallery` solo escribes los nombres de archivo que quieres mostrar, en el orden deseado.

```json
"mediaFolder": "assets/projects/mi-proyecto/",
"gallery": ["cover.jpg", "01.jpg", "02.jpg"]
```

También puedes usar una URL completa como elemento de `gallery` si alguna imagen está alojada externamente.

## Links disponibles

Los elementos de proyectos/cursos/experiencia aceptan:

```json
"links": {
  "github": "",
  "demo": "",
  "documentation": "",
  "certificate": ""
}
```

Un valor vacío no genera botón.

## Idiomas

Los textos editables usan normalmente:

```json
{
  "es": "Texto en español",
  "en": "Text in English"
}
```

Así la traducción está junto al dato y no en un script separado.

## Probarlo localmente

Debido a que el sitio lee archivos JSON con `fetch()`, **no abras `index.html` directamente con doble clic**. El navegador puede bloquear la lectura de archivos locales.

Desde la carpeta del proyecto ejecuta:

```bash
python -m http.server 8000
```

Después abre:

```text
http://localhost:8000
```

En GitHub Pages funciona normalmente porque el sitio ya se sirve mediante HTTP/HTTPS.

## Validar los JSON

Si editas un JSON y el sitio deja de cargar, lo más común es una coma faltante o sobrante. Puedes comprobar todos los archivos con:

```bash
python tools/validate_data.py
```

## Contacto y EmailJS

Los datos de contacto están en `data/personal.json`.
La configuración pública de EmailJS está en `data/config.json`.

## Perfil

La imagen definida actualmente es:

```text
assets/profile/profile.svg
```

Puedes reemplazarla por `profile.jpg` y cambiar solo este campo de `data/personal.json`:

```json
"profileImage": "assets/profile/profile.jpg"
```

## PDF profesional

El botón de descarga **no imprime directamente la página web**. `js/modules/pdf.js` reconstruye un CV independiente a partir de los mismos archivos JSON de `/data`.

El PDF profesional incluye:

- formato carta de 2 páginas;
- encabezado formal con datos de contacto;
- código QR hacia el portafolio interactivo;
- perfil, habilidades, idiomas y formación académica;
- experiencia y proyectos destacados;
- herramientas, logros deportivos, otros datos, cursos y eventos;
- distribución y saltos de página independientes del diseño de la página web.

La configuración se encuentra en `data/config.json`, dentro de `pdf`:

```json
{
  "pdf": {
    "filename": "Leonardo_Mendez_CV.pdf",
    "scale": 2,
    "portfolioUrl": "https://leonardomendez-fi.github.io/Mi-Portafolio-Interactivo---CV/",
    "projectsFirstPage": 3,
    "maxProjects": 6,
    "maxCourses": 4
  }
}
```

`portfolioUrl` es la URL que utiliza el QR cuando ejecutas el portafolio desde localhost. Cuando la página está publicada, el sistema usa la URL abierta en el navegador.

Los elementos con `visible: false` tampoco se incluyen en el PDF. Opcionalmente, un proyecto, curso o experiencia puede incluir `"pdfVisible": false` si quieres mostrarlo en el portafolio web pero excluirlo del CV descargable.

Para un resumen específico en PDF, los proyectos pueden incluir opcionalmente:

```json
"pdfSummary": {
  "es": "Resumen breve exclusivo para el CV en PDF.",
  "en": "Short summary used only in the PDF CV."
}
```

Si `pdfSummary` no existe, el PDF utiliza automáticamente el primer elemento de `items`.
