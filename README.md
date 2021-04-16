# Webpack Starter

Este es el proyecto inicial con todo configurado para empezar a desarrollar aplicaciones utilizando Webpack.

### Notas
Primero reconstruir los modulos de Node. Para eso nos ayuda el archivo package.json que indica los modulos que también hemos personalizado. Así que solamente necesitamos hacer lo siguiente:
```
npm install
```
Para construir el build, que contiene la carpeta dist, he configurado dos formas: 

El modo producción que nos prepara ya todo minimizado, ofuscado y compatible con versiones antiguas de los exploradores.

Y el modo desarrollador que facilita la lectura del código.

Recuerda que en todo momento puedes manipular la sintatxis de los comandos, crear nuevos archivos de configuración.. etc desde el archivo package.json.

El archivo de producción es el webpack.prod.js y hemos configurado en el package.js que lo llamaremos con el comando:
```
npm run build
```
El archivo de desarrollo es el webpack.config.js y hemos configurado en el package.js que lo llamaremos con el comando:
```
npm run build:dev
```