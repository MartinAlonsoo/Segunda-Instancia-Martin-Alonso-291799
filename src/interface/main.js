import{Alumno} from '../domain/alumno.js';
import{Metas} from '../domain/Metas.js';
import { ListaAlumno } from '../domain/listaAlumno.js';
import { ListaMeta } from '../domain/listaMetas.js';
import { ListaEvaForm } from '../domain/listaEvaForm.js';
import {EvaForm} from '../domain/evaFormativa.js';
import { ListaPruebaDiag } from '../domain/listaPruebaDiag.js';
import {pruebDiagnostic} from '../domain/pruebasDiagnosticas.js';

const comunicacionPCT2 = " En este tramo el estudiante interactúa en distintas situaciones comunicativas con diversos soportes y apoyos de modo de desarrollar diferentes lenguajes de acuerdo con sus posibilidades (verbales, no verbales, expresivos, multimediales, icónicos y numéricos) y dialoga construyendo significados. Realiza inferencias a través de elementos paratextuales, de otros sistemas de lenguajes según el contexto. Pregunta, opina y da razones en situaciones grupales. Expresa de manera ordenada sus propias opiniones, sentimientos y emociones. Toma decisiones de acuerdo con sus intereses comunicativos y sus características. Interpreta consignas simples en otra lengua acompañadas de gestualidad para realizar acciones y responde verbalmente con enunciados concretos y conocidos. Identifica sistemas alternativos y aumentativos de comunicación.";
const comunicacionSCT1 = "En este tramo cada estudiante desarrolla estrategias de comunicación de acuerdo con el contexto. Toma decisiones adecuadas a sus intereses comunicativos y a sus características. Desarrolla diferentes lenguajes (verbal, no verbal, expresiva y multimedial) y sus interrelaciones, y los incorpora de forma paulatina. Infiere la información a partir de elementos icónicos y verbales. Organiza, jerarquiza y comienza a planificar la expresión de sus opiniones, sentimientos y emociones. Planifica y revisa sus producciones con la guía del adulto. En otra lengua, relata rutinas relacionadas con la vida cotidiana, produce textos sencillos de temas conocidos con soportes visuales, aplicando diversos soportes y textos alternativos.";
const comunicacionSCT2 = " En este tramo el estudiante interactúa con pertinencia a la situación comunicativa, planificando y desarrollando estrategias adecuadas a diferentes contextos e interlocutores en función de sus intereses y características. Reconoce diferentes lenguajes, soportes y formatos mediadores para la comunicación, incluyendo rampas digitales y otros apoyos inclusores. Explica opiniones propias e identifica diversas posturas distintas a las propias. Expone sobre temas de estudio. Intercambia posturas. Desarrolla estrategias de comunicación en diferentes contextos. 27 Infiere la información implícita en situaciones simples, discrimina información explícita relevante y reconoce la polifonía del discurso. En otra lengua, logra procesos de escritura de textos sencillos, lee y se expresa oralmente con aplicación de diversos soportes, lenguajes alternativos y mediaciones en contextos cotidianos.";
const creativoPCT2 = "En este tramo el estudiante se plantea preguntas en base a sus intereses y experiencias nuevas relacionadas con su entorno. Expresa sus ideas, sentimientos y emociones utilizando y modificando materiales diversos de su entorno para darles nuevas formas o fines, jugando y proponiendo experiencias de juego en diferentes contextos en los que participa activamente. Combina ideas propias y de otros para generar alternativas originales en ámbitos cotidianos, para ofrecer variaciones de respuestas a problemas diversos y las pone a prueba.";
const creativoSCT1 = "En este tramo cada estudiante plantea preguntas para identificar y aclarar situaciones. Compara la información obtenida con la de su entorno. Ensaya respuestas a situaciones de la realidad. Se sensibiliza frente a sus propias creaciones, las de sus pares y las producciones culturales de ámbitos locales o regionales. Genera nuevas ideas o combina ideas de otros para crear cosas nuevas en contextos delimitados o pensar soluciones. Explora y propone respuestas a distintas situaciones, utilizando formas creativas, lógicas o heurísticas. Plasma y expresa en obras sus emociones, sentimientos e ideas, explorando las posibilidades de los diferentes materiales. Explora diferentes lenguajes, modalidades y ámbitos. Experimenta con una gama de opciones al buscar y poner sus ideas a prueba.";
const creativoSCT2 = "En este tramo el estudiante se implica en la búsqueda de situaciones o procesos tanto cotidianos como inusuales de diversos ámbitos que le presenten desafíos y los explora buscando, con mediación, relaciones no aparentes entre los aspectos que la definen. Plantea preguntas para aclarar e interpretar la información y explorar causas y consecuencias. Utiliza sus experiencias para pensar ideas que resultan novedosas en su contexto. Investiga opciones, adapta ideas, genera alternativas y predice posibles resultados en la búsqueda de caminos o soluciones diversas y al poner sus ideas en acción. Plasma sus producciones en diferentes ámbitos, con distintos lenguajes técnicos, teniendo en cuenta el lenguaje propio y los soportes necesarios. Compara, reconoce y valora las diferencias entre su propia producción creativa y la de los otros.";
const criticoPCT2 = ": En este tramo el estudiante formula preguntas generales sobre temas de su interés y de su entorno e interroga para construir interpretaciones sobre situaciones concretas. Utiliza la duda como insumo para explorar el entorno, confrontando su opinión con la información recabada, con el apoyo del adulto. Opina mediante afirmaciones y razones sencillas sobre temas de su interés en el contexto cotidiano. Escucha la opinión de otros y reconoce otros puntos de vista en situaciones mediadas. Expresa acuerdo o desacuerdo en un contexto argumentativo y elabora razones para defender su opinión ante el cuestionamiento de otros. En indagación confronta su opinión con evidencias y logra reorganizarla de forma mediada.";
const criticoSCT1 = "En este tramo cada estudiante cuestiona el entorno e indaga en función de consignas. Formula preguntas diversas a partir de temas propuestos o de su interés, focalizando distintos aspectos de una situación. De dichas interrogantes construye significados e interpretaciones más allá de los obvios, relativos a objetos o situaciones concretas. 22 Identifica distintos puntos de vista y construye alternativas a situaciones concretas, distinguiendo emociones de argumentos. En la elaboración de la estructura argumentativa emplea razones básicas para defender su punto de vista y entiende que los otros dan sus razones, justificando las propias si son diferentes. Al expresar sus argumentos lo hace adecuadamente en el contexto cotidiano y sobre temas conocidos, produciendo textos argumentativos sencillos de forma escrita y en el discurso oral. De esta forma participa en el diálogo, acepta otras opiniones y evalúa razonamientos básicos en su discurso y en el de otros.";
const criticoSCT2 = "En este tramo el estudiante elabora preguntas y problemas a partir de consignas dadas o inquietudes propias, empleando la duda o el problema como insumo para pensar. Aplica herramientas básicas de interpretación para formular preguntas con un grado sencillo de abstracción. Investiga de forma colaborativa en función de hipótesis sobre temas de su interés o de estudio. Distingue datos relevantes de irrelevantes, considerando más de una fuente de información. Fundamenta su punto de vista utilizando información externa. Conoce el concepto de objeción y plantea objeciones a partir de una consigna. Aplica herramientas básicas de razonamiento lógico. Estructura, de forma mediada, la argumentación en relación con el contexto y el destinatario. Expresa argumentos de forma escrita y oral utilizando información externa. Valora y acepta consensos o disensos. Defiende su postura con argumentos sencillos. Argumenta de forma concreta con lenguaje adecuado al contexto. Opina con argumentos sencillos a favor o en objeción, incorporando información externa y lenguaje adecuado al contexto. Reconoce un punto de vista, puede resignificarlo e integrarlo al contexto. Valora y acepta consensos o disensos. Reconoce supuestos implícitos en casos sencillos. Conoce y aplica herramientas básicas para revisar el proceso de razonamiento argumentativo. Reorganiza su punto de vista y su discurso de manera creativa.";
const cientificoPCT2 = "En este tramo el estudiante observa fenómenos concretos, recopila información y describe aspectos experimentales vinculados a datos y variables que obtiene mediante procesos perceptivos por vías sensitivas. Vincula conocimientos científicos a evidencias concretas de fenómenos simples que aborda como problemas de forma mediada. Cuestiona eventos y afirmaciones concretas sobre fenómenos de su entorno y pide explicaciones. Secuencia etapas de los procesos realizados en el tratamiento de una situación y describe elementos de eventos de su entorno, con o sin mediación tecnológica, anticipando resultados ante un fenómeno conocido. Comprende y sigue las instrucciones para obtener un resultado esperado o deseado.";
const cientificoSCT1 = "En este tramo cada estudiante vincula conocimientos científicos a evidencias concretas de fenómenos simples que aborda como problemas con incipiente autonomía. Descubre regularidades y alteraciones, identifica patrones simples en un conjunto de datos, cuantifica medidas, clasifica, organiza, ordena y compara datos vinculados al fenómeno problematizado. Elabora y comunica preguntas y supuestos, sintetiza información y generaliza empíricamente. En relación con la investigación, realiza estudios simples, reconoce variables, recopila datos y elabora conclusiones sencillas. Expresa caminos alternativos para el estudio de los fenómenos de forma autónoma, según sus intereses o consignas planteadas. Reconoce explicaciones científicas y técnicas aplicables a fenómenos cotidianos y cuestiona explicaciones a fenómenos naturales y sociales construidas con base en sus ideas previas.";
const cientificoSCT2 = " En este tramo el estudiante indaga, analiza y explica fenómenos sociales y naturales cotidianos, reconociendo sus fundamentos científicos. Indaga formas de explorar científicamente una pregunta planteada. Busca caminos alternativos para el estudio de los fenómenos de forma autónoma. Realiza estudios que implican dos o más variables independientes e interpreta y construye tablas sencillas. Identifica modelos y reconoce datos relevantes en figuras, diagramas y gráficos a partir de su vinculación con el conocimiento científico o técnico. Relaciona aplicaciones tecnológicas con el conocimiento científico y reflexiona sobre su influencia en la sociedad y el ambiente. Reconoce el carácter temporal del conocimiento científico.";
const computacionalPCT2 = "En este tramo el estudiante identifica y usa datos e información: distingue aquellos útiles y los emplea para identificar patrones simples. Experimenta con computadoras y utiliza herramientas para obtener, almacenar y recuperar información. Propone soluciones y anticipa resultados a problemas computacionales simples, utilizando la descomposición como estrategia. Al identificar, proponer y poner a prueba soluciones o desarrollar instrucciones en situaciones lúdicas o cotidianas, organiza pasos e identifica la importancia del orden en los algoritmos, encuentra errores y los asume como parte del proceso de resolución. En este proceso explora, en forma mediada, y se expresa a través de nociones básicas de programación en actividades lúdicas. Compara características del lenguaje computacional y otros lenguajes.";
const computacionalSCT1 = ": En este tramo cada estudiante reconoce problemas simples de su entorno escolar, familiar y comunitario, que se pueden abordar mediante algoritmos y los resuelve con una variedad acotada de instrucciones. Utiliza diferentes estrategias, itera, reconoce sus errores y persevera en el proceso de alcanzar soluciones. Identifica datos útiles y necesarios para la resolución. Usa datos e información para identificar patrones, presentar información y hacer predicciones simples. Respecto al procesamiento de datos con la computadora, almacena, organiza y recupera información con diferentes herramientas. Crea y sigue instrucciones paso a paso en situaciones lúdicas o cotidianas. Utiliza la programación como forma de expresión, identificando y combinando comandos básicos. Comprende y explica los comportamientos de sus propios programas. Explora sobre el funcionamiento de dispositivos tecnológicos a partir de la interacción con sensores y actuadores. Reconoce que el comportamiento de las computadoras es el resultado de la ejecución de programas, y que las acciones llevadas a cabo por las computadoras dependen de las instrucciones que les damos los humanos. Identifica la relación entre eventos de entrada, instrucciones y resultados de la ejecución de un programa u otro algoritmo. Distingue la dualidad de roles: usuarios y programadores. Identifica que la información compartida en internet incide en cada uno y en los demás.";
const computacionalSCT2 = "En este tramo el estudiante comprende y explica sus ideas como aporte al trabajo y desarrollo colectivo de soluciones. En este proceso usa datos e información para fundar predicciones, proponer relaciones y argumentar. Utiliza herramientas digitales para el manejo, la presentación y visualización de información. Resuelve problemas computacionales simples a través de la programación, combinando comandos y expresiones, o modificando con ayuda dispositivos que interactúan con el entorno. Para esto identifica aspectos importantes y reflexiona sobre la información relevante de los datos de un problema sencillo. En este proceso recupera soluciones, propias o ajenas, para adaptarlas a nuevos problemas y utiliza la estrategia de división de un problema en subproblemas. Reconoce el uso del método de desarrollo incremental y compara diferencias entre versiones y resultados de dispositivos o programas. Reflexiona sobre el proceso de iteración y los errores cometidos durante la resolución de problemas y comprende el valor de perseverar ante el error en el proceso de generar soluciones. Identifica algunas formas en las que la tecnología y las computadoras impactan y transforman la vida cotidiana y el ambiente. Explica la interacción de las computadoras con el entorno a partir de la entrada de datos que procesa un programa y la salida de información. Reflexiona sobre el uso de internet y cómo se transfieren y comparten datos. Discrimina formas más o menos seguras de manejar datos personales en dispositivos, internet y redes sociales.";
const metacognitivaPCT2 = "En este tramo el estudiante anticipa respuestas como estrategias e interroga motivado por la curiosidad. Progresivamente adquiere el hábito de observar, pensar y actuar en lo que hace controlando algún aspecto de su actividad: gestión del tiempo, concentración, autoobservación, con mediación adulta de acuerdo con sus características. Explora y pone en práctica diversos recorridos o estrategias de pensamiento. Indaga, reconoce, anticipa e intenta dar explicaciones ante situaciones nuevas potenciado por la mediación y la interacción con su entorno. Describe lo que está pensando y da razones de por qué, además, responde a preguntas sobre qué aprendió, cómo aprendió y para qué le sirvió.";
const metacognitivaSCT1 = " En este tramo, cada estudiante identifica y reconoce las consecuencias de sus respuestas a las situaciones que lo desafían cognitivamente. Comienza a reflexionar sobre qué aspectos de ellas se pueden modificar o potenciar. Reconoce diversos estímulos en tareas desafiantes y comienza a centrarse en los estímulos relevantes. Vincula sus experiencias con el conocimiento nuevo. Reconoce qué elementos le generan mayor facilidad o dificultad en las actividades de aula. Identifica y aplica progresivamente procesos de pensamiento que puede adecuar a diferentes contextos. Describe las estrategias utilizadas en situaciones delimitadas y utiliza información de experiencias previas para comunicar ideas.";
const metacognitivaSCT2 = "En este tramo el estudiante desarrolla conciencia sobre sus procesos internos de pensamiento. Reflexiona sobre los supuestos realizados y describe el proceso utilizado para llegar a conclusiones. Identifica campos de su interés y estrategias de aprendizaje en diferentes situaciones. Reconoce el monitoreo, la planificación y la autoevaluación como herramientas para el aprendizaje. Reconoce y utiliza los recursos a su alcance para el acceso a la información. Identifica y justifica la toma de decisiones respecto a los procesos de pensamiento utilizados en situaciones que se le presentan. ";
const intrapersonalPCT2 = "En este tramo el estudiante reconoce la expresión de las emociones, sentimientos, pensamientos, intereses y motivaciones propias, así como las implicancias de sus acciones en el vínculo que desarrolla con otros de forma autónoma y mediada cuando sus características y circunstancias así lo requieran. Inicia la construcción de confianza en sí mismo tanto en sus habilidades como en la posibilidad de adquirirlas. Explora sus preferencias, gustos, necesidades y las expresa. Gradualmente adquiere conciencia corporal e identifica que su imagen del cuerpo se constituye en interacción con el entorno, construyendo vínculos de confianza con sus pares. 18 Participa con mediación en la toma de decisiones en situaciones emergentes sencillas.";
const intrapersonalSCT1 = "En este tramo cada estudiante reconoce las emociones, sentimientos, intereses y motivaciones, las propias y las de otros, comenzando el proceso de autorregulación. Reconoce el potencial de su corporalidad para intervenir con su accionar en el entorno, planifica y toma decisiones con orientación y acompañamiento. Experimenta el reconocimiento de su identidad como un aspecto en construcción, en vínculo con distintas identidades y el entorno; comienza a resolver inquietudes internas en diálogo consigo mismo y con los otros.";
const intrapersonalSCT2 = "En este tramo el estudiante analiza sus actuaciones y comportamientos con el objetivo de comprender, clarificar las emociones, reacciones, sentimientos y actitudes. Comienza a percibir y visualizar la forma en la que lo perciben los otros. 29 Explora su espacio corporal personal. Reconoce y explora los cambios de su cuerpo. Utiliza el movimiento para la exploración de su entorno y su transformación. Se inicia en el ejercicio del derecho a elegir y en la responsabilidad que ello conlleva. Toma decisiones y reconoce los límites de la vida en comunidad. Comienza a involucrarse, se hace responsable de las expresiones y opiniones en relación con él mismo. Internaliza estrategias para procesar la frustración y resolver conflictos de forma pacífica. Busca redes de apoyo y contención. Analiza y discrimina la información y los modelos que le llegan por distintos medios, comprendiendo su incidencia.";
const accionPCT2 = ": En este tramo el estudiante reconoce, expresa, busca ideas en situaciones diversas de forma mediada. Genera y comparte experiencias a través de su propia curiosidad. Busca respuestas y estrategias que lo impulsen a proponer y concretar tanto acciones como soluciones favorables a todos con la guía de un adulto";
const accionSCT1 = "Cada estudiante reconoce y expresa las ideas en situaciones diversas, se plantea desafíos y busca y propone estrategias para abordarlos, analizando diferentes posibilidades. Esto le permite construir y proponer prototipos de solución para problemas sencillos. Logra vincular necesidades propias, de otro o grupales, y encontrar estrategias que sean favorables a las necesidades de todos los involucrados. Esto le permite seleccionar conocimientos previos y recursos de manera situada y en función de la acción que planifica.";
const accionSCT2 = " En este tramo el estudiante ejercita diferentes posibilidades de combinación entre conocimientos, ideas concretas o abstractas y recursos para dar continuidad a la nueva acción que pretende desarrollar. Enuncia problemas y plantea alternativas de abordaje como parte del desarrollo de un proyecto. Experimenta en territorio con los prototipos existentes, recopila datos y analiza resultados. Participa en propuestas de trabajo colaborativo o cooperativo que promueven la toma de decisiones individuales y colectivas de forma mediada. Formula con claridad problemas, objetivos y metas considerando los recursos y el contexto.";
const ciudadaniaPCT2 = "En este tramo el estudiante vivencia y disfruta del ambiente y de elementos del patrimonio cultural y natural, indagando características de la vida, la relación individuo-ambiente y relaciones básicas de los ecosistemas en su entorno inmediato. Comprende, sigue reglas y asume responsabilidades asignadas en la convivencia en los ámbitos lúdico y áulico. Comienza a diferenciar situaciones justas de injustas cuando está implicado. En el ámbito escolar identifica problemas de convivencia y participa en la creación de reglas, aportando su propia opinión con la guía del adulto. En el ámbito local identifica problemas socioambientales e indaga sobre sus causas con el apoyo docente. Participa en actividades colaborativas para el cuidado de los espacios que habita y de conservación del ambiente mediadas por un adulto. Selecciona el medio digital más adecuado, disponible en su entorno, para realizar una actividad, produciendo e indagando contenidos vinculados a sus intereses y a consignas dadas en el ámbito escolar.";
const ciudadaniaSCT1 = "En este tramo cada estudiante internaliza comprende y sigue reglas en el aula. Participa en la reflexión y creación de reglas de convivencia escolar, aportando su propia opinión y escuchando la opinión del otro con la mediación del adulto. Identifica derechos y obligaciones que lo implican, así como responsabilidades que lo afectan, compartiendo estas últimas en el ámbito lúdico y escolar. En su entorno inmediato, percibe problemas sociales y propone reglas de convivencia, llegando a acuerdos mediante el diálogo. En esta línea, promueve hábitos y colabora en el cuidado de espacios que habita. Identifica las características culturales locales y regionales, distingue lo común de lo diverso y opina al respecto. Conoce la diversidad entre pares y se reconoce diverso al otro. Desde una dimensión crítica del uso de la tecnología, analiza la veracidad, el contexto o fiabilidad de la información disponible en medios digitales con la mediación de un adulto. También con intervención de adultos comienza a comprender las implicancias de su participación en redes sociales y otros espacios de intercambio digital (protección de privacidad, uso responsable de las redes). En este entorno, cada estudiante identifica características de la tecnología. Realiza producciones en medios digitales e indaga sobre contenidos de su interés o del ámbito escolar, elaborando reflexiones con guía del adulto sobre pertinencia y adecuación del contenido a su perfil. En la dimensión de desarrollo sostenible, identifica problemas socioambientales locales e indaga sobre sus causas, así como sobre características de la vida, la relación individuo-ambiente y relaciones básicas de los ecosistemas. Con guía del maestro indaga sobre la incidencia de las acciones y actitudes cotidianas y las actividades productivas en el equilibrio ambiental. Valora el ambiente, los elementos del patrimonio cultural y natural, y participa en actividades colaborativas de conservación, recuperación y mejora del ambiente.";
const ciudadaniaSCT2 = "En este tramo el estudiante participa en espacios de convivencia. Con mediación del adulto, incorpora prácticas cotidianas de exploración, disfrute, conservación y recuperación del ambiente local. Participa en espacios de convivencia, en instancias y procesos de toma de decisión democrática en el ámbito escolar y en su comunidad, aportando su visión e impronta personal y valorando la opinión del otro y el respeto mutuo. Reconoce relaciones dinámicas de interacción e interdependencia entre elementos y condiciones del ambiente en diferentes niveles de organización. Identifica y respeta las características culturales locales, regionales y globales. Valora la diversidad como riqueza en actividades cotidianas y reflexiona sobre lo común y lo diverso. Comprende sus intereses y necesidades y los diferencia de los de los demás. Reflexiona e incorpora reglas de convivencia escolar y de su vida cotidiana. Identifica derechos y responsabilidades y reconoce su implicancia en la vida democrática. Identifica problemas socioambientales, reflexiona sobre sus causas y consecuencias y sobre la incidencia de la acción humana en la evolución del equilibrio ambiental. Reconoce formas de producción, consumo y distribución de bienes y servicios ambientales y su impacto en la conservación, recuperación o mejora del ambiente. Utiliza medios digitales para producir colaborativamente y selecciona el formato adecuado para presentar información. Atribuye, con mediación del adulto, la autoría correspondiente cuando utiliza producciones de otros Analiza y reflexiona sobre la validez de los contenidos digitales y comienza a usar herramientas y estrategias para identificar aquellos fiables. Identifica implicancias éticas y situaciones de riesgo en el uso de las redes sociales. Reconoce la construcción de su huella e identidad digital y los riesgos de publicar datos personales. Reflexiona con la guía del adulto sobre el tiempo dedicado al uso de medios digitales y sobre los objetivos del uso.";
const otrosPCT2 = " En este tramo el estudiante comunica mediante diferentes formas de expresión, buscando la asertividad de sus ideas, creencias y sentimientos en interacción empática con sus pares a través de la mediación y de apoyos cuando sea necesario. A través del juego, la expresión artística y la experimentación reconocen su corporalidad integral. Adquiere hábitos de cuidado y respeto de la imagen del cuerpo propio y del otro. Comparte el tiempo y el espacio con sus pares reconociendo y respetando características y necesidades. Participa en la búsqueda de pautas de convivencia social e incorpora progresivamente el fundamento cultural de las normas. Gradualmente manifiesta actitud flexible frente a conflictos de acuerdo con sus características, circunstancias y posibilidades. Se incorpora progresivamente en actividades colaborativas y cooperativas. Desarrolla y fortalece actitudes de solidaridad incluyendo las diferencias.";
const otrosSCT1 = "En el proceso de construcción de vínculos asertivos, cada estudiante amplía la capacidad de recepción y expresión de ideas, creencias y sentimientos atendiendo derechos y deberes mutuos. Se vincula con otros de acuerdo con sus motivaciones y necesidades, evitando herir y ofender. En este proceso intercambia experiencias y desarrolla relaciones con sus pares, lo que le permite construir y expresar su identidad, para conocer e interactuar con pertinencia al contexto. Identifica la diversidad en sí mismo y en el otro. Comparte el sentido de cuidado mutuo, que contribuye al desarrollo integral de todos. Se encuentra en proceso de internalización de límites de protección y respeto hacia los demás y su entorno. Se comunica a través de diferentes lenguajes, medios y tecnologías, escuchando opiniones diferentes a las suyas y desarrollando las propias. Reconoce situaciones de discriminación de las diferencias, ampliando el potencial de recepción y expresión de ideas, creencias y sentimientos. 24 En lo referente a la búsqueda de acuerdos frente a conflictos, participa de dinámicas donde se contraponen y se resuelven situaciones con mediación del adulto, identificando las reglas establecidas en juegos y actividades compartidas.";
const otrosSCT2 = ": En este tramo el estudiante desarrolla vínculos con sus pares de acuerdo con sus intereses y de forma solidaria. Reconoce e internaliza habilidades sociales y evita la discriminación. Participa en actividades colectivas donde se establecen propósitos comunes. Desarrolla los procesos de su propia identificación a través de búsquedas; forma parte de diversos grupos según sus características individuales. Respeta la diversidad propia y la del otro. Integra perspectivas inclusivas acerca de las diferencias en el funcionamiento del cuerpo, el género, las generaciones y la interculturalidad, entre otras. Ensaya respuestas propias en la búsqueda de acuerdos y caminos posibles, señalando el más oportuno. Desarrolla búsquedas de conductas de autocuidado. Desarrolla habilidades para atender y entender a los otros que se mueven en su entorno. Identifica estereotipos y reconoce prejuicios que limitan el desarrollo y la expresión propia y de los otros.";

