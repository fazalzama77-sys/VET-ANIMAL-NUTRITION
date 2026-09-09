# -*- coding: utf-8 -*-
"""
Unit 1 Question Bank: Principles of Animal Nutrition & Feed Technology
Strict 2:1:1 ratio: 90 MCQs, 45 True/False, 45 Fill in the Blanks (Total = 180)
Sub-sections:
  u1-s1: Water, Carbohydrates & Lipids (22 MCQ, 11 TF, 11 FIB = 44)
  u1-s2: Protein & Amino Acid Nutrition (18 MCQ, 9 TF, 9 FIB = 36)
  u1-s3: Minerals & Vitamins (20 MCQ, 10 TF, 10 FIB = 40)
  u1-s4: Bioenergetics & Energy Evaluation (14 MCQ, 7 TF, 7 FIB = 28)
  u1-s5: Feeds, Conservation & Technology (16 MCQ, 8 TF, 8 FIB = 32)
"""

mcq = [
    # --- u1-s1: Water, Carbohydrates & Lipids (22 MCQs) ---
    {
        "q": "Who is universally regarded as the Father of Animal Nutrition for establishing that respiration is a combustion process?",
        "o": ["Antoine Lavoisier", "Justus von Liebig", "Albrecht Thaer", "Wilhelm Henneberg"],
        "a": 0,
        "e": "Antoine Lavoisier (1743-1794) conducted pioneering respiration experiments with guinea pigs and ice calorimeters, proving life is a chemical combustion.",
        "topicId": "u1-t01",
        "diff": 1,
        "subSection": "u1-s1"
    },
    {
        "q": "Which French agricultural chemist conducted the first scientific balance experiments on dairy cows in 1839?",
        "o": ["J.B. Boussingault", "Max Rubner", "W.O. Atwater", "Oskar Kellner"],
        "a": 0,
        "e": "Jean-Baptiste Boussingault is recognized as the founder of modern agricultural chemistry and the first to perform complete feed-feces-urine balance trials.",
        "topicId": "u1-t01",
        "diff": 2,
        "subSection": "u1-s1"
    },
    {
        "q": "In the chemical composition of animal bodies, which constituent exhibits the highest inverse correlation with body fat percentage?",
        "o": ["Water", "Crude protein", "Total ash", "Carbohydrate"],
        "a": 0,
        "e": "Water and fat are inversely related in the animal body; on a fat-free basis, adult mammalian body water remains remarkably constant at approximately 72-74%.",
        "topicId": "u1-t03",
        "diff": 2,
        "subSection": "u1-s1"
    },
    {
        "q": "The primary structural carbohydrate present in mature plant cell walls that is completely indigestible by mammalian enzymes is:",
        "o": ["Cellulose", "Amylose", "Glycogen", "Inulin"],
        "a": 0,
        "e": "Cellulose consists of beta-1,4-glycosidic linkages which cannot be hydrolyzed by mammalian digestive enzymes, requiring ruminal microbial cellulase.",
        "topicId": "u1-t05",
        "diff": 1,
        "subSection": "u1-s1"
    },
    {
        "q": "Which ruminal volatile fatty acid (VFA) serves as the primary substrate for endogenous hepatic gluconeogenesis in ruminants?",
        "o": ["Propionate", "Acetate", "Butyrate", "Isovalerate"],
        "a": 0,
        "e": "Propionate is the sole major volatile fatty acid with a net glucogenic carbon skeleton, providing 60-80% of systemic glucose in lactating dairy cows.",
        "topicId": "u1-t05",
        "diff": 1,
        "subSection": "u1-s1"
    },
    {
        "q": "The primary volatile fatty acid responsible for stimulating ruminal epithelial papillae development in young calves is:",
        "o": ["Butyrate", "Acetate", "Propionate", "Formate"],
        "a": 0,
        "e": "Butyric acid provides direct oxidative fuel to the ruminal mucosa and is the most potent stimulator of rumen papillae growth and epithelial keratinization.",
        "topicId": "u1-t05",
        "diff": 2,
        "subSection": "u1-s1"
    },
    {
        "q": "The normal molar proportion of volatile fatty acids (Acetate : Propionate : Butyrate) in a dairy cow fed a standard high-roughage diet is approximately:",
        "o": ["65 : 20 : 15", "40 : 40 : 20", "20 : 65 : 15", "50 : 10 : 40"],
        "a": 0,
        "e": "High-forage diets foster fibrolytic bacteria (Fibrobacter succinogenes, Ruminococcus albus) producing an acetate-dominated VFA profile of roughly 65:20:15.",
        "topicId": "u1-t05",
        "diff": 2,
        "subSection": "u1-s1"
    },
    {
        "q": "Which complex phenolic polymer encrusts cellulose and hemicellulose in mature roughages and is completely resistant to anaerobic microbial fermentation?",
        "o": ["Lignin", "Pectin", "Cutin", "Suberin"],
        "a": 0,
        "e": "Lignin is not a true carbohydrate but a phenylpropanoid polymer that forms ester bonds with hemicellulose, physically preventing microbial enzyme access.",
        "topicId": "u1-t05",
        "diff": 2,
        "subSection": "u1-s1"
    },
    {
        "q": "What is the metabolic water yield per 100 grams of fully oxidized dietary fat?",
        "o": ["107.1 g", "55.5 g", "41.3 g", "200.0 g"],
        "a": 0,
        "e": "Fat yields the highest metabolic water upon beta-oxidation (107.1 g water / 100 g fat), compared to 55.5 g for starch and 41.3 g for protein.",
        "topicId": "u1-t08",
        "diff": 2,
        "subSection": "u1-s1"
    },
    {
        "q": "Which predominant polyunsaturated fatty acid (PUFA) in forage lipids undergoes extensive ruminal biohydrogenation to stearic acid?",
        "o": ["Linolenic acid (C18:3)", "Oleic acid (C18:1)", "Palmitic acid (C16:0)", "Myristic acid (C14:0)"],
        "a": 0,
        "e": "Alpha-linolenic acid (C18:3) is the chief PUFA in green forages; ruminal microbes isomerize and hydrogenate it sequentially to trans-vaccenic and stearic acid.",
        "topicId": "u1-t07",
        "diff": 3,
        "subSection": "u1-s1"
    },
    {
        "q": "Which intermediate of ruminal fatty acid biohydrogenation has been definitively identified as the causative agent of diet-induced milk fat depression (MFD)?",
        "o": ["trans-10, cis-12 conjugated linoleic acid (CLA)", "cis-9, trans-11 CLA", "trans-11 vaccenic acid", "stearic acid"],
        "a": 0,
        "e": "trans-10, cis-12 CLA potent down-regulates SREBP-1c and lipogenic enzymes (acetyl-CoA carboxylase, fatty acid synthase) in the bovine mammary gland.",
        "topicId": "u1-t07",
        "diff": 3,
        "subSection": "u1-s1"
    },
    {
        "q": "The main circulating lipoprotein responsible for transporting endogenous triglycerides from the avian liver to the ovary for yolk synthesis is:",
        "o": ["VLDL (Very Low Density Lipoprotein)", "Chylomicrons", "HDL", "Albumin"],
        "a": 0,
        "e": "Unlike mammals which absorb fats via mesenteric lymphatics, birds absorb dietary and hepatic lipids directly into portal blood, and liver secretes estrogen-induced VLDLy.",
        "topicId": "u1-t07",
        "diff": 3,
        "subSection": "u1-s1"
    },
    {
        "q": "Which physiological trigger stimulates thirst sensation when extracellular fluid osmolality increases by as little as 1-2%?",
        "o": ["Hypothalamic osmoreceptors", "Baroreceptors in aortic arch", "Renal juxtaglomerular cells", "Adrenal cortex glomerulosa"],
        "a": 0,
        "e": "An increase in ECF osmolarity shrinks hypothalamic osmoreceptor cells, triggering vasopressin (ADH) release from the posterior pituitary and conscious thirst.",
        "topicId": "u1-t08",
        "diff": 2,
        "subSection": "u1-s1"
    },
    {
        "q": "Amylose differs from amylopectin in having exclusively which type of glycosidic linkages?",
        "o": ["alpha-1,4-glucosidic bonds only", "alpha-1,6-glucosidic bonds only", "beta-1,4-glucosidic bonds", "both alpha-1,4 and alpha-1,6 branches"],
        "a": 0,
        "e": "Amylose is a linear unbranched polymer composed exclusively of alpha-D-glucose units joined by alpha-1,4-glycosidic linkages.",
        "topicId": "u1-t05",
        "diff": 1,
        "subSection": "u1-s1"
    },
    {
        "q": "Which enzyme synthesized by the neonatal gastric abomasal mucosa is vital for clotting milk kappa-casein in suckling calves?",
        "o": ["Chymosin (Rennin)", "Pepsin A", "Gastric lipase", "Trypsin"],
        "a": 0,
        "e": "Chymosin specifically cleaves the Phe105-Met106 peptide bond of kappa-casein, forming an insoluble curd that slows passage and allows thorough enzymatic digestion.",
        "topicId": "u1-t06",
        "diff": 1,
        "subSection": "u1-s1"
    },
    {
        "q": "Which volatile fatty acid is converted directly to ketone bodies (beta-hydroxybutyrate) across the ruminal epithelium during absorption?",
        "o": ["Butyrate", "Acetate", "Propionate", "Valerate"],
        "a": 0,
        "e": "Over 80-90% of ruminally absorbed butyric acid is converted directly to beta-hydroxybutyrate and acetoacetate within ruminal epithelial colonocytes.",
        "topicId": "u1-t05",
        "diff": 2,
        "subSection": "u1-s1"
    },
    {
        "q": "A high-concentrate, starch-rich diet fed to dairy cows leads to which metabolic shift in ruminal fermentation?",
        "o": ["Decreased acetate:propionate ratio and decreased rumen pH", "Increased acetate:propionate ratio and increased pH", "Selective elimination of amylolytic bacteria", "Elevated production of methane"],
        "a": 0,
        "e": "Rapidly fermentable starches proliferate Streptococcus bovis, boosting propionate and lactate, which lowers rumen pH below 5.8 and reduces the A:P ratio.",
        "topicId": "u1-t05",
        "diff": 2,
        "subSection": "u1-s1"
    },
    {
        "q": "Water intoxication in calves typically occurs as a result of which physiological event?",
        "o": ["Rapid consumption of large volumes of cold water after prolonged deprivation", "Chronic consumption of saline water (>10,000 ppm TDS)", "High dietary intake of succulent berseem clover", "Over-infusion of isotonic 0.9% saline"],
        "a": 0,
        "e": "Rapid ingestion of copious water causes sudden hemodilution, severe hypo-osmolality, intravascular hemolysis, hemoglobinuria, and fatal cerebral edema.",
        "topicId": "u1-t08",
        "diff": 2,
        "subSection": "u1-s1"
    },
    {
        "q": "Which non-reducing disaccharide composed of two glucose molecules joined by an alpha-1,1 linkage is found in insect hemolymph and yeast?",
        "o": ["Trehalose", "Maltose", "Cellobiose", "Gentiobiose"],
        "a": 0,
        "e": "Trehalose consists of two alpha-D-glucose molecules linked via an alpha-1,1 bond; it is non-reducing and found in fungi, bacteria, and insect blood.",
        "topicId": "u1-t05",
        "diff": 3,
        "subSection": "u1-s1"
    },
    {
        "q": "Dietary fat supplementation in ruminants must generally be restricted to what maximum percentage of diet dry matter to prevent fiber digestion depression?",
        "o": ["5 to 6%", "12 to 15%", "18 to 20%", "1 to 2%"],
        "a": 0,
        "e": "Free unsaturated oils above 5-6% coat fibrous feed particles and are directly toxic to cellulolytic bacteria, severely depressing fiber digestion.",
        "topicId": "u1-t07",
        "diff": 2,
        "subSection": "u1-s1"
    },
    {
        "q": "The primary storage polysaccharide found in the liver and skeletal muscle of animals is:",
        "o": ["Glycogen", "Starch", "Dextrin", "Inulin"],
        "a": 0,
        "e": "Glycogen is a highly branched alpha-1,4 and alpha-1,6 linked polyglucan serving as the rapid glucose reserve in animal liver and muscle tissue.",
        "topicId": "u1-t05",
        "diff": 1,
        "subSection": "u1-s1"
    },
    {
        "q": "Which chemical entity constitutes the true fundamental unit of plant cell walls determined as the residue after neutral detergent extraction?",
        "o": ["Neutral Detergent Fibre (NDF)", "Acid Detergent Fibre (ADF)", "Crude Fibre (CF)", "Total Ash"],
        "a": 0,
        "e": "NDF represents total plant cell wall components (hemicellulose, cellulose, lignin, and silica) and is the best single predictor of voluntary dry matter intake.",
        "topicId": "u1-t05",
        "diff": 2,
        "subSection": "u1-s1"
    },

    # --- u1-s2: Protein & Amino Acid Nutrition (18 MCQs) ---
    {
        "q": "The Kjeldahl nitrogen content of general plant and animal proteins is assumed to be what standard percentage, giving the conversion factor of 6.25?",
        "o": ["16.0%", "12.5%", "20.0%", "18.5%"],
        "a": 0,
        "e": "Because mixed proteins contain an average of 16% nitrogen by weight, multiplying percent nitrogen by 100/16 (6.25) yields the Crude Protein value.",
        "topicId": "u1-t06",
        "diff": 1,
        "subSection": "u1-s2"
    },
    {
        "q": "Which essential amino acid is invariably the first-limiting amino acid in maize-soybean meal based poultry diets?",
        "o": ["Methionine", "Lysine", "Threonine", "Tryptophan"],
        "a": 0,
        "e": "Soybean meal is rich in lysine but deficient in sulfur-containing amino acids; hence, DL-methionine is universally the first limiting amino acid in broiler rations.",
        "topicId": "u1-t06",
        "diff": 2,
        "subSection": "u1-s2"
    },
    {
        "q": "Which essential amino acid is typically first-limiting in cereal-based swine diets?",
        "o": ["Lysine", "Methionine", "Valine", "Isoleucine"],
        "a": 0,
        "e": "Cereal grains (maize, barley, wheat) are severely deficient in lysine; therefore, L-lysine is the first-limiting amino acid for growing swine.",
        "topicId": "u1-t06",
        "diff": 1,
        "subSection": "u1-s2"
    },
    {
        "q": "The formula for Biological Value (BV) of a dietary protein according to the Thomas-Mitchell method is:",
        "o": ["[N retained / N absorbed] x 100", "[N absorbed / N intake] x 100", "[Weight gain / Protein intake] x 100", "[N retained / N intake] x 100"],
        "a": 0,
        "e": "Biological Value measures the percentage of absorbed nitrogen that is retained by the animal body for maintenance and productive purposes.",
        "topicId": "u1-t16",
        "diff": 2,
        "subSection": "u1-s2"
    },
    {
        "q": "Net Protein Utilization (NPU) is mathematically equal to:",
        "o": ["Biological Value x True Digestibility", "Biological Value x Apparent Digestibility", "PER x 6.25", "DCP / Total Feed Intake"],
        "a": 0,
        "e": "NPU represents the proportion of dietary intake that is retained: NPU = (N retained / N intake) = BV x True Digestibility (TD).",
        "topicId": "u1-t16",
        "diff": 2,
        "subSection": "u1-s2"
    },
    {
        "q": "Protein Efficiency Ratio (PER) is determined by measuring:",
        "o": ["Body weight gain (g) per gram of protein consumed in growing rats", "Nitrogen balance in adult non-lactating females", "Serum urea nitrogen concentration post-feeding", "Duodenal amino acid flow per unit intake"],
        "a": 0,
        "e": "PER is defined as the grams of body weight gained per gram of crude protein consumed under standardized experimental conditions in weanling rats.",
        "topicId": "u1-t16",
        "diff": 1,
        "subSection": "u1-s2"
    },
    {
        "q": "Which protein evaluation parameter is used officially in the Indian ICAR feeding standard for calculating ruminant protein requirements?",
        "o": ["Digestible Crude Protein (DCP)", "Metabolisable Protein (MP)", "Net Protein System (PDI)", "Ruminant Degraded Protein (RDP)"],
        "a": 0,
        "e": "Historically and in the classical Sen & Ray and ICAR standards, protein requirements for cattle and buffaloes are formulated on a DCP basis.",
        "topicId": "u1-t16",
        "diff": 2,
        "subSection": "u1-s2"
    },
    {
        "q": "In the rumen, true dietary protein that escapes microbial degradation and passes directly to the abomasum is designated as:",
        "o": ["Rumen Undegradable Protein (RUP / Bypass Protein)", "Rumen Degradable Protein (RDP)", "Metabolic Fecal Nitrogen (MFN)", "Endogenous Urinary Nitrogen (EUN)"],
        "a": 0,
        "e": "RUP (Rumen Undegradable Protein) bypasses ruminal proteolysis intact to be enzymatically hydrolyzed by abomasal and intestinal proteases.",
        "topicId": "u1-t06",
        "diff": 1,
        "subSection": "u1-s2"
    },
    {
        "q": "Which chemical agent is approved and widely used in India for the commercial treatment of oilseed cakes to create bypass protein?",
        "o": ["Formaldehyde (at 1.0-1.2 g per 100 g CP)", "Glutaraldehyde (at 5 g per 100 g CP)", "Sodium hydroxide (at 4%)", "Hydrochloric acid (at 2 N)"],
        "a": 0,
        "e": "Treating groundnut or mustard cake with formalin at 1.0 to 1.2 g formaldehyde per 100 g crude protein creates reversible methylene bridges that protect against rumen breakdown.",
        "topicId": "u1-t06",
        "diff": 2,
        "subSection": "u1-s2"
    },
    {
        "q": "Microbial crude protein synthesized in the rumen has a biological value of approximately:",
        "o": ["80%", "50%", "30%", "100%"],
        "a": 0,
        "e": "Rumen microbial protein has an excellent, well-balanced essential amino acid profile with an average biological value of 75-85% and true digestibility of ~80%.",
        "topicId": "u1-t06",
        "diff": 2,
        "subSection": "u1-s2"
    },
    {
        "q": "Which amino acid contains sulfur and is essential for wool growth in sheep?",
        "o": ["Methionine", "Lysine", "Leucine", "Tryptophan"],
        "a": 0,
        "e": "Wool keratin contains over 3-4% sulfur predominantly in the form of cystine; dietary methionine supplies the sulfur skeleton for keratin synthesis.",
        "topicId": "u1-t06",
        "diff": 1,
        "subSection": "u1-s2"
    },
    {
        "q": "What is the optimal Nitrogen-to-Sulfur (N:S) ratio recommended in ruminant rations when non-protein nitrogen (urea) is incorporated?",
        "o": ["10 : 1", "20 : 1", "5 : 1", "1 : 1"],
        "a": 0,
        "e": "A dietary N:S ratio of 10:1 (or 10-12:1) ensures sufficient sulfur for ruminal microbes to synthesize methionine and cysteine from inorganic ammonia.",
        "topicId": "u1-t06",
        "diff": 2,
        "subSection": "u1-s2"
    },
    {
        "q": "Which of the following is considered an indispensable (essential) basic amino acid that contains an epsilon-amino group?",
        "o": ["Lysine", "Glycine", "Alanine", "Serine"],
        "a": 0,
        "e": "Lysine is a dibasic essential amino acid with a terminal epsilon-amino group that is susceptible to Maillard browning reactions during heat processing.",
        "topicId": "u1-t06",
        "diff": 2,
        "subSection": "u1-s2"
    },
    {
        "q": "The Maillard reaction in over-heated feeds involves the non-enzymatic condensation of the amino group of lysine with:",
        "o": ["Reducing sugars", "Volatile fatty acids", "Inorganic phosphates", "Triglycerides"],
        "a": 0,
        "e": "Maillard reaction occurs when free amino groups (especially epsilon-NH2 of lysine) react with aldehyde groups of reducing sugars, producing indigestible brown polymers.",
        "topicId": "u1-t06",
        "diff": 2,
        "subSection": "u1-s2"
    },
    {
        "q": "Which amino acid is exceptionally required in feline diets because cats have limited enzymatic activity of cysteine dioxygenase and sulfinoalanine decarboxylase?",
        "o": ["Taurine", "Proline", "Tyrosine", "Carnitine"],
        "a": 0,
        "e": "Cats cannot synthesize adequate taurine (a beta-aminosulfonic acid) and conjugate bile acids exclusively with taurine, making it an absolute dietary essential.",
        "topicId": "u1-t06",
        "diff": 1,
        "subSection": "u1-s2"
    },
    {
        "q": "What is the protein equivalent of pure feed-grade urea containing 46% nitrogen?",
        "o": ["287.5%", "100%", "46%", "16%"],
        "a": 0,
        "e": "Protein equivalent = % Nitrogen x 6.25 = 46 x 6.25 = 287.5%.",
        "topicId": "u1-t16",
        "diff": 1,
        "subSection": "u1-s2"
    },
    {
        "q": "In the calculation of Protein Equivalent (PE) according to the British system, PE is defined as:",
        "o": ["(DCP + True Digestible Protein) / 2", "DCP x 6.25", "NPU x Biological Value", "Crude Protein - Total Ash"],
        "a": 0,
        "e": "Protein Equivalent (PE) = (Digestible Crude Protein + Digestible Pure Protein) / 2; it attributes half the value of true protein to non-protein nitrogen.",
        "topicId": "u1-t16",
        "diff": 3,
        "subSection": "u1-s2"
    },
    {
        "q": "Which tissue possesses the highest turnover rate of cellular protein in lactating dairy cows?",
        "o": ["Intestinal mucosal epithelium", "Skeletal muscle", "Adipose tissue", "Cartilage"],
        "a": 0,
        "e": "Gastrointestinal epithelial cells undergo continuous rapid desquamation and complete renewal every 2-4 days, accounting for high endogenous protein expenditure.",
        "topicId": "u1-t06",
        "diff": 3,
        "subSection": "u1-s2"
    },

    # --- u1-s3: Minerals & Vitamins (20 MCQs) ---
    {
        "q": "Which ratio of dietary Calcium to Phosphorus (Ca:P) is considered physiologically optimal for adult ruminant livestock?",
        "o": ["1.5 : 1 to 2 : 1", "5 : 1 to 6 : 1", "1 : 2 to 1 : 3", "10 : 1"],
        "a": 0,
        "e": "A Ca:P ratio of 1.5:1 to 2:1 ensures adequate bone mineralization and prevents nutritional secondary hyperparathyroidism or urinary calculi.",
        "topicId": "u1-t09",
        "diff": 1,
        "subSection": "u1-s3"
    },
    {
        "q": "Nutritional secondary hyperparathyroidism in horses, commonly termed 'Big Head' or 'Bran Disease', is caused by:",
        "o": ["High dietary phosphorus and low calcium intake", "Severe vitamin D toxicity", "Zinc deficiency", "Copper toxicity"],
        "a": 0,
        "e": "Feeding wheat bran (high in phosphorus, low in calcium) stimulates chronic parathyroid hormone secretion, mobilizing bone calcium and replacing facial bones with fibrous tissue.",
        "topicId": "u1-t09",
        "diff": 2,
        "subSection": "u1-s3"
    },
    {
        "q": "Grass tetany (hypomagnesemic tetany) in cattle grazing lush spring pastures is exacerbated by high levels of which dietary element that blocks ruminal Mg absorption?",
        "o": ["Potassium (K)", "Sodium (Na)", "Calcium (Ca)", "Iron (Fe)"],
        "a": 0,
        "e": "High potassium depolarizes the ruminal apical epithelial membrane, severely reducing the active trans-epithelial potential driving magnesium transport.",
        "topicId": "u1-t09",
        "diff": 2,
        "subSection": "u1-s3"
    },
    {
        "q": "Which trace mineral is an integral constituent of the enzyme glutathione peroxidase, functioning alongside Vitamin E as an antioxidant?",
        "o": ["Selenium", "Zinc", "Copper", "Manganese"],
        "a": 0,
        "e": "Selenium is incorporated as selenocysteine into cytosolic glutathione peroxidase, which destroys hydrogen peroxide and lipid hydroperoxides.",
        "topicId": "u1-t10",
        "diff": 1,
        "subSection": "u1-s3"
    },
    {
        "q": "The classical deficiency sign of Copper in sheep and lambs characterized by demyelination of the spinal cord is known as:",
        "o": ["Swayback (Enzootic Ataxia)", "Grass staggers", "White muscle disease", "Crazy chick disease"],
        "a": 0,
        "e": "Copper is required for cytochrome c oxidase activity during myelination; deficiency causes ataxia, flaccid hindlimb paralysis, and swayback in lambs.",
        "topicId": "u1-t10",
        "diff": 2,
        "subSection": "u1-s3"
    },
    {
        "q": "Cobalt deficiency in ruminants manifests identically to which vitamin deficiency because cobalt is an obligate structural component of this vitamin?",
        "o": ["Vitamin B12 (Cyanocobalamin)", "Thiamine (Vitamin B1)", "Biotin (Vitamin B7)", "Folic acid (Vitamin B9)"],
        "a": 0,
        "e": "Ruminal microbes incorporate inorganic dietary cobalt directly into the corrin ring of cobalamin (vitamin B12); cobalt deficiency is essentially vitamin B12 deficiency.",
        "topicId": "u1-t10",
        "diff": 1,
        "subSection": "u1-s3"
    },
    {
        "q": "Parakeratosis in growing swine is caused by a dietary deficiency of which trace mineral, often precipitated by excess calcium?",
        "o": ["Zinc", "Iron", "Iodine", "Molybdenum"],
        "a": 0,
        "e": "Zinc deficiency causes keratinization failure in pig epidermis (crusty fissured skin); excess calcium competes for intestinal zinc absorption sites.",
        "topicId": "u1-t10",
        "diff": 2,
        "subSection": "u1-s3"
    },
    {
        "q": "Which mineral deficiency in newborn piglets is universally prevented by intramuscular injection of iron dextran (150-200 mg) at 3 days of age?",
        "o": ["Iron (preventing 'Piglet Thumps')", "Copper", "Manganese", "Iodine"],
        "a": 0,
        "e": "Piglets are born with minimal iron stores (~50 mg) and sow milk is deficient (1 mg/day vs 7 mg requirement); without iron injection, fatal microcytic hypochromic anemia occurs.",
        "topicId": "u1-t10",
        "diff": 1,
        "subSection": "u1-s3"
    },
    {
        "q": "Perosis or 'slipped tendon' in growing poultry chicks is primarily caused by a deficiency of:",
        "o": ["Manganese", "Selenium", "Cobalt", "Fluorine"],
        "a": 0,
        "e": "Manganese is a cofactor for glycosyltransferases required for chondroitin sulfate synthesis; deficiency weakens the tibiotarsal joint, causing gastrocnemius tendon slippage.",
        "topicId": "u1-t10",
        "diff": 2,
        "subSection": "u1-s3"
    },
    {
        "q": "Alkali disease and blind staggers are clinical syndromes associated with chronic toxicity of which trace element?",
        "o": ["Selenium", "Fluorine", "Lead", "Arsenic"],
        "a": 0,
        "e": "Chronic selenosis (alkali disease) occurs in animals grazing selenium-accumulating plants (Astragalus), causing hoof sloughing, emaciation, and mane/tail hair loss.",
        "topicId": "u1-t10",
        "diff": 2,
        "subSection": "u1-s3"
    },
    {
        "q": "Why cannot domestic cats utilize beta-carotene as a dietary source of Vitamin A?",
        "o": ["They lack intestinal beta-carotene-15,15'-dioxygenase activity", "They lack gastric hydrochloric acid", "They do not absorb dietary micellar lipids", "Carotene is toxic to the feline liver"],
        "a": 0,
        "e": "Cats are strict carnivores with virtually no beta-carotene dioxygenase enzyme activity in their enterocytes, requiring preformed dietary retinol (Vitamin A).",
        "topicId": "u1-t11",
        "diff": 2,
        "subSection": "u1-s3"
    },
    {
        "q": "The active hormonal form of Vitamin D synthesized in the renal proximal convoluted tubules is:",
        "o": ["1,25-dihydroxycholecalciferol [1,25-(OH)2-D3]", "25-hydroxycholecalciferol", "7-dehydrocholesterol", "Ergosterol"],
        "a": 0,
        "e": "Renal 1-alpha-hydroxylase converts 25-OH-D3 to 1,25-(OH)2-D3 (calcitriol), which binds nuclear VDR receptors to stimulate calbindin-mediated calcium absorption.",
        "topicId": "u1-t11",
        "diff": 2,
        "subSection": "u1-s3"
    },
    {
        "q": "The biological activity of Vitamin E is most potently exhibited by which chemical isomer?",
        "o": ["d-alpha-tocopherol (RRR-alpha-tocopherol)", "beta-tocopherol", "gamma-tocopherol", "delta-tocotrienol"],
        "a": 0,
        "e": "Naturally occurring d-alpha-tocopherol (RRR-alpha-tocopherol) possesses the greatest in vivo biological antioxidant activity.",
        "topicId": "u1-t11",
        "diff": 2,
        "subSection": "u1-s3"
    },
    {
        "q": "Sweet clover disease in cattle is caused by ingestion of spoiled Melilotus hay containing dicoumarol, an antagonist of which vitamin?",
        "o": ["Vitamin K", "Vitamin E", "Vitamin A", "Vitamin C"],
        "a": 0,
        "e": "Dicoumarol competitively inhibits vitamin K epoxide reductase, preventing gamma-carboxylation of clotting factors II, VII, IX, and X, leading to fatal hemorrhage.",
        "topicId": "u1-t11",
        "diff": 2,
        "subSection": "u1-s3"
    },
    {
        "q": "Cerebrocortical necrosis (CCN) or Polioencephalomalacia (PEM) in young ruminants is caused by an acute deficiency or microbial destruction of:",
        "o": ["Thiamine (Vitamin B1)", "Riboflavin (Vitamin B2)", "Niacin (Vitamin B3)", "Pyridoxine (Vitamin B6)"],
        "a": 0,
        "e": "High-concentrate feeding or sulfur overload promotes ruminal bacterial thiaminases, leading to thiamine depletion, cerebral ATP failure, and cortical necrosis.",
        "topicId": "u1-t12",
        "diff": 2,
        "subSection": "u1-s3"
    },
    {
        "q": "Curled toe paralysis in young chicks is a pathognomonic diagnostic sign of which vitamin deficiency?",
        "o": ["Riboflavin (Vitamin B2)", "Pantothenic acid", "Thiamine", "Choline"],
        "a": 0,
        "e": "Riboflavin deficiency in chicks causes myelin sheath degeneration in the sciatic nerve trunks, forcing chicks to walk on their hocks with inward curled toes.",
        "topicId": "u1-t12",
        "diff": 2,
        "subSection": "u1-s3"
    },
    {
        "q": "Which B-complex vitamin deficiency in pigs causes the characteristic 'goose-stepping' gait due to peripheral sciatic neuropathy?",
        "o": ["Pantothenic acid (Vitamin B5)", "Pyridoxine (Vitamin B6)", "Biotin (Vitamin B7)", "Niacin (Vitamin B3)"],
        "a": 0,
        "e": "Pantothenic acid is a component of Coenzyme A; its deficiency produces demyelinating peripheral neuropathy leading to an exaggerated robotic goose-stepping gait in pigs.",
        "topicId": "u1-t12",
        "diff": 2,
        "subSection": "u1-s3"
    },
    {
        "q": "Most domestic farm mammals can synthesize endogenous Vitamin C (L-ascorbic acid) from D-glucose because their liver contains which functional enzyme?",
        "o": ["L-gulonolactone oxidase", "Glucose-6-phosphatase", "UDP-glucuronosyltransferase", "Aldose reductase"],
        "a": 0,
        "e": "Farm animals possess functional hepatic L-gulonolactone oxidase; humans, primates, and guinea pigs possess a mutated inactive pseudogene, requiring dietary Vitamin C.",
        "topicId": "u1-t12",
        "diff": 3,
        "subSection": "u1-s3"
    },
    {
        "q": "The primary clinical sign of chronic fluorosis in cattle caused by drinking groundwater containing >5-10 ppm Fluorine is:",
        "o": ["Mottling and excessive attrition of incisor teeth and exostoses of bones", "Severe night blindness", "Parakeratosis of the snout", "Curled-toe paralysis"],
        "a": 0,
        "e": "Fluoride replaces hydroxyl groups forming fluorapatite crystals in developing teeth and bones, leading to chalky mottled enamel, severe pain, and periosteal exostoses.",
        "topicId": "u1-t10",
        "diff": 2,
        "subSection": "u1-s3"
    },
    {
        "q": "Which trace element is an indispensable constituent of the thyroid hormones thyroxine (T4) and triiodothyronine (T3)?",
        "o": ["Iodine", "Iron", "Zinc", "Manganese"],
        "a": 0,
        "e": "Iodine is concentrated in thyroid follicular cells and iodinates tyrosine residues on thyroglobulin to synthesize active metabolic thyroid hormones.",
        "topicId": "u1-t10",
        "diff": 1,
        "subSection": "u1-s3"
    },

    # --- u1-s4: Bioenergetics & Energy Evaluation (14 MCQs) ---
    {
        "q": "Total Digestible Nutrients (TDN) is calculated using which mathematical formula?",
        "o": ["DCP + DCF + DNFE + (DEE x 2.25)", "DCP + DCF + DNFE + DEE", "DCP + DCF + (DNFE x 2.25) + DEE", "GE - Fecal Energy"],
        "a": 0,
        "e": "TDN sums digestible crude protein, crude fiber, nitrogen-free extract, and digestible ether extract multiplied by 2.25 (since fat contains 2.25 times the gross energy of carbs).",
        "topicId": "u1-t14",
        "diff": 1,
        "subSection": "u1-s4"
    },
    {
        "q": "Why is Digestible Ether Extract (DEE) multiplied by the factor 2.25 in the calculation of TDN?",
        "o": ["Fats yield 2.25 times more heat/energy per gram upon combustion than carbohydrates", "Fats have a biological value 2.25 times higher than proteins", "Fats contain 2.25 times more carbon atoms per mole", "Fats are 2.25 times more digestible than starch"],
        "a": 0,
        "e": "The average gross energy of fat is 9.45 kcal/g, while that of carbohydrates is 4.15 kcal/g. The ratio 9.45 / 4.15 = 2.277, conventionally rounded to 2.25.",
        "topicId": "u1-t14",
        "diff": 1,
        "subSection": "u1-s4"
    },
    {
        "q": "Metabolizable Energy (ME) in ruminants is derived from Digestible Energy (DE) by subtracting losses incurred through:",
        "o": ["Urine energy and methane (gaseous) energy", "Heat increment only", "Fecal energy and sweat", "Basal metabolic heat production"],
        "a": 0,
        "e": "ME = DE - (Urinary energy + Gaseous energy). In ruminants, enteric methane accounts for 6-10% and urinary energy for 3-5% of gross energy intake.",
        "topicId": "u1-t14",
        "diff": 1,
        "subSection": "u1-s4"
    },
    {
        "q": "Net Energy (NE) differs from Metabolizable Energy (ME) by the quantity of energy lost as:",
        "o": ["Heat Increment (HI)", "Combustible gases (methane)", "Urinary urea", "Fecal nitrogen"],
        "a": 0,
        "e": "NE = ME - Heat Increment (HI). Heat increment represents heat of fermentation and heat of nutrient metabolism that is dissipated except in cold stress.",
        "topicId": "u1-t14",
        "diff": 1,
        "subSection": "u1-s4"
    },
    {
        "q": "The Starch Equivalent (SE) system of feed energy evaluation was originated by which German scientist?",
        "o": ["Oskar Kellner", "Albrecht Thaer", "Gustav von Bunge", "Wilhelm Henneberg"],
        "a": 0,
        "e": "Oskar Kellner (1905) determined fat deposition in adult bullocks in respiration chambers, defining SE as the fat-producing value of 1 kg of digestible starch (248 g body fat).",
        "topicId": "u1-t14",
        "diff": 2,
        "subSection": "u1-s4"
    },
    {
        "q": "What is the Respiratory Quotient (RQ) when an animal is exclusively oxidizing carbohydrates?",
        "o": ["1.00", "0.71", "0.82", "0.60"],
        "a": 0,
        "e": "RQ is the ratio of moles of CO2 produced to moles of O2 consumed (CO2 / O2). Complete combustion of glucose (C6H12O6 + 6 O2 -> 6 CO2 + 6 H2O) yields an RQ of exactly 1.00.",
        "topicId": "u1-t15",
        "diff": 1,
        "subSection": "u1-s4"
    },
    {
        "q": "The Respiratory Quotient (RQ) during the oxidation of dietary or mobilized body fats is approximately:",
        "o": ["0.707", "1.000", "0.803", "0.920"],
        "a": 0,
        "e": "Fats contain relatively little oxygen in their molecular structure compared to carbon and hydrogen, requiring substantially more oxygen for complete oxidation (RQ ~ 0.707).",
        "topicId": "u1-t15",
        "diff": 2,
        "subSection": "u1-s4"
    },
    {
        "q": "The standard Physiological Fuel Values established by W.O. Atwater for human and non-ruminant nutrition (Carbohydrates, Fat, Protein in kcal/g) are:",
        "o": ["4, 9, 4", "4, 4, 9", "9, 4, 4", "5.65, 9.45, 4.15"],
        "a": 0,
        "e": "Atwater physiological fuel values account for digestion losses and urinary urea excretion: 4 kcal/g for carbs, 9 kcal/g for fat, and 4 kcal/g for protein.",
        "topicId": "u1-t14",
        "diff": 1,
        "subSection": "u1-s4"
    },
    {
        "q": "In a Carbon-Nitrogen balance experiment, nitrogen balance directly quantifies body protein deposition, while carbon balance minus protein carbon quantifies:",
        "o": ["Body fat deposition or loss", "Glycogen synthesis only", "Methane production rate", "Water turnover"],
        "a": 0,
        "e": "Body protein contains on average 16.0% N and 52.5% C. Subtracting retained protein carbon from total retained carbon yields carbon stored as fat (fat is 76.5% C).",
        "topicId": "u1-t15",
        "diff": 3,
        "subSection": "u1-s4"
    },
    {
        "q": "Nutritive Ratio (NR) is calculated using which formula?",
        "o": ["(TDN - DCP) / DCP", "DCP / (TDN - DCP)", "TDN / DCP", "DE / ME"],
        "a": 0,
        "e": "Nutritive Ratio expresses the ratio of non-protein digestible energy nutrients to digestible crude protein: NR = (TDN - DCP) / DCP.",
        "topicId": "u1-t17",
        "diff": 2,
        "subSection": "u1-s4"
    },
    {
        "q": "A ration with a Nutritive Ratio of 1 : 4 is classified as:",
        "o": ["Narrow Nutritive Ratio", "Medium Nutritive Ratio", "Wide Nutritive Ratio", "Balanced Maintenance Ratio"],
        "a": 0,
        "e": "A Nutritive Ratio narrower than 1:5 is classified as narrow (high protein, suitable for young growing calves and high-yielding dairy cows).",
        "topicId": "u1-t17",
        "diff": 1,
        "subSection": "u1-s4"
    },
    {
        "q": "Which instrument is used to determine the Gross Energy (heat of combustion) of a feed or biological sample?",
        "o": ["Adiabatic Oxygen Bomb Calorimeter", "Kjeldahl digestion unit", "Soxhlet extraction apparatus", "Muffle furnace"],
        "a": 0,
        "e": "A bomb calorimeter ignites a pelleted sample under 25-30 atmospheres of pure oxygen inside a water jacket, measuring gross heat of combustion precisely.",
        "topicId": "u1-t14",
        "diff": 1,
        "subSection": "u1-s4"
    },
    {
        "q": "Indirect calorimetry measures heat production in animals by determining:",
        "o": ["Respiratory gas exchange (O2 consumption, CO2 and CH4 production) and urinary N", "Direct heat dissipation across a water jacket", "Rectal temperature changes during exercise", "Fecal dry matter excretion rate"],
        "a": 0,
        "e": "Indirect calorimetry calculates heat production via Brouwer's equation from oxygen consumption, carbon dioxide production, methane emission, and urinary nitrogen excretion.",
        "topicId": "u1-t15",
        "diff": 2,
        "subSection": "u1-s4"
    },
    {
        "q": "What conversion factor is conventionally adopted to convert 1 kg of Total Digestible Nutrients (TDN) to Metabolizable Energy (ME) in ruminants?",
        "o": ["3.61 Mcal ME (or 15.1 MJ)", "2.00 Mcal ME", "4.40 Mcal ME", "1.80 Mcal ME"],
        "a": 0,
        "e": "1 kg TDN corresponds to approximately 4.4 Mcal of Digestible Energy (DE); applying the 0.82 ME/DE factor gives approximately 3.61 Mcal ME.",
        "topicId": "u1-t14",
        "diff": 2,
        "subSection": "u1-s4"
    },

    # --- u1-s5: Feeds, Conservation & Technology (16 MCQs) ---
    {
        "q": "According to the conventional classification of livestock feedstuffs, a roughage is strictly defined as a feed containing:",
        "o": ["> 18% Crude Fibre and < 60% TDN on a Dry Matter basis", "< 18% Crude Fibre and > 60% TDN on a Dry Matter basis", "> 20% Crude Protein and < 10% Moisture", "< 5% Ether Extract and > 80% Ash"],
        "a": 0,
        "e": "Roughages are bulky feeds characterized by high crude fiber (>18% CF) and relatively low energy density (<60% TDN on dry matter basis).",
        "topicId": "u1-t13",
        "diff": 1,
        "subSection": "u1-s5"
    },
    {
        "q": "What is the standard recommended level of urea and water used for the ammoniation of 100 kg dry paddy or wheat straw in India?",
        "o": ["4 kg urea dissolved in 40 L water", "10 kg urea dissolved in 100 L water", "1 kg urea dissolved in 10 L water", "8 kg urea dissolved in 20 L water"],
        "a": 0,
        "e": "The standard ICAR protocol for straw treatment is 4 kg fertilizer-grade urea dissolved in 40-50 liters of water sprayed uniformly over 100 kg straw and cured anaerobically for 21 days.",
        "topicId": "u1-t20",
        "diff": 1,
        "subSection": "u1-s5"
    },
    {
        "q": "During the anaerobic curing phase of urea-ammoniated straw, what minimum incubation period is required under tropical Indian conditions?",
        "o": ["21 days (3 weeks)", "2 days", "60 days", "90 days"],
        "a": 0,
        "e": "A minimum of 21 days is required for urease-mediated hydrolysis of urea to ammonia gas and subsequent breaking of ester linkages between lignin and hemicellulose.",
        "topicId": "u1-t20",
        "diff": 2,
        "subSection": "u1-s5"
    },
    {
        "q": "What is the ideal moisture content of green forage at the time of ensiling for optimal lactic acid fermentation?",
        "o": ["65 to 70% (30-35% Dry Matter)", "85 to 90% (10-15% Dry Matter)", "40 to 45% (55-60% Dry Matter)", "< 15% (Hay stage)"],
        "a": 0,
        "e": "At 30-35% DM (65-70% moisture), lactic acid bacteria proliferate efficiently without excessive effluent leaching or clostridial butyric acid spoilage.",
        "topicId": "u1-t21",
        "diff": 2,
        "subSection": "u1-s5"
    },
    {
        "q": "Which species of bacteria is the primary desirable microorganism responsible for rapid acidification in high-quality silage?",
        "o": ["Lactobacillus plantarum", "Clostridium butyricum", "Escherichia coli", "Bacillus subtilis"],
        "a": 0,
        "e": "Homofermentative lactic acid bacteria like Lactobacillus plantarum convert water-soluble carbohydrates rapidly into lactic acid, reducing pH to 3.8-4.2.",
        "topicId": "u1-t21",
        "diff": 2,
        "subSection": "u1-s5"
    },
    {
        "q": "A silage sample characterized as 'Very Good' on the Flieg's Score system must have a final pH in the range of:",
        "o": ["3.8 to 4.2", "5.5 to 6.5", "6.8 to 7.4", "2.0 to 2.5"],
        "a": 0,
        "e": "Excellent silage achieves a stable pH of 3.8 to 4.2, with lactic acid comprising >65% of total organic acids and ammoniacal nitrogen <10% of total N.",
        "topicId": "u1-t21",
        "diff": 2,
        "subSection": "u1-s5"
    },
    {
        "q": "The safe upper limit of moisture in well-cured hay to prevent microbial respiration, spontaneous combustion, and molding during stack storage is:",
        "o": ["15 to 18%", "30 to 35%", "25 to 28%", "40 to 45%"],
        "a": 0,
        "e": "Hay must be field-cured down to 15-18% moisture. Moisture exceeding 20-22% invites fungal growth, mycotoxin production, and internal heating.",
        "topicId": "u1-t22",
        "diff": 1,
        "subSection": "u1-s5"
    },
    {
        "q": "The toxic anti-nutritional glucoside present in young, drought-stressed sorghum (Jowar / Chari) plants under 50 days of growth is:",
        "o": ["Dhurrin (yielding Hydrocyanic Acid / HCN)", "Mimosine", "Gossypol", "Sinigrin"],
        "a": 0,
        "e": "Dhurrin is a cyanogenic glycoside in immature sorghum; enzymatic hydrolysis by plant beta-glucosidase and hydroxynitrile lyase liberates toxic free HCN.",
        "topicId": "u1-t23",
        "diff": 1,
        "subSection": "u1-s5"
    },
    {
        "q": "What is the critical lethal concentration threshold of Hydrocyanic Acid (HCN) in fresh green fodder on a dry matter basis?",
        "o": ["> 200 ppm (mg/kg DM)", "> 20 ppm", "> 1000 ppm", "> 5 ppm"],
        "a": 0,
        "e": "Forage containing >200 ppm HCN on dry matter basis is hazardous and potentially lethal to livestock through inhibition of cytochrome oxidase.",
        "topicId": "u1-t23",
        "diff": 2,
        "subSection": "u1-s5"
    },
    {
        "q": "The toxic non-protein amino acid present in Subabul (Leucaena leucocephala) leaves that causes alopecia and goitre in non-adapted ruminants is:",
        "o": ["Mimosine", "Canavanine", "Abrin", "Ricin"],
        "a": 0,
        "e": "Mimosine is degraded in the rumen to 3,4-DHP, a potent goitrogen; ruminants lacking the ruminal bacterium Synergistes jonesii develop severe toxicity.",
        "topicId": "u1-t23",
        "diff": 2,
        "subSection": "u1-s5"
    },
    {
        "q": "Which chemical salt is universally added to raw cottonseed cake rations at a 1:1 weight ratio to neutralize the toxic effects of free gossypol?",
        "o": ["Ferrous sulfate (FeSO4)", "Sodium chloride (NaCl)", "Copper sulfate (CuSO4)", "Calcium carbonate (CaCO3)"],
        "a": 0,
        "e": "Ferrous sulfate provides divalent iron ions (Fe2+) which bind the reactive formyl and hydroxyl groups of free gossypol, forming an insoluble, non-absorbable iron-gossypol complex.",
        "topicId": "u1-t23",
        "diff": 2,
        "subSection": "u1-s5"
    },
    {
        "q": "The primary anti-nutritional factor in raw soybeans that inhibits pancreatic enzymes and causes compensatory pancreatic hypertrophy in monogastric animals is:",
        "o": ["Kunitz and Bowman-Birk Trypsin Inhibitors", "Gossypol", "Tannins", "Oxalates"],
        "a": 0,
        "e": "Trypsin inhibitors in raw soybeans inhibit trypsin and chymotrypsin; they are heat-labile and inactivated by proper toasting, roasting, or extrusion.",
        "topicId": "u1-t23",
        "diff": 2,
        "subSection": "u1-s5"
    },
    {
        "q": "Aflatoxin B1 is a potent hepatotoxic and carcinogenic mycotoxin produced in improperly stored oilseed cakes and grains by:",
        "o": ["Aspergillus flavus and Aspergillus parasiticus", "Fusarium moniliforme", "Penicillium roqueforti", "Claviceps purpurea"],
        "a": 0,
        "e": "Aspergillus flavus synthesizes aflatoxins (B1, B2, G1, G2) at moisture levels >14% and temperatures >25°C; B1 is metabolized to M1 excreted in milk.",
        "topicId": "u1-t23",
        "diff": 1,
        "subSection": "u1-s5"
    },
    {
        "q": "Monensin and Lasalocid belong to which class of feed additives that selectively alter rumen microbial populations to increase propionate and depress methane?",
        "o": ["Carboxylic Polyether Ionophores", "Direct-fed microbials", "Prebiotic oligosaccharides", "Exogenous fibrolytic enzymes"],
        "a": 0,
        "e": "Ionophores act as lipid-soluble cation antiporters that disrupt transmembrane ion gradients in Gram-positive bacteria, favoring propionate-producing Gram-negatives.",
        "topicId": "u1-t25",
        "diff": 2,
        "subSection": "u1-s5"
    },
    {
        "q": "Which analytical parameter in the Weende Proximate analysis is used specifically to detect adulteration of mineral mixtures or bran with sand and silica?",
        "o": ["Acid Insoluble Ash (AIA)", "Total Ash", "Crude Fibre", "Ether Extract"],
        "a": 0,
        "e": "AIA represents the mineral residue insoluble in boiling dilute (3 N) hydrochloric acid, which consists predominantly of extraneous sand, dirt, and silica.",
        "topicId": "u1-t24",
        "diff": 2,
        "subSection": "u1-s5"
    },
    {
        "q": "The inclusion of exogenous microbial phytase enzyme in monogastric (poultry and swine) diets is primarily intended to:",
        "o": ["Hydrolyze phytate-bound phosphorus and reduce environmental phosphorus excretion", "Degrade structural cellulose", "Inactivate dietary mycotoxins", "Synthesize endogenous methionine"],
        "a": 0,
        "e": "Monogastrics lack endogenous phytase; supplemental phytase hydrolyzes myo-inositol hexakisphosphate (phytate), liberating available phosphorus and reducing fecal excretion.",
        "topicId": "u1-t25",
        "diff": 1,
        "subSection": "u1-s5"
    }
]

