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
    <section className="py-8 bg-gray-50">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-bold text-primary mb-6">Research Interests</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {interests.map((interest, index) => (
            <Card key={index} className="p-4 hover:shadow-lg transition-shadow text-center">
              <p className="text-sm font-medium text-primary">{interest}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};