const btnInscribir = document.getElementById("btnInscribir");
const btnRegisMetas = document.getElementById("btnRegisMetas");
const btnMostrarPE = document.getElementById("btnMostrarPE");
const btnRegisEva = document.getElementById("btnRegistrarEvaFormulario");
const btnMostrarEvasdef = document.getElementById("btnMostrarEvasdef");
const btnSeleccionarEva = document.getElementById("btnAgarrarEva");
const btnRegisPruebas = document.getElementById("btnRegistrarPruebDiag");
const btnMostrarPruebaDiag = document.getElementById("btnMostrarPruebDiag");
const btnMostrarPruebaDiagdef = document.getElementById("btnMostrarPruebaDiagdef");
const btnRegistrarPruebDiagform = document.getElementById("btnRegistrarPruebDiagform");
const btnBarraInscribirAlumno = document.getElementById("inscribirAlumno-tab");
const btnBarraPerfilesEgresados = document.getElementById("perfiles-tab");


let listaMetas = new ListaMeta();
//let listaDias = [];
//let listaUsuarios = new ListaUsuario();
let listaEvaForm = new ListaEvaForm();
//let listaSemanas = [];
//let listaMese = [];
let listaAlumnos = new ListaAlumno();
let listaPruebaDiag = new ListaPruebaDiag();

