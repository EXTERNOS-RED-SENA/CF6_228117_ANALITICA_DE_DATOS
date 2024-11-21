<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos del análisis exploratorio de datos
    .v2
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/3.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La preparación y limpieza de datos constituye una fase decisiva y fundamental en cualquier proceso de análisis exploratorio de datos. En este capítulo se introducen los conceptos esenciales relacionados con la exploración de datos, comenzando desde la comprensión de los procesos de limpieza y transformación, pasando por su importancia crítica en la toma de decisiones basadas en datos, hasta llegar a los aspectos técnicos relacionados con la preparación del entorno de programación y el uso de bibliotecas especializadas. La comprensión de estos conceptos fundamentales, junto con el dominio de las herramientas y técnicas programáticas asociadas, resulta esencial para desarrollar procesos de análisis exploratorio, efectivos y confiables, que puedan traducirse en insights accionables para la toma de decisiones empresariales.
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1	Introducción a la limpieza y transformación de datos
    p.mb-5(data-aos='fade-right') La limpieza y transformación de datos constituye una fase fundamental en el proceso de análisis de datos, representando frecuentemente hasta el 80% del tiempo invertido en proyectos analíticos. Esta etapa crítica establece los cimientos para todo análisis posterior, asegurando la calidad y confiabilidad de los resultados. La preparación adecuada de los datos no solo mejora la precisión de los análisis subsecuentes, sino que también facilita la interpretación y comunicación de los hallazgos.
      br
      br
      |Los datos en bruto suelen presentar diversas anomalías que requieren un tratamiento específico y metódico. Los tipos más comunes de irregularidades que encontramos en los conjuntos de datos incluyen:
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/4.png', alt='')
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Valores faltantes o ausentes:")
            p.mb-0 Representan una de las anomalías más frecuentes y desafiantes en el análisis de datos. Pueden aparecer por fallos en los sistemas de recolección, errores humanos durante la entrada de datos, problemas de integración entre sistemas, o simplemente porque la información no estaba disponible en el momento del registro. Su tratamiento requiere un análisis cuidadoso del patrón de ausencia y su impacto potencial en el análisis, considerando siempre el contexto específico del problema y las implicaciones de diferentes estrategias de imputación.
          div(titulo="Valores atípicos o outliers: ")
            p.mb-0 Constituyen observaciones que se desvían significativamente del comportamiento general de los datos. Su identificación y tratamiento representa un equilibrio delicado entre mantener la integridad de los datos y eliminar información potencialmente errónea. Algunos outliers pueden ser indicadores valiosos de eventos excepcionales o tendencias emergentes, mientras que otros pueden ser simplemente errores que necesitan corrección o eliminación.
          div(titulo="Inconsistencias y errores de formato: ")
            p.mb-0 Abarcan desde simples variaciones en la escritura hasta problemas más complejos de estandarización. Pueden manifestarse como diferentes representaciones de la misma información, unidades de medida inconsistentes, o estructuras de datos incompatibles. Su corrección requiere un proceso sistemático de estandarización y validación que asegure la coherencia en todo el conjunto de datos.
    p.mb-5(data-aos='fade-right') Las transformaciones de datos constituyen otro aspecto esencial del proceso de preparación, y pueden clasificarse en varias categorías fundamentales:
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Transformaciones de escala y distribución:")
            p.mb-0 Incluyen la normalización y estandarización de variables numéricas para hacerlas comparables entre sí, la aplicación de transformaciones logarítmicas o potencias para manejar asimetrías y no linealidades, y el reescalado de variables para ajustarse a rangos específicos requeridos por ciertos algoritmos o análisis. Estas transformaciones deben aplicarse con un entendimiento claro de sus implicaciones para la interpretación posterior de los resultados.
          div(titulo="Transformaciones estructurales:")
            p.mb-0 Abarcan la reorganización de datos para facilitar su análisis, incluyendo la pivotación de tablas, la agregación de registros a diferentes niveles de granularidad, y la creación de nuevas variables derivadas que capturen relaciones o patrones importantes en los datos. Estas transformaciones deben diseñarse considerando tanto los requisitos técnicos del análisis como las necesidades de interpretación de los usuarios finales.
          div(titulo="Codificación y categorización:")
            p.mb-0 implican la conversión de variables cualitativas en formatos adecuados para el análisis cuantitativo, manteniendo la integridad y significado de la información original. Esto puede incluir la creación de variables dummy, la aplicación de esquemas de codificación ordinal, o la implementación de técnicas más avanzadas de embedding para variables categóricas de alta cardinalidad.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/5.png', alt='')
    .titulo-tres.mb-4: h3.mb-0 Introducción a la limpieza y transformación de datos
    .mn.bg-slyder.p-5.mb-5
      .tarjeta.bg-white.p-5
        SlyderA(tipo='b')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h5.mb-5 Fundamentos de la limpieza y transformación de datos
              p La limpieza y transformación de datos es una fase crítica en análisis de datos, a menudo ocupando hasta el 80% del tiempo total en proyectos analíticos. Esta etapa asegura la calidad y confiabilidad de los resultados y facilita la interpretación de los hallazgos.
            .col-lg-4.col-7
              figure
                img(src='@/assets/curso/temas/6.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h5.mb-5 Importancia de la preparación de datos
              p Preparar adecuadamente los datos mejora la precisión del análisis y permite la detección de patrones significativos, estableciendo una base sólida para resultados confiables y comunicación efectiva de hallazgos.
            .col-lg-4.col-7
              figure
                img(src='@/assets/curso/temas/7.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h5.mb-5 Valores faltantes o ausentes
              p Los valores faltantes son una de las anomalías más comunes, generados por fallos en la recolección, errores de entrada o falta de disponibilidad. Se requiere un análisis cuidadoso para entender el patrón de ausencia y su impacto potencial en el análisis.
            .col-lg-4.col-7
              figure
                img(src='@/assets/curso/temas/8.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h5.mb-5 Estrategias de imputación de valores faltantes
              p Los valores ausentes pueden ser imputados utilizando diversas estrategias, como la media, moda o imputación por modelado, considerando el contexto y el efecto en los resultados para asegurar una interpretación adecuada.
            .col-lg-4.col-7
              figure
                img(src='@/assets/curso/temas/9.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h5.mb-5 Valores atípicos o outliers
              p Los outliers son valores que se desvían considerablemente de los patrones generales. Estos pueden señalar errores o datos significativos. Su tratamiento debe equilibrar la integridad de los datos y el riesgo de perder información valiosa.
            .col-lg-4.col-7
              figure
                img(src='@/assets/curso/temas/10.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h5.mb-5 Inconsistencias y errores de formato
              p Las inconsistencias pueden aparecer como variaciones en la escritura, unidades incompatibles o problemas de estandarización. La corrección metódica asegura que el conjunto de datos mantenga una estructura coherente.
            .col-lg-4.col-7
              figure
                img(src='@/assets/curso/temas/11.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h5.mb-5 Transformaciones de escala y distribución
              p Normalizar y estandarizar variables permite hacerlas comparables. También pueden aplicarse transformaciones logarítmicas para ajustar distribuciones y manejar no linealidades, lo que es clave para algunos modelos de análisis.
            .col-lg-4.col-7
              figure
                img(src='@/assets/curso/temas/12.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h5.mb-5 Transformaciones estructurales de datos
              p Las transformaciones estructurales reorganizan los datos, como la pivotación y agregación, para facilitar el análisis y extraer relaciones importantes. Esto permite adecuar la estructura de datos a los requisitos de análisis y usuarios.
            .col-lg-4.col-7
              figure
                img(src='@/assets/curso/temas/13.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h5.mb-5 Codificación y categorización de variables
              p La codificación convierte variables cualitativas en formatos cuantitativos, permitiendo análisis numéricos. Incluye desde variables dummy hasta técnicas avanzadas de embedding para categorías de alta cardinalid
            .col-lg-4.col-7
              figure
                img(src='@/assets/curso/temas/14.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h5.mb-5 Impacto de una limpieza y transformación eficientes
              p La correcta limpieza y transformación de datos garantiza análisis más precisos y hallazgos interpretables. Es un componente esencial que permite que el análisis posterior se base en una información fiable y clara.
            .col-lg-4.col-7
              figure
                img(src='@/assets/curso/temas/15.png', alt='Texto que describa la imagen')
    p.mb-5(data-aos='fade-right') La detección de anomalías requiere una combinación de métodos estadísticos y visuales. Los métodos estadísticos dan una base objetiva para la identificación de valores inusuales, mientras que las técnicas visuales permiten una comprensión intuitiva de la estructura de los datos y facilitan la comunicación de hallazgos a stakeholders no técnicos. La integración efectiva de ambos enfoques permite una identificación más robusta de patrones y anomalías significativas.
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/16.png', alt='')
      .col-lg-7
        p.mb-0 La validación de los procesos de limpieza y transformación asegura la calidad del análisis posterior. Esto implica no solo la verificación técnica de las transformaciones realizadas, sino también la validación de que los datos procesados siguen reflejando adecuadamente la realidad que pretenden representar. La documentación detallada de las decisiones tomadas durante este proceso facilita la reproducibilidad del análisis y permite la evaluación crítica de los métodos empleados.
          br
          br
          | El impacto de una limpieza y transformación de datos efectiva se extiende más allá del análisis inmediato. Un proceso bien ejecutado establece una base sólida para análisis futuros, facilita la colaboración entre diferentes equipos y contribuye a la construcción de un patrimonio de datos organizacional confiable y útil. La inversión de tiempo y recursos en esta etapa fundamental del proceso analítico típicamente se traduce en beneficios significativos en términos de la calidad y confiabilidad de los #[em insights] generados.
    .tarjeta.p-4(style="background-color: #c6e9f3 ")
      p.mb-0 La adaptabilidad y escalabilidad de los procesos de limpieza y transformación resultan especialmente relevantes en el contexto actual de datos masivos y fuentes diversas. Los métodos y técnicas empleados deben poder adaptarse a diferentes volúmenes y tipos de datos, manteniendo siempre un balance entre la automatización necesaria para manejar grandes volúmenes de información y el juicio experto requerido para casos especiales o decisiones críticas.
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2	Relevancia del análisis de datos
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p.mb-0 La calidad y preparación de los datos constituye un factor crítico en la cadena de valor del análisis de datos, puesto que impacta directamente en la validez y confiabilidad de las decisiones empresariales. La comprensión de esta relación fundamental entre la calidad de los datos y la efectividad de las decisiones resulta esencial en el contexto actual de la analítica avanzada.
          br
          br
          |El impacto de la calidad de los datos en la toma de decisiones se manifiesta en múltiples dimensiones, desde los costos operativos directos hasta las implicaciones estratégicas a largo plazo. La identificación y cuantificación de estos impactos permite establecer marcos de referencia para la evaluación de la calidad de datos y su aptitud para diferentes contextos de decisión.
          br
          br
          |La implementación de procesos robustos de validación y control de calidad en las etapas tempranas del análisis representa una inversión estratégica en la confiabilidad de los resultados analíticos. Esta inversión se traduce en una mayor confianza en las decisiones basadas en datos y en una reducción significativa de los riesgos asociados con interpretaciones erróneas o sesgadas de la información.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/17.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/18.png', alt='')
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Calidad de datos y su impacto en las decisiones empresariales")
            p.mb-0 La calidad de los datos es un pilar fundamental en el análisis empresarial. Datos incompletos, imprecisos o desactualizados pueden generar decisiones erróneas que impactan negativamente la eficiencia operativa y los resultados financieros. Una empresa que trabaja con datos confiables y precisos puede identificar oportunidades de mercado, optimizar procesos y reaccionar con rapidez ante cambios en el entorno.
          div(titulo="Consecuencias de trabajar con datos no verídicos")
            p.mb-0 El uso de datos no verídicos tiene consecuencias graves, como pérdida de ingresos, costos adicionales por correcciones y daños a la reputación. Por ejemplo, una estrategia de marketing basada en datos erróneos puede desperdiciar recursos al dirigirse a un público equivocado. Además, las decisiones mal fundamentadas pueden afectar la confianza de clientes y socios comerciales.
          div(titulo="Validación de datos como inversión estratégica")
            p.mb-0 Implementar procesos de validación y control en las etapas iniciales del análisis de datos reduce significativamente los riesgos asociados con errores. Esto incluye la limpieza, estandarización y verificación de fuentes, asegurando que los datos utilizados reflejen la realidad del negocio. Esta práctica no solo mejora la precisión de los análisis, sino que también fortalece la capacidad de la empresa para tomar decisiones estratégicas informadas.
          div(titulo="Beneficios de contar con datos de calidad")
            p.mb-0 Los datos de calidad permiten a las empresas anticiparse a tendencias, personalizar experiencias para los clientes y tomar decisiones basadas en evidencias sólidas. Además, mejoran la eficiencia interna al reducir errores y optimizar el uso de recursos. A largo plazo, contar con datos confiables crea una ventaja competitiva sostenible.
          div(titulo="Resumen")
            p.mb-0 La calidad de los datos no solo respalda decisiones más precisas, sino que también protege a las empresas de riesgos asociados con errores y malas interpretaciones. Procesos robustos de validación y control son esenciales para garantizar que los datos se conviertan en un activo estratégico que impulse el crecimiento, la innovación y la confianza de todas las partes interesadas.
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3	Preparación del entorno de programación
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        p.mb-0 La configuración adecuada del entorno de programación constituye un paso fundamental para el análisis efectivo de datos, puesto que establece la infraestructura técnica necesaria para manejar proyectos analíticos de manera eficiente. El entorno moderno de análisis de datos requiere una combinación, cuidadosamente seleccionada, de herramientas, bibliotecas y configuraciones que permitan tanto el procesamiento eficiente como la reproducibilidad de los análisis.
      .col-lg-5.col-7: img(src='@/assets/curso/temas/19.png', alt='')
    .tarjeta.p-4.mb-4(style="background-color: #f3f0ea")
      p.fw-bold Los componentes esenciales de un entorno de análisis de datos incluyen:
      .row.justify-content-center.px-4
        .col-lg-4.mb-lg-0.mb-3
          .tarjeta.p-4(style="background-color: #e2dacc ").h-100
            p.mb-0 #[b Distribuciones especializadas:] plataformas como Anaconda para Python o RStudio para R, que proporcionan un ecosistema integrado de herramientas y bibliotecas preconfiguradas, facilitando la gestión de dependencias y la consistencia entre diferentes entornos de desarrollo.
        .col-lg-4.mb-lg-0.mb-3
          .tarjeta.p-4(style="background-color: #e2dacc ").h-100
            p.mb-0 #[b Entornos virtuales:] herramientas como conda, venv o virtualenv, que permiten el aislamiento de proyectos y la gestión independiente de dependencias, y evita conflictos entre diferentes proyectos y asegurando la reproducibilidad.
        .col-lg-4.mb-lg-0.mb-3
          .tarjeta.p-4(style="background-color: #e2dacc ").h-100
            p.mb-2 #[b Control de versiones:] sistemas como Git, esenciales para el seguimiento de cambios en código y documentación, que facilitan la colaboración y el mantenimiento de versiones estables del análisis.
    p.mb-5(data-aos='fade-right') La gestión efectiva de recursos computacionales desempeña un papel destacado en el análisis de datos moderno. Esto incluye la configuración apropiada de memoria, capacidad de procesamiento y almacenamiento, considerando siempre los requerimientos específicos del proyecto en cuestión. Por ejemplo, el análisis de grandes conjuntos de datos puede requerir configuraciones especiales de memoria o la implementación de técnicas de procesamiento por lotes.
      br
      br
      |La integración con servicios en la nube ha transformado significativamente los entornos de análisis de datos. Plataformas como Google Colab, Azure Notebooks o Amazon SageMaker proporcionan entornos preconfigurados con acceso a recursos computacionales escalables, lo cual facilita la colaboración y el despliegue de soluciones analíticas. Estas plataformas permiten la transición fluida entre desarrollo local y computación en la nube.
    .titulo-tres.mb-4: h3.mb-0 Los cinco problemas más frecuentes en la preparación de entornos de programación y sus soluciones
    TabsC.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Infraestructura obsoleta: un lastre para la innovación")
        .row.justify-content-center
          .col-lg-5.mb-4.mb-md-0: img(src='@/assets/curso/temas/20.png', alt='')
            
          .col-lg-6
            h4 Infraestructura obsoleta: un lastre para la innovación
            p.mb-4 Muchas empresas, especialmente aquellas con estructuras tradicionales, operan con sistemas y equipos desactualizados que no soportan las demandas modernas de análisis de datos y programación. Esto incluye hardware con capacidad de procesamiento limitada y sistemas operativos incompatibles con las versiones actuales de herramientas y lenguajes de programación. Este problema afecta directamente la productividad y la competitividad en sectores como la manufactura y la banca, donde los retrasos en los análisis pueden traducirse en pérdidas financieras.
            h5 Solución
            p.mb-0 Actualizar el #[em hardware] y #[em software] esenciales debe ser una prioridad estratégica. Las empresas pueden implementar planes de renovación tecnológica escalonados y optar por soluciones en la nube que ofrecen recursos computacionales robustos sin una inversión inicial significativa. Plataformas como Microsoft Azure y Amazon Web Services permiten el acceso a infraestructura de última generación con escalabilidad garantizada.
      .py-4.py-md-5(titulo="Conflictos entre dependencias: una trampa técnica frecuente")
        .row.justify-content-center
          .col-lg-5.mb-4.mb-md-0: img(src='@/assets/curso/temas/21.png', alt='')
            
          .col-lg-6
            h4 Conflictos entre dependencias: una trampa técnica frecuente
            p.mb-4 La ejecución de múltiples proyectos en un mismo entorno puede generar conflictos entre versiones de bibliotecas y frameworks. Estos problemas suelen surgir al intentar integrar herramientas incompatibles o al actualizar software crítico sin considerar la dependencia de otros sistemas. En el ámbito financiero, por ejemplo, esto puede llevar a errores en los modelos de predicción que dependen de cálculos precisos y consistentes.
            h5 Solución
            p.mb-0 Implementar entornos virtuales con herramientas como venv o conda es crucial. Estas herramientas permiten aislar cada proyecto, evitando conflictos de dependencias. Además, se recomienda estandarizar los entornos mediante archivos de configuración, como #[em #[b requirements.txt]] o #[em #[b environment.yml]], para garantizar la replicabilidad y facilitar la colaboración.
      .py-4.py-md-5(titulo="Falta de control en proyectos colaborativos: un riesgo para la productividad")
        .row.justify-content-center
          .col-lg-5.mb-4.mb-md-0: img(src='@/assets/curso/temas/22.png', alt='')
            
          .col-lg-6
            h4 Falta de control en proyectos colaborativos: un riesgo para la productividad
            p.mb-5 En equipos multidisciplinarios que trabajan simultáneamente en un proyecto, la ausencia de sistemas de control de versiones provoca duplicidad de esfuerzos, sobreescritura de código y pérdida de tiempo. Esto resulta particularmente problemático en industrias como la farmacéutica o la ingeniería, donde los errores en la gestión de proyectos pueden tener consecuencias graves.
            h5 Solución
            p.mb-0 Adoptar sistemas de control de versiones como #[b Git] junto con plataformas de colaboración como #[b GitHub] o #[b GitLab] es esencial. Estas herramientas permiten un seguimiento detallado de los cambios, además de facilitar la integración continua (CI/CD). Las empresas deben capacitar a sus equipos en el uso de estas herramientas y establecer políticas claras para el manejo de ramas y revisiones de código.
      .py-4.py-md-5(titulo="Limitaciones en el manejo de datos masivos: el cuello de botella de los proyectos analíticos")
        .row.justify-content-center
          .col-lg-5.mb-4.mb-md-0: img(src='@/assets/curso/temas/23.png', alt='')
            
          .col-lg-6
            h4 Limitaciones en el manejo de datos masivos: el cuello de botella de los proyectos analíticos
            p.mb-5 Con la explosión de datos en sectores como el comercio electrónico y la logística, muchas empresas enfrentan desafíos al intentar procesar grandes volúmenes de información en entornos locales. La falta de recursos adecuados provoca análisis lentos y decisiones retrasadas, lo que afecta directamente la eficiencia operativa.
            h5 Solución
            p.mb-0 Migrar hacia arquitecturas de datos distribuidas, como Apache Hadoop o Apache Spark, es una solución efectiva. Estas plataformas permiten manejar grandes volúmenes de datos de manera paralela, optimizando tiempos y recursos. Además, las empresas pueden recurrir a servicios en la nube especializados en análisis de datos masivos, como Google BigQuery, para reducir la dependencia de recursos locales.
      .py-4.py-md-5(titulo="Ausencia de escalabilidad y flexibilidad: un obstáculo para la adaptación tecnológica")
        .row.justify-content-center
          .col-lg-5.mb-4.mb-md-0: img(src='@/assets/curso/temas/24.png', alt='')
            
          .col-lg-6
            h5 Ausencia de escalabilidad y flexibilidad: un obstáculo para la adaptación tecnológica
            p.mb-5 Las empresas que no adoptan soluciones escalables enfrentan dificultades para adaptarse a las crecientes demandas de los proyectos o integrar nuevas tecnologías. Esto limita la capacidad de responder a cambios del mercado o a necesidades específicas, como la implementación de modelos avanzados de inteligencia artificial.
            h5 Solución
            p.mb-0 Integrar soluciones basadas en la nube, como AWS SageMaker o Google Cloud AI, que ofrecen flexibilidad y escalabilidad, resulta esencial. Estas plataformas permiten escalar recursos según la necesidad del proyecto, además de proporcionar herramientas especializadas para tareas avanzadas como el entrenamiento de modelos de #[em machine learning]. Para garantizar una transición fluida, las empresas deben diseñar estrategias híbridas que combinen el desarrollo local con capacidades en la nube.
    p.mb-5(data-aos='fade-right') Preparar un entorno de programación efectivo no es solo una cuestión técnica, sino una inversión estratégica para las empresas. Los problemas más frecuentes, como los conflictos de dependencias o la falta de escalabilidad, pueden resolverse mediante soluciones tecnológicas específicas y la capacitación del personal. Al implementar estas estrategias, las organizaciones no solo optimizan sus procesos, sino que también se posicionan como líderes innovadores en un mercado altamente competitivo.
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.4	Bibliotecas especializadas para análisis de datos 
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        .p-4(style="background-color: #e2f4f9 ")
          p Las bibliotecas especializadas constituyen el núcleo funcional del análisis moderno de datos, proporcionando herramientas optimizadas para cada fase del proceso analítico. La selección y dominio de estas bibliotecas resulta muy importante para desarrollar análisis eficientes y robustos.
            br
            br
            |El ecosistema de bibliotecas para análisis de datos puede organizarse en categorías funcionales principales:
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-check
              p.mb-0 #[b Manipulación y procesamiento fundamental:] incluye bibliotecas base como Pandas para estructuras de datos tabulares, que permiten operaciones eficientes de filtrado, agregación y transformación. NumPy proporciona el fundamento para computación numérica, mientras que Polars reluce como una alternativa moderna optimizada para rendimiento en grandes conjuntos de datos.
            li.d-flex
              i.fas.fa-check
              p.mb-0 #[b Visualización y exploración:] comprende desde bibliotecas básicas como Matplotlib hasta frameworks más especializados como Seaborn para visualización estadística, plotly para gráficos interactivos, y Altair para visualizaciones declarativas. Cada biblioteca ofrece ventajas específicas para diferentes contextos de visualización.
            li.d-flex
              i.fas.fa-check
              p.mb-0 #[b Análisis estadístico y modelado:] agrupa bibliotecas como Statsmodels para análisis estadístico tradicional, Scikit-learn para machine learning, y Scipy para computación científica avanzada, que en su conjunto proporcionan implementaciones optimizadas de algoritmos estadísticos y técnicas de modelado.
      .col-lg-5.col-7: img(src='@/assets/curso/temas/25.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/26.png', alt='')
      .col-lg-8
        .row.justify-content-center.align-items-center.mb-4
          .col-1.d.lg-block.d-none: img(src='@/assets/curso/temas/27.svg', alt='')
          .col-lg-11
            p.mb-0 La integración efectiva de múltiples bibliotecas permite crear flujos de trabajo potentes y flexibles. Por ejemplo, un análisis típico podría comenzar con la carga y limpieza de datos usando Pandas, continuar con transformaciones numéricas mediante NumPy, aplicar análisis estadísticos con Statsmodels, y finalizar con visualizaciones interactivas usando Plotly.
        p.mb-3 La optimización del rendimiento en el uso de bibliotecas especializadas requiere un entendimiento profundo de sus características y limitaciones. Esto incluye conocer las estructuras de datos más eficientes para diferentes operaciones, comprender los trade-offs entre memoria y velocidad, y aplicar técnicas de vectorización cuando sea posible.
    .row.justify-content-center.mb-5
      .col-lg-5.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #f3f0ea ")
          p.mb-0 El desarrollo continuo del ecosistema de bibliotecas introduce regularmente nuevas herramientas y mejoras. Por ejemplo, bibliotecas como Vaex y Dask están redefiniendo el procesamiento de grandes conjuntos de datos, mientras que Pydantic y pandera mejoran la validación y verificación de datos. Mantenerse actualizado con estas evoluciones es esencial para aprovechar las mejoras en eficiencia y funcionalidad.
      .col-lg-3.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/28.png', alt='')
      .col-lg-4
        p.mb-0 La documentación y reproducibilidad del análisis requiere un manejo cuidadoso de las versiones de las bibliotecas utilizadas. Las herramientas de gestión de dependencias como Poetry o Pip-tools facilitan este proceso, lo cual asegura la consistencia entre diferentes entornos y la reproducibilidad de los análisis a largo plazo.
    .row.justify-content-center.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 1.
          span Categorías de bibliotecas para análisis de datos
        img(src='@/assets/curso/temas/29.svg', alt=' La Figura 1 se denomina «Categorías de bibliotecas para análisis de datos» y organiza las bibliotecas de análisis de datos en tres áreas funcionales clave. La primera, manipulación y procesamiento fundamental, incluye herramientas esenciales para la limpieza, estructuración y transformación de datos, necesarias para preparar la información de forma consistente y útil en el análisis. La segunda, visualización y exploración, contiene bibliotecas que permiten crear gráficos y representaciones visuales, facilitando el entendimiento y la exploración de patrones dentro de los datos. La tercera área, análisis estadístico y modelado, reúne herramientas que permiten aplicar técnicas estadísticas y modelos predictivos para apoyar la obtención de conclusiones y predicciones')
        figcaption Fuente: OIT, 2024.








    
</template>

<script>
import TabsB from '../bootstrap/TabsB.vue'
export default {
  name: 'Tema1',
  components: {
    TabsB,
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
