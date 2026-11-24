(function () {
  "use strict";

  function trace(title, prompt, steps) {
    return { type: "trace", title, prompt, steps };
  }

  // Each comparison case contains a label, the nodes of its pathway, and a takeaway.
  function compare(title, prompt, cases) {
    return { type: "compare", title, prompt, cases };
  }

  function model(title, prompt, controls, rows, calculate, explain, graphic) {
    return { type: "model", title, prompt, controls, rows, calculate, explain, graphic };
  }

  function control(label, unit, min, max, initial, step = 1) {
    return { label, unit, min, max, initial, step };
  }

  // A row can have its own scale when it has a different unit from the other rows.
  function row(label, unit, scale, signed = false) {
    return { label, unit, scale, signed };
  }

  window.studyVisuals = {
    "unit-1": trace("From feed to usable nutrients", "Follow a mouthful of forage from the feed store to the animal’s tissues.", [
      ["Prepare", "Chopping changes the physical form of forage. Conservation changes how it is kept for later use.", "u1-t19"],
      ["Measure", "Dry matter lets you compare feed amounts without counting their water as nutrients.", "u1-t04"],
      ["Digest", "Rumen microbes turn fermentable carbohydrate into volatile fatty acids the animal can use.", "u1-t05"],
      ["Use", "At each step of energy partitioning, account for where the energy goes before estimating what remains for maintenance and production.", "u1-t14"]
    ]),
    "unit-2": trace("How a feed becomes a ration", "Follow the evidence from an individual feed to a ration for a specific animal.", [
      ["Collect", "Measure feed, refusals and faeces over a defined trial period so intake and output refer to the same period.", "u2-t04"],
      ["Calculate", "Use the intake and faecal measurements to estimate apparent digestibility.", "u2-t05"],
      ["Check needs", "Use a feeding standard to identify the animal’s requirements on the same basis as the feed values.", "u2-t08"],
      ["Balance", "Check that the total ration fits intake capacity and supplies energy, protein, fibre and micronutrients together.", "u2-t09"]
    ]),
    "unit-3": trace("What is the animal feeding for?", "Start with maintenance and explore what each productive role adds.", [
      ["Maintenance", "Vital functions use energy and nutrients even when body reserves and production are steady.", "u3-t01"],
      ["Growth", "Tissue gain needs both building material and energy. The type of tissue gained changes the cost.", "u3-t02"],
      ["Gestation", "Later pregnancy adds greater demand for fetal and associated tissues.", "u3-t03"],
      ["Milk", "Milk carries energy and nutrients out of the body. Both milk yield and composition shape the requirement.", "u3-t04"]
    ]),
    "unit-4": compare("Where does each species digest fibre?", "Trace the useful products of digestion in three different animals.", [
      ["Pig", ["Stomach", "Small intestine", "Hindgut"], "Most starch and dietary amino acids are absorbed from digestion in the small intestine. Some fibre ferments farther down.", "u4-t04"],
      ["Horse", ["Small intestine", "Caecum and colon", "Volatile fatty acids"], "A large hindgut ferments fibre after the main site of amino acid absorption.", "u4-t06"],
      ["Rabbit", ["Caecal fermentation", "Soft caecotrophs", "Re-ingestion"], "Re-ingestion gives microbial nutrients a second pass through the small intestine.", "u4-t13"]
    ]),

    "u1-t01": trace("What could nutritionists measure?", "Step through four discoveries and see the new question each one made possible.", [
      ["Respiration", "Lavoisier and Laplace used melting ice to measure heat released during respiration."],
      ["Nutrient balance", "Boussingault compared what was fed with what was excreted to study how much nitrogen an animal retained."],
      ["Feed fractions", "Weende analysis split a feed sample into standard fractions so researchers could compare ingredients."],
      ["Cell walls", "Van Soest’s detergent system distinguished cell walls from cell contents, giving a different view of forage fibre."]
    ]),
    "u1-t02": model("Find the limiting nutrient", "Raise the amino acid supply. Watch when the energy bar starts to set the ceiling.",
      [control("Energy supply", "%", 30, 100, 80), control("Essential amino acid supply", "%", 30, 100, 55)],
      [row("Energy supplied", "%", 100), row("Amino acids supplied", "%", 100), row("Illustrated production ceiling", "%", 100)],
      (energy, amino) => [energy, amino, Math.min(energy, amino)],
      (energy, amino) => energy === amino ? "Both inputs set the same ceiling in this simplified model." :
        `${energy < amino ? "Energy" : "Essential amino acid supply"} is limiting in this model. The percentages are relative to the requirements for the illustrated target.`),
    "u1-t03": compare("What gives tissues their structure?", "Compare the material that does the structural work in each tissue.", [
      ["Forage stem", ["Plant cell wall", "Cellulose and lignin", "Rigid support"], "Cellulose fibres reinforce the plant wall. As stems mature, lignification also limits access to some wall carbohydrates."],
      ["Animal muscle", ["Muscle fibre", "Actin and myosin", "Contraction"], "Water makes up much of fresh muscle mass. Proteins supply the contractile structure."],
      ["Animal bone", ["Collagen framework", "Calcium phosphate", "Stiff skeleton"], "Collagen provides a flexible framework. The mineral phase gives bone much of its compressive strength."]
    ]),
    "u1-t04": model("Separate water from feed weight", "Keep the fresh weight fixed and change its dry matter percentage.",
      [control("As-fed forage", "kg", 2, 20, 10), control("Dry matter concentration", "%", 20, 90, 30)],
      [row("Total as-fed mass", "kg", 20), row("Dry matter", "kg", 20), row("Water", "kg", 20)],
      (mass, dm) => [mass, mass * dm / 100, mass * (100 - dm) / 100],
      () => "Dry matter (kg) = as-fed mass (kg) × dry matter fraction. Use the dry matter basis to compare nutrients in feeds with different moisture contents."),
    "u1-t05": compare("Follow a volatile fatty acid", "Start at the rumen and follow each fermentation product to a major use.", [
      ["Acetate", ["Fermentable fibre", "Rumen acetate", "Milk fat synthesis"], "Acetate is a major precursor for fatty acid synthesis in the mammary gland."],
      ["Propionate", ["Fermentable carbohydrate", "Rumen propionate", "Liver glucose"], "The liver uses propionate for gluconeogenesis. Glucose supports production of lactose in milk."],
      ["Butyrate", ["Rumen fermentation", "Rumen butyrate", "Ketone bodies"], "The rumen wall converts much of the absorbed butyrate to β-hydroxybutyrate."]
    ]),
    "u1-t06": compare("Two routes to absorbed amino acids", "Follow the feed protein that microbes use and the fraction that passes through the rumen.", [
      ["Rumen degradable", ["Feed protein", "Microbial protein", "Intestinal amino acids"], "Microbes can use peptides, amino acids and ammonia to build microbial protein when fermentable energy is available."],
      ["Rumen undegradable", ["Feed protein", "Rumen escape", "Intestinal amino acids"], "The digestible fraction of bypass protein contributes amino acids after digestion in the small intestine."]
    ]),
    "u1-t07": trace("What happens to fat in the rumen?", "Follow a triglyceride and look for the step where its fatty acids change chemically.", [
      ["Triglyceride arrives", "Many feed lipids reach the rumen as triglycerides or other esterified lipids."],
      ["Microbial lipolysis", "Microbes split the ester bonds, releasing free fatty acids and the backbone, such as glycerol."],
      ["Biohydrogenation", "Microbes modify many unsaturated fatty acids, forming intermediates and often more saturated products."],
      ["Intestinal uptake", "Fatty acids that reach the small intestine mix with bile components and can be absorbed."]
    ]),
    "u1-t08": compare("Where does body water go?", "Compare the extra routes of water loss during heat and milk production.", [
      ["Resting animal", ["Drinking and feed water", "Body fluid", "Urine and faeces"], "Water circulates between body compartments. The kidneys can adjust urinary water loss."],
      ["Heat exposure", ["Body fluid", "Sweat or respiratory moisture", "Evaporative cooling"], "Evaporation transfers heat away from the animal and increases water loss."],
      ["Lactation", ["Body fluid", "Mammary gland", "Milk water"], "Milk exports water as well as solids. The animal needs water to cover this additional route of loss."]
    ]),
    "u1-t09": compare("Match the mineral to its job", "Explore three places where macro-minerals do very different work.", [
      ["Calcium and phosphorus", ["Calcium and phosphate", "Bone mineral", "Structural strength"], "Bone is also a mineral reserve. Blood calcium has additional roles in signalling and contraction."],
      ["Sodium and potassium", ["Ion gradients", "Cell membranes", "Electrical signalling"], "Sodium predominates outside cells and potassium inside, creating gradients essential for excitability."],
      ["Magnesium", ["Magnesium", "Enzyme reactions", "Neuromuscular function"], "Magnesium helps enzymes handle ATP and contributes to normal nerve and muscle function."]
    ]),
    "u1-t10": compare("How a trace mineral reaches its target", "Check where each mineral acts, then explore how an interaction changes copper availability.", [
      ["Iron", ["Absorbed iron", "Haemoglobin", "Oxygen transport"], "The iron in haem allows haemoglobin to bind oxygen reversibly."],
      ["Cobalt", ["Dietary cobalt", "Rumen microbes", "Vitamin B₁₂"], "In functioning ruminants, rumen microbes use cobalt to make vitamin B₁₂."],
      ["Copper interaction", ["Molybdenum and sulfur", "Rumen thiomolybdates", "Lower copper availability"], "Thiomolybdates can bind copper. The measured copper concentration alone can miss this interaction."],
      ["Iodine", ["Dietary iodine", "Thyroid gland", "Thyroid hormones"], "Iodine is a component of thyroid hormones that help regulate metabolic activity."]
    ]),
    "u1-t11": compare("One absorption route, four jobs", "Choose a fat-soluble vitamin and follow it from intestinal uptake to a key function.", [
      ["Vitamin A", ["Intestinal absorption", "Retinal", "Vision in dim light"], "Retinal is part of the light-sensitive pigment in rods. Vitamin A also supports epithelial integrity."],
      ["Vitamin D", ["Vitamin D activation", "Intestinal Ca and P uptake", "Bone mineralisation"], "Active vitamin D helps regulate calcium and phosphorus balance."],
      ["Vitamin E", ["Intestinal absorption", "Lipid membranes", "Antioxidant protection"], "Vitamin E helps protect membrane lipids from oxidative damage."],
      ["Vitamin K", ["Available vitamin K", "Clotting factor activation", "Coagulation"], "Vitamin K enables modification of several clotting proteins so they can bind calcium."]
    ]),
    "u1-t12": compare("See water-soluble vitamins at work", "Follow each vitamin to the step it supports.", [
      ["Thiamine (B₁)", ["Thiamine pyrophosphate", "Pyruvate dehydrogenase", "Acetyl-CoA"], "Thiamine-derived coenzyme helps link carbohydrate metabolism to the citric acid cycle."],
      ["Riboflavin (B₂)", ["Riboflavin", "FAD and FMN", "Electron transfer"], "Flavin coenzymes carry electrons during energy metabolism."],
      ["Vitamin C", ["Ascorbate", "Collagen maturation", "Connective tissue"], "Ascorbate supports hydroxylation of collagen residues. Guinea pigs depend on dietary vitamin C."]
    ]),
    "u1-t13": compare("Classify feeds by the job they do", "Compare examples that add bulk, energy, protein or moisture to a ration.", [
      ["Wheat straw", ["Dry crop residue", "Fibre-rich", "Dry roughage"], "Straw supplies structural fibre, but mature, lignified straw is generally low in available energy and protein."],
      ["Maize grain", ["Seed starch", "Energy-dense", "Energy concentrate"], "Grain concentrates more digestible energy into each kilogram of dry matter than many roughages."],
      ["Groundnut cake", ["Oil extraction residue", "Protein-rich", "Protein supplement"], "Removing much of the oil leaves a protein-rich cake. Quality can vary by batch."],
      ["Maize silage", ["Fermented forage", "Moist and fibrous", "Silage"], "Silage is a preserved forage that still contains substantial water. Compare its nutrients on a dry matter basis."]
    ]),
    "u1-t14": model("Follow 100 units of feed energy", "Change one loss at a time. Which step moves first, and which steps stay put?",
      [control("Faecal loss", "units", 10, 45, 25), control("Urine and gas losses", "units", 0, 20, 10), control("Heat increment", "units", 0, 30, 15)],
      [row("Gross energy (GE)", "units", 100), row("Digestible energy (DE)", "units", 100), row("Metabolisable energy (ME)", "units", 100), row("Net energy (NE)", "units", 100)],
      (faeces, urineGas, heat) => [100, 100 - faeces, 100 - faeces - urineGas, 100 - faeces - urineGas - heat],
      () => "GE − faecal loss = DE. DE − urine and gas losses = ME. ME − heat increment = NE. These are teaching values on one common energy scale."),
    "u1-t15": compare("Three ways to study energy retention", "Switch methods and see what the instrument or balance actually measures.", [
      ["Direct calorimetry", ["Animal chamber", "Heat leaving chamber", "Heat production"], "The chamber measures heat loss. Under steady thermal conditions that loss reflects heat production."],
      ["Indirect calorimetry", ["Gas exchange and urinary N", "Oxidation estimate", "Heat production"], "Oxygen use, carbon dioxide and methane production, and urinary nitrogen contribute to estimating heat production."],
      ["Carbon–nitrogen balance", ["Intake and outputs", "Retained C and N", "Tissue energy retained"], "Nitrogen retention helps estimate protein deposition. Retained carbon beyond the protein fraction helps estimate fat deposition."]
    ]),
    "u1-t16": model("Follow nitrogen into retained protein", "Change faecal or urinary loss. See how the fraction retained differs from the fraction absorbed.",
      [control("Faecal nitrogen", "g", 0, 7, 2), control("Urinary nitrogen", "g", 0, 10, 5)],
      [row("Nitrogen eaten", "g", 20), row("Apparently absorbed", "g", 20), row("Retained in the example", "g", 20)],
      (faecal, urinary) => [20, 20 - faecal, 20 - faecal - urinary],
      (faecal, urinary) => `Apparent biological value = retained ÷ apparently absorbed = ${Math.round((20 - faecal - urinary) / (20 - faecal) * 100)}%. Apparent net protein utilisation = retained ÷ eaten = ${(20 - faecal - urinary) * 5}%. Try changing urinary loss alone.`),
    "u1-t17": model("What makes a nutritive ratio wider?", "Hold digestible protein steady and add digestible fat. Watch how the ratio responds.",
      [control("Digestible crude protein", "%", 5, 20, 10), control("Digestible fat", "%", 0, 10, 4)],
      [row("Digestible crude protein", "%", 75), row("Digestible non-protein nutrients (TDN basis)", "%", 75)],
      (protein, fat) => [protein, 45 + 2.25 * fat],
      (protein, fat) => `With digestible fibre and NFE fixed at a combined 45%, NR = 1 to ${((45 + 2.25 * fat) / protein).toFixed(2)}. Fat counts 2.25 times in the numerator for non-protein nutrients.`),
    "u1-t18": trace("Follow a pellet through the mill", "Look for the step that sets nutrient proportions and the step that controls pellet condition.", [
      ["Receive", "Identify, sample and approve raw materials before they enter the production line."],
      ["Grind and batch", "Reduce particle size as needed and weigh each ingredient to the formula."],
      ["Mix and pellet", "Distribute the ingredients uniformly, then condition and press the mash through a die."],
      ["Cool and screen", "Remove excess heat and moisture, then separate fines before packing and storing."]
    ]),
    "u1-t19": compare("Choose a process and see what changes", "Compare particle size, starch structure and feed density.", [
      ["Grinding grain", ["Whole grain", "Size reduction", "More exposed surface"], "Grinding increases enzyme or microbial access. Excessive fines can create handling and digestive trade-offs."],
      ["Steam flaking", ["Moist heat", "Rolling", "More accessible starch"], "Steam and rolling alter the grain structure, making starch more accessible to digestion."],
      ["Chopping forage", ["Long stems", "Physical shortening", "Easier mixing"], "Chopping changes how the material packs and mixes. Enough effective fibre still matters for rumination."],
      ["Pelleting", ["Mixed mash", "Compression through die", "Denser uniform feed"], "Pelleting changes feed form and can reduce ingredient sorting."]
    ]),
    "u1-t20": compare("What makes straw hard to use?", "Explore which part of the roughage problem each treatment addresses.", [
      ["Physical", ["Long straw", "Particle size reduction", "Improved handling"], "Chopping reduces bulk or sorting in some mixtures, with limited effect on the lignin barrier itself."],
      ["Chemical", ["Lignified cell wall", "Alkali action", "More accessible fibre"], "Ammoniation can disrupt some lignin–carbohydrate linkages and add non-protein nitrogen."],
      ["Biological", ["Lignified residue", "Selective fungal action", "Altered fibre matrix"], "Some fungi degrade lignin. The useful result depends on how much digestible dry matter is conserved."]
    ]),
    "u1-t21": compare("What changes when air enters silage?", "Compare the same chopped forage in a sealed silo and a silo with an air leak.", [
      ["Packed and sealed", ["Oxygen falls", "Lactic fermentation", "pH falls"], "Lactic acid bacteria use available sugars. Acidification helps preserve forage while it stays sealed."],
      ["Air leak", ["Oxygen enters", "Yeasts and moulds grow", "Heating and losses"], "Aerobic organisms consume sugars and acids. The exposed silage can heat and lose dry matter."]
    ]),
    "u1-t22": compare("Find the hay-making trade-off", "Compare what can be lost when forage goes into storage too wet or is handled when brittle.", [
      ["Stored too wet", ["Moist hay", "Microbial activity", "Heating and spoilage"], "Moisture keeps biological activity going after baling. Heat and mould can reduce feeding value."],
      ["Handled too dry", ["Brittle leaves", "Shattering during handling", "Nutrient-rich leaves lost"], "This matters particularly in leafy legumes, where the leaves carry much of the feeding value."],
      ["Well cured", ["Cut forage", "Water evaporates", "Dry forage stored"], "Drying slows spoilage. Good handling protects leaves while the material is cured."]
    ]),
    "u1-t23": compare("Locate the nutritional block", "Compare how three natural constituents interfere with nutrient use.", [
      ["Trypsin inhibitors", ["Raw soya", "Trypsin inhibited", "Protein digestion impaired"], "The inhibitor interferes with a digestive enzyme, so less dietary protein is broken down efficiently."],
      ["Excess tannins", ["Tannin-rich forage", "Binds protein", "Availability can fall"], "The effect depends on tannin type and amount. Binding can reduce the fraction of feed protein that is usable."],
      ["Phytate", ["Plant phosphorus stores", "Phosphorus bound in phytate", "Less available phosphorus"], "Pigs and poultry use phytate phosphorus poorly unless enough of it is released, for example by phytase."]
    ]),
    "u1-t24": trace("When ash stays behind", "Follow the sample and see why sediment can leave a clue in the lab.", [
      ["Take a sample", "A representative sample matters because grit may settle unevenly in a bag or batch."],
      ["Measure total ash", "Organic matter is removed and the mineral residue is weighed."],
      ["Separate acid-insoluble ash", "Acid-insoluble material, including silica-rich grit, contributes to the residue."],
      ["Interpret the clue", "Compare with the expected result for the ingredient. A high value can flag contamination and needs follow-up."]
    ]),
    "u1-t25": compare("Where does the additive act?", "Compare changing the rumen environment, releasing a nutrient and supporting microbes.", [
      ["Rumen buffer", ["Buffer in ration", "Acid neutralisation", "Smaller pH fall"], "A buffer acts on rumen chemistry. Fermentable carbohydrate intake and effective fibre still shape the pH response."],
      ["Phytase", ["Phytate in feed", "Enzyme releases phosphate", "More available phosphorus"], "The enzyme acts on a specific substrate, which is why its usefulness depends on what the ration contains."],
      ["Probiotic", ["Live microorganisms", "Interaction in digestive tract", "Context-dependent response"], "The effect depends on the organism, product and animal. A probiotic acts differently from a nutrient supplement."]
    ]),

    "u2-t01": model("Close the gap at the feed bunk", "Keep intake fixed and raise energy concentration. Then try closing the same gap by changing intake.",
      [control("Dry matter intake", "kg/day", 6, 14, 10), control("Feed ME concentration", "MJ/kg DM", 6, 12, 8)],
      [row("ME supplied", "MJ/day", 168), row("Illustrative ME target", "MJ/day", 168)],
      (intake, density) => [intake * density, 100],
      (intake, density) => {
        const gap = intake * density - 100;
        return gap === 0 ? "Daily ME supply equals the example target. Protein, fibre and minerals need their own checks." :
          `Daily ME supply = dry matter intake × energy concentration. The ration is ${Math.abs(gap)} MJ/day ${gap < 0 ? "below" : "above"} the example target.`;
      }),
    "u2-t02": trace("How do you measure tissue gain?", "Follow the two groups in a comparative slaughter study and locate the baseline.", [
      ["Create comparable groups", "Allocate similar animals so the baseline and experimental groups represent the same starting population."],
      ["Estimate starting composition", "Measure body composition in a representative baseline group at the start."],
      ["Run the feeding trial", "Track intake and performance in the remaining animals over the trial period."],
      ["Estimate retained tissue", "Subtract estimated starting body energy or protein from the measurements at the end of the trial."]
    ]),
    "u2-t03": model("From digestibility to nitrogen balance", "Raise urinary nitrogen. Which measurement changes, and why?",
      [control("Faecal nitrogen", "g/day", 0, 30, 15), control("Urinary nitrogen", "g/day", 0, 55, 35)],
      [row("Nitrogen eaten", "g/day", 60, true), row("Apparently absorbed", "g/day", 60, true), row("Retained nitrogen", "g/day", 60, true)],
      (faeces, urine) => [60, 60 - faeces, 60 - faeces - urine],
      (faeces, urine) => `Apparent digestibility is ${Math.round((60 - faeces) / 60 * 100)}%. Nitrogen balance is ${60 - faeces - urine} g/day after subtracting both losses in this simplified example.`),
    "u2-t04": trace("A digestion trial from start to finish", "Find where refusals are counted and why adaptation comes before data collection.", [
      ["Adapt", "Keep the experimental diet and routine consistent while intake and digestion stabilise."],
      ["Record feed", "During collection, measure feed offered and refusals. Their difference gives intake on a consistent basis."],
      ["Collect outputs", "Measure representative faecal output over the defined period. A balance trial can also require separate urine collection."],
      ["Calculate", "Use analysed nutrient concentrations and recorded masses to calculate intake and apparent disappearance."]
    ]),
    "u2-t05": compare("One digestibility question, three methods", "Compare what you must measure in each design.", [
      ["Direct", ["Measure intake", "Measure faecal output", "Intake minus output"], "Example with 100 g eaten and 30 g in faeces gives 70% apparent digestibility."],
      ["By difference", ["Test basal ration", "Test basal plus ingredient", "Attribute the difference"], "If the mixed ration supplies 84 g digestible nutrient and its basal portion accounts for 70 g, the test ingredient accounts for 14 g. Divide by the test ingredient’s nutrient intake."],
      ["Indicator", ["Marker in feed", "Marker in faeces", "Correct nutrient ratio"], "Example with feed and faecal marker levels of 1% and 2%, and nutrient levels of 20% and 12%, gives 1 − (1 ÷ 2) × (12 ÷ 20) = 70% apparent digestibility."]
    ]),
    "u2-t06": compare("What limits fibre digestion?", "Compare a change in the forage with a change in how fast it moves through the rumen.", [
      ["More mature forage", ["More lignified walls", "Less microbial access", "Lower potential digestion"], "A greater fraction of the cell wall can be resistant to microbial attack."],
      ["Faster passage", ["Less rumen retention", "Less fermentation time", "Less fibre digested"], "Even potentially digestible fibre can leave before microbes finish breaking it down."],
      ["Rapid fermentation", ["High fermentable starch load", "Lower rumen pH", "Less fibre breakdown"], "This is an associative effect. One ingredient can change the conditions for digesting another."]
    ]),
    "u2-t07": trace("Read a feeding standard in order", "Use the same animal profile while stepping through requirement, units and intake.", [
      ["Identify the animal", "Start with the species, body weight and production stage, such as a lactating buffalo."],
      ["Find daily allowances", "Locate the relevant maintenance and production allowances in the standard."],
      ["Check the units", "Identify whether the table uses ME, NE or TDN, and whether values are per day or per kilogram of dry matter."],
      ["Connect to intake", "If the requirement is given per day, divide by expected dry matter intake to see what concentration the ration must supply."]
    ]),
    "u2-t08": compare("Same animal, different accounting systems", "Switch among frameworks and see why values in different units need a common basis.", [
      ["Morrison", ["Digestible fractions", "TDN and DCP", "Practical feed comparison"], "The older framework uses digestible nutrients for practical estimates. TDN is a different measure from net energy."],
      ["NRC dairy", ["Feed and animal data", "Net energy and MP", "Demand by function"], "Dairy models link energy and metabolizable protein supply to animal functions. The edition matters when selecting values."],
      ["ARC", ["Metabolisable energy", "Efficiency of utilisation", "Net energy for a function"], "The framework accounts for different efficiencies of converting ME to maintenance or production."],
      ["Kearl and ICAR", ["Animal and production level", "Tropical feeding context", "Daily requirement"], "Kearl compiled data for ruminants in developing countries. ICAR standards address Indian livestock; check the basis and edition of the selected tables."]
    ]),
    "u2-t09": model("Check more than protein", "Increase the concentrate share until protein meets the example target. What happens to forage dry matter?",
      [control("Concentrate share of ration dry matter", "%", 20, 80, 30)],
      [row("Forage dry matter share", "%", 100), row("Crude protein supplied", "% DM", 24), row("Example crude protein target", "% DM", 24)],
      (concentrate) => [100 - concentrate, 8 + concentrate * 0.12, 14],
      (concentrate) => `The blend contains ${(8 + concentrate * 0.12).toFixed(1)}% crude protein using example feeds at 8% and 20% CP. The protein bars share a scale. Forage share uses its own scale and prompts a separate fibre check.`),

    "u3-t01": model("Why twice the weight needs less than twice the energy", "Move the slider from 200 to 400 kg. Compare body weight with metabolic body weight, relative to the same reference animal.",
      [control("Body weight", "kg", 100, 600, 200, 25)],
      [row("Body weight relative to 200 kg", "%", 300), row("Metabolic body weight relative to reference", "%", 300)],
      (weight) => [weight / 2, 100 * Math.pow(weight / 200, 0.75)],
      (weight) => `Metabolic body weight scales as W⁰·⁷⁵. Here it is ${Math.pow(weight / 200, 0.75).toFixed(2)} times the reference. Maintenance estimates can still vary with breed, activity and environment.`),
    "u3-t02": compare("Equal weight gain, different tissue", "Compare two gains of the same mass. Which contains more stored energy?", [
      ["Lean-rich gain", ["Amino acids and energy", "Protein plus associated water", "Less energy per kg of gain"], "Lean tissue contains a large fraction of water, so a kilogram of lean-rich gain holds comparatively little stored energy."],
      ["Fat-rich gain", ["Energy surplus", "Lipid deposition", "More energy per kg of gain"], "Fat-rich gain contains less water and more energy per kilogram. Body composition helps explain differences in growth requirements."]
    ]),
    "u3-t03": trace("Follow nutrient demand through gestation", "Step through pregnancy and see why the extra demand changes near birth.", [
      ["Early pregnancy", "Embryonic development is important even when the extra daily energy demand is relatively small."],
      ["Mid-gestation", "Placental and fetal tissues grow. The dam still needs nutrients for maintenance and her other functions."],
      ["Late gestation", "Rapid fetal growth and preparation for lactation add demand. In a dam carrying multiples, intake capacity can become limiting."],
      ["At parturition", "Demand shifts from supporting the fetus to exporting nutrients in colostrum and milk."]
    ]),
    "u3-t04": model("How much energy leaves in milk?", "Hold daily yield constant and change milk energy concentration. Then try changing yield alone.",
      [control("Daily milk yield", "kg/day", 5, 30, 15), control("Milk energy concentration", "MJ/kg", 2.5, 5, 3.2, 0.1)],
      [row("Energy exported in milk", "MJ/day", 150)],
      (yieldKg, milkEnergy) => [yieldKg * milkEnergy],
      (yieldKg, milkEnergy) => `${yieldKg} kg/day × ${milkEnergy.toFixed(1)} MJ/kg = ${(yieldKg * milkEnergy).toFixed(1)} MJ/day in the milk. Milk solids, especially fat, change energy per kilogram. Feed energy needed also depends on the efficiency of utilisation.`),
    "u3-t05": trace("From feed protein to a wool fibre", "See where sulfur-containing amino acids matter in wool formation.", [
      ["Amino acid supply", "Absorbed amino acids reach the wool follicle through circulation."],
      ["Keratin synthesis", "Follicle cells incorporate cysteine into keratin. Methionine can contribute to cysteine supply through metabolism."],
      ["Fibre forms", "Disulfide bonds between cysteine residues help stabilise the keratin structure."],
      ["Growth responds", "An inadequate amino acid or energy supply can limit fibre growth and affect its diameter."]
    ]),
    "u3-t06": compare("What does a draft animal pay for work?", "Compare standing, walking and pulling a load. Track where the extra energy goes.", [
      ["Resting", ["Feed energy", "Vital functions", "Maintenance demand"], "An animal uses energy for essential functions even when it does no draft work."],
      ["Walking", ["Muscle metabolism", "Movement", "Mechanical work and heat"], "Locomotion raises energy use above rest, with some of the energy dissipated as heat."],
      ["Pulling a load", ["Greater muscle effort", "Traction", "More energy and heat"], "Demand depends on work intensity, duration and environment. Thermoregulation and water losses matter during prolonged work."]
    ]),
    "u3-t07": model("Build a two-ingredient Pearson square", "Move the target between two example feeds. Watch which ingredient must make up more of the mix.",
      [control("Target crude protein", "% DM", 8, 36, 16)],
      [row("8% CP ingredient share", "% of mix DM", 100), row("36% CP ingredient share", "% of mix DM", 100)],
      (target) => [(36 - target) / 28 * 100, (target - 8) / 28 * 100],
      (target) => `Cross-subtract to get ${36 - target} parts of the 8% feed and ${target - 8} parts of the 36% feed. The parts sum to 28. This balances one nutrient using teaching values.`,
      { type: "square", low: 8, high: 36 }),
    "u3-t08": compare("Where does a calf’s meal go?", "Switch from colostrum to milk to starter and follow each route.", [
      ["Colostrum", ["Oesophageal groove", "Abomasum", "Intestinal antibody uptake"], "Early colostrum supplies maternal antibodies while the newborn intestine can still absorb them efficiently."],
      ["Milk", ["Oesophageal groove", "Abomasum", "Small intestine"], "The groove normally directs milk beyond the rumen during drinking. Milk is digested mainly in the abomasum and small intestine."],
      ["Calf starter", ["Rumen", "Microbial fermentation", "Papillae develop"], "Fermentation products, especially butyrate and propionate, stimulate development of the rumen lining."]
    ]),
    "u3-t09": compare("Same herd, different nutrient destinations", "Compare a growing heifer with a mature animal producing milk.", [
      ["Growing heifer", ["Nutrients absorbed", "Frame and lean tissue", "Steady growth"], "The ration supports growth and suitable body condition. Repeated weights and body condition are more informative than one measurement."],
      ["Lactating cow", ["Dry matter intake", "Maintenance and mammary gland", "Milk solids and water"], "A mature cow’s demand reflects the amount and composition of milk, as well as maintenance."],
      ["Lactating buffalo", ["Dry matter intake", "Maintenance and mammary gland", "Higher-solids milk"], "Buffalo milk commonly has more fat and total solids than cow milk. A yield figure alone can miss that extra nutrient export."]
    ]),
    "u3-t10": trace("Why calving is a nutritional bottleneck", "Step across calving. Look for the point where demand can rise faster than supply.", [
      ["Dry period", "There is no daily milk export. Body condition and a consistent intake pattern matter ahead of calving."],
      ["Close-up", "Intake can fall near calving while late-gestation demands continue. The digestive system is also preparing for a changing ration."],
      ["Calving", "Colostrum production sharply increases the demand for calcium. Blood calcium can fall if absorption and mobilisation lag."],
      ["Early lactation", "Milk energy export can rise faster than dry matter intake, drawing energy from body reserves."]
    ]),
    "u3-t11": compare("Breeding bull or working bullock?", "Switch roles and compare the feeding objective.", [
      ["Breeding bull", ["Steady nutrient supply", "Suitable body condition", "Reproductive function"], "A breeding bull needs sound condition and adequate nutrient supply without unnecessary fat gain."],
      ["Working bullock", ["Energy and water", "Sustained muscle work", "Recovery after work"], "Demand changes with activity and heat. Work intensity changes the energy budget and heat dissipation needs."]
    ]),
    "u3-t12": trace("Four turning points in a sheep flock", "Follow feeding priorities from mating to lamb growth.", [
      ["Before mating", "With ewes in suitable circumstances, a short rise in nutrient supply can improve ovulation rate. Response depends on initial condition."],
      ["Late gestation", "Multiple fetuses can raise demand while physical space for feed intake decreases."],
      ["Lactation", "Milk transfers nutrients from the ewe to her lambs. The demand is greater when she feeds more than one."],
      ["Lamb growth", "Creep feeding gives lambs access to feed that adult sheep cannot reach, supporting the transition to solid feed."]
    ]),
    "u3-t13": compare("How the goat changes its feed budget", "Compare selective browsing with two phases when nutrient density matters.", [
      ["Browsing adult", ["Select leaves and shoots", "Diet differs from pasture average", "Variable nutrient intake"], "Goats select parts of plants. The amount offered and the average forage composition do not fully describe the diet consumed."],
      ["Late pregnancy", ["Fetal growth", "Demand rises", "Intake may constrain supply"], "Twin-bearing does face higher nutrient demand while abdominal space can limit bulky intake."],
      ["Lactating doe", ["Absorbed nutrients", "Milk output", "Extra energy and protein demand"], "Milk production competes with maintenance and changes in body reserves for nutrients."]
    ]),
    "u3-t14": compare("Why a concentrate increase needs time", "Compare two ways the same extra fermentable feed can reach the rumen.", [
      ["Gradual change", ["Small diet changes", "Microbial adaptation", "More stable fermentation"], "Gradual adjustment gives the rumen time to adapt. Effective fibre and a consistently mixed ration help support stability."],
      ["Abrupt change", ["Large starch load", "Rapid acid production", "Rumen pH can fall"], "Acids can accumulate faster than they are absorbed or buffered, increasing the risk of rumen dysfunction."]
    ]),
    "u3-t15": compare("What actually bypasses the rumen?", "Follow protein and fat past the rumen, then see where each can be used.", [
      ["Bypass protein", ["Rumen escape", "Intestinal protein digestion", "Absorbed amino acids"], "Only the intestinally digestible fraction contributes amino acids. Rumen escape alone says little about how much is absorbed."],
      ["Protected fat", ["Limited rumen interaction", "Intestinal fat digestion", "Absorbed fatty acids"], "Protection limits disruptive interactions with rumen fermentation while allowing fatty acids to be digested downstream."]
    ]),
    "u3-t16": compare("Two fates for ammonia in the rumen", "Choose whether microbial capture keeps pace with ammonia release.", [
      ["Microbial capture", ["Urea releases ammonia", "Microbes use ammonia and energy", "Microbial protein"], "Microbial growth uses ammonia together with energy and carbon from fermentable feed."],
      ["Release outpaces capture", ["Ammonia accumulates", "Absorbed into blood", "Liver clearance can be overwhelmed"], "The liver normally converts absorbed ammonia to urea. Rapid release can overwhelm this pathway and cause toxicity."]
    ]),
    "u3-t17": compare("Four disorders, four mechanisms", "Compare the underlying change in energy, calcium, pH or gas clearance.", [
      ["Ketosis", ["Energy demand exceeds intake", "Body fat mobilisation", "Ketone bodies rise"], "The liver handles fatty acids mobilised from adipose tissue. Ketone bodies can accumulate in early lactation."],
      ["Milk fever", ["Calcium exported in colostrum", "Replacement lags", "Blood calcium falls"], "Low blood calcium interferes with muscle contraction and other calcium-dependent functions."],
      ["Acidosis", ["Rapid fermentation", "Acid production exceeds clearance", "Rumen pH falls"], "The acid load can change the microbial environment and impair fibre digestion."],
      ["Bloat", ["Gas produced in rumen", "Eructation impaired", "Rumen distends"], "Gas can accumulate freely or become trapped in stable foam. Both interfere with gas clearance."]
    ]),

    "u4-t01": compare("Where does the non-ruminant nutrient budget go?", "Follow nutrients after absorption in a resting adult, a growing animal and a laying hen.", [
      ["Maintenance", ["Absorbed nutrients", "Organ function and turnover", "Stable body reserves"], "Maintenance still costs energy and amino acids even without growth or production."],
      ["Growth", ["Digestible amino acids", "Tissue protein synthesis", "Lean gain"], "Growth needs the right pattern of essential amino acids as well as energy."],
      ["Egg production", ["Available energy and nutrients", "Yolk, albumen and shell", "Nutrients exported in egg"], "Egg formation adds requirements beyond maintenance, including amino acids and calcium."]
    ]),
    "u4-t02": model("Find the break in a dose–response curve", "Move the nutrient supply past the example breakpoint. What happens to the response?",
      [control("Nutrient supply", "units", 0, 12, 5)],
      [row("Predicted response", "units", 100)],
      (supply) => [40 + 7 * Math.min(8, supply)],
      (supply) => supply < 8 ? "The response rises while this nutrient is limiting. In this teaching model the line reaches a plateau at 8 units of supply." :
        "The model has reached its plateau at 8 units of supply. A trial estimates the breakpoint by fitting a curve to measured responses.",
      { type: "curve", breakpoint: 8 }),
    "u4-t03": trace("How to read a feed specification", "Step through a specification before comparing it with a feed label.", [
      ["Match the stock class", "Use the species and production stage. A layer feed and a broiler starter meet different purposes."],
      ["Check the edition", "Identify which BIS specification or ICAR reference is being used and the date of its table."],
      ["Compare the same basis", "Align units, dry matter or as-fed basis, and the definition of the nutrient, such as total or digestible amino acid."],
      ["Check the limit", "A minimum and a maximum answer different questions. Read the direction of the limit before judging compliance."]
    ]),
    "u4-t04": trace("The piglet’s transition after birth", "Follow the change from sow milk to a grower diet and watch which constraint changes.", [
      ["Suckling", "Milk provides energy and protein, while the piglet’s low iron reserves and the limited iron in milk make iron status a separate consideration."],
      ["Creep feed", "Access to a suitable solid feed before weaning can help familiarise piglets with a different feed source."],
      ["Weaning", "Milk disappears from the diet and intake can drop temporarily. Digestibility and palatability become especially important."],
      ["Growing pig", "Formulators use specifications such as standardised ileal digestible lysine to match amino acid supply to lean growth."]
    ]),
    "u4-t05": compare("What is the pig’s diet supporting?", "Switch production roles and compare the destination of the nutrients.", [
      ["Gestating sow", ["Feed intake", "Fetal growth and maternal reserves", "Suitable body condition"], "Nutrient supply must cover gestation while managing the sow’s body condition."],
      ["Lactating sow", ["High nutrient demand", "Milk output", "Piglet growth"], "Milk production can draw on maternal reserves when intake is too low to cover demand."],
      ["Breeding boar", ["Maintenance and activity", "Body condition", "Breeding function"], "Condition management matters because excessive weight can impair mobility."],
      ["Finisher", ["Energy and digestible amino acids", "Lean and fat deposition", "Carcass composition"], "The balance of amino acids and energy shapes how much of the gain is lean tissue or fat."]
    ]),
    "u4-t06": compare("Two digestion routes in the horse", "Follow starch and structural fibre to the main sites where the horse uses them.", [
      ["Starch", ["Small intestine", "Enzymatic digestion", "Glucose uptake"], "Digestible starch is broken down in the small intestine. Starch that escapes can ferment rapidly in the hindgut."],
      ["Fibre", ["Caecum and colon", "Microbial fermentation", "Volatile fatty acid uptake"], "The hindgut is an important site for fibre fermentation after the small intestine."]
    ]),
    "u4-t07": compare("Separate the horse’s production and work demands", "Compare three adult horses before choosing a feeding objective.", [
      ["Broodmare", ["Maintenance", "Late pregnancy or milk output", "Higher nutrient demand"], "A broodmare’s extra demand changes through pregnancy and rises again with milk output."],
      ["Breeding stallion", ["Maintenance", "Activity and breeding season", "Condition monitoring"], "Body condition and actual activity guide how much extra energy is needed."],
      ["Performance horse", ["Forage-based diet", "Muscle work and sweating", "Extra energy and electrolyte loss"], "Workload changes energy use. Sweating separates electrolyte and water losses from the calories used by muscles."]
    ]),
    "u4-t08": trace("Why a broiler changes diets as it grows", "Follow the bird from a small chick with limited intake to a larger bird eating more each day.", [
      ["Pre-starter", "A young chick eats small amounts while its organs and tissues develop rapidly. Nutrient density and digestibility help supply amino acids in each gram of feed."],
      ["Starter", "As daily intake rises, the starter supports rapid lean and skeletal growth. Formulators still match digestible amino acids to the available energy."],
      ["Finisher", "A larger bird eats more each day. A lower amino acid concentration can still supply a substantial daily amount. Compare feed conversion over the same phase."]
    ]),
    "u4-t09": trace("Follow calcium into an eggshell", "See what changes when a growing pullet starts forming shells.", [
      ["Growing pullet", "Calcium supports the developing skeleton before daily shell formation starts."],
      ["Onset of lay", "Calcium demand increases as the shell gland begins making a mineral shell for each egg."],
      ["Shell formation", "Calcium enters circulation from the intestine and can also be mobilised from medullary bone during shell formation."],
      ["Repeated cycles", "Calcium from feed helps replace the calcium exported in eggs. Supply and timing matter across repeated laying cycles."]
    ]),
    "u4-t10": compare("What changes when an ingredient is swapped?", "Compare what each ingredient brings, then look for the constraint a substitution can introduce.", [
      ["Maize", ["Cereal grain", "Digestible starch", "Energy contribution"], "Replacing maize changes energy supply and can change the fibre and amino acid profile of the mix."],
      ["Soybean meal", ["Processed oilseed meal", "Digestible amino acids", "Protein contribution"], "Protein value depends on the amino acid pattern and adequate processing."],
      ["De-oiled rice bran", ["Rice milling by-product", "Fibre and variable nutrients", "Check limits and analysis"], "A low-cost ingredient may change available energy or increase fibre. Formulate from composition and digestibility, rather than equal bag weights."]
    ]),
    "u4-t11": compare("Three birds with different priorities", "Compare why the same starter formula cannot be assumed to fit every bird.", [
      ["Duckling", ["Rapid early growth", "Niacin requirement", "Normal development"], "Ducklings have a greater dietary niacin requirement than chicks, so a chicken starter specification can be a poor match."],
      ["Quail chick", ["Rapid early growth", "Amino acid demand", "Early tissue deposition"], "Quail starters are formulated for rapid growth at small feed intakes."],
      ["Turkey poult", ["Early growth", "High amino acid density", "Muscle and feather growth"], "Poults have their own starter specifications. Match nutrient concentration to expected intake and age."]
    ]),
    "u4-t12": compare("Why guinea pigs need vitamin C in the diet", "Compare how a lab rat and a guinea pig obtain the same nutrient.", [
      ["Lab rat", ["Glucose-derived precursor", "Endogenous synthesis", "Vitamin C available"], "A healthy rat can synthesise ascorbate under normal conditions."],
      ["Guinea pig", ["Vitamin C in feed", "Intestinal absorption", "Vitamin C available"], "Guinea pigs rely on dietary vitamin C for functions such as collagen production. Storage can reduce the amount available from feed."]
    ]),
    "u4-t13": compare("Why rabbits make two kinds of droppings", "Follow coarse fibre and fermentable particles along their different paths.", [
      ["Coarse fibre", ["Large fibre particles", "Faster onward passage", "Hard pellets"], "Coarse particles are passed onwards and help support normal gut movement."],
      ["Fermentable particles", ["Caecal fermentation", "Soft caecotrophs", "Re-ingestion"], "The rabbit re-ingests caecotrophs, recovering microbial nutrients when they pass through the small intestine again."]
    ]),
    "u4-t14": compare("How a dog’s life stage changes the feeding goal", "Compare why the same energy intake can have different consequences across life stages.", [
      ["Growing puppy", ["Maintenance plus growth", "Skeletal and lean tissue gain", "Growth-stage diet"], "Growth requires a suitable mineral balance. Large-breed puppies in particular need carefully controlled energy and calcium supply."],
      ["Healthy adult", ["Maintenance and activity", "Energy expenditure", "Stable body condition"], "Activity, size and individual variation affect energy needs. Body condition helps assess the result over time."],
      ["Lactating dog", ["Maintenance plus milk synthesis", "Nutrient export in milk", "Higher daily demand"], "The extra demand depends partly on litter size and milk production."]
    ]),
    "u4-t15": compare("Why these nutrients matter especially in cats", "Follow each nutrient to the function that depends on dietary supply.", [
      ["Taurine", ["Dietary taurine", "Limited synthesis", "Retinal and cardiac function"], "Taurine also contributes to bile acid conjugation. An adequate supply is important in complete feline diets."],
      ["Arginine", ["Dietary arginine", "Urea cycle", "Ammonia disposal"], "Arginine is essential in cats. A deficiency can impair disposal of nitrogen released during amino acid metabolism."],
      ["Arachidonic acid", ["Dietary arachidonic acid", "Membrane lipids", "Signalling molecules"], "Cats have a limited capacity to make enough arachidonic acid from linoleic acid."],
      ["Vitamin A", ["Preformed dietary vitamin A", "Retinoid metabolism", "Vision and epithelial function"], "Cats depend on preformed vitamin A because they cannot obtain sufficient vitamin A from carotene conversion."]
    ]),
    "u4-t16": compare("Captive diets must match feeding biology", "Compare how anatomy and natural feeding behaviour change the diet design.", [
      ["Browsing herbivore", ["Selective browsing", "Structural fibre and feeding time", "Gut function and behaviour"], "Browse affects both nutrient supply and how the animal spends time feeding."],
      ["Carnivore", ["Animal tissues", "Mineral balance across tissues", "Bone health"], "Muscle meat alone supplies a different calcium-to-phosphorus balance from a whole prey diet."],
      ["Fruit-eating bird", ["Species-specific fruit selection", "Variable moisture and nutrient density", "Balance and variety"], "Fruit can differ widely in sugar, fibre and micronutrients. Species-specific nutritional needs still guide the full diet."]
    ]),
    "u4-t17": compare("Trace the mechanism behind a deficiency sign", "Switch clues and link the affected tissue to the nutrient. Treat each as one differential clue.", [
      ["Curled toes", ["Low riboflavin supply", "Peripheral nerve dysfunction", "Curled-toe paralysis"], "Riboflavin deficiency can affect nerves in growing chicks. Feed history and flock findings help distinguish similar problems."],
      ["Slipped tendon", ["Inadequate manganese", "Impaired cartilage development", "Perosis"], "Perosis can have several nutritional causes. Examine the diet and leg lesions together."],
      ["Incoordination", ["Vitamin E deficiency", "Oxidative injury", "Encephalomalacia"], "Vitamin E deficiency can damage the brain in chicks. Other disorders also cause neurological signs."],
      ["Thickened skin in pigs", ["Low available zinc", "Abnormal skin keratinisation", "Parakeratosis"], "Mineral interactions can reduce zinc availability, so total zinc in the ration is only part of the assessment."]
    ])
  };
}());