document.getElementById('btnRegistrarEva').addEventListener('click', function() {
  document.getElementById('mostrarEvas').style.display = 'none';
  document.getElementById('formRegistrarEva').style.display = 'block';
  const alumnoSelect = document.getElementById('alumnoEva');
  alumnoSelect.innerHTML = '<option value="">Seleccione un alumno</option>';  // Limpiar el dropdown

  // Agregar los alumnos a la lista del dropdown
  listaAlumnos.getAlumnos().forEach(alumno => {
    const option = document.createElement('option');
    option.value = alumno.toString(); // Usamos el nombre del alumno como valor
    option.textContent = alumno.toString(); // Lo mismo para el texto visible
    alumnoSelect.appendChild(option);
  });
});


btnMostrarPruebaDiag.addEventListener('click', function() {
  document.getElementById('formRegistrarPruebaDiag').style.display = 'none';
  document.getElementById('mostrarPruebas').style.display = 'block';
  const alumnoSelect = document.getElementById('alumnoMostrar2');
  alumnoSelect.innerHTML = '<option value="">Seleccione un alumno</option>';  // Limpiar el dropdown

  // Agregar los alumnos a la lista del dropdown
  listaAlumnos.getAlumnos().forEach(alumno => {
    const option = document.createElement('option');
    option.value = alumno.toString(); // Usamos el nombre del alumno como valor
    option.textContent = alumno.toString(); // Lo mismo para el texto visible
    alumnoSelect.appendChild(option);
  });
});


