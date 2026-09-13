# tools/build_unit4.py
# Generates comprehensive, exam-oriented content for Theory Unit 4 (Applied Non-Ruminant Nutrition)
# 17 topics: u4-t01 to u4-t17

import json
import os

unit4_data = {
  "u4-t01": {
    "summary": "Non-ruminants cannot synthesize microbial amino acids in the stomach and depend on dietary balance of essential amino acids and digestible or metabolizable energy to sustain maintenance and production.",
    "desc": (
      "<b>I. DIGESTIVE STRATEGIES OF NON-RUMINANTS (MONOGASTRICS)</b><br>"
      "Non-ruminants (swine, poultry, equines, dogs, cats, rabbits, laboratory rodents) lack the extensive pre-gastric microbial fermentation chamber of ruminants. Ingested feeds pass directly into an acidic enzymatic stomach (or proventriculus and gizzard in birds) followed by enzymatic hydrolysis and absorption in the small intestine.<br><br>"
      "<b>Consequences of Monogastric Digestion:</b><br>"
      "<ul>"
      "<li><b>No Ruminal Synthesis of Amino Acids:</b> Unlike cattle (which can thrive on urea), monogastrics have an absolute, non-negotiable dietary requirement for preformed **Essential Amino Acids (EAAs)**.</li>"
      "<li><b>Limited Fiber Digestion:</b> Soluble starches and fats are digested with high efficiency (>85–90%), but structural fiber (cellulose, hemicellulose, lignin) passes largely unhydrolyzed, unless fermented in the lower tract (caecum and colon in horses, rabbits, and pigs).</li>"
      "<li><b>Energy Expression Systems:</b><br>"
      "   - <b>Swine & Equines:</b> Energy is commonly expressed as **Digestible Energy (DE)** or **Metabolizable Energy (ME)**.<br>"
      "   - <b>Poultry:</b> Energy is universally expressed as **Metabolizable Energy (ME)** (in kcal/kg or MJ/kg) because avian urinary excretion (uric acid) and faeces void together through the common cloaca, making the separate measurement of faecal Digestible Energy (DE) biologically impossible.</li>"
      "</ul>"
      "<b>II. THE IDEAL PROTEIN CONCEPT AND LIMITING AMINO ACIDS</b><br>"
      "In non-ruminant nutrition, formulating rations for total crude protein (% CP) is obsolete. Birds and pigs do not require protein per se; they require exact quantities and proportions of **essential amino acids**.<br><br>"
      "<b>The Ideal Protein Concept:</b><br>"
      "An 'ideal protein' is an exact dietary pattern of absorbable essential amino acids that precisely matches the animal's physiological requirements for maintenance and tissue accretion, without any deficiency or excess. In the ideal protein model, **Lysine is set as the reference standard at 100%**, and all other essential amino acids are expressed as exact percentage ratios relative to Lysine.<br><br>"
      "<b>Law of the Minimum (First Limiting Amino Acid):</b><br>"
      "If a single essential amino acid is deficient in the diet relative to requirement, protein synthesis for growth or egg production is arrested at the level dictated by that limiting amino acid, and all surplus amino acids are deaminated and excreted as urinary urea or uric acid.<br>"
      "<ul>"
      "<li><b>In Swine:</b> <b>Lysine</b> is almost universally the first limiting amino acid in cereal-grain (maize/wheat) based diets, followed by Threonine, Tryptophan, and Methionine.</li>"
      "<li><b>In Poultry:</b> <b>Methionine (Sulfur amino acids)</b> is the first limiting amino acid in maize-soybean meal diets (due to high feathers cystine demand), followed closely by Lysine and Threonine.</li>"
      "</ul>"
    ),
    "eliteDesc": (
      "<b>Thermodynamic Efficiency of Metabolizable Energy (ME) in Monogastrics:</b><br>"
      "Non-ruminants convert Metabolizable Energy (ME) to Net Energy ($NE$) with markedly higher efficiency than ruminants because they do not lose energy through ruminal methane emissions ($CH_4$, which wastes 6–10% of gross energy in cattle) and have a much lower Heat Increment (HI) of fermentation. The efficiency of ME utilization for fat deposition ($k_f$) is approximately **70% to 75% in pigs and poultry**, compared to only 45% to 55% in ruminants. Net Energy systems ($NE = ME - \\text{Heat Increment}$) are now standard in modern precision swine nutrition."
    ),
    "keyPoints": [
      "Non-ruminants cannot synthesize microbial amino acids in the stomach; require dietary essential amino acids.",
      "Poultry energy is universally expressed as Metabolizable Energy (ME) due to unified cloacal voiding.",
      "Swine and equine energy is expressed as Digestible Energy (DE) or Metabolizable Energy (ME).",
      "Monogastrics utilize starch and fats with high efficiency (>90%) but have limited fiber digestion.",
      "The Ideal Protein Concept expresses all essential amino acids as an exact percentage relative to Lysine (100%).",
      "First limiting amino acid in swine diets is almost universally Lysine.",
      "First limiting amino acid in poultry maize-soybean diets is Methionine (total sulfur amino acids).",
      "Surplus unbalanced amino acids cannot be stored; they are deaminated and excreted as urea (pigs) or uric acid (birds).",
      "Monogastrics convert ME to Net Energy with higher efficiency (70-75%) than ruminants due to zero ruminal methane.",
      "Heat Increment is lowest for fats, intermediate for carbohydrates, and highest for proteins."
    ],
    "clinical": (
      "<b>Field Impact of Synthetic Amino Acid Supplementation in Indian Feeds:</b><br>"
      "In commercial Indian poultry and swine feed formulation, balancing rations solely with whole protein ingredients (maize and soybean meal) requires elevating crude protein to 23–24% just to meet the minimum lysine and methionine requirements. This creates massive dietary nitrogen excess, increasing bird water consumption, wet litter, pododermatitis (foot-pad burns), ammonia blindness in sheds, and high feed cost. Formulating on the **Ideal Protein basis** and supplementing crystalline **L-Lysine HCl and DL-Methionine** allows dietary crude protein to be safely reduced by 2 to 3 percentage units without dropping broiler growth or feed conversion ratio, saving 15–20% on feed costs and reducing manure nitrogen pollution."
    ),
    "tables": [
      {
        "title": "Ideal Amino Acid Ratio for Swine and Broiler Poultry (Relative to Lysine = 100)",
        "headers": ["Essential Amino Acid", "Growing Pig (20–50 kg BW)", "Broiler Chick Starter (0–21 Days)", "Primary Metabolic Function"],
        "rows": [
          ["Lysine (Reference Base)", "100 %", "100 %", "Directly drives lean skeletal muscle accretion; no deamination"],
          ["Methionine + Cystine (TSAA)", "60 %", "75 %", "Feather protein synthesis, methylation, glutathione antioxidant"],
          ["Threonine", "65 %", "67 %", "Intestinal mucin synthesis, gut mucosal barrier, immunoglobulins"],
          ["Tryptophan", "18 %", "17 %", "Serotonin neurotransmission, feed intake regulation, niacin precursor"],
          ["Isoleucine", "60 %", "67 %", "Branched-chain amino acid; skeletal muscle protein synthesis"],
          ["Valine", "68 %", "77 %", "Muscle tissue repair, energy during strenuous exercise"],
          ["Arginine", "N/A (Non-essential in pigs)", "105 % (Strictly essential)", "Urea cycle absent in birds; mandatory for creatine and growth"]
        ]
      },
      {
        "title": "Energy Partitioning and Measurement Schemes Across Non-Ruminant Species",
        "headers": ["Species Group", "Primary Energy System", "Fecal / Urinary Separation", "Primary Fermentation Site"],
        "rows": [
          ["Poultry (Broilers/Layers)", "Apparent ME ($AME_n$ / $TME$)", "None (Combined cloacal excreta)", "Minimal (Paired ceca; low fiber digestion)"],
          ["Swine (Pigs)", "Digestible Energy (DE) & Net Energy (NE)", "Complete separation possible", "Caecum & Colon (10–15% energy from VFAs)"],
          ["Equines (Horses)", "Digestible Energy (DE)", "Complete separation possible", "Extensive hindgut caecum-colon (60–70% energy from VFAs)"],
          ["Canines & Felines", "Metabolizable Energy (ME)", "Complete separation possible", "Minimal caecal fermentation; short simple colon"]
        ]
      }
    ],
    "img": "",
    "tags": ["non-ruminant nutrition", "ideal protein concept", "limiting amino acids", "lysine", "methionine", "metabolizable energy", "swine", "poultry"]
  },

  "u4-t02": {
    "summary": "Nutrient requirements in monogastrics are experimentally determined via dose-response broken-line models, factorial accumulation, comparative slaughter, and standardized ileal digestibility (SID).",
    "desc": (
      "<b>I. DOSE-RESPONSE EXPERIMENTS AND BROKEN-LINE REGRESSION</b><br>"
      "The empirical dose-response trial is the definitive experimental method for establishing the requirement for a specific nutrient (e.g. Lysine, Methionine, Calcium, Vitamin A):<br>"
      "<ul>"
      "<li><b>Design:</b> A basal diet deficient in the test nutrient is formulated. Graded, incremental doses of the pure nutrient (e.g. 0.70%, 0.80%, 0.90%, 1.00%, 1.10%, 1.20% Lysine) are added across matched animal cohorts.</li>"
      "<li><b>Measurement:</b> Growth response (Average Daily Gain), feed conversion ratio (FCR), or product output (egg mass, nitrogen retention) is plotted against nutrient intake.</li>"
      "<li><b>Statistical Modeling:</b> A <b>broken-line regression model</b> (or non-linear asymptotic curve) is fitted. The breakpoint (inflection point where performance plateaus and additional nutrient yields zero marginal response) represents the biological minimum requirement.</li>"
      "</ul>"
      "<b>II. THE FACTORIAL METHOD</b><br>"
      "The factorial approach calculates total requirement by mathematically summing independent biological components:<br>"
      "$$\\text{Total Requirement} = \\frac{\\text{Maintenance Obligatory Losses} + \\text{Tissue Accretion} + \\text{Product Deposition (Egg / Milk)}}{\\text{True Bioavailability / Efficiency Coefficient}}$$<br>"
      "For example, the daily calcium requirement of a laying hen factorially combines: (1) Endogenous urinary and faecal calcium loss (~150 mg); (2) Net calcium deposited in the eggshell (~2000–2200 mg); divided by the intestinal calcium absorption efficiency (~50%), dictating a daily requirement of 4.0 to 4.5 g Calcium.<br><br>"
      "<b>III. COMPARATIVE SLAUGHTER AND CARCASS BALANCE TECHNIQUE</b><br>"
      "Widely employed in pigs and broiler chickens. An initial cohort is slaughtered at Day 0, and experimental groups are slaughtered at trial termination. Entire carcasses (including feathers, blood, viscera) are ground and analyzed to measure exact retention of protein, lipid, and gross energy over time.<br><br>"
      "<b>IV. STANDARDIZED ILEAL DIGESTIBILITY (SID) OF AMINO ACIDS</b><br>"
      "In swine and poultry, measuring protein digestibility across total faeces is inaccurate because extensive bacterial microflora in the caecum and colon metabolize, deaminate, and synthesize amino acids, distorting faecal amino acid profiles.<br>"
      "<b>The SID Technique:</b><br>"
      "Digesta is sampled directly at the <b>terminal ileum</b> (using a post-valve T-cannula in pigs or surgically cecectomized birds), before digesta enters the microbial hindgut. Correcting apparent ileal digestibility for **basal endogenous gut amino acid losses** yields **Standardized Ileal Digestibility (SID)**, which is additively predictable in mixed diets."
    ),
    "eliteDesc": (
      "<b>Mathematical Modeling of Dose-Response Curves:</b><br>"
      "Nutritional requirements derived from dose-response data depend heavily on the mathematical model applied. The **linear broken-line model** ($Y = L + U \\times (R - X)$ for $X < R$, and $Y = L$ for $X \\ge R$) identifies the strict physiological minimum ($R$), but underestimates requirements for 95% of a heterogeneous commercial population. Modern poultry nutritionists apply the **Quadratic Polynomial** or **Exponential Asymptotic Model** ($Y = a - b \\times e^{-cX}$), defining requirement at 95% of the asymptote to capture genetic variance across commercial flocks."
    ),
    "keyPoints": [
      "Dose-response trials feed graded nutrient levels to locate the performance inflection point.",
      "Broken-line regression identifies the minimum requirement where response reaches a plateau.",
      "The factorial method sums maintenance endogenous losses, tissue growth, and product deposition.",
      "Factorial eggshell calcium: 2.2 g in shell + 150 mg loss $\\div 50\\%$ absorption = 4.0-4.5 g/day.",
      "Comparative slaughter accurately measures exact grams of carcass protein and lipid accreted.",
      "Faecal protein digestibility in monogastrics is distorted by hindgut bacterial fermentation.",
      "Digesta is sampled at the terminal ileum to measure true amino acid absorption before hindgut fermentation.",
      "Apparent Ileal Digestibility (AID) corrected for basal endogenous gut losses gives Standardized Ileal Digestibility (SID).",
      "SID amino acid values are truly additive when combining ingredients in least-cost ration software.",
      "Nonlinear asymptotic models account for flock genetic variability in commercial operations."
    ],
    "clinical": (
      "<b>Application of SID Formulation in Indian Broiler Integrations:</b><br>"
      "In commercial Indian poultry operations (e.g. Venky's, Suguna), formulating broiler diets on total amino acid values results in severe performance drops whenever alternative ingredients (e.g. mustard cake, sunflower meal, de-oiled rice bran) replace soybean meal. While chemical analysis shows high total amino acids, their digestibility is poor due to fiber and processing heat. Formulating diets strictly on **Standardized Ileal Digestible (SID) Lysine and Methionine** maintains target broiler growth rates and prevents subclinical necrotic enteritis by minimizing unabsorbed protein entering the caeca."
    ),
    "tables": [
      {
        "title": "Comparison: Methodologies for Determining Nutrient Requirements in Monogastrics",
        "headers": ["Methodology", "Experimental Procedure", "Primary Output", "Key Strength", "Practical Limitation"],
        "rows": [
          ["Dose-Response (Broken-Line)", "Feed 5–6 graded levels of single nutrient", "Plateau breakpoint value", "Direct live-animal performance response", "Evaluates only one nutrient at a time"],
          ["Factorial Approach", "Sum maintenance loss + tissue/egg gain", "Theoretical daily requirement", "Can be mathematically adjusted for any yield", "Relies on accurate bioavailability coefficients"],
          ["Comparative Slaughter", "Slaughter baseline group vs final groups", "Exact tissue protein/fat retained", "Gold standard for net energy/protein retention", "Destructive; high labor and sacrifice cost"],
          ["Standardized Ileal Digestibility", "Sample digesta at terminal ileum; correct endogenous N", "SID amino acid coefficients", "Eliminates hindgut microbial distortion", "Requires surgically cannulated or cecectomized animals"]
        ]
      },
      {
        "title": "Evolution of Amino Acid Systems in Monogastric Feed Formulation",
        "headers": ["System Level", "Measurement Basis", "Hindgut Error Deducted?", "Endogenous N Deducted?", "Additivity in Mixed Rations"],
        "rows": [
          ["Total Amino Acid (TAA)", "Chemical HPLC analysis of raw feed", "No", "No", "Poor; overvalues low-quality fibrous by-products"],
          ["Apparent Faecal (AFD)", "Nutrient consumed minus total faecal void", "No (Heavy microbial distortion)", "No", "Misleading; hindgut bacteria deaminate unabsorbed protein"],
          ["Apparent Ileal (AID)", "Digesta collected at terminal ileum", "Yes (Sampled before caecum/colon)", "No", "Moderate; non-additive at low dietary protein levels"],
          ["Standardized Ileal (SID)", "Terminal ileum digesta minus basal endogenous loss", "Yes", "Yes (Basal endogenous N corrected)", "Excellent; strictly additive across all feedstuffs"]
        ]
      }
    ],
    "img": "",
    "tags": ["dose response", "broken line model", "factorial method", "comparative slaughter", "SID", "ileal digestibility", "poultry nutrition", "swine nutrition"]
  },

  "u4-t03": {
    "summary": "Bureau of Indian Standards (BIS) and ICAR standards establish statutory, scientifically calibrated nutritional baselines for commercial broiler, layer, and swine feeds under tropical Indian conditions.",
    "desc": (
      "<b>I. STATUTORY ROLE OF FEEDING STANDARDS IN INDIA</b><br>"
      "In India, commercial livestock and poultry feed formulations are regulated and guided by two premier scientific authorities:<br>"
      "<ul>"
      "<li><b>1. Bureau of Indian Standards (BIS):</b> Formulates statutory specifications (IS:1374 for poultry feeds, IS:2152 for pig feeds) governing commercial feed manufacturing, quality control, toxicological tolerances, and minimum nutrient densities.</li>"
      "<li><b>2. Indian Council of Agricultural Research (ICAR):</b> Publishes research-calibrated nutritional requirement tables for poultry and livestock, adapted specifically to tropical climatic conditions and locally available agro-industrial ingredients.</li>"
      "</ul>"
      "<b>II. BIS SPECIFICATIONS FOR POULTRY FEEDS (IS:1374-2007)</b><br>"
      "The BIS divides poultry feeding into specialized physiological tiers:<br><br>"
      "<b>1. Broiler Feeds (Meat Production):</b><br>"
      "<ul>"
      "<li><b>Broiler Pre-Starter (0 to 7 Days):</b> Formulated for rapid neonatal organogenesis and yolk sac resorption. Minimum <b>23.0% Crude Protein (CP)</b>, <b>3000 kcal ME/kg</b>, 1.20% Lysine, and 0.50% Methionine.</li>"
      "<li><b>Broiler Starter (8 to 21 Days):</b> Formulated for skeletal frame and muscular development. Minimum <b>22.0% CP</b>, <b>3100 kcal ME/kg</b>, 1.10% Lysine, and 0.45% Methionine.</li>"
      "<li><b>Broiler Finisher (22 to 35/42 Days):</b> Maximizes lean breast meat deposition and finishing energy. Minimum <b>20.0% CP</b>, <b>3200 kcal ME/kg</b>, 1.00% Lysine, and 0.40% Methionine.</li>"
      "</ul>"
      "<b>2. Layer Feeds (Egg Production):</b><br>"
      "<ul>"
      "<li><b>Chick Mash (0 to 8 Weeks):</b> 20.0% CP, 2800 kcal ME/kg, 1.0% Calcium, 0.45% Available Phosphorus.</li>"
      "<li><b>Grower Mash (9 to 18 Weeks / Point of Lay):</b> Moderate energy and restricted protein to prevent early sexual maturity and abdominal adiposity: <b>16.0% CP, 2500 kcal ME/kg</b>, 1.0% Calcium.</li>"
      "<li><b>Layer Mash (Phase I: 19 to 45 Weeks - Peak Production):</b> Minimum <b>18.0% CP, 2750 kcal ME/kg</b>, and crucially, <b>3.5% to 3.8% Calcium</b> for eggshell synthesis.</li>"
      "<li><b>Layer Mash (Phase II: >45 Weeks to Culling):</b> 16.0% CP, 2700 kcal ME/kg, and <b>4.0% to 4.25% Calcium</b> (calcium requirement rises as egg size increases and intestinal absorption efficiency wanes).</li>"
      "</ul>"
      "<b>III. BIS SPECIFICATIONS FOR SWINE FEEDS (IS:2152)</b><br>"
      "<ul>"
      "<li><b>Pig Starter (Creep & Weaner, up to 20 kg BW):</b> Minimum 20.0% CP, 3300 kcal DE/kg, 1.0% Lysine, 0.80% Calcium, 0.60% Phosphorus.</li>"
      "<li><b>Pig Grower (20 to 50 kg BW):</b> Minimum 16.0% CP, 3200 kcal DE/kg, 0.75% Lysine.</li>"
      "<li><b>Pig Finisher (50 to 90 kg Market Weight):</b> Minimum 14.0% CP, 3100 kcal DE/kg, 0.60% Lysine.</li>"
      "<li><b>Pregnant Sow:</b> 14.0% CP, 3100 kcal DE/kg (controlled intake of 2 kg/day).</li>"
      "<li><b>Lactating Sow:</b> 16.0% CP, 3300 kcal DE/kg (ad libitum intake).</li>"
      "</ul>"
    ),
    "eliteDesc": (
      "<b>Calorie-to-Protein (C:P) Ratio in Poultry Standards:</b><br>"
      "Birds consume feed primarily to satisfy their energy requirement. If a diet is high in energy but deficient in protein, the bird reaches its caloric satiety point and ceases feeding before consuming adequate amino acids, resulting in stunted growth and excessive carcass fat. Conversely, if energy is too low, the bird over-consumes feed, wasting expensive protein as energy. The **Calorie-to-Protein (C:P) Ratio** (kcal ME per kg divided by % CP) must be strictly controlled:<br>"
      "$$\\text{C:P Ratio} = \\frac{\\text{ME (kcal/kg)}}{\\text{Crude Protein (\\%)}}$$<br>"
      "Optimal C:P ratios: Broiler Pre-starter = <b>130:1</b>; Starter = <b>140:1</b>; Finisher = <b>160:1</b>. Layer Phase I = <b>152:1</b>."
    ),
    "keyPoints": [
      "BIS (IS:1374 for poultry, IS:2152 for swine) sets statutory nutritional and quality standards in India.",
      "Broiler Pre-starter (0-7 days): 23% CP, 3000 kcal ME/kg, 1.20% Lysine.",
      "Broiler Starter (8-21 days): 22% CP, 3100 kcal ME/kg, 1.10% Lysine.",
      "Broiler Finisher (22-42 days): 20% CP, 3200 kcal ME/kg, 1.00% Lysine.",
      "Layer Chick Mash (0-8 weeks): 20% CP, 2800 kcal ME/kg; Grower Mash (9-18 weeks): 16% CP, 2500 kcal ME/kg.",
      "Layer Phase I requires 18% CP and 3.5-3.8% Calcium; Phase II requires 16% CP and 4.0-4.25% Calcium.",
      "Swine standards: Starter (20% CP), Grower (16% CP), Finisher (14% CP).",
      "Calorie:Protein (C:P) ratio governs voluntary feed intake in poultry; must increase with age.",
      "Aflatoxin B1 limits in BIS standards: strictly <20 ppb for commercial poultry feeds.",
      "Moisture must not exceed 11-12% to prevent fungal proliferation during tropical storage."
    ],
    "clinical": (
      "<b>Regulatory Quality Control & Aflatoxin B1 Surveillance:</b><br>"
      "Under BIS standards (IS:1374), commercial poultry feeds must not exceed **20 parts per billion (ppb) of Aflatoxin B1**. In hot, humid monsoon months across coastal India, maize and groundnut cake frequently harbor *Aspergillus flavus* mold. Ingesting feeds containing >50-100 ppb aflatoxin induces acute hepatotoxicity, bile duct hyperplasia, lymphoid depletion in the bursa of Fabricius, severe immunosuppression (failure of Newcastle and IBD vaccines), and high mortality. Routine laboratory fluorometric or ELISA testing of feed shipments against BIS thresholds is mandatory for commercial feed mills."
    ),
    "tables": [
      {
        "title": "Bureau of Indian Standards (BIS 2007) Specifications for Broiler Poultry Feeds",
        "headers": ["Nutrient Parameter", "Broiler Pre-Starter (0–7 Days)", "Broiler Starter (8–21 Days)", "Broiler Finisher (22–42 Days)"],
        "rows": [
          ["Metabolizable Energy (ME, min)", "3000 kcal / kg", "3100 kcal / kg", "3200 kcal / kg"],
          ["Crude Protein (CP, min)", "23.0 %", "22.0 %", "20.0 %"],
          ["Crude Fibre (CF, max)", "5.0 %", "5.0 %", "5.0 %"],
          ["Lysine (min)", "1.20 %", "1.10 %", "1.00 %"],
          ["Methionine (min)", "0.50 %", "0.45 %", "0.40 %"],
          ["Methionine + Cystine (min)", "0.90 %", "0.83 %", "0.76 %"],
          ["Calcium (Ca, min–max)", "1.0 – 1.2 %", "1.0 – 1.2 %", "0.9 – 1.1 %"],
          ["Available Phosphorus (min)", "0.45 %", "0.45 %", "0.40 %"],
          ["Salt (NaCl, max)", "0.50 %", "0.50 %", "0.50 %"],
          ["Aflatoxin B1 (max limit)", "20 ppb (0.02 ppm)", "20 ppb (0.02 ppm)", "20 ppb (0.02 ppm)"]
        ]
      },
      {
        "title": "Bureau of Indian Standards (BIS 2007) Specifications for Layer Poultry Feeds",
        "headers": ["Nutrient Parameter", "Layer Chick (0–8 Weeks)", "Layer Grower (9–18 Weeks)", "Layer Phase I (19–45 Weeks)", "Layer Phase II (>45 Weeks)"],
        "rows": [
          ["Metabolizable Energy (ME, min)", "2800 kcal / kg", "2500 kcal / kg", "2750 kcal / kg", "2700 kcal / kg"],
          ["Crude Protein (CP, min)", "20.0 %", "16.0 %", "18.0 %", "16.0 %"],
          ["Crude Fibre (CF, max)", "7.0 %", "9.0 %", "8.0 %", "8.0 %"],
          ["Calcium (Ca, min–max)", "1.0 %", "1.0 %", "3.5 – 3.8 %", "4.0 – 4.25 %"],
          ["Available Phosphorus (min)", "0.45 %", "0.40 %", "0.40 %", "0.35 %"],
          ["Lysine (min)", "0.95 %", "0.70 %", "0.75 %", "0.65 %"],
          ["Methionine (min)", "0.40 %", "0.30 %", "0.35 %", "0.30 %"]
        ]
      }
    ],
    "img": "",
    "tags": ["feeding standards", "BIS standards", "IS:1374", "IS:2152", "broiler specifications", "layer specifications", "swine standards", "C:P ratio"]
  },

  "u4-t04": {
    "summary": "Piglets are functional non-ruminants requiring early injectable iron at day 3 to prevent fatal anemia, highly digestible milk-based creep feeds, and phase-fed grower diets formulated on standardized ileal digestible lysine.",
    "desc": (
      "<b>I. THE DIGESTIVE ENZYME ONTOGENY OF THE PIGLET</b><br>"
      "At birth, the neonatal piglet's digestive system is biochemically adapted exclusively for the digestion of sow colostrum and milk:<br>"
      "<ul>"
      "<li><b>Neonatal Enzyme Profile (0 to 3 Weeks):</b> High concentrations of <b>Lactase</b> to hydrolyze milk lactose, and <b>Gastric Lipase</b> to digest milk fat. In contrast, pancreatic <b>Amylase, Maltase, Pepsin, and Trypsin</b> are virtually absent or sub-functional.</li>"
      "<li><b>Enzymatic Maturation (3 to 6 Weeks):</b> Lactase activity rapidly declines, while pancreatic amylase and proteases surge in response to the introduction of solid cereal starches and plant proteins.</li>"
      "</ul>"
      "<b>II. PIGLET NUTRITIONAL ANEMIA ('THUMPS'): PATHOGENESIS & PREVENTION</b><br>"
      "Piglets are born uniquely vulnerable to iron deficiency anemia:<br>"
      "1. Born with extremely low hepatic iron reserves (~50 mg).<br>"
      "2. Grow at a ferocious pace, doubling birth weight in 7 days (requiring 7 to 10 mg of iron daily for hemoglobin synthesis and rapid blood volume expansion).<br>"
      "3. Sow's milk is notoriously deficient in iron, supplying barely 1 mg of iron per day.<br>"
      "4. In modern concrete farrowing pens, piglets have zero access to iron-rich soil.<br><br>"
      "<b>Clinical Signs:</b> Develops at 10 to 21 days of age: extreme pallor of mucous membranes, unthriftiness, rough hair coat, edema around the neck, and labored, spasmodic, jerking diaphragmatic breathing known clinically as **'thumps'**.<br><br>"
      "<b>Mandatory Prevention:</b><br>"
      "Administer a single intramuscular injection of **150 to 200 mg of Iron Dextran (or Iron Gleptoferron)** into the neck or ham muscle at **Day 3 to 4 of life**. This single injection completely prevents piglet anemia and guarantees normal erythropoiesis until weaning.<br><br>"
      "<b>III. CREEP AND WEANER NUTRITION</b><br>"
      "<ul>"
      "<li><b>Creep Feeding:</b> Highly palatable, nutrient-dense solid feed offered in an exclusive creep area from **7 to 10 days of age**.<br>"
      "Specifications: <b>20–22% CP, 3300–3400 kcal DE/kg, 1.25% SID Lysine</b>. Formulated with easily digestible ingredients: dried whey powder (10–15%), skim milk powder, extruded maize, plasma protein, fish meal, and soybean meal.</li>"
      "<li><b>Weaning Transition (3 to 4 Weeks):</b> Abrupt weaning causes gut mucosal atrophy. Diets must incorporate organic acids (citric, fumaric acid at 1–2%) to lower stomach pH, compensating for low gastric HCl secretion.</li>"
      "<li><b>Grower Phase (20 to 50 kg BW):</b> Fast skeletal and muscular growth. Formulate on **16–18% CP, 3200 kcal DE/kg, 0.85–0.95% SID Lysine**. Target FCR is 2.4 to 2.8:1 with an ADG of 600–750 g/day.</li>"
      "</ul>"
    ),
    "eliteDesc": (
      "<b>Gastric Barrier and Acidification in Weaned Pigs:</b><br>"
      "The newly weaned piglet produces insufficient gastric hydrochloric acid ($HCl$) due to immature parietal cells, maintaining a stomach pH >4.5. Ingested sow milk provided lactic acid via lactose fermentation, which suppressed pathogens. Post-weaning, the high pH allows pathogenic enterotoxigenic *Escherichia coli* (ETEC F4/K88) to survive gastric transit and colonize the ileal brush border. Incorporating **Acidifiers (formic, benzoic, or citric acid)** lowers stomach pH to <3.5, activating pepsinogen into active pepsin and creating a chemical barrier against post-weaning colibacillosis scours."
    ),
    "keyPoints": [
      "Piglets are born with high lactase but negligible amylase, maltase, and pepsin.",
      "Enzyme transition occurs at 3-6 weeks: lactase declines while amylase and proteases surge.",
      "Piglet anemia ('thumps') occurs because sow milk supplies only 1 mg Fe/day against a 7-10 mg daily demand.",
      "Injectable Iron Dextran (150-200 mg IM) at Day 3 of life is mandatory to prevent fatal anemia.",
      "Creep feed is introduced at 7-10 days to stimulate digestive enzyme ontogeny and ease weaning.",
      "Creep feed requires 20-22% CP, 3300 kcal DE/kg, and highly digestible whey/milk solids.",
      "Post-weaning gut mucosal atrophy is counteracted by dietary acidifiers (citric/formic acid).",
      "Grower pigs (20-50 kg) require 16-18% CP and 0.85-0.95% SID Lysine to support rapid lean accretion.",
      "Target Feed Conversion Ratio (FCR) for grower pigs is 2.5:1 with an ADG of 650-750 g/day.",
      "Zinc oxide (2000-3000 ppm) in weaner diets stabilizes gut enterocytes and prevents post-weaning diarrhea."
    ],
    "clinical": (
      "<b>Diagnosis and Treatment of Piglet Iron Deficiency Anemia in Smallholder Units:</b><br>"
      "In peri-urban piggery units in the Northeast (Assam, Meghalaya) or Punjab, farmers frequently omit iron injections to save costs. At 3 weeks of age, litters exhibit listlessness, chalky white ears and snouts, wrinkled skin, and sudden deaths following handling stress. Necropsy reveals severe cardiac hypertrophy ('boiled-beef' pale heart), pulmonary edema, thin watery blood (PCV <15%, Hb <5 g/dL), and pale liver. Emergency treatment: immediately inject all surviving piglets with 200 mg Iron Dextran IM. Provide fresh, clean red clay/soil in a corner of the pen as an oral iron source for unweaned piglets."
    ),
    "tables": [
      {
        "title": "Ontogeny of Digestive Enzymes in the Developing Piglet",
        "headers": ["Enzyme System", "Substrate Hydrolyzed", "Activity at Birth (0–7 Days)", "Activity at Weaning (3–5 Weeks)", "Dietary Ingredient Compatibility"],
        "rows": [
          ["Lactase (Intestinal)", "Lactose (Milk Sugar)", "Extremely High (Peak)", "Rapidly Declining", "Dried whey, skim milk, lactose"],
          ["Pancreatic Amylase", "Starch (Cereal grains)", "Virtually Absent", "Surging rapidly", "Cooked / extruded maize, broken rice"],
          ["Gastric Pepsin", "Proteins (Peptide bonds)", "Very Low (Zymogen form)", "Moderate (Requires acidifiers)", "Milk proteins, plasma protein, fish meal"],
          ["Pancreatic Lipase", "Fats (Triglycerides)", "High (For milk fat)", "High", "Soybean oil, coconut oil, lard"]
        ]
      },
      {
        "title": "Nutrient Specifications and Feeding Program for Piglets and Growing Pigs",
        "headers": ["Growth Phase", "Body Weight Range", "Crude Protein (CP %)", "DE (kcal/kg)", "SID Lysine (%)", "Target Daily Gain (ADG)"],
        "rows": [
          ["Creep Feeding", "Birth to 7 kg (3–4 Weeks)", "20.0 – 22.0 %", "3400 kcal", "1.30 %", "200 – 250 g / day"],
          ["Weaner Phase", "7 kg to 20 kg (4–8 Weeks)", "19.0 – 20.0 %", "3300 kcal", "1.15 %", "400 – 500 g / day"],
          ["Grower Phase I", "20 kg to 35 kg", "17.0 – 18.0 %", "3250 kcal", "0.95 %", "600 – 700 g / day"],
          ["Grower Phase II", "35 kg to 50 kg", "16.0 – 16.5 %", "3200 kcal", "0.85 %", "700 – 800 g / day"]
        ]
      }
    ],
    "img": "",
    "tags": ["swine nutrition", "piglet nutrition", "iron dextran", "piglet anemia", "thumps", "creep feed", "grower pigs", "SID lysine"]
  },

  "u4-t05": {
    "summary": "Swine breeding herd management demands restrictive feeding during gestation to avoid obesity, ad libitum high-energy feeding during lactation to prevent thin sow syndrome, and lysine precision for finishers.",
    "desc": (
      "<b>I. NUTRITIONAL MANAGEMENT OF GESTATING SOWS</b><br>"
      "The cardinal rule of pregnant sow nutrition is **RESTRICTED FEEDING**:<br>"
      "<ul>"
      "<li><b>The Danger of Overfeeding:</b> If pregnant sows are fed ad libitum, they consume 4 to 6 kg of feed daily and become obese (BCS >4.0). Obese sows suffer from: (a) High embryonic mortality in early pregnancy; (b) Small litter size; (c) Farrowing difficulties (uterine inertia, dystocia, prolonged farrowing, high stillbirth rates); (d) Acute depression of voluntary feed intake during subsequent lactation; and (e) High piglet crushing mortality due to sow clumsiness.</li>"
      "<li><b>Feeding Regimen:</b> Limit feed allowance to strictly <b>2.0 to 2.2 kg/day of a moderate gestation ration (13–14% CP, 3100 kcal DE/kg, 0.60% Lysine)</b> from Day 0 to Day 85 of gestation.</li>"
      "<li><b>Late Gestation 'Bump Feeding':</b> During the final 3 weeks of pregnancy (Day 85 to 114), increase daily feed to <b>2.8 to 3.2 kg/day</b> to support rapid fetal weight gain (60% of fetal weight is deposited in the final 30 days) and build maternal mammary tissue.</li>"
      "<li><b>Nutritional Flushing in Gilts:</b> Increasing feed intake by 50% (to 3.0–3.5 kg/day) for 10 to 14 days prior to breeding stimulates an LH surge, increasing ovulation rate by 1 to 2 ova per cycle.</li>"
      "</ul>"
      "<b>II. LACTATING SOW NUTRITION (PREVENTING 'THIN SOW SYNDROME')</b><br>"
      "During lactation (typically 21 to 28 days), the sow secretes 8 to 12 kg of highly concentrated milk daily to nurse a litter of 10–12 piglets.<br><br>"
      "<b>Feeding Strategy:</b><br>"
      "Shift instantly to **AD LIBITUM FEEDING**.<br>"
      "Feed Allowance Rule: <b>2.0 kg base for sow maintenance + 0.5 kg extra for every piglet suckling</b> (e.g. a sow nursing 10 piglets requires $2.0 + 5.0 = 7.0$ kg feed daily).<br>"
      "Lactation Diet: <b>17–18% CP, 3350 kcal DE/kg, 0.95% SID Lysine, 0.85% Calcium</b>.<br>"
      "If lactation energy intake is insufficient, the sow enters catastrophic catabolic mobilization of body fat and muscle protein, losing $>25$ kg body weight. This precipitates **'Thin Sow Syndrome'**: failure to return to estrus post-weaning, prolonged weaning-to-estrus intervals (>15 days), and reduced subsequent litter size.<br><br>"
      "<b>III. FATTENING / FINISHING PIGS (50 TO 90 KG MARKET WEIGHT)</b><br>"
      "The objective in the finishing phase is to maximize Average Daily Gain (750–900 g/day) while preventing excessive backfat thickness.<br>"
      "Ration: <b>13–14% CP, 3150 kcal DE/kg, 0.70% SID Lysine</b>. As pigs approach 90–100 kg slaughter weight, feed conversion ratio deteriorates from 2.8:1 to 3.5:1 due to heavy adipose deposition."
    ),
    "eliteDesc": (
      "<b>The Metabolic Relationship Between Lactation Intake and Post-Weaning LH Pulsatility:</b><br>"
      "In lactating sows, inadequate energy intake suppresses circulating insulin and IGF-1, while elevating growth hormone and NEFA. Low systemic insulin downregulates the hypothalamic GnRH pulse generator. Upon weaning, if the sow has lost >15% of her body protein mass, the pituitary fails to generate the high-frequency **Luteinizing Hormone (LH) pulses** (normally 1 pulse every 60–90 minutes) required for final ovarian follicular maturation. The sow remains in prolonged post-weaning anestrus, severely increasing non-productive sow days (NPD)."
    ),
    "keyPoints": [
      "Gestating sows must be feed-restricted to 2.0-2.2 kg/day to prevent maternal obesity and dystocia.",
      "Overfed fat sows suffer small litters, uterine inertia, high stillbirths, and crush their piglets.",
      "Late gestation 'bump feeding' (Day 85-114) increases feed to 3.0 kg/day for exponential fetal growth.",
      "Flushing gilts (increasing feed by 50% for 10-14 days pre-mating) increases ovulation rate by 1-2 ova.",
      "Lactating sows require ad libitum feeding: 2 kg base + 0.5 kg per suckling piglet (total 6-8 kg/day).",
      "Lactation diets require high energy density (3350 kcal DE/kg) and 0.95% SID Lysine.",
      "Severe weight loss in lactation triggers 'Thin Sow Syndrome' and prolonged post-weaning anestrus.",
      "Finishing pigs (50-90 kg) require 13-14% CP, balanced to minimize excessive carcass backfat thickness.",
      "Breeding boars require 2.0-2.5 kg/day of a 14% CP diet; obesity destroys mounting agility.",
      "Dietary fiber (sugar beet pulp, wheat bran) in gestation diets provides satiety and prevents stereotypic bar-biting."
    ],
    "clinical": (
      "<b>Postpartum Dysgalactia Syndrome (MMA: Mastitis-Metritis-Agalactia):</b><br>"
      "Within 12 to 48 hours of farrowing, a high-producing sow becomes recumbent, febrile (>103.5°F), refuses feed, and lies sternally, refusing to let piglets suckle. The udder is hot, swollen, congested, and firm. Piglets squeal, wander hungrily, and develop hypoglycemic coma. This is **Postpartum Dysgalactia Syndrome (MMA)**. Nutritional predisposing factors: overfeeding in late gestation and severe **constipation** at farrowing. Stool stasis allows intestinal gram-negative bacteria (*E. coli*) to proliferate, releasing massive **endotoxins (lipopolysaccharides, LPS)** into the bloodstream, which downregulate prolactin secretion. Prevention: add 10–15% wheat bran or 0.75% Epsom salts ($MgSO_4$) to the sow's feed for 5 days pre-farrowing to guarantee laxative, soft stools."
    ),
    "tables": [
      {
        "title": "Reproductive Phase-Feeding Strategy for Sows and Breeding Stock",
        "headers": ["Breeding Phase", "Daily Feed Allowance", "Crude Protein (CP %)", "Digestible Energy (DE)", "Critical Management Objective"],
        "rows": [
          ["Flushing (Gilts)", "3.0 – 3.5 kg / day (Ad lib)", "14.0 %", "3250 kcal / kg", "Stimulate multi-ovulation 14 days pre-mating"],
          ["Gestation (Day 0 to 85)", "Strictly 2.0 – 2.2 kg / day", "13.0 – 14.0 %", "3100 kcal / kg", "Prevent maternal obesity; maintain BCS 3.0"],
          ["Late Gestation (Day 85–114)", "2.8 – 3.2 kg / day", "14.0 %", "3150 kcal / kg", "Support rapid 60% fetal accretion and mammogenesis"],
          ["Farrowing Day", "0.5 – 1.0 kg (Light bran mash)", "14.0 %", "3000 kcal / kg", "Prevent gut impaction and MMA syndrome"],
          ["Full Lactation", "Ad libitum (6.0 – 8.0 kg)", "17.5 – 18.0 %", "3350 kcal / kg", "Maximize milk output; prevent Thin Sow Syndrome"],
          ["Working Breeding Boar", "2.2 – 2.6 kg / day", "14.0 – 15.0 %", "3150 kcal / kg", "Maintain athletic condition; optimize semen output"]
        ]
      },
      {
        "title": "Dietary Formulation for Finishing Pigs (50 to 90 kg Market Weight)",
        "headers": ["Ingredient Name", "Proportion in 100 kg Mix", "Nutritional Contribution", "Quality / Limit Consideration"],
        "rows": [
          ["Yellow Crushed Maize", "60.0 kg", "Primary energy (starch); 3350 kcal/kg", "Moisture <12%; aflatoxin <20 ppb"],
          ["De-Oiled Rice Bran (DORB)", "18.0 kg", "Cost reduction; provides bulk and fiber", "High fiber; do not exceed 20% in finisher"],
          ["Soybean Meal (44% CP)", "15.0 kg", "Core essential amino acids (Lysine)", "Well-cooked to inactivate trypsin inhibitors"],
          ["Wheat Bran", "4.0 kg", "Mild laxative; maintains normal transit", "Palatable source of phosphorus"],
          ["Mineral Mixture (Swine)", "2.0 kg", "Supplies Ca, P, Zn (100 ppm), Fe, Cu, Se", "Formulated to prevent parakeratosis"],
          ["Common Salt (NaCl)", "0.5 kg", "Electrolyte balance and appetite stimulation", "Excess salt is toxic if water is restricted"],
          ["Synthetic L-Lysine HCl", "0.5 kg", "Balances first limiting amino acid", "Guarantees 0.70% SID Lysine"]
        ]
      }
    ],
    "img": "",
    "tags": ["swine nutrition", "pregnant sows", "lactating sows", "bump feeding", "thin sow syndrome", "MMA", "finishing pigs", "flushing gilts"]
  },

  "u4-t06": {
    "summary": "Equines are hindgut herbivores possessing an expansive caecum and colon for microbial fiber fermentation, requiring high-quality dietary forage and tight calcium:phosphorus control in foals to prevent orthopedic disease.",
    "desc": (
      "<b>I. DIGESTIVE ANATOMY AND PHYSIOLOGY OF THE HORSE</b><br>"
      "The horse is an **herbivorous, non-ruminant, hindgut cecal-colonic fermenter** possessing a digestive tract designed for continuous consumption of high-fiber forages:<br>"
      "<ul>"
      "<li><b>1. The Equine Stomach:</b> Exceptionally small relative to body size, holding barely <b>8 to 15 liters</b> (representing only 8–10% of total tract volume). It cannot expand significantly.<br>"
      "<i>Inability to Vomit:</i> The equine gastroesophageal junction features a powerful one-way muscular cardiac sphincter that enters the stomach at an acute angle. Horses are anatomically incapable of vomiting or belching. Gastric overload from excess grain causes acute rupture of the stomach wall, resulting in fatal peritonitis. Small, frequent meals are mandatory.</li>"
      "<li><b>2. The Small Intestine:</b> Site of rapid enzymatic digestion and absorption of soluble carbohydrates, fats, and high-quality protein (amino acids).</li>"
      "<li><b>3. The Hindgut (Caecum and Large Colon):</b> An enormous anaerobic fermentation vat holding <b>100 to 130 liters</b> (representing over 60–65% of total tract capacity). A rich microflora of cellulolytic bacteria (*Ruminococcus*, *Fibrobacter*) ferments structural fiber into Volatile Fatty Acids (**Acetate, Propionate, Butyrate**), which are absorbed across the colonic wall to supply <b>60% to 70% of the horse's total maintenance energy requirement</b>.</li>"
      "</ul>"
      "<b>II. THE CRITICAL DIFFERENCE IN PROTEIN NUTRITION: HORSE VS. COW</b><br>"
      "In ruminants, microbial protein synthesized in the rumen flows forward into the abomasum and small intestine where it is digested and absorbed as amino acids. In the horse, microbial fermentation takes place in the **caecum and colon, which is anatomically AFTER the small intestine**.<br>"
      "The equine colon lacks active transport systems for amino acid absorption. Consequently, microbial protein synthesized in the horse's hindgut cannot be absorbed and is voided in the faeces. <b>Horses have an absolute dietary requirement for high-quality essential amino acids (especially Lysine and Methionine)</b> supplied in the feed and digested in the small intestine. Feeding urea to horses is useless and hazardous."
    ),
    "eliteDesc": (
      "<b>Equine Developmental Orthopedic Disease (DOD) Pathophysiology:</b><br>"
      "Developmental Orthopedic Disease (DOD) encompasses a spectrum of skeletal disorders in rapidly growing foals and yearlings: osteochondrosis dissecans (OCD), subchondral bone cysts, physitis (epiphysitis), and flexural limb deformities (contracted tendons).<br>"
      "<b>Primary Nutritional Aetiologies:</b><br>"
      "1. <b>Excessive Dietary Energy:</b> Feeding high-starch grain concentrates produces hyperinsulinemia. Insulin and IGF-1 surges disrupt chondrocyte maturation and prevent normal endochondral ossification, leaving fragile, unmineralized retained cartilage flaps in articular joints.<br>"
      "2. <b>Imbalanced Calcium:Phosphorus Ratio:</b> The dietary Ca:P ratio must be strictly maintained between <b>1.5:1 and 2.0:1</b>. If phosphorus exceeds calcium (Ca:P <1:1), calcium absorption is blocked.<br>"
      "3. <b>Copper Deficiency:</b> Copper is the prosthetic cofactor for *lysyl oxidase*, the enzyme responsible for collagen cross-linking in the organic bone and cartilage matrix. Diets containing <10 ppm copper produce severe OCD lesions."
    ),
    "keyPoints": [
      "The horse is a hindgut herbivore; the caecum and colon represent >60% of digestive tract volume.",
      "The equine stomach is small (8-15 L); horses cannot vomit due to the acute-angle cardiac sphincter.",
      "Gastric rupture is fatal; horses must be fed small, frequent meals.",
      "Hindgut bacterial fermentation produces VFAs (acetate, propionate) meeting 60-70% of maintenance energy.",
      "Microbial protein synthesized in the hindgut cannot be absorbed; horses require dietary essential amino acids.",
      "Feeding urea is ineffective and dangerous in horses; urea is not converted into usable host protein.",
      "Foal creep feeding starts at 4-6 weeks with high-quality protein (16% CP, 0.8% Lysine).",
      "Developmental Orthopedic Disease (DOD) in foals is triggered by excess energy and copper deficiency (<10 ppm).",
      "Dietary Calcium-to-Phosphorus ratio must be strictly 1.5:1 to 2.0:1; phosphorus must never exceed calcium.",
      "Horses must consume minimum 1.0-1.5% of body weight daily as long forage fiber to maintain gut motility."
    ],
    "clinical": (
      "<b>Equine Nutritional Secondary Hyperparathyroidism ('Big Head' / 'Bran Disease'):</b><br>"
      "In India, racehorses or tonga/riding horses fed rations heavily based on wheat bran ('choker') and cereal grains with poor-quality dry grass hay develop **Nutritional Secondary Hyperparathyroidism**. Wheat bran contains an inverted, disastrous Ca:P ratio (1:4 or 1:5; extremely high phosphorus, low calcium). Excess circulating phosphorus depresses ionized calcium, triggering continuous, excessive secretion of Parathyroid Hormone (PTH). PTH activates massive osteoclastic bone resorption. Bone calcium is resorbed from the skeleton and replaced by fibrous connective tissue, most dramatically in the facial and mandibular bones. The horse presents with **bilateral swelling of the maxilla and mandible ('Big Head'), loosening of teeth, shifting lameness, and fragile bone fractures**. Prevention: strictly limit wheat bran, feed lucerne/clover hay, and supplement limestone/dicalcium phosphate to maintain Ca:P at 1.8:1."
    ),
    "tables": [
      {
        "title": "Fundamental Digestive Differences: Ruminant (Cow) vs Hindgut Fermenter (Horse)",
        "headers": ["Anatomical / Nutritional Feature", "Ruminant (Cow / Buffalo)", "Hindgut Fermenter (Horse / Equine)"],
        "rows": [
          ["Primary Fermentation Site", "Foregut (Reticulo-rumen; before stomach)", "Hindgut (Caecum & Large Colon; after stomach)"],
          ["Eructation / Vomiting Reflex", "Eructates continuously; cannot vomit", "Cannot eructate or vomit (cardiac sphincter lock)"],
          ["Utilization of NPN (Urea)", "Highly efficient; converted to microbial protein", "Inefficient and hazardous; absorbed as $NH_3$"],
          ["Microbial Protein Absorption", "Directly absorbed as amino acids in small intestine", "Lost in faeces; cannot be absorbed from colon"],
          ["Dietary Protein Quality Demand", "Low; microbes synthesize essential amino acids", "High; absolute requirement for dietary Lysine"],
          ["Vulnerability to Acidosis", "Ruminal Acidosis (Rumen pH <5.0)", "Caecal Acidosis $\\rightarrow$ Endotoxemic Laminitis"],
          ["Fiber Digestion Efficiency", "Higher (70–80% cellulose digested)", "Moderate (50–60% cellulose digested)"]
        ]
      },
      {
        "title": "Daily Nutrient Recommendations for Foals and Growing Equines (NRC Equine Standards)",
        "headers": ["Growth Phase", "Age Range", "Crude Protein (CP %)", "DE (Mcal / kg DM)", "Lysine (%)", "Calcium (%)", "Phosphorus (%)"],
        "rows": [
          ["Suckling Foal (Creep)", "1 to 3 Months", "16.0 – 18.0 %", "3.4 Mcal", "0.85 %", "0.85 %", "0.55 %"],
          ["Weanling", "6 Months", "14.5 – 15.0 %", "3.1 Mcal", "0.70 %", "0.68 %", "0.38 %"],
          ["Yearling (Moderate Growth)", "12 Months", "12.5 – 13.0 %", "2.8 Mcal", "0.55 %", "0.50 %", "0.30 %"],
          ["Two-Year-Old (In Training)", "24 Months", "11.5 – 12.0 %", "2.9 Mcal", "0.50 %", "0.45 %", "0.28 %"]
        ]
      }
    ],
    "img": "",
    "tags": ["equine nutrition", "hindgut fermentation", "caecum", "horse stomach", "DOD", "big head disease", "lysine", "foal feeding"]
  },

  "u4-t07": {
    "summary": "Working performance horses oxidize carbohydrates and fatty acids for mechanical speed, demanding high forage bases (>1% BW) to prevent fatal impaction colic and carbohydrate-induced laminitis.",
    "desc": (
      "<b>I. MUSCULAR ENERGETICS OF THE ATHLETIC HORSE</b><br>"
      "Performance equines (thoroughbred racehorses, polo ponies, endurance horses, army draft pack-mules) possess the highest aerobic metabolic capacity of any terrestrial athlete.<br><br>"
      "<b>Biphasic Fuel Utilization:</b><br>"
      "<ul>"
      "<li><b>1. Aerobic Metabolism (Endurance & Steady Trot):</b> Fueled by the slow, oxidative burning of **Free Fatty Acids (from dietary fats)** and **Acetate (from hindgut fiber fermentation)**. Supplies sustainable ATP without producing lactic acid. Supplementing performance horse diets with 5% to 8% vegetable oil (soybean or corn oil) spares muscle glycogen and enhances stamina.</li>"
      "<li><b>2. Anaerobic Metabolism (Sprint Racing, Polo Acceleration, Jumping):</b> During maximal sprint exertion (heart rate >180–200 bpm), oxygen delivery cannot match demand. Muscle Type IIB fast-twitch glycolytic fibers switch instantly to **anaerobic glycogenolysis**, consuming muscle glycogen to generate ATP, rapidly accumulating **lactic acid**. When blood lactate exceeds 4.0 mmol/L (the anaerobic threshold), muscular fatigue and soreness ensue.</li>"
      "</ul>"
      "<b>II. FEEDING BROODMARES AND STALLIONS</b><br>"
      "<ul>"
      "<li><b>Broodmares:</b> Early pregnancy demands maintenance nutrition. In late gestation (last 3 months), fetal growth demands a 30% increase in energy and a 40% increase in protein. During early lactation (Weeks 1 to 8), milk production reaches 3% of body weight daily (15 L/day in a 500 kg mare), demanding **2.5% to 3.0% BW intake (13–14% CP, 28–30 Mcal DE/day)**.</li>"
      "<li><b>Stallions:</b> During the active breeding season, stallions require a 20% increase in energy above maintenance (approx. 1.5 kg concentrate + good hay), with adequate Vitamin E and Selenium to support semen output and libido.</li>"
      "</ul>"
      "<b>III. PATHOGENESIS OF EQUINE NUTRITIONAL DISORDERS</b><br>"
      "<b>1. Feed-Related Colic (Impaction & Spasmodic Colic):</b><br>"
      "Occurs when horses are fed high-grain rations without adequate forage fiber. The golden rule: **A horse must consume a minimum of 1.0% to 1.5% of its body weight daily as dry forage/hay**. Long fiber maintains normal intestinal distension and rhythmic peristalsis. Coarse, un-chaffed poor hay with inadequate water produces fatal pelvic flexure impaction.<br><br>"
      "<b>2. Carbohydrate Overload Laminitis (Founder):</b><br>"
      "When a horse consumes excessive cereal grain (maize, barley, oats >0.5% BW in a single meal) or gorges on lush spring pasture high in **fructans**, the enzymatic capacity of the small intestine is overwhelmed. Undigested starch and fructans surge into the caecum.<br>"
      "Amylolytic caecal bacteria (*Streptococcus bovis*) ferment starch into **lactic acid**, crashing caecal pH from normal 6.8 to **<5.5**. Acid kills gram-negative cellulolytic bacteria, releasing massive amounts of **endotoxins (LPS) and exotoxins** into the bloodstream.<br>"
      "Circulating endotoxins trigger intense digital vasospasm, laminar capillary thrombosis, and activation of matrix metalloproteinases (MMP-2, MMP-9) in the hoof. The sensitive laminae disintegrate, allowing the **third phalanx (pedal / coffin bone)** to rotate downward through the sole, causing permanent crippling or necessitating euthanasia."
    ),
    "eliteDesc": (
      "<b>Exertional Rhabdomyolysis ('Tying-Up' / 'Monday Morning Disease'):</b><br>"
      "In working draft horses and thoroughbreds, maintaining full grain rations during days of stall rest causes excessive accumulation of glycogen in skeletal muscle myofibers. When the horse is suddenly worked vigorously, rapid glycogen breakdown releases massive lactate and alters intracellular calcium regulation. Sarcoplasmic reticulum pumps fail, resulting in sustained muscular contracture, cell lysis (**rhabdomyolysis**), and the release of **myoglobin** into circulation. Myoglobin filtered through the kidneys produces characteristic dark coffee-colored urine (myoglobinuria) and acute renal tubular necrosis."
    ),
    "keyPoints": [
      "Aerobic work (endurance) is fueled by fatty acids and acetate; glycogen fuels anaerobic sprint racing.",
      "Dietary vegetable oil (5-8%) provides dense energy and spares muscle glycogen during exercise.",
      "Anaerobic threshold occurs at heart rates >180-200 bpm, accumulating muscle lactic acid.",
      "Broodmares in early lactation yield 15 L milk/day, demanding 2.5-3.0% BW feed intake.",
      "Horses must consume minimum 1.0-1.5% of body weight daily as long forage fiber to prevent colic.",
      "Never feed more than 0.5 kg grain per 100 kg body weight in a single meal.",
      "Carbohydrate overload triggers caecal lactic acidosis (pH <5.5), lysing gram-negative bacteria.",
      "Caecal endotoxins enter circulation, causing digital laminar ischemia and fatal laminitis (founder).",
      "Laminitis causes detachment and downward rotation of the coffin bone (P3) through the sole.",
      "Tying-Up (Azoturia) occurs from working horses after rest on full grain; causes myoglobinuria."
    ],
    "clinical": (
      "<b>Emergency Treatment Protocol for Acute Grain Engorgement & Laminitis:</b><br>"
      "A stable hand leaves a feed room open; a thoroughbred horse gorges on 15 kg of sweet crushed oats. The veterinarian must act within the **6 to 12 hour window before laminar signs appear**:<br>"
      "1. <b>Gastric Lavage:</b> Pass a large-bore nasogastric tube; siphon out remaining stomach contents using warm water.<br>"
      "2. <b>Endotoxin Binding:</b> Administer **Activated Charcoal (1 to 2 kg)** or Di-tri-octahedral smectite (Bio-Sponge) + 2 to 4 liters of mineral oil via stomach tube to coat the gut and bind bacterial endotoxins.<br>"
      "3. <b>Cryotherapy (Ice Boots):</b> Submerge all four lower limbs from the carpus/tarsus down in ice water continuously for 48 hours. Cryotherapy induces local vasoconstriction, preventing circulating caecal endotoxins and MMP enzymes from reaching the digital laminae, reducing laminitis incidence by >80%."
    ),
    "tables": [
      {
        "title": "Dietary Forage-to-Concentrate Proportions for Equines Based on Workload",
        "headers": ["Activity / Workload Level", "Daily Forage (% of Body Weight)", "Daily Concentrate (% of Body Weight)", "Forage:Concentrate Ratio"],
        "rows": [
          ["Maintenance / Rested", "1.5 – 2.0 % BW", "0.0 – 0.5 % BW", "100:0 to 80:20"],
          ["Light Work (Pleasure riding, hacking)", "1.25 – 1.75 % BW", "0.5 – 1.0 % BW", "70:30"],
          ["Medium Work (Ranch work, school horses)", "1.25 – 1.50 % BW", "1.0 – 1.5 % BW", "60:40"],
          ["Heavy Work (Polo, eventing, race training)", "1.0 – 1.25 % BW", "1.5 – 2.0 % BW", "50:50 (Never drop forage <45%)"],
          ["Lactating Broodmare (Peak Milk)", "1.25 – 1.50 % BW", "1.5 – 2.0 % BW", "50:50"]
        ]
      },
      {
        "title": "Pathophysiological Cascade: Grain Engorgement to Equine Laminitis (Founder)",
        "headers": ["Step / Phase", "Site of Derangement", "Biochemical / Cellular Event", "Clinical Manifestation"],
        "rows": [
          ["Phase 1: Ingestion", "Stomach & Small Intestine", "Massive starch bolus (>0.5% BW); exceeds pancreatic amylase capacity", "Restlessness, mild colic signs"],
          ["Phase 2: Fermentation", "Caecum & Colon", "Starch fermented by *S. bovis*; lactic acid surges; pH crashes <5.0", "Watery diarrhea, toxic mucus membranes"],
          ["Phase 3: Endotoxemia", "Bloodstream & Circulation", "Lysis of gram-negative bacteria releases LPS endotoxins into circulation", "Tachycardia, fever, toxic ring on gums"],
          ["Phase 4: Laminar Failure", "Hoof Digital Laminae", "Endotoxins trigger digital ischemia; MMP enzymes dissolve basement membrane", "Bounding digital pulse, heat in hooves"],
          ["Phase 5: Rotation", "Distal Phalanx (Coffin Bone)", "Deep digital flexor tendon pulls unanchored P3 downwards through sole", "Severe 'rocking-back' stance; recumbency"]
        ]
      }
    ],
    "img": "",
    "tags": ["performance horses", "muscle energetics", "colic", "laminitis", "founder", "carbohydrate overload", "azoturia", "cryotherapy"]
  },

  "u4-t08": {
    "summary": "Broiler chickens require phase feeding programs with elevated crude protein (23%) and lysine in the pre-starter phase, transitioning to high-energy finisher diets (3200 kcal/kg) to maximize muscle accretion and feed conversion.",
    "desc": (
      "<b>I. BIOLOGICAL ACHIEVEMENTS OF THE MODERN COMMERCIAL BROILER</b><br>"
      "The modern commercial broiler chicken (e.g. Cobb 500, Ross 308, Hubbard) represents the pinnacle of livestock breeding and nutritional precision. A commercial broiler chick hatches at approximately **42 grams** and grows to a market slaughter weight of **2.2 to 2.5 kg within 35 days**, achieving a **Feed Conversion Ratio (FCR) of 1.45 to 1.55 kg feed per kg live weight**.<br><br>"
      "<b>II. THE THREE-PHASE BROILER FEEDING PROGRAM</b><br>"
      "Because the broiler's physiological capacity, digestive enzyme secretion, and nutrient deposition change rapidly over 5 weeks, single-diet feeding is biologically inefficient. Commercial operations utilize a **three-phase feeding program**:<br>"
      "<ul>"
      "<li><b>1. Pre-Starter Phase (0 to 7 Days):</b><br>"
      "   - <i>Nutritional Purpose:</i> Stimulate rapid yolk sac absorption, accelerate small intestinal mucosal crypt-villus elongation, and trigger muscular satellite cell division.<br>"
      "   - <i>Dietary Specifications:</i> High protein, moderate energy: <b>23.0% Crude Protein, 3000 kcal ME/kg, 1.25% SID Lysine, 0.50% Methionine</b>.<br>"
      "   - <i>Physical Form:</i> Sifted fine crumbles (1.5–2.0 mm diameter). Formulated with highly digestible ingredients: yellow maize, extruded full-fat soybean meal, and supplemental zinc/electrolytes.</li>"
      "<li><b>2. Starter Phase (8 to 21 Days):</b><br>"
      "   - <i>Nutritional Purpose:</i> Rapid skeletal bone ossification, internal organ maturation, and immune tissue development.<br>"
      "   - <i>Dietary Specifications:</i> <b>21.5% to 22.0% Crude Protein, 3100 kcal ME/kg, 1.15% SID Lysine, 0.45% Methionine</b>.<br>"
      "   - <i>Physical Form:</i> Coarse crumbles or mini-pellets (2.0–2.5 mm).</li>"
      "<li><b>3. Finisher Phase (22 to 35/42 Days):</b><br>"
      "   - <i>Nutritional Purpose:</i> Maximum pectoral (breast) muscle lean tissue deposition and rapid live-weight gain.<br>"
      "   - <i>Dietary Specifications:</i> Lower protein, high energy density: <b>19.5% to 20.0% Crude Protein, 3200 kcal ME/kg, 1.00% SID Lysine, 0.40% Methionine</b>.<br>"
      "   - <i>Physical Form:</i> Steam pelleted mash (3.0–3.5 mm). Added vegetable oil (2–3%) provides concentrated energy.</li>"
      "</ul>"
      "<b>III. ESSENTIAL FEED ADDITIVES IN COMMERCIAL BROILER RATIONS</b><br>"
      "1. <b>Exogenous Phytase Enzyme:</b> Monogastrics lack endogenous phytase to break down plant *phytic acid*. Adding bacterial/fungal phytase (500–1000 FTU/kg) releases organically bound phosphorus and calcium, cutting inorganic dicalcium phosphate supplementation by 50% and slashing fecal phosphorus pollution.<br>"
      "2. <b>Coccidiostats:</b> Ionophores (Salinomycin, Maduramicin, Lasalocid) or synthetic chemicals (Diclazuril, Nicarbazin) incorporated continuously to prevent coccidial enteritis (*Eimeria tenella, E. acervulina*). Must observe a mandatory **5-day withdrawal period** before slaughter.<br>"
      "3. <b>NSP Enzymes:</b> Xylanases and $\\beta$-glucanases to hydrolyze Non-Starch Polysaccharides in wheat, barley, or rice polish, eliminating sticky, wet droppings."
    ),
    "eliteDesc": (
      "<b>Satellite Cell Proliferation and the Pre-Starter Window:</b><br>"
      "Post-hatch muscle growth occurs entirely through hypertrophy (enlargement) of existing muscle fibers; the absolute number of muscle fibers is fixed at hatching. Muscle hypertrophy is strictly governed by the mitotic proliferation and donation of nuclei from **Myogenic Satellite Cells** located under the basal lamina of muscle fibers. Satellite cell mitotic activity is highest during the first 48 to 72 hours post-hatch and declines rapidly by Day 7. Feeding high-density pre-starter diets (23% CP, high SID Lysine) within the first 6 hours of placement maximizes satellite cell nuclear accretion, establishing the biological foundation for superior breast meat yield at Day 35."
    ),
    "keyPoints": [
      "Modern broilers achieve 2.2-2.5 kg live weight in 35 days with an FCR of 1.5:1.",
      "Three-phase program: Pre-starter (0-7 d), Starter (8-21 d), Finisher (22-35 d).",
      "Pre-starter: 23% CP, 3000 kcal ME/kg; stimulates yolk sac absorption and gut development.",
      "Early feeding within 6 hours of hatching stimulates satellite cell proliferation for breast meat yield.",
      "Starter: 21.5-22% CP, 3100 kcal ME/kg; builds skeletal bone structure and organ systems.",
      "Finisher: 19.5-20% CP, 3200 kcal ME/kg; maximizes breast muscle deposition and energy efficiency.",
      "Pelleting feed increases broiler feed intake and improves FCR by 4-6% over dry mash.",
      "Phytase enzyme (500 FTU/kg) releases phytate-bound phosphorus, reducing DCP supplementation.",
      "Coccidiostats (Salinomycin) are mandatory to prevent coccidiosis; require a 5-day withdrawal before harvest.",
      "NSP enzymes (xylanases) break down soluble arabinoxylans, preventing wet litter and gut viscosity."
    ],
    "clinical": (
      "<b>Ascites Syndrome (Water Belly / Pulmonary Hypertension) in Rapidly Growing Broilers:</b><br>"
      "In commercial broiler flocks during winter months in northern India, fast-growing broilers fed high-density finisher pellets suffer from **Ascites Syndrome**. The massive oxygen demand of rapid breast muscle growth exceeds the capacity of the immature cardio-pulmonary system. Hypoxia triggers polycythemia (elevated hematocrit >45%), increasing blood viscosity. Pulmonary arterial hypertension develops, causing **Right Ventricular Hypertrophy (cor pulmonale)**, right atrioventricular valve insufficiency, and venous congestion. Serous transudate floods the peritoneal cavity, producing a distended, fluid-filled 'water belly', cyanotic comb, and sudden death. Prevention: slow down growth slightly during Week 2 and 3 by feeding mash instead of pellets, providing dawn/dusk lighting programs, and ensuring adequate shed ventilation."
    ),
    "tables": [
      {
        "title": "Three-Phase Nutritional Specifications for Commercial Broiler Chickens",
        "headers": ["Nutrient Specification", "Pre-Starter Phase (0–7 Days)", "Starter Phase (8–21 Days)", "Finisher Phase (22–35/42 Days)"],
        "rows": [
          ["Metabolizable Energy (ME)", "3000 kcal / kg", "3100 kcal / kg", "3200 kcal / kg"],
          ["Crude Protein (CP %)", "23.0 %", "21.5 – 22.0 %", "19.5 – 20.0 %"],
          ["SID Lysine (%)", "1.25 %", "1.15 %", "1.00 %"],
          ["SID Methionine (%)", "0.50 %", "0.45 %", "0.40 %"],
          ["SID Threonine (%)", "0.83 %", "0.76 %", "0.68 %"],
          ["Calcium (Ca %)", "1.00 %", "0.95 %", "0.85 %"],
          ["Available Phosphorus (%)", "0.48 %", "0.45 %", "0.40 %"],
          ["Crude Fibre (CF, max)", "3.5 %", "4.0 %", "4.5 %"]
        ]
      },
      {
        "title": "Essential Micronutrients and Feed Additives in Broiler Rations",
        "headers": ["Additive Category", "Representative Compound", "Inclusion Rate (per ton)", "Key Biological Rationale"],
        "rows": [
          ["Phytase Enzyme", "6-Phytase (Bacterial/Fungal)", "100 g (500 FTU / kg)", "Hydrolyzes plant phytate; releases 0.12% available P and 0.10% Ca"],
          ["Coccidiostat", "Salinomycin / Maduramicin", "500 g / ton feed", "Prevents intestinal coccidiosis (*Eimeria sp.*); 5-day withdrawal"],
          ["Antioxidant", "Ethoxyquin / BHT", "150 g / ton feed", "Prevents oxidative rancidity of added fats and fat-soluble vitamins"],
          ["Choline Chloride", "Choline Chloride (60% corn cob base)", "1000 g / ton feed", "Prevents perosis (slipped tendon) and hepatic lipid accumulation"],
          ["Toxin Binder", "Hydrated Sodium Calcium Aluminosilicate (HSCAS)", "1.0 – 2.0 kg / ton", "Selectively adsorbs aflatoxins in gut; prevents systemic hepatotoxicity"]
        ]
      }
    ],
    "img": "",
    "tags": ["poultry nutrition", "broilers", "pre-starter", "starter", "finisher", "phytase", "FCR", "ascites syndrome", "lysine"]
  },

  "u4-t09": {
    "summary": "Commercial egg layers require carefully managed phase feeding: controlled energy in growers to prevent obesity, and elevated dietary calcium (3.8-4.25%) in layers to supply the 2 grams of calcium demanded per eggshell.",
    "desc": (
      "<b>I. REARING PHASES OF THE COMMERCIAL LAYER</b><br>"
      "Unlike broilers (where rapid weight gain is prioritized), the commercial layer (e.g. BV-300, Hy-Line Silver, Bovans White) is reared to achieve uniform body frame size, correct weight (1.45–1.55 kg at 18 weeks), and precise sexual maturity to sustain 52 to 70 weeks of high egg production (yielding >310–330 eggs/hen/year).<br><br>"
      "<b>The Four Rearing & Laying Phases:</b><br>"
      "<ul>"
      "<li><b>1. Chick Phase (0 to 8 Weeks):</b> Focuses on skeletal and internal organ development. Diet: <b>20.0% CP, 2800 kcal ME/kg, 1.0% Calcium, 0.45% Available Phosphorus</b>. Form: Crumbles or dry mash.</li>"
      "<li><b>2. Grower Phase (9 to 16 Weeks):</b> Controlled growth. The goal is to build skeletal frame capacity without depositing fat. Overweight growers develop prolapse and small eggs. Diet: **Restricted protein and energy**: <b>15–16% CP, 2500 kcal ME/kg, 1.0% Calcium</b>. Incorporate higher fiber (wheat bran, rice polish) to expand crop and gizzard capacity.</li>"
      "<li><b>3. Pre-Layer Phase (17 to 18 Weeks / First Egg):</b> Two weeks prior to oviposition, pullets undergo intense estrogen surges that stimulate the formation of **Medullary Bone** inside the marrow cavities of long bones. Diet: <b>17.0% CP, 2750 kcal ME/kg, and elevated Calcium to 2.0–2.5%</b>. Prepares the skeletal calcium reservoir without stressing kidneys.</li>"
      "<li><b>4. Layer Phase I (19 to 45 Weeks - Peak Production):</b> Production surges from 5% to >92–95% peak. Birds are still gaining body weight while laying eggs. Diet: <b>18.0% CP, 2750 kcal ME/kg, 0.78% Lysine, 0.38% Methionine, and 3.5% to 3.8% Calcium</b>.</li>"
      "<li><b>5. Layer Phase II (>45 Weeks to Culling):</b> Egg production declines gradually to 75–80%, but egg size increases by 8–10%. Because the shell gland must cover a larger surface area while aging intestines absorb calcium less efficiently, dietary Calcium must be raised to <b>4.0% to 4.25%</b>, while protein is reduced to 16.0%.</li>"
      "</ul>"
      "<b>II. EGGSHELL CALCIFICATION DYNAMICS</b><br>"
      "Each eggshell weighs ~5.5 g and contains <b>2.0 to 2.2 grams of pure elemental Calcium</b> as calcium carbonate ($CaCO_3$). Calcification occurs in the shell gland (uterus) over 16 to 20 hours, predominantly **during the dark night hours** when the bird is not eating.<br><br>"
      "<b>The Particle Size Rule (Coarse Limestone / Oyster Shell):</b><br>"
      "If calcium is supplied solely as fine powder (calcined lime or fine marble dust <0.5 mm), it passes through the digestive tract within 2–3 hours. At night, the gut is empty; the hen is forced to demineralize her medullary bone to calcify the shell.<br>"
      "To prevent bone depletion, **50% to 65% of dietary calcium must be supplied as COARSE PARTICLES (2.0 to 4.0 mm limestone chips or crushed oyster shell)**. Coarse limestone chips dissolve slowly in the acidic gizzard (pH 2.5), metering a continuous trickle of ionic calcium into the small intestine throughout the dark nocturnal shell-formation hours."
    ),
    "eliteDesc": (
      "<b>Medullary Bone Dynamics and Osteoclast Homeostasis:</b><br>"
      "Under the combined influence of **Estrogen and Testosterone** at onset of lay, female birds develop a unique, labile, woven bone structure inside the marrow cavity of long bones (femur, tibia) called **Medullary Bone**. Medullary bone possesses an extraordinarily high surface area and 10-times faster turnover than cortical structural bone. During nocturnal eggshell calcification, *parathyroid hormone (PTH)* activates medullary osteoclasts, releasing $Ca^{2+}$ and phosphate into circulation. When morning feeding resumes, calcitonin and 1,25-$(OH)_2 D_3$ drive the rapid remineralization of medullary bone."
    ),
    "keyPoints": [
      "Layers are reared to reach 1.45-1.55 kg at 18 weeks, sustaining >310-330 eggs/year.",
      "Grower phase (9-16 weeks) uses restricted protein (15-16% CP) to prevent early sexual maturity.",
      "Pre-layer diet (17-18 weeks) supplies 2.0-2.5% Calcium to prime medullary bone synthesis.",
      "Each eggshell contains 2.0-2.2 g pure Calcium deposited over 16-20 hours in the shell gland.",
      "Shell calcification occurs predominantly at night when the digestive tract is empty of new feed.",
      "50-65% of dietary calcium must be coarse limestone/oyster shell chips (2-4 mm).",
      "Coarse limestone stays in the gizzard, metering calcium continuously throughout the night.",
      "Fine calcium powder dissolves too fast, forcing the hen to catabolize skeletal bone.",
      "Layer Phase I requires 18% CP and 3.6-3.8% Ca; Phase II requires 16% CP and 4.0-4.25% Ca.",
      "Cage Layer Fatigue is acute osteoporosis caused by calcium depletion during peak lay."
    ],
    "clinical": (
      "<b>Cage Layer Fatigue (Osteoporosis & Hypocalcemic Paralysis):</b><br>"
      "In high-producing commercial layer cages in Andhra Pradesh or Tamil Nadu, hens at peak lay (25 to 35 weeks) are found paralyzed on their sides in the rear of cages, unable to stand or reach feed and water, yet alert and continuing to lay soft-shelled eggs. Bones are extremely fragile, and ribs show bead-like fracture calluses. Diagnosis: **Cage Layer Fatigue (Nutritional Osteoporosis)**.<br>"
      "Pathogenesis: The diet provided inadequate total calcium, or calcium was ground too finely. The hen exhausted her medullary bone reserves and began resorbing structural cortical bone to calcify eggshells, resulting in vertebral microfractures that compress the spinal cord. Treatment: Remove paralyzed hens to floor pens with deep litter (cows often recover when pressure is relieved); top-dress feed with coarse limestone chips (5 g/bird) and add water-soluble 25-hydroxy Vitamin $D_3$ to drinking water."
    ),
    "tables": [
      {
        "title": "Phase-Feeding Nutritional Regimen for Commercial White Leghorn Layers",
        "headers": ["Production Phase", "Age Window", "Crude Protein (CP %)", "ME (kcal / kg)", "Calcium (Ca %)", "Available Phosphorus (%)"],
        "rows": [
          ["Chick Mash", "0 to 8 Weeks", "20.0 %", "2800 kcal", "1.00 %", "0.45 %"],
          ["Grower Mash", "9 to 16 Weeks", "15.5 %", "2500 kcal", "1.00 %", "0.40 %"],
          ["Pre-Layer Mash", "17 to 18 Weeks", "17.0 %", "2750 kcal", "2.25 %", "0.45 %"],
          ["Layer Phase I (Peak)", "19 to 45 Weeks", "18.0 %", "2750 kcal", "3.60 – 3.80 %", "0.40 %"],
          ["Layer Phase II", "46 to 72+ Weeks", "16.0 %", "2700 kcal", "4.00 – 4.25 %", "0.35 %"]
        ]
      },
      {
        "title": "Characteristics and Partitioning of Dietary Calcium Sources for Layers",
        "headers": ["Calcium Source", "Particle Size", "In Vitro Solubility", "Biological Role in Laying Hen"],
        "rows": [
          ["Fine Calcite / Marble Dust", "< 0.5 mm powder", "Rapidly soluble (< 1 hr)", "Rapid daytime intestinal absorption; alkaline buffer in upper gut"],
          ["Coarse Limestone Chips", "2.0 – 4.0 mm chips", "Slowly soluble (6–10 hrs)", "Retained in gizzard; continuous nocturnal $Ca^{2+}$ release for shell"],
          ["Crushed Marine Oyster Shell", "2.5 – 5.0 mm flakes", "Slowly soluble (8–12 hrs)", "Superior laminar structure; preferred choice for Phase II layers"],
          ["Dicalcium Phosphate (DCP)", "Fine granular", "High solubility", "Balances Available Phosphorus (18% P, 22% Ca)"]
        ]
      }
    ],
    "img": "",
    "tags": ["layer nutrition", "eggshell calcification", "medullary bone", "cage layer fatigue", "coarse limestone", "oyster shell", "phase feeding", "calcium"]
  },

  "u4-t10": {
    "summary": "Balancing economic monogastric diets pairs conventional energy-protein staples (maize, soybean meal) with processed unconventional ingredients (silkworm pupae, azolla, DORB) constrained by anti-nutritional thresholds.",
    "desc": (
      "<b>I. CONVENTIONAL FEED INGREDIENTS</b><br>"
      "Conventional poultry and swine diets in India rely heavily on two foundation ingredients:<br>"
      "<ul>"
      "<li><b>1. Energy Foundation: Yellow Maize (Corn):</b> The global gold standard. Highly palatable, high starch content, low fiber (<2.5%), and dense metabolizable energy (3350 kcal ME/kg). Contains natural carotenoids (**Cryptoxanthin and Zeaxanthin**) that impart desirable yellow pigmentation to broiler skin and egg yolks. Limitations: low crude protein (8–9%), deficient in Lysine and Tryptophan.</li>"
      "<li><b>2. Protein Foundation: Soybean Meal (SBM):</b> The premier plant protein source. Contains 44% to 48% high-quality crude protein with an exceptional amino acid profile, particularly rich in **Lysine (2.8–3.0%)**. Must be toasted during solvent extraction to destroy heat-labile anti-nutritional factors (**Trypsin Inhibitors** and *Lectins/Hemagglutinins*).</li>"
      "<li><b>3. Energy Buffers:</b> Broken rice (nakku), pearl millet (bajra), and sorghum (jowar, non-tannin varieties).</li>"
      "</ul>"
      "<b>II. UNCONVENTIONAL AND AGRO-INDUSTRIAL BY-PRODUCTS</b><br>"
      "Because conventional maize and soybean meal directly compete with human food channels, incorporating unconventional feedstuffs is vital for economic sustainability in Indian poultry and piggery operations:<br>"
      "<ul>"
      "<li><b>1. De-Oiled Rice Bran (DORB):</b> By-product of rice bran oil extraction. High crude protein (13–15%) and rich in B-vitamins, but high in indigestible fiber (12–14% crude fiber) and phytate. Limit to 10% in broilers and 20% in grower pigs.</li>"
      "<li><b>2. De-Oiled Silkworm Pupae Meal (SWP):</b> High-protein by-product of the silk reeling industry in Karnataka, West Bengal, and Assam. Exceptional crude protein (**55% to 60% CP**) with excellent lysine and methionine content. Raw pupae contain 25–30% pupal oil high in polyunsaturated fatty acids that oxidize rapidly, causing a fishy/silk taint in meat and eggs. Must be solvent de-oiled. Limit to 5% in broilers.</li>"
      "<li><b>3. Fresh Azolla (*Azolla pinnata*):</b> Aquatic heterosporous floating fern cultivated in farm water pits. Contains 20% to 25% CP on dry matter basis, rich in vitamins and minerals. Can replace 5% to 10% of commercial feed in backyard poultry and swine.</li>"
      "<li><b>4. Distillers Dried Grains with Solubles (DDGS):</b> By-product of grain alcohol distilleries (rice or corn DDGS). Rich in protein (26–30% CP) and energy (2800 kcal ME/kg). Can be included up to 10–15% with supplemental lysine.</li>"
      "<li><b>5. Fish Meal:</b> High crude protein (50–55%), exceptional biological value, rich in omega-3 fatty acids and Available Phosphorus. High risk of salt adulteration (sand and silica) and *Salmonella* contamination. Must contain <3% salt.</li>"
      "</ul>"
    ),
    "eliteDesc": (
      "<b>Bio-Economic Constraints and Inclusion Thresholds:</b><br>"
      "The safe inclusion level of unconventional feedstuffs is governed by specific chemical or anatomical anti-nutritional barriers. In mustard/rapeseed meal, the limit is **glucosinolates** (hydrolyzed by myrosinase into pungent isothiocyanates, depressing thyroid T3/T4 synthesis and causing organ enlargement). In cotton seed meal, the limit is free **gossypol** (binds dietary iron and causes olive-green egg yolk discoloration). In sal seed meal, high condensed **tannins** (>8%) bind digestive enzymes, limiting inclusion to <3% in poultry."
    ),
    "keyPoints": [
      "Yellow maize is the energy foundation (3350 kcal ME/kg); provides cryptoxanthin for yolk color.",
      "Soybean meal is the protein benchmark (44-48% CP); high lysine, but requires heat processing.",
      "Raw soybean meal contains trypsin inhibitors; causes pancreatic hypertrophy if fed raw.",
      "De-oiled rice bran (DORB) provides 14% CP but high fiber; limit to 10% in broilers, 20% in pigs.",
      "De-oiled silkworm pupae meal contains 55-60% CP; pupal oil causes fishy taint if not de-oiled.",
      "Azolla pinnata aquatic fern provides 20-25% CP on DM basis; ideal for backyard poultry.",
      "Corn and rice DDGS provide 26-30% CP; valuable energy and protein by-products from distilleries.",
      "Fish meal provides 50-55% CP and digestible minerals; adulteration with sand/salt must be tested.",
      "Mustard cake contains glucosinolates; causes thyroid goiter and bitter palatability depression.",
      "Cottonseed meal contains gossypol; reacts with egg yolk iron producing olive-green discoloration."
    ],
    "clinical": (
      "<b>Diagnostic Detection of Feed Adulteration and Tannin Toxicosis:</b><br>"
      "In commercial layer flocks in central India, farmers substituting cheap sal seed (*Shorea robusta*) meal or untreated mahua cake for maize observed sudden drops in feed intake, watery green droppings, and severe olive-green discolorations of egg yolks. Sal seed meal contains 8% to 12% polyphenolic **condensed tannins**, which denature salivary mucins, precipitate dietary proteins, and irreversibly inhibit intestinal trypsin and amylase. The veterinarian must instruct the farmer to withdraw sal seed meal immediately. For future batches, boiling sal seed meal in 0.1% sodium carbonate ($Na_2CO_3$) solution or treating with 2% calcium hydroxide (lime) completely neutralizes polyphenolic tannins."
    ),
    "tables": [
      {
        "title": "Nutritional Profile of Conventional and Alternate Monogastric Feed Ingredients",
        "headers": ["Feed Ingredient", "Dry Matter (%)", "Crude Protein (%)", "Metabolizable Energy", "Key Limiting Factor / Toxin", "Max Poultry Limit"],
        "rows": [
          ["Yellow Maize Grain", "88 – 90 %", "8.5 – 9.0 %", "3350 kcal / kg", "Low lysine (0.24%) and tryptophan", "60 – 65 % (No limit)"],
          ["Soybean Meal (Solvent)", "89 – 91 %", "44.0 – 48.0 %", "2250 kcal / kg", "Trypsin inhibitors (if under-toasted)", "25 – 35 %"],
          ["De-Oiled Rice Bran (DORB)", "88 – 90 %", "13.0 – 15.0 %", "1900 kcal / kg", "High crude fiber (12–14%) and phytate", "10 – 15 %"],
          ["De-Oiled Silkworm Pupae", "90 – 92 %", "55.0 – 60.0 %", "2600 kcal / kg", "Fishy taint if oil >3%; rapid rancidity", "5 – 8 %"],
          ["Rice / Corn DDGS", "90 – 92 %", "26.0 – 28.0 %", "2750 kcal / kg", "Variable lysine availability; mycotoxins", "10 – 15 %"],
          ["Mustard / Rapeseed Cake", "89 – 91 %", "35.0 – 38.0 %", "2100 kcal / kg", "Glucosinolates and erucic acid", "5 – 10 %"],
          ["Fresh Azolla Fern", "8 – 10 %", "22.0 – 25.0 % (DM)", "1800 kcal / kg", "High moisture content (90–92%)", "5 – 10 % (DM basis)"]
        ]
      },
      {
        "title": "Anti-Nutritional Factors (ANFs) in Common Alternate Feeds and Detoxification",
        "headers": ["Alternate Ingredient", "Specific Toxic Principle", "Physiological Damage Produced", "Effective Processing / Inactivation Method"],
        "rows": [
          ["Raw Soybean Seed", "Kunitz Trypsin Inhibitors", "Inhibits pancreatic proteases; pancreatic hypertrophy", "Toasting / extrusion at 120°C for 20 minutes"],
          ["Raw Cottonseed Meal", "Free Gossypol (Polyphenolic)", "Binds iron; olive-green egg yolks; cardiac arrest in pigs", "Add Iron Sulfate ($FeSO_4$) at 1:1 weight ratio with gossypol"],
          ["Mustard / Rapeseed Cake", "Glucosinolates (Sinigrin)", "Goiter; thyroid hyperplasia; bitter anorexia", "Water soaking; copper sulfate treatment; breeding canola cultivars"],
          ["Sal Seed Meal", "Condensed Tannins (>8%)", "Precipitates digestive enzymes; severe mucosal irritation", "Boiling with 0.1% $Na_2CO_3$ or 2% calcium hydroxide"],
          ["Raw Guar Meal", "Residual Guar Gum (Galactomannan)", "Extreme gut viscosity; severe sticky wet droppings", "Toasting guar meal at 100°C; $\\beta$-mannanase enzyme"]
        ]
      }
    ],
    "img": "",
    "tags": ["conventional feeds", "unconventional feeds", "maize", "soybean meal", "DORB", "silkworm pupae", "azolla", "anti-nutritional factors"]
  },

  "u4-t11": {
    "summary": "Ducks, quails, and turkeys exhibit specialized nutritional demands: ducks have high niacin needs and extreme aflatoxin sensitivity, quails grow rapidly on high protein, and turkey poults demand 28% CP.",
    "desc": (
      "<b>I. NUTRITIONAL MANAGEMENT OF DUCKS (ANAS PLATYRHYNCHOS)</b><br>"
      "Ducks exhibit unique physiological and anatomical feeding traits distinct from chickens:<br>"
      "<ul>"
      "<li><b>Extreme Susceptibility to Aflatoxicosis:</b> Ducks are the most aflatoxin-sensitive of all domestic poultry, being <b>5 to 10 times more vulnerable than chickens</b>. Diets containing as little as <b>20 to 30 ppb of Aflatoxin B1</b> cause acute bile duct hyperplasia, severe hepatic necrosis, ascites, and mass mortality. Feeds must be scrupulously screened for mold.</li>"
      "<li><b>Elevated Niacin (Nicotinic Acid) Requirement:</b> Ducks convert tryptophan to niacin with very poor efficiency. The dietary requirement is <b>55 to 65 mg/kg diet</b> (double that of chickens). Deficiency produces painful bowing of the legs, enlarged hock joints, and inability to walk (**perosis-like crippling**).</li>"
      "<li><b>Feed Physical Form:</b> Ducks have broad, sensitive, serrated spatulate bills. Dry fine powdery mash clogs their nasal nostrils and bills, causing crusting and feed wastage. Ducks must be fed either **pelleted diets** or **crumbles**, or dry mash must be placed immediately adjacent to deep water troughs where ducks can continuously wash their bills.</li>"
      "</ul>"
      "<b>II. NUTRITIONAL MANAGEMENT OF JAPANESE QUAIL (COTURNIX JAPONICA)</b><br>"
      "Japanese quail are characterized by ferocious growth velocity and ultra-early sexual maturity:<br>"
      "<ul>"
      "<li>Hatch weight is only 6–8 grams, reaching adult weight (140–180 g) by 5 weeks of age. Females begin commercial egg production at <b>6 weeks of age</b> (laying 280–300 speckled eggs per year).</li>"
      "<li><b>Extreme Early Protein Demand:</b><br>"
      "   - <i>Quail Starter (0 to 3 Weeks):</i> Requires <b>24.0% to 26.0% Crude Protein</b>, 2800 kcal ME/kg, 1.30% Lysine.<br>"
      "   - <i>Quail Grower (4 to 5 Weeks):</i> 20.0% CP, 2800 kcal ME/kg.<br>"
      "   - <i>Quail Layer (6+ Weeks):</i> 19.0% to 20.0% CP, 2750 kcal ME/kg, and <b>2.8% to 3.0% Calcium</b>.</li>"
      "</ul>"
      "<b>III. NUTRITIONAL MANAGEMENT OF TURKEYS (MELEAGRIS GALLOPAVO)</b><br>"
      "Turkeys possess vast skeletal frames and massive pectoral muscle development, requiring the highest dietary protein of any commercial domestic avian species:<br>"
      "<ul>"
      "<li><b>Turkey Pre-Starter / Starter (0 to 4 Weeks):</b> Requires an extraordinary <b>28.0% Crude Protein</b>, 2800 kcal ME/kg, 1.60% Lysine, and 0.55% Methionine.</li>"
      "<li>High vulnerability to **Perosis (Slipped Tendon)**: Demands intensive trace mineral fortification with **Manganese (minimum 100 ppm)** and **Choline (1500–1800 mg/kg)** to support massive bone elongation.</li>"
      "</ul>"
    ),
    "eliteDesc": (
      "<b>Comparative Hepatic Epoxidation of Aflatoxin B1 in Ducks:</b><br>"
      "The lethal sensitivity of ducks to Aflatoxin B1 is enzymatic. In the duck liver, *cytochrome P450 (CYP1A2/CYP3A4)* bioactivates Aflatoxin B1 into the highly reactive, electrophilic **Aflatoxin B1-8,9-epoxide** at a rate 10-times faster than in chickens. Crucially, duck hepatocytes possess negligible *glutathione S-transferase (GST)* activity to conjugate and detoxify this epoxide. The un-neutralized epoxide intercalates into hepatic nuclear DNA, forming covalent *AFB1-N7-guanine adducts* that arrest transcription and trigger explosive hepatocellular necrosis."
    ),
    "keyPoints": [
      "Ducks are 5-10 times more sensitive to Aflatoxin B1 than chickens; >20 ppb causes fatal liver necrosis.",
      "Ducks require high dietary Niacin (55-65 mg/kg); deficiency produces severe bow-leg deformity.",
      "Ducks must be fed pellets, crumbles, or wet mash to prevent feed from clogging nostrils and bills.",
      "Japanese quail mature sexually in 6 weeks, requiring 24-26% CP in the starter phase.",
      "Quail layers require 20% CP and 2.8-3.0% Calcium to sustain rapid daily egg laying.",
      "Turkeys have massive frames and require the highest protein: 28% CP in the starter phase.",
      "Turkey poults are highly vulnerable to Perosis; require 100 ppm Manganese and high Choline.",
      "Feed physical consistency is critical: water fowl require water within 1 meter of feed troughs.",
      "Japanese quail have high metabolic rates; cannot tolerate feed restriction without severe mortality.",
      "Duck livers lack glutathione S-transferase, leaving them unable to detoxify aflatoxin epoxides."
    ],
    "clinical": (
      "<b>Aflatoxicosis Outbreak in Duck Farms:</b><br>"
      "In wetland duck-rearing districts (e.g. Kuttanad in Kerala, coastal West Bengal), an outbreak of acute sudden deaths occurs in 4-week-old ducklings following unseasonal monsoon rains. Affected birds show anorexia, ataxia, purple cyanotic bills, arching of the neck backwards (**opisthotonos**), and convulsions. Post-mortem reveals enlarged, pale yellow, friable livers with petechial hemorrhages and distended gallbladders containing dark green bile. Investigation reveals damp paddy feed containing 80 ppb Aflatoxin B1. Action: Immediately condemn the contaminated grain. Feed fresh unadulterated mash supplemented with Vitamin E, Selenium, and choline chloride + liver tonics."
    ),
    "tables": [
      {
        "title": "Comparative Nutrient Specifications: Ducks, Quails, Turkeys vs Chickens",
        "headers": ["Nutrient Parameter", "Broiler Chicken Starter", "Duck Starter (0–3 Weeks)", "Japanese Quail Starter (0–3 Wk)", "Turkey Starter (0–4 Weeks)"],
        "rows": [
          ["Crude Protein (CP %)", "22.0 %", "20.0 – 22.0 %", "24.0 – 26.0 %", "28.0 % (Highest)"],
          ["Metabolizable Energy", "3100 kcal / kg", "2900 kcal / kg", "2850 kcal / kg", "2800 kcal / kg"],
          ["Niacin (Nicotinic Acid)", "35 mg / kg", "60 mg / kg (Double)", "40 mg / kg", "60 mg / kg"],
          ["Manganese ($Mn$)", "60 mg / kg", "70 mg / kg", "60 mg / kg", "100 mg / kg (Prevents perosis)"],
          ["Aflatoxin Tolerance Limit", "< 20 ppb", "< 10 ppb (Critical)", "< 20 ppb", "< 20 ppb"],
          ["Physical Feed Form", "Crumbles", "Pellets / Wet Mash", "Fine Crumbles / Sifted", "Crumbles"]
        ]
      },
      {
        "title": "Diagnostic Manifestations of Nutritional Deficiencies in Minor Poultry",
        "headers": ["Avian Species", "Deficient Nutrient", "Pathological Syndrome Produced", "Clinical Manifestations Observed"],
        "rows": [
          ["Domestic Ducks", "Niacin (Vitamin $B_3$)", "Duckling Bow-Leg Disease", "Enlarged, flattened hocks; severe lateral bowing of legs; inability to walk"],
          ["Domestic Ducks", "Aflatoxin B1 (Toxicity)", "Acute Hepatic Necrosis", "Opisthotonos; yellow friable liver; ascites; 100% mortality in ducklings"],
          ["Japanese Quail", "Protein / Lysine", "Growth Stunting & Poor Feathering", "Pin-cushion appearance; wing feathers fail to emerge; delayed sexual maturity"],
          ["Turkey Poults", "Manganese / Choline", "Perosis (Slipped Tendon)", "Gastrocnemius tendon slips off condyles; bird hobbles on hocks; permanent crippling"]
        ]
      }
    ],
    "img": "",
    "tags": ["ducks", "quails", "turkeys", "aflatoxicosis", "niacin", "perosis", "quail starter", "turkey starter"]
  },

  "u4-t12": {
    "summary": "Laboratory rodents require standardized irradiated pellet diets supporting coprophagy, while guinea pigs possess an absolute dietary requirement for Vitamin C (10-20 mg/kg BW) to prevent fatal scurvy.",
    "desc": (
      "<b>I. LABORATORY ANIMAL NUTRITION: THE STANDARD OF SCIENTIFIC REPRODUCIBILITY</b><br>"
      "In biomedical research, laboratory rodents (rats, mice, guinea pigs) are biological models for human pharmacology, toxicology, and immunology. Diets must be strictly standardized, chemically defined, contaminant-free (zero pesticide residues, heavy metals, or phytoestrogens), and formulated into autoclavable or gamma-irradiated pellets to ensure experimental reproducibility.<br><br>"
      "<b>II. NUTRITIONAL PHYSIOLOGY OF LABORATORY RATS AND MICE</b><br>"
      "<ul>"
      "<li><b>Omnivorous Caecal Fermenters:</b> Rats (<i>Rattus norvegicus</i>) and mice (<i>Mus musculus</i>) possess a simple monogastric stomach followed by a functional caecum.</li>"
      "<li><b>Coprophagy (Caecotrophy):</b> Rats and mice consume 35% to 50% of their daily faeces directly from the anus, predominantly during the dark nocturnal hours. This biological recycling mechanism recovers microbial proteins, essential amino acids, and **B-complex vitamins (especially $B_{12}$, Biotin, Folate, and Vitamin K)** synthesized by hindgut bacteria. If rodents are housed on raised wire-mesh floors with coprophagy-prevention collars, dietary requirements for B-vitamins and protein increase by 30% to 40%.</li>"
      "<li><b>Pellet Hardness:</b> Rodents have continuously erupting, open-rooted **incisor teeth** (growing 2–3 mm per week). Laboratory pellets must be formulated with high physical hardness (10–12 kg/cm² breaking strength) to provide natural mechanical wear, preventing malocclusion and oral trauma.</li>"
      "</ul>"
      "<b>III. NUTRITIONAL PHYSIOLOGY OF THE GUINEA PIG (*CAVIA PORCELLUS*)</b><br>"
      "The guinea pig is an **obligate herbivore, hindgut caecal fermenter** with unique, critical nutritional idiosyncrasies:<br>"
      "<ul>"
      "<li><b>1. Absolute Dietary Requirement for Vitamin C (L-Ascorbic Acid):</b><br>"
      "Like primates and fruit-eating bats, guinea pigs completely lack the functional hepatic enzyme **L-Gulonolactone Oxidase**, which catalyzes the terminal step in the conversion of glucose into ascorbic acid. They are 100% dependent on daily dietary vitamin C.<br>"
      "Daily Requirement: <b>10 mg/kg BW daily</b> for normal adults, increasing to <b>20–30 mg/kg BW daily</b> during pregnancy, lactation, and wound healing.</li>"
      "<li><b>The Pathogenesis of Scurvy:</b> In the absence of dietary vitamin C, guinea pigs exhaust tissue stores within 10 to 14 days and develop clinical **Scurvy**. Ascorbic acid is the essential cofactor for *prolyl and lysyl hydroxylase*, which hydroxylate proline and lysine during intracellular pro-collagen cross-linking.<br>"
      "Defective collagen weakens capillary basement membranes and periodontal ligaments. Clinical signs: loose teeth, bleeding swollen gingiva, painful swollen joints (stiff hop gait), extensive subcutaneous hemorrhages, emaciation, and death within 3 weeks.</li>"
      "<li><b>2. High Indigestible Fiber Requirement:</b> Guinea pigs require <b>12% to 16% crude fiber</b> to maintain caecal motility and prevent gastrointestinal stasis and hairball formation (trichobezoars).</li>"
      "</ul>"
    ),
    "eliteDesc": (
      "<b>Ascorbic Acid Thermolability in Laboratory Pellets:</b><br>"
      "A classical pitfall in laboratory animal facilities is storing guinea pig feed beyond its shelf life. Free L-ascorbic acid in commercial pelleted diets undergoes rapid oxidative degradation catalyzed by heat, moisture, and light, losing over 50% of its biological activity within 6 to 8 weeks of manufacture. Modern laboratory diets must incorporate **Phosphorylated L-Ascorbate (L-Ascorbyl-2-Polyphosphate)**, a chemically stabilized ester derivative that resists oxidation, pelleting heat, and gamma-irradiation, releasing active ascorbic acid only upon enzymatic hydrolysis by intestinal alkaline phosphatases."
    ),
    "keyPoints": [
      "Laboratory rodent diets must be chemically standardized and autoclavable or gamma-irradiated.",
      "Rats and mice practice nocturnal coprophagy, recycling 35-50% of faeces for B-vitamins and vitamin K.",
      "Rodent incisors grow continuously; pellets must be hard (10-12 kg/cm²) to prevent malocclusion.",
      "Guinea pigs are obligate herbivores requiring 12-16% crude fiber to prevent caecal stasis.",
      "Guinea pigs lack the hepatic enzyme L-Gulonolactone Oxidase; cannot synthesize Vitamin C.",
      "Guinea pig Vitamin C requirement: 10 mg/kg BW daily (rising to 30 mg/kg in pregnancy).",
      "Vitamin C deficiency produces fatal Scurvy within 14-21 days due to defective collagen synthesis.",
      "Scurvy signs: swollen painful joints, loose teeth, gingival bleeding, subcutaneous hemorrhages.",
      "Ascorbic acid oxidizes rapidly in feed; requires chemically stabilized L-Ascorbyl-2-Polyphosphate.",
      "Feeding rabbit pellets to guinea pigs causes fatal scurvy because rabbit feeds contain zero Vitamin C."
    ],
    "clinical": (
      "<b>Outbreak of Scurvy in an Institutional Laboratory Animal Facility:</b><br>"
      "In a research animal facility, an entire breeding colony of Dunkin-Hartley guinea pigs suddenly presents with reluctance to move, loud vocalization on handling ('vocalizing with pain'), swollen stifle and carpal joints, and diarrhea. Multiple animals are found dead with bilateral subperiosteal hemorrhages over the femurs. Investigation reveals that the animal attendant mistakenly fed commercial **rabbit pellets** for 4 weeks because guinea pig feed had run out. Rabbit feed contains zero Vitamin C (as rabbits synthesize their own). Immediate treatment: Administer ascorbic acid (50 mg/animal orally via syringe daily) and add water-soluble Vitamin C (1 g/liter) to drinking water bottles (prepared fresh daily and wrapped in foil to prevent photodegradation). The colony recovers within 7 days."
    ),
    "tables": [
      {
        "title": "Nutritional and Physiological Comparison: Laboratory Rats vs Guinea Pigs",
        "headers": ["Physiological Parameter", "Laboratory Rat (Rattus norvegicus)", "Guinea Pig (Cavia porcellus)"],
        "rows": [
          ["Dietary Classification", "Omnivore (Seeds, grains, animal tissue)", "Strict Herbivore (Grasses, foliage, hays)"],
          ["Primary Fermentation Site", "Simple caecum (Moderate capacity)", "Expansive caecum (Holds 60% of gut volume)"],
          ["Hepatic L-Gulonolactone Oxidase", "Present (Synthesizes own Vitamin C)", "ABSENT (Absolute dietary Vitamin C requirement)"],
          ["Crude Fiber Requirement", "Low to moderate (4.0 – 5.0 % CF)", "High (12.0 – 16.0 % CF; mandatory for peristalsis)"],
          ["Vitamin C Requirement", "Nil", "10 – 20 mg / kg Body Weight daily"],
          ["Coprophagy Habit", "Moderate (Faeces ingested at night)", "High (Direct caecotrophy from anus)"],
          ["Vulnerability to Antibiotics", "Standard mammalian tolerance", "Fatal enterotoxaemia with penicillin/ampicillin"]
        ]
      },
      {
        "title": "Standard Nutrient Specifications for Laboratory Animal Diets (AIN-93 Guidelines)",
        "headers": ["Nutrient Parameter", "Laboratory Mouse (Growth)", "Laboratory Rat (Maintenance)", "Guinea Pig (Growth/Breeding)"],
        "rows": [
          ["Crude Protein (CP, min)", "20.0 %", "15.0 %", "18.0 – 20.0 %"],
          ["Crude Fat (EE, min)", "5.0 %", "5.0 %", "4.0 %"],
          ["Crude Fibre (CF)", "3.0 – 4.0 %", "4.0 – 5.0 %", "12.0 – 15.0 %"],
          ["Metabolizable Energy", "3600 kcal / kg", "3400 kcal / kg", "3000 kcal / kg"],
          ["Calcium (Ca)", "0.80 %", "0.60 %", "0.80 %"],
          ["Phosphorus (P)", "0.55 %", "0.40 %", "0.50 %"],
          ["Vitamin C (L-Ascorbate)", "Nil", "Nil", "800 – 1000 mg / kg diet"]
        ]
      }
    ],
    "img": "",
    "tags": ["laboratory animals", "rats", "mice", "guinea pigs", "vitamin C", "scurvy", "L-gulonolactone oxidase", "coprophagy", "AIN-93"]
  },

  "u4-t13": {
    "summary": "Rabbits are hindgut lagomorphs producing two distinct faecal types, requiring caecotrophy to recover microbial protein and B-vitamins, alongside high indigestible fiber (>14%) to prevent fatal enterotoxaemia.",
    "desc": (
      "<b>I. UNIQUE DIGESTIVE ANATOMY OF THE RABBIT (ORYCTOLAGUS CUNICULUS)</b><br>"
      "The rabbit is an **herbivorous, non-ruminant, hindgut-fermenting lagomorph** featuring an anatomical digestive strategy termed **hindgut separation**: <br>"
      "<ul>"
      "<li><b>1. Simple Stomach:</b> Thin-walled, non-compartmentalized, containing acidic secretions (pH 1.5–2.0). The rabbit's stomach is never completely empty, retaining a ball of ingesta and hair.</li>"
      "<li><b>2. The Expansive Caecum:</b> An immense, thin-walled, coiled blind sac holding <b>40% to 50% of the entire gastrointestinal volume</b>, populated by dense anaerobic bacteria (*Bacteroides*, *Clostridium*).</li>"
      "<li><b>3. The Colon and Fusus Coli:</b> The proximal colon is specialized with mucosal ridges that execute a mechanical separation of digesta particles based on size and density. The **Fusus Coli** ('the pacemaker of the lagomorph colon') regulates colonic motility, switching between two entirely different motor patterns to produce two distinct types of faeces.</li>"
      "</ul>"
      "<b>II. THE PHENOMENON OF CAECOTROPHY (PSEUDO-RUMINATION)</b><br>"
      "Rabbits void two distinct types of faecal pellets over a 24-hour cycle:<br>"
      "<ul>"
      "<li><b>1. Hard Faeces (Day Faeces):</b> Produced 4 to 8 hours post-feeding. Consists of coarse, indigestible fibrous particles (>0.3 mm). Rapidly propelled through the colon and dropped on the floor as dry, round, fibrous pellets containing minimal nutrients.</li>"
      "<li><b>2. Soft Faeces (Caecotropes / Night Faeces):</b> Produced 8 to 12 hours post-feeding, predominantly in early morning. Fine, digestible particles and fluid are retro-propelled into the caecum, fermented into microbial biomass, and packaged by the fusus coli into small, clustered, glistening berries enclosed in a protective **mucus membrane**.<br>"
      "The rabbit consumes caecotropes directly from the anus (**caecotrophy**) without chewing. The mucus coating protects microbial enzymes from gastric acidity, allowing caecotropes to ferment gently in the fundic stomach for 4 to 6 hours before digestion in the small intestine.</li>"
      "<li><b>Nutritional Contribution:</b> Caecotrophy supplies <b>15% to 20% of the rabbit's total daily protein intake</b>, 100% of its dietary requirements for **B-complex vitamins and Vitamin K**, and substantial volatile fatty acids.</li>"
      "</ul>"
      "<b>III. THE ABSOLUTE REQUIREMENT FOR INDIGESTIBLE CRUDE FIBER</b><br>"
      "A fatal misconception among pet owners is feeding rabbits low-fiber, high-starch cereal grains. Rabbits have an absolute requirement for **indigestible dietary crude fiber (minimum 14% to 16% CF, >30% NDF)** derived from long hay (timothy, oat, or lucerne hay):<br>"
      "<ul>"
      "<li>Coarse indigestible fiber stimulates mechanical colonic contractions and drives the fusus coli pacemaker.</li>"
      "<li>If a low-fiber, high-grain diet is fed, caecal motility arrests (**caecal hypomotility / gut stasis**). Undigested starch spills into the caecum, raising caecal pH above 6.5. In the presence of excess starch and high pH, anaerobic pathobionts (**Clostridium spiroforme** and *E. coli*) proliferate explosively, producing deadly iota-like toxins that cause acute **Mucoid Enteropathy, watery diarrhea, and death within 24 to 48 hours**.</li>"
      "</ul>"
    ),
    "eliteDesc": (
      "<b>Colonic Separation Mechanism and Motility Regulation:</b><br>"
      "At the ileo-caeco-colic junction, the proximal colon utilizes haustral contractions and specialized mucosal warps to separate digesta: (1) **Coarse, large-particle lignified fiber** (>0.3 mm) is shunted into the central lumen, stripped of moisture, and rapidly propelled aborally to form hard pellets; (2) **Fine, fermentable particles** (<0.1 mm) and water are drawn into the lateral colonic grooves and propelled backward (anti-peristalsis) into the caecum for anaerobic microbial fermentation. The *fusus coli* is densely innervated by autonomic ganglia and controlled by prostaglandins, melatonin, and volatile fatty acid concentrations, switching between hard-pellet excretion and caecotrope emission."
    ),
    "keyPoints": [
      "Rabbits are hindgut lagomorphs with an expansive caecum holding 40-50% of gut volume.",
      "The Fusus Coli acts as the colonic pacemaker, regulating the production of two faecal types.",
      "Hard faeces consist of coarse indigestible fiber voided during the day.",
      "Soft faeces (caecotropes) consist of microbial clusters enclosed in a protective mucus envelope.",
      "Caecotrophy is the ingestion of caecotropes directly from the anus in early morning.",
      "Caecotrophy recovers microbial protein (30% CP), essential amino acids, Vitamin B12, and Vitamin K.",
      "Rabbits have an absolute requirement for minimum 14-16% crude fiber to drive colonic motility.",
      "Low-fiber diets trigger caecal hypomotility, gut stasis, and hairballs (trichobezoars).",
      "Starch overload in the caecum triggers Clostridium spiroforme proliferation and fatal enterotoxaemia.",
      "Pet rabbits require 80% long grass hay, 15% leafy greens, and only 5% balanced pellets."
    ],
    "clinical": (
      "<b>Gastrointestinal Stasis (Trichobezoars / Hairball Obstruction) in Pet Rabbits:</b><br>"
      "A pet rabbit is presented with sudden anorexia, absence of faecal pellets in the hutch for 24 hours, teeth grinding (bruxism from abdominal pain), and a hunched posture. Palpation reveals a firm doughy stomach and distended caecum. Diagnosis: **Gastrointestinal Stasis (GI Stasis)**.<br>"
      "Pathogenesis: The owner fed commercially available muesli-type grains without long hay. Lack of indigestible coarse fiber depressed colonic motility. Ingested grooming hair, unable to pass, condensed with dehydrated feed into a solid **trichobezoar**. Treatment: (1) Aggressive fluid therapy (subcutaneous or IV balanced electrolytes) to rehydrate the impacted stomach mass; (2) Motility prokinetic agents (Metoclopramide and Cisapride); (3) Analgesia (Meloxicam); (4) Syringe feeding of high-fiber critical care slurry (Oxbow Critical Care). Never attempt surgical gastrotomy unless absolute physical pyloric obstruction is confirmed on radiography."
    ),
    "tables": [
      {
        "title": "Comprehensive Chemical Comparison: Hard Faecal Pellets vs Soft Caecotropes",
        "headers": ["Nutrient Constituent", "Hard Day Faeces", "Soft Night Caecotropes", "Physiological / Nutritional Meaning"],
        "rows": [
          ["Moisture Content (%)", "40.0 – 45.0 %", "75.0 – 80.0 %", "Caecotropes are soft, glistening, and moist"],
          ["Crude Protein (CP % DM)", "10.0 – 12.0 %", "28.0 – 32.0 %", "Caecotropes are packed with synthesized microbial protein"],
          ["Crude Fibre (CF % DM)", "30.0 – 35.0 %", "15.0 – 18.0 %", "Hard faeces eliminate coarse, woody, lignified fibers"],
          ["B-Complex Vitamins", "Low / Baseline", "300 – 400 % higher", "Re-ingestion fulfills daily B-vitamin requirements"],
          ["Mucus Membrane Coating", "Absent", "Present (Glycoprotein envelope)", "Protects microbial enzymes from gastric acid (pH 2.0)"],
          ["Ingestion by Rabbit", "Rejected / discarded", "Consumed directly from anus", "Essential for maintenance nitrogen equilibrium"]
        ]
      },
      {
        "title": "Standard Nutrient Guidelines for Rabbits across Physiological Stages",
        "headers": ["Nutrient Parameter", "Breeding Does & Litters", "Growing Meat Weaners", "Adult Maintenance / Pets"],
        "rows": [
          ["Crude Protein (CP, min)", "17.0 – 18.0 %", "15.0 – 16.0 %", "12.0 – 14.0 %"],
          ["Crude Fibre (CF, min)", "14.0 – 15.0 %", "14.0 – 16.0 %", "16.0 – 20.0 % (High fiber mandatory)"],
          ["Metabolizable Energy", "2600 kcal / kg", "2500 kcal / kg", "2200 kcal / kg"],
          ["Fat (EE, min)", "3.0 – 4.0 %", "2.0 – 3.0 %", "2.0 %"],
          ["Calcium (Ca)", "0.80 – 1.0 %", "0.60 – 0.80 %", "0.50 – 0.60 % (Excreted in urine; avoid excess)"],
          ["Phosphorus (P)", "0.50 %", "0.40 %", "0.35 %"]
        ]
      }
    ],
    "img": "",
    "tags": ["rabbit nutrition", "lagomorph", "fusus coli", "caecotrophy", "soft faeces", "indigestible fiber", "GI stasis", "enterotoxaemia"]
  },

  "u4-t14": {
    "summary": "Dogs are adaptive omnivores requiring phase-fed protein and balanced calcium-to-phosphorus ratios across life stages, while strictly avoiding common human food toxins such as theobromine, xylitol, and onions.",
    "desc": (
      "<b>I. METABOLIC CLASSIFICATION OF THE DOMESTIC DOG (*CANIS LUPUS FAMILIARIS*)</b><br>"
      "While taxonomically classified under the order Carnivora, domestic dogs are biologically and nutritionally **adaptive omnivores / facultative carnivores**:<br>"
      "<ul>"
      "<li><b>Carbohydrate Digestion:</b> During domestication alongside human agricultural civilizations, dogs evolved multiple copies of the pancreatic amylase gene (**AMY2B**, 4 to 30 copies vs 2 in wolves) and high mucosal maltase-glucoamylase activity, allowing them to digest and utilize cooked starch and grains with $>95\\%$ efficiency.</li>"
      "<li><b>Nutritional Flexibility:</b> Dogs can synthesize niacin from tryptophan, convert $\\beta$-carotene into active Vitamin A, and synthesize taurine from cysteine.</li>"
      "</ul>"
      "<b>II. LIFE-STAGE NUTRITIONAL REQUIREMENTS</b><br>"
      "<ul>"
      "<li><b>1. Puppy Growth Phase (Weaning to 12–18 Months):</b> High metabolic rate. Formulate on <b>26–28% CP, 14–18% Fat, 1.2% Calcium, 1.0% Phosphorus</b>.<br>"
      "<i>Large and Giant Breed Puppies (Great Dane, German Shepherd, Labrador):</i> Require strict regulation of energy density and calcium. **Never overfeed energy** (promotes rapid bone elongation before mineralization) and maintain Calcium strictly at **1.1% to 1.3% DM**. Excess dietary calcium (>2.0%) cannot be down-regulated by naive puppy intestines, precipitating **Canine Hip Dysplasia, Osteochondrosis Dissecans (OCD), and Hypertrophic Osteodystrophy (HOD)**.</li>"
      "<li><b>2. Adult Maintenance:</b> Support muscle tone, skin integrity, and vitality: <b>18–22% CP, 10–14% Fat</b>.</li>"
      "<li><b>3. Senior / Geriatric Dogs (>7–8 Years):</b> Metabolic rate slows by 20%. Diets must feature: (a) Highly digestible, high-biological-value protein to prevent sarcopenia (muscle wasting); (b) Moderate fat to prevent obesity; (c) **Restricted phosphorus (0.3–0.5%)** to delay progression of chronic renal failure; and (d) Glucosamine, chondroitin, and EPA/DHA to support arthritic joints.</li>"
      "</ul>"
      "<b>III. LETHAL FOOD TOXICITIES IN CANINE CLINICAL PRACTICE</b><br>"
      "Canine metabolic pathways lack specific enzymes present in humans, rendering common household foods highly toxic:<br>"
      "<ul>"
      "<li><b>1. Chocolate / Cocoa (Theobromine & Caffeine):</b> Dogs metabolize methylxanthines extremely slowly (plasma half-life ~17.5 hours). Ingesting dark chocolate produces adenosine receptor antagonism and phosphodiesterase inhibition: severe tachycardia, cardiac arrhythmias, muscle tremors, seizures, and death.</li>"
      "<li><b>2. Onions and Garlic (*Allium* species):</b> Contain organic **thiosulfates and allyl sulfides**. Dogs lack catalase to defend erythrocytes against thiosulfate oxidation. Hemoglobin is oxidized into **Heinz Bodies**, triggering acute intravascular hemolysis, hemoglobinuria, and severe hemolytic anemia.</li>"
      "<li><b>3. Xylitol (Artificial Sweetener):</b> Triggers rapid, potent insulin release from canine pancreatic beta-cells (causing profound hypoglycemia within 30 minutes, coma, and acute hepatic necrosis).</li>"
      "<li><b>4. Grapes and Raisins:</b> Produce acute renal tubular epithelial necrosis and anuric renal failure within 24–72 hours via tartaric acid poisoning.</li>"
      "</ul>"
    ),
    "eliteDesc": (
      "<b>Diet-Associated Dilated Cardiomyopathy (DCM) and Taurine Kinetics:</b><br>"
      "In 2018–2022, international veterinary cardiologists identified an alarming spike in Canine **Dilated Cardiomyopathy (DCM)** in non-genetically predisposed breeds (Golden Retrievers, French Bulldogs) fed boutique, exotic-ingredient, or **'Grain-Free' Dog Diets** containing high proportions of peas, lentils, chickpeas, and potatoes. While dogs synthesize taurine endogenously from methionine and cysteine, high pulse legumes increase faecal loss of conjugated bile acids (taurocholic acid) while fiber blocks enterocyte reabsorption, depleting myocardial taurine reserves. Myocardial taurine deficiency impairs intracellular calcium signaling in cardiac myocytes, inducing progressive ventricular dilation and congestive heart failure."
    ),
    "keyPoints": [
      "Domestic dogs are adaptive omnivores possessing multiple copies of pancreatic amylase (AMY2B).",
      "Puppy growth requires 26-28% CP; large-breed puppies require strict calcium control (1.1-1.3%).",
      "Overfeeding energy and calcium to large-breed puppies causes hip dysplasia and osteochondrosis.",
      "Senior dogs require high-quality digestible protein, reduced phosphorus, and joint-protective omega-3s.",
      "Chocolate contains theobromine; causes cardiac arrhythmias, CNS excitement, seizures, and death.",
      "Onions and garlic contain thiosulfates, oxidizing hemoglobin into Heinz body hemolytic anemia.",
      "Xylitol causes massive insulin release in dogs, precipitating lethal hypoglycemia and hepatic failure.",
      "Grapes and raisins contain tartaric acid; induce acute irreversible renal tubular necrosis.",
      "Grain-free diets with high pulse legumes are linked to diet-associated Dilated Cardiomyopathy (DCM).",
      "Raw bread dough containing baker's yeast ferments into ethanol, causing gastric bloat and alcohol toxicity."
    ],
    "clinical": (
      "<b>Emergency Treatment of Canine Chocolate Toxicosis:</b><br>"
      "A 15 kg Labrador retriever ingests a 200 g block of dark baker's chocolate (containing ~16 mg/g theobromine; toxic threshold for severe signs is 40–50 mg/kg). The dog is presented within 2 hours with panting, hyperthermia (103.8°F), vomiting, and severe sinus tachycardia (heart rate 180 bpm).<br>"
      "Emergency Protocol: (1) **Induce Emesis:** Administer 3% Hydrogen Peroxide orally (1–2 mL/kg) or Apomorphine (0.03 mg/kg IV) to evacuate stomach contents; (2) **Adsorption:** Administer Activated Charcoal (1–2 g/kg) with sorbitol; repeated every 6 hours (theobromine undergoes enterohepatic recirculation); (3) **Cardiac Support:** Administer Propranolol or Metoprolol ($\\beta$-blockers) to control ventricular tachyarrhythmias; (4) **Catheterize Bladder:** Theobromine is reabsorbed across the urinary bladder wall; frequent urinary catheterization prevents systemic reabsorption."
    ),
    "tables": [
      {
        "title": "AAFCO and FEDIAF Minimum Nutrient Specifications for Domestic Dogs",
        "headers": ["Nutrient Parameter", "Puppy Growth & Reproduction", "Adult Dog Maintenance", "Senior / Geriatric Dog"],
        "rows": [
          ["Crude Protein (CP, min DM)", "22.5 – 28.0 %", "18.0 – 20.0 %", "18.0 – 22.0 % (High biological value)"],
          ["Crude Fat (EE, min DM)", "8.5 – 15.0 %", "5.5 – 10.0 %", "7.0 – 10.0 %"],
          ["Calcium (Ca, min–max)", "1.0 – 1.4 % (Strictly max 1.6%)", "0.60 – 1.20 %", "0.50 – 0.80 %"],
          ["Phosphorus (P, min–max)", "0.80 – 1.00 %", "0.50 – 0.90 %", "0.30 – 0.50 % (Kidney protective)"],
          ["Calcium:Phosphorus Ratio", "1.2:1 to 1.4:1", "1.2:1 to 1.5:1", "1.2:1 to 1.4:1"],
          ["Arginine (min)", "0.90 %", "0.55 %", "0.55 %"]
        ]
      },
      {
        "title": "Common Human Foods Highly Toxic to Domestic Dogs",
        "headers": ["Toxic Household Food", "Primary Toxic Chemical", "Toxic Mechanism of Action", "Pathognomonic Clinical Manifestation"],
        "rows": [
          ["Chocolate / Cocoa", "Theobromine & Caffeine", "Adenosine antagonism; intracellular cAMP accumulation", "Tachycardia, cardiac arrhythmias, seizures, collapse"],
          ["Onions, Garlic, Leeks", "N-propyl disulfide / Thiosulfates", "Oxidizes erythrocyte glucose-6-phosphate dehydrogenase", "Heinz body hemolytic anemia, hemoglobinuria, pale gums"],
          ["Xylitol (Sugar-Free Gum)", "Xylitol (Sugar alcohol)", "Potent stimulation of canine pancreatic insulin release", "Profound hypoglycemia (<30 mg/dL), seizures, hepatic failure"],
          ["Grapes, Raisins, Sultanas", "Tartaric Acid & Potassium Bitartrate", "Acute mitochondrial damage in renal proximal tubules", "Oliguric/anuric acute kidney failure within 24–72 hours"],
          ["Macadamia Nuts", "Unknown toxic principle", "Neuromuscular junction block", "Hindlimb paresis, tremors, hyperthermia within 12 hours"]
        ]
      }
    ],
    "img": "",
    "tags": ["canine nutrition", "dog feeding", "life stages", "theobromine", "chocolate toxicity", "xylitol", "onion toxicity", "DCM", "AAFCO"]
  },

  "u4-t15": {
    "summary": "Cats are strict obligate carnivores possessing an unalterable metabolic architecture: high baseline protein catabolism and absolute dietary dependencies on taurine, arginine, arachidonic acid, preformed Vitamin A, and niacin.",
    "desc": (
      "<b>I. THE METABOLIC PROFILE OF THE OBLIGATE CARNIVORE</b><br>"
      "The domestic cat (<i>Felis catus</i>) is a **strict obligate (hyper-) carnivore**. Over millions of generations, cats consumed an exclusive diet of animal prey (small rodents, birds) composed entirely of protein, fat, and bone, with virtually zero carbohydrates. Consequently, cats abandoned several synthetic metabolic pathways, adapting their cellular biochemistry to an inescapable dependency on nutrients found exclusively in animal tissue.<br><br>"
      "<b>II. THE SIX UNIQUE NUTRITIONAL PECULIARITIES OF THE CAT</b><br>"
      "<ul>"
      "<li><b>1. High Maintenance Protein Requirement:</b><br>"
      "Cats have a protein requirement 2 to 3 times higher than dogs (<b>minimum 26–30% CP in adult maintenance; >35% in kittens</b>).<br>"
      "<i>Mechanism:</i> In dogs and humans, hepatic amino acid catabolic enzymes (*transaminases, glutamate dehydrogenase, urea cycle enzymes*) downregulate during low protein intake to conserve nitrogen. Cats lack the ability to downregulate these enzymes; their hepatic transaminases operate at continuous, unalterable high baseline activity, catabolizing body amino acids for glucose via gluconeogenesis even when fed a protein-free diet.</li>"
      "<li><b>2. Absolute Dietary Requirement for Taurine:</b><br>"
      "Taurine (2-aminoethanesulfonic acid) is a sulfur-containing $\\beta$-amino sulfonic acid. Cats cannot synthesize adequate taurine from methionine/cysteine due to extremely low activity of the rate-limiting enzyme **Cysteinesulfinic Acid Decarboxylase**. Furthermore, cats conjugate bile acids *exclusively* with taurine (forming taurocholic acid) and cannot substitute glycine. Deficiency causes:<br>"
      "   - **Feline Central Retinal Degeneration (FCRD):** Irreversible photoreceptor death and bilateral blindness.<br>"
      "   - **Dilated Cardiomyopathy (DCM):** Flaccid ventricular enlargement and heart failure.<br>"
      "   - Fetal resorption and reproductive failure. Minimum dietary taurine: 1000 mg/kg in dry diets, 2000 mg/kg in canned wet food.</li>"
      "<li><b>3. Extreme Sensitivity to Arginine Deficiency:</b><br>"
      "Cats lack the intestinal enzymes to synthesize ornithine or citrulline. If a cat consumes a single meal devoid of arginine, the urea cycle is paralyzed within 30 to 60 minutes. Free ammonia accumulates explosively, producing acute **Severe Hyperammonemic Encephalopathy**: frothing, vocalization, hyperesthesia, seizures, coma, and death within 2 to 4 hours.</li>"
      "<li><b>4. Absolute Requirement for Arachidonic Acid ($20:4\\ n-6$):</b><br>"
      "Cats lack the active hepatic desaturase enzyme **$\\Delta$-6 Desaturase**. They cannot convert plant linoleic acid into arachidonic acid and must ingest preformed arachidonic acid found exclusively in animal fat.</li>"
      "<li><b>5. Absolute Requirement for Preformed Vitamin A (Retinol):</b><br>"
      "Cats lack the intestinal mucosal enzyme **$\\beta$-Carotene 15,15'-Dioxygenase**, completely preventing them from cleaving plant $\\beta$-carotene into active Vitamin A. They must ingest preformed retinol from animal liver/fat.</li>"
      "<li><b>6. Absolute Requirement for Preformed Niacin (Vitamin $B_3$):</b><br>"
      "In other species, tryptophan is converted to niacin via the kynurenine pathway. In cats, the enzyme **Picolinic Carboxylase** has exceptionally high activity, immediately shunting all intermediates away from nicotinic acid into the acetyl-CoA energy pathway. Cats require 4-times more preformed dietary niacin than dogs.</li>"
      "</ul>"
      "<b>III. FELINE LOWER URINARY TRACT DISEASE (FLUTD)</b><br>"
      "Cats descend from African desert wildcats (*Felis lybica*) and have a blunted thirst drive, concentrating their urine to high specific gravity (>1.040). Feeding dry commercial diets with high magnesium and phosphorus predisposes to **Struvite Urolithiasis (Magnesium Ammonium Phosphate $MgNH_4PO_4 \\cdot 6H_2O$)** in alkaline urine (pH >7.0). Diets must maintain acidic urine (<b>pH 6.2 to 6.6</b>) and incorporate high moisture (canned diets or water fountains) to prevent life-threatening urethral obstruction in male cats."
    ),
    "eliteDesc": (
      "<b>Carbohydrate Metabolism & Hepatic Glucokinase Absence:</b><br>"
      "Feline liver tissue contains negligible activity of **Glucokinase (Hexokinase IV)**, which phosphorylates glucose in the liver of omnivores following a high-carbohydrate meal. Cats rely exclusively on low-$K_m$ *Hexokinase I–III*. Consequently, cats have delayed hepatic glucose clearance and cannot tolerate high-carbohydrate grain diets, predisposing to chronic hyperglycemia, pancreatic beta-cell amyloid deposition, and **Feline Type II Diabetes Mellitus**."
    ),
    "keyPoints": [
      "Cats are strict obligate carnivores with an unalterable metabolic dependency on animal tissue.",
      "High baseline protein requirement (26-30% adult, >35% kittens) due to non-adaptive transaminases.",
      "Absolute requirement for Taurine; deficiency causes Feline Central Retinal Degeneration and DCM.",
      "Cats conjugate bile acids exclusively with taurine, leading to constant fecal taurine excretion.",
      "Arginine-free diet induces lethal hyperammonemic encephalopathy within 2-4 hours.",
      "Cats lack $\\Delta$-6 desaturase; cannot convert plant linoleic acid into Arachidonic Acid.",
      "Cats lack $\\beta$-carotene dioxygenase; must ingest preformed Vitamin A (retinol) from animal fat.",
      "High picolinic carboxylase activity diverts tryptophan into acetyl-CoA; requires preformed Niacin.",
      "Low thirst drive and concentrated urine predispose cats to FLUTD and struvite urethral blockage.",
      "Negligible hepatic glucokinase activity limits carbohydrate utilization, predisposing to feline diabetes."
    ],
    "clinical": (
      "<b>Emergency Management of Urethral Obstruction (Blocked Cat) in FLUTD:</b><br>"
      "A 3-year-old male neutered domestic shorthair cat is presented in lateral recumbency: vomiting, hypothermic (96°F), bradycardic (heart rate 90 bpm), with a hard, basketball-sized, painful urinary bladder. The cat has been straining unproductive in the litter box for 36 hours. Diagnosis: **Urethral Obstruction (FLUTD) with Post-Renal Azotemia and Severe Hyperkalemia**.<br>"
      "Emergency Protocol: (1) **Counteract Cardiac Arrhythmias:** Administer 10% Calcium Gluconate (0.5–1.0 mL/kg IV slowly over 10 min under ECG) to stabilize cardiac myocyte membranes against hyperkalemic arrest; (2) **Relieve Obstruction:** Anesthetize, decompress bladder via cystocentesis, flush and catheterize urethra using a 3.5 French Tomcat catheter; (3) **Dietary Acidification:** Switch permanently to a therapeutic urinary diet (e.g. Hill's c/d or Royal Canin Urinary S/O) formulated with low magnesium, high moisture, and DL-methionine to keep urine pH strictly at 6.2–6.4, dissolving struvite crystals."
    ),
    "tables": [
      {
        "title": "The Six Inflexible Metabolic Peculiarities of the Feline Obligate Carnivore",
        "headers": ["Nutrient Required", "Missing or Deficient Enzyme", "Why Omnivores (Dogs) Survive", "Pathology of Deficiency in Cats"],
        "rows": [
          ["High Crude Protein", "Cannot downregulate aminotransferases", "Downregulates transaminases to spare protein", "Rapid muscle wasting; catabolizes body protein for glucose"],
          ["Taurine", "Cysteinesulfinic acid decarboxylase", "Synthesizes taurine from cysteine/methionine", "Feline Central Retinal Degeneration (blindness), Dilated Cardiomyopathy"],
          ["Arginine", "Intestinal pyrroline-5-carboxylate synthase", "Synthesizes ornithine/citrulline endogenously", "Fatal hyperammonemic encephalopathy within 2–4 hours"],
          ["Arachidonic Acid ($20:4\\ n-6$)", "$\\Delta$-6 Desaturase (Hepatic)", "Converts plant linoleic acid to arachidonic acid", "Impaired platelet aggregation, hair loss, reproductive failure"],
          ["Preformed Vitamin A", "$\\beta$-Carotene 15,15'-dioxygenase", "Cleaves plant $\\beta$-carotene into active retinol", "Blindness, xerophthalmia, reproductive failure, skeletal lesions"],
          ["Preformed Niacin ($B_3$)", "Excess Picolinic Carboxylase activity", "Converts tryptophan $\\rightarrow$ quinolinic $\\rightarrow$ niacin", "Black tongue, ulceration of oral cavity, severe emaciation"]
        ]
      },
      {
        "title": "Nutritional Prevention and Management of Feline Lower Urinary Tract Disease (FLUTD)",
        "headers": ["Dietary Strategy", "Target Specification", "Biochemical / Physical Mechanism of Action"],
        "rows": [
          ["Dietary Moisture Elevation", "Canned food (75–80% moisture)", "Increases urine volume; lowers urine specific gravity below 1.030"],
          ["Target Urine pH Regulation", "Strictly pH 6.2 to 6.5", "Struvite crystals dissolve at pH <6.6; oxalate forms at pH <6.0"],
          ["Magnesium & Phosphorus Restriction", "Mg < 0.08% DM; P < 0.8% DM", "Decreases urinary ionic saturation of magnesium and phosphate"],
          ["Urinary Glycosaminoglycans (GAGs)", "Glucosamine fortification", "Replenishes the protective urothelial protective mucosal layer"],
          ["Dietary Sodium Buffer", "Moderate salt inclusion (0.8–1.0%)", "Stimulates voluntary water drinking without renal strain"]
        ]
      }
    ],
    "img": "",
    "tags": ["feline nutrition", "obligate carnivore", "taurine", "arginine", "arachidonic acid", "vitamin A", "niacin", "FLUTD", "struvite"]
  },

  "u4-t16": {
    "summary": "Feeding captive wildlife demands duplicating natural diets while avoiding nutritional secondary hyperparathyroidism in carnivores, dental caries in frugivores, and metabolic bone disease in captive reptiles and birds.",
    "desc": (
      "<b>I. PRINCIPLES OF CAPTIVE WILDLIFE NUTRITION</b><br>"
      "In modern zoological parks (regulated by the Central Zoo Authority, CZA, in India), feeding wildlife must fulfill biological nutrient requirements, simulate natural foraging behaviors, prevent stereotypic vices, and prevent nutritional metabolic diseases that do not occur in the wild.<br><br>"
      "<b>II. CAPTIVE LARGE CARNIVORES (TIGERS, LIONS, LEOPARDS)</b><br>"
      "<ul>"
      "<li><b>Dietary Foundation:</b> In Indian zoos, adult Royal Bengal Tigers (<i>Panthera tigris</i>) and Asiatic Lions (<i>Panthera leo persica</i>) are fed fresh dressed buffalo meat (beef) or mutton: approximately <b>8 to 12 kg fresh meat daily</b> for an adult tiger, with a mandatory **once-weekly fasting day** to simulate wild gorge-and-fast predatory cycles and clear the digestive tract.</li>"
      "<li><b>The Fatal Error: Boneless Meat Feeding:</b> Pure skeletal muscle meat contains an inverted, disastrous Calcium-to-Phosphorus ratio of **1:20 to 1:40 (0.01% Ca vs 0.20% P)**. Feeding boneless meat triggers acute **Nutritional Secondary Hyperparathyroidism (Metabolic Bone Disease / 'Rubber Jaw')**. Parathyroid hormone demineralizes skeletal bones, causing paper-thin cortical bone, folding fractures, and pelvic canal collapse.</li>"
      "<li><b>Mandatory Prevention:</b> Meat must be fed with **attached bones (beef shank/ribs, 2–3 kg)** to provide natural calcium and clean dental tartar. In cubs, meat must be dusted with <b>10 g Calcium Carbonate / Dicalcium Phosphate per kg of meat</b>.</li>"
      "</ul>"
      "<b>III. CAPTIVE WILD HERBIVORES (ELEPHANTS, RHINOS, DEER)</b><br>"
      "<ul>"
      "<li><b>Asian Elephants (*Elephas maximus*):</b> An adult elephant consumes <b>150 to 250 kg of fresh forage daily</b> (representing 1.5–2.0% BW as dry matter). Diets must emphasize natural fibrous roughages: green fodder (fodder sorghum, maize, sugarcane tops), sacred fig / peepal leaves (*Ficus religiosa*), and banyan leaves. Avoid feeding excess sweet fruits (bananas, sugarcane) which cause severe dental caries, molar malocclusion, and colic. Supplement with cooked concentrate rolls (ragi/wheat flour + jaggery + 100 g salt + mineral mixture).</li>"
      "<li><b>Spotted Deer (*Axis axis*) & Blackbuck:</b> Susceptible to ruminal acidosis from commercial grains. Rations must provide 80% cultivated green fodder and chaffed hay with minimal grain pellets.</li>"
      "</ul>"
      "<b>IV. CAPTIVE PRIMATES AND EXOTIC BIRDS</b><br>"
      "<ul>"
      "<li><b>Primates (Macaques, Langurs, Gibbons):</b> Like humans, non-human primates completely lack the enzyme *L-gulonolactone oxidase* and have an **absolute requirement for dietary Vitamin C** (supplied via fresh citrus fruits, guavas, leafy vegetables). Old World monkeys also demand dietary **Vitamin $D_3$** (cholecalciferol).</li>"
      "<li><b>Frugivorous and Nectarivorous Birds (Toucans, Mynahs, Hornbills):</b> Highly susceptible to **Iron Storage Disease (Hemochromatosis)**. These species evolved on iron-scarce wild rainforest fruits and possess hyper-efficient intestinal iron absorption. Feeding commercial poultry feeds (high in iron, >200 ppm) causes toxic iron accumulation in hepatic hepatocytes, resulting in liver failure, ascites, and death. Diets must contain strictly **<60 to 80 ppm total iron**.</li>"
      "</ul>"
    ),
    "eliteDesc": (
      "<b>UVB Photobiology and Vitamin D3 Synthesis in Captive Reptiles & Birds:</b><br>"
      "Captive reptiles (crocodilians, monitor lizards, chelonians) and birds housed in indoor glass-fronted enclosures develop severe **Metabolic Bone Disease (Nutritional Secondary Hyperparathyroidism)** even when fed calcium. Window glass completely absorbs **Ultraviolet B (UVB, 290–315 nm)** radiation. In the skin, UVB photolysis of *7-dehydrocholesterol* into *previtamin D3* (and subsequently *cholecalciferol*) is blocked. Without active $1,25-(OH)_2 D_3$, intestinal enterocytes cannot synthesize calbindin, completely arresting calcium absorption. Facilities must provide specialized full-spectrum UVB lighting alongside dietary cholecalciferol."
    ),
    "keyPoints": [
      "Captive zoo nutrition must simulate natural foraging and prevent nutritional metabolic diseases.",
      "Adult tigers and lions are fed 8-12 kg dressed buffalo meat daily with a mandatory 1-day weekly fast.",
      "Feeding pure boneless meat causes severe Calcium deficiency (Ca:P = 1:25 to 1:40).",
      "Boneless meat induces Nutritional Secondary Hyperparathyroidism ('Rubber Jaw' and bone fractures).",
      "Zoo carnivores must receive meat with attached bones or 10 g calcium carbonate/DCP per kg meat.",
      "Asian elephants consume 150-250 kg green roughage daily; excess sweet fruits cause molar caries.",
      "Non-human primates cannot synthesize Vitamin C; require daily fresh citrus fruits or guavas.",
      "Frugivorous birds (toucans, hornbills) absorb iron hyper-efficiently; feeds must contain <65 ppm Fe.",
      "High dietary iron causes toxic Iron Storage Disease (Hemochromatosis) and liver failure in hornbills.",
      "Indoor captive reptiles require UVB (290-315 nm) lighting for cutaneous Vitamin D3 synthesis."
    ],
    "clinical": (
      "<b>Management of Metabolic Bone Disease in a Rescued Leopard Cub:</b><br>"
      "A 4-month-old rescued Indian leopard (*Panthera pardus*) cub housed in a transit rescue facility is presented with painful vocalization on handling, reluctant gait, folding fractures of the distal radius, and soft, compressible mandibles ('rubber jaw'). History reveals the attendant fed exclusively boneless chicken and mutton breast meat. Radiographs show paper-thin, osteopenic cortical bone ('ghost bones') and multiple greenstick fractures. Diagnosis: **Nutritional Secondary Hyperparathyroidism**. Treatment: Immediately immobilize the cub in a padded enclosure; dust all meat with 10 g Calcium Carbonate and 5 g Dicalcium Phosphate daily + oral Cholecalciferol (Vitamin D3, 500 IU/day). Cortical bone thickness and skeletal mineral density recover within 6 to 8 weeks."
    ),
    "tables": [
      {
        "title": "Dietary Schedules and CZA Norms for Premier Indian Captive Zoo Species",
        "headers": ["Zoo Animal Species", "Daily Feed Formulation", "Nutritional Supplementation", "Mandatory Zoological Management Rule"],
        "rows": [
          ["Royal Bengal Tiger (Adult 180 kg)", "8 – 10 kg Fresh Buffalo Meat with Bone", "30 g Mineral Mix + 10 g Vit A/E powder", "Mandatory 1-day weekly fast (Water only)"],
          ["Asian Elephant (Adult 3500 kg)", "150 – 200 kg Green fodder + 50 kg Tree Ficus leaves", "Concentrate dough (Ragi/Flour + Jaggery + Salt)", "Free access to natural wallow, clay, and tree bark"],
          ["Rhesus Macaque (Adult Primates)", "Boiled pulses, eggs, seasonal fruits, greens", "Vitamin C (Citrus/Guava mandatory daily)", "Avoid high-sugar treats; scatter feed for foraging"],
          ["Indian Rhinoceros (Adult 2000 kg)", "100 kg Cultivated greens + 15 kg Lucerne hay", "8 kg Pelleted concentrate (16% CP)", "High coarse fiber essential to prevent colic"],
          ["Great Indian Hornbill (Avian)", "Papaya, figs, boiled egg, soaked dog kibble", "Low-Iron diet strictly (<65 ppm Fe)", "Screen all feeds for iron to prevent hemochromatosis"]
        ]
      },
      {
        "title": "Major Nutritional Pathologies Encountered in Captive Zoological Collections",
        "headers": ["Wildlife Class", "Clinical Nutritional Disorder", "Primary Dietary Cause", "Pathognomonic Lesions Observed"],
        "rows": [
          ["Captive Felids (Lions/Tigers)", "Nutritional Secondary Hyperparathyroidism", "Feeding boneless muscle meat (Ca:P = 1:25)", "'Rubber jaw', thin cortical bone, pathological folding fractures"],
          ["Frugivorous Birds (Hornbills)", "Hemochromatosis (Iron Storage Disease)", "Commercial poultry feed high in iron (>250 ppm)", "Massive hemosiderin deposits in liver; ascites; hepatic cirrhosis"],
          ["Indoor Reptiles / Chelonians", "Metabolic Bone Disease (Soft Shell)", "Lack of UVB radiation + low dietary calcium", "Pyramiding of carapace; soft rubbery plastron; limb tremors"],
          ["Captive Primates", "Scurvy (Hypovitaminosis C)", "Omitting fresh fruits/vegetables from pelleted diet", "Gingival bleeding, subperiosteal hematomas, tooth loss"]
        ]
      }
    ],
    "img": "",
    "tags": ["zoo animal nutrition", "wildlife", "tigers", "elephants", "hemochromatosis", "secondary hyperparathyroidism", "UVB", "CZA guidelines"]
  },

  "u4-t17": {
    "summary": "Nutritional deficiencies in monogastrics and poultry produce pathognomonic clinical hallmarks: perosis from manganese, crazy chick disease from vitamin E, curled toe paralysis from riboflavin, and parakeratosis from zinc.",
    "desc": (
      "<b>I. AVIAN NUTRITIONAL DEFICIENCY SYNDROMES</b><br>"
      "Due to their rapid growth rate, high metabolic rate, and absence of microbial synthesis, poultry express vitamin and trace mineral deficiencies with spectacular, pathognomonic clinical lesions:<br>"
      "<ul>"
      "<li><b>1. Perosis (Slipped Tendon):</b><br>"
      "   - <i>Aetiology:</i> Deficiency of **Manganese ($Mn$)** or **Choline**, exacerbated by deficiencies of Biotin, Folic Acid, or Nicotinic Acid.<br>"
      "   - <i>Pathogenesis:</i> Manganese is essential for *glycosyltransferase* enzymes synthesizing chondroitin sulfate in the epiphyseal growth plates. The distal end of the tibiotarsus and proximal end of the tarsometatarsus become enlarged, flattened, and deformed. The powerful **Gastrocnemius tendon slips out of its shallow condylar groove**, pulling the shank laterally and backwards. Affected chicks are permanently crippled, hobbling on their hocks.</li>"
      "<li><b>2. Encephalomalacia ('Crazy Chick Disease') & Exudative Diathesis:</b><br>"
      "   - <i>Aetiology:</i> Deficiency of **Vitamin E ($\\alpha$-tocopherol)** and/or **Selenium**, commonly triggered by feeding rancid fats containing peroxides.<br>"
      "   - <i>Pathogenesis:</i> Un-neutralized lipid peroxides destroy polyunsaturated fatty acids in cerebellar cell membranes. Produces ischemic necrosis of cerebellar Purkinje cells. Chicks exhibit ataxia, backward falling, head retraction (**torticolis**), and vigorous pedaling of legs ('crazy chick'). Concurrently, capillary permeability defects produce **Exudative Diathesis** (massive, greenish-blue gelatinous fluid pooling subcutaneously over the breast and abdomen).</li>"
      "<li><b>3. Curled Toe Paralysis:</b><br>"
      "   - <i>Aetiology:</i> Deficiency of **Riboflavin (Vitamin $B_2$)**.<br>"
      "   - <i>Pathogenesis:</i> Demyelination and hypertrophy of the **sciatic nerve trunks**. Chicks walk on their hocks with their toes curled tightly inward like fists.</li>"
      "<li><b>4. Avian Rickets and Cage Layer Fatigue:</b><br>"
      "   - <i>Aetiology:</i> Deficiency or imbalance of **Calcium, Available Phosphorus, or Vitamin $D_3$**.<br>"
      "   - <i>Signs:</i> Soft, pliable, rubbery beaks and keel bones, bead-like enlargement of costochondral junctions ('ricketic rosary'), and paralysis in caged layers.</li>"
      "</ul>"
      "<b>II. MONOGASTRIC MAMMALIAN DEFICIENCY SYNDROMES</b><br>"
      "<ul>"
      "<li><b>1. Parakeratosis in Swine:</b> Deficiency of **Zinc ($Zn$)** or excessive dietary Calcium (which competitively inhibits zinc absorption). Causes defective keratinization of epidermal cells: thick, dry, crusty, cracked, fissured scales over the snout, ears, hocks, and belly without pruritus. Corrected by adding 100–150 ppm Zinc Sulfate.</li>"
      "<li><b>2. Piglet Anemia ('Thumps'):</b> Iron deficiency in unweaned piglets causing microcytic hypochromic anemia and spasmodic diaphragmatic jerking.</li>"
      "<li><b>3. Feline Central Retinal Degeneration and DCM:</b> Taurine deficiency in cats.</li>"
      "<li><b>4. Scurvy in Guinea Pigs:</b> Vitamin C deficiency causing collagen collapse, loose teeth, and joint hemorrhages.</li>"
      "</ul>"
    ),
    "eliteDesc": (
      "<b>Antioxidant Synergism: Vitamin E vs. Selenium (*Glutathione Peroxidase*):</b><br>"
      "Vitamin E and Selenium operate as a two-tiered biological antioxidant defense system protecting cellular membranes from reactive oxygen species (ROS):<br>"
      "1. **Vitamin E ($\\alpha$-tocopherol):** Resides within the hydrophobic lipid bilayer of cell membranes, acting as a chain-breaking antioxidant that intercepts free radicals, preventing propagation of lipid peroxidation.<br>"
      "2. **Selenium:** An essential constituent of cytosolic **Glutathione Peroxidase (GSH-Px)**, an enzyme containing selenocysteine that reduces toxic hydrogen peroxide ($H_2O_2$) and lipid hydroperoxides into harmless water and alcohols before they can attack membrane fatty acids.<br>"
      "$$\\text{Lipid-OOH} + 2 \\text{GSH} \\xrightarrow{\\text{Selenium Glutathione Peroxidase}} \\text{Lipid-OH} + \\text{GSSG} + H_2O$$<br>"
      "Consequently, adequate dietary Selenium spares the Vitamin E requirement, and vice-versa."
    ),
    "keyPoints": [
      "Perosis (slipped tendon) is caused by Manganese or Choline deficiency; tendon slips from condyle.",
      "Crazy Chick Disease (Encephalomalacia) is cerebellar necrosis caused by Vitamin E deficiency.",
      "Exudative diathesis is subcutaneous pooling of greenish gelatinous fluid from Vitamin E / Se deficiency.",
      "Curled toe paralysis is pathognomonic for Riboflavin (Vitamin B2) deficiency; causes sciatic demyelination.",
      "Avian rickets produces rubbery, flexible beaks and keel bones with 'ricketic rosary' rib lesions.",
      "Swine parakeratosis is zinc deficiency (or excess calcium); produces thick, non-pruritic cracked skin.",
      "Piglet anemia produces 'thumps' diaphragmatic spasms and pale hearts due to iron deficiency.",
      "Taurine deficiency in cats causes irreversible retinal blindness and dilated cardiomyopathy.",
      "Guinea pig scurvy is collagen synthesis failure from lack of dietary L-ascorbic acid.",
      "Vitamin E and Selenium act synergistically via membrane quenching and cytosolic glutathione peroxidase."
    ],
    "clinical": (
      "<b>Differential Diagnosis: Curled Toe Paralysis vs Marek's Disease:</b><br>"
      "A broiler grower flock in Andhra Pradesh exhibits lameness with birds down on their hocks. The veterinarian must differentiate between two major entities:<br>"
      "1. **Riboflavin (Vit $B_2$) Deficiency:** Both legs affected symmetrically; toes are tightly curled inwards ('curled-toe posture'); birds are otherwise alert with normal eyes and feathering; sciatic nerves are bilaterally thickened but smooth.<br>"
      "2. **Marek's Disease (Herpesvirus):** Asymmetrical progressive unilateral paresis; classic posture is one leg extended forward and one stretched backward; irregular grey pupils ('ocular lymphomatosis'); feather follicle nodules; loss of cross-striations in unilateral sciatic nerve plexus.<br>"
      "Therapy: Adding water-soluble Riboflavin (10 mg/L) to drinking water produces dramatic clinical recovery in vitamin B2 deficiency within 24 to 48 hours."
    ),
    "tables": [
      {
        "title": "Master Diagnostic Matrix: Nutritional Deficiency Syndromes in Poultry",
        "headers": ["Nutrient Deficient", "Pathognomonic Clinical Syndrome", "Primary Anatomical Lesion", "Immediate Corrective Intervention"],
        "rows": [
          ["Manganese ($Mn$) / Choline", "Perosis (Slipped Tendon)", "Enlarged, flattened hock; gastrocnemius tendon displaced laterally", "Add 100 ppm $MnSO_4$ + 1000 mg/kg Choline Chloride to feed"],
          ["Vitamin E / Selenium", "Encephalomalacia (Crazy Chick)", "Ischemic necrosis & hemorrhages in cerebellum; torticollis", "Add water-soluble Vitamin E (100 mg/L) + Sodium Selenite"],
          ["Vitamin E / Selenium", "Exudative Diathesis", "Greenish-blue gelatinous subcutaneous edema over breast/belly", "Inject Vitamin E/Selenium; check feed for fat rancidity"],
          ["Riboflavin (Vitamin $B_2$)", "Curled Toe Paralysis", "Sciatic nerve demyelination; toes curled tightly inward", "Oral drenching of Vitamin $B_2$ (10–20 mg/bird) in water"],
          ["Vitamin $D_3$ / Calcium", "Avian Rickets / Cage Layer Fatigue", "Soft, rubbery, flexible beaks; beaded ribs; vertebral collapse", "Add water-soluble $25-(OH) D_3$ + coarse limestone chips"],
          ["Vitamin A", "Nutritional Roup", "Pustule-like lesions in esophagus; cheesy ocular discharge", "Add Vitamin A palmitate (20,000 IU/L) to drinking water"]
        ]
      },
      {
        "title": "Master Diagnostic Matrix: Nutritional Deficiency Syndromes in Monogastric Mammals",
        "headers": ["Animal Species", "Nutrient Deficient", "Clinical Syndrome", "Hallmark Clinical Manifestation"],
        "rows": [
          ["Swine (Piglets)", "Iron ($Fe$)", "Piglet Anemia ('Thumps')", "Extreme mucosal pallor, jerky diaphragmatic breathing, pale heart"],
          ["Swine (Growers)", "Zinc ($Zn$)", "Parakeratosis", "Thick, hard, crusty, cracked skin scales over snout and hocks"],
          ["Equines (Horses)", "Calcium / Excess P", "Big Head / Bran Disease", "Bilateral facial maxillary swelling, shifting lameness, bone resorption"],
          ["Felines (Cats)", "Taurine", "Central Retinal Degeneration", "Hyper-reflective area centralis, progressive irreversible blindness"],
          ["Guinea Pigs", "Vitamin C (Ascorbate)", "Scurvy (Collagen Collapse)", "Swollen painful joints, loose teeth, subcutaneous bleeding, death"],
          ["Canines (Puppies)", "Excess Calcium & Energy", "Canine Hip Dysplasia / OCD", "Articular cartilage flaps, subchondral bone cysts, joint lameness"]
        ]
      }
    ],
    "img": "",
    "tags": ["nutritional deficiency", "perosis", "crazy chick disease", "curled toe paralysis", "parakeratosis", "thumps", "scurvy", "poultry diseases"]
  }
}

target_file = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "data", "data-theory-unit4.JS")

with open(target_file, "w", encoding="utf-8") as f:
    f.write("/* Auto-scaffolded and compiled by tools/build_unit4.py — safe to edit by hand. */\n")
    f.write("var theoryData = (typeof theoryData !== 'undefined') ? theoryData : {};\n\n")
    f.write('theoryData["unit-4"] = ')
    json.dump(unit4_data, f, indent=2, ensure_ascii=False)
    f.write(";\n")

print(f"Successfully generated {target_file} with {len(unit4_data)} topics.")
