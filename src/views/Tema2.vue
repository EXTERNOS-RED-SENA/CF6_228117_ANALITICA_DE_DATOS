<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Métodos de análisis exploratorio
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p.mb-0 Los métodos de análisis exploratorio representan un conjunto fundamental de técnicas y aproximaciones para descubrir patrones, relaciones y estructuras en los datos. Este capítulo aborda la progresión sistemática desde el análisis univariado, que proporciona una comprensión profunda de variables individuales mediante estadísticas descriptivas y visualizaciones, pasando por el análisis bivariado que explora las relaciones entre pares de variables, hasta llegar a técnicas más sofisticadas de análisis multivariado y reducción de dimensionalidad. La implementación programática de estos métodos, apoyada en bibliotecas especializadas, permite una exploración rigurosa y escalable de los datos, facilitando la identificación de insights relevantes y la preparación efectiva para análisis más avanzados, constituyendo así una base sólida para la toma de decisiones basada en evidencia.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/30.png', alt='')
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1	Análisis univariado: estadísticas descriptivas y visualizaciones
    p.mb-5(data-aos='fade-right') El análisis univariado constituye el fundamento inicial de cualquier exploración de datos, lo cual proporciona una comprensión profunda de las características individuales de cada variable. Este análisis sistemático requiere un entendimiento claro de los tipos de variables y las técnicas específicas aplicables a cada una.
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 1.
          span Clasificación de variables para análisis de datos
        .tabla-a.color-acento-botones.mb-5
          table
            thead.border-0
              tr.text-white(style="background-color: #3ba935")
                th Tipo de variable
                th Descripción
                th Medidas estadísticas clave
                th Visualizaciones principales
            tbody.text-center
              tr
                td Numéricas continuas
                td Pueden tomar cualquier valor dentro de un rango definido. Representan mediciones precisas que pueden incluir decimales y valores intermedios
                td Media, mediana, desviación estándar
                td Histogramas, #[em box plots]
              tr
                td Numéricas discretas
                td Valores numéricos enteros y contables, sin valores intermedios posibles
                td Moda, media, frecuencias
                td Diagramas de barras, gráficos de puntos
              tr
                td Categóricas nominales
                td Categorías sin orden inherente que representan grupos o clasificaciones mutuamente excluyentes
                td Moda, frecuencias relativas
                td Gráficos de barras, gráficos de sectores
              tr
                td Categóricas ordinales
                td Categorías con orden natural que representan niveles o rangos secuenciales
                td Mediana, frecuencias acumuladas
                td Diagramas de barras ordenados
              tr
                td Binarias
                td Solo dos posibles valores mutuamente excluyentes. Representan situaciones dicotómicas o decisiones con solo dos resultados
                td Proporción, frecuencia relativa
                td Gráficos de barras, #[em waffle charts]

              tr
                td Temporales
                td Mediciones en puntos de tiempo específicos que capturan la evolución o cambio de una variable a lo largo del tiempo
                td Media móvil, tendencia
                td Series temporales, #[em line plots]
    .row.justify-content-center.mb-5
      .col-lg-3.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/31.png', alt='')
      .col-lg-9
        p.mb-4 La clasificación sistemática de variables en el análisis de datos constituye un marco fundamental para comprender y procesar la información de manera efectiva. Como se observa en la tabla, cada tipo de variable presenta características distintivas que determinan no solo su naturaleza intrínseca, sino también los métodos específicos para su análisis y visualización. Las variables numéricas continuas y discretas, por ejemplo, permiten operaciones matemáticas completas y requieren medidas estadísticas que capturen tanto su tendencia central como su dispersión, mientras que las variables categóricas, ya sean nominales u ordinales, demandan enfoques basados en frecuencias y proporciones que respeten su naturaleza cualitativa.
        .tarjeta.p-4.mb-4(style="background-color: #f3f0ea ")
          p.mb-0 La comprensión profunda de estas clasificaciones es necesaria para seleccionar las herramientas analíticas apropiadas en cada caso. Por ejemplo, mientras que para variables continuas podemos calcular medias y desviaciones estándar que nos permiten entender su distribución completa, para variables categóricas necesitamos enfocarnos en frecuencias relativas y modas que nos ayuden a identificar patrones de agrupación y predominancia. Esta distinción se extiende también al ámbito de la visualización, donde cada tipo de variable requiere representaciones gráficas específicas que maximicen la comprensión de sus características fundamentales y faciliten la identificación de patrones relevantes.
        p.mb-0  Así mismo, las técnicas de análisis univariado abarcan desde medidas de tendencia central y dispersión hasta el análisis detallado de la forma y características de las distribuciones. La exploración de estas métricas fundamentales proporciona insights sobre la naturaleza y calidad de los datos, permitiendo identificar sesgos, valores atípicos y patrones de variabilidad.
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        .p-4(style="background-color: #e2f4f9 ")
          p.mb-0 La visualización en el análisis univariado juega un papel determinante, empleando técnicas como histogramas, diagramas de densidad y diagramas de caja para representar gráficamente la distribución y características de las variables. Estas representaciones visuales facilitan la identificación de patrones que podrían no ser evidentes a través de métricas numéricas exclusivamente.
            br
            br
            |La implementación programática del análisis univariado mediante bibliotecas especializadas permite la automatización y escalabilidad de estos procesos exploratorios, facilitando la generación sistemática de perfiles de variables y la identificación eficiente de características relevantes para el análisis posterior.
      .col-lg-5.col-7: img(src='@/assets/curso/temas/32.png', alt='')
    .mn.bg-slyder.p-5.mb-5
      .tarjeta.bg-white.p-5
        SlyderA(tipo='b')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h5.mb-5 Introducción a las variables en análisis de datos
              p La clasificación de variables es fundamental en el análisis de datos, ya que determina los métodos analíticos y las visualizaciones más adecuadas para cada tipo de información. Este marco permite una comprensión profunda y el tratamiento efectivo de la información, facilitando la selección de herramientas y enfoques específicos para cada variable.
            .col-lg-4.col-7
              figure
                img(src='@/assets/curso/temas/33.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h5.mb-5 Variables numéricas continuas
              p Estas variables pueden tomar cualquier valor dentro de un rango definido y representan mediciones precisas, lo que incluye valores decimales. Para analizarlas, se suelen emplear medidas como la media, la mediana y la desviación estándar, mientras que los histogramas y box plots son las visualizaciones principales que permiten examinar su distribución y variabilidad.
            .col-lg-4.col-7
              figure
                img(src='@/assets/curso/temas/34.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h5.mb-5 Variables numéricas discretas
              p Las variables discretas consisten en valores enteros contables sin intermedios, utilizados para medir cantidades específicas o eventos. Para estas variables, la moda, la media y las frecuencias son medidas estadísticas clave. Visualmente, se representan mejor con diagramas de barras o gráficos de puntos, que facilitan la interpretación de frecuencias y patrones.
            .col-lg-4.col-7
              figure
                img(src='@/assets/curso/temas/35.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h5.mb-5 Variables categóricas nominales
              p Estas variables agrupan datos en categorías sin un orden específico, como clasificaciones o etiquetas que son mutuamente excluyentes. La moda y las frecuencias relativas son las medidas estadísticas relevantes. Se visualizan comúnmente mediante gráficos de barras y gráficos de sectores, que permiten observar la distribución y proporción de cada categoría. 
            .col-lg-4.col-7
              figure
                img(src='@/assets/curso/temas/36.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h5.mb-5 Variables categóricas ordinales
              p Las variables ordinales representan categorías con un orden inherente, como rangos o niveles. Se analizan utilizando medidas como la mediana y las frecuencias acumuladas para capturar el orden secuencial. Los diagramas de barras ordenados son la forma de visualización más adecuada para resaltar esta jerarquía en los datos.
            .col-lg-4.col-7
              figure
                img(src='@/assets/curso/temas/37.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h5.mb-5 Variables binarias
              p Este tipo de variable tiene solo dos posibles valores, representando situaciones dicotómicas como sí/no o verdadero/falso. Para su análisis, se usan proporciones y frecuencias relativas, y su representación gráfica incluye gráficos de barras y waffle charts, que ilustran la proporción de cada valor de manera visualmente sencilla.
            .col-lg-4.col-7
              figure
                img(src='@/assets/curso/temas/38.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h5.mb-5 Variables temporales
              p Las variables temporales capturan datos en puntos de tiempo específicos, permitiendo observar la evolución o tendencias a lo largo del tiempo. En su análisis, es común el uso de la media móvil y el análisis de tendencias para identificar patrones. Visualmente, las series temporales y los gráficos de línea son ideales para mostrar cómo los datos cambian con el tiempo.
            .col-lg-4.col-7
              figure
                img(src='@/assets/curso/temas/39.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h5.mb-5 Importancia del análisis univariado
              p El análisis univariado es clave para explorar la distribución y características de variables individuales, mediante medidas de tendencia central, dispersión y la observación de la forma de las distribuciones. Este análisis permite identificar sesgos, valores atípicos y patrones de variabilidad en los datos, proporcionando insights sobre la calidad y naturaleza de la información.
            .col-lg-4.col-7
              figure
                img(src='@/assets/curso/temas/40.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h5.mb-5 Visualización en el análisis univariado
              p Las representaciones visuales como histogramas, diagramas de densidad y box plots son fundamentales en el análisis univariado, ya que muestran de manera clara la distribución, forma y características de las variables. Estas visualizaciones ayudan a identificar patrones y características que no siempre son evidentes a través de medidas numéricas.
            .col-lg-4.col-7
              figure
                img(src='@/assets/curso/temas/41.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h5.mb-5 Implementación programática en análisis de datos
              p La implementación de análisis mediante bibliotecas especializadas permite la automatización y escalabilidad de los procesos de análisis univariado. Este enfoque facilita la generación sistemática de perfiles de variables y la identificación de características relevantes para el análisis posterior, optimizando el tiempo y la precisión en proyectos analíticos complejos.
            .col-lg-4.col-7
              figure
                img(src='@/assets/curso/temas/42.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h5.mb-5 Técnicas de análisis univariado
              p El análisis univariado incluye medidas como la media, mediana, moda y desviación estándar, así como gráficos de dispersión y densidad para interpretar mejor las características de cada variable individual. Estas técnicas son fundamentales para entender las propiedades estadísticas y su relación con los resultados del análisis de datos.
            .col-lg-4.col-7
              figure
                img(src='@/assets/curso/temas/43.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h5.mb-5 Resumen
              p Una correcta clasificación y análisis de las variables permite estructurar los datos de manera efectiva, mejorando la precisión de los resultados. Al entender los tipos de variables y sus propiedades, los analistas pueden seleccionar las técnicas estadísticas y visualizaciones más adecuadas, facilitando así decisiones basadas en datos confiables y bien interpretados.
            .col-lg-4.col-7
              figure
                img(src='@/assets/curso/temas/44.png', alt='Texto que describa la imagen')
    Separador
    #t_t_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2	Análisis bivariado: correlaciones y relaciones entre variables
    p.mb-5(data-aos='fade-right') El análisis bivariado representa un paso fundamental en la comprensión de las relaciones entre variables, expandiendo la exploración de datos más allá del análisis univariado hacia el estudio sistemático de interacciones por pares. Este nivel de análisis es importante para identificar patrones de asociación, dependencias y posibles relaciones causales que pueden informar decisiones estratégicas y modelado predictivo.
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3
        .tarjeta.p-4.px-5(style="background-color: #d7eed6 ")
          p.mb-4 La piedra angular del análisis bivariado reside en la medición y cuantificación de relaciones entre variables. Las técnicas fundamentales de correlación incluyen:
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-check
              p.mb-0 #[b Correlación de Pearson:] diseñada para evaluar relaciones lineales entre variables continuas, esta métrica proporciona tanto la dirección como la fuerza de la asociación. Su interpretación debe considerar aspectos como la presencia de outliers, la linealidad de la relación y la normalidad de las distribuciones. Valores cercanos a +1 o -1 indican correlaciones fuertes, mientras que valores cercanos a 0 sugieren ausencia de relación lineal.
            li.d-flex
              i.fas.fa-check
              p.mb-0 #[b Correlación de Spearman:] ofrece una alternativa no paramétrica que evalúa relaciones monótonas, siendo menos sensible a outliers y no requiriendo supuestos sobre la distribución de los datos. Resulta particularmente útil cuando las relaciones no son estrictamente lineales o cuando trabajamos con variables ordinales.
            li.d-flex
              i.fas.fa-check
              p.mb-0 #[b Correlación de Kendall:] proporciona una medida robusta de asociación basada en concordancias, especialmente útil para muestras pequeñas o cuando existen empates en los rangos. Su interpretación es similar a otras correlaciones, pero con diferentes propiedades estadísticas que la hacen preferible en ciertos contextos.
      .col-lg-6
        .tarjeta.p-4.mb-4(style="background-color: #e2dacc ")
          p.mb-4 Las medidas de asociación para variables categóricas presentan sus propias consideraciones especiales:
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-check
              p.mb-0 #[b Chi-cuadrado y V de Cramér:] evalúan la independencia entre variables categóricas y proporcionan medidas de la fuerza de asociación. La interpretación debe considerar el tamaño de la muestra y las frecuencias esperadas en cada categoría.
            li.d-flex
              i.fas.fa-check
              p.mb-0 #[b Coeficiente de contingencia:] ofrece una medida normalizada de asociación para variables categóricas, facilitando comparaciones entre diferentes pares de variables.
            li.d-flex
              i.fas.fa-check
              p.mb-0 #[b Lambda y Tau de Goodman-Kruskal:] proporcionan medidas direccionales de asociación, útiles cuando una variable puede considerarse dependiente de la otra.
        img(src='@/assets/curso/temas/45.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/46.png', alt='')
      .col-lg-7
        p.mb-4 La visualización es un tema central en el análisis bivariado, con diferentes técnicas adaptadas a distintos tipos de variables:
        ul.lista-ul--color
          li.d-flex
            i.fas.fa-check
            p.mb-0 Para #[b variables numéricas continuas:] los diagramas de dispersión revelan patrones, tendencias y posibles no linealidades. La adición de líneas de regresión o curvas suavizadas puede ayudar a identificar la naturaleza de las relaciones.

        ul.lista-ul--color
          li.d-flex
            i.fas.fa-check
            p.mb-0 Para #[b combinaciones de variables categóricas y numéricas:] los diagramas de caja paralelos, gráficos de violín y diagramas de puntos agrupados permiten comparar distribuciones entre categorías.
        ul.lista-ul--color
          li.d-flex
            i.fas.fa-check
            p.mb-0 Para #[b variables categóricas:] los mapas de calor de frecuencias, gráficos de mosaico y diagramas de barras apiladas visualizan patrones de coocurrencia y asociación.
    .row.justify-content-center.mb-5.g-0
      .col-lg-8.mb-lg-0.mb-3
        .p-4(style="background-color: #e2f4f9 ")
          p.mb-4 La interpretación de relaciones bivariadas requiere una consideración cuidadosa de varios aspectos críticos:
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-check
              p.mb-0 #[b Causalidad vs. correlación:] la presencia de una correlación fuerte no implica necesariamente una relación causal. La inferencia causal requiere consideraciones adicionales como temporalidad, plausibilidad mecánica y control de variables confusoras.
            li.d-flex
              i.fas.fa-check
              p.mb-0 #[b Variables confusoras:] pueden crear correlaciones espurias o enmascarar relaciones reales. Su identificación y control es esencial para una interpretación válida de las relaciones observadas.
            li.d-flex
              i.fas.fa-check
              p.mb-0 #[b No linealidad:] las relaciones pueden ser más complejas que simples asociaciones lineales. Las técnicas de visualización y medidas de asociación no lineales son fundamentales para capturar estos patrones.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/47.svg', alt='')
    p.mb-5(data-aos='fade-right') La integración del análisis bivariado en el proceso más amplio de exploración de datos requiere una consideración cuidadosa de múltiples aspectos prácticos. La escalabilidad emerge como un desafío significativo, especialmente cuando trabajamos con grandes conjuntos de datos donde el análisis de todas las posibles parejas de variables puede resultar computacionalmente intensivo. Esto frecuentemente requiere el desarrollo de estrategias de priorización y la implementación de métodos eficientes de cálculo y almacenamiento. Los analistas deben balancear la exhaustividad del análisis con las limitaciones prácticas de recursos y tiempo, identificando las relaciones más relevantes para los objetivos del proyecto.
      br
      br
      |La visualización efectiva de relaciones bivariadas presenta sus propios desafíos cuando se trabaja con múltiples variables. La necesidad de presentar numerosas relaciones de manera clara y comprensible requiere un diseño cuidadoso de las visualizaciones. Las matrices de correlación, por ejemplo, pueden proporcionar una vista general de las relaciones entre múltiples variables, pero deben complementarse con visualizaciones más detalladas para relaciones específicas de interés. Las herramientas de visualización interactiva han emergido como una solución valiosa, permitiendo a los usuarios explorar dinámicamente diferentes aspectos de las relaciones entre variables.
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #d7eed6 ")
          p.mb-0 La documentación meticulosa del proceso de análisis bivariado resulta fundamental para garantizar la reproducibilidad y facilitar la comunicación de resultados. Esto incluye el registro detallado de las decisiones metodológicas tomadas, los supuestos considerados, y las limitaciones identificadas durante el análisis. La documentación debe abordar aspectos como la justificación para la selección de medidas específicas de asociación, los criterios utilizados para identificar y tratar outliers, y las consideraciones tenidas en cuenta al interpretar las relaciones observadas. Esta documentación no solo facilita la reproducibilidad del análisis, sino que también proporciona contexto para la interpretación y aplicación de los hallazgos en la toma de decisiones.
      .col-lg-3.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/48.png', alt='')
      .col-lg-3
        p.mb-0 La aplicación rigurosa del análisis bivariado sienta las bases para análisis más complejos y proporciona insights accionables para la toma de decisiones. La combinación de técnicas estadísticas robustas, visualizaciones efectivas y consideración cuidadosa de limitaciones y supuestos permite extraer valor significativo de las relaciones entre variables.
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3	Análisis multivariado: patrones y agrupaciones
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/49.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El análisis multivariado representa una extensión sofisticada del análisis exploratorio de datos, trascendiendo las limitaciones inherentes a los análisis uni y bivariados para adentrarse en el estudio simultáneo de múltiples variables y sus complejas interrelaciones. Esta aproximación metodológica emerge como una necesidad fundamental en la era moderna del análisis de datos, donde la multidimensionalidad de la información requiere herramientas y técnicas capaces de capturar y revelar patrones que permanecerían ocultos bajo aproximaciones más simples.
            br
            br
            |La fundamentación teórica del análisis multivariado se construye sobre principios del álgebra lineal y la estadística multivariada. El concepto de espacio multidimensional proporciona el marco matemático necesario para comprender cómo las variables interactúan y se relacionan entre sí. La noción de distancia en estos espacios multidimensionales se extiende más allá de la concepción euclidiana tradicional, incorporando medidas de similitud y disimilitud que permiten cuantificar las relaciones entre observaciones en múltiples dimensiones simultáneamente.
    .row.justify-content-center.mb-5
      .col-lg-9.mb-lg-0.mb-3
        p.mb-4 El Análisis de Componentes Principales (PCA) emerge como una técnica fundamental dentro del arsenal multivariado, proporcionando un método matemáticamente elegante para la reducción de dimensionalidad mientras preserva la estructura esencial de los datos. Este método transforma el espacio original de variables en un nuevo sistema de coordenadas donde los ejes (componentes principales) se orientan en las direcciones de máxima varianza, permitiendo así una representación más eficiente e interpretable de la estructura subyacente de los datos.
        .row.justify-content-center.g-0
          .col-lg-6.col-7: img(src='@/assets/curso/temas/50.png', alt='')
          .col-lg-6
            .p-4(style="background-color: #f3f0ea ").h-100
              .d-flex.align-items-center
                p.mb-0 El análisis factorial, por su parte, profundiza en la estructura latente de los datos, buscando identificar factores no observables que explican los patrones de correlación entre las variables observadas. Esta técnica resulta particularmente valiosa en campos como la psicometría y las ciencias sociales, donde los constructos de interés frecuentemente no pueden medirse directamente, sino que deben inferirse a partir de múltiples indicadores observables.
      .col-lg-3.col-6L: img(src='@/assets/curso/temas/51.png', alt='')
    p.mb-5(data-aos='fade-right') Los métodos de clustering o agrupamiento representan otro pilar fundamental del análisis multivariado, permitiendo la identificación de grupos naturales en los datos basados en múltiples características simultáneamente. Estos métodos van más allá de la simple segmentación basada en criterios únicos, incorporando la complejidad total de las relaciones multivariadas para identificar estructuras de agrupamiento que reflejan patrones significativos en los datos.
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/52.png', alt='')
      .col-lg-8
        p.mb-4 La detección de anomalías multivariadas presenta desafíos particulares que requieren técnicas específicamente diseñadas para espacios multidimensionales. Los métodos tradicionales de detección de valores atípicos deben adaptarse para considerar no solo valores extremos en dimensiones individuales, sino también combinaciones inusuales de valores que podrían ser normales cuando se consideran de manera aislada pero anómalos en su conjunto.
        .tarjeta.p-4.mb-4(style="background-color: #f3f0ea ")
          p.mb-0 La visualización de relaciones multivariadas requiere técnicas que puedan representar efectivamente la complejidad de los datos multidimensionales en espacios visuales bidimensionales o tridimensionales. Los gráficos de coordenadas paralelas permiten la visualización simultánea de múltiples dimensiones, mientras que las matrices de dispersión proporcionan una vista comprehensiva de las relaciones entre pares de variables en el contexto más amplio del análisis multivariado.
        p.mb-0 La interpretación del análisis multivariado demanda una comprensión profunda de los supuestos subyacentes a cada técnica y las limitaciones inherentes a la reducción de dimensionalidad. La validación de resultados debe considerar tanto la significancia estadística como la relevancia práctica en el contexto del dominio específico de aplicación. La robustez de las conclusiones debe evaluarse mediante técnicas de validación cruzada y análisis de sensibilidad que consideren la estabilidad de los resultados frente a variaciones en los datos o los parámetros del análisis.
    p.mb-5(data-aos='fade-right') La aplicación efectiva del análisis multivariado requiere un balance cuidadoso entre la sofisticación metodológica y la interpretabilidad práctica de los resultados. La comunicación de hallazgos complejos a audiencias no técnicas demanda habilidades particulares en la traducción de resultados técnicos a #[em insights] accionables, manteniendo siempre la integridad metodológica del análisis mientras se asegura su utilidad práctica en la toma de decisiones.
    .titulo-tres.mb-4: h3.mb-0 Análisis bivariado: exploración de relaciones entre variables
    TabsC.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Importancia del análisis bivariado")
        .row.justify-content-center
          .col-lg-5.mb-4.mb-md-0: img(src='@/assets/curso/temas/53.png', alt='')
            
          .col-lg-6
            h4 Importancia del análisis bivariado
            p.mb-4 El análisis bivariado amplía la comprensión de los datos al explorar relaciones entre pares de variables, identificando patrones de asociación, dependencias y posibles relaciones causales. Este enfoque permite la identificación de interacciones clave que pueden informar decisiones estratégicas y modelos predictivos, siendo un paso esencial para una interpretación más profunda y útil de la información.
      .py-4.py-md-5(titulo="Técnicas de correlación para variables continuas")
        .row.justify-content-center
          .col-lg-5.mb-4.mb-md-0: img(src='@/assets/curso/temas/54.png', alt='')
            
          .col-lg-6
            h4 Técnicas de correlación para variables continuas
            p.mb-4 Las principales técnicas de correlación en el análisis bivariado incluyen la correlación de Pearson, que mide relaciones lineales; la correlación de Spearman, adecuada para relaciones monótonas y menos sensible a outliers; y la correlación de Kendall, útil para muestras pequeñas y con empates. Estas herramientas permiten entender la dirección y fuerza de la relación entre variables continuas, facilitando la toma de decisiones informadas.
      .py-4.py-md-5(titulo="Medidas de asociación para variables categóricas")
        .row.justify-content-center
          .col-lg-5.mb-4.mb-md-0: img(src='@/assets/curso/temas/55.png', alt='')
            
          .col-lg-6
            h4 Medidas de asociación para variables categóricas
            p.mb-4 En el análisis de relaciones categóricas, se emplean pruebas como el chi-cuadrado, la V de Cramér y coeficientes como el de contingencia. Estas técnicas miden la independencia y la fuerza de asociación entre variables categóricas, proporcionando un marco para interpretar patrones y dependencias dentro de categorías.
      .py-4.py-md-5(titulo="Visualización en análisis bivariado")
        .row.justify-content-center
          .col-lg-5.mb-4.mb-md-0: img(src='@/assets/curso/temas/56.png', alt='')
            
          .col-lg-6
            h4 Visualización en análisis bivariado
            p.mb-4 La visualización es fundamental en el análisis bivariado. Diagramas de dispersión con líneas de regresión para variables continuas, diagramas de caja para combinaciones de variables categóricas y numéricas, y mapas de calor para variables categóricas ayudan a identificar patrones y tendencias. Estas herramientas visuales permiten una interpretación intuitiva y detallada de las relaciones entre variables.
      .py-4.py-md-5(titulo="Interpretación y aplicación del análisis bivariado")
        .row.justify-content-center
          .col-lg-5.mb-4.mb-md-0: img(src='@/assets/curso/temas/57.png', alt='')
            
          .col-lg-6
            h4 Interpretación y aplicación del análisis bivariado
            p.mb-4 La correcta interpretación del análisis bivariado requiere diferenciar entre correlación y causalidad, identificar variables confusoras y considerar posibles no linealidades. Además, la documentación detallada del proceso garantiza la reproducibilidad y claridad en la comunicación de los hallazgos, permitiendo una aplicación efectiva en la toma de decisiones.
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.4	Técnicas de reducción de dimensionalidad y selección de características
    p.mb-5(data-aos='fade-right') La reducción de dimensionalidad se constituye como clave en el análisis de datos modernos, donde la alta dimensionalidad puede oscurecer patrones importantes y dificultar la interpretación de resultados. Estas técnicas permiten simplificar la estructura de los datos mientras preservan la información más relevante para el análisis.
      br
      br
      |Los métodos de reducción de dimensionalidad abarcan desde técnicas lineales como PCA (Análisis de Componentes Principales) hasta aproximaciones no lineales como t-SNE y UMAP. La selección apropiada de estos métodos depende de la naturaleza de los datos y los objetivos específicos del análisis, considerando factores como la preservación de relaciones locales versus globales.
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 2.
          span Métodos de reducción de dimensionalidad 
        .tabla-a.color-acento-botones.mb-5
          table
            caption Fuente: OIT, 2024.
            thead.border-0
              tr.text-white(style="background-color: #3ba935")
                th Método de reducción
                th Principio fundamental
                th Ventajas y casos de uso
                th Consideraciones y limitaciones
            tbody
              tr
                td PCA (Análisis de Componentes Principales)
                td Transforma los datos en componentes ortogonales que maximizan la varianza explicada.
                td Ideal para compresión de datos con alta correlación, manteniendo la interpretabilidad de los componentes
                td Limitado a relaciones lineales y sensible a valores atípicos. Puede perder información importante en datos con estructuras no lineales significativas
              tr
                td t-SNE (t-Distributed Stochastic Neighbor Embedding)
                td Preserva la estructura local de los datos mediante la conservación de probabilidades de similitud entre pares de puntos. 
                td Excelente para análisis exploratorio de alta dimensionalidad, con énfasis la preservación de estructuras locales y clusters
                td No preserva distancias globales y computacionalmente intensivo para grandes conjuntos de datos.
              tr
                td UMAP (Uniform Manifold Approximation and Projection)
                td Construye una representación topológica de los datos utilizando teoría de conjuntos difusos y geometría diferencial
                td Proporciona una reducción de dimensionalidad más rápida que t-SNE, preservando estructura local y global
                td Requiere una selección cuidadosa de parámetros y puede ser menos intuitivo de interpretar
              tr
                td LDA (Análisis Discriminante Lineal)
                td Busca proyecciones que maximicen la separación entre clases mientras minimizan la dispersión dentro de las clases
                td Particularmente efectivo para problemas de clasificación donde se busca maximizar la separabilidad entre clases
                td Requiere datos etiquetados y asume distribuciones normales por clase
              tr
                td Autoencoder
                td Red neuronal que aprende una representación comprimida de los datos a través de una arquitectura de cuello de botella
                td Capaz de capturar patrones no lineales complejos y adaptarse a diversos tipos de datos
                td Requiere grandes cantidades de datos para el entrenamiento y es computacionalmente intensivo
              tr
                td NMF (Factorización de Matrices No Negativas)
                td Descompone la matriz de datos en dos matrices no negativas, proporcionando una representación aditiva de los datos
                td Proporciona descomposiciones naturalmente interpretables para datos no negativos. Aplicado a procesamiento de texto y análisis de señales
                td Aplicable solo a datos no negativos y puede converger a mínimos locales
    p.mb-5(data-aos='fade-right') Las técnicas de reducción de dimensionalidad representan un conjunto fundamental de herramientas en el análisis moderno de datos, que se constituyen como soluciones para uno de los desafíos más significativos en la era del big data: la complejidad dimensional. Como se observa en la tabla anterior, cada técnica aborda este desafío desde una perspectiva única, proporcionando diferentes compromisos entre la preservación de la estructura de los datos, la interpretabilidad y la eficiencia computacional. La evolución de estas técnicas refleja la progresión desde enfoques lineales clásicos como PCA hasta métodos más sofisticados como UMAP y autoencoders, que pueden capturar relaciones no lineales complejas en los datos.
    .row.justify-content-center.mb-5
      .col-lg-9.mb-lg-0.mb-3
        p.mb-4 La selección de la técnica más apropiada para un caso específico requiere una comprensión profunda no solo de los principios matemáticos subyacentes, sino también del contexto del problema y las características particulares de los datos. Por ejemplo, mientras que PCA puede ser la elección óptima para datos con fuertes correlaciones lineales y cuando la interpretabilidad es determinante, técnicas como t-SNE o UMAP pueden ser más adecuadas cuando el objetivo principal es la visualización o el descubrimiento de clusters. Los autoencoders, por su parte, han ganado prominencia en escenarios donde la complejidad de los patrones requiere la capacidad de aprendizaje profundo, a pesar del costo en términos de interpretabilidad y recursos computacionales.
        .p-4.mb-4(style="background-color: #f3f0ea ")
          p.mb-0 Los métodos de reducción de dimensionalidad abarcan desde técnicas lineales como PCA (Análisis de Componentes Principales) hasta aproximaciones no lineales como t-SNE y UMAP. La selección apropiada de estos métodos depende de la naturaleza de los datos y los objetivos específicos del análisis, considerando factores como la preservación de relaciones locales versus globales. La selección de características complementa la reducción de dimensionalidad, enfocándose en la identificación y retención de las variables más informativas para un objetivo específico. 
      .col-lg-3.col-6: img(src='@/assets/curso/temas/58.png', alt='')
    p.mb-5(data-aos='fade-right') Este proceso implica la evaluación sistemática de la relevancia y redundancia de las características, utilizando criterios estadísticos y técnicas de selección automatizada. La implementación efectiva de estas técnicas requiere un balance cuidadoso entre la simplificación de los datos y la preservación de información significativa, considerando aspectos como la interpretabilidad de los resultados y la validación de las transformaciones realizadas.














</template>

<script>
export default {
  name: 'Tema2',
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