btnRegisPruebas.addEventListener('click', function() {
  document.getElementById('mostrarPruebas').style.display = 'none';
  document.getElementById('formRegistrarPruebaDiag').style.display = 'block';
  const alumnoSelect = document.getElementById('alumnoPrueba');
  alumnoSelect.innerHTML = '<option value="">Seleccione un alumno</option>';  // Limpiar el dropdown

  // Agregar los alumnos a la lista del dropdown
  listaAlumnos.getAlumnos().forEach(alumno => {
    const option = document.createElement('option');
    option.value = alumno.toString(); // Usamos el nombre del alumno como valor
    option.textContent = alumno.toString(); // Lo mismo para el texto visible
    alumnoSelect.appendChild(option);
  });
});

document.getElementById('btnMostrarEvas').addEventListener('click', function() {
  document.getElementById('formRegistrarEva').style.display = 'none';
  document.getElementById('mostrarEvas').style.display = 'block';
  const alumnoSelect = document.getElementById('alumnoMostrar');
  alumnoSelect.innerHTML = '<option value="">Seleccione un alumno</option>';  // Limpiar el dropdown

  // Agregar los alumnos a la lista del dropdown
  listaAlumnos.getAlumnos().forEach(alumno => {
    const option = document.createElement('option');
    option.value = alumno.toString(); // Usamos el nombre del alumno como valor
    option.textContent = alumno.toString(); // Lo mismo para el texto visible
    alumnoSelect.appendChild(option);
  });
});


