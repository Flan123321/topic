import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const PillarPage = () => {
    return (
        <>
            <SEO
                title="Gestión Inmobiliaria Colaborativa: El Nuevo Modelo"
                description="Descubre cómo la Gestión Inmobiliaria Colaborativa acelera la venta de propiedades en Chile mediante una red de colaboradores y comisiones compartidas."
                href="/gestion-inmobiliaria-colaborativa"
                type="article"
            />
            <div className="pillar-page-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'system-ui, sans-serif', lineHeight: '1.6' }}>

                <header style={{ marginBottom: '40px', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#1a202c', marginBottom: '1rem' }}>
                        Gestión Inmobiliaria Colaborativa: El Nuevo Modelo para Vender y Generar Ingresos en Bienes Raíces
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: '#4a5568' }}>
                        Olvida el corretaje tradicional. Descubre el poder de una red conectada.
                    </p>
                </header>

                <section style={{ backgroundColor: '#f7fafc', padding: '30px', borderRadius: '12px', marginBottom: '40px', border: '1px solid #e2e8f0' }}>
                    <h2 style={{ color: '#2d3748', marginTop: 0 }}>¿Qué vas a encontrar aquí?</h2>
                    <p>Si eres dueño de una propiedad y te urge vender, o si buscas generar ingresos serios en el mundo inmobiliario sin ser un "vendedor puerta a puerta", este artículo cambiará tu perspectiva.</p>
                    <div style={{ display: 'flex', gap: '20px', marginTop: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button style={{ backgroundColor: '#48bb78', color: 'white', padding: '15px 30px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold' }}>
                            Quiero Vender mi Propiedad
                        </button>
                        <button style={{ backgroundColor: '#4299e1', color: 'white', padding: '15px 30px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold' }}>
                            Quiero Unirme al Equipo
                        </button>
                    </div>
                </section>

                <article>
                    <h2 style={{ fontSize: '2rem', color: '#2c5282', borderBottom: '2px solid #ed8936', paddingBottom: '10px' }}>
                        ¿Qué es la Gestión Inmobiliaria Colaborativa?
                    </h2>
                    <p>
                        En Chile, el modelo tradicional de corretaje ha funcionado igual durante décadas: entregas tu casa a un corredor, él pone un letrero, publica en un par de portales (Yapo, Portalinmobiliario) y se sienta a esperar. Si tienes suerte, alguien llama.
                    </p>
                    <p>
                        La <strong>Gestión Inmobiliaria Colaborativa</strong> rompe este esquema pasivo. No es una estafa piramidal ni un "sistema mágico". Es una red estructurada de profesionales y colaboradores independientes que trabajan bajo un mismo objetivo: <strong>cerrar la venta.</strong>
                    </p>
                    <p>
                        Imagina que en lugar de tener a <em>un</em> corredor intentando vender tu terreno en el sur o tu departamento en Santiago, tienes a una red de 50, 100 o más personas ofreciéndolo activamente a sus propias redes de contacto. La comisión no se la queda uno solo; se comparte. Esto incentiva que todos <em>quieran</em> vender tu propiedad, porque todos ganan.
                    </p>

                    <h2 style={{ fontSize: '2rem', color: '#2c5282', marginTop: '40px', borderBottom: '2px solid #ed8936', paddingBottom: '10px' }}>
                        Ventajas para el Propietario: ¿Por qué vender con nosotros?
                    </h2>
                    <p>
                        Como dueño, tu mayor enemigo es el tiempo. Una propiedad estancada en el mercado se "quema"; los compradores asumen que tiene algo malo.
                    </p>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '15px', paddingLeft: '20px', borderLeft: '4px solid #48bb78' }}>
                            <strong>Velocidad x10:</strong> Al masificar la fuerza de venta, llegamos al comprador ideal mucho antes. No dependemos de que alguien "encuentre" tu aviso; nosotros salimos a buscar al comprador.
                        </li>
                        <li style={{ marginBottom: '15px', paddingLeft: '20px', borderLeft: '4px solid #48bb78' }}>
                            <strong>Mayor Exposición Real:</strong> Más allá de los portales clásicos, tu propiedad circula en grupos de inversión, redes de WhatsApp de corredores y campañas de marketing digital segmentadas.
                        </li>
                        <li style={{ marginBottom: '15px', paddingLeft: '20px', borderLeft: '4px solid #48bb78' }}>
                            <strong>Gestión Integral y Transparente:</strong> Nos encargamos de filtrar a los curiosos de los compradores reales. Te ahorramos el desgaste emocional de mostrar tu casa a quien no tiene el crédito pre-aprobado.
                        </li>
                    </ul>
                    <p>
                        <em>¿Te preocupa la exclusividad?</em> <Link to="/blog/peligro-exclusividad-inmobiliaria" style={{ color: '#3182ce' }}>Lee nuestro artículo sobre por qué la exclusividad con un solo corredor puede frenar tu venta.</Link>
                    </p>

                    <h2 style={{ fontSize: '2rem', color: '#2c5282', marginTop: '40px', borderBottom: '2px solid #ed8936', paddingBottom: '10px' }}>
                        Ventajas para el Afiliado: Ingresos Reales y Éticos
                    </h2>
                    <p>
                        Aquí es donde entra la innovación. Quizás has escuchado sobre el corretaje, pero te frena la idea de hacer cursos eternos o la burocracia. O quizás ya eres corredor y te sientes solo contra el mercado.
                    </p>
                    <h3>El Poder de Compartir Comisión</h3>
                    <p>
                        En nuestro modelo, democratizamos el acceso al negocio inmobiliario. Si tú nos traes un comprador (o una propiedad), eres parte del negocio.
                    </p>
                    <p>
                        <strong>¿Es serio este ingreso?</strong> Absolutamente. Hablamos de comisiones en UF. Si una propiedad de 5.000 UF se vende, la comisión total (usualmente 2% + IVA por lado) es significativa. Al ser un colaborador, tú recibes una parte justa y acordada previamente por contrato, solo por conectar las puntas.
                    </p>
                    <p>
                        Para profundidad en esto, revisa <Link to="/blog/ingresos-extra" style={{ color: '#3182ce' }}>cómo generar ingresos extra en el sector inmobiliario</Link> y <Link to="/blog/corredor-vs-red" style={{ color: '#3182ce' }}>diferencias entre corredor tradicional y red de colaboradores</Link>.
                    </p>

                    <h2 style={{ fontSize: '2rem', color: '#2c5282', marginTop: '40px', borderBottom: '2px solid #ed8936', paddingBottom: '10px' }}>
                        Marco Legal y Confianza: Hablemos Claro
                    </h2>
                    <p>
                        Sabemos que el rubro inmobiliario en Chile a veces sufre de informalidad. Por eso, nuestra base es la legalidad absoluta.
                    </p>
                    <p>
                        No trabajamos "de palabra". Todo se respalda mediante un <strong>Mandato Civil</strong> y contratos de prestación de servicios honorarios. Esto protege tanto al dueño de la propiedad (asegurando que quien vende está autorizado) como al colaborador (asegurando el pago de su gestión).
                    </p>
                    <p>
                        ¿Tienes dudas sobre la normativa? Es normal. Hemos preparado un análisis exhaustivo: <Link to="/blog/legalidad-comisiones-chile" style={{ color: '#3182ce' }}>¿Es legal compartir comisiones inmobiliarias en Chile?</Link>. Allí explicamos cómo operamos bajo el Código Civil y la normativa vigente, diferenciándonos del ejercicio ilegal de la profesión.
                    </p>
                    <p>
                        Además, toda la documentación de cierre pasa por Notaría y se inscribe debidamente en el <strong>Conservador de Bienes Raíces</strong> respectivo. Cero riesgos.
                    </p>

                    <h2 style={{ fontSize: '2rem', color: '#2c5282', marginTop: '40px', borderBottom: '2px solid #ed8936', paddingBottom: '10px' }}>
                        Tecnología al Servicio de la Venta
                    </h2>
                    <p>
                        Finalmente, no somos solo "vendedores". Somos una empresa <strong>PropTech</strong>. Usamos datos, no intuición. Analizamos el mercado, tasamos con herramientas digitales y monitoreamos cada lead.
                    </p>
                    <p>
                        Descubre nuestra visión futurista en <Link to="/blog/tecnologia-venta-propiedades" style={{ color: '#3182ce' }}>Digitalización de la venta: Uso de Data y RRSS</Link>.
                    </p>

                </article>

                <section style={{ backgroundColor: '#2d3748', color: 'white', padding: '40px', borderRadius: '12px', marginTop: '60px', textAlign: 'center' }}>
                    <h2 style={{ color: 'white', borderBottom: 'none' }}>¿Listo para el siguiente paso?</h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                        Ya sea que tengas una propiedad paralizada o quieras entrar al negocio inmobiliario más dinámico de Chile.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button style={{ backgroundColor: '#48bb78', color: 'white', padding: '15px 30px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1.2rem', fontWeight: 'bold' }}>
                            Vender mi Propiedad Ahora
                        </button>
                        <button style={{ backgroundColor: '#4299e1', color: 'white', padding: '15px 30px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1.2rem', fontWeight: 'bold' }}>
                            Unirme a la Red de Socios
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
};

export default PillarPage;
