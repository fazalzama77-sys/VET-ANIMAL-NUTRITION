# -*- coding: utf-8 -*-
"""
Unit 4 Question Bank: Applied Non-Ruminant Nutrition
Strict 2:1:1 ratio: 90 MCQs, 45 True/False, 45 Fill in the Blanks (Total = 180)
Sub-sections:
  u4-s1: Poultry Nutrition (Broilers & Layers) (36 MCQ, 18 TF, 18 FIB = 72)
  u4-s2: Swine & Equine Nutrition (30 MCQ, 15 TF, 15 FIB = 60)
  u4-s3: Companion, Laboratory & Zoo Animal Nutrition (24 MCQ, 12 TF, 12 FIB = 48)
"""

mcq = [
    # --- u4-s1: Poultry Nutrition (Broilers & Layers) (36 MCQs) ---
    {
        "q": "According to BIS (IS:1374) specifications, what are the Crude Protein and Metabolizable Energy requirements for Broiler Pre-starter diet (0 to 7 days)?",
        "o": ["23% Crude Protein and 3000 kcal ME/kg", "18% Crude Protein and 2600 kcal ME/kg", "28% Crude Protein and 3400 kcal ME/kg", "16% Crude Protein and 2800 kcal ME/kg"],
        "a": 0,
        "e": "BIS broiler specifications prescribe 23% CP and 3000 kcal ME/kg for the pre-starter phase (0-7 days) to support early organogenesis and skeletal growth.",
        "topicId": "u4-t08",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "What is the recommended Crude Protein and Metabolizable Energy specification for Broiler Starter diet (8 to 21 days)?",
        "o": ["21.5 to 22.0% CP and 3050 to 3100 kcal ME/kg", "16.0% CP and 2700 kcal ME/kg", "25.0% CP and 3300 kcal ME/kg", "19.0% CP and 2900 kcal ME/kg"],
        "a": 0,
        "e": "Broiler starter feed contains 21.5-22% CP and ~3100 kcal ME/kg to sustain rapid muscle protein deposition.",
        "topicId": "u4-t08",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "What is the recommended Crude Protein and Metabolizable Energy level for Broiler Finisher diet (22 to 42 days)?",
        "o": ["19.5 to 20.0% CP and 3150 to 3200 kcal ME/kg", "24.0% CP and 2800 kcal ME/kg", "14.0% CP and 2600 kcal ME/kg", "22.0% CP and 3000 kcal ME/kg"],
        "a": 0,
        "e": "Broiler finisher feeds reduce CP to 19.5-20.0% while boosting ME to 3150-3200 kcal/kg to support final weight gain and fat finish.",
        "topicId": "u4-t08",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "What is the optimal dietary Calcium requirement for commercial White Leghorn laying hens during active egg production (Phase I Layer)?",
        "o": ["3.5 to 4.5% of the diet", "1.0% of the diet", "8.0 to 10.0% of the diet", "0.5% of the diet"],
        "a": 0,
        "e": "Each eggshell contains ~2.0-2.2 g of calcium; with ~50-60% retention efficiency, a layer consuming 100-110 g feed requires 3.5 to 4.25 g Ca daily (3.5-4.5% of diet).",
        "topicId": "u4-t09",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "What proportion of the dietary calcium for laying hens should be provided as coarse particles (2 to 4 mm limestone or oyster shell) fed in the late afternoon?",
        "o": ["50 to 70% of total dietary calcium", "0% (all fine powder)", "100% fine powder", "5% only"],
        "a": 0,
        "e": "Coarse calcium particles dissolve slowly in the gizzard overnight, providing continuous calcium flow during nighttime eggshell calcification.",
        "topicId": "u4-t09",
        "diff": 2,
        "subSection": "u4-s1"
    },
    {
        "q": "What is the recommended dietary Crude Protein level for Layer Chick (0 to 8 weeks) and Layer Grower (9 to 18 weeks) phases?",
        "o": ["20% CP for chick, and 15 to 16% CP for grower", "24% CP for chick, and 22% CP for grower", "16% CP for chick, and 20% CP for grower", "14% CP for chick, and 12% CP for grower"],
        "a": 0,
        "e": "Layer pullets receive 20% CP in chick stage and 15-16% CP in grower stage, avoiding excessive weight gain that causes premature sexual maturity.",
        "topicId": "u4-t09",
        "diff": 2,
        "subSection": "u4-s1"
    },
    {
        "q": "Why is qualitative or quantitative feed restriction practiced during the grower phase (9 to 18 weeks) of egg-type pullets?",
        "o": ["To prevent obesity, ensure uniform target body weight, and delay premature onset of lay to avoid small egg size and prolapse", "To starve the birds to save feed cost", "To prevent feather growth", "To induce molting in pullets"],
        "a": 0,
        "e": "Controlled feeding ensures pullets reach the desired frame size and body weight at 18-20 weeks, avoiding early lay of unmarketable pee-wee eggs and vent prolapse.",
        "topicId": "u4-t09",
        "diff": 2,
        "subSection": "u4-s1"
    },
    {
        "q": "Which anatomical region of the avian gastrointestinal tract is responsible for mechanical grinding of coarse seeds and grains using ingested grit?",
        "o": ["Gizzard (Ventriculus)", "Proventriculus (True stomach)", "Crop (Ingluvies)", "Ceca"],
        "a": 0,
        "e": "The gizzard possesses thick, muscular walls lined with a tough koilin layer that grinds feed particles in the presence of insoluble grit.",
        "topicId": "u4-t01",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "What is the secretory function of the avian proventriculus?",
        "o": ["Secretion of gastric juice containing Hydrochloric Acid (HCl) and Pepsinogen", "Mechanical mastication", "Absorption of volatile fatty acids", "Storage and moistening of feed exclusively"],
        "a": 0,
        "e": "The proventriculus is the glandular stomach of birds, secreting HCl and pepsinogen before feed passes into the muscular ventriculus.",
        "topicId": "u4-t01",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Why is dietary nitrogen in avian species excreted as Uric Acid rather than urea?",
        "o": ["Uric acid is nearly insoluble in water, allowing nitrogen excretion with minimal water loss (adaptation to flight and cleidoic eggs)", "Birds lack a liver", "Uric acid is converted into egg white", "Urea is explosive in feathers"],
        "a": 0,
        "e": "Uric acid contains 4 nitrogens per mole and precipitates out as a semi-solid paste, conserving water and allowing embryo development inside non-cleidoic eggs.",
        "topicId": "u4-t01",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Which essential amino acid is first-limiting in standard maize-soybean meal commercial poultry diets?",
        "o": ["Methionine", "Lysine", "Threonine", "Tryptophan"],
        "a": 0,
        "e": "Soybean meal is rich in lysine but naturally deficient in sulfur amino acids; hence, DL-methionine is universally the first limiting amino acid.",
        "topicId": "u4-t08",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Which essential amino acid is second-limiting in typical broiler diets based on maize and soybean meal?",
        "o": ["Lysine or Threonine", "Valine", "Histidine", "Arginine"],
        "a": 0,
        "e": "After methionine, lysine is the second limiting amino acid, followed closely by L-threonine in broiler rations.",
        "topicId": "u4-t08",
        "diff": 2,
        "subSection": "u4-s1"
    },
    {
        "q": "Why do chickens have an exceptionally high dietary requirement for the basic amino acid Arginine?",
        "o": ["Chickens completely lack the urea cycle and cannot synthesize ornithine or citrulline de novo", "Chickens convert arginine into feathers", "Arginine is required to synthesize uric acid", "Chickens store arginine in the crop"],
        "a": 0,
        "e": "Because birds excrete uric acid instead of urea, they lack functional carbamoyl phosphate synthetase-I and ornithine transcarbamylase, making arginine an absolute essential.",
        "topicId": "u4-t01",
        "diff": 2,
        "subSection": "u4-s1"
    },
    {
        "q": "What is the typical modern Feed Conversion Ratio (FCR) expected in commercial broiler chickens reared to 42 days of age?",
        "o": ["1.45 to 1.65 kg feed per kg live weight", "3.5 to 4.0 kg feed per kg live weight", "0.8 kg feed per kg live weight", "5.0 kg feed per kg live weight"],
        "a": 0,
        "e": "Modern commercial broiler strains (Cobb 500, Ross 308) achieve remarkable FCRs of 1.45-1.65 kg feed per kg body weight at 2.0-2.5 kg live weight.",
        "topicId": "u4-t08",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "What is 'Cage Layer Fatigue' in high-producing commercial laying hens?",
        "o": ["Acute osteoporosis and flaccid paralysis caused by excessive skeletal calcium depletion to maintain eggshell calcification", "Muscular fatigue from flapping wings in cages", "Vitamin C deficiency", "Sleep deprivation in battery cages"],
        "a": 0,
        "e": "Intense egg production drains medullary and cortical bone calcium; severe hypocalcemia and osteoporosis cause sternal recumbency and bone fractures.",
        "topicId": "u4-t09",
        "diff": 2,
        "subSection": "u4-s1"
    },
    {
        "q": "Which synthetic pigment is routinely supplemented in commercial layer feeds to impart the desirable golden-yellow color to egg yolks?",
        "o": ["Carotenoids (Xanthophylls like lutein, zeaxanthin, and canthaxanthin)", "Riboflavin powder", "Curcumin", "Hematoxylin"],
        "a": 0,
        "e": "Yellow and red oxy-carotenoids (xanthophylls) are absorbed and deposited directly into the ovarian follicle lipid droplet to color egg yolks.",
        "topicId": "u4-t09",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Which species of domestic poultry is notoriously the most sensitive to Aflatoxin B1 toxicity, with dietary levels as low as 15 to 20 ppb causing fatal hepatic necrosis?",
        "o": ["Ducklings (Anas platyrhynchos)", "Chickens", "Japanese Quails", "Pigeons"],
        "a": 0,
        "e": "Ducklings possess rapid hepatic bioactivation of aflatoxin B1 into toxic 8,9-epoxide with low glutathione S-transferase conjugation, making them hypersensitive.",
        "topicId": "u4-t11",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "What is the recommended dietary Crude Protein level for starting Turkey poults (0 to 4 weeks)?",
        "o": ["28.0% Crude Protein", "20.0% Crude Protein", "14.0% Crude Protein", "18.0% Crude Protein"],
        "a": 0,
        "e": "Turkey poults have the highest protein requirement among commercial domestic birds, requiring 28% CP and 2800 kcal ME/kg in the starter phase.",
        "topicId": "u4-t11",
        "diff": 2,
        "subSection": "u4-s1"
    },
    {
        "q": "Japanese Quail (Coturnix coturnix japonica) starter diets require what level of Crude Protein?",
        "o": ["24 to 26% Crude Protein", "16% Crude Protein", "12% Crude Protein", "35% Crude Protein"],
        "a": 0,
        "e": "Quail chicks grow rapidly and reach sexual maturity at 6 weeks, requiring 24-26% CP in starter and 20-22% CP in layer diets.",
        "topicId": "u4-t11",
        "diff": 2,
        "subSection": "u4-s1"
    },
    {
        "q": "Which metabolic disease in broiler chickens is caused by rapid growth rate, high metabolic rate, and hypoxia, leading to right ventricular dilation and fluid accumulation in the coelomic cavity?",
        "o": ["Ascites Syndrome (Pulmonary Hypertension Syndrome)", "Crazy Chick Disease", "Curled Toe Paralysis", "Slipped Tendon"],
        "a": 0,
        "e": "Rapid muscle mass development demands high oxygen; inability of the cardiopulmonary system to oxygenate tissues causes pulmonary arterial hypertension, right ventricular failure, and ascites.",
        "topicId": "u4-t17",
        "diff": 2,
        "subSection": "u4-s1"
    },
    {
        "q": "Sudden Death Syndrome (Flip-Over Disease) in fast-growing male broilers is primarily a nutritional-metabolic disorder associated with:",
        "o": ["Acute fatal cardiac ventricular fibrillation triggered by high energy intake and rapid growth", "Severe intestinal coccidiosis", "Esophageal impaction with whole corn", "Vitamin A deficiency"],
        "a": 0,
        "e": "Flip-over disease occurs in healthy, rapidly growing broilers that suddenly flap wings, lose balance, flip on their backs, and die of cardiac ventricular fibrillation.",
        "topicId": "u4-t17",
        "diff": 2,
        "subSection": "u4-s1"
    },
    {
        "q": "What is the non-phytate (available) phosphorus requirement of broiler chickens?",
        "o": ["0.45% in starter and 0.40% in finisher diets", "1.5% throughout", "0.05% throughout", "2.0% throughout"],
        "a": 0,
        "e": "Broilers require approximately 0.45% available phosphorus in starter and 0.40% in finisher diets to ensure normal skeletal ossification.",
        "topicId": "u4-t08",
        "diff": 2,
        "subSection": "u4-s1"
    },
    {
        "q": "Why is supplemental microbial phytase enzyme commonly added to commercial poultry rations containing maize and soybean meal?",
        "o": ["To release phosphorus bound in myo-inositol hexakisphosphate (phytate), reducing mineral dicalcium phosphate addition and environmental pollution", "To digest feather keratin", "To synthesize vitamin D3", "To convert uric acid into glucose"],
        "a": 0,
        "e": "About 60-70% of plant phosphorus is locked in phytate; microbial phytase hydrolyzes phosphate groups, boosting phosphorus bioavailability by 20-30%.",
        "topicId": "u4-t10",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Which anti-nutritional soluble non-starch polysaccharide (NSP) in wheat and barley increases digesta viscosity, causing sticky wet droppings in broilers?",
        "o": ["Arabinoxylans and beta-glucans", "Cellulose", "Starch", "Pectin"],
        "a": 0,
        "e": "Soluble arabinoxylans (in wheat) and beta-glucans (in barley) form viscous gels in the avian gut, slowing nutrient diffusion and creating sticky wet droppings.",
        "topicId": "u4-t10",
        "diff": 2,
        "subSection": "u4-s1"
    },
    {
        "q": "Which exogenous enzyme supplement is added to barley-based poultry diets to hydrolyze viscous non-starch polysaccharides?",
        "o": ["Beta-glucanase and Xylanase", "Pepsin", "Lipase", "Urease"],
        "a": 0,
        "e": "Endo-beta-glucanase and xylanase cleave the backbone of soluble NSPs, reducing intestinal viscosity, improving FCR, and resolving wet litter.",
        "topicId": "u4-t10",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Gout in poultry (visceral and articular gout) is pathologically characterized by the deposition of which chemical crystals in internal organs and joints?",
        "o": ["Monosodium Urate crystals", "Calcium oxalate crystals", "Cholesterol crystals", "Struvite crystals"],
        "a": 0,
        "e": "Impaired renal clearance (from dehydration, excess dietary protein, or nephropathogenic infectious bronchitis) causes hyperuricemia and white urate deposition on visceral serosa.",
        "topicId": "u4-t17",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Which vitamin deficiency causes Crazy Chick Disease (Encephalomalacia), characterized by ataxia, head retraction, and cerebellar hemorrhage?",
        "o": ["Vitamin E (alpha-tocopherol)", "Vitamin A", "Vitamin C", "Vitamin D3"],
        "a": 0,
        "e": "Vitamin E deficiency in the presence of oxidized dietary polyunsaturated fatty acids causes free radical peroxidation of cerebellar cell membranes.",
        "topicId": "u4-t17",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Exudative diathesis in chicks is a subcutaneous generalized edema caused by a combined deficiency of:",
        "o": ["Vitamin E and Selenium", "Vitamin K and Iron", "Vitamin B12 and Cobalt", "Calcium and Vitamin D"],
        "a": 0,
        "e": "Both antioxidant defenses fail: membrane-bound alpha-tocopherol and cytosolic glutathione peroxidase (Se-dependent), leaking plasma proteins subcutaneously.",
        "topicId": "u4-t17",
        "diff": 2,
        "subSection": "u4-s1"
    },
    {
        "q": "Perosis (slipped tendon) in poultry is caused by a dietary deficiency of which trace mineral and water-soluble vitamin?",
        "o": ["Manganese and Choline (or Biotin/Folic acid)", "Iron and Vitamin C", "Copper and Riboflavin", "Zinc and Vitamin B12"],
        "a": 0,
        "e": "Manganese and choline are essential for proteoglycan synthesis and epiphyseal chondrogenesis; deficiency causes flattening of the hock and tendon displacement.",
        "topicId": "u4-t17",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "What is the primary sign of Riboflavin (Vitamin B2) deficiency in young chicks?",
        "o": ["Curled Toe Paralysis", "Goose stepping", "Big head", "Rickets"],
        "a": 0,
        "e": "Myelin sheath degeneration in the sciatic nerve causes chicks to walk on their hocks with their toes curled inward.",
        "topicId": "u4-t17",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Biotin deficiency in chicks produces which pathognomonic diagnostic lesion?",
        "o": ["Severe dermatitis on the bottoms of the feet and corners of the beak, and Fatty Liver and Kidney Syndrome (FLKS)", "Enlarged liver with cirrhosis", "Blindness", "Loss of plumage color"],
        "a": 0,
        "e": "Biotin deficiency causes crusty plantar pododermatitis, perioral crusts, and FLKS due to failure of pyruvate carboxylase and gluconeogenesis.",
        "topicId": "u4-t17",
        "diff": 2,
        "subSection": "u4-s1"
    },
    {
        "q": "A laying hen consuming 100 g feed per day containing 4.0% calcium ingests how much total calcium daily?",
        "o": ["4.0 grams", "0.4 grams", "40.0 grams", "1.0 gram"],
        "a": 0,
        "e": "Total Ca ingested = 100 g x 0.04 = 4.0 g. With ~55% retention, ~2.2 g is deposited in the eggshell.",
        "topicId": "u4-t09",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "What is the maximum safe inclusion level of raw Rice Polish in commercial broiler diets in India without fat rancidity or antinutritional depression?",
        "o": ["10 to 15% (stabilized or de-oiled)", "50%", "80%", "0% (strictly forbidden)"],
        "a": 0,
        "e": "Raw rice polish contains high oil susceptible to hydrolytic lipase rancidity; inclusion is restricted to 10-15%, whereas de-oiled rice bran (DORB) can be higher.",
        "topicId": "u4-t10",
        "diff": 2,
        "subSection": "u4-s1"
    },
    {
        "q": "Why does inclusion of excessive Fish Meal (>8-10%) in poultry diets cause a fishy taint in eggs and broiler meat?",
        "o": ["High concentrations of trimethylamine (TMA) and polyunsaturated fatty acids accumulate in meat lipids and egg yolk", "Fish meal contains urea", "Fish meal is indigestible", "Fish meal destroys liver glycogen"],
        "a": 0,
        "e": "High levels of trimethylamine and fish oil PUFAs deposit in the yolk and adipose tissue, producing objectionable fishy odors and flavors.",
        "topicId": "u4-t10",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "The inclusion of dried Azolla pinnata (an aquatic fern) in backyard poultry rations serves as an economical source of:",
        "o": ["Crude Protein (20-25% CP) and Carotenoid pigments", "Pure starch", "Indigestible silica only", "Saturated fat"],
        "a": 0,
        "e": "Azolla dry matter contains 20-25% crude protein, essential amino acids, and xanthophyll pigments, replacing up to 10-15% of commercial concentrate.",
        "topicId": "u4-t10",
        "diff": 2,
        "subSection": "u4-s1"
    },
    {
        "q": "In commercial layer management, 'Induced Molting' is a nutritional technique used to:",
        "o": ["Rejuvenate the hen's reproductive tract and restore high egg production and shell quality for a second laying cycle", "Fatten the birds for broiler meat", "Eliminate Salmonella infections", "Prevent feather loss"],
        "a": 0,
        "e": "Controlled dietary manipulation (fasting or feeding low sodium/high zinc) induces rapid cessation of lay and feather shedding, followed by a rejuvenated second cycle.",
        "topicId": "u4-t09",
        "diff": 2,
        "subSection": "u4-s1"
    },

    # --- u4-s2: Swine & Equine Nutrition (30 MCQs) ---
    {
        "q": "What is the recommended Crude Protein and Lysine requirement for young nursing Piglets (Creep feed, 5 to 10 kg body weight)?",
        "o": ["20 to 22% Crude Protein and 1.3 to 1.4% Lysine", "14% Crude Protein and 0.6% Lysine", "30% Crude Protein and 2.5% Lysine", "10% Crude Protein and 0.2% Lysine"],
        "a": 0,
        "e": "Creep diets for nursing piglets must be highly concentrated in protein (20-22% CP) with a minimum of 1.3-1.4% digestible lysine to support rapid muscle growth.",
        "topicId": "u4-t04",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "Why must all newborn piglets housed on concrete floors receive an intramuscular injection of 150 to 200 mg Iron Dextran within 3 days of birth?",
        "o": ["Piglets are born with minimal iron stores (~50 mg) and sow milk provides only ~1 mg/day against a requirement of 7 mg/day ('Piglet Anemia / Thumps')", "Iron stimulates early tooth growth", "Iron prevents diarrhea caused by E. coli", "Iron is required for tail docked healing"],
        "a": 0,
        "e": "Without access to soil, suckling piglets exhaust hepatic iron within a week; iron dextran injection prevents microcytic hypochromic anemia and dyspnea (thumps).",
        "topicId": "u4-t04",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "What is the first-limiting amino acid in swine diets based primarily on cereal grains (maize, barley, wheat)?",
        "o": ["L-Lysine", "DL-Methionine", "L-Tryptophan", "L-Valine"],
        "a": 0,
        "e": "Cereals have low lysine concentrations; L-lysine is universally the first limiting amino acid in growing-finishing swine.",
        "topicId": "u4-t04",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "In swine nutrition, the 'Ideal Protein Concept' defines all essential amino acid requirements as a fixed percentage relative to:",
        "o": ["Lysine (set at 100%)", "Methionine (set at 100%)", "Crude Protein (set at 100%)", "Threonine (set at 100%)"],
        "a": 0,
        "e": "Because lysine is first-limiting and used almost exclusively for muscle protein accretion, all other essential amino acids are patterned as a ratio to Lysine = 100.",
        "topicId": "u4-t01",
        "diff": 2,
        "subSection": "u4-s2"
    },
    {
        "q": "What is the Crude Protein requirement for growing pigs (20 to 50 kg) and finishing pigs (50 to 90 kg)?",
        "o": ["16 to 18% CP for growers, and 14 to 15% CP for finishers", "24% CP for growers, and 20% CP for finishers", "12% CP for growers, and 10% CP for finishers", "20% CP for growers, and 22% CP for finishers"],
        "a": 0,
        "e": "As pigs mature, protein accretion slows while fat deposition increases; hence dietary CP decreases from 16-18% in growers to 14-15% in finishers.",
        "topicId": "u4-t04",
        "diff": 2,
        "subSection": "u4-s2"
    },
    {
        "q": "Why is feed intake strictly restricted (1.8 to 2.2 kg/day of a balanced diet) in pregnant gestating sows?",
        "o": ["To prevent excessive maternal fatness, which causes embryonic mortality, farrowing difficulties (dystocia), and low lactation feed intake", "Because sows cannot swallow large meals", "To prevent abortions from stomach rupture", "To keep sow body weight below 50 kg"],
        "a": 0,
        "e": "Over-conditioned sows suffer high embryonic losses, sluggish farrowing, and poor feed intake during lactation; restricted feeding optimizes reproductive performance.",
        "topicId": "u4-t05",
        "diff": 2,
        "subSection": "u4-s2"
    },
    {
        "q": "How should a lactating sow nursing 10 to 12 vigorous piglets be fed?",
        "o": ["Ad libitum (full feeding) with a high-energy, high-protein diet (16-18% CP, >1.0% lysine)", "Restricted to 2 kg per day", "Fed wheat straw and water only", "Fed raw whole cottonseed"],
        "a": 0,
        "e": "A heavy lactating sow produces 8-12 kg milk daily and requires ad libitum feed (approx. 2 kg base + 0.5 kg per nursing piglet = 6-8 kg/day) to prevent severe weight loss.",
        "topicId": "u4-t05",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "In horses, what anatomical compartment serves as the primary site of microbial fermentation of structural fibrous carbohydrates?",
        "o": ["Cecum and Large Colon (Hindgut)", "Reticulorumen", "Stomach", "Small Intestine"],
        "a": 0,
        "e": "The horse is a monogastric hindgut herbivore; microbial fermentation of fiber into volatile fatty acids occurs in the massive cecum (30 L) and large colon (80 L).",
        "topicId": "u4-t06",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "Can the horse efficiently absorb and utilize microbial protein synthesized in its cecum and large colon?",
        "o": ["No, because microbial protein is synthesized distal to the stomach and small intestine and is excreted unabsorbed in feces", "Yes, hindgut microbial protein is absorbed across the rectum", "Yes, horses perform continuous cecotrophy like rabbits", "Yes, microbial amino acids are absorbed directly into the bile duct"],
        "a": 0,
        "e": "Unlike ruminants whose microbes are digested in the abomasum, horses excrete hindgut microbial protein in feces; dietary essential amino acids must be supplied pre-cecally.",
        "topicId": "u4-t06",
        "diff": 2,
        "subSection": "u4-s2"
    },
    {
        "q": "What is the capacity of the adult horse's stomach relative to its total digestive tract volume?",
        "o": ["Very small, representing only 8 to 10% of total tract volume (9 to 15 liters)", "Massive, holding 150 liters like the cow's rumen", "50% of total volume", "Zero (horses have no stomach)"],
        "a": 0,
        "e": "The equine stomach is relatively small (9-15 L), designed for continuous grazing of small forage amounts rather than infrequent large grain meals.",
        "topicId": "u4-t06",
        "diff": 2,
        "subSection": "u4-s2"
    },
    {
        "q": "Why is an adult horse completely unable to vomit or regurgitate stomach contents during acute gastric distension?",
        "o": ["Extremely tight cardiac sphincter with strong oblique muscular fibers and acute angle of esophageal entry", "Absence of a diaphragm", "Lack of vomiting centers in the equine brain", "Liquid stomach contents solidify instantly"],
        "a": 0,
        "e": "The equine cardiac sphincter acts as a one-way valve; severe gastric distension from grain engorgement causes fatal gastric rupture rather than vomiting.",
        "topicId": "u4-t06",
        "diff": 2,
        "subSection": "u4-s2"
    },
    {
        "q": "What nutritional crisis occurs in horses when a large meal of starch-rich grain engorges the small intestine and spills into the cecum?",
        "o": ["Rapid microbial fermentation of starch in the cecum produces lactic acid, dropping cecal pH, killing Gram-negative bacteria, releasing endotoxins, and causing Colic and Founder (Laminitis)", "Immediate severe hypocalcemia", "Rupture of the spleen", "Complete calcification of the liver"],
        "a": 0,
        "e": "Starch spillover triggers cecal lactic acidosis; mucosal damage allows absorption of bacterial endotoxins, causing intense abdominal pain (colic) and digital laminitis (founder).",
        "topicId": "u4-t06",
        "diff": 2,
        "subSection": "u4-s2"
    },
    {
        "q": "To prevent equine colic and maintain normal hindgut motility, what is the absolute minimum forage (hay/pasture) requirement for a horse?",
        "o": ["At least 1.0 to 1.5% of body weight in dry matter (or >50% of total diet DM)", "0.1% of body weight", "Zero forage (100% pelleted grain)", "5% of body weight"],
        "a": 0,
        "e": "Horses must receive at least 1.0-1.5% of their body weight daily as long coarse forage to maintain cecal fill, prevent impaction colic, and prevent stereotypic vice (crib-biting).",
        "topicId": "u4-t06",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "Which feed grain is considered the safest and most traditional concentrate for horses due to its high fiber hull (10-12% CF) which prevents rapid grain engorgement?",
        "o": ["Oats (Avena sativa)", "Wheat", "Rye", "Maize"],
        "a": 0,
        "e": "Whole oats contain a fibrous hull that forms a loose, porous mass in the equine stomach, reducing the risk of impaction and starch spillover into the cecum.",
        "topicId": "u4-t07",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "What is the primary energy substrate utilized by horses performing slow, prolonged, aerobic endurance exercise (e.g. trail riding)?",
        "o": ["Free fatty acids (aerobic beta-oxidation) and cecal volatile fatty acids", "Muscle glycogen via anaerobic glycolysis exclusively", "Pure blood urea", "Dietary amino acids exclusively"],
        "a": 0,
        "e": "Low-to-moderate intensity sustained exercise relies on oxidative phosphorylation of mobilized fatty acids and cecally absorbed acetate, sparing muscle glycogen.",
        "topicId": "u4-t07",
        "diff": 2,
        "subSection": "u4-s2"
    },
    {
        "q": "In high-performance racehorses, vegetable oil is commonly supplemented up to 8 to 10% of the concentrate ration to:",
        "o": ["Increase caloric density without overloading the gut with starch, and spare muscle glycogen reserves", "Prevent hair growth", "Induce diarrhea before races", "Replace all forage fiber"],
        "a": 0,
        "e": "Dietary fat is energy-dense (approx. 9 Mcal/kg) and safe for the equine stomach, helping prevent grain-induced laminitis while extending stamina in racing.",
        "topicId": "u4-t07",
        "diff": 2,
        "subSection": "u4-s2"
    },
    {
        "q": "What metabolic disorder in horses, colloquially termed 'Monday Morning Disease' or 'Tying-Up' (Exertional Rhabdomyolysis), is triggered by feeding full grain rations during weekend rest days followed by sudden heavy exercise?",
        "o": ["Azoturia (Exertional Rhabdomyolysis / Polysaccharide Storage Myopathy)", "Milk fever", "Ketosis", "Grass tetany"],
        "a": 0,
        "e": "Excessive glycogen accumulation in muscle during rest followed by exercise leads to lactic acid buildup, muscle fiber necrosis, myoglobinuria ('coffee-colored' urine), and stiff hindquarters.",
        "topicId": "u4-t07",
        "diff": 2,
        "subSection": "u4-s2"
    },
    {
        "q": "Why is sudden abrupt change of feed dangerous in horses?",
        "o": ["Hindgut microbial populations require 7 to 10 days to adapt; sudden feed shifts cause dysbiosis, gas accumulation, and fatal spasmodic or impaction colic", "It causes horses to develop horns", "The horse immediately sheds its hooves", "It causes instantaneous blindness"],
        "a": 0,
        "e": "Equine cecal microbes are adapted to specific substrate profiles; any dietary changes should be phased in gradually over 7-10 days to prevent dysbiosis and colic.",
        "topicId": "u4-t07",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "What is the recommended ratio of Calcium to Phosphorus in equine diets across all life stages?",
        "o": ["1.2 : 1 to 2.0 : 1 (and never less than 1 : 1)", "0.5 : 1 (High Phosphorus)", "10 : 1", "Zero Calcium"],
        "a": 0,
        "e": "Horses are extremely sensitive to phosphorus excess; phosphorus must never exceed calcium (Ca:P should be 1.2:1 to 2:1) to prevent osteodystrophia fibrosa (big head).",
        "topicId": "u4-t06",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "In pig rations, which trace mineral is routinely supplemented at pharmacological growth-promoting levels (150 to 250 ppm) in starter diets?",
        "o": ["Copper (as Copper Sulfate)", "Lead", "Mercury", "Cadmium"],
        "a": 0,
        "e": "High levels of dietary copper (150-250 ppm) exert an antimicrobial effect in the pig gut, improving post-weaning growth rate and feed conversion efficiency.",
        "topicId": "u4-t04",
        "diff": 2,
        "subSection": "u4-s2"
    },
    {
        "q": "Which mineral is supplemented in piglet diets at 2000 to 3000 ppm for the first 2 weeks post-weaning to control post-weaning diarrhea (scours)?",
        "o": ["Zinc (as Zinc Oxide)", "Iron", "Magnesium", "Potassium"],
        "a": 0,
        "e": "Pharmacological levels of Zinc Oxide (ZnO) stabilize gut mucosal barrier integrity and suppress pathogenic E. coli adhesion in freshly weaned pigs.",
        "topicId": "u4-t04",
        "diff": 2,
        "subSection": "u4-s2"
    },
    {
        "q": "What is the consequence of feeding raw, unprocessed soybeans to growing pigs?",
        "o": ["Active Kunitz trypsin inhibitors inhibit protein digestion and cause pancreatic hypertrophy, severely depressing growth", "Immediate death from cyanide", "Causes acute rickets", "Pigs fatten at double the normal rate"],
        "a": 0,
        "e": "Soybean trypsin inhibitors block digestive proteases; heat processing (extrusion or roasting) is mandatory to denature trypsin inhibitors for swine.",
        "topicId": "u4-t10",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "What is 'Soft Pork' in swine production, and how is it caused nutritionally?",
        "o": ["Oily, soft carcass fat caused by feeding diets high in unsaturated fatty acids (e.g. full-fat maize, rice bran, or vegetable oils)", "Pork contaminated with water", "Pork derived from very young piglets", "Carcass devoid of skeletal bone"],
        "a": 0,
        "e": "Non-ruminants absorb unsaturated dietary fatty acids directly and deposit them intact into adipose tissue, resulting in soft, oily, unmarketable fat that goes rancid quickly.",
        "topicId": "u4-t05",
        "diff": 2,
        "subSection": "u4-s2"
    },
    {
        "q": "Why is the use of non-protein nitrogen (urea) ineffective and dangerous in swine feeding?",
        "o": ["Swine have an enzymatic, non-fermentative stomach and small intestine prior to the cecum, so urea is rapidly absorbed as toxic ammonia without being converted to protein", "Urea causes pig bristles to fall off", "Urea destroys dietary starch", "Pigs refuse to eat white powders"],
        "a": 0,
        "e": "Pigs lack a pre-absorptive fermentation vat; dietary urea is absorbed as free ammonia, stressing the liver and risking toxic hyperammonemia without contributing to amino acids.",
        "topicId": "u4-t04",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "What is the recommended inclusion level of De-oiled Rice Bran (DORB) in grower-finisher pig rations in India?",
        "o": ["Up to 20 to 30%", "Up to 90%", "Strictly 0%", "0.5% only"],
        "a": 0,
        "e": "DORB is a common economical agro-byproduct in India; its high fiber content limits inclusion to 20-30% in growing-finishing pigs.",
        "topicId": "u4-t10",
        "diff": 2,
        "subSection": "u4-s2"
    },
    {
        "q": "Foals born to mares grazing endophyte-infected tall fescue (*Neotyphodium coenophialum*) grass during late gestation suffer from:",
        "o": ["Prolonged gestation, agalactia (no milk), thickened placenta, and high foal mortality", "Instant twin births", "Excessive milk production", "Immediate shedding of teeth"],
        "a": 0,
        "e": "Fescue ergot alkaloids act as dopamine agonists, suppressing maternal prolactin secretion, leading to severe agalactia, placental thickening, and foal death.",
        "topicId": "u4-t07",
        "diff": 3,
        "subSection": "u4-s2"
    },
    {
        "q": "What is 'Creep Feeding' in foals, and when should it be introduced?",
        "o": ["Providing a balanced, high-protein concentrate in a restricted feeder accessible only to foals, introduced at 2 to 3 weeks of age", "Feeding foals on the floor", "Providing creep feed after 1 year", "Feeding mares liquid milk replacer"],
        "a": 0,
        "e": "Mare milk yield declines after peak lactation at 4-6 weeks; creep feeding from 2-3 weeks ensures smooth growth and reduces weaning shock.",
        "topicId": "u4-t06",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "Which mineral deficiency in growing foals is a primary cause of Developmental Orthopedic Disease (DOD), epiphysitis, and osteochondrosis dissecans (OCD)?",
        "o": ["Copper and Zinc", "Sodium and Chlorine", "Potassium and Fluorine", "Lead and Cadmium"],
        "a": 0,
        "e": "Copper is required for lysyl oxidase cross-linking of cartilage collagen; low copper intake during rapid growth causes cartilage maturation failure and OCD.",
        "topicId": "u4-t06",
        "diff": 2,
        "subSection": "u4-s2"
    },
    {
        "q": "Adult working horses performing heavy draft or competition work sweat profusely, losing large quantities of which electrolytes?",
        "o": ["Sodium, Potassium, and Chloride", "Calcium and Phosphorus only", "Copper and Iron", "Iodine and Fluorine"],
        "a": 0,
        "e": "Equine sweat is hypertonic with respect to potassium and contains copious sodium and chloride; working horses require commercial electrolyte supplementation.",
        "topicId": "u4-t07",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "Feeding spoiled, moldy corn containing the mycotoxin Fumonisin B1 (produced by *Fusarium verticillioides*) to horses causes which fatal neurotoxic disease?",
        "o": ["Equine Leukoencephalomalacia (ELEM / Moldy Corn Poisoning)", "Grass tetany", "Rickets", "Night blindness"],
        "a": 0,
        "e": "Fumonisin B1 disrupts sphingolipid biosynthesis, producing liquefactive necrosis of the cerebral white matter (leukoencephalomalacia) and acute liver necrosis.",
        "topicId": "u4-t07",
        "diff": 3,
        "subSection": "u4-s2"
    },

    # --- u4-s3: Companion, Laboratory & Zoo Animal Nutrition (24 MCQs) ---
    {
        "q": "Why is the domestic cat (Felis catus) classified as an 'Obligate Carnivore' from a nutritional and metabolic perspective?",
        "o": ["Cats have unique metabolic evolutionary constraints requiring nutrients found exclusively in animal tissues (taurine, arachidonic acid, preformed vitamin A, high protein)", "Cats cannot swallow plant material", "Cats lack teeth to chew grass", "Cats do not have a stomach"],
        "a": 0,
        "e": "Felines must consume animal tissues to obtain nutrients they cannot synthesize: taurine, arachidonic acid, retinol, niacin, and high obligatory nitrogen catabolism.",
        "topicId": "u4-t15",
        "diff": 1,
        "subSection": "u4-s3"
    },
    {
        "q": "Why is the minimum dietary protein requirement of cats roughly two to three times higher than that of adult dogs?",
        "o": ["Cats cannot down-regulate hepatic transaminases and urea cycle enzymes, resulting in continuous, irreversible amino acid catabolism", "Cats cannot digest carbohydrates", "Cats excrete whole protein in urine", "Cats lack digestive proteases"],
        "a": 0,
        "e": "Hepatic amino acid catabolic enzymes (ALT, AST, urea cycle enzymes) in cats remain permanently active at high levels, constantly breaking down protein for gluconeogenesis.",
        "topicId": "u4-t15",
        "diff": 2,
        "subSection": "u4-s3"
    },
    {
        "q": "What clinical syndrome develops in cats fed a taurine-deficient diet for several months?",
        "o": ["Dilated Cardiomyopathy (DCM) and Feline Central Retinal Degeneration (FCRD)", "Acute rickets and big head", "Immediate bilateral cataract", "Severe hair growth over the cornea"],
        "a": 0,
        "e": "Taurine is essential for myocardial contractility and photoreceptor structure in the area centralis of the retina; deficiency leads to DCM and irreversible blindness.",
        "topicId": "u4-t15",
        "diff": 1,
        "subSection": "u4-s3"
    },
    {
        "q": "Why is a single meal lacking the amino acid Arginine potentially fatal within hours in a domestic cat?",
        "o": ["Cats cannot synthesize ornithine; without arginine, the urea cycle halts immediately, causing acute toxic hyperammonemic encephalopathy", "Cats immediately develop hypoglycemia", "The stomach ruptures", "Body temperature plunges to zero"],
        "a": 0,
        "e": "Cats have high baseline protein catabolism generating ammonia continuously; omitting arginine stalls the urea cycle, causing toxic blood ammonia spikes, seizures, and death within hours.",
        "topicId": "u4-t15",
        "diff": 2,
        "subSection": "u4-s3"
    },
    {
        "q": "Why cannot domestic cats convert the amino acid Tryptophan to Niacin (Vitamin B3)?",
        "o": ["Extremely high hepatic activity of picolinic acid carboxylase rapidly diverts intermediates toward the acetyl-CoA pathway instead of quinolinic acid", "Cats do not absorb tryptophan", "Cats lack kidneys", "Tryptophan is toxic to the cat liver"],
        "a": 0,
        "e": "Picolinic carboxylase activity is 30-50 times higher in cats than in other mammals, rapidly degrading tryptophan intermediates and making dietary niacin an absolute requirement.",
        "topicId": "u4-t15",
        "diff": 3,
        "subSection": "u4-s3"
    },
    {
        "q": "Feline Lower Urinary Tract Disease (FLUTD) characterized by sterile Struvite uroliths is exacerbated by which dietary factor?",
        "o": ["High dietary magnesium and ash in diets that produce an alkaline urinary pH (> 6.8)", "Excess dietary vitamin C", "Feeding pure fat", "Low dietary protein"],
        "a": 0,
        "e": "Struvite (magnesium ammonium phosphate hexahydrate) crystallizes readily in alkaline urine (pH > 6.8) containing elevated magnesium; acidifying diets (pH 6.2-6.5) dissolve struvite.",
        "topicId": "u4-t15",
        "diff": 2,
        "subSection": "u4-s3"
    },
    {
        "q": "Why are Chocolate and cocoa products highly toxic to domestic dogs?",
        "o": ["They contain Theobromine and Caffeine (methylxanthines), which dogs metabolize extremely slowly, causing cardiac arrhythmias, seizures, and death", "Chocolate contains high starch that causes rumen acidosis", "Cocoa binds dog hemoglobin", "Chocolate destroys canine teeth instantly"],
        "a": 0,
        "e": "Dogs have a long elimination half-life for theobromine (~17.5 hours); toxic doses (100-200 mg/kg) cause adenosine receptor antagonism, tachycardia, and fatal seizures.",
        "topicId": "u4-t14",
        "diff": 1,
        "subSection": "u4-s3"
    },
    {
        "q": "Ingestion of Onions, Garlic, and Chives (*Allium* species) causes which toxic hematological disorder in dogs and cats?",
        "o": ["Hemolytic anemia characterized by Heinz body formation and eccentrocytes", "Acute bone marrow aplasia", "Severe leukemia", "Polycythemia vera"],
        "a": 0,
        "e": "Organic sulfur compounds (n-propyl disulfide, thiosulfates) oxidize red blood cell hemoglobin, precipitating Heinz bodies and causing intravascular and extravascular hemolysis.",
        "topicId": "u4-t14",
        "diff": 1,
        "subSection": "u4-s3"
    },
    {
        "q": "The artificial sweetener Xylitol causes which life-threatening acute toxic reaction when ingested by dogs?",
        "o": ["Massive insulin surge causing profound hypoglycemia followed by acute hepatic necrosis", "Sudden cardiac arrest", "Severe diabetes mellitus", "Loss of coat color"],
        "a": 0,
        "e": "Xylitol stimulates a potent, dose-dependent release of insulin from the canine pancreas, dropping blood glucose to lethal levels within 30-60 minutes, followed by acute liver failure.",
        "topicId": "u4-t14",
        "diff": 2,
        "subSection": "u4-s3"
    },
    {
        "q": "Ingestion of Grapes and Raisins by domestic dogs is clinically associated with the unpredictable onset of:",
        "o": ["Acute oliguric or anuric renal failure", "Acute blindness", "Pancreatic hypertrophy", "Immediate loss of hearing"],
        "a": 0,
        "e": "Tartaric acid present in grapes causes acute proximal tubular necrosis and acute renal failure in sensitive canines.",
        "topicId": "u4-t14",
        "diff": 2,
        "subSection": "u4-s3"
    },
    {
        "q": "What is the recommended dietary Crude Protein requirement for growing Puppies compared to Adult Dogs at maintenance?",
        "o": ["26 to 28% CP for puppies, and 18 to 22% CP for adult maintenance", "10% CP for puppies, and 30% CP for adults", "40% CP for puppies, and 10% CP for adults", "Protein requirements are identical across all life stages"],
        "a": 0,
        "e": "AAFCO and NRC guidelines recommend 26-28% CP and 8% fat for growing puppies, compared to 18-22% CP for adult canine maintenance.",
        "topicId": "u4-t14",
        "diff": 1,
        "subSection": "u4-s3"
    },
    {
        "q": "Why must domestic Rabbits (Oryctolagus cuniculus) consume high-fiber diets containing at least 14 to 16% Crude Fiber (or >30% NDF)?",
        "o": ["Indigestible long fiber stimulates cecocolonic motility, prevents trichobezoars (hairballs), and prevents fatal enterotoxemia", "Rabbits cannot digest any nutrients other than fiber", "Fiber is required to synthesize vitamin C", "Fiber stops rabbit teeth from falling out"],
        "a": 0,
        "e": "Indigestible coarse fiber drives the separation mechanism in the proximal colon, flushing fiber out while moving fermentable fluid into the cecum, preventing stasis and enterotoxemia.",
        "topicId": "u4-t13",
        "diff": 1,
        "subSection": "u4-s3"
    },
    {
        "q": "What is 'Cecotrophy' (Pseudorumination) in rabbits?",
        "o": ["The ingestion of nutrient-rich soft nighttime fecal pellets directly from the anus to recover microbial protein, B vitamins, and minerals", "Regurgitation of stomach contents to chew cud", "Eating soil to absorb minerals", "Feeding exclusively on cereal grains"],
        "a": 0,
        "e": "Cecotropes are soft mucus-coated pellets fermented in the cecum; rabbits swallow them whole from the anus, allowing digestion of high-quality microbial protein and B-vitamins.",
        "topicId": "u4-t13",
        "diff": 1,
        "subSection": "u4-s3"
    },
    {
        "q": "What fatal clinical condition occurs in rabbits fed excessive high-starch concentrate pellets and inadequate hay?",
        "o": ["Mucoid Enteritis / Enterotoxemia caused by cecal starch overload proliferating Clostridium spiroforme", "Acute rickets", "Sudden gastric rupture", "Blind staggers"],
        "a": 0,
        "e": "Excess starch spills into the cecum, disrupting the normal symbiotic flora and allowing toxigenic Clostridium spiroforme to produce lethal iota-like toxin.",
        "topicId": "u4-t13",
        "diff": 2,
        "subSection": "u4-s3"
    },
    {
        "q": "Why do Guinea Pigs (*Cavia porcellus*) have an absolute obligate dietary requirement for Vitamin C (L-Ascorbic Acid)?",
        "o": ["They lack the functional liver enzyme L-gulonolactone oxidase required to synthesize ascorbic acid from glucose", "They destroy vitamin C in their kidneys", "They excrete vitamin C as sweat", "Vitamin C is toxic to their stomach"],
        "a": 0,
        "e": "Like humans and primates, guinea pigs have a loss-of-function mutation in the GULO gene and develop fatal scurvy (hemorrhages, swollen joints) without dietary Vitamin C.",
        "topicId": "u4-t12",
        "diff": 1,
        "subSection": "u4-s3"
    },
    {
        "q": "What is the daily Vitamin C requirement for a healthy adult non-pregnant guinea pig?",
        "o": ["10 to 20 mg per day (increasing to 30 mg during pregnancy)", "1000 mg per day", "0.01 mg per day", "Zero (guinea pigs don't need vitamin C)"],
        "a": 0,
        "e": "Adult guinea pigs require 10-20 mg ascorbic acid daily in drinking water or fresh greens (cabbage, capsicum) to prevent collagen synthesis failure.",
        "topicId": "u4-t12",
        "diff": 2,
        "subSection": "u4-s3"
    },
    {
        "q": "Laboratory Rats (*Rattus norvegicus*) and Mice (*Mus musculus*) are routinely fed standardized pelleted diets primarily to:",
        "o": ["Prevent selective sorting of favorite ingredients and provide complete, uniform nutrition with constant tooth-wearing hardness", "Make the animals grow fat quickly", "Induce diabetes for research", "Eliminate all gut bacteria"],
        "a": 0,
        "e": "Homogeneous autoclavable pellets ensure consistent nutrient intake, prevent selective eating, and provide necessary mechanical resistance to wear down open-rooted incisors.",
        "topicId": "u4-t12",
        "diff": 1,
        "subSection": "u4-s3"
    },
    {
        "q": "Why must captive wild felids (lions, tigers, leopards) in zoological parks be fed whole animal carcasses with bones rather than boneless muscle meat?",
        "o": ["Boneless meat is severely deficient in Calcium (Ca:P ratio 1:20), causing fatal Nutritional Secondary Hyperparathyroidism (Metabolic Bone Disease)", "Big cats refuse to eat soft meat", "Bone marrow contains toxic enzymes", "Bones prevent intestinal motility"],
        "a": 0,
        "e": "Pure lean skeletal muscle contains ~0.01% Ca and ~0.2% P (Ca:P 1:20); without bones or calcium carbonate supplements, captive carnivores suffer catastrophic osteomalacia and fractures.",
        "topicId": "u4-t16",
        "diff": 1,
        "subSection": "u4-s3"
    },
    {
        "q": "In captive frugivorous and folivorous primates (e.g. chimpanzees, macaques), which vitamin must always be supplemented in the diet?",
        "o": ["Vitamin C (Ascorbic Acid)", "Vitamin K3 only", "Vitamin B12 only", "Biotin only"],
        "a": 0,
        "e": "All anthropoid primates lack L-gulonolactone oxidase and cannot synthesize Vitamin C, requiring daily fresh fruits, vegetables, or fortified commercial monkey chow.",
        "topicId": "u4-t16",
        "diff": 1,
        "subSection": "u4-s3"
    },
    {
        "q": "What is the primary nutritional hazard of feeding domestic cattle concentrate pellets to captive wild browsing ruminants (e.g. Blackbuck, Chital, Giraffes) in zoos?",
        "o": ["Acute and subacute ruminal acidosis, ruminitis, and abomasal ulceration due to low physically effective fiber and excess starch", "Immediate bone calcification", "Extreme vitamin D toxicity", "Rapid tooth decay"],
        "a": 0,
        "e": "Wild browsers have small rumens, thin ruminal mats, and rapid fermentation kinetics; starchy cattle concentrates cause acute ruminal acidosis and fatal ruminitis.",
        "topicId": "u4-t16",
        "diff": 2,
        "subSection": "u4-s3"
    },
    {
        "q": "Captive zoo flamingoes require dietary supplementation of Canthaxanthin or Beta-carotene primarily to:",
        "o": ["Maintain their characteristic brilliant pink-red plumage pigmentation", "Prevent blindness", "Stimulate flight muscle hypertrophy", "Increase egg size"],
        "a": 0,
        "e": "In the wild, flamingoes ingest aquatic carotenoid-rich crustaceans and algae; in captivity, synthetic canthaxanthin is added to the diet to prevent faded white plumage.",
        "topicId": "u4-t16",
        "diff": 1,
        "subSection": "u4-s3"
    },
    {
        "q": "What dietary management is essential when hand-rearing orphan wild mammalian neonates in captive wildlife centers?",
        "o": ["Formulating species-specific milk replacers matching maternal milk fat, protein, and solids (e.g. high fat/protein for carnivores, low fat for macropods)", "Feeding undiluted commercial cow milk to all species", "Feeding dry adult pellets immediately", "Providing sugar water only"],
        "a": 0,
        "e": "Maternal milk composition varies drastically across species (e.g. wild felid milk contains >8% protein and 7% fat); cow milk has excess lactose and causes fatal osmotic diarrhea.",
        "topicId": "u4-t16",
        "diff": 2,
        "subSection": "u4-s3"
    },
    {
        "q": "Which metabolic disease in captive reptiles (green iguanas, tortoises) is caused by feeding lettuce diets deficient in Calcium and lacking UV-B light?",
        "o": ["Metabolic Bone Disease (Nutritional Secondary Hyperparathyroidism)", "Scurvy", "Grass tetany", "Polioencephalomalacia"],
        "a": 0,
        "e": "Lack of UV-B prevents synthesis of cholecalciferol (D3), while low calcium diets stimulate parathyroid hormone, resulting in soft rubbery jaws and deformed carapaces.",
        "topicId": "u4-t16",
        "diff": 1,
        "subSection": "u4-s3"
    },
    {
        "q": "Which nutritional strategy helps prevent feline idiopathic hepatic lipidosis (Fatty Liver Disease) in obese cats?",
        "o": ["Avoiding sudden complete anorexia or rapid starvation by ensuring steady voluntary intake of high-protein diets", "Feeding only raw fish oil", "Restricting water intake", "Inducing rapid weight loss of 50% in one week"],
        "a": 0,
        "e": "Prolonged fasting in obese cats mobilizes massive peripheral fatty acids into hepatocytes exceeding VLDL export capacity, causing fatal hepatic lipidosis.",
        "topicId": "u4-t15",
        "diff": 2,
        "subSection": "u4-s3"
    }
]

tf = [
    # --- u4-s1: Poultry Nutrition (Broilers & Layers) (18 TF) ---
    {
        "q": "Broiler pre-starter diets require a minimum of 23% Crude Protein according to BIS specifications.",
        "a": True,
        "e": "True. BIS standards prescribe 23% CP and 3000 kcal ME/kg for 0-7 day broiler pre-starters.",
        "topicId": "u4-t08",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Laying hens during active egg production require approximately 3.5 to 4.5% dietary Calcium.",
        "a": True,
        "e": "True. 3.5-4.5% dietary Ca supplies the ~2.2 g of calcium required for each eggshell calcification.",
        "topicId": "u4-t09",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Coarse particles of limestone (2 to 4 mm) dissolve slowly overnight in the gizzard, supplying calcium for nighttime shell formation.",
        "a": True,
        "e": "True. Coarse limestone is retained in the ventriculus, releasing calcium continuously during nocturnal shell deposition.",
        "topicId": "u4-t09",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Growing egg-type pullets (9 to 18 weeks) should be fed ad libitum with high-energy diets to encourage early sexual maturity.",
        "a": False,
        "e": "False. Pullets require restricted feeding to prevent obesity, delay early lay of tiny eggs, and prevent vent prolapse.",
        "topicId": "u4-t09",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Birds excrete excess metabolic nitrogen primarily in the form of urea.",
        "a": False,
        "e": "False. Birds are uricotelic and excrete nitrogen as insoluble uric acid to conserve water.",
        "topicId": "u4-t01",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "DL-methionine is universally the first-limiting amino acid in maize-soybean meal poultry diets.",
        "a": True,
        "e": "True. Soybean protein is deficient in sulfur amino acids, making methionine the first limiting amino acid.",
        "topicId": "u4-t08",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Chickens can synthesize adequate amounts of Arginine in their liver via the complete urea cycle.",
        "a": False,
        "e": "False. Birds lack key urea cycle enzymes and have an absolute dietary requirement for arginine.",
        "topicId": "u4-t01",
        "diff": 2,
        "subSection": "u4-s1"
    },
    {
        "q": "Modern commercial broilers typically achieve a Feed Conversion Ratio of 1.45 to 1.65 at 42 days of age.",
        "a": True,
        "e": "True. Intensive genetic selection and balanced diets achieve an FCR around 1.5 kg feed per kg weight gain.",
        "topicId": "u4-t08",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Cage layer fatigue is caused by excessive skeletal calcium depletion to sustain eggshell formation.",
        "a": True,
        "e": "True. High calcium output in eggs exhausts cortical and medullary bone reserves, causing acute osteoporosis and paralysis.",
        "topicId": "u4-t09",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Xanthophyll carotenoid pigments are added to layer feeds to improve yolk color.",
        "a": True,
        "e": "True. Natural and synthetic xanthophylls are deposited in yolk fat to provide the desired golden-orange color.",
        "topicId": "u4-t09",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Ducklings are highly resistant to Aflatoxin B1 toxicity and can tolerate 1000 ppb in feed.",
        "a": False,
        "e": "False. Ducklings are the most sensitive avian species to aflatoxin B1; levels >15-20 ppb can cause fatal liver necrosis.",
        "topicId": "u4-t11",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Turkey poults require approximately 28% Crude Protein in their starter diet.",
        "a": True,
        "e": "True. Turkeys have the highest starting protein requirement among commercial poultry (28% CP).",
        "topicId": "u4-t11",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Ascites syndrome in broilers is associated with rapid growth, high metabolic oxygen demand, and pulmonary hypertension.",
        "a": True,
        "e": "True. Rapid growth outpaces cardiovascular capacity, producing pulmonary hypertension, right ventricular hypertrophy, and coelomic fluid accumulation.",
        "topicId": "u4-t17",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Supplemental phytase enzyme increases the bioavailability of phytate-bound phosphorus in poultry rations.",
        "a": True,
        "e": "True. Microbial phytase cleaves phosphate groups from plant phytic acid, liberating available phosphorus.",
        "topicId": "u4-t10",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Viscous soluble beta-glucans in barley decrease digesta viscosity and eliminate sticky wet droppings in broilers.",
        "a": False,
        "e": "False. Beta-glucans increase gut viscosity and cause sticky wet droppings; beta-glucanase enzymes are added to hydrolyze them.",
        "topicId": "u4-t10",
        "diff": 2,
        "subSection": "u4-s1"
    },
    {
        "q": "Visceral gout in poultry is caused by deposition of monosodium urate crystals on internal organs.",
        "a": True,
        "e": "True. High blood uric acid crystallizes onto heart, liver, and abdominal serosa as a white chalky coating.",
        "topicId": "u4-t17",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Encephalomalacia (Crazy Chick Disease) in chicks is caused by Vitamin E deficiency.",
        "a": True,
        "e": "True. Vitamin E deficiency allows lipid peroxidation of cerebellar membranes, causing cerebellar hemorrhage and ataxia.",
        "topicId": "u4-t17",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Perosis (slipped tendon) in broiler chicks is primarily associated with Manganese deficiency.",
        "a": True,
        "e": "True. Manganese deficiency disrupts epiphyseal chondrogenesis, causing the gastrocnemius tendon to slip from its groove.",
        "topicId": "u4-t17",
        "diff": 1,
        "subSection": "u4-s1"
    },

    # --- u4-s2: Swine & Equine Nutrition (15 TF) ---
    {
        "q": "Piglet creep diets should contain approximately 20 to 22% Crude Protein with high levels of digestible lysine.",
        "a": True,
        "e": "True. Early nursing piglets require 20-22% CP and 1.3-1.4% lysine to maximize pre-weaning growth rates.",
        "topicId": "u4-t04",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "Sow milk contains abundant iron, eliminating the need for iron injections in housed piglets.",
        "a": False,
        "e": "False. Sow milk provides only ~1 mg iron/day against a 7 mg requirement; piglets require iron dextran injection at 3 days.",
        "topicId": "u4-t04",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "In the ideal protein concept for swine, all essential amino acids are patterned relative to Lysine set at 100%.",
        "a": True,
        "e": "True. Lysine is the reference standard (100%) because it is first-limiting and utilized almost entirely for lean muscle synthesis.",
        "topicId": "u4-t01",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "Pregnant sows should be fed ad libitum throughout gestation to produce larger litters.",
        "a": False,
        "e": "False. Sows should be restricted to 1.8-2.2 kg/day; overfeeding causes embryonic mortality, dystocia, and poor lactation intake.",
        "topicId": "u4-t05",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "Lactating sows should be full-fed (ad libitum) to support milk production and prevent excessive maternal weight loss.",
        "a": True,
        "e": "True. Lactating sows produce 8-12 kg milk daily and require ad libitum feeding of high-energy, high-protein rations.",
        "topicId": "u4-t05",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "The horse is a hindgut fermenter that digests structural fiber primarily in the cecum and large colon.",
        "a": True,
        "e": "True. The equine cecum and large colon host an active anaerobic microbial population that converts fiber into volatile fatty acids.",
        "topicId": "u4-t06",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "Horses absorb microbial protein synthesized in their cecum just as efficiently as cows absorb ruminal microbial protein.",
        "a": False,
        "e": "False. Hindgut microbes are excreted in feces; horses cannot absorb microbial amino acids and require high-quality dietary protein.",
        "topicId": "u4-t06",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "The equine stomach is small, representing only about 8 to 10% of total digestive tract capacity.",
        "a": True,
        "e": "True. Holding only 9-15 liters, the equine stomach is adapted for small, continuous grazing meals rather than large gorge meals.",
        "topicId": "u4-t06",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "Horses can easily vomit excess stomach gas and food contents when the stomach becomes distended.",
        "a": False,
        "e": "False. Horses have a powerful cardiac sphincter and cannot vomit; severe gastric distension can result in fatal stomach rupture.",
        "topicId": "u4-t06",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "Starch spillover from the small intestine into the equine cecum can trigger cecal acidosis, colic, and laminitis.",
        "a": True,
        "e": "True. Rapid starch fermentation lowers cecal pH, killing Gram-negative bacteria and releasing endotoxins that trigger laminitis.",
        "topicId": "u4-t06",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "Horses should receive a minimum of 1.0 to 1.5% of their body weight in dry forage daily to maintain gut motility.",
        "a": True,
        "e": "True. Adequate coarse roughage is required to prevent impaction colic and behavioral vices like crib-biting.",
        "topicId": "u4-t06",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "Whole oats are considered one of the safest grains for horses because of their high fiber content.",
        "a": True,
        "e": "True. The fibrous hull (10-12% CF) slows starch digestion and reduces the risk of starch spillover into the hindgut.",
        "topicId": "u4-t07",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "Exertional Rhabdomyolysis (tying-up) in horses is associated with feeding high grain during rest followed by sudden exercise.",
        "a": True,
        "e": "True. Stored muscle glycogen breaks down during sudden exercise, triggering muscle cramping, damage, and myoglobinuria.",
        "topicId": "u4-t07",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "In swine, feeding diets high in unsaturated vegetable oils produces soft, oily carcass fat.",
        "a": True,
        "e": "True. Non-ruminants absorb unsaturated fatty acids directly and deposit them intact into adipose tissue, causing 'soft pork'.",
        "topicId": "u4-t05",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "Urea is an economical protein supplement routinely used in pig rations to replace soybean meal.",
        "a": False,
        "e": "False. Swine lack a pre-absorptive fermentation vat; urea is absorbed as toxic ammonia and cannot be utilized for protein synthesis.",
        "topicId": "u4-t04",
        "diff": 1,
        "subSection": "u4-s2"
    },

    # --- u4-s3: Companion, Laboratory & Zoo Animal Nutrition (12 TF) ---
    {
        "q": "The domestic cat is an obligate carnivore with metabolic adaptations requiring animal-derived nutrients.",
        "a": True,
        "e": "True. Cats require preformed nutrients found only in animal tissues: taurine, arachidonic acid, retinol, and high protein.",
        "topicId": "u4-t15",
        "diff": 1,
        "subSection": "u4-s3"
    },
    {
        "q": "Cats can down-regulate their hepatic amino acid catabolic enzymes when fed a low-protein diet.",
        "a": False,
        "e": "False. Cat liver transaminases and urea cycle enzymes are constitutively active and cannot be down-regulated, demanding high dietary protein.",
        "topicId": "u4-t15",
        "diff": 2,
        "subSection": "u4-s3"
    },
    {
        "q": "Taurine deficiency in cats causes Dilated Cardiomyopathy and Central Retinal Degeneration.",
        "a": True,
        "e": "True. Taurine is essential for myocardial calcium modulation and photoreceptor maintenance; deficiency causes heart failure and blindness.",
        "topicId": "u4-t15",
        "diff": 1,
        "subSection": "u4-s3"
    },
    {
        "q": "A single meal completely devoid of Arginine can induce fatal hyperammonemic encephalopathy in domestic cats.",
        "a": True,
        "e": "True. Rapid protein catabolism generates ammonia continuously; without arginine to maintain the urea cycle, ammonia spikes toxically.",
        "topicId": "u4-t15",
        "diff": 2,
        "subSection": "u4-s3"
    },
    {
        "q": "Chocolate is toxic to dogs because dogs metabolize the methylxanthine theobromine very slowly.",
        "a": True,
        "e": "True. Theobromine accumulates in canines, stimulating the central nervous system and myocardium, potentially causing fatal seizures.",
        "topicId": "u4-t14",
        "diff": 1,
        "subSection": "u4-s3"
    },
    {
        "q": "Ingestion of onions or garlic causes Heinz body hemolytic anemia in dogs and cats.",
        "a": True,
        "e": "True. Toxic organic disulfides in Allium plants oxidize red blood cell hemoglobin, precipitating Heinz bodies and causing hemolysis.",
        "topicId": "u4-t14",
        "diff": 1,
        "subSection": "u4-s3"
    },
    {
        "q": "Xylitol ingestion in dogs causes a rapid spike in blood glucose leading to acute diabetes.",
        "a": False,
        "e": "False. Xylitol stimulates massive insulin release, causing life-threatening hypoglycemia and acute hepatic necrosis.",
        "topicId": "u4-t14",
        "diff": 1,
        "subSection": "u4-s3"
    },
    {
        "q": "Rabbits practice cecotrophy (eating soft night feces) to recover microbial protein and B vitamins.",
        "a": True,
        "e": "True. Cecotropes are swallowed whole from the anus, allowing digestion of microbial protein and absorption of vitamins in the stomach.",
        "topicId": "u4-t13",
        "diff": 1,
        "subSection": "u4-s3"
    },
    {
        "q": "Guinea pigs can synthesize Vitamin C from glucose because they have active L-gulonolactone oxidase.",
        "a": False,
        "e": "False. Guinea pigs lack functional L-gulonolactone oxidase and develop fatal scurvy unless supplemented with Vitamin C.",
        "topicId": "u4-t12",
        "diff": 1,
        "subSection": "u4-s3"
    },
    {
        "q": "Feeding boneless muscle meat alone to captive big cats produces nutritional secondary hyperparathyroidism.",
        "a": True,
        "e": "True. Boneless meat has an inverted Ca:P ratio (1:20); captive felids require bones or calcium supplements to avoid metabolic bone disease.",
        "topicId": "u4-t16",
        "diff": 1,
        "subSection": "u4-s3"
    },
    {
        "q": "Captive anthropoid primates (chimpanzees, macaques) require daily dietary supplementation of Vitamin C.",
        "a": True,
        "e": "True. Like humans, all anthropoid primates lack the GULO gene for ascorbic acid synthesis and require fresh fruits or vitamin C fortification.",
        "topicId": "u4-t16",
        "diff": 1,
        "subSection": "u4-s3"
    },
    {
        "q": "Sudden prolonged anorexia in obese cats can precipitate life-threatening Feline Hepatic Lipidosis.",
        "a": True,
        "e": "True. Starvation mobilizes massive adipose fatty acids into hepatocytes, overwhelming liver export capacity and causing liver failure.",
        "topicId": "u4-t15",
        "diff": 1,
        "subSection": "u4-s3"
    }
]