btnBarraInscribirAlumno.addEventListener("click", (event) => {
  event.preventDefault();
  let mensajeAlumno = document.getElementById('mensajeInscripcionAlumno');
  mensajeAlumno.innerHTML = "";
});

btnBarraPerfilesEgresados.addEventListener("click", (event) => {
  event.preventDefault();
  let resultado = document.getElementById("txtPerfilEgresado");
  resultado.innerHTML = "";
  let mensajePerfilE = document.getElementById('mensajeSeleccionPerfilE');
  mensajePerfilE.innerHTML ="";
});

btnInscribir.addEventListener("click", (event) => {
  event.preventDefault();
  let mensajeAlumno = document.getElementById('mensajeInscripcionAlumno');
  mensajeAlumno.innerHTML = "";
  let nombre = document.getElementById("validationTooltip01").value;
  let apellido = document.getElementById("validationTooltip02").value;
  let grupo = document.getElementById("validationTooltip03").value;
  if(nombre !== "" && apellido !== "" && grupo !== ""){
    let alumno = new Alumno(nombre, apellido);
    alumno.setGrupo(grupo);
    listaAlumnos.add(alumno);
    console.log(listaAlumnos);
    console.log("hecho");
    mensajeAlumno.innerHTML = "Usuario creado satisfactoriamente";
    document.getElementById("validationTooltip01").value = "";
    document.getElementById("validationTooltip02").value = "";
    document.getElementById("validationTooltip03").value = "";
  }else {
    let mensajeAlumno = document.getElementById('mensajeInscripcionAlumno');
    mensajeAlumno.innerHTML = "Por favor verifique los datos, usuario no creado";
  }
});

