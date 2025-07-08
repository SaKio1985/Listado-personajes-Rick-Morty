# Rick and Morty App 🛸

Una aplicación web moderna y responsiva para explorar el universo de Rick and Morty, construida con React y conectada a la API oficial de Rick and Morty.

## 🌟 Características Principales

### 📋 Exploración de Personajes

- **Lista completa de personajes** con navegación por páginas
- **Búsqueda avanzada** por nombre de personaje
- **Filtros por estado**: Vivo, Muerto, Desconocido
- **Carga dinámica** de más resultados
- **Información detallada** de cada personaje incluyendo origen

### 🎨 Diseño y UX

- **Diseño responsivo** que se adapta a cualquier dispositivo
- **Interfaz intuitiva** con navegación por pestañas
- **Tema oscuro** con esquema de colores inspirado en la serie
- **Filtros rápidos** para una experiencia fluida
- **Estados de carga** y mensajes informativos

### 🚀 Funcionalidades Avanzadas

- **Navegación entre vistas**: Lista completa vs Búsqueda/Filtros
- **Paginación automática** con botón "Cargar más"
- **Búsqueda en tiempo real** con filtros combinados
- **Manejo de errores** y estados vacíos
- **Optimización de rendimiento** con efectos controlados

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca principal para UI
- **Bootstrap 5** - Framework CSS para estilos responsivos
- **Rsbuild** - Herramienta de construcción moderna
- **PNPM** - Gestor de paquetes eficiente
- **Rick and Morty API** - Fuente de datos oficial

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Character.jsx          # Componente individual de personaje
│   ├── CharacterList.jsx      # Lista paginada de personajes
│   └── CharacterSearch.jsx    # Búsqueda y filtros avanzados
├── App.jsx                    # Componente principal con navegación
├── App.css                    # Estilos globales
└── index.jsx                  # Punto de entrada
```

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (versión 16 o superior)
- PNPM instalado globalmente

### Pasos de instalación

1. **Clonar el repositorio**

   ```bash
   git clone [url-del-repositorio]
   cd rick-morty-app
   ```

2. **Instalar dependencias**

   ```bash
   pnpm install
   ```

3. **Ejecutar en modo desarrollo**

   ```bash
   pnpm dev
   ```

4. **Construir para producción**
   ```bash
   pnpm build
   ```

## 📊 Funcionalidades Detalladas

### 🔍 Sistema de Búsqueda

- Búsqueda por nombre con autocompletado
- Filtros por estado vital del personaje
- Combinación de múltiples filtros simultáneos
- Limpieza rápida de filtros

### 📄 Paginación Inteligente

- Navegación por páginas en vista de lista
- Carga progresiva en vista de búsqueda
- Indicadores de progreso y páginas totales
- Manejo automático de límites de API

### 🎯 Experiencia de Usuario

- Transiciones suaves entre vistas
- Feedback visual para acciones del usuario
- Manejo elegante de estados de carga
- Mensajes informativos y de error

## 🌐 API Utilizada

La aplicación consume la [Rick and Morty API](https://rickandmortyapi.com/), que proporciona:

- Información completa de 826+ personajes
- Datos de ubicaciones y episodios
- Endpoints para búsqueda y filtrado
- Documentación completa y sin autenticación

## 📱 Capturas de Pantalla

### Vista Principal

![Vista de Lista](https://res.cloudinary.com/dko8avpyk/image/upload/v1730064146/Screenshot_2024-10-27_at_21-45-22_Rsbuild_App_c8wcet.png)

### Características Visuales

- **Paleta de colores**: Tema oscuro con acentos en verde menta (#98FF98)
- **Tipografía**: Inter para una lectura óptima
- **Iconografía**: Emojis temáticos para mejor UX
- **Layout**: Grid responsivo con Bootstrap

## 🔧 Personalización

### Modificar Estilos

Los estilos principales están en `src/App.css`. Para personalizar:

```css
/* Cambiar color principal */
:root {
  --primary-color: #98ff98;
  --bg-gradient: linear-gradient(to bottom, #020917, #101725);
}
```

### Agregar Nuevos Filtros

Para añadir filtros adicionales, modifica `CharacterSearch.jsx`:

```javascript
// Ejemplo: Filtro por género
const [genderFilter, setGenderFilter] = useState("");

// Agregar al buildSearchUrl
if (genderFilter) {
  url += `&gender=${genderFilter}`;
}
```

## 📋 Roadmap y Mejoras Futuras

### 🎯 Próximas Funcionalidades

- [ ] **Información de planetas**: Mostrar detalles del planeta de origen
- [ ] **Vista de personaje individual**: Página dedicada con información completa
- [ ] **Favoritos**: Sistema para guardar personajes favoritos
- [ ] **Comparador**: Comparar estadísticas entre personajes
- [ ] **Modo offline**: Cache de datos para uso sin conexión

### 🔧 Mejoras Técnicas

- [ ] **Tests unitarios**: Cobertura completa con Jest/React Testing Library
- [ ] **Optimización de imágenes**: Lazy loading y optimización
- [ ] **PWA**: Convertir en Progressive Web App
- [ ] **Accesibilidad**: Mejorar compatibilidad con screen readers
- [ ] **SEO**: Optimización para motores de búsqueda

### 🎨 Mejoras de UX/UI

- [ ] **Animaciones**: Transiciones y micro-interacciones
- [ ] **Tema claro**: Opción de cambiar entre tema oscuro y claro
- [ ] **Filtros avanzados**: Búsqueda por episodio, especie, etc.
- [ ] **Ordenamiento**: Opciones de ordenar resultados
- [ ] **Vista de cuadrícula**: Diferentes layouts de visualización

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Para contribuir:

1. **Fork** el proyecto
2. **Crear** una rama para tu feature
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. **Commit** tus cambios
   ```bash
   git commit -m 'feat: Agregar nueva funcionalidad'
   ```
4. **Push** a la rama
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. **Abrir** un Pull Request

### 📝 Convenciones de Commits

- `feat:` Nueva funcionalidad
- `fix:` Corrección de bugs
- `docs:` Cambios en documentación
- `style:` Cambios de formato/estilo
- `refactor:` Refactorización de código
- `test:` Agregar o modificar tests

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- **Dan Harmon y Justin Roiland** - Creadores de Rick and Morty
- **[Rick and Morty API](https://rickandmortyapi.com/)** - Por proporcionar datos gratuitos
- **Comunidad de React** - Por las herramientas y documentación

⭐ **¡Si te gusta este proyecto, no olvides darle una estrella!** ⭐

_Wubba lubba dub dub!_ 🚀
