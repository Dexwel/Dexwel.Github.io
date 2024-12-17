import { Card } from "./ui/card";

const experiences = [
  {
    title: "Scholar | AI-BOND",
    period: "Dec, 2023- April, 2024",
    points: [
      "Enhanced high-performance computing skills by utilizing Texas Advanced Computing Center (Lonestar and Rancher cluster) via SSH connections",
      "Developed proficiency in Python, R, and SAS programming languages",
      "Collaborated on statistical analysis projects with Framingham Heart Study data",
      "Expanded knowledge of neurodegenerative diseases",
      "Deepened understanding of genetic epidemiology through GWAS and Mendelian Randomization"
    ]
  },
  {
    title: "Research and Development Assistant II | Helix Biogen Institute",
    period: "Jan, 2022-Dec, 2023",
    points: [
      "Contributed to peptide-based Diagnostic Kit development for Treponema species detection",
      "Led teams in computational vaccine design for Nipah virus and COVID-19",
      "Supervised research interns and guided project development efforts"
    ]
  },
  {
    title: "Research Intern | Helix Biogen Institute",
    period: "Aug-Dec, 2021",
    points: [
      "Developed expertise in bioinformatics methodologies",
      "Demonstrated proficiency in classical bioinformatics analyses"
    ]
  }
];

export const ResearchExperience = () => {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-primary mb-8">Research Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
              <p className="text-gray-500">{exp.period}</p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="text-gray-600">{point}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};