btnRegisMetas.addEventListener("click", (event) => {
  event.preventDefault();
  let contenido = document.getElementById("validationTooltip05").value;
  let grupo = document.getElementById("validationTooltip04").value;
  if(contenido !== "" && grupo !== ""){
    let meta = new Metas(contenido, grupo);
    listaMetas.add(meta);
    let mensajeMeta = document.getElementById('mensajeInscripcionMeta');
    mensajeMeta.innerHTML = "Meta creado satisfactoriamente";
  }else {
    let mensajeMeta = document.getElementById('mensajeInscripcionMeta');
    mensajeMeta.innerHTML = "Por favor verifique los datos, meta no creada";
  }
});

btnMostrarPE.addEventListener("click", (event) => {
  event.preventDefault();
  let competencia= document.getElementById("validationTooltip08").value;
  let grupo = document.getElementById("validationTooltip07").value;
  let resultado = document.getElementById("txtPerfilEgresado");
  if(grupo !== "" && competencia !== ""){
    switch(competencia+grupo){
      case "comunicacionPCT2":
          resultado.innerHTML  = comunicacionPCT2;
      break;
      case "comunicacionSCT1":
        resultado.innerHTML  = comunicacionSCT1;
      break;
      case "comunicacionSCT2":
          resultado.innerHTML  = comunicacionSCT2;
      break;
      case "creativoPCT2":
        resultado.innerHTML  = creativoPCT2;
      break;
      case "creativoSCT1":
        resultado.innerHTML  = creativoSCT1;
      break;
      case "creativoSCT2":
        resultado.innerHTML  = creativoSCT2;
      break;
      case "criticoPCT2":
        resultado.innerHTML  = criticoPCT2;
      break;
      case "criticoSCT1":
        resultado.innerHTML  = criticoSCT1;
      break;
      case "criticoSCT2":
        resultado.innerHTML  = criticoSCT2;
      break;
      case "cientificoPCT2":
        resultado.innerHTML  = cientificoPCT2;
      break;
      case "cientificoSCT1":
        resultado.innerHTML  = cientificoSCT1;
      break;
      case "cientificoSCT2":
        resultado.innerHTML  = cientificoSCT2;
      break;
      case "computacionalPCT2":
        resultado.innerHTML  = computacionalPCT2;
      break;
      case "computacionalSCT1":
        resultado.innerHTML  = computacionalSCT1;
      break;
      case "computacionalSCT2":
        resultado.innerHTML  = computacionalSCT2;
      break;
      case "metacognitivaPCT2":
        resultado.innerHTML  = metacognitivaPCT2;
      break;
      case "metacognitivaSCT1":
        resultado.innerHTML  = metacognitivaSCT1;
      break;
      case "metacognitivaSCT2":
        resultado.innerHTML  = metacognitivaSCT2;
      break;
      case "intrapersonalPCT2":
        resultado.innerHTML  = intrapersonalPCT2;
      break;
      case "intrapersonalSCT1":
        resultado.innerHTML  = intrapersonalSCT1;
      break;
      case "intrapersonalSCT2":
        resultado.innerHTML  = intrapersonalSCT2;
      break;
      case "accionPCT2":
        resultado.innerHTML  = accionPCT2;
      break;
      case "accionSCT1":
        resultado.innerHTML  = accionSCT1;
      break;
      case "accionSCT2":
        resultado.innerHTML  = accionSCT2;
      break;
      case "ciudadaniaPCT2":
        resultado.innerHTML  = ciudadaniaPCT2;
      break;
      case "ciudadaniaSCT1":
        resultado.innerHTML  = ciudadaniaSCT1;
      break;
      case "ciudadaniaSCT2":
        resultado.innerHTML  = ciudadaniaSCT2;
      break;
      case "otrosPCT2":
        resultado.innerHTML  = otrosPCT2;
      break;
      case "otrosSCT1":
        resultado.innerHTML  = otrosSCT1;
      break;
      case "otrosSCT2":
        resultado.innerHTML  = otrosSCT2;
      break;
    }
    let mensajePerfilE = document.getElementById('mensajeSeleccionPerfilE');
    mensajePerfilE.innerHTML = competencia + " " + grupo;
  }else {
    resultado.innerHTML = "";
    let mensajePerfilE = document.getElementById('mensajeSeleccionPerfilE');
    mensajePerfilE.innerHTML = "Por favor verifique los datos";
  }
});

