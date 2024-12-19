export function LocationsSection() {
  const locations = [
    {
      region: "Western Europe",
      offices: [
        "London, United Kingdom",
        "Paris, France",
        "Berlin, Germany",
      ],
    },
    {
      region: "North American Coast",
      offices: [
        "New York, USA",
        "San Francisco, USA",
        "Vancouver, Canada",
      ],
    },
  ];

  return (
    <section className="container-padding py-16 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="heading-2 text-center mb-12">Our Locations</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location) => (
            <div key={location.region} className="text-center">
              <h3 className="heading-3 mb-4">{location.region}</h3>
              <ul className="space-y-2">
                {location.offices.map((office) => (
                  <li key={office} className="body-text">{office}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}