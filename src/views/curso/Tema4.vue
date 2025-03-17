<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Educación preescolar'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4 La educación preescolar es fundamental para el desarrollo de los niños, ya que marca el inicio de su formación académica y personal. A continuación, se explorará su importancia, características y su impacto en el desarrollo integral en los primeros años de vida.

    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.1] Definición y características de la educación preescolar
    
    .row.mb-5
      .col-lg-4.-order-1.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-8.-order-2.order-lg-1
        .bg-color-3.p-4.mb-3(data-aos="fade-left")
          p.mb-0 La educación preescolar atiende a niños entre los 3 y 6 años y se centra en su desarrollo cognitivo, emocional, social y físico. Su propósito es crear ambientes de aprendizaje que fomenten la curiosidad, la exploración y la interacción social (Pesca Cepeda y Perdomo Ramos, 2018).
        p(data-aos="fade-left") Este nivel educativo no es solo una preparación para la escuela primaria, sino que establece las bases del aprendizaje a lo largo de la vida. A través de experiencias significativas, los niños desarrollan habilidades esenciales que favorecen su adaptación y crecimiento integral.
    
    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Cognitivo
              p.mb-0 Desarrollo de la memoria, atención, pensamiento lógico y creatividad.

      .col-lg-6.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Emocional
              p.mb-0 Aprendizaje en el reconocimiento y gestión de emociones.
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Social
              p.mb-0 Desarrollo de habilidades como la cooperación, la empatía y la resolución de conflictos.

      .col-lg-6.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Físico
              p.mb-0 Fomento de la motricidad gruesa y fina a través del juego y la exploración.
    
    #t_4_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.2] El juego como herramienta de aprendizaje
    
    p.mb-4 El juego es una herramienta clave en la educación preescolar, ya que facilita el aprendizaje y el desarrollo de habilidades.

    .bg-full-width.bg-h85.mb-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").order-1.order-lg-2.mb-3.mb-lg-0.mt-0.mt-lg-5
                ul.lista-ul--color
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 <b>Desarrollo cognitivo.</b> Un niño que juega con bloques mejora su pensamiento lógico y resolución de problemas.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 <b>Fomento de la socialización.</b> Los juegos en grupo enseñan cooperación, turnos y trabajo en equipo.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 <b>Expresión de emociones.</b> El juego simbólico ayuda a representar y comprender sentimientos.
              .col-lg-4(data-aos="zoom-in").order-2.order-lg-1
                img.img-fluid(src='@/assets/curso/tema4/6.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    #t_4_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.3] Impacto de la educación preescolar en el futuro
    
    p.mb-4 Una base sólida en esta etapa reduce dificultades en la educación primaria y mejora el desarrollo integral.

    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-down")
        .tarjeta.bg-color-8.h-100
          .bg-color-9.px-4.px-lg-5.py-3.rounded-top
            h5.mb-0.text-center Adquisición del lenguaje y pensamiento lógico
          p.text-center.mb-0.p-4 Facilita la comprensión y expresión oral y escrita.

      .col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-up")
        .tarjeta.bg-color-8.h-100
          .bg-color-9.px-4.px-lg-5.py-3.rounded-top
            h5.mb-0.text-center Fortalecimiento de la memoria y la atención	
          p.text-center.mb-0.p-4 Mejora la capacidad de aprendizaje.

      .col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-down")
        .tarjeta.bg-color-8.h-100
          .bg-color-9.px-4.px-lg-5.py-4.rounded-top
            h5.mb-0.text-center Promoción de la autonomía
          p.text-center.mb-0.p-4 Favorece la seguridad y confianza en sí mismos.
      .col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-up")
        .tarjeta.bg-color-8.h-100
          .bg-color-9.px-4.px-lg-5.py-4.rounded-top
            h5.mb-0.text-center Adaptación a entornos escolares
          p.text-center.mb-0.p-4 Reduce el estrés y facilita la transición a la educación formal

    #t_4_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.4] Educación preescolar en Colombia
    
    p.mb-4 En Colombia, la Ley 115 de 1994 establece la educación preescolar como un derecho fundamental, garantizando acceso equitativo para todos los niños (Ministerio de Educación Nacional, 1994).

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
    
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/7.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Accesibilidad
                p.mb-0 Asegura que todos los niños tengan derecho a la educación inicial.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/8.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Inclusión
                p.mb-0 Brinda igualdad de oportunidades sin discriminación.
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/9.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Desarrollo integral
                p.mb-0 Enfoque en aspectos cognitivos, emocionales, sociales y físicos.
    
    .bg-full-width.bg-color-5.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Políticas Educativas y Marco Legal
            p.mb-4(data-aos="fade-right") Se invita a explorar el impacto del marco legal en la educación infantil, analizando cómo las normativas y políticas educativas en Colombia garantizan el acceso, la calidad y la equidad en la formación de los niños. A través de este recorrido, se comprenderá el papel fundamental de leyes como la Ley 115 de 1994, el Código de Infancia y Adolescencia, y la política "De Cero a Siempre" en la estructuración de un sistema educativo inclusivo y efectivo. ¡Acompáñenos en esta reflexión sobre el compromiso del Estado con la primera infancia!
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Políticas Educativas y Marco Legal.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/10.png', alt='')
    

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.46550/978-65-89700-13-5 " target="_blank" rel="noopener noreferrer") SCHÜTZ, J. A., AMARAL, M. A. F. d., & PRAIS, J. L. d. S. (2021). Saberes interdisciplinares: políticas e práticas educativas. Editora Metrics. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://poleduinicia.blogspot.com/ " target="_blank" rel="noopener noreferrer") Blog: Política Educativa en la Educación Inicial. (s.f.). Política Educativa en la Educación Inicial.  


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=jJ9m_Bp1oXo " target="_blank" rel="noopener noreferrer") SFPIE UV. (2021, 28 de mayo). Política y Educación [Video]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
export default {
  name: 'Tema4',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
