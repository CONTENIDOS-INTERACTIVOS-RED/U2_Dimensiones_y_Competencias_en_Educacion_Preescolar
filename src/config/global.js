export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad:
      'Conceptos de dimensiones del desarrollo en la educación infantil',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Dimensiones del desarrollo en la educación infantil',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Dimensión socioafectiva',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Dimensión corporal',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Dimensión comunicativa',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Dimensión cognitiva',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Dimensión estética',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Dimensión espiritual',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Dimensión ética',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Competencias en la educación infantil',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Definición de competencia',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos de competencias en la educación infantil',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Relación entre dimensiones del desarrollo y competencias',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Estructura de la competencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Componentes de una competencia',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Desarrollo progresivo de competencias en la infancia',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Estrategias para fomentar el desarrollo de competencias',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Educación preescolar',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Definición y características de la educación preescolar',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'El juego como herramienta de aprendizaje',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Impacto de la educación preescolar en el futuro',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Educación preescolar en Colombia',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Educación básica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Definición y niveles de educación básica',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Transición de la educación preescolar a la básica',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Principales desafíos en la educación básica',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ainsworth, M. S. (1979). Infant–mother attachment. American Psychologist, 34(10), 932–937. ',
      link: 'https://doi.org/10.1037/0003-066X.34.10.932 ',
    },
    {
      referencia:
        'Piaget, J. (1952). The origins of intelligence in children. (M. Cook, Trans.). W W Norton & Co. ',
      link: 'https://doi.org/10.1037/11494-000',
    },
    {
      referencia:
        'Bisquerra, R. (2000). Educación emocional y bienestar. Narcea.  ',
      link:
        'https://www.casadellibro.com.co/libro-educacion-emocional-y-bienestar/9788471978769/1119722 ',
    },
    {
      referencia:
        'Bronfenbrenner, U. (1987). La ecología del desarrollo humano. Editorial Morata.  ',
      link: 'https://bibliotecadigital.mineduc.cl/handle/20.500.12365/18032 ',
    },
    {
      referencia:
        ' Diamond, A. (2000). The influence of exercise on cognition and brain function. Psychiatric Clinics of North America, 23(3), 609-620. ',
      link: 'https://pubmed.ncbi.nlm.nih.gov/23720292/ ',
    },
    {
      referencia:
        'Gallahue, D. L., & Donnelly, F. C. (2008). Developmental physical education for all children. Human Kinetics.  ',
      link: 'https://doi.org/10.5040/9781718210400 ',
    },
    {
      referencia:
        'Malina, R. M., Bouchard, C., & Bar-Or, O. (2004). Growth, maturation, and physical activity. Human Kinetics.  ',
      link: 'https://doi.org/10.5040/9781492596837  ',
    },
    {
      referencia:
        'Pellegrini, A. D., & Smith, P. K. (1998). The development of play during childhood: Forms and possible functions. Child Development, 69(1), 1-13.  ',
      link: 'https://doi.org/10.4236/ojdm.2017.74017 ',
    },
    {
      referencia:
        'Bruner, J. (1983). Child´s talk: Learning to use language. Oxford University Press. DOI:  ',
      link: '10.4236/ce.2015.62021 ',
    },
    {
      referencia:
        'Vygotsky, L. S. (1978). Interaction between learning and development. In M. Cole (Ed.), Mind in society: The development of higher psychological processes (pp. 79–91). Harvard University Press.  ',
      link: 'https://doi.org/10.4236/jss.2024.129036  ',
    },
    {
      referencia:
        'Gardner, H. (1983). Frames of mind: The theory of multiple intelligences. Basic Books.  ',
      link: 'https://doi.org/10.4236/jmp.2016.713162 ',
    },
    {
      referencia:
        'Cortina, A. (2017). La ética en la educación infantil: Valores y principios en la formación temprana. Revista de Educación y Desarrollo, 25(3), 15-28.  ',
      link: 'https://dialnet.unirioja.es/descarga/articulo/5257685.pdf ',
    },
    {
      referencia:
        'Piaget, J. (1932). La moral de los niños. Ediciones Morata.  ',
      link:
        'https://www.filosofem.cat/IMG/pdf/piage_el_criterio_moral_en_el_nino.pdf ',
    },
    {
      referencia:
        ' Jaritonsky, P. (2021). El lenguaje corporal del niño preescolar: (1 ed.). Melos. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/226245 ',
    },
    {
      referencia:
        'Delors, J. (1996). La educación encierra un tesoro. UNESCO.  ',
      link: 'https://unesdoc.unesco.org/ark:/48223/pf0000109590_spa.locale=es ',
    },
    {
      referencia:
        'Lineamientos curriculares | Ministerio de Educación Nacional. (s.f.). Inicio | Ministerio de Educación Nacional.  ',
      link: 'https://www.mineducacion.gov.co/1780/w3-article-339975.html ',
    },
    {
      referencia:
        'Poulain, R. Furnémont, J. & Denyer, M. (2007). Las competencias en la educación: un balance: ( ed.). FCE - Fondo de Cultura Económica.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/110664 ',
    },
    {
      referencia:
        ' Almanza, V. (2003). Hablemos de competencias desde el preescolar. Obtenido de Fundación despertar juvenil: http://fundaciondespertarjuvenil. ',
      link:
        'https://www.academia.edu/8154072/HABLEMOS_DE_COMPETENCIAS_DESDE_EL_PREESCOLAR ',
    },
    {
      referencia:
        'García Carrillo, L. S. & Rivera Machado, A. Y. (2019). Fundamentos conceptuales: procesos y desarrollos de las competencias en educación: ( ed.). Sello Editorial Universidad del Tolima.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/119302 ',
    },
    {
      referencia:
        'Ministerio de Educación Nacional de Colombia. (1994). Ley 115 de 1994: Ley General de Educación.  ',
      link:
        'https://www.mineducacion.gov.co/1621/articles-85906_archivo_pdf.pdf ',
    },
    {
      referencia:
        'Ministerio de Educación Nacional de Colombia. (2009). Decreto 1290 de 2009: Evaluación del Estudiante.  ',
      link:
        'https://www.mineducacion.gov.co/1621/articles-187765_archivo_pdf_decreto_1290.pdf',
    },
    {
      referencia:
        'Ministerio de Educación Nacional de Colombia. (2015). Decreto 1075 de 2015: Decreto Único Reglamentario del Sector Educación.  ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77913 ',
    },
    {
      referencia:
        'Ministerio de Educación Nacional de Colombia. (2006). Ley 1098 de 2006: Código de la Infancia y la Adolescencia. ',
      link:
        'https://www.icbf.gov.co/sites/default/files/codigoinfancialey1098.pdf ',
    },
    {
      referencia:
        'Ministerio de Educación Nacional de Colombia. (2011). Política Nacional de Primera Infancia "De Cero a Siempre".  ',
      link:
        'https://www.icbf.gov.co/sites/default/files/politica_publica_nacional_de_primera_infancia_ley_1804_de_2016_0.pdf  ',
    },
    {
      referencia:
        'Cristóbal Mechó, C. Giné Giné, C. (Coord.) & Mas Mestre, J. M. (Coord.). (2015). La atención temprana: un compromiso con la infancia y sus familias: ( ed.). Editorial UOC.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/57881 ',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (1994). Ley 115 de 1994. Por la cual se expide la Ley General de Educación. Bogotá, Colombia: Ministerio de Educación Nacional.  ',
      link:
        'https://www.mineducacion.gov.co/1621/articles-85906_archivo_pdf.pdf ',
    },
    {
      referencia:
        'Pesca Cepeda, D. C. & Perdomo Ramos, E. J. (2018). El preescolar: un momento ideal para fortalecer el desarrollo de las funciones ejecutivas: ( ed.). Sello Editorial Universidad del Tolima.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/71084',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2016). Ley 1804 de 2016. Por la cual se establece la política pública para el desarrollo integral de la primera infancia de Cero a Siempre.  ',
      link:
        'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/30021778',
    },
    {
      referencia:
        'Santos Guerra, M. Á. (2016). La casa de los mil espejos: y otros relatos sobre la Educación Inicial: ( ed.). Homo Sapiens Ediciones.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/67117',
    },
    {
      referencia:
        'Díaz-Barriga, Á., & Hernández, G. (2018). Estrategias docentes para un aprendizaje significativo: Una interpretación constructivista. McGraw-Hill Interamericana ',
      link:
        'https://www.academia.edu/49065618/Diaz_barriga_estrategias_docentes_para_un_aprendizaje_significativo_D1_9',
    },
    {
      referencia:
        'Zabalza, M. A. (2020). Diseño y desarrollo curricular. Narcea Ediciones.  ',
      link:
        'https://books.google.es/books?id=4M572pSUNXMC&printsec=frontcover&hl=es#v=onepage&q&f=false ',
    },
    {
      referencia:
        'Decreto 1421 de 2017. Ministerio de Educación Nacional, Colombia.  ',
      link:
        'https://www.mineducacion.gov.co/portal/normativa/Decretos/381928:Decreto-1421-de-agosto-29-de-2017 ',
    },
    {
      referencia:
        'Echeita, G. (2016). Inclusión y Exclusión Educativa. De Nuevo, "Voz y Quebranto". REICE. Revista Iberoamericana Sobre Calidad, Eficacia Y Cambio En Educación, 11(2).  ',
      link: 'https://doi.org/10.15366/reice2013.11.2.005 ',
    },
    {
      referencia:
        'Unesco. (2021). Reimagining our futures together: A new social contract for education. Unesco Publishing.  ',
      link: 'https://unesdoc.unesco.org/ark:/48223/pf0000379707.locale=en ',
    },
    {
      referencia:
        'Delors, J. (1996). La educación encierra un tesoro: Informe a la UNESCO de la Comisión Internacional sobre la Educación para el Siglo XXI. UNESCO.  ',
      link: 'https://unesdoc.unesco.org/ark:/48223/pf0000109590_spa',
    },
    {
      referencia:
        ' UNESCO. (2019). Marco de acción para la educación 2030: Hacia una educación inclusiva y equitativa de calidad y un aprendizaje a lo largo de la vida para todos. Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura. ',
      link: 'https://unesdoc.unesco.org/ark:/48223/pf0000384992 ',
    },
    {
      referencia:
        'El País. (2025, 27 de enero). Pros y contras del método Montessori, una educación que se sale de lo convencional.  ',
      link:
        'https://elpais.com/mamas-papas/familia/2025-01-27/pros-y-contras-del-metodo-montessori-una-educacion-que-se-sale-de-lo-convencional.html ',
    },
    {
      referencia:
        'Universidad de Granada. (2021). Modelos didácticos de educación infantil ',
      link: 'https://digibug.ugr.es/handle/10481/69450 ',
    },
    {
      referencia:
        'Redined. (2016). La educación infantil: modelos de atención a la infancia.  ',
      link:
        'https://redined.educacion.gob.es/xmlui/bitstream/handle/11162/127583/18565-18641-1-PB.pdf ',
    },
    {
      referencia:
        'WAECE. (s.f.). Los modelos pedagógicos de la educación de la primera infancia.  ',
      link: 'https://www.waece.org/web_nuevo_concepto/5.htm ',
    },
    {
      referencia:
        'Docentes al Día. (2020, 31 de mayo). Los principales modelos pedagógicos utilizados en la educación.  ',
      link:
        'https://docentesaldia.com/2020/05/31/los-principales-modelos-pedagogicos-utilizados-en-la-educacion/ ',
    },
    {
      referencia:
        'OCDE. (2022). Revisión de políticas nacionales de educación: El papel de la comunidad en la educación.  ',
      link:
        'https://www.oecd.org/es/publications/serials/reviews-of-national-policies-for-education_g1gha1d4.html ',
    },
  ],
  glosario: [
    {
      termino: 'Competencia',
      significado:
        'En el contexto educativo, la competencia es la capacidad de los estudiantes para movilizar conocimientos, habilidades y actitudes en situaciones diversas, demostrando capacidad para aplicar lo aprendido de manera efectiva',
    },
    {
      termino: 'Competencia pedagógica',
      significado:
        'Conjunto de conocimientos, habilidades y actitudes que permiten a un docente llevar a cabo su labor educativa de manera efectiva, fomentando el desarrollo integral de los estudiantes.',
    },
    {
      termino: 'Currículo',
      significado:
        'Conjunto organizado de contenidos, métodos y objetivos que guían el proceso educativo. El currículo es el marco de referencia que los docentes siguen para organizar las actividades de enseñanza.',
    },
    {
      termino: 'Desarrollo cognitivo',
      significado:
        'Es el proceso mediante el cual los niños desarrollan habilidades de pensamiento, como la memoria, la resolución de problemas, el razonamiento y la toma de decisiones.',
    },
    {
      termino: 'Desarrollo corporal',
      significado:
        'Hace referencia al crecimiento físico y la coordinación motriz de los niños, así como al desarrollo de habilidades físicas como caminar, correr, saltar, etc.',
    },
    {
      termino: 'Desarrollo espiritual',
      significado:
        'Implica el desarrollo de los valores, creencias y principios que guían el comportamiento de los niños. Está relacionado con la búsqueda de significado y propósito en la vida.',
    },
    {
      termino: 'Desarrollo estético',
      significado:
        'Se refiere a la capacidad de los niños para apreciar el arte, la belleza y la creatividad. Incluye el desarrollo de habilidades visuales y auditivas, así como la expresión artística.',
    },
    {
      termino: 'Desarrollo ético',
      significado:
        'La dimensión que involucra el desarrollo de la moralidad y los principios éticos en los niños, como la honestidad, la responsabilidad y la justicia',
    },
    {
      termino: 'Desarrollo socioafectivo',
      significado:
        'Aspectos del desarrollo infantil que se centran en las habilidades sociales y emocionales de los niños, como la capacidad de relacionarse con los demás y gestionar sus emociones.',
    },
    {
      termino: 'Dimensiones del desarrollo infantil',
      significado:
        'Conceptos que describen las áreas clave del crecimiento y aprendizaje de los niños. Incluyen las dimensiones socio afectiva, corporal, comunicativa, cognitiva, estética, espiritual y ética, las cuales interactúan y contribuyen al desarrollo integral de los niños.',
    },
    {
      termino: 'Educación básica',
      significado:
        'Etapa educativa que comprende la educación primaria y secundaria, desde el primer hasta el noveno grado, y es obligatoria en Colombia.',
    },
    {
      termino: 'Educación preescolar',
      significado:
        'Etapa educativa inicial que cubre los primeros años de vida de los niños, generalmente hasta los 6 años, antes de ingresar a la educación básica.',
    },
    {
      termino: 'Establecimiento educativo formal',
      significado:
        'Institución educativa que ofrece programas educativos con una estructura y currículo definidos por el estado, como colegios y escuelas oficiales y privadas',
    },
    {
      termino: 'Establecimiento educativo no formal',
      significado:
        'Institución educativa que no sigue la estructura tradicional del sistema escolar, como centros de educación para adultos, programas de educación alternativa, talleres y otros espacios educativos.',
    },
    {
      termino: 'Ley General de Educación (Ley 115)',
      significado:
        'Norma fundamental que regula el sistema educativo colombiano. Establece los principios, objetivos, derechos y deberes relacionados con la educación en Colombia.',
    },
  ],
}
