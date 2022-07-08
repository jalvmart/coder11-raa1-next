

import Image from 'next/image';
import img01 from '../public/images/coder11-001.jpg';
import img02 from '../public/images/coder11-002.gif';
import img03 from '../public/images/coder11-003.png';
import img04 from '../public/images/fundamentos-web.jpg';
import imgHTML from '../public/images/html.jpg';
import imgCSS from '../public/images/css.jpg';
import imgJavaScript from '../public/images/javascript.jpg';
import imgVisualStudioCode from '../public/images/visual-studio-code.jpg';
import imgGitSCM from '../public/images/git-scm.png';
import imgGitHub from '../public/images/github.png';
import imgNodejs from '../public/images/nodejs.jpg';
import imgReact from '../public/images/react.jpg';
import imgChakraUI from '../public/images/chakra-ui.jpg';

import imgNextjs from '../public/images/nextjs.jpg';
import imgNextVercel from '../public/images/Nextjs-Vercel.jpg';
import imgVercel from '../public/images/vercel.jpg';

import imgNodeBack from '../public/images/nodejsBackend.jpg';
import imgMongoDB from '../public/images/mongoDB.jpg';
import imgMariaDB from '../public/images/mariaDB.jpg';

import imgAprende from '../public/images/coder11-000.jpg';

import Head from 'next/head';
import Layout from '../components/layout';


