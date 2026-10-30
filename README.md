# Práctica de gestión de entornos Angular

Aplicación Angular con un componente hijo que identifica el entorno en pantalla.

## Ejecutar

```bash
npm install
npm start
```

## Compilar

```bash
npm run build
```

## Ramas

- `main`: producción, verde.
- `qa-pending`: pruebas QA, naranja.
- `uat-pending`: aceptación UAT, azul.

Las ramas vienen incluidas en el repositorio Git local. Para publicar en tu cuenta, crea un repositorio vacío `practica-entornos` en GitHub y ejecuta:

```bash
git remote add origin https://github.com/TU_USUARIO/practica-entornos.git
git push -u origin main
git push -u origin qa-pending
git push -u origin uat-pending
```

En Vercel importa el repositorio con `main` como Production Branch y el preset Angular. Comprueba las rutas de salida que detecte Vercel. Los pushes a `qa-pending` y `uat-pending` producirán despliegues Preview. Revisa Deployment Protection si el profesor tiene que verlos sin autenticarse.

**Nota:** el enunciado pide ignorar el componente de entorno al final. Se ha mantenido versionado porque cada rama necesita su propia versión y un `.gitignore` no afecta a archivos ya seguidos por Git. Si es imprescindible cumplir ese punto literalmente, habría que coordinar una estrategia alternativa de configuración por rama.
