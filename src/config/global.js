export default {
  global: {
    componenteFormativo:
      'Exploración, validación y visualización de datos para la toma de decisiones',
    descripcionCurso:
      'Este componente aborda los fundamentos y técnicas del análisis exploratorio y la visualización de datos, enfocado en la toma de decisiones efectiva. Examina métodos estadísticos y técnicas de visualización avanzada y principios de comunicación de datos, integrando aspectos teóricos con aplicaciones prácticas mediante herramientas modernas. Diseñado para desarrollar competencias en la exploración sistemática y su traducción en insights accionables.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a2.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a1.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos del análisis exploratorio de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Introducción a la limpieza y transformación de datos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia en el análisis de datos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Preparación del entorno de programación',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Bibliotecas especializadas para análisis de datos',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Métodos de análisis exploratorio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Análisis univariado: estadísticas descriptivas y visualizaciones',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Análisis bivariado: correlaciones y relaciones entre variables',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Análisis multivariado: patrones y agrupaciones',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Técnicas de reducción de dimensionalidad y selección de características',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Visualización de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Principios de visualización efectiva',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Creación de gráficos interactivos con bibliotecas especializadas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: '<em>Dashboards</em> para toma de decisiones',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Narración con datos',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'De datos a decisiones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Identificación de <em>insights</em>',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Validación de hipótesis con datos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Comunicación de resultados',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Recomendaciones basadas en evidencia',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Introducción analítica de datos y visualización',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2024b, julio 25). <em>Introducción Analítica de datos y visualización.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=LuTpQ44F2xY',
    },
    {
      tema: 'Pruebas exploratorias, usabilidad y aceptación',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2024a, abril 3). <em>Pruebas de exploratorias, usabilidad y aceptación.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=CB3Bt4SFnCc',
    },
    {
      tema: 'Técnicas para el análisis de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022a, junio 27). <em>Técnicas para el análisis de datos.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=pjTI4UOgkM8',
    },
    {
      tema: ' Introducción a la visualización de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022c, diciembre 26). <em>Introducción a la visualización de datos.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-7nn2bm07Dw',
    },
    {
      tema: 'Metodologías de visualización de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023, 20 septiembre). <em>Metodologías de visualización de datos.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-JuQjKfqYpY',
    },
    {
      tema: 'Análisis de datos y elaboración de informes',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022b, agosto 26). <em>Análisis de datos y elaboración de informes.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=0vTv9pTVgvQ',
    },
  ],
  glosario: [
    {
      termino: 'Análisis bivariado',
      significado:
        'Técnica estadística que examina la relación entre dos variables diferentes, estudiando sus patrones de asociación y correlaciones. Fundamental para identificar relaciones causales potenciales y comprender cómo diferentes aspectos de los datos se influencian mutuamente.',
    },
    {
      termino: 'Análisis multivariado',
      significado:
        'Conjunto de métodos estadísticos que analizan simultáneamente múltiples variables y sus interrelaciones. Incluye técnicas como análisis de componentes principales y análisis factorial, permitiendo descubrir patrones complejos en los datos.',
    },
    {
      termino: '<em>Dashboard</em>',
      significado:
        'Panel visual interactivo que presenta información clave y métricas de manera consolidada y organizada. Facilita el monitoreo y toma de decisiones al proporcionar una vista integral del rendimiento y estado de diversos indicadores críticos.',
    },
    {
      termino: '<em>Data Storytelling</em>',
      significado:
        'Práctica que combina visualización de datos, narrativa y análisis para construir historias significativas basadas en datos. Implica la selección de elementos visuales y la construcción de una narrativa coherente para presentar <em>insights</em> efectivamente.',
    },
    {
      termino: '<em>Framework</em>',
      significado:
        'Marco de trabajo que proporciona una estructura estandarizada y mejores prácticas para el desarrollo de soluciones analíticas. Incluye herramientas, bibliotecas y metodologías que facilitan la implementación de procesos de análisis.',
    },
    {
      termino: '<em>Insight</em>',
      significado:
        'Comprensión profunda derivada del análisis de datos que revela patrones, tendencias o relaciones no evidentes a primera vista. Proporciona valor accionable para la toma de decisiones, combinando hallazgos cuantitativos con contexto empresarial.',
    },
    {
      termino: '<em>KPI (Key Performance Indicator)</em>',
      significado:
        'Métrica cuantificable crítica utilizada para evaluar el éxito en el cumplimiento de objetivos específicos. Proporciona una base objetiva para la evaluación del rendimiento y la toma de decisiones.',
    },
    {
      termino: '<em>Outlier</em>',
      significado:
        'Valor atípico que se desvía significativamente del patrón general de los datos. Su identificación y tratamiento adecuado es importante para el análisis estadístico robusto y puede revelar fenómenos interesantes.',
    },
    {
      termino: '<em>Pipeline</em>',
      significado:
        'Secuencia estructurada de procesos de datos donde la salida de cada etapa sirve como entrada para la siguiente. Representa un flujo de trabajo automatizado que incluye limpieza, transformación y análisis de datos.',
    },
    {
      termino: '<em>PCA (Principal Component Analysis)</em>',
      significado:
        'Técnica de reducción de dimensionalidad que transforma variables correlacionadas en un conjunto menor de variables no correlacionadas. Fundamental para simplificar datos complejos manteniendo la información relevante.',
    },
    {
      termino: '<em>Script</em>',
      significado:
        'Programas que automatizan la ejecución de tareas específicas que normalmente se realizarían manualmente. En análisis de datos, permiten la reproducibilidad y escalabilidad de los procesos analíticos.',
    },
    {
      termino: '<em>t-SNE</em>',
      significado:
        'Técnica de reducción de dimensionalidad no lineal efectiva para la visualización de datos complejos. Preserva las relaciones locales entre puntos de datos, permitiendo la identificación de patrones y clusters.',
    },
    {
      termino: 'Validación cruzada',
      significado:
        'Técnica estadística para evaluar la calidad de modelos analíticos, dividiendo los datos en subconjuntos para entrenamiento y prueba. Permite estimar la precisión y confiabilidad de los resultados.',
    },
    {
      termino: 'Visualización interactiva',
      significado:
        'Representación gráfica dinámica que permite la exploración activa y manipulación de datos. Incluye características como zoom, filtrado y actualización en tiempo real para facilitar el descubrimiento de patrones.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cairo, A. (2016). The Truthful Art: Data, Charts, and Maps for Communication. New Riders. https://doi.org/10.1007/978-1-4842-2486-6',
      link: '',
    },
    {
      referencia:
        'Chen, C., Härdle, W. K., & Unwin, A. (2023). Handbook of Data Visualization. Springer Nature.',
      link: '',
    },
    {
      referencia:
        'Few, S. (2012). Show Me the Numbers: Designing Tables and Graphs to Enlighten. Analytics Press.',
      link: '',
    },
    {
      referencia:
        'Knaflic, C. N. (2015). Storytelling with Data: A Data Visualization Guide for Business Professionals. Wiley.',
      link: '',
    },
    {
      referencia:
        'McKinney, W. (2022). Python for Data Analysis: Data Wrangling with pandas, NumPy, and Jupyter. O&#39;Reilly Media.',
      link: 'https://doi.org/10.1201/b17511',
    },
    {
      referencia:
        'Nussbaumer Knaflic, C. (2020). Storytelling with Data: Let&#39;s Practice Wiley.',
      link: '',
    },
    {
      referencia:
        'Tufte, E. R. (2001). The Visual Display of Quantitative Information. Graphics Press.',
      link: '',
    },
    {
      referencia:
        'VanderPlas, J. (2023). Python Data Science Handbook: Essential Tools for Working with Data. O&#39;Reilly Media.',
      link: '',
    },
    {
      referencia:
        'Wickham, H. (2016). ggplot2: Elegant Graphics for Data Analysis. Springer.',
      link: 'https://doi.org/10.1007/978-3-319-24277-4',
    },
    {
      referencia:
        'Wilke, C. O. (2019). Fundamentals of Data Visualization: A Primer on Making Informative and Compelling Figures. O&#39;Reilly Media.',
      link: '',
    },
    {
      referencia:
        'Woo, K. H. (2024). Statistical Analysis and Data Visualization with Python. Chapman and Hall/CRC.',
      link: '',
    },
    {
      referencia:
        'Yau, N. (2013). Data Points: Visualization That Means Something. John Wiley & Sons.',
      link: '',
    },
    {
      referencia:
        'Zhao, K., & Zhang, B. (2024). Modern Statistical Graphics: Principles, Tools, and Applications. Chapman and Hall/CRC.',
      link: 'https://doi.org/10.1201/9781003288776',
    },
  ],
}
