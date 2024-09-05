<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->


# Listado de Personajes de Harry Potter

Este proyecto consiste en desarrollar una página web utilizando React que presente un listado de personajes de Harry Potter, con la capacidad de filtrar por nombre y por casa, además de mostrar detalles completos de cada personaje al hacer clic en su tarjeta correspondiente.

## Autor

- **Nombre**: Ángela Ávila Lasanta
- **Email**: lasantavispa@gmail.com
- **GitHub**: https://github.com/Avispas

## Instrucciones de Instalación y Ejecución

1. Clona este repositorio en tu ordenador utilizando el siguiente comando: git clone https://github.com/Adalab/modulo-3-evaluacion-final-Avispas.git


2. Navega hasta la carpeta del proyecto: cd <NOMBRE_DEL_PROYECTO>


3. Instala las dependencias del proyecto utilizando npm: npm install


4. Inicia la aplicación: npm start


## Estructura del Proyecto

El proyecto sigue la siguiente estructura de carpetas y archivos:

/src
|-- /components # Componentes de React
|-- /services # Servicios para llamar a la API y manejar almacenamiento local
|-- /scss # Estilos SCSS
|-- App.js # Componente principal que controla la lógica de la aplicación
|-- index.js # Punto de entrada de la aplicación



## Funcionalidades del Componente App

El componente `App` es el punto central de la aplicación y proporciona las siguientes funcionalidades:

1. **Obtención de Datos**: Utiliza `useEffect` para llamar a la API y obtener los datos de los personajes de Harry Potter.

2. **Filtrado por Casa, Nombre y Estado**: Permite filtrar los personajes por casa, nombre y estado (vivo o muerto) mediante estados de React y funciones de filtrado.

3. **Ordenación Alfabética**: Ordena los personajes alfabéticamente por nombre.

4. **Almacenamiento Local**: Utiliza `localStorage` para almacenar y recuperar los filtros aplicados por el usuario, permitiendo que los datos persistan incluso después de cerrar y volver a abrir la aplicación.

5. **Gestión de Rutas**: Utiliza React Router para manejar las diferentes rutas de la aplicación, como la página principal y la página de detalle de personajes.

6. **Restablecimiento y Visualización de Detalles**: Permite al usuario restablecer los filtros y visualizar detalles completos de un personaje al hacer clic en su tarjeta correspondiente.

## Contribución

Si deseas contribuir a este proyecto, puedes seguir los siguientes pasos:

1. Haz un fork del repositorio.
2. Clona tu fork en tu máquina local.
3. Crea una nueva rama para tus cambios (`git checkout -b feature/nueva-caracteristica`).
4. Haz tus cambios y commitea (`git commit -am 'Añade nueva característica'`).
5. Sube tus cambios a tu repositorio en GitHub (`git push origin feature/nueva-caracteristica`).
6. Haz un pull request a la rama principal del repositorio original.


## Entrega

La entrega final del proyecto deberá realizarse antes del **12/02/2024 a las 14:00 horas**.


---

¡Gracias por tu interés en este proyecto! Si tienes alguna pregunta o sugerencia, no dudes en contactarme.