btnRegisEva.addEventListener("click", (event) => {
  event.preventDefault();
  let alumnoSeleccionado = document.getElementById("alumnoEva").value;
  let descripcion = document.getElementById("descripcionEva").value;
  let titulo = document.getElementById("tituloEva").value;
  if (descripcion != "" && titulo != "" && alumnoSeleccionado !== "") {
    let eva = new EvaForm(descripcion, titulo);
    eva.setAlumno(alumnoSeleccionado);
    listaEvaForm.add(eva);
    let mensajeEvaForm = document.getElementById('mensajeInscripcionEva');
    mensajeEvaForm.innerHTML = "Eva creada satisfactoriamente";
  }else{
    let mensajeEvaForm = document.getElementById('mensajeInscripcionEva');
    mensajeEvaForm.innerHTML = "Por favor verifique los datos, Eva no creada";
  }
  
})

btnMostrarEvasdef.addEventListener("click", (event) => {
  
  event.preventDefault();
  let alumnoSeleccionado = document.getElementById('alumnoMostrar').value;
  if (alumnoSeleccionado !== "") {
    funcbtnSeleccionarEva(alumnoSeleccionado);
    let mensajeAlumnoSel = document.getElementById('mensajeSeleccionAlumnoEva');
    mensajeAlumnoSel.innerHTML = "Alumno seleccionado";  
  }else{
    let mensajeAlumnoSel = document.getElementById('mensajeSeleccionAlumnoEva');
    mensajeAlumnoSel.innerHTML = "Por favor seleccione un alumno";  
  }
  
})

