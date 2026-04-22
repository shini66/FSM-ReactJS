# FSM-ReactJS

Proyecto de ejemplo construido con React + Vite. Contiene una estructura mínima pero organizada para trabajar con componentes, hooks y servicios, además de integrar Tailwind CSS y configuración básica de ESLint y PostCSS.

**Descripción breve:**

Este repositorio es una plantilla/ejemplo para aprender y desarrollar aplicaciones React modernas con Vite como bundler. Incluye una estructura de carpetas pensada para separar componentes UI, páginas, hooks reutilizables y servicios (API), lo que facilita escalar y mantener el código.

**Por qué esta estructura:**

- `src/components/`: componentes reutilizables y subcarpetas de UI (botones, nav, footer).
- `src/hooks/`: hooks personalizados para lógica reutilizable (estado, efectos, FSM, etc.).
- `src/page/`: vistas o páginas principales de la app.
- `src/services/`: capa para llamadas a APIs y lógica de acceso a datos.
- `public/` y `src/assets/`: archivos estáticos y recursos.

**Tecnologías principales:**

- **React**: biblioteca UI.
- **Vite**: construcción y servidor de desarrollo rápido.
- **Tailwind CSS**: utilidades CSS para estilos.
- **PostCSS**: procesamiento de CSS (configuración con Tailwind).
- **ESLint**: reglas de linting (configuración mínima incluida).

## Requisitos

- Node.js 16 o superior (recomendado LTS).
- npm, yarn o pnpm como gestor de paquetes.
- Sistema operativo: Windows/macOS/Linux (multiplataforma).

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/shini66/FSM-ReactJS
cd FSM-ReactJS
```

2. Instala dependencias:

```bash
npm install
# o
# yarn install
# o
# pnpm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

4. Build de producción:

```bash
npm run build
npm run preview
```

## Comandos útiles

- `npm run dev` — Inicia servidor de desarrollo con HMR.
- `npm run build` — Genera la versión de producción en `dist/`.
- `npm run preview` — Sirve la build para pruebas locales.
- `npm test` — (Si se añade) correrá los tests.

## Notas y buenas prácticas

- Mantén los componentes pequeños y enfocados: un componente = una responsabilidad.
- Usa `src/services/` para centralizar llamadas HTTP y abstracciones de datos.
- Coloca la lógica compartida en `src/hooks/` para facilitar pruebas y reutilización.
- La configuración incluida (Tailwind, PostCSS, ESLint) está pensada para empezar rápido; ajústala según necesidades del proyecto.

Si quieres, puedo añadir secciones de ejemplo (cómo crear un componente, un hook o integrar una API) o traducir esto a inglés.

## Variables de entorno

La aplicación carga variables de entorno usando el sistema de Vite. Para que Vite exponga las variables en `import.meta.env` deben:

- Estar definidas en un archivo `.env` en la raíz del proyecto (misma carpeta que `vite.config.js`).
- Tener el prefijo `VITE_` (obligatorio). Ejemplo mínimo:

```env
VITE_API_URL=https://pokeapi.co/api/v2
```

También podés usar `.env.local` o `.env.development` según el entorno.

Si cambiás o creás `.env`, reiniciá el servidor de desarrollo con:

```bash
npm run dev
```

### Dónde se usan las variables

- El helper HTTP está en `src/helpers/api.js` y usa `import.meta.env.VITE_API_URL` como `baseURL` por defecto. Cambialo según necesites.

