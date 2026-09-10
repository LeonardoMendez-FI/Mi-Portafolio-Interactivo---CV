# Imágenes y archivos multimedia

La regla es simple: cada proyecto, experiencia o curso tiene su propia carpeta.

- `assets/profile/`: fotografía de perfil.
- `assets/projects/<id>/`: imágenes de cada proyecto.
- `assets/experience/<id>/`: imágenes de cada experiencia.
- `assets/courses/<id>/`: imágenes de cursos/eventos.

Los archivos `cover.svg` incluidos son únicamente marcadores para que el sitio no muestre imágenes rotas.
Puedes borrarlos después de agregar tus fotografías reales.

Ejemplo:

```text
assets/projects/robot-aruco/
├── cover.jpg
├── 01.jpg
├── 02.jpg
└── 03.jpg
```

En `data/projects.json`:

```json
"mediaFolder": "assets/projects/robot-aruco/",
"gallery": ["cover.jpg", "01.jpg", "02.jpg", "03.jpg"]
```
