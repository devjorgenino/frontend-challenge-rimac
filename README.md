# Frontend Challenge Rimac

## Descripción del Proyecto

Este proyecto es una solución a un desafío técnico de frontend para la empresa Rimac, diseñado para demostrar habilidades de desarrollo en un entorno de trabajo simulado. El objetivo principal fue crear una aplicación web moderna y reactiva que cumpliera con los siguientes requisitos: maquetar un diseño proporcionado en Figma, consumir datos de una API REST y gestionar el estado de la aplicación de manera eficiente.

## Tecnologías Utilizadas

Para el desarrollo de este proyecto, se ha optado por un stack de tecnologías robusto y ampliamente utilizado en la industria, lo que garantiza escalabilidad y mantenibilidad.

- **React.js**: Se utilizó esta librería de JavaScript para construir la interfaz de usuario de manera declarativa y basada en componentes.

- **Vite**: Un bundler de nueva generación que se eligió por su velocidad, tanto en el arranque del servidor de desarrollo como en la compilación final del proyecto, mejorando la experiencia del desarrollador.

- **Typescript**: Se implementó para añadir tipado estático a JavaScript, lo cual previene errores comunes en tiempo de ejecución, mejora la legibilidad del código y facilita el trabajo en equipo.

- **Sass**: Utilicé Sass para una mejor organización y mantenibilidad de los estilos CSS, permitiendo el uso de variables, mixins y otros beneficios.

- **Axios**: Para manejar las solicitudes HTTP a las APIs de forma simple y eficiente.

- **React Router**: Para la gestión de rutas y navegación dentro de la aplicación.

- **Gestión de Estados**: Se utilizó una combinación de hooks de React (useState, useEffect) para manejar el estado local de los componentes y la lógica de consumo de la API, garantizando que los datos de la interfaz se mantengan sincronizados.

- **Manejo de API REST**: Para la comunicación con la API, se empleó la función nativa fetch, que permite realizar peticiones de manera asíncrona para obtener y enviar datos.

## Levantar el Proyecto

Para levantar el proyecto localmente, sigue estos pasos:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu-usuariofrontend-challenge-rimac.git
   ```

2. **Instala las dependencias:**

   ```bash
   cd rimac-frontend-challenge
   npm install
   ```

3. **Correr los test unitarios: (Opcional pero recomendado)**

   ```bash
   npm run test
   ```

4. **Inicia la aplicación:**

   ```bash
   npm run dev
   ```

   Esto iniciará la aplicación en tu navegador predeterminado. Si no se abre automáticamente, visita `http://localhost:3000`.

---

## Estructura y Arquitectura del Proyecto

La arquitectura del proyecto se diseñó siguiendo el principio de componentes reutilizables y una estructura modular.

- Estructura de Carpetas: El proyecto está organizado en una estructura lógica que facilita la navegación y el mantenimiento. Se separan los componentes, los hooks personalizados, los estilos y las utilidades en carpetas dedicadas.

- Componentización: La interfaz de usuario se descompone en componentes más pequeños y reutilizables (como Header, Form, Card, etc.). Esto promueve la reutilización de código y hace que la aplicación sea más fácil de mantener y escalar.

- Diseño Responsivo: Se ha prestado especial atención al diseño responsivo para asegurar que la aplicación se adapte correctamente a diferentes tamaños de pantalla, desde dispositivos móviles hasta escritorios.

---

## Desafíos y Soluciones

Durante el desarrollo, se abordaron varios desafíos técnicos:

- Maquetación Precisa: El reto principal fue replicar con precisión el diseño de Figma, incluyendo los espaciados, tipografías y colores. Esto se logró mediante un enfoque de componentes estilizados y el uso de CSS flexible y cuadrícula (Flexbox y Grid) para crear layouts complejos.

- Consumo y Gestión de la API: Se implementó la lógica para manejar el ciclo de vida de las peticiones a la API, incluyendo la carga de datos, la gestión de errores y el manejo de los estados de "cargando" y "listo". Esto asegura una experiencia de usuario fluida y robusta.

- Validación de Formularios: Se implementó la validación de formularios en el lado del cliente para proporcionar feedback instantáneo al usuario y evitar envíos de datos incorrectos a la API.

---

## Conclusión

Este proyecto demuestra una sólida comprensión de las tecnologías y prácticas modernas de desarrollo frontend. La combinación de React, Vite y TypeScript ha resultado en una aplicación eficiente, escalable y con un código de alta calidad. La implementación de un diseño responsivo y la gestión efectiva de la comunicación con la API demuestran la capacidad para crear soluciones web completas y profesionales. Este proyecto está listo para ser desplegado, como se puede ver en el link proporcionado, lo que confirma su funcionalidad y rendimiento.

---

Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto conmigo.

Email: jorgenino.dev@gmail.com

¡Gracias por su interés!
