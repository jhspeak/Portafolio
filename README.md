# JHSPEAK — Cyberpunk Portfolio

Sitio estático adaptable a móvil, creado con HTML, CSS y JavaScript sin frameworks ni proceso de compilación.

## Vista previa local
Abre `index.html` en tu navegador. Para una prueba más fiel, puedes usar la extensión Live Server de VS Code.

## Personalización rápida
1. Abre `index.html`.
2. Cambia `jhspeak`, la biografía, los proyectos y los enlaces de redes sociales por tus datos.
3. Busca `hello@example.com` y reemplázalo por tu correo público, o elimina el botón de contacto.
4. Abre `style.css` y cambia las variables al principio de `:root` para ajustar colores.
5. Para música, coloca un MP3 que tengas derecho a usar en `assets/` y edita `CONFIG` en `script.js`:
   - `TRACK_URL: "assets/mi-cancion.mp3"`
   - `TRACK_TITLE: "Título"`
   - `TRACK_ARTIST: "Artista"`

El reproductor no reproducirá audio hasta que configures un archivo. No subas canciones con copyright si no tienes permiso para distribuirlas.

## Publicación gratis con GitHub Pages
1. Crea una cuenta en GitHub si no tienes una.
2. Crea un repositorio público, por ejemplo `jhspeak-portfolio`.
3. Sube `index.html`, `style.css`, `script.js`, `README.md` y la carpeta `assets` (si la usas) a la raíz del repositorio.
4. En el repositorio, abre **Settings → Pages**.
5. En **Build and deployment**, selecciona **Deploy from a branch**, elige `main` y `/ (root)`, y guarda.
6. Espera a que GitHub Pages publique la web. La dirección será parecida a `https://TU-USUARIO.github.io/jhspeak-portfolio/`.

## Usar jhspeak.pntr.dev
Para usar `jhspeak.pntr.dev` como dirección de esta web, el proveedor DNS tiene que permitir configurar un registro para apuntar al alojamiento. GitHub Pages normalmente requiere que el dominio esté configurado en la sección **Settings → Pages → Custom domain**, y que los registros DNS cumplan sus instrucciones. Los subdominios administrados por PNTR pueden tener limitaciones o reglas propias; no des por hecho que será compatible. Si PNTR no permite los registros requeridos, usa la URL `github.io` o un hosting que acepte tu configuración DNS.

## Contador de visitas
El contador incluido mide visitas desde el mismo navegador/dispositivo usando `localStorage`. No es un contador público global. Para un contador global necesitas integrar un servicio externo de analítica/contador.

## Redes sociales
Los enlaces actuales son marcadores de posición. Edita sus `href` en `index.html` y añade tus perfiles reales. El enlace de Discord es solo el inicio de Discord; reemplázalo por tu invitación o perfil público adecuado.
