const CustomerLogos = () => {
  const customers = [
    { name: "FIOR", logo: "F" },
    { name: "weightwatcher", logo: "W" },
    { name: "HeadHunt", logo: "H" },
    { name: "CryoOxy", logo: "C" },
    { name: "TechCorp", logo: "T" },
  ];

  return (
    <section className="w-full py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium text-muted-foreground mb-8">
            Customers who trust wiasano:
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {customers.map((customer, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-16 h-16 bg-muted rounded-lg opacity-60 hover:opacity-100 transition-opacity"
              >
                <span className="text-2xl font-bold text-muted-foreground">
                  {customer.logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerLogos;