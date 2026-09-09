# -*- coding: utf-8 -*-
"""
Unit 2 Question Bank: Applied Ruminant Nutrition-I
Strict 2:1:1 ratio: 90 MCQs, 45 True/False, 45 Fill in the Blanks (Total = 180)
Sub-sections:
  u2-s1: Digestion & Metabolism Trials (48 MCQ, 24 TF, 24 FIB = 96)
  u2-s2: Feeding Standards & Balanced Rations (42 MCQ, 21 TF, 21 FIB = 84)
"""

mcq = [
    # --- u2-s1: Digestion & Metabolism Trials (48 MCQs) ---
    {
        "q": "What is the standard duration of the preliminary (adaptation) period recommended in a conventional digestion trial with adult cattle?",
        "o": ["10 to 14 days", "2 to 3 days", "28 to 35 days", "1 to 2 days"],
        "a": 0,
        "e": "A preliminary adaptation period of 10-14 days is essential in ruminants to clear previous gut contents and adapt rumen microbes to the experimental diet.",
        "topicId": "u2-t04",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "What is the standard duration of the collection period in a standard in vivo digestion trial in ruminants?",
        "o": ["7 to 10 days", "1 to 2 days", "21 to 28 days", "30 to 45 days"],
        "a": 0,
        "e": "A collection period of 7-10 days minimizes day-to-day defecation fluctuations and provides statistically reliable mean daily fecal excretion data.",
        "topicId": "u2-t04",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "Apparent digestibility of a nutrient is mathematically defined as:",
        "o": ["[(Nutrient intake - Fecal nutrient output) / Nutrient intake] x 100", "[(Nutrient intake - Urinary nutrient output) / Nutrient intake] x 100", "[(Absorbed nutrient - Retained nutrient) / Absorbed nutrient] x 100", "[(Fecal nutrient output / Nutrient intake)] x 100"],
        "a": 0,
        "e": "Apparent digestibility measures the disappearance of a nutrient along the tract without correcting for metabolic fecal excretions of endogenous origin.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "Why is apparent digestibility of crude protein always lower than its true digestibility?",
        "o": ["Feces contain endogenous metabolic fecal nitrogen (MFN) from digestive secretions and sloughed epithelial cells", "Protein is volatile and lost as ammonia gas during drying", "Urine contaminates feces in collection crates", "Microbial proteases destroy amino acids"],
        "a": 0,
        "e": "Metabolic Fecal Nitrogen (MFN)—consisting of abraded enterocytes, digestive enzymes, and unabsorbed microbial residue—inflates fecal N, lowering apparent digestibility.",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "In an indirect (difference) digestion trial to determine the digestibility of a concentrate in cattle, the test concentrate must be fed alongside:",
        "o": ["A basal roughage of previously determined known digestibility", "A nitrogen-free synthetic purified diet", "Pure wheat bran ad libitum", "Equal parts of urea and molasses"],
        "a": 0,
        "e": "Concentrates cannot be fed alone to ruminants without causing ruminal acidosis; they are fed with a basal roughage whose digestibility was measured in Period 1.",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "Which of the following substances is classified as an ideal internal indicator (marker) for digestion trials?",
        "o": ["Lignin", "Chromic oxide (Cr2O3)", "Titanium dioxide", "Ferric oxide"],
        "a": 0,
        "e": "Lignin and Acid Insoluble Ash (AIA) are natural indigestible chemical constituents of plant cell walls, serving as internal markers.",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "Which chemical compound is the most universally utilized external indicator in ruminant digestibility and grazing intake studies?",
        "o": ["Chromic oxide (Cr2O3)", "Sodium chloride", "Barium sulfate", "Cobalt-EDTA"],
        "a": 0,
        "e": "Chromic oxide (green Sesquioxide of Chromium) is completely indigestible, non-toxic, unabsorbed, and quantitatively recovered in feces.",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "What is the formula for calculating nutrient digestibility percentage using an indicator (marker)?",
        "o": ["100 - [100 x (% Indicator in feed / % Indicator in feces) x (% Nutrient in feces / % Nutrient in feed)]", "100 x (% Indicator in feces / % Indicator in feed)", "[% Nutrient in feed / % Nutrient in feces] x 100", "100 - [100 x (% Indicator in feces / % Indicator in feed)]"],
        "a": 0,
        "e": "The indicator formula relates the concentration ratio of marker to nutrient between feed and feces, eliminating the need for total fecal collection.",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "What chemical preservative is routinely added to the 24-hour urine collection carboys during a metabolism trial to prevent loss of ammonia nitrogen?",
        "o": ["1:1 Dilute Sulfuric Acid (H2SO4)", "Formalin (10%)", "Sodium hydroxide (40%)", "Mercuric chloride"],
        "a": 0,
        "e": "Sulfuric acid keeps the urine pH below 2.0-3.0, converting volatile unionized ammonia into non-volatile ammonium sulfate, preventing nitrogen loss.",
        "topicId": "u2-t04",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "What aliquot percentage of total daily voided feces is customarily sampled, composited, and preserved during a 7-day digestion trial?",
        "o": ["1/10th to 1/20th (5 to 10%) of daily output", "100% of daily output", "0.1% of daily output", "50% of daily output"],
        "a": 0,
        "e": "Sampling a representative 5-10% (1/20th or 1/10th) aliquot of thoroughly mixed wet feces ensures accurate composite analysis without unmanageable bulk.",
        "topicId": "u2-t04",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "A steer consumed 8.0 kg dry matter of a grass hay containing 10% crude protein and excreted 3.2 kg fecal dry matter containing 12.5% crude protein. What is the apparent CP digestibility?",
        "o": ["50.0%", "60.0%", "40.0%", "75.0%"],
        "a": 0,
        "e": "CP intake = 8.0 x 0.10 = 0.80 kg; Fecal CP = 3.2 x 0.125 = 0.40 kg. Digested CP = 0.80 - 0.40 = 0.40 kg. Apparent digestibility = (0.40 / 0.80) x 100 = 50.0%.",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "How does an increase in the level of feed intake (plane of nutrition) from 1x maintenance to 3x maintenance affect digestibility in cattle?",
        "o": ["Decreases digestibility by 1-2 percentage units per multiple of maintenance", "Increases digestibility substantially", "Has no measurable effect on digestibility", "Completely eliminates rumen microbial fermentation"],
        "a": 0,
        "e": "Higher feed intake accelerates digesta passage rate through the rumen, shortening microbial exposure and decreasing digestibility by 1-2% per multiple of maintenance.",
        "topicId": "u2-t06",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "How does fine grinding and pelleting of a roughage influence its ruminal digestibility and voluntary intake in ruminants?",
        "o": ["Decreases fiber digestibility but increases voluntary intake", "Increases fiber digestibility and decreases voluntary intake", "Increases both fiber digestibility and voluntary intake", "Decreases both fiber digestibility and voluntary intake"],
        "a": 0,
        "e": "Fine grinding accelerates reticulo-ruminal passage, shortening microbial fermentation time (depressing fiber digestibility) but clearing the rumen faster (increasing DMI).",
        "topicId": "u2-t06",
        "diff": 3,
        "subSection": "u2-s1"
    },
    {
        "q": "The negative associative effect observed when excessive cereal grain is added to a roughage diet is primarily due to:",
        "o": ["Rapid starch fermentation lowering rumen pH below 6.0, inhibiting fibrolytic bacteria", "Direct physical binding of starch granules to cellulose", "Excessive production of acetic acid", "Toxic destruction of rumen protozoa by starch"],
        "a": 0,
        "e": "When rumen pH falls below 6.0-6.2 due to rapid amylolysis, fibrolytic species (Fibrobacter succinogenes, Ruminococcus flavefaciens) cease cellulase secretion.",
        "topicId": "u2-t06",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "In a nitrogen metabolism balance trial, an animal is in a positive nitrogen balance when:",
        "o": ["Nitrogen intake exceeds the sum of fecal and urinary nitrogen excretion", "Fecal nitrogen equals urinary nitrogen", "Urinary nitrogen exceeds nitrogen intake", "Nitrogen intake is zero"],
        "a": 0,
        "e": "Positive N balance (Intake > [Feces + Urine]) indicates net protein synthesis and tissue retention, as seen during growth, gestation, or muscle repletion.",
        "topicId": "u2-t03",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "The comparative slaughter technique developed by Armsby and Moulton is regarded as the gold standard for measuring:",
        "o": ["Net energy and body nutrient retention over a feeding period", "Apparent dry matter digestibility in vivo", "Rumen volatile fatty acid production rates", "Endogenous urinary nitrogen loss"],
        "a": 0,
        "e": "Slaughtering representative baseline animals at day 0 and final animals at day 90 allows direct chemical determination of energy, protein, and fat retained in the body.",
        "topicId": "u2-t02",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "Which experimental design is most efficient for eliminating individual animal variation while testing 4 different diets on 4 animals across 4 periods?",
        "o": ["4 x 4 Latin Square Design", "Completely Randomized Design (CRD)", "Randomized Block Design (RBD)", "Factorial 2 x 2 Design"],
        "a": 0,
        "e": "A Latin Square design balances both animal-to-animal variation (rows) and time/period effects (columns), maximizing statistical precision with few animals.",
        "topicId": "u2-t02",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "Metabolic Fecal Nitrogen (MFN) in ruminants is primarily derived from which source?",
        "o": ["Undigested ruminal microbial cell debris and digestive secretions", "True undigested feed dietary protein", "Excess dietary urea converted to ammonia", "Deaminated amino acids from liver metabolism"],
        "a": 0,
        "e": "In ruminants, 70-80% of MFN consists of indigestible bacterial and protozoal cell walls, with the remainder from sloughed mucosal cells and enzymes.",
        "topicId": "u2-t03",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "What is the average Metabolic Fecal Nitrogen (MFN) excretion value per kilogram of dry matter intake conventionally used in ruminant nutrition?",
        "o": ["4.5 to 5.0 g N per kg DMI", "1.0 to 1.5 g N per kg DMI", "10.0 to 12.0 g N per kg DMI", "0.5 g N per kg DMI"],
        "a": 0,
        "e": "Classical balance studies establish that cattle excrete approximately 5 grams of endogenous metabolic fecal nitrogen for every 1 kg of dry matter ingested.",
        "topicId": "u2-t03",
        "diff": 3,
        "subSection": "u2-s1"
    },
    {
        "q": "Endogenous Urinary Nitrogen (EUN) excretion in adult fasting mammals is related directly to which physiological parameter?",
        "o": ["Metabolic Body Size (W^0.75)", "Empty body fat percentage", "Daily dry matter intake", "Total water consumption"],
        "a": 0,
        "e": "EUN reflects baseline cellular protein catabolism and scales directly with metabolic body size: EUN ≈ 140 to 146 mg N per kg W^0.75 per day.",
        "topicId": "u2-t03",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "What surgical preparation is commonly employed in cattle to collect representative ruminal fluid samples over time without animal distress?",
        "o": ["Rumen Cannulation (Fistulation)", "Esophageal fistulation", "Cecal cannulation", "Abomasal transection"],
        "a": 0,
        "e": "A permanent flexible plastisol cannula surgically installed in the left paralumbar fossa provides direct access to ruminal digesta for in sacco nylon bag studies.",
        "topicId": "u2-t04",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "The in situ (in sacco) nylon bag technique developed by Orskov and McDonald is used to evaluate:",
        "o": ["Rate and extent of ruminal degradation of feed dry matter and protein", "Total tract apparent digestibility in non-ruminants", "Net energy for lactation of green forages", "Fasting heat production in respiration chambers"],
        "a": 0,
        "e": "Incubating feed samples in nylon mesh bags inside the rumen for 0, 2, 4, 8, 16, 24, 48, and 72 hours yields degradation kinetics: p = a + b(1 - e^-ct).",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "The Tilley and Terry two-stage in vitro technique for determining feed digestibility involves:",
        "o": ["48 h ruminal fluid incubation followed by 48 h acid-pepsin digestion", "24 h amylase digestion followed by 24 h alkali boiling", "72 h fungal cellulase digestion at 50°C", "Direct combustion in an adiabatic oxygen bomb"],
        "a": 0,
        "e": "Stage 1 simulates anaerobic microbial fermentation (48 h with buffered rumen fluid); Stage 2 simulates abomasal digestion (48 h in pepsin-HCl).",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "Which internal indicator is measured as the residue after incinerating a sample and boiling the ash in 3 N hydrochloric acid?",
        "o": ["Acid Insoluble Ash (AIA)", "Lignin", "Silica gel", "Chromogen"],
        "a": 0,
        "e": "AIA consists of natural plant biogenic silica and soil minerals insoluble in 3 N HCl, serving as an accurate, inexpensive internal digestion indicator.",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "Why does water buffalo (Bubalus bubalis) generally exhibit higher digestibility of coarse dry roughages compared to Bos indicus or Bos taurus cattle?",
        "o": ["Higher ruminal bacterial population, slower digesta passage rate, and higher cellulolytic activity", "Presence of gastric amylase in the omasum", "Absence of methane emissions in buffaloes", "Secretion of bile into the rumen reticulum"],
        "a": 0,
        "e": "Buffaloes harbor greater concentrations of cellulolytic bacteria and larger ruminal volume with longer digesta retention times, digesting low-grade roughages 2-5% better.",
        "topicId": "u2-t06",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "Which anatomical structure in young milk-fed calves diverts milk past the reticulorumen directly into the abomasum?",
        "o": ["Reticular (Esophageal) Groove", "Omasal sulcus", "Pyloric sphincter", "Ileo-cecal valve"],
        "a": 0,
        "e": "Reflex contraction of the muscular lips of the reticular groove forms a closed tube diverting milk straight into the abomasum, preventing ruminal curd fermentation.",
        "topicId": "u2-t01",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "What happens if a milk-fed calf drinks milk from a wide bucket too rapidly, causing failure of the esophageal groove reflex?",
        "o": ["Milk spills into the immature reticulorumen, causing ruminal bloat, lactic acidosis, and scouring ('Ruminal Drinker')", "Instant fatal aspiration pneumonia", "Immediate formation of urinary calculi", "Rupture of the omasum"],
        "a": 0,
        "e": "Milk entering the uninoculated rumen undergoes abnormal bacterial fermentation by coliforms, causing lactic acid buildup, ruminal bloat, systemic acidosis, and gray diarrhea.",
        "topicId": "u2-t01",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "In a digestion trial, if dry matter intake is 10 kg and dry matter excreted in feces is 4 kg, what is the Apparent Dry Matter Digestibility?",
        "o": ["60%", "40%", "70%", "50%"],
        "a": 0,
        "e": "DM Digestibility = [(10 kg - 4 kg) / 10 kg] x 100 = (6 / 10) x 100 = 60%.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "A diet fed to sheep contained 0.20% chromic oxide as an external marker, and the resulting feces contained 0.80% chromic oxide. What is the Dry Matter Digestibility of the diet?",
        "o": ["75%", "25%", "60%", "80%"],
        "a": 0,
        "e": "DM Digestibility % = [1 - (% Indicator in feed / % Indicator in feces)] x 100 = [1 - (0.20 / 0.80)] x 100 = [1 - 0.25] x 100 = 75%.",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "In an indirect digestion trial, 6 kg of basal grass hay was fed alone (DM digestibility = 50%). Later, 6 kg hay + 2 kg maize grain was fed, yielding total fecal DM of 3.4 kg. What is the DM digestibility of the maize grain?",
        "o": ["80%", "70%", "90%", "60%"],
        "a": 0,
        "e": "Fecal DM from hay = 6.0 x (1 - 0.50) = 3.0 kg. Total fecal DM = 3.4 kg; therefore, fecal DM from maize = 3.4 - 3.0 = 0.4 kg. Maize DM digested = 2.0 - 0.4 = 1.6 kg. Maize DM digestibility = (1.6 / 2.0) x 100 = 80%.",
        "topicId": "u2-t05",
        "diff": 3,
        "subSection": "u2-s1"
    },
    {
        "q": "Which mineral balance trial requires collection of both urine and feces because urinary excretion is the primary route of endogenous elimination?",
        "o": ["Phosphorus and Potassium", "Calcium only", "Iron and Copper", "Cobalt"],
        "a": 0,
        "e": "Potassium, sodium, and excess phosphorus (in non-ruminants) are cleared predominantly through the kidneys into urine, requiring total urine collection.",
        "topicId": "u2-t03",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "How does feeding an exclusively succulent young legume pasture (e.g. berseem, lucerne) affect ruminal retention time and rate of passage?",
        "o": ["Increases rate of passage and decreases ruminal retention time", "Decreases rate of passage and increases retention time", "Halts ruminal motility completely", "Doubles true fiber digestibility"],
        "a": 0,
        "e": "Succulent, low-fiber young legumes break down rapidly into fine particles, hastening liquid and solid passage and shortening ruminal retention time.",
        "topicId": "u2-t06",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "Which physiological mechanism explains why severe protein deficiency in a ruminant diet depresses overall dry matter and fiber digestibility?",
        "o": ["Rumen ammonia levels drop below the threshold (5-8 mg/dL) needed for fibrolytic bacterial growth", "Pancreatic trypsin secretion ceases entirely", "Gastric hydrochloric acid secretion is inhibited", "Salivary secretion stops"],
        "a": 0,
        "e": "Cellulolytic bacteria require ruminal NH3-N (>5 mg/dL) as their sole nitrogen source for protein synthesis; protein starvation halts bacterial growth and cellulase output.",
        "topicId": "u2-t06",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "In cattle, what is the physiological consequence of feeding roughage with a Crude Protein content below the critical threshold of 6 to 7%?",
        "o": ["Rumen microbial activity drops, and voluntary dry matter intake falls drastically", "Intake doubles due to compensatory hunger", "Rumen pH drops below 5.0 causing acidosis", "Excess ammonia causes acute urea toxicity"],
        "a": 0,
        "e": "When forage CP falls below 6-7%, ruminal NH3 is insufficient for fiber digestion; slow fiber clearance fills the rumen, severely suppressing voluntary DMI.",
        "topicId": "u2-t06",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "The Menke and Steingass in vitro gas production method assesses feed nutritive value by measuring:",
        "o": ["Volume of gas (CO2 and CH4) generated per unit feed incubated with buffered rumen fluid", "Oxygen consumption in a closed respirometer", "Nitrogen loss via the Kjeldahl distillation trap", "Ammonia absorption in 2% boric acid"],
        "a": 0,
        "e": "Fermentation of carbohydrates by rumen microbes in calibrated glass syringes produces CO2 and CH4, directly correlating with ME and organic matter digestibility.",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "The DaisyII incubator system manufactured by ANKOM is an automated laboratory instrument used for:",
        "o": ["Simultaneous determination of in vitro dry matter and NDF digestibility in filter bags", "Kjeldahl nitrogen digestion and distillation", "Bomb calorimetry of combustible gases", "Continuous blood sampling in catheterized cattle"],
        "a": 0,
        "e": "The DaisyII incubator rotates sealed filter bags containing feed samples in jars of buffered rumen fluid at 39°C, running up to 100 samples simultaneously.",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "Which fraction of Weende proximate analysis exhibits the greatest variability in digestibility among different feedstuffs?",
        "o": ["Crude Fibre (CF)", "Ether Extract (EE)", "Crude Protein (CP)", "Nitrogen-Free Extract (NFE)"],
        "a": 0,
        "e": "Crude fiber digestibility varies widely from 0-10% in mature woody twigs to 70-80% in young leafy clover, depending heavily on lignification.",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "Which physical device is attached to male sheep or steers in metabolism cages to ensure complete, contamination-free separation of feces and urine?",
        "o": ["Leather collection harness with rubber fecal bag and urinal funnel", "Nylon muzzle strap", "Abomasal cannula plug", "Tracheal cannula valve"],
        "a": 0,
        "e": "Metabolism stalls feature a wire-mesh floor or a fitted leather harness directing solid feces into a rear tray and liquid urine through a funnel into an acidified flask.",
        "topicId": "u2-t04",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "What is the primary physiological limitation of using Cr2O3 (chromic oxide) as an external marker in grazing ruminants?",
        "o": ["Diurnal variation in excretion rate requiring standardized dosing and grab-sampling times", "Complete chemical destruction by rumen microbes", "Extreme toxicity to intestinal enterocytes", "Direct conversion into volatile chromic gas"],
        "a": 0,
        "e": "Chromic oxide does not associate evenly with digesta phases and shows marked diurnal excretion peaks, necessitating dosing twice daily for 5-7 days before sampling.",
        "topicId": "u2-t05",
        "diff": 3,
        "subSection": "u2-s1"
    },
    {
        "q": "True protein digestibility in ruminants differs from apparent protein digestibility by correcting for:",
        "o": ["Metabolic Fecal Nitrogen (MFN)", "Endogenous Urinary Nitrogen (EUN)", "Volatile fatty acid absorption", "Salivary urea recycling"],
        "a": 0,
        "e": "True Protein Digestibility % = [(N intake - [Fecal N - MFN]) / N intake] x 100. It deducts non-dietary endogenous fecal nitrogen.",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "What is the primary factor limiting the maximum inclusion of fat in adult ruminant digestion trials without depressing fiber digestion?",
        "o": ["Coating of fiber particles and antimicrobial toxicity of free PUFAs to fibrolytic bacteria", "Inhibition of abomasal pepsin secretion", "Excessive production of ketone bodies in saliva", "Precipitation of bile acids in the rumen"],
        "a": 0,
        "e": "Unprotected dietary fats above 5-6% of diet DM adsorb onto cellulose and kill cellulolytic bacteria (Fibrobacter, Ruminococcus), depressing fiber digestibility.",
        "topicId": "u2-t06",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "In conducting an in vivo digestion trial with lactating dairy cows, what additional output must be analyzed in the complete nitrogen balance equation?",
        "o": ["Milk nitrogen", "Salivary nitrogen", "Sweat nitrogen", "Hair shedding loss"],
        "a": 0,
        "e": "In lactating animals, total nitrogen balance = Nitrogen Intake - (Fecal N + Urinary N + Milk N). Milk contains 0.5-0.6% nitrogen (~3.2-3.8% protein).",
        "topicId": "u2-t03",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "What is the effect of frequency of feeding (e.g. feeding 6 times daily versus once daily) on ruminal fermentation patterns in dairy cows?",
        "o": ["Stabilizes ruminal pH, reduces diurnal fluctuations in VFA concentrations, and improves fiber digestion", "Causes chronic subacute ruminal acidosis", "Decreases microbial protein synthesis by 50%", "Completely suppresses saliva secretion"],
        "a": 0,
        "e": "Frequent small meals distribute fermentable carbohydrate load evenly, preventing severe pH drops below 6.0 and maintaining continuous cellulolytic activity.",
        "topicId": "u2-t06",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "Which parameter is determined by difference when calculating the proximate composition of a feed sample?",
        "o": ["Nitrogen-Free Extract (NFE)", "Crude Protein (CP)", "Crude Fibre (CF)", "Ether Extract (EE)"],
        "a": 0,
        "e": "NFE is not measured directly; it is calculated: NFE% = 100 - (% Moisture + % CP + % EE + % CF + % Total Ash).",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "What is the primary purpose of conducting a pilot or trial feeding experiment prior to launching a large-scale feeding trial?",
        "o": ["To determine feed palatability, voluntary intake thresholds, and potential toxicity problems", "To eliminate the need for chemical analysis of feed", "To vaccinate animals against ruminal bacteria", "To slaughter all test animals for baseline data"],
        "a": 0,
        "e": "A pilot study confirms that animals consume the experimental ration readily at expected intakes without gastrointestinal rejection or acute metabolic disturbance.",
        "topicId": "u2-t02",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "The ratio of dry matter intake to average daily live weight gain is designated as:",
        "o": ["Feed Conversion Ratio (FCR)", "Protein Efficiency Ratio (PER)", "Digestibility Coefficient", "Nutritive Ratio (NR)"],
        "a": 0,
        "e": "Feed Conversion Ratio (FCR) = Feed intake (kg) / Body weight gain (kg). A lower FCR indicates superior feed utilization efficiency.",
        "topicId": "u2-t02",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "Which analytical fraction obtained during the Van Soest detergent analysis is completely dissolved by neutral detergent solution but insoluble in water?",
        "o": ["Neutral Detergent Solubles (NDS, cell contents)", "Hemicellulose", "Lignin", "Silica"],
        "a": 0,
        "e": "Neutral Detergent Solubles (NDS = 100 - NDF) contain cell contents (soluble sugars, starch, organic acids, protein, lipids) having a true digestibility near 98%.",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "What is the mathematical relationship between Acid Detergent Fibre (ADF) and Neutral Detergent Fibre (NDF)?",
        "o": ["Hemicellulose = NDF - ADF", "Cellulose = NDF - ADF", "Lignin = NDF - ADF", "Total cell contents = NDF - ADF"],
        "a": 0,
        "e": "NDF contains hemicellulose, cellulose, and lignin. ADF contains cellulose and lignin. Therefore: Hemicellulose = NDF - ADF.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
    },

    # --- u2-s2: Feeding Standards & Balanced Rations (42 MCQs) ---
    {
        "q": "Who proposed the very first feeding standard in 1809 based on 'Hay Equivalents' comparing feeds to 100 pounds of good meadow hay?",
        "o": ["Albrecht Thaer", "Justus von Liebig", "Emil von Wolff", "F.B. Morrison"],
        "a": 0,
        "e": "German agriculturalist Albrecht von Thaer published the first empirical feeding standard in 1809 using meadow hay as the reference baseline.",
        "topicId": "u2-t07",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "The Wolff-Lehmann feeding standards (1874/1896) improved upon earlier systems by formulating nutrient requirements on the basis of:",
        "o": ["Digestible Crude Protein, Digestible Carbohydrates, and Digestible Ether Extract per 1000 lbs live weight", "Gross energy of whole plants", "Biological value of essential amino acids", "Net energy for lactation only"],
        "a": 0,
        "e": "Emil von Wolff and C. Lehmann expressed nutrient needs as digestible nutrients (DCP, digestible carbs, digestible fat) based on Henneberg's Weende trials.",
        "topicId": "u2-t07",
        "diff": 2,
        "subSection": "u2-s2"
    },
    {
        "q": "The famous American feeding standard published in 'Feeds and Feeding' which served as the global practical guideline for decades was authored by:",
        "o": ["F.B. Morrison", "H.P. Armsby", "W.A. Henry and F.B. Morrison", "L.A. Maynard"],
        "a": 0,
        "e": "W.A. Henry (1898) and Frank B. Morrison (from 1915 onward) compiled the seminal 'Morrison Feeding Standards' based on TDN and DCP.",
        "topicId": "u2-t07",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "The Morrison feeding standard expresses energy and protein requirements of dairy cattle in terms of:",
        "o": ["Total Digestible Nutrients (TDN) and Digestible Crude Protein (DCP)", "Net Energy (NE) and Metabolizable Protein (MP)", "Starch Equivalent (SE) and Protein Equivalent (PE)", "Gross Energy (GE) and True Protein (TP)"],
        "a": 0,
        "e": "Morrison standards utilized Total Digestible Nutrients (TDN) for energy and Digestible Crude Protein (DCP) for protein requirements.",
        "topicId": "u2-t08",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "What is the primary scientific criticism and demerit of using Total Digestible Nutrients (TDN) as an energy standard for ruminants?",
        "o": ["It overvalues low-grade fibrous roughages relative to concentrates because it ignores the high heat increment of fiber fermentation", "It is impossible to calculate mathematically", "It does not account for fecal energy losses", "It assumes protein contains zero digestible energy"],
        "a": 0,
        "e": "Fibrous feeds generate large amounts of heat increment during ruminal fermentation; hence, 1 kg TDN from straw supports far less production than 1 kg TDN from maize.",
        "topicId": "u2-t08",
        "diff": 2,
        "subSection": "u2-s2"
    },
    {
        "q": "The National Research Council (NRC, USA) ruminant feeding standards evolved from TDN to which modern energy system?",
        "o": ["Net Energy system (NEm, NEg, NEl)", "Starch Equivalent system", "Food Unit system (FU)", "Gross Caloric Ratio"],
        "a": 0,
        "e": "Modern NRC systems partition energy requirements into Net Energy for maintenance (NEm), gain (NEg), and lactation (NEl) to eliminate heat increment discrepancies.",
        "topicId": "u2-t08",
        "diff": 2,
        "subSection": "u2-s2"
    },
    {
        "q": "The Agricultural Research Council (ARC, UK) system adopted which energy unit as its official baseline for ruminant ration formulation?",
        "o": ["Metabolizable Energy (ME, in MegaJoules)", "Starch Equivalent (SE, in kg)", "Total Digestible Nutrients (TDN, in lbs)", "Scandinavian Feed Unit"],
        "a": 0,
        "e": "The ARC/AFRC British system formulates diets on Metabolizable Energy (ME, MJ/kg DM), using efficiency coefficients (km, kf, kl) to derive net performance.",
        "topicId": "u2-t08",
        "diff": 2,
        "subSection": "u2-s2"
    },
    {
        "q": "Which feeding standard was specifically developed by Leonard C. Kearl (1982) at Utah State University for livestock in developing countries?",
        "o": ["Nutrient Requirements of Ruminants in Developing Countries (Kearl Standard)", "Scandinavian Feed Unit Standard", "Kellner Starch Standard", "Armsby Calorimetric Standard"],
        "a": 0,
        "e": "Kearl (1982) compiled requirements tailored specifically for zebu cattle, water buffaloes, sheep, and goats raised under tropical and developing-nation conditions.",
        "topicId": "u2-t08",
        "diff": 2,
        "subSection": "u2-s2"
    },
    {
        "q": "In India, the authoritative national livestock feeding standard was developed and revised by which apex agricultural research body?",
        "o": ["ICAR (Indian Council of Agricultural Research)", "VCI (Veterinary Council of India)", "BIS (Bureau of Indian Standards)", "NDDB (National Dairy Development Board)"],
        "a": 0,
        "e": "The ICAR (Sen, Ray, Ranjhan, and revised ICAR 2013 standards) provides official nutrient requirements tailored for Indian zebu cattle and Murrah buffaloes.",
        "topicId": "u2-t08",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "Why do indigenous zebu cattle (Bos indicus) generally have a 10 to 15% lower fasting maintenance energy requirement than exotic taurine cattle (Bos taurus)?",
        "o": ["Lower basal metabolic rate, smaller visceral organ mass relative to body size, and tropical heat adaptation", "Inability to digest green fodder", "Absence of active ruminal microbes", "Lower body temperature of 35°C"],
        "a": 0,
        "e": "Bos indicus breeds possess lower visceral metabolic activity, smaller liver mass, and lower basal heat production, enabling survival on sparse tropical vegetation.",
        "topicId": "u2-t08",
        "diff": 2,
        "subSection": "u2-s2"
    },
    {
        "q": "A 'Balanced Ration' for livestock is scientifically defined as:",
        "o": ["The total feed supplied in 24 hours containing all essential nutrients in proper amounts and proportions for maintenance and production", "A diet composed exclusively of green leguminous pastures", "Any mixture containing exactly 50% roughage and 50% concentrate", "A feed containing 100% true protein and zero crude fiber"],
        "a": 0,
        "e": "A balanced ration furnishes all required nutrients (energy, protein, minerals, vitamins, water) in proper physiological proportions over a 24-hour feeding period.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "What is the standard rule-of-thumb for daily Dry Matter Intake (DMI) in indigenous adult zebu cattle (Bos indicus)?",
        "o": ["2.0 to 2.5 kg DM per 100 kg body weight", "4.0 to 5.0 kg DM per 100 kg body weight", "1.0 kg DM per 100 kg body weight", "6.0 to 7.0 kg DM per 100 kg body weight"],
        "a": 0,
        "e": "Indigenous zebu cattle consume approximately 2.0 to 2.5 kg DM per 100 kg body weight (2.0-2.5% of BW) under standard feeding management.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "What is the expected daily Dry Matter Intake (DMI) for adult crossbred dairy cows (Bos taurus x Bos indicus) and high-yielding buffaloes?",
        "o": ["2.5 to 3.0 kg DM per 100 kg body weight (up to 3.5% in high yielders)", "1.5 kg DM per 100 kg body weight", "5.0 to 6.0 kg DM per 100 kg body weight", "0.5 kg DM per 100 kg body weight"],
        "a": 0,
        "e": "Crossbred cows and buffaloes consume 2.5 to 3.0 kg DM per 100 kg body weight, with high-yielding lactating animals reaching 3.5% of body weight.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "For a 400 kg non-lactating adult maintenance bullock, what is its expected total daily Dry Matter requirement at 2.0% of body weight?",
        "o": ["8.0 kg DM", "4.0 kg DM", "12.0 kg DM", "16.0 kg DM"],
        "a": 0,
        "e": "Total DMI = (2.0 / 100) x 400 kg = 8.0 kg DM per day.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "In practical Indian ration balancing, what proportion of total daily dry matter intake is traditionally supplied through roughages for maintenance?",
        "o": ["Two-thirds (66.7%) from roughages and one-third (33.3%) from concentrates", "100% from concentrates", "90% from concentrates and 10% from roughages", "5% from roughages and 95% from concentrates"],
        "a": 0,
        "e": "The classic thumb rule allocates 2/3rd of total dry matter from roughages (split between green and dry) and 1/3rd from concentrate mixture.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "Of the two-thirds roughage dry matter in a dairy ration, what is the ideal recommended partition between leguminous green fodder and dry roughage (straw)?",
        "o": ["One-third of total roughage DM from green legumes and two-thirds from dry straw", "100% dry straw and 0% green", "100% green and 0% dry straw", "All dry roughage treated with acid"],
        "a": 0,
        "e": "Allocating 1/3rd of the roughage DM as green fodder and 2/3rd as dry straw provides necessary bulk, carotene, and bypass fiber while conserving greens.",
        "topicId": "u2-t09",
        "diff": 2,
        "subSection": "u2-s2"
    },
    {
        "q": "Which characteristic is essential in a properly computed balanced ration to ensure normal rumination, saliva secretion, and prevention of displaced abomasum?",
        "o": ["Adequate physical fibrous bulk (effective fiber / peNDF)", "Zero crude fiber content", "Complete liquefaction of all dietary components", "Exclusive inclusion of high-moisture brewery grains"],
        "a": 0,
        "e": "Physically effective fiber (peNDF) stimulates cud-chewing (rumination) and copious secretion of buffering saliva, stabilizing the ruminal mat and preventing abomasal displacement.",
        "topicId": "u2-t09",
        "diff": 2,
        "subSection": "u2-s2"
    },
    {
        "q": "Why must a balanced ration possess mild laxative properties in dairy cattle?",
        "o": ["To prevent constipation and ensure smooth, regular passage of digestive residue", "To induce diarrhea and flush out all bacteria", "To prevent absorption of dietary minerals", "To minimize ruminal water absorption"],
        "a": 0,
        "e": "Succulent greens (lucerne, berseem) and wheat bran provide mild laxative effects that prevent intestinal impaction, especially around calving.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "What is the mandatory inclusion rate of common salt (NaCl) in commercial cattle concentrate mixtures in India?",
        "o": ["1.0%", "5.0%", "10.0%", "0.01%"],
        "a": 0,
        "e": "Feed compounding standards (BIS) mandate 1.0% common salt in dairy concentrate mixtures to supply essential sodium and chlorine and enhance palatability.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "What is the recommended inclusion level of an area-specific mineral mixture (ASMM) in the concentrate ration of dairy cattle?",
        "o": ["2.0%", "10.0%", "0.1%", "5.0%"],
        "a": 0,
        "e": "A 2% mineral mixture inclusion rate (or 50-100 g daily per adult cow) satisfies trace and macro-mineral requirements tailored to regional soil-plant deficiencies.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "Which feed formulation method utilizes a simple geometric diagram to balance two feed ingredients for a single nutrient (e.g. Crude Protein)?",
        "o": ["Pearson's Square Method", "Simplex Linear Programming Algorithm", "Monte Carlo Simulation", "Weende Extraction Matrix"],
        "a": 0,
        "e": "The Pearson Square balances two feeds or mixtures by placing the desired target nutrient concentration in the center and calculating diagonal differences.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "Using Pearson's Square to formulate a 16% CP concentrate mixture using Maize grain (9% CP) and Groundnut Cake (40% CP), what is the required proportion of Maize to Groundnut Cake?",
        "o": ["24 parts Maize : 7 parts GNC (77.4% Maize and 22.6% GNC)", "10 parts Maize : 10 parts GNC", "7 parts Maize : 24 parts GNC", "16 parts Maize : 9 parts GNC"],
        "a": 0,
        "e": "Maize (9) vs 16 -> |9 - 16| = 7 parts GNC. GNC (40) vs 16 -> |40 - 16| = 24 parts Maize. Total parts = 31. % Maize = (24/31) x 100 = 77.42%; % GNC = (7/31) x 100 = 22.58%.",
        "topicId": "u2-t09",
        "diff": 2,
        "subSection": "u2-s2"
    },
    {
        "q": "What is the primary operational advantage of modern computer-based Linear Programming (LP) over hand-calculation in feed formulation?",
        "o": ["Least-Cost Ration Formulation simultaneously satisfying dozens of nutrient constraints and ingredient boundaries", "Guaranteeing that feed ingredients contain zero crude fiber", "Eliminating the need to purchase minerals", "Converting non-protein nitrogen into true fat"],
        "a": 0,
        "e": "Linear programming formulates a ration meeting all minimum and maximum nutrient specifications at the absolute lowest financial cost per ton.",
        "topicId": "u2-t09",
        "diff": 2,
        "subSection": "u2-s2"
    },
    {
        "q": "According to Bureau of Indian Standards (BIS: IS 2052) specifications, Type II commercial cattle feed must contain minimum Crude Protein and TDN of:",
        "o": ["20% CP and 70% TDN", "10% CP and 50% TDN", "30% CP and 85% TDN", "14% CP and 60% TDN"],
        "a": 0,
        "e": "BIS Type II compounding standards specify minimum 20% crude protein, minimum 2.5% ether extract, maximum 12% crude fiber, and minimum 70% TDN.",
        "topicId": "u2-t09",
        "diff": 2,
        "subSection": "u2-s2"
    },
    {
        "q": "Why is it important to ensure variety of ingredients in a commercial ruminant concentrate mixture?",
        "o": ["Improves amino acid balance, ensures palatability, and mitigates single-ingredient toxicities or supply fluctuations", "Guarantees that fiber is eliminated", "Prevents saliva production", "Eliminates all rumen gas production"],
        "a": 0,
        "e": "A mixture containing 4-6 diverse ingredients (cereals, brans, oilcakes, agro-byproducts) ensures nutritional balance, steady intake, and economic resilience.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "Feeding standards serve primarily as:",
        "o": ["Scientific quantitative tables detailing daily nutrient requirements for specific body weights and production levels", "Legal documents forbidding the sale of wheat straw", "Schedules for dairy cow milking machines", "Veterinary surgical protocols"],
        "a": 0,
        "e": "Feeding standards provide scientifically verified reference tables specifying required daily intakes of dry matter, energy, protein, minerals, and vitamins.",
        "topicId": "u2-t07",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "The maintenance energy requirement of an animal in all modern feeding standards is rooted in the concept of:",
        "o": ["Fasting Heat Production (Basal Metabolism)", "Total Heat Increment during exercise", "Combustible energy of feces", "Dietary thermogenesis of urea"],
        "a": 0,
        "e": "Basal metabolic rate / fasting heat production represents the irreducible energy expenditure required to sustain life in an idle, non-productive state.",
        "topicId": "u2-t07",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "Which classic equation relates Basal Metabolic Rate (BMR in kcal/day) to Body Weight (W in kg) across adult homeothermic mammalian species?",
        "o": ["BMR = 70 x W^0.75 (Kleiber's Law)", "BMR = 100 x W^1.0", "BMR = 50 x W^0.50", "BMR = 25 x W^2.0"],
        "a": 0,
        "e": "Max Kleiber (1932) established that basal metabolic heat production scales with metabolic body size (W^0.75): BMR = 70 x W^0.75 kcal/day (or 293 kJ/day).",
        "topicId": "u2-t07",
        "diff": 2,
        "subSection": "u2-s2"
    },
    {
        "q": "What is the metabolic body size of a 400 kg cow?",
        "o": ["89.4 kg^0.75", "400 kg^0.75", "200 kg^0.75", "150.2 kg^0.75"],
        "a": 0,
        "e": "Metabolic body weight = W^0.75 = 400^0.75 ≈ 89.44 kg.",
        "topicId": "u2-t07",
        "diff": 2,
        "subSection": "u2-s2"
    },
    {
        "q": "In the Kellner Starch Equivalent feeding system, what 'Value Number' (Wertigkeit) is assigned to pure linseed cake relative to pure digestible starch?",
        "o": ["97 to 100", "50", "20", "150"],
        "a": 0,
        "e": "High-quality concentrates like linseed cake have a Wertigkeit near 97-100%, indicating that their digestible nutrients produce ~100% of their calculated fat value.",
        "topicId": "u2-t08",
        "diff": 3,
        "subSection": "u2-s2"
    },
    {
        "q": "Why did Kellner apply a crude fiber deduction factor of 0.29 to 0.58 kg starch equivalent per kg of crude fiber in coarse roughages like straw?",
        "o": ["To correct for the heavy mechanical work of mastication and the high heat increment of ruminal fiber fermentation", "Because fiber contains toxic alkaloids", "Because fiber destroys fat in the rumen", "To account for urinary protein excretion"],
        "a": 0,
        "e": "Coarse fibrous roughages expend substantial energy during chewing and fermentation; Kellner deduced 0.58 SE units for every kg of crude fiber in straws.",
        "topicId": "u2-t08",
        "diff": 3,
        "subSection": "u2-s2"
    },
    {
        "q": "In the Scandinavian Feed Unit system, one Feed Unit (FU) is defined as the nutritive value equivalent of:",
        "o": ["1.0 kg of standard barley grain", "1.0 kg of meadow hay", "1.0 kg of wheat bran", "1.0 kg of soyabean meal"],
        "a": 0,
        "e": "The Scandinavian Feed Unit (Foderenhed) sets 1 kg of standard barley grain (providing ~1650 kcal NE) as 1.0 Feed Unit.",
        "topicId": "u2-t07",
        "diff": 2,
        "subSection": "u2-s2"
    },
    {
        "q": "Which feeding standard first incorporated the distinction between Rumen Degradable Protein (RDP) and Rumen Undegradable Protein (RUP)?",
        "o": ["ARC (1980) and NRC (1985/1989)", "Wolff-Lehmann (1874)", "Morrison (1915)", "Thaer (1809)"],
        "a": 0,
        "e": "The 1980s marked the transition in British (ARC) and American (NRC) standards from crude/digestible protein to metabolizable protein (RDP/RUP system).",
        "topicId": "u2-t08",
        "diff": 2,
        "subSection": "u2-s2"
    },
    {
        "q": "What is the recommended maximum moisture content permitted in bagged commercial cattle concentrate feed to prevent mold growth during storage in India?",
        "o": ["10 to 11%", "20 to 25%", "30%", "15 to 18%"],
        "a": 0,
        "e": "BIS mandates a maximum moisture of 10-11% in finished bagged cattle feeds to prevent Aspergillus flavus proliferation and aflatoxin synthesis.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "When formulating a complete ration for high-yielding dairy cows, what is the minimum recommended percentage of Neutral Detergent Fibre (NDF) from forage?",
        "o": ["19 to 21% of total diet DM", "5% of diet DM", "45% of diet DM", "0% (concentrates only)"],
        "a": 0,
        "e": "A minimum of 19-21% forage NDF (and 28-30% total NDF) is mandatory to sustain normal chewing time, milk fat percentage, and ruminal health.",
        "topicId": "u2-t09",
        "diff": 2,
        "subSection": "u2-s2"
    },
    {
        "q": "A ration is deficient in energy relative to protein if the Nutritive Ratio is:",
        "o": ["Extremely narrow (e.g. 1 : 2)", "Extremely wide (e.g. 1 : 12)", "1 : 6", "1 : 7"],
        "a": 0,
        "e": "An excessively narrow Nutritive Ratio (1:2 to 1:3) means protein is supplied in excess relative to non-protein energy, forcing expensive deamination of amino acids.",
        "topicId": "u2-t09",
        "diff": 2,
        "subSection": "u2-s2"
    },
    {
        "q": "What is the daily maintenance DCP requirement for an adult 400 kg zebu bullock according to Sen and Ray ICAR standards?",
        "o": ["Approximately 280 to 300 g DCP", "1000 g DCP", "50 g DCP", "1500 g DCP"],
        "a": 0,
        "e": "Sen & Ray / ICAR standards prescribe approximately 0.70 to 0.75 g DCP per kg metabolic body size (or ~280-300 g DCP for a 400 kg animal).",
        "topicId": "u2-t08",
        "diff": 2,
        "subSection": "u2-s2"
    },
    {
        "q": "What is the daily maintenance TDN requirement for a 400 kg adult zebu cow according to ICAR feeding standards?",
        "o": ["Approximately 2.8 to 3.0 kg TDN", "6.5 kg TDN", "1.0 kg TDN", "8.0 kg TDN"],
        "a": 0,
        "e": "ICAR standards prescribe roughly 30 to 34 g TDN per kg metabolic body size, translating to 2.8-3.0 kg TDN for a 400 kg adult cow at maintenance.",
        "topicId": "u2-t08",
        "diff": 2,
        "subSection": "u2-s2"
    },
    {
        "q": "If a lactating crossbred cow produces 10 kg of milk with 4.0% fat, what extra TDN allowance above maintenance is required per kg milk according to ICAR standards?",
        "o": ["0.32 to 0.35 kg TDN per kg milk", "1.00 kg TDN per kg milk", "0.10 kg TDN per kg milk", "0.75 kg TDN per kg milk"],
        "a": 0,
        "e": "Each kg of 4% Fat Corrected Milk requires an extra 0.32-0.34 kg TDN and ~45-50 g DCP above maintenance requirements.",
        "topicId": "u2-t08",
        "diff": 2,
        "subSection": "u2-s2"
    },
    {
        "q": "Which ingredient is commonly incorporated into commercial cattle feed up to 5 to 7% to bind dust, improve pellet durability, and enhance palatability?",
        "o": ["Cane Molasses", "Raw bone meal", "Fish oil", "Urea"],
        "a": 0,
        "e": "Cane molasses is sweet, highly palatable, provides rapidly fermentable sucrose, and acts as a natural pellet binder at 5-7% inclusion.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "What is the consequence of feeding a ration with excessive moisture (>80%) and low dry matter density to high-producing dairy cows?",
        "o": ["Physical gut fill limits dry matter intake before nutrient requirements are met ('Bulk Limitation')", "Excessive water intoxication", "Severe ruminal impaction", "Extreme obesity"],
        "a": 0,
        "e": "High-moisture bulky feeds (such as young watery grass) distend the rumen mechanically, signaling satiety via stretch receptors before sufficient DM is absorbed.",
        "topicId": "u2-t09",
        "diff": 2,
        "subSection": "u2-s2"
    },
    {
        "q": "In dairy ration balancing, the term 'Steaming Up' refers to:",
        "o": ["Gradually increasing concentrate feeding 2 to 3 weeks prior to calving to prepare the rumen and support late fetal growth", "Pelleting feeds with high-pressure saturated steam", "Cooking feed grains in boiling water", "Treating straws with pressurized steam in an autoclave"],
        "a": 0,
        "e": "'Steaming up' builds body reserves, adapts rumen papillae to higher concentrate diets, and prevents post-calving ketosis in high-yielding dairy cows.",
        "topicId": "u2-t09",
        "diff": 2,
        "subSection": "u2-s2"
    }
]

tf = [
    # --- u2-s1: Digestion & Metabolism Trials (24 TF) ---
    {
        "q": "In a digestion trial with cattle, the preliminary adaptation period is typically 10 to 14 days.",
        "a": True,
        "e": "True. A 10-14 day preliminary period ensures clearance of previous feed residues and stabilizes rumen microbial populations on the test diet.",
        "topicId": "u2-t04",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "The collection period in a standard digestion trial lasts 1 to 2 days.",
        "a": False,
        "e": "False. The collection period must last at least 7 to 10 days to account for irregular day-to-day fecal excretion patterns.",
        "topicId": "u2-t04",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "Apparent digestibility of crude protein is always numerically higher than its true digestibility.",
        "a": False,
        "e": "False. Apparent digestibility is lower than true digestibility because feces contain endogenous metabolic fecal nitrogen.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "Lignin can be utilized as a reliable internal indicator in digestion trials because it is completely indigestible in the gastrointestinal tract.",
        "a": True,
        "e": "True. Lignin undergoes virtually zero degradation during transit through the mammalian digestive tract.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "Chromic oxide (Cr2O3) is an external indicator that is completely absorbed across the ruminal mucosa.",
        "a": False,
        "e": "False. Chromic oxide is completely insoluble and unabsorbed, passing quantitatively through the GI tract into feces.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "Dilute sulfuric acid is commonly added to the urine collection container during a metabolism trial to trap volatile ammonia nitrogen.",
        "a": True,
        "e": "True. Acidifying urine to pH < 3.0 converts volatile NH3 into stable ammonium sulfate.",
        "topicId": "u2-t04",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "Increasing the plane of nutrition from 1x maintenance to 3x maintenance generally increases the digestibility of dietary fiber in cattle.",
        "a": False,
        "e": "False. Higher intake speeds up digesta passage rate, reducing retention time in the rumen and decreasing fiber digestibility.",
        "topicId": "u2-t06",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "Fine grinding of roughages decreases their ruminal retention time and depresses crude fiber digestibility.",
        "a": True,
        "e": "True. Finely ground particles escape the rumen rapidly through the reticulo-omasal orifice before complete cellulolytic digestion can occur.",
        "topicId": "u2-t06",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "An animal in positive nitrogen balance is excreting more nitrogen in feces and urine than it consumes in feed.",
        "a": False,
        "e": "False. Positive nitrogen balance means Intake > Excretion (net tissue protein retention).",
        "topicId": "u2-t03",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "The comparative slaughter technique allows direct chemical measurement of body protein and fat accretion over time.",
        "a": True,
        "e": "True. Comparing the body composition of slaughtered baseline animals with animals at the end of the trial yields true nutrient deposition.",
        "topicId": "u2-t02",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "A 4 x 4 Latin Square design allows testing 4 treatments on 4 animals over 4 sequential periods.",
        "a": True,
        "e": "True. Each animal receives each treatment across four periods, controlling for both between-animal variation and time trends.",
        "topicId": "u2-t02",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "Metabolic Fecal Nitrogen is estimated to be approximately 5 g N per kg of dry matter intake in ruminants.",
        "a": True,
        "e": "True. The standard consensus value in ruminant bioenergetics is approximately 4.5 to 5.0 g MFN per kg DMI.",
        "topicId": "u2-t03",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "Endogenous Urinary Nitrogen excretion scales directly with the animal's gross body weight rather than metabolic body size.",
        "a": False,
        "e": "False. EUN scales with metabolic body size (W^0.75), which reflects active cellular protein turnover.",
        "topicId": "u2-t03",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "The in situ nylon bag technique evaluates the ruminal degradation kinetics of feeds inside a fistulated animal's rumen.",
        "a": True,
        "e": "True. Nylon bags containing feed are suspended in the rumen via cannula to quantify disappearance over incubation time.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "Stage 1 of the Tilley and Terry in vitro technique simulates gastric abomasal digestion with hydrochloric acid and pepsin.",
        "a": False,
        "e": "False. Stage 1 simulates ruminal microbial fermentation (48 h in buffered rumen liquor); Stage 2 simulates abomasal pepsin digestion.",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "Water buffaloes typically exhibit lower digestibility of coarse crop residues than European cattle.",
        "a": False,
        "e": "False. Buffaloes have larger rumen volume, higher cellulolytic bacterial density, and longer digesta retention, digesting low-grade roughages superiorly.",
        "topicId": "u2-t06",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "The reticular groove closure in calves is stimulated reflexively by suckling milk.",
        "a": True,
        "e": "True. The act of suckling from a teat triggers vagal nerve impulses causing contraction of the reticular lips into an enclosed conduit.",
        "topicId": "u2-t01",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "Acid Insoluble Ash consists primarily of biogenic plant silica and extraneous soil minerals.",
        "a": True,
        "e": "True. Silica is insoluble in boiling dilute HCl, serving as a non-absorbable marker.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "Feeding excessive concentrate can suppress fiber digestibility by driving ruminal pH below 6.0.",
        "a": True,
        "e": "True. Cellulolytic bacteria are sensitive to acidic pH; their growth and enzyme activity cease below pH 6.0.",
        "topicId": "u2-t06",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "When feed crude protein drops below 6%, voluntary dry matter intake increases as the animal attempts to meet its protein needs.",
        "a": False,
        "e": "False. Below 6% CP, rumen microbial activity stalls, fiber clearance is delayed, and voluntary intake declines severely due to rumen fill.",
        "topicId": "u2-t06",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "The DaisyII incubator allows simultaneous in vitro incubation of multiple feed samples in sealed filter bags.",
        "a": True,
        "e": "True. Up to 100 samples in filter bags are placed into revolving jars inside the temperature-controlled incubator.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "In a lactating cow nitrogen balance trial, nitrogen secreted in milk is ignored.",
        "a": False,
        "e": "False. Milk nitrogen represents a major route of nitrogen output and must be included: Balance = Intake - (Feces + Urine + Milk).",
        "topicId": "u2-t03",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "A lower Feed Conversion Ratio (FCR) indicates greater efficiency of feed utilization.",
        "a": True,
        "e": "True. FCR is kg feed per kg gain; lower numbers mean less feed is required to produce a unit of body weight.",
        "topicId": "u2-t02",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "Hemicellulose content in the Van Soest system is calculated as NDF minus ADF.",
        "a": True,
        "e": "True. NDF includes hemicellulose, cellulose, and lignin, while ADF contains only cellulose and lignin; thus NDF - ADF = hemicellulose.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
    },

    # --- u2-s2: Feeding Standards & Balanced Rations (21 TF) ---
    {
        "q": "Albrecht Thaer formulated the first feeding standard in 1809 using Hay Equivalents.",
        "a": True,
        "e": "True. Thaer established 100 lbs of meadow hay as the reference standard against which all other feeds were compared.",
        "topicId": "u2-t07",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "The Morrison feeding standard expresses energy requirements in terms of Net Energy for Lactation.",
        "a": False,
        "e": "False. Morrison standards were based on Total Digestible Nutrients (TDN) and Digestible Crude Protein (DCP).",
        "topicId": "u2-t07",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "TDN tends to overestimate the true productive energy value of roughages compared to concentrates.",
        "a": True,
        "e": "True. TDN does not deduct the large heat increment associated with roughage fermentation.",
        "topicId": "u2-t08",
        "diff": 2,
        "subSection": "u2-s2"
    },
    {
        "q": "The British ARC system expresses energy requirements in Metabolizable Energy (ME) units.",
        "a": True,
        "e": "True. The ARC/AFRC standards use Metabolizable Energy (MJ) and efficiency factors (k-values) for maintenance, gain, and milk.",
        "topicId": "u2-t08",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "The ICAR feeding standards for cattle are designed specifically for European Bos taurus breeds under temperate conditions.",
        "a": False,
        "e": "False. ICAR standards were specifically developed for indigenous Bos indicus zebu cattle and water buffaloes under Indian conditions.",
        "topicId": "u2-t08",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "Indigenous zebu cattle have a lower fasting heat production per unit metabolic body size than exotic European cattle.",
        "a": True,
        "e": "True. Zebu cattle have lower basal metabolic rates (~10-15% lower) as an evolutionary adaptation to tropical heat stress.",
        "topicId": "u2-t08",
        "diff": 2,
        "subSection": "u2-s2"
    },
    {
        "q": "Daily dry matter intake of adult zebu cattle is typically 2.0 to 2.5 kg per 100 kg body weight.",
        "a": True,
        "e": "True. Non-lactating indigenous zebu cattle voluntarily consume roughly 2.0 to 2.5% of their live body weight in dry matter.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "In practical Indian dairy feeding, about two-thirds of total dry matter is supplied through roughages and one-third from concentrates.",
        "a": True,
        "e": "True. The classic 2:1 roughage-to-concentrate dry matter ratio maintains ruminal health and economic viability.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "A balanced ration must provide adequate physically effective fiber to stimulate rumination and saliva flow.",
        "a": True,
        "e": "True. Without sufficient long coarse fiber, cows chew their cud less, secrete less buffering saliva, and develop ruminal acidosis.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "Commercial cattle concentrate feeds in India must contain a minimum of 5% added common salt.",
        "a": False,
        "e": "False. BIS standards specify 1.0% common salt (NaCl) in commercial compounded cattle feeds.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "Area-specific mineral mixture is typically recommended at 2% in the concentrate mixture for dairy cattle.",
        "a": True,
        "e": "True. A 2% inclusion rate (or ~50-100 g/day per cow) satisfies macro- and micro-mineral needs across Indian regions.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "Pearson's Square can simultaneously balance four independent feeds for five different nutrient constraints in a single step.",
        "a": False,
        "e": "False. Pearson's Square balances only two feeds (or two fixed mixtures) for one single nutrient at a time.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "Least-cost feed formulation using linear programming optimizes ingredient combinations to minimize ration cost while satisfying nutritional constraints.",
        "a": True,
        "e": "True. LP algorithms evaluate ingredient costs and nutrient matrices to identify the mathematical minimum-cost solution.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "BIS Type II compounded cattle feed requires a minimum of 20% Crude Protein.",
        "a": True,
        "e": "True. BIS IS:2052 mandates minimum 20% crude protein and minimum 70% TDN for Type II cattle feed.",
        "topicId": "u2-t09",
        "diff": 2,
        "subSection": "u2-s2"
    },
    {
        "q": "According to Kleiber's Law, basal metabolic rate is directly proportional to body weight raised to the power of 0.75.",
        "a": True,
        "e": "True. BMR = 70 x W^0.75 kcal/day, defining the universal metabolic body size.",
        "topicId": "u2-t07",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "Kellner's Starch Equivalent system evaluated feeds based on body fat deposition in adult bullocks.",
        "a": True,
        "e": "True. Oskar Kellner used respiration chambers to measure fat gain per kg of feed component in fattening bullocks.",
        "topicId": "u2-t08",
        "diff": 2,
        "subSection": "u2-s2"
    },
    {
        "q": "In the Scandinavian system, one Feed Unit equals the feeding value of 1 kg of wheat straw.",
        "a": False,
        "e": "False. One Scandinavian Feed Unit is defined as the feeding value of 1.0 kg of standard barley grain.",
        "topicId": "u2-t07",
        "diff": 2,
        "subSection": "u2-s2"
    },
    {
        "q": "Modern NRC feeding standards express dairy cow energy requirements in Net Energy for Lactation (NEl).",
        "a": True,
        "e": "True. NEl directly measures the energy needed for maintenance and milk production without heat increment distortions.",
        "topicId": "u2-t08",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "Cane molasses is used in compounded cattle feed as a source of soluble sugar, flavor enhancer, and pellet binder.",
        "a": True,
        "e": "True. Molasses is routinely included at 5-7% to bind dust, improve durability, and supply readily available sucrose.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "Steaming up involves feeding high levels of straw and restricting concentrate during the last 3 weeks of pregnancy.",
        "a": False,
        "e": "False. Steaming up increases concentrate feeding before calving to prepare the cow for lactation and build reserves.",
        "topicId": "u2-t09",
        "diff": 2,
        "subSection": "u2-s2"
    },
    {
        "q": "High-moisture feeds can limit the voluntary dry matter intake of dairy cows due to physical rumen distension.",
        "a": True,
        "e": "True. Excessive dietary water creates bulky volume in the rumen, activating gut stretch receptors and restricting total dry matter consumed.",
        "topicId": "u2-t09",
        "diff": 2,
        "subSection": "u2-s2"
    }
]

