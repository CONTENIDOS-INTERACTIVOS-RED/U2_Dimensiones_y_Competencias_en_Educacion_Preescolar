<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Competencias en la educación infantil'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Las competencias son esenciales para el desarrollo integral de los niños en la educación infantil. No solo implican conocimientos, sino también habilidades y actitudes que les permiten interactuar con el mundo. ¿Qué significa realmente ser competente en esta etapa y cómo se puede fomentar en el aula?
    
        .bg-color-3.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Este apartado explora cómo las competencias contribuyen al crecimiento cognitivo, emocional y social, preparando a los niños para enfrentar desafíos futuros. Reflexionemos sobre la importancia de integrar estas competencias en el proceso educativo y su aplicación en el desarrollo pleno de los estudiantes.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Definición de competencia
    
    p.mb-4 El concepto de competencia en educación infantil va más allá del desempeño en tareas específicas. Se define como la capacidad de movilizar y aplicar conocimientos, habilidades, actitudes y valores para resolver problemas y enfrentar situaciones de la vida cotidiana de manera autónoma y creativa.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") El concepto de competencia en educación infantil va más allá del desempeño en tareas específicas. Se define como la capacidad de movilizar y aplicar conocimientos, habilidades, actitudes y valores para resolver problemas y enfrentar situaciones de la vida cotidiana de manera autónoma y creativa.
    
        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 Según Poulain, Furnémont y Denyer (2007), una competencia integra componentes cognitivos, afectivos y prácticos, lo que permite a los niños desenvolverse en distintos contextos. En este sentido, el enfoque por competencias en la educación infantil busca desarrollar la capacidad de actuar con pertinencia en diversas situaciones, promoviendo la autonomía y la resolución de problemas.

    p El <b>Ministerio de Educación Nacional (MEN)</b>, en la serie de Lineamientos Curriculares (1998), define cuatro competencias clave:


    .bg-full-width-2.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/4.svg" alt="" style="width: 90px")
              h5.text-center Aprender a conocer
              p.mb-0.text-center  Implica comprender el entorno y disfrutar el proceso de aprendizaje. Está ligado al concepto de aprender a aprender.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/4.svg" alt="" style="width: 90px")
              h5.text-center Aprender a hacer
              p.mb-0.text-center  Relacionado con la resolución de problemas y el trabajo en equipo. Permite aplicar el conocimiento en diferentes situaciones.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/4.svg" alt="" style="width: 90px")
              h5.text-center Aprender a vivir juntos
              p.mb-0.text-center  Fomenta el reconocimiento de la diversidad y los derechos fundamentales de los niños.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/4.svg" alt="" style="width: 90px")
              h5.text-center Aprender a ser
              p.mb-0.text-center  Desarrolla la autonomía, el juicio crítico y la creatividad, permitiendo a los niños construir su destino.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 El aprendizaje basado en competencias no se limita a la adquisición de información, sino que integra aspectos cognitivos, emocionales y sociales. Por ejemplo, en una actividad grupal, un niño no solo pone en práctica conocimientos, sino que también ejercita la escucha activa, la comunicación asertiva y la cooperación.
    
    p Para fomentar estas competencias, se pueden implementar estrategias como:

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Aprendizaje basado en proyectos" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Aprendizaje basado en proyectos
            p Permite la exploración de temas de interés, fortaleciendo la investigación y la resolución de problemas.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/5.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Juego como estrategia pedagógica" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Juego como estrategia pedagógica
            p Promueve el aprendizaje significativo, la creatividad y la autonomía.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/6.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Ambientes de aprendizaje interactivos" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Ambientes de aprendizaje interactivos
            p Favorecen la construcción activa del conocimiento.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/7.png', alt='', style="width: 100%;")
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Fomento de la comunicación y el pensamiento crítico" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Fomento de la comunicación y el pensamiento crítico
            p Narración de cuentos, formulación de preguntas abiertas y trabajo en equipo.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/8.png', alt='', style="width: 100%;")
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/9.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Las competencias en la educación infantil sientan las bases para un aprendizaje duradero. ¿Cómo se pueden fortalecer desde la educación inicial? ¿Qué estrategias garantizan que el aprendizaje sea significativo?
    

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Tipos de competencias en la educación infantil
    
    p.mb-4 Las competencias en la primera infancia no solo implican el aprendizaje de conocimientos, sino también su aplicación en la vida diaria. Esto permite a los niños desarrollar autonomía, creatividad y bienestar emocional. A continuación, se presentan los principales tipos de competencias y estrategias para fomentarlas:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema2/10.png")
            .col-lg-7.order-2.order-lg-1
              h5 Cognitivas
              p Permiten comprender, analizar y resolver problemas. Estrategias: juegos de clasificación, resolución de acertijos y actividades de experimentación.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema2/11.png")
            .col-lg-7.order-2.order-lg-1
              h5 Comunicativas
              p Involucran la capacidad de expresarse y comprender mensajes verbal y no verbalmente. Estrategias: lectura de cuentos, juegos de roles y conversaciones con preguntas abiertas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema2/12.png")
            .col-lg-7.order-2.order-lg-1
              h5 Socioemocionales
              p Facilitan la gestión de emociones y la interacción empática con los demás. Estrategias: juegos cooperativos, expresión artística de emociones y modelado de comportamientos positivos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema2/13.png")
            .col-lg-7.order-2.order-lg-1
              h5 Corporales
              p Desarrollan la motricidad gruesa y fina, mejorando la coordinación y autonomía. Estrategias: juegos de movimiento, actividades artísticas y expresión corporal.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema2/14.png")
            .col-lg-7.order-2.order-lg-1
              h5 Ciudadanas y éticas
              p Fomentan valores como respeto, solidaridad y responsabilidad social. Estrategias: cuentos con enseñanzas morales, resolución de conflictos y trabajo colaborativo.

    p Cada experiencia cotidiana ofrece oportunidades para desarrollar estas competencias, asegurando que los niños tengan experiencias de aprendizaje enriquecedoras tanto en el aula como en el hogar.
    
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Relación entre dimensiones del desarrollo y competencias
    
    p.mb-4 El desarrollo infantil abarca diversas dimensiones interrelacionadas que fortalecen competencias esenciales en los niños. Estas competencias no solo los preparan para la educación formal, sino que también les permiten interactuar de manera efectiva con su entorno.

    .titulo-figura.mb-4
      h5 Tabla 1.
      span Dimensiones del desarrollo y estrategias de fortalecimiento
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-6.text-white Dimensión del desarrollo
            th.bg-color-6.text-white Competencia relacionada
            th.bg-color-6.text-white Estrategias de fortalecimiento
        tbody
          tr
            td.text-bold.text-center Socioafectiva
            td Socioemocionales: empatía, autorregulación y convivencia.
            td Juegos de rol, actividades grupales y expresión de emociones.
          tr
            td.text-bold.text-center Corporal
            td Motrices: coordinación gruesa y fina.
            td Juegos al aire libre, danza y actividades artísticas.
          tr
            td.text-bold.text-center Comunicativa
            td Lingüísticas: expresión y comprensión verbal y escrita.
            td Lectura de cuentos, juegos de palabras y conversaciones guiadas.
          tr
            td.text-bold.text-center Cognitiva
            td Pensamiento crítico, análisis y resolución de problemas.
            td Juegos de construcción, experimentos y resolución de acertijos.
          tr
            td.text-bold.text-center Estética
            td Creatividad y sensibilidad artística.
            td Dibujo libre, exploración musical y apreciación del arte.
          tr
            td.text-bold.text-center Espiritual
            td Valores como gratitud, respeto y sentido de pertenencia.
            td Reflexión sobre la naturaleza, experiencias colaborativas y actividades de introspección.
          tr
            td.text-bold.text-center Ética
            td Ciudadanas: normas sociales, solidaridad y justicia.
            td Trabajo en equipo, cuentos con enseñanzas morales y resolución de dilemas éticos.

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/9.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Para fortalecer estas competencias, es clave que las estrategias pedagógicas fomenten el aprendizaje experiencial, promoviendo la exploración y la curiosidad.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.30827/publicaciones.v52i2.22237 " target="_blank" rel="noopener noreferrer") Rebollo-Quintela, N., & Losada Puente-, L. (2023). El maestro en Educación Infantil ante la educación inclusiva: competencias y necesidades. PUBLICACIONES, 52(2), 35–76. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.kumon.es/blog/educar-por-competencias-o-educar-las-competencias/ " target="_blank" rel="noopener noreferrer") ¿Educar por competencias o educar las competencias? (s.f.). Kumon España.  

            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=4vKHA31lZIk " target="_blank" rel="noopener noreferrer") Facultad de Psicología Universidad de la República. (2019b, 10 de octubre). Desarrollo, aprendizajes, y educación en la Primera Infancia [Video]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
