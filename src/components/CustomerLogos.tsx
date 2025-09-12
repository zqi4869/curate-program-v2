import fiorLogo from "@/assets/logos/fior.png";
import weichbergerLogo from "@/assets/logos/weichberger.png";
import heublumeLogo from "@/assets/logos/heublume.png";
import cryooxyLogo from "@/assets/logos/cryooxy.png";
import tmdGmbhLogo from "@/assets/logos/tmd-gmbh.png";
import stoakWearLogo from "@/assets/logos/stoak-wear.png";

const CustomerLogos = () => {
  const customers = [
    { name: "FIOR", logo: fiorLogo },
    { name: "weichberger", logo: weichbergerLogo },
    { name: "Heublume", logo: heublumeLogo },
    { name: "CryoOxy", logo: cryooxyLogo },
    { name: "TMD GmbH", logo: tmdGmbhLogo },
    { name: "STOAK WEAR", logo: stoakWearLogo },
  ];

  return (
    <section className="w-full py-16 bg-background" aria-labelledby="trusted-by">
      <div className="max-w-6xl mx-auto px-4">
        <h2 id="trusted-by" className="text-2xl md:text-3xl font-semibold text-center mt-10 mb-6 text-foreground">
          Trusted by 40+ businesses and marketers
        </h2>
        
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {customers.map((customer, index) => (
            <li
              key={index}
              className="h-14 sm:h-12 flex items-center justify-center"
            >
              <img
                src={customer.logo}
                alt={customer.name}
                className="max-h-full w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CustomerLogos;