fib = [
    # --- u2-s1: Digestion & Metabolism Trials (24 FIB) ---
    {
        "q": "The standard duration of the preliminary adaptation period in a ruminant digestion trial is ____ days.",
        "a": ["10 to 14", "10-14", "10", "14"],
        "a_display": "10 to 14 days",
        "e": "A 10-14 day preliminary period ensures total clearance of previous gut contents and stabilizes rumen fermentation.",
        "topicId": "u2-t04",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "The collection period in a standard in vivo ruminant digestion trial lasts for ____ days.",
        "a": ["7 to 10", "7-10", "7", "10"],
        "a_display": "7 to 10 days",
        "e": "Collecting feces quantitatively for 7-10 days accounts for daily variation in bowel evacuation.",
        "topicId": "u2-t04",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "Apparent digestibility of protein is lower than true digestibility due to the presence of metabolic ____ nitrogen in the feces.",
        "a": ["fecal", "faecal"],
        "a_display": "Fecal",
        "e": "Metabolic Fecal Nitrogen (MFN) from sloughed cells, enzymes, and bacteria inflates fecal N.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "The most widely utilized external indicator in ruminant digestibility studies is chromic ____.",
        "a": ["oxide", "sesquioxide"],
        "a_display": "Oxide",
        "e": "Chromic oxide (Cr2O3) is unabsorbed, non-toxic, and passes through the digestive tract quantitatively.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "During metabolism trials, urine is collected into containers containing dilute ____ acid to prevent loss of volatile ammonia.",
        "a": ["sulfuric", "sulphuric", "h2so4"],
        "a_display": "Sulfuric Acid",
        "e": "Sulfuric acid keeps urine pH low, fixing free ammonia into non-volatile ammonium sulfate.",
        "topicId": "u2-t04",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "A representative daily fecal aliquot of ____ percent is conventionally composited during a digestion trial.",
        "a": ["5 to 10", "5-10", "5", "10", "1/10 to 1/20", "1/10th", "1/20th"],
        "a_display": "5 to 10%",
        "e": "Taking 5-10% of thoroughly mixed daily wet feces provides an accurate composite sample.",
        "topicId": "u2-t04",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "If an animal consumes 10 kg dry matter and excretes 3 kg dry matter in feces, the apparent dry matter digestibility is ____ percent.",
        "a": ["70", "70%"],
        "a_display": "70%",
        "e": "DM Digestibility = [(10 - 3) / 10] x 100 = 70%.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "Fine grinding of roughages decreases ruminal retention time and ____ fiber digestibility.",
        "a": ["decreases", "depresses", "lowers", "reduces"],
        "a_display": "Decreases",
        "e": "Smaller particles wash out through the reticulo-omasal orifice faster, reducing microbial contact time.",
        "topicId": "u2-t06",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "When nitrogen intake exceeds total nitrogen excreted in feces and urine, the animal is in ____ nitrogen balance.",
        "a": ["positive"],
        "a_display": "Positive",
        "e": "Positive N balance indicates net tissue protein accretion during growth, pregnancy, or recovery.",
        "topicId": "u2-t03",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "The experimental slaughter method that measures body nutrient retention by sacrificing animals at day 0 and day 90 is the ____ slaughter technique.",
        "a": ["comparative"],
        "a_display": "Comparative",
        "e": "The comparative slaughter technique determines exact body composition changes over a feeding trial.",
        "topicId": "u2-t02",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "In adult ruminants, Metabolic Fecal Nitrogen excretion averages approximately ____ grams of nitrogen per kilogram of dry matter intake.",
        "a": ["5", "4.5 to 5.0", "4.5-5.0", "5.0"],
        "a_display": "5 g",
        "e": "Ruminants excrete approximately 5 g endogenous fecal N for every kg of DM ingested.",
        "topicId": "u2-t03",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "Endogenous Urinary Nitrogen excretion is directly related to the animal's ____ body size.",
        "a": ["metabolic"],
        "a_display": "Metabolic",
        "e": "EUN excretion reflects baseline tissue protein turnover and scales with W^0.75.",
        "topicId": "u2-t03",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "Surgical placement of a permanent rubber cannula into the left flank of a steer is termed rumen ____.",
        "a": ["cannulation", "fistulation"],
        "a_display": "Cannulation (Fistulation)",
        "e": "Rumen cannulation provides safe access to ruminal digesta for in situ incubation studies.",
        "topicId": "u2-t04",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "The in situ technique for assessing feed protein and dry matter degradation utilizes small porous ____ bags.",
        "a": ["nylon", "dacron"],
        "a_display": "Nylon",
        "e": "Porous nylon bags (40-50 micron pore size) allow ruminal fluid exchange while retaining feed particles.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "The first stage of the Tilley and Terry in vitro digestion procedure involves 48 hours of incubation with buffered ____ liquor.",
        "a": ["rumen", "ruminal"],
        "a_display": "Rumen",
        "e": "Stage 1 incubates feed with buffered ruminal fluid under anaerobic conditions at 39°C.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "The second stage of the Tilley and Terry method incubates the residue with hydrochloric acid and ____.",
        "a": ["pepsin"],
        "a_display": "Pepsin",
        "e": "Acid-pepsin simulates abomasal digestion, digesting microbial protein and undegraded feed protein.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "Acid Insoluble Ash is determined by treating total ash with boiling dilute ____ acid.",
        "a": ["hydrochloric", "hcl"],
        "a_display": "Hydrochloric (HCl)",
        "e": "Boiling ash with 3 N HCl dissolves soluble minerals, leaving silica and sand as AIA.",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "The muscular fold in neonatal calves that shunts milk directly from the esophagus into the abomasum is the ____ groove.",
        "a": ["reticular", "esophageal", "oesophageal"],
        "a_display": "Reticular (Esophageal) Groove",
        "e": "The reticular groove bypasses the uninoculated rumen to prevent milk spoilage.",
        "topicId": "u2-t01",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "When feed crude protein drops below ____ percent, ruminal ammonia becomes insufficient and voluntary intake falls sharply.",
        "a": ["6", "6 to 7", "6-7", "7"],
        "a_display": "6 to 7%",
        "e": "Below 6-7% CP, cellulolytic bacteria lack nitrogen, depressing fiber digestion and voluntary intake.",
        "topicId": "u2-t06",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "Feed Conversion Ratio is defined as kilograms of dry matter feed intake per kilogram of live body weight ____.",
        "a": ["gain", "increase"],
        "a_display": "Gain",
        "e": "FCR = Feed Consumed / Body Weight Gain.",
        "topicId": "u2-t02",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "In the Van Soest fiber fractionation system, hemicellulose is calculated as NDF minus ____.",
        "a": ["adf"],
        "a_display": "ADF",
        "e": "Hemicellulose = Neutral Detergent Fibre - Acid Detergent Fibre.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "Rapid fermentation of starch causes ruminal pH to drop below ____, severely inhibiting cellulolytic bacteria.",
        "a": ["6.0", "6", "5.8"],
        "a_display": "6.0",
        "e": "Cellulolytic bacteria cannot synthesize cellulase efficiently at pH below 6.0.",
        "topicId": "u2-t06",
        "diff": 2,
        "subSection": "u2-s1"
    },
    {
        "q": "Water buffaloes digest poor-quality coarse straws ____ than Bos taurus cattle.",
        "a": ["better", "higher", "more efficiently", "superiorly"],
        "a_display": "Better (More efficiently)",
        "e": "Buffaloes harbor more cellulolytic bacteria and have longer rumen retention times.",
        "topicId": "u2-t06",
        "diff": 1,
        "subSection": "u2-s1"
    },
    {
        "q": "In lactating animals, the nitrogen excreted in ____ must be included in the total nitrogen balance calculation.",
        "a": ["milk"],
        "a_display": "Milk",
        "e": "Total N balance = Intake - (Fecal N + Urinary N + Milk N).",
        "topicId": "u2-t03",
        "diff": 1,
        "subSection": "u2-s1"
    },

    # --- u2-s2: Feeding Standards & Balanced Rations (21 FIB) ---
    {
        "q": "The first feeding standard based on Hay Equivalents was formulated in 1809 by Albrecht ____.",
        "a": ["thaer", "von thaer"],
        "a_display": "Thaer",
        "e": "Albrecht von Thaer compared the nutritional value of all feeds against 100 lbs of meadow hay.",
        "topicId": "u2-t07",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "The classic American feeding standard published in 'Feeds and Feeding' was authored by Frank B. ____.",
        "a": ["morrison"],
        "a_display": "Morrison",
        "e": "F.B. Morrison compiled standard tables of TDN and DCP requirements for farm livestock.",
        "topicId": "u2-t07",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "TDN stands for Total Digestible ____.",
        "a": ["nutrients"],
        "a_display": "Nutrients",
        "e": "Total Digestible Nutrients (TDN) measures digestible carbs, fiber, protein, and fat (x 2.25).",
        "topicId": "u2-t08",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "The British Agricultural Research Council feeding standard expresses energy requirements in ____ Energy units.",
        "a": ["metabolizable", "metabolisable", "me"],
        "a_display": "Metabolizable Energy",
        "e": "The ARC/AFRC standards formulate ruminant diets in Megajoules (MJ) of Metabolizable Energy.",
        "topicId": "u2-t08",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "In India, national livestock feeding standards are published by the Indian Council of ____ Research.",
        "a": ["agricultural", "icar"],
        "a_display": "Agricultural (ICAR)",
        "e": "ICAR publishes the authoritative nutrient standards for indigenous cattle and buffaloes.",
        "topicId": "u2-t08",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "Daily voluntary Dry Matter Intake of adult indigenous zebu cattle is typically ____ to 2.5 kg per 100 kg body weight.",
        "a": ["2.0", "2", "2.0-2.5", "2 to 2.5"],
        "a_display": "2.0",
        "e": "Zebu cattle voluntarily consume 2.0 to 2.5% of body weight in DM daily for maintenance.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "In traditional Indian ration balancing, approximately ____-thirds of total dry matter is supplied through roughages.",
        "a": ["two", "2/3", "two-thirds"],
        "a_display": "Two-thirds",
        "e": "Allocating 2/3rd DM from roughages and 1/3rd from concentrates ensures ruminal health.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "Commercial compounded cattle feeds in India are mandated to include ____ percent common salt (NaCl).",
        "a": ["1", "1.0", "1%"],
        "a_display": "1.0%",
        "e": "BIS specifications mandate 1.0% common salt in compounded cattle feeds.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "Area-specific mineral mixture is conventionally included at ____ percent in dairy cattle concentrate mixtures.",
        "a": ["2", "2.0", "2%"],
        "a_display": "2.0%",
        "e": "A 2% mineral mixture inclusion provides essential macro and trace elements.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "The simple geometric calculation method used to balance two feed ingredients for a single nutrient is ____ Square.",
        "a": ["pearson", "pearson's", "pearsons"],
        "a_display": "Pearson's Square",
        "e": "Pearson's Square calculates proportions of two feeds needed to achieve a target nutrient level.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "The mathematical optimization technique used by computer software to formulate least-cost feed rations is ____ programming.",
        "a": ["linear"],
        "a_display": "Linear",
        "e": "Linear Programming (LP) solves simultaneous linear equations to minimize cost subject to nutrient constraints.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "BIS Type II commercial compounded cattle feed must have a minimum Crude Protein content of ____ percent.",
        "a": ["20", "20%"],
        "a_display": "20%",
        "e": "BIS IS:2052 specifies minimum 20% CP and 70% TDN for Type II cattle feed.",
        "topicId": "u2-t09",
        "diff": 2,
        "subSection": "u2-s2"
    },
    {
        "q": "According to Kleiber's Law, metabolic body size is calculated as body weight in kg raised to the power of ____.",
        "a": ["0.75", "3/4"],
        "a_display": "0.75",
        "e": "Metabolic body weight = W^0.75, which normalizes basal metabolic rate across species.",
        "topicId": "u2-t07",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "The German scientist who formulated the Starch Equivalent system using adult fattening bullocks was Oskar ____.",
        "a": ["kellner"],
        "a_display": "Kellner",
        "e": "Oskar Kellner defined 1 kg Starch Equivalent as producing 248 g of body fat in bullocks.",
        "topicId": "u2-t08",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "In the Scandinavian feeding system, one Feed Unit equals the feeding value of 1 kg of ____ grain.",
        "a": ["barley"],
        "a_display": "Barley",
        "e": "Barley is the reference grain in the Scandinavian feed unit system.",
        "topicId": "u2-t07",
        "diff": 2,
        "subSection": "u2-s2"
    },
    {
        "q": "The NRC 2001 dairy cattle feeding standard expresses energy requirements in Net Energy for ____ (NEl).",
        "a": ["lactation"],
        "a_display": "Lactation",
        "e": "NEl expresses energy for both maintenance and milk synthesis on a common scale.",
        "topicId": "u2-t08",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "Cane ____ is added at 5 to 7% in concentrate feeds to reduce dustiness and bind pellets.",
        "a": ["molasses"],
        "a_display": "Molasses",
        "e": "Molasses improves palatability, provides sugars, and strengthens feed pellets.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "Gradually increasing concentrate feeding 2 to 3 weeks prior to calving is known as ____ up.",
        "a": ["steaming"],
        "a_display": "Steaming",
        "e": "Steaming up prepares rumen papillae and builds energy reserves before calving.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "A 400 kg adult zebu bullock requiring 2% of body weight in dry matter needs ____ kg of dry matter daily.",
        "a": ["8", "8.0", "8 kg"],
        "a_display": "8 kg",
        "e": "400 kg x 0.02 = 8.0 kg DM daily.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "DCP stands for Digestible ____ Protein.",
        "a": ["crude"],
        "a_display": "Crude",
        "e": "Digestible Crude Protein (DCP) = Crude Protein x Protein Digestibility Coefficient.",
        "topicId": "u2-t08",
        "diff": 1,
        "subSection": "u2-s2"
    },
    {
        "q": "Excessively high moisture in succulent green fodders can limit intake due to physical gut ____.",
        "a": ["fill", "distension"],
        "a_display": "Fill",
        "e": "High-moisture bulky forages distend the rumen, signaling satiety prematurely.",
        "topicId": "u2-t09",
        "diff": 2,
        "subSection": "u2-s2"
    }
]

def get_data():
    return {
        "mcq": mcq,
        "tf": tf,
        "fib": fib
    }
