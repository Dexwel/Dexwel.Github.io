import { Card } from "./ui/card";

export const Education = () => {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-primary mb-8">Education</h2>
        <Card className="p-6">
          <h3 className="text-xl font-bold text-primary">B. Tech Biochemistry</h3>
          <p className="text-gray-600">Ladoke Akintola University of Technology Ogbomoso, Nigeria</p>
          <p className="text-gray-500">Aug, 2018 – May, 2023</p>
          <p className="mt-2 font-medium">CGPA: 4.36/5.0</p>
          <div className="mt-4">
            <p className="font-medium">Relevant coursework:</p>
            <p className="text-gray-600">Molecular Genetics, Forensic Biochemistry, Endocrinology, Neurobiochemistry</p>
          </div>
          <div className="mt-4">
            <p className="font-medium">Academic project:</p>
            <p className="text-gray-600">Assessment of Zingiber officinales on Tramadol-Induced Nephrotoxicity in Rat</p>
          </div>
        </Card>
      </div>
    </section>
  );
};