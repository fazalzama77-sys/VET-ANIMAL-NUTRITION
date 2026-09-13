# tools/build_unit2.py
# Generates comprehensive, exam-oriented content for Theory Unit 2 (Applied Ruminant Nutrition-I)
# 9 topics: u2-t01 to u2-t09

import json
import os

unit2_data = {
  "u2-t01": {
    "summary": "Scientific feeding matches nutrient supply with physiological requirements to maximize genetic potential, feed efficiency, and herd health while eliminating metabolic disorders and economic waste.",
    "desc": (
      "<b>I. CONCEPT AND DEFINITION OF SCIENTIFIC FEEDING</b><br>"
      "Scientific feeding is the art and science of providing domestic animals with feeds and fodders that supply all necessary nutrients (water, energy, protein, minerals, and vitamins) in optimal quantities, proportions, and physical forms. Its objective is to sustain maintenance and target production levels (milk, meat, draft, wool) without depleting body reserves, inducing metabolic strain, or creating uneconomic expenditure.<br><br>"
      "<b>Traditional 'Thumb-Rule' Feeding vs. Scientific Feeding:</b><br>"
      "In traditional livestock husbandry across rural India, animals are fed haphazardly based on availability: dry straw ad libitum with seasonal weeds, kitchen wastes, and a fixed handful of crushed grains or oilcakes regardless of body weight, pregnancy status, or milk yield. Scientific feeding substitutes this guesswork with precise quantitative nutrition grounded in physiological requirements.<br><br>"
      "<b>II. CORE PRINCIPLES OF SCIENTIFIC FEEDING</b><br>"
      "<ul>"
      "<li><b>1. Assessment of Physiological Requirements:</b> Feed allowance must be calculated separately for <i>maintenance</i> (basal tissue turnover, respiration, temperature regulation) and <i>production</i> (growth, lactation, pregnancy, work).</li>"
      "<li><b>2. Assessment of Feed Value:</b> Daily rations must be balanced using verified compositional values for Dry Matter (DM), Digestible Crude Protein (DCP), and Total Digestible Nutrients (TDN) or Metabolizable Energy (ME).</li>"
      "<li><b>3. Dry Matter Capacity and Satiety:</b> An animal cannot consume unlimited feed. The total volume must fit within the animal's voluntary Dry Matter Intake (DMI) capacity: 2.0–2.5 kg DM per 100 kg body weight (BW) in indigenous zebu cattle (<i>Bos indicus</i>), 2.5–3.0 kg/100 kg BW in crossbred cattle, and 3.0–3.2 kg/100 kg BW in lactating water buffaloes (<i>Bubalus bubalis</i>).</li>"
      "<li><b>4. Maintaining an Optimal Roughage-to-Concentrate (R:C) Ratio:</b> Ruminants are anatomically and microbiologically adapted for forage digestion. The R:C ratio on a DM basis must ideally be maintained between 60:40 and 70:30, and should never fall below 40:60. Adequate coarse fiber (minimum 19-21% acid detergent fiber, ADF) stimulates rumination, cud-chewing, and copious alkaline saliva flow containing sodium bicarbonate ($NaHCO_3$) and disodium phosphate ($Na_2HPO_4$), buffering the rumen at pH 6.2–6.8.</li>"
      "<li><b>5. Palatability, Freshness, and Wholesomeness:</b> Feeds must be clean, free from moulds (e.g. <i>Aspergillus flavus</i> aflatoxins), dust, dung contamination, and sharp foreign bodies.</li>"
      "<li><b>6. Regularity and Feeding Management:</b> Abrupt dietary changes destroy the ruminal microbial ecosystem. Dietary shifts must be introduced gradually over 10–14 days to allow ruminal bacteria and protozoa to adapt.</li>"
      "<li><b>7. Least-Cost Formulation:</b> The ration must utilize locally available agro-industrial by-products (e.g. rice bran, mustard cake, pulse chuni) to minimize feeding costs, which constitute 65–75% of the total recurring cost of dairy farming.</li>"
      "</ul>"
    ),
    "eliteDesc": (
      "<b>Biochemical and Ruminal Stoichiometry of Scientific Feeding:</b><br>"
      "Scientific feeding in ruminants focuses primarily on nourishing the ruminal microflora rather than the host animal directly. Ruminal microbes ferment dietary carbohydrates into Volatile Fatty Acids (VFAs: acetate, propionate, butyrate) and synthesize high-quality Microbial Crude Protein (MCP) from non-protein nitrogen (NPN) and rumen degradable protein (RDP).<br><br>"
      "<b>Energetics of Nutrient Synchronization:</b><br>"
      "Microbial protein synthesis requires the simultaneous ruminal availability of fermentable metabolizable energy (FME, mainly readily fermentable carbohydrates like starches and pectins) and rumen degradable nitrogen ($NH_3$-N). The ideal ratio is approximately 25 to 30 grams of nitrogen per kilogram of fermentable organic matter (FOM) digested in the rumen. When rapid nitrogen release (e.g. from urea or soluble grass proteins) uncouples from energy fermentation, excess ammonia enters portal circulation and must be converted to urea in the liver, consuming 7.3 kcal of metabolizable energy per gram of nitrogen excreted, thereby reducing net milk or tissue synthesis efficiency."
    ),
    "keyPoints": [
      "Scientific feeding matches exact daily nutrient intake to physiological demands for maintenance and production.",
      "Traditional feeding relies on arbitrary thumb rules; scientific feeding uses chemical composition and digestibility data.",
      "Feeding costs represent 65-75% of total recurring expenditure in livestock and dairy enterprises.",
      "Voluntary Dry Matter Intake (DMI) limits: 2.0-2.5% BW in zebu cattle, 2.5-3.0% in crossbreds, 3.0-3.2% in buffaloes.",
      "Optimal Roughage to Concentrate (R:C) ratio is 60:40 to 70:30; roughage should never fall below 40% on DM basis.",
      "Cud-chewing stimulates production of 100-150 liters of alkaline saliva daily, buffering rumen pH at 6.2-6.8.",
      "Dietary shifts require 10-14 days of gradual transition to avoid ruminal microbial dysbiosis.",
      "Rations must account for nutrient synchronization: 25-30 g Nitrogen per kg Fermentable Organic Matter (FOM).",
      "Feed palatability, laxative properties, and freedom from toxins (aflatoxins, mycotoxins) are mandatory criteria.",
      "Least-cost formulation maximizes local agro-industrial by-products without compromising animal welfare or output."
    ],
    "clinical": (
      "<b>Practical Veterinary Field Application:</b><br>"
      "In Indian field conditions, smallholder dairy farmers frequently commit two major feeding errors: either overfeeding expensive protein concentrates (e.g. pure mustard cake) to low-yielding cows, leading to economic losses and hepatic stress, or feeding straw-only diets to dry pregnant cows. A cow fed only wheat or paddy straw suffers chronic deficiency of protein, vitamin A/carotene, calcium, and phosphorus, causing delayed postpartum estrus, repeat breeding, and anestrus (>18-24 months intercalving interval). Educating farmers to feed a maintenance allowance of 1.5-2.0 kg balanced concentrate mixture containing 1% mineral mixture and 1% salt alongside available green fodder restores cyclicity within 60-90 days postpartum."
    ),
    "tables": [
      {
        "title": "Comparison: Traditional Thumb-Rule Feeding vs Scientific Balanced Feeding",
        "headers": ["Parameter", "Traditional Thumb-Rule Feeding", "Scientific Balanced Feeding"],
        "rows": [
          ["Basis of Feed Allocation", "Subjective guesswork, visual bulk, habit", "Quantified nutrient requirements (DCP, TDN, ME, Ca, P)"],
          ["Dry Matter Regulation", "Ignored; leads to underfeeding or excessive waste", "Strictly calculated based on % Body Weight and production"],
          ["Roughage:Concentrate Ratio", "Erratic; often 90:10 (straw base) or 20:80 (grain overload)", "Standardized (60:40 to 70:30) to preserve rumen health"],
          ["Rumen Fermentation", "Sub-optimal; frequent SARA or severe fiber impaction", "Balanced cellulolytic and amylolytic microbial fermentation"],
          ["Inter-Calving Interval", "Prolonged (18 to 24 months)", "Optimal (12 to 14 months)"],
          ["Economic Efficiency", "High cost per liter of milk due to wasted nutrients", "Least-cost ration ensures maximum profit margin"]
        ]
      },
      {
        "title": "Voluntary Dry Matter Intake (DMI) Norms across Indian Ruminants",
        "headers": ["Animal Category", "Species / Breed Group", "DMI (% of Body Weight)", "Roughage:Concentrate Ratio"],
        "rows": [
          ["Indigenous Cattle", "Zebu (Gir, Sahiwal, Kankrej, Tharparkar)", "2.0 – 2.5 %", "70:30 to 80:20"],
          ["Crossbred Dairy Cows", "Karan Swiss, Karan Fries, HF / Jersey crosses", "2.5 – 3.0 %", "60:40 to 50:50"],
          ["High-Yielding Dairy Cows", "Crossbreds producing >15-20 L/day", "3.0 – 3.5 %", "50:50 (Never drop roughage <40%)"],
          ["Dairy Buffaloes", "Murrah, Nili-Ravi, Mehsana, Jaffarabadi", "2.8 – 3.2 %", "65:35 to 55:45"],
          ["Growing Calves & Heifers", "Post-weaning ruminants (6–18 months)", "2.2 – 2.6 %", "60:40 to 65:35"],
          ["Adult Sheep & Goats", "Indigenous breeds (Marwari, Jamunapari, Black Bengal)", "3.0 – 4.0 %", "75:25 to 65:35"]
        ]
      }
    ],
    "img": "",
    "tags": ["scientific feeding", "principles of nutrition", "DMI", "R:C ratio", "rumen health", "economic feeding", "livestock management"]
  },

  "u2-t02": {
    "summary": "Feeding experiments determine live-animal intake, production, and feed efficiency, while the comparative slaughter technique provides the exact net retention of energy and protein in carcass tissues.",
    "desc": (
      "<b>I. PURPOSE OF FEEDING EXPERIMENTS</b><br>"
      "Feeding trials represent the ultimate biological test for evaluating feeds, additives, and feeding strategies under practical animal production conditions. While laboratory chemical analyses (e.g. Proximate or Van Soest analysis) reveal nutrient composition, they cannot quantify palatability, voluntary intake, physiological toxicities, or actual tissue deposition.<br><br>"
      "<b>Core Objectives:</b><br>"
      "<ul>"
      "<li>Determine voluntary feed consumption, palatability, and dietary acceptance.</li>"
      "<li>Measure production response: Average Daily Gain (ADG), milk yield and composition, egg production, wool growth, or work output.</li>"
      "<li>Calculate Feed Conversion Ratio (FCR = kg feed consumed / kg gain or product) and economic efficiency.</li>"
      "<li>Assess long-term safety, health, reproductive longevity, and carcass traits.</li>"
      "</ul>"
      "<b>II. EXPERIMENTAL DESIGNS IN FEEDING TRIALS</b><br>"
      "<ul>"
      "<li><b>1. Continuous / Parallel Feeding Trials:</b> Two or more matched groups (control vs. test diets) receive their respective diets continuously over an extended duration (minimum 60–90 days for growing heifers, full lactation for dairy cows). Straightforward, but requires large animal numbers to balance genetic variation.</li>"
      "<li><b>2. Reversal / Switch-back / Change-over Trials:</b> Animals receive Diet A in Period 1, are switched to Diet B in Period 2, and returned to Diet A in Period 3. Removes individual animal variation, as each animal acts as its own control. Requires an intermediate washout/adaptation period (10–14 days) to prevent carry-over effects.</li>"
      "<li><b>3. Latin Square Design:</b> A balanced crossover design where treatments are rotated across animals and periods in a square matrix (e.g. $4 \\times 4$ Latin Square for 4 diets, 4 animals, and 4 periods). Highly efficient for short-term rumen metabolism and milk response studies with limited animals.</li>"
      "<li><b>4. Paired Feeding Technique:</b> Used to differentiate whether a growth difference is caused by true nutritional efficiency or simply unequal voluntary feed intake. The feed intake of the control animal is restricted daily to match the voluntary intake of its paired test animal.</li>"
      "</ul>"
      "<b>III. COMPARATIVE SLAUGHTER TECHNIQUE (CST)</b><br>"
      "The comparative slaughter technique is the reference gold standard for measuring exact net energy ($NE$) and net protein storage in animal tissues without respiratory calorimetry.<br><br>"
      "<b>Methodology:</b><br>"
      "1. A uniform group of animals (e.g. 24 matched weaned lambs or kids) is selected.<br>"
      "2. At Day 0, a representative baseline sub-group (e.g. 6 animals, the 'initial slaughter group') is sacrificed and their entire bodies (carcass, blood, viscera, skin, head, hooves) are weighed, frozen, homogenized, and analyzed for dry matter, crude protein, ether extract, and gross energy.<br>"
      "3. The remaining animals are fed the experimental diets for the experimental feeding period (e.g. 90–120 days).<br>"
      "4. At the end of the trial, all remaining animals are slaughtered and analyzed using identical methods.<br>"
      "5. <b>Calculation of Net Nutrient Retention:</b><br>"
      "$$\\text{Nutrient Retained} = (\\text{Final Body Weight} \\times \\text{Final Nutrient \\%}) - (\\text{Initial Body Weight} \\times \\text{Initial Baseline Nutrient \\%})$$<br>"
      "Dividing the retained energy by total feed consumed gives the net energy value of the feed for growth ($NE_g$)."
    ),
    "eliteDesc": (
      "<b>Mathematical Rigor and Empty Body Weight (EBW) Correction:</b><br>"
      "In ruminants, live body weight is heavily confounded by gut fill (the mass of digesta in the reticulo-rumen, omasum, abomasum, and intestines), which accounts for 10% to 25% of live weight depending on roughage level. Comparative slaughter experiments must express body composition on an <b>Empty Body Weight (EBW)</b> basis:<br>"
      "$$\\text{EBW} = \\text{Live Weight at Slaughter} - \\text{Weight of Gastrointestinal Contents}$$<br>"
      "Failure to adjust for EBW introduces systematic error: animals on fibrous straw-based diets carry substantially heavier gut fill than animals on concentrate diets, falsely inflating apparent body weight gains while true tissue protein and fat deposition are markedly lower."
    ),
    "keyPoints": [
      "Feeding trials measure biological responses (ADG, milk, FCR) that cannot be determined by chemical analysis alone.",
      "Parallel trials test diets continuously across matched groups; require large cohorts to overcome genetic variability.",
      "Reversal/switch-back trials rotate diets across periods so that each animal serves as its own control.",
      "Washout/adaptation periods of 10-14 days between experimental periods are mandatory to prevent carry-over effects.",
      "Latin Square designs ($3\\times 3$ or $4\\times 4$) maximize statistical power with small animal numbers.",
      "Paired feeding isolates feed efficiency from intake differences by equalizing dry matter intake between pairs.",
      "Comparative Slaughter Technique (CST) directly measures body protein, fat, and energy accretion over time.",
      "CST requires an initial slaughter group at Day 0 and final slaughter groups at trial termination.",
      "Empty Body Weight (EBW = Live Weight minus Digesta Weight) correction is essential to eliminate gut fill errors.",
      "Limitation of CST: destructive, expensive, ethically restricted, and unfeasible for large dairy cattle."
    ],
    "clinical": (
      "<b>Veterinary Relevance & Indian Feed Evaluation:</b><br>"
      "At ICAR research institutes such as the Central Sheep and Wool Research Institute (CSWRI, Avikanagar) and the Central Institute for Research on Goats (CIRG, Makhdoom), the comparative slaughter technique has been instrumental in formulating Complete Feed Blocks (CFB) for intensive lamb and kid fattening. CST demonstrated that incorporating 40-50% Prosopis juliflora pods or treated sunflower heads in pelleted diets produces an ADG of 120-150 g in Malpura lambs with a carcass dressing percentage of 49-51%, with zero adverse organ pathology, establishing low-cost feed security for arid regions."
    ),
    "tables": [
      {
        "title": "Experimental Designs for Live-Animal Feeding Experiments",
        "headers": ["Design Type", "Principle & Arrangement", "Primary Advantage", "Key Limitation"],
        "rows": [
          ["Continuous (Parallel) Group", "Independent matched groups fed diets concurrently for 60-120 days", "Simulates commercial farming; easy management", "Requires large animal numbers to mask individual variation"],
          ["Switch-Back (Reversal)", "Animals switch between diets across 3 periods (A-B-A vs B-A-B)", "Animal acts as own control; eliminates between-animal error", "Needs 14-day transition; cannot be used for irreversible growth"],
          ["Latin Square", "Rotational design where treatments match animal and period matrix", "High statistical efficiency with very few animals", "Assumes no carry-over effects; restricted time frames"],
          ["Paired Feeding", "Intake of control animal is tied to voluntary intake of test mate", "Separates metabolic efficiency from appetite/palatability", "Restricts natural voluntary intake of superior feed"]
        ]
      },
      {
        "title": "Comparison: Live-Weight Growth Trials vs Comparative Slaughter Technique",
        "headers": ["Evaluation Criteria", "Conventional Live-Weight Trial", "Comparative Slaughter Technique (CST)"],
        "rows": [
          ["Parameter Measured", "Live body weight changes, feed intake, FCR", "Exact grams of protein, fat, ash, and kcal energy retained"],
          ["Accuracy for Net Energy", "Low; confounded by variable gut fill and water retention", "Highest (Reference standard for NE systems)"],
          ["Animal Sacrifice", "Non-destructive; animals survive and enter herd", "Destructive; requires slaughter of all experimental animals"],
          ["Cost and Labor", "Economical and manageable on commercial farms", "Very expensive, labor-intensive, requires laboratory homogenization"],
          ["Application Scope", "Universal (cattle, buffaloes, horses, pigs, poultry)", "Mainly small ruminants (sheep, goats), pigs, broilers, lab rodents"]
        ]
      }
    ],
    "img": "",
    "tags": ["feeding experiments", "comparative slaughter", "FCR", "EBW", "experimental design", "Latin square", "net energy"]
  },

  "u2-t03": {
    "summary": "Digestion trials measure the apparent disappearance of feed nutrients in the gut, whereas metabolism trials quantify intake, faecal, and urinary losses to establish complete nitrogen, carbon, and mineral balances.",
    "desc": (
      "<b>I. DIGESTION TRIALS: DEFINITION AND OBJECTIVE</b><br>"
      "A digestion trial is an $in\\ vivo$ biological assay designed to measure the proportion of feed nutrients that disappear during passage through the gastrointestinal tract. Because undigested residues are voided in faeces, apparent digestibility is calculated by subtracting faecal nutrient excretion from total nutrient intake.<br><br>"
      "<b>Apparent Digestibility Formula:</b><br>"
      "$$\\text{Apparent Digestibility (\\%)} = \\frac{\\text{Nutrient Consumed (g)} - \\text{Nutrient in Faeces (g)}}{\\text{Nutrient Consumed (g)}} \\times 100$$<br>"
      "It is termed <i>apparent</i> rather than <i>true</i> because faeces contains not only undigested feed residues, but also <b>Metabolic Faecal Nitrogen (MFN)</b> consisting of sloughed mucosal epithelial cells, unabsorbed digestive enzymes, bile secretions, and bacterial biomass.<br><br>"
      "<b>II. METABOLISM TRIALS: DEFINITION AND PRINCIPLES</b><br>"
      "A metabolism trial extends a digestion trial by collecting and analyzing both <b>faeces and urine</b> (and in comprehensive energetic trials, gaseous emissions and cutaneous losses). Its purpose is to determine whether an animal is in a state of positive balance, equilibrium, or negative balance for a specific element (Nitrogen, Calcium, Phosphorus).<br><br>"
      "<b>Nitrogen Balance Equation:</b><br>"
      "$$\\text{Nitrogen Balance (g/day)} = N_{\\text{Intake}} - (N_{\\text{Faeces}} + N_{\\text{Urine}} + N_{\\text{Milk/Wool}})$$<br>"
      "<ul>"
      "<li><b>Positive Nitrogen Balance ($N_{\\text{Balance}} > 0$):</b> Daily intake exceeds total excretion. Indicates active tissue protein accretion (growth in young animals, fetal development in pregnancy, maternal recovery in dry cows, or muscle hypertrophy).</li>"
      "<li><b>Nitrogen Equilibrium ($N_{\\text{Balance}} = 0$):</b> Intake equals excretion. Typical of healthy, non-producing adult animals on maintenance rations.</li>"
      "<li><b>Negative Nitrogen Balance ($N_{\\text{Balance}} < 0$):</b> Total excretion exceeds intake. Indicates net breakdown of body skeletal muscle and structural tissues (starvation, severe protein deficiency, early lactation negative energy balance, febrile infectious disease, or trauma).</li>"
      "</ul>"
      "<b>III. ESSENTIAL REQUIREMENTS FOR METABOLISM HOUSING</b><br>"
      "Metabolism trials require specialized <b>metabolism stalls / crates</b> tailored to the sex and anatomy of the animal:<br>"
      "<ul>"
      "<li>Male animals (bullocks, rams, bucks) are universally preferred because their urethral orifice is anatomically well separated from the anus, allowing clean, uncontaminated separation of urine and faeces.</li>"
      "<li>Faeces drop into a lower grated hopper or canvas chute without stepping damage.</li>"
      "<li>Urine flows along a sloped stainless steel or rubberized gutter into a glass or polyethylene carboy containing an acid preservative to prevent microbial ammonia volatilization.</li>"
      "</ul>"
    ),
    "eliteDesc": (
      "<b>Partitioning of Endogenous Losses: MFN vs. EUN:</b><br>"
      "In classical nutrition, calculating the <b>Biological Value (BV)</b> and <b>True Digestibility (TD)</b> of protein requires quantifying two endogenous corrections:<br>"
      "1. <b>Metabolic Faecal Nitrogen (MFN):</b> Non-dietary nitrogen voided in faeces, typically 0.40 to 0.55 g N per 100 g Dry Matter intake in ruminants. Ruminants have substantially higher MFN than monogastrics because rumen microbial cell walls pass into the lower tract and partially resist enzymatic degradation.<br>"
      "2. <b>Endogenous Urinary Nitrogen (EUN):</b> Nitrogen excreted in urine derived from inevitable basal tissue catabolism (creatinine, purine derivatives, hippuric acid, and basal urea turnover) when the animal is fed a nitrogen-free diet. In ruminants, EUN is scaled to metabolic body weight: approximately 0.09 to 0.14 g N per kg $W^{0.75}$ per day.<br>"
      "$$\\text{True Protein Digestibility (\\%)} = \\frac{N_{\\text{Intake}} - (N_{\\text{Faecal}} - \\text{MFN})}{N_{\\text{Intake}}} \\times 100$$"
    ),
    "keyPoints": [
      "Digestion trials measure nutrient disappearance: intake minus faecal excretion.",
      "Metabolism trials measure complete retention: intake minus (faecal + urinary + product losses).",
      "Apparent digestibility underestimates true digestibility because faeces contains Metabolic Faecal Nitrogen (MFN).",
      "MFN consists of sloughed gut enterocytes, digestive enzymes, bile secretions, and microbial biomass.",
      "Positive nitrogen balance indicates protein accretion (growth, gestation, recovery).",
      "Negative nitrogen balance indicates tissue catabolism (starvation, early lactation, disease).",
      "Adult non-producing animals on maintenance rations exist at nitrogen equilibrium ($N_{\\text{Balance}} = 0$).",
      "Metabolism crates for ruminants require male animals to ensure clean anatomical separation of urine and faeces.",
      "Urine collection vessels require acid preservatives ($H_2SO_4$ or HCl) to prevent loss of volatile $NH_3$.",
      "Endogenous Urinary Nitrogen (EUN) reflects basal cellular turnover and scales to metabolic body size (0.09-0.14 g N/$W^{0.75}$)."
    ],
    "clinical": (
      "<b>Field Pathophysiology & Transition Cow Balances:</b><br>"
      "In high-yielding crossbred dairy cows (producing >25 kg milk/day) during the first 3 weeks post-calving, nutrient intake lags far behind the massive nutritional output of milk. Metabolism trials demonstrate that these animals enter acute <b>negative nitrogen and calcium balance</b>, mobilizing up to 1 kg of muscle protein and 50 g of skeletal bone calcium daily. If calcium homeostasis fails, clinical <b>parturient hypocalcemia (milk fever)</b> develops, causing flaccid paralysis and recumbency. Feeding negative Dietary Cation-Anion Difference (DCAD) diets in late gestation induces mild metabolic acidosis, priming parathyroid hormone (PTH) receptors and preventing negative calcium balance shock at calving."
    ),
    "tables": [
      {
        "title": "Fundamental Distinctions: Digestion Trial vs Metabolism Trial",
        "headers": ["Feature", "Digestion Trial", "Metabolism Trial"],
        "rows": [
          ["Parameters Collected", "Feed offered, orts (residue), and faeces", "Feed offered, orts, faeces, urine, and products (milk/wool)"],
          ["Nutrient Output Measured", "Apparent nutrient digestibility (%)", "Absolute retention and balance (+, 0, or -) in body tissues"],
          ["Energy / Nitrogen Fraction", "Digestible Energy (DE), DCP, TDN", "Metabolizable Energy (ME), Net Energy (NE), Nitrogen Balance"],
          ["Facility Required", "Simple individual stalls or crates", "Specialized metabolism stalls with strict urine/faeces separation"],
          ["Preservation Demands", "Basic drying/acidification of faeces", "Rigorous chemical preservation of both urine and faecal samples"],
          ["Clinical & Academic Use", "Evaluating routine nutritive value of feedstuffs", "Determining maintenance standards, protein quality, and mineral status"]
        ]
      },
      {
        "title": "Interpretation of Nitrogen Balance in Veterinary Practice",
        "headers": ["State of Nitrogen Balance", "Mathematical Definition", "Physiological / Clinical Status"],
        "rows": [
          ["Positive Balance (+N)", "Intake > (Faeces + Urine)", "Active skeletal muscle growth, pregnancy (fetal development), convalescence"],
          ["Nitrogen Equilibrium (Zero)", "Intake = (Faeces + Urine)", "Healthy adult animal on balanced maintenance ration"],
          ["Negative Balance (-N)", "Intake < (Faeces + Urine)", "Starvation, advanced malnutrition, acute transit ketosis, severe burns, chronic parasitism"]
        ]
      }
    ],
    "img": "",
    "tags": ["digestion trial", "metabolism trial", "nitrogen balance", "MFN", "EUN", "apparent digestibility", "protein retention"]
  },

  "u2-t04": {
    "summary": "Conducting a standardized ruminant digestion trial demands representative feed sampling, a 14-21 day preliminary adaptation period, a 7-10 day quantitative collection period, and meticulous chemical preservation of faeces and urine.",
    "desc": (
      "<b>I. SELECTION AND PREPARATION OF EXPERIMENTAL ANIMALS</b><br>"
      "Reliable digestion and metabolism data require strict standardization before experimental measurements begin:<br>"
      "<ul>"
      "<li><b>Species and Breed:</b> Healthy, dewormed, castrated male ruminants (bullocks, wethers, or bucks) of uniform age and body weight. Castrated males are docile and prevent copulation behaviors.</li>"
      "<li><b>Group Size:</b> A minimum of 4 to 6 animals per dietary treatment to allow statistical analysis ($n \\ge 4$).</li>"
      "<li><b>Animal Acclimatization:</b> Animals must be housed in metabolism crates for 3–5 days prior to the preliminary period to adapt to physical confinement and harness gear without psychological stress.</li>"
      "</ul>"
      "<b>II. THE TWO PHASES OF A DIGESTION TRIAL</b><br>"
      "A valid digestion trial consists of two sequential phases:<br>"
      "<ul>"
      "<li><b>1. Preliminary (Adaptation) Period (14 to 21 Days):</b><br>"
      "In ruminants, digesta passage through the complex multi-compartment stomach (reticulo-rumen, omasum, abomasum) is slow. A prolonged preliminary period is mandatory to: (a) completely evacuate residues of previous feeds from the rumen and intestines; (b) allow ruminal microbial populations to biochemically adapt to the test diet (e.g. cellulolytic vs. amylolytic enzyme induction); and (c) establish a constant daily voluntary feed intake.</li>"
      "<li><b>2. Collection Period (7 to 10 Days in Cattle/Buffaloes; 5 to 7 Days in Sheep/Goats):</b><br>"
      "During this period, daily feed offered, feed refused (orts), total faeces voided, and total urine excreted are quantitatively measured, recorded, and sampled with absolute precision over exactly 24-hour cycles.</li>"
      "</ul>"
      "<b>III. DAILY SAMPLING AND MEASUREMENT PROTOCOL</b><br>"
      "The daily routine must be performed at fixed hours (conventionally 08:00 AM to 08:00 AM):<br>"
      "1. <b>Feed and Residue (Orts):</b> Rations are weighed and offered at fixed times. Before the morning feeding, any uneaten residue (orts) is collected, weighed, recorded, and sampled. A representative 10% aliquot of both feed offered and orts is dried at 65°C for DM determination and pooled for proximate analysis.<br>"
      "2. <b>Faeces Collection and Aliquoting:</b><br>"
      "Total 24-hour faeces is transferred into a clean galvanized tub, weighed to the nearest gram, and thoroughly mixed using rubber gloves. Three representative aliquots are immediately drawn:<br>"
      "<ul>"
      "<li><i>Dry Matter Sample:</i> Exactly 1/100th to 1/50th of total faeces is placed in a tarred moisture dish and dried in a hot-air oven at 100°C for 24 hours to determine daily faecal dry matter output.</li>"
      "<li><i>Nitrogen Sample:</i> Exactly 1/500th or 1/1000th of fresh faeces is transferred into a wide-mouth glass-stoppered bottle containing 10–15 mL of 1:4 dilute sulfuric acid ($H_2SO_4$) to trap nitrogen as non-volatile ammonium sulfate $(NH_4)_2SO_4$.</li>"
      "<li><i>Mineral / Proximate Composite Sample:</i> Another 1/100th aliquot is dried at 65°C, pooled across the 7 days for each animal, ground through a 1 mm Wiley mill screen, and stored in airtight plastic bottles.</li>"
      "</ul>"
      "3. <b>Urine Collection and Preservation:</b><br>"
      "Urine draining through the funnel into the carboy must be preserved daily by adding 20–30 mL of 1:1 commercial hydrochloric acid (HCl) or 20% $H_2SO_4$ to keep the urine pH strictly below 3.0, stopping bacterial urea hydrolysis. Thymol crystals or toluene are added to inhibit surface fungal and bacterial proliferation."
    ),
    "eliteDesc": (
      "<b>Minimizing Experimental Errors in Digestion Trials:</b><br>"
      "The primary source of experimental artifact in ruminant digestion trials is <b>selective consumption</b> (sorting). When coarse roughages (sorghum stover, mature grass hay) are fed long, ruminants selectively consume leafy portions (high in CP and soluble carbohydrates) and leave coarse stems (high in lignin and silica). If orts are not analyzed separately and merely subtracted as total weight, the apparent digestibility of the feed is falsely over-calculated. Coarse forages must be chaffed to 2.5–3.0 cm lengths to prevent sorting, and the composition of orts must be subtracted nutrient-by-nutrient from the feed offered."
    ),
    "keyPoints": [
      "Digestion trials require 4 to 6 healthy, castrated male animals per treatment group.",
      "Preliminary adaptation period in ruminants is 14 to 21 days to completely void previous feed residues.",
      "Microbial adaptation in the rumen requires at least 2 weeks of steady dietary substrate supply.",
      "Collection period is 7 to 10 days in large ruminants (cattle, buffaloes) and 5 to 7 days in small ruminants.",
      "Daily measurements are taken over exact 24-hour cycles, typically at 08:00 AM.",
      "Feed refusals (orts) must be quantitatively weighed, sampled, and analyzed nutrient-by-nutrient.",
      "Faecal DM is determined by drying aliquots (1/50th) at 100°C for 24 hours.",
      "Faecal Nitrogen aliquots must be preserved immediately in dilute $H_2SO_4$ to prevent ammonia loss.",
      "Urine must be acidified below pH 3.0 using HCl or $H_2SO_4$ to prevent bacterial urease activity.",
      "Chaffing roughage to 2.5-3.0 cm eliminates selective sorting and prevents systematic calculation errors."
    ],
    "clinical": (
      "<b>Field Laboratory Quality Control:</b><br>"
      "In Indian veterinary university nutrition laboratories, a frequent blunder committed by post-graduate students is placing fresh faeces directly into an oven at 100°C for nitrogen estimation. High temperatures volatilize free ammonia and organic amines, causing an apparent 10-20% underestimation of faecal nitrogen output. This falsely elevates the apparent protein digestibility coefficient and distorts nitrogen balance calculations. Nitrogen must always be estimated either on fresh faeces preserved with acid or on carefully acidified, low-temperature (60°C) dried composites."
    ),
    "tables": [
      {
        "title": "Standard Timetable and Protocol for a 31-Day Ruminant Digestion Trial",
        "headers": ["Phase", "Day Range", "Primary Activity", "Critical Veterinary / Research Task"],
        "rows": [
          ["Stall Acclimatization", "Day -3 to Day 0", "Transfer animals to metabolism crates", "Monitor feed intake, check for crate abrasion or behavioral stress"],
          ["Preliminary Phase", "Day 1 to Day 21", "Feed experimental diet at fixed daily allowance", "Rumen microbial adaptation; purge previous intestinal digesta"],
          ["Collection Phase", "Day 22 to Day 28/31", "Strict 24-hour quantitative collection of feed, orts, faeces, urine", "Weigh, aliquot, and chemically preserve daily samples at 08:00 AM"],
          ["Chemical Analysis", "Post-trial (Week 5)", "Proximate & mineral analysis in laboratory", "Kjeldahl N, Soxhlet fat, crude fiber, ash, and bomb calorimetry"]
        ]
      },
      {
        "title": "Preservatives Used in Metabolism Trial Sampling",
        "headers": ["Sample Material", "Preservative Agent", "Volume / Rate", "Mechanism of Action"],
        "rows": [
          ["Urine (for Nitrogen)", "1:1 Hydrochloric acid (HCl) or 20% $H_2SO_4$", "20 – 30 mL per carboy (pH < 3.0)", "Inactivates microbial urease; converts free volatile $NH_3$ to non-volatile $NH_4Cl$"],
          ["Urine (General Preservation)", "Toluene or Thymol crystals", "5 – 10 mL layer on urine surface", "Forms an anaerobic surface barrier; inhibits bacterial and fungal proliferation"],
          ["Fresh Faeces (for Nitrogen)", "1:4 Dilute Sulfuric acid ($H_2SO_4$)", "10 – 15 mL per aliquot jar", "Fixes metabolic and microbial ammonia as stable ammonium sulfate $(NH_4)_2SO_4$"],
          ["Fresh Faeces (for Minerals)", "Low-temperature oven drying (65°C)", "Dried to constant weight", "Removes moisture without causing mineral volatilization or organic charring"]
        ]
      }
    ],
    "img": "",
    "tags": ["digestion trial protocol", "adaptation period", "collection period", "faecal preservation", "urine acidification", "orts", "sampling techniques"]
  },

  "u2-t05": {
    "summary": "Digestibility coefficients quantify the percentage of ingested nutrients absorbed, evaluated directly for sole feeds, indirectly by difference for concentrates, or via inert indicators without quantitative faecal collection.",
    "desc": (
      "<b>I. APPARENT DIGESTIBILITY COEFFICIENTS (ADC)</b><br>"
      "Digestibility coefficients express the percentage of an ingested nutrient that is absorbed by the gastrointestinal tract and does not appear in the faeces:<br>"
      "$$\\text{ADC of Nutrient (\\%)} = \\frac{\\text{Nutrient Consumed (g)} - \\text{Nutrient Voided in Faeces (g)}}{\\text{Nutrient Consumed (g)}} \\times 100$$<br>"
      "This calculation is performed individually for every proximate principle: Dry Matter (DM), Crude Protein (CP), Ether Extract (EE), Crude Fibre (CF), and Nitrogen-Free Extract (NFE).<br><br>"
      "<b>II. DIRECT METHOD</b><br>"
      "<ul>"
      "<li><b>Applicability:</b> Used exclusively for feeds that can constitute the sole ration of the animal without inducing digestive or metabolic derangements.</li>"
      "<li><b>Examples:</b> Green forages (berseem, lucerne, hybrid napier, maize), hays, and certain silages fed to sheep, goats, or bullocks.</li>"
      "<li><b>Procedure:</b> The test forage is fed as the sole diet throughout the preliminary and collection periods. Both feed intake and faecal excretion are directly measured and entered into the standard ADC formula.</li>"
      "</ul>"
      "<b>III. INDIRECT METHOD (DIGESTIBILITY BY DIFFERENCE)</b><br>"
      "<ul>"
      "<li><b>Applicability:</b> Concentrates (such as grains, mustard cake, cotton seed cake, soybean meal, wheat bran) cannot be fed alone to ruminants. Feeding concentrates alone induces acute ruminal acidosis, rumenitis, bloat, and death. Their digestibility must therefore be determined by difference using a basal roughage.</li>"
      "<li><b>Experimental Procedure (Two-Period Trial):</b><br>"
      "1. <i>Period 1 (Basal Period):</i> Animals are fed a basal roughage alone (e.g. oat hay) $\\rightarrow$ determine the digestibility coefficients of nutrients in the basal roughage.<br>"
      "2. <i>Period 2 (Combined Period):</i> Animals are fed a mixture of the basal roughage + the test concentrate (e.g. oat hay + mustard cake) $\\rightarrow$ determine total nutrient intake and total faecal output.<br>"
      "3. <i>Calculation by Difference:</i><br>"
      "$$\\text{Nutrient in Faeces from Roughage} = \\text{Roughage Nutrient Intake in Period 2} \\times (1 - \\text{Roughage ADC from Period 1})$$<br>"
      "$$\\text{Nutrient in Faeces from Concentrate} = \\text{Total Faecal Nutrient} - \\text{Calculated Roughage Faecal Nutrient}$$<br>"
      "$$\\text{Concentrate ADC (\\%)} = \\frac{\\text{Concentrate Nutrient Intake} - \\text{Concentrate Faecal Nutrient}}{\\text{Concentrate Nutrient Intake}} \\times 100$$</li>"
      "<li><b>Key Limitation:</b> Assumes no <i>associative effects</i> between the roughage and concentrate, an assumption that is not always biologically valid.</li>"
      "</ul>"
      "<b>IV. INDICATOR (MARKER) METHOD</b><br>"
      "The marker technique enables digestibility measurement without quantitative recording of total daily feed intake or total 24-hour faecal collection, making it indispensable for grazing animals on open pastures.<br><br>"
      "<b>Digestibility Equation Using Markers:</b><br>"
      "$$\\text{Apparent Digestibility (\\%)} = 100 - \\left[ 100 \\times \\frac{\\%\\text{ Marker in Feed}}{\\%\\text{ Marker in Faeces}} \\times \\frac{\\%\\text{ Nutrient in Faeces}}{\\%\\text{ Nutrient in Feed}} \\right]$$<br>"
      "<b>Classification of Nutritional Markers:</b><br>"
      "<ul>"
      "<li><b>1. Internal (Natural) Markers:</b> Substances naturally present in the feed that completely resist digestion: Lignin, <b>Acid Insoluble Ash (AIA / Silica)</b>, Indigestible ADF (iADF), and Plant Waxes (n-alkanes).</li>"
      "<li><b>2. External (Added) Markers:</b> Inert, non-toxic substances mixed uniformly into the feed: <b>Chromic Oxide ($Cr_2O_3$)</b>, Titanium Dioxide ($TiO_2$), Polyethylene Glycol (PEG), and rare earth elements (Ytterbium, Cerium).</li>"
      "</ul>"
    ),
    "eliteDesc": (
      "<b>Criteria of an Ideal Nutritional Marker:</b><br>"
      "An ideal indicator must fulfill seven rigorous physiological criteria: (1) completely indigestible and unabsorbable; (2) totally inert and non-toxic to ruminal microflora and host tissues; (3) possesses no pharmacological or motility-modifying actions on the gut; (4) associates intimately with the digesta fraction it is intended to track; (5) moves at an identical passage rate ($k_p$) to the digesta; (6) exhibits uniform, steady diurnal excretion without pulsing; and (7) can be quantified chemically or spectrophotometrically with high sensitivity. Chromic oxide ($Cr_2O_3$) has a specific gravity higher than feed particles, causing it to settle in the ventral rumen and undergo diurnal excretion peaks, necessitating dosed administration twice daily for at least 7 days prior to faecal grab sampling."
    ),
    "keyPoints": [
      "Apparent Digestibility Coefficient (ADC) measures percentage of nutrient ingested that does not appear in faeces.",
      "Direct method is restricted to feeds that can be fed alone (greens, hays, silages).",
      "Concentrates cannot be fed alone due to acute ruminal acidosis; must use indirect method (by difference).",
      "Indirect method requires a basal roughage period followed by a combined roughage + concentrate period.",
      "The indirect method assumes absence of associative effects between roughage and concentrate fermentation.",
      "Marker / Indicator method eliminates the need for total faecal collection or exact intake recording.",
      "Indispensable for evaluating pasture and rangeland intake in grazing ruminants.",
      "Internal markers are natural feed components: Lignin, Acid Insoluble Ash (AIA), indigestible ADF.",
      "External markers are inert chemicals added to feed: Chromic oxide ($Cr_2O_3$), Titanium dioxide ($TiO_2$).",
      "Digestibility formula with markers relies on the ratio of marker concentration in feed versus faeces."
    ],
    "clinical": (
      "<b>Indian Field Rangeland Evaluation:</b><br>"
      "In the semi-arid pastures of Rajasthan and Gujarat, quantifying forage intake and digestibility in grazing sheep, Marwari goats, and Kankrej cattle is impossible using conventional metabolism crates. Veterinary field researchers utilize <b>Acid Insoluble Ash (AIA)</b>, naturally present as insoluble silica in native grasses. By collecting a small 'grab sample' of faeces from the rectum twice daily (at morning release and evening return from pasture) and analyzing AIA, precise digestibility coefficients are calculated without restraining the animals, maintaining natural grazing kinetics."
    ),
    "tables": [
      {
        "title": "Comparison of Methods for Determining In Vivo Digestibility",
        "headers": ["Evaluation Method", "Feeding Strategy", "Total Faeces Weighed?", "Primary Field Application"],
        "rows": [
          ["Direct Method", "Single test feed fed as sole ration", "Yes (100% collection)", "Forages, green fodders, hays, and complete diets"],
          ["Indirect Method (By Difference)", "Basal roughage period followed by basal + test feed", "Yes (100% collection)", "Individual concentrate feeds, oilcakes, grains, and brans"],
          ["Internal Marker Method", "Natural feed containing AIA, lignin, or plant alkanes", "No (Rectal grab sampling)", "Pasture grazing livestock, rangelands, and wild herbivores"],
          ["External Marker Method", "Feed dosed with $Cr_2O_3$ or $TiO_2$ twice daily", "No (Spot faecal sampling)", "Intensive pen trials where total faecal collection is impractical"]
        ]
      },
      {
        "title": "Characteristics of Common Nutritional Indicators (Markers)",
        "headers": ["Marker Name", "Type", "Recovery Rate in Faeces", "Advantages & Practical Limitations"],
        "rows": [
          ["Acid Insoluble Ash (AIA)", "Internal", "98 – 102 %", "Extremely cheap, non-toxic; requires high-temperature acid ashing"],
          ["Lignin", "Internal", "85 – 105 %", "Natural constituent; variable recovery due to slight alkaline degradation in rumen"],
          ["Chromic Oxide ($Cr_2O_3$)", "External", "95 – 102 %", "Reference standard; heavy density causes diurnal excretion cycles in faeces"],
          ["Titanium Dioxide ($TiO_2$)", "External", "96 – 101 %", "Safer alternative to chromium; requires ICP or spectrophotometric detection"],
          ["Polyethylene Glycol (PEG)", "External", "95 – 100 %", "Water-soluble; ideal for liquid phase digesta kinetics and tannin binding"]
        ]
      }
    ],
    "img": "",
    "tags": ["digestibility coefficient", "direct method", "indirect method", "markers", "chromic oxide", "acid insoluble ash", "grazing intake"]
  },

  "u2-t06": {
    "summary": "Feed digestibility in ruminants is governed by feed composition (lignin, silica, maturity), level of intake and passage rate, physical processing, associative effects, and species digestive adaptations.",
    "desc": (
      "<b>I. FEED COMPOSITION FACTORS</b><br>"
      "Chemical and anatomical characteristics of the plant material are the foremost determinants of digestibility:<br>"
      "<ul>"
      "<li><b>Lignification:</b> Lignin is a complex, amorphous polyphenolic polymer completely indigestible by mammalian and microbial anaerobic enzymes. It forms steric covalent cross-linkages (ester and ether bonds) with hemicellulose and cellulose in the secondary plant cell wall. This encrusting matrix physically blocks microbial cellulolytic enzymes (*cellulases* and *hemicellulases*) from accessing digestible structural carbohydrates. Every 1% increase in plant lignin reduces dry matter digestibility by 3 to 4%.</li>"
      "<li><b>Plant Maturity:</b> As forages advance from pre-flowering vegetative stages to maturity and seed set, cell wall content (NDF, ADF, and lignin) rises dramatically, while cell contents (soluble proteins, sugars) decline. Young berseem or oats have digestibility $>70\\%$, whereas mature post-harvest straw drops below $40-45\\%$.</li>"
      "<li><b>Silica Content:</b> Common in paddy straw and certain wetland grasses. Silica impregnates plant cell walls, acting additively with lignin to depress organic matter digestibility by approximately 3% per 1% silica.</li>"
      "</ul>"
      "<b>II. LEVEL OF FEED INTAKE AND DIGESTA PASSAGE RATE</b><br>"
      "As an animal consumes more feed (e.g. high-producing dairy cows consuming 3 to 4 times their maintenance requirement), the rate of passage of digesta through the reticulo-rumen ($K_p$) increases significantly.<br>"
      "<ul>"
      "<li>Because feed particles spend less residence time in the rumen, microbial enzymes have less time to hydrolyze fibrous plant cell walls.</li>"
      "<li>Digestibility of dry matter undergoes a classic <b>depreciation factor</b>, declining by 1 to 2 percentage units for each multiple of maintenance ($1\\times M$) intake.</li>"
      "</ul>"
      "<b>III. ASSOCIATIVE EFFECTS OF FEEDS (THE STARCH-FIBER ANTAGONISM)</b><br>"
      "When individual feeds are combined in a mixed ration, their overall digestibility may differ from the arithmetic sum of their individual digestibilities. This is termed an <b>associative effect</b>:<br>"
      "<ul>"
      "<li><b>Negative Associative Effect:</b> Feeding excessive levels of rapidly fermentable starchy concentrates (maize, wheat grain) with fibrous roughage. Rapid starch fermentation drives ruminal pH down below 6.0.<br>"
      "Cellulolytic bacteria (*Fibrobacter succinogenes*, *Ruminococcus albus*, *Ruminococcus flavefaciens*) are acid-sensitive; their growth and cellulase secretion cease at pH <6.0. Consequently, the digestibility of the roughage fiber drops sharply.</li>"
      "<li><b>Positive Associative Effect:</b> Supplementing poor-quality straw with a small amount of green leguminous fodder (cowpea, berseem) or non-protein nitrogen (urea). This supplies rumen-degradable ammonia and branched-chain volatile fatty acids (isobutyrate, isovalerate) that stimulate cellulolytic bacteria, boosting total straw digestibility.</li>"
      "</ul>"
      "<b>IV. FEED PROCESSING AND PREPARATION</b><br>"
      "Grinding, chopping, pelleting, and chemical treatments markedly alter digestibility (e.g. urea ammoniation of straw breaks lignin-hemicellulose ester bonds, boosting digestibility by 8–12 units).<br><br>"
      "<b>V. ANIMAL AND SPECIES FACTORS</b><br>"
      "<b>Water Buffalo (*Bubalus bubalis*) vs. Cattle (*Bos indicus* / *Bos taurus*):</b> Under identical diets of low-quality crop residues (paddy or wheat straw), buffaloes exhibit 2 to 5 percentage units higher digestibility of crude fiber and dry matter than cattle. This is attributable to a larger ruminal volume, slower digesta passage rate, higher ruminal cellulolytic bacterial population, higher microbial nitrogen yield, and superior salivary recycling of urea."
    ),
    "eliteDesc": (
      "<b>Dynamic Kinetic Model of Fiber Digestion:</b><br>"
      "Modern ruminant nutrition models (CNCPS, NRC) describe ruminal fiber digestion as a competition between the rate of digestion ($k_d$, %/hour) and the rate of passage to the lower tract ($k_p$, %/hour):<br>"
      "$$\\text{Effective Ruminal Degradability (ED)} = A + \\frac{B \\times k_d}{k_d + k_p}$$<br>"
      "Where $A$ is the rapidly soluble fraction, $B$ is the potentially degradable insoluble fraction, and $k_p$ is passage rate. When intake increases, $k_p$ rises, decreasing ruminal digestion. However, in ruminants, this is partially offset by compensatory hindgut fermentation in the caecum and colon, which accounts for 8% to 15% of total tract cellulose and hemicellulose digestion."
    ),
    "keyPoints": [
      "Lignin encrusts cellulose and hemicellulose, directly blocking microbial cellulases.",
      "Every 1% increase in plant lignin reduces dry matter digestibility by 3 to 4 percentage units.",
      "Advancing forage maturity increases cell wall lignification and severely depresses digestibility.",
      "Plant silica in rice straw acts synergistically with lignin to depress organic matter digestibility.",
      "Higher feed intake increases ruminal passage rate ($k_p$), lowering residence time and fiber digestibility.",
      "Negative associative effects occur when starch fermentation drops rumen pH below 6.0, inhibiting cellulolytic microbes.",
      "Positive associative effects occur when small amounts of NPN or green legume fodder stimulate cellulolysis.",
      "Chaffing roughage prevents selective sorting and maintains steady ruminal fermentation.",
      "Water buffaloes digest poor-quality fibrous roughages 2-5% more efficiently than cattle.",
      "Compensatory hindgut (caecal) fermentation digests 8-15% of fiber passing unfermented from the rumen."
    ],
    "clinical": (
      "<b>Subacute Ruminal Acidosis (SARA) & Milk Fat Depression:</b><br>"
      "In commercial Indian crossbred dairy herds fed high-grain rations (>50% concentrate on DM basis) to chase peak milk yields, negative associative effects trigger <b>Subacute Ruminal Acidosis (SARA)</b>. Ruminal pH remains depressed between 5.2 and 5.8 for several hours daily. Cellulolytic bacteria are decimated, dropping fiber digestibility and altering rumen biohydrogenation of polyunsaturated fatty acids to produce *trans-10, cis-12 conjugated linoleic acid (CLA)*. This potent isomer directly downregulates lipogenic enzymes in the mammary gland, resulting in catastrophic <b>Milk Fat Depression (MFD)</b> where milk fat collapses from 4.0% to <2.5%."
    ),
    "tables": [
      {
        "title": "Major Factors Affecting Ruminant Feed Digestibility",
        "headers": ["Factor Category", "Specific Variable", "Mechanism of Action on Digestibility"],
        "rows": [
          ["Feed Composition", "Lignin and Silica Concentration", "Physically shields structural carbohydrates; resists anaerobic enzymatic cleavage"],
          ["Feed Maturity", "Advanced vegetative to seed stage", "Decreases soluble cell contents; increases thick, lignified secondary cell walls"],
          ["Feeding Level", "Multiple of Maintenance ($2\\times$ or $3\\times M$)", "Accelerates passage rate ($K_p$); shortens ruminal microbial fermentation time"],
          ["Associative Effects", "High starch inclusion (>30% grain)", "Drives rumen pH <6.0; acid-induced lysis of cellulolytic bacterial species"],
          ["Physical Form", "Fine grinding of roughages", "Reduces particle size and passage time, decreasing ruminal fiber digestion"],
          ["Animal Species", "Water Buffalo vs. Zebu Cattle", "Buffalo maintains higher cellulolytic counts and longer ruminal digesta retention"]
        ]
      },
      {
        "title": "Comparative Digestive Superiority: Buffalo (*Bubalus bubalis*) vs Cattle (*Bos indicus*)",
        "headers": ["Physiological Feature", "Water Buffalo (*Bubalus bubalis*)", "Zebu Cattle (*Bos indicus*)", "Impact on Straw Utilization"],
        "rows": [
          ["Rumen Volume & Capacity", "Larger relative to body weight", "Moderate relative to body weight", "Higher capacity for bulky, low-density roughages"],
          ["Digesta Retention Time", "Longer ruminal retention (slower $k_p$)", "Shorter ruminal retention", "More time for slow-acting cellulases to digest fiber"],
          ["Cellulolytic Bacterial Population", "Significantly higher counts/mL fluid", "Moderate counts/mL fluid", "Faster rate of breakdown of structural carbohydrates"],
          ["Ruminal Ammonia Recycling", "High salivary urea recycling", "Moderate salivary urea recycling", "Maintains minimum ruminal $NH_3$-N even on low-protein straw"],
          ["Crude Fibre Digestibility", "2 to 5 % higher on poor straw", "Baseline reference", "Superior survival and milk production on crop residues"]
        ]
      }
    ],
    "img": "",
    "tags": ["digestibility factors", "lignin", "silica", "associative effects", "passage rate", "SARA", "buffalo vs cattle"]
  },

  "u2-t07": {
    "summary": "Feeding standards quantify daily energy, protein, mineral, and vitamin allowances for specific body weights and production goals, evolving from empirical hay values to thermodynamic net energy systems.",
    "desc": (
      "<b>I. DEFINITION AND SIGNIFICANCE</b><br>"
      "A <b>feeding standard</b> is a systematic, scientifically formulated table or mathematical statement specifying the quantities of nutrients (dry matter, energy, protein, minerals, vitamins) that should be supplied daily in an animal's ration to support optimal health, maintenance, and defined levels of production (growth, lactation, pregnancy, work, wool).<br><br>"
      "<b>Practical Importance in Animal Husbandry:</b><br>"
      "<ul>"
      "<li>Forms the scientific foundation for balanced ration computation on farms and commercial feed mills.</li>"
      "<li>Prevents underfeeding (which causes emaciation, infertility, and low yield) and overfeeding (which wastes expensive feed and induces metabolic disorders).</li>"
      "<li>Enables livestock feed budgeting, fodder resource planning, and economic forecasting for dairy, meat, and wool enterprises.</li>"
      "</ul>"
      "<b>II. HISTORICAL EVOLUTION OF FEEDING STANDARDS</b><br>"
      "<ul>"
      "<li><b>1. Thaer's Hay Values (1809, Germany):</b> Albrecht von Thaer created the world's first feeding standard by comparing all feeds to standard meadow hay based on extraction experiments. For example, 100 lb meadow hay = 91 lb clover hay = 200 lb potatoes = 400 lb straw. While purely empirical, it introduced the revolutionary concept of comparative feed substitution.</li>"
      "<li><b>2. Grouven's Crude Nutrient Standard (1859, Germany):</b> Formulated requirements based on total proximate principles (Crude Protein, Crude Fat, Carbohydrates). Ignored nutrient digestibility, treating indigestible fiber the same as digestible starch.</li>"
      "<li><b>3. Wolff's Digestible Nutrient Standard (1864, Germany):</b> First system based on <b>digestible nutrients</b> (DCP, digestible carbohydrates, digestible fat), recognizing that only digested portions nourish the animal.</li>"
      "<li><b>4. Wolff-Lehmann Standard (1897, Germany):</b> C. Lehmann modified Wolff's standards by incorporating the animal's <b>Dry Matter capacity</b> and adjusting nutrient allowances based on varying levels of milk production.</li>"
      "<li><b>5. Kellner's Starch Equivalent (SE) System (1907, Germany):</b> Oskar Kellner utilized respiration calorimetry in adult bullocks to determine the fat-depositing power of pure nutrients and feeds. He expressed all energy values as <b>Starch Equivalents</b> (1 kg SE = Net energy of 1 kg digestible starch = 2356 kcal NE or 248 g body fat deposited). Introduced the *Wertvoll* (value factor) to penalize fibrous roughages for high work of digestion.</li>"
      "<li><b>6. Armsby's Net Energy System (1915, USA):</b> Henry Prentiss Armsby built the world-renowned Pennsylvania respiration calorimeter to determine net energy values for maintenance and gain directly in Therms (1 Therm = 1000 kcal).</li>"
      "<li><b>7. Morrison's 'Feeds and Feeding' Standards (USA):</b> Frank B. Morrison compiled extensive digestible nutrient tables, expressing requirements in Total Digestible Nutrients (TDN) and Digestible Crude Protein (DCP). Became the most widely used farm standard globally for over 50 years.</li>"
      "<li><b>8. Modern Factorial Standards:</b> National Research Council (NRC, USA), Agricultural Research Council / AFRC (UK), and Indian Council of Agricultural Research (ICAR, India).</li>"
      "</ul>"
      "<b>III. LIMITATIONS OF FEEDING STANDARDS</b><br>"
      "Feeding standards are intended as <b>guides, not rigid mathematical laws</b>. They represent population averages and must be modified by the practicing veterinarian to account for: individual genetic variability, extremes of ambient temperature (cold/heat stress), clinical parasite burdens, physical activity/grazing distance, and feed processing differences."
    ),
    "eliteDesc": (
      "<b>Thermodynamic Progression of Energy Units in Feeding Standards:</b><br>"
      "The evolution of feeding standards mirrors the progressive thermodynamic partitioning of food energy:<br>"
      "$$\\text{Gross Energy (GE)} \\xrightarrow{-\\text{Faecal Loss}} \\text{Digestible Energy (DE / TDN)} \\xrightarrow{-\\text{Urinary \\& Gaseous Losses}} \\text{Metabolizable Energy (ME)} \\xrightarrow{-\\text{Heat Increment (HI)}} \\text{Net Energy (NE)}$$<br>"
      "Early systems (Wolff, Morrison) stopped at the DE/TDN level. The fundamental thermodynamic error of TDN is that it treats 1 kg of TDN from straw identically to 1 kg of TDN from maize grain. However, fermenting straw generates a vast **Heat Increment (HI)** of fermentation and digestion (wasted as heat), yielding far less Net Energy for production than maize. Modern standards (NRC, ARC) isolate $NE_m$, $NE_g$, and $NE_l$ to overcome this thermodynamic flaw."
    ),
    "keyPoints": [
      "Feeding standards specify daily nutrient allowances for maintenance and defined production targets.",
      "Albrecht von Thaer (1809) developed the first empirical standard using 'Hay Values'.",
      "Grouven (1859) used total crude nutrients; failed because it ignored digestibility.",
      "Emil von Wolff (1864) established the first standard based on digestible nutrients (DCP, digestible fat/CHO).",
      "Wolff-Lehmann (1897) added dry matter intake limits and graded allowances for milk yield.",
      "Oskar Kellner (1907) developed the Starch Equivalent (SE) system based on fat deposition in bullocks.",
      "1 kg Starch Equivalent (SE) = net energy of 1 kg starch = 2356 kcal NE = 248 g fat deposited.",
      "Morrison's standard popularized the TDN and DCP system for practical farm ration computation.",
      "Thermodynamic flaw of TDN: overvalues roughages relative to concentrates by ignoring Heat Increment.",
      "Feeding standards are guides reflecting herd averages, requiring adjustment for environmental and disease stress."
    ],
    "clinical": (
      "<b>Tropical Adaptation & The ICAR Mandate:</b><br>"
      "A classical error in Indian field veterinary practice is calculating rations for indigenous cattle (e.g. Sahiwal, Gir) using temperate American NRC tables. Bos indicus cattle have 5% to 10% lower basal metabolic fasting heat production per unit metabolic body weight ($W^{0.75}$) than Bos taurus cattle, and under hot humid tropical conditions, excess protein feeding generates metabolic heat stress. Indian field veterinarians must strictly utilize the <b>ICAR (2013) Nutrient Requirements of Cattle and Buffaloes</b>, which is calibrated specifically to tropical indigenous genotypes, buffalo metabolic rates, and crop-residue diets."
    ),
    "tables": [
      {
        "title": "Chronological Milestones in the Evolution of Feeding Standards",
        "headers": ["Year & Pioneer", "Country", "Standard Name", "Basis of Expression", "Historical Significance"],
        "rows": [
          ["1809 (Albrecht von Thaer)", "Germany", "Hay Values", "100 lb Meadow Hay equivalents", "First quantitative standard for feed substitution"],
          ["1859 (Grouven)", "Germany", "Total Crude Nutrients", "Total CP, EE, Carbohydrates", "First chemical proximate approach (flawed: ignored digestion)"],
          ["1864 (Emil von Wolff)", "Germany", "Digestible Nutrients", "DCP, Digestible Fat, Digestible CHO", "First standard to recognize digestible vs undigested nutrients"],
          ["1897 (Wolff-Lehmann)", "Germany", "Modified Digestible Standards", "DCP, TDN + Dry Matter capacity", "Introduced DMI limits and production increments for milk"],
          ["1907 (Oskar Kellner)", "Germany", "Starch Equivalent (SE)", "Fat-depositing power of 1 kg starch", "First Net Energy standard; penalized roughages via Value Factor"],
          ["1915 (Henry P. Armsby)", "USA", "Net Energy System", "Therms of Net Energy", "Calorimetric respiration chamber measurements in cattle"],
          ["1936 (Frank B. Morrison)", "USA", "Feeds and Feeding", "DCP and TDN", "Global standard for practical livestock ration formulation"],
          ["1964–2013 (ICAR)", "India", "ICAR Feeding Standards", "DCP, TDN, ME, Ca, P", "Calibrated specifically to Indian zebu cattle and buffaloes"]
        ]
      },
      {
        "title": "Comparison of Energy and Protein Units Across Major Global Standards",
        "headers": ["Feeding Standard", "Energy Expression Unit", "Protein Expression Unit", "Primary Geographic Use"],
        "rows": [
          ["Morrison System", "Total Digestible Nutrients (TDN)", "Digestible Crude Protein (DCP)", "Historical USA and global practical farming"],
          ["NRC (Dairy / Beef)", "Net Energy ($NE_m, NE_g, NE_l$ in Mcal)", "Metabolizable Protein (MP, RDP / RUP)", "United States, Canada, and global commercial dairies"],
          ["ARC / AFRC", "Metabolizable Energy (ME, in MJ)", "Digestible Undegradable Protein (DUP / ERDP)", "United Kingdom and European Union"],
          ["Scandinavian System", "Feed Units (Barley equivalents)", "Digestible True Protein", "Northern Europe and Scandinavia"],
          ["ICAR (2013)", "TDN (kg) and ME (Mcal / MJ)", "DCP (g) and Crude Protein (CP)", "India and South Asian livestock systems"]
        ]
      }
    ],
    "img": "",
    "tags": ["feeding standards", "history", "Thaer", "Wolff-Lehmann", "Kellner", "Starch Equivalent", "Morrison", "ICAR"]
  },

  "u2-t08": {
    "summary": "Major ruminant feeding standards (Morrison, NRC, ARC, Kearl, ICAR) balance simplicity against biological precision, differing fundamentally in their expression of energy (TDN, ME, NE) and protein (DCP vs MP).",
    "desc": (
      "<b>I. MORRISON'S STANDARD (USA)</b><br>"
      "<ul>"
      "<li><b>Energy & Protein Units:</b> Energy as Total Digestible Nutrients (TDN, in lb or kg); Protein as Digestible Crude Protein (DCP).</li>"
      "<li><b>Merits:</b> Extremely simple to understand and compute; extensive feed tables available; ideal for field-level thumb-rule calculations.</li>"
      "<li><b>Demerits:</b> The TDN system seriously overvalues fibrous roughages relative to concentrates because it fails to deduct Heat Increment (HI). Feeding an animal solely based on TDN from straw results in under-nutrition.</li>"
      "</ul>"
      "<b>II. NATIONAL RESEARCH COUNCIL (NRC, USA)</b><br>"
      "<ul>"
      "<li><b>Energy & Protein Units:</b> Energy partitioned into three distinct Net Energy values: $NE_m$ (Maintenance), $NE_g$ (Gain), and $NE_l$ (Lactation), expressed in Mcal/kg DM. Protein expressed as <b>Metabolizable Protein (MP)</b>, partitioned into Rumen Degradable Protein (RDP) and Rumen Undegradable Protein (RUP).</li>"
      "<li><b>Merits:</b> The most scientifically rigorous and biologically accurate system for high-yielding dairy herds. Prevents excessive energy/protein feeding and accounts for differences in heat increment.</li>"
      "<li><b>Demerits:</b> Highly complex mathematical algorithms requiring computer software; feed library is based primarily on temperate crops (corn grain, soybean meal, alfalfa) and poorly reflects tropical crop-residue diets.</li>"
      "</ul>"
      "<b>III. AGRICULTURAL RESEARCH COUNCIL (ARC / AFRC, UK)</b><br>"
      "<ul>"
      "<li><b>Energy & Protein Units:</b> Energy as Metabolizable Energy (ME, in MJ/kg DM) adjusted by efficiency factors ($k_m, k_l, k_f$). Protein as Effective Rumen Degradable Protein (ERDP) and Digestible Undegradable Protein (DUP).</li>"
      "<li><b>Merits:</b> Highly dynamic mechanistic model separating ruminal microbial requirements from host tissue demands.</li>"
      "<li><b>Demerits:</b> Highly theoretical; requires extensive $in\\ situ$ nylon bag rumen degradation rates ($a, b, c$) that are unavailable for most developing-world feeds.</li>"
      "</ul>"
      "<b>IV. KEARL'S FEEDING STANDARD (1982)</b><br>"
      "<ul>"
      "<li><b>Origin & Purpose:</b> Formulated by Leonard C. Kearl at Utah State University specifically for ruminants in developing countries across tropical and subtropical zones.</li>"
      "<li><b>Merits:</b> Accounts for the lower nutrient density of tropical grasses, dual-purpose milk/draft genotypes, and lower body weights. Provided the first unified international standard for tropical buffaloes, sheep, and goats.</li>"
      "</ul>"
      "<b>V. INDIAN COUNCIL OF AGRICULTURAL RESEARCH (ICAR) STANDARDS</b><br>"
      "<ul>"
      "<li><b>Evolution:</b> Initiated by K.C. Sen and S.C. Ray (1964), revised by S.K. Ranjhan (1980, 1998), and formalized as the comprehensive <b>ICAR (2013) Standards</b> by the National Institute of Animal Nutrition and Physiology (NIANP, Bengaluru).</li>"
      "<li><b>Energy & Protein Units:</b> Dual expression: TDN and ME for energy; DCP and CP for protein.</li>"
      "<li><b>Merits:</b> Fully validated through thousands of metabolism and digestion trials on indigenous zebu cattle (<i>Bos indicus</i>), water buffaloes (<i>Bubalus bubalis</i>), and native sheep and goats. Calibrated to tropical roughage diets (paddy straw, wheat straw, bagasse) and agro-industrial cakes.</li>"
      "</ul>"
    ),
    "eliteDesc": (
      "<b>Thermodynamic Efficiencies in the ARC Metabolizable Energy System:</b><br>"
      "The ARC system expresses the efficiency of converting Metabolizable Energy (ME) to Net Energy ($k$) as a linear function of diet metabolizability ($q = ME / GE$):<br>"
      "$$\\text{Efficiency for Maintenance } (k_m) = 0.35 q + 0.503$$<br>"
      "$$\\text{Efficiency for Lactation } (k_l) = 0.35 q + 0.420$$<br>"
      "$$\\text{Efficiency for Growth/Gain } (k_f) = 0.78 q + 0.006$$<br>"
      "Because poor-quality crop residues have low metabolizability ($q \\approx 0.35 - 0.40$), their efficiency of conversion to fat gain ($k_f$) is dismal ($<25\\%$), whereas high-concentrate diets ($q \\approx 0.70$) have an efficiency of over $55\\%$. This mathematically exposes why fattening cattle on straw alone is a biological impossibility."
    ),
    "keyPoints": [
      "Morrison's standard uses TDN and DCP; simple for farm calculations but overvalues fibrous roughages.",
      "NRC system uses Net Energy ($NE_m, NE_g, NE_l$) and Metabolizable Protein (MP: RDP and RUP).",
      "NRC is the most biologically precise system for high-yielding herds, but requires computer formulation.",
      "ARC system uses Metabolizable Energy (ME in MJ) and partitioned protein (ERDP and DUP).",
      "ARC efficiency factors ($k_m, k_l, k_f$) mathematically link diet metabolizability ($q$) to net retention.",
      "Kearl (1982) standard was specifically formulated for ruminants in developing tropical countries.",
      "ICAR standards (1964, 1980, 1998, 2013) are calibrated to Indian zebu cattle, buffaloes, and local sheep/goats.",
      "ICAR expresses requirements in TDN/ME and DCP/CP, grounded in tropical crop-residue metabolism trials.",
      "Water buffaloes require 10-15% higher energy per kg milk due to higher milk fat content (6.5-8.0%).",
      "DCP system ignores rumen protein degradation kinetics, whereas modern MP systems partition microbial vs bypass protein."
    ],
    "clinical": (
      "<b>Practical Application in Indian Buffalo Dairies:</b><br>"
      "A common error when formulating rations for high-yielding Murrah buffaloes in Haryana or Punjab is using NRC dairy cow requirements. Buffalo milk contains an average of 7.0% to 8.0% butterfat compared to 3.5% to 4.0% in exotic Holstein-Friesian cattle. Synthesizing this massive fat yield demands 30% more energy per kg milk. The <b>ICAR (2013)</b> standard explicitly accounts for fat percentage, prescribing 0.37 kg TDN and 65 g DCP per kg of 7% fat buffalo milk, compared to only 0.28 kg TDN and 45 g DCP for 3.5% fat crossbred cow milk. Applying ICAR standards prevents progressive emaciation and postpartum anestrus in elite buffaloes."
    ),
    "tables": [
      {
        "title": "Comprehensive Comparison of Major Global Ruminant Feeding Standards",
        "headers": ["Feature / Standard", "Morrison (USA)", "NRC (USA, 2001/2021)", "ARC / AFRC (UK)", "ICAR (India, 2013)"],
        "rows": [
          ["Energy Expression", "TDN (lb or kg)", "$NE_m, NE_g, NE_l$ (Mcal/kg DM)", "ME (MJ/kg DM) with $k_m, k_l, k_f$", "TDN (kg) and ME (Mcal or MJ)"],
          ["Protein Expression", "DCP (lb or kg)", "Metabolizable Protein (RDP/RUP)", "ERDP and DUP (g/kg DM)", "DCP (g) and Crude Protein (CP)"],
          ["Roughage Assessment", "Overvalues straw (ignores HI)", "Precise (accounts for HI)", "Precise (links $q$ to efficiency)", "Calibrated to tropical crop residues"],
          ["Target Genotypes", "Temperate cattle", "Exotic high-yield Holstein/Jersey", "European dairy and beef breeds", "Indigenous Zebu cattle and Water Buffaloes"],
          ["Field Feasibility", "Very simple; hand calculations", "Complex; requires computer software", "Theoretical; requires lab $in\\ situ$ data", "Ideal for Indian veterinary field practice"]
        ]
      },
      {
        "title": "Merits and Demerits: TDN System vs Net Energy (NE) System",
        "headers": ["Evaluation Criterion", "Total Digestible Nutrients (TDN) System", "Net Energy (NE) System ($NE_m, NE_g, NE_l$)"],
        "rows": [
          ["Biological Accuracy", "Moderate; ignores heat increment of fermentation and work", "Highest; reflects actual energy deposited or retained in product"],
          ["Roughage vs Concentrate", "Falsely equates 1 kg TDN of straw to 1 kg TDN of corn", "Correctly discounts straw for its huge Heat Increment (HI)"],
          ["Ease of Calculation", "Simple arithmetic; easy for farmers and UG students", "Complex; requires separate equations for maintenance, gain, and milk"],
          ["Feed Table Availability", "Available for almost all tropical feeds and by-products", "Limited primarily to temperate, intensively studied feedstuffs"]
        ]
      }
    ],
    "img": "",
    "tags": ["feeding standards", "Morrison", "NRC", "ARC", "Kearl", "ICAR", "TDN vs NE", "DCP vs MP", "comparative nutrition"]
  },

  "u2-t09": {
    "summary": "A balanced ration supplies all essential nutrients in proper amounts, proportions, and dry matter bulk to nourish an animal over 24 hours without inducing digestive disturbances, metabolic strain, or economic loss.",
    "desc": (
      "<b>I. DEFINITIONS AND TERMINOLOGY</b><br>"
      "<ul>"
      "<li><b>Ration:</b> The total feed allowance provided to an animal over a single 24-hour period, regardless of whether it meets physiological requirements.</li>"
      "<li><b>Balanced Ration:</b> A ration that supplies all essential nutrients (Dry Matter, energy, protein, minerals, vitamins, water) in proper proportions, amounts, and physical forms required to nourish a specific animal for a 24-hour period for maintenance and target production without metabolic or digestive disturbance.</li>"
      "<li><b>Maintenance Ration:</b> The portion of the daily ration required to keep the non-producing animal in energy and nitrogen equilibrium at constant body weight, supporting basal tissue turnover, body temperature regulation, and vital organ work.</li>"
      "<li><b>Production Ration:</b> The nutrient allowance supplied <i>over and above</i> maintenance to support growth, gestation, lactation, draft work, or wool production.</li>"
      "</ul>"
      "<b>II. ESSENTIAL CHARACTERISTICS OF AN IDEAL BALANCED RATION</b><br>"
      "A well-formulated livestock ration must fulfill seven cardinal nutritional criteria:<br>"
      "<ul>"
      "<li><b>1. Adequate Dry Matter Bulk:</b> Must satisfy the animal's physical appetite and rumen capacity without exceeding voluntary intake limits (2.0–2.5% BW in zebu cattle; 2.5–3.0% in crossbreds; 3.0% in buffaloes). Proper rumen fill is necessary for regular ruminal contractions.</li>"
      "<li><b>2. Proper Roughage to Concentrate (R:C) Ratio:</b> At least 60:40 to 50:50 on a DM basis. Coarse roughage (minimum 19% ADF) ensures 30–40 minutes of cud-chewing per kg DM, stimulating 100–150 liters of alkaline saliva daily to buffer the rumen at pH 6.2–6.8.</li>"
      "<li><b>3. Palatability and Freshness:</b> Must be readily accepted. Ingredients must be free from moulds (e.g. aflatoxins), dustiness, rancid fats, and unpalatable weeds.</li>"
      "<li><b>4. Mildly Laxative Nature:</b> Must maintain normal digestive transit without inducing constipation, impaction, or watery scours. Achieved by incorporating succulent greens, wheat bran, and adequate water.</li>"
      "<li><b>5. Variety of Ingredients:</b> Formulating the concentrate mixture from 3 to 4 distinct ingredient classes (e.g. cereals + oilcakes + brans + pulse chuni) balances amino acid profiles and minimizes single-ingredient toxicity risks.</li>"
      "<li><b>6. Mineral and Vitamin Fortification:</b> Must incorporate 1% to 2% trace-mineralized salt and 1% dicalcium phosphate (DCP) or calcined limestone to maintain calcium:phosphorus ratios between 1.5:1 and 2:1.</li>"
      "<li><b>7. Least-Cost Economy:</b> Maximizing high-yielding farm greens and agro-industrial by-products ensures maximum net profitability per liter of milk.</li>"
      "</ul>"
      "<b>III. SYSTEMATIC STEPS IN RATION COMPUTATION</b><br>"
      "1. <b>Determine Animal Parameters:</b> Species, body weight (BW), physiological status (dry, pregnant, lactating), milk yield, and milk fat percentage.<br>"
      "2. <b>Calculate Daily Dry Matter Requirement (DMI):</b> Based on % body weight (e.g. 400 kg crossbred cow $\\times 2.5\\% = 10.0$ kg DMI).<br>"
      "3. <b>Partition DMI into Roughage and Concentrate:</b> Allocate 60–70% of DMI to roughages (6.0–7.0 kg) and 30–40% to concentrates (3.0–4.0 kg).<br>"
      "4. <b>Allocate Green Fodder:</b> Provide minimum 10–15 kg fresh green fodder (providing ~2–3 kg DM) to meet carotene/vitamin A needs.<br>"
      "5. <b>Allocate Basal Dry Roughage:</b> Provide chaffed dry straw/stover to meet the remaining roughage DM quota.<br>"
      "6. <b>Balance Deficits via Concentrate Mixture:</b> Calculate total DCP and TDN provided by the roughages; supply the remaining deficit using a balanced concentrate mixture."
    ),
    "eliteDesc": (
      "<b>Physical Effective Neutral Detergent Fiber ($peNDF$) Thresholds:</b><br>"
      "In modern dairy ration balancing, chemical fiber percentage alone is inadequate. The ration must supply **Physically Effective Fiber ($peNDF$)**, defined as the fraction of NDF that stimulates rumination, cud-chewing, and the formation of a buoyant ruminal fiber mat. Measured via the Penn State Particle Separator (PSPS), rations must contain a minimum of **21% to 22% $peNDF$** on a DM basis. If coarse fiber is ground too finely, $peNDF$ collapses below 18%, rumination time plummets, salivary bicarbonate secretion drops by 40%, and rumen pH crashes below 5.8, precipitating clinical acidosis and milk fat depression."
    ),
    "keyPoints": [
      "A ration is the 24-hour feed allowance; a balanced ration fulfills all physiological requirements without excess or deficit.",
      "Maintenance ration supports basal metabolism and tissue turnover at constant body weight.",
      "Production ration supplies additional nutrients for growth, gestation, milk, draft, or wool.",
      "Dry Matter capacity limits total intake to 2.0-3.0% of body weight in dairy ruminants.",
      "Minimum roughage requirement is 40% on DM basis to stimulate rumination and salivary buffering.",
      "Cattle require 30-40 minutes of rumination per kg of coarse dry matter ingested.",
      "Incorporate 3 to 4 distinct ingredient classes to ensure palatability and amino acid complementarity.",
      "Rations must maintain a Calcium to Phosphorus ratio between 1.5:1 and 2:1.",
      "Physically Effective NDF ($peNDF$) must exceed 21-22% of DM to prevent ruminal acidosis.",
      "Thumb rule for Indian dairy cows: 1 kg concentrate for every 2.5 kg crossbred milk (or 2.0 kg buffalo milk)."
    ],
    "clinical": (
      "<b>Field Thumb Rules for Indian Smallholder Dairy Systems:</b><br>"
      "For a 400 kg crossbred dairy cow yielding 10 liters of milk (4.0% fat):<br>"
      "1. <b>Maintenance Requirement:</b> 1.5 kg balanced concentrate mixture + 4–5 kg dry wheat/paddy straw + 15 kg seasonal green fodder (berseem/maize).<br>"
      "2. <b>Milk Production Allowance:</b> Add 1 kg of balanced concentrate mixture for every 2.5 kg of milk produced (i.e. $10 / 2.5 = 4.0$ kg concentrate for milk). Total concentrate allowance = $1.5 + 4.0 = 5.5$ kg/day.<br>"
      "3. <b>Buffalo Adjustment:</b> For dairy buffaloes (Murrah) yielding 10 liters of milk at 7.0% fat, feed 1 kg concentrate for every 2.0 kg of milk ($10 / 2.0 = 5.0$ kg) + 2.0 kg maintenance = 7.0 kg concentrate daily. Always add 1 kg extra concentrate during the last 60 days of pregnancy."
    ),
    "tables": [
      {
        "title": "Essential Nutritional Guidelines for Balancing Ruminant Rations",
        "headers": ["Ration Component", "Recommended Allowance / Boundary", "Key Physiological Rationale"],
        "rows": [
          ["Total Dry Matter (DMI)", "2.0 – 3.2 kg per 100 kg Body Weight", "Prevents gut over-distension while guaranteeing adequate nutrient intake"],
          ["Roughage:Concentrate Ratio", "60:40 to 50:50 (Never drop roughage <40%)", "Maintains rumen pH between 6.2 and 6.8; prevents SARA"],
          ["Green Fodder Inclusion", "Minimum 10 – 15 kg fresh weight daily", "Supplies natural $\\beta$-carotene (Vitamin A precursor) and un-lignified fiber"],
          ["Crude Protein in Concentrate", "20 – 22 % CP for high yielders; 18% for medium", "Meets microbial and host amino acid requirements"],
          ["Mineral Mixture & Salt", "2% Mineral Mixture + 1% Common Salt", "Guarantees trace elements (Zn, Cu, Co, I, Mn, Se) and osmotic balance"],
          ["Physically Effective Fiber ($peNDF$)", "$\\ge 21\\%$ on total diet Dry Matter basis", "Ensures adequate cud-chewing (30–40 min/kg DM) and salivary buffering"]
        ]
      },
      {
        "title": "Practical Daily Ration Framework for a 400 kg Dairy Cow (10 L Milk Yield)",
        "headers": ["Dietary Component", "Fresh (As-Fed) Weight", "Dry Matter (DM) Content", "Contribution to Daily Ration"],
        "rows": [
          ["Chaffed Cereal Straw (Wheat/Paddy)", "4.5 kg", "~4.0 kg DM", "Basal bulk; provides rumen scratch factor and stimulates cud chewing"],
          ["Cultivated Green Fodder (Maize/Berseem)", "15.0 kg", "~3.0 kg DM", "High palatability, succulence, natural carotene/vitamins, and soluble sugars"],
          ["Commercial Balanced Concentrate", "5.5 kg", "~4.8 kg DM", "Meets maintenance (1.5 kg) and 10 L milk production (4.0 kg) deficits in DCP and TDN"],
          ["Mineral Mixture + Common Salt", "100 g + 50 g", "~150 g DM", "Trace mineral support for reproductive cyclicity and hoof integrity"],
          ["Clean Drinking Water", "Ad libitum (60–80 L)", "Nil", "Maintains blood volume, thermoregulation, and milk water secretion (87% of milk)"]
        ]
      }
    ],
    "img": "",
    "tags": ["balanced ration", "definition", "characteristics", "maintenance ration", "production ration", "ration computation", "peNDF", "thumb rule"]
  }
}

target_file = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "data", "data-theory-unit2.JS")

with open(target_file, "w", encoding="utf-8") as f:
    f.write("/* Auto-scaffolded and compiled by tools/build_unit2.py — safe to edit by hand. */\n")
    f.write("var theoryData = (typeof theoryData !== 'undefined') ? theoryData : {};\n\n")
    f.write('theoryData["unit-2"] = ')
    json.dump(unit2_data, f, indent=2, ensure_ascii=False)
    f.write(";\n")

print(f"Successfully generated {target_file} with {len(unit2_data)} topics.")
