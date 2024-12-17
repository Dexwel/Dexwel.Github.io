import { Card } from "./ui/card";

const interests = [
  "Cancer Genomics",
  "Single Cell Multiomics",
  "CRISPR Technology",
  "Bioinformatics",
  "Immune Checkpoint Inhibitors",
  "CAR-T Cell Therapy"
];

export const ResearchInterests = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-primary mb-8">Research Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {interests.map((interest, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <p className="text-lg font-medium text-primary">{interest}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};