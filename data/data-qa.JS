/* ============================================================
   data-qa.JS  —  Written Exam Question Bank
   Animal Nutrition Studio · B.V.Sc & A.H. Second Year (VCI MSVE 2016)
   ------------------------------------------------------------
   Total Questions: 100 High-Yield Exam Replicated Questions
   Distribution per Unit (Units 1 to 4):
     - 12 Two-mark Definition Questions (24 Marks)
     - 8 Five-mark Short-Answer Questions / Differentiations (40 Marks)
     - 5 Twelve-mark Long-Answer Questions (60 Marks)
   Total Marks per Unit: 124 Marks | Platform Grand Total: 496 Marks
   ============================================================ */

var qaBank = {
  "unit-1": [
    {
      "id": "u1-qa-d01",
      "type": "define",
      "marks": 2,
      "question": "Define Biological Value (BV) of a protein. Give the Thomas-Mitchell formula.",
      "topicId": "u1-t16",
      "answer": "<p><b>Biological Value (BV)</b> is defined as the percentage of absorbed nitrogen that is retained in the animal body for maintenance and growth, serving as an index of how well a dietary protein's essential amino acid profile matches the animal's tissue requirements.</p><p><b>Thomas-Mitchell Formula:</b><br><code>BV (%) = [ { N Intake - (Fecal N - MFN) - (Urinary N - EUN) } / { N Intake - (Fecal N - MFN) } ] × 100</code><br><i>Where MFN = Metabolic Fecal Nitrogen, EUN = Endogenous Urinary Nitrogen.</i></p>",
      "keyPoints": [
        "Definition: Percentage of absorbed nitrogen retained in the animal body.",
        "Thomas-Mitchell balance equation correctly defining retained N / absorbed N.",
        "Accounting for endogenous metabolic losses (MFN and EUN)."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "GADVASU 2022",
        "TANUVAS 2020"
      ]
    },
    {
      "id": "u1-qa-d02",
      "type": "define",
      "marks": 2,
      "question": "Define Total Digestible Nutrients (TDN) and state its mathematical expression.",
      "topicId": "u1-t14",
      "answer": "<p><b>Total Digestible Nutrients (TDN)</b> is a traditional measure of the total apparent digestible energy content of a feedstuff, expressed as the sum of all digestible organic nutrient fractions, with digestible ether extract multiplied by 2.25 to account for its higher caloric density.</p><p><b>Mathematical Expression:</b><br><code>% TDN = % DCP + % DCF + % DNFE + (% DEE × 2.25)</code><br><i>Where DCP = Digestible Crude Protein, DCF = Digestible Crude Fibre, DNFE = Digestible Nitrogen-Free Extract, DEE = Digestible Ether Extract. (1 kg TDN ≈ 4.4 Mcal of DE or 4400 kcal DE).</i></p>",
      "keyPoints": [
        "Definition: Measure of digestible energy based on sum of digestible organic nutrient fractions.",
        "Formula: % DCP + % DCF + % DNFE + (% DEE × 2.25).",
        "Factor 2.25 accounts for 2.25 times higher energy density of lipids."
      ],
      "table": null,
      "pyq": [
        "RAJUVAS 2024",
        "DUVASU 2021",
        "WBUAFS 2022"
      ]
    },
    {
      "id": "u1-qa-d03",
      "type": "define",
      "marks": 2,
      "question": "Define Net Energy (NE) and differentiate between NEm and NEp.",
      "topicId": "u1-t14",
      "answer": "<p><b>Net Energy (NE)</b> is the actual portion of metabolizable energy that is completely available to the animal body for maintenance and productive functions, derived after subtracting the Heat Increment (HI) and heat of fermentation from Metabolizable Energy (<code>NE = ME - HI</code>).</p><p><b>NEm (Net Energy for Maintenance):</b> Energy required to maintain zero energy balance (basal metabolism, voluntary activity, and thermal regulation) without net loss or gain of body tissue.</p><p><b>NEp (Net Energy for Production):</b> Portion of net energy utilized above maintenance for productive synthesis (tissue growth, milk, eggs, wool, or draft work).</p>",
      "keyPoints": [
        "NE = Metabolizable Energy - Heat Increment (HI).",
        "NEm: Energy required to sustain life processes in a non-productive state.",
        "NEp: Net energy converted into animal products (milk, meat, egg, wool)."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2022",
        "LUVAS 2023",
        "MAFSU 2021"
      ]
    },
    {
      "id": "u1-qa-d04",
      "type": "define",
      "marks": 2,
      "question": "Define Nutritive Ratio (NR) and differentiate Narrow NR from Wide NR.",
      "topicId": "u1-t17",
      "answer": "<p><b>Nutritive Ratio (NR)</b> is the mathematical ratio between digestible crude protein and digestible non-nitrogenous energy-yielding nutrients in a feed or ration.</p><p><b>Formula:</b> <code>NR = 1 : [ (% TDN - % DCP) / % DCP ]</code> or <code>1 : [ { % DCF + % DNFE + (% DEE × 2.25) } / % DCP ]</code>.</p><ul><li><b>Narrow NR (&lt; 1:5):</b> High protein content relative to energy; suitable for young growing calves, high-yielding dairy cows, and broilers.</li><li><b>Wide NR (&gt; 1:8 to 1:10):</b> Low protein content relative to energy; suitable for adult maintenance, fattening bullocks, and idle work animals.</li></ul>",
      "keyPoints": [
        "Ratio of digestible non-nitrogenous nutrients to digestible crude protein.",
        "Correct formula: 1 : (TDN - DCP) / DCP.",
        "Narrow NR (< 1:5) for growth/lactation; Wide NR (> 1:8) for maintenance."
      ],
      "table": null,
      "pyq": [
        "KVAFSU 2022",
        "GADVASU 2021",
        "NDVSU 2023"
      ]
    },
    {
      "id": "u1-qa-d05",
      "type": "define",
      "marks": 2,
      "question": "Define Gross Energy (GE) and Digestible Energy (DE) with their bomb calorimetry principles.",
      "topicId": "u1-t14",
      "answer": "<p><b>Gross Energy (GE):</b> The total chemical energy released as heat when a unit mass of organic feed matter is completely oxidized to carbon dioxide and water in an adiabatic oxygen bomb calorimeter under 25–30 atmospheres of O<sub>2</sub>. (Average values: Carbohydrates = 4.15 kcal/g, Proteins = 5.65 kcal/g, Fats = 9.40 kcal/g).</p><p><b>Digestible Energy (DE):</b> The gross energy of the consumed feed minus the gross energy lost in the voided feces (<code>DE = GE of feed - GE of feces</code>). It represents the apparent energy absorbed across the gastrointestinal tract.</p>",
      "keyPoints": [
        "GE: Total heat of complete oxidation in bomb calorimeter.",
        "Average caloric values: Carbohydrates 4.15, Protein 5.65, Fats 9.40 kcal/g.",
        "DE = Gross Energy of Feed - Gross Energy of Feces."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "DUVASU 2022",
        "IVRI Annual 2021"
      ]
    },
    {
      "id": "u1-qa-d06",
      "type": "define",
      "marks": 2,
      "question": "Define Starch Equivalent (SE) as formulated by Oskar Kellner.",
      "topicId": "u1-t14",
      "answer": "<p><b>Starch Equivalent (SE):</b> The net energy value of a feedstuff expressed as the number of kilograms of pure digestible starch that produces the same net amount of fat deposition in an adult fattening bullock as 100 kg of the feedstuff fed above maintenance.</p><p>Kellner determined that <b>1 kg of pure digestible starch deposits 248 g of body fat</b> (equivalent to 2356 kcal of net energy). Crude feed values are multiplied by a 'Value Number' (<i>Wertfaktor</i>) to deduct for the mechanical work of chewing fibrous roughages.</p>",
      "keyPoints": [
        "Formulated by Oskar Kellner using respiration trials on bullocks.",
        "Kg of digestible starch equivalent to 100 kg feed in fat-depositing power.",
        "1 kg digestible starch = 248 g fat = 2356 kcal NE."
      ],
      "table": null,
      "pyq": [
        "RAJUVAS 2021",
        "WBUAFS 2020",
        "LUVAS 2022"
      ]
    },
    {
      "id": "u1-qa-d07",
      "type": "define",
      "marks": 2,
      "question": "Define Protein Efficiency Ratio (PER) and Net Protein Utilization (NPU).",
      "topicId": "u1-t16",
      "answer": "<p><b>Protein Efficiency Ratio (PER):</b> A bioassay measuring the live weight gain of growing animals (standardized on weanling rats) per gram of crude protein consumed over a 28-day test period on a 10% CP diet: <code>PER = Body Weight Gain (g) / Protein Consumed (g)</code>.</p><p><b>Net Protein Utilization (NPU):</b> The percentage of dietary protein nitrogen that is retained in the body, which directly reflects the product of Biological Value and True Digestibility: <code>NPU (%) = BV × True Digestibility (%) = (Retained Nitrogen / Nitrogen Intake) × 100</code>.</p>",
      "keyPoints": [
        "PER = Grams of body weight gain per gram of protein consumed.",
        "NPU = Proportion of ingested nitrogen retained = BV × True Digestibility.",
        "Biological assays standardized on growing laboratory animals."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2022",
        "GADVASU 2023",
        "TANUVAS 2021"
      ]
    },
    {
      "id": "u1-qa-d08",
      "type": "define",
      "marks": 2,
      "question": "Define Rumen Degradable Protein (RDP) and Rumen Undegradable Protein (RUP).",
      "topicId": "u1-t06",
      "answer": "<p><b>Rumen Degradable Protein (RDP):</b> The fraction of dietary crude protein that is hydrolyzed and broken down by ruminal microflora into peptides, amino acids, and ammonia (NH<sub>3</sub>), which is utilized by microbes to synthesize microbial crude protein (MCP).</p><p><b>Rumen Undegradable Protein (RUP / Bypass Protein):</b> The fraction of dietary protein that escapes microbial fermentation in the rumen intact, flows to the abomasum and small intestine, and is enzymatically digested by host proteases into absorbable amino acids.</p>",
      "keyPoints": [
        "RDP: Broken down by rumen microbes into NH3 for microbial protein synthesis.",
        "RUP: Escapes rumen fermentation to be enzymatically digested in abomasum/intestine.",
        "Target in high-yielding dairy cattle is typically 60–65% RDP and 35–40% RUP."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "LUVAS 2021",
        "MAFSU 2022"
      ]
    },
    {
      "id": "u1-qa-d09",
      "type": "define",
      "marks": 2,
      "question": "Define Metabolic Water and state its quantitative yield from fat, carbohydrate, and protein.",
      "topicId": "u1-t08",
      "answer": "<p><b>Metabolic Water (Water of Oxidation):</b> Water produced intracellularly within animal tissues as an end-product of nutrient catabolism via oxidative phosphorylation and the electron transport chain.</p><p><b>Yield per 100 g of nutrient oxidized:</b></p><ul><li><b>Fat:</b> 107.1 g of water (highest yield due to high hydrogen-to-oxygen ratio).</li><li><b>Carbohydrate (Starch):</b> 55.5 g of water.</li><li><b>Protein:</b> 41.3 g of water (lowest yield due to energy lost in urea/uric acid excretion).</li></ul>",
      "keyPoints": [
        "Definition: Water synthesized intracellularly via oxidative catabolism.",
        "Fat yield: 107.1 g water / 100 g; Carbohydrate: 55.5 g / 100 g; Protein: 41.3 g / 100 g.",
        "Critical for survival of hibernating, migrating, and desert animals (camel)."
      ],
      "table": null,
      "pyq": [
        "DUVASU 2023",
        "KVAFSU 2020",
        "TANUVAS 2022"
      ]
    },
    {
      "id": "u1-qa-d10",
      "type": "define",
      "marks": 2,
      "question": "Differentiate between Feed Additives and Feed Supplements with examples.",
      "topicId": "u1-t25",
      "answer": "<p><b>Feed Additives:</b> Non-nutritive compounds or micro-ingredients added in minute quantities to feed rations to improve feed quality, feed intake, gut health, nutrient utilization, or animal performance (e.g., probiotics, prebiotics, exogenous enzymes, antioxidants, mold inhibitors, ionophores like monensin).</p><p><b>Feed Supplements:</b> Nutritional ingredients containing high concentrations of one or more essential nutrients added to a basic ration to balance specific nutrient deficits (e.g., mineral mixtures, urea, bone meal, limestone, vitamin premixes, fish meal).</p>",
      "keyPoints": [
        "Additives: Non-nutritive substances improving performance, stability, or health.",
        "Supplements: Nutrient-dense materials correcting dietary deficiencies.",
        "Concrete examples given for both categories."
      ],
      "table": null,
      "pyq": [
        "RAJUVAS 2023",
        "IVRI Annual 2020",
        "GADVASU 2021"
      ]
    },
    {
      "id": "u1-qa-d11",
      "type": "define",
      "marks": 2,
      "question": "Define Anti-Nutritional Factors (ANFs) and give two examples each of heat-labile and heat-stable ANFs.",
      "topicId": "u1-t23",
      "answer": "<p><b>Anti-Nutritional Factors (ANFs):</b> Naturally occurring non-nutrient chemical compounds synthesized by plants as defensive secondary metabolites that interfere with nutrient ingestion, digestion, absorption, or systemic utilization, causing sub-clinical performance drop or overt toxicity.</p><ul><li><b>Heat-Labile ANFs (inactivated by thermal processing):</b> Trypsin inhibitors (Kunitz and Bowman-Birk inhibitors in raw soybean), Lectins/Haemagglutinins, Goitrogens.</li><li><b>Heat-Stable ANFs (resist conventional heat):</b> Condensed Tannins/Polyphenols, Phytates, Gossypol in cottonseed, Mimosine in <i>Leucaena leucocephala</i>.</li></ul>",
      "keyPoints": [
        "Definition: Plant secondary metabolites impairing nutrient bioavailability.",
        "Heat-labile: Trypsin inhibitors, Lectins.",
        "Heat-stable: Tannins, Phytates, Gossypol."
      ],
      "table": null,
      "pyq": [
        "WBUAFS 2022",
        "LUVAS 2020",
        "DUVASU 2021"
      ]
    },
    {
      "id": "u1-qa-d12",
      "type": "define",
      "marks": 2,
      "question": "Define Silage and state the optimum pH and organic acid profile of good-quality silage.",
      "topicId": "u1-t21",
      "answer": "<p><b>Silage:</b> The preserved, succulent, fermented feed product resulting from the anaerobic fermentation of high-moisture green forages (60–70% moisture) by epiphytic lactic acid bacteria (LAB) in an airtight storage structure (silo).</p><p><b>Quality Characteristics of Good Silage:</b></p><ul><li><b>Optimum pH:</b> 3.8 to 4.2.</li><li><b>Lactic acid:</b> 60–80% of total organic acids (3–6% of dry matter).</li><li><b>Butyric acid:</b> &lt; 0.1–0.2% (negligible; presence indicates clostridial spoilage).</li><li><b>Ammoniacal Nitrogen:</b> &lt; 8–10% of total nitrogen.</li></ul>",
      "keyPoints": [
        "Definition: Succulent feed preserved by anaerobic lactic acid fermentation.",
        "Optimum pH: 3.8 to 4.2.",
        "High lactic acid (>60% of total acids) and near-zero butyric acid (<0.2%)."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "TANUVAS 2022",
        "NDVSU 2021"
      ]
    },
    {
      "id": "u1-qa-s01",
      "type": "diff",
      "marks": 5,
      "question": "Differentiate between the Van Soest Detergent System of fibre fractionation and the Weende Crude Fibre method.",
      "topicId": "u1-t05",
      "answer": "<p>The traditional <b>Weende Crude Fibre (CF)</b> method (Henneberg &amp; Stohmann, 1860) treats feed sequentially with 1.25% boiling H<sub>2</sub>SO<sub>4</sub> and 1.25% boiling NaOH. This harsh chemical treatment dissolves up to 60–80% of hemicellulose and variable amounts of lignin, incorrectly shifting them into the Nitrogen-Free Extract (NFE). Consequently, CF seriously underestimates the true structural cell wall content of roughages.</p><p>The <b>Van Soest Detergent Method</b> (Peter Van Soest, 1967) partitions forage carbohydrates cleanly based on nutritional solubility into cell contents and cell wall components using neutral and acid detergents:</p>",
      "keyPoints": [
        "Weende method dissolves hemicellulose and lignin into NFE, causing analytical inaccuracy.",
        "Van Soest partitions into neutral detergent solubles and cell wall constituents.",
        "NDF correlates negatively with voluntary dry matter intake (rumen fill).",
        "ADF correlates negatively with feed digestibility."
      ],
      "table": {
        "title": "Comparison of Van Soest Detergent System vs Weende System",
        "headers": [
          "Analytical Parameter",
          "Weende Crude Fibre Method",
          "Van Soest Detergent Method"
        ],
        "rows": [
          [
            "Reagents Used",
            "1.25% H2SO4 followed by 1.25% NaOH (boiling)",
            "Neutral Detergent (NDS) & Acid Detergent (ADS) solutions"
          ],
          [
            "Fractions Isolated",
            "Single Crude Fibre residue (mostly cellulose)",
            "NDF (Cell wall), ADF (Lignocellulose), ADL (Lignin)"
          ],
          [
            "Hemicellulose Recovery",
            "Partially dissolved and misclassified into NFE",
            "Accurately calculated as: Hemicellulose = NDF - ADF"
          ],
          [
            "Lignin Recovery",
            "Partially solubilized by alkali into NFE",
            "Accurately isolated as Acid Detergent Lignin (ADL)"
          ],
          [
            "Nutritional Value",
            "Crude estimate with poor biological correlation",
            "NDF predicts Voluntary Intake; ADF predicts Digestibility"
          ],
          [
            "Cell Contents",
            "Indiscriminately grouped in NFE and EE",
            "Neutral Detergent Solubles (NDS) are ~98% digestible"
          ]
        ]
      },
      "pyq": [
        "IVRI Annual 2023",
        "GADVASU 2022",
        "RAJUVAS 2021",
        "TANUVAS 2020"
      ]
    },
    {
      "id": "u1-qa-s02",
      "type": "short",
      "marks": 5,
      "question": "Discuss the biochemical synergy between Vitamin E and Selenium, and explain Nutritional Muscular Dystrophy (White Muscle Disease).",
      "topicId": "u1-t10",
      "answer": "<p><b>Biochemical Synergy:</b><br>Vitamin E (d-α-tocopherol) and Selenium (Se) act as complementary, interdependent cellular antioxidant defense systems protecting polyunsaturated fatty acids (PUFA) in biomembranes against peroxidative damage:</p><ul><li><b>Vitamin E:</b> Functions as a fat-soluble, lipid-trapping antioxidant located inside biological lipid membranes (mitochondrial, lysosomal, and plasma membranes). It intercepts peroxy radicals, breaking the chain propagation of lipid peroxidation.</li><li><b>Selenium:</b> Serves as an essential structural cofactor for cytosolic and mitochondrial <b>Glutathione Peroxidase (GSH-Px)</b>. GSH-Px reduces toxic hydrogen peroxide (H<sub>2</sub>O<sub>2</sub>) and lipid hydroperoxides to water and harmless alcohols, destroying free radicals before they can attack membrane phospholipids.</li></ul><p><b>Nutritional Muscular Dystrophy (White Muscle Disease / Stiff Lamb Disease):</b><br>Occurs in young rapidly growing calves and lambs fed diets deficient in Vitamin E and/or Selenium:</p><ul><li><b>Pathogenesis:</b> Free radical accumulation leads to severe peroxidation of sarcoplasmic membranes, loss of cellular Ca<sup>2+</sup> regulation, mitochondrial calcium overload, myofibrillar coagulative necrosis, and calcification.</li><li><b>Lesions &amp; Clinical Signs:</b> Symmetrical bilateral chalky white streaks in skeletal muscles (gluteal, lumbar) and myocardium (particularly right ventricle / Zenker's degeneration). Animals present with stiff gait, recumbency, respiratory distress, and sudden heart failure.</li><li><b>Treatment &amp; Prevention:</b> Combined injection of Sodium Selenite (0.1 mg/kg body wt) and DL-α-tocopheryl acetate (50–100 IU/kg). Supplement maternal ration with 0.1–0.3 ppm Se and 30–50 IU/kg Vitamin E.</li></ul>",
      "keyPoints": [
        "Vitamin E protects membrane lipids; Selenium in Glutathione Peroxidase destroys peroxides in cytosol.",
        "Combined deficiency causes uncontrolled lipid peroxidation and tissue necrosis.",
        "White Muscle Disease lesions: Zenker's degeneration and calcification of myocardium and skeletal muscle.",
        "Prevention: Dietary inclusion of 0.1–0.3 ppm Se and adequate Vitamin E."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2022",
        "IVRI Annual 2021",
        "LUVAS 2023",
        "DUVASU 2020"
      ]
    },
    {
      "id": "u1-qa-s03",
      "type": "short",
      "marks": 5,
      "question": "Describe the chemical principles, standard field protocol, and nutritional benefits of Urea Ammoniation of cereal straws.",
      "topicId": "u1-t20",
      "answer": "<p><b>Chemical Principle:</b><br>Cereal straws (wheat straw, paddy straw) have poor nutritive value due to extensive lignocellulosic ester bonds and low nitrogen content (CP &lt; 3.5%). In the presence of moisture and urease enzyme present in straw microflora, fertilizer urea is hydrolyzed into ammonia gas and carbon dioxide:<br><code>CO(NH2)2 + H2O --(Urease)--> 2 NH3 + CO2</code>.<br>The released ammonia (NH<sub>3</sub>) solubilizes hemicellulose, cleaves ester linkages between lignin and structural carbohydrates, swells the cellulose microfibrils, and provides nitrogen for rumen microbes.</p><p><b>Standard Field Protocol:</b></p><ol><li><b>Proportion:</b> 4 kg fertilizer-grade urea dissolved in 40 litres of clean water per 100 kg dry chopped straw (maintaining ~40% final moisture).</li><li><b>Application:</b> Spray the urea solution uniformly layer-by-layer onto the straw on a clean platform or pit.</li><li><b>Ensilage / Curing:</b> Compact the treated straw tightly and seal airtight with polythene sheeting or mud plaster.</li><li><b>Incubation Period:</b> Keep sealed for 21 days in tropical summer conditions (or 28–35 days in winter).</li><li><b>Feeding:</b> Aerate for 2–3 hours before feeding to dissipate free pungent ammonia fumes.</li></ol><p><b>Nutritional Improvements:</b></p><ul><li><b>Crude Protein:</b> Boosted from 3.0–3.5% up to <b>7.5–9.0%</b> (more than doubled).</li><li><b>TDN (Energy):</b> Increased by <b>10–12 percentage units</b> (from ~40% to 50–52%).</li><li><b>Voluntary Dry Matter Intake:</b> Enhanced by <b>25–35%</b> due to accelerated rumen cellulolysis and reduced gut retention time.</li></ul>",
      "keyPoints": [
        "Formula: 4 kg urea + 40 L water per 100 kg straw (~40% moisture).",
        "Airtight sealing for 21 days in summer (or 28 days in winter).",
        "Chemical action: Cleaves lignin-hemicellulose ester bonds and swells cellulose.",
        "Doubles crude protein (from 3.5% to ~8%) and increases TDN by 10–12%."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "RAJUVAS 2022",
        "GADVASU 2021",
        "WBUAFS 2021"
      ]
    },
    {
      "id": "u1-qa-s04",
      "type": "short",
      "marks": 5,
      "question": "Explain the hormonal regulation of Calcium and Phosphorus homeostasis in dairy cattle.",
      "topicId": "u1-t09",
      "answer": "<p>Blood serum calcium (9–11 mg/dL) and inorganic phosphorus (4–7 mg/dL) levels are maintained under tight endocrine control through the coordinated actions of three hormones acting on three primary target organs (bone, kidneys, and gastrointestinal tract):</p><ul><li><b>1. Parathyroid Hormone (PTH):</b><br>Secreted by chief cells of parathyroid glands in response to <b>hypocalcemia</b>.<br>- <i>Bone:</i> Stimulates osteoclasts to increase bone resorption, releasing Ca<sup>2+</sup> and PO<sub>4</sub><sup>3-</sup> into circulation.<br>- <i>Kidney:</i> Enhances tubular reabsorption of Ca<sup>2+</sup>, promotes urinary excretion of phosphorus (phosphaturia), and induces renal 1-α-hydroxylase enzyme to activate Vitamin D.</li><li><b>2. 1,25-Dihydroxycholecalciferol [1,25-(OH)2D3 / Calcitriol]:</b><br>Activated form of Vitamin D synthesized in renal tubules.<br>- <i>Intestine:</i> Induces synthesis of Calbindin-D9k (calcium-binding protein) in enterocytes, greatly stimulating active intestinal absorption of both Calcium and Phosphorus.<br>- <i>Bone:</i> Acts synergistically with PTH to stimulate osteoclastic bone remodeling.</li><li><b>3. Calcitonin:</b><br>Secreted by parafollicular C-cells of the thyroid gland in response to <b>hypercalcemia</b>.<br>- <i>Bone:</i> Inhibits osteoclasts, halting bone resorption.<br>- <i>Kidney:</i> Promotes renal excretion of calcium and phosphate, rapidly returning serum calcium to physiological baseline.</li></ul><p><b>Dietary Ideal:</b> An optimum dietary Ca:P ratio of <b>1.5:1 to 2.0:1</b> is vital. Excessive phosphorus impairs calcium absorption by precipitating insoluble calcium phosphate salts.</p>",
      "keyPoints": [
        "Three hormones: PTH (elevates Ca), Calcitriol (enhances intestinal absorption), Calcitonin (lowers Ca).",
        "Three target organs: Bone (resorption), Kidney (reabsorption/activation), Intestine (absorption).",
        "Calbindin-D9k synthesis mediated by active Vitamin D.",
        "Optimum dietary Ca:P ratio is 1.5:1 to 2:1."
      ],
      "table": null,
      "pyq": [
        "GADVASU 2023",
        "TANUVAS 2021",
        "IVRI Annual 2020",
        "KVAFSU 2022"
      ]
    },
    {
      "id": "u1-qa-s05",
      "type": "short",
      "marks": 5,
      "question": "Describe the major anti-nutritional factors found in common oilseed cakes and their detoxification.",
      "topicId": "u1-t23",
      "answer": "<p>Oilseed cakes are rich protein sources, but their utilization is constrained by specific toxic and anti-nutritional factors:</p><ul><li><b>1. Cottonseed Cake — Gossypol:</b><br>- <i>Toxin:</i> Polyphenolic binaphthyl pigment existing in 'free' (toxic) and 'bound' (non-toxic) forms.<br>- <i>Toxicity:</i> Monogastrics and young ruminants suffer cardiac toxicity, erythrocyte fragility (hemolysis), labored breathing, and impaired male spermatogenesis.<br>- <i>Detoxification:</i> Addition of <b>Ferrous Sulfate (FeSO4)</b> in a 1:1 weight ratio with free gossypol forms an unabsorbable iron-gossypol chelate excreted in feces.</li><li><b>2. Mustard / Rapeseed Cake — Glucosinolates &amp; Erucic Acid:</b><br>- <i>Toxin:</i> Glucosinolates hydrolyzed by endogenous <i>myrosinase</i> enzyme into pungent goitrogenic thiocyanates, isothiocyanates, and nitriles.<br>- <i>Toxicity:</i> Causes thyroid hypertrophy (goitre), depressed iodine uptake, liver damage, and poor palatability.<br>- <i>Detoxification:</i> Water soaking, moisture-heat treatment (deactivates myrosinase), or treatment with 1% copper sulfate.</li><li><b>3. Soybean Meal — Trypsin Inhibitors &amp; Lectins:</b><br>- <i>Toxin:</i> Kunitz and Bowman-Birk protease inhibitors and phytohaemagglutinins.<br>- <i>Toxicity:</i> Irreversibly binds intestinal trypsin and chymotrypsin, leading to poor protein digestibility and compensatory pancreatic hypertrophy.<br>- <i>Detoxification:</i> Readily destroyed by <b>moist heat processing</b> (toasting / autoclaving at 100°C for 20–30 minutes).</li></ul>",
      "keyPoints": [
        "Cottonseed: Free gossypol causes cardiotoxicity; detoxified by FeSO4 (1:1 ratio).",
        "Mustard cake: Glucosinolates cause goitre; detoxified by heat inactivation of myrosinase.",
        "Soybean: Trypsin inhibitors cause pancreatic hypertrophy; inactivated by moist toasting."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2022",
        "LUVAS 2021",
        "RAJUVAS 2023",
        "DUVASU 2020"
      ]
    },
    {
      "id": "u1-qa-s06",
      "type": "short",
      "marks": 5,
      "question": "Detail the biochemical phases and microbial fermentation dynamics of Silage Making.",
      "topicId": "u1-t21",
      "answer": "<p>Ensilage proceeds through four distinct microbiological and biochemical phases under ideal management:</p><ul><li><b>Phase 1: Aerobic Respiration (Days 0–1):</b><br>Plant enzymes and aerobic epiphytic microbes utilize trapped oxygen to oxidize soluble carbohydrates into CO<sub>2</sub>, water, and heat. Respiration continues until O<sub>2</sub> is exhausted. Rapid filling and tight compaction minimize dry matter loss and overheating.</li><li><b>Phase 2: Anaerobic Acetic Acid Phase (Days 1–3):</b><br>With oxygen depleted, facultative anaerobic enterobacteria ferment water-soluble carbohydrates to acetic acid. The pH declines from 6.0–6.5 to ~5.0. Enterobacteria cease activity as acidity increases.</li><li><b>Phase 3: Lactic Acid Proliferation (Days 3–4):</b><br>Lactic acid bacteria (LAB) such as <i>Streptococcus bovis</i> and <i>Leuconostoc</i> initiate lactic fermentation, followed by acid-tolerant homofermentative lactobacilli (<i>Lactobacillus plantarum</i>).</li><li><b>Phase 4: Stable Lactic Fermentation Phase (Days 4–21):</b><br>Homofermentative LAB vigorously convert hexose sugars exclusively into <b>L-lactic acid</b>. The pH rapidly plunges to <b>3.8–4.2</b>. At this high acidity, all bacterial enzymatic activity (including spoilage clostridia) is arrested. The forage is chemically stabilized and preserves indefinitely if maintained under airtight conditions.</li></ul><p><b>Spoilage Warning:</b> If sealing is defective or initial moisture &gt;75%, <i>Clostridium butyricum</i> proliferates, converting lactic acid into foul-smelling butyric acid and decomposing proteins into toxic amines (cadaverine, putrescine), elevating pH &gt;5.0.</p>",
      "keyPoints": [
        "Phase 1: Aerobic respiration exhausting trapped oxygen.",
        "Phase 2: Acetic acid production by enterobacteria dropping pH to ~5.0.",
        "Phase 3 & 4: Dominance of homofermentative LAB producing lactic acid.",
        "Target endpoint: pH 3.8–4.2 arresting all microbial decomposition."
      ],
      "table": null,
      "pyq": [
        "DUVASU 2022",
        "IVRI Annual 2021",
        "TANUVAS 2023",
        "MAFSU 2020"
      ]
    },
    {
      "id": "u1-qa-s07",
      "type": "short",
      "marks": 5,
      "question": "Enumerate the modern processing methods of concentrate feeds and their nutritional advantages.",
      "topicId": "u1-t19",
      "answer": "<p>Concentrate feed processing alters the physical and chemical state of feedstuffs to enhance voluntary intake, improve nutrient digestibility, and maximize feed conversion efficiency:</p><ul><li><b>1. Pelleting:</b><br>Ground mash is conditioned with steam (80–85°C) and compressed through metal dies. <br><i>Advantages:</i> Prevents selective ingredient sorting by animals, reduces dustiness, increases bulk density, thermally inactivates salmonella and heat-labile ANFs, and enhances intake by 10–15%.</li><li><b>2. Steam Flaking:</b><br>Grains (maize, sorghum) are exposed to low-pressure steam for 20–30 minutes followed by passage between heavy corrugated rollers to create flat flakes.<br><i>Advantages:</i> Completely gelatinizes starch granules (disrupting the protective protein matrix), drastically accelerating ruminal and intestinal enzymatic amylolysis.</li><li><b>3. Extrusion:</b><br>Subjecting feed mixture to high temperature, high pressure, and mechanical shear in an extruder barrel, followed by sudden atmospheric expansion.<br><i>Advantages:</i> 100% starch gelatinization, full destruction of antinutritional trypsin inhibitors in full-fat soya, and ideal for dog/cat pet kibble and floating fish feed.</li><li><b>4. Micronization:</b><br>Exposing grains to infrared radiant heat generated by gas burners followed by rolling.<br><i>Advantages:</i> Rapid intra-molecular heating ruptures starch granules without moisture addition, optimizing energy availability for young calves and pigs.</li></ul>",
      "keyPoints": [
        "Pelleting: Steam conditioning and compaction preventing feed selection and reducing wastage.",
        "Steam flaking: Heat and rolling to gelatinize starch and improve digestibility.",
        "Extrusion: High-temperature short-time shear producing expanded, pasteurized diets.",
        "Nutritional benefit: Inactivates ANFs, gelatinizes starch, and improves FCR."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "GADVASU 2020",
        "LUVAS 2022",
        "KVAFSU 2021"
      ]
    },
    {
      "id": "u1-qa-s08",
      "type": "short",
      "marks": 5,
      "question": "Describe the clinical signs and pathology of trace mineral deficiencies: Parakeratosis, Swayback, and Perosis.",
      "topicId": "u1-t10",
      "answer": "<p>Trace mineral deficiencies produce classic clinicopathological syndromes in specific livestock species:</p><ul><li><b>1. Parakeratosis in Swine (Zinc Deficiency):</b><br>- <i>Etiology:</i> Absolute dietary Zinc deficiency (&lt;50 ppm) or conditioned deficiency caused by excessive dietary Calcium and high phytate levels, which form unabsorbable Ca-Phytate-Zn complexes.<br>- <i>Pathology &amp; Signs:</i> Impaired keratinization of epidermal cells with retention of pyknotic nuclei in the stratum corneum. Manifests as erythematous macules progressing into thick, fissured, crusted, non-pruritic scabs over the snout, ears, hocks, and abdomen, accompanied by growth retardation.</li><li><b>2. Swayback / Enzootic Ataxia in Lambs (Copper Deficiency):</b><br>- <i>Etiology:</i> Congenital or neonatal Copper deficiency, frequently induced by high levels of dietary Molybdenum and Sulfur forming insoluble <i>thiomolybdates</i> in the rumen.<br>- <i>Pathology &amp; Signs:</i> Defective <i>cytochrome oxidase</i> activity leads to failed myelinogenesis and demyelination of the cerebral cortex and spinal cord motor tracts. Lambs show staggering incoordination, muscular weakness in hindquarters, spastic paralysis, and inability to suckle.</li><li><b>3. Perosis / Slipped Tendon in Poultry (Manganese Deficiency):</b><br>- <i>Etiology:</i> Deficiency of Manganese (Mn &lt; 30 ppm), exacerbated by excess dietary Ca/P or secondary deficiency of Choline and Biotin.<br>- <i>Pathology &amp; Signs:</i> Defective glycosaminoglycan synthesis in chondrocytes leads to failure of epiphyseal cartilage maturation. The distal end of the tibiotarsus and proximal tarsometatarsus become enlarged and deformed, causing the <b>gastrocnemius tendon to slip laterally from its condyle</b>. Birds become completely crippled.</li></ul>",
      "keyPoints": [
        "Parakeratosis: Zinc deficiency in pigs causing hyperkeratinized fissured crusts.",
        "Swayback: Copper/Molybdenum imbalance in lambs causing demyelination of spinal tracts.",
        "Perosis: Manganese deficiency in chicks causing slipped gastrocnemius tendon."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2022",
        "RAJUVAS 2021",
        "TANUVAS 2023",
        "DUVASU 2021"
      ]
    },
    {
      "id": "u1-qa-l01",
      "type": "long",
      "marks": 12,
      "question": "Give a detailed account of Energy Partitioning in farm animals. Discuss direct vs indirect calorimetry and the Carbon-Nitrogen balance technique.",
      "topicId": "u1-t14",
      "answer": "<p>Energy is the quantitative capacity to perform biological work. Unlike individual chemical nutrients, energy is a property of organic matter (carbohydrates, fats, and proteins). Understanding energy partitioning is essential to predict animal performance and formulate balanced rations.</p><h3>1. The Energy Partitioning Flow Scheme</h3><pre>GROSS ENERGY (GE)\n  │\n  ├── Minus: Fecal Energy (FE) [Largest single loss: 20-50%]\n  ▼\nDIGESTIBLE ENERGY (DE)\n  │\n  ├── Minus: Urinary Energy (UE) [2-5% in monogastrics, 4-8% in ruminants]\n  ├── Minus: Gaseous Energy (Combustible Gases: Methane, CH4) [6-10% in ruminants]\n  ▼\nMETABOLIZABLE ENERGY (ME)\n  │\n  ├── Minus: Heat Increment (HI) [Heat of nutrient metabolism + Heat of fermentation]\n  ▼\nNET ENERGY (NE)\n  ├── Net Energy for Maintenance (NEm): Basal metabolism, thermal regulation, activity\n  └── Net Energy for Production (NEp): Milk, meat, wool, egg, draft work</pre><ul><li><b>Fecal Energy:</b> Represents undigested feed residue plus metabolic fecal energy (sloughed intestinal cells, bile pigments, digestive enzymes, bacterial mass).</li><li><b>Urinary Energy:</b> Chemical energy lost in incompletely oxidized nitrogenous end-products (urea in mammals, uric acid in poultry).</li><li><b>Gaseous Energy:</b> Combustible gases produced by enteric microbial fermentation, primarily methane (CH<sub>4</sub> = 13.34 kcal/g) and trace hydrogen.</li><li><b>Heat Increment (HI / Specific Dynamic Action):</b> The heat production of a fed animal above that of a fasting animal under thermo-neutral conditions. It comprises: (a) heat of microbial fermentation, (b) heat of digestive mastication and propulsion, and (c) heat of nutrient assimilation and biochemical synthesis.</li></ul><h3>2. Methods of Measuring Animal Heat Production (Calorimetry)</h3><h4>A. Direct Calorimetry</h4><p>Measures the actual physical heat released by the animal's body directly inside an insulated chamber.</p><ul><li><b>Types:</b> Water flow calorimeter (heat measured by water temperature rise: <code>Heat = Mass of water × Specific Heat × Temp rise</code>), latent heat loss measured via condensation traps, or gradient-layer calorimeters.</li><li><i>Limitations:</i> Mechanically complex, costly, cumbersome, and restrictive of normal animal behavioral movements.</li></ul><h4>B. Indirect Calorimetry</h4><p>Determines heat production indirectly by calculating the respiratory exchange of respiratory gases (Oxygen consumed, Carbon dioxide produced, and Methane exhaled), based on the principle that all metabolic heat results from biological oxidations:</p><ul><li><b>Open-Circuit Respiration Chamber:</b> Animal inhales fresh ambient outdoor air; total volume of expired air is metered and continuously analyzed for O<sub>2</sub>, CO<sub>2</sub>, and CH<sub>4</sub>.</li><li><b>Brouwer's Standard Equation (1965):</b><br><code>Heat Production (kcal) = 3.866 × O2 (L) + 1.200 × CO2 (L) - 0.518 × CH4 (L) - 1.431 × Urinary N (g)</code></li><li><b>Respiratory Quotient (RQ):</b> Ratio of CO<sub>2</sub> produced to O<sub>2</sub> consumed (<code>RQ = CO2 / O2</code>). Carbohydrate oxidation RQ = 1.0; Fat RQ = 0.70; Protein RQ = 0.81.</li></ul><h4>C. Carbon-Nitrogen Balance Technique</h4><p>Measures the exact intake and excretion of Carbon and Nitrogen over a test period in a respiration chamber:</p><ul><li><b>Nitrogen Balance:</b> Determines protein retention: <code>Protein Stored (g) = N Balance (g) × 6.25</code>.</li><li><b>Carbon Balance:</b> Protein contains 52.54% Carbon. The carbon stored as protein is deducted from total carbon balance: <code>Fat Carbon (g) = Total C Balance - (Stored Protein × 0.5254)</code>. Since body fat contains 76.5% Carbon: <code>Fat Stored (g) = Fat Carbon / 0.765</code>.</li><li><b>Total Energy Retained (RE):</b> <code>RE (kcal) = [Stored Protein (g) × 5.65] + [Stored Fat (g) × 9.40]</code>.</li><li><b>Heat Production:</b> Calculated by difference: <code>Heat Production = ME Intake - Retained Energy (RE)</code>.</li></ul>",
      "keyPoints": [
        "Complete flow diagram: GE -> DE -> ME -> NE (NEm and NEp).",
        "Definitions of Fecal, Urinary, Methane, and Heat Increment losses.",
        "Direct calorimetry measures physical heat directly; indirect measures respiratory gas exchange.",
        "Brouwer's formula stated correctly.",
        "Carbon-Nitrogen balance calculation: determines protein and fat retention to deduce heat production."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "GADVASU 2022",
        "TANUVAS 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u1-qa-l02",
      "type": "long",
      "marks": 12,
      "question": "Comprehensive evaluation of protein quality in ruminants and monogastrics: Discuss Chemical Score, BV, PER, NPU, and the modern RDP-RUP / Metabolizable Protein (MP) system.",
      "topicId": "u1-t06",
      "answer": "<p>Protein quality refers to the ability of a dietary protein to provide the required proportions and quantities of physiologically essential amino acids to animal tissues. Evaluation techniques differ fundamentally between monogastric animals and ruminants due to ruminal microbial protein transformation.</p><h3>1. Classical Evaluation Methods for Monogastrics</h3><ul><li><b>A. Chemical Score (A/E Ratio / Amino Acid Score):</b><br>Compares the content of each essential amino acid in the test protein against that of an ideal reference protein (egg protein or milk protein):<br><code>Chemical Score = [ mg of amino acid per g test protein / mg of same amino acid per g reference protein ] × 100</code>.<br>The amino acid showing the lowest percentage is designated the <b>First Limiting Amino Acid</b>, and its score represents the Chemical Score of the protein.</li><li><b>B. Biological Value (BV):</b><br>Measures the efficiency of absorbed nitrogen retention in the body using the Thomas-Mitchell nitrogen balance technique: <code>BV (%) = [ Retained N / Absorbed N ] × 100</code>. Values range from 90–95% for whole egg to 60–70% for cereal grains.</li><li><b>C. Protein Efficiency Ratio (PER):</b><br>Standardized biological growth assay using young weanling rats: <code>PER = Weight Gain (g) / Protein Consumed (g)</code>. Widely used in industry but assumes all weight gain is protein tissue without accounting for maintenance needs.</li><li><b>D. Net Protein Utilization (NPU):</b><br>Calculated as: <code>NPU (%) = BV × True Digestibility (%) = (Retained N / Ingested N) × 100</code>. Directly evaluates the proportion of consumed dietary nitrogen retained by the body.</li></ul><h3>2. Modern Protein Evaluation in Ruminants (The Metabolizable Protein System)</h3><p>In ruminants, classical measures like Crude Protein (CP = N × 6.25) and Digestible Crude Protein (DCP) are fundamentally flawed because ingested protein is drastically modified by rumen microflora. The modern <b>Metabolizable Protein (MP)</b> system (NRC 2001, ARC, AFRC) partitions dietary protein into two components:</p><ul><li><b>A. Rumen Degradable Protein (RDP):</b><br>Hydrolyzed in the rumen by microbial proteases and deaminases into peptides, free amino acids, and ammonia (NH<sub>3</sub>). Rumen microbes utilize NH<sub>3</sub>, carbon skeletons (from carbohydrate fermentation), and ATP to synthesize <b>Microbial Crude Protein (MCP)</b>.<br>- <i>Efficiency of Synthesis:</i> Under balanced conditions, rumen microbes produce approximately <b>130 g of microbial CP per kg of Total Digestible Nutrients (TDN)</b> or 30 g MCP / kg Fermentable Organic Matter (FOM).<br>- <i>Quality of MCP:</i> Microbial protein has an exceptionally high biological value (BV ≈ 80–85%) with an amino acid profile remarkably similar to animal tissue and milk.</li><li><b>B. Rumen Undegradable Protein (RUP / Bypass Protein):</b><br>The dietary protein fraction that resists ruminal fermentation, passing intact into the abomasum and duodenum where it undergoes host acid-pepsin and pancreatic proteolysis into amino acids.</li><li><b>C. Metabolizable Protein (MP) Concept:</b><br>MP is the total quantity of true, digestible amino acids absorbed by the animal's post-ruminal small intestine. It consists of two components:<br><code>Total MP = (Digestible Microbial True Protein) + (Digestible RUP Amino Acids)</code>.<br>- Microbial crude protein is ~80% true protein and ~20% nucleic acids; true microbial protein is ~80% digestible.<br>- RUP true protein digestibility ranges from 70–90% depending on the feed source.</li></ul><h3>3. Comparative Summary Matrix</h3><p>While monogastrics require specific dietary preformed essential amino acids (Lysine, Methionine, Threonine), ruminants can thrive on inferior non-protein nitrogen (urea) and poor-quality proteins because rumen microbes synthesize a high-quality amino acid mixture. However, in high-yielding dairy cows (&gt;15–20 kg milk/day), microbial synthesis alone cannot meet the massive amino acid demand for milk casein; thus, 35–40% high-quality dietary bypass protein (RUP) is mandatory.</p>",
      "keyPoints": [
        "Monogastric systems: Chemical score, First limiting amino acid, BV, PER, and NPU.",
        "Ruminant paradigm shift: CP and DCP superseded by Metabolizable Protein (MP) system.",
        "RDP vs RUP mechanisms explained in depth.",
        "MCP synthesis kinetics: ~130 g MCP per kg TDN; BV of microbial protein 80–85%.",
        "Equation: Total MP = Digestible Microbial True Protein + Digestible RUP."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "LUVAS 2020"
      ]
    },
    {
      "id": "u1-qa-l03",
      "type": "long",
      "marks": 12,
      "question": "Give an exhaustive account of the Fat-Soluble Vitamins (A, D, E, K): Chemical nature, physiological functions, specific deficiency syndromes, and hypervitaminosis in livestock and poultry.",
      "topicId": "u1-t11",
      "answer": "<p>Fat-soluble vitamins (A, D, E, and K) are isoprenoid lipid compounds that are digested and absorbed in the intestine in association with dietary fats and bile salts, and are capable of being stored in substantial quantities in animal tissues (predominantly the liver and adipose tissue).</p><h3>1. Vitamin A (Retinol / β-Carotene)</h3><ul><li><b>Chemistry:</b> Provitamin β-carotene (found in green plants) is cleaved in intestinal mucosa by β-carotene-15,15'-dioxygenase into retinaldehyde and reduced to retinol. (Cats lack this enzyme).</li><li><b>Functions:</b> Rhodopsin synthesis in retinal rods for scotopic vision; maintenance of differentiated epithelial architecture (glycoprotein synthesis); osteoblastic/osteoclastic bone remodeling; immune competence.</li><li><b>Deficiency Signs:</b><br>- <i>Vision:</i> Nyctalopia (night blindness), xerophthalmia, corneal ulceration, and constriction of the optic nerve canal causing permanent blindness in growing calves.<br>- <i>Epithelium:</i> Squamous metaplasia of columnar mucous membranes leading to secondary respiratory infections, diarrhea, and urolithiasis.<br>- <i>Reproduction:</i> Infertility, embryonic death, abortion, retained placenta, and birth of blind/weak calves.</li><li><b>Hypervitaminosis A:</b> Skeletal exostoses, bone fragility, congenital cleft palate.</li></ul><h3>2. Vitamin D (Cholecalciferol - D3 / Ergocalciferol - D2)</h3><ul><li><b>Chemistry:</b> 7-dehydrocholesterol in skin is photolyzed by UV light to Cholecalciferol (D<sub>3</sub>), hydroxylated in liver to 25-(OH)D<sub>3</sub>, and finally activated in renal tubules to 1,25-(OH)<sub>2</sub>D<sub>3</sub> (Calcitriol). Poultry cannot utilize D<sub>2</sub> effectively.</li><li><b>Functions:</b> Active intestinal absorption of Calcium and Phosphorus by inducing Calbindin-D synthesis; bone mineralization.</li><li><b>Deficiency Signs:</b><br>- <b>Rickets</b> in young growing animals: Defective endochondral ossification, swollen epiphyseal joints, rosary bead ribs, bow legs, rubbery bones.<br>- <b>Osteomalacia</b> in adult animals: Demineralization of mature cortical bone, bone softening, pelvic fractures.<br>- <i>Poultry:</i> Soft, rubbery beaks and thin-shelled/shell-less eggs.</li><li><b>Hypervitaminosis D:</b> Extensive metastatic calcification of soft tissues (aorta, kidneys, lungs).</li></ul><h3>3. Vitamin E (α-Tocopherol)</h3><ul><li><b>Chemistry:</b> D-α-tocopherol is the most biologically active isomer; functions as a lipid-soluble chain-breaking antioxidant in cell membranes.</li><li><b>Functions:</b> Protects membrane polyunsaturated fatty acids from peroxidative breakdown; maintains capillary integrity; supports fertility.</li><li><b>Deficiency Signs:</b><br>- <i>Ruminants:</i> Nutritional Muscular Dystrophy (White Muscle Disease / Stiff Lamb Disease) showing Zenker's degeneration of myocardium and skeletal muscle.<br>- <i>Poultry:</i> Crazy Chick Disease (Nutritional Encephalomalacia: ataxia, head retraction, cerebellar hemorrhage), Exudative Diathesis (subcutaneous green oedema), and Muscular Dystrophy.<br>- <i>Swine:</i> Mulberry Heart Disease (acute hemorrhagic cardiomyopathy) and Hepatosis Dietetica.</li></ul><h3>4. Vitamin K (Phylloquinone - K1 / Menaquinone - K2 / Menadione - K3)</h3><ul><li><b>Chemistry:</b> K<sub>1</sub> (plants), K<sub>2</sub> (microbial synthesis in gut/rumen), K<sub>3</sub> (synthetic, water-soluble).</li><li><b>Functions:</b> Essential cofactor for microsomal <i>γ-glutamyl carboxylase</i> which converts glutamic acid residues to γ-carboxyglutamic acid (Gla) on blood clotting factors <b>II (Prothrombin), VII, IX, and X</b>, enabling them to bind Ca<sup>2+</sup> and initiate the coagulation cascade.</li><li><b>Deficiency Signs:</b> Prolonged blood clotting time, subcutaneous and internal hemorrhages, hematomas, and fatal exsanguination. Induced by Sweet Clover Poisoning (dicoumarol antagonist) or sulfa drug administration destroying intestinal microflora.</li></ul>",
      "keyPoints": [
        "Vitamin A: Retinol vs β-carotene; night blindness, epithelial metaplasia, optic nerve constriction.",
        "Vitamin D: Activation pathway (Skin -> Liver -> Kidney); Rickets vs Osteomalacia.",
        "Vitamin E: Antioxidant; White Muscle Disease, Encephalomalacia, Mulberry Heart.",
        "Vitamin K: γ-carboxylation of clotting factors II, VII, IX, X; Sweet clover dicoumarol toxicity."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "DUVASU 2021",
        "RAJUVAS 2022",
        "GADVASU 2020"
      ]
    },
    {
      "id": "u1-qa-l04",
      "type": "long",
      "marks": 12,
      "question": "Provide a comprehensive comparative treatise on Forage Conservation: Silage Making vs Hay Making. Include suitable crops, biochemical changes, conservation losses, and quality evaluation criteria.",
      "topicId": "u1-t21",
      "answer": "<p>Forage conservation is the essential practice of preserving surplus green fodder produced during flush seasons (monsoon/spring) to sustain livestock during severe seasonal fodder deficits (summer and winter). The two primary technologies are <b>Silage Making</b> (succulent anaerobic fermentation) and <b>Hay Making</b> (controlled dehydration).</p><h3>1. Comparative Analysis Matrix</h3>",
      "keyPoints": [
        "Suitable crops: Silage requires high soluble sugars (maize/sorghum); Hay requires thin stems and high protein (berseem/lucerne).",
        "Biochemical mechanisms: Anaerobic lactic acid fermentation vs dehydration below 15% moisture.",
        "Losses: Fermentation/seepage losses in silage vs shattering/bleaching/leaching losses in hay.",
        "Quality scoring: Flieg's score for silage; sensory and moisture tests for hay."
      ],
      "table": {
        "title": "Comprehensive Comparison of Silage Making vs Hay Making",
        "headers": [
          "Evaluation Criteria",
          "Silage Making (Ensilage)",
          "Hay Making"
        ],
        "rows": [
          [
            "Ideal Crop Types",
            "Thick-stemmed crops rich in Water Soluble Carbohydrates: Maize, Sorghum, Pearl Millet",
            "Thin-stemmed, leafy leguminous crops rich in protein: Berseem, Lucerne, Oats"
          ],
          [
            "Harvesting Stage",
            "Milking to dough stage (optimal sugar and dry matter content)",
            "Pre-flowering to early bloom stage (highest leaf-to-stem ratio)"
          ],
          [
            "Moisture Dynamics",
            "Ensiled at 65–70% moisture; requires no weather dependence",
            "Dehydrated from 80–85% down to safe moisture < 15% (weather-dependent)"
          ],
          [
            "Preservation Principle",
            "Controlled anaerobic fermentation by lactic acid bacteria (LAB) yielding pH 3.8–4.2",
            "Rapid desiccation halting cellular respiration and inhibiting bacterial/fungal growth"
          ],
          [
            "Types of Field Losses",
            "Seepage loss, gaseous fermentation loss, and surface aerobic spoilage",
            "Shattering of brittle leaves (loss of carotene/CP), bleaching (UV loss), rain leaching"
          ],
          [
            "Carotene Retention",
            "High retention (up to 80% carotene preserved due to anaerobic state)",
            "Substantial carotene loss (up to 75–90% destroyed by solar photolysis)"
          ],
          [
            "Storage Requirements",
            "Airtight silo pit, bunker, or wrapped plastic bale (anaerobiosis crucial)",
            "Elevated, well-ventilated dry barn or covered stack protected from rain"
          ],
          [
            "Quality Index",
            "Flieg's Score (based on pH, lactic vs butyric acid ratio)",
            "Sensory score: green color, sweet aroma, leafy texture, absence of mold"
          ]
        ]
      },
      "pyq": [
        "IVRI Annual 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "WBUAFS 2020"
      ]
    },
    {
      "id": "u1-qa-l05",
      "type": "long",
      "marks": 12,
      "question": "Discuss Toxic Principles and Anti-Nutritional Factors (ANFs) in livestock feeds: Classification, mode of toxicity, pathology, and practical detoxification techniques.",
      "topicId": "u1-t23",
      "answer": "<p>Anti-nutritional factors (ANFs) are diverse chemical substances synthesized by plants as natural chemical warfare agents to deter herbivorous grazing and insect pests. When ingested by livestock, they depress feed intake, impair digestive enzyme activity, damage mucosal surfaces, or induce lethal toxicity.</p><h3>1. Classification of Major Anti-Nutritional Factors</h3><ul><li><b>A. Protease Inhibitors:</b> Kunitz and Bowman-Birk trypsin/chymotrypsin inhibitors in raw soybean meal.</li><li><b>B. Phytohaemagglutinins (Lectins):</b> Glycoproteins in kidney beans and castor seeds (ricin) that bind mucosal enterocytes.</li><li><b>C. Polyphenolic Compounds:</b> Condensed and hydrolysable tannins in salseed meal, sorghum grains, and tree leaves.</li><li><b>D. Phytates (Inositol Hexaphosphate):</b> Chelating agents in cereal grains and oilseed by-products.</li><li><b>E. Cyanogenic Glycosides:</b> Dhurrin in immature sorghum (jowar), Linamarin in linseed meal, and Amygdalin in cassava.</li><li><b>F. Alkaloids and Specific Toxins:</b> Free Gossypol in cottonseed, Mimosine in <i>Leucaena leucocephala</i>, Oxalates in hybrid napier grass.</li><li><b>G. Mycotoxins:</b> Aflatoxins (<i>Aspergillus flavus</i>), Ochratoxins, T-2 toxin, and Zearalenone.</li></ul><h3>2. Modes of Action and Clinical Pathology</h3><ul><li><b>Cyanogenic Glycosides (HCN / Prussic Acid Toxicity):</b><br>- Immature sorghum stressed by drought contains the glucoside <i>dhurrin</i>, hydrolyzed by plant <i>linamarase</i> upon mastication into lethal free Hydrogen Cyanide (HCN).<br>- <i>Pathology:</i> Cyanide binds ferric (Fe<sup>3+</sup>) iron of mitochondrial <b>Cytochrome Oxidase</b>, halting cellular aerobic respiration. Blood remains fully oxygenated, causing bright cherry-red mucous membranes, severe respiratory asphyxiation, tremors, and rapid death within 15–30 minutes.<br>- <i>Antidote:</i> IV injection of Sodium Nitrite (3 g) followed by Sodium Thiosulfate (15 g in 200 mL water) to form non-toxic sodium thiocyanate.</li><li><b>Tannins:</b><br>- Form stable, indigestible cross-linkages with dietary proteins and digestive proteases; astringent taste reduces feed intake; damages ruminal epithelium.</li><li><b>Mimosine (Subabul):</b><br>- Non-protein amino acid in <i>Leucaena</i> hydrolyzed in the rumen to 3,4-dihydroxypyridine (3,4-DHP), a potent goitrogen causing alopecia, thyroid hyperplasia, and poor growth. Controlled by inoculating ruminants with the rumen bacterium <i>Synergistes jonesii</i>.</li><li><b>Aflatoxins (Aflatoxin B1):</b><br>- Metabolized by liver cytochrome P450 into 8,9-epoxide, binding DNA and inducing hepatic centrilobular necrosis, biliary hyperplasia, coagulopathy, immune suppression, and excretion of carcinogenic Aflatoxin M1 in dairy milk.</li></ul><h3>3. Practical Physicochemical Detoxification Methods</h3><ul><li><b>Thermal Processing:</b> Autoclaving, extrusion, and toasting completely denature heat-labile protease inhibitors and lectins in soybean.</li><li><b>Chemical Ammoniation:</b> Treatment of straw or oilseed cakes with 2–4% aqueous ammonia or urea destroys aflatoxins and detoxifies glucosinolates.</li><li><b>Mineral Supplementation:</b> Inclusion of Ferrous Sulfate (1:1 Fe to free gossypol) detoxifies cottonseed; adding 0.5–1.0% dicalcium phosphate/calcium carbonate neutralizes oxalates.</li><li><b>Mycotoxin Binders:</b> Inclusion of Hydrated Sodium Calcium Aluminosilicate (HSCAS - 0.2%) or yeast cell wall glucomannans (MOS) in feed tightly adsorbs aflatoxins in the intestinal lumen, preventing absorption.</li></ul>",
      "keyPoints": [
        "Comprehensive classification covering all 7 major categories.",
        "Detailed toxicology of Cyanide (HCN): Cytochrome oxidase inhibition, cherry red blood, nitrite-thiosulfate antidote.",
        "Pathology of Mimosine, Tannins, and Aflatoxins.",
        "Detoxification methods: Moist toasting, FeSO4 chelation, ammoniation, HSCAS binders."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "DUVASU 2022",
        "GADVASU 2021",
        "TANUVAS 2020"
      ]
    }
  ],
  "unit-2": [
    {
      "id": "u2-qa-d01",
      "type": "define",
      "marks": 2,
      "question": "Define Apparent Digestibility and explain why it differs from True Digestibility.",
      "topicId": "u2-t05",
      "answer": "<p><b>Apparent Digestibility:</b> The percentage of dietary nutrient intake that disappears from the digestive tract, calculated simply as: <code>Apparent Digestibility (%) = [ (Nutrient Intake - Total Fecal Nutrient) / Nutrient Intake ] × 100</code>.</p><p>It differs from <b>True Digestibility</b> because total fecal output contains not only undigested feed residues, but also significant amounts of endogenous excretions (Metabolic Fecal Nitrogen, sloughed enterocytes, digestive enzymes, and microbial cell debris). Apparent digestibility always underestimates true digestibility.</p>",
      "keyPoints": [
        "Definition: Disappearance of nutrient across the digestive tract.",
        "Formula: [ (Intake - Total Fecal) / Intake ] × 100.",
        "Underestimates true digestibility due to endogenous excretions (MFN, enzymes, sloughed cells)."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "GADVASU 2022",
        "LUVAS 2021"
      ]
    },
    {
      "id": "u2-qa-d02",
      "type": "define",
      "marks": 2,
      "question": "Define Digestibility Coefficient and state its general formula.",
      "topicId": "u2-t05",
      "answer": "<p><b>Digestibility Coefficient:</b> The quantitative proportion of an ingested feed nutrient that is digested and absorbed into the animal bloodstream or lymph, expressed as a percentage or fraction of the total nutrient ingested.</p><p><b>General Formula:</b><br><code>Digestibility Coefficient (%) = [ (Weight of Nutrient in Feed - Weight of Nutrient in Feces) / Weight of Nutrient in Feed ] × 100</code>.</p>",
      "keyPoints": [
        "Proportion of consumed nutrient absorbed across the alimentary canal.",
        "Standard mathematical formula correctly stated.",
        "Expressed as percentage or fraction (0.0 to 1.0)."
      ],
      "table": null,
      "pyq": [
        "RAJUVAS 2023",
        "TANUVAS 2021",
        "DUVASU 2022"
      ]
    },
    {
      "id": "u2-qa-d03",
      "type": "define",
      "marks": 2,
      "question": "Differentiate between an Internal Indicator and an External Indicator with examples.",
      "topicId": "u2-t05",
      "answer": "<p><b>Internal Indicator:</b> An indigestible, completely inert natural chemical constituent already present inherently within the consumed feedstuff (e.g., Acid Insoluble Ash [AIA], Lignin, Indigestible ADF [iADF]).</p><p><b>External Indicator:</b> An inert, non-toxic, indigestible foreign substance deliberately incorporated into the animal's feed ration or administered orally via dosing bolus at known constant levels (e.g., Chromic Oxide [Cr<sub>2</sub>O<sub>3</sub>], Polyethylene Glycol [PEG], Titanium Dioxide [TiO<sub>2</sub>]).</p>",
      "keyPoints": [
        "Internal: Natural indigenous inert constituent (AIA, Lignin).",
        "External: Artificially administered inert marker (Cr2O3, PEG, TiO2).",
        "Used to measure digestibility without quantitative fecal collection."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2022",
        "KVAFSU 2021",
        "WBUAFS 2020"
      ]
    },
    {
      "id": "u2-qa-d04",
      "type": "define",
      "marks": 2,
      "question": "Define Metabolic Fecal Nitrogen (MFN) and state its physiological origin.",
      "topicId": "u2-t03",
      "answer": "<p><b>Metabolic Fecal Nitrogen (MFN):</b> The fraction of nitrogen excreted in the feces that is not derived directly from undigested dietary feed protein, but arises from endogenous metabolic catabolism and secretions of the digestive tract.</p><p><b>Origin in Ruminants:</b> Arises primarily from sloughed intestinal epithelial enterocytes, unabsorbed digestive secretions (bile, pancreatic and intestinal proteases), mucus glycoproteins, and substantial masses of dead ruminal and hindgut bacterial cell walls (ruminant MFN is ~0.45–0.55 g N / 100 g dry matter intake).</p>",
      "keyPoints": [
        "Non-dietary fecal nitrogen of endogenous origin.",
        "Sources: Sloughed enterocytes, digestive enzymes, mucus, and rumen bacterial debris.",
        "Averages 0.45–0.55 g N per 100 g dry matter intake in ruminants."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "GADVASU 2021",
        "IVRI Annual 2020"
      ]
    },
    {
      "id": "u2-qa-d05",
      "type": "define",
      "marks": 2,
      "question": "Define Endogenous Urinary Nitrogen (EUN) and state its relation to body weight.",
      "topicId": "u2-t03",
      "answer": "<p><b>Endogenous Urinary Nitrogen (EUN):</b> The minimum, unavoidable baseline excretion of nitrogen in the urine when an animal is maintained on a protein-free but otherwise nutritionally adequate, energy-sufficient diet.</p><p>It reflects the basal, irreversible catabolic degradation of vital body tissues (turnover of structural proteins, enzymes, and hormones). In all homeothermic mammals, EUN is directly proportional to metabolic body size: <code>EUN ≈ 0.144 g N / W^0.75 / day</code> (or ~2 mg N per basal kcal energy expended).</p>",
      "keyPoints": [
        "Definition: Minimum urinary nitrogen on a protein-free, energy-adequate diet.",
        "Represents basal turnover of vital somatic tissues.",
        "Proportional to metabolic body size: ~0.144 g N / kg W^0.75 / day."
      ],
      "table": null,
      "pyq": [
        "LUVAS 2022",
        "DUVASU 2023",
        "RAJUVAS 2021"
      ]
    },
    {
      "id": "u2-qa-d06",
      "type": "define",
      "marks": 2,
      "question": "Define Preliminary (Adaptation) Period and Collection Period in a digestion trial.",
      "topicId": "u2-t04",
      "answer": "<p><b>Preliminary (Adaptation) Period:</b> The initial phase of a digestion trial (typically 14–21 days in ruminants) during which animals are fed the test diet under standardized conditions to completely void previous feed residues from the gastrointestinal tract and allow ruminal microflora to adapt metabolically to the new feed substrate.</p><p><b>Collection Period:</b> The subsequent phase (strictly 7–10 days in large ruminants) during which exact daily quantities of feed offered, refusals (orts), feces voided, and urine excreted are recorded, quantitatively sampled, and preserved for laboratory analysis.</p>",
      "keyPoints": [
        "Adaptation: 14–21 days to clear gut residues and adapt ruminal microflora.",
        "Collection: 7–10 days of quantitative recording and aliquot sampling.",
        "Both phases are mandatory for statistical and biological accuracy."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "MAFSU 2022",
        "NDVSU 2021"
      ]
    },
    {
      "id": "u2-qa-d07",
      "type": "define",
      "marks": 2,
      "question": "Define Comparative Slaughter Technique and state its primary limitation in cattle.",
      "topicId": "u2-t02",
      "answer": "<p><b>Comparative Slaughter Technique:</b> A destructive experimental procedure for measuring total energy and nutrient retention where a representative baseline group of animals is slaughtered at the start of the trial and their whole bodies analyzed chemically, while a matched experimental group is fed the test diet for several weeks and subsequently slaughtered and analyzed to determine net tissue accretion by difference.</p><p><b>Primary Limitation:</b> Extremely expensive, requires sacrifice of valuable large farm animals, highly labor-intensive, and individual animals cannot serve as their own controls over time.</p>",
      "keyPoints": [
        "Measures nutrient and energy retention by baseline vs final slaughter analysis.",
        "Most accurate direct measure of somatic tissue gain.",
        "Primary limitation: Destructive, prohibitively expensive, and impractical for large cattle."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2021",
        "GADVASU 2020",
        "IVRI Annual 2022"
      ]
    },
    {
      "id": "u2-qa-d08",
      "type": "define",
      "marks": 2,
      "question": "Define the Associative Effect of Feeds with a practical ruminant example.",
      "topicId": "u2-t06",
      "answer": "<p><b>Associative Effect of Feeds:</b> The non-additive biological phenomenon where the digestibility of a complete mixed ration is significantly higher (positive associative effect) or lower (negative associative effect) than the calculated sum of the digestibilities of its individual ingredient components fed alone.</p><p><b>Classic Example (Negative Associative Effect):</b> Adding excessive cereal grains (maize, starch) to a basal straw diet drastically drops rumen pH (&lt;6.0), which inhibits cellulolytic bacteria (<i>Fibrobacter succinogenes</i>), thereby depressing the digestibility of the roughage crude fibre by 15–30%.</p>",
      "keyPoints": [
        "Non-additive digestibility effect when feeds are combined.",
        "Positive: Supplementation of NPN to straw enhancing cellulolysis.",
        "Negative: Excess grain dropping pH and depressing fibre digestion."
      ],
      "table": null,
      "pyq": [
        "DUVASU 2022",
        "RAJUVAS 2023",
        "LUVAS 2021"
      ]
    },
    {
      "id": "u2-qa-d09",
      "type": "define",
      "marks": 2,
      "question": "Define Feeding Standard and name two historical standards based on digestible nutrients.",
      "topicId": "u2-t07",
      "answer": "<p><b>Feeding Standard:</b> A scientifically formulated table or mathematical statement specifying the exact quantities of essential nutrients (energy, protein, minerals, and vitamins) required by an animal of a given species, body weight, and physiological class for maintenance and specified productive outputs.</p><p><b>Two Historical Standards Based on Digestible Nutrients:</b></p><ol><li><b>Wolff-Lehmann Standards (1896):</b> Expressed requirements in terms of Digestible Crude Protein (DCP), Digestible Carbohydrates, and Digestible Ether Extract.</li><li><b>Morrison's Feeding Standard (1915/1936):</b> Expressed requirements in terms of Dry Matter, Digestible Crude Protein (DCP), and Total Digestible Nutrients (TDN).</li></ol>",
      "keyPoints": [
        "Definition: Scientific tables specifying nutrient requirements per animal class.",
        "Differentiates physiological need from economic feed allowance.",
        "Examples: Wolff-Lehmann and Morrison's standards (DCP and TDN based)."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2021",
        "WBUAFS 2022",
        "KVAFSU 2020"
      ]
    },
    {
      "id": "u2-qa-d10",
      "type": "define",
      "marks": 2,
      "question": "Define Balanced Ration and state the four essential prerequisites for its formulation.",
      "topicId": "u2-t09",
      "answer": "<p><b>Balanced Ration:</b> The exact daily feed allowance furnished to an animal over a 24-hour period that provides all required nutrients (energy, protein, minerals, vitamins, and water) in correct proportions, amounts, and physical form to sustain physiological maintenance and optimum production without detrimental loss of body reserves.</p><p><b>Four Essential Prerequisites:</b></p><ol><li>Accurate knowledge of animal body weight, physiological state, and production targets.</li><li>Consultation of authoritative scientific feeding standards (e.g., ICAR 2013).</li><li>Accurate chemical composition and nutritive values of locally available feeds.</li><li>Strict adherence to dry matter intake capacity (2.5–3.0% of body weight).</li></ol>",
      "keyPoints": [
        "24-hour allowance meeting all nutrient demands in correct proportions.",
        "Must satisfy DMI capacity without causing digestive disorders.",
        "Prerequisites: Animal specifications, feeding standards, feed composition, DMI limits."
      ],
      "table": null,
      "pyq": [
        "GADVASU 2023",
        "IVRI Annual 2022",
        "TANUVAS 2021"
      ]
    },
    {
      "id": "u2-qa-d11",
      "type": "define",
      "marks": 2,
      "question": "State the Kearl (1982) feeding standard and explain why it is preferred for tropical developing countries.",
      "topicId": "u2-t08",
      "answer": "<p><b>Kearl (1982) Feeding Standard:</b> A specialized international feeding standard formulated specifically for ruminants in developing countries by Leonard C. Kearl (Utah Agricultural Experiment Station), published in both English and metric systems.</p><p><b>Why Preferred for the Tropics:</b> Western standards (NRC, ARC) are based on high-genetic temperate cattle fed high-concentrate, corn-silage rations. Kearl formulated standards specifically for <i>Bos indicus</i> (zebu cattle) and riverine water buffaloes fed fibrous, crop-residue-based diets under tropical climatic heat stress, incorporating realistic tropical dry matter intake capacities and lower baseline maintenance energy coefficients.</p>",
      "keyPoints": [
        "Formulated by L.C. Kearl for ruminants in tropical developing nations.",
        "Accounts for zebu cattle and riverine water buffalo physiology.",
        "Adapted to low-quality crop residues and tropical thermal heat load."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "RAJUVAS 2022",
        "NDVSU 2020"
      ]
    },
    {
      "id": "u2-qa-d12",
      "type": "define",
      "marks": 2,
      "question": "Write the Chromic Oxide (Cr2O3) marker ratio equation for calculating nutrient digestibility.",
      "topicId": "u2-t05",
      "answer": "<p>When using an inert external marker such as <b>Chromic Oxide (Cr<sub>2</sub>O<sub>3</sub>)</b>, the apparent digestibility coefficient of any nutrient can be calculated without measuring total feed intake or total fecal output using the <b>Indicator Ratio Equation:</b></p><p><code>Apparent Digestibility (%) = 100 - [ 100 × ( % Indicator in Feed / % Indicator in Feces ) × ( % Nutrient in Feces / % Nutrient in Feed ) ]</code></p><p>Alternatively expressed via concentration ratios: <code>Digestibility (%) = [ 1 - ( (N_feces / N_feed) × (Cr_feed / Cr_feces) ) ] × 100</code>.</p>",
      "keyPoints": [
        "Eliminates the requirement for total quantitative collection of feces.",
        "Equation correctly stated with all terms defined.",
        "Relies on the mathematical ratio of marker to nutrient in feed and feces."
      ],
      "table": null,
      "pyq": [
        "LUVAS 2023",
        "DUVASU 2021",
        "TANUVAS 2022"
      ]
    },
    {
      "id": "u2-qa-s01",
      "type": "short",
      "marks": 5,
      "question": "Detail the Standard Operating Procedure for conducting a conventional In Vivo Metabolism Trial in bullocks.",
      "topicId": "u2-t04",
      "answer": "<p>A conventional in vivo metabolism trial in bullocks is the definitive biological procedure to determine nutrient digestibility and retention. It is executed in three standardized sequential steps:</p><ul><li><b>1. Animal Selection &amp; Housing:</b><br>Select 4–6 healthy, adult male bullocks of uniform breed, age, and body weight, dewormed and vaccinated. House them in specialized individual metabolism stalls fitted with rubber mats, fecal collection pans/funnels, urine separators, and non-spill feed mangers.</li><li><b>2. Preliminary (Adaptation) Period (14–21 Days):</b><br>Feed the exact experimental test ration in two equal halves at fixed hours (e.g., 08:00 and 16:00 hrs) with ad libitum clean drinking water. This period ensures: (a) complete clearance of residues from previous feeds, (b) rumen microbial adaptation to test substrates, and (c) behavioral acclimatization of animals to the metabolism crate harness. No collections are recorded.</li><li><b>3. Collection Period (7 Days Strictly):</b><br>- <i>Feed and Orts:</i> Daily offer of feed is weighed accurately. Unconsumed feed (orts/refusals) is weighed 24 hours later. Representative daily samples (10%) are collected, dried at 65°C, and pooled.<br>- <i>Feces Collection:</i> Total voided feces are collected quantitatively into galvanized pans immediately to avoid contamination. Total 24-hr fecal output is weighed at 08:00 hrs. After thorough homogenization, a 1/50th aliquot is drawn: one aliquot dried at 100°C for dry matter; a second aliquot dried at 65°C for proximate analysis; a third aliquot (100 g) preserved in 1:4 dilute H<sub>2</sub>SO<sub>4</sub> for nitrogen estimation.<br>- <i>Urine Collection:</i> Quantitative total collection into carboys containing 50–100 mL of 20% H<sub>2</sub>SO<sub>4</sub> to prevent nitrogen loss as ammonia (pH maintained &lt;3.0). Aliquots (1/50th) are refrigerated for nitrogen and mineral assays.</li></ul>",
      "keyPoints": [
        "Animal standardization and housing in individual metabolism stalls.",
        "14–21 days adaptation period to clear gut and adapt microflora.",
        "7 days collection period with exact quantitative recording.",
        "Aliquot sampling of feed, orts, feces, and acidified urine preservation."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "GADVASU 2022",
        "RAJUVAS 2021",
        "TANUVAS 2020"
      ]
    },
    {
      "id": "u2-qa-s02",
      "type": "short",
      "marks": 5,
      "question": "Explain the Indicator (Marker) Method for digestibility determination. What are the criteria for an ideal marker?",
      "topicId": "u2-t05",
      "answer": "<p><b>Principle:</b><br>The marker method determines feed digestibility without requiring total quantitative measurement of feed consumed or total feces voided. By incorporating or analyzing an indigestible reference substance (marker) in both feed and fecal grab samples, the progressive concentration of the marker directly reflects the extent of nutrient absorption.</p><p><b>Criteria for an Ideal Marker:</b></p><ol><li><b>Completely Indigestible:</b> 100% of the ingested marker must be recovered quantitatively in the voided feces.</li><li><b>Physiologically Inert &amp; Non-Toxic:</b> Must exert no pharmacological, antimicrobial, or toxic effect on animal tissues or rumen microflora.</li><li><b>No Effect on Gut Motility:</b> Must not alter normal rates of passage, gut motility, or digestive secretions.</li><li><b>Homogeneous Flow Dynamics:</b> Must intimately associate with the digesta phase (solid or liquid) and flow at the identical velocity as the nutrient fraction it tracks.</li><li><b>Accurate Analytical Assay:</b> Must be chemically stable and easily quantified with high analytical precision in laboratory assays.</li></ol><p><b>Classification &amp; Examples:</b></p><ul><li><b>Internal Markers (Natural):</b> Acid Insoluble Ash (AIA - 4N HCl insoluble residue), Lignin, Indigestible Neutral Detergent Fibre (iNDF).</li><li><b>External Markers (Dosed):</b> Chromic oxide (Cr<sub>2</sub>O<sub>3</sub>), Titanium dioxide (TiO<sub>2</sub>), Rare earth elements (Ytterbium, Dysprosium), and Polyethylene glycol (PEG for liquid phase).</li></ul>",
      "keyPoints": [
        "Principle: Measures digestibility using concentration ratio of marker in feed vs feces.",
        "Eliminates total collection; ideal for grazing/pasture trials.",
        "Five criteria of ideal marker: Indigestible, inert, non-toxic, parallel flow, easy assay.",
        "Examples of internal (AIA, Lignin) and external (Cr2O3, TiO2) markers."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2022",
        "LUVAS 2023",
        "DUVASU 2021",
        "WBUAFS 2020"
      ]
    },
    {
      "id": "u2-qa-s03",
      "type": "short",
      "marks": 5,
      "question": "Describe the experimental protocol and biological interpretation of Nitrogen, Calcium, and Phosphorus balance trials in ruminants.",
      "topicId": "u2-t03",
      "answer": "<p>A balance trial evaluates whether an animal is in a state of net tissue retention, equilibrium, or mobilization of a specific nutrient over a standardized experimental collection period (7–10 days).</p><p><b>Standard Balance Equation:</b><br><code>Balance = Total Daily Intake - (Daily Fecal Output + Daily Urinary Output)</code><br><i>(In lactating cows, daily milk output is added to the excretion side; in sheep, wool is accounted for).</i></p><ul><li><b>1. Nitrogen (N) Balance:</b><br>- <i>Sample Preservation:</i> Urine is collected in concentrated H<sub>2</sub>SO<sub>4</sub> (pH &lt; 3.0) to prevent microbial volatilization of ammonia. Feces are acidified with 1:4 H<sub>2</sub>SO<sub>4</sub>.<br>- <i>Calculation:</i> <code>N Balance (g/day) = N Intake - (Fecal N + Urinary N)</code>.<br>- <i>Interpretation:</i> <b>Positive Balance</b> indicates protein accretion (growth, pregnancy, muscle hypertrophy). <b>Zero Balance</b> indicates adult maintenance equilibrium. <b>Negative Balance</b> indicates tissue catabolism, starvation, infection, or severe protein/energy underfeeding.</li><li><b>2. Calcium (Ca) and Phosphorus (P) Balance:</b><br>- <i>Sample Preparation:</i> Feed, fecal, and urinary aliquots are wet-digested in a tri-acid mixture (HNO<sub>3</sub> : H<sub>2</sub>SO<sub>4</sub> : HClO<sub>4</sub> in 10:1:4 ratio) or dry-ashed at 550°C. Ca is estimated via EDTA titrimetry / AAS; P is determined spectrophotometrically by the molybdo-vanadate yellow method.<br>- <i>Pathological Significance:</i> A <b>negative Calcium or Phosphorus balance</b> in early lactating dairy cows is normal due to physiological skeletal mobilization to support peak milk yield, provided it is replenished by positive balance during mid- and late lactation. Chronic negative balance induces osteomalacia and unthriftiness.</li></ul>",
      "keyPoints": [
        "Balance = Intake - (Fecal + Urinary Excretion + Milk/Wool).",
        "Nitrogen balance: Urine acidified with H2SO4; positive = growth, negative = catabolism.",
        "Ca & P balance: Ashing and acid digestion; vital for monitoring skeletal reserves in dairy cows."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "GADVASU 2021",
        "IVRI Annual 2020",
        "KVAFSU 2022"
      ]
    },
    {
      "id": "u2-qa-s04",
      "type": "short",
      "marks": 5,
      "question": "Enumerate and explain the key factors influencing feed digestibility in ruminants.",
      "topicId": "u2-t06",
      "answer": "<p>Feed digestibility in ruminants is governed by complex interactions between feed characteristics, ruminal microbial activity, and host animal physiology:</p><ul><li><b>1. Stage of Plant Maturity &amp; Lignification:</b><br>The single most dominant factor. As forage grasses and legumes mature from pre-flowering to seed setting, cell wall content (NDF/ADF) surges and lignin encrusts cellulose microfibrils with indigestible phenylpropanoid bonds, slashing dry matter digestibility from &gt;70% down to &lt;45%.</li><li><b>2. Chemical Composition &amp; Nitrogen Content:</b><br>Rumen cellulolytic bacteria require a minimum of <b>1.0–1.2% dietary Nitrogen (6.5–7.0% Crude Protein)</b> in the ration to maintain active cellulolysis. If forage protein drops below this threshold (e.g., untreated cereal straw at 3% CP), microbial cellulolytic proliferation collapses, severely depressing fibre digestibility.</li><li><b>3. Physical Form of Feed &amp; Processing:</b><br>Fine grinding of roughages drastically accelerates gut passage rate through the reticulo-omasal orifice, reducing ruminal microbial exposure time and decreasing fibre digestibility, though overall voluntary intake increases. Pelleting and steam flaking of grains gelatinize starch and improve digestibility.</li><li><b>4. Concentrate-to-Roughage Ratio (Associative Effects):</b><br>Feeding excessive concentrates (&gt;60% grain) causes rapid accumulation of volatile fatty acids, dropping ruminal pH below 6.0. Cellulolytic bacteria (<i>Fibrobacter succinogenes</i>) are acid-sensitive and inactivated below pH 6.0, depressing fibre digestibility.</li><li><b>5. Level of Feeding above Maintenance:</b><br>As feeding level increases from 1× maintenance to 2× or 3× maintenance in high-yielding dairy cows, rate of digesta passage accelerates, slightly reducing apparent digestibility by 1–3 percentage units per multiple of maintenance.</li></ul>",
      "keyPoints": [
        "Plant maturity and lignin encrustation: Single most decisive factor.",
        "Crude protein threshold: Minimum 7% CP required to maintain cellulolysis.",
        "Physical form: Fine grinding accelerates passage, lowering fibre digestibility.",
        "Grain overload: Lowers rumen pH below 6.0, inhibiting cellulolytic microbes.",
        "Intake level: High intake increases passage rate, mildly lowering digestibility."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "RAJUVAS 2022",
        "LUVAS 2021",
        "NDVSU 2020"
      ]
    },
    {
      "id": "u2-qa-s05",
      "type": "diff",
      "marks": 5,
      "question": "Provide a critical comparative evaluation of the Total Digestible Nutrients (TDN) system versus the Net Energy (NE) system for ruminant feed evaluation.",
      "topicId": "u2-t08",
      "answer": "<p>The <b>Total Digestible Nutrients (TDN)</b> system is an empirical, digestive-level energy index that calculates the total caloric equivalence of digested organic nutrients. In contrast, the <b>Net Energy (NE)</b> system (Armsby, Kellner, California Net Energy System, NRC) is a thermodynamic, physiological system that accounts for all metabolic energy losses during digestion and assimilation.</p>",
      "keyPoints": [
        "TDN overestimates the true productive energy value of fibrous roughages.",
        "TDN measures only digestive disappearance; fails to subtract gas and Heat Increment.",
        "Net Energy accounts for Heat Increment and distinguishes maintenance (NEm) from production (NEp).",
        "NE system is mandatory for high-producing commercial dairy cows."
      ],
      "table": {
        "title": "Critical Comparison: TDN System vs Net Energy (NE) System",
        "headers": [
          "Comparison Feature",
          "Total Digestible Nutrients (TDN) System",
          "Net Energy (NE) System"
        ],
        "rows": [
          [
            "Level of Evaluation",
            "Digestive level (apparent absorption across gut)",
            "Cellular / Tissue metabolic utilization level"
          ],
          [
            "Energy Losses Deducted",
            "Deducts only Fecal Energy (FE) losses",
            "Deducts Fecal (FE), Urinary (UE), Gas (CH4), and Heat Increment (HI)"
          ],
          [
            "Units of Measurement",
            "Expressed as percentage (%) or kilograms (kg) of TDN",
            "Expressed in true energy units: Mcal/kg or MJ/kg of dry matter"
          ],
          [
            "Evaluation of Roughages",
            "Seriously overestimates feeding value of roughages because roughages generate enormous Heat Increment",
            "Accurately values roughages by deducting their massive heat of fermentation and mastication"
          ],
          [
            "Concentrate vs Roughage Parity",
            "Assumes 1 kg TDN from straw is physiologically equal to 1 kg TDN from maize (which is false)",
            "Recognizes that 1 kg TDN from maize produces much more net product than 1 kg TDN from straw"
          ],
          [
            "Partitioning for Functions",
            "Single static value; cannot distinguish maintenance from productive tissue gain",
            "Dynamically partitions into Net Energy for Maintenance (NEm), Gain (NEg), and Lactation (NEl)"
          ],
          [
            "Practical Applicability",
            "Simple, low-cost, easy to compute; widely used in developing nations for general formulation",
            "Highly sophisticated and accurate; mandatory for precision formulation in high-yielding dairy herds"
          ]
        ]
      },
      "pyq": [
        "IVRI Annual 2023",
        "GADVASU 2022",
        "TANUVAS 2021",
        "MAFSU 2020"
      ]
    },
    {
      "id": "u2-qa-s06",
      "type": "short",
      "marks": 5,
      "question": "Trace the historical evolution of ruminant feeding standards and compare the ICAR standards against NRC/ARC standards.",
      "topicId": "u2-t07",
      "answer": "<p><b>Historical Evolution:</b></p><ol><li><b>Thaer's Hay Equivalent (1809):</b> First recorded standard; compared all feeds against meadow hay as standard reference.</li><li><b>Grouven's Total Nutrients (1859):</b> Based on chemical proximate analysis (crude protein, crude fat, carbohydrates).</li><li><b>Wolff's Digestible Nutrients (1864) &amp; Wolff-Lehmann Standards (1896):</b> Pioneer standards based on digestible nutrients per 1000 lbs live weight.</li><li><b>Armsby &amp; Kellner (Early 1900s):</b> Introduced Net Energy and Starch Equivalent systems based on respiration calorimetry.</li><li><b>Morrison Feeding Standards (1915–1956):</b> Widely popularized TDN and DCP systems across North America and India.</li></ol><p><b>Comparison: ICAR Standards vs NRC / ARC Standards:</b></p><ul><li><b>Basis of Formulation:</b> ARC (UK) and NRC (USA) are calibrated on high-yielding <i>Bos taurus</i> cattle fed energy-dense concentrate-silage rations in temperate climates. Indian standards (Sen &amp; Ray 1964, Ranjhan 1980, ICAR 1998, 2013) are calibrated directly on indigenous zebu cattle (<i>Bos indicus</i>) and water buffaloes (<i>Bubalus bubalis</i>).</li><li><b>Maintenance Energy Requirements:</b> ICAR established that Indian zebu cattle have a <b>lower basal fasting heat production (FHP ≈ 60–65 kcal / kg W^0.75)</b> compared to temperate European cattle (FHP ≈ 75–80 kcal / kg W^0.75).</li><li><b>Dietary Substrate Adaptation:</b> ICAR standards account for the high proportion of lignocellulosic crop residues (wheat/paddy straw) forming the basal roughage, whereas NRC assumes high-digestibility corn silage and alfalfa hay.</li></ul>",
      "keyPoints": [
        "Historical timeline: Thaer (Hay Equivalent) -> Wolff-Lehmann -> Kellner -> Morrison.",
        "NRC/ARC calibrated for Bos taurus on high-energy temperate diets.",
        "ICAR calibrated for Bos indicus and buffaloes on tropical fibrous crop residues.",
        "Indigenous zebu cattle have 15–20% lower fasting maintenance metabolism."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2022",
        "RAJUVAS 2021",
        "DUVASU 2023",
        "LUVAS 2020"
      ]
    },
    {
      "id": "u2-qa-s07",
      "type": "short",
      "marks": 5,
      "question": "Enumerate the practical rules of thumb for formulating a balanced daily ration for dairy cattle.",
      "topicId": "u2-t09",
      "answer": "<p>When computing rations under field conditions in India, animal nutritionists utilize established practical rules of thumb:</p><ul><li><b>1. Dry Matter Intake (DMI) Capacity:</b><br>- Indigenous Zebu Cattle (<i>Bos indicus</i>): <b>2.0 to 2.5 kg DM per 100 kg body weight</b> (2.0–2.5% BW).<br>- Crossbred Cattle &amp; Buffaloes: <b>2.5 to 3.0 kg DM per 100 kg body weight</b> (2.5–3.0% BW).<br>- High-Yielding Dairy Cows (&gt;15 kg milk): Up to <b>3.5% of body weight</b>.</li><li><b>2. Roughage-to-Concentrate Partitioning:</b><br>- Dry total ration DM is partitioned into <b>60–70% from Roughages</b> and <b>30–40% from Concentrates</b> for normal milkers.<br>- In high yielders, concentrate may rise to 50–55%, but roughage DM must never drop below 40% to preserve rumination and milk fat test.</li><li><b>3. Roughage Distribution (Green vs Dry):</b><br>- Total roughage DM should ideally be met: <b>2/3rd from succulent green fodder</b> and <b>1/3rd from dry roughage</b> (straw/stover). If green is leguminous (berseem/lucerne), concentrate protein can be reduced.</li><li><b>4. Production Concentrate Allowance:</b><br>- <i>Cattle:</i> 1.0 kg concentrate mixture (containing ~20% CP and 70% TDN) for every <b>2.5 to 3.0 kg of milk produced</b>.<br>- <i>Buffaloes:</i> 1.0 kg concentrate mixture for every <b>2.0 to 2.5 kg of milk produced</b> (due to higher fat content: 6–8% fat).</li><li><b>5. Mandatory Additions:</b><br>- Inclusion of <b>2% mineral mixture</b> and <b>1% common salt</b> in the concentrate mixture, with unrestricted access to fresh drinking water (3–5 litres per kg DMI).</li></ul>",
      "keyPoints": [
        "DMI: 2.0–2.5% BW for Zebu; 2.5–3.0% BW for Crossbreds and Buffaloes.",
        "Roughage:Concentrate ratio typically 60:40 to 70:30 (minimum 40% roughage).",
        "Roughage split: 2/3rd from green fodder, 1/3rd from dry straw.",
        "Production concentrate: 1 kg per 2.5–3 kg milk in cows; 1 kg per 2.0–2.5 kg in buffaloes.",
        "Mineral mixture (2%) and Salt (1%) mandatory."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "KVAFSU 2023"
      ]
    },
    {
      "id": "u2-qa-s08",
      "type": "short",
      "marks": 5,
      "question": "Explain how True Digestibility of Protein is determined experimentally. Detail the estimation of Metabolic Fecal Nitrogen (MFN).",
      "topicId": "u2-t05",
      "answer": "<p><b>Principle:</b><br>Apparent protein digestibility fails to account for non-dietary nitrogen present in feces (Metabolic Fecal Nitrogen - MFN). To determine <b>True Digestibility (TD)</b>, MFN must be determined and deducted from total fecal nitrogen:<br><code>True Digestibility (%) = [ { Nitrogen Intake - (Total Fecal N - MFN) } / Nitrogen Intake ] × 100</code>.</p><p><b>Methods for Experimental Estimation of MFN:</b></p><ul><li><b>1. Nitrogen-Free Diet Method:</b><br>Animals are fed an artificial diet containing zero protein (purified starch, cellulose, vegetable oil, minerals, and vitamins). The nitrogen voided in feces on this diet represents endogenous MFN directly.<br><i>Limitation:</i> Completely unnatural for ruminants, depresses microbial cellulolysis, and causes severe metabolic distress.</li><li><b>2. Completely Digestible Protein Diet Method:</b><br>Feeding a diet containing a protein source known to be 100% digestible (e.g., egg albumin or whole milk protein). Any nitrogen appearing in feces is deduced to be endogenous MFN.</li><li><b>3. Regression (Extrapolation) Method (The Standard Biological Technique):</b><br>Ruminants are fed test rations with graded, increasing levels of protein intake. Total fecal nitrogen excretion is plotted on the Y-axis against nitrogen intake on the X-axis. A linear regression line is fitted:<br><code>Y = a + bX</code><br><i>Where Y = Fecal N (g/day), X = Nitrogen Intake (g/day), b = regression coefficient (slope), and a = Y-intercept.</i> By extrapolating the line back to zero nitrogen intake (X = 0), the Y-intercept (<b>a</b>) represents the <b>Metabolic Fecal Nitrogen (MFN)</b>. In ruminants, MFN averages <b>0.45 to 0.55 g N per 100 g dry matter intake</b>.</li></ul>",
      "keyPoints": [
        "Formula for True Digestibility: [ Intake - (Total Fecal N - MFN) ] / Intake × 100.",
        "Nitrogen-free diet: Direct measurement, but causes distress in ruminants.",
        "Regression method: Plots fecal N vs N intake; Y-intercept at zero intake represents MFN.",
        "Standard ruminant MFN value: 0.45–0.55 g N / 100 g DMI."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2022",
        "GADVASU 2020",
        "DUVASU 2021",
        "WBUAFS 2022"
      ]
    },
    {
      "id": "u2-qa-l01",
      "type": "long",
      "marks": 12,
      "question": "Comprehensive treatise on In Vivo Digestion and Metabolism Trials in Ruminants: Experimental design, metabolism cage layout, execution protocol, sample preservation, and mathematical calculations of digestibility and nitrogen balance.",
      "topicId": "u2-t04",
      "answer": "<p>In vivo metabolism trials represent the biological gold standard in animal nutrition to quantify feed nutrient digestibility, metabolizability, and physiological nitrogen retention. A successful trial requires rigorous experimental execution under controlled conditions.</p><h3>1. Experimental Design and Animal Housing</h3><ul><li><b>Animal Standardization:</b> 4 to 6 healthy male adult ruminants (castrated bullocks or wethers) of uniform breed, body weight, and age are selected. Males are mandatory because their anatomy permits complete physical separation of feces and urine.</li><li><b>Metabolism Stalls:</b> Stalls are constructed of non-corrosive galvanized iron or teak wood fitted with raised slatted floors or grooved rubber mats. Key features: (a) Adjustable stanchion preventing animal from turning around; (b) Non-spill stainless steel feed manger; (c) Fecal collection chute/funnel delivering feces into a collection tray below; (d) Rubber urine funnel or rubber collection sheath strapped around the prepuce directing urine via plastic tubing into carboys.</li></ul><h3>2. Execution Timeline</h3><ul><li><b>A. Preliminary / Adaptation Period (14–21 Days):</b><br>- Animals are harnessed and fed the test ration at fixed hours daily (08:00 and 16:00).<br>- <i>Purposes:</i> (1) Completely clear residues of previous feed from the massive rumen-reticulum (ruminant transit time is 50–70 hours); (2) Allow the microbial ecosystem to reach enzymatic equilibrium; (3) Accustom the animal to the physical confinement of the metabolism stall to eliminate stress-induced cortisol elevation.</li><li><b>B. Collection Period (Strictly 7–10 Days):</b><br>- Routine starts at 08:00 hrs daily.<br>- <i>Feeds &amp; Orts:</i> Daily offered feed is weighed to the nearest gram. 24 hours later, unconsumed feed (refusals/orts) is weighed and recorded. Daily representative samples (10%) are collected, dried at 65°C, and pooled for composite analysis.<br>- <i>Feces:</i> Feces voided over 24 hours are collected quantitatively, weighed accurately, and mixed thoroughly in an enamel basin. Three separate aliquots are drawn: (1) 1/50th aliquot dried at 100°C for dry matter; (2) 1/50th aliquot dried at 65°C, ground, and pooled for proximate analysis; (3) 100 g aliquot transferred into a glass jar containing 1:4 dilute H<sub>2</sub>SO<sub>4</sub> for composite Nitrogen estimation.<br>- <i>Urine:</i> Total urine collected into glass carboys containing 50–100 mL of 20% H<sub>2</sub>SO<sub>4</sub> (keeping pH &lt; 3.0 to prevent volatilization of ammonia). Volume is measured; a 1/50th aliquot is filtered and refrigerated.</li></ul><h3>3. Step-by-Step Mathematical Calculations</h3><h4>A. Dry Matter Digestibility (DMD):</h4><p><code>DMD (%) = [ { (Feed Offered DM - Orts DM) - Fecal DM } / (Feed Offered DM - Orts DM) ] × 100</code></p><h4>B. Nutrient Digestibility Coefficients:</h4><p>For any nutrient X (CP, CF, EE, NFE):<br><code>Digestibility of X (%) = [ { Intake of X (g) - Fecal Output of X (g) } / Intake of X (g) ] × 100</code></p><h4>C. Total Digestible Nutrients (TDN):</h4><p><code>% TDN = % DCP + % DCF + % DNFE + (% DEE × 2.25)</code></p><h4>D. Nitrogen Balance:</h4><ul><li><code>Total Nitrogen Intake (g/day) = Feed N - Orts N</code></li><li><code>Total Nitrogen Excreted (g/day) = Fecal N + Urinary N</code></li><li><code>Nitrogen Balance (g/day) = N Intake - Total N Excreted</code></li><li><b>Biological Value (BV):</b> <code>BV (%) = [ { N Intake - (Fecal N - MFN) - (Urinary N - EUN) } / { N Intake - (Fecal N - MFN) } ] × 100</code></li><li><b>Net Protein Utilization (NPU):</b> <code>NPU (%) = [ Retained Nitrogen (g) / Nitrogen Intake (g) ] × 100 = BV × True Digestibility</code></li></ul>",
      "keyPoints": [
        "Detailed description of animal housing and metabolism stall layout.",
        "Phases: 14–21 days adaptation and 7–10 days collection.",
        "Quantitative sampling and acid preservation of feces and urine.",
        "Step-by-step mathematical formulas for DMD, nutrient digestibility, TDN, and N-balance.",
        "Biological Value and NPU formulas incorporating MFN and EUN."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "GADVASU 2022",
        "TANUVAS 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u2-qa-l02",
      "type": "long",
      "marks": 12,
      "question": "Digestibility Determination Methodologies: Provide a comprehensive comparative analysis of five In Vivo and In Vitro systems used in ruminant nutrition research.",
      "topicId": "u2-t05",
      "answer": "<p>Accurate measurement of feed digestibility is the foundation of scientific livestock feeding. Nutritionists utilize five major methodologies, ranging from full animal in vivo balance trials to rapid laboratory in vitro bioassays.</p><h3>1. Detailed Analysis of the Five Methodologies</h3><ul><li><b>1. Direct Method (In Vivo):</b><br>The test feed is fed as the sole component of the diet (suitable for roughages like hays or green forages). Total feed intake and fecal excretion are recorded directly over a 7-day collection period. Highly accurate for roughages, but concentrates cannot be fed alone to ruminants without fatal ruminal acidosis.</li><li><b>2. Indirect (Difference) Method (In Vivo):</b><br>Mandatory for concentrate feeds (grains, oilseed cakes). Conducted in two successive periods: Period 1 measures digestibility of a basal roughage alone. Period 2 feeds a mixture of basal roughage + test concentrate. By assuming roughage digestibility remains constant, the digestibility of the concentrate is calculated by subtraction (difference).<br><i>Limitation:</i> Subject to errors caused by associative effects between grain and roughage.</li><li><b>3. Indicator (Marker) Method (In Vivo):</b><br>Uses inert markers (Internal: Acid Insoluble Ash, Lignin; External: Chromic Oxide, Titanium Dioxide). Requires no total collection of feed or feces. Grab samples of feces are taken per rectum. Digestibility is calculated via the marker-to-nutrient concentration ratio. Indispensable for grazing animals on pasture.</li><li><b>4. In Situ / In Sacco Nylon Bag Technique (Mehrez &amp; Ørskov, 1977):</b><br>Samples of dried, ground feed are sealed inside synthetic dacron/nylon bags (pore size 40–50 µm) and suspended directly into the rumen of a rumen-fistulated bullock. Bags are incubated for serial intervals (2, 4, 8, 16, 24, 48, 72 hours), withdrawn, washed, and dried to generate disappearance curves: <code>P = a + b(1 - e^(-ct))</code>. Measures rate and extent of ruminal degradation of DM and protein.</li><li><b>5. In Vitro Two-Stage Rumen Fermentation Technique (Tilley &amp; Terry, 1963):</b><br>Laboratory tube bioassay simulating the ruminant digestive tract in two phases:<br>- <i>Stage 1 (Ruminal Phase):</i> 0.5 g ground feed incubated anaerobically with buffered rumen liquor (McDougall's artificial saliva) under CO<sub>2</sub> at 39°C for 48 hours.<br>- <i>Stage 2 (Abomasal Phase):</i> Residue is treated with acid-pepsin solution (pH 1.2) for 48 hours to digest microbial protein and simulate gastric digestion. Residue is filtered, dried, and weighed to yield In Vitro Dry Matter Digestibility (IVDMD).</li></ul><h3>2. Comparative Evaluation Matrix</h3>",
      "keyPoints": [
        "Direct method: Sole feed evaluation for roughages.",
        "Indirect (difference) method: Two-period trial required for concentrates.",
        "Indicator method: Eliminates total collection, vital for grazing studies.",
        "In situ nylon bag: Measures ruminal degradation kinetics (a, b, c fractions) via fistulated animals.",
        "Tilley & Terry in vitro: Two-stage bioassay (rumen liquor + acid pepsin) for rapid screening."
      ],
      "table": {
        "title": "Comprehensive Comparison of Digestibility Determination Methodologies",
        "headers": [
          "Evaluation Parameter",
          "In Vivo Direct Method",
          "In Vivo Difference Method",
          "In Vivo Indicator Method",
          "In Situ Nylon Bag Method",
          "In Vitro Tilley & Terry Method"
        ],
        "rows": [
          [
            "Animal Requirement",
            "4–6 intact animals",
            "4–6 intact animals",
            "Animals on pasture / stalls",
            "Rumen-fistulated animals",
            "Only donor animal for rumen liquor"
          ],
          [
            "Test Feed Applicability",
            "Roughages only (hays/fodder)",
            "Concentrates & supplements",
            "All feeds & grazing herbage",
            "Individual feed ingredients",
            "Mass screening of hundreds of samples"
          ],
          [
            "Total Collection Needed?",
            "Yes (strict 7 days)",
            "Yes (two 7-day periods)",
            "No (grab fecal sampling)",
            "No (bags washed and weighed)",
            "No (laboratory test-tube assay)"
          ],
          [
            "Duration of Trial",
            "3–4 weeks",
            "6–8 weeks",
            "10–14 days",
            "2–4 days",
            "4 days (48h + 48h incubation)"
          ],
          [
            "Associative Effect Bias",
            "None (single feed)",
            "High risk of associative error",
            "Minimal",
            "None",
            "None (standardized buffer)"
          ],
          [
            "Biological Accuracy",
            "Gold standard reference",
            "Good, but cumulative errors",
            "High (if marker flow is ideal)",
            "Excellent for rumen degradation rate",
            "High correlation (r > 0.90) with in vivo DMD"
          ]
        ]
      },
      "pyq": [
        "IVRI Annual 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "LUVAS 2020"
      ]
    },
    {
      "id": "u2-qa-l03",
      "type": "long",
      "marks": 12,
      "question": "Critical Comparative Evaluation of Global Ruminant Feeding Standards: Detailed critical analysis of Morrison, ARC, NRC, and ICAR systems. Why can Western temperate standards not be adopted directly for Indian cattle and buffaloes?",
      "topicId": "u2-t07",
      "answer": "<p>A feeding standard is a scientific quantification of the nutrient requirements of farm animals. Various national scientific bodies have formulated standards reflecting their indigenous livestock genotypes, climate, and available feed resources.</p><h3>1. Detailed Analysis of Major Feeding Standards</h3><ul><li><b>A. Morrison's Feeding Standard (USA):</b><br>- Expresses energy as <b>Total Digestible Nutrients (TDN)</b> and protein as <b>Digestible Crude Protein (DCP)</b>.<br>- <i>Merits:</i> Simple, intuitive, and readily calculated from proximate analysis and digestion tables.<br>- <i>Demerits:</i> TDN overvalues fibrous roughages by ignoring Heat Increment; ignores ruminal microbial protein transformation.</li><li><b>B. Agricultural Research Council (ARC - UK) / AFRC System:</b><br>- Expresses energy as <b>Metabolizable Energy (ME)</b> and protein as <b>Degradable / Undegradable Protein (RDP/RUP)</b> and Metabolizable Protein (MP).<br>- Utilizes efficiencies of ME utilization for maintenance (k<sub>m</sub>), growth (k<sub>f</sub>), and lactation (k<sub>l</sub>). Highly accurate thermodynamically.</li><li><b>C. National Research Council (NRC - USA) Systems:</b><br>- <b>Dairy Cattle (NRC 2001):</b> Uses <b>Net Energy for Lactation (NEl)</b>, Net Energy for Maintenance (NEm), and Net Energy for Gain (NEg). Protein evaluated on Metabolizable Protein (MP) partitioned into RDP and RUP.<br>- Highly computerized, precision-driven, but requires extensive feed fractionation inputs (NDF, ADF, lignin, non-fiber carbohydrates, protein sub-fractions).</li><li><b>D. Indian Council of Agricultural Research (ICAR) Standards:</b><br>- Formulated through successive national revisions: <b>Sen &amp; Ray (1964)</b>, <b>Ranjhan (1980, 1998)</b>, and <b>ICAR (2013)</b>.<br>- Evaluates energy in terms of both <b>TDN and ME</b>, and protein in terms of <b>CP, DCP, and Metabolizable Protein (MP)</b>.<br>- Provides dedicated requirement tables specifically for Indian Zebu Cattle (<i>Bos indicus</i>), Crossbred Dairy Cattle, and Riverine Water Buffaloes (<i>Bubalus bubalis</i>).</li></ul><h3>2. Why Western Standards (NRC/ARC) Cannot be Directly Adopted in India</h3><ol><li><b>Genotypic &amp; Physiological Differences:</b><br>NRC/ARC are calibrated on purebred <i>Bos taurus</i> (Holstein-Friesian, Jersey). Indian native cattle are zebu (<i>Bos indicus</i>). Zebu cattle possess a <b>15–20% lower fasting heat production</b> (60–65 kcal/kg W<sup>0.75</sup> vs 75–80 kcal in taurus) and higher digestive efficiency for tropical fibrous roughages due to longer ruminal retention times.</li><li><b>Unique Buffalo Physiology:</b><br>Riverine water buffaloes (<i>Bubalus bubalis</i>) contribute &gt;50% of India's milk pool. Buffaloes exhibit a higher ruminal microbial population, superior cellulolytic bacterial activity, and digest poor-quality crop residues 3–5 percentage units higher than cattle. NRC provides zero standards for buffaloes.</li><li><b>Nature of Basal Feedstuffs:</b><br>Western dairy rations rely heavily on high-energy corn silage, alfalfa hay, and cereal grains. In India, dairy rations are based on <b>lignified cereal straws (wheat/paddy straw)</b> and agro-industrial by-products. The associative effects and energy partitioning of straw-based diets cannot be accurately predicted by NRC models.</li><li><b>Climatic Heat Stress:</b><br>High ambient temperatures (&gt;35–42°C) and tropical humidity induce severe heat stress in India, altering maintenance energy requirements (increased energy for panting) and depressing dry matter intake far below NRC predictions.</li></ol>",
      "keyPoints": [
        "Morrison (TDN, DCP) vs ARC (ME, RDP/RUP) vs NRC (NE, MP) vs ICAR (TDN/ME, DCP/MP).",
        "ICAR standards provide dedicated separate guidelines for zebu cattle, crossbreds, and buffaloes.",
        "Four reasons Western standards fail in India: Zebu lower basal metabolism, unique buffalo digestive power, straw-based basal diet, and tropical heat load."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "GADVASU 2022",
        "RAJUVAS 2021",
        "DUVASU 2020"
      ]
    },
    {
      "id": "u2-qa-l04",
      "type": "long",
      "marks": 12,
      "question": "Mechanisms and Factors Governing Ruminant Digestibility and Nutrient Utilization: Elaborate on chemical composition, lignocellulose matrix, associative effects, and physical processing.",
      "topicId": "u2-t06",
      "answer": "<p>Digestibility and nutrient utilization in ruminants depend on the ruminal microbial ecosystem's ability to enzymatically disassemble plant cell walls and cell contents.</p><h3>1. Plant Cell Wall Architecture and the Lignocellulose Matrix</h3><p>The plant cell wall consists of <b>Cellulose microfibrils</b> embedded in an amorphous matrix of <b>Hemicellulose</b> and <b>Pectin</b>, progressively encrusted during maturity by <b>Lignin</b>:</p><ul><li><b>Cellulose:</b> Linear polymer of β-1,4-D-glucopyranose units stabilized by extensive intra- and inter-chain hydrogen bonds forming crystalline microfibrils. Hydrolyzed exclusively by microbial endo- and exo-glucanases.</li><li><b>Lignin:</b> A complex, non-carbohydrate polymer of phenylpropanoid alcohols (coniferyl, sinapyl, and p-coumaryl alcohols). Lignin forms covalent <b>ester and ether cross-linkages</b> with hemicellulose and core cellulose. Lignin is totally indigestible anaerobically.</li><li><b>The Protective Barrier Effect:</b> Lignin acts as a physical shield preventing microbial cellulolytic enzymes (which are large macromolecules &gt;40 kDa) from physically contacting the cellulose-hemicellulose ester bonds. Consequently, each 1% increase in Acid Detergent Lignin (ADL) slashes dry matter digestibility by 3–4 percentage units.</li></ul><h3>2. Microbial Ecology &amp; Nitrogen Requirements</h3><p>Ruminal digestion of fibrous roughages is mediated by specialized cellulolytic bacteria (<i>Fibrobacter succinogenes</i>, <i>Ruminococcus flavefaciens</i>, <i>Ruminococcus albus</i>) and anaerobic fungi (<i>Neocallimastix</i>):</p><ul><li><b>Nitrogen Dependency:</b> Cellulolytic bacteria utilize exclusively ammonia (NH<sub>3</sub>) as their nitrogen source. If dietary crude protein drops below <b>7% (1.1% N)</b>, ruminal NH<sub>3</sub>-N collapses below the critical threshold of <b>5 mg/dL</b>, resulting in a cessation of microbial cellulase synthesis and a dramatic drop in forage digestibility.</li><li><b>Sulfur Requirement:</b> Rumen microbes require a Nitrogen:Sulfur ratio of <b>10:1 to 12:1</b> for synthesizing essential sulfur amino acids (methionine, cysteine); sulfur deficiency severely inhibits cellulolysis.</li></ul><h3>3. Associative Effects of Feeds</h3><p>When high levels of rapidly fermentable starchy concentrates (maize, sorghum &gt; 50% of diet) are fed alongside fibrous roughages, negative associative effects occur:</p><ul><li>Starch is rapidly fermented by amylolytic bacteria (<i>Streptococcus bovis</i>) into lactic acid and volatile fatty acids, causing ruminal pH to plunge from normal 6.5–6.8 down to &lt; 5.8.</li><li>Cellulolytic bacteria and ruminal protozoa are extremely acid-sensitive; their enzymatic attachment to plant fibre is completely inhibited below pH 6.0.</li><li>Furthermore, amylolytic bacteria outcompete cellulolytics for available nitrogen and trace minerals, leading to a <b>15–30% depression in roughage fibre digestibility</b>.</li></ul><h3>4. Physical Processing of Forages and Concentrates</h3><ul><li><b>Chopping of Straw:</b> Reduces sorting and chewing time; increases dry matter intake by 15–20% without significantly altering digestibility.</li><li><b>Fine Grinding &amp; Pelleting of Roughages:</b> Drastically reduces particle size below the critical threshold (1.18 mm) required to escape the rumen. Small particles pass rapidly through the reticulo-omasal orifice into the abomasum. Reduced ruminal retention time slashes fibre digestibility by 5–10%, but daily intake surges by 30–40% due to reduced physical rumen fill.</li><li><b>Steam Flaking &amp; Gelatinization of Grains:</b> Disrupts the dense peripheral protein matrix (zein) surrounding starch granules in maize, enhancing ruminal starch digestibility from 70% to &gt;95%.</li></ul>",
      "keyPoints": [
        "Lignocellulose matrix: Ester/ether linkages and physical barrier blocking microbial cellulase.",
        "Microbial ecology: Ammonia threshold (5 mg/dL) and N:S ratio (10:1) mandatory for cellulolysis.",
        "Associative effects: Starch overload dropping pH below 6.0 and inhibiting Fibrobacter.",
        "Physical processing: Chopping, grinding, pelleting, and steam flaking mechanisms explained."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2022",
        "GADVASU 2021",
        "TANUVAS 2023",
        "MAFSU 2020"
      ]
    },
    {
      "id": "u2-qa-l05",
      "type": "long",
      "marks": 12,
      "question": "Principles, Guidelines, and Practical Computation of a Dairy Cow Ration: Formulate a complete balanced daily ration for a 400 kg crossbred cow yielding 12 kg milk (4.0% fat) using ICAR standards and available feeds (Wheat straw, Green maize, and Concentrate mixture).",
      "topicId": "u2-t09",
      "answer": "<p>Ration formulation is the practical application of nutritional science to translate an animal's daily nutrient requirements into a palatable, balanced, and cost-effective daily feeding regimen.</p><h3>1. Animal Profile &amp; Physiological Parameters</h3><ul><li><b>Animal:</b> Crossbred Dairy Cow (<i>Bos taurus × Bos indicus</i>).</li><li><b>Live Body Weight (BW):</b> 400 kg.</li><li><b>Daily Milk Yield:</b> 12.0 kg.</li><li><b>Milk Fat Percentage:</b> 4.0% (requires no fat correction; 4% FCM = 12 kg).</li></ul><h3>2. Step-by-Step Nutrient Requirements (ICAR 2013 Standards)</h3><h4>A. Dry Matter Intake (DMI) Capacity:</h4><p>Crossbred cows consume <b>2.5 to 3.0 kg DM per 100 kg body weight</b>:<br><code>DMI Capacity = 400 × (2.75 / 100) = 11.0 kg Dry Matter / day</code>.</p><h4>B. Maintenance Requirements (for 400 kg Cow):</h4><ul><li><b>DCP for Maintenance:</b> ~250 g (0.25 kg).</li><li><b>TDN for Maintenance:</b> ~2.80 kg.</li></ul><h4>C. Production Requirements (for 12 kg Milk at 4.0% Fat):</h4><ul><li>Requirement per kg 4% milk = 45 g DCP and 310 g TDN.</li><li><b>DCP for Production:</b> 12 × 45 g = <b>540 g (0.54 kg)</b>.</li><li><b>TDN for Production:</b> 12 × 310 g = <b>3720 g (3.72 kg)</b>.</li></ul><h4>D. Total Daily Nutrient Requirements:</h4><ul><li><b>Total Dry Matter (DMI):</b> 11.0 kg</li><li><b>Total DCP:</b> 0.25 kg + 0.54 kg = <b>0.79 kg (790 g)</b></li><li><b>Total TDN:</b> 2.80 kg + 3.72 kg = <b>6.52 kg</b></li></ul><h3>3. Composition of Available Feeds (% on Dry Matter Basis)</h3><ul><li><b>Wheat Straw (Dry Roughage):</b> 90% DM, 0.0% DCP, 42% TDN.</li><li><b>Green Maize (Succulent Fodder):</b> 25% DM, 1.2% DCP, 58% TDN.</li><li><b>Concentrate Mixture:</b> 90% DM, 14.0% DCP, 72% TDN (Maize 35%, Mustard cake 25%, Wheat bran 37%, Mineral mix 2%, Salt 1%).</li></ul><h3>4. Step-by-Step Allocation of Feeds</h3><h4>Step 1: Roughage Allocation (Meeting Roughage DM)</h4><p>Target: 60% of total DM from roughages = <code>11.0 × 0.60 = 6.6 kg Roughage DM</code>.</p><ul><li><b>Green Maize:</b> Provide 16 kg on fresh basis = <code>16 × 0.25 = 4.0 kg DM</code>.<br>- <i>DCP from Green Maize:</i> <code>4.0 × (1.2 / 100) = 0.048 kg (48 g)</code>.<br>- <i>TDN from Green Maize:</i> <code>4.0 × (58 / 100) = 2.32 kg</code>.</li><li><b>Wheat Straw:</b> Provide 3.0 kg on fresh basis = <code>3.0 × 0.90 = 2.70 kg DM</code>.<br>- <i>DCP from Wheat Straw:</i> <code>2.70 × 0.0 = 0.00 kg</code>.<br>- <i>TDN from Wheat Straw:</i> <code>2.70 × (42 / 100) = 1.134 kg</code>.</li><li><b>Total Roughage Contribution:</b> <code>DM = 6.70 kg</code>, <code>DCP = 0.048 kg</code>, <code>TDN = 3.454 kg</code>.</li></ul><h4>Step 2: Deficit Calculation to be Met by Concentrate Mixture</h4><ul><li><b>DCP Deficit:</b> <code>0.790 kg - 0.048 kg = 0.742 kg (742 g)</code>.</li><li><b>TDN Deficit:</b> <code>6.520 kg - 3.454 kg = 3.066 kg</code>.</li></ul><h4>Step 3: Concentrate Mixture Allocation</h4><p>Calculate concentrate DM required to supply 0.742 kg DCP:<br><code>Concentrate DM Required = 0.742 / 0.14 = 5.30 kg DM</code>.<br>- <i>TDN supplied by 5.30 kg Concentrate DM:</i> <code>5.30 × 0.72 = 3.816 kg TDN</code> (satisfies and exceeds the 3.066 kg TDN requirement).<br>- <i>Fresh Concentrate Required:</i> <code>5.30 / 0.90 = 5.88 kg ≈ 5.9 kg fresh concentrate</code>.</p><h3>5. Final Balanced Ration Summary Table</h3><table border=\"1\" cellpadding=\"5\" style=\"border-collapse:collapse; width:100%; text-align:center;\"><thead><tr style=\"background:#f0f4f8;\"><th>Feed Ingredient</th><th>Fresh Weight (kg)</th><th>Dry Matter (kg)</th><th>DCP (g)</th><th>TDN (kg)</th></tr></thead><tbody><tr><td>Wheat Straw (Dry)</td><td>3.0</td><td>2.70</td><td>0</td><td>1.13</td></tr><tr><td>Green Maize (Succulent)</td><td>16.0</td><td>4.00</td><td>48</td><td>2.32</td></tr><tr><td>Concentrate Mixture</td><td>5.9</td><td>5.31</td><td>743</td><td>3.82</td></tr><tr style=\"font-weight:bold; background:#e8f4fd;\"><td>Total Supplied</td><td>24.9 kg</td><td>12.01 kg</td><td>791 g</td><td>7.27 kg</td></tr><tr style=\"font-weight:bold;\"><td>Total Required</td><td>—</td><td>11.00–12.00 kg</td><td>790 g</td><td>6.52 kg</td></tr></tbody></table><p><i>Conclusion: The formulated ration fully meets the DCP (791 g vs 790 g required) and TDN (7.27 kg vs 6.52 kg required) within the physiological dry matter intake capacity (12.0 kg DM ≈ 3.0% BW). Mineral mixture (120 g) and common salt (60 g) are incorporated into the concentrate.</i></p>",
      "keyPoints": [
        "Complete calculation for 400 kg crossbred cow producing 12 kg milk at 4.0% fat.",
        "DMI capacity correctly determined (2.5–3.0% BW = 11–12 kg DM).",
        "Maintenance and production requirements calculated using ICAR 2013 standards.",
        "Step-by-step allocation: Roughages (green maize + wheat straw) followed by concentrate deficit balancing.",
        "Final summary balance sheet matching requirements perfectly."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "GADVASU 2022",
        "TANUVAS 2021",
        "RAJUVAS 2020"
      ]
    }
  ],
  "unit-3": [
    {
      "id": "u3-qa-d01",
      "type": "define",
      "marks": 2,
      "question": "Define Metabolic Body Weight (W^0.75) and explain Kleiber's Law.",
      "topicId": "u3-t01",
      "answer": "<p><b>Metabolic Body Weight (W^0.75):</b> The mathematical expression of animal body mass (in kilograms) raised to the 0.75 power, representing the active physiological metabolizing mass of an animal.</p><p><b>Kleiber's Law (Max Kleiber, 1932):</b> Established that basal metabolic rate (BMR / fasting heat production) across all homeothermic animal species from mice to elephants does not scale directly with linear body weight, but is strictly proportional to body surface area and metabolic body size: <code>BMR (kcal/day) = 70 × W^0.75 (kg)</code>. Ruminant maintenance energy standards are universally calibrated per kg W<sup>0.75</sup>.</p>",
      "keyPoints": [
        "W^0.75 is body weight in kg raised to 0.75 power.",
        "Kleiber's Law: BMR = 70 × W^0.75 kcal/day across mammalian species.",
        "Universal reference base for calculating maintenance energy requirements."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "GADVASU 2022",
        "LUVAS 2021"
      ]
    },
    {
      "id": "u3-qa-d02",
      "type": "define",
      "marks": 2,
      "question": "Define Challenge Feeding (Lead Feeding) in dairy cattle.",
      "topicId": "u3-t14",
      "answer": "<p><b>Challenge Feeding (Lead Feeding):</b> The progressive feeding management practice of 'challenging' a high-potential dairy cow with increasing concentrate allowances starting <b>2 to 3 weeks before calving (steaming up)</b> and continuing into early lactation to support maximum peak milk production.</p><p>Concentrates are increased by <b>0.5 kg every 2–3 days</b> post-calving until the cow reaches her physiological peak milk yield (at 4–6 weeks postpartum) and no longer responds with additional milk output, thereby minimizing extreme postpartum negative energy balance and body tissue mobilization.</p>",
      "keyPoints": [
        "Begins 2–3 weeks pre-calving and continues into early lactation.",
        "Increasing concentrate by ~0.5 kg every few days to match genetic potential.",
        "Aims to maximize peak milk yield and mitigate negative energy balance."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "RAJUVAS 2022",
        "IVRI Annual 2021"
      ]
    },
    {
      "id": "u3-qa-d03",
      "type": "define",
      "marks": 2,
      "question": "Define Bypass Protein (RUP) and state its target dietary inclusion in high-yielding cows.",
      "topicId": "u3-t15",
      "answer": "<p><b>Bypass Protein (Rumen Undegradable Protein - RUP):</b> The fraction of dietary intact true protein that resists microbial proteolytic deamination and fermentation in the rumen-reticulum, passing intact to the abomasum and small intestine where it is digested by gastric pepsin and pancreatic trypsin into absorbable amino acids.</p><p><b>Target Dietary Level:</b> In high-yielding dairy cows producing &gt;15–20 kg milk/day, bypass protein should constitute <b>35% to 40% of the total dietary Crude Protein</b> (with 60–65% as Rumen Degradable Protein - RDP).</p>",
      "keyPoints": [
        "Dietary true protein escaping ruminal degradation to be digested in lower gut.",
        "Protects high-quality essential amino acids from microbial degradation to ammonia.",
        "Target level: 35–40% of total dietary crude protein in high yielders."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "DUVASU 2022",
        "GADVASU 2020"
      ]
    },
    {
      "id": "u3-qa-d04",
      "type": "define",
      "marks": 2,
      "question": "Define Bypass Fat (Protected Fat) and name two commercially available forms.",
      "topicId": "u3-t15",
      "answer": "<p><b>Bypass Fat (Rumen-Protected Fat):</b> Specially processed lipid supplements engineered to remain chemically inert and insoluble in the neutral ruminal environment (pH 6.2–6.8)—thus causing no toxic coating of feed particles or depression of microbial cellulolysis—while being fully dissociated, digested, and absorbed in the acidic abomasum (pH 2.0) and duodenum.</p><p><b>Two Commercial Forms:</b></p><ol><li><b>Calcium Soaps of Long-Chain Fatty Acids:</b> (e.g., Calcium salts of palm fatty acid distillates / Megalac). Insoluble at rumen pH &gt;6.0, dissociates into Ca<sup>2+</sup> and free fatty acids at abomasal pH &lt;3.5.</li><li><b>Hydrogenated / Prilled Saturated Triglycerides:</b> (High melting point &gt;55°C fats; e.g., tripalmitin / bypass prills).</li></ol>",
      "keyPoints": [
        "Lipids inert at rumen pH (6.5) but digested in acidic abomasum (pH < 3.5).",
        "Prevents ruminal cellulolytic depression while boosting energy density.",
        "Examples: Calcium soaps of fatty acids (Megalac) and prilled saturated fats."
      ],
      "table": null,
      "pyq": [
        "RAJUVAS 2023",
        "TANUVAS 2021",
        "LUVAS 2022"
      ]
    },
    {
      "id": "u3-qa-d05",
      "type": "define",
      "marks": 2,
      "question": "Define Non-Protein Nitrogen (NPN) and calculate the Crude Protein equivalent of pure urea.",
      "topicId": "u3-t16",
      "answer": "<p><b>Non-Protein Nitrogen (NPN):</b> All nitrogen-containing chemical compounds present in animal feeds that are not composed of polypeptide amino acid chains (true proteins), such as urea, biuret, ammonium salts, amides, and nitrates.</p><p><b>Crude Protein (CP) Equivalent of Urea:</b></p><ul><li>Chemical formula of fertilizer urea: <code>CO(NH2)2</code> (Molecular weight = 60 g/mol).</li><li>Nitrogen content: Contains 2 nitrogen atoms (28 g N / 60 g = <b>46.6% Nitrogen</b>).</li><li>Applying the standard protein multiplier (6.25): <code>CP Equivalent = 46.6 × 6.25 = 291.6% (Standard commercial rating = 287% CP)</code>.</li><li>Thus, <b>1.0 kg of feed-grade urea provides the equivalent of 2.87 kg of Crude Protein</b> when fully converted into microbial crude protein in the rumen.</li></ul>",
      "keyPoints": [
        "Nitrogenous compounds that are not true proteins (urea, ammonium salts).",
        "Fertilizer urea contains ~46% Nitrogen.",
        "Calculation: 46% N × 6.25 = 287% CP equivalent (1 g urea = 2.87 g CP)."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2022",
        "WBUAFS 2021",
        "KVAFSU 2023"
      ]
    },
    {
      "id": "u3-qa-d06",
      "type": "define",
      "marks": 2,
      "question": "Define Colostrum and explain 'Gut Closure' in neonatal calves.",
      "topicId": "u3-t08",
      "answer": "<p><b>Colostrum:</b> The thick, yellow, viscous mammary secretion produced by the cow immediately following parturition during the first 3 to 4 days, richly packed with maternal immunoglobulins (IgG1, IgG2, IgM, IgA), lactoferrin, trypsin inhibitors, fat-soluble vitamins (A, D, E), and growth factors (IGF-1).</p><p><b>Gut Closure:</b> The physiological and histological maturation of the neonatal calf's intestinal enterocytes wherein macromolecular pinocytosis ceases. At birth, enterocytes non-selectively engulf intact maternal immunoglobulins. Permeability drops rapidly: maximum during the first <b>2–4 hours (50% absorption)</b>, declining to &lt;10% by 12 hours, and closing completely by <b>24 hours of age</b>.</p>",
      "keyPoints": [
        "First mammary secretion rich in maternal immunoglobulins (IgG) and nutrients.",
        "Calf is born agammaglobulinemic (syndesmochorial placenta prevents in utero transfer).",
        "Gut closure: Cessation of enterocyte pinocytosis completed by 24 hours of life."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "GADVASU 2021",
        "DUVASU 2020"
      ]
    },
    {
      "id": "u3-qa-d07",
      "type": "define",
      "marks": 2,
      "question": "Define Calf Starter and state its standard nutritional specifications.",
      "topicId": "u3-t08",
      "answer": "<p><b>Calf Starter:</b> A highly palatable, nutrient-dense, dry concentrate feed mixture formulated specifically for young suckling calves, introduced from <b>7 to 10 days of age</b> to accelerate the transition from pre-ruminant to functional ruminant physiology by stimulating anatomical and metabolic rumen development.</p><p><b>Standard Nutritional Specifications (ICAR / NRC):</b></p><ul><li><b>Crude Protein (CP):</b> 22% to 24%.</li><li><b>Total Digestible Nutrients (TDN):</b> 75% to 80% (ME ≈ 3.0 Mcal/kg).</li><li><b>Crude Fibre:</b> &lt; 6–7% (coarsely ground, cracked, or rolled grains).</li><li><b>Minerals &amp; Vitamins:</b> 1.0% Ca, 0.7% P, Fortified with Vitamin A (10,000 IU/kg), Vitamin D3, and Vitamin E.</li></ul>",
      "keyPoints": [
        "High-energy, high-protein dry mash introduced at 1–2 weeks of life.",
        "Fermentation of starter starches produces Butyrate and Propionate, stimulating rumen papillae growth.",
        "Standard specs: 22–24% CP, 75–80% TDN, low crude fibre (<7%)."
      ],
      "table": null,
      "pyq": [
        "MAFSU 2022",
        "LUVAS 2021",
        "TANUVAS 2020"
      ]
    },
    {
      "id": "u3-qa-d08",
      "type": "define",
      "marks": 2,
      "question": "Define Steaming Up in dairy cattle and state its recommended duration.",
      "topicId": "u3-t10",
      "answer": "<p><b>Steaming Up:</b> The practice of feeding extra quantities of balanced concentrate mixture to pregnant dairy cows and heifers during the last <b>6 to 8 weeks before expected parturition</b> (close-up dry period) over and above their normal maintenance and fetal growth requirements.</p><p><b>Primary Objectives:</b> (1) Replenish maternal body reserves depleted during previous lactation (aiming for Body Condition Score 3.25–3.5 at calving); (2) Support rapid fetal growth occurring in the final trimester; (3) Develop mammary secretory parenchyma; (4) Adapt the ruminal microbial population and papillae to concentrate diets to prevent postpartum acidosis.</p>",
      "keyPoints": [
        "Supplemental concentrate feeding during final 6–8 weeks of gestation.",
        "Restores maternal tissue reserves to BCS 3.25–3.5.",
        "Supports 70% of fetal growth and prepares ruminal papillae for lactation."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2022",
        "RAJUVAS 2021",
        "NDVSU 2023"
      ]
    },
    {
      "id": "u3-qa-d09",
      "type": "define",
      "marks": 2,
      "question": "Define Dietary Cation-Anion Difference (DCAD) and state its mathematical formula.",
      "topicId": "u3-t17",
      "answer": "<p><b>Dietary Cation-Anion Difference (DCAD):</b> The net electrochemical balance of major fixed dietary monovalent and divalent cations and anions present in feed, which dictates systemic acid-base status and calcium mobilization.</p><p><b>Standard Mathematical Formula:</b><br><code>DCAD (mEq / kg of Diet Dry Matter) = (Na+ + K+) - (Cl- + S2-)</code><br><i>Calculated using milliequivalents: mEq = [mg of mineral / Atomic weight] × Valence.</i></p><p>Feeding a <b>negative DCAD diet (-50 to -100 mEq/kg DM)</b> via anionic salts (ammonium chloride, magnesium sulfate) to close-up dry cows induces mild compensated metabolic acidosis, sensitizing bone and kidney PTH receptors and preventing <b>Milk Fever</b>.</p>",
      "keyPoints": [
        "Formula: (Na+ + K+) - (Cl- + S2-) in mEq/kg DM.",
        "Negative DCAD (-50 to -100 mEq) induces mild metabolic acidosis.",
        "Sensitizes Parathyroid Hormone (PTH) receptors to prevent Parturient Hypocalcemia."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "GADVASU 2022",
        "TANUVAS 2021"
      ]
    },
    {
      "id": "u3-qa-d10",
      "type": "define",
      "marks": 2,
      "question": "Define Flushing in ewes and does and state its physiological benefits.",
      "topicId": "u3-t12",
      "answer": "<p><b>Flushing:</b> The nutritional management practice of increasing the plane of nutrition (supplementing <b>250 to 350 g of high-energy concentrate mixture</b> or providing lush green pasture daily) to breeding ewes and does starting <b>2 to 3 weeks prior to breeding and continuing 2–3 weeks into the mating season</b>.</p><p><b>Physiological Benefits:</b> (1) Stimulates secretion of pituitary gonadotropins (FSH and LH); (2) Increases follicular recruitment and ovulation rate; (3) Elevates twinning and lambing percentages by 10–20%; (4) Reduces early embryonic mortality.</p>",
      "keyPoints": [
        "High energy/protein supplementation (250–350 g/day) 2–3 weeks pre- and post-mating.",
        "Elevates systemic insulin and IGF-1, stimulating pituitary gonadotropin release.",
        "Increases ovulation rate, twinning percentage, and embryo survival."
      ],
      "table": null,
      "pyq": [
        "DUVASU 2023",
        "LUVAS 2020",
        "RAJUVAS 2021"
      ]
    },
    {
      "id": "u3-qa-d11",
      "type": "define",
      "marks": 2,
      "question": "Define Pregnancy Toxaemia (Twin Lamb Disease) in sheep and state its nutritional cause.",
      "topicId": "u3-t12",
      "answer": "<p><b>Pregnancy Toxaemia (Twin Lamb Disease / Ketonemia of Ewes):</b> A fatal metabolic disorder occurring in pregnant ewes and does during the <b>final 4 to 6 weeks of gestation</b>, characterized by severe hypoglycemia, hyperketonemia, hepatic lipidosis, and terminal encephalopathy.</p><p><b>Nutritional Cause:</b> Multiple fetuses (twins or triplets) demand massive glucose supplies (up to 40% of maternal glucose pool) while expanding uterine volume physically compresses the rumen, reducing dry matter intake capacity by 20–30%. When ewes are undernourished, extensive maternal adipose lipolysis floods the liver with NEFA, overwhelming the TCA cycle and causing massive ketone body accumulation.</p>",
      "keyPoints": [
        "Metabolic disease of late pregnant twin-bearing ewes and does.",
        "Caused by severe glucose deficit and intense maternal adipose lipolysis.",
        "Characterized by hypoglycemia, hyperketonemia, fatty liver, and neurological signs."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2022",
        "TANUVAS 2023",
        "KVAFSU 2021"
      ]
    },
    {
      "id": "u3-qa-d12",
      "type": "define",
      "marks": 2,
      "question": "Define Urea Toxicity in cattle and state the immediate field emergency antidote.",
      "topicId": "u3-t16",
      "answer": "<p><b>Urea Toxicity (Ammonia Poisoning):</b> An acute, lethal intoxication resulting from accidental ingestion of excessive urea or improper unadapted feeding, where bacterial urease hydrolyzes urea faster than rumen microbes can synthesize amino acids, causing massive ammonia accumulation, ruminal pH surge (&gt;8.0), and hyperammonemia.</p><p><b>Immediate Field Antidote:</b><br>Oral drench of <b>2 to 4 litres of 5% Acetic Acid (ordinary commercial Vinegar)</b> diluted with <b>20 to 30 litres of cold water</b>. The acetic acid neutralizes alkaline rumen pH, converting toxic lipophilic NH<sub>3</sub> into unabsorbable ammonium ions (NH<sub>4</sub><sup>+</sup>), while cold water chills the rumen, arresting urease enzyme activity.</p>",
      "keyPoints": [
        "Acute hyperammonemia caused by rapid ruminal ureolysis exceeding assimilation.",
        "Rumen pH surges >8.0, causing massive systemic ammonia absorption.",
        "Immediate antidote: Oral drench of 2–4 L of 5% vinegar (acetic acid) + cold water."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "GADVASU 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u3-qa-s01",
      "type": "short",
      "marks": 5,
      "question": "Detail the first-month nutritional management and rearing protocol for neonatal calves.",
      "topicId": "u3-t08",
      "answer": "<p>Neonatal calves are anatomical and physiological non-ruminants (pre-ruminants) born with an undeveloped rumen (abomasum forms ~60% of stomach volume). Management during the first month determines lifetime growth and productivity:</p><ul><li><b>1. The Colostrum Golden Hour Protocol:</b><br>- <i>Quantity:</i> Feed maternal colostrum at <b>10% of body weight</b> (3.0–3.5 litres for a 35 kg calf) within the first 24 hours.<br>- <i>Timing:</i> The first meal (2.0 litres) must be administered within <b>30 minutes to 2 hours of birth</b> to maximize pinocytotic absorption of IgG before gut closure occurs (&lt;24 hours).<br>- <i>Continuation:</i> Continue feeding colostrum/transition milk for the first 3–4 days.</li><li><b>2. Liquid Milk Feeding (Days 4–30):</b><br>- Whole milk or high-quality milk replacer (22% CP, 18–20% fat) fed at <b>10% of body weight daily</b>, divided into two equal feedings warmed to body temperature (38–39°C).<br>- Feed using a nipple pail or bottle to stimulate the <b>reticular (esophageal) groove reflex</b>, ensuring liquid bypasses the undeveloped rumen and flows directly into the abomasum for acid-pepsin digestion.</li><li><b>3. Introduction of Calf Starter &amp; Water (From Day 7–10):</b><br>- Offer fresh calf starter (22–24% CP, 75% TDN) ad libitum in small handfuls daily.<br>- <i>Physiological Role:</i> Microbial fermentation of concentrate starches generates <b>Butyrate and Propionate</b>, which act as chemical mitogens directly stimulating the elongation and vascularization of ruminal mucosal papillae.<br>- Clean, fresh drinking water must be provided ad libitum from day 7.</li><li><b>4. Forage Introduction:</b><br>- Introduce small quantities of fine, sun-cured leguminous hay (berseem/lucerne) from 2–3 weeks of age to stimulate ruminal muscular tone and volume.</li></ul>",
      "keyPoints": [
        "Colostrum: 10% body weight, first meal within 2 hours of life.",
        "Reticular groove reflex closure stimulated by warm milk nipple feeding.",
        "Calf starter introduced at 7–10 days: Butyrate stimulates ruminal papillae growth.",
        "Free access to clean drinking water mandatory from 1 week of age."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "GADVASU 2022",
        "TANUVAS 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u3-qa-s02",
      "type": "short",
      "marks": 5,
      "question": "Describe the manufacture, biological mechanism, and productive benefits of Bypass Nutrients (Bypass Protein and Bypass Fat).",
      "topicId": "u3-t15",
      "answer": "<p>In high-yielding dairy animals (&gt;15 kg milk/day), the genetic drive for milk production outstrips the nutrient delivery capacity of normal ruminal fermentation. Bypass technologies protect premium nutrients from ruminal degradation.</p><ul><li><b>1. Bypass Protein (Formaldehyde-Treated Protein):</b><br>- <i>Manufacturing:</i> Commercial oilseed cakes (mustard, soybean, groundnut cake) are treated with <b>commercial formalin (37% formaldehyde) at 1.0 to 1.2 g formaldehyde per 100 g crude protein</b> in an airtight mixer, followed by curing for 48 hours.<br>- <i>Mechanism:</i> Formaldehyde forms reversible methylene cross-linkages with free terminal amino groups of protein chains at neutral rumen pH (6.5–6.8), preventing microbial protease attachment. Upon entering the acidic abomasum (pH 2.0–2.5), the methylene bonds hydrolyze completely, releasing intact protein for host enzymatic digestion.<br>- <i>Benefits:</i> Enhances milk yield by 10–15%, improves milk protein content, and saves 20–25% expensive dietary cake protein.</li><li><b>2. Bypass Fat (Calcium Soaps of Fatty Acids):</b><br>- <i>Manufacturing:</i> Long-chain fatty acids (palm oil distillates) are reacted with calcium oxide/hydroxide under steam and pressure to synthesize insoluble Calcium Soaps (e.g., Megalac).<br>- <i>Mechanism:</i> Calcium soaps remain insoluble and inert at ruminal pH &gt;6.0, completely avoiding toxic biohydrogenation or adhesion to fibre particles. In the abomasum (pH &lt;3.0), they dissociate into free fatty acids and Ca<sup>2+</sup>, which are digested in the duodenum with &gt;85% efficiency.<br>- <i>Benefits:</i> Densifies dietary energy without lowering fibre cellulolysis, alleviates postpartum negative energy balance, improves conception rates, and elevates milk fat percentage by 0.3–0.5 units.</li></ul>",
      "keyPoints": [
        "Formaldehyde treatment: 1.0–1.2 g formalin / 100 g CP forms pH-dependent methylene bonds.",
        "Bypass fat: Calcium soaps insoluble at rumen pH 6.5, dissociates in abomasum at pH 2.5.",
        "Prevents cellulolytic inhibition while supplying concentrated net energy.",
        "Productive benefits: +10-15% milk yield, higher milk fat test, improved fertility."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2022",
        "LUVAS 2023",
        "DUVASU 2021",
        "MAFSU 2021"
      ]
    },
    {
      "id": "u3-qa-s03",
      "type": "short",
      "marks": 5,
      "question": "Enumerate the golden rules, safe threshold limits, and precautions for feeding Urea to ruminants.",
      "topicId": "u3-t16",
      "answer": "<p>Urea is a cost-effective non-protein nitrogen (NPN) supplement, but its safe utilization demands strict adherence to physiological principles:</p><ol><li><b>Threshold Dietary Limits:</b><br>- Urea should not exceed <b>1% of the total ration Dry Matter</b>.<br>- Urea should not exceed <b>3% of the concentrate mixture</b>.<br>- Urea should not supply more than <b>one-third (33%) of the total dietary nitrogen</b>.</li><li><b>Gradual Adaptation:</b><br>Microbes require <b>2 to 3 weeks of gradual step-up feeding</b> to induce the microbial enzyme systems necessary for efficient ammonia assimilation.</li><li><b>Mandatory Carbohydrate Synchrony:</b><br>Urea must always be fed alongside a source of readily available, fermentable non-structural carbohydrates (e.g., molasses, crushed maize, sorghum). Starch releases ATP and carbon skeletons (α-ketoglutarate) at a rate that matches ammonia release.</li><li><b>Strict Mineral Balancing (Sulfur &amp; Phosphorus):</b><br>Microbes require sulfur to synthesize methionine and cysteine. Maintain a dietary <b>Nitrogen-to-Sulfur (N:S) ratio of 10:1</b> (supplement with ammonium sulfate or sodium sulfate).</li><li><b>Absolute Prohibitions:</b><br>- <i>Never feed to pre-ruminant young calves (&lt;3–4 months):</i> Their rumen is non-functional, leading to direct fatal absorption.<br>- <i>Never dissolve in drinking water:</i> Ingestion rate is too fast, causing acute toxicity.<br>- <i>Never mix with raw soybeans:</i> Raw soy contains active plant <i>urease</i> enzyme which rapidly hydrolyzes urea in the feed trough before ingestion.<br>- <i>Never feed to starved or fasted animals:</i> Fasting accelerates ammonia absorption across ruminal walls.</li></ol>",
      "keyPoints": [
        "Dietary limits: Max 1% of total DM, 3% of concentrate, 1/3rd of total dietary N.",
        "2–3 weeks gradual adaptation period.",
        "Requires readily fermentable carbohydrates (molasses/grain) and N:S ratio of 10:1.",
        "Prohibitions: Never feed to calves, never dissolve in water, never combine with raw soy."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "GADVASU 2021",
        "RAJUVAS 2022",
        "TANUVAS 2020"
      ]
    },
    {
      "id": "u3-qa-s04",
      "type": "diff",
      "marks": 5,
      "question": "Differentiate between Subacute Ruminal Acidosis (SARA) and Acute Ruminal Lactic Acidosis in dairy cattle.",
      "topicId": "u3-t17",
      "answer": "<p>Ruminal acidosis is a nutritional disease of ruminants caused by the overconsumption of rapidly fermentable starchy concentrates. It manifests in two distinct clinicopathological entities depending on severity and acid type:</p>",
      "keyPoints": [
        "SARA: Intermittent pH 5.2–5.6 driven by VFA accumulation; chronic insidious herd problem.",
        "Acute Acidosis: Severe pH < 5.0 driven by D/L-lactic acid; medical emergency with high mortality.",
        "Pathology of SARA: Laminitis, milk fat depression, liver abscesses.",
        "Prevention: Adequate physically effective NDF (peNDF) and buffer supplementation."
      ],
      "table": {
        "title": "Clinical Comparison: Subacute Ruminal Acidosis (SARA) vs Acute Lactic Acidosis",
        "headers": [
          "Clinical Feature",
          "Subacute Ruminal Acidosis (SARA)",
          "Acute Ruminal Lactic Acidosis"
        ],
        "rows": [
          [
            "Ruminal pH Threshold",
            "Intermittent drops between 5.2 and 5.6 for >3–5 hours/day",
            "Catastrophic drop below 5.0 (often 4.0–4.5)"
          ],
          [
            "Dominant Acid Accumulated",
            "Excess Volatile Fatty Acids (Propionate & Butyrate)",
            "D-lactic and L-lactic acid (up to 50–100 mM)"
          ],
          [
            "Microbial Population",
            "Viable microflora with elevated Streptococcus bovis",
            "Complete collapse of cellulolytics & ciliate protozoa; overgrowth of Lactobacillus"
          ],
          [
            "Clinical Presentation",
            "Subtle, insidious herd problem: fluctuating DMI, loose bubbly manure, milk fat depression (<3.0%)",
            "Acute individual emergency: severe anorexia, dehydration, ruminal stasis, staggering ataxia, recumbency"
          ],
          [
            "Secondary Sequelae",
            "Subclinical laminitis (sole ulcers), rumenitis, caudal vena cava syndrome, liver abscesses",
            "Severe systemic metabolic acidosis, ruminal mucosal sloughing, renal failure, fatal shock"
          ],
          [
            "Mortality Rate",
            "Low direct mortality; high herd economic culling",
            "Very high (>50–70% without aggressive clinical intervention)"
          ],
          [
            "Primary Prevention",
            "Maintain physically effective NDF (peNDF > 21%), buffer diets with 1.0% NaHCO3 + 0.5% MgO",
            "Strict limit on grain access; gradual concentrate step-up; avoid accidental bin break-ins"
          ]
        ]
      },
      "pyq": [
        "IVRI Annual 2023",
        "TANUVAS 2022",
        "GADVASU 2020",
        "LUVAS 2021"
      ]
    },
    {
      "id": "u3-qa-s05",
      "type": "short",
      "marks": 5,
      "question": "Explain the pathogenesis and dietary prevention of Parturient Hypocalcemia (Milk Fever) in dairy cows. Detail the role of pre-partum DCAD feeding.",
      "topicId": "u3-t17",
      "answer": "<p><b>Pathogenesis:</b><br>With the sudden onset of lactation at calving, a high-yielding dairy cow secretes <b>20 to 30 grams of calcium into colostrum</b> in a single day—roughly 8 to 10 times the total circulating calcium pool present in her blood plasma (plasma pool ≈ 3 g Ca). Serum total calcium plummets from normal (9–11 mg/dL) to below <b>5.0 mg/dL</b>:</p><ul><li>Loss of extracellular Ca<sup>2+</sup> halts acetylcholine release at neuromuscular junctions, causing loss of smooth and skeletal muscle tone.</li><li>Presents in 3 stages: Stage 1 (tremors, restlessness); Stage 2 (sternal recumbency, 'S'-shaped neck curvature, subnormal temperature); Stage 3 (lateral recumbency, flaccid coma, and death from circulatory failure).</li><li><i>Homeostatic Failure:</i> Pre-partum diets rich in potassium (green legume fodders, berseem) induce mild metabolic alkalosis. Alkaline blood alters the physical conformation of the Parathyroid Hormone (PTH) receptor on osteoclasts and renal tubule cells, rendering tissues refractory to PTH. Bone calcium resorption and 1,25-(OH)<sub>2</sub>D<sub>3</sub> synthesis fail at the critical hour of calving.</li></ul><p><b>Dietary Prevention via Negative DCAD Strategy:</b></p><ul><li>Feed a <b>Negative DCAD diet (-50 to -100 mEq / kg DM)</b> during the close-up dry period (last 3 weeks of gestation) using anionic salts (Ammonium Chloride, Ammonium Sulfate, Magnesium Sulfate).</li><li>Anionic diets induce a mild, compensated <b>hyperchloremic metabolic acidosis</b> (monitored by urine pH: target 6.0–6.5 in crossbred cows).</li><li>Systemic acidosis restores the binding affinity of PTH to its receptors, priming osteoclasts for active bone calcium resorption and stimulating renal 1-α-hydroxylase days before calving. When lactation begins, calcium mobilization proceeds instantly.</li></ul>",
      "keyPoints": [
        "Pathogenesis: Colostral calcium drain depleting total blood calcium pool (<5.0 mg/dL).",
        "Metabolic alkalosis from high K diets desensitizes tissues to Parathyroid Hormone.",
        "Flaccid tetany and recumbency due to neuromuscular transmission failure.",
        "Negative DCAD (-50 to -100 mEq) induces metabolic acidosis, sensitizing PTH receptors."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "DUVASU 2022",
        "RAJUVAS 2021",
        "KVAFSU 2020"
      ]
    },
    {
      "id": "u3-qa-s06",
      "type": "short",
      "marks": 5,
      "question": "Describe the nutritional management of dairy cows during the Transition Period.",
      "topicId": "u3-t10",
      "answer": "<p>The <b>Transition Period</b> is defined as the critical 6-week window extending from <b>3 weeks before calving to 3 weeks after calving</b>. It represents the most vulnerable phase in a dairy cow's life, during which &gt;80% of all metabolic and infectious disorders occur.</p><p><b>Key Physiological Challenges:</b></p><ul><li><b>Dry Matter Intake (DMI) Depression:</b> DMI naturally drops by 30% in the final 7–10 days before calving due to hormonal shifts (surging estrogen) and fetal physical compression.</li><li><b>Negative Energy Balance (NEB):</b> Postpartum energy requirements for milk jump 300%, while feed intake lags, forcing massive adipose tissue mobilization (NEFA surge).</li></ul><p><b>Phase-Specific Nutritional Strategies:</b></p><ul><li><b>1. Close-Up Dry Period (3 Weeks Pre-Partum):</b><br>- <i>Energy Density:</i> Increase concentrate feeding moderately (steaming up with 2.5–3.5 kg concentrate/day) to elongate ruminal papillae and adapt microbes to starch.<br>- <i>DCAD Management:</i> Formulate a negative DCAD ration (-50 to -100 mEq/kg) to prime calcium homeostatic mechanisms.<br>- <i>Nutrient Density:</i> 14–15% Crude Protein, with adequate bypass protein (RUP); fortify with Vitamin E (1000–1200 IU/day) and Selenium (0.3 ppm) to enhance immune function.</li><li><b>2. Fresh Cow Period (0 to 3 Weeks Post-Partum):</b><br>- <i>Combat NEB:</i> Supplement glucogenic precursors (oral Propylene Glycol 250–300 mL/day or Calcium Propionate) to stimulate hepatic gluconeogenesis and prevent Ketosis.<br>- <i>Bypass Nutrients:</i> Introduce Bypass Fat (300–400 g/day) and Bypass Protein to increase energy density without upsetting rumen cellulolysis.<br>- <i>Physical Fibre &amp; Buffers:</i> Maintain adequate physically effective NDF (peNDF) using clean, chopped hay, and add 1.0% Sodium Bicarbonate to prevent ruminal acidosis.</li></ul>",
      "keyPoints": [
        "Critical 6-week window (3 weeks pre- to 3 weeks post-calving).",
        "DMI dips 30% while energy demands triple, driving Negative Energy Balance.",
        "Pre-partum: Steaming up, negative DCAD, Vitamin E/Se immune support.",
        "Post-partum: Propylene glycol, bypass fat, dietary buffers, and high-quality forages."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2022",
        "GADVASU 2023",
        "TANUVAS 2021",
        "WBUAFS 2020"
      ]
    },
    {
      "id": "u3-qa-s07",
      "type": "short",
      "marks": 5,
      "question": "Outline the nutrient requirements and feeding management of Breeding Bulls and Working Draft Bullocks.",
      "topicId": "u3-t11",
      "answer": "<p><b>1. Nutritional Management of Breeding Bulls:</b></p><ul><li><b>Energy Management:</b> Bulls require balanced energy to maintain active libido and vigor without becoming obese. Obesity causes scrotal fat accumulation, insulating the testes and impairing thermoregulation, which causes testicular degeneration and poor sperm motility. Maintain BCS at <b>3.0 to 3.25</b>.</li><li><b>Protein:</b> Concentrate mixture with <b>14–16% Crude Protein</b> fed at 2.5–3.5 kg daily depending on body weight (500–700 kg) and service frequency.</li><li><b>Micronutrients for Spermatogenesis:</b><br>- <i>Vitamin A:</i> Essential for germinal epithelial maintenance (deficiency causes azoospermia, testicular atrophy, and high proportion of abnormal spermatozoa). Provide 40,000–50,000 IU/day.<br>- <i>Vitamin E &amp; Selenium:</i> Protects sperm membrane PUFA from oxidative damage; maintains motility.<br>- <i>Zinc:</i> Crucial cofactor for DNA/RNA polymerases and steroidogenesis; deficiency depresses libido and semen volume.</li></ul><p><b>2. Nutritional Management of Working Draft Bullocks:</b></p><ul><li><b>Energy for Draft Work:</b> Work energy is required strictly in addition to maintenance. Energy expenditure scales directly with work intensity:<br>- <i>Light Work (4 hours ploughing/carting):</i> Maintenance + <b>20–30% extra TDN</b>.<br>- <i>Medium Work (6 hours continuous work):</i> Maintenance + <b>40–50% extra TDN</b>.<br>- <i>Heavy Work (8 hours heavy operations):</i> Maintenance + <b>70–80% extra TDN</b>.</li><li><b>Protein &amp; Water:</b> Work does not substantially increase muscular protein catabolism; hence protein requirements increase only marginally to replace sweat losses. Provide ad libitum clean water and <b>1.5% common salt (NaCl)</b> in the concentrate to replenish heavy electrolyte losses incurred through sweating.</li></ul>",
      "keyPoints": [
        "Breeding bulls: Avoid obesity (scrotal fat disrupts spermatogenesis); provide Vit A, E, and Zinc.",
        "Working bullocks: Energy scales with work load (Light: +30%, Medium: +50%, Heavy: +80% TDN).",
        "Muscular work consumes carbohydrates/fats, not protein.",
        "Mandatory electrolyte (salt) and abundant water supplementation for working animals."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2021",
        "RAJUVAS 2023",
        "NDVSU 2022",
        "DUVASU 2020"
      ]
    },
    {
      "id": "u3-qa-s08",
      "type": "short",
      "marks": 5,
      "question": "Describe strategies for Drought and Scarcity Feeding of ruminants. Detail Complete Feed Blocks (CFB) and UMMB.",
      "topicId": "u3-t10",
      "answer": "<p>During severe natural calamities (droughts, floods), conventional green fodders and grains vanish. Livestock survival depends on innovative technologies to convert poor-quality agro-wastes into maintenance rations:</p><ul><li><b>1. Survival Feeding Principles:</b><br>Shift breeding herds from production standards to <b>maintenance survival rations</b> (providing ~70–80% of normal maintenance energy to preserve life without fatal cachexia).</li><li><b>2. Urea-Molasses-Mineral Blocks (UMMB):</b><br>- <i>Composition:</i> Molasses (35–45%), Urea (8–10%), Mineral Mixture (6–10%), Salt (5%), Binder / Gelling agent (Calcium Oxide / Quick lime or Bentonite 8–10%), Bran/Deoiled rice bran (15–20%).<br>- <i>Principle:</i> Hard, solidified lick block. Animals lick it slowly throughout the day. Provides a continuous, slow trickle of fermentable nitrogen (urea), soluble energy (molasses), and essential minerals into the rumen, maximizing the cellulolytic digestion of dry straws fed as basal roughage.</li><li><b>3. Complete Feed Blocks (CFB):</b><br>- <i>Manufacturing:</i> Poor-quality crop residues (wheat straw, bagasse, paddy straw, cotton stalks - 60–70%) are chopped and blended with a concentrate mixture (30–40% containing molasses, urea, bran, minerals). The mixture is compressed under high hydraulic pressure (3000–5000 psi) into dense, compact rectangular blocks (5–10 kg).<br>- <i>Advantages:</i> Densifies bulky roughages (reduces volume by 60–70%, slashing transport and disaster relief haulage costs), prevents selective ingredient sorting, and ensures balanced nutrient intake per bite.</li><li><b>4. Exploitation of Unconventional Feeds:</b><br>Judicious feeding of sugarcane bagasse, babul (<i>Acacia nilotica</i>) pods, Prosopis juliflora pods (up to 20–30%), oak tree leaves, and ensiled poultry excreta.</li></ul>",
      "keyPoints": [
        "Survival feeding: Focuses on sustaining life at 70–80% maintenance requirements.",
        "UMMB: Solidified lick block providing steady trickle of NPN, molasses, and minerals.",
        "Complete Feed Blocks (CFB): 60:40 roughage-to-concentrate hydraulically densified blocks.",
        "Slashes relief transport costs and prevents feed ingredient sorting."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "TANUVAS 2021",
        "GADVASU 2022",
        "LUVAS 2020"
      ]
    },
    {
      "id": "u3-qa-l01",
      "type": "long",
      "marks": 12,
      "question": "Comprehensive Nutritional Management and Ration Balancing for High-Yielding Dairy Cows throughout the Lactation Cycle: Elaborate across the four phases of lactation, challenge feeding, and prevention of metabolic crashes.",
      "topicId": "u3-t04",
      "answer": "<p>High-producing dairy cows undergo profound physiological and metabolic transformations during a standard 305-day lactation cycle. Dividing the cycle into four distinct management phases allows targeted nutritional interventions that maximize peak milk yield, sustain persistency, and safeguard metabolic health.</p><h3>Phase 1: Early Lactation (Calving to Day 70 postpartum / Peak Yield)</h3><ul><li><b>Physiological State:</b> Milk yield increases rapidly, reaching peak production at 4 to 6 weeks postpartum. In contrast, voluntary <b>Dry Matter Intake (DMI) lags behind</b>, peaking only at 8 to 10 weeks postpartum. This creates severe physiological <b>Negative Energy Balance (NEB)</b>. The cow mobilizes body fat reserves (up to 0.5–1.0 kg body fat/day) to bridge the energy deficit.</li><li><b>Nutritional Strategies:</b><br>- <i>Challenge Feeding:</i> Post-calving, increase concentrate by 0.5 kg every 2–3 days until peak milk yield is attained.<br>- <i>Energy Densification:</i> Incorporate <b>Bypass Fat (300–400 g/day)</b> to increase energy density without adding starchy grains.<br>- <i>Protein Quality:</i> Ration Crude Protein must be <b>17–19%</b>, with <b>35–40% Bypass Protein (RUP)</b> to supply essential limiting amino acids (Methionine and Lysine) directly to the small intestine.<br>- <i>Fibre &amp; Buffering:</i> Maintain minimum 19–21% physically effective NDF (peNDF) with a roughage:concentrate ratio of not less than 45:55. Supplement with <b>1.0% Sodium Bicarbonate and 0.5% Magnesium Oxide</b> to buffer the rumen and maintain milk fat test (&gt;3.5%).</li></ul><h3>Phase 2: Mid-Lactation (Day 70 to Day 140 postpartum / Peak DMI)</h3><ul><li><b>Physiological State:</b> Cow reaches maximum voluntary Dry Matter Intake (3.5–3.8% of body weight). Milk yield slowly declines by 8–10% per month (persistency phase). The cow transitions from negative energy balance to energy equilibrium.</li><li><b>Nutritional Strategies:</b> Feed to maintain peak milk persistency; adjust concentrate-to-roughage ratio to 50:50; maximize consumption of high-quality succulent green forages.</li></ul><h3>Phase 3: Late Lactation (Day 140 to Day 305 postpartum / Body Reserve Replenishment)</h3><ul><li><b>Physiological State:</b> Milk production continues to decline; the cow enters positive energy balance and is pregnant (fetal growth accelerating).</li><li><b>Nutritional Strategies:</b> This is the most efficient biological phase to <b>restore depleted maternal body tissue reserves</b> (converting feed energy to body fat is ~75% efficient during lactation vs only ~60% during the dry period). Aim for a Body Condition Score (BCS) of <b>3.25 to 3.5 (on a 5-point scale)</b> at dry-off. Increase roughage proportion to 60–70% of DM.</li></ul><h3>Phase 4: Dry &amp; Transition Period (60 Days prior to calving)</h3><ul><li><b>A. Far-Off Dry Period (Day 60 to Day 21 pre-partum):</b> Maintain body condition on high-roughage, moderate-protein (12% CP) diets. Avoid overfeeding concentrates which causes 'Fat Cow Syndrome' and dystocia.</li><li><b>B. Close-Up / Transition Period (Last 3 Weeks pre-partum):</b><br>- Feed a <b>Negative DCAD diet (-50 to -100 mEq/kg)</b> to prevent Milk Fever.<br>- Implement 'steaming up' (introduce 2.5–3.5 kg lactation concentrate) to elongate ruminal papillae and adapt microflora.<br>- Fortify with antioxidant vitamins (Vitamin E 1000 IU/day, Selenium 0.3 ppm) to bolster neutrophil competence and prevent retained placenta/mastitis.</li></ul>",
      "keyPoints": [
        "Exhaustive breakdown of all 4 lactation phases.",
        "Phase 1: Negative Energy Balance, challenge feeding, bypass fat/protein, rumen buffers.",
        "Phase 2: Maximizing peak DMI and maintaining persistency.",
        "Phase 3: Restoring body condition reserves to BCS 3.25–3.5 before drying off.",
        "Phase 4: Far-off maintenance vs close-up negative DCAD and steaming up."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "GADVASU 2022",
        "TANUVAS 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u3-qa-l02",
      "type": "long",
      "marks": 12,
      "question": "Biochemistry, Microbial Physiology, and Toxicity of Non-Protein Nitrogen (NPN): Discuss microbial ureolysis, assimilation pathways, synchrony with carbohydrates, and the pathophysiology, diagnosis, and emergency treatment of Urea Poisoning.",
      "topicId": "u3-t16",
      "answer": "<p>Non-Protein Nitrogen (NPN) feeding exploits the unique symbiotic ability of rumen microflora to convert simple, non-amino acid nitrogenous compounds into high-quality microbial protein. However, the narrow margin of safety between nutritional efficacy and fatal toxicity demands deep biochemical comprehension.</p><h3>1. Biochemistry of Microbial Nitrogen Assimilation</h3><ul><li><b>A. Microbial Ureolysis:</b><br>Ingested urea dissolves instantly in ruminal liquor and is rapidly hydrolyzed by the bacterial nickel-metalloenzyme <b>Urease</b> (predominantly synthesized by <i>Ureaplasma</i> and epimural bacteria):<br><code>CO(NH2)2 + H2O --(Bacterial Urease)--> 2 NH3 + CO2</code>.<br>This reaction occurs <b>4 to 5 times faster</b> than the rate at which bacteria can assimilate the resulting ammonia.</li><li><b>B. Cellular Incorporation of Ammonia into Amino Acids:</b><br>Rumen bacteria take up un-ionized NH<sub>3</sub> across their cell membranes and fix it into amino acids via two primary enzymatic pathways:<br>- <b>Glutamate Dehydrogenase (GDH) Pathway:</b> Operates under high ruminal NH<sub>3</sub> concentrations (&gt;5 mM):<br><code>α-Ketoglutarate + NH3 + NADPH + H+ <==> L-Glutamate + NADP+ + H2O</code>.<br>- <b>GS-GOGAT Pathway (Glutamine Synthetase - Glutamate Synthase):</b> High-affinity ATP-dependent system operating under low NH<sub>3</sub> conditions (&lt;1 mM):<br><code>Glutamate + NH3 + ATP --(GS)--> Glutamine + ADP + Pi</code>;<br><code>Glutamine + α-Ketoglutarate + NADPH --(GOGAT)--> 2 Glutamate + NADP+</code>.<br>- <i>Transamination:</i> From glutamate, amino groups are transferred via aminotransferases to other keto-acids to synthesize the entire spectrum of essential and non-essential amino acids.</li><li><b>C. The Crucial Principle of Energy-Ammonia Synchrony:</b><br>Microbial protein synthesis requires simultaneous availability of: (1) Ammonia (NH<sub>3</sub>), (2) Carbon skeletons (keto-acids like α-ketoglutarate, pyruvate), and (3) Chemical energy (ATP). Starch from grains or sugars from molasses ferment at rates that synchronize with ammonia generation. If rapid fermentation starch is missing, ammonia accumulates unassimilated.</li></ul><h3>2. Pathophysiology of Urea Toxicity (Hyperammonemia)</h3><p>Toxicity occurs when ruminal ammonia production exceeds microbial assimilation capacity:</p><ul><li><b>Ruminal Alkalosis:</b> Ammonia accumulation consumes hydrogen ions, driving ruminal pH upward from normal 6.5 to <b>&gt;8.0</b>.</li><li><b>Ammonia Absorption:</b> At pH 6.5, nitrogen exists largely as ionized ammonium ions (NH<sub>4</sub><sup>+</sup>), which cannot easily cross the ruminal lipid bilayer. But at pH &gt;7.5–8.0, the equilibrium shifts completely to <b>free, un-ionized, lipid-soluble Ammonia (NH3)</b>, which diffuses passively and massively across the ruminal wall into mesenteric venous blood.</li><li><b>Hepatic Exhaustion:</b> The portal blood ammonia overwhelms the liver's capacity to synthesize urea via the ornithine cycle. Systemic peripheral blood ammonia surges from normal (&lt;0.5 mg/dL) to toxic levels <b>&gt;1.5–2.0 mg/dL</b>.</li><li><b>Neurotoxicity:</b> Hyperammonemia enters the central nervous system, inhibiting glutamate uptake by astrocytes and depleting α-ketoglutarate, halting the Krebs cycle. Severe lactic acidosis, cardiac arrhythmias, muscle tetany, convulsions, and respiratory arrest ensue within 30 to 60 minutes.</li></ul><h3>3. Clinical Signs, Diagnosis, and Emergency Treatment</h3><ul><li><b>Clinical Signs:</b> Severe abdominal pain, teeth grinding, frothy salivation, bloat, muscle tremors, hyperesthesia, ataxia, sternal recumbency, violent extensor spasms, tetanic convulsions, and death within 1–2 hours.</li><li><b>Diagnosis:</b> History of access to urea; blood ammonia &gt;1.5 mg/dL; rumen fluid pH &gt;8.0 with strong pungent ammonia odor.</li><li><b>Emergency Field Treatment Protocol:</b><br>- Drench immediately with <b>2 to 4 litres of 5% Acetic Acid (ordinary commercial Vinegar)</b> diluted in <b>20 to 30 litres of ice-cold water</b>.<br>- <i>Mechanism:</i> Acetic acid instantly drops ruminal pH below 7.0, converting toxic un-ionized NH<sub>3</sub> into non-absorbable NH<sub>4</sub><sup>+</sup> (ammonium acetate); cold water cools the rumen, physically slowing urease enzymatic kinetics.<br>- Administer intravenous fluids (Normal Saline + Calcium Borogluconate) to manage dehydration and tetany.</li></ul>",
      "keyPoints": [
        "Microbial urease kinetics (4–5x faster than assimilation).",
        "Biochemical assimilation pathways: GDH vs GS-GOGAT pathways detailed.",
        "Energy-nitrogen synchrony: Starch ATP and carbon skeletons mandatory.",
        "Pathophysiology: Ruminal pH > 8.0 shifts NH4+ to lipid-soluble NH3; hepatic overflow leads to hyperammonemia.",
        "Emergency therapy: 2–4 L vinegar (5% acetic acid) + cold water drench."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u3-qa-l03",
      "type": "long",
      "marks": 12,
      "question": "Comprehensive Review of Major Metabolic and Nutritional Disorders in Dairy Cattle: Detailed treatise on Bovine Ketosis, Milk Fever, Ruminal Acidosis, Grass Tetany, and Frothy Bloat.",
      "topicId": "u3-t17",
      "answer": "<p>Metabolic diseases in high-yielding dairy cows are production diseases resulting from physiological mismatches between nutrient intake and the biochemical demands of heavy lactation.</p><h3>Comparative Systemic Review Matrix</h3>",
      "keyPoints": [
        "Comprehensive review of all 5 major bovine metabolic disorders.",
        "Ketosis: Hypoglycemia and hyperketonemia from oxaloacetate depletion during NEB.",
        "Milk fever: Flaccid paralysis from sudden colostral calcium drainage; negative DCAD prevention.",
        "Ruminal acidosis: S. bovis and lactic acid accumulation from grain overload.",
        "Grass tetany: Hypomagnesemia inducing painful tetanic convulsions.",
        "Frothy bloat: Persistent stable foam trapping fermentation gases; poloxalene treatment."
      ],
      "table": {
        "title": "Comprehensive Diagnostic & Nutritional Matrix of Bovine Metabolic Disorders",
        "headers": [
          "Disorder",
          "Primary Nutritional Etiology",
          "Biochemical Pathogenesis",
          "Pathognomonic Clinical Signs",
          "Therapeutic & Nutritional Interventions"
        ],
        "rows": [
          [
            "Bovine Ketosis (Acetonemia)",
            "Severe Negative Energy Balance in early lactation; underfeeding starchy energy",
            "Intense adipose lipolysis (NEFA surge); depletion of oxaloacetate stalls Krebs cycle; massive liver synthesis of Acetoacetate & β-hydroxybutyrate",
            "Sweet chloroform-like acetone breath, refusal of concentrates, rapid weight loss, nervous pacing / licking",
            "IV 50% Dextrose (500 mL); oral Propylene glycol (300 mL/day); Glucocorticoids; supplement bypass fat pre-partum"
          ],
          [
            "Parturient Hypocalcemia (Milk Fever)",
            "Colostral calcium drainage; pre-partum high-potassium alkalotic diets",
            "Failure of acute skeletal calcium mobilization due to PTH receptor desensitization; blood calcium plunges <5.0 mg/dL",
            "Stage 1: excitability; Stage 2: sternal recumbency, 'S'-shaped neck kink, cold ears; Stage 3: flaccid coma",
            "Slow IV Calcium Borogluconate (25% 450 mL); feed negative DCAD diets (-50 to -100 mEq) with anionic salts in close-up dry period"
          ],
          [
            "Ruminal Lactic Acidosis (Grain Overload)",
            "Sudden gorging on rapidly fermentable starchy grains (maize, wheat)",
            "Amylolytic Streptococcus bovis & Lactobacillus overgrowth; D/L-lactic acid accumulates; rumen pH drops <5.0; systemic dehydration & shock",
            "Severe anorexia, complete rumen stasis, splashy watery diarrhea, profound weakness, recumbency",
            "Rumen evacuation/lavage; oral antacids (Magnesium hydroxide 500 g); IV Sodium Bicarbonate; buffer diets with 1.0% NaHCO3"
          ],
          [
            "Hypomagnesemic Tetany (Grass Tetany)",
            "Grazing lush spring pasture high in Potassium & Nitrogen and low in Magnesium (<0.2% DM)",
            "Potassium competitively blocks active magnesium transport in the rumen wall; cerebrospinal fluid Mg plunges <1.0 mg/dL",
            "Violent hyperexcitability, staggering gait, muscle twitching, painful tetanic convulsions, death within hours",
            "Immediate slow IV/SC infusion of Calcium-Magnesium Borogluconate; daily dietary supplementation of 50–60 g Magnesium Oxide (MgO)"
          ],
          [
            "Frothy Bloat (Pasture / Feedlot Bloat)",
            "Grazing lush immature legumes (alfalfa, clover) or finely ground high-starch feedlot rations",
            "Rapid release of soluble leaf proteins (Fraction 1 18S ribulose protein) creates a stable, viscous protein foam that traps gas, preventing eructation",
            "Dramatic distension of left paralumbar fossa, severe dyspnea, mouth breathing, cyanosis, asphyxiation",
            "Emergency stomach tube or trocharization; oral administration of non-ionic antifoaming surfactants (Poloxalene, vegetable/peanut oil 250–500 mL)"
          ]
        ]
      },
      "pyq": [
        "IVRI Annual 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "DUVASU 2020"
      ]
    },
    {
      "id": "u3-qa-l04",
      "type": "long",
      "marks": 12,
      "question": "Calf Rearing from Birth to Heiferhood: Physiological transformation of the stomach, milk replacer specifications, weaning strategies, and nutrient requirements to achieve target Age at First Calving (AFC).",
      "topicId": "u3-t08",
      "answer": "<p>Rearing female dairy calves into productive heifers is the cornerstone of sustainable dairy production. Under Indian conditions, the overarching objective is to achieve puberty by 15–18 months and a target <b>Age at First Calving (AFC) of 24 to 28 months</b> (vs the traditional 36–42 months) through scientific feeding.</p><h3>1. Anatomical and Physiological Transformation of the Stomach</h3><ul><li><b>At Birth (The Pre-Ruminant Phase):</b> The calf is anatomically a monogastric animal. The <b>Abomasum comprises ~60%</b> of total stomach capacity, while the Rumen-Reticulum represents only ~30% and is completely non-functional (devoid of microflora, papillae, or muscular tone).</li><li><b>The Reticular (Esophageal) Groove Reflex:</b> Neural sensory branches of the vagus nerve (stimulated by the act of sucking milk at body temperature) trigger muscular contraction of the esophageal groove lips, forming a bypass tube directing milk directly from the esophagus into the abomasum.</li><li><b>Stimulation of Ruminal Papillae:</b> Ruminal development is not stimulated by milk or roughage bulk, but specifically by the <b>chemical end-products of microbial fermentation of concentrate starches</b>. Fermentation of grains in calf starter produces <b>Butyrate (most potent)</b> and <b>Propionate</b>, which serve as energetic substrates stimulating mitosis, mucosal vascularization, and elongation of ruminal papillae. By <b>8 to 12 weeks of age</b>, the Rumen-Reticulum expands to represent <b>&gt;70%</b> of stomach volume.</li></ul><h3>2. Liquid Feeding and Milk Replacer Specifications</h3><ul><li><b>Colostrum Phase:</b> 10% body weight within 2 hours of life; continued for 3–4 days.</li><li><b>Commercial Milk Replacer:</b> Utilized to reduce the cost of rearing when marketable whole milk is expensive. Must simulate cow's milk composition:<br>- <i>Crude Protein:</i> <b>22% to 24%</b> (derived from highly digestible milk proteins: dried skim milk, dried whey; avoid raw soy proteins which cause allergic enteritis).<br>- <i>Fat:</i> <b>18% to 20%</b> (homogenized edible animal lard or vegetable oils).<br>- <i>Crude Fibre:</i> &lt; 0.5% (strictly minimal).<br>- <i>Reconstitution:</i> 1 part milk replacer powder mixed into 7–8 parts warm water (yielding 12–13% solids, fed at 38–39°C).</li></ul><h3>3. Weaning Strategies: Conventional vs Early Weaning</h3><ul><li><b>Conventional Weaning (12–16 Weeks):</b> Calves fed whole milk for 3–4 months. Results in good growth but is cost-prohibitive.</li><li><b>Early Weaning Protocol (6 to 8 Weeks):</b><br>- Introduce Calf Starter (22% CP, 75% TDN) and clean drinking water at 7–10 days.<br>- Provide small amounts of good legume hay (berseem) from 2 weeks.<br>- <i>Weaning Criterion:</i> The calf is safely weaned off liquid milk only when it consistently consumes <b>at least 0.8 to 1.0 kg of dry calf starter per day for three consecutive days</b>.</li></ul><h3>4. Feeding the Growing Heifer to Achieve Target AFC</h3><ul><li><b>Post-Weaning (3 to 6 Months):</b> Feed 1.5–2.0 kg calf grower mixture (18% CP, 70% TDN) plus ad libitum green fodder and dry straw. Target average daily gain (ADG): <b>500–600 g/day</b>.</li><li><b>Pre-Pubertal Heifer (6 to 15 Months):</b><br>- <i>Avoid Over-Conditioning:</i> Feeding excessive concentrate energy during the allometric mammary growth phase (3 to 9 months) leads to <b>fat deposition in the mammary gland parenchyma</b>, permanently destroying future lifetime milk yield.<br>- Feed high-quality green forages (berseem, oats, sorghum) balanced with 1.5–2.0 kg concentrate (14% CP, 65% TDN) to maintain lean skeletal growth (target ADG: <b>600–700 g/day for crossbreds</b>).</li><li><b>Breeding Milestone:</b> Inseminate heifers when they reach <b>60% of their adult mature body weight</b> (275–300 kg for crossbreds, 350 kg for buffaloes), which should be attained by <b>15 to 18 months of age</b>, guaranteeing calving at 24 to 27 months.</li></ul>",
      "keyPoints": [
        "Stomach proportions: Abomasum 60% at birth; Rumen expands to 70% by 8–12 weeks.",
        "Reticular groove reflex bypasses undeveloped rumen.",
        "Butyrate from starter starch drives ruminal papillae development.",
        "Early weaning rule: When consuming 0.8–1.0 kg starter/day (6–8 weeks).",
        "Avoid over-fattening during 3–9 months to prevent mammary parenchymal damage.",
        "Breeding target: 60% mature body weight at 15–18 months ensuring AFC of 24–27 months."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "GADVASU 2022",
        "TANUVAS 2021",
        "LUVAS 2020"
      ]
    },
    {
      "id": "u3-qa-l05",
      "type": "long",
      "marks": 12,
      "question": "Comparative Nutritional Management of Small Ruminants: Contrast the digestive physiology of Sheep (Grazer) versus Goat (Browser). Detail nutrient requirements for maintenance, flushing, pregnancy, lactation, and wool production.",
      "topicId": "u3-t12",
      "answer": "<p>Small ruminants (sheep and goats) represent indispensable economic livestock for smallholder and landless farmers across arid, semi-arid, and mountainous regions. Although closely related, their feeding strategies and digestive physiology exhibit marked evolutionary divergences.</p><h3>1. Digestive Physiology: Sheep (Grazer) vs Goat (Browser)</h3><ul><li><b>Anatomical Adaptations:</b><br>- <i>Goat (Intermediate Browser):</i> Narrow, pointed muzzle, highly mobile prehensile upper lip and tongue; can stand bipedally on hind legs to browse shrub foliage up to 2 meters high. Extensive salivary glands produce rich <b>proline-rich salivary proteins that bind and neutralize dietary tannins</b>.<br>- <i>Sheep (Bulk Grazer):</i> Broad, flat muzzle suited for grazing close to the ground on short grass pastures. Lower capacity to tolerate secondary plant metabolites.</li><li><b>Ruminal Retention and Digestion:</b><br>- Goats have a higher ruminal liquid turnover rate and superior ability to digest fibrous, high-lignin tree leaves and shrubs compared to sheep.<br>- Sheep have a longer ruminal digesta retention time, optimizing the cellulolysis of grass cell walls.</li></ul><h3>2. Life-Stage Nutritional Requirements</h3><ul><li><b>A. Maintenance Requirements:</b><br>- Sheep and goats have a higher basal metabolic rate per unit body weight than cattle due to higher surface-to-volume ratio: <code>Maintenance Energy = 0.40–0.45 MJ ME / kg W^0.75</code>.<br>- Dry Matter Intake capacity: <b>3.0 to 4.0% of body weight</b> (and up to 5% in high-producing dairy goats).</li><li><b>B. Flushing (Pre-Mating):</b><br>- Supplement ewes/does in poor body condition with <b>250 to 350 g concentrate mixture daily</b> for 2–3 weeks before and 2–3 weeks into the breeding season.<br>- Elevates systemic insulin and IGF-1, enhancing folliculogenesis, ovulation rate, and twinning percentage (+15–20%).</li><li><b>C. Late Gestation (Final 4–6 Weeks):</b><br>- Fetal weight increases by 70% during this period. Ewes bearing twins/triplets require <b>50–60% extra energy and protein</b> over maintenance.<br>- Rumen capacity is compressed by expanding uterus; feed concentrated diets (400–500 g concentrate + good quality hay) to prevent <b>Pregnancy Toxaemia</b>.</li><li><b>D. Lactation Requirements:</b><br>- Peak milk occurs at 3–4 weeks postpartum. Ewes nursing single lambs require 1.5× maintenance; ewes nursing twin lambs require <b>2.0× maintenance energy and protein</b>.<br>- Supplement 500–700 g concentrate per day with high-quality green legume fodder.</li><li><b>E. Wool Production Requirements (Sheep Specific):</b><br>- Wool is an almost pure protein fibre consisting of <b>Keratin</b>, which has an extraordinarily high content of the sulfur-containing amino acid <b>Cystine (10–13%)</b>.<br>- Wool growth proceeds continuously and takes metabolic priority over body tissue gain.<br>- <i>Sulfur Balancing:</i> Rations must provide adequate sulfur (maintain dietary <b>N:S ratio of 10:1</b>). Dietary supplementation of <b>Bypass Methionine</b> (rumen-protected DL-methionine: 2–3 g/day) increases clean wool yield by 15–25% and improves staple tensile strength.</li></ul>",
      "keyPoints": [
        "Anatomical contrast: Goats are browsers with proline-rich anti-tannin saliva; sheep are grazers.",
        "Higher maintenance requirements per kg W^0.75 and DMI capacity (3–4% BW).",
        "Flushing protocol: 250–350 g concentrate for 2–3 weeks pre-mating.",
        "Late gestation: Mitigating rumen compression and preventing Pregnancy Toxaemia.",
        "Wool nutrition: Keratin rich in cystine (12%); requires N:S ratio of 10:1 and bypass methionine."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "RAJUVAS 2022",
        "DUVASU 2021",
        "TANUVAS 2020"
      ]
    }
  ],
  "unit-4": [
    {
      "id": "u4-qa-d01",
      "type": "define",
      "marks": 2,
      "question": "Define the Ideal Protein Concept (Ideal Amino Acid Profile) in monogastric nutrition.",
      "topicId": "u4-t03",
      "answer": "<p><b>Ideal Protein Concept (Ideal Amino Acid Profile):</b> The exact theoretical dietary balance of digestible essential amino acids that matches the animal's physiological requirements for maintenance and protein accretion perfectly, with neither deficiency nor surplus of any single amino acid.</p><p>In swine and poultry formulations, <b>Lysine is designated as the reference standard (set at 100%)</b> because it is strictly utilized for protein synthesis, easily analyzed, and typically the first or second limiting amino acid. All other essential amino acids (Methionine, Threonine, Tryptophan) are expressed as fixed ideal percentages relative to Lysine (e.g., Met:Cys = 60–65%, Threonine = 65–70%).</p>",
      "keyPoints": [
        "Exact pattern of digestible amino acids matching requirements without excess or deficiency.",
        "Lysine is the universal reference amino acid set at 100%.",
        "Minimizes nitrogen excretion into the environment and reduces feed costs."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "GADVASU 2022",
        "LUVAS 2021"
      ]
    },
    {
      "id": "u4-qa-d02",
      "type": "define",
      "marks": 2,
      "question": "Define Feed Conversion Ratio (FCR) in broilers and state the standard commercial target.",
      "topicId": "u4-t08",
      "answer": "<p><b>Feed Conversion Ratio (FCR):</b> A crucial biological and economic efficiency index measuring the mass of feed consumed divided by the live body weight gained by the animal over a specified rearing period.</p><p><b>Mathematical Formula:</b><br><code>FCR = Total Feed Consumed (kg) / Total Live Body Weight Gain (kg)</code>.</p><p><b>Commercial Target:</b> Modern commercial broiler hybrids (Cobb 500, Ross 308) achieve an FCR of <b>1.45 to 1.60 at 38–42 days of age</b> (attaining 2.2–2.5 kg live weight on ~3.4–3.6 kg total feed).</p>",
      "keyPoints": [
        "Ratio: Feed Consumed (kg) / Body Weight Gained (kg).",
        "Lower FCR denotes superior nutritional and biological feed efficiency.",
        "Target in commercial broilers: 1.45–1.60 at 40 days."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "RAJUVAS 2022",
        "IVRI Annual 2021"
      ]
    },
    {
      "id": "u4-qa-d03",
      "type": "define",
      "marks": 2,
      "question": "Define Obligate Carnivore with reference to feline (cat) nutrition.",
      "topicId": "u4-t15",
      "answer": "<p><b>Obligate (True) Carnivore:</b> A species whose evolutionary adaptation to a strict vertebrate prey diet has led to the permanent loss of specific metabolic and synthetic pathways, rendering it biologically dependent on nutrients found exclusively in animal tissues.</p><p><b>Feline Peculiarities:</b> Cats cannot synthesize: (1) <b>Taurine</b> from cysteine; (2) <b>Arachidonic acid</b> from linoleic acid; (3) <b>Vitamin A (Retinol)</b> from β-carotene; (4) <b>Niacin</b> from tryptophan. Furthermore, they maintain constitutive, non-adaptive activity of hepatic gluconeogenic and transaminase enzymes, necessitating a high-protein diet.</p>",
      "keyPoints": [
        "Biologically dependent on consuming animal tissues due to evolutionary metabolic deletions.",
        "Obligate dietary requirements: Taurine, Arachidonic acid, Pre-formed Retinol, Pre-formed Niacin.",
        "High constitutive hepatic amino acid catabolism."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "DUVASU 2022",
        "GADVASU 2020"
      ]
    },
    {
      "id": "u4-qa-d04",
      "type": "define",
      "marks": 2,
      "question": "Define Cecotrophy (Caecotrophy / Pseudorumination) in rabbits.",
      "topicId": "u4-t13",
      "answer": "<p><b>Cecotrophy (Pseudorumination / Coprophagy):</b> The physiological and behavioral phenomenon in lagomorphs (domestic rabbits) involving the production, excretion, and immediate voluntary ingestion of specialized soft, mucus-coated fecal pellets (<b>cecotropes / night feces</b>) directly from the anus without mastication.</p><p>Cecotropes are produced in the cecum under a circadian rhythm (predominantly at night or early morning) and are rich in <b>microbial crude protein (25–30% CP), B-complex vitamins, and volatile fatty acids</b>, allowing rabbits to recover nutrients synthesized by hindgut fermentation.</p>",
      "keyPoints": [
        "Excretion and ingestion of soft, mucus-enclosed cecotropes directly from the anus.",
        "Occurs on a circadian rhythm (night/early morning).",
        "Recovers microbial protein and B-vitamins synthesized by cecal microflora."
      ],
      "table": null,
      "pyq": [
        "RAJUVAS 2023",
        "TANUVAS 2021",
        "LUVAS 2022"
      ]
    },
    {
      "id": "u4-qa-d05",
      "type": "define",
      "marks": 2,
      "question": "Define Nutritional Piglet Anemia (Thumps) and state its standard treatment.",
      "topicId": "u4-t04",
      "answer": "<p><b>Nutritional Piglet Anemia (Thumps):</b> A microcytic hypochromic nutritional anemia occurring in suckling piglets confined to concrete floors without access to soil, characterized by labored jerky diaphragmatic spasms ('thumping' respiration), pallor of skin and mucous membranes, edema, and stunted growth.</p><p><b>Cause &amp; Standard Treatment:</b> Piglets are born with minimal iron stores (~50 mg) and require 7–10 mg Fe/day for rapid growth, whereas sow's milk supplies only ~1 mg Fe/day. Standard prophylaxis is an intramuscular injection of <b>100 to 200 mg Iron Dextran (or Iron Galactan) into the neck/ham musculature at 3 to 4 days of age</b>.</p>",
      "keyPoints": [
        "Microcytic hypochromic anemia in piglets reared on concrete.",
        "Caused by mismatch: Piglet requires 7–10 mg Fe/day; sow milk provides only 1 mg/day.",
        "Treatment: 100–200 mg Iron Dextran IM at 3–4 days of life."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2022",
        "WBUAFS 2021",
        "KVAFSU 2023"
      ]
    },
    {
      "id": "u4-qa-d06",
      "type": "define",
      "marks": 2,
      "question": "Define Phase Feeding in swine and poultry and state its benefits.",
      "topicId": "u4-t04",
      "answer": "<p><b>Phase Feeding:</b> The commercial feeding practice of dividing an animal's growth or production period into multiple distinct chronological feeding stages, formulating a succession of diets whose nutrient concentrations progressively decrease in protein/amino acids and adjust in energy to match the animal's changing physiological needs.</p><p><b>Benefits:</b> (1) Avoids underfeeding during early high-growth stages and overfeeding expensive protein during finishing stages; (2) Decreases feed cost per kg gain by 10–15%; (3) Drastically reduces environmental nitrogen and phosphorus excretion in manure.</p>",
      "keyPoints": [
        "Changing feed formulations over multiple growth stages to match declining amino acid requirements.",
        "Prevents excess overfeeding of protein in older animals.",
        "Lowers production costs and minimizes environmental nitrogen excretion."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "GADVASU 2021",
        "DUVASU 2020"
      ]
    },
    {
      "id": "u4-qa-d07",
      "type": "define",
      "marks": 2,
      "question": "State the Equine Minimum Dietary Fibre Requirement to prevent gastrointestinal disorders.",
      "topicId": "u4-t06",
      "answer": "<p><b>Equine Minimum Dietary Fibre Requirement:</b> Horses are monogastric hindgut fermenters whose large colon and cecum require constant physical fill of long-stem forages to maintain normal peristalsis and stable microbial ecology.</p><p>The absolute minimum requirement is <b>1.0% of body weight as dry forage daily</b> (e.g., minimum 5.0 kg forage DM for a 500 kg horse), with ideal maintenance diets providing <b>1.5% to 2.0% of body weight as forage</b>. The complete ration should never contain less than <b>18% to 20% Crude Fibre</b> on a dry matter basis to prevent cecal impaction, colic, wood-chewing (cribbing), and laminitis.</p>",
      "keyPoints": [
        "Minimum 1.0% of body weight as forage dry matter daily (ideal 1.5–2.0% BW).",
        "Diet must contain at least 18–20% Crude Fibre on DM basis.",
        "Critical to maintain hindgut peristalsis and prevent colic and cecal acidosis."
      ],
      "table": null,
      "pyq": [
        "MAFSU 2022",
        "LUVAS 2021",
        "TANUVAS 2020"
      ]
    },
    {
      "id": "u4-qa-d08",
      "type": "define",
      "marks": 2,
      "question": "Define Calorie-to-Protein (C:P) Ratio in poultry diets across growth phases.",
      "topicId": "u4-t08",
      "answer": "<p><b>Calorie-to-Protein (C:P) Ratio:</b> The mathematical ratio between the Metabolizable Energy (ME) content (expressed in kilocalories per kilogram) and the Crude Protein percentage (CP %) of a poultry ration: <code>C:P Ratio = ME (kcal/kg) / CP (%)</code>.</p><p>Because birds consume feed primarily to satisfy their energy demands, the C:P ratio dictates protein intake:</p><ul><li><b>Broiler Pre-Starter (0–7 days):</b> Narrow ratio: <code>3000 / 23 = 130</code> (promotes tissue growth).</li><li><b>Broiler Starter (8–21 days):</b> Moderate ratio: <code>3100 / 22 = 141</code>.</li><li><b>Broiler Finisher (22–42 days):</b> Wide ratio: <code>3200 / 19 = 168</code> (favors fat deposition and finishing).</li></ul>",
      "keyPoints": [
        "Formula: Metabolizable Energy (kcal/kg) / Crude Protein (%).",
        "Governs voluntary feed intake and carcass composition.",
        "Shifts from narrow (130) in pre-starter to wide (168) in finisher."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2022",
        "RAJUVAS 2021",
        "NDVSU 2023"
      ]
    },
    {
      "id": "u4-qa-d09",
      "type": "define",
      "marks": 2,
      "question": "Define Perosis (Slipped Tendon) in chicks and identify the responsible nutrient deficiencies.",
      "topicId": "u4-t17",
      "answer": "<p><b>Perosis (Slipped Tendon / Chondrodystrophy):</b> A crippling anatomical deformity of rapidly growing young chicks, poults, and ducklings characterized by enlargement and flattening of the tibio-metatarsal joint, twisting of the distal end of the tibia, and the <b>lateral displacement (slipping) of the gastrocnemius tendon from its condyles</b>, causing total loss of leg extension.</p><p><b>Etiology:</b> Primarily caused by a deficiency of <b>Manganese (Mn &lt; 30–40 ppm)</b>, or secondary deficiencies of <b>Choline, Biotin, Folic Acid, or Nicotinic Acid</b>, which are required for mucopolysaccharide synthesis in epiphyseal growth plates.</p>",
      "keyPoints": [
        "Deformity where the gastrocnemius tendon slips out of its condyle groove.",
        "Results from defective chondrogenesis in the epiphyseal growth plate.",
        "Primary deficiency: Manganese; secondary deficiencies: Choline and Biotin."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "GADVASU 2022",
        "TANUVAS 2021"
      ]
    },
    {
      "id": "u4-qa-d10",
      "type": "define",
      "marks": 2,
      "question": "Define Nutritional Encephalomalacia (Crazy Chick Disease) in poultry and state its cause.",
      "topicId": "u4-t17",
      "answer": "<p><b>Nutritional Encephalomalacia (Crazy Chick Disease):</b> An acute neurological disorder in young broiler chicks (usually 2 to 4 weeks of age) characterized by sudden ataxia, loss of equilibrium, head retraction (opisthotonus), violent twisting of the head and neck, bicycling leg movements, and death.</p><p><b>Cause:</b> Severe deficiency of <b>Vitamin E (α-tocopherol)</b> in the presence of dietary rancid unsaturated fats. Free radical peroxidation attacks cerebellar capillary endothelium, causing microthrombi, petechiae, ischemic necrosis, and liquefaction of the cerebellar Purkinje layers.</p>",
      "keyPoints": [
        "Neurological disorder marked by ataxia, opisthotonus, and tumbling ('crazy chick').",
        "Caused by Vitamin E deficiency combined with oxidatively rancid fats.",
        "Pathology: Ischemic liquefactive necrosis and petechiation of the cerebellum."
      ],
      "table": null,
      "pyq": [
        "DUVASU 2023",
        "LUVAS 2020",
        "RAJUVAS 2021"
      ]
    },
    {
      "id": "u4-qa-d11",
      "type": "define",
      "marks": 2,
      "question": "Define Creep Feed for suckling piglets and state its standard nutritional composition.",
      "topicId": "u4-t04",
      "answer": "<p><b>Creep Feed:</b> A highly palatable, ultra-digestible, nutrient-dense dry feed offered exclusively to young suckling piglets in a specially partitioned enclosure ('creep area') that allows small piglets free access while physically excluding the lactating sow, introduced from <b>7 to 10 days of age</b>.</p><p><b>Nutritional Composition:</b></p><ul><li><b>Crude Protein (CP):</b> 20% to 22% (incorporating dried whey, skim milk powder, and spray-dried porcine plasma).</li><li><b>Metabolizable Energy (ME):</b> 3300 to 3400 kcal/kg (utilizing oat groats, extruded maize, and edible fats).</li><li><b>Lysine:</b> 1.4% to 1.5%; Fortified with Zinc Oxide (2000–3000 ppm) and organic acidifiers.</li></ul>",
      "keyPoints": [
        "Specialized feed offered in an enclosure accessible only to suckling piglets.",
        "Introduced at 7–10 days of life to ease weaning stress.",
        "Composition: 20–22% CP, 3400 kcal ME/kg, rich in digestible milk products."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2022",
        "TANUVAS 2023",
        "KVAFSU 2021"
      ]
    },
    {
      "id": "u4-qa-d12",
      "type": "define",
      "marks": 2,
      "question": "Explain Asymmetric Hindgut Fermentation in equines and state why horses cannot utilize microbial protein as efficiently as ruminants.",
      "topicId": "u4-t06",
      "answer": "<p><b>Asymmetric Hindgut Fermentation:</b> In equines (horses, donkeys), microbial fermentation occurs posterior to the stomach and small intestine within the massive, sacculated <b>Cecum and Colon</b> (which comprise ~65% of gastrointestinal volume).</p><p><b>Inability to Utilize Microbial Protein:</b> Ruminants digest microbial bodies in their downstream abomasum and absorb amino acids in the small intestine. In contrast, the horse's microbial fermentation occurs in the cecum and colon—<b>distal to the small intestine</b>. The equine colon lacks peptide and amino acid transport systems. Consequently, virtually all high-quality microbial protein synthesized in the equine cecum is <b>voided unabsorbed in the feces</b>. Horses therefore have an obligate requirement for pre-formed essential amino acids in their feed.</p>",
      "keyPoints": [
        "Hindgut fermentation occurs in cecum and colon posterior to enzymatic digestion.",
        "Equine large colon cannot absorb intact proteins or amino acids.",
        "Microbial protein is voided in feces; horses require dietary preformed amino acids."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "GADVASU 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u4-qa-s01",
      "type": "short",
      "marks": 5,
      "question": "Explain the unique metabolic and nutritional peculiarities that make the domestic cat an Obligate Carnivore.",
      "topicId": "u4-t15",
      "answer": "<p>The domestic cat (<i>Felis catus</i>) is an extreme obligate carnivore whose evolutionary history as a hypercarnivorous predator led to the irreversible deletion or permanent downregulation of numerous metabolic synthetic enzymes:</p><ul><li><b>1. High Protein Requirement &amp; Non-Adaptive Transaminases:</b><br>Cats require 2–3 times more dietary protein than omnivores (minimum 26–30% CP). Unlike dogs, cats cannot downregulate their hepatic amino acid catabolic enzymes (transaminases and urea cycle enzymes) when fed a low-protein diet; they continually catabolize protein for basal gluconeogenesis.</li><li><b>2. Obligate Requirement for Taurine:</b><br>Taurine (β-aminoethanesulfonic acid) is mandatory for feline bile acid conjugation (cats conjugate bile exclusively with taurine, cannot use glycine). Cats have negligible activity of the rate-limiting enzymes <i>cysteinesulfinic acid decarboxylase</i> and <i>cysteinedioxygenase</i>. Deficiency causes <b>Feline Central Retinal Degeneration (FCRD / irreversible blindness)</b> and <b>Dilated Cardiomyopathy (DCM)</b>.</li><li><b>3. Essentiality of Arachidonic Acid (20:4 n-6):</b><br>Cats possess virtually zero <b>Δ-6-desaturase</b> activity in the liver and intestinal mucosa. They cannot convert linoleic acid into arachidonic acid; thus arachidonic acid must be supplied pre-formed from animal fats.</li><li><b>4. Inability to Synthesize Vitamin A from β-Carotene:</b><br>Cats lack intestinal <b>β-carotene-15,15'-dioxygenase</b>. Plant carotenoids cannot be converted to retinol; cats require pre-formed Vitamin A (retinyl esters) found exclusively in animal tissues (liver).</li><li><b>5. Obligate Requirement for Pre-formed Niacin:</b><br>In cats, the tryptophan-to-niacin pathway is diverted: the enzyme <i>picolinate carboxylase</i> is extremely active, degrading tryptophan intermediates into acetyl-CoA. Cats cannot synthesize niacin from tryptophan and require dietary niacin.</li><li><b>6. Extreme Sensitivity to Arginine Deficiency:</b><br>A single arginine-free meal causes severe hyperammonemic encephalopathy within 2–4 hours due to failure of the urea cycle.</li></ul>",
      "keyPoints": [
        "High non-adaptive transaminase activity continuously catabolizing protein.",
        "Taurine deficiency causes central retinal degeneration and dilated cardiomyopathy.",
        "Lacks Δ-6-desaturase (requires arachidonic acid) and β-carotene dioxygenase (requires preformed Vit A).",
        "Cannot convert tryptophan to niacin due to active picolinate carboxylase.",
        "Extreme vulnerability to arginine deficiency."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "GADVASU 2022",
        "TANUVAS 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u4-qa-s02",
      "type": "short",
      "marks": 5,
      "question": "Describe the functional anatomy of the rabbit cecum and the circadian mechanism of Cecotrophy.",
      "topicId": "u4-t13",
      "answer": "<p>The domestic rabbit (<i>Oryctolagus cuniculus</i>) is a small hindgut herbivore exhibiting a unique dual-phase digestive separation mechanism:</p><ul><li><b>1. Functional Anatomy of the Cecum &amp; Fusus Coli:</b><br>- The <b>cecum</b> is enormous, containing &gt;40% of total digestive contents, acting as a dynamic anaerobic fermentation vat colonized by cellulolytic and proteolytic bacteria (predominantly <i>Bacteroides</i>).<br>- The <b>fusus coli</b> is a highly innervated, pacemaker-controlled neuromuscular section of the middle colon that regulates the separation of digesta and alternates the excretion of hard versus soft pellets.</li><li><b>2. The Colonic Separation Mechanism:</b><br>At the ileo-ceco-colic junction, anti-peristaltic contractions drive small fermentable particles (&lt;0.3 mm) and soluble fluid retrograde into the cecum for prolonged microbial fermentation. In contrast, large, indigestible fibrous particles (&gt;0.3 mm) are propelled forward by peristalsis and rapidly excreted during the day as dry, round <b>Hard Fecal Pellets</b>.</li><li><b>3. Circadian Formation and Ingestion of Cecotropes:</b><br>- In the early morning hours, the fusus coli switches motility mode: the cecal contents are evacuated into the colon, coated by protective mucopolysaccharide secretions from colonic goblet cells, and excreted as clusters of soft, glistening, dark <b>Cecotropes ('Night Feces')</b>.<br>- Sensory olfactory and perianal mechanoreceptors stimulate the rabbit to ingest cecotropes directly from the anus without mastication.<br>- The intact mucus envelope protects the internal microbial mass from gastric acid destruction in the stomach, allowing continued fermentation in the fundus for up to 6–8 hours.</li><li><b>4. Nutritional Value:</b><br>Recovers up to <b>80% of synthesized microbial crude protein</b>, all dietary B-complex vitamins, and essential minerals, satisfying 15–20% of the rabbit's daily protein requirement.</li></ul>",
      "keyPoints": [
        "Cecum comprises >40% gut volume; fusus coli acts as colonic pacemaker.",
        "Mechanical separation: Large fibre excreted as hard pellets; fine fractions enter cecum.",
        "Cecotropes coated in mucus; ingested directly from anus under circadian rhythm.",
        "Mucus protects microbes from gastric acid, allowing recovery of protein and B-vitamins."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2022",
        "LUVAS 2023",
        "DUVASU 2021",
        "MAFSU 2021"
      ]
    },
    {
      "id": "u4-qa-s03",
      "type": "short",
      "marks": 5,
      "question": "Discuss the nutritional management of horses to prevent Colic, Cecal Acidosis, and Laminitis.",
      "topicId": "u4-t06",
      "answer": "<p>Gastrointestinal and metabolic disasters in horses are almost exclusively man-made, resulting from feeding high-concentrate, low-forage diets that violate equine digestive physiology:</p><ul><li><b>1. Pathophysiology of Starch Overload (Cecal Acidosis &amp; Laminitis):</b><br>- The equine stomach and small intestine have limited enzymatic capacity to digest starch (maximum 2.0 g starch / kg BW per meal).<br>- Feeding large grain meals (&gt;2.5 kg maize/oats) forces undigested starch to overflow past the ileo-cecal valve into the cecum.<br>- In the cecum, amylolytic bacteria (<i>Streptococcus bovis</i>) ferment starch into <b>D- and L-lactic acid</b>, plunging cecal pH from normal 6.7 down to &lt;5.5.<br>- Cecal acidosis kills normal Gram-negative cellulolytic bacteria, releasing massive quantities of <b>endotoxins (LPS)</b>. Acid damages the mucosal barrier; endotoxins and vasoactive amines (histamine) enter mesenteric circulation, triggering severe digital vasoconstriction, ischemia, and separation of the epidermal and dermal laminae of the hoof (<b>Acute Laminitis / Founder</b>).</li><li><b>2. Prevention Guidelines:</b><br>- <b>Rule 1 (Prioritize Forage):</b> Provide at least <b>1.5% to 2.0% of body weight as good quality forage daily</b> (e.g., 7.5–10 kg hay for a 500 kg horse). Hay should comprise minimum 60–70% of the total diet.<br>- <b>Rule 2 (Meal Fractionation):</b> Never feed more than <b>0.4–0.5 kg of concentrate per 100 kg body weight in a single meal</b> (maximum 2.0–2.5 kg grain per feeding; divide daily concentrate into 3–4 small meals).<br>- <b>Rule 3 (Gradual Transition):</b> All dietary changes must be introduced incrementally over <b>10 to 14 days</b> to permit gradual microbial adaptation.<br>- <b>Rule 4 (Hydration &amp; Salt):</b> Provide constant access to clean water and 0.5–1.0% salt; never feed cold water immediately after strenuous galloping.</li></ul>",
      "keyPoints": [
        "Starch overflow past small intestine leads to cecal lactic acidosis (S. bovis).",
        "Endotoxin (LPS) release damages laminae of the foot, triggering acute Laminitis.",
        "Golden rule: Minimum 1.5% BW as forage; maximum 0.5 kg concentrate / 100 kg BW per meal.",
        "Dietary changes must be graduated over 10–14 days."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "TANUVAS 2022",
        "RAJUVAS 2021",
        "KVAFSU 2020"
      ]
    },
    {
      "id": "u4-qa-s04",
      "type": "short",
      "marks": 5,
      "question": "Detail the nutritional management of neonatal suckling piglets and weaners to prevent Post-Weaning Diarrhea.",
      "topicId": "u4-t04",
      "answer": "<p>Suckling and recently weaned piglets face critical nutritional vulnerabilities that require aggressive management:</p><ul><li><b>1. Neonatal Colostrum &amp; Iron Prophylaxis:</b><br>- Ensure immediate suckling of sow colostrum within 2 hours of farrowing.<br>- Administer <b>150 to 200 mg Iron Dextran IM at 3 days of age</b> to prevent nutritional hypochromic anemia ('thumps').</li><li><b>2. Creep Feeding Protocol:</b><br>- Introduce highly palatable dry creep feed (22% CP, 3400 kcal ME/kg) in a dedicated creep feeder from <b>7 to 10 days of age</b>. Formulate with extruded maize, rolled oats, dried whey (15–20%), and spray-dried porcine plasma to stimulate hydrochloric acid and protease secretion prior to weaning.</li><li><b>3. Management of Weaning Stress &amp; Post-Weaning Diarrhea (PWD):</b><br>- At weaning (3 to 4 weeks), piglets suffer transient anorexia followed by gorging, leading to undigested nutrients entering the large intestine where enterotoxigenic <i>Escherichia coli</i> (ETEC - K88/F4) proliferates, causing severe dehydration and mortality.</li><li><b>4. Nutritional Strategies to Prevent Post-Weaning Diarrhea:</b><br>- <i>Dietary Acidifiers:</i> Incorporate organic acids (Citric acid, Fumaric acid, Formic acid at 1.0–1.5%) to reduce gastric pH, compensate for immature gastric HCl secretion, and optimize pepsin activation.<br>- <i>Pharmacological Zinc Oxide:</i> Supplement <b>2000 to 3000 ppm Zinc Oxide (ZnO)</b> for the first 14 days post-weaning to stabilize intestinal mucosal tight junctions and suppress ETEC colonization.<br>- <i>Highly Digestible Protein Sources:</i> Avoid under-processed soybean meal (glycinin/β-conglycinin trigger allergic enteritis); use fish meal, dried whey, and synthetic amino acids.</li></ul>",
      "keyPoints": [
        "Colostrum intake and 150–200 mg Iron Dextran IM at 3 days of life.",
        "Creep feed introduced at 7–10 days with dried whey and extruded grains.",
        "Post-weaning lag: Undigested substrate fuels enterotoxigenic E. coli (ETEC).",
        "Prevention: Organic acidifiers (citric/fumaric acid) and pharmacological Zinc Oxide (2000–3000 ppm)."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "GADVASU 2021",
        "LUVAS 2022",
        "DUVASU 2020"
      ]
    },
    {
      "id": "u4-qa-s05",
      "type": "short",
      "marks": 5,
      "question": "Explain Calcium, Phosphorus, and Vitamin D3 dynamics in Commercial Layer Chickens during eggshell calcification.",
      "topicId": "u4-t09",
      "answer": "<p>A high-producing commercial layer hen (e.g., Bovans, BV300) secretes approximately <b>2.0 to 2.2 grams of pure elemental Calcium</b> into each eggshell in a single 16-hour calcification window. This represents &gt;10% of her total body calcium pool.</p><ul><li><b>1. Requirement &amp; Medullary Bone Mobilization:</b><br>- Layer diets require <b>3.8% to 4.2% Calcium</b> (compared to only 1.0% in non-laying pullets) and <b>0.40–0.45% Available Phosphorus</b>.<br>- 2 to 3 weeks prior to onset of lay (16–18 weeks), estrogen induces the development of specialized woven bone in the marrow cavities called <b>Medullary Bone</b> (in the femur, tibia). Medullary bone acts as a rapidly exchangeable, labile calcium reservoir that is mobilized during nighttime eggshell calcification when intestinal absorption drops.</li><li><b>2. The Importance of Particle Size (Coarse Limestone):</b><br>- Eggshell calcification in the shell gland (uterus) occurs predominantly at night (from 20:00 to 06:00 hrs) when the digestive tract may be empty.<br>- Nutritionists formulate diets with a mixture: <b>35% Fine Limestone powder (&lt;1 mm)</b> and <b>65% Coarse Limestone grit or Oyster Shell chips (2 to 4 mm)</b>.<br>- Large limestone particles remain retained in the gizzard, dissolving slowly throughout the night, ensuring a steady nocturnal trickle of absorbed calcium that minimizes skeletal bone demineralization.</li><li><b>3. Role of Vitamin D3:</b><br>- Vitamin D<sub>3</sub> (cholecalciferol) is essential; poultry cannot utilize D<sub>2</sub>. Active 1,25-(OH)<sub>2</sub>D<sub>3</sub> induces synthesis of Calbindin-D28k in the shell gland and intestinal enterocytes.</li><li><b>4. Cage Layer Fatigue (Osteomalacia):</b><br>- If dietary Ca is deficient or Ca:P is unbalanced, the hen continues laying by severely depleting cortical bone, leading to fragile, brittle bones, paralysis, and recumbency in cages.</li></ul>",
      "keyPoints": [
        "3.8–4.2% dietary Calcium required; 2 g Ca deposited per shell.",
        "Estrogen-induced Medullary Bone serves as a nocturnal labile calcium store.",
        "Coarse limestone (2–4 mm, 65% of Ca) provides slow nocturnal gizzard release.",
        "Vitamin D3 mandatory; deficiency causes soft-shell eggs and Cage Layer Fatigue."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2022",
        "TANUVAS 2023",
        "RAJUVAS 2021",
        "WBUAFS 2020"
      ]
    },
    {
      "id": "u4-qa-s06",
      "type": "short",
      "marks": 5,
      "question": "Enumerate conventional and unconventional feed ingredients in poultry and swine rations with their inclusion limits.",
      "topicId": "u4-t10",
      "answer": "<p>In commercial monogastric farming, feed accounts for 70–75% of total production costs. Judicious replacement of expensive conventional feeds with agro-industrial by-products is vital for profitability:</p><ul><li><b>1. Energy Sources:</b><br>- <b>Maize (Corn):</b> The gold standard conventional cereal (3350 kcal ME/kg); inclusion up to <b>50–65%</b>.<br>- <b>Broken Rice / Bajra (Pearl Millet):</b> Excellent maize substitutes; inclusion up to <b>30–40%</b> without depressing performance.<br>- <b>Deoiled Rice Bran (DORB):</b> High fibre limits inclusion: max <b>5–8% in broilers</b>, up to <b>15–20% in layers and swine growers</b>.<br>- <b>Rice Polish:</b> High energy and fat; susceptible to oxidative rancidity; inclusion up to <b>10–15%</b>.</li><li><b>2. Protein Sources:</b><br>- <b>Soybean Meal (44–48% CP):</b> Gold standard conventional vegetable protein; inclusion <b>25–35% in broilers, 15–25% in swine</b>.<br>- <b>Mustard Cake:</b> Constrained by glucosinolates and erucic acid: max <b>3–5% in broilers, up to 10% in layers/swine</b>.<br>- <b>Sunflower Meal:</b> High crude fibre (&gt;20%), low lysine: inclusion <b>5–8% in broilers, up to 12% in layers/swine</b>.<br>- <b>Distillers Dried Grains with Solubles (DDGS):</b> By-product of bioethanol distilleries (26–28% CP, rich in phosphorus); inclusion up to <b>5–8% in broilers, 10–15% in layers and pigs</b>.</li><li><b>3. Animal Protein By-Products:</b><br>- <b>Fish Meal (55–60% CP):</b> Excellent amino acid profile and available phosphorus, but limited to <b>3–5%</b> to prevent 'fishy taint' in broiler meat and eggs.</li></ul>",
      "keyPoints": [
        "Energy: Maize (50–65%), Broken rice/bajra (30–40%), DORB (5–15%).",
        "Vegetable protein: Soybean meal (25–35%), Mustard cake (3–10%), DDGS (5–12%).",
        "Animal protein: Fish meal (3–5% limit to avoid fishy taint).",
        "Inclusion constraints driven by fibre, amino acid imbalance, and anti-nutritional factors."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "GADVASU 2020",
        "DUVASU 2022",
        "KVAFSU 2021"
      ]
    },
    {
      "id": "u4-qa-s07",
      "type": "short",
      "marks": 5,
      "question": "Outline the nutritional requirements and dietary toxicities of the Domestic Dog (Canine) across life stages.",
      "topicId": "u4-t14",
      "answer": "<p>The domestic dog (<i>Canis lupus familiaris</i>) is a flexible, adaptive omnivore capable of digesting both animal tissues and cooked plant starches due to evolutionary duplications of pancreatic amylase genes (AMY2B).</p><ul><li><b>1. Life-Stage Nutritional Requirements (AAFCO / NRC Standards):</b><br>- <b>Puppy Growth &amp; Reproduction:</b> High nutrient density required: minimum <b>22.5% Crude Protein</b>, <b>8.5% Crude Fat</b>, 1.2% Calcium, and 1.0% Phosphorus. Large-breed puppies require controlled energy and Ca:P to prevent skeletal dysplasia (osteochondritis dissecans).<br>- <b>Adult Maintenance:</b> Moderate requirements: minimum <b>18.0% Crude Protein</b>, <b>5.5% Crude Fat</b>, with balanced dietary fibre (2–4% beet pulp) to promote healthy fecal consistency.<br>- <b>Senior / Geriatric Dogs:</b> Reduced caloric density (lower fat) to counter declining metabolic rate and prevent obesity; high-quality protein (20–22%) to prevent sarcopenia; fortified with Glucosamine, Chondroitin, and Omega-3 fatty acids (EPA/DHA) for joint health.</li><li><b>2. Deadly Canine Dietary Toxicities:</b><br>- <b>Theobromine (Chocolate Toxicity):</b> Methylxanthine compound in chocolate. Dogs metabolize theobromine extremely slowly; causes tachycardia, severe cardiac arrhythmias, muscular tremors, seizures, and death.<br>- <b>Allium Species (Onions &amp; Garlic):</b> Contain <i>n-propyl disulfide</i>, an oxidant that oxidizes hemoglobin into Heinz bodies, resulting in acute hemolytic anemia and hemoglobinuria.<br>- <b>Xylitol (Artificial Sweetener):</b> Triggers rapid, massive insulin surge in dogs, causing severe life-threatening hypoglycemia and acute hepatic necrosis.<br>- <b>Grapes and Raisins:</b> Cause acute, irreversible oliguric renal failure via tartaric acid toxicity.</li></ul>",
      "keyPoints": [
        "Adaptive omnivore with dietary capacity for starch digestion (AMY2B gene).",
        "Puppy diets: 22.5% CP, 8.5% fat; Adult: 18% CP; Senior: restricted energy, joint supplements.",
        "Toxicities: Theobromine (cardiac seizures), Onions (Heinz body anemia), Xylitol (hypoglycemia), Grapes (renal failure)."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2022",
        "TANUVAS 2021",
        "RAJUVAS 2023",
        "DUVASU 2021"
      ]
    },
    {
      "id": "u4-qa-s08",
      "type": "short",
      "marks": 5,
      "question": "Describe the clinical pathology and lesions of major nutritional deficiency diseases in poultry.",
      "topicId": "u4-t17",
      "answer": "<p>Due to extremely rapid growth rates and high metabolic activity, commercial poultry manifest clear clinicopathological lesions when essential nutrients are deficient:</p><ul><li><b>1. Curled-Toe Paralysis (Riboflavin / Vitamin B2 Deficiency):</b><br>- <i>Pathology:</i> Myelin degeneration of the sciatic and brachial nerve trunks.<br>- <i>Signs:</i> Growing chicks (1–2 weeks) walk on their hocks with toes curled inward in a clutched fist shape; severe leg weakness and mortality.</li><li><b>2. Rickets (Vitamin D3, Calcium, or Phosphorus Deficiency):</b><br>- <i>Pathology:</i> Defective mineralization of osteoid at epiphyseal plates.<br>- <i>Signs:</i> Soft, rubbery, flexible beaks and long bones; bead-like swellings at the costochondral junctions ('rachitic rosary'); chicks sit on hocks and show stunted growth.</li><li><b>3. Perosis / Slipped Tendon (Manganese &amp; Choline Deficiency):</b><br>- <i>Pathology:</i> Failure of epiphyseal cartilage maturation; enlargement of hock joints; lateral slippage of gastrocnemius tendon from its condylar groove, completely crippling the bird.</li><li><b>4. Exudative Diathesis (Selenium &amp; Vitamin E Deficiency):</b><br>- <i>Pathology:</i> Severe capillary permeability resulting from lipid peroxidation.<br>- <i>Signs:</i> Subcutaneous accumulation of a viscous, greenish-blue gelatinous fluid over the breast, abdomen, and wings; hemoglobin staining.</li><li><b>5. Fatty Liver Haemorrhagic Syndrome (FLHS):</b><br>- <i>Pathology:</i> High-producing caged layers overfed high-energy, low-protein diets; hepatic steatosis leads to parenchymal rupture and fatal internal coelomic hemorrhage.</li></ul>",
      "keyPoints": [
        "Curled-toe paralysis: Riboflavin deficiency causing sciatic nerve demyelination.",
        "Rickets: Rubber beak and rachitic rosary from Ca/P/Vit D3 deficiency.",
        "Perosis: Slipped gastrocnemius tendon from Manganese/Choline deficiency.",
        "Exudative diathesis: Green subcutaneous fluid from Selenium/Vit E deficiency.",
        "FLHS: Fatal liver rupture in caged layers fed excess energy."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "LUVAS 2020"
      ]
    },
    {
      "id": "u4-qa-l01",
      "type": "long",
      "marks": 12,
      "question": "Commercial Broiler Chicken Nutrition and Feeding Management: Nutrient specifications across growth phases, energy-to-protein ratios, synthetic amino acids, feed enzymes, and strategies to optimize Feed Conversion Ratio (FCR).",
      "topicId": "u4-t08",
      "answer": "<p>Modern commercial broiler production represents the pinnacle of precision animal nutrition. Commercial strains (Cobb, Ross, Hubbard) are genetically selected to reach <b>2.2 to 2.5 kg live body weight within 35 to 42 days</b> with an extraordinary Feed Conversion Ratio (FCR) of <b>1.45 to 1.60</b>.</p><h3>1. Phase-Wise Nutrient Specifications (BIS / Industry Standards)</h3><ul><li><b>A. Pre-Starter Phase (Day 0 to Day 7):</b><br>- <i>Metabolizable Energy (ME):</i> <b>2950 to 3000 kcal/kg</b>.<br>- <i>Crude Protein (CP):</i> <b>22.5% to 23.5%</b> (C:P ratio ≈ 130).<br>- <i>Digestible Lysine:</i> 1.25–1.30%; <i>Digestible Methionine:</i> 0.50–0.52%; <i>Ca:</i> 1.0%; <i>Available P:</i> 0.45%.<br>- <i>Physical Form:</i> Fine crumbles (1.5–2.0 mm). High protein density stimulates early gut development and satellite muscle cell proliferation.</li><li><b>B. Starter Phase (Day 8 to Day 21):</b><br>- <i>Metabolizable Energy (ME):</i> <b>3050 to 3100 kcal/kg</b>.<br>- <i>Crude Protein (CP):</i> <b>21.5% to 22.0%</b> (C:P ratio ≈ 140).<br>- <i>Digestible Lysine:</i> 1.15%; <i>Digestible Methionine:</i> 0.46%; <i>Ca:</i> 0.90%; <i>Available P:</i> 0.42%.<br>- <i>Physical Form:</i> Medium crumbles or micro-pellets (2.5 mm).</li><li><b>C. Finisher Phase (Day 22 to Day 38–42 / Market):</b><br>- <i>Metabolizable Energy (ME):</i> <b>3150 to 3250 kcal/kg</b> (densified using vegetable oil/animal fat).<br>- <i>Crude Protein (CP):</i> <b>19.0% to 19.5%</b> (C:P ratio ≈ 165–170).<br>- <i>Digestible Lysine:</i> 1.00%; <i>Digestible Methionine:</i> 0.42%; <i>Ca:</i> 0.85%; <i>Available P:</i> 0.38%.<br>- <i>Physical Form:</i> Hard pellets (3.0–3.5 mm). Maximizes rapid weight gain and lean muscle deposition.</li></ul><h3>2. The Role of Synthetic Amino Acids</h3><p>Maize-soybean diets are inherently first-limiting in <b>Methionine</b> and second-limiting in <b>Lysine</b> and <b>Threonine</b>:</p><ul><li><b>DL-Methionine (or Methionine Hydroxy Analogue - MHA):</b> Supplemented at 1.5–2.5 kg/tonne to meet requirements without oversupplying total protein.</li><li><b>L-Lysine HCl:</b> Supplemented at 1.0–2.0 kg/tonne, enabling nutritionists to reduce crude protein by 1.5–2.0 percentage units, reducing feed cost and ammonia emissions in broiler houses.</li><li><b>L-Threonine:</b> Crucial for gut mucosal mucin glycoprotein synthesis and immune function.</li></ul><h3>3. Exogenous Feed Enzymes &amp; Performance Additives</h3><ul><li><b>Microbial 6-Phytase:</b> Plant phosphorus in maize and soy is bound as insoluble <i>phytate</i> (myo-inositol hexakisphosphate), which is indigestible to poultry and chelates Ca, Zn, and amino acids. Supplementing <b>500 to 1000 FTU/kg phytase</b> liberates 0.12–0.15% available phosphorus, slashing costly dicalcium phosphate addition and reducing fecal phosphorus pollution.</li><li><b>Non-Starch Polysaccharide (NSP) Enzymes (Xylanase &amp; β-Glucanase):</b> Hydrolyzes soluble arabinoxylans and β-glucans in wheat and rye, reducing digesta viscosity, eliminating sticky droppings, and improving ME utilization.</li><li><b>Coccidiostats:</b> Ionophores (Salinomycin, Monensin, Maduramicin) or chemical coccidiostats included in feed up to withdrawal period (5 days pre-slaughter) to prevent intestinal coccidiosis.</li></ul><h3>4. Strategies to Optimize Feed Conversion Ratio (FCR)</h3><ol><li><b>Pelleting / Crumbing:</b> Feeding pelleted feed rather than dry mash improves FCR by <b>8 to 10%</b> by preventing ingredient sorting, reducing physical energy expenditure during eating, and increasing bulk density.</li><li><b>Feed Pan Management:</b> Maintain feeder height level with birds' backs to prevent feed spillage.</li><li><b>Water Quality:</b> 2.0 litres of clean, sanitized water (chlorinated at 2–3 ppm) per kg of feed consumed.</li></ol>",
      "keyPoints": [
        "Phase feeding: Pre-starter (23% CP, 3000 kcal), Starter (22% CP, 3100 kcal), Finisher (19% CP, 3200 kcal).",
        "C:P ratios correctly calculated: 130 -> 140 -> 168.",
        "Synthetic amino acids: DL-Methionine, L-Lysine, L-Threonine reduce crude protein needs.",
        "Enzymes: Phytase (releases bound P and minerals) and NSP-enzymes (reduces viscosity).",
        "Management: Steam pelleting improves FCR by 8–10%."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "GADVASU 2022",
        "TANUVAS 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u4-qa-l02",
      "type": "long",
      "marks": 12,
      "question": "Commercial Layer Chicken Nutrition from Day-Old Chick to Molting: Phase-wise feeding programs, eggshell formation physiology, dietary calcium management, and induced molting protocols.",
      "topicId": "u4-t09",
      "answer": "<p>A commercial layer hen is an extraordinary physiological production unit, producing <b>310 to 330 eggs per year</b>. Successful layer production requires strict management across rearing phases, followed by precision nutrient delivery during the laying cycle.</p><h3>1. Phase-Wise Rearing Programs (0 to 18 Weeks)</h3><ul><li><b>A. Chick Phase (0 to 8 Weeks):</b><br>- <i>Nutrient Profile:</i> 20% Crude Protein, 2800 kcal ME/kg, 1.0% Ca, 0.45% Available P.<br>- <i>Objective:</i> Build vital internal organs (heart, liver, lungs) and establish skeletal frame size. Feed fine mash or crumbles ad libitum.</li><li><b>B. Grower Phase (9 to 18 Weeks):</b><br>- <i>Nutrient Profile:</i> <b>15–16% Crude Protein, 2700 kcal ME/kg</b>, 1.0% Ca, 0.40% Available P.<br>- <i>Objective:</i> <b>Controlled Feeding to Match Target Body Weight.</b> Over-conditioned pullets suffer high mortality from prolapse and lay small eggs, while underweight pullets peak poorly. Feed intake is controlled to hit breed target body weight (1.2–1.3 kg at 18 weeks for Leghorn strains).</li><li><b>C. Pre-Lay Transition Phase (18 to 20 Weeks / 5% Production):</b><br>- Step up dietary Calcium from <b>1.0% to 2.5–3.0%</b>.<br>- <i>Physiological Objective:</i> Estrogen induces the formation of <b>Medullary Bone</b> in skeletal cavities. Priming skeletal reserves before high-intensity lay prevents <i>Cage Layer Fatigue</i>.</li></ul><h3>2. Nutrition during the Laying Cycle</h3><ul><li><b>Phase 1 Lay (21 to 45 Weeks / Peak Lay):</b><br>- <i>Nutrient Density:</i> <b>18% CP, 2750 kcal ME/kg, 3.8% to 4.2% Calcium</b>, 0.45% Available P.<br>- Formulate for maximum egg mass, persistence of peak (&gt;90% production), and continuous growth.</li><li><b>Phase 2 Lay (46 to 65 Weeks):</b><br>- <i>Nutrient Density:</i> 16.5% CP, 2700 kcal ME/kg, <b>4.2% to 4.5% Calcium</b>.<br>- Egg size increases; calcium percentage must increase to maintain eggshell thickness.</li><li><b>Phase 3 Lay (66 Weeks to Cull / 72–80 Weeks):</b><br>- 15.5% CP, 2650 kcal ME/kg, 4.5% Calcium.</li></ul><h3>3. Physiology of Eggshell Calcification and Limestone Particle Dynamics</h3><ul><li><b>Physiological Drain:</b> The shell gland (uterus) deposits <b>2.0 to 2.2 g of elemental Calcium</b> over 16 continuous hours (mostly at night). Blood total calcium pool is only ~0.2 g; the pool turns over completely every 15–20 minutes.</li><li><b>Split-Limestone Strategy:</b><br>- Provide <b>35% as Fine Limestone powder (&lt;1 mm)</b> for rapid daytime absorption.<br>- Provide <b>65% as Coarse Limestone grit or Oyster Shell chips (2 to 4 mm)</b>.<br>- Large grit particles are retained in the gizzard and dissolve slowly overnight, supplying a constant stream of intestinal calcium during nocturnal shell synthesis and sparing medullary bone demineralization.</li></ul><h3>4. Induced (Forced) Molting Nutrition</h3><p>At 68–72 weeks of age, flocks experiencing declining egg production and poor shell quality can be molted to rejuvenate the reproductive tract for a second profitable laying cycle:</p><ul><li><b>Non-Feed Withdrawal Method (Humane Molting):</b><br>- Avoid traditional complete starvation.<br>- Feed high-fibre, low-energy diets (e.g., pure wheat bran, alfalfa meal, or cotton seed hulls) containing <b>low sodium (&lt;0.05% Na) or high dietary zinc (20,000 ppm ZnO)</b>.<br>- Reduce photoperiod to natural day length (8 hours).</li><li><b>Outcome:</b> Egg production ceases within 5–7 days; birds shed old feathers and regenerate tubular shell glands. When full lighting and layer ration are restored, the flock resumes lay, peaking at &gt;80% with restored eggshell strength.</li></ul>",
      "keyPoints": [
        "Rearing phases: Chick (20% CP) -> Grower (15–16% CP, weight monitoring) -> Pre-lay (2.5% Ca for medullary bone).",
        "Laying phases: Peak lay requires 3.8–4.2% Ca, stepping up to 4.5% in older hens.",
        "Eggshell physiology: 2 g Ca deposited per shell over 16 hours; nocturnal demand.",
        "Limestone split: 35% fine (daytime) and 65% coarse (nocturnal gizzard release).",
        "Induced molting protocols: Non-feed withdrawal methods rejuvenating shell gland for second cycle."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "GADVASU 2022",
        "TANUVAS 2021",
        "LUVAS 2020"
      ]
    },
    {
      "id": "u4-qa-l03",
      "type": "long",
      "marks": 12,
      "question": "Comprehensive Swine Nutrition across the Production Cycle: Nutrient requirements, feeding standards (NRC/ICAR), and practical ration formulation for piglets, growers, gestating sows, lactating sows, and boars.",
      "topicId": "u4-t04",
      "answer": "<p>Swine are monogastric omnivores with rapid growth rates, high prolificacy, and extraordinary feed conversion capacity. Formulating diets based on the <b>Ideal Protein Concept (digestible lysine basis)</b> and managing life-stage nutritional switches is critical for profitable pork production.</p><h3>1. Suckling Piglets and Weaners (Nursery Phase)</h3><ul><li><b>Creep Feeding (10 Days to Weaning at 28 Days):</b> Highly digestible diet containing <b>20–22% CP, 1.4% Lysine, 3400 kcal ME/kg</b>, fortified with dried whey (15%), fish meal, organic acids, and Zinc Oxide (2500 ppm).</li><li><b>Weaner / Starter Phase (10 to 20 kg BW):</b> Transition diet containing <b>18–20% CP, 1.2% Lysine, 3300 kcal ME/kg</b>. Maintain high amino acid balance to support muscle hyperplasia.</li></ul><h3>2. Grower and Finisher Pigs (Pork Production)</h3><ul><li><b>Grower Phase (20 to 50 kg BW):</b><br>- <i>Nutrient Profile:</i> <b>16% to 18% CP, 0.95% Lysine, 3250 kcal ME/kg</b>, 0.65% Ca, 0.55% P.<br>- <i>Objective:</i> Maximize lean meat accretion. Rapid skeletal and muscular growth; feed ad libitum.</li><li><b>Finisher Phase (50 to 100 kg BW / Slaughter):</b><br>- <i>Nutrient Profile:</i> <b>14% to 15% CP, 0.75% Lysine, 3250 kcal ME/kg</b>, 0.55% Ca, 0.45% P.<br>- <i>Objective:</i> <b>Phase Feeding to Optimize Carcass Lean-to-Fat Ratio.</b> As pigs mature, protein accretion plateaus while fat deposition surges. Reducing protein/lysine lowers feed cost without sacrificing carcass grading. Avoid feeding unsaturated oils (maize oil, rice bran) during finishing to prevent 'soft pork' (firm pork requires saturated fats).</li></ul><h3>3. Breeding Herd Nutritional Management</h3><ul><li><b>A. Gestating Sows (Dry Pregnant Sows):</b><br>- <i>Nutrient Profile:</i> <b>12% to 14% CP, 0.60% Lysine, 3100 kcal ME/kg</b>.<br>- <b>Strict Restricted Feeding:</b> Feed strictly <b>2.0 to 2.5 kg of diet daily</b>.<br>- <i>Physiological Rationale:</i> Overfeeding sows during gestation causes maternal obesity, embryonic death, small litter sizes, farrowing dystocia, and <i>severe hypogalactia</i>. Increase feed to 3.0 kg/day only during the final 3 weeks of pregnancy when 70% of fetal growth occurs. High dietary fibre (10–12% wheat bran/beet pulp) prevents constipation.</li><li><b>B. Lactating Sows:</b><br>- <i>Nutrient Profile:</i> <b>16% to 18% CP, 0.95% Lysine, 3350 kcal ME/kg</b>, 0.85% Ca, 0.70% P.<br>- <b>Maximize Voluntary Intake (Ad Libitum Feeding):</b> A high-producing sow nursing 10–12 piglets secretes 8–10 kg of milk daily. Feed allowance rule: <b>2.0 kg for maintenance + 0.5 kg for each nursing piglet</b> (total 7.0–8.0 kg feed/day). Inadequate feed intake triggers severe maternal catabolism, prolonged weaning-to-estrus interval, and reduced subsequent litter size.</li><li><b>C. Breeding Boars:</b><br>- Feed 2.0 to 2.5 kg/day of a balanced 14% CP diet; maintain lean body condition (BCS 3.0); fortify with Zinc and Vitamin E to support active spermatogenesis.</li></ul>",
      "keyPoints": [
        "Creep & Nursery: 20–22% CP, 1.4% Lysine, dried whey, and zinc oxide.",
        "Grower vs Finisher: 16–18% CP down to 14% CP in finisher to control carcass fatness.",
        "Gestating sows: Strict limit feeding (2.0–2.5 kg/day) to prevent farrowing dystocia and obesity.",
        "Lactating sows: Maximize ad libitum intake (2.0 kg base + 0.5 kg per piglet) to sustain milk yield.",
        "Ideal protein concept utilized across all formulations."
      ],
      "table": null,
      "pyq": [
        "IVRI Annual 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "WBUAFS 2020"
      ]
    },
    {
      "id": "u4-qa-l04",
      "type": "long",
      "marks": 12,
      "question": "Equine Nutrition and Digestive Physiology: Anatomy of hindgut fermentation, nutrient requirements for performance horses, energy pathways (aerobic vs anaerobic), and feeding management to prevent metabolic disorders.",
      "topicId": "u4-t06",
      "answer": "<p>The horse (<i>Equus caballus</i>) is an herbivorous monogastric hindgut fermenter whose digestive tract is adapted for continuous grazing of high-fibre, low-starch forages for 16–18 hours per day.</p><h3>1. Anatomy and Digestive Physiology</h3><ul><li><b>Small Stomach (8–10% of gut volume / 8–15 Litres):</b> Rapid rate of liquid transit; initiates gastric acid-pepsin proteolysis. Small capacity means horses cannot tolerate large, infrequent grain meals.</li><li><b>Small Intestine (30% of volume / 20 Meters):</b> Enzymatic digestion and absorption of simple sugars, starches, fats, and dietary true protein.</li><li><b>Hindgut - Cecum &amp; Colon (60–65% of volume / 120–140 Litres):</b> The massive cecum and large colon harbor an active anaerobic microbial ecosystem (cellulolytic bacteria, protozoa, and anaerobic fungi) that ferments structural carbohydrates (cellulose, hemicellulose) into <b>Volatile Fatty Acids (Acetate, Propionate, Butyrate)</b>. VFAs are absorbed across the colonic mucosa, providing up to <b>60–70% of the horse's maintenance energy</b>.</li></ul><h3>2. Energy Metabolism in Athletic Performance Horses</h3><ul><li><b>Aerobic Energy Pathway (Slow-Twitch Type I Muscle Fibres):</b><br>- Utilized during <i>endurance trail riding and sustained low-intensity trotting</i>.<br>- Fuel source: <b>Fatty acids (from body fat and absorbed VFAs) and aerobic oxidation of glucose</b>. Yields maximum ATP per mole of substrate without lactic acid accumulation. High-fat diets (supplementing 500–800 mL vegetable oil/day) spare muscle glycogen reserves.</li><li><b>Anaerobic Energy Pathway (Fast-Twitch Type IIb Muscle Fibres):</b><br>- Utilized during <i>sprinting, Thoroughbred racing, and polo</i>.<br>- Fuel source: <b>Rapid anaerobic glycolysis of muscle glycogen</b> into lactate. Limited by lactic acid accumulation in muscle sarcoplasm, dropping intracellular pH and causing muscular fatigue and cramping.</li></ul><h3>3. Comprehensive Feeding Management Matrix</h3>",
      "keyPoints": [
        "Anatomy: Small stomach (8%) vs massive hindgut cecum/colon (60–65%).",
        "VFAs supply 60–70% of equine maintenance energy requirements.",
        "Energy pathways: Aerobic (VFA/fat oxidation for endurance) vs Anaerobic (glycogen for sprinting).",
        "Prevention of disorders: Colic, Laminitis, Azoturia (Monday morning sickness)."
      ],
      "table": {
        "title": "Comprehensive Feeding Guidelines & Disease Prevention in Equines",
        "headers": [
          "Management Dimension",
          "Physiological Recommendation",
          "Disorder Prevented / Clinical Rationale"
        ],
        "rows": [
          [
            "Minimum Forage Intake",
            "Provide at least 1.5% to 2.0% of body weight as good quality hay/pasture (min 7.5 kg for 500 kg horse)",
            "Prevents Cecal Impaction & Colic; maintains continuous gut fill and normal peristalsis"
          ],
          [
            "Concentrate Meal Size",
            "Never exceed 0.4–0.5 kg of grain per 100 kg BW in a single meal (max 2.0–2.5 kg grain/feeding)",
            "Prevents Starch Overload, Cecal Lactic Acidosis, and Acute Digital Laminitis (Founder)"
          ],
          [
            "Fat Supplementation",
            "Add 5–10% vegetable oil (soy/corn oil) to performance diets",
            "'Glycogen Sparing Effect'; increases endurance stamina and lowers thermal heat load of digestion"
          ],
          [
            "Weekend Rest Day Feeding",
            "Cut grain concentrate allowance by 50% on non-working rest days",
            "Prevents Azoturia (Tying-Up / Exertional Rhabdomyolysis / 'Monday Morning Disease') caused by glycogen overloading"
          ],
          [
            "Water & Electrolytes",
            "Ad libitum clean water + 50–100 g commercial electrolytes (NaCl, KCl) after heavy sweat loss",
            "Prevents severe dehydration, hypochloremic metabolic alkalosis, and Thumps (synchronous diaphragmatic flutter)"
          ]
        ]
      },
      "pyq": [
        "IVRI Annual 2023",
        "GADVASU 2022",
        "RAJUVAS 2021",
        "TANUVAS 2020"
      ]
    },
    {
      "id": "u4-qa-l05",
      "type": "long",
      "marks": 12,
      "question": "Comparative Canine and Feline Nutrition: Adaptive Omnivore vs Obligate Carnivore. Provide an exhaustive scientific comparison covering protein, amino acids, lipids, vitamins, carbohydrate utilization, and urinary pH management in FLUTD.",
      "topicId": "u4-t14",
      "answer": "<p>Although domestic dogs (<i>Canis familiaris</i>) and domestic cats (<i>Felis catus</i>) both belong to the mammalian order Carnivora, their nutritional evolutionary trajectories diverge fundamentally. The dog is an <b>adaptive, opportunistic omnivore</b>, whereas the cat is a <b>strict, obligate carnivore</b>.</p><h3>1. Comprehensive Scientific Comparison Matrix</h3>",
      "keyPoints": [
        "Exhaustive comparison between canine (adaptive omnivore) and feline (obligate carnivore).",
        "Protein: Dog 18–22% CP vs Cat 26–30% CP (cat has fixed high transaminase activity).",
        "Essential amino acids: Cat requires dietary Taurine (retinal/cardiac integrity) and Arginine.",
        "Lipids: Cat lacks Δ-6-desaturase, requiring pre-formed arachidonic acid.",
        "Vitamins: Cat requires pre-formed Retinol (Vitamin A) and pre-formed Niacin.",
        "FLUTD: Dietary acidification (target urine pH 6.2–6.5) prevents magnesium ammonium phosphate uroliths."
      ],
      "table": {
        "title": "Comprehensive Comparative Matrix: Canine (Dog) vs Feline (Cat) Nutrition",
        "headers": [
          "Nutritional Parameter",
          "Canine (Dog) — Adaptive Omnivore",
          "Feline (Cat) — Obligate Carnivore"
        ],
        "rows": [
          [
            "Dietary Classification",
            "Opportunistic, adaptive omnivore with scavenging history",
            "Strict, specialized obligate carnivore"
          ],
          [
            "Minimum Crude Protein",
            "18% CP (adult maintenance); 22.5% CP (growth)",
            "26% CP (adult maintenance); 30% CP (growth)"
          ],
          [
            "Hepatic Amino Acid Catabolism",
            "Adaptive: transaminases downregulate on low-protein diets to conserve body nitrogen",
            "Non-Adaptive: transaminases & urea cycle enzymes operate constitutively at high fixed rates"
          ],
          [
            "Taurine Requirement",
            "Conditionally non-essential: synthesizes taurine from cysteine and conjugates bile with glycine",
            "Strictly Essential: cannot synthesize taurine; deficiency causes retinal blindness & dilated cardiomyopathy"
          ],
          [
            "Arginine Sensitivity",
            "Moderate requirement; tolerates short-term arginine deficit",
            "Extreme: single arginine-free meal causes fatal hyperammonemic ammonia toxicity in hours"
          ],
          [
            "Essential Fatty Acids",
            "Synthesizes Arachidonic Acid from Linoleic acid via active Δ-6-desaturase",
            "Lacks Δ-6-desaturase: Arachidonic Acid is an obligate dietary requirement from animal fats"
          ],
          [
            "Vitamin A (Retinol)",
            "Cleaves plant β-carotene into active retinol via intestinal mucosal dioxygenase",
            "Lacks β-carotene-15,15'-dioxygenase: requires pre-formed Vitamin A (retinol) from animal tissue"
          ],
          [
            "Niacin (Vitamin B3)",
            "Synthesizes niacin from the amino acid tryptophan via quinolinate pathway",
            "Extremely high picolinate carboxylase activity degrades tryptophan: requires dietary pre-formed Niacin"
          ],
          [
            "Carbohydrate Utilization",
            "High capacity: AMY2B gene duplications synthesize abundant pancreatic amylase to digest starches",
            "Limited capacity: lacks salivary amylase, low intestinal sucrase/lactase, and lacks hepatic glucokinase (uses hexokinase)"
          ],
          [
            "Urinary pH & FLUTD Management",
            "Urine pH varies widely (6.5–7.5); uroliths often secondary to bacterial UTI",
            "Target urine pH 6.2–6.5: alkaline urine (>7.0) precipitates Struvite (MgNH4PO4); excessive acidification (<6.0) triggers Calcium Oxalate uroliths"
          ]
        ]
      },
      "pyq": [
        "IVRI Annual 2023",
        "GADVASU 2022",
        "TANUVAS 2021",
        "RAJUVAS 2020"
      ]
    }
  ]
};
