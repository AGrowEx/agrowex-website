import { Card, CardContent } from "@/components/ui/card";
import foundersImage from "@/assets/founders.jpg";

const Founders = () => {
  const founders = [
    {
      name: "Dinesh Sahu",
      experience: "18+ years in digital sales & transformation across ANZ, APAC, MEA",
      background: "Ex-entrepreneur, Agripreneur"
    },
    {
      name: "Ankur Gupta", 
      experience: "18+ years in global digital product launches",
      background: "Ex-founder, angel investor"
    }
  ];

  const achievements = [
    "35+ years of digital, tech, and business experience",
    "Deep Agri ecosystem roots",
    "Operate an 8-hectare smart farm",
    "Global work across 50+ countries"
  ];

  return (
    <section className="py-20 bg-deep-earth text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
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
              className="rounded-lg shadow-glow w-full h-auto"
            />
          </div>
          <div className="space-y-8">
            {founders.map((founder, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-primary-glow mb-3">{founder.name}</h3>
                  <p className="text-white/90 mb-2">{founder.experience}</p>
                  <p className="text-white/70 text-sm">{founder.background}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-primary-glow">Together:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <p className="text-white/90">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;