fib = [
    # --- u4-s1: Poultry Nutrition (Broilers & Layers) (18 FIB) ---
    {
        "q": "According to BIS specifications, Broiler Pre-starter feed must contain a minimum of ____ percent Crude Protein.",
        "a": ["23", "23%"],
        "a_display": "23%",
        "e": "Pre-starter broiler feed (0-7 days) requires 23% CP and 3000 kcal ME/kg.",
        "topicId": "u4-t08",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "The Metabolizable Energy specification for Broiler Finisher feed is typically 3150 to ____ kcal ME per kg.",
        "a": ["3200", "3200 kcal", "3200 kcal/kg"],
        "a_display": "3200 kcal/kg",
        "e": "Broiler finisher feeds boost ME to 3150-3200 kcal/kg to support finishing weight gain.",
        "topicId": "u4-t08",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Commercial layer diets during active egg production must contain ____ to 4.5% Calcium.",
        "a": ["3.5", "3.5 to 4.5", "3.5-4.5"],
        "a_display": "3.5%",
        "e": "Layers need 3.5-4.5% calcium (approx. 4 g/day) to support continuous eggshell calcification.",
        "topicId": "u4-t09",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "The muscular organ in birds that grinds coarse feeds using ingested grit is the ____.",
        "a": ["gizzard", "ventriculus"],
        "a_display": "Gizzard (Ventriculus)",
        "e": "The gizzard acts as the mechanical stomach of birds, grinding food with the help of grit.",
        "topicId": "u4-t01",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "The glandular stomach of birds that secretes hydrochloric acid and pepsinogen is the ____.",
        "a": ["proventriculus"],
        "a_display": "Proventriculus",
        "e": "The proventriculus produces gastric juices before feed passes into the muscular ventriculus.",
        "topicId": "u4-t01",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Avian species excrete excess metabolic nitrogen as insoluble ____ acid.",
        "a": ["uric", "uric acid"],
        "a_display": "Uric Acid",
        "e": "Uric acid precipitation conserves water in birds, adapting them for flight and egg incubation.",
        "topicId": "u4-t01",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "The first-limiting amino acid in maize-soybean meal broiler diets is ____.",
        "a": ["methionine", "dl-methionine"],
        "a_display": "Methionine",
        "e": "Soybean meal is low in sulfur amino acids, making methionine the first limiting amino acid.",
        "topicId": "u4-t08",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Chickens have an absolute dietary requirement for the basic amino acid ____ because they lack a functional urea cycle.",
        "a": ["arginine"],
        "a_display": "Arginine",
        "e": "Avian tissues lack urea cycle enzymes and cannot synthesize arginine from ornithine.",
        "topicId": "u4-t01",
        "diff": 2,
        "subSection": "u4-s1"
    },
    {
        "q": "Modern broiler chickens typically achieve a Feed Conversion Ratio of 1.45 to ____ at 42 days of age.",
        "a": ["1.65", "1.6", "1.7"],
        "a_display": "1.65",
        "e": "Intensive genetic selection has achieved an efficient FCR of 1.45 to 1.65 kg feed per kg live weight.",
        "topicId": "u4-t08",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Acute skeletal calcium exhaustion in caged laying hens is called cage layer ____.",
        "a": ["fatigue"],
        "a_display": "Fatigue",
        "e": "Cage layer fatigue is severe osteoporosis and paralysis caused by calcium depletion during intense egg production.",
        "topicId": "u4-t09",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Yellow-orange carotenoid pigments added to layer feeds to pigment egg yolks are called ____.",
        "a": ["xanthophylls", "xanthophyll", "carotenoids"],
        "a_display": "Xanthophylls",
        "e": "Xanthophylls deposit in the lipid droplets of egg yolk to produce the desired golden-yellow color.",
        "topicId": "u4-t09",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Among poultry species, young ____ are exceptionally sensitive to aflatoxin B1 poisoning.",
        "a": ["ducklings", "ducks"],
        "a_display": "Ducklings",
        "e": "Ducklings develop fatal hepatic necrosis from dietary aflatoxin B1 levels as low as 15-20 ppb.",
        "topicId": "u4-t11",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Turkey poults require ____ percent Crude Protein in their starter feed.",
        "a": ["28", "28%"],
        "a_display": "28%",
        "e": "Starting turkey poults have the highest protein requirement among poultry species at 28% CP.",
        "topicId": "u4-t11",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Ascites syndrome in fast-growing broilers is accompanied by fluid accumulation in the ____ cavity.",
        "a": ["coelomic", "abdominal", "peritoneal"],
        "a_display": "Coelomic (Abdominal)",
        "e": "Pulmonary hypertension causes right heart failure and transudation of fluid into the coelomic cavity.",
        "topicId": "u4-t17",
        "diff": 2,
        "subSection": "u4-s1"
    },
    {
        "q": "Microbial ____ enzyme is added to poultry diets to release plant phytate-bound phosphorus.",
        "a": ["phytase"],
        "a_display": "Phytase",
        "e": "Phytase releases phosphorus from phytic acid, reducing the need for dicalcium phosphate supplementation.",
        "topicId": "u4-t10",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Visceral gout in chickens is caused by the deposition of monosodium ____ crystals on organ surfaces.",
        "a": ["urate"],
        "a_display": "Urate",
        "e": "Impaired renal clearance precipitates white chalky monosodium urate crystals on visceral serosa.",
        "topicId": "u4-t17",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Encephalomalacia or Crazy Chick Disease is caused by a deficiency of Vitamin ____.",
        "a": ["e", "vitamin e"],
        "a_display": "Vitamin E",
        "e": "Vitamin E deficiency allows free-radical damage to cerebellar lipid membranes, causing ataxia.",
        "topicId": "u4-t17",
        "diff": 1,
        "subSection": "u4-s1"
    },
    {
        "q": "Perosis (slipped tendon) in growing broiler chicks is caused by a deficiency of the trace mineral ____.",
        "a": ["manganese", "mn"],
        "a_display": "Manganese",
        "e": "Manganese is essential for epiphyseal cartilage formation; deficiency allows the gastrocnemius tendon to slip.",
        "topicId": "u4-t17",
        "diff": 1,
        "subSection": "u4-s1"
    },

    # --- u4-s2: Swine & Equine Nutrition (15 FIB) ---
    {
        "q": "Nursing piglet creep diets should contain ____ to 22% Crude Protein.",
        "a": ["20", "20 to 22", "20-22"],
        "a_display": "20%",
        "e": "Creep diets contain 20-22% CP and 1.3-1.4% lysine to maximize pre-weaning weight gains.",
        "topicId": "u4-t04",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "Piglets are injected with 150 to 200 mg of iron ____ at 3 days of age to prevent piglet anemia.",
        "a": ["dextran"],
        "a_display": "Dextran",
        "e": "Injectable iron dextran prevents microcytic hypochromic nutritional anemia (thumps) in piglets.",
        "topicId": "u4-t04",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "The first-limiting amino acid in cereal grain-based swine diets is ____.",
        "a": ["lysine", "l-lysine"],
        "a_display": "Lysine",
        "e": "Cereal grains are naturally deficient in lysine, making it first-limiting for growing pigs.",
        "topicId": "u4-t04",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "In the ideal protein concept, all essential amino acids are patterned relative to ____ set at 100%.",
        "a": ["lysine"],
        "a_display": "Lysine",
        "e": "All indispensable amino acid requirements are expressed as a fixed percentage of Lysine = 100.",
        "topicId": "u4-t01",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "Pregnant gestating sows are restricted to approximately 1.8 to ____ kg of feed daily to prevent obesity.",
        "a": ["2.2", "2", "2.0"],
        "a_display": "2.2 kg",
        "e": "Restricted feeding (1.8-2.2 kg/day) prevents obesity, dystocia, and poor feed intake during lactation.",
        "topicId": "u4-t05",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "In horses, microbial fermentation of fiber occurs in the cecum and large ____.",
        "a": ["colon"],
        "a_display": "Colon",
        "e": "The equine hindgut (cecum and large colon) serves as the primary site of microbial fiber digestion.",
        "topicId": "u4-t06",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "The equine stomach has a capacity of only 9 to ____ liters.",
        "a": ["15", "12 to 15", "15 liters"],
        "a_display": "15 liters",
        "e": "The equine stomach represents only 8-10% of gut volume, adapted for small continuous meals.",
        "topicId": "u4-t06",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "Horses cannot ____ because of a very strong, tight cardiac sphincter at the stomach entrance.",
        "a": ["vomit", "regurgitate"],
        "a_display": "Vomit",
        "e": "The one-way cardiac sphincter prevents vomiting, predisposing horses to gastric rupture if gorged.",
        "topicId": "u4-t06",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "Excess starch spilling into the equine cecum lowers pH and can cause colic and digital ____ (founder).",
        "a": ["laminitis"],
        "a_display": "Laminitis (Founder)",
        "e": "Hindgut starch acidosis releases bacterial endotoxins that compromise the laminar corium of the hooves.",
        "topicId": "u4-t06",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "A horse must receive at least 1.0 to ____% of its body weight as dry coarse forage daily.",
        "a": ["1.5", "1.5%"],
        "a_display": "1.5%",
        "e": "Providing 1.0-1.5% body weight in forage maintains gut motility and prevents impaction colic.",
        "topicId": "u4-t06",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "The grain considered safest for feeding horses due to its high fiber hull is ____.",
        "a": ["oats", "oat"],
        "a_display": "Oats",
        "e": "Oats contain 10-12% crude fiber, which slows digestion and prevents rapid hindgut starch overload.",
        "topicId": "u4-t07",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "Exertional Rhabdomyolysis in horses is commonly referred to as Monday ____ Disease.",
        "a": ["morning"],
        "a_display": "Morning",
        "e": "Full feed during rest days followed by sudden work on Monday morning triggers acute muscle cramping (tying-up).",
        "topicId": "u4-t07",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "Feeding high levels of unsaturated vegetable oils to pigs produces soft, oily carcass fat called soft ____.",
        "a": ["pork"],
        "a_display": "Pork",
        "e": "Unsaturated fatty acids deposit directly into adipose tissue without biohydrogenation, producing soft pork.",
        "topicId": "u4-t05",
        "diff": 1,
        "subSection": "u4-s2"
    },
    {
        "q": "Zinc oxide is supplemented at 2000 to 3000 ppm in newly weaned piglet diets to control post-weaning ____.",
        "a": ["diarrhea", "diarrhoea", "scours"],
        "a_display": "Diarrhea (Scours)",
        "e": "High zinc oxide stabilizes enterocyte junctions and suppresses pathogenic E. coli scours in weaners.",
        "topicId": "u4-t04",
        "diff": 2,
        "subSection": "u4-s2"
    },
    {
        "q": "Equine leukoencephalomalacia is caused by the mycotoxin ____ B1 found in moldy corn.",
        "a": ["fumonisin"],
        "a_display": "Fumonisin",
        "e": "Fumonisin B1 from Fusarium verticillioides causes liquefactive necrosis of the equine cerebral white matter.",
        "topicId": "u4-t07",
        "diff": 2,
        "subSection": "u4-s2"
    },

    # --- u4-s3: Companion, Laboratory & Zoo Animal Nutrition (12 FIB) ---
    {
        "q": "The domestic cat is classified as an ____ carnivore because it requires nutrients found only in animal flesh.",
        "a": ["obligate", "strict"],
        "a_display": "Obligate",
        "e": "Cats have irreversible metabolic constraints that necessitate consuming animal-derived tissues.",
        "topicId": "u4-t15",
        "diff": 1,
        "subSection": "u4-s3"
    },
    {
        "q": "Taurine deficiency in cats causes dilated ____ (heart failure) and central retinal degeneration.",
        "a": ["cardiomyopathy"],
        "a_display": "Cardiomyopathy",
        "e": "Taurine is essential for feline myocardial function; deficiency causes dilated cardiomyopathy and blindness.",
        "topicId": "u4-t15",
        "diff": 1,
        "subSection": "u4-s3"
    },
    {
        "q": "Omitting the amino acid ____ from a single meal can cause fatal ammonia poisoning in cats within hours.",
        "a": ["arginine"],
        "a_display": "Arginine",
        "e": "Cats cannot synthesize ornithine; arginine omission halts the urea cycle, causing toxic hyperammonemia.",
        "topicId": "u4-t15",
        "diff": 2,
        "subSection": "u4-s3"
    },
    {
        "q": "The toxic methylxanthine present in chocolate that is poisonous to dogs is ____.",
        "a": ["theobromine"],
        "a_display": "Theobromine",
        "e": "Dogs metabolize theobromine extremely slowly; toxic doses cause cardiac arrhythmia and seizures.",
        "topicId": "u4-t14",
        "diff": 1,
        "subSection": "u4-s3"
    },
    {
        "q": "Ingestion of onions or garlic produces oxidative damage to canine red blood cells, forming ____ bodies.",
        "a": ["heinz"],
        "a_display": "Heinz",
        "e": "Oxidized hemoglobin clumps into Heinz bodies, leading to hemolytic anemia and dark urine.",
        "topicId": "u4-t14",
        "diff": 1,
        "subSection": "u4-s3"
    },
    {
        "q": "The artificial sweetener ____ triggers a massive insulin surge and fatal hypoglycemia in dogs.",
        "a": ["xylitol"],
        "a_display": "Xylitol",
        "e": "Xylitol stimulates rapid canine pancreatic insulin release, dropping blood glucose to lethal levels.",
        "topicId": "u4-t14",
        "diff": 1,
        "subSection": "u4-s3"
    },
    {
        "q": "Growing puppies require approximately 26 to ____% Crude Protein in their diet.",
        "a": ["28", "28%"],
        "a_display": "28%",
        "e": "Puppy growth diets require 26-28% CP to support rapid skeletal and muscle development.",
        "topicId": "u4-t14",
        "diff": 1,
        "subSection": "u4-s3"
    },
    {
        "q": "Rabbits re-ingest soft night fecal pellets produced in the cecum, a process called ____.",
        "a": ["cecotrophy", "caecotrophy", "pseudorumination"],
        "a_display": "Cecotrophy",
        "e": "Cecotrophy allows rabbits to digest microbial protein and absorb B vitamins synthesized in the cecum.",
        "topicId": "u4-t13",
        "diff": 1,
        "subSection": "u4-s3"
    },
    {
        "q": "Guinea pigs have an absolute dietary requirement for Vitamin ____ because they lack L-gulonolactone oxidase.",
        "a": ["c", "vitamin c", "ascorbic acid"],
        "a_display": "Vitamin C (Ascorbic Acid)",
        "e": "Like humans, guinea pigs cannot synthesize ascorbic acid and develop scurvy without dietary intake.",
        "topicId": "u4-t12",
        "diff": 1,
        "subSection": "u4-s3"
    },
    {
        "q": "Feeding boneless lean meat to captive lions causes an inverted Ca:P ratio and nutritional secondary ____.",
        "a": ["hyperparathyroidism"],
        "a_display": "Hyperparathyroidism",
        "e": "Boneless meat contains high P and almost no Ca; parathyroid hormone resorbs bone, causing pathological fractures.",
        "topicId": "u4-t16",
        "diff": 2,
        "subSection": "u4-s3"
    },
    {
        "q": "All captive anthropoid primates lack the enzyme required to synthesize Vitamin ____.",
        "a": ["c", "vitamin c"],
        "a_display": "Vitamin C",
        "e": "Primates require fresh dietary sources of ascorbic acid daily to prevent scurvy.",
        "topicId": "u4-t16",
        "diff": 1,
        "subSection": "u4-s3"
    },
    {
        "q": "Sudden anorexia in obese cats can cause fatal feline hepatic ____ (fatty liver).",
        "a": ["lipidosis"],
        "a_display": "Lipidosis",
        "e": "Starvation in fat cats floods the liver with non-esterified fatty acids, leading to hepatic failure.",
        "topicId": "u4-t15",
        "diff": 1,
        "subSection": "u4-s3"
    }
]

def get_data():
    return {
        "mcq": mcq,
        "tf": tf,
        "fib": fib
    }
