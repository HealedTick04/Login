# Sistema de Gestión Escolar - Aplicación Web en Angular

Proyecto web desarrollado con **Angular** que implementa un flujo completo de autenticación, gestión de usuarios, registro de alumnos con validaciones personalizadas en JavaScript nativo y un panel interactivo con barra de navegación y menú lateral.

---

## 👥 Integrantes del Equipo
* **[Pon qui tu nombre y sube el commit para que se actualice]** - Módulo de Autenticación (Login, Registro) y estructura base del Navbar e Index.
* **[Fernando Rojas García]** - Módulo de Usuarios, Módulo de Alumnos (Número de control y Modal de edad), Sidebar y Utilería de validaciones.

---

## 🚀 Características y Funcionalidades

### 1. Autenticación y Sesión
* **Login y Registro**: Formulario de inicio de sesión con validación de credenciales guardadas en `localStorage`.
* **Persistencia de sesión**: El sistema almacena la sesión activa del usuario para mantener el estado entre vistas.

### 2. Barra de Navegación Superior (Navbar)
* **Usuario dinámico**: Muestra el nombre del usuario autenticado en la esquina superior derecha.
* **Menú desplegable (Dropdown)**: Menú interactivo al hacer clic en el nombre.
* **Cierre de sesión seguro**: Opción "Salir del sistema" que limpia los datos de sesión y redirige a la pantalla de login.

### 3. Menú Lateral (Sidebar)
* Navegación interactiva tipo acordeón para acceder a los diferentes módulos sin recargar la página.
* Enlace a la vista general de Inicio.

### 4. Módulo de Usuarios (Captura)
* Formulario reactivo con validaciones de:
  * Nombre de usuario obligatorio.
  * Correo electrónico validado mediante función externa en JavaScript (`validarCorreo`).
  * Contraseña validada con mínimo de 8 caracteres (`validarPassword`).
  * Esto no verifica si es un nombre valido o si debe de ser uno real

### 5. Módulo de Alumnos (Captura)
* Formulario para alta de estudiantes con:
  * Nombre y apellidos obligatorios.
  * **Número de control**: Validación estricta a exactamente 6 dígitos numéricos usando `validarNumeroControl` de JavaScript nativo.
  * **Modal de Mayoría de Edad**: Cálculo automático de la edad a partir de la fecha de nacimiento y despliegue de una ventana modal que notifica si el estudiante es **Mayor de Edad** o **Menor de Edad**.

### 6. Librería de Validaciones (`utileria.js`)
* Archivo JavaScript independiente ubicado en `src/assets/js/utileria.js` e integrado en `angular.json` para desacoplar las reglas de validación del framework.

---

##  Tecnologías Utilizadas
* **Angular** (Componentes Standalone, nuevo flujo de control `@if`)
* **TypeScript**
* **HTML5 & CSS3** (Diseño moderno en modo oscuro con acentos neón)
* **JavaScript** nativo (Scripting de utilería)

---

##  Instalación y Ejecución Local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/HealedTick04/Login.git