tf = [
    # --- u1-s1: Water, Carbohydrates & Lipids (11 TF) ---
    {
        "q": "On a fat-free empty body basis, the percentage of water in adult mammalian bodies remains nearly constant at approximately 73%.",
        "a": True,
        "e": "True. The water content of lean body tissue (fat-free body mass) across mammalian species is remarkably constant at 72-74%.",
        "topicId": "u1-t03",
        "diff": 1,
        "subSection": "u1-s1"
    },
    {
        "q": "Mammalian digestive secretions contain an endogenous cellulase enzyme capable of hydrolyzing beta-1,4-glycosidic linkages.",
        "a": False,
        "e": "False. Mammals cannot secrete endogenous cellulase; cellulose digestion is entirely dependent on symbiotic microbial fermentation.",
        "topicId": "u1-t05",
        "diff": 1,
        "subSection": "u1-s1"
    },
    {
        "q": "Propionic acid is the only major volatile fatty acid produced in the rumen that can be converted into glucose via gluconeogenesis.",
        "a": True,
        "e": "True. Propionate enters the citric acid cycle at succinyl-CoA and provides the sole net carbon source for hepatic gluconeogenesis among the major VFAs.",
        "topicId": "u1-t05",
        "diff": 1,
        "subSection": "u1-s1"
    },
    {
        "q": "Acetic acid produced in the rumen is the primary precursor for the de novo synthesis of fatty acids in the bovine mammary gland.",
        "a": True,
        "e": "True. Acetate provides acetyl-CoA units for de novo milk fat synthesis (C4:0 to C14:0 and part of C16:0) in the mammary epithelial cells.",
        "topicId": "u1-t05",
        "diff": 2,
        "subSection": "u1-s1"
    },
    {
        "q": "In the rumen, unsaturated dietary fatty acids undergo microbial biohydrogenation to become more saturated.",
        "a": True,
        "e": "True. Rumen microorganisms biohydrogenate dietary polyunsaturated fatty acids into saturated stearic acid (C18:0) to protect themselves from membrane toxicity.",
        "topicId": "u1-t07",
        "diff": 2,
        "subSection": "u1-s1"
    },
    {
        "q": "Lignin is a complex structural carbohydrate composed of repeating glucose and xylose monomers.",
        "a": False,
        "e": "False. Lignin is not a carbohydrate; it is an amorphous phenylpropanoid polymer of aromatic alcohols (coniferyl, sinapyl, p-coumaryl).",
        "topicId": "u1-t05",
        "diff": 2,
        "subSection": "u1-s1"
    },
    {
        "q": "Metabolic water production per gram of nutrient is highest for proteins compared to carbohydrates and fats.",
        "a": False,
        "e": "False. Fat produces the highest metabolic water (1.07 g/g fat), while protein produces the lowest (0.41 g/g protein) due to urea synthesis costs.",
        "topicId": "u1-t08",
        "diff": 1,
        "subSection": "u1-s1"
    },
    {
        "q": "Feeding a high-grain, low-fiber diet to a lactating cow decreases ruminal propionate and increases the milk fat test.",
        "a": False,
        "e": "False. High-grain diets increase propionate, decrease ruminal pH, promote trans-10, cis-12 CLA formation, and cause milk fat depression.",
        "topicId": "u1-t05",
        "diff": 2,
        "subSection": "u1-s1"
    },
    {
        "q": "Salivary secretion in ruminants is continuous and rich in sodium bicarbonate and phosphate buffers to neutralize rumen acids.",
        "a": True,
        "e": "True. Adult cattle secrete 100-150 liters of saliva daily containing copious bicarbonate and phosphate to maintain rumen pH between 6.2 and 6.8.",
        "topicId": "u1-t08",
        "diff": 1,
        "subSection": "u1-s1"
    },
    {
        "q": "Glycogen is structurally analogous to amylopectin but possesses more frequent alpha-1,6 branch points.",
        "a": True,
        "e": "True. Glycogen is branched every 8 to 12 glucose residues, whereas amylopectin branches every 24 to 30 residues.",
        "topicId": "u1-t05",
        "diff": 2,
        "subSection": "u1-s1"
    },
    {
        "q": "Arachidonic acid is a dietary essential fatty acid for domestic cats because cats have low delta-6-desaturase enzyme activity.",
        "a": True,
        "e": "True. Felines lack significant delta-6-desaturase activity and cannot convert linoleic acid to arachidonic acid, requiring preformed animal fat in their diet.",
        "topicId": "u1-t07",
        "diff": 2,
        "subSection": "u1-s1"
    },

    # --- u1-s2: Protein & Amino Acid Nutrition (9 TF) ---
    {
        "q": "The crude protein content of a feed is routinely determined by multiplying its total Kjeldahl nitrogen content by the factor 6.25.",
        "a": True,
        "e": "True. Because mixed proteins contain an average of 16% nitrogen, the conversion factor is 100 / 16 = 6.25.",
        "topicId": "u1-t06",
        "diff": 1,
        "subSection": "u1-s2"
    },
    {
        "q": "Urea is a true protein supplement suitable for feeding to newly hatched broiler chicks.",
        "a": False,
        "e": "False. Urea is non-protein nitrogen (NPN); poultry lack a functional microbial fermentation vat prior to absorption and cannot utilize urea.",
        "topicId": "u1-t06",
        "diff": 1,
        "subSection": "u1-s2"
    },
    {
        "q": "Formaldehyde treatment of oilseed cakes protects dietary protein from microbial breakdown in the rumen without impairing abomasal digestion.",
        "a": True,
        "e": "True. Formaldehyde creates methylene bridges at neutral rumen pH (6.5), which break down in the acidic pH (<3.0) of the abomasum, releasing free protein.",
        "topicId": "u1-t06",
        "diff": 2,
        "subSection": "u1-s2"
    },
    {
        "q": "Biological Value (BV) takes into account the digestibility of the dietary protein in its mathematical formula.",
        "a": False,
        "e": "False. BV measures retained N as a percentage of absorbed N ([Retained / Absorbed] x 100); Net Protein Utilization (NPU = BV x TD) accounts for digestibility.",
        "topicId": "u1-t16",
        "diff": 2,
        "subSection": "u1-s2"
    },
    {
        "q": "Microbial protein synthesized in the rumen has a well-balanced amino acid profile and a biological value of about 80%.",
        "a": True,
        "e": "True. Rumen microbes synthesize high-quality protein resembling animal tissue protein in amino acid balance.",
        "topicId": "u1-t06",
        "diff": 1,
        "subSection": "u1-s2"
    },
    {
        "q": "The Protein Efficiency Ratio (PER) method measures the nitrogen balance of adult animals in metabolic cages.",
        "a": False,
        "e": "False. PER is determined by measuring weight gain (g) per gram of protein consumed in growing young rats over a 28-day period.",
        "topicId": "u1-t16",
        "diff": 2,
        "subSection": "u1-s2"
    },
    {
        "q": "Maillard browning reactions enhance the biological availability of lysine in roasted feedstuffs.",
        "a": False,
        "e": "False. Maillard reactions bind the epsilon-amino group of lysine with reducing sugars to form indigestible complexes, reducing lysine bioavailability.",
        "topicId": "u1-t06",
        "diff": 2,
        "subSection": "u1-s2"
    },
    {
        "q": "Methionine and lysine are commonly synthesized by chemical and fermentation processes for commercial feed supplementation.",
        "a": True,
        "e": "True. Synthetic DL-methionine and L-lysine HCl are universally added to balance ideal amino acid profiles in poultry and swine diets.",
        "topicId": "u1-t06",
        "diff": 1,
        "subSection": "u1-s2"
    },
    {
        "q": "Taurine is an essential dietary amino acid for dogs because they cannot conjugate bile acids with glycine.",
        "a": False,
        "e": "False. Cats (not dogs) have an obligate dietary requirement for taurine; dogs can synthesize adequate taurine from methionine and cysteine.",
        "topicId": "u1-t06",
        "diff": 2,
        "subSection": "u1-s2"
    },

    # --- u1-s3: Minerals & Vitamins (10 TF) ---
    {
        "q": "Feeding an inverted Ca:P ratio (excess phosphorus relative to calcium) can trigger nutritional secondary hyperparathyroidism.",
        "a": True,
        "e": "True. Excess phosphorus causes hypocalcemia, triggering continuous parathyroid hormone secretion and severe bone resorption.",
        "topicId": "u1-t09",
        "diff": 2,
        "subSection": "u1-s3"
    },
    {
        "q": "Vitamin D3 (cholecalciferol) and Vitamin D2 (ergocalciferol) are utilized with equal biological efficiency by poultry.",
        "a": False,
        "e": "False. Birds utilize Vitamin D2 only about 1/10th as efficiently as Vitamin D3; poultry feeds must always be supplemented with Vitamin D3.",
        "topicId": "u1-t11",
        "diff": 2,
        "subSection": "u1-s3"
    },
    {
        "q": "Grass tetany is characterized by elevated concentrations of serum magnesium above 3.0 mg/dL.",
        "a": False,
        "e": "False. Grass tetany is hypomagnesemic tetany where plasma Mg drops precipitously below 1.0 mg/dL (normal is 1.8-2.5 mg/dL).",
        "topicId": "u1-t09",
        "diff": 1,
        "subSection": "u1-s3"
    },
    {
        "q": "Cobalt is an essential trace mineral for ruminants solely because it is required by ruminal microbes for vitamin B12 synthesis.",
        "a": True,
        "e": "True. The only known physiological function of cobalt in animal tissues is as an integral part of the cyanocobalamin (Vitamin B12) molecule.",
        "topicId": "u1-t10",
        "diff": 1,
        "subSection": "u1-s3"
    },
    {
        "q": "Selenium and Vitamin E function synergistically in biological systems to protect cellular membranes from oxidative damage.",
        "a": True,
        "e": "True. Vitamin E acts as a chain-breaking antioxidant within lipid membranes, while selenium-dependent glutathione peroxidase destroys peroxides in the cytosol.",
        "topicId": "u1-t10",
        "diff": 1,
        "subSection": "u1-s3"
    },
    {
        "q": "Guinea pigs can synthesize their own Vitamin C and never require dietary supplementation of ascorbic acid.",
        "a": False,
        "e": "False. Guinea pigs lack the enzyme L-gulonolactone oxidase and develop fatal scurvy unless provided with dietary Vitamin C.",
        "topicId": "u1-t12",
        "diff": 1,
        "subSection": "u1-s3"
    },
    {
        "q": "Zinc deficiency in swine produces a dermatitis condition known as parakeratosis.",
        "a": True,
        "e": "True. Parakeratosis is characterized by hyperkeratinization and crusting of the skin of the legs, belly, and ears in zinc-deficient pigs.",
        "topicId": "u1-t10",
        "diff": 1,
        "subSection": "u1-s3"
    },
    {
        "q": "Thiamine deficiency in ruminants can be provoked by feeding high levels of readily fermentable carbohydrates or high-sulfur diets.",
        "a": True,
        "e": "True. Rapid grain engorgement proliferates bacterial thiaminase I producing polioencephalomalacia (cerebrocortical necrosis).",
        "topicId": "u1-t12",
        "diff": 2,
        "subSection": "u1-s3"
    },
    {
        "q": "Avidin, a glycoprotein found in raw egg whites, binds dietary biotin and prevents its intestinal absorption.",
        "a": True,
        "e": "True. Avidin forms an irreversible stoichiometric non-covalent complex with biotin, causing 'egg-white injury' (biotin deficiency) if fed raw.",
        "topicId": "u1-t12",
        "diff": 2,
        "subSection": "u1-s3"
    },
    {
        "q": "Copper deficiency in sheep causes steely or stringy wool due to failure of keratin disulfide cross-linking.",
        "a": True,
        "e": "True. Copper is required for thiol oxidase, which converts cysteine sulfhydryl groups into cystine disulfide bridges that create the wool crimp.",
        "topicId": "u1-t10",
        "diff": 2,
        "subSection": "u1-s3"
    },

    # --- u1-s4: Bioenergetics & Energy Evaluation (7 TF) ---
    {
        "q": "The Gross Energy (heat of combustion) of carbohydrates, proteins, and fats averages approximately 4.15, 5.65, and 9.45 kcal/g, respectively.",
        "a": True,
        "e": "True. Fats have the highest gross energy because of their lower oxygen content and higher state of chemical reduction.",
        "topicId": "u1-t14",
        "diff": 1,
        "subSection": "u1-s4"
    },
    {
        "q": "Digestible Energy (DE) accounts for gaseous losses of energy as methane in ruminants.",
        "a": False,
        "e": "False. DE = Gross Energy - Fecal Energy only. Methane and urine energy losses are deducted when moving from DE to Metabolizable Energy (ME).",
        "topicId": "u1-t14",
        "diff": 1,
        "subSection": "u1-s4"
    },
    {
        "q": "Net Energy is the only energy evaluation measure that completely accounts for the Heat Increment of feeding.",
        "a": True,
        "e": "True. NE = ME - Heat Increment (HI); it represents the actual energy available for maintenance and tissue or milk production.",
        "topicId": "u1-t14",
        "diff": 1,
        "subSection": "u1-s4"
    },
    {
        "q": "The Respiratory Quotient (RQ) for the oxidation of pure protein is 1.00.",
        "a": False,
        "e": "False. The RQ of protein oxidation is approximately 0.81-0.82; an RQ of 1.00 corresponds strictly to carbohydrate oxidation.",
        "topicId": "u1-t15",
        "diff": 2,
        "subSection": "u1-s4"
    },
    {
        "q": "In indirect calorimetry, heat production can be calculated from measurements of O2 consumed and CO2 produced using Brouwer's equation.",
        "a": True,
        "e": "True. Brouwer's formula: Heat (kJ) = 16.18 O2 + 5.02 CO2 - 2.17 CH4 - 5.99 N (where gases are in liters and N in grams).",
        "topicId": "u1-t15",
        "diff": 2,
        "subSection": "u1-s4"
    },
    {
        "q": "Total Digestible Nutrients (TDN) overestimates the productive energy value of roughages relative to concentrates in ruminants.",
        "a": True,
        "e": "True. TDN does not deduct the substantial Heat Increment of fermentation, which is much higher for fibrous roughages than for grains.",
        "topicId": "u1-t14",
        "diff": 3,
        "subSection": "u1-s4"
    },
    {
        "q": "A wide nutritive ratio (e.g. 1 : 10) is recommended for fast-growing broiler chicks.",
        "a": False,
        "e": "False. Fast-growing animals require high-protein, narrow nutritive ratios (1:3 to 1:4); wide ratios (>1:8) are suitable only for idle adult maintenance.",
        "topicId": "u1-t17",
        "diff": 2,
        "subSection": "u1-s4"
    },

    # --- u1-s5: Feeds, Conservation & Technology (8 TF) ---
    {
        "q": "Straws and stovers are categorized as dry roughages containing more than 18% crude fiber.",
        "a": True,
        "e": "True. Crop residues like wheat straw, paddy straw, and maize stover contain 30-40% crude fiber and are classical dry roughages.",
        "topicId": "u1-t13",
        "diff": 1,
        "subSection": "u1-s5"
    },
    {
        "q": "Urea treatment of straw increases its crude protein equivalent and improves its voluntary dry matter intake in cattle.",
        "a": True,
        "e": "True. Urea ammoniation roughly doubles crude protein equivalent (from ~3.5% to 7-8%) and increases DMI by 15-25% by loosening the lignocellulose matrix.",
        "topicId": "u1-t20",
        "diff": 1,
        "subSection": "u1-s5"
    },
    {
        "q": "Good quality silage should contain high concentrations of butyric acid and ammoniacal nitrogen.",
        "a": False,
        "e": "False. High butyric acid (>0.5%) and high ammonia (>10-15% of total N) indicate clostridial spoilage; quality silage is dominated by lactic acid.",
        "topicId": "u1-t21",
        "diff": 2,
        "subSection": "u1-s5"
    },
    {
        "q": "The lethal action of Hydrocyanic Acid (HCN) stems from its inhibition of the mitochondrial enzyme cytochrome c oxidase.",
        "a": True,
        "e": "True. Cyanide binds the trivalent iron (Fe3+) in cytochrome oxidase, halting cellular electron transport and causing acute histotoxic anoxia.",
        "topicId": "u1-t23",
        "diff": 2,
        "subSection": "u1-s5"
    },
    {
        "q": "Free gossypol present in cottonseed cake is harmless to monogastric animals like pigs and poultry.",
        "a": False,
        "e": "False. Free gossypol is toxic to swine and poultry, causing cardiac irregularities, liver necrosis, and olive-green yolk discoloration in eggs.",
        "topicId": "u1-t23",
        "diff": 2,
        "subSection": "u1-s5"
    },
    {
        "q": "Ionophore feed additives like monensin act by selectively suppressing Gram-positive ruminal bacteria, shifting fermentation toward propionic acid.",
        "a": True,
        "e": "True. By inhibiting Gram-positive hydrogen and formate producers, monensin decreases methane emissions and boosts glucogenic propionate synthesis.",
        "topicId": "u1-t25",
        "diff": 2,
        "subSection": "u1-s5"
    },
    {
        "q": "Acid Insoluble Ash (AIA) determination is an official AOAC method used to detect contamination of feeds with sand and soil.",
        "a": True,
        "e": "True. The silica and quartz in soil/sand are insoluble in boiling hydrochloric acid, isolating extraneous mineral contamination.",
        "topicId": "u1-t24",
        "diff": 1,
        "subSection": "u1-s5"
    },
    {
        "q": "Haylage is forage wilted to 45-55% moisture and preserved by anaerobic fermentation in sealed silos.",
        "a": True,
        "e": "True. Haylage (medium-moisture silage) relies on anaerobic storage of wilted forage, avoiding field-curing losses while preventing clostridial wet spoilage.",
        "topicId": "u1-t21",
        "diff": 2,
        "subSection": "u1-s5"
    }
]

