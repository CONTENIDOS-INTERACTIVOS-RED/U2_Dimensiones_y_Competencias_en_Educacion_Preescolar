<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Estructura de la competencia'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Después de analizar la relevancia de las competencias en la educación infantil, es importante profundizar en su estructura. ¿Qué componentes conforman una competencia efectiva?
    
        .bg-color-7.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Las competencias integran el saber (conocimiento), saber hacer (habilidades) y saber ser (actitudes y valores), elementos que se interrelacionan para crear aprendizajes significativos aplicables en diversos contextos. Reflexionemos sobre cómo estos aspectos contribuyen al desarrollo integral de los niños y cómo pueden fomentarse en el entorno educativo.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Componentes de una competencia
    
    p Un niño no solo aprende conceptos, sino que también necesita utilizarlos, aplicarlos y comportarse de manera adecuada en su entorno. ¿Qué ocurre cuando un niño adquiere conocimiento pero no sabe cómo aplicarlo o relacionarse con los demás?. Según Almanza (2003), la competencia en la educación preescolar implica la capacidad de construir y reconstruir saberes de manera situada, contextualizada y reflexiva, respondiendo a las demandas del entorno. Para comprender las competencias, es fundamental analizar sus tres componentes esenciales:

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Saber (conocimiento)" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Saber (conocimiento)
            p Incluye los conceptos que el niño aprende, como los colores, los números y los animales. No se trata solo de memorizar, sino de comprender y conectar el conocimiento con la realidad. Ejemplo: un niño aprende los nombres de los animales de la granja y reconoce sus características.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/3.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Saber hacer (habilidades)" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Saber hacer (habilidades)
            p Se refiere a la capacidad de aplicar lo aprendido en diferentes situaciones. Ejemplo: un niño que sabe sumar puede usar esa habilidad para contar sus juguetes o repartir caramelos entre sus amigos.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/4.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Saber ser (actitudes y valores)" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Saber ser (actitudes y valores)
            p Incluye las actitudes y valores que el niño desarrolla mientras interactúa con los demás. Ejemplo: un niño que aprende a compartir juguetes con sus compañeros demuestra empatía y cooperación.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/5.png', alt='', style="width: 100%;")
    
    p.mb-5 Estos tres componentes trabajan en conjunto para que el aprendizaje sea significativo y aplicable en diversos contextos. 
    
  
    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Desarrollo progresivo de competencias en la infancia
    
    .row.mb-5
      .col-lg-5.order-1.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/6.png", data-aos="zoom-in")
      .col-lg-7.order-2.order-lg-1
        p(data-aos="fade-left") El desarrollo de competencias en la infancia es un proceso gradual en el que los niños adquieren conocimientos, desarrollan habilidades y fortalecen actitudes que les permiten afrontar con éxito los desafíos de su entorno. García Carrillo y Rivera Machado (2019) enfatizan que este proceso se basa en la interacción constante con el entorno y en experiencias significativas que integran conocimientos, habilidades y valores.
    
        p.mb-0(data-aos="fade-left") Cada etapa del desarrollo establece la base para el siguiente nivel de aprendizaje, promoviendo un crecimiento integral.
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/7.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Primer contacto con el conocimiento (0-3 años)")
            p Desarrollo cognitivo inicial, exploración sensorial y curiosidad. Ejemplo: un bebé explora diferentes texturas y sonidos, desarrollando su percepción sensorial.
    
          .div(titulo="Construcción de habilidades sociales y emocionales (3-5 años)")
            p Desarrollo de empatía, comunicación efectiva y cooperación. Ejemplo: un niño aprende a expresar sus emociones y a resolver conflictos con sus compañeros.
    
          .div(titulo="Uso del conocimiento y resolución de problemas (5-7 años)")
            p Aplicación práctica de lo aprendido en la vida cotidiana. Ejemplo: un niño usa la suma para contar los materiales que necesita en una actividad de arte.
    
          .div(titulo="Integración de la competencia (7 años en adelante)")
            p Consolidación del conocimiento, habilidades y actitudes en distintos contextos. Ejemplo: un niño trabaja en equipo para organizar una actividad en el aula, aplicando normas de convivencia.

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/8.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 El desarrollo de competencias no es un proceso lineal, sino dinámico, y requiere la intervención de educadores, familias y cuidadores para fortalecer cada una de sus dimensiones.
    
    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Estrategias para fomentar el desarrollo de competencias
    
    p.mb-5 La infancia representa una etapa fundamental en la formación de habilidades esenciales para la vida. Este video presenta estrategias efectivas para fortalecer el aprendizaje, la creatividad y la interacción con el entorno. A través de estas propuestas, se podrán diseñar experiencias significativas que contribuyan al desarrollo de competencias desde los primeros años.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/9.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Estas estrategias permiten que los niños no solo adquieran conocimientos, sino que también los apliquen de manera autónoma, fomentando su desarrollo integral.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.37646/xihmai.v3i5.120 " target="_blank" rel="noopener noreferrer") Vargas Santana, R. (2012). El Maestro De Preescolar Ante Las Competencias. Xihmai, 3(5). 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://gatico1988.blogia.com/2011/040402-desarrollo-y-competencias-en-el-aula-del-preescolar.php " target="_blank" rel="noopener noreferrer") Blog: DESARROLLO Y COMPETENCIAS EN EL AULA DEL PREESCOLAR | gatico1988. (s.f.). gatico1988. 

           

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=mNq_fvRX858 " target="_blank" rel="noopener noreferrer") Rodrigo Fernández Pérez. (2020, 30 de noviembre). La Evaluación en la etapa de Educación Infantil: Hacia un modelo más inclusivo [Video]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
