export interface Product {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  features: string[];
  applications: string[];
  category: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
}

export const products: Product[] = [
  {
    slug: "ointment-manufacturing-plant",
    name: "Ointment Manufacturing Plant",
    shortDescription:
      "GMP-certified ointment and cream manufacturing plants with vacuum emulsification and jacketed mixing vessels.",
    description:
      "Microtech Engineering manufactures state-of-the-art Ointment and Cream Manufacturing Plants engineered for pharmaceutical, cosmetic, and personal care industries requiring high-quality topical product formulations. Our plants integrate advanced vacuum emulsification technology with high-shear homogenization to create stable, homogeneous ointments, creams, lotions, gels, and paste formulations with consistent particle size distribution and superior texture. The core of the system is the vacuum homogenizer mixer featuring a jacketed manufacturing vessel fabricated from SS 316L stainless steel with mirror-polished interiors, equipped with a multi-blade anchor agitator with PTFE scrapers for effective heat transfer and product discharge, and a high-shear rotor-stator homogenizer operating at speeds up to 3000 RPM for particle size reduction and emulsion formation. The vacuum system evacuates air from the product during processing, preventing oxidation and aeration that can compromise product stability and appearance. Separate water phase and oil phase preparation vessels with heating and stirring capabilities allow proper dissolution and temperature conditioning of ingredients before they are combined in the main manufacturing vessel. The jacketed design provides precise temperature control through circulation of heating or cooling media, essential for thermally sensitive active ingredients and for achieving proper emulsion formation temperatures. Our ointment plants are available in capacities from 50 liters for R&D and small-scale production to 5,000 liters for full manufacturing operations, with custom sizes available for specific requirements. The system includes sanitary transfer pumps (lobe or peristaltic type) for gentle product transfer without shear damage, inline filters for particle removal if required, and product holding tanks for batch storage before filling operations. The entire system is designed for automated CIP (Clean-in-Place) operation with spray ball cleaning of all vessels and rotary spray heads for pipeline cleaning, validated to remove product residues and ensure batch-to-batch segregation. All control valves, sensors, and instrumentation are pharmaceutical grade with sanitary design and compliance to cGMP requirements. The plant can be supplied with PLC automation and HMI interface for automated recipe execution, parameter control, and batch record generation, supporting regulatory compliance and quality assurance programs.",
    features: [
      "Vacuum emulsifier with high-shear homogenizer",
      "SS 316L jacketed manufacturing vessel",
      "Water phase and oil phase preparation tanks",
      "Variable speed anchor + scraper agitator",
      "Vacuum system for deaeration",
      "Transfer pump with lobe or peristaltic option",
      "Temperature control system (heating & cooling)",
      "Capacities: 50L to 5,000L",
      "cGMP compliant design with full documentation",
    ],
    applications: [
      "Pharmaceutical ointments and topical creams",
      "Cosmetic creams, lotions, and gels",
      "Dermatological preparations",
      "Veterinary ointments",
      "Nutraceutical topical products",
    ],
    category: "Pharmaceutical Equipment",
    image: "/images/OINTMENT.png",
    metaTitle:
      "Ointment Manufacturing Plant Manufacturer Mumbai | Microtech Engineering",
    metaDescription:
      "GMP-certified ointment and cream manufacturing plants with vacuum emulsification by Microtech Engineering, Mumbai. Ideal for pharma and cosmetic industries.",
  },
  {
    slug: "liquid-oral-processing-plant",
    name: "Liquid Oral Syrup Manufacturing Plant",
    shortDescription:
      "Turnkey liquid oral processing plants for syrup, suspension, and emulsion manufacturing in pharmaceutical industries.",
    description:
      "Microtech Engineering specializes in designing and manufacturing complete turnkey Liquid Oral Processing Plants for pharmaceutical and nutraceutical companies producing syrups, suspensions, elixirs, emulsions, and oral solutions. Our integrated plants encompass all process stages from raw material preparation to finished product ready for filling operations. The system includes sugar syrup dissolving vessels with steam jackets and high-speed agitators for rapid dissolution, manufacturing vessels with variable-speed anchor or propeller agitators for uniform mixing, in-line homogenizers for creating stable emulsions and suspensions, pharmaceutical-grade transfer pumps for hygienic product movement, multi-stage filtration systems for particle removal and clarification, and storage tanks for batch holding before filling operations. Each component is manufactured from SS 316L stainless steel with mirror-polished interiors (Ra ≤ 0.4 µm) to meet cGMP standards and ensure easy cleaning validation. The plant design incorporates CIP (Clean-in-Place) and SIP (Steam-in-Place) systems with automated spray ball cleaning for all vessels and pipeline networks, eliminating manual cleaning and reducing contamination risks. Our liquid oral processing plants are available in batch capacities ranging from 500 liters to 20,000 liters per batch, with modular designs allowing future capacity expansion. The process is controlled through a PLC-based automation system with color HMI touchscreen panels providing operators with real-time visibility into parameters such as temperature, agitation speed, pressure, level, and flow rates. Recipe management functionality allows storage and recall of multiple product formulations with automatic parameter settings, ensuring consistent batch-to-batch quality and reducing operator errors. All critical process parameters are logged automatically for batch record documentation and regulatory compliance. The heating system can be configured for steam, electric, or hot water circulation depending on site utility availability and product requirements. Safety interlocks prevent equipment operation outside specified parameters, protecting both product quality and operator safety. We provide complete design documentation including P&ID (Piping and Instrumentation Diagrams), equipment layout drawings, electrical schematics, and 3D installation drawings. Installation, commissioning, operator training, and validation support services are included to ensure smooth project execution and regulatory approval.",
    features: [
      "Capacity range: 500L to 20,000L per batch",
      "Sugar syrup dissolving vessel with steam jacket",
      "Manufacturing vessel with anchor / propeller agitator",
      "In-line homogenizer for emulsions",
      "Transfer pumps (sanitary diaphragm / centrifugal)",
      "Cartridge filtration with housing",
      "Dosage and filling preparation tanks",
      "CIP / SIP system integration",
      "PLC automation with HMI panel",
    ],
    applications: [
      "Cough syrups and suspensions",
      "Vitamin and supplement syrups",
      "Antacid suspensions",
      "Paediatric formulations",
      "Nutraceutical liquid products",
    ],
    category: "Pharmaceutical Equipment",
    image: "/images/LIQUID ORAL PLANT ENCLOSED.png",
    metaTitle:
      "Liquid Oral Syrup Manufacturing Plant Manufacturer | Microtech Engineering",
    metaDescription:
      "Turnkey liquid oral processing plants for syrup and suspension manufacturing by Microtech Engineering, Mumbai. cGMP compliant with PLC automation.",
  },
  {
    slug: "pw-wfi-storage-tanks",
    name: "PW & WFI Storage Tanks",
    shortDescription:
      "Pharmaceutical-grade Purified Water (PW) and Water for Injection (WFI) storage tanks with electropolished interiors.",
    description:
      "Our Purified Water (PW) and Water for Injection (WFI) Storage Tanks are purpose-engineered for the pharmaceutical, biotechnology, and healthcare industries where water purity is critical for product safety and regulatory compliance. Manufactured exclusively from SS 316L stainless steel with electropolished interior finishes achieving surface roughness of Ra ≤ 0.2 µm or better, these tanks prevent bacterial adhesion and biofilm formation, ensuring the stored water maintains USP, EP, and IP pharmacopoeia standards throughout its shelf life. The electropolishing process removes surface contaminants and creates a passive chromium oxide layer that provides superior corrosion resistance and facilitates cleaning validation. All product contact welds are performed using orbital TIG welding technology to eliminate crevices, gaps, and heat-affected zones that could harbor bacteria or compromise water purity. Our PW and WFI tanks are designed with sloped bottoms for complete drainage, eliminating dead legs and stagnant zones that could become contamination sources. Each tank is equipped with a rotary spray ball cleaning system providing 360-degree coverage for automated CIP (Clean-in-Place) operations, and SIP (Steam-in-Place) capability for thermal sanitization at temperatures up to 130°C. The tanks feature jacketed construction with thermal insulation to maintain water temperature within specified ranges, preventing microbial growth and ensuring consistent water quality. Standard instrumentation includes PT100 temperature sensors, pressure gauges, level transmitters, and conductivity probes for continuous monitoring and data logging to support batch documentation and regulatory audits. All tanks are supplied with 0.2-micron hydrophobic vent filters to prevent airborne contamination while allowing pressure equalization during filling and dispensing operations. The tanks comply with cGMP requirements, FDA 21 CFR Part 11 for electronic records, ASME BPE standards for bioprocessing equipment, and ISPE baseline guides for pharmaceutical water systems. We provide complete documentation packages including FAT (Factory Acceptance Test) protocols, material certifications traceable to mill test certificates, welding procedures, surface finish reports, and IQ/OQ support for validation activities.",
    features: [
      "Material: SS 316L (cGMP grade)",
      "Electropolished interior finish (Ra ≤ 0.2 µm)",
      "Orbital welding for all product contact welds",
      "Integrated CIP/SIP systems",
      "Spray ball cleaning system",
      "0.2 micron hydrophobic vent filter",
      "Slope bottom for complete drainage",
      "Jacketed design for temperature maintenance",
      "Full compliance with cGMP, USP, EP standards",
    ],
    applications: [
      "Pharmaceutical water storage",
      "Biotech and biopharmaceutical industry",
      "Hospital and healthcare facilities",
      "Injectable formulation plants",
      "API manufacturing units",
    ],
    category: "Pharmaceutical Equipment",
    image: "/images/PW WFI STORAGE TANK.png",
    metaTitle:
      "PW & WFI Storage Tanks Manufacturer | Microtech Engineering Mumbai",
    metaDescription:
      "cGMP-compliant PW and WFI storage tanks from Microtech Engineering, Mumbai. SS 316L electropolished tanks for pharmaceutical water storage.",
  },
  {
    slug: "stainless-steel-air-tray-dryer",
    name: "Stainless Steel Air Tray Dryer",
    shortDescription:
      "Robust SS air tray dryers for uniform drying of granules, powders, and pharmaceutical materials with temperature control.",
    description:
      "Microtech Engineering manufactures industrial Stainless Steel Air Tray Dryers designed for controlled drying and dehydration of pharmaceutical granules, powders, chemicals, herbs, food products, and other heat-sensitive materials requiring precise temperature and humidity control. Our tray dryers utilize forced hot air circulation technology to achieve uniform drying across all trays, ensuring consistent moisture content and product quality throughout the batch. The drying chamber is constructed from heavy-duty stainless steel (SS 304 or SS 316 depending on product contact requirements) with reinforced insulation to minimize heat loss and improve energy efficiency. Hot air is generated using electric heaters, steam coils, or thermic fluid heat exchangers depending on site requirements and temperature specifications, with capacities ranging from 3 kW to 50 kW for electric models. The circulation fan is mounted on a heavy-duty motor with belt drive transmission, creating positive airflow across all tray levels to ensure even heat distribution without hot spots or cold zones. Digital temperature controllers with PT100 RTD sensors provide accurate temperature regulation from ambient to 120°C with a precision of ± 2°C, essential for thermally sensitive pharmaceutical products and biological materials. The dryer accommodates multiple stainless steel trays (24 to 192 trays depending on model size) with perforated or solid construction based on product characteristics, arranged on slide-in trolleys for easy loading and unloading, reducing operator effort and cycle times. For cleanroom and aseptic processing applications, the dryer can be fitted with HEPA filtration on air inlet and exhaust to maintain classified air quality and prevent cross-contamination. The unit features insulated doors with silicone gaskets for effective sealing, pressure relief vents for safety, and observation windows for visual monitoring of drying progress. Temperature and time are continuously displayed and can be connected to data loggers or SCADA systems for GMP documentation. Our air tray dryers comply with cGMP standards with all product contact surfaces electropolished or passivated, fully documented material certifications, and validation support for DQ, IQ, OQ qualification protocols. We offer both standard models and custom-engineered systems to match specific throughput requirements, floor space constraints, and product characteristics.",
    features: [
      "Material: SS 304 / SS 316 contact parts",
      "Capacity: 24 to 192 trays",
      "Uniform air circulation with motorized fan",
      "Digital temperature controller (up to 120°C)",
      "Powder-coated outer body or full SS",
      "GI / SS ducting with insulation",
      "HEPA filter provision for clean-room use",
      "Steam, electric, or thermic oil heating option",
      "Easy loading and unloading trolley",
    ],
    applications: [
      "Pharmaceutical granule drying",
      "Chemical and dye industry",
      "Food processing (spices, herbs, vegetables)",
      "Ayurvedic and herbal product manufacturing",
      "Laboratory and research applications",
    ],
    category: "Drying Equipment",
    image: "/images/air tray dryer.png",
    metaTitle:
      "Stainless Steel Air Tray Dryer Manufacturer | Microtech Engineering",
    metaDescription:
      "Industrial SS air tray dryers by Microtech Engineering, Mumbai. Available 24–192 tray capacity with electric/steam heating for pharmaceutical and chemical use.",
  },
  {
    slug: "stainless-steel-octagonal-blender",
    name: "Stainless Steel Octagonal Blender",
    shortDescription:
      "Efficient SS octagonal blenders for homogeneous dry powder and granule blending in pharmaceutical manufacturing.",
    description:
      "The Stainless Steel Octagonal Blender manufactured by Microtech Engineering represents the gold standard in pharmaceutical powder and granule blending technology, designed to achieve homogeneous mixing with minimal segregation and maximum efficiency. The unique octagonal shell geometry creates a tumbling action that generates both radial and axial material movement, ensuring thorough blending without the need for internal baffles or agitators that could create dead zones or cause product degradation. Our octagonal blenders are fabricated from high-grade stainless steel with SS 316L for all product contact surfaces and SS 304 for external housings and structural components. Interior surfaces are mirror-polished to Ra ≤ 0.4 µm, preventing product adherence and facilitating complete discharge and easy cleaning, critical for GMP compliance in pharmaceutical manufacturing. The blender operates on a horizontal axis rotation principle driven by variable frequency drives (VFD) allowing precise speed control from 5 to 20 RPM, optimized for different product densities, particle sizes, and blending requirements. The loading door features a butterfly clamp closure with FDA-approved silicon or neoprene gaskets ensuring dust-tight sealing during operation, preventing product loss and operator exposure to potent compounds. Discharge is accomplished through a butterfly valve or pneumatic PIG valve fitted at the shell center, enabling complete product recovery with minimal residue. For cohesive or free-flowing powders requiring intensification, the blender can be fitted with internal baffles or intensifier bars to promote particle breakup and improve blend uniformity. The octagonal blender is available in a wide range of capacities from 30 liters for laboratory and pilot-scale applications to 3,000 liters for full production operations, with working volumes typically 40-60% of total geometric capacity for optimal blending performance. The entire assembly is mounted on a heavy-duty MS frame with anti-vibration mounts, ensuring stable operation and long mechanical life. For dust-free loading operations, the blender can be integrated with IPC bin charging systems where mobile bins are directly connected to the blender inlet, eliminating manual handling and reducing contamination risks. Automation options include touch-screen HMI panels for recipe management, automatic cycle timers, interlock safety systems, and integration with plant SCADA for production monitoring and batch record documentation. All blenders are supplied with comprehensive documentation including material certificates, FAT protocols, electrical schematics, operating manuals, and IQ/OQ support for validation activities.",
    features: [
      "Material: SS 316L (inner) / SS 304 (outer)",
      "Capacity: 30L to 3,000L",
      "Octagonal shape for superior blending efficiency",
      "Variable speed drive with inverter",
      "Neoprene / silicon gasket door with butterfly clamp",
      "Charge / discharge valve (butterfly / PIG valve)",
      "Baffles available for cohesive powders",
      "Dust-free loading with IPC bin option",
      "Mirror polished interior (Ra ≤ 0.4 µm)",
    ],
    applications: [
      "Pharmaceutical tablet and capsule manufacturing",
      "Nutraceutical powder blending",
      "Cosmetic powder mixing",
      "Chemical bulk blending",
      "Food industry dry powder mixing",
    ],
    category: "Blending Equipment",
    image: "/images/octagonal blender.png",
    metaTitle:
      "SS Octagonal Blender Manufacturer Mumbai | Microtech Engineering",
    metaDescription:
      "Stainless steel octagonal blenders for pharmaceutical powder blending by Microtech Engineering, Mumbai. Capacities 30L–3,000L, cGMP compliant.",
  },
  {
    slug: "multi-mill-machine",
    name: "Multi Mill Machine",
    shortDescription:
      "High-speed multi-mill machines for milling, granulating, sizing, and pulverising pharmaceutical and chemical materials.",
    description:
      "Microtech Engineering's Multi Mill Machine represents versatile pharmaceutical processing equipment designed for multiple size reduction operations including wet granulation milling, dry powder milling, particle sizing, delumping, and dispersion of agglomerated materials. This multipurpose machine is essential in pharmaceutical tablet manufacturing for converting wet granules into uniform particle size distribution suitable for compression, and in API manufacturing for micronization and particle size control. The multi mill operates on the principle of variable force milling using a rotating impeller with interchangeable blade configurations: fixed knife blades for aggressive size reduction of hard materials, swinging hammer blades for impact milling of crystalline substances, and rasping edges for delicate milling of heat-sensitive compounds. The material is fed through a top-mounted hopper and passes through a cylindrical milling screen available in mesh sizes from 0.5mm to 20mm, with the screen aperture determining the final particle size of the milled product. The entire product contact area is manufactured from SS 316L stainless steel with electropolished finish (Ra ≤ 0.4 µm) to prevent product contamination and facilitate cleaning validation, meeting cGMP, GMP, and FDA 21 CFR requirements for pharmaceutical processing equipment. The mill housing is completely enclosed and sealed to prevent product loss and dust generation, with optional dust extraction connections for cleanroom installations. Variable speed control through VFD (Variable Frequency Drive) allows precise adjustment of milling intensity from 1000 to 3000 RPM, enabling processing of different materials without mechanical adjustments and optimizing throughput while minimizing fines generation. The quick-clean design features tool-free dismantling with easily removable screen, impeller, and hopper components, reducing changeover time between products and simplifying sanitation procedures. All contact parts can be removed and cleaned outside the equipment, supporting validated cleaning procedures for multi-product facilities. The multi mill is driven by heavy-duty industrial motors ranging from 2 HP for laboratory models to 10 HP for production units, with single-phase or three-phase power options depending on site electrical infrastructure. Safety features include magnetic door interlocks preventing operation with open enclosures, overload protection for motor circuit, and emergency stop buttons for operator safety. Our multi mill machines are supplied with comprehensive documentation including equipment design qualification (DQ), installation qualification (IQ) protocols, operational qualification (OQ) test procedures, material certificates traceable to mill test reports, electrical wiring diagrams, and operating/maintenance manuals. We provide installation supervision, commissioning support, operator training, and validation assistance to ensure successful equipment qualification and regulatory compliance.",
    features: [
      "Material: SS 316L product contact parts",
      "Motor: 2 HP to 10 HP (single phase / three phase)",
      "Variable speed control (1,000 to 3,000 RPM)",
      "Screen sizes: 0.5mm to 20mm",
      "Interchangeable impeller blades (impact / knife)",
      "Quick-clean design with tool-free dismantling",
      "Charging hopper with feed chute",
      "Full SS housing with mirror polish",
      "Meets cGMP, GMP, 21 CFR requirements",
    ],
    applications: [
      "Pharmaceutical granulation and sizing",
      "Chemical and API milling",
      "Food and spice grinding",
      "Ayurvedic herbal milling",
      "Cosmetic powder sizing",
    ],
    category: "Size Reduction Equipment",
    image: "/images/multimill.png",
    metaTitle: "Multi Mill Machine Manufacturer Mumbai | Microtech Engineering",
    metaDescription:
      "cGMP-compliant multi mill machines for pharmaceutical milling and granulation by Microtech Engineering, Mumbai. Available 2HP–10HP with variable speed.",
  },
  {
    slug: "stainless-steel-ipc-bin-container",
    name: "Stainless Steel IPC Bin Container",
    shortDescription:
      "cGMP stainless steel IPC (In-Process Control) bin containers for safe material transfer and storage in pharmaceutical plants.",
    description:
      "Our Stainless Steel IPC (In-Process Control) Bin Containers are specialized pharmaceutical material handling equipment designed for safe, hygienic, and contamination-free transfer and intermediate storage of powders, granules, and bulk pharmaceutical materials within manufacturing facilities. IPC bins eliminate the need for manual material handling using scoops or containers that pose contamination risks, operator exposure hazards, and material loss concerns. Manufactured from premium-grade SS 316L stainless steel for all product contact surfaces with SS 304 for external structures, these bins meet stringent pharmaceutical cGMP requirements for equipment hygiene and material compatibility. The interior of each bin is precision-welded with full penetration TIG welds and mechanically or electropolished to achieve surface finishes of Ra ≤ 0.4 µm, preventing product adhesion, facilitating complete discharge, and enabling validated cleaning procedures. The bin design features conical or dished bottoms with generous exit angles ensuring complete material discharge without residual heels that could lead to cross-contamination between batches. Discharge is controlled through butterfly valves with soft seals (FDA-approved silicon or EPDM gaskets) providing dust-tight closure during transport and enabling controlled material dispensing at point of use. The top lid is secured with hinged clamps and features a pressure relief vent to prevent vacuum formation during discharge, while maintaining dust ingress protection during storage and transport. Each bin is mounted on heavy-duty polyurethane or nylon castor wheels with at least two wheels having locking brakes to prevent unintended movement during loading or unloading operations. The bins are available in capacities ranging from 50 liters for laboratory and small-scale operations to 2000 liters for high-volume production facilities, with custom sizes available for specific applications. Design options include stackable configurations for space-efficient storage when not in use, nestable designs where bins can telescope into each other reducing storage footprint, and intermediate bulk containers (IBC) compatible with automated bin charging and discharging systems for octagonal blenders and other process equipment. Each bin can be fitted with identification tags, batch cards, or RFID tracking systems to support material traceability and inventory management in compliance with pharmaceutical quality systems and regulatory requirements. The bins are compatible with mobile lifts, hoists, and bin blending systems commonly used in pharmaceutical manufacturing, enabling integration into existing production workflows. All welds, materials, and surface finishes are documented with material test certificates traceable to original mill certifications, and the bins can be supplied with FAT (Factory Acceptance Test) documentation and installation qualification (IQ) support. Optional features include sampling ports for in-process testing, weight measurement systems for precise material charging, and customized discharge valve configurations for specific downstream equipment interfaces.",
    features: [
      "Material: SS 316L (inner) / SS 304 (outer)",
      "Capacity: 50L to 2,000L",
      "Polished interior (Ra ≤ 0.4 µm)",
      "Butterfly valve discharge with silicon gasket",
      "Lockable lid with pressure relief vent",
      "Castor wheels with locking brake",
      "Stackable and nestable designs available",
      "Compatible with IPC bin blending systems",
      "Stencil marking with batch ID provision",
    ],
    applications: [
      "In-process material handling in pharma",
      "Granule and powder transfer",
      "API and excipient storage",
      "Food ingredient storage and transfer",
      "Chemical batch material handling",
    ],
    category: "Material Handling",
    image: "/images/ipc bin.png",
    metaTitle:
      "SS IPC Bin Container Manufacturer Mumbai | Microtech Engineering",
    metaDescription:
      "cGMP stainless steel IPC bin containers for pharmaceutical material handling by Microtech Engineering, Mumbai. Capacities 50L–2,000L.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
