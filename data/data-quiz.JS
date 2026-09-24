/* ============================================================
   data-quiz.JS  —  Quiz Question Bank
   Animal Nutrition Studio
   ------------------------------------------------------------
   820 Examination-Grade Questions across Units 1 to 4
   About 2 : 1 : 1 Ratio (MCQ : TF : FIB) in every unit
   Units 1 & 4: 230 each (116 : 57 : 57) | Units 2 & 3: 180 each (90 : 45 : 45)
   13 Thematic Sub-Sections
   ============================================================ */

var quizBank = {
  "unit-1": {
    "mcq": [
      {
        "q": "Who is universally regarded as the Father of Animal Nutrition for establishing that respiration is a combustion process?",
        "o": [
          "Justus von Liebig",
          "Albrecht Thaer",
          "Antoine Lavoisier",
          "Wilhelm Henneberg"
        ],
        "a": 2,
        "e": "Antoine Lavoisier (1743-1794) conducted pioneering respiration experiments with guinea pigs and ice calorimeters, proving life is a chemical combustion.",
        "topicId": "u1-t01",
        "diff": 1,
        "subSection": "u1-s1"
      },
      {
        "q": "Which French agricultural chemist conducted the first scientific balance experiments on dairy cows in 1839?",
        "o": [
          "Max Rubner",
          "W.O. Atwater",
          "Oskar Kellner",
          "J.B. Boussingault"
        ],
        "a": 3,
        "e": "Jean-Baptiste Boussingault is recognized as the founder of modern agricultural chemistry and the first to perform complete feed-feces-urine balance trials.",
        "topicId": "u1-t01",
        "diff": 2,
        "subSection": "u1-s1"
      },
      {
        "q": "In the chemical composition of animal bodies, which constituent exhibits the highest inverse correlation with body fat percentage?",
        "o": [
          "Water",
          "Crude protein",
          "Total ash",
          "Carbohydrate"
        ],
        "a": 0,
        "e": "Water and fat are inversely related in the animal body; on a fat-free basis, adult mammalian body water remains remarkably constant at approximately 72-74%.",
        "topicId": "u1-t03",
        "diff": 2,
        "subSection": "u1-s1"
      },
      {
        "q": "The primary structural carbohydrate present in mature plant cell walls that is completely indigestible by mammalian enzymes is:",
        "o": [
          "Amylose",
          "Cellulose",
          "Glycogen",
          "Inulin"
        ],
        "a": 1,
        "e": "Cellulose consists of beta-1,4-glycosidic linkages which cannot be hydrolyzed by mammalian digestive enzymes, requiring ruminal microbial cellulase.",
        "topicId": "u1-t05",
        "diff": 1,
        "subSection": "u1-s1"
      },
      {
        "q": "Which ruminal volatile fatty acid (VFA) serves as the primary substrate for endogenous hepatic gluconeogenesis in ruminants?",
        "o": [
          "Acetate",
          "Propionate",
          "Butyrate",
          "Isovalerate"
        ],
        "a": 1,
        "e": "Propionate is the sole major volatile fatty acid with a net glucogenic carbon skeleton, providing 60-80% of systemic glucose in lactating dairy cows.",
        "topicId": "u1-t05",
        "diff": 1,
        "subSection": "u1-s1"
      },
      {
        "q": "The primary volatile fatty acid responsible for stimulating ruminal epithelial papillae development in young calves is:",
        "o": [
          "Butyrate",
          "Acetate",
          "Propionate",
          "Formate"
        ],
        "a": 0,
        "e": "Butyric acid provides direct oxidative fuel to the ruminal mucosa and is the most potent stimulator of rumen papillae growth and epithelial keratinization.",
        "topicId": "u1-t05",
        "diff": 2,
        "subSection": "u1-s1"
      },
      {
        "q": "The normal molar proportion of volatile fatty acids (Acetate : Propionate : Butyrate) in a dairy cow fed a standard high-roughage diet is approximately:",
        "o": [
          "40 : 40 : 20",
          "65 : 20 : 15",
          "20 : 65 : 15",
          "50 : 10 : 40"
        ],
        "a": 1,
        "e": "High-forage diets foster fibrolytic bacteria (Fibrobacter succinogenes, Ruminococcus albus) producing an acetate-dominated VFA profile of roughly 65:20:15.",
        "topicId": "u1-t05",
        "diff": 2,
        "subSection": "u1-s1"
      },
      {
        "q": "Which complex phenolic polymer encrusts cellulose and hemicellulose in mature roughages and is completely resistant to anaerobic microbial fermentation?",
        "o": [
          "Pectin",
          "Lignin",
          "Cutin",
          "Suberin"
        ],
        "a": 1,
        "e": "Lignin is not a true carbohydrate but a phenylpropanoid polymer that forms ester bonds with hemicellulose, physically preventing microbial enzyme access.",
        "topicId": "u1-t05",
        "diff": 2,
        "subSection": "u1-s1"
      },
      {
        "q": "What is the metabolic water yield per 100 grams of fully oxidized dietary fat?",
        "o": [
          "55.5 g",
          "41.3 g",
          "107.1 g",
          "200.0 g"
        ],
        "a": 2,
        "e": "Fat yields the highest metabolic water upon beta-oxidation (107.1 g water / 100 g fat), compared to 55.5 g for starch and 41.3 g for protein.",
        "topicId": "u1-t08",
        "diff": 2,
        "subSection": "u1-s1"
      },
      {
        "q": "Which predominant polyunsaturated fatty acid (PUFA) in forage lipids undergoes extensive ruminal biohydrogenation to stearic acid?",
        "o": [
          "Oleic acid (C18:1)",
          "Linolenic acid (C18:3)",
          "Palmitic acid (C16:0)",
          "Myristic acid (C14:0)"
        ],
        "a": 1,
        "e": "Alpha-linolenic acid (C18:3) is the chief PUFA in green forages; ruminal microbes isomerize and hydrogenate it sequentially to trans-vaccenic and stearic acid.",
        "topicId": "u1-t07",
        "diff": 3,
        "subSection": "u1-s1"
      },
      {
        "q": "Which intermediate of ruminal fatty acid biohydrogenation has been definitively identified as the causative agent of diet-induced milk fat depression (MFD)?",
        "o": [
          "cis-9, trans-11 CLA",
          "trans-10, cis-12 conjugated linoleic acid (CLA)",
          "trans-11 vaccenic acid",
          "stearic acid"
        ],
        "a": 1,
        "e": "trans-10, cis-12 CLA potent down-regulates SREBP-1c and lipogenic enzymes (acetyl-CoA carboxylase, fatty acid synthase) in the bovine mammary gland.",
        "topicId": "u1-t07",
        "diff": 3,
        "subSection": "u1-s1"
      },
      {
        "q": "The main circulating lipoprotein responsible for transporting endogenous triglycerides from the avian liver to the ovary for yolk synthesis is:",
        "o": [
          "VLDL (Very Low Density Lipoprotein)",
          "Chylomicrons",
          "HDL",
          "Albumin"
        ],
        "a": 0,
        "e": "Unlike mammals which absorb fats via mesenteric lymphatics, birds absorb dietary and hepatic lipids directly into portal blood, and liver secretes estrogen-induced VLDLy.",
        "topicId": "u1-t07",
        "diff": 3,
        "subSection": "u1-s1"
      },
      {
        "q": "Which physiological trigger stimulates thirst sensation when extracellular fluid osmolality increases by as little as 1-2%?",
        "o": [
          "Baroreceptors in aortic arch",
          "Hypothalamic osmoreceptors",
          "Renal juxtaglomerular cells",
          "Adrenal cortex glomerulosa"
        ],
        "a": 1,
        "e": "An increase in ECF osmolarity shrinks hypothalamic osmoreceptor cells, triggering vasopressin (ADH) release from the posterior pituitary and conscious thirst.",
        "topicId": "u1-t08",
        "diff": 2,
        "subSection": "u1-s1"
      },
      {
        "q": "Amylose differs from amylopectin in having exclusively which type of glycosidic linkages?",
        "o": [
          "alpha-1,6-glucosidic bonds only",
          "alpha-1,4-glucosidic bonds only",
          "beta-1,4-glucosidic bonds",
          "both alpha-1,4 and alpha-1,6 branches"
        ],
        "a": 1,
        "e": "Amylose is a linear unbranched polymer composed exclusively of alpha-D-glucose units joined by alpha-1,4-glycosidic linkages.",
        "topicId": "u1-t05",
        "diff": 1,
        "subSection": "u1-s1"
      },
      {
        "q": "Which enzyme synthesized by the neonatal gastric abomasal mucosa is vital for clotting milk kappa-casein in suckling calves?",
        "o": [
          "Pepsin A",
          "Gastric lipase",
          "Chymosin (Rennin)",
          "Trypsin"
        ],
        "a": 2,
        "e": "Chymosin specifically cleaves the Phe105-Met106 peptide bond of kappa-casein, forming an insoluble curd that slows passage and allows thorough enzymatic digestion.",
        "topicId": "u1-t06",
        "diff": 1,
        "subSection": "u1-s1"
      },
      {
        "q": "Which volatile fatty acid is converted directly to ketone bodies (beta-hydroxybutyrate) across the ruminal epithelium during absorption?",
        "o": [
          "Acetate",
          "Propionate",
          "Butyrate",
          "Valerate"
        ],
        "a": 2,
        "e": "Over 80-90% of ruminally absorbed butyric acid is converted directly to beta-hydroxybutyrate and acetoacetate within ruminal epithelial colonocytes.",
        "topicId": "u1-t05",
        "diff": 2,
        "subSection": "u1-s1"
      },
      {
        "q": "A high-concentrate, starch-rich diet fed to dairy cows leads to which metabolic shift in ruminal fermentation?",
        "o": [
          "Increased acetate:propionate ratio and increased pH",
          "Decreased acetate:propionate ratio and decreased rumen pH",
          "Selective elimination of amylolytic bacteria",
          "Elevated production of methane"
        ],
        "a": 1,
        "e": "Rapidly fermentable starches proliferate Streptococcus bovis, boosting propionate and lactate, which lowers rumen pH below 5.8 and reduces the A:P ratio.",
        "topicId": "u1-t05",
        "diff": 2,
        "subSection": "u1-s1"
      },
      {
        "q": "Water intoxication in calves typically occurs as a result of which physiological event?",
        "o": [
          "Chronic consumption of saline water (>10,000 ppm TDS)",
          "High dietary intake of succulent berseem clover",
          "Over-infusion of isotonic 0.9% saline",
          "Rapid consumption of large volumes of cold water after prolonged deprivation"
        ],
        "a": 3,
        "e": "Rapid ingestion of copious water causes sudden hemodilution, severe hypo-osmolality, intravascular hemolysis, hemoglobinuria, and fatal cerebral edema.",
        "topicId": "u1-t08",
        "diff": 2,
        "subSection": "u1-s1"
      },
      {
        "q": "Which non-reducing disaccharide composed of two glucose molecules joined by an alpha-1,1 linkage is found in insect hemolymph and yeast?",
        "o": [
          "Maltose",
          "Cellobiose",
          "Trehalose",
          "Gentiobiose"
        ],
        "a": 2,
        "e": "Trehalose consists of two alpha-D-glucose molecules linked via an alpha-1,1 bond; it is non-reducing and found in fungi, bacteria, and insect blood.",
        "topicId": "u1-t05",
        "diff": 3,
        "subSection": "u1-s1"
      },
      {
        "q": "Dietary fat supplementation in ruminants must generally be restricted to what maximum percentage of diet dry matter to prevent fiber digestion depression?",
        "o": [
          "12 to 15%",
          "18 to 20%",
          "1 to 2%",
          "5 to 6%"
        ],
        "a": 3,
        "e": "Free unsaturated oils above 5-6% coat fibrous feed particles and are directly toxic to cellulolytic bacteria, severely depressing fiber digestion.",
        "topicId": "u1-t07",
        "diff": 2,
        "subSection": "u1-s1"
      },
      {
        "q": "The primary storage polysaccharide found in the liver and skeletal muscle of animals is:",
        "o": [
          "Starch",
          "Dextrin",
          "Glycogen",
          "Inulin"
        ],
        "a": 2,
        "e": "Glycogen is a highly branched alpha-1,4 and alpha-1,6 linked polyglucan serving as the rapid glucose reserve in animal liver and muscle tissue.",
        "topicId": "u1-t05",
        "diff": 1,
        "subSection": "u1-s1"
      },
      {
        "q": "Which chemical entity constitutes the true fundamental unit of plant cell walls determined as the residue after neutral detergent extraction?",
        "o": [
          "Acid Detergent Fibre (ADF)",
          "Crude Fibre (CF)",
          "Total Ash",
          "Neutral Detergent Fibre (NDF)"
        ],
        "a": 3,
        "e": "NDF represents total plant cell wall components (hemicellulose, cellulose, lignin, and silica) and is the best single predictor of voluntary dry matter intake.",
        "topicId": "u1-t05",
        "diff": 2,
        "subSection": "u1-s1"
      },
      {
        "q": "The Kjeldahl nitrogen content of general plant and animal proteins is assumed to be what standard percentage, giving the conversion factor of 6.25?",
        "o": [
          "12.5%",
          "16.0%",
          "20.0%",
          "18.5%"
        ],
        "a": 1,
        "e": "Because mixed proteins contain an average of 16% nitrogen by weight, multiplying percent nitrogen by 100/16 (6.25) yields the Crude Protein value.",
        "topicId": "u1-t06",
        "diff": 1,
        "subSection": "u1-s2"
      },
      {
        "q": "Which essential amino acid is invariably the first-limiting amino acid in maize-soybean meal based poultry diets?",
        "o": [
          "Lysine",
          "Threonine",
          "Tryptophan",
          "Methionine"
        ],
        "a": 3,
        "e": "Soybean meal is rich in lysine but deficient in sulfur-containing amino acids; hence, DL-methionine is universally the first limiting amino acid in broiler rations.",
        "topicId": "u1-t06",
        "diff": 2,
        "subSection": "u1-s2"
      },
      {
        "q": "Which essential amino acid is typically first-limiting in cereal-based swine diets?",
        "o": [
          "Lysine",
          "Methionine",
          "Valine",
          "Isoleucine"
        ],
        "a": 0,
        "e": "Cereal grains (maize, barley, wheat) are severely deficient in lysine; therefore, L-lysine is the first-limiting amino acid for growing swine.",
        "topicId": "u1-t06",
        "diff": 1,
        "subSection": "u1-s2"
      },
      {
        "q": "The formula for Biological Value (BV) of a dietary protein according to the Thomas-Mitchell method is:",
        "o": [
          "[N retained / N absorbed] x 100",
          "[N absorbed / N intake] x 100",
          "[Weight gain / Protein intake] x 100",
          "[N retained / N intake] x 100"
        ],
        "a": 0,
        "e": "Biological Value measures the percentage of absorbed nitrogen that is retained by the animal body for maintenance and productive purposes.",
        "topicId": "u1-t16",
        "diff": 2,
        "subSection": "u1-s2"
      },
      {
        "q": "Net Protein Utilization (NPU) is mathematically equal to:",
        "o": [
          "Biological Value x Apparent Digestibility",
          "PER x 6.25",
          "Biological Value x True Digestibility",
          "DCP / Total Feed Intake"
        ],
        "a": 2,
        "e": "NPU represents the proportion of dietary intake that is retained: NPU = (N retained / N intake) = BV x True Digestibility (TD).",
        "topicId": "u1-t16",
        "diff": 2,
        "subSection": "u1-s2"
      },
      {
        "q": "Protein Efficiency Ratio (PER) is determined by measuring:",
        "o": [
          "Nitrogen balance in adult non-lactating females",
          "Body weight gain (g) per gram of protein consumed in growing rats",
          "Serum urea nitrogen concentration post-feeding",
          "Duodenal amino acid flow per unit intake"
        ],
        "a": 1,
        "e": "PER is defined as the grams of body weight gained per gram of crude protein consumed under standardized experimental conditions in weanling rats.",
        "topicId": "u1-t16",
        "diff": 1,
        "subSection": "u1-s2"
      },
      {
        "q": "Which protein evaluation parameter is used officially in the Indian ICAR feeding standard for calculating ruminant protein requirements?",
        "o": [
          "Metabolisable Protein (MP)",
          "Digestible Crude Protein (DCP)",
          "Net Protein System (PDI)",
          "Ruminant Degraded Protein (RDP)"
        ],
        "a": 1,
        "e": "Historically and in the classical Sen & Ray and ICAR standards, protein requirements for cattle and buffaloes are formulated on a DCP basis.",
        "topicId": "u1-t16",
        "diff": 2,
        "subSection": "u1-s2"
      },
      {
        "q": "In the rumen, true dietary protein that escapes microbial degradation and passes directly to the abomasum is designated as:",
        "o": [
          "Rumen Undegradable Protein (RUP / Bypass Protein)",
          "Rumen Degradable Protein (RDP)",
          "Metabolic Fecal Nitrogen (MFN)",
          "Endogenous Urinary Nitrogen (EUN)"
        ],
        "a": 0,
        "e": "RUP (Rumen Undegradable Protein) bypasses ruminal proteolysis intact to be enzymatically hydrolyzed by abomasal and intestinal proteases.",
        "topicId": "u1-t06",
        "diff": 1,
        "subSection": "u1-s2"
      },
      {
        "q": "Which chemical agent is approved and widely used in India for the commercial treatment of oilseed cakes to create bypass protein?",
        "o": [
          "Glutaraldehyde (at 5 g per 100 g CP)",
          "Formaldehyde (at 1.0-1.2 g per 100 g CP)",
          "Sodium hydroxide (at 4%)",
          "Hydrochloric acid (at 2 N)"
        ],
        "a": 1,
        "e": "Treating groundnut or mustard cake with formalin at 1.0 to 1.2 g formaldehyde per 100 g crude protein creates reversible methylene bridges that protect against rumen breakdown.",
        "topicId": "u1-t06",
        "diff": 2,
        "subSection": "u1-s2"
      },
      {
        "q": "Microbial crude protein synthesized in the rumen has a biological value of approximately:",
        "o": [
          "80%",
          "50%",
          "30%",
          "100%"
        ],
        "a": 0,
        "e": "Rumen microbial protein has an excellent, well-balanced essential amino acid profile with an average biological value of 75-85% and true digestibility of ~80%.",
        "topicId": "u1-t06",
        "diff": 2,
        "subSection": "u1-s2"
      },
      {
        "q": "Which amino acid contains sulfur and is essential for wool growth in sheep?",
        "o": [
          "Lysine",
          "Methionine",
          "Leucine",
          "Tryptophan"
        ],
        "a": 1,
        "e": "Wool keratin contains over 3-4% sulfur predominantly in the form of cystine; dietary methionine supplies the sulfur skeleton for keratin synthesis.",
        "topicId": "u1-t06",
        "diff": 1,
        "subSection": "u1-s2"
      },
      {
        "q": "What is the optimal Nitrogen-to-Sulfur (N:S) ratio recommended in ruminant rations when non-protein nitrogen (urea) is incorporated?",
        "o": [
          "20 : 1",
          "5 : 1",
          "1 : 1",
          "10 : 1"
        ],
        "a": 3,
        "e": "A dietary N:S ratio of 10:1 (or 10-12:1) ensures sufficient sulfur for ruminal microbes to synthesize methionine and cysteine from inorganic ammonia.",
        "topicId": "u1-t06",
        "diff": 2,
        "subSection": "u1-s2"
      },
      {
        "q": "Which of the following is considered an indispensable (essential) basic amino acid that contains an epsilon-amino group?",
        "o": [
          "Glycine",
          "Lysine",
          "Alanine",
          "Serine"
        ],
        "a": 1,
        "e": "Lysine is a dibasic essential amino acid with a terminal epsilon-amino group that is susceptible to Maillard browning reactions during heat processing.",
        "topicId": "u1-t06",
        "diff": 2,
        "subSection": "u1-s2"
      },
      {
        "q": "The Maillard reaction in over-heated feeds involves the non-enzymatic condensation of the amino group of lysine with:",
        "o": [
          "Volatile fatty acids",
          "Reducing sugars",
          "Inorganic phosphates",
          "Triglycerides"
        ],
        "a": 1,
        "e": "Maillard reaction occurs when free amino groups (especially epsilon-NH2 of lysine) react with aldehyde groups of reducing sugars, producing indigestible brown polymers.",
        "topicId": "u1-t06",
        "diff": 2,
        "subSection": "u1-s2"
      },
      {
        "q": "Which amino acid is exceptionally required in feline diets because cats have limited enzymatic activity of cysteine dioxygenase and sulfinoalanine decarboxylase?",
        "o": [
          "Proline",
          "Tyrosine",
          "Taurine",
          "Carnitine"
        ],
        "a": 2,
        "e": "Cats cannot synthesize adequate taurine (a beta-aminosulfonic acid) and conjugate bile acids exclusively with taurine, making it an absolute dietary essential.",
        "topicId": "u1-t06",
        "diff": 1,
        "subSection": "u1-s2"
      },
      {
        "q": "What is the protein equivalent of pure feed-grade urea containing 46% nitrogen?",
        "o": [
          "287.5%",
          "100%",
          "46%",
          "16%"
        ],
        "a": 0,
        "e": "Protein equivalent = % Nitrogen x 6.25 = 46 x 6.25 = 287.5%.",
        "topicId": "u1-t16",
        "diff": 1,
        "subSection": "u1-s2"
      },
      {
        "q": "In the calculation of Protein Equivalent (PE) according to the British system, PE is defined as:",
        "o": [
          "DCP x 6.25",
          "(DCP + True Digestible Protein) / 2",
          "NPU x Biological Value",
          "Crude Protein - Total Ash"
        ],
        "a": 1,
        "e": "Protein Equivalent (PE) = (Digestible Crude Protein + Digestible Pure Protein) / 2; it attributes half the value of true protein to non-protein nitrogen.",
        "topicId": "u1-t16",
        "diff": 3,
        "subSection": "u1-s2"
      },
      {
        "q": "Which tissue possesses the highest turnover rate of cellular protein in lactating dairy cows?",
        "o": [
          "Skeletal muscle",
          "Intestinal mucosal epithelium",
          "Adipose tissue",
          "Cartilage"
        ],
        "a": 1,
        "e": "Gastrointestinal epithelial cells undergo continuous rapid desquamation and complete renewal every 2-4 days, accounting for high endogenous protein expenditure.",
        "topicId": "u1-t06",
        "diff": 3,
        "subSection": "u1-s2"
      },
      {
        "q": "Which ratio of dietary Calcium to Phosphorus (Ca:P) is considered physiologically optimal for adult ruminant livestock?",
        "o": [
          "5 : 1 to 6 : 1",
          "1 : 2 to 1 : 3",
          "1.5 : 1 to 2 : 1",
          "10 : 1"
        ],
        "a": 2,
        "e": "A Ca:P ratio of 1.5:1 to 2:1 ensures adequate bone mineralization and prevents nutritional secondary hyperparathyroidism or urinary calculi.",
        "topicId": "u1-t09",
        "diff": 1,
        "subSection": "u1-s3"
      },
      {
        "q": "Nutritional secondary hyperparathyroidism in horses, commonly termed 'Big Head' or 'Bran Disease', is caused by:",
        "o": [
          "Severe vitamin D toxicity",
          "High dietary phosphorus and low calcium intake",
          "Zinc deficiency",
          "Copper toxicity"
        ],
        "a": 1,
        "e": "Feeding wheat bran (high in phosphorus, low in calcium) stimulates chronic parathyroid hormone secretion, mobilizing bone calcium and replacing facial bones with fibrous tissue.",
        "topicId": "u1-t09",
        "diff": 2,
        "subSection": "u1-s3"
      },
      {
        "q": "Grass tetany (hypomagnesemic tetany) in cattle grazing lush spring pastures is exacerbated by high levels of which dietary element that blocks ruminal Mg absorption?",
        "o": [
          "Sodium (Na)",
          "Calcium (Ca)",
          "Potassium (K)",
          "Iron (Fe)"
        ],
        "a": 2,
        "e": "High potassium depolarizes the ruminal apical epithelial membrane, severely reducing the active trans-epithelial potential driving magnesium transport.",
        "topicId": "u1-t09",
        "diff": 2,
        "subSection": "u1-s3"
      },
      {
        "q": "Which trace mineral is an integral constituent of the enzyme glutathione peroxidase, functioning alongside Vitamin E as an antioxidant?",
        "o": [
          "Zinc",
          "Selenium",
          "Copper",
          "Manganese"
        ],
        "a": 1,
        "e": "Selenium is incorporated as selenocysteine into cytosolic glutathione peroxidase, which destroys hydrogen peroxide and lipid hydroperoxides.",
        "topicId": "u1-t10",
        "diff": 1,
        "subSection": "u1-s3"
      },
      {
        "q": "The classical deficiency sign of Copper in sheep and lambs characterized by demyelination of the spinal cord is known as:",
        "o": [
          "Grass staggers",
          "White muscle disease",
          "Swayback (Enzootic Ataxia)",
          "Crazy chick disease"
        ],
        "a": 2,
        "e": "Copper is required for cytochrome c oxidase activity during myelination; deficiency causes ataxia, flaccid hindlimb paralysis, and swayback in lambs.",
        "topicId": "u1-t10",
        "diff": 2,
        "subSection": "u1-s3"
      },
      {
        "q": "Cobalt deficiency in ruminants manifests identically to which vitamin deficiency because cobalt is an obligate structural component of this vitamin?",
        "o": [
          "Thiamine (Vitamin B1)",
          "Biotin (Vitamin B7)",
          "Vitamin B12 (Cyanocobalamin)",
          "Folic acid (Vitamin B9)"
        ],
        "a": 2,
        "e": "Ruminal microbes incorporate inorganic dietary cobalt directly into the corrin ring of cobalamin (vitamin B12); cobalt deficiency is essentially vitamin B12 deficiency.",
        "topicId": "u1-t10",
        "diff": 1,
        "subSection": "u1-s3"
      },
      {
        "q": "Parakeratosis in growing swine is caused by a dietary deficiency of which trace mineral, often precipitated by excess calcium?",
        "o": [
          "Zinc",
          "Iron",
          "Iodine",
          "Molybdenum"
        ],
        "a": 0,
        "e": "Zinc deficiency causes keratinization failure in pig epidermis (crusty fissured skin); excess calcium competes for intestinal zinc absorption sites.",
        "topicId": "u1-t10",
        "diff": 2,
        "subSection": "u1-s3"
      },
      {
        "q": "Which mineral deficiency in newborn piglets is universally prevented by intramuscular injection of iron dextran (150-200 mg) at 3 days of age?",
        "o": [
          "Copper",
          "Manganese",
          "Iron (preventing 'Piglet Thumps')",
          "Iodine"
        ],
        "a": 2,
        "e": "Piglets are born with minimal iron stores (~50 mg) and sow milk is deficient (1 mg/day vs 7 mg requirement); without iron injection, fatal microcytic hypochromic anemia occurs.",
        "topicId": "u1-t10",
        "diff": 1,
        "subSection": "u1-s3"
      },
      {
        "q": "Perosis or 'slipped tendon' in growing poultry chicks is primarily caused by a deficiency of:",
        "o": [
          "Manganese",
          "Selenium",
          "Cobalt",
          "Fluorine"
        ],
        "a": 0,
        "e": "Manganese is a cofactor for glycosyltransferases required for chondroitin sulfate synthesis; deficiency weakens the tibiotarsal joint, causing gastrocnemius tendon slippage.",
        "topicId": "u1-t10",
        "diff": 2,
        "subSection": "u1-s3"
      },
      {
        "q": "Alkali disease and blind staggers are clinical syndromes associated with chronic toxicity of which trace element?",
        "o": [
          "Fluorine",
          "Lead",
          "Selenium",
          "Arsenic"
        ],
        "a": 2,
        "e": "Chronic selenosis (alkali disease) occurs in animals grazing selenium-accumulating plants (Astragalus), causing hoof sloughing, emaciation, and mane/tail hair loss.",
        "topicId": "u1-t10",
        "diff": 2,
        "subSection": "u1-s3"
      },
      {
        "q": "Why cannot domestic cats utilize beta-carotene as a dietary source of Vitamin A?",
        "o": [
          "They lack gastric hydrochloric acid",
          "They do not absorb dietary micellar lipids",
          "Carotene is toxic to the feline liver",
          "They lack intestinal beta-carotene-15,15'-dioxygenase activity"
        ],
        "a": 3,
        "e": "Cats are strict carnivores with virtually no beta-carotene dioxygenase enzyme activity in their enterocytes, requiring preformed dietary retinol (Vitamin A).",
        "topicId": "u1-t11",
        "diff": 2,
        "subSection": "u1-s3"
      },
      {
        "q": "The active hormonal form of Vitamin D synthesized in the renal proximal convoluted tubules is:",
        "o": [
          "1,25-dihydroxycholecalciferol [1,25-(OH)2-D3]",
          "25-hydroxycholecalciferol",
          "7-dehydrocholesterol",
          "Ergosterol"
        ],
        "a": 0,
        "e": "Renal 1-alpha-hydroxylase converts 25-OH-D3 to 1,25-(OH)2-D3 (calcitriol), which binds nuclear VDR receptors to stimulate calbindin-mediated calcium absorption.",
        "topicId": "u1-t11",
        "diff": 2,
        "subSection": "u1-s3"
      },
      {
        "q": "The biological activity of Vitamin E is most potently exhibited by which chemical isomer?",
        "o": [
          "beta-tocopherol",
          "gamma-tocopherol",
          "d-alpha-tocopherol (RRR-alpha-tocopherol)",
          "delta-tocotrienol"
        ],
        "a": 2,
        "e": "Naturally occurring d-alpha-tocopherol (RRR-alpha-tocopherol) possesses the greatest in vivo biological antioxidant activity.",
        "topicId": "u1-t11",
        "diff": 2,
        "subSection": "u1-s3"
      },
      {
        "q": "Sweet clover disease in cattle is caused by ingestion of spoiled Melilotus hay containing dicoumarol, an antagonist of which vitamin?",
        "o": [
          "Vitamin K",
          "Vitamin E",
          "Vitamin A",
          "Vitamin C"
        ],
        "a": 0,
        "e": "Dicoumarol competitively inhibits vitamin K epoxide reductase, preventing gamma-carboxylation of clotting factors II, VII, IX, and X, leading to fatal hemorrhage.",
        "topicId": "u1-t11",
        "diff": 2,
        "subSection": "u1-s3"
      },
      {
        "q": "Cerebrocortical necrosis (CCN) or Polioencephalomalacia (PEM) in young ruminants is caused by an acute deficiency or microbial destruction of:",
        "o": [
          "Riboflavin (Vitamin B2)",
          "Niacin (Vitamin B3)",
          "Thiamine (Vitamin B1)",
          "Pyridoxine (Vitamin B6)"
        ],
        "a": 2,
        "e": "High-concentrate feeding or sulfur overload promotes ruminal bacterial thiaminases, leading to thiamine depletion, cerebral ATP failure, and cortical necrosis.",
        "topicId": "u1-t12",
        "diff": 2,
        "subSection": "u1-s3"
      },
      {
        "q": "Curled toe paralysis in young chicks is a pathognomonic diagnostic sign of which vitamin deficiency?",
        "o": [
          "Riboflavin (Vitamin B2)",
          "Pantothenic acid",
          "Thiamine",
          "Choline"
        ],
        "a": 0,
        "e": "Riboflavin deficiency in chicks causes myelin sheath degeneration in the sciatic nerve trunks, forcing chicks to walk on their hocks with inward curled toes.",
        "topicId": "u1-t12",
        "diff": 2,
        "subSection": "u1-s3"
      },
      {
        "q": "Which B-complex vitamin deficiency in pigs causes the characteristic 'goose-stepping' gait due to peripheral sciatic neuropathy?",
        "o": [
          "Pyridoxine (Vitamin B6)",
          "Biotin (Vitamin B7)",
          "Niacin (Vitamin B3)",
          "Pantothenic acid (Vitamin B5)"
        ],
        "a": 3,
        "e": "Pantothenic acid is a component of Coenzyme A; its deficiency produces demyelinating peripheral neuropathy leading to an exaggerated robotic goose-stepping gait in pigs.",
        "topicId": "u1-t12",
        "diff": 2,
        "subSection": "u1-s3"
      },
      {
        "q": "Most domestic farm mammals can synthesize endogenous Vitamin C (L-ascorbic acid) from D-glucose because their liver contains which functional enzyme?",
        "o": [
          "Glucose-6-phosphatase",
          "L-gulonolactone oxidase",
          "UDP-glucuronosyltransferase",
          "Aldose reductase"
        ],
        "a": 1,
        "e": "Farm animals possess functional hepatic L-gulonolactone oxidase; humans, primates, and guinea pigs possess a mutated inactive pseudogene, requiring dietary Vitamin C.",
        "topicId": "u1-t12",
        "diff": 3,
        "subSection": "u1-s3"
      },
      {
        "q": "The primary clinical sign of chronic fluorosis in cattle caused by drinking groundwater containing >5-10 ppm Fluorine is:",
        "o": [
          "Severe night blindness",
          "Parakeratosis of the snout",
          "Mottling and excessive attrition of incisor teeth and exostoses of bones",
          "Curled-toe paralysis"
        ],
        "a": 2,
        "e": "Fluoride replaces hydroxyl groups forming fluorapatite crystals in developing teeth and bones, leading to chalky mottled enamel, severe pain, and periosteal exostoses.",
        "topicId": "u1-t10",
        "diff": 2,
        "subSection": "u1-s3"
      },
      {
        "q": "Which trace element is an indispensable constituent of the thyroid hormones thyroxine (T4) and triiodothyronine (T3)?",
        "o": [
          "Iron",
          "Iodine",
          "Zinc",
          "Manganese"
        ],
        "a": 1,
        "e": "Iodine is concentrated in thyroid follicular cells and iodinates tyrosine residues on thyroglobulin to synthesize active metabolic thyroid hormones.",
        "topicId": "u1-t10",
        "diff": 1,
        "subSection": "u1-s3"
      },
      {
        "q": "Total Digestible Nutrients (TDN) is calculated using which mathematical formula?",
        "o": [
          "DCP + DCF + DNFE + (DEE x 2.25)",
          "DCP + DCF + DNFE + DEE",
          "DCP + DCF + (DNFE x 2.25) + DEE",
          "GE - Fecal Energy"
        ],
        "a": 0,
        "e": "TDN sums digestible crude protein, crude fiber, nitrogen-free extract, and digestible ether extract multiplied by 2.25 (since fat contains 2.25 times the gross energy of carbs).",
        "topicId": "u1-t14",
        "diff": 1,
        "subSection": "u1-s4"
      },
      {
        "q": "Why is Digestible Ether Extract (DEE) multiplied by the factor 2.25 in the calculation of TDN?",
        "o": [
          "Fats yield 2.25 times more heat/energy per gram upon combustion than carbohydrates",
          "Fats have a biological value 2.25 times higher than proteins",
          "Fats contain 2.25 times more carbon atoms per mole",
          "Fats are 2.25 times more digestible than starch"
        ],
        "a": 0,
        "e": "The average gross energy of fat is 9.45 kcal/g, while that of carbohydrates is 4.15 kcal/g. The ratio 9.45 / 4.15 = 2.277, conventionally rounded to 2.25.",
        "topicId": "u1-t14",
        "diff": 1,
        "subSection": "u1-s4"
      },
      {
        "q": "Metabolizable Energy (ME) in ruminants is derived from Digestible Energy (DE) by subtracting losses incurred through:",
        "o": [
          "Heat increment only",
          "Fecal energy and sweat",
          "Basal metabolic heat production",
          "Urine energy and methane (gaseous) energy"
        ],
        "a": 3,
        "e": "ME = DE - (Urinary energy + Gaseous energy). In ruminants, enteric methane accounts for 6-10% and urinary energy for 3-5% of gross energy intake.",
        "topicId": "u1-t14",
        "diff": 1,
        "subSection": "u1-s4"
      },
      {
        "q": "Net Energy (NE) differs from Metabolizable Energy (ME) by the quantity of energy lost as:",
        "o": [
          "Combustible gases (methane)",
          "Urinary urea",
          "Heat Increment (HI)",
          "Fecal nitrogen"
        ],
        "a": 2,
        "e": "NE = ME - Heat Increment (HI). Heat increment represents heat of fermentation and heat of nutrient metabolism that is dissipated except in cold stress.",
        "topicId": "u1-t14",
        "diff": 1,
        "subSection": "u1-s4"
      },
      {
        "q": "The Starch Equivalent (SE) system of feed energy evaluation was originated by which German scientist?",
        "o": [
          "Oskar Kellner",
          "Albrecht Thaer",
          "Gustav von Bunge",
          "Wilhelm Henneberg"
        ],
        "a": 0,
        "e": "Oskar Kellner (1905) determined fat deposition in adult bullocks in respiration chambers, defining SE as the fat-producing value of 1 kg of digestible starch (248 g body fat).",
        "topicId": "u1-t14",
        "diff": 2,
        "subSection": "u1-s4"
      },
      {
        "q": "What is the Respiratory Quotient (RQ) when an animal is exclusively oxidizing carbohydrates?",
        "o": [
          "0.71",
          "0.82",
          "0.60",
          "1.00"
        ],
        "a": 3,
        "e": "RQ is the ratio of moles of CO2 produced to moles of O2 consumed (CO2 / O2). Complete combustion of glucose (C6H12O6 + 6 O2 -> 6 CO2 + 6 H2O) yields an RQ of exactly 1.00.",
        "topicId": "u1-t15",
        "diff": 1,
        "subSection": "u1-s4"
      },
      {
        "q": "The Respiratory Quotient (RQ) during the oxidation of dietary or mobilized body fats is approximately:",
        "o": [
          "0.707",
          "1.000",
          "0.803",
          "0.920"
        ],
        "a": 0,
        "e": "Fats contain relatively little oxygen in their molecular structure compared to carbon and hydrogen, requiring substantially more oxygen for complete oxidation (RQ ~ 0.707).",
        "topicId": "u1-t15",
        "diff": 2,
        "subSection": "u1-s4"
      },
      {
        "q": "The standard Physiological Fuel Values established by W.O. Atwater for human and non-ruminant nutrition (Carbohydrates, Fat, Protein in kcal/g) are:",
        "o": [
          "4, 4, 9",
          "9, 4, 4",
          "4, 9, 4",
          "5.65, 9.45, 4.15"
        ],
        "a": 2,
        "e": "Atwater physiological fuel values account for digestion losses and urinary urea excretion: 4 kcal/g for carbs, 9 kcal/g for fat, and 4 kcal/g for protein.",
        "topicId": "u1-t14",
        "diff": 1,
        "subSection": "u1-s4"
      },
      {
        "q": "In a Carbon-Nitrogen balance experiment, nitrogen balance directly quantifies body protein deposition, while carbon balance minus protein carbon quantifies:",
        "o": [
          "Glycogen synthesis only",
          "Body fat deposition or loss",
          "Methane production rate",
          "Water turnover"
        ],
        "a": 1,
        "e": "Body protein contains on average 16.0% N and 52.5% C. Subtracting retained protein carbon from total retained carbon yields carbon stored as fat (fat is 76.5% C).",
        "topicId": "u1-t15",
        "diff": 3,
        "subSection": "u1-s4"
      },
      {
        "q": "Nutritive Ratio (NR) is calculated using which formula?",
        "o": [
          "DCP / (TDN - DCP)",
          "TDN / DCP",
          "DE / ME",
          "(TDN - DCP) / DCP"
        ],
        "a": 3,
        "e": "Nutritive Ratio expresses the ratio of non-protein digestible energy nutrients to digestible crude protein: NR = (TDN - DCP) / DCP.",
        "topicId": "u1-t17",
        "diff": 2,
        "subSection": "u1-s4"
      },
      {
        "q": "A ration with a Nutritive Ratio of 1 : 4 is classified as:",
        "o": [
          "Medium Nutritive Ratio",
          "Wide Nutritive Ratio",
          "Balanced Maintenance Ratio",
          "Narrow Nutritive Ratio"
        ],
        "a": 3,
        "e": "A Nutritive Ratio narrower than 1:5 is classified as narrow (high protein, suitable for young growing calves and high-yielding dairy cows).",
        "topicId": "u1-t17",
        "diff": 1,
        "subSection": "u1-s4"
      },
      {
        "q": "Which instrument is used to determine the Gross Energy (heat of combustion) of a feed or biological sample?",
        "o": [
          "Kjeldahl digestion unit",
          "Adiabatic Oxygen Bomb Calorimeter",
          "Soxhlet extraction apparatus",
          "Muffle furnace"
        ],
        "a": 1,
        "e": "A bomb calorimeter ignites a pelleted sample under 25-30 atmospheres of pure oxygen inside a water jacket, measuring gross heat of combustion precisely.",
        "topicId": "u1-t14",
        "diff": 1,
        "subSection": "u1-s4"
      },
      {
        "q": "Indirect calorimetry measures heat production in animals by determining:",
        "o": [
          "Direct heat dissipation across a water jacket",
          "Respiratory gas exchange (O2 consumption, CO2 and CH4 production) and urinary N",
          "Rectal temperature changes during exercise",
          "Fecal dry matter excretion rate"
        ],
        "a": 1,
        "e": "Indirect calorimetry calculates heat production via Brouwer's equation from oxygen consumption, carbon dioxide production, methane emission, and urinary nitrogen excretion.",
        "topicId": "u1-t15",
        "diff": 2,
        "subSection": "u1-s4"
      },
      {
        "q": "What conversion factor is conventionally adopted to convert 1 kg of Total Digestible Nutrients (TDN) to Metabolizable Energy (ME) in ruminants?",
        "o": [
          "3.61 Mcal ME (or 15.1 MJ)",
          "2.00 Mcal ME",
          "4.40 Mcal ME",
          "1.80 Mcal ME"
        ],
        "a": 0,
        "e": "1 kg TDN corresponds to approximately 4.4 Mcal of Digestible Energy (DE); applying the 0.82 ME/DE factor gives approximately 3.61 Mcal ME.",
        "topicId": "u1-t14",
        "diff": 2,
        "subSection": "u1-s4"
      },
      {
        "q": "According to the conventional classification of livestock feedstuffs, a roughage is strictly defined as a feed containing:",
        "o": [
          "> 18% Crude Fibre and < 60% TDN on a Dry Matter basis",
          "< 18% Crude Fibre and > 60% TDN on a Dry Matter basis",
          "> 20% Crude Protein and < 10% Moisture",
          "< 5% Ether Extract and > 80% Ash"
        ],
        "a": 0,
        "e": "Roughages are bulky feeds characterized by high crude fiber (>18% CF) and relatively low energy density (<60% TDN on dry matter basis).",
        "topicId": "u1-t13",
        "diff": 1,
        "subSection": "u1-s5"
      },
      {
        "q": "What is the standard recommended level of urea and water used for the ammoniation of 100 kg dry paddy or wheat straw in India?",
        "o": [
          "10 kg urea dissolved in 100 L water",
          "4 kg urea dissolved in 40 L water",
          "1 kg urea dissolved in 10 L water",
          "8 kg urea dissolved in 20 L water"
        ],
        "a": 1,
        "e": "The standard ICAR protocol for straw treatment is 4 kg fertilizer-grade urea dissolved in 40-50 liters of water sprayed uniformly over 100 kg straw and cured anaerobically for 21 days.",
        "topicId": "u1-t20",
        "diff": 1,
        "subSection": "u1-s5"
      },
      {
        "q": "During the anaerobic curing phase of urea-ammoniated straw, what minimum incubation period is required under tropical Indian conditions?",
        "o": [
          "2 days",
          "60 days",
          "21 days (3 weeks)",
          "90 days"
        ],
        "a": 2,
        "e": "A minimum of 21 days is required for urease-mediated hydrolysis of urea to ammonia gas and subsequent breaking of ester linkages between lignin and hemicellulose.",
        "topicId": "u1-t20",
        "diff": 2,
        "subSection": "u1-s5"
      },
      {
        "q": "What is the ideal moisture content of green forage at the time of ensiling for optimal lactic acid fermentation?",
        "o": [
          "85 to 90% (10-15% Dry Matter)",
          "40 to 45% (55-60% Dry Matter)",
          "< 15% (Hay stage)",
          "65 to 70% (30-35% Dry Matter)"
        ],
        "a": 3,
        "e": "At 30-35% DM (65-70% moisture), lactic acid bacteria proliferate efficiently without excessive effluent leaching or clostridial butyric acid spoilage.",
        "topicId": "u1-t21",
        "diff": 2,
        "subSection": "u1-s5"
      },
      {
        "q": "Which species of bacteria is the primary desirable microorganism responsible for rapid acidification in high-quality silage?",
        "o": [
          "Lactobacillus plantarum",
          "Clostridium butyricum",
          "Escherichia coli",
          "Bacillus subtilis"
        ],
        "a": 0,
        "e": "Homofermentative lactic acid bacteria like Lactobacillus plantarum convert water-soluble carbohydrates rapidly into lactic acid, reducing pH to 3.8-4.2.",
        "topicId": "u1-t21",
        "diff": 2,
        "subSection": "u1-s5"
      },
      {
        "q": "A silage sample characterized as 'Very Good' on the Flieg's Score system must have a final pH in the range of:",
        "o": [
          "5.5 to 6.5",
          "3.8 to 4.2",
          "6.8 to 7.4",
          "2.0 to 2.5"
        ],
        "a": 1,
        "e": "Excellent silage achieves a stable pH of 3.8 to 4.2, with lactic acid comprising >65% of total organic acids and ammoniacal nitrogen <10% of total N.",
        "topicId": "u1-t21",
        "diff": 2,
        "subSection": "u1-s5"
      },
      {
        "q": "The safe upper limit of moisture in well-cured hay to prevent microbial respiration, spontaneous combustion, and molding during stack storage is:",
        "o": [
          "15 to 18%",
          "30 to 35%",
          "25 to 28%",
          "40 to 45%"
        ],
        "a": 0,
        "e": "Hay must be field-cured down to 15-18% moisture. Moisture exceeding 20-22% invites fungal growth, mycotoxin production, and internal heating.",
        "topicId": "u1-t22",
        "diff": 1,
        "subSection": "u1-s5"
      },
      {
        "q": "The toxic anti-nutritional glucoside present in young, drought-stressed sorghum (Jowar / Chari) plants under 50 days of growth is:",
        "o": [
          "Mimosine",
          "Gossypol",
          "Sinigrin",
          "Dhurrin (yielding Hydrocyanic Acid / HCN)"
        ],
        "a": 3,
        "e": "Dhurrin is a cyanogenic glycoside in immature sorghum; enzymatic hydrolysis by plant beta-glucosidase and hydroxynitrile lyase liberates toxic free HCN.",
        "topicId": "u1-t23",
        "diff": 1,
        "subSection": "u1-s5"
      },
      {
        "q": "What is the critical lethal concentration threshold of Hydrocyanic Acid (HCN) in fresh green fodder on a dry matter basis?",
        "o": [
          "> 200 ppm (mg/kg DM)",
          "> 20 ppm",
          "> 1000 ppm",
          "> 5 ppm"
        ],
        "a": 0,
        "e": "Forage containing >200 ppm HCN on dry matter basis is hazardous and potentially lethal to livestock through inhibition of cytochrome oxidase.",
        "topicId": "u1-t23",
        "diff": 2,
        "subSection": "u1-s5"
      },
      {
        "q": "The toxic non-protein amino acid present in Subabul (Leucaena leucocephala) leaves that causes alopecia and goitre in non-adapted ruminants is:",
        "o": [
          "Mimosine",
          "Canavanine",
          "Abrin",
          "Ricin"
        ],
        "a": 0,
        "e": "Mimosine is degraded in the rumen to 3,4-DHP, a potent goitrogen; ruminants lacking the ruminal bacterium Synergistes jonesii develop severe toxicity.",
        "topicId": "u1-t23",
        "diff": 2,
        "subSection": "u1-s5"
      },
      {
        "q": "Which chemical salt is universally added to raw cottonseed cake rations at a 1:1 weight ratio to neutralize the toxic effects of free gossypol?",
        "o": [
          "Sodium chloride (NaCl)",
          "Copper sulfate (CuSO4)",
          "Ferrous sulfate (FeSO4)",
          "Calcium carbonate (CaCO3)"
        ],
        "a": 2,
        "e": "Ferrous sulfate provides divalent iron ions (Fe2+) which bind the reactive formyl and hydroxyl groups of free gossypol, forming an insoluble, non-absorbable iron-gossypol complex.",
        "topicId": "u1-t23",
        "diff": 2,
        "subSection": "u1-s5"
      },
      {
        "q": "The primary anti-nutritional factor in raw soybeans that inhibits pancreatic enzymes and causes compensatory pancreatic hypertrophy in monogastric animals is:",
        "o": [
          "Gossypol",
          "Tannins",
          "Kunitz and Bowman-Birk Trypsin Inhibitors",
          "Oxalates"
        ],
        "a": 2,
        "e": "Trypsin inhibitors in raw soybeans inhibit trypsin and chymotrypsin; they are heat-labile and inactivated by proper toasting, roasting, or extrusion.",
        "topicId": "u1-t23",
        "diff": 2,
        "subSection": "u1-s5"
      },
      {
        "q": "Aflatoxin B1 is a potent hepatotoxic and carcinogenic mycotoxin produced in improperly stored oilseed cakes and grains by:",
        "o": [
          "Aspergillus flavus and Aspergillus parasiticus",
          "Fusarium moniliforme",
          "Penicillium roqueforti",
          "Claviceps purpurea"
        ],
        "a": 0,
        "e": "Aspergillus flavus synthesizes aflatoxins (B1, B2, G1, G2) at moisture levels >14% and temperatures >25°C; B1 is metabolized to M1 excreted in milk.",
        "topicId": "u1-t23",
        "diff": 1,
        "subSection": "u1-s5"
      },
      {
        "q": "Monensin and Lasalocid belong to which class of feed additives that selectively alter rumen microbial populations to increase propionate and depress methane?",
        "o": [
          "Direct-fed microbials",
          "Prebiotic oligosaccharides",
          "Carboxylic Polyether Ionophores",
          "Exogenous fibrolytic enzymes"
        ],
        "a": 2,
        "e": "Ionophores act as lipid-soluble cation antiporters that disrupt transmembrane ion gradients in Gram-positive bacteria, favoring propionate-producing Gram-negatives.",
        "topicId": "u1-t25",
        "diff": 2,
        "subSection": "u1-s5"
      },
      {
        "q": "Which analytical parameter in the Weende Proximate analysis is used specifically to detect adulteration of mineral mixtures or bran with sand and silica?",
        "o": [
          "Total Ash",
          "Crude Fibre",
          "Ether Extract",
          "Acid Insoluble Ash (AIA)"
        ],
        "a": 3,
        "e": "AIA represents the mineral residue insoluble in boiling dilute (3 N) hydrochloric acid, which consists predominantly of extraneous sand, dirt, and silica.",
        "topicId": "u1-t24",
        "diff": 2,
        "subSection": "u1-s5"
      },
      {
        "q": "The inclusion of exogenous microbial phytase enzyme in monogastric (poultry and swine) diets is primarily intended to:",
        "o": [
          "Degrade structural cellulose",
          "Inactivate dietary mycotoxins",
          "Hydrolyze phytate-bound phosphorus and reduce environmental phosphorus excretion",
          "Synthesize endogenous methionine"
        ],
        "a": 2,
        "e": "Monogastrics lack endogenous phytase; supplemental phytase hydrolyzes myo-inositol hexakisphosphate (phytate), liberating available phosphorus and reducing fecal excretion.",
        "topicId": "u1-t25",
        "diff": 1,
        "subSection": "u1-s5"
      },
      {
        "q": "The Weende (proximate) system of feed analysis was developed in 1864 at the Weende Experiment Station, Germany, by:",
        "o": [
          "Henneberg and Stohmann",
          "Kellner and Fingerling",
          "Van Soest and Wine",
          "Atwater and Rosa"
        ],
        "a": 0,
        "e": "Wilhelm Henneberg and Friedrich Stohmann devised the Weende scheme (dry matter, total ash, crude protein, ether extract, crude fibre and NFE by difference). It remains the basis of routine feed analysis.",
        "topicId": "u1-t01",
        "diff": 2,
        "subSection": "u1-s1"
      },
      {
        "q": "The 'isodynamic law' (nutrients can replace one another in proportion to their energy value) and the 'surface law' of heat production were proposed by:",
        "o": [
          "Max Rubner",
          "Max Kleiber",
          "Justus von Liebig",
          "Oskar Kellner"
        ],
        "a": 0,
        "e": "Rubner (Germany, late 19th century) showed that fat, carbohydrate and protein are interchangeable as fuels in proportion to their energy, and that heat production relates to body surface area. Kleiber later refined the size relationship to W^0.75.",
        "topicId": "u1-t01",
        "diff": 2,
        "subSection": "u1-s1"
      },
      {
        "q": "The detergent system of forage fibre analysis (NDF, ADF and ADL), which overcame the drawbacks of crude fibre, was developed by:",
        "o": [
          "Wilhelm Henneberg",
          "Peter J. Van Soest",
          "Johan Kjeldahl",
          "Max Rubner"
        ],
        "a": 1,
        "e": "Van Soest (USDA, 1960s) partitioned forage into neutral detergent fibre (cell wall), acid detergent fibre (cellulose + lignin) and acid detergent lignin. Crude fibre underestimates fibre because part of the lignin and hemicellulose dissolves into NFE.",
        "topicId": "u1-t01",
        "diff": 2,
        "subSection": "u1-s1"
      },
      {
        "q": "In livestock production, feed and fodder account for approximately what share of the total cost of production?",
        "o": [
          "10–20%",
          "25–35%",
          "60–70%",
          "85–95%"
        ],
        "a": 2,
        "e": "Feed is the single largest input — about 60–70% of the cost of producing milk, meat or eggs. Efficient, balanced feeding therefore decides the profitability of the enterprise.",
        "topicId": "u1-t02",
        "diff": 1,
        "subSection": "u1-s1"
      },
      {
        "q": "Which statement correctly contrasts the chemical composition of the animal body with that of plants?",
        "o": [
          "Cellulose and lignin are major structural components of the animal body",
          "Carbohydrate is less than 1% of the animal body, whereas carbohydrates form the bulk of plant dry matter",
          "Plants store surplus energy mainly as fat, whereas animals store it mainly as starch",
          "Plant dry matter always contains more protein than the animal body"
        ],
        "a": 1,
        "e": "Animals store energy as fat and only small amounts of glycogen (<1% of the body). In plants, cell-wall carbohydrates (cellulose, hemicellulose) and starch make up most of the dry matter, while the animal body is rich in protein and fat.",
        "topicId": "u1-t03",
        "diff": 2,
        "subSection": "u1-s1"
      },
      {
        "q": "In animal nutrition, a 'ration' is defined as:",
        "o": [
          "Any feed containing more than 18% crude fibre",
          "A concentrate mixture fed only to lactating animals",
          "The quantity of feed allowed to an animal during a 24-hour period",
          "The amount of feed consumed in a single meal"
        ],
        "a": 2,
        "e": "A ration is the total feed allowed to an animal in 24 hours. A balanced ration is one that supplies all nutrients in the correct amounts and proportions for that animal's requirements over those 24 hours.",
        "topicId": "u1-t04",
        "diff": 1,
        "subSection": "u1-s1"
      },
      {
        "q": "A feed contains 20% crude protein on a dry matter basis and has 90% dry matter. Its crude protein content on an as-fed (fresh) basis is:",
        "o": [
          "22.2%",
          "20%",
          "18%",
          "11%"
        ],
        "a": 2,
        "e": "As-fed value = DM-basis value × DM% ÷ 100 = 20 × 90 ÷ 100 = 18%. Going the other way, DM-basis = as-fed ÷ DM fraction. Feeding standards and analyses are compared on a dry matter basis.",
        "topicId": "u1-t04",
        "diff": 2,
        "subSection": "u1-s1"
      },
      {
        "q": "The iodine value (iodine number) of a fat or oil is a measure of its:",
        "o": [
          "Free fatty acid content (rancidity)",
          "Degree of unsaturation",
          "Average fatty-acid chain length",
          "Volatile fatty acid content"
        ],
        "a": 1,
        "e": "Iodine value = grams of iodine absorbed by 100 g of fat; the more double bonds, the higher the value. Saponification value indicates chain length, acid value indicates free fatty acids, and the Reichert–Meissl value indicates volatile fatty acids.",
        "topicId": "u1-t07",
        "diff": 2,
        "subSection": "u1-s1"
      },
      {
        "q": "An animal can survive the loss of nearly all its body fat and about half its body protein, but death usually follows the loss of approximately what percentage of its body water?",
        "o": [
          "5%",
          "20%",
          "50%",
          "70%"
        ],
        "a": 1,
        "e": "A loss of about 10% of body water causes serious disorders and about 20% causes death. This is why water is regarded as the most critical nutrient.",
        "topicId": "u1-t08",
        "diff": 2,
        "subSection": "u1-s1"
      },
      {
        "q": "Pica and osteophagia (bone-chewing) in grazing cattle are classical signs of a deficiency of:",
        "o": [
          "Phosphorus",
          "Magnesium",
          "Iodine",
          "Vitamin A"
        ],
        "a": 0,
        "e": "Phosphorus-deficient cattle on P-poor soils and forages develop depraved appetite (pica), chew bones (osteophagia), lose fertility and may develop osteomalacia. Bone chewing also predisposes to botulism.",
        "topicId": "u1-t09",
        "diff": 1,
        "subSection": "u1-s3"
      },
      {
        "q": "The most abundant mineral in the animal body, about 99% of which is present in bones and teeth, is:",
        "o": [
          "Phosphorus",
          "Calcium",
          "Sodium",
          "Potassium"
        ],
        "a": 1,
        "e": "Calcium makes up about 1.5–2% of body weight and roughly 99% of it is in the skeleton. About 80% of body phosphorus is also in bones and teeth.",
        "topicId": "u1-t09",
        "diff": 1,
        "subSection": "u1-s3"
      },
      {
        "q": "'Teart' scouring in cattle grazing pastures on soils rich in molybdenum is essentially a condition of:",
        "o": [
          "Induced copper deficiency",
          "Selenium toxicity",
          "Induced zinc deficiency",
          "Cobalt toxicity"
        ],
        "a": 0,
        "e": "In the rumen molybdenum combines with sulphur to form thiomolybdates that bind copper and make it unavailable. The result is diarrhoea, loss of hair pigment ('spectacle eye'), poor growth and infertility; copper supplementation corrects it.",
        "topicId": "u1-t10",
        "diff": 3,
        "subSection": "u1-s3"
      },
      {
        "q": "White muscle disease (nutritional muscular dystrophy) in calves and lambs results from a deficiency of:",
        "o": [
          "Copper and molybdenum",
          "Iron and copper",
          "Iodine and cobalt",
          "Selenium and/or vitamin E"
        ],
        "a": 3,
        "e": "Selenium (in glutathione peroxidase) and vitamin E protect muscle cell membranes from oxidative damage. Their deficiency causes pale, chalky-white degeneration of skeletal and cardiac muscle, stiffness and sudden death.",
        "topicId": "u1-t10",
        "diff": 2,
        "subSection": "u1-s3"
      },
      {
        "q": "Night blindness (nyctalopia) is the earliest clinical sign of a deficiency of:",
        "o": [
          "Vitamin D",
          "Vitamin K",
          "Riboflavin",
          "Vitamin A"
        ],
        "a": 3,
        "e": "Retinal (from vitamin A) is needed to regenerate the visual pigment rhodopsin for vision in dim light. Prolonged deficiency leads to xerophthalmia, keratinisation of epithelia and poor fertility.",
        "topicId": "u1-t11",
        "diff": 1,
        "subSection": "u1-s3"
      },
      {
        "q": "Chastek paralysis in foxes, mink and cats fed large amounts of raw fish is caused by:",
        "o": [
          "Biotin deficiency due to avidin in raw fish",
          "Thiamine deficiency due to the enzyme thiaminase in raw fish",
          "Vitamin E deficiency due to rancid fish oils",
          "Mercury poisoning from contaminated fish"
        ],
        "a": 1,
        "e": "Thiaminase in raw fish destroys thiamine, producing anorexia, ataxia, convulsions and paralysis. Cooking the fish inactivates the enzyme. (Avidin, which binds biotin, is found in raw egg white, not fish.)",
        "topicId": "u1-t12",
        "diff": 2,
        "subSection": "u1-s3"
      },
      {
        "q": "Which fodder crop is popularly called the 'Queen of Fodders' because of its high protein, calcium and palatability?",
        "o": [
          "Lucerne (Alfalfa)",
          "Maize",
          "Hybrid Napier",
          "Oats"
        ],
        "a": 0,
        "e": "Lucerne (Medicago sativa) is a perennial legume fodder with about 15–20% crude protein (DM basis), rich in calcium, carotene and highly palatable. It is widely fed green or as hay.",
        "topicId": "u1-t13",
        "diff": 1,
        "subSection": "u1-s5"
      },
      {
        "q": "According to the classical classification of concentrates, a feedstuff containing less than 20% crude protein is termed:",
        "o": [
          "An energy-rich (basal) concentrate",
          "A protein supplement",
          "A dry roughage",
          "A mineral supplement"
        ],
        "a": 0,
        "e": "Concentrates (<18% crude fibre, >60% TDN) are divided into energy concentrates (<20% CP — cereal grains, brans, molasses) and protein supplements (>20% CP — oilseed cakes, animal proteins).",
        "topicId": "u1-t13",
        "diff": 1,
        "subSection": "u1-s5"
      },
      {
        "q": "The heat increment (specific dynamic action) of feeding is highest when the absorbed nutrient is:",
        "o": [
          "Fat",
          "Protein",
          "Carbohydrate",
          "Water"
        ],
        "a": 1,
        "e": "Protein has the largest heat increment (roughly 30% of its ME) because of deamination and urea synthesis; carbohydrate is intermediate and fat lowest. In ruminants the heat of fermentation adds further to the heat increment.",
        "topicId": "u1-t14",
        "diff": 2,
        "subSection": "u1-s4"
      },
      {
        "q": "Digestible Crude Protein (DCP) of a feed is calculated as:",
        "o": [
          "Crude protein (%) − true protein (%)",
          "Nitrogen (%) × 6.25 × biological value ÷ 100",
          "Total digestible nutrients × 6.25",
          "Crude protein (%) × digestibility coefficient of crude protein ÷ 100"
        ],
        "a": 3,
        "e": "Example: a feed with 20% CP and a CP digestibility of 80% has DCP = 20 × 80 ÷ 100 = 16%. DCP is the protein unit used in Indian (ICAR) feeding standards along with TDN.",
        "topicId": "u1-t16",
        "diff": 2,
        "subSection": "u1-s2"
      },
      {
        "q": "The Calorie : Protein (C:P) ratio of a poultry ration is calculated as:",
        "o": [
          "Crude protein (%) ÷ ME (Mcal/kg)",
          "DCP ÷ (TDN − DCP)",
          "ME (kcal/kg) ÷ crude protein (%)",
          "Gross energy ÷ digestible energy"
        ],
        "a": 2,
        "e": "Example: a broiler starter with 3000 kcal ME/kg and 22% CP has a C:P ratio of 3000 ÷ 22 ≈ 136. Because birds eat to meet energy needs, protein must rise with energy to keep this ratio constant.",
        "topicId": "u1-t17",
        "diff": 2,
        "subSection": "u1-s4"
      },
      {
        "q": "In a Total Mixed Ration (TMR), roughages, concentrates, minerals and additives are:",
        "o": [
          "Fed separately at different times of the day",
          "Offered free-choice in separate troughs",
          "Given only as pellets without any roughage",
          "Chopped and blended together so that every mouthful has the same nutrient composition"
        ],
        "a": 3,
        "e": "TMR prevents selective eating, keeps rumen fermentation stable, allows precise balancing of the ration and suits high-yielding herds. It is prepared in a TMR (feed) mixer wagon.",
        "topicId": "u1-t18",
        "diff": 2,
        "subSection": "u1-s5"
      },
      {
        "q": "Urea–Molasses Mineral Block (UMMB) licks are fed to animals on straw-based diets mainly to supply:",
        "o": [
          "Bypass protein directly to the small intestine",
          "Protected fat for high milk yield",
          "Fermentable nitrogen, readily available energy and minerals to rumen microbes",
          "Extra fibre to prevent ruminal acidosis"
        ],
        "a": 2,
        "e": "Straw is poor in nitrogen, fermentable energy and minerals. Licking a UMMB slowly releases urea-N, molasses sugars and minerals, stimulating microbial growth, fibre digestion and straw intake.",
        "topicId": "u1-t18",
        "diff": 2,
        "subSection": "u1-s5"
      },
      {
        "q": "Pelleting of compound feeds is advantageous mainly because it:",
        "o": [
          "Increases the crude fibre content of the ration",
          "Destroys all anti-nutritional factors and mycotoxins",
          "Prevents selective feeding, reduces wastage and dustiness, and improves feed efficiency",
          "Makes lignin digestible"
        ],
        "a": 2,
        "e": "Pellets are dense, dust-free and uniform, so animals cannot pick out preferred ingredients. Steam conditioning also gelatinises part of the starch. Pelleting does not reliably destroy mycotoxins or make lignin digestible.",
        "topicId": "u1-t19",
        "diff": 2,
        "subSection": "u1-s5"
      },
      {
        "q": "Steam flaking of maize or sorghum grain improves the digestibility of its starch mainly by:",
        "o": [
          "Increasing the lignin content",
          "Converting starch into cellulose",
          "Removing the germ and oil",
          "Gelatinising the starch granules"
        ],
        "a": 3,
        "e": "Moist heat followed by rolling ruptures and gelatinises starch granules, making them far more accessible to microbial and pancreatic amylases. This raises ruminal and total-tract starch digestibility.",
        "topicId": "u1-t19",
        "diff": 3,
        "subSection": "u1-s5"
      },
      {
        "q": "The Beckmann process for improving the nutritive value of straw involves soaking the straw in:",
        "o": [
          "Dilute (about 1.5%) sodium hydroxide solution",
          "4% urea solution",
          "Dilute sulphuric acid",
          "A molasses–urea solution"
        ],
        "a": 0,
        "e": "Developed by Beckmann in Germany (1921), the process soaks straw in about 1.5% NaOH and then washes it. The alkali breaks lignin–hemicellulose ester bonds and raises digestibility, but soluble nutrients are lost in the wash water and the effluent pollutes.",
        "topicId": "u1-t20",
        "diff": 2,
        "subSection": "u1-s5"
      },
      {
        "q": "The A.I.V. method of silage making, developed by A.I. Virtanen in Finland, preserves forage by:",
        "o": [
          "Inoculating the forage with Clostridium to produce butyric acid",
          "Wilting the forage to below 30% moisture before sealing",
          "Adding urea and molasses to raise the pH",
          "Adding dilute mineral acids (HCl/H₂SO₄) to lower the pH rapidly to about 3.5–4.0"
        ],
        "a": 3,
        "e": "Virtanen (Nobel Prize in Chemistry, 1945) showed that rapid acidification with mineral acids stops plant and microbial proteolysis and preserves the forage. Modern practice uses formic acid instead of corrosive mineral acids.",
        "topicId": "u1-t21",
        "diff": 3,
        "subSection": "u1-s5"
      }
    ],
    "tf": [
      {
        "q": "On a fat-free empty body basis, the percentage of water in adult mammalian bodies remains nearly constant at approximately 73%.",
        "a": true,
        "e": "True. The water content of lean body tissue (fat-free body mass) across mammalian species is remarkably constant at 72-74%.",
        "topicId": "u1-t03",
        "diff": 1,
        "subSection": "u1-s1"
      },
      {
        "q": "Mammalian digestive secretions contain an endogenous cellulase enzyme capable of hydrolyzing beta-1,4-glycosidic linkages.",
        "a": false,
        "e": "False. Mammals cannot secrete endogenous cellulase; cellulose digestion is entirely dependent on symbiotic microbial fermentation.",
        "topicId": "u1-t05",
        "diff": 1,
        "subSection": "u1-s1"
      },
      {
        "q": "Propionic acid is the only major volatile fatty acid produced in the rumen that can be converted into glucose via gluconeogenesis.",
        "a": true,
        "e": "True. Propionate enters the citric acid cycle at succinyl-CoA and provides the sole net carbon source for hepatic gluconeogenesis among the major VFAs.",
        "topicId": "u1-t05",
        "diff": 1,
        "subSection": "u1-s1"
      },
      {
        "q": "Acetic acid produced in the rumen is the primary precursor for the de novo synthesis of fatty acids in the bovine mammary gland.",
        "a": true,
        "e": "True. Acetate provides acetyl-CoA units for de novo milk fat synthesis (C4:0 to C14:0 and part of C16:0) in the mammary epithelial cells.",
        "topicId": "u1-t05",
        "diff": 2,
        "subSection": "u1-s1"
      },
      {
        "q": "In the rumen, unsaturated dietary fatty acids undergo microbial biohydrogenation to become more saturated.",
        "a": true,
        "e": "True. Rumen microorganisms biohydrogenate dietary polyunsaturated fatty acids into saturated stearic acid (C18:0) to protect themselves from membrane toxicity.",
        "topicId": "u1-t07",
        "diff": 2,
        "subSection": "u1-s1"
      },
      {
        "q": "Lignin is a complex structural carbohydrate composed of repeating glucose and xylose monomers.",
        "a": false,
        "e": "False. Lignin is not a carbohydrate; it is an amorphous phenylpropanoid polymer of aromatic alcohols (coniferyl, sinapyl, p-coumaryl).",
        "topicId": "u1-t05",
        "diff": 2,
        "subSection": "u1-s1"
      },
      {
        "q": "Metabolic water production per gram of nutrient is highest for proteins compared to carbohydrates and fats.",
        "a": false,
        "e": "False. Fat produces the highest metabolic water (1.07 g/g fat), while protein produces the lowest (0.41 g/g protein) due to urea synthesis costs.",
        "topicId": "u1-t08",
        "diff": 1,
        "subSection": "u1-s1"
      },
      {
        "q": "Feeding a high-grain, low-fiber diet to a lactating cow decreases ruminal propionate and increases the milk fat test.",
        "a": false,
        "e": "False. High-grain diets increase propionate, decrease ruminal pH, promote trans-10, cis-12 CLA formation, and cause milk fat depression.",
        "topicId": "u1-t05",
        "diff": 2,
        "subSection": "u1-s1"
      },
      {
        "q": "Salivary secretion in ruminants is continuous and rich in sodium bicarbonate and phosphate buffers to neutralize rumen acids.",
        "a": true,
        "e": "True. Adult cattle secrete 100-150 liters of saliva daily containing copious bicarbonate and phosphate to maintain rumen pH between 6.2 and 6.8.",
        "topicId": "u1-t08",
        "diff": 1,
        "subSection": "u1-s1"
      },
      {
        "q": "Glycogen is structurally analogous to amylopectin but possesses more frequent alpha-1,6 branch points.",
        "a": true,
        "e": "True. Glycogen is branched every 8 to 12 glucose residues, whereas amylopectin branches every 24 to 30 residues.",
        "topicId": "u1-t05",
        "diff": 2,
        "subSection": "u1-s1"
      },
      {
        "q": "Arachidonic acid is a dietary essential fatty acid for domestic cats because cats have low delta-6-desaturase enzyme activity.",
        "a": true,
        "e": "True. Felines lack significant delta-6-desaturase activity and cannot convert linoleic acid to arachidonic acid, requiring preformed animal fat in their diet.",
        "topicId": "u1-t07",
        "diff": 2,
        "subSection": "u1-s1"
      },
      {
        "q": "The crude protein content of a feed is routinely determined by multiplying its total Kjeldahl nitrogen content by the factor 6.25.",
        "a": true,
        "e": "True. Because mixed proteins contain an average of 16% nitrogen, the conversion factor is 100 / 16 = 6.25.",
        "topicId": "u1-t06",
        "diff": 1,
        "subSection": "u1-s2"
      },
      {
        "q": "Urea is a true protein supplement suitable for feeding to newly hatched broiler chicks.",
        "a": false,
        "e": "False. Urea is non-protein nitrogen (NPN); poultry lack a functional microbial fermentation vat prior to absorption and cannot utilize urea.",
        "topicId": "u1-t06",
        "diff": 1,
        "subSection": "u1-s2"
      },
      {
        "q": "Formaldehyde treatment of oilseed cakes protects dietary protein from microbial breakdown in the rumen without impairing abomasal digestion.",
        "a": true,
        "e": "True. Formaldehyde creates methylene bridges at neutral rumen pH (6.5), which break down in the acidic pH (<3.0) of the abomasum, releasing free protein.",
        "topicId": "u1-t06",
        "diff": 2,
        "subSection": "u1-s2"
      },
      {
        "q": "Biological Value (BV) takes into account the digestibility of the dietary protein in its mathematical formula.",
        "a": false,
        "e": "False. BV measures retained N as a percentage of absorbed N ([Retained / Absorbed] x 100); Net Protein Utilization (NPU = BV x TD) accounts for digestibility.",
        "topicId": "u1-t16",
        "diff": 2,
        "subSection": "u1-s2"
      },
      {
        "q": "Microbial protein synthesized in the rumen has a well-balanced amino acid profile and a biological value of about 80%.",
        "a": true,
        "e": "True. Rumen microbes synthesize high-quality protein resembling animal tissue protein in amino acid balance.",
        "topicId": "u1-t06",
        "diff": 1,
        "subSection": "u1-s2"
      },
      {
        "q": "The Protein Efficiency Ratio (PER) method measures the nitrogen balance of adult animals in metabolic cages.",
        "a": false,
        "e": "False. PER is determined by measuring weight gain (g) per gram of protein consumed in growing young rats over a 28-day period.",
        "topicId": "u1-t16",
        "diff": 2,
        "subSection": "u1-s2"
      },
      {
        "q": "Maillard browning reactions enhance the biological availability of lysine in roasted feedstuffs.",
        "a": false,
        "e": "False. Maillard reactions bind the epsilon-amino group of lysine with reducing sugars to form indigestible complexes, reducing lysine bioavailability.",
        "topicId": "u1-t06",
        "diff": 2,
        "subSection": "u1-s2"
      },
      {
        "q": "Methionine and lysine are commonly synthesized by chemical and fermentation processes for commercial feed supplementation.",
        "a": true,
        "e": "True. Synthetic DL-methionine and L-lysine HCl are universally added to balance ideal amino acid profiles in poultry and swine diets.",
        "topicId": "u1-t06",
        "diff": 1,
        "subSection": "u1-s2"
      },
      {
        "q": "Taurine is an essential dietary amino acid for dogs because they cannot conjugate bile acids with glycine.",
        "a": false,
        "e": "False. Cats (not dogs) have an obligate dietary requirement for taurine; dogs can synthesize adequate taurine from methionine and cysteine.",
        "topicId": "u1-t06",
        "diff": 2,
        "subSection": "u1-s2"
      },
      {
        "q": "Feeding an inverted Ca:P ratio (excess phosphorus relative to calcium) can trigger nutritional secondary hyperparathyroidism.",
        "a": true,
        "e": "True. Excess phosphorus causes hypocalcemia, triggering continuous parathyroid hormone secretion and severe bone resorption.",
        "topicId": "u1-t09",
        "diff": 2,
        "subSection": "u1-s3"
      },
      {
        "q": "Vitamin D3 (cholecalciferol) and Vitamin D2 (ergocalciferol) are utilized with equal biological efficiency by poultry.",
        "a": false,
        "e": "False. Birds utilize Vitamin D2 only about 1/10th as efficiently as Vitamin D3; poultry feeds must always be supplemented with Vitamin D3.",
        "topicId": "u1-t11",
        "diff": 2,
        "subSection": "u1-s3"
      },
      {
        "q": "Grass tetany is characterized by elevated concentrations of serum magnesium above 3.0 mg/dL.",
        "a": false,
        "e": "False. Grass tetany is hypomagnesemic tetany where plasma Mg drops precipitously below 1.0 mg/dL (normal is 1.8-2.5 mg/dL).",
        "topicId": "u1-t09",
        "diff": 1,
        "subSection": "u1-s3"
      },
      {
        "q": "Cobalt is an essential trace mineral for ruminants solely because it is required by ruminal microbes for vitamin B12 synthesis.",
        "a": true,
        "e": "True. The only known physiological function of cobalt in animal tissues is as an integral part of the cyanocobalamin (Vitamin B12) molecule.",
        "topicId": "u1-t10",
        "diff": 1,
        "subSection": "u1-s3"
      },
      {
        "q": "Selenium and Vitamin E function synergistically in biological systems to protect cellular membranes from oxidative damage.",
        "a": true,
        "e": "True. Vitamin E acts as a chain-breaking antioxidant within lipid membranes, while selenium-dependent glutathione peroxidase destroys peroxides in the cytosol.",
        "topicId": "u1-t10",
        "diff": 1,
        "subSection": "u1-s3"
      },
      {
        "q": "Guinea pigs can synthesize their own Vitamin C and never require dietary supplementation of ascorbic acid.",
        "a": false,
        "e": "False. Guinea pigs lack the enzyme L-gulonolactone oxidase and develop fatal scurvy unless provided with dietary Vitamin C.",
        "topicId": "u1-t12",
        "diff": 1,
        "subSection": "u1-s3"
      },
      {
        "q": "Zinc deficiency in swine produces a dermatitis condition known as parakeratosis.",
        "a": true,
        "e": "True. Parakeratosis is characterized by hyperkeratinization and crusting of the skin of the legs, belly, and ears in zinc-deficient pigs.",
        "topicId": "u1-t10",
        "diff": 1,
        "subSection": "u1-s3"
      },
      {
        "q": "Thiamine deficiency in ruminants can be provoked by feeding high levels of readily fermentable carbohydrates or high-sulfur diets.",
        "a": true,
        "e": "True. Rapid grain engorgement proliferates bacterial thiaminase I producing polioencephalomalacia (cerebrocortical necrosis).",
        "topicId": "u1-t12",
        "diff": 2,
        "subSection": "u1-s3"
      },
      {
        "q": "Avidin, a glycoprotein found in raw egg whites, binds dietary biotin and prevents its intestinal absorption.",
        "a": true,
        "e": "True. Avidin forms an irreversible stoichiometric non-covalent complex with biotin, causing 'egg-white injury' (biotin deficiency) if fed raw.",
        "topicId": "u1-t12",
        "diff": 2,
        "subSection": "u1-s3"
      },
      {
        "q": "Copper deficiency in sheep causes steely or stringy wool due to failure of keratin disulfide cross-linking.",
        "a": true,
        "e": "True. Copper is required for thiol oxidase, which converts cysteine sulfhydryl groups into cystine disulfide bridges that create the wool crimp.",
        "topicId": "u1-t10",
        "diff": 2,
        "subSection": "u1-s3"
      },
      {
        "q": "The Gross Energy (heat of combustion) of carbohydrates, proteins, and fats averages approximately 4.15, 5.65, and 9.45 kcal/g, respectively.",
        "a": true,
        "e": "True. Fats have the highest gross energy because of their lower oxygen content and higher state of chemical reduction.",
        "topicId": "u1-t14",
        "diff": 1,
        "subSection": "u1-s4"
      },
      {
        "q": "Digestible Energy (DE) accounts for gaseous losses of energy as methane in ruminants.",
        "a": false,
        "e": "False. DE = Gross Energy - Fecal Energy only. Methane and urine energy losses are deducted when moving from DE to Metabolizable Energy (ME).",
        "topicId": "u1-t14",
        "diff": 1,
        "subSection": "u1-s4"
      },
      {
        "q": "Net Energy is the only energy evaluation measure that completely accounts for the Heat Increment of feeding.",
        "a": true,
        "e": "True. NE = ME - Heat Increment (HI); it represents the actual energy available for maintenance and tissue or milk production.",
        "topicId": "u1-t14",
        "diff": 1,
        "subSection": "u1-s4"
      },
      {
        "q": "The Respiratory Quotient (RQ) for the oxidation of pure protein is 1.00.",
        "a": false,
        "e": "False. The RQ of protein oxidation is approximately 0.81-0.82; an RQ of 1.00 corresponds strictly to carbohydrate oxidation.",
        "topicId": "u1-t15",
        "diff": 2,
        "subSection": "u1-s4"
      },
      {
        "q": "In indirect calorimetry, heat production can be calculated from measurements of O2 consumed and CO2 produced using Brouwer's equation.",
        "a": true,
        "e": "True. Brouwer's formula: Heat (kJ) = 16.18 O2 + 5.02 CO2 - 2.17 CH4 - 5.99 N (where gases are in liters and N in grams).",
        "topicId": "u1-t15",
        "diff": 2,
        "subSection": "u1-s4"
      },
      {
        "q": "Total Digestible Nutrients (TDN) overestimates the productive energy value of roughages relative to concentrates in ruminants.",
        "a": true,
        "e": "True. TDN does not deduct the substantial Heat Increment of fermentation, which is much higher for fibrous roughages than for grains.",
        "topicId": "u1-t14",
        "diff": 3,
        "subSection": "u1-s4"
      },
      {
        "q": "A wide nutritive ratio (e.g. 1 : 10) is recommended for fast-growing broiler chicks.",
        "a": false,
        "e": "False. Fast-growing animals require high-protein, narrow nutritive ratios (1:3 to 1:4); wide ratios (>1:8) are suitable only for idle adult maintenance.",
        "topicId": "u1-t17",
        "diff": 2,
        "subSection": "u1-s4"
      },
      {
        "q": "Straws and stovers are categorized as dry roughages containing more than 18% crude fiber.",
        "a": true,
        "e": "True. Crop residues like wheat straw, paddy straw, and maize stover contain 30-40% crude fiber and are classical dry roughages.",
        "topicId": "u1-t13",
        "diff": 1,
        "subSection": "u1-s5"
      },
      {
        "q": "Urea treatment of straw increases its crude protein equivalent and improves its voluntary dry matter intake in cattle.",
        "a": true,
        "e": "True. Urea ammoniation roughly doubles crude protein equivalent (from ~3.5% to 7-8%) and increases DMI by 15-25% by loosening the lignocellulose matrix.",
        "topicId": "u1-t20",
        "diff": 1,
        "subSection": "u1-s5"
      },
      {
        "q": "Good quality silage should contain high concentrations of butyric acid and ammoniacal nitrogen.",
        "a": false,
        "e": "False. High butyric acid (>0.5%) and high ammonia (>10-15% of total N) indicate clostridial spoilage; quality silage is dominated by lactic acid.",
        "topicId": "u1-t21",
        "diff": 2,
        "subSection": "u1-s5"
      },
      {
        "q": "The lethal action of Hydrocyanic Acid (HCN) stems from its inhibition of the mitochondrial enzyme cytochrome c oxidase.",
        "a": true,
        "e": "True. Cyanide binds the trivalent iron (Fe3+) in cytochrome oxidase, halting cellular electron transport and causing acute histotoxic anoxia.",
        "topicId": "u1-t23",
        "diff": 2,
        "subSection": "u1-s5"
      },
      {
        "q": "Free gossypol present in cottonseed cake is harmless to monogastric animals like pigs and poultry.",
        "a": false,
        "e": "False. Free gossypol is toxic to swine and poultry, causing cardiac irregularities, liver necrosis, and olive-green yolk discoloration in eggs.",
        "topicId": "u1-t23",
        "diff": 2,
        "subSection": "u1-s5"
      },
      {
        "q": "Ionophore feed additives like monensin act by selectively suppressing Gram-positive ruminal bacteria, shifting fermentation toward propionic acid.",
        "a": true,
        "e": "True. By inhibiting Gram-positive hydrogen and formate producers, monensin decreases methane emissions and boosts glucogenic propionate synthesis.",
        "topicId": "u1-t25",
        "diff": 2,
        "subSection": "u1-s5"
      },
      {
        "q": "Acid Insoluble Ash (AIA) determination is an official AOAC method used to detect contamination of feeds with sand and soil.",
        "a": true,
        "e": "True. The silica and quartz in soil/sand are insoluble in boiling hydrochloric acid, isolating extraneous mineral contamination.",
        "topicId": "u1-t24",
        "diff": 1,
        "subSection": "u1-s5"
      },
      {
        "q": "Haylage is forage wilted to 45-55% moisture and preserved by anaerobic fermentation in sealed silos.",
        "a": true,
        "e": "True. Haylage (medium-moisture silage) relies on anaerobic storage of wilted forage, avoiding field-curing losses while preventing clostridial wet spoilage.",
        "topicId": "u1-t21",
        "diff": 2,
        "subSection": "u1-s5"
      },
      {
        "q": "Water, carbohydrates, proteins, fats, minerals and vitamins are the six major classes of nutrients.",
        "a": true,
        "e": "True. These six classes supply energy, body-building material and regulators for all body functions.",
        "topicId": "u1-t02",
        "diff": 1,
        "subSection": "u1-s1"
      },
      {
        "q": "Cellulose, hemicellulose and lignin are important structural constituents of the animal body.",
        "a": false,
        "e": "False. These are plant cell-wall constituents. The animal body contains less than 1% carbohydrate (mainly glycogen) and no lignin.",
        "topicId": "u1-t03",
        "diff": 1,
        "subSection": "u1-s1"
      },
      {
        "q": "A balanced ration supplies all essential nutrients in the correct amounts and proportions to meet an animal's requirements for 24 hours.",
        "a": true,
        "e": "True. That is the standard definition of a balanced ration.",
        "topicId": "u1-t04",
        "diff": 1,
        "subSection": "u1-s1"
      },
      {
        "q": "Linoleic acid is a dietary essential fatty acid because animals cannot synthesise it.",
        "a": true,
        "e": "True. Animals lack the desaturases that insert double bonds beyond carbon 9, so linoleic (and α-linolenic) acid must come from the diet. Deficiency causes scaly dermatitis and poor growth.",
        "topicId": "u1-t07",
        "diff": 2,
        "subSection": "u1-s1"
      },
      {
        "q": "Animals deficient in sodium show a craving for salt and lick soil, walls and the sweat of other animals.",
        "a": true,
        "e": "True. Salt hunger (a form of pica) is a characteristic sign of sodium deficiency, along with reduced intake and poor growth or milk yield.",
        "topicId": "u1-t09",
        "diff": 1,
        "subSection": "u1-s3"
      },
      {
        "q": "Vitamin D deficiency causes rickets in young animals and osteomalacia in adults.",
        "a": true,
        "e": "True. Without vitamin D, calcium and phosphorus absorption and bone mineralisation fail — rickets in growing bones and osteomalacia in mature bones.",
        "topicId": "u1-t11",
        "diff": 1,
        "subSection": "u1-s3"
      },
      {
        "q": "Adult ruminants always need dietary B-complex vitamins because rumen microbes cannot synthesise them.",
        "a": false,
        "e": "False. Rumen microbes synthesise B-complex vitamins (and vitamin K) in adequate amounts for adult ruminants. Exceptions include young calves before the rumen develops, cobalt deficiency (vitamin B12) and thiamine destruction (CCN).",
        "topicId": "u1-t12",
        "diff": 2,
        "subSection": "u1-s3"
      },
      {
        "q": "Direct calorimetry estimates an animal's heat production from its oxygen consumption and carbon dioxide output.",
        "a": false,
        "e": "False. That is indirect calorimetry. Direct calorimetry measures the heat given off by the animal directly, in an insulated calorimeter chamber.",
        "topicId": "u1-t15",
        "diff": 2,
        "subSection": "u1-s4"
      },
      {
        "q": "Very fine grinding of the feeds given to dairy cows increases the milk fat percentage.",
        "a": false,
        "e": "False. Very fine particles reduce rumination and saliva (buffer) flow, lower rumen pH and shift fermentation from acetate to propionate, so milk fat percentage falls.",
        "topicId": "u1-t19",
        "diff": 2,
        "subSection": "u1-s5"
      },
      {
        "q": "In making legume hay, most nutrients are lost through shattering of the leaves during over-drying and handling.",
        "a": true,
        "e": "True. Leaves carry most of the protein, minerals and carotene of legumes, and they become brittle and shatter when over-dried or handled roughly.",
        "topicId": "u1-t22",
        "diff": 2,
        "subSection": "u1-s5"
      },
      {
        "q": "In nitrate poisoning of cattle, the blood becomes bright cherry-red.",
        "a": false,
        "e": "False. Nitrite converts haemoglobin to methaemoglobin, giving chocolate-brown blood. Bright cherry-red blood is characteristic of hydrocyanic acid (HCN) poisoning.",
        "topicId": "u1-t23",
        "diff": 2,
        "subSection": "u1-s5"
      },
      {
        "q": "Mannan-oligosaccharides (MOS) are probiotics made of live yeast cells.",
        "a": false,
        "e": "False. MOS are prebiotics — non-digestible oligosaccharides from yeast cell walls that bind pathogens and favour beneficial gut bacteria. Probiotics are live microbes such as Lactobacillus or Saccharomyces cerevisiae.",
        "topicId": "u1-t25",
        "diff": 2,
        "subSection": "u1-s5"
      }
    ],
    "fib": [
      {
        "q": "The French scientist regarded as the Father of Nutrition who proved that respiration is a combustion process is ____.",
        "a": [
          "antoine lavoisier",
          "lavoisier"
        ],
        "a_display": "Antoine Lavoisier",
        "e": "Antoine Lavoisier laid the quantitative foundation of animal bioenergetics with his ice calorimeter experiments.",
        "topicId": "u1-t01",
        "diff": 1,
        "subSection": "u1-s1"
      },
      {
        "q": "The primary volatile fatty acid that serves as the major glucogenic precursor in the ruminant liver is ____.",
        "a": [
          "propionate",
          "propionic acid"
        ],
        "a_display": "Propionate",
        "e": "Propionate enters the TCA cycle via succinyl-CoA and is converted to glucose via phosphoenolpyruvate carboxykinase.",
        "topicId": "u1-t05",
        "diff": 1,
        "subSection": "u1-s1"
      },
      {
        "q": "The ruminal volatile fatty acid that provides the primary carbon source for de novo milk fat synthesis in dairy cows is ____.",
        "a": [
          "acetate",
          "acetic acid"
        ],
        "a_display": "Acetate",
        "e": "Acetate is activated to acetyl-CoA and supplies malonyl-CoA for fatty acid synthesis in the bovine mammary gland.",
        "topicId": "u1-t05",
        "diff": 1,
        "subSection": "u1-s1"
      },
      {
        "q": "The specific isomer of conjugated linoleic acid responsible for inducing milk fat depression in dairy cows is ____.",
        "a": [
          "trans-10, cis-12 cla",
          "trans-10 cis-12 cla",
          "trans 10 cis 12 cla"
        ],
        "a_display": "trans-10, cis-12 CLA",
        "e": "trans-10, cis-12 CLA specifically suppresses mRNA expression of SREBP-1c and mammary lipogenic enzymes.",
        "topicId": "u1-t07",
        "diff": 3,
        "subSection": "u1-s1"
      },
      {
        "q": "The complete oxidation of 100 grams of dietary fat yields approximately ____ grams of metabolic water.",
        "a": [
          "107",
          "107.1",
          "108"
        ],
        "a_display": "107.1",
        "e": "Because of its high hydrogen content, fat produces 107.1 g of water per 100 g oxidized.",
        "topicId": "u1-t08",
        "diff": 2,
        "subSection": "u1-s1"
      },
      {
        "q": "The main storage polysaccharide found in mammalian liver and muscle is ____.",
        "a": [
          "glycogen"
        ],
        "a_display": "Glycogen",
        "e": "Glycogen serves as the primary intracellular carbohydrate reserve in animal tissues.",
        "topicId": "u1-t05",
        "diff": 1,
        "subSection": "u1-s1"
      },
      {
        "q": "The structural complex phenolic polymer that binds to hemicellulose and makes plant cell walls indigestible is ____.",
        "a": [
          "lignin"
        ],
        "a_display": "Lignin",
        "e": "Lignin forms cross-linking diferulate esters with hemicellulose, posing the main barrier to microbial forage degradation.",
        "topicId": "u1-t05",
        "diff": 1,
        "subSection": "u1-s1"
      },
      {
        "q": "The abomasal milk-clotting enzyme secreted by neonatal calves that cleaves kappa-casein is ____.",
        "a": [
          "chymosin",
          "rennin"
        ],
        "a_display": "Chymosin (Rennin)",
        "e": "Chymosin destabilizes the casein micelle to form an insoluble clot, ensuring efficient gastric digestion in calves.",
        "topicId": "u1-t06",
        "diff": 2,
        "subSection": "u1-s1"
      },
      {
        "q": "In the detergent system of feed analysis, NDF stands for ____.",
        "a": [
          "neutral detergent fibre",
          "neutral detergent fiber"
        ],
        "a_display": "Neutral Detergent Fibre",
        "e": "NDF recovers total plant cell wall components (cellulose, hemicellulose, and lignin).",
        "topicId": "u1-t05",
        "diff": 1,
        "subSection": "u1-s1"
      },
      {
        "q": "The normal water content of adult fat-free empty body tissue in mammals is approximately ____ percent.",
        "a": [
          "73",
          "72-74",
          "72 to 74",
          "74"
        ],
        "a_display": "73%",
        "e": "On a fat-free basis, adult mammalian body composition is remarkably stable at roughly 73% water.",
        "topicId": "u1-t03",
        "diff": 2,
        "subSection": "u1-s1"
      },
      {
        "q": "The ruminal VFA that serves as the most potent chemical stimulant for the growth of ruminal papillae in young calves is ____.",
        "a": [
          "butyrate",
          "butyric acid"
        ],
        "a_display": "Butyrate",
        "e": "Butyrate oxidation by the ruminal mucosa stimulates mitosis and vascularization of the ruminal papillae.",
        "topicId": "u1-t05",
        "diff": 2,
        "subSection": "u1-s1"
      },
      {
        "q": "The standard factor used to convert Kjeldahl percent Nitrogen into Crude Protein for general feeds is ____.",
        "a": [
          "6.25"
        ],
        "a_display": "6.25",
        "e": "Because typical mixed plant and animal proteins contain 16% nitrogen, 100 / 16 = 6.25.",
        "topicId": "u1-t06",
        "diff": 1,
        "subSection": "u1-s2"
      },
      {
        "q": "The first-limiting amino acid in maize-soybean meal based commercial poultry diets is ____.",
        "a": [
          "methionine",
          "dl-methionine"
        ],
        "a_display": "Methionine",
        "e": "Soybean meal is naturally deficient in sulfur amino acids, making methionine first limiting.",
        "topicId": "u1-t06",
        "diff": 1,
        "subSection": "u1-s2"
      },
      {
        "q": "The first-limiting amino acid in cereal grain-based diets for growing pigs is ____.",
        "a": [
          "lysine",
          "l-lysine"
        ],
        "a_display": "Lysine",
        "e": "Cereal grains (maize, sorghum, barley) are low in lysine, making it the first-limiting amino acid for swine.",
        "topicId": "u1-t06",
        "diff": 1,
        "subSection": "u1-s2"
      },
      {
        "q": "The crude protein equivalent of feed-grade urea containing 46% nitrogen is ____ percent.",
        "a": [
          "287.5",
          "287.5%"
        ],
        "a_display": "287.5%",
        "e": "46% N multiplied by 6.25 equals 287.5% crude protein equivalent.",
        "topicId": "u1-t16",
        "diff": 1,
        "subSection": "u1-s2"
      },
      {
        "q": "The non-protein sulfonic amino acid that is strictly essential in the diet of domestic cats is ____.",
        "a": [
          "taurine"
        ],
        "a_display": "Taurine",
        "e": "Cats cannot synthesize sufficient taurine and suffer from cardiomyopathy and retinal degeneration if it is omitted.",
        "topicId": "u1-t06",
        "diff": 1,
        "subSection": "u1-s2"
      },
      {
        "q": "The percentage of absorbed nitrogen that is retained in the animal body is defined as the ____ of the protein.",
        "a": [
          "biological value",
          "bv"
        ],
        "a_display": "Biological Value (BV)",
        "e": "Biological Value = [N retained / N absorbed] x 100 according to Thomas-Mitchell balance methods.",
        "topicId": "u1-t16",
        "diff": 1,
        "subSection": "u1-s2"
      },
      {
        "q": "In ruminants, dietary true protein that escapes ruminal degradation to reach the abomasum is abbreviated as ____.",
        "a": [
          "rup",
          "bypass protein"
        ],
        "a_display": "RUP (Rumen Undegradable Protein)",
        "e": "RUP represents undegraded feed protein escaping rumen microbial proteolysis.",
        "topicId": "u1-t06",
        "diff": 1,
        "subSection": "u1-s2"
      },
      {
        "q": "To protect oilseed meal protein from ruminal breakdown, formaldehyde is applied at the rate of ____ grams per 100 grams of crude protein.",
        "a": [
          "1.0 to 1.2",
          "1.0-1.2",
          "1-1.2",
          "1",
          "1.2"
        ],
        "a_display": "1.0 to 1.2 g",
        "e": "Application of 1.0 to 1.2 g formaldehyde per 100 g CP yields optimal bypass protection without reducing intestinal digestibility.",
        "topicId": "u1-t06",
        "diff": 2,
        "subSection": "u1-s2"
      },
      {
        "q": "The optimal Nitrogen-to-Sulfur ratio recommended in ruminant rations containing urea is ____ to 1.",
        "a": [
          "10",
          "10:1"
        ],
        "a_display": "10 : 1",
        "e": "An N:S ratio of 10:1 provides adequate sulfur for ruminal synthesis of methionine and cysteine.",
        "topicId": "u1-t06",
        "diff": 2,
        "subSection": "u1-s2"
      },
      {
        "q": "Nutritional secondary hyperparathyroidism in horses caused by excessive dietary phosphorus is commonly termed ____ disease.",
        "a": [
          "bran",
          "bran disease",
          "big head",
          "big head disease"
        ],
        "a_display": "Bran Disease (Big Head)",
        "e": "High-phosphorus diets (such as wheat bran) induce chronic parathyroid hormone secretion and osteodystrophia fibrosa.",
        "topicId": "u1-t09",
        "diff": 2,
        "subSection": "u1-s3"
      },
      {
        "q": "The active hormonal form of Vitamin D produced by 1-alpha-hydroxylase in the kidney is ____.",
        "a": [
          "1,25-dihydroxycholecalciferol",
          "calcitriol",
          "1,25-(oh)2-d3"
        ],
        "a_display": "1,25-dihydroxycholecalciferol (Calcitriol)",
        "e": "1,25-(OH)2-D3 stimulates intestinal synthesis of calbindin, driving active calcium absorption.",
        "topicId": "u1-t11",
        "diff": 2,
        "subSection": "u1-s3"
      },
      {
        "q": "The trace mineral that forms an integral part of the cytosolic antioxidant enzyme glutathione peroxidase is ____.",
        "a": [
          "selenium",
          "se"
        ],
        "a_display": "Selenium",
        "e": "Glutathione peroxidase incorporates selenocysteine to scavenge harmful hydrogen and lipid peroxides.",
        "topicId": "u1-t10",
        "diff": 1,
        "subSection": "u1-s3"
      },
      {
        "q": "Neonatal piglets are routinely administered an intramuscular injection of 150-200 mg of iron in the form of iron ____ at 3 days of age.",
        "a": [
          "dextran",
          "iron dextran"
        ],
        "a_display": "Iron Dextran",
        "e": "Injectable iron dextran prevents microcytic hypochromic nutritional anemia (thumps) in rapidly growing piglets.",
        "topicId": "u1-t10",
        "diff": 1,
        "subSection": "u1-s3"
      },
      {
        "q": "The trace element required by ruminal microorganisms for the synthesis of Vitamin B12 is ____.",
        "a": [
          "cobalt",
          "co"
        ],
        "a_display": "Cobalt",
        "e": "Cobalt is the central coordinating metal ion in the corrin ring of cobalamin.",
        "topicId": "u1-t10",
        "diff": 1,
        "subSection": "u1-s3"
      },
      {
        "q": "The characteristic skin disorder caused by zinc deficiency in swine is called ____.",
        "a": [
          "parakeratosis"
        ],
        "a_display": "Parakeratosis",
        "e": "Zinc deficiency impairs epidermal cell maturation, resulting in hard crusty lesions over the skin.",
        "topicId": "u1-t10",
        "diff": 1,
        "subSection": "u1-s3"
      },
      {
        "q": "Curled toe paralysis in young growing poultry chicks is caused by a deficiency of Vitamin ____.",
        "a": [
          "b2",
          "riboflavin",
          "vitamin b2"
        ],
        "a_display": "Vitamin B2 (Riboflavin)",
        "e": "Riboflavin deficiency produces sciatic nerve sheath degeneration leading to curled-toe paralysis.",
        "topicId": "u1-t12",
        "diff": 1,
        "subSection": "u1-s3"
      },
      {
        "q": "The hemorrhagic condition known as Sweet Clover Poisoning is caused by the anti-vitamin substance ____ present in spoiled Melilotus hay.",
        "a": [
          "dicoumarol",
          "dicumarol"
        ],
        "a_display": "Dicoumarol",
        "e": "Dicoumarol acts as a competitive antagonist of Vitamin K, preventing prothrombin synthesis.",
        "topicId": "u1-t11",
        "diff": 2,
        "subSection": "u1-s3"
      },
      {
        "q": "Perosis or slipped tendon in growing broiler chicks is primarily caused by a deficiency of the trace mineral ____.",
        "a": [
          "manganese",
          "mn"
        ],
        "a_display": "Manganese",
        "e": "Manganese is essential for chondroitin sulfate synthesis in the epiphyseal growth plates.",
        "topicId": "u1-t10",
        "diff": 2,
        "subSection": "u1-s3"
      },
      {
        "q": "Cerebrocortical necrosis (CCN) in ruminants is caused by an induced deficiency of Vitamin ____.",
        "a": [
          "b1",
          "thiamine",
          "vitamin b1"
        ],
        "a_display": "Vitamin B1 (Thiamine)",
        "e": "Bacterial thiaminases destroy thiamine, starving brain cells of ATP and causing cerebral cortical necrosis.",
        "topicId": "u1-t12",
        "diff": 2,
        "subSection": "u1-s3"
      },
      {
        "q": "In the formula for Total Digestible Nutrients, Digestible Ether Extract is multiplied by the factor ____.",
        "a": [
          "2.25"
        ],
        "a_display": "2.25",
        "e": "The energy value of fat is 2.25 times that of carbohydrates (9.45 / 4.15 kcal/g).",
        "topicId": "u1-t14",
        "diff": 1,
        "subSection": "u1-s4"
      },
      {
        "q": "Metabolizable Energy equals Digestible Energy minus energy lost in urine and ____.",
        "a": [
          "methane",
          "combustible gases",
          "gaseous products",
          "gas"
        ],
        "a_display": "Methane (Gaseous Energy)",
        "e": "In ruminants, enteric methane accounts for 6-10% of gross energy intake.",
        "topicId": "u1-t14",
        "diff": 1,
        "subSection": "u1-s4"
      },
      {
        "q": "Net Energy is equal to Metabolizable Energy minus ____.",
        "a": [
          "heat increment",
          "hi"
        ],
        "a_display": "Heat Increment",
        "e": "NE = ME - Heat Increment (energy dissipated as heat during digestion and nutrient metabolism).",
        "topicId": "u1-t14",
        "diff": 1,
        "subSection": "u1-s4"
      },
      {
        "q": "The Respiratory Quotient (RQ) during the complete metabolic oxidation of carbohydrates is exactly ____.",
        "a": [
          "1",
          "1.0",
          "1.00"
        ],
        "a_display": "1.00",
        "e": "Combustion of glucose (C6H12O6 + 6 O2 -> 6 CO2 + 6 H2O) yields equal volumes of CO2 produced and O2 consumed.",
        "topicId": "u1-t15",
        "diff": 1,
        "subSection": "u1-s4"
      },
      {
        "q": "The German nutrition scientist who formulated the Starch Equivalent system of net energy evaluation was Oskar ____.",
        "a": [
          "kellner"
        ],
        "a_display": "Kellner",
        "e": "Oskar Kellner defined 1 kg Starch Equivalent as producing 248 g of body fat in adult bullocks.",
        "topicId": "u1-t14",
        "diff": 2,
        "subSection": "u1-s4"
      },
      {
        "q": "The ratio of non-protein digestible energy nutrients to digestible crude protein is termed the ____ Ratio.",
        "a": [
          "nutritive",
          "nutritive ratio",
          "nr"
        ],
        "a_display": "Nutritive Ratio",
        "e": "Nutritive Ratio = (TDN - DCP) / DCP.",
        "topicId": "u1-t17",
        "diff": 1,
        "subSection": "u1-s4"
      },
      {
        "q": "The instrument utilized to measure the gross energy or heat of combustion of feed samples is the oxygen ____ calorimeter.",
        "a": [
          "bomb",
          "bomb calorimeter"
        ],
        "a_display": "Bomb Calorimeter",
        "e": "An adiabatic oxygen bomb calorimeter burns samples under 25-30 atm oxygen pressure.",
        "topicId": "u1-t14",
        "diff": 1,
        "subSection": "u1-s4"
      },
      {
        "q": "According to feed classification rules, roughages must contain more than ____ percent crude fiber on a dry matter basis.",
        "a": [
          "18",
          "18%"
        ],
        "a_display": "18%",
        "e": "Feeds with >18% crude fiber and <60% TDN are designated as roughages.",
        "topicId": "u1-t13",
        "diff": 1,
        "subSection": "u1-s5"
      },
      {
        "q": "In the standard urea-treatment procedure for 100 kg dry straw, ____ kg of fertilizer-grade urea is dissolved in 40 liters of water.",
        "a": [
          "4",
          "4 kg"
        ],
        "a_display": "4 kg",
        "e": "A 4% urea application rate (4 kg urea / 100 kg straw) provides optimal ammoniation and CP elevation.",
        "topicId": "u1-t20",
        "diff": 1,
        "subSection": "u1-s5"
      },
      {
        "q": "The primary desirable organic acid produced during anaerobic fermentation in top-grade silage is ____ acid.",
        "a": [
          "lactic",
          "lactic acid"
        ],
        "a_display": "Lactic Acid",
        "e": "Lactic acid produced by homofermentative lactobacilli rapidly drives pH down to 3.8-4.2.",
        "topicId": "u1-t21",
        "diff": 1,
        "subSection": "u1-s5"
      },
      {
        "q": "To prevent mold growth and spontaneous combustion, hay should be dried to a moisture content below ____ percent before storage.",
        "a": [
          "15",
          "18",
          "15-18",
          "15 to 18"
        ],
        "a_display": "15-18%",
        "e": "Hay with <15-18% moisture remains safe from microbial heating and spoilage.",
        "topicId": "u1-t22",
        "diff": 1,
        "subSection": "u1-s5"
      },
      {
        "q": "The cyanogenic glycoside found in immature sorghum which releases lethal hydrocyanic acid is ____.",
        "a": [
          "dhurrin"
        ],
        "a_display": "Dhurrin",
        "e": "Dhurrin is enzymatically broken down to free prussic acid (HCN) upon mastication or cell damage.",
        "topicId": "u1-t23",
        "diff": 2,
        "subSection": "u1-s5"
      },
      {
        "q": "The toxic non-protein amino acid present in the forage legume Subabul (Leucaena leucocephala) is ____.",
        "a": [
          "mimosine"
        ],
        "a_display": "Mimosine",
        "e": "Mimosine causes hair loss, excessive salivation, and thyroid enlargement unless degraded by Synergistes jonesii.",
        "topicId": "u1-t23",
        "diff": 1,
        "subSection": "u1-s5"
      },
      {
        "q": "The toxic polyphenolic yellow pigment found in raw cottonseed cake is ____.",
        "a": [
          "gossypol",
          "free gossypol"
        ],
        "a_display": "Gossypol",
        "e": "Gossypol binds the epsilon-amino group of lysine and induces cardiac toxicity in non-ruminants.",
        "topicId": "u1-t23",
        "diff": 1,
        "subSection": "u1-s5"
      },
      {
        "q": "Monensin is a widely utilized feed additive belonging to the class of polyether ____.",
        "a": [
          "ionophores",
          "ionophore"
        ],
        "a_display": "Ionophores",
        "e": "Ionophores alter microbial cell membrane permeability, favoring propionate production and depressing bloat and coccidiosis.",
        "topicId": "u1-t25",
        "diff": 2,
        "subSection": "u1-s5"
      },
      {
        "q": "The 'Law of the Minimum', which states that growth is limited by the nutrient in shortest supply, is associated with the German chemist Justus von ____.",
        "a": [
          "liebig",
          "von liebig"
        ],
        "a_display": "Liebig",
        "e": "Liebig's Law of the Minimum is often pictured as a barrel whose water level is set by its shortest stave — the most deficient nutrient limits production.",
        "topicId": "u1-t01",
        "diff": 1,
        "subSection": "u1-s1"
      },
      {
        "q": "Concentrates are feeds containing less than 18% crude fibre and more than ____ percent TDN.",
        "a": [
          "60",
          "sixty"
        ],
        "a_display": "60",
        "e": "Concentrates: <18% CF and >60% TDN. Roughages are the reverse: >18% CF and <60% TDN.",
        "topicId": "u1-t04",
        "diff": 1,
        "subSection": "u1-s1"
      },
      {
        "q": "The protein of whole hen's ____ is used as the reference protein with the highest biological value.",
        "a": [
          "egg",
          "eggs"
        ],
        "a_display": "Egg",
        "e": "Whole-egg protein has a biological value close to 100 and is the reference against which the quality of other proteins is judged.",
        "topicId": "u1-t16",
        "diff": 1,
        "subSection": "u1-s2"
      },
      {
        "q": "The BIS specification for mineral mixture for supplementing cattle feed is IS ____.",
        "a": [
          "1664",
          "is 1664",
          "is1664"
        ],
        "a_display": "1664",
        "e": "IS 1664 specifies mineral mixture for cattle (with and without salt). IS 2052 covers compounded cattle feed and IS 1374 poultry feeds.",
        "topicId": "u1-t18",
        "diff": 2,
        "subSection": "u1-s5"
      },
      {
        "q": "The machine used to cut green and dry fodder into small pieces to reduce wastage and selective feeding is the ____ cutter.",
        "a": [
          "chaff"
        ],
        "a_display": "Chaff",
        "e": "Chaffing fodder into 2–5 cm pieces reduces wastage, prevents animals leaving the coarse stems, and makes it easy to mix fodder with concentrates.",
        "topicId": "u1-t19",
        "diff": 1,
        "subSection": "u1-s5"
      },
      {
        "q": "White-rot fungi such as ____ species (oyster mushroom) are used for the biological treatment of straw because they degrade lignin.",
        "a": [
          "pleurotus",
          "pleurotus sajor-caju",
          "pleurotus ostreatus"
        ],
        "a_display": "Pleurotus",
        "e": "White-rot fungi selectively break down lignin, increasing the digestibility of the cellulose in straw. Spent mushroom substrate can then be fed to ruminants.",
        "topicId": "u1-t20",
        "diff": 2,
        "subSection": "u1-s5"
      },
      {
        "q": "____ is added to legume forage at ensiling to supply fermentable sugar for the lactic acid bacteria.",
        "a": [
          "molasses",
          "cane molasses"
        ],
        "a_display": "Molasses",
        "e": "Legumes are low in water-soluble carbohydrate and high in buffering capacity, so they ferment poorly. Adding about 3–5% molasses provides sugar for rapid lactic acid production.",
        "topicId": "u1-t21",
        "diff": 1,
        "subSection": "u1-s5"
      },
      {
        "q": "For the best quality, legume hay should be harvested at the early ____ stage.",
        "a": [
          "bloom",
          "flowering",
          "flower",
          "early bloom",
          "early flowering"
        ],
        "a_display": "Bloom (early flowering)",
        "e": "At early bloom, yield and nutrient content are best balanced. Later cutting gives more yield but lower protein and digestibility because stems become lignified.",
        "topicId": "u1-t22",
        "diff": 2,
        "subSection": "u1-s5"
      },
      {
        "q": "The goitrogenic compounds present in mustard and rapeseed cakes are called ____.",
        "a": [
          "glucosinolates",
          "glucosinolate",
          "thioglucosides"
        ],
        "a_display": "Glucosinolates",
        "e": "Glucosinolates are hydrolysed to goitrogens (thiocyanates, goitrin) that interfere with thyroid iodine uptake, causing goitre and depressed growth, especially in pigs and poultry.",
        "topicId": "u1-t23",
        "diff": 2,
        "subSection": "u1-s5"
      },
      {
        "q": "Urea added as an adulterant in feed is detected with p-dimethylaminobenzaldehyde (DMAB), which gives a ____ colour.",
        "a": [
          "yellow",
          "lemon yellow"
        ],
        "a_display": "Yellow",
        "e": "Urea is added to raise the apparent crude protein of cakes. DMAB reacts with urea to give a yellow colour.",
        "topicId": "u1-t24",
        "diff": 2,
        "subSection": "u1-s5"
      },
      {
        "q": "Sawdust or rice husk mixed into brans is detected by the ____ test, in which lignin stains pink-red.",
        "a": [
          "phloroglucinol",
          "phloroglucinol-hcl",
          "phloroglucinol hcl"
        ],
        "a_display": "Phloroglucinol",
        "e": "Phloroglucinol in acid reacts with lignin to give a pink-red colour, revealing lignified adulterants such as sawdust and husk in bran and de-oiled rice bran.",
        "topicId": "u1-t24",
        "diff": 2,
        "subSection": "u1-s5"
      },
      {
        "q": "The live yeast most widely used as a probiotic in ruminant rations is Saccharomyces ____.",
        "a": [
          "cerevisiae"
        ],
        "a_display": "cerevisiae",
        "e": "Saccharomyces cerevisiae scavenges oxygen in the rumen, stabilises pH and stimulates fibre-digesting and lactate-using bacteria.",
        "topicId": "u1-t25",
        "diff": 1,
        "subSection": "u1-s5"
      }
    ]
  },
  "unit-2": {
    "mcq": [
      {
        "q": "What is the standard duration of the preliminary (adaptation) period recommended in a conventional digestion trial with adult cattle?",
        "o": [
          "2 to 3 days",
          "28 to 35 days",
          "10 to 14 days",
          "1 to 2 days"
        ],
        "a": 2,
        "e": "A preliminary adaptation period of 10-14 days is essential in ruminants to clear previous gut contents and adapt rumen microbes to the experimental diet.",
        "topicId": "u2-t04",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "What is the standard duration of the collection period in a standard in vivo digestion trial in ruminants?",
        "o": [
          "1 to 2 days",
          "7 to 10 days",
          "21 to 28 days",
          "30 to 45 days"
        ],
        "a": 1,
        "e": "A collection period of 7-10 days minimizes day-to-day defecation fluctuations and provides statistically reliable mean daily fecal excretion data.",
        "topicId": "u2-t04",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "Apparent digestibility of a nutrient is mathematically defined as:",
        "o": [
          "[(Nutrient intake - Fecal nutrient output) / Nutrient intake] x 100",
          "[(Nutrient intake - Urinary nutrient output) / Nutrient intake] x 100",
          "[(Absorbed nutrient - Retained nutrient) / Absorbed nutrient] x 100",
          "[(Fecal nutrient output / Nutrient intake)] x 100"
        ],
        "a": 0,
        "e": "Apparent digestibility measures the disappearance of a nutrient along the tract without correcting for metabolic fecal excretions of endogenous origin.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "Why is apparent digestibility of crude protein always lower than its true digestibility?",
        "o": [
          "Protein is volatile and lost as ammonia gas during drying",
          "Urine contaminates feces in collection crates",
          "Microbial proteases destroy amino acids",
          "Feces contain endogenous metabolic fecal nitrogen (MFN) from digestive secretions and sloughed epithelial cells"
        ],
        "a": 3,
        "e": "Metabolic Fecal Nitrogen (MFN)—consisting of abraded enterocytes, digestive enzymes, and unabsorbed microbial residue—inflates fecal N, lowering apparent digestibility.",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "In an indirect (difference) digestion trial to determine the digestibility of a concentrate in cattle, the test concentrate must be fed alongside:",
        "o": [
          "A basal roughage of previously determined known digestibility",
          "A nitrogen-free synthetic purified diet",
          "Pure wheat bran ad libitum",
          "Equal parts of urea and molasses"
        ],
        "a": 0,
        "e": "Concentrates cannot be fed alone to ruminants without causing ruminal acidosis; they are fed with a basal roughage whose digestibility was measured in Period 1.",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "Which of the following substances is classified as an ideal internal indicator (marker) for digestion trials?",
        "o": [
          "Lignin",
          "Chromic oxide (Cr2O3)",
          "Titanium dioxide",
          "Ferric oxide"
        ],
        "a": 0,
        "e": "Lignin and Acid Insoluble Ash (AIA) are natural indigestible chemical constituents of plant cell walls, serving as internal markers.",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "Which chemical compound is the most universally utilized external indicator in ruminant digestibility and grazing intake studies?",
        "o": [
          "Sodium chloride",
          "Barium sulfate",
          "Chromic oxide (Cr2O3)",
          "Cobalt-EDTA"
        ],
        "a": 2,
        "e": "Chromic oxide (green Sesquioxide of Chromium) is completely indigestible, non-toxic, unabsorbed, and quantitatively recovered in feces.",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "What is the formula for calculating nutrient digestibility percentage using an indicator (marker)?",
        "o": [
          "100 x (% Indicator in feces / % Indicator in feed)",
          "[% Nutrient in feed / % Nutrient in feces] x 100",
          "100 - [100 x (% Indicator in feed / % Indicator in feces) x (% Nutrient in feces / % Nutrient in feed)]",
          "100 - [100 x (% Indicator in feces / % Indicator in feed)]"
        ],
        "a": 2,
        "e": "The indicator formula relates the concentration ratio of marker to nutrient between feed and feces, eliminating the need for total fecal collection.",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "What chemical preservative is routinely added to the 24-hour urine collection carboys during a metabolism trial to prevent loss of ammonia nitrogen?",
        "o": [
          "Formalin (10%)",
          "Sodium hydroxide (40%)",
          "Mercuric chloride",
          "1:1 Dilute Sulfuric Acid (H2SO4)"
        ],
        "a": 3,
        "e": "Sulfuric acid keeps the urine pH below 2.0-3.0, converting volatile unionized ammonia into non-volatile ammonium sulfate, preventing nitrogen loss.",
        "topicId": "u2-t04",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "What aliquot percentage of total daily voided feces is customarily sampled, composited, and preserved during a 7-day digestion trial?",
        "o": [
          "100% of daily output",
          "0.1% of daily output",
          "50% of daily output",
          "1/10th to 1/20th (5 to 10%) of daily output"
        ],
        "a": 3,
        "e": "Sampling a representative 5-10% (1/20th or 1/10th) aliquot of thoroughly mixed wet feces ensures accurate composite analysis without unmanageable bulk.",
        "topicId": "u2-t04",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "A steer consumed 8.0 kg dry matter of a grass hay containing 10% crude protein and excreted 3.2 kg fecal dry matter containing 12.5% crude protein. What is the apparent CP digestibility?",
        "o": [
          "60.0%",
          "40.0%",
          "50.0%",
          "75.0%"
        ],
        "a": 2,
        "e": "CP intake = 8.0 x 0.10 = 0.80 kg; Fecal CP = 3.2 x 0.125 = 0.40 kg. Digested CP = 0.80 - 0.40 = 0.40 kg. Apparent digestibility = (0.40 / 0.80) x 100 = 50.0%.",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "How does an increase in the level of feed intake (plane of nutrition) from 1x maintenance to 3x maintenance affect digestibility in cattle?",
        "o": [
          "Increases digestibility substantially",
          "Has no measurable effect on digestibility",
          "Completely eliminates rumen microbial fermentation",
          "Decreases digestibility by 1-2 percentage units per multiple of maintenance"
        ],
        "a": 3,
        "e": "Higher feed intake accelerates digesta passage rate through the rumen, shortening microbial exposure and decreasing digestibility by 1-2% per multiple of maintenance.",
        "topicId": "u2-t06",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "How does fine grinding and pelleting of a roughage influence its ruminal digestibility and voluntary intake in ruminants?",
        "o": [
          "Increases fiber digestibility and decreases voluntary intake",
          "Increases both fiber digestibility and voluntary intake",
          "Decreases fiber digestibility but increases voluntary intake",
          "Decreases both fiber digestibility and voluntary intake"
        ],
        "a": 2,
        "e": "Fine grinding accelerates reticulo-ruminal passage, shortening microbial fermentation time (depressing fiber digestibility) but clearing the rumen faster (increasing DMI).",
        "topicId": "u2-t06",
        "diff": 3,
        "subSection": "u2-s1"
      },
      {
        "q": "The negative associative effect observed when excessive cereal grain is added to a roughage diet is primarily due to:",
        "o": [
          "Direct physical binding of starch granules to cellulose",
          "Excessive production of acetic acid",
          "Toxic destruction of rumen protozoa by starch",
          "Rapid starch fermentation lowering rumen pH below 6.0, inhibiting fibrolytic bacteria"
        ],
        "a": 3,
        "e": "When rumen pH falls below 6.0-6.2 due to rapid amylolysis, fibrolytic species (Fibrobacter succinogenes, Ruminococcus flavefaciens) cease cellulase secretion.",
        "topicId": "u2-t06",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "In a nitrogen metabolism balance trial, an animal is in a positive nitrogen balance when:",
        "o": [
          "Fecal nitrogen equals urinary nitrogen",
          "Nitrogen intake exceeds the sum of fecal and urinary nitrogen excretion",
          "Urinary nitrogen exceeds nitrogen intake",
          "Nitrogen intake is zero"
        ],
        "a": 1,
        "e": "Positive N balance (Intake > [Feces + Urine]) indicates net protein synthesis and tissue retention, as seen during growth, gestation, or muscle repletion.",
        "topicId": "u2-t03",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "The comparative slaughter technique developed by Armsby and Moulton is regarded as the gold standard for measuring:",
        "o": [
          "Apparent dry matter digestibility in vivo",
          "Net energy and body nutrient retention over a feeding period",
          "Rumen volatile fatty acid production rates",
          "Endogenous urinary nitrogen loss"
        ],
        "a": 1,
        "e": "Slaughtering representative baseline animals at day 0 and final animals at day 90 allows direct chemical determination of energy, protein, and fat retained in the body.",
        "topicId": "u2-t02",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "Which experimental design is most efficient for eliminating individual animal variation while testing 4 different diets on 4 animals across 4 periods?",
        "o": [
          "Completely Randomized Design (CRD)",
          "Randomized Block Design (RBD)",
          "Factorial 2 x 2 Design",
          "4 x 4 Latin Square Design"
        ],
        "a": 3,
        "e": "A Latin Square design balances both animal-to-animal variation (rows) and time/period effects (columns), maximizing statistical precision with few animals.",
        "topicId": "u2-t02",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "Metabolic Fecal Nitrogen (MFN) in ruminants is primarily derived from which source?",
        "o": [
          "Undigested ruminal microbial cell debris and digestive secretions",
          "True undigested feed dietary protein",
          "Excess dietary urea converted to ammonia",
          "Deaminated amino acids from liver metabolism"
        ],
        "a": 0,
        "e": "In ruminants, 70-80% of MFN consists of indigestible bacterial and protozoal cell walls, with the remainder from sloughed mucosal cells and enzymes.",
        "topicId": "u2-t03",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "What is the average Metabolic Fecal Nitrogen (MFN) excretion value per kilogram of dry matter intake conventionally used in ruminant nutrition?",
        "o": [
          "1.0 to 1.5 g N per kg DMI",
          "4.5 to 5.0 g N per kg DMI",
          "10.0 to 12.0 g N per kg DMI",
          "0.5 g N per kg DMI"
        ],
        "a": 1,
        "e": "Classical balance studies establish that cattle excrete approximately 5 grams of endogenous metabolic fecal nitrogen for every 1 kg of dry matter ingested.",
        "topicId": "u2-t03",
        "diff": 3,
        "subSection": "u2-s1"
      },
      {
        "q": "Endogenous Urinary Nitrogen (EUN) excretion in adult fasting mammals is related directly to which physiological parameter?",
        "o": [
          "Empty body fat percentage",
          "Metabolic Body Size (W^0.75)",
          "Daily dry matter intake",
          "Total water consumption"
        ],
        "a": 1,
        "e": "EUN reflects baseline cellular protein catabolism and scales directly with metabolic body size: EUN ≈ 140 to 146 mg N per kg W^0.75 per day.",
        "topicId": "u2-t03",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "What surgical preparation is commonly employed in cattle to collect representative ruminal fluid samples over time without animal distress?",
        "o": [
          "Esophageal fistulation",
          "Cecal cannulation",
          "Abomasal transection",
          "Rumen Cannulation (Fistulation)"
        ],
        "a": 3,
        "e": "A permanent flexible plastisol cannula surgically installed in the left paralumbar fossa provides direct access to ruminal digesta for in sacco nylon bag studies.",
        "topicId": "u2-t04",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "The in situ (in sacco) nylon bag technique developed by Orskov and McDonald is used to evaluate:",
        "o": [
          "Total tract apparent digestibility in non-ruminants",
          "Rate and extent of ruminal degradation of feed dry matter and protein",
          "Net energy for lactation of green forages",
          "Fasting heat production in respiration chambers"
        ],
        "a": 1,
        "e": "Incubating feed samples in nylon mesh bags inside the rumen for 0, 2, 4, 8, 16, 24, 48, and 72 hours yields degradation kinetics: p = a + b(1 - e^-ct).",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "The Tilley and Terry two-stage in vitro technique for determining feed digestibility involves:",
        "o": [
          "24 h amylase digestion followed by 24 h alkali boiling",
          "72 h fungal cellulase digestion at 50°C",
          "48 h ruminal fluid incubation followed by 48 h acid-pepsin digestion",
          "Direct combustion in an adiabatic oxygen bomb"
        ],
        "a": 2,
        "e": "Stage 1 simulates anaerobic microbial fermentation (48 h with buffered rumen fluid); Stage 2 simulates abomasal digestion (48 h in pepsin-HCl).",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "Which internal indicator is measured as the residue after incinerating a sample and boiling the ash in 3 N hydrochloric acid?",
        "o": [
          "Lignin",
          "Acid Insoluble Ash (AIA)",
          "Silica gel",
          "Chromogen"
        ],
        "a": 1,
        "e": "AIA consists of natural plant biogenic silica and soil minerals insoluble in 3 N HCl, serving as an accurate, inexpensive internal digestion indicator.",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "Why does water buffalo (Bubalus bubalis) generally exhibit higher digestibility of coarse dry roughages compared to Bos indicus or Bos taurus cattle?",
        "o": [
          "Presence of gastric amylase in the omasum",
          "Absence of methane emissions in buffaloes",
          "Secretion of bile into the rumen reticulum",
          "Higher ruminal bacterial population, slower digesta passage rate, and higher cellulolytic activity"
        ],
        "a": 3,
        "e": "Buffaloes harbor greater concentrations of cellulolytic bacteria and larger ruminal volume with longer digesta retention times, digesting low-grade roughages 2-5% better.",
        "topicId": "u2-t06",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "Which anatomical structure in young milk-fed calves diverts milk past the reticulorumen directly into the abomasum?",
        "o": [
          "Omasal sulcus",
          "Pyloric sphincter",
          "Ileo-cecal valve",
          "Reticular (Esophageal) Groove"
        ],
        "a": 3,
        "e": "Reflex contraction of the muscular lips of the reticular groove forms a closed tube diverting milk straight into the abomasum, preventing ruminal curd fermentation.",
        "topicId": "u2-t01",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "What happens if a milk-fed calf drinks milk from a wide bucket too rapidly, causing failure of the esophageal groove reflex?",
        "o": [
          "Milk spills into the immature reticulorumen, causing ruminal bloat, lactic acidosis, and scouring ('Ruminal Drinker')",
          "Instant fatal aspiration pneumonia",
          "Immediate formation of urinary calculi",
          "Rupture of the omasum"
        ],
        "a": 0,
        "e": "Milk entering the uninoculated rumen undergoes abnormal bacterial fermentation by coliforms, causing lactic acid buildup, ruminal bloat, systemic acidosis, and gray diarrhea.",
        "topicId": "u2-t01",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "In a digestion trial, if dry matter intake is 10 kg and dry matter excreted in feces is 4 kg, what is the Apparent Dry Matter Digestibility?",
        "o": [
          "40%",
          "70%",
          "60%",
          "50%"
        ],
        "a": 2,
        "e": "DM Digestibility = [(10 kg - 4 kg) / 10 kg] x 100 = (6 / 10) x 100 = 60%.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "A diet fed to sheep contained 0.20% chromic oxide as an external marker, and the resulting feces contained 0.80% chromic oxide. What is the Dry Matter Digestibility of the diet?",
        "o": [
          "25%",
          "60%",
          "75%",
          "80%"
        ],
        "a": 2,
        "e": "DM Digestibility % = [1 - (% Indicator in feed / % Indicator in feces)] x 100 = [1 - (0.20 / 0.80)] x 100 = [1 - 0.25] x 100 = 75%.",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "In an indirect digestion trial, 6 kg of basal grass hay was fed alone (DM digestibility = 50%). Later, 6 kg hay + 2 kg maize grain was fed, yielding total fecal DM of 3.4 kg. What is the DM digestibility of the maize grain?",
        "o": [
          "70%",
          "90%",
          "60%",
          "80%"
        ],
        "a": 3,
        "e": "Fecal DM from hay = 6.0 x (1 - 0.50) = 3.0 kg. Total fecal DM = 3.4 kg; therefore, fecal DM from maize = 3.4 - 3.0 = 0.4 kg. Maize DM digested = 2.0 - 0.4 = 1.6 kg. Maize DM digestibility = (1.6 / 2.0) x 100 = 80%.",
        "topicId": "u2-t05",
        "diff": 3,
        "subSection": "u2-s1"
      },
      {
        "q": "Which mineral balance trial requires collection of both urine and feces because urinary excretion is the primary route of endogenous elimination?",
        "o": [
          "Calcium only",
          "Phosphorus and Potassium",
          "Iron and Copper",
          "Cobalt"
        ],
        "a": 1,
        "e": "Potassium, sodium, and excess phosphorus (in non-ruminants) are cleared predominantly through the kidneys into urine, requiring total urine collection.",
        "topicId": "u2-t03",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "How does feeding an exclusively succulent young legume pasture (e.g. berseem, lucerne) affect ruminal retention time and rate of passage?",
        "o": [
          "Increases rate of passage and decreases ruminal retention time",
          "Decreases rate of passage and increases retention time",
          "Halts ruminal motility completely",
          "Doubles true fiber digestibility"
        ],
        "a": 0,
        "e": "Succulent, low-fiber young legumes break down rapidly into fine particles, hastening liquid and solid passage and shortening ruminal retention time.",
        "topicId": "u2-t06",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "Which physiological mechanism explains why severe protein deficiency in a ruminant diet depresses overall dry matter and fiber digestibility?",
        "o": [
          "Pancreatic trypsin secretion ceases entirely",
          "Rumen ammonia levels drop below the threshold (5-8 mg/dL) needed for fibrolytic bacterial growth",
          "Gastric hydrochloric acid secretion is inhibited",
          "Salivary secretion stops"
        ],
        "a": 1,
        "e": "Cellulolytic bacteria require ruminal NH3-N (>5 mg/dL) as their sole nitrogen source for protein synthesis; protein starvation halts bacterial growth and cellulase output.",
        "topicId": "u2-t06",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "In cattle, what is the physiological consequence of feeding roughage with a Crude Protein content below the critical threshold of 6 to 7%?",
        "o": [
          "Intake doubles due to compensatory hunger",
          "Rumen pH drops below 5.0 causing acidosis",
          "Rumen microbial activity drops, and voluntary dry matter intake falls drastically",
          "Excess ammonia causes acute urea toxicity"
        ],
        "a": 2,
        "e": "When forage CP falls below 6-7%, ruminal NH3 is insufficient for fiber digestion; slow fiber clearance fills the rumen, severely suppressing voluntary DMI.",
        "topicId": "u2-t06",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "The Menke and Steingass in vitro gas production method assesses feed nutritive value by measuring:",
        "o": [
          "Volume of gas (CO2 and CH4) generated per unit feed incubated with buffered rumen fluid",
          "Oxygen consumption in a closed respirometer",
          "Nitrogen loss via the Kjeldahl distillation trap",
          "Ammonia absorption in 2% boric acid"
        ],
        "a": 0,
        "e": "Fermentation of carbohydrates by rumen microbes in calibrated glass syringes produces CO2 and CH4, directly correlating with ME and organic matter digestibility.",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "The DaisyII incubator system manufactured by ANKOM is an automated laboratory instrument used for:",
        "o": [
          "Simultaneous determination of in vitro dry matter and NDF digestibility in filter bags",
          "Kjeldahl nitrogen digestion and distillation",
          "Bomb calorimetry of combustible gases",
          "Continuous blood sampling in catheterized cattle"
        ],
        "a": 0,
        "e": "The DaisyII incubator rotates sealed filter bags containing feed samples in jars of buffered rumen fluid at 39°C, running up to 100 samples simultaneously.",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "Which fraction of Weende proximate analysis exhibits the greatest variability in digestibility among different feedstuffs?",
        "o": [
          "Ether Extract (EE)",
          "Crude Protein (CP)",
          "Nitrogen-Free Extract (NFE)",
          "Crude Fibre (CF)"
        ],
        "a": 3,
        "e": "Crude fiber digestibility varies widely from 0-10% in mature woody twigs to 70-80% in young leafy clover, depending heavily on lignification.",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "Which physical device is attached to male sheep or steers in metabolism cages to ensure complete, contamination-free separation of feces and urine?",
        "o": [
          "Nylon muzzle strap",
          "Abomasal cannula plug",
          "Tracheal cannula valve",
          "Leather collection harness with rubber fecal bag and urinal funnel"
        ],
        "a": 3,
        "e": "Metabolism stalls feature a wire-mesh floor or a fitted leather harness directing solid feces into a rear tray and liquid urine through a funnel into an acidified flask.",
        "topicId": "u2-t04",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "What is the primary physiological limitation of using Cr2O3 (chromic oxide) as an external marker in grazing ruminants?",
        "o": [
          "Complete chemical destruction by rumen microbes",
          "Extreme toxicity to intestinal enterocytes",
          "Diurnal variation in excretion rate requiring standardized dosing and grab-sampling times",
          "Direct conversion into volatile chromic gas"
        ],
        "a": 2,
        "e": "Chromic oxide does not associate evenly with digesta phases and shows marked diurnal excretion peaks, necessitating dosing twice daily for 5-7 days before sampling.",
        "topicId": "u2-t05",
        "diff": 3,
        "subSection": "u2-s1"
      },
      {
        "q": "True protein digestibility in ruminants differs from apparent protein digestibility by correcting for:",
        "o": [
          "Metabolic Fecal Nitrogen (MFN)",
          "Endogenous Urinary Nitrogen (EUN)",
          "Volatile fatty acid absorption",
          "Salivary urea recycling"
        ],
        "a": 0,
        "e": "True Protein Digestibility % = [(N intake - [Fecal N - MFN]) / N intake] x 100. It deducts non-dietary endogenous fecal nitrogen.",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "What is the primary factor limiting the maximum inclusion of fat in adult ruminant digestion trials without depressing fiber digestion?",
        "o": [
          "Inhibition of abomasal pepsin secretion",
          "Excessive production of ketone bodies in saliva",
          "Precipitation of bile acids in the rumen",
          "Coating of fiber particles and antimicrobial toxicity of free PUFAs to fibrolytic bacteria"
        ],
        "a": 3,
        "e": "Unprotected dietary fats above 5-6% of diet DM adsorb onto cellulose and kill cellulolytic bacteria (Fibrobacter, Ruminococcus), depressing fiber digestibility.",
        "topicId": "u2-t06",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "In conducting an in vivo digestion trial with lactating dairy cows, what additional output must be analyzed in the complete nitrogen balance equation?",
        "o": [
          "Salivary nitrogen",
          "Sweat nitrogen",
          "Hair shedding loss",
          "Milk nitrogen"
        ],
        "a": 3,
        "e": "In lactating animals, total nitrogen balance = Nitrogen Intake - (Fecal N + Urinary N + Milk N). Milk contains 0.5-0.6% nitrogen (~3.2-3.8% protein).",
        "topicId": "u2-t03",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "What is the effect of frequency of feeding (e.g. feeding 6 times daily versus once daily) on ruminal fermentation patterns in dairy cows?",
        "o": [
          "Stabilizes ruminal pH, reduces diurnal fluctuations in VFA concentrations, and improves fiber digestion",
          "Causes chronic subacute ruminal acidosis",
          "Decreases microbial protein synthesis by 50%",
          "Completely suppresses saliva secretion"
        ],
        "a": 0,
        "e": "Frequent small meals distribute fermentable carbohydrate load evenly, preventing severe pH drops below 6.0 and maintaining continuous cellulolytic activity.",
        "topicId": "u2-t06",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "Which parameter is determined by difference when calculating the proximate composition of a feed sample?",
        "o": [
          "Nitrogen-Free Extract (NFE)",
          "Crude Protein (CP)",
          "Crude Fibre (CF)",
          "Ether Extract (EE)"
        ],
        "a": 0,
        "e": "NFE is not measured directly; it is calculated: NFE% = 100 - (% Moisture + % CP + % EE + % CF + % Total Ash).",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "What is the primary purpose of conducting a pilot or trial feeding experiment prior to launching a large-scale feeding trial?",
        "o": [
          "To eliminate the need for chemical analysis of feed",
          "To vaccinate animals against ruminal bacteria",
          "To slaughter all test animals for baseline data",
          "To determine feed palatability, voluntary intake thresholds, and potential toxicity problems"
        ],
        "a": 3,
        "e": "A pilot study confirms that animals consume the experimental ration readily at expected intakes without gastrointestinal rejection or acute metabolic disturbance.",
        "topicId": "u2-t02",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "The ratio of dry matter intake to average daily live weight gain is designated as:",
        "o": [
          "Protein Efficiency Ratio (PER)",
          "Feed Conversion Ratio (FCR)",
          "Digestibility Coefficient",
          "Nutritive Ratio (NR)"
        ],
        "a": 1,
        "e": "Feed Conversion Ratio (FCR) = Feed intake (kg) / Body weight gain (kg). A lower FCR indicates superior feed utilization efficiency.",
        "topicId": "u2-t02",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "Which analytical fraction obtained during the Van Soest detergent analysis is completely dissolved by neutral detergent solution but insoluble in water?",
        "o": [
          "Hemicellulose",
          "Neutral Detergent Solubles (NDS, cell contents)",
          "Lignin",
          "Silica"
        ],
        "a": 1,
        "e": "Neutral Detergent Solubles (NDS = 100 - NDF) contain cell contents (soluble sugars, starch, organic acids, protein, lipids) having a true digestibility near 98%.",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "What is the mathematical relationship between Acid Detergent Fibre (ADF) and Neutral Detergent Fibre (NDF)?",
        "o": [
          "Cellulose = NDF - ADF",
          "Lignin = NDF - ADF",
          "Hemicellulose = NDF - ADF",
          "Total cell contents = NDF - ADF"
        ],
        "a": 2,
        "e": "NDF contains hemicellulose, cellulose, and lignin. ADF contains cellulose and lignin. Therefore: Hemicellulose = NDF - ADF.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "Who proposed the very first feeding standard in 1809 based on 'Hay Equivalents' comparing feeds to 100 pounds of good meadow hay?",
        "o": [
          "Justus von Liebig",
          "Emil von Wolff",
          "Albrecht Thaer",
          "F.B. Morrison"
        ],
        "a": 2,
        "e": "German agriculturalist Albrecht von Thaer published the first empirical feeding standard in 1809 using meadow hay as the reference baseline.",
        "topicId": "u2-t07",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "The Wolff-Lehmann feeding standards (1874/1896) improved upon earlier systems by formulating nutrient requirements on the basis of:",
        "o": [
          "Gross energy of whole plants",
          "Digestible Crude Protein, Digestible Carbohydrates, and Digestible Ether Extract per 1000 lbs live weight",
          "Biological value of essential amino acids",
          "Net energy for lactation only"
        ],
        "a": 1,
        "e": "Emil von Wolff and C. Lehmann expressed nutrient needs as digestible nutrients (DCP, digestible carbs, digestible fat) based on Henneberg's Weende trials.",
        "topicId": "u2-t07",
        "diff": 2,
        "subSection": "u2-s2"
      },
      {
        "q": "The famous American feeding standard published in 'Feeds and Feeding' which served as the global practical guideline for decades was authored by:",
        "o": [
          "H.P. Armsby",
          "W.A. Henry and F.B. Morrison",
          "F.B. Morrison",
          "L.A. Maynard"
        ],
        "a": 2,
        "e": "W.A. Henry (1898) and Frank B. Morrison (from 1915 onward) compiled the seminal 'Morrison Feeding Standards' based on TDN and DCP.",
        "topicId": "u2-t07",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "The Morrison feeding standard expresses energy and protein requirements of dairy cattle in terms of:",
        "o": [
          "Net Energy (NE) and Metabolizable Protein (MP)",
          "Total Digestible Nutrients (TDN) and Digestible Crude Protein (DCP)",
          "Starch Equivalent (SE) and Protein Equivalent (PE)",
          "Gross Energy (GE) and True Protein (TP)"
        ],
        "a": 1,
        "e": "Morrison standards utilized Total Digestible Nutrients (TDN) for energy and Digestible Crude Protein (DCP) for protein requirements.",
        "topicId": "u2-t08",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "What is the primary scientific criticism and demerit of using Total Digestible Nutrients (TDN) as an energy standard for ruminants?",
        "o": [
          "It is impossible to calculate mathematically",
          "It does not account for fecal energy losses",
          "It overvalues low-grade fibrous roughages relative to concentrates because it ignores the high heat increment of fiber fermentation",
          "It assumes protein contains zero digestible energy"
        ],
        "a": 2,
        "e": "Fibrous feeds generate large amounts of heat increment during ruminal fermentation; hence, 1 kg TDN from straw supports far less production than 1 kg TDN from maize.",
        "topicId": "u2-t08",
        "diff": 2,
        "subSection": "u2-s2"
      },
      {
        "q": "The National Research Council (NRC, USA) ruminant feeding standards evolved from TDN to which modern energy system?",
        "o": [
          "Starch Equivalent system",
          "Net Energy system (NEm, NEg, NEl)",
          "Food Unit system (FU)",
          "Gross Caloric Ratio"
        ],
        "a": 1,
        "e": "Modern NRC systems partition energy requirements into Net Energy for maintenance (NEm), gain (NEg), and lactation (NEl) to eliminate heat increment discrepancies.",
        "topicId": "u2-t08",
        "diff": 2,
        "subSection": "u2-s2"
      },
      {
        "q": "The Agricultural Research Council (ARC, UK) system adopted which energy unit as its official baseline for ruminant ration formulation?",
        "o": [
          "Starch Equivalent (SE, in kg)",
          "Total Digestible Nutrients (TDN, in lbs)",
          "Metabolizable Energy (ME, in MegaJoules)",
          "Scandinavian Feed Unit"
        ],
        "a": 2,
        "e": "The ARC/AFRC British system formulates diets on Metabolizable Energy (ME, MJ/kg DM), using efficiency coefficients (km, kf, kl) to derive net performance.",
        "topicId": "u2-t08",
        "diff": 2,
        "subSection": "u2-s2"
      },
      {
        "q": "Which feeding standard was specifically developed by Leonard C. Kearl (1982) at Utah State University for livestock in developing countries?",
        "o": [
          "Scandinavian Feed Unit Standard",
          "Kellner Starch Standard",
          "Armsby Calorimetric Standard",
          "Nutrient Requirements of Ruminants in Developing Countries (Kearl Standard)"
        ],
        "a": 3,
        "e": "Kearl (1982) compiled requirements tailored specifically for zebu cattle, water buffaloes, sheep, and goats raised under tropical and developing-nation conditions.",
        "topicId": "u2-t08",
        "diff": 2,
        "subSection": "u2-s2"
      },
      {
        "q": "In India, the authoritative national livestock feeding standard was developed and revised by which apex agricultural research body?",
        "o": [
          "VCI (Veterinary Council of India)",
          "BIS (Bureau of Indian Standards)",
          "NDDB (National Dairy Development Board)",
          "ICAR (Indian Council of Agricultural Research)"
        ],
        "a": 3,
        "e": "The ICAR (Sen, Ray, Ranjhan, and revised ICAR 2013 standards) provides official nutrient requirements tailored for Indian zebu cattle and Murrah buffaloes.",
        "topicId": "u2-t08",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "Why do indigenous zebu cattle (Bos indicus) generally have a 10 to 15% lower fasting maintenance energy requirement than exotic taurine cattle (Bos taurus)?",
        "o": [
          "Inability to digest green fodder",
          "Absence of active ruminal microbes",
          "Lower basal metabolic rate, smaller visceral organ mass relative to body size, and tropical heat adaptation",
          "Lower body temperature of 35°C"
        ],
        "a": 2,
        "e": "Bos indicus breeds possess lower visceral metabolic activity, smaller liver mass, and lower basal heat production, enabling survival on sparse tropical vegetation.",
        "topicId": "u2-t08",
        "diff": 2,
        "subSection": "u2-s2"
      },
      {
        "q": "A 'Balanced Ration' for livestock is scientifically defined as:",
        "o": [
          "The total feed supplied in 24 hours containing all essential nutrients in proper amounts and proportions for maintenance and production",
          "A diet composed exclusively of green leguminous pastures",
          "Any mixture containing exactly 50% roughage and 50% concentrate",
          "A feed containing 100% true protein and zero crude fiber"
        ],
        "a": 0,
        "e": "A balanced ration furnishes all required nutrients (energy, protein, minerals, vitamins, water) in proper physiological proportions over a 24-hour feeding period.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "What is the standard rule-of-thumb for daily Dry Matter Intake (DMI) in indigenous adult zebu cattle (Bos indicus)?",
        "o": [
          "4.0 to 5.0 kg DM per 100 kg body weight",
          "1.0 kg DM per 100 kg body weight",
          "6.0 to 7.0 kg DM per 100 kg body weight",
          "2.0 to 2.5 kg DM per 100 kg body weight"
        ],
        "a": 3,
        "e": "Indigenous zebu cattle consume approximately 2.0 to 2.5 kg DM per 100 kg body weight (2.0-2.5% of BW) under standard feeding management.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "What is the expected daily Dry Matter Intake (DMI) for adult crossbred dairy cows (Bos taurus x Bos indicus) and high-yielding buffaloes?",
        "o": [
          "1.5 kg DM per 100 kg body weight",
          "5.0 to 6.0 kg DM per 100 kg body weight",
          "0.5 kg DM per 100 kg body weight",
          "2.5 to 3.0 kg DM per 100 kg body weight (up to 3.5% in high yielders)"
        ],
        "a": 3,
        "e": "Crossbred cows and buffaloes consume 2.5 to 3.0 kg DM per 100 kg body weight, with high-yielding lactating animals reaching 3.5% of body weight.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "For a 400 kg non-lactating adult maintenance bullock, what is its expected total daily Dry Matter requirement at 2.0% of body weight?",
        "o": [
          "4.0 kg DM",
          "8.0 kg DM",
          "12.0 kg DM",
          "16.0 kg DM"
        ],
        "a": 1,
        "e": "Total DMI = (2.0 / 100) x 400 kg = 8.0 kg DM per day.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "In practical Indian ration balancing, what proportion of total daily dry matter intake is traditionally supplied through roughages for maintenance?",
        "o": [
          "100% from concentrates",
          "90% from concentrates and 10% from roughages",
          "Two-thirds (66.7%) from roughages and one-third (33.3%) from concentrates",
          "5% from roughages and 95% from concentrates"
        ],
        "a": 2,
        "e": "The classic thumb rule allocates 2/3rd of total dry matter from roughages (split between green and dry) and 1/3rd from concentrate mixture.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "Of the two-thirds roughage dry matter in a dairy ration, what is the ideal recommended partition between leguminous green fodder and dry roughage (straw)?",
        "o": [
          "100% dry straw and 0% green",
          "100% green and 0% dry straw",
          "All dry roughage treated with acid",
          "One-third of total roughage DM from green legumes and two-thirds from dry straw"
        ],
        "a": 3,
        "e": "Allocating 1/3rd of the roughage DM as green fodder and 2/3rd as dry straw provides necessary bulk, carotene, and bypass fiber while conserving greens.",
        "topicId": "u2-t09",
        "diff": 2,
        "subSection": "u2-s2"
      },
      {
        "q": "Which characteristic is essential in a properly computed balanced ration to ensure normal rumination, saliva secretion, and prevention of displaced abomasum?",
        "o": [
          "Zero crude fiber content",
          "Complete liquefaction of all dietary components",
          "Adequate physical fibrous bulk (effective fiber / peNDF)",
          "Exclusive inclusion of high-moisture brewery grains"
        ],
        "a": 2,
        "e": "Physically effective fiber (peNDF) stimulates cud-chewing (rumination) and copious secretion of buffering saliva, stabilizing the ruminal mat and preventing abomasal displacement.",
        "topicId": "u2-t09",
        "diff": 2,
        "subSection": "u2-s2"
      },
      {
        "q": "Why must a balanced ration possess mild laxative properties in dairy cattle?",
        "o": [
          "To induce diarrhea and flush out all bacteria",
          "To prevent absorption of dietary minerals",
          "To minimize ruminal water absorption",
          "To prevent constipation and ensure smooth, regular passage of digestive residue"
        ],
        "a": 3,
        "e": "Succulent greens (lucerne, berseem) and wheat bran provide mild laxative effects that prevent intestinal impaction, especially around calving.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "What is the mandatory inclusion rate of common salt (NaCl) in commercial cattle concentrate mixtures in India?",
        "o": [
          "5.0%",
          "1.0%",
          "10.0%",
          "0.01%"
        ],
        "a": 1,
        "e": "Feed compounding standards (BIS) mandate 1.0% common salt in dairy concentrate mixtures to supply essential sodium and chlorine and enhance palatability.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "What is the recommended inclusion level of an area-specific mineral mixture (ASMM) in the concentrate ration of dairy cattle?",
        "o": [
          "10.0%",
          "2.0%",
          "0.1%",
          "5.0%"
        ],
        "a": 1,
        "e": "A 2% mineral mixture inclusion rate (or 50-100 g daily per adult cow) satisfies trace and macro-mineral requirements tailored to regional soil-plant deficiencies.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "Which feed formulation method utilizes a simple geometric diagram to balance two feed ingredients for a single nutrient (e.g. Crude Protein)?",
        "o": [
          "Simplex Linear Programming Algorithm",
          "Monte Carlo Simulation",
          "Pearson's Square Method",
          "Weende Extraction Matrix"
        ],
        "a": 2,
        "e": "The Pearson Square balances two feeds or mixtures by placing the desired target nutrient concentration in the center and calculating diagonal differences.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "Using Pearson's Square to formulate a 16% CP concentrate mixture using Maize grain (9% CP) and Groundnut Cake (40% CP), what is the required proportion of Maize to Groundnut Cake?",
        "o": [
          "10 parts Maize : 10 parts GNC",
          "24 parts Maize : 7 parts GNC (77.4% Maize and 22.6% GNC)",
          "7 parts Maize : 24 parts GNC",
          "16 parts Maize : 9 parts GNC"
        ],
        "a": 1,
        "e": "Maize (9) vs 16 -> |9 - 16| = 7 parts GNC. GNC (40) vs 16 -> |40 - 16| = 24 parts Maize. Total parts = 31. % Maize = (24/31) x 100 = 77.42%; % GNC = (7/31) x 100 = 22.58%.",
        "topicId": "u2-t09",
        "diff": 2,
        "subSection": "u2-s2"
      },
      {
        "q": "What is the primary operational advantage of modern computer-based Linear Programming (LP) over hand-calculation in feed formulation?",
        "o": [
          "Guaranteeing that feed ingredients contain zero crude fiber",
          "Least-Cost Ration Formulation simultaneously satisfying dozens of nutrient constraints and ingredient boundaries",
          "Eliminating the need to purchase minerals",
          "Converting non-protein nitrogen into true fat"
        ],
        "a": 1,
        "e": "Linear programming formulates a ration meeting all minimum and maximum nutrient specifications at the absolute lowest financial cost per ton.",
        "topicId": "u2-t09",
        "diff": 2,
        "subSection": "u2-s2"
      },
      {
        "q": "According to Bureau of Indian Standards (BIS: IS 2052) specifications, Type II commercial cattle feed must contain minimum Crude Protein and TDN of:",
        "o": [
          "20% CP and 70% TDN",
          "10% CP and 50% TDN",
          "30% CP and 85% TDN",
          "14% CP and 60% TDN"
        ],
        "a": 0,
        "e": "BIS Type II compounding standards specify minimum 20% crude protein, minimum 2.5% ether extract, maximum 12% crude fiber, and minimum 70% TDN.",
        "topicId": "u2-t09",
        "diff": 2,
        "subSection": "u2-s2"
      },
      {
        "q": "Why is it important to ensure variety of ingredients in a commercial ruminant concentrate mixture?",
        "o": [
          "Guarantees that fiber is eliminated",
          "Prevents saliva production",
          "Eliminates all rumen gas production",
          "Improves amino acid balance, ensures palatability, and mitigates single-ingredient toxicities or supply fluctuations"
        ],
        "a": 3,
        "e": "A mixture containing 4-6 diverse ingredients (cereals, brans, oilcakes, agro-byproducts) ensures nutritional balance, steady intake, and economic resilience.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "Feeding standards serve primarily as:",
        "o": [
          "Legal documents forbidding the sale of wheat straw",
          "Scientific quantitative tables detailing daily nutrient requirements for specific body weights and production levels",
          "Schedules for dairy cow milking machines",
          "Veterinary surgical protocols"
        ],
        "a": 1,
        "e": "Feeding standards provide scientifically verified reference tables specifying required daily intakes of dry matter, energy, protein, minerals, and vitamins.",
        "topicId": "u2-t07",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "The maintenance energy requirement of an animal in all modern feeding standards is rooted in the concept of:",
        "o": [
          "Total Heat Increment during exercise",
          "Combustible energy of feces",
          "Fasting Heat Production (Basal Metabolism)",
          "Dietary thermogenesis of urea"
        ],
        "a": 2,
        "e": "Basal metabolic rate / fasting heat production represents the irreducible energy expenditure required to sustain life in an idle, non-productive state.",
        "topicId": "u2-t07",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "Which classic equation relates Basal Metabolic Rate (BMR in kcal/day) to Body Weight (W in kg) across adult homeothermic mammalian species?",
        "o": [
          "BMR = 70 x W^0.75 (Kleiber's Law)",
          "BMR = 100 x W^1.0",
          "BMR = 50 x W^0.50",
          "BMR = 25 x W^2.0"
        ],
        "a": 0,
        "e": "Max Kleiber (1932) established that basal metabolic heat production scales with metabolic body size (W^0.75): BMR = 70 x W^0.75 kcal/day (or 293 kJ/day).",
        "topicId": "u2-t07",
        "diff": 2,
        "subSection": "u2-s2"
      },
      {
        "q": "What is the metabolic body size of a 400 kg cow?",
        "o": [
          "400 kg^0.75",
          "200 kg^0.75",
          "89.4 kg^0.75",
          "150.2 kg^0.75"
        ],
        "a": 2,
        "e": "Metabolic body weight = W^0.75 = 400^0.75 ≈ 89.44 kg.",
        "topicId": "u2-t07",
        "diff": 2,
        "subSection": "u2-s2"
      },
      {
        "q": "In the Kellner Starch Equivalent feeding system, what 'Value Number' (Wertigkeit) is assigned to pure linseed cake relative to pure digestible starch?",
        "o": [
          "50",
          "20",
          "97 to 100",
          "150"
        ],
        "a": 2,
        "e": "High-quality concentrates like linseed cake have a Wertigkeit near 97-100%, indicating that their digestible nutrients produce ~100% of their calculated fat value.",
        "topicId": "u2-t08",
        "diff": 3,
        "subSection": "u2-s2"
      },
      {
        "q": "Why did Kellner apply a crude fiber deduction factor of 0.29 to 0.58 kg starch equivalent per kg of crude fiber in coarse roughages like straw?",
        "o": [
          "To correct for the heavy mechanical work of mastication and the high heat increment of ruminal fiber fermentation",
          "Because fiber contains toxic alkaloids",
          "Because fiber destroys fat in the rumen",
          "To account for urinary protein excretion"
        ],
        "a": 0,
        "e": "Coarse fibrous roughages expend substantial energy during chewing and fermentation; Kellner deduced 0.58 SE units for every kg of crude fiber in straws.",
        "topicId": "u2-t08",
        "diff": 3,
        "subSection": "u2-s2"
      },
      {
        "q": "In the Scandinavian Feed Unit system, one Feed Unit (FU) is defined as the nutritive value equivalent of:",
        "o": [
          "1.0 kg of meadow hay",
          "1.0 kg of wheat bran",
          "1.0 kg of standard barley grain",
          "1.0 kg of soyabean meal"
        ],
        "a": 2,
        "e": "The Scandinavian Feed Unit (Foderenhed) sets 1 kg of standard barley grain (providing ~1650 kcal NE) as 1.0 Feed Unit.",
        "topicId": "u2-t07",
        "diff": 2,
        "subSection": "u2-s2"
      },
      {
        "q": "Which feeding standard first incorporated the distinction between Rumen Degradable Protein (RDP) and Rumen Undegradable Protein (RUP)?",
        "o": [
          "Wolff-Lehmann (1874)",
          "Morrison (1915)",
          "Thaer (1809)",
          "ARC (1980) and NRC (1985/1989)"
        ],
        "a": 3,
        "e": "The 1980s marked the transition in British (ARC) and American (NRC) standards from crude/digestible protein to metabolizable protein (RDP/RUP system).",
        "topicId": "u2-t08",
        "diff": 2,
        "subSection": "u2-s2"
      },
      {
        "q": "What is the recommended maximum moisture content permitted in bagged commercial cattle concentrate feed to prevent mold growth during storage in India?",
        "o": [
          "10 to 11%",
          "20 to 25%",
          "30%",
          "15 to 18%"
        ],
        "a": 0,
        "e": "BIS mandates a maximum moisture of 10-11% in finished bagged cattle feeds to prevent Aspergillus flavus proliferation and aflatoxin synthesis.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "When formulating a complete ration for high-yielding dairy cows, what is the minimum recommended percentage of Neutral Detergent Fibre (NDF) from forage?",
        "o": [
          "5% of diet DM",
          "19 to 21% of total diet DM",
          "45% of diet DM",
          "0% (concentrates only)"
        ],
        "a": 1,
        "e": "A minimum of 19-21% forage NDF (and 28-30% total NDF) is mandatory to sustain normal chewing time, milk fat percentage, and ruminal health.",
        "topicId": "u2-t09",
        "diff": 2,
        "subSection": "u2-s2"
      },
      {
        "q": "A ration is deficient in energy relative to protein if the Nutritive Ratio is:",
        "o": [
          "Extremely wide (e.g. 1 : 12)",
          "1 : 6",
          "Extremely narrow (e.g. 1 : 2)",
          "1 : 7"
        ],
        "a": 2,
        "e": "An excessively narrow Nutritive Ratio (1:2 to 1:3) means protein is supplied in excess relative to non-protein energy, forcing expensive deamination of amino acids.",
        "topicId": "u2-t09",
        "diff": 2,
        "subSection": "u2-s2"
      },
      {
        "q": "What is the daily maintenance DCP requirement for an adult 400 kg zebu bullock according to Sen and Ray ICAR standards?",
        "o": [
          "1000 g DCP",
          "Approximately 280 to 300 g DCP",
          "50 g DCP",
          "1500 g DCP"
        ],
        "a": 1,
        "e": "Sen & Ray / ICAR standards prescribe approximately 0.70 to 0.75 g DCP per kg metabolic body size (or ~280-300 g DCP for a 400 kg animal).",
        "topicId": "u2-t08",
        "diff": 2,
        "subSection": "u2-s2"
      },
      {
        "q": "What is the daily maintenance TDN requirement for a 400 kg adult zebu cow according to ICAR feeding standards?",
        "o": [
          "6.5 kg TDN",
          "1.0 kg TDN",
          "8.0 kg TDN",
          "Approximately 2.8 to 3.0 kg TDN"
        ],
        "a": 3,
        "e": "ICAR standards prescribe roughly 30 to 34 g TDN per kg metabolic body size, translating to 2.8-3.0 kg TDN for a 400 kg adult cow at maintenance.",
        "topicId": "u2-t08",
        "diff": 2,
        "subSection": "u2-s2"
      },
      {
        "q": "If a lactating crossbred cow produces 10 kg of milk with 4.0% fat, what extra TDN allowance above maintenance is required per kg milk according to ICAR standards?",
        "o": [
          "1.00 kg TDN per kg milk",
          "0.10 kg TDN per kg milk",
          "0.75 kg TDN per kg milk",
          "0.32 to 0.35 kg TDN per kg milk"
        ],
        "a": 3,
        "e": "Each kg of 4% Fat Corrected Milk requires an extra 0.32-0.34 kg TDN and ~45-50 g DCP above maintenance requirements.",
        "topicId": "u2-t08",
        "diff": 2,
        "subSection": "u2-s2"
      },
      {
        "q": "Which ingredient is commonly incorporated into commercial cattle feed up to 5 to 7% to bind dust, improve pellet durability, and enhance palatability?",
        "o": [
          "Raw bone meal",
          "Fish oil",
          "Cane Molasses",
          "Urea"
        ],
        "a": 2,
        "e": "Cane molasses is sweet, highly palatable, provides rapidly fermentable sucrose, and acts as a natural pellet binder at 5-7% inclusion.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "What is the consequence of feeding a ration with excessive moisture (>80%) and low dry matter density to high-producing dairy cows?",
        "o": [
          "Excessive water intoxication",
          "Severe ruminal impaction",
          "Extreme obesity",
          "Physical gut fill limits dry matter intake before nutrient requirements are met ('Bulk Limitation')"
        ],
        "a": 3,
        "e": "High-moisture bulky feeds (such as young watery grass) distend the rumen mechanically, signaling satiety via stretch receptors before sufficient DM is absorbed.",
        "topicId": "u2-t09",
        "diff": 2,
        "subSection": "u2-s2"
      },
      {
        "q": "In dairy ration balancing, the term 'Steaming Up' refers to:",
        "o": [
          "Gradually increasing concentrate feeding 2 to 3 weeks prior to calving to prepare the rumen and support late fetal growth",
          "Pelleting feeds with high-pressure saturated steam",
          "Cooking feed grains in boiling water",
          "Treating straws with pressurized steam in an autoclave"
        ],
        "a": 0,
        "e": "'Steaming up' builds body reserves, adapts rumen papillae to higher concentrate diets, and prevents post-calving ketosis in high-yielding dairy cows.",
        "topicId": "u2-t09",
        "diff": 2,
        "subSection": "u2-s2"
      }
    ],
    "tf": [
      {
        "q": "In a digestion trial with cattle, the preliminary adaptation period is typically 10 to 14 days.",
        "a": true,
        "e": "True. A 10-14 day preliminary period ensures clearance of previous feed residues and stabilizes rumen microbial populations on the test diet.",
        "topicId": "u2-t04",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "The collection period in a standard digestion trial lasts 1 to 2 days.",
        "a": false,
        "e": "False. The collection period must last at least 7 to 10 days to account for irregular day-to-day fecal excretion patterns.",
        "topicId": "u2-t04",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "Apparent digestibility of crude protein is always numerically higher than its true digestibility.",
        "a": false,
        "e": "False. Apparent digestibility is lower than true digestibility because feces contain endogenous metabolic fecal nitrogen.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "Lignin can be utilized as a reliable internal indicator in digestion trials because it is completely indigestible in the gastrointestinal tract.",
        "a": true,
        "e": "True. Lignin undergoes virtually zero degradation during transit through the mammalian digestive tract.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "Chromic oxide (Cr2O3) is an external indicator that is completely absorbed across the ruminal mucosa.",
        "a": false,
        "e": "False. Chromic oxide is completely insoluble and unabsorbed, passing quantitatively through the GI tract into feces.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "Dilute sulfuric acid is commonly added to the urine collection container during a metabolism trial to trap volatile ammonia nitrogen.",
        "a": true,
        "e": "True. Acidifying urine to pH < 3.0 converts volatile NH3 into stable ammonium sulfate.",
        "topicId": "u2-t04",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "Increasing the plane of nutrition from 1x maintenance to 3x maintenance generally increases the digestibility of dietary fiber in cattle.",
        "a": false,
        "e": "False. Higher intake speeds up digesta passage rate, reducing retention time in the rumen and decreasing fiber digestibility.",
        "topicId": "u2-t06",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "Fine grinding of roughages decreases their ruminal retention time and depresses crude fiber digestibility.",
        "a": true,
        "e": "True. Finely ground particles escape the rumen rapidly through the reticulo-omasal orifice before complete cellulolytic digestion can occur.",
        "topicId": "u2-t06",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "An animal in positive nitrogen balance is excreting more nitrogen in feces and urine than it consumes in feed.",
        "a": false,
        "e": "False. Positive nitrogen balance means Intake > Excretion (net tissue protein retention).",
        "topicId": "u2-t03",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "The comparative slaughter technique allows direct chemical measurement of body protein and fat accretion over time.",
        "a": true,
        "e": "True. Comparing the body composition of slaughtered baseline animals with animals at the end of the trial yields true nutrient deposition.",
        "topicId": "u2-t02",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "A 4 x 4 Latin Square design allows testing 4 treatments on 4 animals over 4 sequential periods.",
        "a": true,
        "e": "True. Each animal receives each treatment across four periods, controlling for both between-animal variation and time trends.",
        "topicId": "u2-t02",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "Metabolic Fecal Nitrogen is estimated to be approximately 5 g N per kg of dry matter intake in ruminants.",
        "a": true,
        "e": "True. The standard consensus value in ruminant bioenergetics is approximately 4.5 to 5.0 g MFN per kg DMI.",
        "topicId": "u2-t03",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "Endogenous Urinary Nitrogen excretion scales directly with the animal's gross body weight rather than metabolic body size.",
        "a": false,
        "e": "False. EUN scales with metabolic body size (W^0.75), which reflects active cellular protein turnover.",
        "topicId": "u2-t03",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "The in situ nylon bag technique evaluates the ruminal degradation kinetics of feeds inside a fistulated animal's rumen.",
        "a": true,
        "e": "True. Nylon bags containing feed are suspended in the rumen via cannula to quantify disappearance over incubation time.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "Stage 1 of the Tilley and Terry in vitro technique simulates gastric abomasal digestion with hydrochloric acid and pepsin.",
        "a": false,
        "e": "False. Stage 1 simulates ruminal microbial fermentation (48 h in buffered rumen liquor); Stage 2 simulates abomasal pepsin digestion.",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "Water buffaloes typically exhibit lower digestibility of coarse crop residues than European cattle.",
        "a": false,
        "e": "False. Buffaloes have larger rumen volume, higher cellulolytic bacterial density, and longer digesta retention, digesting low-grade roughages superiorly.",
        "topicId": "u2-t06",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "The reticular groove closure in calves is stimulated reflexively by suckling milk.",
        "a": true,
        "e": "True. The act of suckling from a teat triggers vagal nerve impulses causing contraction of the reticular lips into an enclosed conduit.",
        "topicId": "u2-t01",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "Acid Insoluble Ash consists primarily of biogenic plant silica and extraneous soil minerals.",
        "a": true,
        "e": "True. Silica is insoluble in boiling dilute HCl, serving as a non-absorbable marker.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "Feeding excessive concentrate can suppress fiber digestibility by driving ruminal pH below 6.0.",
        "a": true,
        "e": "True. Cellulolytic bacteria are sensitive to acidic pH; their growth and enzyme activity cease below pH 6.0.",
        "topicId": "u2-t06",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "When feed crude protein drops below 6%, voluntary dry matter intake increases as the animal attempts to meet its protein needs.",
        "a": false,
        "e": "False. Below 6% CP, rumen microbial activity stalls, fiber clearance is delayed, and voluntary intake declines severely due to rumen fill.",
        "topicId": "u2-t06",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "The DaisyII incubator allows simultaneous in vitro incubation of multiple feed samples in sealed filter bags.",
        "a": true,
        "e": "True. Up to 100 samples in filter bags are placed into revolving jars inside the temperature-controlled incubator.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "In a lactating cow nitrogen balance trial, nitrogen secreted in milk is ignored.",
        "a": false,
        "e": "False. Milk nitrogen represents a major route of nitrogen output and must be included: Balance = Intake - (Feces + Urine + Milk).",
        "topicId": "u2-t03",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "A lower Feed Conversion Ratio (FCR) indicates greater efficiency of feed utilization.",
        "a": true,
        "e": "True. FCR is kg feed per kg gain; lower numbers mean less feed is required to produce a unit of body weight.",
        "topicId": "u2-t02",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "Hemicellulose content in the Van Soest system is calculated as NDF minus ADF.",
        "a": true,
        "e": "True. NDF includes hemicellulose, cellulose, and lignin, while ADF contains only cellulose and lignin; thus NDF - ADF = hemicellulose.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "Albrecht Thaer formulated the first feeding standard in 1809 using Hay Equivalents.",
        "a": true,
        "e": "True. Thaer established 100 lbs of meadow hay as the reference standard against which all other feeds were compared.",
        "topicId": "u2-t07",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "The Morrison feeding standard expresses energy requirements in terms of Net Energy for Lactation.",
        "a": false,
        "e": "False. Morrison standards were based on Total Digestible Nutrients (TDN) and Digestible Crude Protein (DCP).",
        "topicId": "u2-t07",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "TDN tends to overestimate the true productive energy value of roughages compared to concentrates.",
        "a": true,
        "e": "True. TDN does not deduct the large heat increment associated with roughage fermentation.",
        "topicId": "u2-t08",
        "diff": 2,
        "subSection": "u2-s2"
      },
      {
        "q": "The British ARC system expresses energy requirements in Metabolizable Energy (ME) units.",
        "a": true,
        "e": "True. The ARC/AFRC standards use Metabolizable Energy (MJ) and efficiency factors (k-values) for maintenance, gain, and milk.",
        "topicId": "u2-t08",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "The ICAR feeding standards for cattle are designed specifically for European Bos taurus breeds under temperate conditions.",
        "a": false,
        "e": "False. ICAR standards were specifically developed for indigenous Bos indicus zebu cattle and water buffaloes under Indian conditions.",
        "topicId": "u2-t08",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "Indigenous zebu cattle have a lower fasting heat production per unit metabolic body size than exotic European cattle.",
        "a": true,
        "e": "True. Zebu cattle have lower basal metabolic rates (~10-15% lower) as an evolutionary adaptation to tropical heat stress.",
        "topicId": "u2-t08",
        "diff": 2,
        "subSection": "u2-s2"
      },
      {
        "q": "Daily dry matter intake of adult zebu cattle is typically 2.0 to 2.5 kg per 100 kg body weight.",
        "a": true,
        "e": "True. Non-lactating indigenous zebu cattle voluntarily consume roughly 2.0 to 2.5% of their live body weight in dry matter.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "In practical Indian dairy feeding, about two-thirds of total dry matter is supplied through roughages and one-third from concentrates.",
        "a": true,
        "e": "True. The classic 2:1 roughage-to-concentrate dry matter ratio maintains ruminal health and economic viability.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "A balanced ration must provide adequate physically effective fiber to stimulate rumination and saliva flow.",
        "a": true,
        "e": "True. Without sufficient long coarse fiber, cows chew their cud less, secrete less buffering saliva, and develop ruminal acidosis.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "Commercial cattle concentrate feeds in India must contain a minimum of 5% added common salt.",
        "a": false,
        "e": "False. BIS standards specify 1.0% common salt (NaCl) in commercial compounded cattle feeds.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "Area-specific mineral mixture is typically recommended at 2% in the concentrate mixture for dairy cattle.",
        "a": true,
        "e": "True. A 2% inclusion rate (or ~50-100 g/day per cow) satisfies macro- and micro-mineral needs across Indian regions.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "Pearson's Square can simultaneously balance four independent feeds for five different nutrient constraints in a single step.",
        "a": false,
        "e": "False. Pearson's Square balances only two feeds (or two fixed mixtures) for one single nutrient at a time.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "Least-cost feed formulation using linear programming optimizes ingredient combinations to minimize ration cost while satisfying nutritional constraints.",
        "a": true,
        "e": "True. LP algorithms evaluate ingredient costs and nutrient matrices to identify the mathematical minimum-cost solution.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "BIS Type II compounded cattle feed requires a minimum of 20% Crude Protein.",
        "a": true,
        "e": "True. BIS IS:2052 mandates minimum 20% crude protein and minimum 70% TDN for Type II cattle feed.",
        "topicId": "u2-t09",
        "diff": 2,
        "subSection": "u2-s2"
      },
      {
        "q": "According to Kleiber's Law, basal metabolic rate is directly proportional to body weight raised to the power of 0.75.",
        "a": true,
        "e": "True. BMR = 70 x W^0.75 kcal/day, defining the universal metabolic body size.",
        "topicId": "u2-t07",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "Kellner's Starch Equivalent system evaluated feeds based on body fat deposition in adult bullocks.",
        "a": true,
        "e": "True. Oskar Kellner used respiration chambers to measure fat gain per kg of feed component in fattening bullocks.",
        "topicId": "u2-t08",
        "diff": 2,
        "subSection": "u2-s2"
      },
      {
        "q": "In the Scandinavian system, one Feed Unit equals the feeding value of 1 kg of wheat straw.",
        "a": false,
        "e": "False. One Scandinavian Feed Unit is defined as the feeding value of 1.0 kg of standard barley grain.",
        "topicId": "u2-t07",
        "diff": 2,
        "subSection": "u2-s2"
      },
      {
        "q": "Modern NRC feeding standards express dairy cow energy requirements in Net Energy for Lactation (NEl).",
        "a": true,
        "e": "True. NEl directly measures the energy needed for maintenance and milk production without heat increment distortions.",
        "topicId": "u2-t08",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "Cane molasses is used in compounded cattle feed as a source of soluble sugar, flavor enhancer, and pellet binder.",
        "a": true,
        "e": "True. Molasses is routinely included at 5-7% to bind dust, improve durability, and supply readily available sucrose.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "Steaming up involves feeding high levels of straw and restricting concentrate during the last 3 weeks of pregnancy.",
        "a": false,
        "e": "False. Steaming up increases concentrate feeding before calving to prepare the cow for lactation and build reserves.",
        "topicId": "u2-t09",
        "diff": 2,
        "subSection": "u2-s2"
      },
      {
        "q": "High-moisture feeds can limit the voluntary dry matter intake of dairy cows due to physical rumen distension.",
        "a": true,
        "e": "True. Excessive dietary water creates bulky volume in the rumen, activating gut stretch receptors and restricting total dry matter consumed.",
        "topicId": "u2-t09",
        "diff": 2,
        "subSection": "u2-s2"
      }
    ],
    "fib": [
      {
        "q": "The standard duration of the preliminary adaptation period in a ruminant digestion trial is ____ days.",
        "a": [
          "10 to 14",
          "10-14",
          "10",
          "14"
        ],
        "a_display": "10 to 14 days",
        "e": "A 10-14 day preliminary period ensures total clearance of previous gut contents and stabilizes rumen fermentation.",
        "topicId": "u2-t04",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "The collection period in a standard in vivo ruminant digestion trial lasts for ____ days.",
        "a": [
          "7 to 10",
          "7-10",
          "7",
          "10"
        ],
        "a_display": "7 to 10 days",
        "e": "Collecting feces quantitatively for 7-10 days accounts for daily variation in bowel evacuation.",
        "topicId": "u2-t04",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "Apparent digestibility of protein is lower than true digestibility due to the presence of metabolic ____ nitrogen in the feces.",
        "a": [
          "fecal",
          "faecal"
        ],
        "a_display": "Fecal",
        "e": "Metabolic Fecal Nitrogen (MFN) from sloughed cells, enzymes, and bacteria inflates fecal N.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "The most widely utilized external indicator in ruminant digestibility studies is chromic ____.",
        "a": [
          "oxide",
          "sesquioxide"
        ],
        "a_display": "Oxide",
        "e": "Chromic oxide (Cr2O3) is unabsorbed, non-toxic, and passes through the digestive tract quantitatively.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "During metabolism trials, urine is collected into containers containing dilute ____ acid to prevent loss of volatile ammonia.",
        "a": [
          "sulfuric",
          "sulphuric",
          "h2so4"
        ],
        "a_display": "Sulfuric Acid",
        "e": "Sulfuric acid keeps urine pH low, fixing free ammonia into non-volatile ammonium sulfate.",
        "topicId": "u2-t04",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "A representative daily fecal aliquot of ____ percent is conventionally composited during a digestion trial.",
        "a": [
          "5 to 10",
          "5-10",
          "5",
          "10",
          "1/10 to 1/20",
          "1/10th",
          "1/20th"
        ],
        "a_display": "5 to 10%",
        "e": "Taking 5-10% of thoroughly mixed daily wet feces provides an accurate composite sample.",
        "topicId": "u2-t04",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "If an animal consumes 10 kg dry matter and excretes 3 kg dry matter in feces, the apparent dry matter digestibility is ____ percent.",
        "a": [
          "70",
          "70%"
        ],
        "a_display": "70%",
        "e": "DM Digestibility = [(10 - 3) / 10] x 100 = 70%.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "Fine grinding of roughages decreases ruminal retention time and ____ fiber digestibility.",
        "a": [
          "decreases",
          "depresses",
          "lowers",
          "reduces"
        ],
        "a_display": "Decreases",
        "e": "Smaller particles wash out through the reticulo-omasal orifice faster, reducing microbial contact time.",
        "topicId": "u2-t06",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "When nitrogen intake exceeds total nitrogen excreted in feces and urine, the animal is in ____ nitrogen balance.",
        "a": [
          "positive"
        ],
        "a_display": "Positive",
        "e": "Positive N balance indicates net tissue protein accretion during growth, pregnancy, or recovery.",
        "topicId": "u2-t03",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "The experimental slaughter method that measures body nutrient retention by sacrificing animals at day 0 and day 90 is the ____ slaughter technique.",
        "a": [
          "comparative"
        ],
        "a_display": "Comparative",
        "e": "The comparative slaughter technique determines exact body composition changes over a feeding trial.",
        "topicId": "u2-t02",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "In adult ruminants, Metabolic Fecal Nitrogen excretion averages approximately ____ grams of nitrogen per kilogram of dry matter intake.",
        "a": [
          "5",
          "4.5 to 5.0",
          "4.5-5.0",
          "5.0"
        ],
        "a_display": "5 g",
        "e": "Ruminants excrete approximately 5 g endogenous fecal N for every kg of DM ingested.",
        "topicId": "u2-t03",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "Endogenous Urinary Nitrogen excretion is directly related to the animal's ____ body size.",
        "a": [
          "metabolic"
        ],
        "a_display": "Metabolic",
        "e": "EUN excretion reflects baseline tissue protein turnover and scales with W^0.75.",
        "topicId": "u2-t03",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "Surgical placement of a permanent rubber cannula into the left flank of a steer is termed rumen ____.",
        "a": [
          "cannulation",
          "fistulation"
        ],
        "a_display": "Cannulation (Fistulation)",
        "e": "Rumen cannulation provides safe access to ruminal digesta for in situ incubation studies.",
        "topicId": "u2-t04",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "The in situ technique for assessing feed protein and dry matter degradation utilizes small porous ____ bags.",
        "a": [
          "nylon",
          "dacron"
        ],
        "a_display": "Nylon",
        "e": "Porous nylon bags (40-50 micron pore size) allow ruminal fluid exchange while retaining feed particles.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "The first stage of the Tilley and Terry in vitro digestion procedure involves 48 hours of incubation with buffered ____ liquor.",
        "a": [
          "rumen",
          "ruminal"
        ],
        "a_display": "Rumen",
        "e": "Stage 1 incubates feed with buffered ruminal fluid under anaerobic conditions at 39°C.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "The second stage of the Tilley and Terry method incubates the residue with hydrochloric acid and ____.",
        "a": [
          "pepsin"
        ],
        "a_display": "Pepsin",
        "e": "Acid-pepsin simulates abomasal digestion, digesting microbial protein and undegraded feed protein.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "Acid Insoluble Ash is determined by treating total ash with boiling dilute ____ acid.",
        "a": [
          "hydrochloric",
          "hcl"
        ],
        "a_display": "Hydrochloric (HCl)",
        "e": "Boiling ash with 3 N HCl dissolves soluble minerals, leaving silica and sand as AIA.",
        "topicId": "u2-t05",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "The muscular fold in neonatal calves that shunts milk directly from the esophagus into the abomasum is the ____ groove.",
        "a": [
          "reticular",
          "esophageal",
          "oesophageal"
        ],
        "a_display": "Reticular (Esophageal) Groove",
        "e": "The reticular groove bypasses the uninoculated rumen to prevent milk spoilage.",
        "topicId": "u2-t01",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "When feed crude protein drops below ____ percent, ruminal ammonia becomes insufficient and voluntary intake falls sharply.",
        "a": [
          "6",
          "6 to 7",
          "6-7",
          "7"
        ],
        "a_display": "6 to 7%",
        "e": "Below 6-7% CP, cellulolytic bacteria lack nitrogen, depressing fiber digestion and voluntary intake.",
        "topicId": "u2-t06",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "Feed Conversion Ratio is defined as kilograms of dry matter feed intake per kilogram of live body weight ____.",
        "a": [
          "gain",
          "increase"
        ],
        "a_display": "Gain",
        "e": "FCR = Feed Consumed / Body Weight Gain.",
        "topicId": "u2-t02",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "In the Van Soest fiber fractionation system, hemicellulose is calculated as NDF minus ____.",
        "a": [
          "adf"
        ],
        "a_display": "ADF",
        "e": "Hemicellulose = Neutral Detergent Fibre - Acid Detergent Fibre.",
        "topicId": "u2-t05",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "Rapid fermentation of starch causes ruminal pH to drop below ____, severely inhibiting cellulolytic bacteria.",
        "a": [
          "6.0",
          "6",
          "5.8"
        ],
        "a_display": "6.0",
        "e": "Cellulolytic bacteria cannot synthesize cellulase efficiently at pH below 6.0.",
        "topicId": "u2-t06",
        "diff": 2,
        "subSection": "u2-s1"
      },
      {
        "q": "Water buffaloes digest poor-quality coarse straws ____ than Bos taurus cattle.",
        "a": [
          "better",
          "higher",
          "more efficiently",
          "superiorly"
        ],
        "a_display": "Better (More efficiently)",
        "e": "Buffaloes harbor more cellulolytic bacteria and have longer rumen retention times.",
        "topicId": "u2-t06",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "In lactating animals, the nitrogen excreted in ____ must be included in the total nitrogen balance calculation.",
        "a": [
          "milk"
        ],
        "a_display": "Milk",
        "e": "Total N balance = Intake - (Fecal N + Urinary N + Milk N).",
        "topicId": "u2-t03",
        "diff": 1,
        "subSection": "u2-s1"
      },
      {
        "q": "The first feeding standard based on Hay Equivalents was formulated in 1809 by Albrecht ____.",
        "a": [
          "thaer",
          "von thaer"
        ],
        "a_display": "Thaer",
        "e": "Albrecht von Thaer compared the nutritional value of all feeds against 100 lbs of meadow hay.",
        "topicId": "u2-t07",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "The classic American feeding standard published in 'Feeds and Feeding' was authored by Frank B. ____.",
        "a": [
          "morrison"
        ],
        "a_display": "Morrison",
        "e": "F.B. Morrison compiled standard tables of TDN and DCP requirements for farm livestock.",
        "topicId": "u2-t07",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "TDN stands for Total Digestible ____.",
        "a": [
          "nutrients"
        ],
        "a_display": "Nutrients",
        "e": "Total Digestible Nutrients (TDN) measures digestible carbs, fiber, protein, and fat (x 2.25).",
        "topicId": "u2-t08",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "The British Agricultural Research Council feeding standard expresses energy requirements in ____ Energy units.",
        "a": [
          "metabolizable",
          "metabolisable",
          "me"
        ],
        "a_display": "Metabolizable Energy",
        "e": "The ARC/AFRC standards formulate ruminant diets in Megajoules (MJ) of Metabolizable Energy.",
        "topicId": "u2-t08",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "In India, national livestock feeding standards are published by the Indian Council of ____ Research.",
        "a": [
          "agricultural",
          "icar"
        ],
        "a_display": "Agricultural (ICAR)",
        "e": "ICAR publishes the authoritative nutrient standards for indigenous cattle and buffaloes.",
        "topicId": "u2-t08",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "Daily voluntary Dry Matter Intake of adult indigenous zebu cattle is typically ____ to 2.5 kg per 100 kg body weight.",
        "a": [
          "2.0",
          "2",
          "2.0-2.5",
          "2 to 2.5"
        ],
        "a_display": "2.0",
        "e": "Zebu cattle voluntarily consume 2.0 to 2.5% of body weight in DM daily for maintenance.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "In traditional Indian ration balancing, approximately ____-thirds of total dry matter is supplied through roughages.",
        "a": [
          "two",
          "2/3",
          "two-thirds"
        ],
        "a_display": "Two-thirds",
        "e": "Allocating 2/3rd DM from roughages and 1/3rd from concentrates ensures ruminal health.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "Commercial compounded cattle feeds in India are mandated to include ____ percent common salt (NaCl).",
        "a": [
          "1",
          "1.0",
          "1%"
        ],
        "a_display": "1.0%",
        "e": "BIS specifications mandate 1.0% common salt in compounded cattle feeds.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "Area-specific mineral mixture is conventionally included at ____ percent in dairy cattle concentrate mixtures.",
        "a": [
          "2",
          "2.0",
          "2%"
        ],
        "a_display": "2.0%",
        "e": "A 2% mineral mixture inclusion provides essential macro and trace elements.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "The simple geometric calculation method used to balance two feed ingredients for a single nutrient is ____ Square.",
        "a": [
          "pearson",
          "pearson's",
          "pearsons"
        ],
        "a_display": "Pearson's Square",
        "e": "Pearson's Square calculates proportions of two feeds needed to achieve a target nutrient level.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "The mathematical optimization technique used by computer software to formulate least-cost feed rations is ____ programming.",
        "a": [
          "linear"
        ],
        "a_display": "Linear",
        "e": "Linear Programming (LP) solves simultaneous linear equations to minimize cost subject to nutrient constraints.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "BIS Type II commercial compounded cattle feed must have a minimum Crude Protein content of ____ percent.",
        "a": [
          "20",
          "20%"
        ],
        "a_display": "20%",
        "e": "BIS IS:2052 specifies minimum 20% CP and 70% TDN for Type II cattle feed.",
        "topicId": "u2-t09",
        "diff": 2,
        "subSection": "u2-s2"
      },
      {
        "q": "According to Kleiber's Law, metabolic body size is calculated as body weight in kg raised to the power of ____.",
        "a": [
          "0.75",
          "3/4"
        ],
        "a_display": "0.75",
        "e": "Metabolic body weight = W^0.75, which normalizes basal metabolic rate across species.",
        "topicId": "u2-t07",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "The German scientist who formulated the Starch Equivalent system using adult fattening bullocks was Oskar ____.",
        "a": [
          "kellner"
        ],
        "a_display": "Kellner",
        "e": "Oskar Kellner defined 1 kg Starch Equivalent as producing 248 g of body fat in bullocks.",
        "topicId": "u2-t08",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "In the Scandinavian feeding system, one Feed Unit equals the feeding value of 1 kg of ____ grain.",
        "a": [
          "barley"
        ],
        "a_display": "Barley",
        "e": "Barley is the reference grain in the Scandinavian feed unit system.",
        "topicId": "u2-t07",
        "diff": 2,
        "subSection": "u2-s2"
      },
      {
        "q": "The NRC 2001 dairy cattle feeding standard expresses energy requirements in Net Energy for ____ (NEl).",
        "a": [
          "lactation"
        ],
        "a_display": "Lactation",
        "e": "NEl expresses energy for both maintenance and milk synthesis on a common scale.",
        "topicId": "u2-t08",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "Cane ____ is added at 5 to 7% in concentrate feeds to reduce dustiness and bind pellets.",
        "a": [
          "molasses"
        ],
        "a_display": "Molasses",
        "e": "Molasses improves palatability, provides sugars, and strengthens feed pellets.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "Gradually increasing concentrate feeding 2 to 3 weeks prior to calving is known as ____ up.",
        "a": [
          "steaming"
        ],
        "a_display": "Steaming",
        "e": "Steaming up prepares rumen papillae and builds energy reserves before calving.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "A 400 kg adult zebu bullock requiring 2% of body weight in dry matter needs ____ kg of dry matter daily.",
        "a": [
          "8",
          "8.0",
          "8 kg"
        ],
        "a_display": "8 kg",
        "e": "400 kg x 0.02 = 8.0 kg DM daily.",
        "topicId": "u2-t09",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "DCP stands for Digestible ____ Protein.",
        "a": [
          "crude"
        ],
        "a_display": "Crude",
        "e": "Digestible Crude Protein (DCP) = Crude Protein x Protein Digestibility Coefficient.",
        "topicId": "u2-t08",
        "diff": 1,
        "subSection": "u2-s2"
      },
      {
        "q": "Excessively high moisture in succulent green fodders can limit intake due to physical gut ____.",
        "a": [
          "fill",
          "distension"
        ],
        "a_display": "Fill",
        "e": "High-moisture bulky forages distend the rumen, signaling satiety prematurely.",
        "topicId": "u2-t09",
        "diff": 2,
        "subSection": "u2-s2"
      }
    ]
  },
  "unit-3": {
    "mcq": [
      {
        "q": "What is the Gaines formula for calculating 4% Fat Corrected Milk (4% FCM) in dairy cattle?",
        "o": [
          "0.5 x Milk (kg) + 10 x Fat (kg)",
          "0.15 x Milk (kg) + 0.4 x Fat (kg)",
          "0.4 x Milk (kg) + 15 x Fat (kg)",
          "Milk (kg) x Fat % x 0.04"
        ],
        "a": 2,
        "e": "Gaines formula: 4% FCM = 0.4 x M + 15 x F (where M is milk yield in kg and F is total fat yield in kg = M x Fat%/100).",
        "topicId": "u3-t04",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "A crossbred cow yields 20 kg of milk containing 4.5% butterfat. What is its 4% Fat Corrected Milk yield?",
        "o": [
          "20.0 kg",
          "21.5 kg",
          "24.0 kg",
          "18.5 kg"
        ],
        "a": 1,
        "e": "Fat (kg) = 20 x 0.045 = 0.90 kg. 4% FCM = (0.4 x 20) + (15 x 0.90) = 8.0 + 13.5 = 21.5 kg.",
        "topicId": "u3-t04",
        "diff": 2,
        "subSection": "u3-s1"
      },
      {
        "q": "How does the nutrient requirement per kilogram of milk compare between an indigenous Murrah buffalo (7.0% fat) and a crossbred cow (4.0% fat)?",
        "o": [
          "Buffalo requires ~20-25% more TDN and DCP per kg of milk due to higher solids and fat density",
          "Buffalo requires less energy per kg milk",
          "Requirements per kg of milk are identical regardless of fat percentage",
          "Buffalo requires zero protein for milk synthesis"
        ],
        "a": 0,
        "e": "Buffalo milk contains 7-8% fat and ~4% protein, requiring approximately 0.42-0.45 kg TDN and 60-65 g DCP per kg milk versus 0.32 kg TDN and 45-50 g DCP in cattle.",
        "topicId": "u3-t04",
        "diff": 2,
        "subSection": "u3-s1"
      },
      {
        "q": "What is the recommended rule of thumb for concentrate feeding in lactating indigenous dairy cattle producing 4.0% fat milk under Indian conditions?",
        "o": [
          "1 kg concentrate for every 1.0 kg of milk produced",
          "1 kg concentrate for every 10 kg of milk produced",
          "1 kg concentrate mixture for every 2.5 to 3.0 kg of milk produced",
          "Concentrates are not fed during lactation"
        ],
        "a": 2,
        "e": "Under Indian feeding standards, cows receive maintenance feed plus 1 kg concentrate for every 2.5 to 3.0 kg milk (cows) or 1 kg per 2.0 to 2.5 kg milk (buffaloes).",
        "topicId": "u3-t04",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "Within how many hours of birth must a newborn calf receive its first feeding of maternal colostrum to ensure maximal passive immunoglobulin transfer?",
        "o": [
          "After 24 to 48 hours",
          "Only on the third day after birth",
          "After the rumen has developed",
          "Within the first 2 hours (and definitely within 6 hours)"
        ],
        "a": 3,
        "e": "Intestinal enterocytes absorb intact immunoglobulins (IgG, IgA, IgM) via pinocytosis only during the first hours; gut closure is virtually complete by 24 hours.",
        "topicId": "u3-t08",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "What is the total quantity of colostrum that should be fed to a newborn dairy calf on its first day of life?",
        "o": [
          "25% of body weight in a single feeding",
          "1% of body weight",
          "A uniform 1 liter regardless of weight",
          "10% of body weight (split into 2 to 3 feedings)"
        ],
        "a": 3,
        "e": "A 30-kg calf should receive 10% of its body weight (3.0 kg or liters) of clean, warm colostrum within the first 24 hours (half within the first 2-4 hours).",
        "topicId": "u3-t08",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "Why does maternal bovine colostrum contain high concentrations of a specific trypsin inhibitor?",
        "o": [
          "To inhibit microbial curd formation",
          "To prevent proteolytic destruction of immunoglobulins by neonatal abomasal and pancreatic proteases",
          "To cause diarrhea and purge meconium",
          "To stimulate gastric acid production"
        ],
        "a": 1,
        "e": "Colostral trypsin inhibitor protects maternal IgG antibodies from enzymatic cleavage, enabling them to be absorbed intact across neonatal enterocytes.",
        "topicId": "u3-t08",
        "diff": 2,
        "subSection": "u3-s1"
      },
      {
        "q": "The primary chemical stimulus that drives the anatomical and metabolic development of ruminal mucosal papillae in young calves is:",
        "o": [
          "Lactose absorbed from whole milk",
          "Butyrate and propionate from anaerobic fermentation of calf starter grains",
          "Coarse unground paddy straw fiber",
          "Water consumed from buckets"
        ],
        "a": 1,
        "e": "Volatile fatty acids, especially butyrate and propionate from fermentable grains in calf starter, provide oxidative fuel and stimulate mitotic mucosal growth.",
        "topicId": "u3-t08",
        "diff": 2,
        "subSection": "u3-s1"
      },
      {
        "q": "What are the recommended specifications for a high-quality Calf Starter concentrate fed from 2 weeks of age?",
        "o": [
          "20 to 22% Crude Protein and 75 to 80% TDN",
          "10% Crude Protein and 50% TDN",
          "35% Crude Protein and 60% TDN",
          "14% Crude Protein and 90% TDN"
        ],
        "a": 0,
        "e": "Calf starter must be nutrient-dense, highly palatable, and easily digestible, containing 20-22% CP and 75-80% TDN to stimulate early rumen development.",
        "topicId": "u3-t08",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "Calves can be safely weaned off liquid whole milk or milk replacer when their daily calf starter intake reaches:",
        "o": [
          "100 g per day",
          "3.0 kg per day",
          "Starter intake is irrelevant for weaning",
          "750 g to 1.0 kg per day for three consecutive days"
        ],
        "a": 3,
        "e": "Consistently consuming 750 g to 1.0 kg of dry calf starter daily confirms that the calf's rumen is functionally developed to sustain growth without milk.",
        "topicId": "u3-t08",
        "diff": 2,
        "subSection": "u3-s1"
      },
      {
        "q": "What is the target Average Daily Gain (ADG) for growing crossbred dairy heifers to achieve puberty and first calving by 24 to 30 months of age?",
        "o": [
          "100 to 150 g/day",
          "1.2 to 1.5 kg/day",
          "500 to 600 g/day",
          "50 g/day"
        ],
        "a": 2,
        "e": "An ADG of 550-600 g/day ensures heifers reach the breeding weight of 250-280 kg by 15-18 months without fatty infiltration of the mammary parenchyma.",
        "topicId": "u3-t09",
        "diff": 2,
        "subSection": "u3-s1"
      },
      {
        "q": "What metabolic hazard occurs if growing dairy heifers are overfed high-energy concentrate diets resulting in ADG > 800-900 g/day prior to puberty?",
        "o": [
          "Rupture of the abomasum",
          "Permanent cessation of estrous cycles",
          "Immediate milk fever",
          "Excessive fat deposition in the mammary secretory parenchyma, permanently reducing lifetime milk yield"
        ],
        "a": 3,
        "e": "Rapid pre-pubertal weight gain causes extensive adiposity within the mammary gland, replacing milk-secretory epithelial ductal tissue with adipose tissue.",
        "topicId": "u3-t09",
        "diff": 2,
        "subSection": "u3-s1"
      },
      {
        "q": "During which phase of pregnancy does fetal nutrient demand increase dramatically, requiring an extra pregnancy allowance of concentrate in cows?",
        "o": [
          "First 30 days after conception",
          "Second trimester (months 3 to 5)",
          "Last 2 to 2.5 months (last trimester) of gestation",
          "Energy requirements remain unchanged throughout gestation"
        ],
        "a": 2,
        "e": "Approximately 60-70% of fetal growth occurs in the final 60 days of gestation; cows require an extra 1.0 to 1.5 kg concentrate above maintenance.",
        "topicId": "u3-t03",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "The 'Transition Period' in dairy cattle nutrition is critically defined as:",
        "o": [
          "3 weeks before calving to 3 weeks after calving",
          "The day of calving only",
          "From weaning until 6 months of age",
          "The dry period of 60 days"
        ],
        "a": 0,
        "e": "The transition period (21 days pre-calving to 21 days post-calving) is the highest-risk metabolic window characterized by endocrine shifts, immune depression, and NEB.",
        "topicId": "u3-t10",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "Negative Energy Balance (NEB) in early lactating high-yielding dairy cows occurs primarily because:",
        "o": [
          "Peak milk production is reached at 4 to 6 weeks, while peak dry matter intake lags behind until 8 to 10 weeks postpartum",
          "The cow refuses to drink water",
          "Concentrate feeds are toxic to fresh cows",
          "Ruminal digestion ceases after parturition"
        ],
        "a": 0,
        "e": "Milk energy output surges rapidly while physical dry matter intake capacity recovers slowly, forcing massive mobilization of non-esterified fatty acids from adipose tissue.",
        "topicId": "u3-t10",
        "diff": 2,
        "subSection": "u3-s1"
      },
      {
        "q": "What is the recommended ideal Body Condition Score (BCS on a 1 to 5 scale) for dairy cows at the time of calving?",
        "o": [
          "1.50 to 2.00 (Thin)",
          "4.50 to 5.00 (Obese)",
          "1.00 (Emaciated)",
          "3.25 to 3.50"
        ],
        "a": 3,
        "e": "A calving BCS of 3.25-3.5 provides adequate body reserves to buffer early lactation NEB without predisposing the cow to fatty liver, ketosis, or dystocia.",
        "topicId": "u3-t10",
        "diff": 2,
        "subSection": "u3-s1"
      },
      {
        "q": "What is the standard recommended length of the dry period for high-yielding dairy cattle?",
        "o": [
          "10 days",
          "60 days (8 weeks)",
          "180 days",
          "0 days (continuous milking)"
        ],
        "a": 1,
        "e": "A 60-day dry period allows complete mammary epithelial involution and regeneration, replenishes liver glycogen and skeletal calcium, and optimizes next lactation yield.",
        "topicId": "u3-t10",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "In high-yielding dairy management, 'Challenge Feeding' (Lead Feeding) involves:",
        "o": [
          "Gradually increasing concentrate allowance starting 2 weeks before calving until the cow reaches peak lactation yield",
          "Feeding cows once every 48 hours to challenge their endurance",
          "Challenging cows with high concentrations of dietary urea",
          "Restricting water intake to test renal concentration"
        ],
        "a": 0,
        "e": "Starting 2 weeks pre-partum, concentrate is stepped up by 0.5 kg/day to adapt the rumen and challenge the cow to express her full genetic milk production potential.",
        "topicId": "u3-t14",
        "diff": 2,
        "subSection": "u3-s1"
      },
      {
        "q": "What is a Total Mixed Ration (TMR) in modern dairy cattle feeding?",
        "o": [
          "Feeding roughage in the morning and concentrate at night",
          "A homogeneous blend of all forages, concentrates, minerals, and vitamins thoroughly mixed to prevent selective sorting",
          "Feeding whole grain kernels directly in the milking parlour",
          "A liquid slurry of molasses and urea"
        ],
        "a": 1,
        "e": "TMR ensures that every mouthful contains a balanced proportion of roughage and concentrate, maintaining steady ruminal pH and preventing slug-feeding.",
        "topicId": "u3-t14",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "What is the recommended inclusion rate of sodium bicarbonate (NaHCO3) buffer in the total dry matter intake of high-yielding dairy cows fed high-concentrate rations?",
        "o": [
          "0.75 to 1.0% of total diet DM",
          "5.0% of diet DM",
          "0.01% of diet DM",
          "10.0% of diet DM"
        ],
        "a": 0,
        "e": "Adding 0.75-1.0% sodium bicarbonate (or 150-250 g/day) buffers ruminal fluid, prevents SARA, and promotes acetate production for milk fat synthesis.",
        "topicId": "u3-t14",
        "diff": 2,
        "subSection": "u3-s1"
      },
      {
        "q": "For every 1 kg increase in 4% FCM yield in dairy cows, how much additional drinking water is typically consumed?",
        "o": [
          "0.5 liters",
          "3.0 to 4.0 liters",
          "15.0 liters",
          "Zero extra water"
        ],
        "a": 1,
        "e": "Because milk contains 87% water and metabolic expenditure increases, cows drink 3 to 4 liters of water for each additional kilogram of milk produced.",
        "topicId": "u3-t04",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "The primary source of energy utilized for muscular work in draft bullocks during normal field plowing is:",
        "o": [
          "Solely blood lactic acid",
          "Pure dietary protein",
          "Volatile fatty acids (acetate) and long-chain fatty acids",
          "Creatine phosphate only"
        ],
        "a": 2,
        "e": "Aerobic muscular contraction in draft bullocks utilizes circulating acetate and mobilized fatty acids as the primary oxidative substrates.",
        "topicId": "u3-t06",
        "diff": 2,
        "subSection": "u3-s1"
      },
      {
        "q": "How does normal draft work (4 to 6 hours of light to medium plowing) affect the maintenance energy requirement of working bullocks?",
        "o": [
          "Increases energy requirement by 500%",
          "Does not change energy requirements",
          "Increases energy requirement by 30 to 50% over baseline maintenance",
          "Halves the energy requirement"
        ],
        "a": 2,
        "e": "Four to six hours of draft work increases energy needs by 30-50% over maintenance, supplied by an extra 1.5 to 2.0 kg of concentrate mixture.",
        "topicId": "u3-t06",
        "diff": 2,
        "subSection": "u3-s1"
      },
      {
        "q": "Do working draft bullocks require substantial increases in dietary Crude Protein percentage above maintenance during normal work?",
        "o": [
          "Yes, their diet must contain 40% crude protein",
          "Yes, protein must replace all roughage",
          "No, protein intake should be reduced to zero",
          "No, work increases energy (TDN) demand substantially, but protein requirements increase only marginally for minor muscle tissue repair"
        ],
        "a": 3,
        "e": "Muscular work does not consume muscle protein as fuel if energy is adequate; only small allowances are needed to repair incidental cellular wear-and-tear.",
        "topicId": "u3-t06",
        "diff": 2,
        "subSection": "u3-s1"
      },
      {
        "q": "Adult breeding bulls during active semen collection seasons require an extra allowance of concentrate primarily to:",
        "o": [
          "Maintain optimal body condition, libido, and support active spermatogenesis without inducing obesity",
          "Increase body fat to maximum possible thickness",
          "Induce ruminal ketosis",
          "Eliminate sperm motility"
        ],
        "a": 0,
        "e": "Breeding bulls should be fed maintenance plus 1.0 to 1.5 kg concentrate, avoiding obesity which causes lethargy, leg weakness, and declining semen quality.",
        "topicId": "u3-t11",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "Which fat-soluble vitamin and trace mineral are especially critical for maintaining testicular germinal epithelium and semen quality in breeding bulls?",
        "o": [
          "Vitamin K and Iron",
          "Vitamin A and Zinc",
          "Vitamin D and Fluorine",
          "Vitamin C and Molybdenum"
        ],
        "a": 1,
        "e": "Vitamin A is essential for spermatogenesis, while zinc is required for steroidogenesis, sperm membrane integrity, and semen motility.",
        "topicId": "u3-t11",
        "diff": 2,
        "subSection": "u3-s1"
      },
      {
        "q": "What is the recommended Dry Matter Intake for an adult dairy cow fed according to ICAR feeding standards?",
        "o": [
          "5.0 kg DM/100 kg BW",
          "1.0 kg DM/100 kg BW",
          "2.0 to 2.5 kg DM/100 kg BW for zebu, and 2.5 to 3.0 kg DM/100 kg BW for crossbred cows",
          "7.0 kg DM/100 kg BW"
        ],
        "a": 2,
        "e": "Zebu cows consume 2.0-2.5% BW, while crossbreds consume 2.5-3.0% (and up to 3.5% in high peak lactation).",
        "topicId": "u3-t01",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "Why is milk fat depression (MFD) in dairy cows frequently accompanied by an increase in body weight gain or fattening?",
        "o": [
          "The cow stops producing milk lactose",
          "Excessive fat is lost in feces",
          "High propionate stimulates insulin, driving circulating acetate and glucose into adipose tissue rather than the mammary gland",
          "Blood cortisol levels drop to zero"
        ],
        "a": 2,
        "e": "Elevated propionate stimulates systemic insulin release, which partitions acetate and fatty acids into subcutaneous adipose storage instead of milk fat.",
        "topicId": "u3-t14",
        "diff": 3,
        "subSection": "u3-s1"
      },
      {
        "q": "In dairy nutrition, physically effective NDF (peNDF) is measured in the field using which diagnostic tool?",
        "o": [
          "Penn State Particle Size Separator (PSPS)",
          "Soxhlet ether extraction mantle",
          "Kjeldahl digestion flask",
          "Bomb calorimeter"
        ],
        "a": 0,
        "e": "The Penn State Particle Separator uses 19 mm, 8 mm, and 4 mm sieves and a bottom pan to quantify the proportion of forage particles that stimulate cud chewing.",
        "topicId": "u3-t14",
        "diff": 2,
        "subSection": "u3-s1"
      },
      {
        "q": "To prevent milk fat depression in cows on high-concentrate rations, what minimum proportion of the diet dry matter should consist of long coarse forage?",
        "o": [
          "Less than 10%",
          "95%",
          "At least 40 to 50% of diet DM",
          "0%"
        ],
        "a": 2,
        "e": "Maintaining at least 40-50% roughage on a dry matter basis ensures a stable ruminal mat and maintains ruminal acetate:propionate ratio above 2.2:1.",
        "topicId": "u3-t14",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "What is the calcium and phosphorus content of normal cow colostrum compared to mature cow milk?",
        "o": [
          "Colostrum contains zero Ca and P",
          "Colostrum contains 10 times less Ca than milk",
          "Colostrum contains roughly 2 to 3 times more Ca and P than mature milk",
          "Colostrum contains pure iron and no calcium"
        ],
        "a": 2,
        "e": "Colostrum contains ~2.6 g Ca and ~2.4 g P per liter compared to ~1.2 g Ca and ~0.9 g P per liter in normal mature milk.",
        "topicId": "u3-t08",
        "diff": 2,
        "subSection": "u3-s1"
      },
      {
        "q": "When early weaning of calves is practiced at 8 to 12 weeks of age, the feeding program relies primarily on:",
        "o": [
          "Feeding wheat straw only",
          "Ad libitum access to high-protein calf starter, clean water, and small quantities of fine leafy legume hay",
          "Feeding large volumes of skim milk until 6 months",
          "Feeding urea-molasses blocks"
        ],
        "a": 1,
        "e": "Early weaning relies on stimulating rapid ruminal papillae development via ad libitum calf starter grain intake from 2 weeks of age onwards.",
        "topicId": "u3-t08",
        "diff": 2,
        "subSection": "u3-s1"
      },
      {
        "q": "What is the average Dry Matter content of fresh colostrum on the first day postpartum in dairy cows?",
        "o": [
          "12 to 13%",
          "5%",
          "24 to 27%",
          "50%"
        ],
        "a": 2,
        "e": "First-milking colostrum is highly concentrated, containing 24-27% total solids (largely immunoglobulins and caseins) compared to 12.5% in mature milk.",
        "topicId": "u3-t08",
        "diff": 2,
        "subSection": "u3-s1"
      },
      {
        "q": "Which dietary management practice minimizes the severity of negative energy balance in fresh high-producing dairy cows?",
        "o": [
          "Feeding low-quality paddy straw ad libitum",
          "Increasing energy density using bypass fat and high-quality digestible forage without overloading with rapidly fermentable starch",
          "Starving the cow for 3 days postpartum",
          "Restricting drinking water"
        ],
        "a": 1,
        "e": "Feeding rumen-inert bypass fat (calcium soaps) elevates caloric density without causing rumen acidosis or depressing cellulolytic digestion.",
        "topicId": "u3-t14",
        "diff": 2,
        "subSection": "u3-s1"
      },
      {
        "q": "What is the nutritional practice of 'Flushing' in breeding ewes and does?",
        "o": [
          "Flushing the uterus with warm saline",
          "Washing the digestive tract with mineral oil",
          "Increasing energy and protein intake 2 to 3 weeks prior to mating to elevate ovulation rate and twinning frequency",
          "Restricting feed to induce estrus"
        ],
        "a": 2,
        "e": "Feeding an extra 250-400 g of cereal grains 2-3 weeks before breeding improves body condition and increases ovulation rate by 10 to 20%.",
        "topicId": "u3-t12",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "Why is Pregnancy Toxaemia (Twin Lamb Disease) most prevalent in ewes carrying twin or triplet fetuses during the last 4 weeks of gestation?",
        "o": [
          "Multiple fetuses exert huge glucose demands while their physical volume compresses the rumen, restricting dry matter intake",
          "Fetal lambs secrete toxic ketones into maternal blood",
          "Ewes stop drinking water during twins",
          "Ewes cannot digest dietary proteins"
        ],
        "a": 0,
        "e": "Twin fetuses demand up to 40% of maternal glucose; expanding uteruses compress the rumen, leading to severe hypoglycemic ketosis and hepatic lipidosis.",
        "topicId": "u3-t12",
        "diff": 2,
        "subSection": "u3-s2"
      },
      {
        "q": "What is the voluntary daily Dry Matter Intake capacity of adult domestic goats (Capra hircus) expressed as a percentage of body weight?",
        "o": [
          "1.0% of body weight",
          "7.0 to 8.0% of body weight",
          "3.0 to 4.0% of body weight (and up to 5% in high milkers)",
          "Identical to large cattle at 1.5%"
        ],
        "a": 2,
        "e": "Goats have a higher metabolic rate per unit body mass and consume 3 to 4% (up to 5% in lactating Jamunapari/Beetal) of their body weight in dry matter daily.",
        "topicId": "u3-t13",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "How does the anatomical feeding behavior of goats differ distinctively from that of sheep and cattle?",
        "o": [
          "Goats graze uniformly close to the ground like sheep",
          "Goats are natural browsers with prehensile, mobile lips and bipedal stance, preferentially consuming tree leaves and shrubs",
          "Goats cannot digest green leaves",
          "Goats swallow unchewed whole fodder without chewing cud"
        ],
        "a": 1,
        "e": "Goats exhibit agile bipedal browsing behavior, selecting protein-rich top foliage, twigs, and bark using their flexible, sensitive prehensile upper lip.",
        "topicId": "u3-t13",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "Why can goats tolerate higher dietary concentrations of plant tannins in browse foliage compared to sheep and cattle?",
        "o": [
          "Caprine saliva contains abundant proline-rich proteins that bind and neutralize tannins",
          "Goats possess a specialized tannin-destroying gallbladder",
          "Goat rumen contains zero anaerobic bacteria",
          "Tannins are digested as pure carbohydrates in goats"
        ],
        "a": 0,
        "e": "Goat parotid saliva is rich in proline-rich proteins that have an affinity for polyphenols, forming stable complexes that spare dietary protein from binding.",
        "topicId": "u3-t13",
        "diff": 2,
        "subSection": "u3-s2"
      },
      {
        "q": "What is 'Creep Feeding' in young lambs and kids?",
        "o": [
          "Feeding animals during the dark hours of the night",
          "Feeding lambs while they are creeping on the floor",
          "Force-feeding liquid milk replacer via a stomach tube",
          "Providing a palatable, nutrient-dense concentrate in an enclosure accessible only to suckling young and excluding adult dams"
        ],
        "a": 3,
        "e": "A creep gate allows small lambs to enter a private pen to consume high-protein starter feed, accelerating pre-weaning ADG and easing weaning stress.",
        "topicId": "u3-t12",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "Wool fibers are composed almost entirely of which structural sulfur-rich protein?",
        "o": [
          "Collagen",
          "Elastin",
          "Keratin",
          "Fibroin"
        ],
        "a": 2,
        "e": "Wool is pure keratin containing 3 to 4% sulfur, largely in the form of the sulfur-containing amino acid cystine.",
        "topicId": "u3-t05",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "Which dietary amino acids are most critical for wool growth, follicle development, and fleece yield in sheep?",
        "o": [
          "Methionine and Cysteine",
          "Glycine and Alanine",
          "Lysine and Tryptophan",
          "Phenylalanine and Tyrosine"
        ],
        "a": 0,
        "e": "Methionine provides sulfur and methyl groups; cystine forms disulfide bridges that give wool fiber its elasticity, tensile strength, and crimp.",
        "topicId": "u3-t05",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "A deficiency of which trace mineral in sheep impairs keratin cross-linking, producing un-crimped, straight, lusterless 'Steely' or 'Stringy' wool?",
        "o": [
          "Manganese",
          "Copper",
          "Iodine",
          "Cobalt"
        ],
        "a": 1,
        "e": "Copper is the cofactor for thiol oxidase, which converts cysteine sulfhydryl (-SH) groups into cystine disulfide (-S-S-) crosslinks responsible for crimp.",
        "topicId": "u3-t05",
        "diff": 2,
        "subSection": "u3-s2"
      },
      {
        "q": "Why are sheep extraordinarily susceptible to chronic Copper Toxicity compared to cattle?",
        "o": [
          "Sheep do not have a spleen",
          "Sheep lack erythrocytes",
          "Copper binds irreversible to ovine insulin",
          "Ovine hepatocytes accumulate copper avidly and release it slowly into bile, causing sudden massive hemolytic crisis"
        ],
        "a": 3,
        "e": "Sheep store excess Cu in liver cells; upon stress, copper floods circulation, causing acute intravascular hemolysis, hemoglobinuria, jaundice, and 'gunmetal' kidneys.",
        "topicId": "u3-t12",
        "diff": 2,
        "subSection": "u3-s2"
      },
      {
        "q": "What is the maximum safe dietary tolerance level of Copper in sheep diets?",
        "o": [
          "10 to 15 ppm (mg/kg DM)",
          "100 ppm",
          "250 ppm",
          "500 ppm"
        ],
        "a": 0,
        "e": "Dietary copper exceeding 15-20 ppm can cause fatal chronic copper poisoning in sheep, especially when molybdenum and sulfur levels are low.",
        "topicId": "u3-t12",
        "diff": 2,
        "subSection": "u3-s2"
      },
      {
        "q": "Which dietary ratio of Calcium to Phosphorus (Ca:P) must be maintained in feedlot rams and wethers to prevent obstructive urolithiasis (water belly)?",
        "o": [
          "At least 2 : 1 (or 2.5 : 1)",
          "1 : 2 (High Phosphorus)",
          "1 : 1",
          "0.5 : 1"
        ],
        "a": 0,
        "e": "High-concentrate grain diets contain excess P and low Ca, promoting struvite (magnesium ammonium phosphate) calculus formation; a 2:1 Ca:P ratio prevents calculi.",
        "topicId": "u3-t12",
        "diff": 2,
        "subSection": "u3-s2"
      },
      {
        "q": "Which chemical urinary acidifier is routinely supplemented at 0.5% in the diet of male sheep and goats to prevent struvite urinary calculi?",
        "o": [
          "Sodium bicarbonate",
          "Calcium hydroxide",
          "Ammonium chloride (NH4Cl)",
          "Potassium carbonate"
        ],
        "a": 2,
        "e": "Ammonium chloride acidifies urine (pH < 6.5), increasing the solubility of magnesium ammonium phosphate crystals and preventing urethral blockage.",
        "topicId": "u3-t12",
        "diff": 2,
        "subSection": "u3-s2"
      },
      {
        "q": "Enterotoxemia (Pulpy Kidney Disease) in rapidly growing feedlot lambs is provoked by which nutritional circumstance?",
        "o": [
          "Chronic starvation on dry straw",
          "Deficiency of dietary cobalt",
          "Over-consumption of common salt",
          "Sudden engorgement with high-starch concentrate feeds causing proliferation of Clostridium perfringens Type D"
        ],
        "a": 3,
        "e": "Excess starch escaping ruminal fermentation reaches the small intestine, triggering explosive multiplication of Clostridium perfringens Type D and epsilon toxin release.",
        "topicId": "u3-t12",
        "diff": 2,
        "subSection": "u3-s2"
      },
      {
        "q": "What is the primary roughage feeding strategy for goats in intensive stall-fed (zero-grazing) systems in India?",
        "o": [
          "Spreading crushed grains flat on the wet ground",
          "Feeding whole uncut paddy straw exclusively",
          "Providing cut cultivated fodder and tree loppings (Subabul, Neem, Ardu, Mulberry) hanging in racks to satisfy browsing instincts",
          "Allowing goats to graze in flooded paddy fields"
        ],
        "a": 2,
        "e": "Hanging tree loppings in elevated racks mimics bipedal browsing behavior, reduces feed wastage and fecal contamination, and satisfies caprine feeding instincts.",
        "topicId": "u3-t13",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "The daily concentrate supplement recommended for an indigenous draft bullock performing 4 hours of normal field work is approximately:",
        "o": [
          "10 kg concentrate",
          "1.5 to 2.0 kg concentrate above maintenance",
          "0 kg (straw only)",
          "6.0 kg concentrate"
        ],
        "a": 1,
        "e": "Normal field work requires roughly 1.5-2.0 kg concentrate mixture (containing ~20% CP and 70% TDN) added to the baseline roughage maintenance ration.",
        "topicId": "u3-t06",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "For draft animals working in hot tropical Indian summers, which dietary supplement is mandatory to compensate for heavy cutaneous sweat losses?",
        "o": [
          "Urea at 500 g daily",
          "Sulfur powder at 200 g daily",
          "Bile salts",
          "Common Salt (NaCl) at 50 to 100 g daily"
        ],
        "a": 3,
        "e": "Working cattle sweat profusely to dissipate metabolic heat, losing significant sodium and chloride which must be replaced via daily salt supplementation.",
        "topicId": "u3-t06",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "In sheep, what is the impact of severe energy undernutrition during the middle third of gestation (days 50 to 100)?",
        "o": [
          "Instant death of the dam",
          "Retarded placental development and restricted secondary wool follicle initiation in the fetus",
          "Immediate onset of milk fever",
          "Excessive wool growth in the ewe"
        ],
        "a": 1,
        "e": "Placental growth peaks between days 50-90; undernutrition restricts cotyledonary development and permanently impairs secondary wool follicle formation in the lamb.",
        "topicId": "u3-t12",
        "diff": 3,
        "subSection": "u3-s2"
      },
      {
        "q": "What is the typical birth weight of an indigenous Marwari or Muzaffarnagri lamb in India?",
        "o": [
          "0.5 kg",
          "8.0 to 10.0 kg",
          "15.0 kg",
          "2.5 to 3.5 kg"
        ],
        "a": 3,
        "e": "Normal birth weights for indigenous Indian sheep breeds range from 2.5 to 3.5 kg, depending on breed, maternal nutrition, and litter size.",
        "topicId": "u3-t12",
        "diff": 2,
        "subSection": "u3-s2"
      },
      {
        "q": "Goats fed high-fiber diets show superior retention of nitrogen compared to cattle primarily because:",
        "o": [
          "They possess two extra digestive stomachs",
          "They excrete zero nitrogen in urine",
          "Their liver does not synthesize urea",
          "They recycle higher proportions of blood urea into saliva and directly across the rumen wall"
        ],
        "a": 3,
        "e": "Goats possess highly efficient renal urea conservation mechanisms and recycle copious urea to the rumen via saliva, optimizing low-protein browse utilization.",
        "topicId": "u3-t13",
        "diff": 2,
        "subSection": "u3-s2"
      },
      {
        "q": "What is the average milk fat percentage in Jamunapari and Beetal dairy goat milk under good nutritional management?",
        "o": [
          "10.0%",
          "1.5%",
          "4.0 to 4.5%",
          "8.0%"
        ],
        "a": 2,
        "e": "Indian dairy goat breeds yield milk with an average of 4.0 to 4.5% fat, characterized by smaller fat globules that make it easily digestible.",
        "topicId": "u3-t13",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "Why should high-producing dairy goats be fed their concentrate mixture in two divided meals rather than a single large meal?",
        "o": [
          "Because goats cannot swallow more than 100 g of feed at once",
          "To induce ruminal bloat",
          "To ensure milk fat drops to zero",
          "To prevent acute ruminal acidosis and maintain stable cellulolytic fermentation"
        ],
        "a": 3,
        "e": "Dividing concentrate into morning and evening feedings prevents postprandial ruminal pH crashes and supports steady ruminal fermentation.",
        "topicId": "u3-t13",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "What is the normal water consumption of an adult sheep grazing dry rangelands under ambient temperatures of 30 to 35°C?",
        "o": [
          "15 to 20 liters per day",
          "0.2 liters per day",
          "3 to 5 liters per day",
          "30 liters per day"
        ],
        "a": 2,
        "e": "Adult sheep consume approximately 3 to 5 liters of water daily under warm conditions, increasing to 6-8 liters during late lactation.",
        "topicId": "u3-t12",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "In fattening lambs, what is the primary objective of a 10-day step-up adaptation period when switching from grazing to a feedlot finishing ration?",
        "o": [
          "To induce rapid diarrhea to eliminate parasites",
          "Gradual transition from high roughage to high grain to prevent acute lactic acidosis and enterotoxemia",
          "To allow wool shearing before feeding",
          "To reduce body weight"
        ],
        "a": 1,
        "e": "Step-up feeding allows ruminal lactate-utilizing bacteria (Megasphaera elsdenii) to multiply, preventing toxic lactic acid accumulation.",
        "topicId": "u3-t12",
        "diff": 2,
        "subSection": "u3-s2"
      },
      {
        "q": "Draft bullocks subjected to heavy road transport work on paved roads experience increased wear on hooves, requiring dietary adequacy of which nutrient for keratin strength?",
        "o": [
          "Biotin and Zinc",
          "Fluorine and Iron",
          "Vitamin C and Potassium",
          "Cobalt and Molybdenum"
        ],
        "a": 0,
        "e": "Biotin acts as a cofactor in epidermal keratinization, and zinc is required for protein synthesis; both prevent hoof cracking and sole bruising in working bullocks.",
        "topicId": "u3-t06",
        "diff": 2,
        "subSection": "u3-s2"
      },
      {
        "q": "Feeding sweet potato vines or cowpea fodder to lactating goats serves as an excellent source of:",
        "o": [
          "Pure indigestible silica",
          "Toxic gossypol",
          "Highly digestible crude protein and carotene (Vitamin A precursor)",
          "Unsaturated fat exclusively"
        ],
        "a": 2,
        "e": "Leguminous cowpea and sweet potato forages provide 14-18% CP and high beta-carotene, significantly boosting milk yield in stall-fed goats.",
        "topicId": "u3-t13",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "What is the maximum recommended dietary inclusion limit for feed-grade urea in adult ruminants?",
        "o": [
          "Not more than 1% of total diet DM (or 3% of concentrate mixture, or 1/3rd of total dietary nitrogen)",
          "10% of total diet DM",
          "5% of concentrate mixture",
          "Urea can replace 100% of diet protein"
        ],
        "a": 0,
        "e": "The classic 1-3-1/3rd rule limits urea to 1% of total diet dry matter, 3% of concentrate mixture, or not more than 33% (1/3rd) of total dietary nitrogen.",
        "topicId": "u3-t16",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "Which enzyme synthesized by ruminal bacteria hydrolyzes dietary urea rapidly into ammonia and carbon dioxide?",
        "o": [
          "Urease",
          "Protease",
          "Cellulase",
          "Amylase"
        ],
        "a": 0,
        "e": "Bacterial urease operates at a velocity roughly four times faster than microbial assimilation, rapidly cleaving urea: CO(NH2)2 + H2O -> 2 NH3 + CO2.",
        "topicId": "u3-t16",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "For optimal microbial utilization of non-protein nitrogen (urea) in the rumen, which dietary component is an absolute prerequisite?",
        "o": [
          "High concentrations of dietary true protein",
          "Readily available soluble carbohydrates (starch or molasses) to supply simultaneous ATP and carbon skeletons",
          "Large amounts of indigestible lignin",
          "Cold drinking water"
        ],
        "a": 1,
        "e": "Rapidly released ruminal ammonia can only be captured into microbial amino acids if alpha-keto acids (from starch/molasses fermentation) and ATP are available simultaneously.",
        "topicId": "u3-t16",
        "diff": 2,
        "subSection": "u3-s3"
      },
      {
        "q": "Urea toxicity in cattle occurs when ruminal ammonia production exceeds the liver's capacity to convert ammonia into urea via:",
        "o": [
          "The Citric Acid Cycle",
          "The Hepatic Urea (Ornithine) Cycle",
          "The Cori Cycle",
          "Beta-oxidation"
        ],
        "a": 1,
        "e": "When rumen ammonia absorption overwhelms liver argininosuccinate synthase and carbamoyl phosphate synthetase-I, free ammonia enters systemic circulation.",
        "topicId": "u3-t16",
        "diff": 2,
        "subSection": "u3-s3"
      },
      {
        "q": "What is the critical rumen pH threshold above which unionized ammonia (NH3) absorption spikes drastically into portal blood, precipitating urea toxicity?",
        "o": [
          "< 5.0",
          "< 6.0",
          "> 7.0 to 7.3",
          "Neutral 6.5"
        ],
        "a": 2,
        "e": "At pH > 7.3, the ammonium ion (NH4+) loses its charge and converts to unionized lipophilic free ammonia (NH3), which diffuses across the rumen wall at high rates.",
        "topicId": "u3-t16",
        "diff": 2,
        "subSection": "u3-s3"
      },
      {
        "q": "What is the specific field emergency chemical antidote administered orally for acute urea toxicity in cattle?",
        "o": [
          "2 to 4 liters of 5% Acetic Acid (Vinegar) diluted in 20 to 30 liters of cold water",
          "100 g Sodium bicarbonate in warm water",
          "1 liter of liquid paraffin",
          "500 ml Calcium borogluconate orally"
        ],
        "a": 0,
        "e": "Acetic acid immediately lowers ruminal pH, converting toxic diffusible NH3 into non-absorbable NH4+ ions; cold water cools the rumen and halts bacterial urease.",
        "topicId": "u3-t16",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "What is the commercial composition of the standard Urea Molasses Mineral Block (UMMB) licks developed by NDDB/IVRI for Indian livestock?",
        "o": [
          "100% urea solidified with cement",
          "Molasses (~35-40%), Urea (~7-10%), Mineral mixture (~10%), Salt (~5%), Binder (CaO/Bentonite ~10%), and Bran/Meal (~30-35%)",
          "50% common salt and 50% urea",
          "Pure sugar candy with copper sulfate"
        ],
        "a": 1,
        "e": "UMMB provides slow-release non-protein nitrogen, fermentable sugars (molasses), and trace minerals, safe for licking without risk of biting or toxicity.",
        "topicId": "u3-t16",
        "diff": 2,
        "subSection": "u3-s3"
      },
      {
        "q": "Why is pure feed-grade urea contraindicated for feeding to calves under 3 months of age?",
        "o": [
          "Urea destroys esophageal groove tissue",
          "Young calves lack a functional, inoculated microbial rumen and have negligible urease and bacterial protein synthesis capacity",
          "Urea curdles abomasal milk immediately",
          "Calves have no liver"
        ],
        "a": 1,
        "e": "Prior to 3-4 months, the calf is functionally a monogastric animal; ingested urea cannot be utilized by microbes and is absorbed as toxic ammonia.",
        "topicId": "u3-t16",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "Rumen Bypass Protein (RUP) is characterized by which nutritional property?",
        "o": [
          "Resists degradation by ruminal microorganisms but is digested by proteolytic enzymes in the abomasum and small intestine",
          "Completely indigestible throughout the entire gastrointestinal tract",
          "Degrades into ammonia within 5 minutes of ingestion",
          "Passes out 100% intact in feces"
        ],
        "a": 0,
        "e": "RUP passes through the rumen undegraded to deliver high-quality dietary essential amino acids directly to the duodenum for enzymatic digestion and absorption.",
        "topicId": "u3-t15",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "The commercial manufacturing of rumen-inert bypass fat in the form of Calcium Soaps involves which chemical reaction?",
        "o": [
          "Saponification of long-chain fatty acids (palm oil fatty acids) with Calcium Hydroxide [Ca(OH)2]",
          "Hydrogenation of fish oil at 200 atmospheres",
          "Treatment of tallow with formaldehyde",
          "Boiling soybean oil with sulfuric acid"
        ],
        "a": 0,
        "e": "Calcium salts of long-chain fatty acids (e.g. Megalac) are insoluble at neutral rumen pH (6.5), preventing microbial toxicity, but dissociate in abomasal acid (pH < 3.0).",
        "topicId": "u3-t15",
        "diff": 2,
        "subSection": "u3-s3"
      },
      {
        "q": "Why does feeding rumen-inert bypass fat not cause the fiber digestion depression seen when feeding raw vegetable oil?",
        "o": [
          "Bypass fat contains zero fatty acids",
          "Bypass fat is converted directly into methane",
          "Bypass fat is destroyed by saliva",
          "Calcium soaps remain insoluble and inert at ruminal pH 6.2-6.8, so they do not coat fiber particles or inhibit cellulolytic bacteria"
        ],
        "a": 3,
        "e": "Insoluble calcium soaps cannot adsorb onto feed cellulose or disrupt Gram-positive bacterial cell membranes in the rumen.",
        "topicId": "u3-t15",
        "diff": 2,
        "subSection": "u3-s3"
      },
      {
        "q": "Prill fat is another commercial form of bypass fat that achieves rumen inertness through:",
        "o": [
          "Coating with gelatin and sugar",
          "Binding to bentonite clay",
          "Emulsification with bile acids",
          "Fractionated, fully hydrogenated saturated triglycerides (palmitic/stearic acid) with high melting points (> 55°C)"
        ],
        "a": 3,
        "e": "Prill fat consists of high-melting-point (>50-55°C) saturated free fatty acids that remain solid at rumen temperature (39°C), bypassing microbial breakdown.",
        "topicId": "u3-t15",
        "diff": 2,
        "subSection": "u3-s3"
      },
      {
        "q": "Which metabolic disorder in high-yielding dairy cows is characterized by hypoglycemia, hyperketonemia, and sweet, acetone-smelling breath?",
        "o": [
          "Bovine Ketosis (Acetonemia)",
          "Parturient Paresis",
          "Grass Tetany",
          "Rumen Impaction"
        ],
        "a": 0,
        "e": "Ketosis develops during early lactation NEB when oxaloacetate is exhausted, forcing acetyl-CoA into acetoacetate, beta-hydroxybutyrate, and acetone.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "What is the primary glucogenic oral medication administered to dairy cows for the clinical treatment of bovine ketosis?",
        "o": [
          "Liquid paraffin",
          "Propylene glycol (250 to 500 ml orally twice daily)",
          "Magnesium sulfate",
          "Dilute acetic acid"
        ],
        "a": 1,
        "e": "Propylene glycol is absorbed intact or converted to propionate in the rumen, entering the citric acid cycle to replenish oxaloacetate for gluconeogenesis.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "What is the hallmark diagnostic biochemical finding in dairy cows suffering from Parturient Paresis (Milk Fever)?",
        "o": [
          "Severe hyperkalemia (> 15 mg/dL)",
          "Severe hypocalcemia (serum total calcium dropping from normal 9-10 mg/dL to < 5 mg/dL)",
          "Elevated blood urea nitrogen (> 100 mg/dL)",
          "Elevated serum phosphorus (> 15 mg/dL)"
        ],
        "a": 1,
        "e": "Milk fever is caused by acute failure of calcium homeostasis at calving, with total serum calcium plunging below 5 mg/dL (ionized Ca < 0.5 mM).",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "The classic posture of a dairy cow in Stage 2 of Milk Fever is:",
        "o": [
          "Hyperactive galloping around the pen",
          "High head carriage and star-gazing",
          "Sternal recumbency with an S-shaped kink in the neck or head turned into the flank",
          "Standing rigid with erect ears"
        ],
        "a": 2,
        "e": "Flaccid neuromuscular paralysis in Stage 2 causes sternal recumbency, cold extremities, dilated pupils, and lateral neck curvature resting on the chest.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "Dietary Cation-Anion Difference (DCAD) is calculated in ruminants using which standard milliequivalent formula?",
        "o": [
          "(Na+ + K+) - (Cl- + S2-)",
          "(Ca2+ + Mg2+) - (P3- + S2-)",
          "(Na+ + Cl-) - (K+ + S2-)",
          "(K+ + Mg2+) / (Ca2+ + Na+)"
        ],
        "a": 0,
        "e": "DCAD (mEq/kg DM) = (Na+ / 0.023 + K+ / 0.039) - (Cl- / 0.0355 + S / 0.016). It measures the net balance of fixed dietary cations against anions.",
        "topicId": "u3-t17",
        "diff": 2,
        "subSection": "u3-s3"
      },
      {
        "q": "How does feeding a negative DCAD (-50 to -100 mEq/kg DM) diet during the last 3 weeks of the dry period prevent milk fever?",
        "o": [
          "Alkalinizes the blood to precipitate excess calcium",
          "Blocks calcium secretion into colostrum",
          "Paralyzes the parathyroid glands",
          "Induces mild metabolic acidosis, increasing tissue sensitivity to PTH and stimulating bone calcium resorption and renal calcitriol synthesis"
        ],
        "a": 3,
        "e": "Mild systemic metabolic acidosis enhances PTH-receptor binding in bone and kidney, pre-activating osteoclastic calcium resorption before the sudden drain of colostrum.",
        "topicId": "u3-t17",
        "diff": 2,
        "subSection": "u3-s3"
      },
      {
        "q": "Which anionic salts are typically added to pre-partum transition cow diets to achieve a negative DCAD?",
        "o": [
          "Ammonium chloride, Calcium chloride, Magnesium sulfate, Calcium sulfate",
          "Sodium bicarbonate and Potassium carbonate",
          "Calcium carbonate and Sodium chloride",
          "Dicalcium phosphate and Urea"
        ],
        "a": 0,
        "e": "Chloride and sulfate salts provide strong anions that shift blood acid-base balance toward mild compensated metabolic acidosis.",
        "topicId": "u3-t17",
        "diff": 2,
        "subSection": "u3-s3"
      },
      {
        "q": "What is the definitive intravenous treatment for a clinical case of Parturient Paresis (Milk Fever) in cattle?",
        "o": [
          "Rapid bolus of 50% Dextrose",
          "IV infusion of Magnesium sulfate alone",
          "Oral administration of vinegar",
          "Slow IV infusion of 400 to 500 ml of 20 to 25% Calcium Borogluconate solution"
        ],
        "a": 3,
        "e": "Calcium borogluconate IV restores ionized blood calcium immediately; heart rate must be monitored continuously for bradycardia or arrhythmia.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "Subacute Ruminal Acidosis (SARA) in dairy cattle is clinically defined by which ruminal fluid pH threshold?",
        "o": [
          "Rumen pH remaining between 5.2 and 5.6 for more than 3 hours daily",
          "Rumen pH dropping below 4.0",
          "Rumen pH remaining constant at 7.0",
          "Rumen pH rising above 8.0"
        ],
        "a": 0,
        "e": "SARA is defined as repeated episodes of depressed ruminal pH between 5.2 and 5.6, causing epithelial inflammation, reduced intake, and liver abscesses.",
        "topicId": "u3-t17",
        "diff": 2,
        "subSection": "u3-s3"
      },
      {
        "q": "Which bacterial species proliferates massively during acute ruminal lactic acidosis, driving rumen pH down below 5.0?",
        "o": [
          "Fibrobacter succinogenes",
          "Ruminococcus albus",
          "Butyrivibrio fibrisolvens",
          "Streptococcus bovis and Lactobacillus species"
        ],
        "a": 3,
        "e": "Streptococcus bovis utilizes excess soluble starch to synthesize D- and L-lactic acid rapidly; acid-tolerant lactobacilli then take over, driving pH down to 4.5-4.0.",
        "topicId": "u3-t17",
        "diff": 2,
        "subSection": "u3-s3"
      },
      {
        "q": "Frothy (legume) bloat in cattle grazing lush lucerne or clover is primarily caused by:",
        "o": [
          "Soluble leaf proteins (Fraction I 18S ribulose-1,5-bisphosphate carboxylase) forming a persistent viscous foam trapping gas bubbles",
          "Overproduction of dry sawdust in the rumen",
          "Lack of water intake",
          "Foreign bodies blocking the cardia"
        ],
        "a": 0,
        "e": "Chloroplastic Fraction I proteins and saponins act as foaming agents, creating a stable foam that traps fermentation gases and prevents normal eructation.",
        "topicId": "u3-t17",
        "diff": 2,
        "subSection": "u3-s3"
      },
      {
        "q": "What is the primary therapeutic action of Poloxalene or vegetable oils (groundnut oil) when administered for frothy bloat?",
        "o": [
          "They act as non-ionic surfactants that reduce surface tension and rupture the gas-trapping foam",
          "They neutralize ruminal lactic acid",
          "They paralyze the ruminal wall",
          "They convert carbon dioxide into solid carbonate"
        ],
        "a": 0,
        "e": "Antifoaming surfactants break the surface tension of the ruminal fluid, releasing coalesced free gas that can be eructated or relieved via stomach tube.",
        "topicId": "u3-t17",
        "diff": 2,
        "subSection": "u3-s3"
      },
      {
        "q": "Free-gas bloat (secondary tympany) differs from frothy bloat because it is caused by:",
        "o": [
          "Ingestion of too much legume protein",
          "Excessive secretion of bile into the rumen",
          "Low dietary fiber",
          "Physical or neurological failure of eructation (e.g. esophageal obstruction, choke, tetanus, or hypocalcemia)"
        ],
        "a": 3,
        "e": "Free-gas bloat occurs when the gas cap cannot be eructated due to anatomical obstruction (foreign body, choke) or neurological vagal impairment.",
        "topicId": "u3-t17",
        "diff": 2,
        "subSection": "u3-s3"
      },
      {
        "q": "Emergency relief of life-threatening severe ruminal bloat with acute respiratory distress is achieved by:",
        "o": [
          "Performing a tracheotomy",
          "Administering oral vinegar",
          "IV infusion of dextrose",
          "Trocharization in the center of the left paralumbar fossa using a trocar and cannula"
        ],
        "a": 3,
        "e": "Puncturing the distended left paralumbar fossa with a sharp trocar and cannula releases gas immediately, preventing asphyxiation and cardiovascular collapse.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "Why does systemic absorption of D-lactic acid during acute rumen acidosis produce severe metabolic acidosis in cattle?",
        "o": [
          "Bovine tissues have very low activity of D-lactate dehydrogenase and clear D-lactate extremely slowly from blood",
          "D-lactate is converted into sulfuric acid",
          "D-lactate destroys parathyroid hormone",
          "D-lactate binds calcium irreversibly"
        ],
        "a": 0,
        "e": "Mammalian tissues metabolize L-lactate efficiently via L-LDH, but lack sufficient D-LDH, allowing bacterial D-lactate to accumulate and cause severe systemic acidosis.",
        "topicId": "u3-t17",
        "diff": 3,
        "subSection": "u3-s3"
      },
      {
        "q": "Which urinary parameter can be tested on the farm using diagnostic dipsticks to monitor the effectiveness of pre-calving anionic salt feeding?",
        "o": [
          "Urine specific gravity",
          "Urine glucose concentration",
          "Urine pH (target pH 6.0 to 6.5 in Holsteins, 5.5 to 6.0 in Jerseys)",
          "Urine bilirubin level"
        ],
        "a": 2,
        "e": "Urine pH directly reflects systemic acidification; achieving a urine pH of 6.0-6.5 confirms successful induction of compensated metabolic acidosis.",
        "topicId": "u3-t17",
        "diff": 2,
        "subSection": "u3-s3"
      },
      {
        "q": "The rapid conversion of ruminal ammonia into non-toxic glutamine in astrocytes causes cerebral edema in acute urea poisoning because of:",
        "o": [
          "Destruction of brain blood vessels",
          "Direct precipitation of ammonium phosphate crystals in neurons",
          "Complete loss of cerebral glucose",
          "Intracellular accumulation of glutamine exerting powerful osmotic pressure that draws water into brain astrocytes"
        ],
        "a": 3,
        "e": "Glutamine synthetase incorporates excess NH3 into glutamine in astrocytes; high intracellular glutamine osmotically draws water, causing brain swelling and tremors.",
        "topicId": "u3-t16",
        "diff": 3,
        "subSection": "u3-s3"
      },
      {
        "q": "Which metabolic sequela commonly follows subacute ruminal acidosis due to translocation of Fusobacterium necrophorum across inflamed rumen mucosa?",
        "o": [
          "Severe acute pancreatitis",
          "Bovine spongiform encephalopathy",
          "Hepatic abscesses and caudal vena cava thrombosis syndrome",
          "Chronic renal cortical necrosis"
        ],
        "a": 2,
        "e": "Acid ruminal mucosal erosion (ruminitis) permits entry of Fusobacterium necrophorum into portal circulation, colonizing the liver to form multiple abscesses.",
        "topicId": "u3-t17",
        "diff": 2,
        "subSection": "u3-s3"
      }
    ],
    "tf": [
      {
        "q": "The Gaines formula for 4% Fat Corrected Milk is: 4% FCM = 0.4 x Milk (kg) + 15 x Fat (kg).",
        "a": true,
        "e": "True. The formula standardizes milk of varying fat tests to a common energy equivalent (approx. 750 kcal/kg).",
        "topicId": "u3-t04",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "Buffalo milk requires less energy and protein per kilogram than cow milk because buffaloes are more efficient converters of roughage.",
        "a": false,
        "e": "False. Buffalo milk contains 7-8% fat and higher protein, requiring roughly 20-25% more TDN and DCP per kg than cow milk.",
        "topicId": "u3-t04",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "Intestinal absorption of intact maternal colostral immunoglobulins ceases almost completely by 24 hours after birth.",
        "a": true,
        "e": "True. 'Gut closure' occurs within 24 hours as enterocytes lose the capacity for macromolecular pinocytosis.",
        "topicId": "u3-t08",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "Feeding coarse, unground dry straw is more effective at stimulating ruminal mucosal papillae growth in calves than calf starter grain.",
        "a": false,
        "e": "False. Butyrate and propionate from grain fermentation are the potent chemical stimulants of papillae growth, not coarse roughage.",
        "topicId": "u3-t08",
        "diff": 2,
        "subSection": "u3-s1"
      },
      {
        "q": "A calf starter concentrate should contain approximately 20 to 22% Crude Protein.",
        "a": true,
        "e": "True. Young calves require nutrient-dense starter (20-22% CP, 75-80% TDN) to support rapid growth and rumen development.",
        "topicId": "u3-t08",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "Overfeeding energy to pre-pubertal dairy heifers leading to ADG > 900 g/day increases lifetime milk production potential.",
        "a": false,
        "e": "False. Rapid pre-pubertal weight gain causes fat infiltration into mammary parenchyma, permanently reducing secretory tissue.",
        "topicId": "u3-t09",
        "diff": 2,
        "subSection": "u3-s1"
      },
      {
        "q": "Fetal growth accelerates primarily during the final 2 to 2.5 months of gestation in dairy cattle.",
        "a": true,
        "e": "True. Over 60% of fetal weight accretion occurs in the last 60 days of gestation.",
        "topicId": "u3-t03",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "The transition period in dairy cattle spans from 3 weeks pre-calving to 3 weeks post-calving.",
        "a": true,
        "e": "True. This critical 6-week window accounts for the majority of metabolic and infectious diseases in dairy herds.",
        "topicId": "u3-t10",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "Peak dry matter intake in dairy cows occurs at exactly the same time as peak milk yield at 4 to 6 weeks postpartum.",
        "a": false,
        "e": "False. Peak milk yield occurs at 4-6 weeks, while peak DMI lags behind until 8-10 weeks, causing negative energy balance.",
        "topicId": "u3-t10",
        "diff": 2,
        "subSection": "u3-s1"
      },
      {
        "q": "A calving Body Condition Score of 3.25 to 3.5 (on a 1-5 scale) is considered optimal for dairy cows.",
        "a": true,
        "e": "True. This level of condition buffers early lactation energy deficits without predisposing cows to fatty liver or ketosis.",
        "topicId": "u3-t10",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "Challenge feeding involves stepping up concentrate feeding starting two weeks prior to the expected date of calving.",
        "a": true,
        "e": "True. Increasing concentrate prepares rumen microbes and adapts the cow to high postpartum nutrient intakes.",
        "topicId": "u3-t14",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "Feeding a Total Mixed Ration (TMR) prevents cows from sorting palatable concentrates away from roughages.",
        "a": true,
        "e": "True. A uniform TMR blend stabilizes rumen pH by ensuring consistent roughage-to-concentrate intake throughout the day.",
        "topicId": "u3-t14",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "Sodium bicarbonate is supplemented in high-producing dairy diets at 5 to 7% of total dry matter.",
        "a": false,
        "e": "False. Sodium bicarbonate buffer is included at 0.75 to 1.0% of diet DM (150-250 g/day); 5-7% would cause metabolic alkalosis and unpalatability.",
        "topicId": "u3-t14",
        "diff": 2,
        "subSection": "u3-s1"
      },
      {
        "q": "Muscular work in draft bullocks requires large increases in dietary protein percentage rather than energy.",
        "a": false,
        "e": "False. Muscular contraction uses volatile fatty acids and lipids as fuel; protein requirements increase only marginally.",
        "topicId": "u3-t06",
        "diff": 2,
        "subSection": "u3-s1"
      },
      {
        "q": "Working bullocks in hot tropical environments require daily common salt supplementation to replace sweat electrolyte losses.",
        "a": true,
        "e": "True. Profuse sweating dissipates heat but excretes sodium and chloride, which must be replenished with 50-100 g daily salt.",
        "topicId": "u3-t06",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "Obesity in breeding bulls enhances their libido and increases daily sperm output.",
        "a": false,
        "e": "False. Over-conditioning causes sluggish libido, joint stress, scrotal thermoregulatory failure, and poor semen quality.",
        "topicId": "u3-t11",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "A dry period of approximately 60 days is recommended between successive lactations in dairy cattle.",
        "a": true,
        "e": "True. An 8-week dry period allows mammary gland involution, tissue regeneration, and nutrient replenishment.",
        "topicId": "u3-t10",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "Flushing ewes with extra grain 2 to 3 weeks before breeding increases their ovulation rate and lambing percentage.",
        "a": true,
        "e": "True. Improved energy balance boosts gonadotropin secretion, stimulating multiple follicular development.",
        "topicId": "u3-t12",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "Pregnancy toxaemia in sheep is characterized by severe hyperglycemia and low blood ketone levels.",
        "a": false,
        "e": "False. Pregnancy toxaemia is marked by acute hypoglycemia (<30 mg/dL) and severe hyperketonemia (>30 mg/dL).",
        "topicId": "u3-t12",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "Goats have a higher daily voluntary Dry Matter Intake capacity (3-4% of body weight) than cattle.",
        "a": true,
        "e": "True. The higher metabolic rate and rapid passage rate in goats allow voluntary DM intake of 3 to 4% (up to 5% in high yielders).",
        "topicId": "u3-t13",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "Goats can tolerate higher levels of plant tannins because their saliva contains proline-rich proteins.",
        "a": true,
        "e": "True. Caprine proline-rich salivary proteins bind and neutralize tannins, preventing inhibition of digestive enzymes.",
        "topicId": "u3-t13",
        "diff": 2,
        "subSection": "u3-s2"
      },
      {
        "q": "Wool is composed of keratin, a fibrous protein rich in sulfur amino acids like cystine.",
        "a": true,
        "e": "True. Keratin contains 3-4% sulfur, forming disulfide bonds that give wool its crimp and strength.",
        "topicId": "u3-t05",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "Copper deficiency in sheep causes steely wool that has lost its natural crimp.",
        "a": true,
        "e": "True. Copper is a cofactor for thiol oxidase, which forms the disulfide cross-links necessary for wool crimping.",
        "topicId": "u3-t05",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "Sheep are exceptionally resistant to dietary copper toxicity and can safely consume 100 ppm copper.",
        "a": false,
        "e": "False. Sheep are highly prone to copper toxicity; dietary copper should not exceed 10-15 ppm.",
        "topicId": "u3-t12",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "Maintaining a dietary Ca:P ratio of at least 2:1 helps prevent struvite urinary calculi in male sheep and goats.",
        "a": true,
        "e": "True. High phosphorus promotes magnesium ammonium phosphate stones; adequate calcium prevents calculus formation.",
        "topicId": "u3-t12",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "Ammonium chloride is added to sheep rations to alkalinize the urine.",
        "a": false,
        "e": "False. Ammonium chloride is a urinary acidifier (lowers urine pH below 6.5) used to dissolve struvite calculi.",
        "topicId": "u3-t12",
        "diff": 2,
        "subSection": "u3-s2"
      },
      {
        "q": "Enterotoxemia (pulpy kidney) is triggered by sudden grain engorgement causing proliferation of Clostridium perfringens Type D.",
        "a": true,
        "e": "True. Unfermented starch reaching the intestines stimulates rapid Clostridium perfringens Type D multiplication and lethal epsilon toxin production.",
        "topicId": "u3-t12",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "Creep feeding allows young suckling lambs access to concentrate feed while excluding adult ewes.",
        "a": true,
        "e": "True. Creep gates are sized to permit small lambs to enter and feed on starter diets without competition from dams.",
        "topicId": "u3-t12",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "Normal field plowing by draft bullocks increases their maintenance energy requirement by 30 to 50%.",
        "a": true,
        "e": "True. 4 to 6 hours of daily draft work increases energy needs by roughly 30-50%, met by feeding 1.5-2 kg extra concentrate.",
        "topicId": "u3-t06",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "Stall-fed goats should be provided tree loppings hanging in racks to accommodate their natural browsing habits.",
        "a": true,
        "e": "True. Goats prefer bipedal browsing from elevated racks, which reduces feed waste and parasite transmission.",
        "topicId": "u3-t13",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "Urea can safely replace up to 80% of the total dietary nitrogen in dairy cow rations.",
        "a": false,
        "e": "False. Urea should replace no more than 33% (one-third) of total dietary nitrogen (or 1% of diet DM) to prevent toxicity.",
        "topicId": "u3-t16",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "Bacterial urease converts urea into ammonia and carbon dioxide in the rumen.",
        "a": true,
        "e": "True. Ruminal bacterial urease rapidly hydrolyzes urea into NH3 and CO2.",
        "topicId": "u3-t16",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "Readily available carbohydrates like starch or molasses are essential for efficient ruminal microbial utilization of urea.",
        "a": true,
        "e": "True. Microbes require matching supplies of energy (ATP) and carbon keto-acids to incorporate ammonia into amino acids.",
        "topicId": "u3-t16",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "Dilute acetic acid (vinegar) in cold water is the standard emergency antidote for urea toxicity in cattle.",
        "a": true,
        "e": "True. Acetic acid lowers ruminal pH, converting toxic diffusible NH3 into non-absorbable NH4+ ions.",
        "topicId": "u3-t16",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "Young calves under 3 months of age can efficiently utilize urea-molasses blocks.",
        "a": false,
        "e": "False. Pre-ruminant calves lack a functional bacterial rumen population and develop fatal ammonia toxicity from urea.",
        "topicId": "u3-t16",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "Rumen undegradable protein (bypass protein) escapes ruminal fermentation and is digested by abomasal proteases.",
        "a": true,
        "e": "True. RUP bypasses microbial degradation to deliver essential amino acids directly to the abomasum and small intestine.",
        "topicId": "u3-t15",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "Calcium salts of long-chain fatty acids (calcium soaps) remain insoluble at normal ruminal pH of 6.5.",
        "a": true,
        "e": "True. Calcium soaps are rumen-inert at pH 6.5, dissociating only in the acidic environment (pH < 3.0) of the abomasum.",
        "topicId": "u3-t15",
        "diff": 2,
        "subSection": "u3-s3"
      },
      {
        "q": "Bovine ketosis is treated clinically by oral administration of glucogenic precursors like propylene glycol.",
        "a": true,
        "e": "True. Propylene glycol enters the gluconeogenic pathway, restoring oxaloacetate and relieving the ketotic block.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "Parturient paresis (milk fever) is characterized by high blood serum calcium concentrations.",
        "a": false,
        "e": "False. Milk fever is acute hypocalcemia where serum calcium drops below 5.0 mg/dL.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "Feeding a negative DCAD diet during late gestation induces mild metabolic acidosis that helps prevent milk fever.",
        "a": true,
        "e": "True. Mild systemic acidosis stimulates parathyroid hormone sensitivity and increases bone calcium mobilization at calving.",
        "topicId": "u3-t17",
        "diff": 2,
        "subSection": "u3-s3"
      },
      {
        "q": "Subacute Ruminal Acidosis (SARA) occurs when ruminal pH drops repeatedly between 5.2 and 5.6.",
        "a": true,
        "e": "True. SARA is characterized by ruminal pH dropping into the 5.2-5.6 range for multiple hours daily.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "Streptococcus bovis proliferates rapidly during grain engorgement and produces large amounts of lactic acid.",
        "a": true,
        "e": "True. S. bovis consumes soluble starch and rapidly generates lactic acid, initiating acute ruminal acidosis.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "Frothy bloat is treated with antifoaming surfactants like poloxalene or vegetable oils to break the stable foam.",
        "a": true,
        "e": "True. Antifoaming agents reduce surface tension, allowing trapped gas bubbles to coalesce and be eructated.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "In severe life-threatening bloat, emergency trocharization is performed in the right paralumbar fossa.",
        "a": false,
        "e": "False. Trocharization is performed on the LEFT paralumbar fossa, which is where the rumen is directly situated.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "Rumenitis from acidosis can allow Fusobacterium necrophorum to migrate to the liver and cause hepatic abscesses.",
        "a": true,
        "e": "True. Acid burns to the ruminal wall allow bacteria to enter portal blood, colonizing the liver to form abscesses.",
        "topicId": "u3-t17",
        "diff": 2,
        "subSection": "u3-s3"
      }
    ],
    "fib": [
      {
        "q": "The formula used to calculate 4% Fat Corrected Milk is: 4% FCM = ____ x Milk (kg) + 15 x Fat (kg).",
        "a": [
          "0.4"
        ],
        "a_display": "0.4",
        "e": "Gaines formula: 4% FCM = 0.4 M + 15 F.",
        "topicId": "u3-t04",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "A newborn calf should receive maternal colostrum equal to ____ percent of its body weight within the first 24 hours.",
        "a": [
          "10",
          "10%"
        ],
        "a_display": "10%",
        "e": "A 30-kg calf needs 3.0 kg (10% of BW) of colostrum, ideally half within the first 2-4 hours.",
        "topicId": "u3-t08",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "Intestinal enterocytes in neonatal calves cease absorbing intact immunoglobulins after ____ hours of life.",
        "a": [
          "24",
          "24 hours"
        ],
        "a_display": "24 hours",
        "e": "Gut closure occurs within 24 hours as enterocytes lose macromolecular pinocytotic capacity.",
        "topicId": "u3-t08",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "Maternal colostrum contains high concentrations of a ____ inhibitor to protect immunoglobulins from proteolysis.",
        "a": [
          "trypsin"
        ],
        "a_display": "Trypsin",
        "e": "Colostral trypsin inhibitor protects maternal IgG from enzymatic degradation in the abomasum and intestine.",
        "topicId": "u3-t08",
        "diff": 2,
        "subSection": "u3-s1"
      },
      {
        "q": "The volatile fatty acid that provides the strongest chemical stimulus for ruminal papillae development in young calves is ____.",
        "a": [
          "butyrate",
          "butyric acid"
        ],
        "a_display": "Butyrate",
        "e": "Butyrate provides direct oxidative energy to the mucosal cells, driving papillae growth.",
        "topicId": "u3-t08",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "A high-quality commercial Calf Starter concentrate should contain ____ to 22% Crude Protein.",
        "a": [
          "20",
          "20 to 22",
          "20-22"
        ],
        "a_display": "20%",
        "e": "Calf starters require 20-22% CP and 75-80% TDN to stimulate early rumen development.",
        "topicId": "u3-t08",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "Calves can be safely weaned off liquid milk when they consume ____ to 1.0 kg of dry starter daily.",
        "a": [
          "750 g",
          "750g",
          "0.75 kg",
          "0.75",
          "750"
        ],
        "a_display": "750 g (0.75 kg)",
        "e": "Consuming 750 g to 1.0 kg of starter daily confirms sufficient ruminal capacity to sustain post-weaning growth.",
        "topicId": "u3-t08",
        "diff": 2,
        "subSection": "u3-s1"
      },
      {
        "q": "Target Average Daily Gain for growing crossbred dairy heifers is ____ to 600 g per day.",
        "a": [
          "500",
          "500 to 600",
          "500-600",
          "550"
        ],
        "a_display": "500 to 600 g/day",
        "e": "Gaining 500-600 g/day allows heifers to calve at 24-30 months without mammary adiposity.",
        "topicId": "u3-t09",
        "diff": 2,
        "subSection": "u3-s1"
      },
      {
        "q": "The transition period in dairy cows spans from ____ weeks before calving to 3 weeks after calving.",
        "a": [
          "3",
          "three"
        ],
        "a_display": "3 weeks",
        "e": "The 6-week transition window is the highest-risk metabolic period in a dairy cow's lactation cycle.",
        "topicId": "u3-t10",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "In early lactation, peak milk production occurs at 4 to 6 weeks, while peak dry matter intake lags until ____ to 10 weeks.",
        "a": [
          "8",
          "8 to 10",
          "8-10"
        ],
        "a_display": "8 to 10 weeks",
        "e": "This intake lag creates negative energy balance, forcing cows to mobilize body fat reserves.",
        "topicId": "u3-t10",
        "diff": 2,
        "subSection": "u3-s1"
      },
      {
        "q": "The ideal Body Condition Score at calving on a 1 to 5 scale is 3.25 to ____.",
        "a": [
          "3.5",
          "3.50"
        ],
        "a_display": "3.50",
        "e": "A calving BCS of 3.25-3.50 buffers early lactation energy deficits without predisposing cows to ketosis.",
        "topicId": "u3-t10",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "The recommended dry period length for high-yielding dairy cattle is ____ days.",
        "a": [
          "60",
          "60 days"
        ],
        "a_display": "60 days",
        "e": "A 60-day dry period is necessary for mammary tissue regeneration and nutrient repletion.",
        "topicId": "u3-t10",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "The feeding strategy of stepping up concentrate allowance 2 weeks before calving is called ____ feeding.",
        "a": [
          "challenge",
          "lead",
          "challenge feeding",
          "lead feeding"
        ],
        "a_display": "Challenge (Lead) Feeding",
        "e": "Challenge feeding trains rumen microbes and prepares the cow to reach peak genetic milk yield.",
        "topicId": "u3-t14",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "TMR stands for Total ____ Ration.",
        "a": [
          "mixed"
        ],
        "a_display": "Mixed",
        "e": "Total Mixed Ration (TMR) combines forages and concentrates into a homogeneous mixture.",
        "topicId": "u3-t14",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "Sodium bicarbonate buffer is recommended at ____ to 1.0% of total diet dry matter in high-concentrate dairy rations.",
        "a": [
          "0.75",
          "0.75 to 1.0",
          "0.75-1.0",
          "0.75%"
        ],
        "a_display": "0.75%",
        "e": "0.75-1.0% sodium bicarbonate stabilizes rumen pH and prevents subacute ruminal acidosis.",
        "topicId": "u3-t14",
        "diff": 2,
        "subSection": "u3-s1"
      },
      {
        "q": "Under Indian conditions, lactating cows receive 1 kg concentrate for every ____ to 3.0 kg of milk produced.",
        "a": [
          "2.5",
          "2.5 to 3.0",
          "2.5-3.0"
        ],
        "a_display": "2.5",
        "e": "Feeding 1 kg concentrate per 2.5 to 3.0 kg milk satisfies production energy requirements in cows.",
        "topicId": "u3-t04",
        "diff": 1,
        "subSection": "u3-s1"
      },
      {
        "q": "Field measurement of physically effective fiber is performed using the Penn State Particle Size ____.",
        "a": [
          "separator"
        ],
        "a_display": "Separator",
        "e": "The Penn State Particle Separator uses graduated sieves to measure effective chewing fiber.",
        "topicId": "u3-t14",
        "diff": 2,
        "subSection": "u3-s1"
      },
      {
        "q": "The practice of increasing concentrate feeding to ewes 2 to 3 weeks prior to mating is known as ____.",
        "a": [
          "flushing"
        ],
        "a_display": "Flushing",
        "e": "Flushing enhances body condition and elevates ovulation rate and lambing percentage.",
        "topicId": "u3-t12",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "Pregnancy toxaemia in late-pregnant multi-bearing ewes is characterized by severe ____, with blood glucose dropping below 30 mg/dL.",
        "a": [
          "hypoglycemia",
          "hypoglycaemia"
        ],
        "a_display": "Hypoglycemia",
        "e": "Twin fetal demands deplete maternal glucose, triggering severe hypoglycemic ketosis.",
        "topicId": "u3-t12",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "Adult goats consume ____ to 4.0% of their body weight in dry matter daily.",
        "a": [
          "3",
          "3.0",
          "3 to 4",
          "3-4"
        ],
        "a_display": "3.0 to 4.0%",
        "e": "Higher metabolic rates enable goats to consume 3-4% of body weight in dry matter daily.",
        "topicId": "u3-t13",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "Goats tolerate dietary tannins because their saliva contains abundant ____-rich proteins.",
        "a": [
          "proline"
        ],
        "a_display": "Proline",
        "e": "Proline-rich salivary proteins bind and neutralize polyphenolic tannins.",
        "topicId": "u3-t13",
        "diff": 2,
        "subSection": "u3-s2"
      },
      {
        "q": "The special enclosure designed to feed young lambs without competition from adult ewes is called a ____ feeder.",
        "a": [
          "creep"
        ],
        "a_display": "Creep",
        "e": "Creep feeding provides early access to concentrate for suckling lambs.",
        "topicId": "u3-t12",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "Wool is composed almost entirely of the sulfur-rich fibrous protein called ____.",
        "a": [
          "keratin"
        ],
        "a_display": "Keratin",
        "e": "Wool keratin contains 3-4% sulfur, forming the structural basis of the wool fiber.",
        "topicId": "u3-t05",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "A deficiency of the trace mineral ____ causes un-crimped, steely wool in sheep.",
        "a": [
          "copper",
          "cu"
        ],
        "a_display": "Copper",
        "e": "Copper is required for thiol oxidase to cross-link disulfide bonds in keratin.",
        "topicId": "u3-t05",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "To prevent struvite urinary calculi in feedlot rams, the dietary Ca:P ratio should be at least ____ to 1.",
        "a": [
          "2",
          "2:1",
          "2.0"
        ],
        "a_display": "2 : 1",
        "e": "A 2:1 Ca:P ratio prevents excess phosphorus absorption and crystallization in urine.",
        "topicId": "u3-t12",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "The chemical urinary acidifier supplemented at 0.5% to dissolve struvite calculi in male sheep is ____ chloride.",
        "a": [
          "ammonium",
          "nh4cl"
        ],
        "a_display": "Ammonium",
        "e": "Ammonium chloride acidifies the urine to pH < 6.5, keeping magnesium ammonium phosphate in solution.",
        "topicId": "u3-t12",
        "diff": 2,
        "subSection": "u3-s2"
      },
      {
        "q": "Enterotoxemia in rapidly growing lambs is caused by the bacterium Clostridium ____ Type D.",
        "a": [
          "perfringens"
        ],
        "a_display": "Perfringens",
        "e": "Starch overload stimulates explosive Clostridium perfringens Type D multiplication.",
        "topicId": "u3-t12",
        "diff": 2,
        "subSection": "u3-s2"
      },
      {
        "q": "Normal field work increases the daily energy requirement of draft bullocks by ____ to 50% over maintenance.",
        "a": [
          "30",
          "30 to 50",
          "30-50"
        ],
        "a_display": "30 to 50%",
        "e": "Working 4-6 hours daily requires an extra 30-50% energy, supplied by 1.5-2 kg concentrate.",
        "topicId": "u3-t06",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "Heavy sweating during draft work requires daily supplementation of 50 to 100 g of common ____.",
        "a": [
          "salt",
          "nacl",
          "sodium chloride"
        ],
        "a_display": "Salt (NaCl)",
        "e": "Sweat contains sodium and chloride, which must be replenished daily.",
        "topicId": "u3-t06",
        "diff": 1,
        "subSection": "u3-s2"
      },
      {
        "q": "The maximum safe upper limit of Copper in sheep diets is ____ ppm.",
        "a": [
          "10 to 15",
          "15",
          "10-15",
          "10"
        ],
        "a_display": "10 to 15 ppm",
        "e": "Diets exceeding 15 ppm Cu can cause fatal chronic copper poisoning in sheep.",
        "topicId": "u3-t12",
        "diff": 2,
        "subSection": "u3-s2"
      },
      {
        "q": "Urea should not exceed ____ percent of the total dry matter of an adult ruminant's diet.",
        "a": [
          "1",
          "1%",
          "1.0"
        ],
        "a_display": "1%",
        "e": "Urea is limited to 1% of total diet DM or 3% of concentrate mixture to prevent toxicity.",
        "topicId": "u3-t16",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "Bacterial ____ is the ruminal enzyme that hydrolyzes urea into ammonia and carbon dioxide.",
        "a": [
          "urease"
        ],
        "a_display": "Urease",
        "e": "Bacterial urease rapidly cleaves urea, releasing free ammonia in the rumen.",
        "topicId": "u3-t16",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "For acute urea toxicity in cattle, 2 to 4 liters of 5% ____ acid (vinegar) in cold water is given orally.",
        "a": [
          "acetic",
          "acetic acid",
          "vinegar"
        ],
        "a_display": "Acetic Acid (Vinegar)",
        "e": "Acetic acid lowers ruminal pH, converting toxic NH3 into non-absorbable NH4+ ions.",
        "topicId": "u3-t16",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "Rumen-inert bypass fat in the form of Calcium Soaps is produced by reacting fatty acids with calcium ____.",
        "a": [
          "hydroxide",
          "ca(oh)2"
        ],
        "a_display": "Hydroxide",
        "e": "Saponification of fatty acids with calcium hydroxide yields insoluble calcium soaps.",
        "topicId": "u3-t15",
        "diff": 2,
        "subSection": "u3-s3"
      },
      {
        "q": "Bovine ketosis is treated by the oral administration of 250 to 500 ml of propylene ____ twice daily.",
        "a": [
          "glycol"
        ],
        "a_display": "Glycol",
        "e": "Propylene glycol is a glucogenic precursor that supplies oxaloacetate to the TCA cycle.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "Parturient paresis (milk fever) is caused by a precipitous drop in serum total ____ below 5 mg/dL.",
        "a": [
          "calcium",
          "ca"
        ],
        "a_display": "Calcium",
        "e": "Sudden colostral calcium output depletes serum calcium, causing flaccid paralysis.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "DCAD stands for Dietary Cation-____ Difference.",
        "a": [
          "anion"
        ],
        "a_display": "Anion",
        "e": "DCAD = (Na+ + K+) - (Cl- + S2-) in milliequivalents per kg diet dry matter.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "Feeding a ____ DCAD diet during late gestation induces mild metabolic acidosis that prevents milk fever.",
        "a": [
          "negative"
        ],
        "a_display": "Negative",
        "e": "A negative DCAD (-50 to -100 mEq/kg) stimulates bone calcium mobilization prior to calving.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "The definitive intravenous treatment for milk fever is 400 to 500 ml of 25% calcium ____.",
        "a": [
          "borogluconate"
        ],
        "a_display": "Borogluconate",
        "e": "Intravenous calcium borogluconate rapidly restores circulating ionized calcium levels.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "Subacute Ruminal Acidosis is defined by ruminal pH dropping repeatedly into the range of 5.2 to ____.",
        "a": [
          "5.6"
        ],
        "a_display": "5.6",
        "e": "SARA occurs when ruminal pH remains between 5.2 and 5.6 for several hours daily.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "The primary bacterium responsible for explosive lactic acid synthesis during acute grain overload is Streptococcus ____.",
        "a": [
          "bovis"
        ],
        "a_display": "Bovis",
        "e": "Streptococcus bovis ferments starch rapidly, producing lactic acid and crashing rumen pH.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "Frothy legume bloat is treated with antifoaming surfactants like ____ or vegetable oils.",
        "a": [
          "poloxalene"
        ],
        "a_display": "Poloxalene",
        "e": "Poloxalene breaks surface tension, collapsing the foam and releasing gas.",
        "topicId": "u3-t17",
        "diff": 2,
        "subSection": "u3-s3"
      },
      {
        "q": "Emergency relief of severe bloat involves trocharization of the ____ paralumbar fossa.",
        "a": [
          "left"
        ],
        "a_display": "Left",
        "e": "The rumen occupies the left abdominal cavity and is accessed via the left paralumbar fossa.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "Acid damage to the ruminal wall can allow Fusobacterium necrophorum to migrate to the liver, forming liver ____.",
        "a": [
          "abscesses",
          "abscess"
        ],
        "a_display": "Abscesses",
        "e": "Ruminal acidosis causes ruminitis, allowing bacteria to enter portal blood and form liver abscesses.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
      },
      {
        "q": "In acute urea poisoning, unionized ammonia (NH3) absorption spikes when ruminal pH rises above ____.",
        "a": [
          "7.0",
          "7.3",
          "7.0 to 7.3",
          "7"
        ],
        "a_display": "7.0 to 7.3",
        "e": "At pH > 7.3, non-ionized NH3 diffuses freely across the rumen epithelium into portal blood.",
        "topicId": "u3-t16",
        "diff": 2,
        "subSection": "u3-s3"
      }
    ]
  },
  "unit-4": {
    "mcq": [
      {
        "q": "According to BIS (IS:1374) specifications, what are the Crude Protein and Metabolizable Energy requirements for Broiler Pre-starter diet (0 to 7 days)?",
        "o": [
          "23% Crude Protein and 3000 kcal ME/kg",
          "18% Crude Protein and 2600 kcal ME/kg",
          "28% Crude Protein and 3400 kcal ME/kg",
          "16% Crude Protein and 2800 kcal ME/kg"
        ],
        "a": 0,
        "e": "BIS broiler specifications prescribe 23% CP and 3000 kcal ME/kg for the pre-starter phase (0-7 days) to support early organogenesis and skeletal growth.",
        "topicId": "u4-t08",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "What is the recommended Crude Protein and Metabolizable Energy specification for Broiler Starter diet (8 to 21 days)?",
        "o": [
          "21.5 to 22.0% CP and 3050 to 3100 kcal ME/kg",
          "16.0% CP and 2700 kcal ME/kg",
          "25.0% CP and 3300 kcal ME/kg",
          "19.0% CP and 2900 kcal ME/kg"
        ],
        "a": 0,
        "e": "Broiler starter feed contains 21.5-22% CP and ~3100 kcal ME/kg to sustain rapid muscle protein deposition.",
        "topicId": "u4-t08",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "What is the recommended Crude Protein and Metabolizable Energy level for Broiler Finisher diet (22 to 42 days)?",
        "o": [
          "24.0% CP and 2800 kcal ME/kg",
          "19.5 to 20.0% CP and 3150 to 3200 kcal ME/kg",
          "14.0% CP and 2600 kcal ME/kg",
          "22.0% CP and 3000 kcal ME/kg"
        ],
        "a": 1,
        "e": "Broiler finisher feeds reduce CP to 19.5-20.0% while boosting ME to 3150-3200 kcal/kg to support final weight gain and fat finish.",
        "topicId": "u4-t08",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "What is the optimal dietary Calcium requirement for commercial White Leghorn laying hens during active egg production (Phase I Layer)?",
        "o": [
          "3.5 to 4.5% of the diet",
          "1.0% of the diet",
          "8.0 to 10.0% of the diet",
          "0.5% of the diet"
        ],
        "a": 0,
        "e": "Each eggshell contains ~2.0-2.2 g of calcium; with ~50-60% retention efficiency, a layer consuming 100-110 g feed requires 3.5 to 4.25 g Ca daily (3.5-4.5% of diet).",
        "topicId": "u4-t09",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "What proportion of the dietary calcium for laying hens should be provided as coarse particles (2 to 4 mm limestone or oyster shell) fed in the late afternoon?",
        "o": [
          "0% (all fine powder)",
          "50 to 70% of total dietary calcium",
          "100% fine powder",
          "5% only"
        ],
        "a": 1,
        "e": "Coarse calcium particles dissolve slowly in the gizzard overnight, providing continuous calcium flow during nighttime eggshell calcification.",
        "topicId": "u4-t09",
        "diff": 2,
        "subSection": "u4-s1"
      },
      {
        "q": "What is the recommended dietary Crude Protein level for Layer Chick (0 to 8 weeks) and Layer Grower (9 to 18 weeks) phases?",
        "o": [
          "20% CP for chick, and 15 to 16% CP for grower",
          "24% CP for chick, and 22% CP for grower",
          "16% CP for chick, and 20% CP for grower",
          "14% CP for chick, and 12% CP for grower"
        ],
        "a": 0,
        "e": "Layer pullets receive 20% CP in chick stage and 15-16% CP in grower stage, avoiding excessive weight gain that causes premature sexual maturity.",
        "topicId": "u4-t09",
        "diff": 2,
        "subSection": "u4-s1"
      },
      {
        "q": "Why is qualitative or quantitative feed restriction practiced during the grower phase (9 to 18 weeks) of egg-type pullets?",
        "o": [
          "To starve the birds to save feed cost",
          "To prevent feather growth",
          "To induce molting in pullets",
          "To prevent obesity, ensure uniform target body weight, and delay premature onset of lay to avoid small egg size and prolapse"
        ],
        "a": 3,
        "e": "Controlled feeding ensures pullets reach the desired frame size and body weight at 18-20 weeks, avoiding early lay of unmarketable pee-wee eggs and vent prolapse.",
        "topicId": "u4-t09",
        "diff": 2,
        "subSection": "u4-s1"
      },
      {
        "q": "Which anatomical region of the avian gastrointestinal tract is responsible for mechanical grinding of coarse seeds and grains using ingested grit?",
        "o": [
          "Proventriculus (True stomach)",
          "Crop (Ingluvies)",
          "Ceca",
          "Gizzard (Ventriculus)"
        ],
        "a": 3,
        "e": "The gizzard possesses thick, muscular walls lined with a tough koilin layer that grinds feed particles in the presence of insoluble grit.",
        "topicId": "u4-t01",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "What is the secretory function of the avian proventriculus?",
        "o": [
          "Mechanical mastication",
          "Secretion of gastric juice containing Hydrochloric Acid (HCl) and Pepsinogen",
          "Absorption of volatile fatty acids",
          "Storage and moistening of feed exclusively"
        ],
        "a": 1,
        "e": "The proventriculus is the glandular stomach of birds, secreting HCl and pepsinogen before feed passes into the muscular ventriculus.",
        "topicId": "u4-t01",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Why is dietary nitrogen in avian species excreted as Uric Acid rather than urea?",
        "o": [
          "Birds lack a liver",
          "Uric acid is converted into egg white",
          "Uric acid is nearly insoluble in water, allowing nitrogen excretion with minimal water loss (adaptation to flight and cleidoic eggs)",
          "Urea is explosive in feathers"
        ],
        "a": 2,
        "e": "Uric acid contains 4 nitrogens per mole and precipitates out as a semi-solid paste, conserving water and allowing embryo development inside non-cleidoic eggs.",
        "topicId": "u4-t01",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Which essential amino acid is first-limiting in standard maize-soybean meal commercial poultry diets?",
        "o": [
          "Lysine",
          "Threonine",
          "Tryptophan",
          "Methionine"
        ],
        "a": 3,
        "e": "Soybean meal is rich in lysine but naturally deficient in sulfur amino acids; hence, DL-methionine is universally the first limiting amino acid.",
        "topicId": "u4-t08",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Which essential amino acid is second-limiting in typical broiler diets based on maize and soybean meal?",
        "o": [
          "Valine",
          "Histidine",
          "Arginine",
          "Lysine or Threonine"
        ],
        "a": 3,
        "e": "After methionine, lysine is the second limiting amino acid, followed closely by L-threonine in broiler rations.",
        "topicId": "u4-t08",
        "diff": 2,
        "subSection": "u4-s1"
      },
      {
        "q": "Why do chickens have an exceptionally high dietary requirement for the basic amino acid Arginine?",
        "o": [
          "Chickens convert arginine into feathers",
          "Chickens completely lack the urea cycle and cannot synthesize ornithine or citrulline de novo",
          "Arginine is required to synthesize uric acid",
          "Chickens store arginine in the crop"
        ],
        "a": 1,
        "e": "Because birds excrete uric acid instead of urea, they lack functional carbamoyl phosphate synthetase-I and ornithine transcarbamylase, making arginine an absolute essential.",
        "topicId": "u4-t01",
        "diff": 2,
        "subSection": "u4-s1"
      },
      {
        "q": "What is the typical modern Feed Conversion Ratio (FCR) expected in commercial broiler chickens reared to 42 days of age?",
        "o": [
          "1.45 to 1.65 kg feed per kg live weight",
          "3.5 to 4.0 kg feed per kg live weight",
          "0.8 kg feed per kg live weight",
          "5.0 kg feed per kg live weight"
        ],
        "a": 0,
        "e": "Modern commercial broiler strains (Cobb 500, Ross 308) achieve remarkable FCRs of 1.45-1.65 kg feed per kg body weight at 2.0-2.5 kg live weight.",
        "topicId": "u4-t08",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "What is 'Cage Layer Fatigue' in high-producing commercial laying hens?",
        "o": [
          "Muscular fatigue from flapping wings in cages",
          "Acute osteoporosis and flaccid paralysis caused by excessive skeletal calcium depletion to maintain eggshell calcification",
          "Vitamin C deficiency",
          "Sleep deprivation in battery cages"
        ],
        "a": 1,
        "e": "Intense egg production drains medullary and cortical bone calcium; severe hypocalcemia and osteoporosis cause sternal recumbency and bone fractures.",
        "topicId": "u4-t09",
        "diff": 2,
        "subSection": "u4-s1"
      },
      {
        "q": "Which synthetic pigment is routinely supplemented in commercial layer feeds to impart the desirable golden-yellow color to egg yolks?",
        "o": [
          "Riboflavin powder",
          "Curcumin",
          "Carotenoids (Xanthophylls like lutein, zeaxanthin, and canthaxanthin)",
          "Hematoxylin"
        ],
        "a": 2,
        "e": "Yellow and red oxy-carotenoids (xanthophylls) are absorbed and deposited directly into the ovarian follicle lipid droplet to color egg yolks.",
        "topicId": "u4-t09",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Which species of domestic poultry is notoriously the most sensitive to Aflatoxin B1 toxicity, with dietary levels as low as 15 to 20 ppb causing fatal hepatic necrosis?",
        "o": [
          "Chickens",
          "Japanese Quails",
          "Ducklings (Anas platyrhynchos)",
          "Pigeons"
        ],
        "a": 2,
        "e": "Ducklings possess rapid hepatic bioactivation of aflatoxin B1 into toxic 8,9-epoxide with low glutathione S-transferase conjugation, making them hypersensitive.",
        "topicId": "u4-t11",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "What is the recommended dietary Crude Protein level for starting Turkey poults (0 to 4 weeks)?",
        "o": [
          "20.0% Crude Protein",
          "28.0% Crude Protein",
          "14.0% Crude Protein",
          "18.0% Crude Protein"
        ],
        "a": 1,
        "e": "Turkey poults have the highest protein requirement among commercial domestic birds, requiring 28% CP and 2800 kcal ME/kg in the starter phase.",
        "topicId": "u4-t11",
        "diff": 2,
        "subSection": "u4-s1"
      },
      {
        "q": "Japanese Quail (Coturnix coturnix japonica) starter diets require what level of Crude Protein?",
        "o": [
          "24 to 26% Crude Protein",
          "16% Crude Protein",
          "12% Crude Protein",
          "35% Crude Protein"
        ],
        "a": 0,
        "e": "Quail chicks grow rapidly and reach sexual maturity at 6 weeks, requiring 24-26% CP in starter and 20-22% CP in layer diets.",
        "topicId": "u4-t11",
        "diff": 2,
        "subSection": "u4-s1"
      },
      {
        "q": "Which metabolic disease in broiler chickens is caused by rapid growth rate, high metabolic rate, and hypoxia, leading to right ventricular dilation and fluid accumulation in the coelomic cavity?",
        "o": [
          "Crazy Chick Disease",
          "Curled Toe Paralysis",
          "Ascites Syndrome (Pulmonary Hypertension Syndrome)",
          "Slipped Tendon"
        ],
        "a": 2,
        "e": "Rapid muscle mass development demands high oxygen; inability of the cardiopulmonary system to oxygenate tissues causes pulmonary arterial hypertension, right ventricular failure, and ascites.",
        "topicId": "u4-t17",
        "diff": 2,
        "subSection": "u4-s1"
      },
      {
        "q": "Sudden Death Syndrome (Flip-Over Disease) in fast-growing male broilers is primarily a nutritional-metabolic disorder associated with:",
        "o": [
          "Severe intestinal coccidiosis",
          "Acute fatal cardiac ventricular fibrillation triggered by high energy intake and rapid growth",
          "Esophageal impaction with whole corn",
          "Vitamin A deficiency"
        ],
        "a": 1,
        "e": "Flip-over disease occurs in healthy, rapidly growing broilers that suddenly flap wings, lose balance, flip on their backs, and die of cardiac ventricular fibrillation.",
        "topicId": "u4-t17",
        "diff": 2,
        "subSection": "u4-s1"
      },
      {
        "q": "What is the non-phytate (available) phosphorus requirement of broiler chickens?",
        "o": [
          "0.45% in starter and 0.40% in finisher diets",
          "1.5% throughout",
          "0.05% throughout",
          "2.0% throughout"
        ],
        "a": 0,
        "e": "Broilers require approximately 0.45% available phosphorus in starter and 0.40% in finisher diets to ensure normal skeletal ossification.",
        "topicId": "u4-t08",
        "diff": 2,
        "subSection": "u4-s1"
      },
      {
        "q": "Why is supplemental microbial phytase enzyme commonly added to commercial poultry rations containing maize and soybean meal?",
        "o": [
          "To release phosphorus bound in myo-inositol hexakisphosphate (phytate), reducing mineral dicalcium phosphate addition and environmental pollution",
          "To digest feather keratin",
          "To synthesize vitamin D3",
          "To convert uric acid into glucose"
        ],
        "a": 0,
        "e": "About 60-70% of plant phosphorus is locked in phytate; microbial phytase hydrolyzes phosphate groups, boosting phosphorus bioavailability by 20-30%.",
        "topicId": "u4-t10",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Which anti-nutritional soluble non-starch polysaccharide (NSP) in wheat and barley increases digesta viscosity, causing sticky wet droppings in broilers?",
        "o": [
          "Cellulose",
          "Arabinoxylans and beta-glucans",
          "Starch",
          "Pectin"
        ],
        "a": 1,
        "e": "Soluble arabinoxylans (in wheat) and beta-glucans (in barley) form viscous gels in the avian gut, slowing nutrient diffusion and creating sticky wet droppings.",
        "topicId": "u4-t10",
        "diff": 2,
        "subSection": "u4-s1"
      },
      {
        "q": "Which exogenous enzyme supplement is added to barley-based poultry diets to hydrolyze viscous non-starch polysaccharides?",
        "o": [
          "Beta-glucanase and Xylanase",
          "Pepsin",
          "Lipase",
          "Urease"
        ],
        "a": 0,
        "e": "Endo-beta-glucanase and xylanase cleave the backbone of soluble NSPs, reducing intestinal viscosity, improving FCR, and resolving wet litter.",
        "topicId": "u4-t10",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Gout in poultry (visceral and articular gout) is pathologically characterized by the deposition of which chemical crystals in internal organs and joints?",
        "o": [
          "Calcium oxalate crystals",
          "Cholesterol crystals",
          "Struvite crystals",
          "Monosodium Urate crystals"
        ],
        "a": 3,
        "e": "Impaired renal clearance (from dehydration, excess dietary protein, or nephropathogenic infectious bronchitis) causes hyperuricemia and white urate deposition on visceral serosa.",
        "topicId": "u4-t17",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Which vitamin deficiency causes Crazy Chick Disease (Encephalomalacia), characterized by ataxia, head retraction, and cerebellar hemorrhage?",
        "o": [
          "Vitamin A",
          "Vitamin C",
          "Vitamin E (alpha-tocopherol)",
          "Vitamin D3"
        ],
        "a": 2,
        "e": "Vitamin E deficiency in the presence of oxidized dietary polyunsaturated fatty acids causes free radical peroxidation of cerebellar cell membranes.",
        "topicId": "u4-t17",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Exudative diathesis in chicks is a subcutaneous generalized edema caused by a combined deficiency of:",
        "o": [
          "Vitamin K and Iron",
          "Vitamin E and Selenium",
          "Vitamin B12 and Cobalt",
          "Calcium and Vitamin D"
        ],
        "a": 1,
        "e": "Both antioxidant defenses fail: membrane-bound alpha-tocopherol and cytosolic glutathione peroxidase (Se-dependent), leaking plasma proteins subcutaneously.",
        "topicId": "u4-t17",
        "diff": 2,
        "subSection": "u4-s1"
      },
      {
        "q": "Perosis (slipped tendon) in poultry is caused by a dietary deficiency of which trace mineral and water-soluble vitamin?",
        "o": [
          "Manganese and Choline (or Biotin/Folic acid)",
          "Iron and Vitamin C",
          "Copper and Riboflavin",
          "Zinc and Vitamin B12"
        ],
        "a": 0,
        "e": "Manganese and choline are essential for proteoglycan synthesis and epiphyseal chondrogenesis; deficiency causes flattening of the hock and tendon displacement.",
        "topicId": "u4-t17",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "What is the primary sign of Riboflavin (Vitamin B2) deficiency in young chicks?",
        "o": [
          "Goose stepping",
          "Big head",
          "Curled Toe Paralysis",
          "Rickets"
        ],
        "a": 2,
        "e": "Myelin sheath degeneration in the sciatic nerve causes chicks to walk on their hocks with their toes curled inward.",
        "topicId": "u4-t17",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Biotin deficiency in chicks produces which pathognomonic diagnostic lesion?",
        "o": [
          "Severe dermatitis on the bottoms of the feet and corners of the beak, and Fatty Liver and Kidney Syndrome (FLKS)",
          "Enlarged liver with cirrhosis",
          "Blindness",
          "Loss of plumage color"
        ],
        "a": 0,
        "e": "Biotin deficiency causes crusty plantar pododermatitis, perioral crusts, and FLKS due to failure of pyruvate carboxylase and gluconeogenesis.",
        "topicId": "u4-t17",
        "diff": 2,
        "subSection": "u4-s1"
      },
      {
        "q": "A laying hen consuming 100 g feed per day containing 4.0% calcium ingests how much total calcium daily?",
        "o": [
          "0.4 grams",
          "4.0 grams",
          "40.0 grams",
          "1.0 gram"
        ],
        "a": 1,
        "e": "Total Ca ingested = 100 g x 0.04 = 4.0 g. With ~55% retention, ~2.2 g is deposited in the eggshell.",
        "topicId": "u4-t09",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "What is the maximum safe inclusion level of raw Rice Polish in commercial broiler diets in India without fat rancidity or antinutritional depression?",
        "o": [
          "50%",
          "10 to 15% (stabilized or de-oiled)",
          "80%",
          "0% (strictly forbidden)"
        ],
        "a": 1,
        "e": "Raw rice polish contains high oil susceptible to hydrolytic lipase rancidity; inclusion is restricted to 10-15%, whereas de-oiled rice bran (DORB) can be higher.",
        "topicId": "u4-t10",
        "diff": 2,
        "subSection": "u4-s1"
      },
      {
        "q": "Why does inclusion of excessive Fish Meal (>8-10%) in poultry diets cause a fishy taint in eggs and broiler meat?",
        "o": [
          "High concentrations of trimethylamine (TMA) and polyunsaturated fatty acids accumulate in meat lipids and egg yolk",
          "Fish meal contains urea",
          "Fish meal is indigestible",
          "Fish meal destroys liver glycogen"
        ],
        "a": 0,
        "e": "High levels of trimethylamine and fish oil PUFAs deposit in the yolk and adipose tissue, producing objectionable fishy odors and flavors.",
        "topicId": "u4-t10",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "The inclusion of dried Azolla pinnata (an aquatic fern) in backyard poultry rations serves as an economical source of:",
        "o": [
          "Pure starch",
          "Indigestible silica only",
          "Saturated fat",
          "Crude Protein (20-25% CP) and Carotenoid pigments"
        ],
        "a": 3,
        "e": "Azolla dry matter contains 20-25% crude protein, essential amino acids, and xanthophyll pigments, replacing up to 10-15% of commercial concentrate.",
        "topicId": "u4-t10",
        "diff": 2,
        "subSection": "u4-s1"
      },
      {
        "q": "In commercial layer management, 'Induced Molting' is a nutritional technique used to:",
        "o": [
          "Fatten the birds for broiler meat",
          "Eliminate Salmonella infections",
          "Prevent feather loss",
          "Rejuvenate the hen's reproductive tract and restore high egg production and shell quality for a second laying cycle"
        ],
        "a": 3,
        "e": "Controlled dietary manipulation (fasting or feeding low sodium/high zinc) induces rapid cessation of lay and feather shedding, followed by a rejuvenated second cycle.",
        "topicId": "u4-t09",
        "diff": 2,
        "subSection": "u4-s1"
      },
      {
        "q": "What is the recommended Crude Protein and Lysine requirement for young nursing Piglets (Creep feed, 5 to 10 kg body weight)?",
        "o": [
          "14% Crude Protein and 0.6% Lysine",
          "20 to 22% Crude Protein and 1.3 to 1.4% Lysine",
          "30% Crude Protein and 2.5% Lysine",
          "10% Crude Protein and 0.2% Lysine"
        ],
        "a": 1,
        "e": "Creep diets for nursing piglets must be highly concentrated in protein (20-22% CP) with a minimum of 1.3-1.4% digestible lysine to support rapid muscle growth.",
        "topicId": "u4-t04",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "Why must all newborn piglets housed on concrete floors receive an intramuscular injection of 150 to 200 mg Iron Dextran within 3 days of birth?",
        "o": [
          "Iron stimulates early tooth growth",
          "Iron prevents diarrhea caused by E. coli",
          "Iron is required for tail docked healing",
          "Piglets are born with minimal iron stores (~50 mg) and sow milk provides only ~1 mg/day against a requirement of 7 mg/day ('Piglet Anemia / Thumps')"
        ],
        "a": 3,
        "e": "Without access to soil, suckling piglets exhaust hepatic iron within a week; iron dextran injection prevents microcytic hypochromic anemia and dyspnea (thumps).",
        "topicId": "u4-t04",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "What is the first-limiting amino acid in swine diets based primarily on cereal grains (maize, barley, wheat)?",
        "o": [
          "DL-Methionine",
          "L-Tryptophan",
          "L-Valine",
          "L-Lysine"
        ],
        "a": 3,
        "e": "Cereals have low lysine concentrations; L-lysine is universally the first limiting amino acid in growing-finishing swine.",
        "topicId": "u4-t04",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "In swine nutrition, the 'Ideal Protein Concept' defines all essential amino acid requirements as a fixed percentage relative to:",
        "o": [
          "Methionine (set at 100%)",
          "Lysine (set at 100%)",
          "Crude Protein (set at 100%)",
          "Threonine (set at 100%)"
        ],
        "a": 1,
        "e": "Because lysine is first-limiting and used almost exclusively for muscle protein accretion, all other essential amino acids are patterned as a ratio to Lysine = 100.",
        "topicId": "u4-t01",
        "diff": 2,
        "subSection": "u4-s2"
      },
      {
        "q": "What is the Crude Protein requirement for growing pigs (20 to 50 kg) and finishing pigs (50 to 90 kg)?",
        "o": [
          "24% CP for growers, and 20% CP for finishers",
          "12% CP for growers, and 10% CP for finishers",
          "20% CP for growers, and 22% CP for finishers",
          "16 to 18% CP for growers, and 14 to 15% CP for finishers"
        ],
        "a": 3,
        "e": "As pigs mature, protein accretion slows while fat deposition increases; hence dietary CP decreases from 16-18% in growers to 14-15% in finishers.",
        "topicId": "u4-t04",
        "diff": 2,
        "subSection": "u4-s2"
      },
      {
        "q": "Why is feed intake strictly restricted (1.8 to 2.2 kg/day of a balanced diet) in pregnant gestating sows?",
        "o": [
          "Because sows cannot swallow large meals",
          "To prevent abortions from stomach rupture",
          "To keep sow body weight below 50 kg",
          "To prevent excessive maternal fatness, which causes embryonic mortality, farrowing difficulties (dystocia), and low lactation feed intake"
        ],
        "a": 3,
        "e": "Over-conditioned sows suffer high embryonic losses, sluggish farrowing, and poor feed intake during lactation; restricted feeding optimizes reproductive performance.",
        "topicId": "u4-t05",
        "diff": 2,
        "subSection": "u4-s2"
      },
      {
        "q": "How should a lactating sow nursing 10 to 12 vigorous piglets be fed?",
        "o": [
          "Restricted to 2 kg per day",
          "Ad libitum (full feeding) with a high-energy, high-protein diet (16-18% CP, >1.0% lysine)",
          "Fed wheat straw and water only",
          "Fed raw whole cottonseed"
        ],
        "a": 1,
        "e": "A heavy lactating sow produces 8-12 kg milk daily and requires ad libitum feed (approx. 2 kg base + 0.5 kg per nursing piglet = 6-8 kg/day) to prevent severe weight loss.",
        "topicId": "u4-t05",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "In horses, what anatomical compartment serves as the primary site of microbial fermentation of structural fibrous carbohydrates?",
        "o": [
          "Reticulorumen",
          "Stomach",
          "Cecum and Large Colon (Hindgut)",
          "Small Intestine"
        ],
        "a": 2,
        "e": "The horse is a monogastric hindgut herbivore; microbial fermentation of fiber into volatile fatty acids occurs in the massive cecum (30 L) and large colon (80 L).",
        "topicId": "u4-t06",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "Can the horse efficiently absorb and utilize microbial protein synthesized in its cecum and large colon?",
        "o": [
          "Yes, hindgut microbial protein is absorbed across the rectum",
          "Yes, horses perform continuous cecotrophy like rabbits",
          "No, because microbial protein is synthesized distal to the stomach and small intestine and is excreted unabsorbed in feces",
          "Yes, microbial amino acids are absorbed directly into the bile duct"
        ],
        "a": 2,
        "e": "Unlike ruminants whose microbes are digested in the abomasum, horses excrete hindgut microbial protein in feces; dietary essential amino acids must be supplied pre-cecally.",
        "topicId": "u4-t06",
        "diff": 2,
        "subSection": "u4-s2"
      },
      {
        "q": "What is the capacity of the adult horse's stomach relative to its total digestive tract volume?",
        "o": [
          "Massive, holding 150 liters like the cow's rumen",
          "50% of total volume",
          "Zero (horses have no stomach)",
          "Very small, representing only 8 to 10% of total tract volume (9 to 15 liters)"
        ],
        "a": 3,
        "e": "The equine stomach is relatively small (9-15 L), designed for continuous grazing of small forage amounts rather than infrequent large grain meals.",
        "topicId": "u4-t06",
        "diff": 2,
        "subSection": "u4-s2"
      },
      {
        "q": "Why is an adult horse completely unable to vomit or regurgitate stomach contents during acute gastric distension?",
        "o": [
          "Extremely tight cardiac sphincter with strong oblique muscular fibers and acute angle of esophageal entry",
          "Absence of a diaphragm",
          "Lack of vomiting centers in the equine brain",
          "Liquid stomach contents solidify instantly"
        ],
        "a": 0,
        "e": "The equine cardiac sphincter acts as a one-way valve; severe gastric distension from grain engorgement causes fatal gastric rupture rather than vomiting.",
        "topicId": "u4-t06",
        "diff": 2,
        "subSection": "u4-s2"
      },
      {
        "q": "What nutritional crisis occurs in horses when a large meal of starch-rich grain engorges the small intestine and spills into the cecum?",
        "o": [
          "Immediate severe hypocalcemia",
          "Rapid microbial fermentation of starch in the cecum produces lactic acid, dropping cecal pH, killing Gram-negative bacteria, releasing endotoxins, and causing Colic and Founder (Laminitis)",
          "Rupture of the spleen",
          "Complete calcification of the liver"
        ],
        "a": 1,
        "e": "Starch spillover triggers cecal lactic acidosis; mucosal damage allows absorption of bacterial endotoxins, causing intense abdominal pain (colic) and digital laminitis (founder).",
        "topicId": "u4-t06",
        "diff": 2,
        "subSection": "u4-s2"
      },
      {
        "q": "To prevent equine colic and maintain normal hindgut motility, what is the absolute minimum forage (hay/pasture) requirement for a horse?",
        "o": [
          "0.1% of body weight",
          "Zero forage (100% pelleted grain)",
          "5% of body weight",
          "At least 1.0 to 1.5% of body weight in dry matter (or >50% of total diet DM)"
        ],
        "a": 3,
        "e": "Horses must receive at least 1.0-1.5% of their body weight daily as long coarse forage to maintain cecal fill, prevent impaction colic, and prevent stereotypic vice (crib-biting).",
        "topicId": "u4-t06",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "Which feed grain is considered the safest and most traditional concentrate for horses due to its high fiber hull (10-12% CF) which prevents rapid grain engorgement?",
        "o": [
          "Wheat",
          "Rye",
          "Maize",
          "Oats (Avena sativa)"
        ],
        "a": 3,
        "e": "Whole oats contain a fibrous hull that forms a loose, porous mass in the equine stomach, reducing the risk of impaction and starch spillover into the cecum.",
        "topicId": "u4-t07",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "What is the primary energy substrate utilized by horses performing slow, prolonged, aerobic endurance exercise (e.g. trail riding)?",
        "o": [
          "Muscle glycogen via anaerobic glycolysis exclusively",
          "Pure blood urea",
          "Free fatty acids (aerobic beta-oxidation) and cecal volatile fatty acids",
          "Dietary amino acids exclusively"
        ],
        "a": 2,
        "e": "Low-to-moderate intensity sustained exercise relies on oxidative phosphorylation of mobilized fatty acids and cecally absorbed acetate, sparing muscle glycogen.",
        "topicId": "u4-t07",
        "diff": 2,
        "subSection": "u4-s2"
      },
      {
        "q": "In high-performance racehorses, vegetable oil is commonly supplemented up to 8 to 10% of the concentrate ration to:",
        "o": [
          "Prevent hair growth",
          "Induce diarrhea before races",
          "Replace all forage fiber",
          "Increase caloric density without overloading the gut with starch, and spare muscle glycogen reserves"
        ],
        "a": 3,
        "e": "Dietary fat is energy-dense (approx. 9 Mcal/kg) and safe for the equine stomach, helping prevent grain-induced laminitis while extending stamina in racing.",
        "topicId": "u4-t07",
        "diff": 2,
        "subSection": "u4-s2"
      },
      {
        "q": "What metabolic disorder in horses, colloquially termed 'Monday Morning Disease' or 'Tying-Up' (Exertional Rhabdomyolysis), is triggered by feeding full grain rations during weekend rest days followed by sudden heavy exercise?",
        "o": [
          "Milk fever",
          "Ketosis",
          "Grass tetany",
          "Azoturia (Exertional Rhabdomyolysis / Polysaccharide Storage Myopathy)"
        ],
        "a": 3,
        "e": "Excessive glycogen accumulation in muscle during rest followed by exercise leads to lactic acid buildup, muscle fiber necrosis, myoglobinuria ('coffee-colored' urine), and stiff hindquarters.",
        "topicId": "u4-t07",
        "diff": 2,
        "subSection": "u4-s2"
      },
      {
        "q": "Why is sudden abrupt change of feed dangerous in horses?",
        "o": [
          "It causes horses to develop horns",
          "The horse immediately sheds its hooves",
          "Hindgut microbial populations require 7 to 10 days to adapt; sudden feed shifts cause dysbiosis, gas accumulation, and fatal spasmodic or impaction colic",
          "It causes instantaneous blindness"
        ],
        "a": 2,
        "e": "Equine cecal microbes are adapted to specific substrate profiles; any dietary changes should be phased in gradually over 7-10 days to prevent dysbiosis and colic.",
        "topicId": "u4-t07",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "What is the recommended ratio of Calcium to Phosphorus in equine diets across all life stages?",
        "o": [
          "1.2 : 1 to 2.0 : 1 (and never less than 1 : 1)",
          "0.5 : 1 (High Phosphorus)",
          "10 : 1",
          "Zero Calcium"
        ],
        "a": 0,
        "e": "Horses are extremely sensitive to phosphorus excess; phosphorus must never exceed calcium (Ca:P should be 1.2:1 to 2:1) to prevent osteodystrophia fibrosa (big head).",
        "topicId": "u4-t06",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "In pig rations, which trace mineral is routinely supplemented at pharmacological growth-promoting levels (150 to 250 ppm) in starter diets?",
        "o": [
          "Lead",
          "Mercury",
          "Cadmium",
          "Copper (as Copper Sulfate)"
        ],
        "a": 3,
        "e": "High levels of dietary copper (150-250 ppm) exert an antimicrobial effect in the pig gut, improving post-weaning growth rate and feed conversion efficiency.",
        "topicId": "u4-t04",
        "diff": 2,
        "subSection": "u4-s2"
      },
      {
        "q": "Which mineral is supplemented in piglet diets at 2000 to 3000 ppm for the first 2 weeks post-weaning to control post-weaning diarrhea (scours)?",
        "o": [
          "Iron",
          "Magnesium",
          "Potassium",
          "Zinc (as Zinc Oxide)"
        ],
        "a": 3,
        "e": "Pharmacological levels of Zinc Oxide (ZnO) stabilize gut mucosal barrier integrity and suppress pathogenic E. coli adhesion in freshly weaned pigs.",
        "topicId": "u4-t04",
        "diff": 2,
        "subSection": "u4-s2"
      },
      {
        "q": "What is the consequence of feeding raw, unprocessed soybeans to growing pigs?",
        "o": [
          "Immediate death from cyanide",
          "Active Kunitz trypsin inhibitors inhibit protein digestion and cause pancreatic hypertrophy, severely depressing growth",
          "Causes acute rickets",
          "Pigs fatten at double the normal rate"
        ],
        "a": 1,
        "e": "Soybean trypsin inhibitors block digestive proteases; heat processing (extrusion or roasting) is mandatory to denature trypsin inhibitors for swine.",
        "topicId": "u4-t10",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "What is 'Soft Pork' in swine production, and how is it caused nutritionally?",
        "o": [
          "Pork contaminated with water",
          "Oily, soft carcass fat caused by feeding diets high in unsaturated fatty acids (e.g. full-fat maize, rice bran, or vegetable oils)",
          "Pork derived from very young piglets",
          "Carcass devoid of skeletal bone"
        ],
        "a": 1,
        "e": "Non-ruminants absorb unsaturated dietary fatty acids directly and deposit them intact into adipose tissue, resulting in soft, oily, unmarketable fat that goes rancid quickly.",
        "topicId": "u4-t05",
        "diff": 2,
        "subSection": "u4-s2"
      },
      {
        "q": "Why is the use of non-protein nitrogen (urea) ineffective and dangerous in swine feeding?",
        "o": [
          "Urea causes pig bristles to fall off",
          "Urea destroys dietary starch",
          "Pigs refuse to eat white powders",
          "Swine have an enzymatic, non-fermentative stomach and small intestine prior to the cecum, so urea is rapidly absorbed as toxic ammonia without being converted to protein"
        ],
        "a": 3,
        "e": "Pigs lack a pre-absorptive fermentation vat; dietary urea is absorbed as free ammonia, stressing the liver and risking toxic hyperammonemia without contributing to amino acids.",
        "topicId": "u4-t04",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "What is the recommended inclusion level of De-oiled Rice Bran (DORB) in grower-finisher pig rations in India?",
        "o": [
          "Up to 90%",
          "Strictly 0%",
          "0.5% only",
          "Up to 20 to 30%"
        ],
        "a": 3,
        "e": "DORB is a common economical agro-byproduct in India; its high fiber content limits inclusion to 20-30% in growing-finishing pigs.",
        "topicId": "u4-t10",
        "diff": 2,
        "subSection": "u4-s2"
      },
      {
        "q": "Foals born to mares grazing endophyte-infected tall fescue (*Neotyphodium coenophialum*) grass during late gestation suffer from:",
        "o": [
          "Instant twin births",
          "Excessive milk production",
          "Prolonged gestation, agalactia (no milk), thickened placenta, and high foal mortality",
          "Immediate shedding of teeth"
        ],
        "a": 2,
        "e": "Fescue ergot alkaloids act as dopamine agonists, suppressing maternal prolactin secretion, leading to severe agalactia, placental thickening, and foal death.",
        "topicId": "u4-t07",
        "diff": 3,
        "subSection": "u4-s2"
      },
      {
        "q": "What is 'Creep Feeding' in foals, and when should it be introduced?",
        "o": [
          "Providing a balanced, high-protein concentrate in a restricted feeder accessible only to foals, introduced at 2 to 3 weeks of age",
          "Feeding foals on the floor",
          "Providing creep feed after 1 year",
          "Feeding mares liquid milk replacer"
        ],
        "a": 0,
        "e": "Mare milk yield declines after peak lactation at 4-6 weeks; creep feeding from 2-3 weeks ensures smooth growth and reduces weaning shock.",
        "topicId": "u4-t06",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "Which mineral deficiency in growing foals is a primary cause of Developmental Orthopedic Disease (DOD), epiphysitis, and osteochondrosis dissecans (OCD)?",
        "o": [
          "Sodium and Chlorine",
          "Potassium and Fluorine",
          "Lead and Cadmium",
          "Copper and Zinc"
        ],
        "a": 3,
        "e": "Copper is required for lysyl oxidase cross-linking of cartilage collagen; low copper intake during rapid growth causes cartilage maturation failure and OCD.",
        "topicId": "u4-t06",
        "diff": 2,
        "subSection": "u4-s2"
      },
      {
        "q": "Adult working horses performing heavy draft or competition work sweat profusely, losing large quantities of which electrolytes?",
        "o": [
          "Calcium and Phosphorus only",
          "Copper and Iron",
          "Iodine and Fluorine",
          "Sodium, Potassium, and Chloride"
        ],
        "a": 3,
        "e": "Equine sweat is hypertonic with respect to potassium and contains copious sodium and chloride; working horses require commercial electrolyte supplementation.",
        "topicId": "u4-t07",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "Feeding spoiled, moldy corn containing the mycotoxin Fumonisin B1 (produced by *Fusarium verticillioides*) to horses causes which fatal neurotoxic disease?",
        "o": [
          "Grass tetany",
          "Rickets",
          "Equine Leukoencephalomalacia (ELEM / Moldy Corn Poisoning)",
          "Night blindness"
        ],
        "a": 2,
        "e": "Fumonisin B1 disrupts sphingolipid biosynthesis, producing liquefactive necrosis of the cerebral white matter (leukoencephalomalacia) and acute liver necrosis.",
        "topicId": "u4-t07",
        "diff": 3,
        "subSection": "u4-s2"
      },
      {
        "q": "Why is the domestic cat (Felis catus) classified as an 'Obligate Carnivore' from a nutritional and metabolic perspective?",
        "o": [
          "Cats cannot swallow plant material",
          "Cats lack teeth to chew grass",
          "Cats do not have a stomach",
          "Cats have unique metabolic evolutionary constraints requiring nutrients found exclusively in animal tissues (taurine, arachidonic acid, preformed vitamin A, high protein)"
        ],
        "a": 3,
        "e": "Felines must consume animal tissues to obtain nutrients they cannot synthesize: taurine, arachidonic acid, retinol, niacin, and high obligatory nitrogen catabolism.",
        "topicId": "u4-t15",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "Why is the minimum dietary protein requirement of cats roughly two to three times higher than that of adult dogs?",
        "o": [
          "Cats cannot digest carbohydrates",
          "Cats excrete whole protein in urine",
          "Cats lack digestive proteases",
          "Cats cannot down-regulate hepatic transaminases and urea cycle enzymes, resulting in continuous, irreversible amino acid catabolism"
        ],
        "a": 3,
        "e": "Hepatic amino acid catabolic enzymes (ALT, AST, urea cycle enzymes) in cats remain permanently active at high levels, constantly breaking down protein for gluconeogenesis.",
        "topicId": "u4-t15",
        "diff": 2,
        "subSection": "u4-s3"
      },
      {
        "q": "What clinical syndrome develops in cats fed a taurine-deficient diet for several months?",
        "o": [
          "Acute rickets and big head",
          "Immediate bilateral cataract",
          "Dilated Cardiomyopathy (DCM) and Feline Central Retinal Degeneration (FCRD)",
          "Severe hair growth over the cornea"
        ],
        "a": 2,
        "e": "Taurine is essential for myocardial contractility and photoreceptor structure in the area centralis of the retina; deficiency leads to DCM and irreversible blindness.",
        "topicId": "u4-t15",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "Why is a single meal lacking the amino acid Arginine potentially fatal within hours in a domestic cat?",
        "o": [
          "Cats immediately develop hypoglycemia",
          "The stomach ruptures",
          "Body temperature plunges to zero",
          "Cats cannot synthesize ornithine; without arginine, the urea cycle halts immediately, causing acute toxic hyperammonemic encephalopathy"
        ],
        "a": 3,
        "e": "Cats have high baseline protein catabolism generating ammonia continuously; omitting arginine stalls the urea cycle, causing toxic blood ammonia spikes, seizures, and death within hours.",
        "topicId": "u4-t15",
        "diff": 2,
        "subSection": "u4-s3"
      },
      {
        "q": "Why cannot domestic cats convert the amino acid Tryptophan to Niacin (Vitamin B3)?",
        "o": [
          "Cats do not absorb tryptophan",
          "Cats lack kidneys",
          "Tryptophan is toxic to the cat liver",
          "Extremely high hepatic activity of picolinic acid carboxylase rapidly diverts intermediates toward the acetyl-CoA pathway instead of quinolinic acid"
        ],
        "a": 3,
        "e": "Picolinic carboxylase activity is 30-50 times higher in cats than in other mammals, rapidly degrading tryptophan intermediates and making dietary niacin an absolute requirement.",
        "topicId": "u4-t15",
        "diff": 3,
        "subSection": "u4-s3"
      },
      {
        "q": "Feline Lower Urinary Tract Disease (FLUTD) characterized by sterile Struvite uroliths is exacerbated by which dietary factor?",
        "o": [
          "Excess dietary vitamin C",
          "High dietary magnesium and ash in diets that produce an alkaline urinary pH (> 6.8)",
          "Feeding pure fat",
          "Low dietary protein"
        ],
        "a": 1,
        "e": "Struvite (magnesium ammonium phosphate hexahydrate) crystallizes readily in alkaline urine (pH > 6.8) containing elevated magnesium; acidifying diets (pH 6.2-6.5) dissolve struvite.",
        "topicId": "u4-t15",
        "diff": 2,
        "subSection": "u4-s3"
      },
      {
        "q": "Why are Chocolate and cocoa products highly toxic to domestic dogs?",
        "o": [
          "Chocolate contains high starch that causes rumen acidosis",
          "Cocoa binds dog hemoglobin",
          "They contain Theobromine and Caffeine (methylxanthines), which dogs metabolize extremely slowly, causing cardiac arrhythmias, seizures, and death",
          "Chocolate destroys canine teeth instantly"
        ],
        "a": 2,
        "e": "Dogs have a long elimination half-life for theobromine (~17.5 hours); toxic doses (100-200 mg/kg) cause adenosine receptor antagonism, tachycardia, and fatal seizures.",
        "topicId": "u4-t14",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "Ingestion of Onions, Garlic, and Chives (*Allium* species) causes which toxic hematological disorder in dogs and cats?",
        "o": [
          "Acute bone marrow aplasia",
          "Severe leukemia",
          "Hemolytic anemia characterized by Heinz body formation and eccentrocytes",
          "Polycythemia vera"
        ],
        "a": 2,
        "e": "Organic sulfur compounds (n-propyl disulfide, thiosulfates) oxidize red blood cell hemoglobin, precipitating Heinz bodies and causing intravascular and extravascular hemolysis.",
        "topicId": "u4-t14",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "The artificial sweetener Xylitol causes which life-threatening acute toxic reaction when ingested by dogs?",
        "o": [
          "Massive insulin surge causing profound hypoglycemia followed by acute hepatic necrosis",
          "Sudden cardiac arrest",
          "Severe diabetes mellitus",
          "Loss of coat color"
        ],
        "a": 0,
        "e": "Xylitol stimulates a potent, dose-dependent release of insulin from the canine pancreas, dropping blood glucose to lethal levels within 30-60 minutes, followed by acute liver failure.",
        "topicId": "u4-t14",
        "diff": 2,
        "subSection": "u4-s3"
      },
      {
        "q": "Ingestion of Grapes and Raisins by domestic dogs is clinically associated with the unpredictable onset of:",
        "o": [
          "Acute blindness",
          "Pancreatic hypertrophy",
          "Acute oliguric or anuric renal failure",
          "Immediate loss of hearing"
        ],
        "a": 2,
        "e": "Tartaric acid present in grapes causes acute proximal tubular necrosis and acute renal failure in sensitive canines.",
        "topicId": "u4-t14",
        "diff": 2,
        "subSection": "u4-s3"
      },
      {
        "q": "What is the recommended dietary Crude Protein requirement for growing Puppies compared to Adult Dogs at maintenance?",
        "o": [
          "26 to 28% CP for puppies, and 18 to 22% CP for adult maintenance",
          "10% CP for puppies, and 30% CP for adults",
          "40% CP for puppies, and 10% CP for adults",
          "Protein requirements are identical across all life stages"
        ],
        "a": 0,
        "e": "AAFCO and NRC guidelines recommend 26-28% CP and 8% fat for growing puppies, compared to 18-22% CP for adult canine maintenance.",
        "topicId": "u4-t14",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "Why must domestic Rabbits (Oryctolagus cuniculus) consume high-fiber diets containing at least 14 to 16% Crude Fiber (or >30% NDF)?",
        "o": [
          "Rabbits cannot digest any nutrients other than fiber",
          "Fiber is required to synthesize vitamin C",
          "Fiber stops rabbit teeth from falling out",
          "Indigestible long fiber stimulates cecocolonic motility, prevents trichobezoars (hairballs), and prevents fatal enterotoxemia"
        ],
        "a": 3,
        "e": "Indigestible coarse fiber drives the separation mechanism in the proximal colon, flushing fiber out while moving fermentable fluid into the cecum, preventing stasis and enterotoxemia.",
        "topicId": "u4-t13",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "What is 'Cecotrophy' (Pseudorumination) in rabbits?",
        "o": [
          "Regurgitation of stomach contents to chew cud",
          "Eating soil to absorb minerals",
          "Feeding exclusively on cereal grains",
          "The ingestion of nutrient-rich soft nighttime fecal pellets directly from the anus to recover microbial protein, B vitamins, and minerals"
        ],
        "a": 3,
        "e": "Cecotropes are soft mucus-coated pellets fermented in the cecum; rabbits swallow them whole from the anus, allowing digestion of high-quality microbial protein and B-vitamins.",
        "topicId": "u4-t13",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "What fatal clinical condition occurs in rabbits fed excessive high-starch concentrate pellets and inadequate hay?",
        "o": [
          "Mucoid Enteritis / Enterotoxemia caused by cecal starch overload proliferating Clostridium spiroforme",
          "Acute rickets",
          "Sudden gastric rupture",
          "Blind staggers"
        ],
        "a": 0,
        "e": "Excess starch spills into the cecum, disrupting the normal symbiotic flora and allowing toxigenic Clostridium spiroforme to produce lethal iota-like toxin.",
        "topicId": "u4-t13",
        "diff": 2,
        "subSection": "u4-s3"
      },
      {
        "q": "Why do Guinea Pigs (*Cavia porcellus*) have an absolute obligate dietary requirement for Vitamin C (L-Ascorbic Acid)?",
        "o": [
          "They lack the functional liver enzyme L-gulonolactone oxidase required to synthesize ascorbic acid from glucose",
          "They destroy vitamin C in their kidneys",
          "They excrete vitamin C as sweat",
          "Vitamin C is toxic to their stomach"
        ],
        "a": 0,
        "e": "Like humans and primates, guinea pigs have a loss-of-function mutation in the GULO gene and develop fatal scurvy (hemorrhages, swollen joints) without dietary Vitamin C.",
        "topicId": "u4-t12",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "What is the daily Vitamin C requirement for a healthy adult non-pregnant guinea pig?",
        "o": [
          "1000 mg per day",
          "10 to 20 mg per day (increasing to 30 mg during pregnancy)",
          "0.01 mg per day",
          "Zero (guinea pigs don't need vitamin C)"
        ],
        "a": 1,
        "e": "Adult guinea pigs require 10-20 mg ascorbic acid daily in drinking water or fresh greens (cabbage, capsicum) to prevent collagen synthesis failure.",
        "topicId": "u4-t12",
        "diff": 2,
        "subSection": "u4-s3"
      },
      {
        "q": "Laboratory Rats (*Rattus norvegicus*) and Mice (*Mus musculus*) are routinely fed standardized pelleted diets primarily to:",
        "o": [
          "Prevent selective sorting of favorite ingredients and provide complete, uniform nutrition with constant tooth-wearing hardness",
          "Make the animals grow fat quickly",
          "Induce diabetes for research",
          "Eliminate all gut bacteria"
        ],
        "a": 0,
        "e": "Homogeneous autoclavable pellets ensure consistent nutrient intake, prevent selective eating, and provide necessary mechanical resistance to wear down open-rooted incisors.",
        "topicId": "u4-t12",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "Why must captive wild felids (lions, tigers, leopards) in zoological parks be fed whole animal carcasses with bones rather than boneless muscle meat?",
        "o": [
          "Big cats refuse to eat soft meat",
          "Boneless meat is severely deficient in Calcium (Ca:P ratio 1:20), causing fatal Nutritional Secondary Hyperparathyroidism (Metabolic Bone Disease)",
          "Bone marrow contains toxic enzymes",
          "Bones prevent intestinal motility"
        ],
        "a": 1,
        "e": "Pure lean skeletal muscle contains ~0.01% Ca and ~0.2% P (Ca:P 1:20); without bones or calcium carbonate supplements, captive carnivores suffer catastrophic osteomalacia and fractures.",
        "topicId": "u4-t16",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "In captive frugivorous and folivorous primates (e.g. chimpanzees, macaques), which vitamin must always be supplemented in the diet?",
        "o": [
          "Vitamin C (Ascorbic Acid)",
          "Vitamin K3 only",
          "Vitamin B12 only",
          "Biotin only"
        ],
        "a": 0,
        "e": "All anthropoid primates lack L-gulonolactone oxidase and cannot synthesize Vitamin C, requiring daily fresh fruits, vegetables, or fortified commercial monkey chow.",
        "topicId": "u4-t16",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "What is the primary nutritional hazard of feeding domestic cattle concentrate pellets to captive wild browsing ruminants (e.g. Blackbuck, Chital, Giraffes) in zoos?",
        "o": [
          "Immediate bone calcification",
          "Extreme vitamin D toxicity",
          "Acute and subacute ruminal acidosis, ruminitis, and abomasal ulceration due to low physically effective fiber and excess starch",
          "Rapid tooth decay"
        ],
        "a": 2,
        "e": "Wild browsers have small rumens, thin ruminal mats, and rapid fermentation kinetics; starchy cattle concentrates cause acute ruminal acidosis and fatal ruminitis.",
        "topicId": "u4-t16",
        "diff": 2,
        "subSection": "u4-s3"
      },
      {
        "q": "Captive zoo flamingoes require dietary supplementation of Canthaxanthin or Beta-carotene primarily to:",
        "o": [
          "Maintain their characteristic brilliant pink-red plumage pigmentation",
          "Prevent blindness",
          "Stimulate flight muscle hypertrophy",
          "Increase egg size"
        ],
        "a": 0,
        "e": "In the wild, flamingoes ingest aquatic carotenoid-rich crustaceans and algae; in captivity, synthetic canthaxanthin is added to the diet to prevent faded white plumage.",
        "topicId": "u4-t16",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "What dietary management is essential when hand-rearing orphan wild mammalian neonates in captive wildlife centers?",
        "o": [
          "Feeding undiluted commercial cow milk to all species",
          "Formulating species-specific milk replacers matching maternal milk fat, protein, and solids (e.g. high fat/protein for carnivores, low fat for macropods)",
          "Feeding dry adult pellets immediately",
          "Providing sugar water only"
        ],
        "a": 1,
        "e": "Maternal milk composition varies drastically across species (e.g. wild felid milk contains >8% protein and 7% fat); cow milk has excess lactose and causes fatal osmotic diarrhea.",
        "topicId": "u4-t16",
        "diff": 2,
        "subSection": "u4-s3"
      },
      {
        "q": "Which metabolic disease in captive reptiles (green iguanas, tortoises) is caused by feeding lettuce diets deficient in Calcium and lacking UV-B light?",
        "o": [
          "Scurvy",
          "Grass tetany",
          "Metabolic Bone Disease (Nutritional Secondary Hyperparathyroidism)",
          "Polioencephalomalacia"
        ],
        "a": 2,
        "e": "Lack of UV-B prevents synthesis of cholecalciferol (D3), while low calcium diets stimulate parathyroid hormone, resulting in soft rubbery jaws and deformed carapaces.",
        "topicId": "u4-t16",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "Which nutritional strategy helps prevent feline idiopathic hepatic lipidosis (Fatty Liver Disease) in obese cats?",
        "o": [
          "Avoiding sudden complete anorexia or rapid starvation by ensuring steady voluntary intake of high-protein diets",
          "Feeding only raw fish oil",
          "Restricting water intake",
          "Inducing rapid weight loss of 50% in one week"
        ],
        "a": 0,
        "e": "Prolonged fasting in obese cats mobilizes massive peripheral fatty acids into hepatocytes exceeding VLDL export capacity, causing fatal hepatic lipidosis.",
        "topicId": "u4-t15",
        "diff": 2,
        "subSection": "u4-s3"
      },
      {
        "q": "Poultry fed ad libitum regulate their feed intake mainly according to the diet's:",
        "o": [
          "Energy concentration",
          "Crude protein content",
          "Calcium content",
          "Crude fibre content"
        ],
        "a": 0,
        "e": "Birds 'eat to meet their energy requirement' — on a high-energy diet they eat less. So when dietary energy rises, protein, amino acids, minerals and vitamins must rise too (constant C:P ratio).",
        "topicId": "u4-t01",
        "diff": 2,
        "subSection": "u4-s1"
      },
      {
        "q": "Energy requirements and feed energy values for poultry are expressed in terms of:",
        "o": [
          "Total digestible nutrients",
          "Net energy for lactation",
          "Starch equivalent",
          "Metabolizable energy (nitrogen-corrected, AMEn)"
        ],
        "a": 3,
        "e": "Birds void faeces and urine together through the cloaca, so digestible energy cannot be measured easily. ME, corrected to zero nitrogen balance (AMEn), is therefore the standard.",
        "topicId": "u4-t01",
        "diff": 2,
        "subSection": "u4-s1"
      },
      {
        "q": "The standard purified diets recommended for laboratory rats and mice by the American Institute of Nutrition are:",
        "o": [
          "NRC-94 Starter and Finisher",
          "IS 1374 Type I and Type II",
          "AIN-93G for growth and AIN-93M for maintenance",
          "TMR-1 and TMR-2"
        ],
        "a": 2,
        "e": "AIN-93G supports growth, pregnancy and lactation; AIN-93M is for adult maintenance. They replaced the earlier AIN-76A diet.",
        "topicId": "u4-t12",
        "diff": 2,
        "subSection": "u4-s3"
      },
      {
        "q": "In the factorial method of estimating nutrient requirements, the total requirement is obtained by:",
        "o": [
          "Adding the separately estimated requirements for maintenance and for each productive function",
          "Feeding graded levels of the nutrient and finding the level that gives maximum response",
          "Analysing only the carcasses of animals slaughtered at the start of the trial",
          "Averaging the figures listed in different feeding standards"
        ],
        "a": 0,
        "e": "Factorial: requirement = maintenance + growth + egg/milk + pregnancy (+ work), each estimated separately from its own measurements. The graded-level approach is the empirical (dose–response) method.",
        "topicId": "u4-t02",
        "diff": 2,
        "subSection": "u4-s2"
      },
      {
        "q": "Estimating a requirement by feeding graded levels of a nutrient and identifying the level that gives maximum growth or egg output is called the:",
        "o": [
          "Empirical (dose–response / feeding trial) method",
          "Factorial method",
          "Comparative slaughter technique",
          "Isotope dilution method"
        ],
        "a": 0,
        "e": "The empirical method finds requirements directly from animal response. It is simple and practical but applies only to the conditions of the trial.",
        "topicId": "u4-t02",
        "diff": 2,
        "subSection": "u4-s2"
      },
      {
        "q": "In the comparative slaughter technique, the energy and protein retained by growing animals are estimated by:",
        "o": [
          "Measuring oxygen consumption in a respiration chamber",
          "Analysing body composition of a group slaughtered at the start and of the test animals slaughtered at the end",
          "Subtracting faecal nitrogen from nitrogen intake",
          "Burning live-weight gain samples in a bomb calorimeter only"
        ],
        "a": 1,
        "e": "The initial slaughter group gives starting body composition. The difference from the final composition of the test animals gives energy and protein retained during the trial.",
        "topicId": "u4-t02",
        "diff": 3,
        "subSection": "u4-s2"
      },
      {
        "q": "Fatty liver haemorrhagic syndrome (FLHS) is typically seen in:",
        "o": [
          "Broiler chicks in their first week",
          "Ducklings fed mouldy groundnut cake",
          "Turkey poults deficient in niacin",
          "Overweight caged laying hens fed high-energy diets"
        ],
        "a": 3,
        "e": "In FLHS, excessive energy intake with little exercise makes the liver fatty and friable; it may rupture and bleed, causing sudden death and a drop in egg production. Controlling energy and body weight prevents it.",
        "topicId": "u4-t17",
        "diff": 2,
        "subSection": "u4-s1"
      },
      {
        "q": "The Bureau of Indian Standards (BIS) specification for poultry feeds is:",
        "o": [
          "IS 1374",
          "IS 2052",
          "IS 1664",
          "IS 10500"
        ],
        "a": 0,
        "e": "IS 1374 lays down nutrient specifications for broiler and layer feeds (pre-starter, starter, finisher, chick, grower, layer). IS 2052 is for compounded cattle feed and IS 1664 for mineral mixture.",
        "topicId": "u4-t03",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "The 11th revised edition of the US National Research Council (NRC) 'Nutrient Requirements of Swine', the standard reference for pig feeding, was published in:",
        "o": [
          "1994",
          "2012",
          "2007",
          "2006"
        ],
        "a": 1,
        "e": "Widely used NRC references: Swine 2012 (11th revised), Poultry 1994 (9th revised), Horses 2007 (6th revised), Dogs and Cats 2006.",
        "topicId": "u4-t03",
        "diff": 2,
        "subSection": "u4-s2"
      },
      {
        "q": "The resting energy requirement (RER) of a dog or cat, in kcal per day, is estimated as:",
        "o": [
          "140 × (body weight in kg)^1.0",
          "70 × (body weight in kg)^0.5",
          "70 × (body weight in kg)^0.75",
          "10 × body weight in kg"
        ],
        "a": 2,
        "e": "RER = 70 × BW^0.75. Daily maintenance energy is then RER multiplied by a life-stage factor, e.g. about 1.6 for a neutered adult dog and 2–3 for a growing puppy.",
        "topicId": "u4-t14",
        "diff": 2,
        "subSection": "u4-s3"
      },
      {
        "q": "Unlike ruminant feeding standards, which usually state requirements per animal per day, poultry and swine feeding standards mostly express requirements as:",
        "o": [
          "kg TDN per 100 kg body weight",
          "Nutrient concentration per kg of diet (e.g. % CP, kcal ME/kg)",
          "Starch equivalent per litre of milk",
          "Grams DCP per kg metabolic body weight"
        ],
        "a": 1,
        "e": "Pigs and poultry are fed a complete diet ad libitum, so nutrients are specified as concentrations (% or per kg of feed). Intake then determines the daily supply.",
        "topicId": "u4-t03",
        "diff": 2,
        "subSection": "u4-s1"
      },
      {
        "q": "The nutrient profiles used to certify commercial dog and cat foods as 'complete and balanced' are published by:",
        "o": [
          "BIS (Bureau of Indian Standards)",
          "FSSAI",
          "WOAH (formerly OIE)",
          "AAFCO (Association of American Feed Control Officials)"
        ],
        "a": 3,
        "e": "AAFCO dog and cat food nutrient profiles (growth/reproduction and adult maintenance) are the reference used on pet food labels worldwide.",
        "topicId": "u4-t03",
        "diff": 2,
        "subSection": "u4-s3"
      },
      {
        "q": "Sow milk yield reaches its peak at about which week of lactation, after which creep feed becomes essential for piglets?",
        "o": [
          "1st week",
          "3rd week",
          "8th week",
          "12th week"
        ],
        "a": 1,
        "e": "Sow milk production peaks around the 3rd week and then declines, while piglet requirements keep rising. Creep feed, offered from about 1–2 weeks of age, fills this gap.",
        "topicId": "u4-t04",
        "diff": 2,
        "subSection": "u4-s2"
      },
      {
        "q": "Newborn piglets are particularly prone to hypoglycaemia in the first days of life because they:",
        "o": [
          "Are born with very small body fat and glycogen reserves and poor thermoregulation",
          "Cannot absorb glucose from colostrum",
          "Receive excess insulin in sow's milk",
          "Lack the enzyme lactase at birth"
        ],
        "a": 0,
        "e": "Piglets have about 1–2% body fat at birth and little ability to regulate temperature. Without early colostrum and warmth they quickly become hypoglycaemic. Lactase activity is actually high at birth.",
        "topicId": "u4-t04",
        "diff": 2,
        "subSection": "u4-s2"
      },
      {
        "q": "'Flushing' of gilts and sows before breeding refers to:",
        "o": [
          "Increasing energy intake for about 10–14 days before mating to raise the ovulation rate",
          "Withholding water for 24 hours before mating",
          "Feeding a laxative diet after farrowing",
          "Cutting dietary protein to 10% in late gestation"
        ],
        "a": 0,
        "e": "A short period of generous feeding before service increases the number of ova shed and so litter size. Feed is reduced again after mating to protect embryo survival.",
        "topicId": "u4-t05",
        "diff": 2,
        "subSection": "u4-s2"
      },
      {
        "q": "Wheat bran is commonly included in the ration of sows around farrowing mainly because it:",
        "o": [
          "Is the richest source of lysine",
          "Increases colostrum antibodies",
          "Supplies vitamin C",
          "Acts as a mild laxative and prevents constipation"
        ],
        "a": 3,
        "e": "Bulky, laxative feeds such as wheat bran prevent constipation around farrowing, which otherwise predisposes the sow to mastitis–metritis–agalactia (MMA) and farrowing problems.",
        "topicId": "u4-t05",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "Many zoos keep one 'fast day' each week for large carnivores such as lions and tigers mainly to:",
        "o": [
          "Allow their rumen microbes to recover",
          "Increase vitamin C synthesis",
          "Mimic their natural gorge-and-fast feeding pattern and prevent obesity",
          "Prevent cecotrophy"
        ],
        "a": 2,
        "e": "Wild big cats eat irregularly — a large kill followed by days without food. A weekly fast day imitates this, controls body weight and aids digestive health.",
        "topicId": "u4-t16",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "In rabbits, excess dietary calcium is:",
        "o": [
          "Excreted mainly in the hard faecal pellets",
          "Stored entirely in the caecum",
          "Absorbed efficiently and the surplus excreted in the urine, which can become cloudy and chalky",
          "Converted into calcium oxalate in the stomach"
        ],
        "a": 2,
        "e": "Rabbits absorb calcium roughly in proportion to intake and excrete the excess through the kidneys. On high-calcium diets (e.g. lucerne only), the urine turns thick and chalky and urolithiasis can develop.",
        "topicId": "u4-t13",
        "diff": 3,
        "subSection": "u4-s3"
      },
      {
        "q": "The nutrient requirements of a pregnant mare increase markedly during the last trimester because:",
        "o": [
          "The mare starts lactating from the 8th month of pregnancy",
          "Most of the foetal growth occurs in the last three months of gestation",
          "Gestation in the mare lasts only about 5 months",
          "Foetal bones are formed only after birth"
        ],
        "a": 1,
        "e": "About 60–65% of foal birth weight is gained in the last three months of an ~11-month (≈340-day) gestation. Energy, protein, calcium and phosphorus allowances are raised accordingly.",
        "topicId": "u4-t07",
        "diff": 2,
        "subSection": "u4-s2"
      },
      {
        "q": "To reduce the risk of colic and laminitis, the grain (concentrate) given to a horse at a single meal should generally not exceed about:",
        "o": [
          "3% of body weight",
          "5% of body weight",
          "10% of body weight",
          "0.5% of body weight"
        ],
        "a": 3,
        "e": "For a 500 kg horse that is about 2.5 kg per meal. Larger meals overflow undigested starch into the caecum, causing acidosis, colic and laminitis. Feed forage first and split concentrates into several small meals.",
        "topicId": "u4-t07",
        "diff": 2,
        "subSection": "u4-s2"
      },
      {
        "q": "For broiler chicks in the starter phase, feed is usually supplied in the physical form of:",
        "o": [
          "Large 8 mm pellets",
          "Whole grains",
          "Crumbles",
          "Liquid feed"
        ],
        "a": 2,
        "e": "Crumbles (broken pellets) suit the small beak of young chicks, reduce wastage and improve intake. Finisher feed is usually given as pellets.",
        "topicId": "u4-t08",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "The labile reserve of calcium that laying hens build in the marrow cavities of their long bones before and during lay is called:",
        "o": [
          "Cortical bone",
          "Cartilage plate",
          "Medullary bone",
          "Keel ridge"
        ],
        "a": 2,
        "e": "Under oestrogen, pullets lay down medullary bone about two weeks before the first egg. It is mobilised at night to supply calcium for shell formation when no feed is in the gut.",
        "topicId": "u4-t09",
        "diff": 2,
        "subSection": "u4-s1"
      },
      {
        "q": "The shell of one hen's egg contains approximately how much calcium?",
        "o": [
          "2 g",
          "0.2 g",
          "8 g",
          "20 g"
        ],
        "a": 0,
        "e": "A shell weighs about 5.5–6 g, mostly calcium carbonate, and contains about 2 g of calcium. This is why layers need about 3.5–4% dietary calcium.",
        "topicId": "u4-t09",
        "diff": 2,
        "subSection": "u4-s1"
      },
      {
        "q": "Which cereal is the principal energy source in most Indian poultry rations, usually forming about half or more of the diet?",
        "o": [
          "Oats",
          "Maize",
          "Barley",
          "Rye"
        ],
        "a": 1,
        "e": "Maize has high ME (about 3300 kcal/kg), low fibre and yellow xanthophylls, and it is free of the viscous non-starch polysaccharides of wheat and barley.",
        "topicId": "u4-t10",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Mahua (Madhuca) seed cake, an unconventional feed, must be detoxified before feeding because it contains the saponin:",
        "o": [
          "Karanjin",
          "Mowrin",
          "Gossypol",
          "Ricin"
        ],
        "a": 1,
        "e": "Mowrin is a bitter, haemolytic saponin that depresses intake and growth. It is removed by water or alkali washing or by cooking. Karanjin comes from karanj cake, gossypol from cottonseed and ricin from castor.",
        "topicId": "u4-t10",
        "diff": 3,
        "subSection": "u4-s1"
      },
      {
        "q": "Ducklings need a higher dietary level of which vitamin than chicks, its deficiency causing leg weakness and bowed legs?",
        "o": [
          "Vitamin C",
          "Vitamin K",
          "Folic acid",
          "Niacin"
        ],
        "a": 3,
        "e": "Ducks convert tryptophan to niacin poorly, so their niacin requirement is about 1.5–2 times that of chickens. Deficiency causes leg weakness, bowing and enlarged hocks.",
        "topicId": "u4-t11",
        "diff": 2,
        "subSection": "u4-s1"
      }
    ],
    "tf": [
      {
        "q": "Broiler pre-starter diets require a minimum of 23% Crude Protein according to BIS specifications.",
        "a": true,
        "e": "True. BIS standards prescribe 23% CP and 3000 kcal ME/kg for 0-7 day broiler pre-starters.",
        "topicId": "u4-t08",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Laying hens during active egg production require approximately 3.5 to 4.5% dietary Calcium.",
        "a": true,
        "e": "True. 3.5-4.5% dietary Ca supplies the ~2.2 g of calcium required for each eggshell calcification.",
        "topicId": "u4-t09",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Coarse particles of limestone (2 to 4 mm) dissolve slowly overnight in the gizzard, supplying calcium for nighttime shell formation.",
        "a": true,
        "e": "True. Coarse limestone is retained in the ventriculus, releasing calcium continuously during nocturnal shell deposition.",
        "topicId": "u4-t09",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Growing egg-type pullets (9 to 18 weeks) should be fed ad libitum with high-energy diets to encourage early sexual maturity.",
        "a": false,
        "e": "False. Pullets require restricted feeding to prevent obesity, delay early lay of tiny eggs, and prevent vent prolapse.",
        "topicId": "u4-t09",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Birds excrete excess metabolic nitrogen primarily in the form of urea.",
        "a": false,
        "e": "False. Birds are uricotelic and excrete nitrogen as insoluble uric acid to conserve water.",
        "topicId": "u4-t01",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "DL-methionine is universally the first-limiting amino acid in maize-soybean meal poultry diets.",
        "a": true,
        "e": "True. Soybean protein is deficient in sulfur amino acids, making methionine the first limiting amino acid.",
        "topicId": "u4-t08",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Chickens can synthesize adequate amounts of Arginine in their liver via the complete urea cycle.",
        "a": false,
        "e": "False. Birds lack key urea cycle enzymes and have an absolute dietary requirement for arginine.",
        "topicId": "u4-t01",
        "diff": 2,
        "subSection": "u4-s1"
      },
      {
        "q": "Modern commercial broilers typically achieve a Feed Conversion Ratio of 1.45 to 1.65 at 42 days of age.",
        "a": true,
        "e": "True. Intensive genetic selection and balanced diets achieve an FCR around 1.5 kg feed per kg weight gain.",
        "topicId": "u4-t08",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Cage layer fatigue is caused by excessive skeletal calcium depletion to sustain eggshell formation.",
        "a": true,
        "e": "True. High calcium output in eggs exhausts cortical and medullary bone reserves, causing acute osteoporosis and paralysis.",
        "topicId": "u4-t09",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Xanthophyll carotenoid pigments are added to layer feeds to improve yolk color.",
        "a": true,
        "e": "True. Natural and synthetic xanthophylls are deposited in yolk fat to provide the desired golden-orange color.",
        "topicId": "u4-t09",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Ducklings are highly resistant to Aflatoxin B1 toxicity and can tolerate 1000 ppb in feed.",
        "a": false,
        "e": "False. Ducklings are the most sensitive avian species to aflatoxin B1; levels >15-20 ppb can cause fatal liver necrosis.",
        "topicId": "u4-t11",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Turkey poults require approximately 28% Crude Protein in their starter diet.",
        "a": true,
        "e": "True. Turkeys have the highest starting protein requirement among commercial poultry (28% CP).",
        "topicId": "u4-t11",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Ascites syndrome in broilers is associated with rapid growth, high metabolic oxygen demand, and pulmonary hypertension.",
        "a": true,
        "e": "True. Rapid growth outpaces cardiovascular capacity, producing pulmonary hypertension, right ventricular hypertrophy, and coelomic fluid accumulation.",
        "topicId": "u4-t17",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Supplemental phytase enzyme increases the bioavailability of phytate-bound phosphorus in poultry rations.",
        "a": true,
        "e": "True. Microbial phytase cleaves phosphate groups from plant phytic acid, liberating available phosphorus.",
        "topicId": "u4-t10",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Viscous soluble beta-glucans in barley decrease digesta viscosity and eliminate sticky wet droppings in broilers.",
        "a": false,
        "e": "False. Beta-glucans increase gut viscosity and cause sticky wet droppings; beta-glucanase enzymes are added to hydrolyze them.",
        "topicId": "u4-t10",
        "diff": 2,
        "subSection": "u4-s1"
      },
      {
        "q": "Visceral gout in poultry is caused by deposition of monosodium urate crystals on internal organs.",
        "a": true,
        "e": "True. High blood uric acid crystallizes onto heart, liver, and abdominal serosa as a white chalky coating.",
        "topicId": "u4-t17",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Encephalomalacia (Crazy Chick Disease) in chicks is caused by Vitamin E deficiency.",
        "a": true,
        "e": "True. Vitamin E deficiency allows lipid peroxidation of cerebellar membranes, causing cerebellar hemorrhage and ataxia.",
        "topicId": "u4-t17",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Perosis (slipped tendon) in broiler chicks is primarily associated with Manganese deficiency.",
        "a": true,
        "e": "True. Manganese deficiency disrupts epiphyseal chondrogenesis, causing the gastrocnemius tendon to slip from its groove.",
        "topicId": "u4-t17",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Piglet creep diets should contain approximately 20 to 22% Crude Protein with high levels of digestible lysine.",
        "a": true,
        "e": "True. Early nursing piglets require 20-22% CP and 1.3-1.4% lysine to maximize pre-weaning growth rates.",
        "topicId": "u4-t04",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "Sow milk contains abundant iron, eliminating the need for iron injections in housed piglets.",
        "a": false,
        "e": "False. Sow milk provides only ~1 mg iron/day against a 7 mg requirement; piglets require iron dextran injection at 3 days.",
        "topicId": "u4-t04",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "In the ideal protein concept for swine, all essential amino acids are patterned relative to Lysine set at 100%.",
        "a": true,
        "e": "True. Lysine is the reference standard (100%) because it is first-limiting and utilized almost entirely for lean muscle synthesis.",
        "topicId": "u4-t01",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "Pregnant sows should be fed ad libitum throughout gestation to produce larger litters.",
        "a": false,
        "e": "False. Sows should be restricted to 1.8-2.2 kg/day; overfeeding causes embryonic mortality, dystocia, and poor lactation intake.",
        "topicId": "u4-t05",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "Lactating sows should be full-fed (ad libitum) to support milk production and prevent excessive maternal weight loss.",
        "a": true,
        "e": "True. Lactating sows produce 8-12 kg milk daily and require ad libitum feeding of high-energy, high-protein rations.",
        "topicId": "u4-t05",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "The horse is a hindgut fermenter that digests structural fiber primarily in the cecum and large colon.",
        "a": true,
        "e": "True. The equine cecum and large colon host an active anaerobic microbial population that converts fiber into volatile fatty acids.",
        "topicId": "u4-t06",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "Horses absorb microbial protein synthesized in their cecum just as efficiently as cows absorb ruminal microbial protein.",
        "a": false,
        "e": "False. Hindgut microbes are excreted in feces; horses cannot absorb microbial amino acids and require high-quality dietary protein.",
        "topicId": "u4-t06",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "The equine stomach is small, representing only about 8 to 10% of total digestive tract capacity.",
        "a": true,
        "e": "True. Holding only 9-15 liters, the equine stomach is adapted for small, continuous grazing meals rather than large gorge meals.",
        "topicId": "u4-t06",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "Horses can easily vomit excess stomach gas and food contents when the stomach becomes distended.",
        "a": false,
        "e": "False. Horses have a powerful cardiac sphincter and cannot vomit; severe gastric distension can result in fatal stomach rupture.",
        "topicId": "u4-t06",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "Starch spillover from the small intestine into the equine cecum can trigger cecal acidosis, colic, and laminitis.",
        "a": true,
        "e": "True. Rapid starch fermentation lowers cecal pH, killing Gram-negative bacteria and releasing endotoxins that trigger laminitis.",
        "topicId": "u4-t06",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "Horses should receive a minimum of 1.0 to 1.5% of their body weight in dry forage daily to maintain gut motility.",
        "a": true,
        "e": "True. Adequate coarse roughage is required to prevent impaction colic and behavioral vices like crib-biting.",
        "topicId": "u4-t06",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "Whole oats are considered one of the safest grains for horses because of their high fiber content.",
        "a": true,
        "e": "True. The fibrous hull (10-12% CF) slows starch digestion and reduces the risk of starch spillover into the hindgut.",
        "topicId": "u4-t07",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "Exertional Rhabdomyolysis (tying-up) in horses is associated with feeding high grain during rest followed by sudden exercise.",
        "a": true,
        "e": "True. Stored muscle glycogen breaks down during sudden exercise, triggering muscle cramping, damage, and myoglobinuria.",
        "topicId": "u4-t07",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "In swine, feeding diets high in unsaturated vegetable oils produces soft, oily carcass fat.",
        "a": true,
        "e": "True. Non-ruminants absorb unsaturated fatty acids directly and deposit them intact into adipose tissue, causing 'soft pork'.",
        "topicId": "u4-t05",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "Urea is an economical protein supplement routinely used in pig rations to replace soybean meal.",
        "a": false,
        "e": "False. Swine lack a pre-absorptive fermentation vat; urea is absorbed as toxic ammonia and cannot be utilized for protein synthesis.",
        "topicId": "u4-t04",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "The domestic cat is an obligate carnivore with metabolic adaptations requiring animal-derived nutrients.",
        "a": true,
        "e": "True. Cats require preformed nutrients found only in animal tissues: taurine, arachidonic acid, retinol, and high protein.",
        "topicId": "u4-t15",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "Cats can down-regulate their hepatic amino acid catabolic enzymes when fed a low-protein diet.",
        "a": false,
        "e": "False. Cat liver transaminases and urea cycle enzymes are constitutively active and cannot be down-regulated, demanding high dietary protein.",
        "topicId": "u4-t15",
        "diff": 2,
        "subSection": "u4-s3"
      },
      {
        "q": "Taurine deficiency in cats causes Dilated Cardiomyopathy and Central Retinal Degeneration.",
        "a": true,
        "e": "True. Taurine is essential for myocardial calcium modulation and photoreceptor maintenance; deficiency causes heart failure and blindness.",
        "topicId": "u4-t15",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "A single meal completely devoid of Arginine can induce fatal hyperammonemic encephalopathy in domestic cats.",
        "a": true,
        "e": "True. Rapid protein catabolism generates ammonia continuously; without arginine to maintain the urea cycle, ammonia spikes toxically.",
        "topicId": "u4-t15",
        "diff": 2,
        "subSection": "u4-s3"
      },
      {
        "q": "Chocolate is toxic to dogs because dogs metabolize the methylxanthine theobromine very slowly.",
        "a": true,
        "e": "True. Theobromine accumulates in canines, stimulating the central nervous system and myocardium, potentially causing fatal seizures.",
        "topicId": "u4-t14",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "Ingestion of onions or garlic causes Heinz body hemolytic anemia in dogs and cats.",
        "a": true,
        "e": "True. Toxic organic disulfides in Allium plants oxidize red blood cell hemoglobin, precipitating Heinz bodies and causing hemolysis.",
        "topicId": "u4-t14",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "Xylitol ingestion in dogs causes a rapid spike in blood glucose leading to acute diabetes.",
        "a": false,
        "e": "False. Xylitol stimulates massive insulin release, causing life-threatening hypoglycemia and acute hepatic necrosis.",
        "topicId": "u4-t14",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "Rabbits practice cecotrophy (eating soft night feces) to recover microbial protein and B vitamins.",
        "a": true,
        "e": "True. Cecotropes are swallowed whole from the anus, allowing digestion of microbial protein and absorption of vitamins in the stomach.",
        "topicId": "u4-t13",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "Guinea pigs can synthesize Vitamin C from glucose because they have active L-gulonolactone oxidase.",
        "a": false,
        "e": "False. Guinea pigs lack functional L-gulonolactone oxidase and develop fatal scurvy unless supplemented with Vitamin C.",
        "topicId": "u4-t12",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "Feeding boneless muscle meat alone to captive big cats produces nutritional secondary hyperparathyroidism.",
        "a": true,
        "e": "True. Boneless meat has an inverted Ca:P ratio (1:20); captive felids require bones or calcium supplements to avoid metabolic bone disease.",
        "topicId": "u4-t16",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "Captive anthropoid primates (chimpanzees, macaques) require daily dietary supplementation of Vitamin C.",
        "a": true,
        "e": "True. Like humans, all anthropoid primates lack the GULO gene for ascorbic acid synthesis and require fresh fruits or vitamin C fortification.",
        "topicId": "u4-t16",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "Sudden prolonged anorexia in obese cats can precipitate life-threatening Feline Hepatic Lipidosis.",
        "a": true,
        "e": "True. Starvation mobilizes massive adipose fatty acids into hepatocytes, overwhelming liver export capacity and causing liver failure.",
        "topicId": "u4-t15",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "Because birds eat to meet their energy needs, raising the energy density of a poultry diet without raising its protein level can reduce the bird's protein intake.",
        "a": true,
        "e": "True. Higher energy lowers feed intake, so a fixed protein percentage delivers less protein per day. Protein must be raised with energy.",
        "topicId": "u4-t01",
        "diff": 2,
        "subSection": "u4-s1"
      },
      {
        "q": "Finishing pigs are often feed-restricted near market weight to reduce backfat and improve carcass leanness.",
        "a": true,
        "e": "True. Near slaughter weight, extra energy is deposited mainly as fat; mild restriction limits backfat and improves lean percentage and feed efficiency.",
        "topicId": "u4-t05",
        "diff": 2,
        "subSection": "u4-s2"
      },
      {
        "q": "Foals are normally weaned at 2–3 weeks of age.",
        "a": false,
        "e": "False. Foals are usually weaned at about 4–6 months, after being introduced to creep feed and forage.",
        "topicId": "u4-t06",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "The recommended ratio of calcium to available (non-phytate) phosphorus in broiler diets is about 2:1.",
        "a": true,
        "e": "True. About 2:1 Ca to available P supports bone development. Wide ratios predispose broilers to leg problems such as rickets and tibial dyschondroplasia.",
        "topicId": "u4-t08",
        "diff": 2,
        "subSection": "u4-s1"
      },
      {
        "q": "Japanese quail begin laying at about 20 weeks of age, like commercial chicken layers.",
        "a": false,
        "e": "False. Japanese quail mature very early and begin laying at about 6–7 weeks, so their starter and layer diets are needed much sooner.",
        "topicId": "u4-t11",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Autoclaved laboratory animal diets need extra fortification with heat-labile vitamins such as thiamine.",
        "a": true,
        "e": "True. Autoclaving destroys a large part of heat-sensitive vitamins (especially thiamine and vitamin A), so autoclavable diets are formulated with higher vitamin levels.",
        "topicId": "u4-t12",
        "diff": 2,
        "subSection": "u4-s3"
      },
      {
        "q": "A rabbit doe nurses her kits many times every hour, like a sow.",
        "a": false,
        "e": "False. A doe nurses her kits only once (occasionally twice) a day, for a few minutes; her milk is very rich in fat and protein to compensate.",
        "topicId": "u4-t13",
        "diff": 2,
        "subSection": "u4-s3"
      },
      {
        "q": "At peak lactation, the energy requirement of a bitch can be 2–4 times her maintenance requirement.",
        "a": true,
        "e": "True. Requirement rises with litter size and peaks at about 3–4 weeks after whelping. Feed ad libitum or in several meals a day with an energy-dense diet.",
        "topicId": "u4-t14",
        "diff": 2,
        "subSection": "u4-s3"
      },
      {
        "q": "Cats are strongly attracted to sweet-tasting foods because they have highly active sweet taste receptors.",
        "a": false,
        "e": "False. Cats lack a functional sweet taste receptor (the Tas1r2 gene is a pseudogene), consistent with their strictly carnivorous diet.",
        "topicId": "u4-t15",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "Feeding dog food to cats for long periods is safe because dogs and cats have the same nutrient requirements.",
        "a": false,
        "e": "False. Dog food may not meet a cat's higher protein requirement or its needs for taurine, arachidonic acid, preformed vitamin A and niacin.",
        "topicId": "u4-t15",
        "diff": 2,
        "subSection": "u4-s3"
      },
      {
        "q": "Captive raptors should not be fed whole prey with fur and feathers because birds of prey cannot regurgitate indigestible material.",
        "a": false,
        "e": "False. Raptors are fed whole prey. They regurgitate indigestible fur, feathers and bones as castings (pellets), which is necessary for normal digestive health.",
        "topicId": "u4-t16",
        "diff": 2,
        "subSection": "u4-s3"
      },
      {
        "q": "Mulberry heart disease in pigs is associated with a deficiency of vitamin E and/or selenium.",
        "a": true,
        "e": "True. Mulberry heart disease causes sudden death in fast-growing pigs, with haemorrhages giving the heart a mulberry-like appearance. Adequate vitamin E and selenium prevent it.",
        "topicId": "u4-t17",
        "diff": 2,
        "subSection": "u4-s2"
      }
    ],
    "fib": [
      {
        "q": "According to BIS specifications, Broiler Pre-starter feed must contain a minimum of ____ percent Crude Protein.",
        "a": [
          "23",
          "23%"
        ],
        "a_display": "23%",
        "e": "Pre-starter broiler feed (0-7 days) requires 23% CP and 3000 kcal ME/kg.",
        "topicId": "u4-t08",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "The Metabolizable Energy specification for Broiler Finisher feed is typically 3150 to ____ kcal ME per kg.",
        "a": [
          "3200",
          "3200 kcal",
          "3200 kcal/kg"
        ],
        "a_display": "3200 kcal/kg",
        "e": "Broiler finisher feeds boost ME to 3150-3200 kcal/kg to support finishing weight gain.",
        "topicId": "u4-t08",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Commercial layer diets during active egg production must contain ____ to 4.5% Calcium.",
        "a": [
          "3.5",
          "3.5 to 4.5",
          "3.5-4.5"
        ],
        "a_display": "3.5%",
        "e": "Layers need 3.5-4.5% calcium (approx. 4 g/day) to support continuous eggshell calcification.",
        "topicId": "u4-t09",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "The muscular organ in birds that grinds coarse feeds using ingested grit is the ____.",
        "a": [
          "gizzard",
          "ventriculus"
        ],
        "a_display": "Gizzard (Ventriculus)",
        "e": "The gizzard acts as the mechanical stomach of birds, grinding food with the help of grit.",
        "topicId": "u4-t01",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "The glandular stomach of birds that secretes hydrochloric acid and pepsinogen is the ____.",
        "a": [
          "proventriculus"
        ],
        "a_display": "Proventriculus",
        "e": "The proventriculus produces gastric juices before feed passes into the muscular ventriculus.",
        "topicId": "u4-t01",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Avian species excrete excess metabolic nitrogen as insoluble ____ acid.",
        "a": [
          "uric",
          "uric acid"
        ],
        "a_display": "Uric Acid",
        "e": "Uric acid precipitation conserves water in birds, adapting them for flight and egg incubation.",
        "topicId": "u4-t01",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "The first-limiting amino acid in maize-soybean meal broiler diets is ____.",
        "a": [
          "methionine",
          "dl-methionine"
        ],
        "a_display": "Methionine",
        "e": "Soybean meal is low in sulfur amino acids, making methionine the first limiting amino acid.",
        "topicId": "u4-t08",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Chickens have an absolute dietary requirement for the basic amino acid ____ because they lack a functional urea cycle.",
        "a": [
          "arginine"
        ],
        "a_display": "Arginine",
        "e": "Avian tissues lack urea cycle enzymes and cannot synthesize arginine from ornithine.",
        "topicId": "u4-t01",
        "diff": 2,
        "subSection": "u4-s1"
      },
      {
        "q": "Modern broiler chickens typically achieve a Feed Conversion Ratio of 1.45 to ____ at 42 days of age.",
        "a": [
          "1.65",
          "1.6",
          "1.7"
        ],
        "a_display": "1.65",
        "e": "Intensive genetic selection has achieved an efficient FCR of 1.45 to 1.65 kg feed per kg live weight.",
        "topicId": "u4-t08",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Acute skeletal calcium exhaustion in caged laying hens is called cage layer ____.",
        "a": [
          "fatigue"
        ],
        "a_display": "Fatigue",
        "e": "Cage layer fatigue is severe osteoporosis and paralysis caused by calcium depletion during intense egg production.",
        "topicId": "u4-t09",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Yellow-orange carotenoid pigments added to layer feeds to pigment egg yolks are called ____.",
        "a": [
          "xanthophylls",
          "xanthophyll",
          "carotenoids"
        ],
        "a_display": "Xanthophylls",
        "e": "Xanthophylls deposit in the lipid droplets of egg yolk to produce the desired golden-yellow color.",
        "topicId": "u4-t09",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Among poultry species, young ____ are exceptionally sensitive to aflatoxin B1 poisoning.",
        "a": [
          "ducklings",
          "ducks"
        ],
        "a_display": "Ducklings",
        "e": "Ducklings develop fatal hepatic necrosis from dietary aflatoxin B1 levels as low as 15-20 ppb.",
        "topicId": "u4-t11",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Turkey poults require ____ percent Crude Protein in their starter feed.",
        "a": [
          "28",
          "28%"
        ],
        "a_display": "28%",
        "e": "Starting turkey poults have the highest protein requirement among poultry species at 28% CP.",
        "topicId": "u4-t11",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Ascites syndrome in fast-growing broilers is accompanied by fluid accumulation in the ____ cavity.",
        "a": [
          "coelomic",
          "abdominal",
          "peritoneal"
        ],
        "a_display": "Coelomic (Abdominal)",
        "e": "Pulmonary hypertension causes right heart failure and transudation of fluid into the coelomic cavity.",
        "topicId": "u4-t17",
        "diff": 2,
        "subSection": "u4-s1"
      },
      {
        "q": "Microbial ____ enzyme is added to poultry diets to release plant phytate-bound phosphorus.",
        "a": [
          "phytase"
        ],
        "a_display": "Phytase",
        "e": "Phytase releases phosphorus from phytic acid, reducing the need for dicalcium phosphate supplementation.",
        "topicId": "u4-t10",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Visceral gout in chickens is caused by the deposition of monosodium ____ crystals on organ surfaces.",
        "a": [
          "urate"
        ],
        "a_display": "Urate",
        "e": "Impaired renal clearance precipitates white chalky monosodium urate crystals on visceral serosa.",
        "topicId": "u4-t17",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Encephalomalacia or Crazy Chick Disease is caused by a deficiency of Vitamin ____.",
        "a": [
          "e",
          "vitamin e"
        ],
        "a_display": "Vitamin E",
        "e": "Vitamin E deficiency allows free-radical damage to cerebellar lipid membranes, causing ataxia.",
        "topicId": "u4-t17",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Perosis (slipped tendon) in growing broiler chicks is caused by a deficiency of the trace mineral ____.",
        "a": [
          "manganese",
          "mn"
        ],
        "a_display": "Manganese",
        "e": "Manganese is essential for epiphyseal cartilage formation; deficiency allows the gastrocnemius tendon to slip.",
        "topicId": "u4-t17",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Nursing piglet creep diets should contain ____ to 22% Crude Protein.",
        "a": [
          "20",
          "20 to 22",
          "20-22"
        ],
        "a_display": "20%",
        "e": "Creep diets contain 20-22% CP and 1.3-1.4% lysine to maximize pre-weaning weight gains.",
        "topicId": "u4-t04",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "Piglets are injected with 150 to 200 mg of iron ____ at 3 days of age to prevent piglet anemia.",
        "a": [
          "dextran"
        ],
        "a_display": "Dextran",
        "e": "Injectable iron dextran prevents microcytic hypochromic nutritional anemia (thumps) in piglets.",
        "topicId": "u4-t04",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "The first-limiting amino acid in cereal grain-based swine diets is ____.",
        "a": [
          "lysine",
          "l-lysine"
        ],
        "a_display": "Lysine",
        "e": "Cereal grains are naturally deficient in lysine, making it first-limiting for growing pigs.",
        "topicId": "u4-t04",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "In the ideal protein concept, all essential amino acids are patterned relative to ____ set at 100%.",
        "a": [
          "lysine"
        ],
        "a_display": "Lysine",
        "e": "All indispensable amino acid requirements are expressed as a fixed percentage of Lysine = 100.",
        "topicId": "u4-t01",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "Pregnant gestating sows are restricted to approximately 1.8 to ____ kg of feed daily to prevent obesity.",
        "a": [
          "2.2",
          "2",
          "2.0"
        ],
        "a_display": "2.2 kg",
        "e": "Restricted feeding (1.8-2.2 kg/day) prevents obesity, dystocia, and poor feed intake during lactation.",
        "topicId": "u4-t05",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "In horses, microbial fermentation of fiber occurs in the cecum and large ____.",
        "a": [
          "colon"
        ],
        "a_display": "Colon",
        "e": "The equine hindgut (cecum and large colon) serves as the primary site of microbial fiber digestion.",
        "topicId": "u4-t06",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "The equine stomach has a capacity of only 9 to ____ liters.",
        "a": [
          "15",
          "12 to 15",
          "15 liters"
        ],
        "a_display": "15 liters",
        "e": "The equine stomach represents only 8-10% of gut volume, adapted for small continuous meals.",
        "topicId": "u4-t06",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "Horses cannot ____ because of a very strong, tight cardiac sphincter at the stomach entrance.",
        "a": [
          "vomit",
          "regurgitate"
        ],
        "a_display": "Vomit",
        "e": "The one-way cardiac sphincter prevents vomiting, predisposing horses to gastric rupture if gorged.",
        "topicId": "u4-t06",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "Excess starch spilling into the equine cecum lowers pH and can cause colic and digital ____ (founder).",
        "a": [
          "laminitis"
        ],
        "a_display": "Laminitis (Founder)",
        "e": "Hindgut starch acidosis releases bacterial endotoxins that compromise the laminar corium of the hooves.",
        "topicId": "u4-t06",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "A horse must receive at least 1.0 to ____% of its body weight as dry coarse forage daily.",
        "a": [
          "1.5",
          "1.5%"
        ],
        "a_display": "1.5%",
        "e": "Providing 1.0-1.5% body weight in forage maintains gut motility and prevents impaction colic.",
        "topicId": "u4-t06",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "The grain considered safest for feeding horses due to its high fiber hull is ____.",
        "a": [
          "oats",
          "oat"
        ],
        "a_display": "Oats",
        "e": "Oats contain 10-12% crude fiber, which slows digestion and prevents rapid hindgut starch overload.",
        "topicId": "u4-t07",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "Exertional Rhabdomyolysis in horses is commonly referred to as Monday ____ Disease.",
        "a": [
          "morning"
        ],
        "a_display": "Morning",
        "e": "Full feed during rest days followed by sudden work on Monday morning triggers acute muscle cramping (tying-up).",
        "topicId": "u4-t07",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "Feeding high levels of unsaturated vegetable oils to pigs produces soft, oily carcass fat called soft ____.",
        "a": [
          "pork"
        ],
        "a_display": "Pork",
        "e": "Unsaturated fatty acids deposit directly into adipose tissue without biohydrogenation, producing soft pork.",
        "topicId": "u4-t05",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "Zinc oxide is supplemented at 2000 to 3000 ppm in newly weaned piglet diets to control post-weaning ____.",
        "a": [
          "diarrhea",
          "diarrhoea",
          "scours"
        ],
        "a_display": "Diarrhea (Scours)",
        "e": "High zinc oxide stabilizes enterocyte junctions and suppresses pathogenic E. coli scours in weaners.",
        "topicId": "u4-t04",
        "diff": 2,
        "subSection": "u4-s2"
      },
      {
        "q": "Equine leukoencephalomalacia is caused by the mycotoxin ____ B1 found in moldy corn.",
        "a": [
          "fumonisin"
        ],
        "a_display": "Fumonisin",
        "e": "Fumonisin B1 from Fusarium verticillioides causes liquefactive necrosis of the equine cerebral white matter.",
        "topicId": "u4-t07",
        "diff": 2,
        "subSection": "u4-s2"
      },
      {
        "q": "The domestic cat is classified as an ____ carnivore because it requires nutrients found only in animal flesh.",
        "a": [
          "obligate",
          "strict"
        ],
        "a_display": "Obligate",
        "e": "Cats have irreversible metabolic constraints that necessitate consuming animal-derived tissues.",
        "topicId": "u4-t15",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "Taurine deficiency in cats causes dilated ____ (heart failure) and central retinal degeneration.",
        "a": [
          "cardiomyopathy"
        ],
        "a_display": "Cardiomyopathy",
        "e": "Taurine is essential for feline myocardial function; deficiency causes dilated cardiomyopathy and blindness.",
        "topicId": "u4-t15",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "Omitting the amino acid ____ from a single meal can cause fatal ammonia poisoning in cats within hours.",
        "a": [
          "arginine"
        ],
        "a_display": "Arginine",
        "e": "Cats cannot synthesize ornithine; arginine omission halts the urea cycle, causing toxic hyperammonemia.",
        "topicId": "u4-t15",
        "diff": 2,
        "subSection": "u4-s3"
      },
      {
        "q": "The toxic methylxanthine present in chocolate that is poisonous to dogs is ____.",
        "a": [
          "theobromine"
        ],
        "a_display": "Theobromine",
        "e": "Dogs metabolize theobromine extremely slowly; toxic doses cause cardiac arrhythmia and seizures.",
        "topicId": "u4-t14",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "Ingestion of onions or garlic produces oxidative damage to canine red blood cells, forming ____ bodies.",
        "a": [
          "heinz"
        ],
        "a_display": "Heinz",
        "e": "Oxidized hemoglobin clumps into Heinz bodies, leading to hemolytic anemia and dark urine.",
        "topicId": "u4-t14",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "The artificial sweetener ____ triggers a massive insulin surge and fatal hypoglycemia in dogs.",
        "a": [
          "xylitol"
        ],
        "a_display": "Xylitol",
        "e": "Xylitol stimulates rapid canine pancreatic insulin release, dropping blood glucose to lethal levels.",
        "topicId": "u4-t14",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "Growing puppies require approximately 26 to ____% Crude Protein in their diet.",
        "a": [
          "28",
          "28%"
        ],
        "a_display": "28%",
        "e": "Puppy growth diets require 26-28% CP to support rapid skeletal and muscle development.",
        "topicId": "u4-t14",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "Rabbits re-ingest soft night fecal pellets produced in the cecum, a process called ____.",
        "a": [
          "cecotrophy",
          "caecotrophy",
          "pseudorumination"
        ],
        "a_display": "Cecotrophy",
        "e": "Cecotrophy allows rabbits to digest microbial protein and absorb B vitamins synthesized in the cecum.",
        "topicId": "u4-t13",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "Guinea pigs have an absolute dietary requirement for Vitamin ____ because they lack L-gulonolactone oxidase.",
        "a": [
          "c",
          "vitamin c",
          "ascorbic acid"
        ],
        "a_display": "Vitamin C (Ascorbic Acid)",
        "e": "Like humans, guinea pigs cannot synthesize ascorbic acid and develop scurvy without dietary intake.",
        "topicId": "u4-t12",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "Feeding boneless lean meat to captive lions causes an inverted Ca:P ratio and nutritional secondary ____.",
        "a": [
          "hyperparathyroidism"
        ],
        "a_display": "Hyperparathyroidism",
        "e": "Boneless meat contains high P and almost no Ca; parathyroid hormone resorbs bone, causing pathological fractures.",
        "topicId": "u4-t16",
        "diff": 2,
        "subSection": "u4-s3"
      },
      {
        "q": "All captive anthropoid primates lack the enzyme required to synthesize Vitamin ____.",
        "a": [
          "c",
          "vitamin c"
        ],
        "a_display": "Vitamin C",
        "e": "Primates require fresh dietary sources of ascorbic acid daily to prevent scurvy.",
        "topicId": "u4-t16",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "Sudden anorexia in obese cats can cause fatal feline hepatic ____ (fatty liver).",
        "a": [
          "lipidosis"
        ],
        "a_display": "Lipidosis",
        "e": "Starvation in fat cats floods the liver with non-esterified fatty acids, leading to hepatic failure.",
        "topicId": "u4-t15",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "The ratio of ME (kcal/kg) to crude protein (%) in a poultry diet is called the ____ ratio.",
        "a": [
          "calorie protein",
          "calorie-protein",
          "calorie to protein",
          "c:p",
          "cp",
          "energy protein",
          "energy-protein",
          "calorie:protein"
        ],
        "a_display": "Calorie : Protein (C:P)",
        "e": "C:P ratio = ME (kcal/kg) ÷ CP (%). It is kept constant when dietary energy changes because birds eat to meet their energy needs.",
        "topicId": "u4-t01",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Nitrogen in faeces that comes from the body itself (enzymes, sloughed cells) rather than from the diet is called ____ faecal nitrogen.",
        "a": [
          "metabolic",
          "endogenous"
        ],
        "a_display": "Metabolic (endogenous)",
        "e": "Metabolic faecal nitrogen plus endogenous urinary nitrogen measure the protein needed for maintenance in the factorial method.",
        "topicId": "u4-t02",
        "diff": 2,
        "subSection": "u4-s2"
      },
      {
        "q": "In the USA, the nutrient requirements of poultry, swine, horses, dogs and cats are published by the ____ (abbreviation).",
        "a": [
          "nrc",
          "national research council",
          "n.r.c."
        ],
        "a_display": "NRC (National Research Council)",
        "e": "NRC publications are the most widely used reference feeding standards for non-ruminants, alongside BIS/ICAR specifications in India.",
        "topicId": "u4-t03",
        "diff": 1,
        "subSection": "u4-s1"
      },
      {
        "q": "Newborn piglets should receive ____ within the first few hours of birth for passive immunity and energy.",
        "a": [
          "colostrum"
        ],
        "a_display": "Colostrum",
        "e": "Piglets are born without circulating antibodies, and gut absorption of intact immunoglobulins stops within about 24–36 hours. Early colostrum also supplies energy against hypoglycaemia.",
        "topicId": "u4-t04",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "Mastitis–metritis–agalactia (MMA) syndrome in sows is predisposed by ____ around farrowing, which bulky laxative feeds help prevent.",
        "a": [
          "constipation"
        ],
        "a_display": "Constipation",
        "e": "Constipation around farrowing favours toxin absorption and MMA. Wheat bran and other fibrous feeds keep the sow's gut moving.",
        "topicId": "u4-t05",
        "diff": 2,
        "subSection": "u4-s2"
      },
      {
        "q": "Gestation in the mare lasts about ____ months.",
        "a": [
          "11",
          "eleven",
          "11 months"
        ],
        "a_display": "11 (about 340 days)",
        "e": "Mare gestation averages about 340 days. Requirements rise sharply in the last three months, when most foetal growth occurs.",
        "topicId": "u4-t07",
        "diff": 1,
        "subSection": "u4-s2"
      },
      {
        "q": "The diet with about 2–2.5% calcium fed to pullets for roughly two weeks before the onset of lay is called the ____ diet.",
        "a": [
          "pre-layer",
          "prelayer",
          "pre layer",
          "pre-lay",
          "prelay"
        ],
        "a_display": "Pre-layer",
        "e": "The pre-layer diet lets pullets build medullary bone without the kidney damage that full layer-level calcium can cause in immature birds.",
        "topicId": "u4-t09",
        "diff": 2,
        "subSection": "u4-s1"
      },
      {
        "q": "The toxic principle of karanj (Pongamia) cake is ____.",
        "a": [
          "karanjin"
        ],
        "a_display": "Karanjin",
        "e": "Karanjin, a furanoflavonoid, makes karanj cake bitter and toxic. It must be detoxified (e.g. by alkali or solvent treatment) and fed at limited levels.",
        "topicId": "u4-t10",
        "diff": 2,
        "subSection": "u4-s1"
      },
      {
        "q": "Laboratory rodents need hard pelleted diets partly because their ____ grow continuously throughout life.",
        "a": [
          "incisors",
          "incisor",
          "incisor teeth",
          "teeth"
        ],
        "a_display": "Incisors",
        "e": "Rodent incisors grow throughout life. Gnawing hard pellets keeps them worn down; otherwise malocclusion prevents eating.",
        "topicId": "u4-t12",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "Obesity in dogs is assessed practically with a 1–9 point ____ condition score.",
        "a": [
          "body",
          "bcs"
        ],
        "a_display": "Body (BCS)",
        "e": "On the 9-point body condition score, 4–5 is ideal and 8–9 obese. It is judged by feeling the ribs and viewing the waist and abdominal tuck.",
        "topicId": "u4-t14",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "Undigested fur, feathers and bones regurgitated by owls and other raptors are called ____.",
        "a": [
          "castings",
          "casting",
          "pellets",
          "pellet"
        ],
        "a_display": "Castings (pellets)",
        "e": "Producing castings is normal for raptors, which is why they must be fed whole prey rather than only lean meat.",
        "topicId": "u4-t16",
        "diff": 1,
        "subSection": "u4-s3"
      },
      {
        "q": "Tibial ____ in broilers is a leg disorder in which a plug of unmineralised cartilage persists below the growth plate.",
        "a": [
          "dyschondroplasia"
        ],
        "a_display": "Dyschondroplasia",
        "e": "Tibial dyschondroplasia is linked to rapid growth and dietary imbalance, especially excess phosphorus or chloride relative to calcium. Correct Ca:P and adequate vitamin D3 reduce it.",
        "topicId": "u4-t17",
        "diff": 2,
        "subSection": "u4-s1"
      }
    ]
  }
};
