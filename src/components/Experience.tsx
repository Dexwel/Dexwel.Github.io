import { Card } from "./ui/card";

const experiences = [
  {
    title: "Bioinformatics Analyst",
    company: "DataLab Analytics",
    period: "May, 2024-Present",
    description: "Develop video and content material on the introduction to bioinformatics, biological databases, and Linux for Bioinformatics which would be integrated into Datalab's learning management system."
  },
  {
    title: "Prompt Engineer Intern",
    company: "eHealth4everyone",
    period: "May, 2024-Present",
    description: "Created an IT support Chatbot integrated into Slack to swiftly resolve eHealth4everyone's internal issues. Developed prompt templates for product requirement documents and user requirement documents."
  }
];

export const Experience = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-primary mb-8">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
              <p className="text-secondary font-medium">{exp.company}</p>
              <p className="text-gray-500">{exp.period}</p>
              <p className="mt-2 text-gray-600">{exp.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};