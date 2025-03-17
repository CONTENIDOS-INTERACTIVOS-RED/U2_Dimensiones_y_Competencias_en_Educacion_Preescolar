<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'5. Educación básica'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema5/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La educación básica es una etapa fundamental en la formación académica de los estudiantes. Su objetivo principal es garantizar el desarrollo integral mediante el fortalecimiento de competencias cognitivas, sociales y emocionales. A continuación, se explorarán sus características, objetivos, enfoques pedagógicos y normativas que la sustentan dentro del sistema educativo colombiano.
    #t_5_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 5.1] Definición y niveles de educación básica
    
    p La educación básica es más que el aprendizaje de leer o hacer cálculos; es el pilar sobre el cual se construyen las competencias y habilidades necesarias para la vida. En Colombia, la <b>Ley 115 de 1994</b> la reconoce como un derecho fundamental, garantizando su acceso y calidad (Ministerio de Educación Nacional, 1994).
    p.mb-4 Este nivel educativo se divide en dos etapas:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema5/2.png")
            .col-lg-7.order-2.order-lg-1
              h5 Educación básica primaria
              p Comprende los grados de primero a quinto y atiende a niños de 6 a 10 años. Su propósito es desarrollar habilidades fundamentales en lectura, escritura, matemáticas y convivencia.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema5/3.png")
            .col-lg-7.order-2.order-lg-1
              h5 Educación básica secundaria
              p Se extiende de sexto a noveno grado, abarcando a estudiantes de 11 a 14 años. Aquí se profundiza en áreas del conocimiento y se fomenta el pensamiento crítico y la autonomía.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema5/4.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Ambos niveles están diseñados para que los estudiantes no solo adquieran conocimientos académicos, sino también habilidades sociales, emocionales y creativas necesarias para su desarrollo.

    #t_5_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 5.2] Transición de la educación preescolar a la básica
    
    p La transición de la educación preescolar a la básica marca un cambio significativo en la vida de los niños. Pasan de un entorno basado en el juego a un sistema más estructurado, con mayores exigencias académicas y nuevas dinámicas de aprendizaje.

    .bg-full-width.bg-h85-2.mb-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").order-1.order-lg-2.mb-3.mb-lg-0.mt-0.mt-lg-5
                ul.lista-ul--color
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 <b>Enfoque de aprendizaje.</b> Del juego libre y la exploración a actividades más estructuradas.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 <b>Interacción social.</b> De un ambiente lúdico a interacciones con mayor exigencia en normas de convivencia.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 <b>Expectativas académicas.</b> Introducción a la lectura, escritura y matemáticas como herramientas de aprendizaje
              .col-lg-4(data-aos="zoom-in").order-2.order-lg-1
                img.img-fluid(src='@/assets/curso/tema5/5.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    #t_5_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 5.3] Principales desafíos en la educación básica
    
    p.mb-4 Santos Guerra (2016) sostiene que la educación debe ser un proceso continuo de descubrimiento, donde cada niño actúa como un reflejo de su entorno. Sin embargo, diversos desafíos afectan su acceso y calidad.

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema5/6.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-2.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Acceso equitativo y cobertura educativa")
            p Persisten brechas socioeconómicas y geográficas que limitan el acceso a educación de calidad, especialmente en zonas rurales. Se requiere fortalecer políticas de inclusión.
    
          .div(titulo="Calidad del currículo y pertinencia pedagógica")
            p Es necesario actualizar métodos de enseñanza para que promuevan un aprendizaje significativo basado en la exploración y el desarrollo de competencias.
    
          .div(titulo="Formación y bienestar docente")
            p La baja valoración social, los salarios y la sobrecarga laboral afectan la motivación de los educadores, impactando la calidad de la enseñanza.
    
          .div(titulo="Inclusión y diversidad")
            p Aún existen barreras para la integración de niños con discapacidad, talentos excepcionales y comunidades vulnerables. Se necesitan estrategias flexibles de enseñanza.
          .div(titulo="Participación familiar")
            p La falta de tiempo y orientación de las familias limita su involucramiento en el proceso educativo, lo que afecta el desarrollo integral de los niños.
    
    p.mb-4 Superar estos desafíos implica fortalecer la inversión en educación, mejorar la formación docente y garantizar ambientes de aprendizaje inclusivos y equitativos.

    h2.mb-4(data-aos="fade-left") Reflexión final
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/7.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema5/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La educación básica es más que un requisito académico; es una herramienta poderosa para la equidad social y el desarrollo personal. ¿Cómo puede la sociedad garantizar que todos los niños tengan acceso a una educación de calidad?
        p(data-aos="fade-left") Invertir en educación significa construir una base sólida para el futuro de los estudiantes y de la sociedad en su conjunto. Un sistema educativo inclusivo, adaptado a las necesidades actuales y respaldado por docentes capacitados es clave para transformar el aprendizaje en una experiencia significativa y enriquecedora.
    
        
    .bg-full-width.bg-color-5.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Currículo y plan de estudios
            p.mb-4(data-aos="fade-right") El currículo y el plan de estudios en este nivel educativo deben responder a las necesidades del desarrollo integral de los estudiantes, asegurando una transición adecuada desde la educación inicial. Es fundamental que estos elementos promuevan aprendizajes significativos, fomenten el pensamiento crítico y garanticen la inclusión, adaptándose a los diversos contextos educativos. A continuación, se analizará la importancia del currículo y el plan de estudios como ejes articuladores del proceso de enseñanza y aprendizaje en la educación básica.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Currículo y plan de estudios.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema5/9.png', alt='')




    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.22550/2174-0909.1317 " target="_blank" rel="noopener noreferrer") Educación preescolar. (2023). Revista Española de Pedagogía, 21(84). 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://tumeaprendes.com/ " target="_blank" rel="noopener noreferrer") Blog: Tú me aprendes. (s.f.). Tú me aprendes. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=2lzvgdv8eyk " target="_blank" rel="noopener noreferrer") Ministerio de Educación Nacional. (2013, 8 de octubre). Educación Inicial, El Mejor Comienzo [Video]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema5',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Qué implica el desarrollo socio afectivo en los niños durante su etapa educativa?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'El desarrollo de habilidades físicas como correr y saltar.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'El desarrollo de capacidades para aprender a leer y escribir.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'La capacidad de los niños para entender y gestionar sus emociones, así como interactuar socialmente con los demás.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'La capacidad de los niños para expresar sus valores espirituales.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes dimensiones del desarrollo infantil está más relacionada con el aprendizaje y la resolución de problemas?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Dimensión estética.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Dimensión cognitiva.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Dimensión espiritual.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Dimensión corporal.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cómo se puede aplicar el concepto de competencia pedagógica en el aula de educación infantil?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Asegurando que los estudiantes memoricen la mayor cantidad posible de información.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Diseñando estrategias que permitan a los estudiantes aplicar lo aprendido en diferentes contextos y situaciones.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Fomentando la competencia de los estudiantes en deportes y actividades físicas.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Limitando la interacción entre los niños para fomentar la concentración individual.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál es la función principal de la Ley General de Educación (Ley 115) en el contexto de la educación infantil?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Establecer las estrategias pedagógicas que los docentes deben seguir.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Regular las competencias físicas que los niños deben alcanzar en la educación básica.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Establecer los principios, objetivos, derechos y deberes del sistema educativo en Colombia.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'Determinar los horarios y fechas de inicio y finalización de las clases en todas las instituciones educativas.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué importancia tiene el desarrollo estético en la educación infantil?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Permite que los niños adquieran habilidades matemáticas.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Fomenta la capacidad de los niños para apreciar y expresar la belleza, así como para desarrollar su creatividad.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Ayuda a los niños a centrarse en actividades de aprendizaje físico.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Promueve exclusivamente el conocimiento de la historia del arte.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
