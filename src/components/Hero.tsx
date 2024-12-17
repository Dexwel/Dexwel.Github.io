import { Card } from "./ui/card";

export const Hero = () => {
  return (
    <div className="relative h-[500px] bg-primary text-white">
      <div className="container h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold">Daniel Adediran</h1>
            <p className="text-xl opacity-90">Bioinformatics Analyst & Researcher</p>
            <div className="flex gap-4">
              <a href="mailto:adedirandanieladewoleo4@gmail.com" className="bg-secondary text-primary px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors">
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Card className="w-64 h-64 overflow-hidden">
              <img 
                src="/lovable-uploads/fb991331-765f-4d44-9fa3-1e83bb1b8491.png"
                alt="Daniel Adediran"
                className="w-full h-full object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};