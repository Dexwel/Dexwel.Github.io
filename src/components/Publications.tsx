import { Card } from "./ui/card";

const publications = [
  {
    title: "Epigenetic modifications in solid tumor metastasis in people of African ancestry",
    journal: "Front Oncol. 2024",
    authors: "Oladipo EK, Olufemi SE, Adediran DA, et al.",
    doi: "10.3389/fonc.2024.1325614"
  },
  {
    title: "Africa (COVID-19) Vaccine Technology Transfer: Where Are We?",
    journal: "Life 2023",
    authors: "Oladipo EK, Olufemi SE, Ojo TO, Adediran DA, et al.",
    doi: "10.3390/life13091886"
  }
];

export const Publications = () => {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-primary mb-8">Selected Publications</h2>
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-lg font-bold text-primary">{pub.title}</h3>
              <p className="text-gray-600">{pub.authors}</p>
              <p className="text-gray-500">{pub.journal}</p>
              <p className="text-secondary">DOI: {pub.doi}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};