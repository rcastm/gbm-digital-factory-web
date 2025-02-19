import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
<img src="/assets/gbm-logo.png" alt="GBM Logo" />;

export default function GBMDigitalFactory() {
  return (
    <div className="p-8 space-y-20 bg-gradient-to-r from-blue-500 to-indigo-700 text-white">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-16 bg-opacity-90 rounded-xl shadow-lg backdrop-blur-md">
        <motion.h1
          className="text-6xl font-extrabold drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          GBM Digital Factory
        </motion.h1>
        <p className="text-xl max-w-2xl mx-auto">
          Líder en integración y modernización de plataformas tecnológicas.
        </p>
        <Button className="px-8 py-4 text-lg rounded-full shadow-lg bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition-transform transform hover:scale-105">
          Contáctanos
        </Button>
        <img src="/assets/gbm-logo.png" alt="GBM Logo" />
      </section>

      {/* Casos de Éxito */}
      <section className="text-center space-y-10">
        <h2 className="text-5xl font-bold text-yellow-400 drop-shadow-lg">
          Casos de Éxito
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "The Yellow Bank (Banistmo)",
              details:
                "Migración de servicios de IBM Integration Bus v10 a AWS e implementación de CI/CD automatizado, logrando satisfacción del cliente y puesta en producción exitosa.",
            },
            {
              title: "Red Bank (BAC)",
              details:
                "Evaluación de la transición de SOA a microservicios y contenedores, proporcionando un informe de viabilidad y análisis de riesgos.",
            },
            {
              title: "Insurance Company",
              details:
                "Modernización de plataforma de integración basada en IBM App Connect, actualizando la tecnología y diseñando una arquitectura escalable.",
            },
            {
              title: "The Green Bank",
              details:
                "Rediseño de integración con un enfoque híbrido, mejorando el rendimiento mediante tecnologías IBM y Red Hat.",
            },
            {
              title: "The Blue Bank",
              details:
                "Migración de una plataforma obsoleta a IBM, optimizando la trazabilidad y mejorando el rendimiento con metodología ágil.",
            },
          ].map((caseStudy, idx) => (
            <Card
              key={idx}
              className="rounded-xl shadow-lg bg-white bg-opacity-80 backdrop-blur-md text-gray-900 hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-indigo-700">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-700">{caseStudy.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Servicios */}
      <section className="text-center space-y-10">
        <h2 className="text-5xl font-bold text-yellow-400 drop-shadow-lg">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Integración Ágil",
              desc: "Migración de arquitecturas tradicionales a microservicios, con integración DevOps y escalabilidad independiente.",
            },
            {
              title: "Desarrollo Cloud Native",
              desc: "Creación de aplicaciones empresariales en la nube con microservicios y contenerización para mayor flexibilidad.",
            },
            {
              title: "Integración Empresarial",
              desc: "Conectamos aplicaciones y datos en tiempo real utilizando IBM API Connect y CloudPak for Integration.",
            },
            {
              title: "Migración Inteligente",
              desc: "Migración de aplicaciones críticas a plataformas modernas, optimizando costos y escalabilidad.",
            },
            {
              title: "Pruebas como Servicio (TaaS)",
              desc: "Automatización de pruebas con IA, reduciendo costos y tiempos de desarrollo de software.",
            },
          ].map((service, idx) => (
            <Card
              key={idx}
              className="rounded-xl shadow-lg bg-white bg-opacity-80 backdrop-blur-md text-gray-900 hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-indigo-700">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Oficinas en la Región */}
      <section className="text-center space-y-10">
        <h2 className="text-4xl font-bold text-blue-700">Nuestras Oficinas</h2>
        <p className="text-lg text-gray-700">
          Presencia en toda la región para atenderte mejor.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { country: "Costa Rica", contact: "(506) 2284-3999 – ext. 3840" },
            { country: "Guatemala", contact: "(502) 2424-2222 - ext 3840" },
            { country: "Nicaragua", contact: "(505) 2255-6630 - ext 3840" },
            { country: "Miami", contact: "(1) 305 597-3998 - ext 3199" },
            {
              country: "República Dominicana",
              contact: "(809) 566-5161 - ext 3840",
            },
            { country: "Honduras", contact: "(504) 2232-2319 - ext 3840" },
            { country: "El Salvador", contact: "(503) 2505-9600 - ext 3840" },
            { country: "Panamá", contact: "(507) 300-4800 - ext 3840" },
          ].map((office, idx) => (
            <Card
              key={idx}
              className="rounded-xl shadow-lg bg-gray-100 text-gray-900 hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-700">
                  {office.country}
                </h3>
                <p className="text-gray-700">{office.contact}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
