import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function GBMDigitalFactory() {
  return (
    <div className="p-8 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          GBM Digital Factory
        </motion.h1>
        <p className="text-lg text-gray-600">
          Socio estratégico en soluciones tecnológicas avanzadas.
        </p>
        <Button className="rounded-2xl shadow-lg">Contáctanos</Button>
      </section>

      {/* Servicios Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Desarrollo de Software a Medida",
            desc: "Aplicaciones personalizadas adaptadas a las necesidades de su negocio."
          },
          {
            title: "Integración de Sistemas",
            desc: "Soluciones que permiten comunicación fluida entre sistemas existentes."
          },
          {
            title: "Automatización de Procesos",
            desc: "Herramientas que simplifican y agilizan operaciones diarias."
          },
          {
            title: "Consultoría en Arquitectura",
            desc: "Asesoramiento experto en arquitecturas robustas y escalables."
          },
          {
            title: "Metodologías Ágiles y DevOps",
            desc: "Implementación de prácticas ágiles y DevOps para acelerar entregas."
          }
        ].map((service, idx) => (
          <Card key={idx} className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Casos de Éxito */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Casos de Éxito</h2>
        {[
          {
            title: "The Yellow Bank (Banistmo)",
            details:
              "Migración a AWS, desarrollo de servicios de integración y CI/CD automatizados. Cliente satisfecho con resultados de producción."
          },
          {
            title: "Red Bank (BAC)",
            details:
              "Informe de viabilidad para transición SOA a microservicios y contenedores, con análisis de riesgos y recomendaciones."
          },
          {
            title: "Insurance Company",
            details:
              "Actualización de plataforma de integración, cumpliendo legislación de protección de datos y adoptando nuevas arquitecturas."
          },
          {
            title: "The Green Bank",
            details:
              "Rediseño de integraciones críticas con enfoque híbrido, utilizando IBM y Red Hat para mejorar rendimiento y escalabilidad."
          },
          {
            title: "The Blue Bank",
            details:
              "Migración de integraciones a tecnología IBM, mejorando trazabilidad y rendimiento con metodología ágil."
          }
        ].map((caseStudy, idx) => (
          <Card key={idx} className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{caseStudy.title}</h3>
              <p className="text-gray-600">{caseStudy.details}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Contacto */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Contáctenos</h2>
        <p className="text-gray-600">Estamos presentes en toda la región para atenderle.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { country: "Costa Rica", contact: "(506) 2284 3999 – ext. 3840" },
            { country: "Guatemala", contact: "(502) 2424-2222 - ext 3840" },
            { country: "Nicaragua", contact: "(505) 2255-6630 - ext 3840" },
            { country: "Miami", contact: "(1) 305 597-3998 - ext 3199" },
            { country: "República Dominicana", contact: "(809) 566-5161 - ext 3840" },
            { country: "Honduras", contact: "(504) 2232-2319 - ext 3840" },
            { country: "El Salvador", contact: "(503) 2505-9600 - ext 3840" },
            { country: "Panamá", contact: "(507) 300-4800 - ext 3840" }
          ].map((office, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md">
              <CardContent className="p-4">
                <h4 className="font-semibold text-lg">{office.country}</h4>
                <p className="text-gray-600">{office.contact}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