export default function RutadeAprendizaje() {
    return (
        <Layout>
            <Head>
                <title>Ruta de Aprendizaje Code__R11</title>
            </Head>

            <div id="inicioHeader" class="w3-container w3-red w3-center" >
                <h1 class="w3-margin w3-jumbo">CODE__R11</h1>
                <p class="w3-xlarge">Aprendizaje Activo</p>
                <button class="w3-button w3-black w3-padding-large w3-large w3-margin-top">Ruta de Aprendizaje 2022-2023</button>
            </div>

            <div id="aprendizajeActivo" class="w3-row-padding w3-padding-64 w3-container">
                <div class="w3-content r11-content-right">
                    <div class="w33-twothird r11-flotar">
                        <h1>Aprendizaje Activo</h1>
                        <h5 class="w3-padding-32">¿Deseas convertirte en un profesional con experiencia en el
                            desarrollo de aplicaciones Web?
                            <strong> Modern Web Development</strong>: Aquí vas a encontrar un plan de estudios actualizado para el
                            aprendizaje del desarrollo web moderno.
                        </h5>

                        <p class="w3-text-grey">Tu CODE__R11 tiene un contenido de grado
                            profesional donde se integra la disciplina de aprendizaje y la adopción de buenas
                            prácticas tecnológicas. El sitio ideal para el fortalecimiento y desarrollo
                            de las habilidades relevantes necesarias para crear y diseñar aplicaciones web de manera profesional.</p>

                    </div>

                    <div class="w33-third w33-center r11-flotar">
                        <Image class="imgSecciones"
                            src={img01}
                            alt="Aprendizaje Activo" />
                    </div>
                </div>
            </div>

            <div id="desarrolloWeb" class="w3-row-padding w3-light-grey w3-padding-64 w3-container">
                <div class="w3-content r11-content-left">
                    <div class="w33-third w33-center r11-flotar">

                        <Image class="imgSecciones"
                            src={img02}
                            alt="Ruta de Aprendizaje del desarrollo web" />
                    </div>

                    <div class="w33-twothird r11-flotar">
                        <h1>Ruta JavaScript 2022-2023: Desarrollo y Diseño Web</h1>
                        <h5 class="w3-padding-32">Programa de aprendizaje activo para aprender y desarrollar
                            las habilidades para crear sitios y aplicaciones web. </h5>
                        <p>Recuerda esto, <em>"solo se tiene éxito
                            cuando apoyas la escalera en la pared correcta"</em>. En un mundo
                            tecnológico con cientos de herramientas y más de una docena de
                            lenguajes de programación que emplean las empresas más importantes,
                            <strong> resulta dificil decidir que tipo de tecnologías elegir.</strong></p>
                            <p>El <strong>proyecto Code R11</strong> fue ideado para resolver este dilema. Como
                            punto de partida, hemos elegido para ti un paquete de herramientas y el entorno
                            de programación de JavaScript para tu aprendizaje activo.
                        </p>

                    </div>
                    <button onclick="ocultar('retoCoder18')" class="w3-button w3-left-align w3-green">
                        Reto Coder-18
                    </button>

                    <div id="retoCoder18" class="w3-hide w3-container">
                        <h2>Desarrollador Web Profesional</h2>
                        <p class="w3-text-grey"><strong>¿Quieres convertirte en un <b>desarrollador web</b> profesional en el menor
                            tiempo
                            posible?</strong> Tu reto, si decides aceptarlo..., consiste en mantener un <b>enfoque orientado al
                                aprendizaje y prácticas constantes</b> de estos paquetes elegidos. Esta es la
                            clave para dominar el <b>desarrollo y diseño web profesional</b>.
                            Y, el principal objetivo es hacerlo en el menor tiempo posible. Esto significa
                            un compromiso real y sostenido para convertirte en un desarrollador web profesional.
                            Este reto no es difícil, pero si desafiante.</p>
                        <p class="w3-text-grey">Sin embargo, requiere dedicación y compromiso. Así que
                            tendrás que dedicarle un mínimo de 1000 horas de aprendizaje y práctica
                            para cada ciclo de 6 meses. Entonces, si logras
                            mantener este ritmo durante 18 meses, vas a conseguir alcanzar un excelente nivel
                            de comprensión, competencias y dominio para el desarrollo y diseño web.</p>
                        <p class="w3-text-grey">Esto significa que al finalizar tu primer ciclo de aprendizaje (de 6 a 8 meses)
                            podrás ofrecer tus servicios como desarrollador web frontend. Y, los ciclos siguientes
                            de aprendizaje te van a servir para escalar proyectos aun más demandantes y rentables.
                        </p>

                    </div>
                </div>
            </div>


            <div id="ecosistema" class="w3-row-padding w3-padding-64 w3-container">
                <div class="w3-content r11-content-right"  >
                    <div class="w33-twothird r11-flotar"  >
                        <h1>JavaScript, Frameworks, Herramientas e Implementación</h1>
                        <h5 class="w3-padding-32">El diseño y desarrollo de aplicaciones web profesional
                            gira en torno al lenguaje programación JavaScript. Por lo tanto, el camino o ruta de
                            aprendizaje inicial comienza con los fundamentos del Desarrollo Web, continua con
                            el desarrollo web frontend y la implantación de un marco de desarrollo.
                            Y, si escalas otro nivel, esta ruta te guiará hasta lo mejor del backend
                            para completar tu ciclo de aprendizaje.
                        </h5>



                    </div>

                    <div class="w33-third w33-center r11-flotar">

                        <Image class="imgSecciones"
                            src={img03}
                            alt="Aprendizaje Activo"
                        />
                    </div>
                </div>
            </div>

            {/* 1. Fundamentos */}
            <div id="fundamentos" class="w3-row-padding w3-light-grey w3-padding-64 w3-container">
                <div class="w3-content r11-content-left">
                    <div class="w33-third w33-center r11-flotar">
                        <div class="imgBloque1">

                            <Image src={imgHTML} alt="HTML" />
                            <Image src={imgCSS} alt="CSS" />
                            <Image src={imgJavaScript} alt="JavaScript" />

                        </div>
                        <hr />
                        <div class="imgBloque1">

                            <Image src={imgVisualStudioCode} alt="Visual Studio Code" />
                            <Image src={imgGitSCM} alt="Git-SCM" />
                            <Image src={imgGitHub} alt="Github" />

                        </div>
                    </div>

                    <div class="w33-twothird r11-flotar">
                        <h2>1. Fundamentos para el Desarrollo web</h2>

                        <ul>
                            <li><b>HTML</b>: Lenguaje de marcado para la estructura y elaboración de páginas web.</li>
                            <li><b>CSS</b>: Lenguaje de diseño gráfico para definir el Estilo y diseño de un documento HTML.</li>
                            <li><b>JavaScript</b>: Lenguaje de programación de secuencias de comandos</li>

                        </ul>

                        <ul>
                            <li><b>Visual Studio Code</b>: Editor de código fuente</li>
                            <li><b>Git</b>: Sistema de control de versiones para el registro de los cambios de un proyecto.</li>
                            <li><b>GitHub</b>: Plataforma de Desarrollo para alojar proyectos utilizando el sistema de control de
                                versiones Git.</li>
                        </ul>



                    </div>
                </div>
            </div>

            {/* <!-- 2. Desarrollo web Frontend --> */}
            <div id="frontend" class="w3-row-padding w3-padding-64 w3-container">
                <div class="w3-content r11-content-right">

                    <div class="r11-flotar">
                        <h2>2. Desarrollo Web Frontend</h2>


                        <ul>
                            <li><b>TypeScript</b>: Lenguaje de programación para desarrollar
                                aplicaciones JavaScript que añade tipos estáticos y objetos basados en clases.</li>
                            <li><b>Node.JS</b>: Entorno multiplataforma para la capa del servidor </li>
                            <li><b>React</b>: Biblioteca JavaScript para crear interfaces de usuario</li>


                            <li><b>Sass</b>: Lenguaje de hojas de estilo compilado en CSS. Ayuda a mantener bien organizadas las hojas de estilo grandes y facilita compartir el diseño dentro y entre proyectos. </li>
                            <li><b>Chakra UI</b>: Biblioteca de Componentes para React.</li>
                            <li><b>Remar.JS</b>: Procesador que analiza y compila Markdown.</li>
                            <li><b>MDX</b>: Permite usar JSX en Markdown, ideal para escribir contenido de formato largo.</li>
                            <li><b>Tailwindcss</b>: Valores predeterminados tipográficos para HTML.</li>
                            <li><b>Jest</b>: Marco de prueba para
                                la corrección de cualquier código base de JavaScript.</li>
                        </ul>

                    </div>
                    <div class="r11-flotar">

                        <div class="imgBloque1">
                            <Image src={imgNodejs} alt="Node JS" />
                            <Image src={imgReact} alt="React" />
                            <Image src={imgChakraUI} alt="Chakra UI" />
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- 3. Marco de Desarrollo web --> */}
            <div id="marcoDesarrollo" class="w3-row-padding w3-light-grey w3-padding-64 w3-container">
                <div class="w3-content r11-content-left">
                    <div class="w33-third w33-center r11-flotar">
                        <div class="imgBloque1">
                            <Image src={imgNextjs} alt="Next.JS" />
                            <Image src={imgNextVercel} alt="Next.JS-Vercel" />
                            <Image src={imgVercel} alt="Vercel" />
                        </div>
                    </div>

                    <div class="w33-twothird r11-flotar">
                        <h2>3. Marco de Desarrollo web </h2>
                        <ul>
                            <li><b>Next.JS</b>: Marco de desarrollo web para React</li>
                            <li><b>Vercel</b>: Plataforma frontend para liberar todo el potencial de Next.js.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* <!-- 4. Backend --> */}
            <div id="backend" class="w3-row-padding w3-padding-64 w3-container">
                <div class="w3-content r11-content-right">

                    <div class="w33-twothird r11-flotar">
                        <h2>4. Introducción al Desarrollo Web Backend</h2>
                        <ul>
                            <li><b>NodeJS</b>: Crear aplicaciones del lado del servidor con almacenamiento de datos en JSON nativo.</li>
                            <li><b>Mongo.DB</b>: Sistema de base de datos NoSQL.</li>
                            <li><b>MariaDB</b>: Sistema de gestión de bases de datos relacional.</li>
                        </ul>
                    </div>

                    <div class="r11-flotar">
                        <div class="imgBloque1">
                            <Image src={imgNodeBack} alt="Node JS Backend" />
                            <Image src={imgMongoDB} alt="MongoDB" />
                            <Image src={imgMariaDB} alt="MariaDB" />
                        </div>
                    </div>


                </div>
            </div>

            {/* <!-- 5.  --> */}
            <div id="marcoDesarrollo" class="w3-row-padding w3-light-grey w3-padding-64 w3-container">
                <div class="w3-content r11-content-left" >
                    <div class="r11-flotar"></div>

                    <div class="r11-flotar">
                        <h2>5. Simulador de Proyectos </h2>
                        <p>Tu objetivo y meta principal
                            es participar en la realización de proyectos digitales, creativos y funcionales,
                            adaptados a las exigencias del cliente y basados
                            en la experiencia del usuario.   </p>
                        <ul>
                            <li><b>Introducción a las etapas del Desarrollo Web</b>: Requisitos y consultoría, documentación del proyecto,
                                arquitectura y usabilidad, diseño, desarrollo front, desarrollo back, crossbrowsing y testing, entrega y
                                puesta en producción.</li>

                            <li><b>Creación de un portafolio personal</b></li>
                            <li><b>Creación de proyectos para tu portafolio</b></li>
                        </ul>

                    </div>
                </div>
            </div>

            {/* <!-- aprende y enseña --> */}
            <div class="w3-container r11-banner">
                <Image src={imgAprende} alt="Aprende y enseña" />
            </div>

            {/* <!-- a quien va dirigido --> */}
            <div id="backend" class="w3-row-padding w3-padding-64 w3-container">
                <div class="w3-content w3-content-left">
                    <div class="r11-flotar">

                    </div>
                    <div class="r11-flotar">
                        <h2>A quien va dirigido</h2>
                        <ul>
                            <li>Estudiantes y recién graduados que buscan especializarse.</li>
                            <li>Profesionales que quieren cambiar de sector.</li>
                            <li>Emprendedores o freelancer que quieren ofrecer sus propios servicios de diseño y creación de sitios y
                                aplicaciones web.</li>

                        </ul>
                    </div>
                </div>
            </div>

            {/* <!-- fin --> */}
  <div class="w3-container w3-black w3-center w3-opacity w3-padding-64">
    <h1 class="w3-margin w3-xlarge">Aprendizaje Activo</h1>
  </div>

  {/* <!-- Footer --> */}
  <footer class="w3-container w3-padding-64 w3-center w3-opacity">
    <div class="w3-xlarge w3-padding-32">
      <a href="#home"><i class="fa fa-facebook-official w3-hover-opacity"></i></a>
      <i class="fa fa-instagram w3-hover-opacity"></i>
      <i class="fa fa-snapchat w3-hover-opacity"></i>
      <i class="fa fa-pinterest-p w3-hover-opacity"></i>
      <i class="fa fa-twitter w3-hover-opacity"></i>
      <i class="fa fa-linkedin w3-hover-opacity"></i>
    </div>
    <p>Design by <a href="#home">Code R11 | 2022</a></p>
  </footer>

        </Layout >
    )
} 