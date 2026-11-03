# Práctica de gestión de entornos Angular

Ramas: main (PROD verde), qa-pending (QA naranja), uat-pending (UAT azul).

## Ejecutar

```bash
npm install
npm start
```

## Compilar

```bash
npm run build
```

## Componente de entorno fuera del control de versiones

El directorio `/src/app/environment-badge/` está en `.gitignore` y su componente ya no se sigue en Git. Se retiró del índice, equivalente a `git rm --cached`, sin borrar el historial previo. No hay que editarlo ni añadirlo con `git add -f`.

Los scripts prestart y prebuild crean el componente local automáticamente. Leen environment-code.json, con PROD, QA o UAT según la rama, para conservar el indicador correcto tanto en un clon nuevo como en Vercel. Se versionan el generador y la configuración, pero no el componente generado. Utiliza npm start y npm run build para ejecutar estos pasos automáticamente.

Comprobación después de generar:

```bash
git check-ignore -v src/app/environment-badge/environment-badge.component.ts
git ls-files src/app/environment-badge/
```

El primer comando muestra la regla y el segundo no devuelve ningún archivo. El componente sigue existiendo localmente. En un clon limpio se crea antes de compilar; así el import de AppComponent sigue funcionando.

Vercel compila con npm run build y publica dist/practica-entornos/browser. main es producción; qa-pending y uat-pending son Preview.