function funcbtnSeleccionarEva(alumnoSelec){
  document.getElementById('agarrarEvaAlumno').style.display = 'block';
  const evaSelect = document.getElementById('EvaAMostrar');
  evaSelect.innerHTML = '<option value="">Seleccione un alumno</option>';  // Limpiar el dropdown
    let nombreApellidoSelec = alumnoSelec.split(" ");
    let nombreSelec = nombreApellidoSelec[0];
    let apellidoSelec = nombreApellidoSelec[1];
    // Agregar los alumnos a la lista del dropdown
    listaEvaForm.getEvas().forEach(eva => {
    let nombreApellidoEste = eva.getAlum().split(" ");
    let nombreEste = nombreApellidoEste[0];
    let apellidoEste = nombreApellidoEste[1];
    if(apellidoEste ==apellidoSelec && nombreEste == nombreSelec){
      const option = document.createElement('option');
      option.value = eva.toString(); // Usamos el nombre del alumno como valor
      option.textContent = eva.toString(); // Lo mismo para el texto visible
      evaSelect.appendChild(option);
    }
  });
}


btnSeleccionarEva.addEventListener("click", (event) => {
  event.preventDefault();
  let evaSel = document.getElementById('EvaAMostrar').value;
  listaEvaForm.getEvas().forEach(eva => {
    if(eva.toString() == evaSel){
      let contenidoEva = document.getElementById('contenidoEva');
      contenidoEva.innerHTML=evaSel;
    }
  });
  
})


btnMostrarPruebaDiagdef.addEventListener("click", (event) => {
  
  event.preventDefault();
  let alumnoSeleccionado = document.getElementById('alumnoMostrar2').value;
  if (alumnoSeleccionado !== "") {
    funcMostrarDiag(alumnoSeleccionado);
  }else{
    let mensajeAlumnoSel = document.getElementById('mensajeSeleccionAlumnoPruebaDiag');
    mensajeAlumnoSel.innerHTML = "Por favor seleccione un alumno";  
  }
  
})

function funcMostrarDiag(alumnoSelec){
    let nombreApellidoSelec = alumnoSelec.split(" ");
    let nombreSelec = nombreApellidoSelec[0];
    let apellidoSelec = nombreApellidoSelec[1];
    let hay = false;
    listaPruebaDiag.getPruebas().forEach(prueba => {
    let nombreApellidoEste = prueba.getAlum().split(" ");
    let nombreEste = nombreApellidoEste[0];
    let apellidoEste = nombreApellidoEste[1];
    if(apellidoEste ==apellidoSelec && nombreEste == nombreSelec){
      hay = true;
      let tituloPrueb = document.getElementById("TituloPruebaDiag");
      let descripcionPrueb = document.getElementById("DescPruebaDiag");
      let gradoAvancePrueb = document.getElementById("AvancePruebaDiag");
      tituloPrueb.innerHTML = prueba.getTitulo();
      descripcionPrueb.innerHTML=prueba.getDesc();
      gradoAvancePrueb.innerHTML=prueba.getGradoAvance();
    }
  });
  if (!hay) {
    let tituloPrueb = document.getElementById("TituloPruebaDiag");
    tituloPrueb.innerHTML ="ese alumno no tiene pruebas";
  }
}



btnRegistrarPruebDiagform.addEventListener("click", (event) => {
  event.preventDefault();
  let alumnoSeleccionado = document.getElementById('alumnoPrueba').value;
  let descripcion = document.getElementById("descripcionPrueba").value;
  let titulo = document.getElementById("tituloPrueba").value;
  let gradoAvance = document.getElementById("gradoAvance").value
  if (descripcion != "" && titulo != "" && alumnoSeleccionado !== "" && gradoAvance !== "") {
    let prueba = new pruebDiagnostic(descripcion, titulo, gradoAvance);
    prueba.setAlumno(alumnoSeleccionado);
    listaPruebaDiag.add(prueba);
    console.log(listaPruebaDiag);
    let mensajeAlumnoSel = document.getElementById('mensajeRegistrarPruebaDiag');
    mensajeAlumnoSel.innerHTML = "Prueba registrada con éxito";     

  }else{
    let mensajeAlumnoSel = document.getElementById('mensajeRegistrarPruebaDiag');
    mensajeAlumnoSel.innerHTML = "Todos los campos son obligatorios, no se registró la prueba";     
  }
  
})