fib = [
    # --- u1-s1: Water, Carbohydrates & Lipids (11 FIB) ---
    {
        "q": "The French scientist regarded as the Father of Nutrition who proved that respiration is a combustion process is ____.",
        "a": ["antoine lavoisier", "lavoisier"],
        "a_display": "Antoine Lavoisier",
        "e": "Antoine Lavoisier laid the quantitative foundation of animal bioenergetics with his ice calorimeter experiments.",
        "topicId": "u1-t01",
        "diff": 1,
        "subSection": "u1-s1"
    },
    {
        "q": "The primary volatile fatty acid that serves as the major glucogenic precursor in the ruminant liver is ____.",
        "a": ["propionate", "propionic acid"],
        "a_display": "Propionate",
        "e": "Propionate enters the TCA cycle via succinyl-CoA and is converted to glucose via phosphoenolpyruvate carboxykinase.",
        "topicId": "u1-t05",
        "diff": 1,
        "subSection": "u1-s1"
    },
    {
        "q": "The ruminal volatile fatty acid that provides the primary carbon source for de novo milk fat synthesis in dairy cows is ____.",
        "a": ["acetate", "acetic acid"],
        "a_display": "Acetate",
        "e": "Acetate is activated to acetyl-CoA and supplies malonyl-CoA for fatty acid synthesis in the bovine mammary gland.",
        "topicId": "u1-t05",
        "diff": 1,
        "subSection": "u1-s1"
    },
    {
        "q": "The specific isomer of conjugated linoleic acid responsible for inducing milk fat depression in dairy cows is ____.",
        "a": ["trans-10, cis-12 cla", "trans-10 cis-12 cla", "trans 10 cis 12 cla"],
        "a_display": "trans-10, cis-12 CLA",
        "e": "trans-10, cis-12 CLA specifically suppresses mRNA expression of SREBP-1c and mammary lipogenic enzymes.",
        "topicId": "u1-t07",
        "diff": 3,
        "subSection": "u1-s1"
    },
    {
        "q": "The complete oxidation of 100 grams of dietary fat yields approximately ____ grams of metabolic water.",
        "a": ["107", "107.1", "108"],
        "a_display": "107.1",
        "e": "Because of its high hydrogen content, fat produces 107.1 g of water per 100 g oxidized.",
        "topicId": "u1-t08",
        "diff": 2,
        "subSection": "u1-s1"
    },
    {
        "q": "The main storage polysaccharide found in mammalian liver and muscle is ____.",
        "a": ["glycogen"],
        "a_display": "Glycogen",
        "e": "Glycogen serves as the primary intracellular carbohydrate reserve in animal tissues.",
        "topicId": "u1-t05",
        "diff": 1,
        "subSection": "u1-s1"
    },
    {
        "q": "The structural complex phenolic polymer that binds to hemicellulose and makes plant cell walls indigestible is ____.",
        "a": ["lignin"],
        "a_display": "Lignin",
        "e": "Lignin forms cross-linking diferulate esters with hemicellulose, posing the main barrier to microbial forage degradation.",
        "topicId": "u1-t05",
        "diff": 1,
        "subSection": "u1-s1"
    },
    {
        "q": "The abomasal milk-clotting enzyme secreted by neonatal calves that cleaves kappa-casein is ____.",
        "a": ["chymosin", "rennin"],
        "a_display": "Chymosin (Rennin)",
        "e": "Chymosin destabilizes the casein micelle to form an insoluble clot, ensuring efficient gastric digestion in calves.",
        "topicId": "u1-t06",
        "diff": 2,
        "subSection": "u1-s1"
    },
    {
        "q": "In the detergent system of feed analysis, NDF stands for ____.",
        "a": ["neutral detergent fibre", "neutral detergent fiber"],
        "a_display": "Neutral Detergent Fibre",
        "e": "NDF recovers total plant cell wall components (cellulose, hemicellulose, and lignin).",
        "topicId": "u1-t05",
        "diff": 1,
        "subSection": "u1-s1"
    },
    {
        "q": "The normal water content of adult fat-free empty body tissue in mammals is approximately ____ percent.",
        "a": ["73", "72-74", "72 to 74", "74"],
        "a_display": "73%",
        "e": "On a fat-free basis, adult mammalian body composition is remarkably stable at roughly 73% water.",
        "topicId": "u1-t03",
        "diff": 2,
        "subSection": "u1-s1"
    },
    {
        "q": "The ruminal VFA that serves as the most potent chemical stimulant for the growth of ruminal papillae in young calves is ____.",
        "a": ["butyrate", "butyric acid"],
        "a_display": "Butyrate",
        "e": "Butyrate oxidation by the ruminal mucosa stimulates mitosis and vascularization of the ruminal papillae.",
        "topicId": "u1-t05",
        "diff": 2,
        "subSection": "u1-s1"
    },

    # --- u1-s2: Protein & Amino Acid Nutrition (9 FIB) ---
    {
        "q": "The standard factor used to convert Kjeldahl percent Nitrogen into Crude Protein for general feeds is ____.",
        "a": ["6.25"],
        "a_display": "6.25",
        "e": "Because typical mixed plant and animal proteins contain 16% nitrogen, 100 / 16 = 6.25.",
        "topicId": "u1-t06",
        "diff": 1,
        "subSection": "u1-s2"
    },
    {
        "q": "The first-limiting amino acid in maize-soybean meal based commercial poultry diets is ____.",
        "a": ["methionine", "dl-methionine"],
        "a_display": "Methionine",
        "e": "Soybean meal is naturally deficient in sulfur amino acids, making methionine first limiting.",
        "topicId": "u1-t06",
        "diff": 1,
        "subSection": "u1-s2"
    },
    {
        "q": "The first-limiting amino acid in cereal grain-based diets for growing pigs is ____.",
        "a": ["lysine", "l-lysine"],
        "a_display": "Lysine",
        "e": "Cereal grains (maize, sorghum, barley) are low in lysine, making it the first-limiting amino acid for swine.",
        "topicId": "u1-t06",
        "diff": 1,
        "subSection": "u1-s2"
    },
    {
        "q": "The crude protein equivalent of feed-grade urea containing 46% nitrogen is ____ percent.",
        "a": ["287.5", "287.5%"],
        "a_display": "287.5%",
        "e": "46% N multiplied by 6.25 equals 287.5% crude protein equivalent.",
        "topicId": "u1-t16",
        "diff": 1,
        "subSection": "u1-s2"
    },
    {
        "q": "The non-protein sulfonic amino acid that is strictly essential in the diet of domestic cats is ____.",
        "a": ["taurine"],
        "a_display": "Taurine",
        "e": "Cats cannot synthesize sufficient taurine and suffer from cardiomyopathy and retinal degeneration if it is omitted.",
        "topicId": "u1-t06",
        "diff": 1,
        "subSection": "u1-s2"
    },
    {
        "q": "The percentage of absorbed nitrogen that is retained in the animal body is defined as the ____ of the protein.",
        "a": ["biological value", "bv"],
        "a_display": "Biological Value (BV)",
        "e": "Biological Value = [N retained / N absorbed] x 100 according to Thomas-Mitchell balance methods.",
        "topicId": "u1-t16",
        "diff": 1,
        "subSection": "u1-s2"
    },
    {
        "q": "In ruminants, dietary true protein that escapes ruminal degradation to reach the abomasum is abbreviated as ____.",
        "a": ["rup", "bypass protein"],
        "a_display": "RUP (Rumen Undegradable Protein)",
        "e": "RUP represents undegraded feed protein escaping rumen microbial proteolysis.",
        "topicId": "u1-t06",
        "diff": 1,
        "subSection": "u1-s2"
    },
    {
        "q": "To protect oilseed meal protein from ruminal breakdown, formaldehyde is applied at the rate of ____ grams per 100 grams of crude protein.",
        "a": ["1.0 to 1.2", "1.0-1.2", "1-1.2", "1", "1.2"],
        "a_display": "1.0 to 1.2 g",
        "e": "Application of 1.0 to 1.2 g formaldehyde per 100 g CP yields optimal bypass protection without reducing intestinal digestibility.",
        "topicId": "u1-t06",
        "diff": 2,
        "subSection": "u1-s2"
    },
    {
        "q": "The optimal Nitrogen-to-Sulfur ratio recommended in ruminant rations containing urea is ____ to 1.",
        "a": ["10", "10:1"],
        "a_display": "10 : 1",
        "e": "An N:S ratio of 10:1 provides adequate sulfur for ruminal synthesis of methionine and cysteine.",
        "topicId": "u1-t06",
        "diff": 2,
        "subSection": "u1-s2"
    },

    # --- u1-s3: Minerals & Vitamins (10 FIB) ---
    {
        "q": "Nutritional secondary hyperparathyroidism in horses caused by excessive dietary phosphorus is commonly termed ____ disease.",
        "a": ["bran", "bran disease", "big head", "big head disease"],
        "a_display": "Bran Disease (Big Head)",
        "e": "High-phosphorus diets (such as wheat bran) induce chronic parathyroid hormone secretion and osteodystrophia fibrosa.",
        "topicId": "u1-t09",
        "diff": 2,
        "subSection": "u1-s3"
    },
    {
        "q": "The active hormonal form of Vitamin D produced by 1-alpha-hydroxylase in the kidney is ____.",
        "a": ["1,25-dihydroxycholecalciferol", "calcitriol", "1,25-(oh)2-d3"],
        "a_display": "1,25-dihydroxycholecalciferol (Calcitriol)",
        "e": "1,25-(OH)2-D3 stimulates intestinal synthesis of calbindin, driving active calcium absorption.",
        "topicId": "u1-t11",
        "diff": 2,
        "subSection": "u1-s3"
    },
    {
        "q": "The trace mineral that forms an integral part of the cytosolic antioxidant enzyme glutathione peroxidase is ____.",
        "a": ["selenium", "se"],
        "a_display": "Selenium",
        "e": "Glutathione peroxidase incorporates selenocysteine to scavenge harmful hydrogen and lipid peroxides.",
        "topicId": "u1-t10",
        "diff": 1,
        "subSection": "u1-s3"
    },
    {
        "q": "Neonatal piglets are routinely administered an intramuscular injection of 150-200 mg of iron in the form of iron ____ at 3 days of age.",
        "a": ["dextran", "iron dextran"],
        "a_display": "Iron Dextran",
        "e": "Injectable iron dextran prevents microcytic hypochromic nutritional anemia (thumps) in rapidly growing piglets.",
        "topicId": "u1-t10",
        "diff": 1,
        "subSection": "u1-s3"
    },
    {
        "q": "The trace element required by ruminal microorganisms for the synthesis of Vitamin B12 is ____.",
        "a": ["cobalt", "co"],
        "a_display": "Cobalt",
        "e": "Cobalt is the central coordinating metal ion in the corrin ring of cobalamin.",
        "topicId": "u1-t10",
        "diff": 1,
        "subSection": "u1-s3"
    },
    {
        "q": "The characteristic skin disorder caused by zinc deficiency in swine is called ____.",
        "a": ["parakeratosis"],
        "a_display": "Parakeratosis",
        "e": "Zinc deficiency impairs epidermal cell maturation, resulting in hard crusty lesions over the skin.",
        "topicId": "u1-t10",
        "diff": 1,
        "subSection": "u1-s3"
    },
    {
        "q": "Curled toe paralysis in young growing poultry chicks is caused by a deficiency of Vitamin ____.",
        "a": ["b2", "riboflavin", "vitamin b2"],
        "a_display": "Vitamin B2 (Riboflavin)",
        "e": "Riboflavin deficiency produces sciatic nerve sheath degeneration leading to curled-toe paralysis.",
        "topicId": "u1-t12",
        "diff": 1,
        "subSection": "u1-s3"
    },
    {
        "q": "The hemorrhagic condition known as Sweet Clover Poisoning is caused by the anti-vitamin substance ____ present in spoiled Melilotus hay.",
        "a": ["dicoumarol", "dicumarol"],
        "a_display": "Dicoumarol",
        "e": "Dicoumarol acts as a competitive antagonist of Vitamin K, preventing prothrombin synthesis.",
        "topicId": "u1-t11",
        "diff": 2,
        "subSection": "u1-s3"
    },
    {
        "q": "Perosis or slipped tendon in growing broiler chicks is primarily caused by a deficiency of the trace mineral ____.",
        "a": ["manganese", "mn"],
        "a_display": "Manganese",
        "e": "Manganese is essential for chondroitin sulfate synthesis in the epiphyseal growth plates.",
        "topicId": "u1-t10",
        "diff": 2,
        "subSection": "u1-s3"
    },
    {
        "q": "Cerebrocortical necrosis (CCN) in ruminants is caused by an induced deficiency of Vitamin ____.",
        "a": ["b1", "thiamine", "vitamin b1"],
        "a_display": "Vitamin B1 (Thiamine)",
        "e": "Bacterial thiaminases destroy thiamine, starving brain cells of ATP and causing cerebral cortical necrosis.",
        "topicId": "u1-t12",
        "diff": 2,
        "subSection": "u1-s3"
    },

    # --- u1-s4: Bioenergetics & Energy Evaluation (7 FIB) ---
    {
        "q": "In the formula for Total Digestible Nutrients, Digestible Ether Extract is multiplied by the factor ____.",
        "a": ["2.25"],
        "a_display": "2.25",
        "e": "The energy value of fat is 2.25 times that of carbohydrates (9.45 / 4.15 kcal/g).",
        "topicId": "u1-t14",
        "diff": 1,
        "subSection": "u1-s4"
    },
    {
        "q": "Metabolizable Energy equals Digestible Energy minus energy lost in urine and ____.",
        "a": ["methane", "combustible gases", "gaseous products", "gas"],
        "a_display": "Methane (Gaseous Energy)",
        "e": "In ruminants, enteric methane accounts for 6-10% of gross energy intake.",
        "topicId": "u1-t14",
        "diff": 1,
        "subSection": "u1-s4"
    },
    {
        "q": "Net Energy is equal to Metabolizable Energy minus ____.",
        "a": ["heat increment", "hi"],
        "a_display": "Heat Increment",
        "e": "NE = ME - Heat Increment (energy dissipated as heat during digestion and nutrient metabolism).",
        "topicId": "u1-t14",
        "diff": 1,
        "subSection": "u1-s4"
    },
    {
        "q": "The Respiratory Quotient (RQ) during the complete metabolic oxidation of carbohydrates is exactly ____.",
        "a": ["1", "1.0", "1.00"],
        "a_display": "1.00",
        "e": "Combustion of glucose (C6H12O6 + 6 O2 -> 6 CO2 + 6 H2O) yields equal volumes of CO2 produced and O2 consumed.",
        "topicId": "u1-t15",
        "diff": 1,
        "subSection": "u1-s4"
    },
    {
        "q": "The German nutrition scientist who formulated the Starch Equivalent system of net energy evaluation was Oskar ____.",
        "a": ["kellner"],
        "a_display": "Kellner",
        "e": "Oskar Kellner defined 1 kg Starch Equivalent as producing 248 g of body fat in adult bullocks.",
        "topicId": "u1-t14",
        "diff": 2,
        "subSection": "u1-s4"
    },
    {
        "q": "The ratio of non-protein digestible energy nutrients to digestible crude protein is termed the ____ Ratio.",
        "a": ["nutritive", "nutritive ratio", "nr"],
        "a_display": "Nutritive Ratio",
        "e": "Nutritive Ratio = (TDN - DCP) / DCP.",
        "topicId": "u1-t17",
        "diff": 1,
        "subSection": "u1-s4"
    },
    {
        "q": "The instrument utilized to measure the gross energy or heat of combustion of feed samples is the oxygen ____ calorimeter.",
        "a": ["bomb", "bomb calorimeter"],
        "a_display": "Bomb Calorimeter",
        "e": "An adiabatic oxygen bomb calorimeter burns samples under 25-30 atm oxygen pressure.",
        "topicId": "u1-t14",
        "diff": 1,
        "subSection": "u1-s4"
    },

    # --- u1-s5: Feeds, Conservation & Technology (8 FIB) ---
    {
        "q": "According to feed classification rules, roughages must contain more than ____ percent crude fiber on a dry matter basis.",
        "a": ["18", "18%"],
        "a_display": "18%",
        "e": "Feeds with >18% crude fiber and <60% TDN are designated as roughages.",
        "topicId": "u1-t13",
        "diff": 1,
        "subSection": "u1-s5"
    },
    {
        "q": "In the standard urea-treatment procedure for 100 kg dry straw, ____ kg of fertilizer-grade urea is dissolved in 40 liters of water.",
        "a": ["4", "4 kg"],
        "a_display": "4 kg",
        "e": "A 4% urea application rate (4 kg urea / 100 kg straw) provides optimal ammoniation and CP elevation.",
        "topicId": "u1-t20",
        "diff": 1,
        "subSection": "u1-s5"
    },
    {
        "q": "The primary desirable organic acid produced during anaerobic fermentation in top-grade silage is ____ acid.",
        "a": ["lactic", "lactic acid"],
        "a_display": "Lactic Acid",
        "e": "Lactic acid produced by homofermentative lactobacilli rapidly drives pH down to 3.8-4.2.",
        "topicId": "u1-t21",
        "diff": 1,
        "subSection": "u1-s5"
    },
    {
        "q": "To prevent mold growth and spontaneous combustion, hay should be dried to a moisture content below ____ percent before storage.",
        "a": ["15", "18", "15-18", "15 to 18"],
        "a_display": "15-18%",
        "e": "Hay with <15-18% moisture remains safe from microbial heating and spoilage.",
        "topicId": "u1-t22",
        "diff": 1,
        "subSection": "u1-s5"
    },
    {
        "q": "The cyanogenic glycoside found in immature sorghum which releases lethal hydrocyanic acid is ____.",
        "a": ["dhurrin"],
        "a_display": "Dhurrin",
        "e": "Dhurrin is enzymatically broken down to free prussic acid (HCN) upon mastication or cell damage.",
        "topicId": "u1-t23",
        "diff": 2,
        "subSection": "u1-s5"
    },
    {
        "q": "The toxic non-protein amino acid present in the forage legume Subabul (Leucaena leucocephala) is ____.",
        "a": ["mimosine"],
        "a_display": "Mimosine",
        "e": "Mimosine causes hair loss, excessive salivation, and thyroid enlargement unless degraded by Synergistes jonesii.",
        "topicId": "u1-t23",
        "diff": 1,
        "subSection": "u1-s5"
    },
    {
        "q": "The toxic polyphenolic yellow pigment found in raw cottonseed cake is ____.",
        "a": ["gossypol", "free gossypol"],
        "a_display": "Gossypol",
        "e": "Gossypol binds the epsilon-amino group of lysine and induces cardiac toxicity in non-ruminants.",
        "topicId": "u1-t23",
        "diff": 1,
        "subSection": "u1-s5"
    },
    {
        "q": "Monensin is a widely utilized feed additive belonging to the class of polyether ____.",
        "a": ["ionophores", "ionophore"],
        "a_display": "Ionophores",
        "e": "Ionophores alter microbial cell membrane permeability, favoring propionate production and depressing bloat and coccidiosis.",
        "topicId": "u1-t25",
        "diff": 2,
        "subSection": "u1-s5"
    }
]

def get_data():
    return {
        "mcq": mcq,
        "tf": tf,
        "fib": fib
    }
