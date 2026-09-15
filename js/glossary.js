// =========================================================
// GLOSSARY — B.V.Sc UG-Level Tooltip Term Dictionary
// Animal Nutrition Studio
// =========================================================
// Usage: glossary.decorate(rootElement) scans rendered HTML
// inside rootElement and wraps known terms with a hover-tooltip.
// Terms are matched longest-first to avoid partial overlap.
// =========================================================

const glossary = {
    // Category mapping for A-Z browsing & filtering
    categories: {
        "Feed Analysis & Proximate Principles": [
            "proximate analysis",
            "weende analysis",
            "dry matter",
            "crude protein",
            "kjeldahl method",
            "ether extract",
            "crude fibre",
            "nitrogen free extract",
            "total ash",
            "acid insoluble ash",
            "van soest method",
            "neutral detergent fibre",
            "acid detergent fibre",
            "acid detergent lignin",
            "in vitro dry matter digestibility",
            "tilley and terry method",
            "nylon bag technique",
            "near infrared reflectance spectroscopy",
            "true digestibility",
            "apparent digestibility",
            "associative effect",
            "acid detergent insoluble nitrogen",
            "neutral detergent insoluble crude protein",
            "crude ash",
            "organic matter",
            "pellet durability index",
            "digestibility coefficient",
            "fermentable metabolizable energy",
            "microscopic feed examination",
            "in sacco degradability",
            "effective degradability",
            "passage rate",
            "potentially digestible ndf",
            "indigestible ndf",
            "penn state particle separator",
            "physically effective ndf",
            "carbon tetrachloride test",
            "urease activity test",
            "pepsin digestibility test"
        ],
        "Energy Evaluation & Bioenergetics": [
            "gross energy",
            "digestible energy",
            "metabolizable energy",
            "net energy",
            "total digestible nutrients",
            "starch equivalent",
            "physiological fuel value",
            "heat increment",
            "bomb calorimeter",
            "direct calorimetry",
            "indirect calorimetry",
            "carbon-nitrogen balance",
            "nutritive ratio",
            "basal metabolic rate",
            "thermoneutral zone",
            "lower critical temperature",
            "upper critical temperature",
            "heat of fermentation",
            "specific dynamic action",
            "energy balance",
            "net energy for maintenance",
            "net energy for production",
            "respiratory quotient",
            "brouwer's equation",
            "apparent metabolizable energy",
            "true metabolizable energy",
            "methane energy loss",
            "heat production",
            "metabolic body weight",
            "fasting heat production",
            "surface area law",
            "efficiency of energy utilization",
            "net energy for lactation",
            "net energy for gain",
            "calorific value",
            "blaxter's feeding system"
        ],
        "Protein & Nitrogen Metabolism": [
            "digestible crude protein",
            "biological value",
            "protein efficiency ratio",
            "net protein utilization",
            "essential amino acids",
            "limiting amino acid",
            "rumen degradable protein",
            "rumen undegradable protein",
            "bypass protein",
            "microbial protein",
            "non-protein nitrogen",
            "urea feeding",
            "ammonia toxicity",
            "ideal protein concept",
            "essential amino acid index",
            "chemical score",
            "pdcaas",
            "metabolizable protein",
            "microbial true protein",
            "nitrogen-to-sulfur ratio",
            "lysine",
            "methionine",
            "threonine",
            "tryptophan",
            "arginine",
            "endogenous urinary nitrogen",
            "metabolic fecal nitrogen",
            "transamination",
            "cncps protein fractions",
            "digestible true protein",
            "protein equivalent",
            "blood urea nitrogen",
            "milk urea nitrogen",
            "purine derivatives excretion",
            "synthetic amino acids",
            "methionine hydroxy analogue",
            "rumen-protected amino acids"
        ],
        "Carbohydrate & Lipid Nutrition": [
            "volatile fatty acids",
            "acetic acid",
            "propionic acid",
            "butyric acid",
            "gluconeogenesis",
            "cellulolytic bacteria",
            "essential fatty acids",
            "linoleic acid",
            "bypass fat",
            "calcium soaps",
            "rancidity",
            "amylose",
            "amylopectin",
            "cellulose",
            "hemicellulose",
            "lignin",
            "pectin",
            "inulin",
            "acetate-to-propionate ratio",
            "biohydrogenation",
            "conjugated linoleic acid",
            "trans-10 cis-12 cla",
            "milk fat depression",
            "prill fat",
            "non-starch polysaccharides",
            "arabinoxylans",
            "beta-glucans",
            "starch gelatinization",
            "alpha-linolenic acid",
            "arachidonic acid",
            "lipoprotein lipase",
            "non-fibrous carbohydrates",
            "non-structural carbohydrates",
            "resistant starch",
            "beta-hydroxybutyrate",
            "acetoacetate",
            "acetone",
            "saponification value",
            "iodine value",
            "peroxide value",
            "free fatty acids",
            "thiobarbituric acid value",
            "omega-6 to omega-3 ratio"
        ],
        "Rumen Microbiology & Physiology": [
            "rumen mat",
            "rumen liquor",
            "ciliate protozoa",
            "entodinium",
            "fibrobacter succinogenes",
            "ruminococcus albus",
            "ruminococcus flavefaciens",
            "butyrivibrio fibrisolvens",
            "methanobrevibacter ruminantium",
            "streptococcus bovis",
            "megasphaera elsdenii",
            "defaunation",
            "reticular groove",
            "ruminal papillae",
            "rumen parakeratosis",
            "subacute ruminal acidosis",
            "lactic acidosis",
            "frothy bloat",
            "free-gas bloat",
            "synergistes jonesii",
            "cellulosome",
            "holotrich protozoa",
            "entodiniomorph protozoa",
            "rumen fungi",
            "transfaunation",
            "primary rumen contractions",
            "secondary rumen contractions",
            "vagal indigestion",
            "omasal transport"
        ],
        "Minerals & Trace Elements": [
            "calcium",
            "phosphorus",
            "ca:p ratio",
            "magnesium",
            "grass tetany",
            "milk fever",
            "copper",
            "molybdenum",
            "swayback",
            "zinc",
            "parakeratosis",
            "iron",
            "piglet anemia",
            "manganese",
            "perosis",
            "iodine",
            "goitre",
            "selenium",
            "white muscle disease",
            "cobalt",
            "fluorosis",
            "pica",
            "hydroxyapatite",
            "ionized calcium",
            "parathyroid hormone",
            "calcitriol",
            "calcitonin",
            "dietary cation-anion difference",
            "downer cow syndrome",
            "hypomagnesemia",
            "lactation tetany",
            "bran disease",
            "epiphyseal growth plate",
            "thiaminase",
            "falling disease",
            "steely wool",
            "thiomolybdates",
            "teart pastures",
            "iron dextran",
            "carbonic anhydrase",
            "alkaline phosphatase",
            "thyroxine",
            "triiodothyronine",
            "glutathione peroxidase",
            "alkali disease",
            "blind staggers",
            "mottled enamel",
            "area-specific mineral mixture",
            "phytase superdosing",
            "osteolysis",
            "stiff lamb disease",
            "exudative diathesis",
            "achromotrichia",
            "slipped tendon",
            "allotriophagy",
            "copper toxicity in sheep",
            "osteosclerosis",
            "hypokalemic muscular weakness"
        ],
        "Vitamins in Animal Nutrition": [
            "vitamin a",
            "beta-carotene",
            "night blindness",
            "xerophthalmia",
            "vitamin d",
            "cholecalciferol",
            "rickets",
            "osteomalacia",
            "vitamin e",
            "alpha-tocopherol",
            "crazy chick disease",
            "vitamin k",
            "sweet clover disease",
            "dicoumarol",
            "thiamine",
            "polioencephalomalacia",
            "curled toe paralysis",
            "riboflavin",
            "niacin",
            "black tongue",
            "biotin",
            "pantothenic acid",
            "goose stepping",
            "thiamine pyrophosphate",
            "cerebrocortical necrosis",
            "flavin adenine dinucleotide",
            "flavin mononucleotide",
            "nicotinamide adenine dinucleotide",
            "coenzyme a",
            "pyridoxal phosphate",
            "avidin",
            "tetrahydrofolate",
            "methylmalonyl-coa mutase",
            "l-gulonolactone oxidase",
            "retinal",
            "retinoic acid",
            "calbindin",
            "gamma-glutamyl carboxylase",
            "menadione",
            "ergocalciferol",
            "calcidiol",
            "polyneuritis",
            "black tongue disease",
            "choline",
            "hypovitaminosis a metaplasia",
            "nutritional encephalomalacia"
        ],
        "Applied Ruminant Feeding": [
            "balanced ration",
            "maintenance requirement",
            "production requirement",
            "dry matter intake",
            "rumination",
            "challenge feeding",
            "steaming up",
            "flush feeding",
            "creep feeding",
            "thumb rule feeding",
            "morrison feeding standard",
            "icar standard",
            "total mixed ration",
            "complete feed block",
            "chemostatic intake regulation",
            "distension intake regulation",
            "negative energy balance",
            "body condition score",
            "ketosis",
            "fatty liver syndrome",
            "pregnancy toxemia",
            "urea-molasses mineral block",
            "transition period",
            "lead feeding",
            "phase feeding system",
            "challenge feeding system",
            "flushing",
            "stocking rate",
            "peak milk lag",
            "close-up dry cow",
            "far-off dry cow"
        ],
        "Feed Technology & Conservation": [
            "roughage",
            "concentrate",
            "succulent fodder",
            "silage",
            "ensiling",
            "lactic acid fermentation",
            "silo",
            "flieg index",
            "hay",
            "pelleting",
            "extrusion",
            "urea ammoniation",
            "hammer mill",
            "roller mill",
            "steam flaking",
            "micronization",
            "ring die",
            "counterflow cooler",
            "homofermentative lab",
            "heterofermentative lab",
            "spontaneous combustion",
            "spent mushroom substrate",
            "laccase",
            "lignin peroxidase",
            "gelatinization index",
            "expeller processing",
            "solvent extraction",
            "de-oiled rice bran",
            "decortication",
            "pellet crumble",
            "angle of repose"
        ],
        "Anti-nutritional Factors & Toxins": [
            "anti-nutritional factor",
            "tannin",
            "hcn",
            "prussic acid",
            "cyanogenic glycoside",
            "mimosine",
            "leucaena toxicity",
            "gossypol",
            "cottonseed cake",
            "aflatoxin",
            "saponin",
            "trypsin inhibitor",
            "oxalate",
            "phytic acid",
            "glucosinolate",
            "ricin",
            "dhurrin",
            "histotoxic anoxia",
            "sodium nitrite",
            "sodium thiosulfate",
            "ferrous sulfate antidote",
            "kunitz inhibitor",
            "bowman-birk inhibitor",
            "condensed tannins",
            "polyethylene glycol",
            "3,4-dhp",
            "goitrin",
            "myrosinase",
            "calcium oxalate crystals",
            "microbial phytase",
            "aflatoxin b1",
            "aflatoxin m1",
            "hydrated sodium calcium aluminosilicate",
            "nitrate toxicity",
            "methylene blue antidote",
            "sweet clover poisoning",
            "canavanine",
            "ergotism",
            "zearalenone",
            "deoxynivalenol",
            "ochratoxin a",
            "fumonisin b1",
            "solanine",
            "calcium oxalate lithiasis"
        ],
        "Non-Ruminant & Companion Nutrition": [
            "piglet nutrition",
            "broiler starter",
            "broiler finisher",
            "layer mash",
            "phase feeding",
            "taurine",
            "obligate carnivore",
            "caecotrophy",
            "hindgut fermentation",
            "colic",
            "azoturia",
            "pre-starter diet",
            "crumbles",
            "calorie-protein ratio",
            "eggshell calcification",
            "fish meal",
            "wet droppings",
            "non-starch polysaccharidases",
            "creep feed",
            "colostrum",
            "feline lower urinary tract disease",
            "struvite uroliths",
            "cecotrophy",
            "soft night feces",
            "equine colic",
            "monday morning disease",
            "cecal impaction",
            "esophageal choke",
            "tying-up syndrome",
            "gizzard",
            "insoluble grit",
            "soluble grit",
            "canine pancreatitis",
            "heinz body anemia",
            "xylitol toxicity",
            "theobromine toxicity"
        ]
    },

    terms: {
        "proximate analysis": "Weende system partitioning feeds into moisture, crude protein, ether extract, crude fibre, total ash, and NFE.",
        "weende analysis": "Standardized chemical feed partitioning developed at Weende Experiment Station in Germany in 1860.",
        "dry matter": "Moisture-free portion of feed or forage remaining after oven drying at 100–105°C.",
        "crude protein": "Total nitrogen multiplied by 6.25, encompassing true protein and non-protein nitrogen compounds.",
        "kjeldahl method": "Analytical technique involving acid digestion, distillation, and titration to quantify nitrogen.",
        "ether extract": "Crude fat fraction soluble in diethyl ether, comprising triglycerides, fatty acids, pigments, and vitamins.",
        "crude fibre": "Organic residue remaining after sequential boiling with 1.25% H2SO4 and 1.25% NaOH (cellulose, lignin).",
        "nitrogen free extract": "Readily digestible carbohydrate fraction calculated by difference: 100 - (Moisture + CP + EE + CF + Ash).",
        "total ash": "Inorganic mineral residue remaining after incinerating feed samples at 550–600°C in a muffle furnace.",
        "acid insoluble ash": "Mineral residue insoluble in dilute hydrochloric acid, primarily silica and sand contamination.",
        "van soest method": "Detergent fiber fractionation isolating Neutral Detergent Fibre (NDF), ADF, and ADL.",
        "neutral detergent fibre": "Cell wall constituents (cellulose, hemicellulose, lignin); correlates inversely with dry matter intake.",
        "acid detergent fibre": "Cell wall residue (cellulose and lignin) insoluble in acid detergent; correlates inversely with digestibility.",
        "acid detergent lignin": "Insoluble polyphenolic structural plant fraction remaining after dissolving ADF in 72% H2SO4.",
        "gross energy": "Total chemical heat released upon complete combustion of organic feed matter in a bomb calorimeter.",
        "digestible energy": "Gross energy minus fecal energy loss (DE = GE - FE).",
        "metabolizable energy": "Digestible energy minus urinary and gaseous (methane) energy losses (ME = DE - UE - Gaseous energy).",
        "net energy": "Metabolizable energy minus heat increment (NE = ME - HI); available for maintenance and production.",
        "total digestible nutrients": "Empirical measure of feed energy: %DCP + %DCF + %DNFE + (2.25 × %DEE).",
        "starch equivalent": "Net energy value of a feed expressed in terms of pounds of digestible pure starch producing identical fat gain (Kellner system).",
        "physiological fuel value": "Atwater energy values: 4 kcal/g for carbohydrate and protein, 9 kcal/g for fat.",
        "heat increment": "Specific dynamic effect or heat lost during digestion, fermentation, and intermediary metabolism of nutrients.",
        "bomb calorimeter": "Apparatus measuring gross energy by combusting feed samples under high oxygen pressure (25–30 atm).",
        "direct calorimetry": "Measurement of heat emitted directly by an animal confined inside an insulated chamber.",
        "indirect calorimetry": "Measurement of animal heat production calculated from oxygen consumption, CO2 production, and urinary nitrogen excretion.",
        "carbon-nitrogen balance": "Technique estimating protein and fat retention in the body without slaughter.",
        "nutritive ratio": "Ratio of digestible non-nitrogenous nutrients to digestible crude protein: (TDN - DCP) / DCP.",
        "digestible crude protein": "Proportion of crude protein digested and absorbed across the animal gastrointestinal tract.",
        "biological value": "Percentage of absorbed nitrogen retained in the animal body for growth, maintenance, and production.",
        "protein efficiency ratio": "Gain in body weight divided by weight of protein consumed in growing experimental animals.",
        "net protein utilization": "Percentage of dietary protein nitrogen retained in the animal body: BV × Digestibility.",
        "essential amino acids": "Amino acids that cannot be synthesized by animal tissues at rates commensurate with metabolic need (PVT TIM HALL).",
        "limiting amino acid": "Essential amino acid present in lowest proportion relative to animal requirement (often lysine or methionine).",
        "rumen degradable protein": "Dietary protein broken down to peptides and ammonia by rumen microbes.",
        "rumen undegradable protein": "Dietary protein escaping rumen microbial fermentation to reach the abomasum intact; also known as bypass protein.",
        "bypass protein": "RUP that resists rumen breakdown (due to natural matrix or heat/formalin protection) for intestinal digestion.",
        "microbial protein": "High-quality biological protein synthesized by rumen microbes, supplying 50–80% of host amino acid needs.",
        "non-protein nitrogen": "Compounds like urea and biuret containing nitrogen but not composed of amino acid chains.",
        "urea feeding": "Utilization of feed-grade urea (46% N) as a cheap non-protein nitrogen source for rumen microbial protein synthesis.",
        "ammonia toxicity": "Alkalosis and central nervous system collapse resulting from excessive urea ingestion and rapid ammonia absorption.",
        "volatile fatty acids": "Short-chain fatty acids (acetate, propionate, butyrate) produced by anaerobic microbial fermentation in the rumen.",
        "acetic acid": "Predominant VFA (60–70%) produced during fiber fermentation, serving as primary precursor for milk fat synthesis.",
        "propionic acid": "Glucogenic VFA (15–25%) converted to glucose via oxaloacetate in ruminant liver.",
        "butyric acid": "VFA (10–15%) converted to beta-hydroxybutyrate in rumen epithelium, supplying energy to peripheral tissues.",
        "gluconeogenesis": "De novo synthesis of glucose from non-hexose precursors (propionate, amino acids, glycerol).",
        "cellulolytic bacteria": "Rumen bacteria (e.g. Fibrobacter succinogenes, Ruminococcus flavefaciens) specialized in breaking down cellulose at pH > 6.2.",
        "essential fatty acids": "Polyunsaturated fatty acids (linoleic, alpha-linolenic, arachidonic) required for cellular membranes and eicosanoid synthesis.",
        "linoleic acid": "Essential omega-6 fatty acid (18:2 n-6) required in non-ruminants and poultry rations.",
        "bypass fat": "Inert fat (rumen-protected calcium soaps or hydrogenated prill fats) feeding high energy without depressing fiber digestion.",
        "calcium soaps": "Calcium salts of long-chain fatty acids insoluble at rumen pH 6.5 but dissociated in abomasal acid.",
        "rancidity": "Oxidative or hydrolytic spoilage of fats producing malodorous aldehydes, peroxides, and free fatty acids.",
        "calcium": "Major divalent cation required for skeletal ossification, blood clotting, muscular contraction, and milk secretion.",
        "phosphorus": "Essential mineral for bone apatite, phospholipids, nucleic acids, and ATP cellular energy transfer.",
        "ca:p ratio": "Optimal dietary ratio between 1.5:1 and 2:1; imbalance causes rickets, osteomalacia, or urolithiasis.",
        "magnesium": "Essential cation activating enzymatic phosphorylation reactions; deficiency causes hypomagnesaemic tetany.",
        "grass tetany": "Acute hypomagnesemia in cattle grazing lush spring pastures high in potassium and nitrogen.",
        "milk fever": "Parturient hypocalcemia in high-yielding dairy cows within 48 hours post-calving causing tetany and sternal recumbency.",
        "copper": "Cofactor for ceruloplasmin, cytochrome oxidase, and tyrosinase; deficiency leads to swayback and hair depigmentation.",
        "molybdenum": "Trace mineral antagonist to copper; high pasture molybdenum induces secondary copper deficiency (teart disease).",
        "swayback": "Neonatal enzootic ataxia in lambs caused by gestational copper deficiency and cerebral demyelination.",
        "zinc": "Essential component of carbonic anhydrase and alkaline phosphatase; deficiency causes severe parakeratosis in swine.",
        "parakeratosis": "Thickened, scaly, fissured skin lesions in growing swine caused by zinc deficiency or excess dietary calcium.",
        "iron": "Essential core of hemoglobin and myoglobin; deficiency produces microcytic hypochromic piglet anemia.",
        "piglet anemia": "Iron deficiency in housed piglets characterized by paleness, dyspnea (thumps), and stunted growth, prevented by iron dextran injection.",
        "manganese": "Cofactor for chondroitin sulfate synthesis; deficiency causes slipped tendon (perosis) in poultry.",
        "perosis": "Slipped tendon in growing chicks caused by manganese or choline deficiency, displacing the gastrocnemius tendon.",
        "iodine": "Essential constituent of thyroxine (T4) and triiodothyronine (T3); deficiency leads to compensatory goitre.",
        "goitre": "Thyroid gland enlargement resulting from iodine deficiency or ingestion of brassica goitrogens.",
        "selenium": "Core component of cellular glutathione peroxidase; works synergistically with vitamin E to prevent oxidative muscle necrosis.",
        "white muscle disease": "Nutritional muscular dystrophy with chalky white myofiber degeneration in calves and lambs deficient in selenium/vitamin E.",
        "cobalt": "Structural component of cyanocobalamin (vitamin B12); essential for ruminal B12 synthesis.",
        "fluorosis": "Chronic toxicosis from high-fluorine drinking water or rock phosphate causing mottled enamel, bone exostoses, and lameness.",
        "pica": "Depraved appetite causing animals to chew bones, wood, or soil, classically caused by phosphorus or sodium deficiency.",
        "vitamin a": "Fat-soluble vitamin (retinol) critical for rhodopsin synthesis in night vision, mucosal epithelial integrity, and reproduction.",
        "beta-carotene": "Provitamin A plant carotenoid cleaved in intestinal mucosa to yield two active retinol molecules.",
        "night blindness": "Nyctalopia; earliest clinical symptom of vitamin A deficiency due to failure of rhodopsin regeneration.",
        "xerophthalmia": "Dryness, corneal opacity, and keratomalacia from squamous metaplasia of ocular epithelia in severe vitamin A deficiency.",
        "vitamin d": "Steroid hormone precursor (cholecalciferol) facilitating active intestinal calcium and phosphorus absorption.",
        "cholecalciferol": "Vitamin D3 synthesized photochemically in skin from 7-dehydrocholesterol by solar UV radiation.",
        "rickets": "Defective mineralization and enlargement of growth plates in growing young animals due to deficiency of Ca, P, or Vitamin D.",
        "osteomalacia": "Adult softening and demineralization of mature bones due to prolonged negative calcium and vitamin D balance.",
        "vitamin e": "Lipophilic biological antioxidant (alpha-tocopherol) preventing free-radical peroxidation of cellular polyunsaturated membranes.",
        "alpha-tocopherol": "Most biologically active natural isomer of vitamin E.",
        "crazy chick disease": "Avian nutritional encephalomalacia with ataxia and head retraction caused by cerebellar peroxidation in vitamin E deficiency.",
        "vitamin k": "Naphthoquinone cofactor essential for hepatic synthesis of prothrombin (Factor II) and clotting factors VII, IX, and X.",
        "sweet clover disease": "Hemorrhagic diathesis caused by moldy sweet clover hay containing dicoumarol, a competitive vitamin K antagonist.",
        "dicoumarol": "Anticoagulant produced by fungal oxidation of plant coumarins in spoiled sweet clover.",
        "thiamine": "Vitamin B1, cofactor for pyruvate dehydrogenase and transketolase; deficiency leads to polioencephalomalacia in ruminants.",
        "polioencephalomalacia": "Cerebrocortical necrosis in ruminants caused by thiaminase-producing bacteria or thiamine deficiency.",
        "curled toe paralysis": "Sciatic nerve myelin degeneration causing toes to curl inward in chicks deficient in riboflavin (vitamin B2).",
        "riboflavin": "Vitamin B2, core of FAD and FMN electron carrier coenzymes.",
        "niacin": "Vitamin B3, nicotinic acid precursor of NAD and NADP; deficiency causes black tongue in dogs and pellagra.",
        "black tongue": "Necrotic glossitis and stomatitis in dogs resulting from dietary niacin deficiency.",
        "biotin": "Vitamin B7, cofactor for carboxylase enzymes; deficiency causes hoof lesions, cracked soles, and dermatitis.",
        "pantothenic acid": "Vitamin B5, essential constituent of Coenzyme A; deficiency causes goose stepping in pigs.",
        "goose stepping": "Spastic gait with stiff-legged hindlimb movement in pigs caused by pantothenic acid deficiency neuropathy.",
        "balanced ration": "Feed formulation supplying all essential nutrients in proper amounts and proportions for 24 hours without excess or deficit.",
        "maintenance requirement": "Nutrient quantity needed to keep an animal in non-productive metabolic equilibrium with constant body weight.",
        "production requirement": "Nutrient allowances over maintenance allocated specifically for milk, meat, wool, egg synthesis, or physical work.",
        "dry matter intake": "Total daily feed consumed expressed on dry basis, typically 2.5–3.5% of body weight in ruminants.",
        "rumination": "Regurgitation, remastication, resalivation, and redeglutition of coarse fibrous cud.",
        "challenge feeding": "Progressively increasing concentrate feeding before and after calving to challenge high-yielding cows to express genetic milk potential.",
        "steaming up": "Feeding extra concentrate to dairy heifers and dry cows 2–6 weeks pre-calving to build nutrient reserves and mammary development.",
        "flush feeding": "Feeding improved plane of nutrition 2–3 weeks pre-mating to increase ovulation rates and lambing/kidding percentages in ewes/does.",
        "creep feeding": "Providing high-nutrient concentrate feed in an exclusive creep enclosure accessible only to nursing calves, piglets, or lambs.",
        "thumb rule feeding": "Practical field feeding formula (e.g., 1 kg concentrate for every 2.5–3 kg milk produced in crossbred cows).",
        "morrison feeding standard": "Pioneering empirical feeding standard table expressing ruminant requirements in terms of dry matter, digestible protein, and TDN.",
        "icar standard": "Nutrient requirements formulated by the Indian Council of Agricultural Research tailored for indigenous and crossbred livestock.",
        "roughage": "Bulky feeds containing more than 18% crude fibre and less than 70% TDN on dry matter basis.",
        "concentrate": "Feedstuff containing less than 18% crude fibre and more than 70% TDN with high nutrient density.",
        "succulent fodder": "Fresh green forages containing 70–85% natural moisture (e.g., berseem, maize, cowpea, oat).",
        "silage": "Fermented succulent feed preserved under anaerobic conditions by lactic acid-producing microorganisms from green forage.",
        "ensiling": "The anaerobic storage and microbial preservation process of packing chopped high-carbohydrate forage in a silo.",
        "lactic acid fermentation": "Conversion of soluble sugars to lactic acid by lactobacilli, lowering silage pH to 3.8–4.2 to arrest putrefaction.",
        "silo": "Airtight structure (pit, trench, tower, bunker) used for ensiling forage crops.",
        "flieg index": "Analytical score assessing silage quality based on proportions of lactic, acetic, and butyric acids.",
        "hay": "Forage dried to 15% or less moisture to prevent spoilage and enzymatic respiration during storage.",
        "pelleting": "Compacting finely ground feed mash through die holes using steam and pressure to improve density and prevent sorting.",
        "extrusion": "High-temperature short-time pressure cooking of feeds through a die barrel, gelatinizing starch and inactivating anti-nutrients.",
        "urea ammoniation": "Treating dry straw with 4% urea at 40% moisture for 3–4 weeks to break lignocellulose bonds and increase digestibility.",
        "anti-nutritional factor": "Endogenous plant substance interfering with nutrient utilization, digestion, absorption, or animal health.",
        "tannin": "Astringent polyphenolic compound that binds and precipitates dietary proteins and digestive enzymes.",
        "hcn": "Hydrocyanic or prussic acid released from cyanogenic glycosides, inhibiting cytochrome oxidase and cellular respiration.",
        "prussic acid": "Another term for hydrocyanic acid (HCN), a deadly volatile toxin released from damaged sorghum and linseed forage.",
        "cyanogenic glycoside": "Plant glycosides (e.g. dhurrin in young sorghum) hydrolyzed by beta-glucosidases into toxic cyanide.",
        "mimosine": "Non-protein amino acid found in Leucaena leucocephala (Subabul) causing alopecia and goitre.",
        "leucaena toxicity": "Toxicity in ruminants lacking Synergistes jonesii bacteria, caused by mimosine breakdown product 3,4-DHP.",
        "gossypol": "Polyphenolic yellow pigment in cottonseed that binds iron, inhibits cardiac enzymes, and causes male infertility.",
        "cottonseed cake": "Protein-rich oilseed by-product containing bound and free gossypol, suitable for adult ruminants in restricted amounts.",
        "aflatoxin": "Hepatotoxic and carcinogenic difuranocoumarin mycotoxin produced on feeds by Aspergillus flavus and Aspergillus parasiticus.",
        "saponin": "Plant glycoside that produces persistent froth in water and rumen fluid, predisposing ruminants to bloat and erythrocyte hemolysis.",
        "trypsin inhibitor": "Heat-labile Kunitz and Bowman-Birk proteins in raw soybeans that inhibit pancreatic trypsin and cause pancreatic hypertrophy.",
        "oxalate": "Plant salts in paddy straw and setaria grasses that bind calcium into insoluble calcium oxalate, producing hypocalcemia and urolithiasis.",
        "phytic acid": "Myo-inositol hexaphosphate that binds phosphorus, zinc, and calcium, requiring phytase enzyme for release in non-ruminants.",
        "glucosinolate": "Goitrogenic sulfur compounds in mustard and rapeseed cakes that release thiocyanates and oxazolidinethiones.",
        "ricin": "Potent ribosome-inactivating lectin toxin found in castor bean seeds causing severe hemorrhagic gastroenteritis.",
        "piglet nutrition": "Specialized diet formulation requiring milk replacers, creep feed, highly digestible starches, and supplemental iron.",
        "broiler starter": "High-protein (22–23% CP, 3000 kcal ME/kg) crumble diet fed to meat birds from day 1 to 21.",
        "broiler finisher": "High-energy (19–20% CP, 3200 kcal ME/kg) pellet diet fed to broilers from 22 days to slaughter.",
        "layer mash": "Formulated poultry diet containing 16–18% CP and 3.5–4.2% calcium to support continuous eggshell formation.",
        "phase feeding": "Adjusting dietary nutrient concentrations in distinct production stages to match decreasing protein and increasing energy needs.",
        "taurine": "Essential beta-amino sulfonic acid required in feline diets to prevent central retinal degeneration and dilated cardiomyopathy.",
        "obligate carnivore": "Animal species strictly dependent on nutrients found only in animal flesh (taurine, arachidonic acid, preformed vitamin A).",
        "caecotrophy": "Ingestion of nutrient-rich soft nocturnal cecal pellets (night feces) by lagomorphs to reabsorb microbial proteins and B-vitamins.",
        "hindgut fermentation": "Microbial fiber digestion taking place in the cecum and large colon of equines, rabbits, and elephants.",
        "colic": "Acute abdominal pain in equines frequently triggered by sudden dietary changes, excess fermentable grain, or low-fiber impaction.",
        "azoturia": "Equine exertional rhabdomyolysis (Monday morning disease) associated with high carbohydrate feeding during stall rest followed by sudden work.",
        "in vitro dry matter digestibility": "Laboratory test simulating ruminal and enzymatic digestion (Tilley and Terry technique) to estimate in vivo forage digestibility.",
        "tilley and terry method": "Two-stage in vitro digestion technique using rumen liquor followed by acid-pepsin incubation to estimate feed digestibility.",
        "nylon bag technique": "In situ or in sacco technique measuring ruminal disappearance kinetics of feed suspended in porous polyester bags inside rumen-fistulated animals.",
        "near infrared reflectance spectroscopy": "Rapid, non-destructive instrumental method (NIRS) predicting feed chemical composition based on light absorption in the near-infrared spectrum.",
        "true digestibility": "Digestibility value corrected for metabolic fecal nitrogen or endogenous nutrient losses, reflecting actual dietary absorption.",
        "apparent digestibility": "Percentage of ingested nutrient not recovered in feces, without subtracting endogenous metabolic secretions: (Intake - Fecal) / Intake * 100.",
        "associative effect": "Non-additive digestive interaction where the combined feeding of two ingredients yields a nutritive value different from the sum of their individual values.",
        "acid detergent insoluble nitrogen": "Nitrogen bound irreversibly to fiber (ADIN), quantifying heat-damaged, Maillard-complexed, indigestible protein in hays and silages.",
        "neutral detergent insoluble crude protein": "Protein fraction associated with the cell wall (NDICP), degraded slowly in the rumen.",
        "crude ash": "Total inorganic mineral residue remaining after incinerating organic matter at 550°C in a muffle furnace.",
        "organic matter": "Total combustible dry matter fraction calculated as 100 minus Total Ash percentage.",
        "pellet durability index": "Standardized measure (PDI) quantifying the physical resistance of pelleted feeds to mechanical crumbling during transport and handling.",
        "digestibility coefficient": "The proportion of a nutrient digested and absorbed, expressed as a decimal or percentage of total intake.",
        "fermentable metabolizable energy": "The proportion of metabolizable energy available to rumen microorganisms for microbial protein synthesis.",
        "microscopic feed examination": "Visual and stereomicroscopic inspection of ground feed ingredients to detect adulterants, weed seeds, insect fragments, and mold damage.",
        "basal metabolic rate": "Minimum energy expended by an awake animal at complete mental and physical rest in a thermoneutral environment in post-absorptive state.",
        "thermoneutral zone": "Environmental temperature range within which an animal maintains normal body temperature without expending additional energy for heat production or dissipation.",
        "lower critical temperature": "Ambient temperature below which an animal must elevate metabolic heat production to prevent hypothermia.",
        "upper critical temperature": "Ambient temperature above which an animal must activate energy-demanding evaporative cooling mechanisms (sweating, panting) to avoid hyperthermia.",
        "heat of fermentation": "Heat dissipated by anaerobic microbial fermentation of carbohydrates within the reticulo-rumen and large intestine.",
        "specific dynamic action": "The obligatory postprandial elevation in heat production resulting from the ingestion, digestion, and intermediary metabolism of nutrients.",
        "energy balance": "Difference between metabolizable energy intake and total energy expenditure; positive during growth/fattening, negative in early lactation.",
        "net energy for maintenance": "The portion of net energy ($NE_m$) required solely to sustain vital physiological functions and body equilibrium without gain or loss.",
        "net energy for production": "The fraction of net energy ($NE_p$) stored in accreted tissues (growth $NE_g$), milk ($NE_l$), wool, or secreted in eggs.",
        "respiratory quotient": "Molar ratio of carbon dioxide expired to oxygen consumed ($RQ = CO_2 / O_2$), identifying the predominant metabolic substrate being oxidized.",
        "brouwer's equation": "Statutory indirect calorimetry formula calculating animal heat production from oxygen consumed, $CO_2$ and $CH_4$ produced, and urinary nitrogen excreted.",
        "apparent metabolizable energy": "Gross energy of poultry feed minus gross energy of total excreta (feces and urine combined), abbreviated AME.",
        "true metabolizable energy": "Metabolizable energy value corrected for endogenous metabolic and urinary energy losses (TME), standardized by Sibbald.",
        "methane energy loss": "Combustible gaseous energy lost via ruminal eructation (typically 6–10% of gross energy), produced by methanogenic archaea.",
        "heat production": "Total thermal energy generated by an animal body, calculated as the sum of basal metabolism, activity, and heat increment.",
        "ideal protein concept": "Protein formulation approach providing the exact required balance of all essential amino acids relative to lysine without surplus or deficiency.",
        "essential amino acid index": "Geometric mean ratio of essential amino acids in a test feed relative to the amino acid profile of whole egg reference protein.",
        "chemical score": "Measure of protein quality defined by the percentage ratio of the first limiting amino acid in test protein compared to whole egg protein.",
        "pdcaas": "Protein Digestibility-Corrected Amino Acid Score evaluating protein quality based on amino acid requirements and fecal digestibility.",
        "metabolizable protein": "The true protein absorbed by the small intestine, comprising digestible microbial true protein and digestible rumen undegradable protein.",
        "microbial true protein": "The amino acid-containing fraction of microbial crude protein (approx 80%), excluding microbial nucleic acid nitrogen.",
        "nitrogen-to-sulfur ratio": "Dietary ratio of nitrogen to sulfur, required at 10:1 to 12:1 in ruminants to enable microbial synthesis of methionine and cysteine.",
        "lysine": "Basic essential amino acid, typically the first limiting amino acid in cereal-based swine and poultry diets.",
        "methionine": "Sulfur-containing essential amino acid, typically the first limiting amino acid in soybean-based poultry diets and high-producing dairy cows.",
        "threonine": "Hydroxyl-containing essential amino acid, often the second or third limiting amino acid in swine and broiler rations.",
        "tryptophan": "Indole essential amino acid that serves as a metabolic precursor for the neurotransmitter serotonin and vitamin B3 (niacin).",
        "arginine": "Essential amino acid in avian species due to their lack of a functional urea cycle, required for protein synthesis and uric acid formation.",
        "endogenous urinary nitrogen": "Daily urinary nitrogen excretion originating from mandatory basal tissue catabolism when an animal is fed a protein-free diet.",
        "metabolic fecal nitrogen": "Endogenous nitrogen present in feces (sloughed mucosal cells, digestive enzymes, microbial debris) not derived from unabsorbed dietary protein.",
        "transamination": "Enzymatic transfer of an amino group from an amino acid to an alpha-keto acid, catalyzed by PLP-dependent transaminases (AST, ALT).",
        "amylose": "Linear polysaccharide fraction of starch composed of D-glucose units linked exclusively by alpha-1,4 glycosidic bonds.",
        "amylopectin": "Highly branched polysaccharide fraction of starch with alpha-1,4 linear linkages and alpha-1,6 branch points every 24–30 glucose units.",
        "cellulose": "Linear unbranched homopolysaccharide of D-glucose linked by beta-1,4 bonds, resistant to mammalian enzymes and digested only by microbial cellulases.",
        "hemicellulose": "Branched heteropolysaccharide of plant cell walls containing pentoses (xylose, arabinose), hexoses (galactose, mannose), and uronic acids.",
        "lignin": "Indigestible polyphenolic plant polymer of phenylpropane alcohols (p-coumaryl, coniferyl, sinapyl) that encrusts cell-wall cellulose microfibrils.",
        "pectin": "Water-soluble structural heteropolysaccharide of middle lamellae in plant cells, composed of alpha-1,4-linked D-galacturonic acid units.",
        "inulin": "Storage homopolysaccharide composed of linear chains of fructose units (fructan) linked by beta-2,1 bonds, found in chicory and tubers.",
        "acetate-to-propionate ratio": "Molar ratio of acetate to propionate in rumen fluid, normally 3:1 to 4:1 on forage diets; dropping below 2.2:1 causes milk fat depression.",
        "biohydrogenation": "Microbial detoxification process in the rumen converting toxic dietary unsaturated fatty acids into saturated stearic acid (C18:0).",
        "conjugated linoleic acid": "Positional and geometric isomers of linoleic acid (CLA), notably cis-9, trans-11 CLA (rumenic acid) with anticarcinogenic properties.",
        "trans-10 cis-12 cla": "Alternate biohydrogenation intermediate formed during high-grain feeding that downregulates mammary SREBP-1c and causes milk fat depression.",
        "milk fat depression": "Substantial drop in milk butterfat percentage (by 30–50%) caused by trans-10, cis-12 CLA inhibiting de novo mammary lipid synthesis.",
        "prill fat": "Fractionated, fully hydrogenated saturated fatty acids (predominantly stearic acid) manufactured into spherical beads that resist ruminal breakdown.",
        "non-starch polysaccharides": "Complex cell wall carbohydrates (NSPs) including arabinoxylans, beta-glucans, and pectins that cause high digesta viscosity in poultry.",
        "arabinoxylans": "Major non-starch polysaccharides in wheat and rye that trap water and elevate intestinal digesta viscosity in broilers.",
        "beta-glucans": "Glucose polymers in barley and oats with mixed beta-1,3 and beta-1,4 linkages, causing sticky wet droppings in young chicks.",
        "starch gelatinization": "Thermal and hydrolytic disruption of the crystalline structure of starch granules, enhancing accessibility to digestive amylases.",
        "alpha-linolenic acid": "Essential omega-3 polyunsaturated fatty acid (18:3 n-3) abundant in green forages and linseed.",
        "arachidonic acid": "Polyunsaturated omega-6 fatty acid (20:4 n-6) strictly essential in cats due to lack of delta-6 desaturase enzyme activity.",
        "lipoprotein lipase": "Endothelial enzyme that hydrolyzes circulating blood triglycerides into free fatty acids for mammary and adipose uptake.",
        "rumen mat": "Coarse, buoyant layer of actively fermenting long fibrous forage particles floating in the dorsal sac of the reticulo-rumen.",
        "rumen liquor": "Liquid phase of rumen contents containing dissolved VFAs, ammonia, enzymes, and suspended bacteria and protozoa.",
        "ciliate protozoa": "Large unicellular ruminal microorganisms (e.g. Entodinium, Isotricha) that engulf starch granules and predate bacteria.",
        "entodinium": "Predominant genus of small ciliate protozoa in the rumen, specializing in the rapid engulfment and storage of starch granules.",
        "fibrobacter succinogenes": "Major Gram-negative cellulolytic bacterium in the rumen, adhering to plant cell walls to hydrolyze crystalline cellulose.",
        "ruminococcus albus": "Key ruminal cellulolytic coccus that produces cellulases and xylanases to digest structural carbohydrates.",
        "ruminococcus flavefaciens": "Yellow-pigmented cellulolytic rumen bacterium producing cellulosome complexes that degrade cellulose and hemicellulose.",
        "butyrivibrio fibrisolvens": "Versatile rumen bacterium active in hemicellulose degradation, butyric acid production, and unsaturated fatty acid biohydrogenation.",
        "methanobrevibacter ruminantium": "Dominant methanogenic archaeon in the rumen that scavenges hydrogen gas to reduce carbon dioxide into methane.",
        "streptococcus bovis": "Rapidly growing amylolytic rumen bacterium that proliferates on high-grain diets, converting starch into excess lactic acid.",
        "megasphaera elsdenii": "Lactate-utilizing rumen bacterium that ferments lactic acid into propionate and butyrate, protecting cattle from acute acidosis.",
        "defaunation": "Complete chemical or dietary elimination of ciliate protozoa from the rumen, which improves nitrogen retention in high-roughage diets.",
        "reticular groove": "Muscular anatomical fold (esophageal groove) that directs suckled milk straight from esophagus to abomasum, bypassing the undeveloped rumen in calves.",
        "ruminal papillae": "Tongue-shaped vascular projections lining the ventral and cranial sacs of the rumen, absorbing volatile fatty acids.",
        "rumen parakeratosis": "Pathological hardening, clumping, and hyperkeratinization of ruminal papillae caused by feeding finely ground, high-concentrate diets.",
        "subacute ruminal acidosis": "Metabolic disorder (SARA) in dairy cows characterized by intermittent drops in rumen pH between 5.2 and 5.8, reducing intake and milk fat.",
        "lactic acidosis": "Severe ruminal and metabolic acidosis occurring when rumen pH plunges below 5.0 due to massive accumulation of D- and L-lactic acid.",
        "frothy bloat": "Acute ruminal tympany caused by stable foam trapping fermentation gas, triggered by lush legumes (saponins, soluble leaf proteins).",
        "free-gas bloat": "Physical failure of eructation caused by esophageal choke, foreign bodies, or vagal nerve dysfunction, causing dorsal gas distension.",
        "synergistes jonesii": "Specialized ruminal bacterium capable of degrading toxic 3,4-DHP (from mimosine in Subabul), protecting cattle from leucaena toxicity.",
        "hydroxyapatite": "Complex crystalline mineral structure of calcium and phosphate [$3Ca_3(PO_4)_2 \\cdot Ca(OH)_2$] comprising 99% of bone and tooth enamel.",
        "ionized calcium": "Biologically active, unbound fraction of serum calcium ($Ca^{2+}$) regulating neuromuscular transmission and blood clotting.",
        "parathyroid hormone": "Calciotropic peptide hormone secreted by parathyroid chief cells in response to hypocalcemia, stimulating bone osteoclasts and renal calcitriol.",
        "calcitriol": "Active hormonal metabolite of Vitamin D [$1,25-(OH)_2-D_3$] synthesized in kidneys that upregulates enterocyte Calbindin-D9k.",
        "calcitonin": "Thyroid C-cell peptide hormone secreted during hypercalcemia that inhibits osteoclastic bone resorption to lower circulating blood calcium.",
        "dietary cation-anion difference": "Mathematical balance (DCAD) of dietary macro-ions: $(Na^+ + K^+) - (Cl^- + S^{2-})$, manipulated to prevent parturient hypocalcemia.",
        "downer cow syndrome": "Prolonged recumbency in dairy cows following treated milk fever, caused by ischemic muscle necrosis, pelvic fracture, or nerve injury.",
        "hypomagnesemia": "Subnormal blood serum magnesium (<1.8 mg/dL) producing neuromuscular irritability, tetany, convulsions, and sudden death.",
        "lactation tetany": "Hypomagnesemic tetany in high-producing lactating cows grazing lush, potassium-fertilized pastures.",
        "bran disease": "Nutritional secondary hyperparathyroidism in horses fed excess wheat bran (high P, low Ca), causing fibrous facial bone enlargement (big head).",
        "epiphyseal growth plate": "Cartilaginous region at ends of long bones where longitudinal ossification occurs; fails to mineralize in rickets.",
        "thiaminase": "Enzyme that cleaves and inactivates thiamine (found in bracken fern and certain rumen bacteria), inducing polioencephalomalacia.",
        "falling disease": "Sudden fatal heart failure in cattle caused by chronic copper deficiency leading to myocardial atrophy and fibrosis.",
        "steely wool": "Loss of natural fleece crimp and tensile strength in sheep due to copper deficiency impairing lysyl oxidase keratin crosslinking.",
        "thiomolybdates": "Complex ions ($[MoS_4]^{2-}$) formed in the rumen from molybdenum and sulfur that bind copper irreversibly, causing secondary copper deficiency.",
        "teart pastures": "Pastures high in molybdenum that induce severe copper-deficiency scours, watery diarrhea, and emaciation in grazing cattle.",
        "iron dextran": "Injectable sterile colloidal iron-carbohydrate complex administered intramuscularly (150–200 mg) to prevent piglet anemia.",
        "carbonic anhydrase": "Zinc-dependent metalloenzyme catalyzing the reversible hydration of carbon dioxide ($CO_2 + H_2O \\rightleftharpoons H_2CO_3$).",
        "alkaline phosphatase": "Zinc-containing homodimeric enzyme essential for bone mineralization and cellular phosphate ester hydrolysis.",
        "thyroxine": "Tetraiodothyronine ($T_4$), the principal iodine-containing hormone secreted by the thyroid gland to regulate basal metabolic rate.",
        "triiodothyronine": "The biologically active thyroid hormone ($T_3$) formed by peripheral deiodination of thyroxine, regulating mitochondrial gene expression.",
        "glutathione peroxidase": "Selenium-dependent intracellular antioxidant enzyme (GSH-Px) that converts toxic hydrogen peroxide and lipid peroxides into water.",
        "alkali disease": "Chronic selenium toxicosis in livestock grazing seleniferous plants, characterized by emaciation, mane/tail alopecia, and hoof sloughing.",
        "blind staggers": "Acute selenium toxicosis manifesting as ataxia, aimless wandering, circling, visual impairment, and respiratory failure.",
        "mottled enamel": "Chalky white, yellow, or brown pitting of dental enamel caused by chronic ingestion of high-fluorine drinking water during tooth development.",
        "area-specific mineral mixture": "Mineral formulations tailored to regional geochemical soil and crop-residue deficiencies, standardized by NDDB and ICAR.",
        "thiamine pyrophosphate": "Biochemically active coenzyme form of thiamine (TPP) required for pyruvate dehydrogenase and alpha-ketoglutarate dehydrogenase complexes.",
        "cerebrocortical necrosis": "Pathological brain lesion (CCN) in ruminants with thiamine deficiency, showing laminar necrosis and autofluorescence under UV light.",
        "flavin adenine dinucleotide": "Riboflavin-derived redox coenzyme (FAD) accepting two electrons in the Krebs cycle (succinate dehydrogenase) and beta-oxidation.",
        "flavin mononucleotide": "Riboflavin-derived coenzyme (FMN) functioning as an electron carrier in Complex I of the mitochondrial respiratory chain.",
        "nicotinamide adenine dinucleotide": "Niacin-derived coenzyme (NAD) serving as the primary universal electron acceptor in cellular glycolysis and citric acid cycle.",
        "coenzyme a": "Pantothenic acid-containing carrier (CoA-SH) that activates and transfers acyl groups in the Krebs cycle and fatty acid metabolism.",
        "pyridoxal phosphate": "The active coenzyme form of Vitamin B6 (PLP) serving as the obligatory prosthetic group for transaminases and amino acid decarboxylases.",
        "avidin": "Tetrameric glycoprotein in raw egg white that binds dietary biotin with near-irreversible affinity, preventing intestinal absorption.",
        "tetrahydrofolate": "The metabolically active coenzyme form of folic acid (THF) functioning as a universal carrier of one-carbon methyl and formyl units.",
        "methylmalonyl-coa mutase": "Vitamin B12-dependent mitochondrial enzyme converting propionyl-derived methylmalonyl-CoA into succinyl-CoA for ruminant gluconeogenesis.",
        "l-gulonolactone oxidase": "Hepatic/renal terminal enzyme synthesizing ascorbic acid from glucose; absent in primates, guinea pigs, and fruit bats.",
        "retinal": "Vitamin A aldehyde, the chromophore of rhodopsin in retinal rods that undergoes cis-to-trans photoisomerization in vision.",
        "retinoic acid": "Vitamin A acid metabolite acting as a nuclear hormone receptor ligand (RAR/RXR) to regulate epithelial differentiation and gene transcription.",
        "calbindin": "Intestinal calcium-binding protein induced transcriptionally by calcitriol to facilitate active transcellular calcium absorption.",
        "gamma-glutamyl carboxylase": "Microsomal Vitamin K-dependent enzyme converting glutamate to gamma-carboxyglutamate (Gla) on clotting factors II, VII, IX, and X.",
        "menadione": "Synthetic provitamin K3, fat- or water-soluble, added to poultry and swine premixes to prevent hemorrhagic syndromes.",
        "total mixed ration": "Feeding system (TMR) where all roughages, concentrates, minerals, and vitamins are blended homogeneously to prevent ingredient sorting.",
        "complete feed block": "Solid densified block (CFB) of chopped crop residue and concentrate mash compacted under hydraulic pressure for disaster and scarcity feeding.",
        "chemostatic intake regulation": "Physiological satiety mechanism where circulating nutrients (glucose in monogastrics, propionate in ruminants) signal brain satiety centers.",
        "distension intake regulation": "Physical intake limitation in herbivores where rumen or stomach fill by indigestible fiber halts consumption through stretch receptors.",
        "negative energy balance": "Metabolic deficit in early lactation where energy expenditure for milk outstrips voluntary feed intake, mobilizing body fat reserves.",
        "body condition score": "Standardized subjective palpation system (scale 1–5 or 1–9) assessing subcutaneous fat depth and energy reserves in dairy animals.",
        "ketosis": "Metabolic disease (acetonemia) of high-yielding dairy cows in negative energy balance, characterized by hypoglycemia and elevated ketone bodies.",
        "fatty liver syndrome": "Hepatic lipidosis in obese periparturient cows caused by massive mobilization of non-esterified fatty acids exceeding liver oxidative capacity.",
        "pregnancy toxemia": "Twin lamb disease in pregnant ewes carrying multiple fetuses during late gestation, caused by hypoglycemia and hyperketonemia.",
        "urea-molasses mineral block": "Solid lick block (UMMB) providing slow, sustained release of non-protein nitrogen, fermentable energy, and minerals for straw-fed cattle.",
        "transition period": "The critical biological window from 3 weeks pre-calving to 3 weeks post-calving, characterized by dramatic hormonal and metabolic shifts.",
        "lead feeding": "Progressively increasing concentrate allowance in late dry cows 2–3 weeks pre-calving to adapt rumen microbes to high-starch lactation diets.",
        "phase feeding system": "Nutritional management strategy altering dietary protein and energy ratios across defined age or lactation stages to reduce waste.",
        "hammer mill": "High-speed mechanical grinder utilizing rotating steel beaters and screen sieves to shatter grains and cakes into uniform particle sizes.",
        "roller mill": "Particle size reduction equipment utilizing grooved counter-rotating steel cylindrical rolls to crush grain with minimal fine dust.",
        "steam flaking": "Thermal processing method exposing grains to 100°C steam for 20–30 min followed by rolling into flat flakes, gelatinizing >60% starch.",
        "micronization": "Infrared radiant heat processing of whole cereal grains to rapid internal expansion, gelatinizing starch and improving digestibility.",
        "ring die": "Perforated circular steel cylinder inside a pellet mill through which hot conditioned mash is compressed by internal rollers.",
        "counterflow cooler": "Efficient vertical cooling bin where ambient air is drawn upwards against descending hot pellets to remove heat and moisture.",
        "homofermentative lab": "Lactic acid bacteria (e.g. Lactobacillus plantarum) that ferment hexose sugars exclusively into lactic acid, dropping silage pH rapidly.",
        "heterofermentative lab": "Lactic acid bacteria (e.g. Lactobacillus buchneri) producing lactic acid, acetic acid, ethanol, and CO2, enhancing aerobic stability.",
        "spontaneous combustion": "Uncontrolled auto-ignition of moist haystacks (>25% moisture) resulting from biological heating followed by chemical pyrophoric oxidation.",
        "spent mushroom substrate": "Residual lignocellulosic straw remaining after edible mushroom harvest, biologically delignified and enriched in microbial protein.",
        "laccase": "Copper-containing oxidative enzyme secreted by white-rot fungi that breaks down polyphenolic rings in lignin without requiring hydrogen peroxide.",
        "lignin peroxidase": "Heme-containing fungal enzyme (LiP) capable of oxidizing non-phenolic lignin aromatic rings, cleaving recalcitrant cell-wall bonds.",
        "dhurrin": "Cyanogenic glycoside present in young sorghum plants that hydrolyzes to release toxic hydrocyanic acid (HCN).",
        "histotoxic anoxia": "Cellular respiratory paralysis where tissues are unable to utilize oxygen because cyanide blocks mitochondrial cytochrome c oxidase.",
        "sodium nitrite": "Cyanide poisoning antidote component that oxidizes hemoglobin into methemoglobin, which binds free cyanide as cyanmethemoglobin.",
        "sodium thiosulfate": "Cyanide antidote component providing sulfur for the hepatic enzyme rhodanese to convert cyanide into non-toxic thiocyanate.",
        "ferrous sulfate antidote": "Iron supplement mixed in 1:1 weight ratio with cottonseed cake to bind free gossypol into an insoluble, non-absorbable complex.",
        "kunitz inhibitor": "Major heat-labile protein in raw soybeans that binds and inactivates intestinal trypsin, causing pancreatic hypertrophy.",
        "bowman-birk inhibitor": "Dual-headed soybean protein that inhibits both trypsin and chymotrypsin simultaneously, reducing protein digestion in chicks.",
        "condensed tannins": "Non-hydrolyzable polymers of flavan-3-ols (proanthocyanidins) in plants that bind proteins; beneficial at 2–3%, anti-nutritive >5%.",
        "polyethylene glycol": "Synthetic inert polymer (PEG-4000/6000) that binds dietary tannins with high affinity, neutralizing their anti-nutritional effects.",
        "3,4-dhp": "3-hydroxy-4(1H)-pyridone, the toxic goitrogenic metabolite formed in the rumen from mimosine, causing alopecia and thyroid enlargement.",
        "goitrin": "Active antithyroid compound (oxazolidine-2-thione) formed by myrosinase hydrolysis of rapeseed glucosinolates, inhibiting thyroxine synthesis.",
        "myrosinase": "Endogenous plant thioglucosidase enzyme that hydrolyzes glucosinolates upon tissue crushing into pungent toxic isothiocyanates and goitrin.",
        "calcium oxalate crystals": "Insoluble needle-like crystals formed when dietary soluble oxalates bind systemic calcium, predisposing to urolithiasis and hypocalcemia.",
        "microbial phytase": "Exogenous fungal or bacterial 6-phytase enzyme added to poultry and swine feeds to release bioavailable orthophosphate from phytic acid.",
        "aflatoxin b1": "The most potent naturally occurring hepatotoxin and carcinogen produced by Aspergillus flavus on stored oilseed cakes and maize.",
        "aflatoxin m1": "4-hydroxylated metabolite of aflatoxin B1 excreted into the milk of dairy cows consuming contaminated feed (FSSAI limit 0.5 ppb).",
        "hydrated sodium calcium aluminosilicate": "Inert clay binder (HSCAS) added to animal rations to tightly adsorb aflatoxin molecules in the digestive tract lumen.",
        "nitrate toxicity": "Accumulation of excess plant nitrate in rumen fluid, reduced to nitrite which oxidizes hemoglobin to brown methemoglobin.",
        "methylene blue antidote": "Reducing agent administered intravenously (1–2 mg/kg BW) to treat nitrate-induced methemoglobinemia in ruminants.",
        "sweet clover poisoning": "Coagulopathy in cattle fed moldy sweet clover containing dicoumarol, an antagonist of vitamin K that causes fatal hemorrhages.",
        "pre-starter diet": "Highly digestible, nutrient-dense diet fed to broiler chicks in the first 7 days of life to stimulate gastrointestinal development.",
        "crumbles": "Coarsely crushed feed pellets sized specifically for young chicks, poults, and piglets that cannot ingest standard pellets.",
        "calorie-protein ratio": "The ratio of metabolizable energy (kcal/kg) to crude protein percentage in poultry and swine diets, governing lean meat deposition.",
        "eggshell calcification": "Uterine deposition of calcium carbonate ($CaCO_3$) onto the eggshell membrane in laying hens, requiring 3.5–4.2% dietary calcium.",
        "fish meal": "High-protein (55–65% CP) marine by-product rich in lysine, methionine, and minerals, used in poultry starter and swine diets.",
        "wet droppings": "Watery poultry excreta caused by elevated intestinal viscosity from soluble non-starch polysaccharides in wheat or barley diets.",
        "non-starch polysaccharidases": "Exogenous dietary enzymes (xylanases, beta-glucanases) that cleave soluble fiber in poultry feeds, eliminating wet droppings.",
        "creep feed": "Palatable, nutrient-dense concentrate diet provided in an exclusive enclosure accessible only to nursing suckling piglets or calves.",
        "colostrum": "First milk secreted postpartum, exceptionally rich in maternal immunoglobulins (IgG), fat, and growth factors essential for passive immunity.",
        "feline lower urinary tract disease": "Clinical syndrome (FLUTD) in cats often associated with magnesium ammonium phosphate (struvite) urolithiasis in alkaline urine.",
        "struvite uroliths": "Magnesium ammonium phosphate ($MgNH_4PO_4 \\cdot 6H_2O$) urinary calculi formed in felines consuming high-magnesium diets with high urine pH.",
        "cecotrophy": "Behavioral adaptation in rabbits (lagomorphs) consuming nutrient-rich soft cecal night feces to re-ingest microbial protein and vitamins.",
        "soft night feces": "Mucus-coated cecal fermentative pellets produced by lagomorphs during nocturnal hours, enriched in microbial proteins and B-complex vitamins.",
        "equine colic": "Acute abdominal crisis in horses caused by intestinal impaction, gas distension, or spasmodic cramping from improper feeding.",
        "monday morning disease": "Equine exertional rhabdomyolysis occurring when horses receive full grain rations during weekend stall rest and resume hard work on Monday.",
        "in sacco degradability": "Rate and extent of feed dry matter or protein breakdown inside porous polyester bags suspended in the rumen of fistulated animals over time.",
        "effective degradability": "Mathematical integration of ruminal degradation rate (c) and passage rate (k) calculating actual nutrient digestion: ED = a + (b * c) / (c + k).",
        "passage rate": "The fractional rate (kp, %/hour) at which undigested feed particles flow out of the reticulo-rumen into the lower digestive tract.",
        "potentially digestible ndf": "The fraction of neutral detergent fiber (pdNDF) susceptible to microbial fermentation given sufficient ruminal residence time.",
        "indigestible ndf": "The recalcitrant, lignified cell wall fraction (iNDF) completely resistant to microbial enzymatic hydrolysis even after 240 hours of fermentation.",
        "penn state particle separator": "Standardized set of graduated sieves (19mm, 8mm, 4mm, and bottom pan) used on farms to quantify the particle size distribution of forages and TMR.",
        "physically effective ndf": "The fraction of NDF (peNDF) in particles coarse enough (>4 mm) to stimulate cud chewing, rumination, and the formation of a buoyant rumen mat.",
        "carbon tetrachloride test": "Specific gravity flotation test detecting adulteration of wheat bran or rice polish with sand or pulverized silica using organic solvents.",
        "urease activity test": "pH-shift diagnostic test determining whether soybean meal has been sufficiently heat-treated to destroy antinutritional trypsin inhibitors without overcooking.",
        "pepsin digestibility test": "Standard in vitro quality test evaluating the bioavailability and processing quality of animal protein meals (such as fish meal and meat meal) using dilute 0.2% pepsin in HCl.",
        "metabolic body weight": "Body weight raised to the 0.75 power (W^0.75), representing the active physiological surface area and baseline for calculating maintenance energy requirements across mammalian species.",
        "fasting heat production": "The quantity of heat produced by an animal confined in a thermoneutral environment after all previously ingested nutrients have been completely absorbed (post-absorptive state).",
        "surface area law": "Rubner's physiological rule stating that basal heat production per unit of surface area is approximately constant across warm-blooded homeothermic animals.",
        "efficiency of energy utilization": "The efficiency factors (km for maintenance, kl for milk lactation, kf for body fattening) representing the fraction of metabolizable energy converted into net energy without being lost as heat increment.",
        "net energy for lactation": "The concentration of net energy (NEl) required per unit of dry matter to support both maternal maintenance and milk synthesis in dairy cattle.",
        "net energy for gain": "The net energy fraction (NEg) specifically accreted within newly deposited adipose and muscular tissues in growing or feedlot animals.",
        "calorific value": "The gross heat of combustion liberated upon complete oxidation of 1 gram of organic matter: 4.15 kcal for carbohydrates, 5.65 kcal for proteins, and 9.40 kcal for lipids.",
        "blaxter's feeding system": "A thermodynamic net energy feeding standard developed in the UK utilizing metabolizable energy and dietary metabolizability (q = ME/GE) to predict ruminant performance.",
        "cncps protein fractions": "Cornell Net Carbohydrate and Protein System partitioning crude protein into Fraction A (NPN), B1 (rapidly degraded), B2 (moderately degraded), B3 (slowly degraded cell wall protein), and C (indigestible ADIN).",
        "digestible true protein": "The portion of true dietary protein (polypeptides) absorbed across the intestinal epithelium, excluding non-protein nitrogen compounds.",
        "protein equivalent": "Historical European evaluation metric balancing true protein and digestible crude protein: PE = (DCP + Digestible Pure Protein) / 2.",
        "blood urea nitrogen": "Concentration of nitrogen present as circulating urea in serum or plasma (BUN, normal 10-20 mg/dL), serving as an index of dietary protein-energy synchrony.",
        "milk urea nitrogen": "Diagnostic concentration of urea in dairy milk (MUN, optimal 10-14 mg/dL), reflecting rumen ammonia levels and dietary crude protein balance.",
        "purine derivatives excretion": "Total urinary output of allantoin and uric acid, used non-invasively to quantify total microbial crude protein synthesis in the rumen.",
        "synthetic amino acids": "Industrially produced crystalline amino acids (L-lysine HCl, DL-methionine, L-threonine) supplemented in swine and poultry diets to balance ideal protein without excess CP.",
        "methionine hydroxy analogue": "Liquid or dry calcium salt precursor of DL-methionine (MHA, 2-hydroxy-4-methylthiobutanoic acid) converted enzymatically into active L-methionine in animal tissues.",
        "rumen-protected amino acids": "Crystalline lysine or methionine microencapsulated in pH-sensitive polymers or ethylcellulose lipids to resist ruminal microbial degradation and absorb in the small intestine.",
        "non-fibrous carbohydrates": "Readily digestible cellular non-structural carbohydrates (NFC) calculated by difference: 100 - (NDF + CP + EE + Total Ash).",
        "non-structural carbohydrates": "Carbohydrates stored inside plant cell contents (sugars, starches, and organic acids) measured by direct chemical extraction (NSC).",
        "resistant starch": "The fraction of starch that escapes enzymatic hydrolysis in the small intestine of monogastrics, passing to the cecum and colon for microbial fermentation.",
        "beta-hydroxybutyrate": "The principal circulating ketone body (BHBA) formed by the ruminal epithelium from absorbed butyric acid and oxidized by peripheral tissues for energy.",
        "acetoacetate": "A primary four-carbon ketone body produced in the liver during excessive fatty acid beta-oxidation, capable of spontaneously decarboxylating into acetone.",
        "acetone": "A volatile, sweet-smelling waste ketone body excreted via breath and urine in ketotic dairy cows and diabetic animals.",
        "saponification value": "The number of milligrams of potassium hydroxide (KOH) required to completely saponify 1 gram of fat, inversely proportional to the mean molecular weight of fatty acids.",
        "iodine value": "The number of grams of iodine absorbed by 100 grams of fat or oil, directly quantifying the degree of chemical unsaturation (double bonds).",
        "peroxide value": "Chemical indicator of primary lipid rancidity measuring milliequivalents of active peroxide oxygen per kilogram of fat.",
        "free fatty acids": "Unesterified fatty acids liberated from triglyceride glycerol backbones by moisture and bacterial or seed lipases, indicating hydrolytic fat spoilage.",
        "thiobarbituric acid value": "Analytical test (TBA value) measuring malondialdehyde concentrations to quantify secondary oxidative rancidity in fats and mixed feeds.",
        "omega-6 to omega-3 ratio": "Dietary balance between linoleic acid (n-6) and alpha-linolenic acid (n-3), ideally maintained between 4:1 and 6:1 to moderate inflammatory responses.",
        "cellulosome": "A complex multi-enzyme catalytic nanomachine anchored to the outer membrane of cellulolytic rumen bacteria (like Ruminococcus flavefaciens) that synergistically hydrolyzes crystalline plant cell walls.",
        "holotrich protozoa": "Oval, cilia-covered rumen protozoa (Isotricha and Dasytricha) that assimilate soluble plant sugars into intracellular amylopectin granules, stabilizing rumen pH.",
        "entodiniomorph protozoa": "Rigid, armored rumen ciliate protozoa (such as Entodinium and Epidinium) with specialized mouthparts that engulf and store particulate starch grains.",
        "rumen fungi": "Obligately anaerobic zoosporic fungi (Neocallimastix, Piromyces) whose branching rhizoids physically penetrate and fracture tough, lignified plant cuticles in coarse straws.",
        "transfaunation": "Therapeutic administration of fresh, filtered rumen liquor from a healthy donor cow into a sick animal with rumen hypomotility or microbial dysbiosis.",
        "primary rumen contractions": "Biphasic mixing cycles (A-waves, ~1 per minute) of the reticulo-rumen that circulate digesta, promote microbial contact, and stratify fibrous particles into the rumen mat.",
        "secondary rumen contractions": "Coordinated monophasic contractions (B-waves) of the rumen dorsal sac that propel accumulated fermentation gases (CO2 and CH4) forward toward the cardia for eructation.",
        "vagal indigestion": "Functional motor failure of the bovine stomach compartments (Hoflund syndrome) caused by injury to the vagus nerve, resulting in massive abdominal distension (papple shape).",
        "omasal transport": "The pumping action of the bipartite omasal canal and omasal leaves that propels fine digesta from the reticulum into the abomasum while reabsorbing water and electrolytes.",
        "phytase superdosing": "The practice of supplementing dietary microbial phytase at 3 to 4 times the standard level (>1500 FTU/kg) in poultry diets to completely eliminate the antinutritional 'phytate effect'.",
        "osteolysis": "The physiological resorption of bone matrix and hydroxyapatite mineral mediated by osteoclasts and stimulated by parathyroid hormone during systemic calcium deficits.",
        "stiff lamb disease": "Nutritional muscular dystrophy in young growing lambs caused by concurrent deficiencies of Vitamin E and selenium, producing bilateral hindleg stiffness and white chalky myocardial lesions.",
        "exudative diathesis": "Severe subcutaneous edema and bluish-green fluid accumulation beneath the ventral skin of chicks resulting from selenium-deficiency-induced capillary permeability.",
        "achromotrichia": "Loss of normal melanin pigmentation in hair or wool (producing a washed-out, reddish, or gray coat and 'spectacle eyes' in cattle) caused by copper-deficiency-induced tyrosinase failure.",
        "slipped tendon": "Avian crippling deformity (perosis) characterized by flattening of the tibiometatarsal joint and lateral slippage of the gastrocnemius tendon, caused by manganese deficiency.",
        "allotriophagy": "Abnormal depraved appetite (pica) characterized by animals chewing wood, soil, rags, or bones, classically triggered by phosphorus, sodium, or cobalt deficiency.",
        "copper toxicity in sheep": "Fatal hemolytic crisis in sheep (the species most sensitive to excess copper) where sudden release of hepatic copper causes massive intravascular hemolysis, hemoglobinuria, jaundice, and 'gunmetal' colored kidneys.",
        "osteosclerosis": "Pathological hardening and abnormal chalky chalkiness of bone tissue caused by chronic high-fluorine intake from rock phosphate or fluoride-rich deep well water.",
        "hypokalemic muscular weakness": "Profound muscular flaccidity, recumbency, and cardiac arrhythmia occurring in animals suffering from severe potassium depletion during prolonged anorexia or diarrhea.",
        "ergocalciferol": "Vitamin D2, the form of vitamin D synthesized in sun-cured forages and plants following ultraviolet irradiation of plant ergosterol.",
        "calcidiol": "25-hydroxycholecalciferol [25-(OH)-D3], the major circulating storage metabolite of Vitamin D formed in the liver by the enzyme 25-hydroxylase.",
        "polyneuritis": "Neurological syndrome in birds caused by thiamine (Vitamin B1) deficiency, marked by myelin degeneration of peripheral nerves and spasmodic head retraction ('star-gazing' posture).",
        "black tongue disease": "Severe deficiency disorder in dogs analogous to human pellagra, caused by lack of dietary niacin (nicotinic acid) and marked by necrotizing ulceration of the tongue and oral mucosa.",
        "choline": "Essential quaternary ammonium nutrient functioning as a lipotropic factor to prevent fatty liver, a precursor of the neurotransmitter acetylcholine, and a methyl donor.",
        "hypovitaminosis a metaplasia": "Pathological transformation of delicate secretory columnar or cuboidal epithelial cells into dry, stratified, keratinized squamous epithelium resulting from Vitamin A deficiency.",
        "nutritional encephalomalacia": "Acute neurological condition in young broiler chicks ('crazy chick disease') caused by Vitamin E deficiency, producing ataxia, head twisting, cerebellar hemorrhage, and necrosis.",
        "challenge feeding system": "Systematic feeding strategy where concentrates are increased by 500g daily from 2 weeks pre-partum until peak milk yield is reached to assess individual dairy cow genetic potential.",
        "flushing": "The temporary elevation of nutritional energy allowance fed to breeding ewes 2 to 3 weeks prior to mating to increase ovulation rates and lambing percentage.",
        "stocking rate": "The number of specific livestock units grazing on a defined land or pasture area over a designated operational time period.",
        "peak milk lag": "The physiological phenomenon where maximum daily milk yield occurs at 4 to 6 weeks postpartum, while voluntary feed intake does not peak until 8 to 10 weeks, causing negative energy balance.",
        "close-up dry cow": "Dairy cows in the final 3 weeks prior to anticipated parturition, requiring specialized transition diets formulated with anionic salts (negative DCAD) and moderate concentrates.",
        "far-off dry cow": "Dairy cows during the first 5 to 6 weeks of their dry period when energy and protein requirements are strictly limited to maintenance to prevent over-conditioning.",
        "gelatinization index": "The percentage of raw starch granules whose crystalline molecular structure has been disrupted and solubilized into amorphous gel by heat and steam processing.",
        "expeller processing": "Mechanical extraction of oil from oilseeds using continuous high-pressure revolving worm screws inside a perforated steel barrel, producing expeller oilcakes.",
        "solvent extraction": "Chemical process utilizing organic non-polar solvents (primarily commercial hexane) to recover residual oil from prepressed cakes, leaving de-oiled meals with <1% residual fat.",
        "de-oiled rice bran": "By-product (DORB) remaining after solvent extraction of crude oil from raw rice polish, widely utilized as an economic, high-fiber bulking ingredient in livestock feeds.",
        "decortication": "The mechanical removal of tough outer fibrous seed coats or hulls (such as cottonseeds or sunflower seeds) prior to oil extraction to raise the crude protein percentage of the resulting meal.",
        "pellet crumble": "Whole manufactured feed pellets broken down between corrugated counter-rotating cracking rolls into uniform, bite-sized granules suitable for young chicks and poults.",
        "angle of repose": "The maximum angle of a stable slope formed when granular feed or grain is poured onto a horizontal surface, serving as a mechanical measure of feed flowability.",
        "canavanine": "Toxic non-protein amino acid present in jack beans (Canavalia ensiformis) that competitively antagonizes L-arginine in cellular protein synthesis.",
        "ergotism": "Toxic disease syndrome in livestock caused by ingesting cereal grains or grasses infected with the sclerotia of Claviceps purpurea, producing peripheral gangrene ('fescue foot') and agalactia.",
        "zearalenone": "An estrogenic resorcylic acid lactone mycotoxin produced by Fusarium culmorum in damp maize, causing hyperestrogenism, swollen vulva, and abortions in prepubertal gilts.",
        "deoxynivalenol": "A trichothecene mycotoxin ('vomitoxin' or DON) produced by Fusarium species on small grains that impairs palatability, inducing acute feed refusal and vomiting in pigs.",
        "ochratoxin a": "Potent nephrotoxic and teratogenic mycotoxin synthesized by Aspergillus ochraceus and Penicillium viridicatum, causing severe renal damage and pale, swollen kidneys in poultry.",
        "fumonisin b1": "Mycotoxin produced by Fusarium verticillioides that disrupts cellular sphingolipid biosynthesis, causing fatal equine leukoencephalomalacia and porcine pulmonary edema.",
        "solanine": "Bitter-tasting toxic glycoalkaloid concentrated in the green skin, eyes, and sprouts of sun-exposed potato tubers, causing severe gastroenteritis and neurological depression.",
        "calcium oxalate lithiasis": "Formation of insoluble oxalate stones in the urinary tract of livestock grazing oxalate-rich grasses (like hybrid Napier or setaria) without adequate supplemental calcium.",
        "cecal impaction": "Severe digestive disorder in rabbits and horses where dry, fibrous ingesta obstructs the cecum due to dehydration, low coarse fiber intake, or lack of exercise.",
        "esophageal choke": "Acute physical obstruction of the esophagus in horses, typically caused by greedy bolting of dry, unsoaked feedstuffs like beet pulp pellets or coarse cereal grains.",
        "tying-up syndrome": "Equine exertional rhabdomyolysis characterized by acute muscle cramping, stiffness, sweating, and dark brown myoglobinuria following unaccustomed exercise after carbohydrate-rich resting rations.",
        "gizzard": "The thick-walled, heavily muscled mechanical grinding organ (ventriculus) of the avian digestive system, lined with a tough, abrasive carbohydrate-protein complex known as the koilin layer.",
        "insoluble grit": "Hard, non-digestible crushed granite, quartz, or river stones ingested by poultry that reside in the gizzard to physically crush and grind coarse grains and seeds.",
        "soluble grit": "Digestible particulate calcium sources (such as crushed oyster shells, marble chips, or coarse limestone) that dissolve in the avian gizzard to supply calcium for eggshell formation.",
        "canine pancreatitis": "Acute or chronic enzymatic inflammation of the canine pancreas, frequently triggered by feeding table scraps or high-fat meals, causing severe abdominal pain, vomiting, and dehydration.",
        "heinz body anemia": "Hemolytic anemia in dogs and cats caused by ingesting onions or garlic (Allium species); toxic organic sulfur compounds (N-propyl disulfide) oxidize hemoglobin into precipitated Heinz bodies.",
        "xylitol toxicity": "Rapid, life-threatening crisis in dogs caused by ingesting the artificial sweetener xylitol, which stimulates massive pancreatic insulin release, severe hypoglycemia, and hepatic necrosis.",
        "theobromine toxicity": "Poisoning in dogs resulting from the ingestion of chocolate; the canine liver slowly metabolizes the methylxanthine alkaloid theobromine, inducing tachycardia, hyperthermia, tremors, and seizures."
    },

    // Return all terms as an array of objects: { term, def, category }
    getAll() {
        const out = [];
        const termToCat = {};
        for (const [catName, termList] of Object.entries(this.categories)) {
            for (const t of termList) {
                termToCat[t.toLowerCase()] = catName;
            }
        }

        for (const [term, def] of Object.entries(this.terms)) {
            out.push({
                term: term,
                def: def,
                category: termToCat[term.toLowerCase()] || "General Nutrition"
            });
        }

        // Sort alphabetically by term
        return out.sort((a, b) => a.term.localeCompare(b.term));
    },

    _index: null,
    _regex: null,
    _lookup: null,
    _scrollHooked: false,

    _buildIndex() {
        this._lookup = {};
        const termKeys = Object.keys(this.terms);
        // Sort descending by string length to match multi-word expressions first
        termKeys.sort((a, b) => b.length - a.length);

        termKeys.forEach(t => {
            this._lookup[t.toLowerCase()] = this.terms[t];
        });

        // Safe regex escaping
        const escaped = termKeys.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        this._regex = new RegExp(`\\b(${escaped.join('|')})\\b`, 'gi');
    },

    _tooltipEl: null,
    _activeTermEl: null,
    _hideTimer: null,

    _ensureTooltipEl() {
        if (typeof document === 'undefined') return null;
        if (this._tooltipEl && document.body.contains(this._tooltipEl)) return this._tooltipEl;
        let el = document.getElementById('glossary-floating-tooltip');
        if (!el) {
            el = document.createElement('div');
            el.id = 'glossary-floating-tooltip';
            el.className = 'glossary-floating-tooltip';
            el.setAttribute('role', 'tooltip');
            el.setAttribute('aria-hidden', 'true');
            el.innerHTML = `
                <div class="glossary-floating-tooltip__head">
                    <span class="glossary-floating-tooltip__term" id="gtt-term-title"></span>
                </div>
                <div class="glossary-floating-tooltip__def" id="gtt-term-def"></div>
            `;
            el.addEventListener('mouseenter', () => {
                if (this._hideTimer) {
                    clearTimeout(this._hideTimer);
                    this._hideTimer = null;
                }
            });
            el.addEventListener('mouseleave', () => {
                this.hideTooltip();
            });
            document.body.appendChild(el);
        }
        this._tooltipEl = el;
        return el;
    },

    showTooltip(termSpan) {
        if (!termSpan || typeof document === 'undefined') return;
        if (this._hideTimer) {
            clearTimeout(this._hideTimer);
            this._hideTimer = null;
        }

        this._activeTermEl = termSpan;
        const tip = this._ensureTooltipEl();
        if (!tip) return;

        const termText = termSpan.textContent || '';
        const defText = termSpan.dataset.def || this.define(termText) || '';

        const termTitleEl = tip.querySelector('#gtt-term-title');
        const defEl = tip.querySelector('#gtt-term-def');
        if (termTitleEl) termTitleEl.textContent = termText;
        if (defEl) defEl.textContent = defText;

        tip.classList.add('is-visible');
        tip.setAttribute('aria-hidden', 'false');

        this._positionTooltip(termSpan);
    },

    hideTooltip(immediate = false) {
        if (immediate) {
            if (this._hideTimer) clearTimeout(this._hideTimer);
            this._hideTimer = null;
            if (this._tooltipEl) {
                this._tooltipEl.classList.remove('is-visible');
                this._tooltipEl.setAttribute('aria-hidden', 'true');
            }
            this._activeTermEl = null;
            return;
        }

        if (this._hideTimer) clearTimeout(this._hideTimer);
        this._hideTimer = setTimeout(() => {
            if (this._tooltipEl) {
                this._tooltipEl.classList.remove('is-visible');
                this._tooltipEl.setAttribute('aria-hidden', 'true');
            }
            this._activeTermEl = null;
        }, 120);
    },

    _positionTooltip(termSpan) {
        const tip = this._tooltipEl;
        if (!tip || !termSpan || typeof window === 'undefined') return;

        const rect = termSpan.getBoundingClientRect();
        if (rect.width === 0 && rect.height === 0) {
            this.hideTooltip(true);
            return;
        }

        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const margin = 12;

        const ttWidth = tip.offsetWidth || 300;
        const ttHeight = tip.offsetHeight || 75;

        // Align horizontally with the start of the term span
        let left = rect.left;
        if (left + ttWidth > vw - margin) {
            left = vw - ttWidth - margin;
        }
        if (left < margin) {
            left = margin;
        }

        // Vertical positioning: directly adjacent with a 6px gap
        // Prefer immediately below the word
        let top = rect.bottom + 6;
        if (top + ttHeight > vh - margin) {
            // If overflowing bottom, place immediately above the word
            const aboveTop = rect.top - ttHeight - 6;
            if (aboveTop >= margin) {
                top = aboveTop;
            } else {
                top = Math.max(margin, Math.min(vh - ttHeight - margin, top));
            }
        }

        tip.style.left = Math.round(left) + 'px';
        tip.style.top = Math.round(top) + 'px';
    },

    // Safely decorate text nodes without touching interactive or existing nodes
    decorate(root) {
        if (!root) return;
        if (!this._regex) this._buildIndex();
        if (!this._regex) return;

        const SKIP = new Set(['SCRIPT', 'STYLE', 'A', 'BUTTON', 'INPUT', 'TEXTAREA', 'CODE', 'PRE', 'SELECT']);
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                if (!node.textContent.trim()) return NodeFilter.FILTER_REJECT;
                let p = node.parentNode;
                while (p) {
                    if (!p.tagName) break;
                    if (SKIP.has(p.tagName)) return NodeFilter.FILTER_REJECT;
                    if (p.classList && p.classList.contains('gloss-term')) return NodeFilter.FILTER_REJECT;
                    p = p.parentNode;
                }
                return NodeFilter.FILTER_ACCEPT;
            }
        });

        const targets = [];
        let n;
        while ((n = walker.nextNode())) targets.push(n);

        targets.forEach((textNode) => {
            const text = textNode.textContent;
            if (!this._regex.test(text)) return;
            this._regex.lastIndex = 0;

            const frag = document.createDocumentFragment();
            let lastIdx = 0;
            let m;
            while ((m = this._regex.exec(text)) !== null) {
                if (m.index > lastIdx) {
                    frag.appendChild(document.createTextNode(text.slice(lastIdx, m.index)));
                }
                const span = document.createElement('span');
                span.className = 'gloss-term';
                span.textContent = m[0];
                const def = this._lookup[m[0].toLowerCase()] || '';
                span.dataset.def = def;
                span.setAttribute('tabindex', '0');
                span.setAttribute('role', 'button');
                span.setAttribute('aria-label', `Definition of ${m[0]}: ${def}`);

                span.addEventListener('mouseenter', () => this.showTooltip(span));
                span.addEventListener('mouseleave', () => this.hideTooltip());
                span.addEventListener('focus', () => this.showTooltip(span));
                span.addEventListener('blur', () => this.hideTooltip());
                span.addEventListener('touchstart', () => this.showTooltip(span), { passive: true });

                // Double-click to pronounce aloud via SpeechSynthesis
                span.addEventListener('dblclick', (e) => {
                    e.preventDefault();
                    if (window.app && typeof window.app.speak === 'function') {
                        window.app.speak(e.currentTarget.textContent);
                    }
                });

                frag.appendChild(span);
                lastIdx = m.index + m[0].length;
            }

            if (lastIdx < text.length) {
                frag.appendChild(document.createTextNode(text.slice(lastIdx)));
            }

            textNode.parentNode.replaceChild(frag, textNode);
        });

        if (!this._scrollHooked && typeof window !== 'undefined' && typeof document !== 'undefined') {
            this._scrollHooked = true;
            const reposition = () => {
                if (this._activeTermEl && this._tooltipEl && this._tooltipEl.classList.contains('is-visible')) {
                    this._positionTooltip(this._activeTermEl);
                }
            };
            window.addEventListener('scroll', reposition, { passive: true, capture: true });
            window.addEventListener('resize', reposition, { passive: true });
            document.addEventListener('pointerdown', (e) => {
                if (this._tooltipEl && !this._tooltipEl.contains(e.target) && !e.target.closest('.gloss-term')) {
                    this.hideTooltip(true);
                }
            });
        }
    },

    define(term) {
        if (!this._lookup) this._buildIndex();
        return this._lookup[term.toLowerCase()] || null;
    }
};

if (typeof window !== 'undefined') {
    window.glossary = glossary;
}
