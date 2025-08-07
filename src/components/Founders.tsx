import { Card, CardContent } from "@/components/ui/card";
import foundersImage from "@/assets/founders.jpg";

const Founders = () => {
  const founders = [
    {
      name: "Dinesh Sahu",
      role: "Business Partner",
      experience: "18+ years in digital sales & transformation across ANZ, APAC, MEA",
      background: "Ex-entrepreneur, Agripreneur"
    },
    {
      name: "Ankur Gupta", 
      role: "Business Partner",
      experience: "18+ years in global digital product launches",
      background: "Ex-founder, angel investor"
    }
  ];

  const achievements = [
    "35+ years of digital, tech, and business experience",
    "Deep Agri ecosystem roots",
    "Operate an 8-hectare smart farm",
    "Global work across 10+ countries and available worldwide"
  ];

  return (
    <section className="py-24 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            The Founders
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experienced leaders driving agricultural innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={foundersImage} 
              alt="AGX Global Founders"
              className="rounded-2xl shadow-elevated w-full h-auto"
            />
          </div>
          <div className="space-y-8">
            {founders.map((founder, index) => (
              <Card key={index} className="bg-white/15 backdrop-blur-md border-white/20 shadow-elevated">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-brand-secondary mb-2">{founder.name}</h3>
                  <p className="text-brand-secondary/80 font-semibold mb-4">{founder.role}</p>
                  <p className="text-white/90 mb-3 text-lg">{founder.experience}</p>
                  <p className="text-white/70 font-medium">{founder.background}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-10 text-brand-secondary text-center">Together:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/15 backdrop-blur-md rounded-xl p-8 shadow-elevated">
                <p className="text-white/90 text-center font-medium">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;