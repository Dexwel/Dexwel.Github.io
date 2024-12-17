import { Card } from "./ui/card";

const skillCategories = [
  {
    category: "Basic Computing",
    skills: ["Linux", "Basic Computing", "R/Bioconductor"]
  },
  {
    category: "Bioinformatics",
    skills: ["RNA-Seq", "Mutation calling", "Mutational Signature Analysis", "RNA deconvolution"]
  },
  {
    category: "Workflow Management",
    skills: ["Bash scripting", "Nextflow & nf-core (Intermediate)", "Galaxy"]
  },
  {
    category: "Data Analysis",
    skills: ["Python", "Microsoft Excel", "Power BI"]
  },
  {
    category: "Containerization",
    skills: ["Docker", "Virtual Box", "Virtual machine"]
  }
];

export const Skills = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-primary mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-bold text-primary mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};