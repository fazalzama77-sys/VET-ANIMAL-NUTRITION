# -*- coding: utf-8 -*-
"""
Unit 3 Question Bank: Applied Ruminant Nutrition-II
Strict 2:1:1 ratio: 90 MCQs, 45 True/False, 45 Fill in the Blanks (Total = 180)
Sub-sections:
  u3-s1: Dairy Cattle & Buffalo Nutrition (34 MCQ, 17 TF, 17 FIB = 68)
  u3-s2: Sheep, Goat & Draft Animal Nutrition (26 MCQ, 13 TF, 13 FIB = 52)
  u3-s3: Bypass Nutrients, NPN & Metabolic Disorders (30 MCQ, 15 TF, 15 FIB = 60)
"""

mcq = [
    # --- u3-s1: Dairy Cattle & Buffalo Nutrition (34 MCQs) ---
    {
        "q": "What is the Gaines formula for calculating 4% Fat Corrected Milk (4% FCM) in dairy cattle?",
        "o": ["0.4 x Milk (kg) + 15 x Fat (kg)", "0.5 x Milk (kg) + 10 x Fat (kg)", "0.15 x Milk (kg) + 0.4 x Fat (kg)", "Milk (kg) x Fat % x 0.04"],
        "a": 0,
        "e": "Gaines formula: 4% FCM = 0.4 x M + 15 x F (where M is milk yield in kg and F is total fat yield in kg = M x Fat%/100).",
        "topicId": "u3-t04",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "A crossbred cow yields 20 kg of milk containing 4.5% butterfat. What is its 4% Fat Corrected Milk yield?",
        "o": ["21.5 kg", "20.0 kg", "24.0 kg", "18.5 kg"],
        "a": 0,
        "e": "Fat (kg) = 20 x 0.045 = 0.90 kg. 4% FCM = (0.4 x 20) + (15 x 0.90) = 8.0 + 13.5 = 21.5 kg.",
        "topicId": "u3-t04",
        "diff": 2,
        "subSection": "u3-s1"
    },
    {
        "q": "How does the nutrient requirement per kilogram of milk compare between an indigenous Murrah buffalo (7.0% fat) and a crossbred cow (4.0% fat)?",
        "o": ["Buffalo requires ~20-25% more TDN and DCP per kg of milk due to higher solids and fat density", "Buffalo requires less energy per kg milk", "Requirements per kg of milk are identical regardless of fat percentage", "Buffalo requires zero protein for milk synthesis"],
        "a": 0,
        "e": "Buffalo milk contains 7-8% fat and ~4% protein, requiring approximately 0.42-0.45 kg TDN and 60-65 g DCP per kg milk versus 0.32 kg TDN and 45-50 g DCP in cattle.",
        "topicId": "u3-t04",
        "diff": 2,
        "subSection": "u3-s1"
    },
    {
        "q": "What is the recommended rule of thumb for concentrate feeding in lactating indigenous dairy cattle producing 4.0% fat milk under Indian conditions?",
        "o": ["1 kg concentrate mixture for every 2.5 to 3.0 kg of milk produced", "1 kg concentrate for every 1.0 kg of milk produced", "1 kg concentrate for every 10 kg of milk produced", "Concentrates are not fed during lactation"],
        "a": 0,
        "e": "Under Indian feeding standards, cows receive maintenance feed plus 1 kg concentrate for every 2.5 to 3.0 kg milk (cows) or 1 kg per 2.0 to 2.5 kg milk (buffaloes).",
        "topicId": "u3-t04",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "Within how many hours of birth must a newborn calf receive its first feeding of maternal colostrum to ensure maximal passive immunoglobulin transfer?",
        "o": ["Within the first 2 hours (and definitely within 6 hours)", "After 24 to 48 hours", "Only on the third day after birth", "After the rumen has developed"],
        "a": 0,
        "e": "Intestinal enterocytes absorb intact immunoglobulins (IgG, IgA, IgM) via pinocytosis only during the first hours; gut closure is virtually complete by 24 hours.",
        "topicId": "u3-t08",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "What is the total quantity of colostrum that should be fed to a newborn dairy calf on its first day of life?",
        "o": ["10% of body weight (split into 2 to 3 feedings)", "25% of body weight in a single feeding", "1% of body weight", "A uniform 1 liter regardless of weight"],
        "a": 0,
        "e": "A 30-kg calf should receive 10% of its body weight (3.0 kg or liters) of clean, warm colostrum within the first 24 hours (half within the first 2-4 hours).",
        "topicId": "u3-t08",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "Why does maternal bovine colostrum contain high concentrations of a specific trypsin inhibitor?",
        "o": ["To prevent proteolytic destruction of immunoglobulins by neonatal abomasal and pancreatic proteases", "To inhibit microbial curd formation", "To cause diarrhea and purge meconium", "To stimulate gastric acid production"],
        "a": 0,
        "e": "Colostral trypsin inhibitor protects maternal IgG antibodies from enzymatic cleavage, enabling them to be absorbed intact across neonatal enterocytes.",
        "topicId": "u3-t08",
        "diff": 2,
        "subSection": "u3-s1"
    },
    {
        "q": "The primary chemical stimulus that drives the anatomical and metabolic development of ruminal mucosal papillae in young calves is:",
        "o": ["Butyrate and propionate from anaerobic fermentation of calf starter grains", "Lactose absorbed from whole milk", "Coarse unground paddy straw fiber", "Water consumed from buckets"],
        "a": 0,
        "e": "Volatile fatty acids, especially butyrate and propionate from fermentable grains in calf starter, provide oxidative fuel and stimulate mitotic mucosal growth.",
        "topicId": "u3-t08",
        "diff": 2,
        "subSection": "u3-s1"
    },
    {
        "q": "What are the recommended specifications for a high-quality Calf Starter concentrate fed from 2 weeks of age?",
        "o": ["20 to 22% Crude Protein and 75 to 80% TDN", "10% Crude Protein and 50% TDN", "35% Crude Protein and 60% TDN", "14% Crude Protein and 90% TDN"],
        "a": 0,
        "e": "Calf starter must be nutrient-dense, highly palatable, and easily digestible, containing 20-22% CP and 75-80% TDN to stimulate early rumen development.",
        "topicId": "u3-t08",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "Calves can be safely weaned off liquid whole milk or milk replacer when their daily calf starter intake reaches:",
        "o": ["750 g to 1.0 kg per day for three consecutive days", "100 g per day", "3.0 kg per day", "Starter intake is irrelevant for weaning"],
        "a": 0,
        "e": "Consistently consuming 750 g to 1.0 kg of dry calf starter daily confirms that the calf's rumen is functionally developed to sustain growth without milk.",
        "topicId": "u3-t08",
        "diff": 2,
        "subSection": "u3-s1"
    },
    {
        "q": "What is the target Average Daily Gain (ADG) for growing crossbred dairy heifers to achieve puberty and first calving by 24 to 30 months of age?",
        "o": ["500 to 600 g/day", "100 to 150 g/day", "1.2 to 1.5 kg/day", "50 g/day"],
        "a": 0,
        "e": "An ADG of 550-600 g/day ensures heifers reach the breeding weight of 250-280 kg by 15-18 months without fatty infiltration of the mammary parenchyma.",
        "topicId": "u3-t09",
        "diff": 2,
        "subSection": "u3-s1"
    },
    {
        "q": "What metabolic hazard occurs if growing dairy heifers are overfed high-energy concentrate diets resulting in ADG > 800-900 g/day prior to puberty?",
        "o": ["Excessive fat deposition in the mammary secretory parenchyma, permanently reducing lifetime milk yield", "Rupture of the abomasum", "Permanent cessation of estrous cycles", "Immediate milk fever"],
        "a": 0,
        "e": "Rapid pre-pubertal weight gain causes extensive adiposity within the mammary gland, replacing milk-secretory epithelial ductal tissue with adipose tissue.",
        "topicId": "u3-t09",
        "diff": 2,
        "subSection": "u3-s1"
    },
    {
        "q": "During which phase of pregnancy does fetal nutrient demand increase dramatically, requiring an extra pregnancy allowance of concentrate in cows?",
        "o": ["Last 2 to 2.5 months (last trimester) of gestation", "First 30 days after conception", "Second trimester (months 3 to 5)", "Energy requirements remain unchanged throughout gestation"],
        "a": 0,
        "e": "Approximately 60-70% of fetal growth occurs in the final 60 days of gestation; cows require an extra 1.0 to 1.5 kg concentrate above maintenance.",
        "topicId": "u3-t03",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "The 'Transition Period' in dairy cattle nutrition is critically defined as:",
        "o": ["3 weeks before calving to 3 weeks after calving", "The day of calving only", "From weaning until 6 months of age", "The dry period of 60 days"],
        "a": 0,
        "e": "The transition period (21 days pre-calving to 21 days post-calving) is the highest-risk metabolic window characterized by endocrine shifts, immune depression, and NEB.",
        "topicId": "u3-t10",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "Negative Energy Balance (NEB) in early lactating high-yielding dairy cows occurs primarily because:",
        "o": ["Peak milk production is reached at 4 to 6 weeks, while peak dry matter intake lags behind until 8 to 10 weeks postpartum", "The cow refuses to drink water", "Concentrate feeds are toxic to fresh cows", "Ruminal digestion ceases after parturition"],
        "a": 0,
        "e": "Milk energy output surges rapidly while physical dry matter intake capacity recovers slowly, forcing massive mobilization of non-esterified fatty acids from adipose tissue.",
        "topicId": "u3-t10",
        "diff": 2,
        "subSection": "u3-s1"
    },
    {
        "q": "What is the recommended ideal Body Condition Score (BCS on a 1 to 5 scale) for dairy cows at the time of calving?",
        "o": ["3.25 to 3.50", "1.50 to 2.00 (Thin)", "4.50 to 5.00 (Obese)", "1.00 (Emaciated)"],
        "a": 0,
        "e": "A calving BCS of 3.25-3.5 provides adequate body reserves to buffer early lactation NEB without predisposing the cow to fatty liver, ketosis, or dystocia.",
        "topicId": "u3-t10",
        "diff": 2,
        "subSection": "u3-s1"
    },
    {
        "q": "What is the standard recommended length of the dry period for high-yielding dairy cattle?",
        "o": ["60 days (8 weeks)", "10 days", "180 days", "0 days (continuous milking)"],
        "a": 0,
        "e": "A 60-day dry period allows complete mammary epithelial involution and regeneration, replenishes liver glycogen and skeletal calcium, and optimizes next lactation yield.",
        "topicId": "u3-t10",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "In high-yielding dairy management, 'Challenge Feeding' (Lead Feeding) involves:",
        "o": ["Gradually increasing concentrate allowance starting 2 weeks before calving until the cow reaches peak lactation yield", "Feeding cows once every 48 hours to challenge their endurance", "Challenging cows with high concentrations of dietary urea", "Restricting water intake to test renal concentration"],
        "a": 0,
        "e": "Starting 2 weeks pre-partum, concentrate is stepped up by 0.5 kg/day to adapt the rumen and challenge the cow to express her full genetic milk production potential.",
        "topicId": "u3-t14",
        "diff": 2,
        "subSection": "u3-s1"
    },
    {
        "q": "What is a Total Mixed Ration (TMR) in modern dairy cattle feeding?",
        "o": ["A homogeneous blend of all forages, concentrates, minerals, and vitamins thoroughly mixed to prevent selective sorting", "Feeding roughage in the morning and concentrate at night", "Feeding whole grain kernels directly in the milking parlour", "A liquid slurry of molasses and urea"],
        "a": 0,
        "e": "TMR ensures that every mouthful contains a balanced proportion of roughage and concentrate, maintaining steady ruminal pH and preventing slug-feeding.",
        "topicId": "u3-t14",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "What is the recommended inclusion rate of sodium bicarbonate (NaHCO3) buffer in the total dry matter intake of high-yielding dairy cows fed high-concentrate rations?",
        "o": ["0.75 to 1.0% of total diet DM", "5.0% of diet DM", "0.01% of diet DM", "10.0% of diet DM"],
        "a": 0,
        "e": "Adding 0.75-1.0% sodium bicarbonate (or 150-250 g/day) buffers ruminal fluid, prevents SARA, and promotes acetate production for milk fat synthesis.",
        "topicId": "u3-t14",
        "diff": 2,
        "subSection": "u3-s1"
    },
    {
        "q": "For every 1 kg increase in 4% FCM yield in dairy cows, how much additional drinking water is typically consumed?",
        "o": ["3.0 to 4.0 liters", "0.5 liters", "15.0 liters", "Zero extra water"],
        "a": 0,
        "e": "Because milk contains 87% water and metabolic expenditure increases, cows drink 3 to 4 liters of water for each additional kilogram of milk produced.",
        "topicId": "u3-t04",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "The primary source of energy utilized for muscular work in draft bullocks during normal field plowing is:",
        "o": ["Volatile fatty acids (acetate) and long-chain fatty acids", "Solely blood lactic acid", "Pure dietary protein", "Creatine phosphate only"],
        "a": 0,
        "e": "Aerobic muscular contraction in draft bullocks utilizes circulating acetate and mobilized fatty acids as the primary oxidative substrates.",
        "topicId": "u3-t06",
        "diff": 2,
        "subSection": "u3-s1"
    },
    {
        "q": "How does normal draft work (4 to 6 hours of light to medium plowing) affect the maintenance energy requirement of working bullocks?",
        "o": ["Increases energy requirement by 30 to 50% over baseline maintenance", "Increases energy requirement by 500%", "Does not change energy requirements", "Halves the energy requirement"],
        "a": 0,
        "e": "Four to six hours of draft work increases energy needs by 30-50% over maintenance, supplied by an extra 1.5 to 2.0 kg of concentrate mixture.",
        "topicId": "u3-t06",
        "diff": 2,
        "subSection": "u3-s1"
    },
    {
        "q": "Do working draft bullocks require substantial increases in dietary Crude Protein percentage above maintenance during normal work?",
        "o": ["No, work increases energy (TDN) demand substantially, but protein requirements increase only marginally for minor muscle tissue repair", "Yes, their diet must contain 40% crude protein", "Yes, protein must replace all roughage", "No, protein intake should be reduced to zero"],
        "a": 0,
        "e": "Muscular work does not consume muscle protein as fuel if energy is adequate; only small allowances are needed to repair incidental cellular wear-and-tear.",
        "topicId": "u3-t06",
        "diff": 2,
        "subSection": "u3-s1"
    },
    {
        "q": "Adult breeding bulls during active semen collection seasons require an extra allowance of concentrate primarily to:",
        "o": ["Maintain optimal body condition, libido, and support active spermatogenesis without inducing obesity", "Increase body fat to maximum possible thickness", "Induce ruminal ketosis", "Eliminate sperm motility"],
        "a": 0,
        "e": "Breeding bulls should be fed maintenance plus 1.0 to 1.5 kg concentrate, avoiding obesity which causes lethargy, leg weakness, and declining semen quality.",
        "topicId": "u3-t11",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "Which fat-soluble vitamin and trace mineral are especially critical for maintaining testicular germinal epithelium and semen quality in breeding bulls?",
        "o": ["Vitamin A and Zinc", "Vitamin K and Iron", "Vitamin D and Fluorine", "Vitamin C and Molybdenum"],
        "a": 0,
        "e": "Vitamin A is essential for spermatogenesis, while zinc is required for steroidogenesis, sperm membrane integrity, and semen motility.",
        "topicId": "u3-t11",
        "diff": 2,
        "subSection": "u3-s1"
    },
    {
        "q": "What is the recommended Dry Matter Intake for an adult dairy cow fed according to ICAR feeding standards?",
        "o": ["2.0 to 2.5 kg DM/100 kg BW for zebu, and 2.5 to 3.0 kg DM/100 kg BW for crossbred cows", "5.0 kg DM/100 kg BW", "1.0 kg DM/100 kg BW", "7.0 kg DM/100 kg BW"],
        "a": 0,
        "e": "Zebu cows consume 2.0-2.5% BW, while crossbreds consume 2.5-3.0% (and up to 3.5% in high peak lactation).",
        "topicId": "u3-t01",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "Why is milk fat depression (MFD) in dairy cows frequently accompanied by an increase in body weight gain or fattening?",
        "o": ["High propionate stimulates insulin, driving circulating acetate and glucose into adipose tissue rather than the mammary gland", "The cow stops producing milk lactose", "Excessive fat is lost in feces", "Blood cortisol levels drop to zero"],
        "a": 0,
        "e": "Elevated propionate stimulates systemic insulin release, which partitions acetate and fatty acids into subcutaneous adipose storage instead of milk fat.",
        "topicId": "u3-t14",
        "diff": 3,
        "subSection": "u3-s1"
    },
    {
        "q": "In dairy nutrition, physically effective NDF (peNDF) is measured in the field using which diagnostic tool?",
        "o": ["Penn State Particle Size Separator (PSPS)", "Soxhlet ether extraction mantle", "Kjeldahl digestion flask", "Bomb calorimeter"],
        "a": 0,
        "e": "The Penn State Particle Separator uses 19 mm, 8 mm, and 4 mm sieves and a bottom pan to quantify the proportion of forage particles that stimulate cud chewing.",
        "topicId": "u3-t14",
        "diff": 2,
        "subSection": "u3-s1"
    },
    {
        "q": "To prevent milk fat depression in cows on high-concentrate rations, what minimum proportion of the diet dry matter should consist of long coarse forage?",
        "o": ["At least 40 to 50% of diet DM", "Less than 10%", "95%", "0%"],
        "a": 0,
        "e": "Maintaining at least 40-50% roughage on a dry matter basis ensures a stable ruminal mat and maintains ruminal acetate:propionate ratio above 2.2:1.",
        "topicId": "u3-t14",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "What is the calcium and phosphorus content of normal cow colostrum compared to mature cow milk?",
        "o": ["Colostrum contains roughly 2 to 3 times more Ca and P than mature milk", "Colostrum contains zero Ca and P", "Colostrum contains 10 times less Ca than milk", "Colostrum contains pure iron and no calcium"],
        "a": 0,
        "e": "Colostrum contains ~2.6 g Ca and ~2.4 g P per liter compared to ~1.2 g Ca and ~0.9 g P per liter in normal mature milk.",
        "topicId": "u3-t08",
        "diff": 2,
        "subSection": "u3-s1"
    },
    {
        "q": "When early weaning of calves is practiced at 8 to 12 weeks of age, the feeding program relies primarily on:",
        "o": ["Ad libitum access to high-protein calf starter, clean water, and small quantities of fine leafy legume hay", "Feeding wheat straw only", "Feeding large volumes of skim milk until 6 months", "Feeding urea-molasses blocks"],
        "a": 0,
        "e": "Early weaning relies on stimulating rapid ruminal papillae development via ad libitum calf starter grain intake from 2 weeks of age onwards.",
        "topicId": "u3-t08",
        "diff": 2,
        "subSection": "u3-s1"
    },
    {
        "q": "What is the average Dry Matter content of fresh colostrum on the first day postpartum in dairy cows?",
        "o": ["24 to 27%", "12 to 13%", "5%", "50%"],
        "a": 0,
        "e": "First-milking colostrum is highly concentrated, containing 24-27% total solids (largely immunoglobulins and caseins) compared to 12.5% in mature milk.",
        "topicId": "u3-t08",
        "diff": 2,
        "subSection": "u3-s1"
    },
    {
        "q": "Which dietary management practice minimizes the severity of negative energy balance in fresh high-producing dairy cows?",
        "o": ["Increasing energy density using bypass fat and high-quality digestible forage without overloading with rapidly fermentable starch", "Feeding low-quality paddy straw ad libitum", "Starving the cow for 3 days postpartum", "Restricting drinking water"],
        "a": 0,
        "e": "Feeding rumen-inert bypass fat (calcium soaps) elevates caloric density without causing rumen acidosis or depressing cellulolytic digestion.",
        "topicId": "u3-t14",
        "diff": 2,
        "subSection": "u3-s1"
    },

    # --- u3-s2: Sheep, Goat & Draft Animal Nutrition (26 MCQs) ---
    {
        "q": "What is the nutritional practice of 'Flushing' in breeding ewes and does?",
        "o": ["Increasing energy and protein intake 2 to 3 weeks prior to mating to elevate ovulation rate and twinning frequency", "Flushing the uterus with warm saline", "Washing the digestive tract with mineral oil", "Restricting feed to induce estrus"],
        "a": 0,
        "e": "Feeding an extra 250-400 g of cereal grains 2-3 weeks before breeding improves body condition and increases ovulation rate by 10 to 20%.",
        "topicId": "u3-t12",
        "diff": 1,
        "subSection": "u3-s2"
    },
    {
        "q": "Why is Pregnancy Toxaemia (Twin Lamb Disease) most prevalent in ewes carrying twin or triplet fetuses during the last 4 weeks of gestation?",
        "o": ["Multiple fetuses exert huge glucose demands while their physical volume compresses the rumen, restricting dry matter intake", "Fetal lambs secrete toxic ketones into maternal blood", "Ewes stop drinking water during twins", "Ewes cannot digest dietary proteins"],
        "a": 0,
        "e": "Twin fetuses demand up to 40% of maternal glucose; expanding uteruses compress the rumen, leading to severe hypoglycemic ketosis and hepatic lipidosis.",
        "topicId": "u3-t12",
        "diff": 2,
        "subSection": "u3-s2"
    },
    {
        "q": "What is the voluntary daily Dry Matter Intake capacity of adult domestic goats (Capra hircus) expressed as a percentage of body weight?",
        "o": ["3.0 to 4.0% of body weight (and up to 5% in high milkers)", "1.0% of body weight", "7.0 to 8.0% of body weight", "Identical to large cattle at 1.5%"],
        "a": 0,
        "e": "Goats have a higher metabolic rate per unit body mass and consume 3 to 4% (up to 5% in lactating Jamunapari/Beetal) of their body weight in dry matter daily.",
        "topicId": "u3-t13",
        "diff": 1,
        "subSection": "u3-s2"
    },
    {
        "q": "How does the anatomical feeding behavior of goats differ distinctively from that of sheep and cattle?",
        "o": ["Goats are natural browsers with prehensile, mobile lips and bipedal stance, preferentially consuming tree leaves and shrubs", "Goats graze uniformly close to the ground like sheep", "Goats cannot digest green leaves", "Goats swallow unchewed whole fodder without chewing cud"],
        "a": 0,
        "e": "Goats exhibit agile bipedal browsing behavior, selecting protein-rich top foliage, twigs, and bark using their flexible, sensitive prehensile upper lip.",
        "topicId": "u3-t13",
        "diff": 1,
        "subSection": "u3-s2"
    },
    {
        "q": "Why can goats tolerate higher dietary concentrations of plant tannins in browse foliage compared to sheep and cattle?",
        "o": ["Caprine saliva contains abundant proline-rich proteins that bind and neutralize tannins", "Goats possess a specialized tannin-destroying gallbladder", "Goat rumen contains zero anaerobic bacteria", "Tannins are digested as pure carbohydrates in goats"],
        "a": 0,
        "e": "Goat parotid saliva is rich in proline-rich proteins that have an affinity for polyphenols, forming stable complexes that spare dietary protein from binding.",
        "topicId": "u3-t13",
        "diff": 2,
        "subSection": "u3-s2"
    },
    {
        "q": "What is 'Creep Feeding' in young lambs and kids?",
        "o": ["Providing a palatable, nutrient-dense concentrate in an enclosure accessible only to suckling young and excluding adult dams", "Feeding animals during the dark hours of the night", "Feeding lambs while they are creeping on the floor", "Force-feeding liquid milk replacer via a stomach tube"],
        "a": 0,
        "e": "A creep gate allows small lambs to enter a private pen to consume high-protein starter feed, accelerating pre-weaning ADG and easing weaning stress.",
        "topicId": "u3-t12",
        "diff": 1,
        "subSection": "u3-s2"
    },
    {
        "q": "Wool fibers are composed almost entirely of which structural sulfur-rich protein?",
        "o": ["Keratin", "Collagen", "Elastin", "Fibroin"],
        "a": 0,
        "e": "Wool is pure keratin containing 3 to 4% sulfur, largely in the form of the sulfur-containing amino acid cystine.",
        "topicId": "u3-t05",
        "diff": 1,
        "subSection": "u3-s2"
    },
    {
        "q": "Which dietary amino acids are most critical for wool growth, follicle development, and fleece yield in sheep?",
        "o": ["Methionine and Cysteine", "Glycine and Alanine", "Lysine and Tryptophan", "Phenylalanine and Tyrosine"],
        "a": 0,
        "e": "Methionine provides sulfur and methyl groups; cystine forms disulfide bridges that give wool fiber its elasticity, tensile strength, and crimp.",
        "topicId": "u3-t05",
        "diff": 1,
        "subSection": "u3-s2"
    },
    {
        "q": "A deficiency of which trace mineral in sheep impairs keratin cross-linking, producing un-crimped, straight, lusterless 'Steely' or 'Stringy' wool?",
        "o": ["Copper", "Manganese", "Iodine", "Cobalt"],
        "a": 0,
        "e": "Copper is the cofactor for thiol oxidase, which converts cysteine sulfhydryl (-SH) groups into cystine disulfide (-S-S-) crosslinks responsible for crimp.",
        "topicId": "u3-t05",
        "diff": 2,
        "subSection": "u3-s2"
    },
    {
        "q": "Why are sheep extraordinarily susceptible to chronic Copper Toxicity compared to cattle?",
        "o": ["Ovine hepatocytes accumulate copper avidly and release it slowly into bile, causing sudden massive hemolytic crisis", "Sheep do not have a spleen", "Sheep lack erythrocytes", "Copper binds irreversible to ovine insulin"],
        "a": 0,
        "e": "Sheep store excess Cu in liver cells; upon stress, copper floods circulation, causing acute intravascular hemolysis, hemoglobinuria, jaundice, and 'gunmetal' kidneys.",
        "topicId": "u3-t12",
        "diff": 2,
        "subSection": "u3-s2"
    },
    {
        "q": "What is the maximum safe dietary tolerance level of Copper in sheep diets?",
        "o": ["10 to 15 ppm (mg/kg DM)", "100 ppm", "250 ppm", "500 ppm"],
        "a": 0,
        "e": "Dietary copper exceeding 15-20 ppm can cause fatal chronic copper poisoning in sheep, especially when molybdenum and sulfur levels are low.",
        "topicId": "u3-t12",
        "diff": 2,
        "subSection": "u3-s2"
    },
    {
        "q": "Which dietary ratio of Calcium to Phosphorus (Ca:P) must be maintained in feedlot rams and wethers to prevent obstructive urolithiasis (water belly)?",
        "o": ["At least 2 : 1 (or 2.5 : 1)", "1 : 2 (High Phosphorus)", "1 : 1", "0.5 : 1"],
        "a": 0,
        "e": "High-concentrate grain diets contain excess P and low Ca, promoting struvite (magnesium ammonium phosphate) calculus formation; a 2:1 Ca:P ratio prevents calculi.",
        "topicId": "u3-t12",
        "diff": 2,
        "subSection": "u3-s2"
    },
    {
        "q": "Which chemical urinary acidifier is routinely supplemented at 0.5% in the diet of male sheep and goats to prevent struvite urinary calculi?",
        "o": ["Ammonium chloride (NH4Cl)", "Sodium bicarbonate", "Calcium hydroxide", "Potassium carbonate"],
        "a": 0,
        "e": "Ammonium chloride acidifies urine (pH < 6.5), increasing the solubility of magnesium ammonium phosphate crystals and preventing urethral blockage.",
        "topicId": "u3-t12",
        "diff": 2,
        "subSection": "u3-s2"
    },
    {
        "q": "Enterotoxemia (Pulpy Kidney Disease) in rapidly growing feedlot lambs is provoked by which nutritional circumstance?",
        "o": ["Sudden engorgement with high-starch concentrate feeds causing proliferation of Clostridium perfringens Type D", "Chronic starvation on dry straw", "Deficiency of dietary cobalt", "Over-consumption of common salt"],
        "a": 0,
        "e": "Excess starch escaping ruminal fermentation reaches the small intestine, triggering explosive multiplication of Clostridium perfringens Type D and epsilon toxin release.",
        "topicId": "u3-t12",
        "diff": 2,
        "subSection": "u3-s2"
    },
    {
        "q": "What is the primary roughage feeding strategy for goats in intensive stall-fed (zero-grazing) systems in India?",
        "o": ["Providing cut cultivated fodder and tree loppings (Subabul, Neem, Ardu, Mulberry) hanging in racks to satisfy browsing instincts", "Spreading crushed grains flat on the wet ground", "Feeding whole uncut paddy straw exclusively", "Allowing goats to graze in flooded paddy fields"],
        "a": 0,
        "e": "Hanging tree loppings in elevated racks mimics bipedal browsing behavior, reduces feed wastage and fecal contamination, and satisfies caprine feeding instincts.",
        "topicId": "u3-t13",
        "diff": 1,
        "subSection": "u3-s2"
    },
    {
        "q": "The daily concentrate supplement recommended for an indigenous draft bullock performing 4 hours of normal field work is approximately:",
        "o": ["1.5 to 2.0 kg concentrate above maintenance", "10 kg concentrate", "0 kg (straw only)", "6.0 kg concentrate"],
        "a": 0,
        "e": "Normal field work requires roughly 1.5-2.0 kg concentrate mixture (containing ~20% CP and 70% TDN) added to the baseline roughage maintenance ration.",
        "topicId": "u3-t06",
        "diff": 1,
        "subSection": "u3-s2"
    },
    {
        "q": "For draft animals working in hot tropical Indian summers, which dietary supplement is mandatory to compensate for heavy cutaneous sweat losses?",
        "o": ["Common Salt (NaCl) at 50 to 100 g daily", "Urea at 500 g daily", "Sulfur powder at 200 g daily", "Bile salts"],
        "a": 0,
        "e": "Working cattle sweat profusely to dissipate metabolic heat, losing significant sodium and chloride which must be replaced via daily salt supplementation.",
        "topicId": "u3-t06",
        "diff": 1,
        "subSection": "u3-s2"
    },
    {
        "q": "In sheep, what is the impact of severe energy undernutrition during the middle third of gestation (days 50 to 100)?",
        "o": ["Retarded placental development and restricted secondary wool follicle initiation in the fetus", "Instant death of the dam", "Immediate onset of milk fever", "Excessive wool growth in the ewe"],
        "a": 0,
        "e": "Placental growth peaks between days 50-90; undernutrition restricts cotyledonary development and permanently impairs secondary wool follicle formation in the lamb.",
        "topicId": "u3-t12",
        "diff": 3,
        "subSection": "u3-s2"
    },
    {
        "q": "What is the typical birth weight of an indigenous Marwari or Muzaffarnagri lamb in India?",
        "o": ["2.5 to 3.5 kg", "0.5 kg", "8.0 to 10.0 kg", "15.0 kg"],
        "a": 0,
        "e": "Normal birth weights for indigenous Indian sheep breeds range from 2.5 to 3.5 kg, depending on breed, maternal nutrition, and litter size.",
        "topicId": "u3-t12",
        "diff": 2,
        "subSection": "u3-s2"
    },
    {
        "q": "Goats fed high-fiber diets show superior retention of nitrogen compared to cattle primarily because:",
        "o": ["They recycle higher proportions of blood urea into saliva and directly across the rumen wall", "They possess two extra digestive stomachs", "They excrete zero nitrogen in urine", "Their liver does not synthesize urea"],
        "a": 0,
        "e": "Goats possess highly efficient renal urea conservation mechanisms and recycle copious urea to the rumen via saliva, optimizing low-protein browse utilization.",
        "topicId": "u3-t13",
        "diff": 2,
        "subSection": "u3-s2"
    },
    {
        "q": "What is the average milk fat percentage in Jamunapari and Beetal dairy goat milk under good nutritional management?",
        "o": ["4.0 to 4.5%", "10.0%", "1.5%", "8.0%"],
        "a": 0,
        "e": "Indian dairy goat breeds yield milk with an average of 4.0 to 4.5% fat, characterized by smaller fat globules that make it easily digestible.",
        "topicId": "u3-t13",
        "diff": 1,
        "subSection": "u3-s2"
    },
    {
        "q": "Why should high-producing dairy goats be fed their concentrate mixture in two divided meals rather than a single large meal?",
        "o": ["To prevent acute ruminal acidosis and maintain stable cellulolytic fermentation", "Because goats cannot swallow more than 100 g of feed at once", "To induce ruminal bloat", "To ensure milk fat drops to zero"],
        "a": 0,
        "e": "Dividing concentrate into morning and evening feedings prevents postprandial ruminal pH crashes and supports steady ruminal fermentation.",
        "topicId": "u3-t13",
        "diff": 1,
        "subSection": "u3-s2"
    },
    {
        "q": "What is the normal water consumption of an adult sheep grazing dry rangelands under ambient temperatures of 30 to 35°C?",
        "o": ["3 to 5 liters per day", "15 to 20 liters per day", "0.2 liters per day", "30 liters per day"],
        "a": 0,
        "e": "Adult sheep consume approximately 3 to 5 liters of water daily under warm conditions, increasing to 6-8 liters during late lactation.",
        "topicId": "u3-t12",
        "diff": 1,
        "subSection": "u3-s2"
    },
    {
        "q": "In fattening lambs, what is the primary objective of a 10-day step-up adaptation period when switching from grazing to a feedlot finishing ration?",
        "o": ["Gradual transition from high roughage to high grain to prevent acute lactic acidosis and enterotoxemia", "To induce rapid diarrhea to eliminate parasites", "To allow wool shearing before feeding", "To reduce body weight"],
        "a": 0,
        "e": "Step-up feeding allows ruminal lactate-utilizing bacteria (Megasphaera elsdenii) to multiply, preventing toxic lactic acid accumulation.",
        "topicId": "u3-t12",
        "diff": 2,
        "subSection": "u3-s2"
    },
    {
        "q": "Draft bullocks subjected to heavy road transport work on paved roads experience increased wear on hooves, requiring dietary adequacy of which nutrient for keratin strength?",
        "o": ["Biotin and Zinc", "Fluorine and Iron", "Vitamin C and Potassium", "Cobalt and Molybdenum"],
        "a": 0,
        "e": "Biotin acts as a cofactor in epidermal keratinization, and zinc is required for protein synthesis; both prevent hoof cracking and sole bruising in working bullocks.",
        "topicId": "u3-t06",
        "diff": 2,
        "subSection": "u3-s2"
    },
    {
        "q": "Feeding sweet potato vines or cowpea fodder to lactating goats serves as an excellent source of:",
        "o": ["Highly digestible crude protein and carotene (Vitamin A precursor)", "Pure indigestible silica", "Toxic gossypol", "Unsaturated fat exclusively"],
        "a": 0,
        "e": "Leguminous cowpea and sweet potato forages provide 14-18% CP and high beta-carotene, significantly boosting milk yield in stall-fed goats.",
        "topicId": "u3-t13",
        "diff": 1,
        "subSection": "u3-s2"
    },

    # --- u3-s3: Bypass Nutrients, NPN & Metabolic Disorders (30 MCQs) ---
    {
        "q": "What is the maximum recommended dietary inclusion limit for feed-grade urea in adult ruminants?",
        "o": ["Not more than 1% of total diet DM (or 3% of concentrate mixture, or 1/3rd of total dietary nitrogen)", "10% of total diet DM", "5% of concentrate mixture", "Urea can replace 100% of diet protein"],
        "a": 0,
        "e": "The classic 1-3-1/3rd rule limits urea to 1% of total diet dry matter, 3% of concentrate mixture, or not more than 33% (1/3rd) of total dietary nitrogen.",
        "topicId": "u3-t16",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "Which enzyme synthesized by ruminal bacteria hydrolyzes dietary urea rapidly into ammonia and carbon dioxide?",
        "o": ["Urease", "Protease", "Cellulase", "Amylase"],
        "a": 0,
        "e": "Bacterial urease operates at a velocity roughly four times faster than microbial assimilation, rapidly cleaving urea: CO(NH2)2 + H2O -> 2 NH3 + CO2.",
        "topicId": "u3-t16",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "For optimal microbial utilization of non-protein nitrogen (urea) in the rumen, which dietary component is an absolute prerequisite?",
        "o": ["Readily available soluble carbohydrates (starch or molasses) to supply simultaneous ATP and carbon skeletons", "High concentrations of dietary true protein", "Large amounts of indigestible lignin", "Cold drinking water"],
        "a": 0,
        "e": "Rapidly released ruminal ammonia can only be captured into microbial amino acids if alpha-keto acids (from starch/molasses fermentation) and ATP are available simultaneously.",
        "topicId": "u3-t16",
        "diff": 2,
        "subSection": "u3-s3"
    },
    {
        "q": "Urea toxicity in cattle occurs when ruminal ammonia production exceeds the liver's capacity to convert ammonia into urea via:",
        "o": ["The Hepatic Urea (Ornithine) Cycle", "The Citric Acid Cycle", "The Cori Cycle", "Beta-oxidation"],
        "a": 0,
        "e": "When rumen ammonia absorption overwhelms liver argininosuccinate synthase and carbamoyl phosphate synthetase-I, free ammonia enters systemic circulation.",
        "topicId": "u3-t16",
        "diff": 2,
        "subSection": "u3-s3"
    },
    {
        "q": "What is the critical rumen pH threshold above which unionized ammonia (NH3) absorption spikes drastically into portal blood, precipitating urea toxicity?",
        "o": ["> 7.0 to 7.3", "< 5.0", "< 6.0", "Neutral 6.5"],
        "a": 0,
        "e": "At pH > 7.3, the ammonium ion (NH4+) loses its charge and converts to unionized lipophilic free ammonia (NH3), which diffuses across the rumen wall at high rates.",
        "topicId": "u3-t16",
        "diff": 2,
        "subSection": "u3-s3"
    },
    {
        "q": "What is the specific field emergency chemical antidote administered orally for acute urea toxicity in cattle?",
        "o": ["2 to 4 liters of 5% Acetic Acid (Vinegar) diluted in 20 to 30 liters of cold water", "100 g Sodium bicarbonate in warm water", "1 liter of liquid paraffin", "500 ml Calcium borogluconate orally"],
        "a": 0,
        "e": "Acetic acid immediately lowers ruminal pH, converting toxic diffusible NH3 into non-absorbable NH4+ ions; cold water cools the rumen and halts bacterial urease.",
        "topicId": "u3-t16",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "What is the commercial composition of the standard Urea Molasses Mineral Block (UMMB) licks developed by NDDB/IVRI for Indian livestock?",
        "o": ["Molasses (~35-40%), Urea (~7-10%), Mineral mixture (~10%), Salt (~5%), Binder (CaO/Bentonite ~10%), and Bran/Meal (~30-35%)", "100% urea solidified with cement", "50% common salt and 50% urea", "Pure sugar candy with copper sulfate"],
        "a": 0,
        "e": "UMMB provides slow-release non-protein nitrogen, fermentable sugars (molasses), and trace minerals, safe for licking without risk of biting or toxicity.",
        "topicId": "u3-t16",
        "diff": 2,
        "subSection": "u3-s3"
    },
    {
        "q": "Why is pure feed-grade urea contraindicated for feeding to calves under 3 months of age?",
        "o": ["Young calves lack a functional, inoculated microbial rumen and have negligible urease and bacterial protein synthesis capacity", "Urea destroys esophageal groove tissue", "Urea curdles abomasal milk immediately", "Calves have no liver"],
        "a": 0,
        "e": "Prior to 3-4 months, the calf is functionally a monogastric animal; ingested urea cannot be utilized by microbes and is absorbed as toxic ammonia.",
        "topicId": "u3-t16",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "Rumen Bypass Protein (RUP) is characterized by which nutritional property?",
        "o": ["Resists degradation by ruminal microorganisms but is digested by proteolytic enzymes in the abomasum and small intestine", "Completely indigestible throughout the entire gastrointestinal tract", "Degrades into ammonia within 5 minutes of ingestion", "Passes out 100% intact in feces"],
        "a": 0,
        "e": "RUP passes through the rumen undegraded to deliver high-quality dietary essential amino acids directly to the duodenum for enzymatic digestion and absorption.",
        "topicId": "u3-t15",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "The commercial manufacturing of rumen-inert bypass fat in the form of Calcium Soaps involves which chemical reaction?",
        "o": ["Saponification of long-chain fatty acids (palm oil fatty acids) with Calcium Hydroxide [Ca(OH)2]", "Hydrogenation of fish oil at 200 atmospheres", "Treatment of tallow with formaldehyde", "Boiling soybean oil with sulfuric acid"],
        "a": 0,
        "e": "Calcium salts of long-chain fatty acids (e.g. Megalac) are insoluble at neutral rumen pH (6.5), preventing microbial toxicity, but dissociate in abomasal acid (pH < 3.0).",
        "topicId": "u3-t15",
        "diff": 2,
        "subSection": "u3-s3"
    },
    {
        "q": "Why does feeding rumen-inert bypass fat not cause the fiber digestion depression seen when feeding raw vegetable oil?",
        "o": ["Calcium soaps remain insoluble and inert at ruminal pH 6.2-6.8, so they do not coat fiber particles or inhibit cellulolytic bacteria", "Bypass fat contains zero fatty acids", "Bypass fat is converted directly into methane", "Bypass fat is destroyed by saliva"],
        "a": 0,
        "e": "Insoluble calcium soaps cannot adsorb onto feed cellulose or disrupt Gram-positive bacterial cell membranes in the rumen.",
        "topicId": "u3-t15",
        "diff": 2,
        "subSection": "u3-s3"
    },
    {
        "q": "Prill fat is another commercial form of bypass fat that achieves rumen inertness through:",
        "o": ["Fractionated, fully hydrogenated saturated triglycerides (palmitic/stearic acid) with high melting points (> 55°C)", "Coating with gelatin and sugar", "Binding to bentonite clay", "Emulsification with bile acids"],
        "a": 0,
        "e": "Prill fat consists of high-melting-point (>50-55°C) saturated free fatty acids that remain solid at rumen temperature (39°C), bypassing microbial breakdown.",
        "topicId": "u3-t15",
        "diff": 2,
        "subSection": "u3-s3"
    },
    {
        "q": "Which metabolic disorder in high-yielding dairy cows is characterized by hypoglycemia, hyperketonemia, and sweet, acetone-smelling breath?",
        "o": ["Bovine Ketosis (Acetonemia)", "Parturient Paresis", "Grass Tetany", "Rumen Impaction"],
        "a": 0,
        "e": "Ketosis develops during early lactation NEB when oxaloacetate is exhausted, forcing acetyl-CoA into acetoacetate, beta-hydroxybutyrate, and acetone.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "What is the primary glucogenic oral medication administered to dairy cows for the clinical treatment of bovine ketosis?",
        "o": ["Propylene glycol (250 to 500 ml orally twice daily)", "Liquid paraffin", "Magnesium sulfate", "Dilute acetic acid"],
        "a": 0,
        "e": "Propylene glycol is absorbed intact or converted to propionate in the rumen, entering the citric acid cycle to replenish oxaloacetate for gluconeogenesis.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "What is the hallmark diagnostic biochemical finding in dairy cows suffering from Parturient Paresis (Milk Fever)?",
        "o": ["Severe hypocalcemia (serum total calcium dropping from normal 9-10 mg/dL to < 5 mg/dL)", "Severe hyperkalemia (> 15 mg/dL)", "Elevated blood urea nitrogen (> 100 mg/dL)", "Elevated serum phosphorus (> 15 mg/dL)"],
        "a": 0,
        "e": "Milk fever is caused by acute failure of calcium homeostasis at calving, with total serum calcium plunging below 5 mg/dL (ionized Ca < 0.5 mM).",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "The classic posture of a dairy cow in Stage 2 of Milk Fever is:",
        "o": ["Sternal recumbency with an S-shaped kink in the neck or head turned into the flank", "Hyperactive galloping around the pen", "High head carriage and star-gazing", "Standing rigid with erect ears"],
        "a": 0,
        "e": "Flaccid neuromuscular paralysis in Stage 2 causes sternal recumbency, cold extremities, dilated pupils, and lateral neck curvature resting on the chest.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "Dietary Cation-Anion Difference (DCAD) is calculated in ruminants using which standard milliequivalent formula?",
        "o": ["(Na+ + K+) - (Cl- + S2-)", "(Ca2+ + Mg2+) - (P3- + S2-)", "(Na+ + Cl-) - (K+ + S2-)", "(K+ + Mg2+) / (Ca2+ + Na+)"],
        "a": 0,
        "e": "DCAD (mEq/kg DM) = (Na+ / 0.023 + K+ / 0.039) - (Cl- / 0.0355 + S / 0.016). It measures the net balance of fixed dietary cations against anions.",
        "topicId": "u3-t17",
        "diff": 2,
        "subSection": "u3-s3"
    },
    {
        "q": "How does feeding a negative DCAD (-50 to -100 mEq/kg DM) diet during the last 3 weeks of the dry period prevent milk fever?",
        "o": ["Induces mild metabolic acidosis, increasing tissue sensitivity to PTH and stimulating bone calcium resorption and renal calcitriol synthesis", "Alkalinizes the blood to precipitate excess calcium", "Blocks calcium secretion into colostrum", "Paralyzes the parathyroid glands"],
        "a": 0,
        "e": "Mild systemic metabolic acidosis enhances PTH-receptor binding in bone and kidney, pre-activating osteoclastic calcium resorption before the sudden drain of colostrum.",
        "topicId": "u3-t17",
        "diff": 2,
        "subSection": "u3-s3"
    },
    {
        "q": "Which anionic salts are typically added to pre-partum transition cow diets to achieve a negative DCAD?",
        "o": ["Ammonium chloride, Calcium chloride, Magnesium sulfate, Calcium sulfate", "Sodium bicarbonate and Potassium carbonate", "Calcium carbonate and Sodium chloride", "Dicalcium phosphate and Urea"],
        "a": 0,
        "e": "Chloride and sulfate salts provide strong anions that shift blood acid-base balance toward mild compensated metabolic acidosis.",
        "topicId": "u3-t17",
        "diff": 2,
        "subSection": "u3-s3"
    },
    {
        "q": "What is the definitive intravenous treatment for a clinical case of Parturient Paresis (Milk Fever) in cattle?",
        "o": ["Slow IV infusion of 400 to 500 ml of 20 to 25% Calcium Borogluconate solution", "Rapid bolus of 50% Dextrose", "IV infusion of Magnesium sulfate alone", "Oral administration of vinegar"],
        "a": 0,
        "e": "Calcium borogluconate IV restores ionized blood calcium immediately; heart rate must be monitored continuously for bradycardia or arrhythmia.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "Subacute Ruminal Acidosis (SARA) in dairy cattle is clinically defined by which ruminal fluid pH threshold?",
        "o": ["Rumen pH remaining between 5.2 and 5.6 for more than 3 hours daily", "Rumen pH dropping below 4.0", "Rumen pH remaining constant at 7.0", "Rumen pH rising above 8.0"],
        "a": 0,
        "e": "SARA is defined as repeated episodes of depressed ruminal pH between 5.2 and 5.6, causing epithelial inflammation, reduced intake, and liver abscesses.",
        "topicId": "u3-t17",
        "diff": 2,
        "subSection": "u3-s3"
    },
    {
        "q": "Which bacterial species proliferates massively during acute ruminal lactic acidosis, driving rumen pH down below 5.0?",
        "o": ["Streptococcus bovis and Lactobacillus species", "Fibrobacter succinogenes", "Ruminococcus albus", "Butyrivibrio fibrisolvens"],
        "a": 0,
        "e": "Streptococcus bovis utilizes excess soluble starch to synthesize D- and L-lactic acid rapidly; acid-tolerant lactobacilli then take over, driving pH down to 4.5-4.0.",
        "topicId": "u3-t17",
        "diff": 2,
        "subSection": "u3-s3"
    },
    {
        "q": "Frothy (legume) bloat in cattle grazing lush lucerne or clover is primarily caused by:",
        "o": ["Soluble leaf proteins (Fraction I 18S ribulose-1,5-bisphosphate carboxylase) forming a persistent viscous foam trapping gas bubbles", "Overproduction of dry sawdust in the rumen", "Lack of water intake", "Foreign bodies blocking the cardia"],
        "a": 0,
        "e": "Chloroplastic Fraction I proteins and saponins act as foaming agents, creating a stable foam that traps fermentation gases and prevents normal eructation.",
        "topicId": "u3-t17",
        "diff": 2,
        "subSection": "u3-s3"
    },
    {
        "q": "What is the primary therapeutic action of Poloxalene or vegetable oils (groundnut oil) when administered for frothy bloat?",
        "o": ["They act as non-ionic surfactants that reduce surface tension and rupture the gas-trapping foam", "They neutralize ruminal lactic acid", "They paralyze the ruminal wall", "They convert carbon dioxide into solid carbonate"],
        "a": 0,
        "e": "Antifoaming surfactants break the surface tension of the ruminal fluid, releasing coalesced free gas that can be eructated or relieved via stomach tube.",
        "topicId": "u3-t17",
        "diff": 2,
        "subSection": "u3-s3"
    },
    {
        "q": "Free-gas bloat (secondary tympany) differs from frothy bloat because it is caused by:",
        "o": ["Physical or neurological failure of eructation (e.g. esophageal obstruction, choke, tetanus, or hypocalcemia)", "Ingestion of too much legume protein", "Excessive secretion of bile into the rumen", "Low dietary fiber"],
        "a": 0,
        "e": "Free-gas bloat occurs when the gas cap cannot be eructated due to anatomical obstruction (foreign body, choke) or neurological vagal impairment.",
        "topicId": "u3-t17",
        "diff": 2,
        "subSection": "u3-s3"
    },
    {
        "q": "Emergency relief of life-threatening severe ruminal bloat with acute respiratory distress is achieved by:",
        "o": ["Trocharization in the center of the left paralumbar fossa using a trocar and cannula", "Performing a tracheotomy", "Administering oral vinegar", "IV infusion of dextrose"],
        "a": 0,
        "e": "Puncturing the distended left paralumbar fossa with a sharp trocar and cannula releases gas immediately, preventing asphyxiation and cardiovascular collapse.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "Why does systemic absorption of D-lactic acid during acute rumen acidosis produce severe metabolic acidosis in cattle?",
        "o": ["Bovine tissues have very low activity of D-lactate dehydrogenase and clear D-lactate extremely slowly from blood", "D-lactate is converted into sulfuric acid", "D-lactate destroys parathyroid hormone", "D-lactate binds calcium irreversibly"],
        "a": 0,
        "e": "Mammalian tissues metabolize L-lactate efficiently via L-LDH, but lack sufficient D-LDH, allowing bacterial D-lactate to accumulate and cause severe systemic acidosis.",
        "topicId": "u3-t17",
        "diff": 3,
        "subSection": "u3-s3"
    },
    {
        "q": "Which urinary parameter can be tested on the farm using diagnostic dipsticks to monitor the effectiveness of pre-calving anionic salt feeding?",
        "o": ["Urine pH (target pH 6.0 to 6.5 in Holsteins, 5.5 to 6.0 in Jerseys)", "Urine specific gravity", "Urine glucose concentration", "Urine bilirubin level"],
        "a": 0,
        "e": "Urine pH directly reflects systemic acidification; achieving a urine pH of 6.0-6.5 confirms successful induction of compensated metabolic acidosis.",
        "topicId": "u3-t17",
        "diff": 2,
        "subSection": "u3-s3"
    },
    {
        "q": "The rapid conversion of ruminal ammonia into non-toxic glutamine in astrocytes causes cerebral edema in acute urea poisoning because of:",
        "o": ["Intracellular accumulation of glutamine exerting powerful osmotic pressure that draws water into brain astrocytes", "Destruction of brain blood vessels", "Direct precipitation of ammonium phosphate crystals in neurons", "Complete loss of cerebral glucose"],
        "a": 0,
        "e": "Glutamine synthetase incorporates excess NH3 into glutamine in astrocytes; high intracellular glutamine osmotically draws water, causing brain swelling and tremors.",
        "topicId": "u3-t16",
        "diff": 3,
        "subSection": "u3-s3"
    },
    {
        "q": "Which metabolic sequela commonly follows subacute ruminal acidosis due to translocation of Fusobacterium necrophorum across inflamed rumen mucosa?",
        "o": ["Hepatic abscesses and caudal vena cava thrombosis syndrome", "Severe acute pancreatitis", "Bovine spongiform encephalopathy", "Chronic renal cortical necrosis"],
        "a": 0,
        "e": "Acid ruminal mucosal erosion (ruminitis) permits entry of Fusobacterium necrophorum into portal circulation, colonizing the liver to form multiple abscesses.",
        "topicId": "u3-t17",
        "diff": 2,
        "subSection": "u3-s3"
    }
]

tf = [
    # --- u3-s1: Dairy Cattle & Buffalo Nutrition (17 TF) ---
    {
        "q": "The Gaines formula for 4% Fat Corrected Milk is: 4% FCM = 0.4 x Milk (kg) + 15 x Fat (kg).",
        "a": True,
        "e": "True. The formula standardizes milk of varying fat tests to a common energy equivalent (approx. 750 kcal/kg).",
        "topicId": "u3-t04",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "Buffalo milk requires less energy and protein per kilogram than cow milk because buffaloes are more efficient converters of roughage.",
        "a": False,
        "e": "False. Buffalo milk contains 7-8% fat and higher protein, requiring roughly 20-25% more TDN and DCP per kg than cow milk.",
        "topicId": "u3-t04",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "Intestinal absorption of intact maternal colostral immunoglobulins ceases almost completely by 24 hours after birth.",
        "a": True,
        "e": "True. 'Gut closure' occurs within 24 hours as enterocytes lose the capacity for macromolecular pinocytosis.",
        "topicId": "u3-t08",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "Feeding coarse, unground dry straw is more effective at stimulating ruminal mucosal papillae growth in calves than calf starter grain.",
        "a": False,
        "e": "False. Butyrate and propionate from grain fermentation are the potent chemical stimulants of papillae growth, not coarse roughage.",
        "topicId": "u3-t08",
        "diff": 2,
        "subSection": "u3-s1"
    },
    {
        "q": "A calf starter concentrate should contain approximately 20 to 22% Crude Protein.",
        "a": True,
        "e": "True. Young calves require nutrient-dense starter (20-22% CP, 75-80% TDN) to support rapid growth and rumen development.",
        "topicId": "u3-t08",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "Overfeeding energy to pre-pubertal dairy heifers leading to ADG > 900 g/day increases lifetime milk production potential.",
        "a": False,
        "e": "False. Rapid pre-pubertal weight gain causes fat infiltration into mammary parenchyma, permanently reducing secretory tissue.",
        "topicId": "u3-t09",
        "diff": 2,
        "subSection": "u3-s1"
    },
    {
        "q": "Fetal growth accelerates primarily during the final 2 to 2.5 months of gestation in dairy cattle.",
        "a": True,
        "e": "True. Over 60% of fetal weight accretion occurs in the last 60 days of gestation.",
        "topicId": "u3-t03",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "The transition period in dairy cattle spans from 3 weeks pre-calving to 3 weeks post-calving.",
        "a": True,
        "e": "True. This critical 6-week window accounts for the majority of metabolic and infectious diseases in dairy herds.",
        "topicId": "u3-t10",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "Peak dry matter intake in dairy cows occurs at exactly the same time as peak milk yield at 4 to 6 weeks postpartum.",
        "a": False,
        "e": "False. Peak milk yield occurs at 4-6 weeks, while peak DMI lags behind until 8-10 weeks, causing negative energy balance.",
        "topicId": "u3-t10",
        "diff": 2,
        "subSection": "u3-s1"
    },
    {
        "q": "A calving Body Condition Score of 3.25 to 3.5 (on a 1-5 scale) is considered optimal for dairy cows.",
        "a": True,
        "e": "True. This level of condition buffers early lactation energy deficits without predisposing cows to fatty liver or ketosis.",
        "topicId": "u3-t10",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "Challenge feeding involves stepping up concentrate feeding starting two weeks prior to the expected date of calving.",
        "a": True,
        "e": "True. Increasing concentrate prepares rumen microbes and adapts the cow to high postpartum nutrient intakes.",
        "topicId": "u3-t14",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "Feeding a Total Mixed Ration (TMR) prevents cows from sorting palatable concentrates away from roughages.",
        "a": True,
        "e": "True. A uniform TMR blend stabilizes rumen pH by ensuring consistent roughage-to-concentrate intake throughout the day.",
        "topicId": "u3-t14",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "Sodium bicarbonate is supplemented in high-producing dairy diets at 5 to 7% of total dry matter.",
        "a": False,
        "e": "False. Sodium bicarbonate buffer is included at 0.75 to 1.0% of diet DM (150-250 g/day); 5-7% would cause metabolic alkalosis and unpalatability.",
        "topicId": "u3-t14",
        "diff": 2,
        "subSection": "u3-s1"
    },
    {
        "q": "Muscular work in draft bullocks requires large increases in dietary protein percentage rather than energy.",
        "a": False,
        "e": "False. Muscular contraction uses volatile fatty acids and lipids as fuel; protein requirements increase only marginally.",
        "topicId": "u3-t06",
        "diff": 2,
        "subSection": "u3-s1"
    },
    {
        "q": "Working bullocks in hot tropical environments require daily common salt supplementation to replace sweat electrolyte losses.",
        "a": True,
        "e": "True. Profuse sweating dissipates heat but excretes sodium and chloride, which must be replenished with 50-100 g daily salt.",
        "topicId": "u3-t06",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "Obesity in breeding bulls enhances their libido and increases daily sperm output.",
        "a": False,
        "e": "False. Over-conditioning causes sluggish libido, joint stress, scrotal thermoregulatory failure, and poor semen quality.",
        "topicId": "u3-t11",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "A dry period of approximately 60 days is recommended between successive lactations in dairy cattle.",
        "a": True,
        "e": "True. An 8-week dry period allows mammary gland involution, tissue regeneration, and nutrient replenishment.",
        "topicId": "u3-t10",
        "diff": 1,
        "subSection": "u3-s1"
    },

    # --- u3-s2: Sheep, Goat & Draft Animal Nutrition (13 TF) ---
    {
        "q": "Flushing ewes with extra grain 2 to 3 weeks before breeding increases their ovulation rate and lambing percentage.",
        "a": True,
        "e": "True. Improved energy balance boosts gonadotropin secretion, stimulating multiple follicular development.",
        "topicId": "u3-t12",
        "diff": 1,
        "subSection": "u3-s2"
    },
    {
        "q": "Pregnancy toxaemia in sheep is characterized by severe hyperglycemia and low blood ketone levels.",
        "a": False,
        "e": "False. Pregnancy toxaemia is marked by acute hypoglycemia (<30 mg/dL) and severe hyperketonemia (>30 mg/dL).",
        "topicId": "u3-t12",
        "diff": 1,
        "subSection": "u3-s2"
    },
    {
        "q": "Goats have a higher daily voluntary Dry Matter Intake capacity (3-4% of body weight) than cattle.",
        "a": True,
        "e": "True. The higher metabolic rate and rapid passage rate in goats allow voluntary DM intake of 3 to 4% (up to 5% in high yielders).",
        "topicId": "u3-t13",
        "diff": 1,
        "subSection": "u3-s2"
    },
    {
        "q": "Goats can tolerate higher levels of plant tannins because their saliva contains proline-rich proteins.",
        "a": True,
        "e": "True. Caprine proline-rich salivary proteins bind and neutralize tannins, preventing inhibition of digestive enzymes.",
        "topicId": "u3-t13",
        "diff": 2,
        "subSection": "u3-s2"
    },
    {
        "q": "Wool is composed of keratin, a fibrous protein rich in sulfur amino acids like cystine.",
        "a": True,
        "e": "True. Keratin contains 3-4% sulfur, forming disulfide bonds that give wool its crimp and strength.",
        "topicId": "u3-t05",
        "diff": 1,
        "subSection": "u3-s2"
    },
    {
        "q": "Copper deficiency in sheep causes steely wool that has lost its natural crimp.",
        "a": True,
        "e": "True. Copper is a cofactor for thiol oxidase, which forms the disulfide cross-links necessary for wool crimping.",
        "topicId": "u3-t05",
        "diff": 1,
        "subSection": "u3-s2"
    },
    {
        "q": "Sheep are exceptionally resistant to dietary copper toxicity and can safely consume 100 ppm copper.",
        "a": False,
        "e": "False. Sheep are highly prone to copper toxicity; dietary copper should not exceed 10-15 ppm.",
        "topicId": "u3-t12",
        "diff": 1,
        "subSection": "u3-s2"
    },
    {
        "q": "Maintaining a dietary Ca:P ratio of at least 2:1 helps prevent struvite urinary calculi in male sheep and goats.",
        "a": True,
        "e": "True. High phosphorus promotes magnesium ammonium phosphate stones; adequate calcium prevents calculus formation.",
        "topicId": "u3-t12",
        "diff": 1,
        "subSection": "u3-s2"
    },
    {
        "q": "Ammonium chloride is added to sheep rations to alkalinize the urine.",
        "a": False,
        "e": "False. Ammonium chloride is a urinary acidifier (lowers urine pH below 6.5) used to dissolve struvite calculi.",
        "topicId": "u3-t12",
        "diff": 2,
        "subSection": "u3-s2"
    },
    {
        "q": "Enterotoxemia (pulpy kidney) is triggered by sudden grain engorgement causing proliferation of Clostridium perfringens Type D.",
        "a": True,
        "e": "True. Unfermented starch reaching the intestines stimulates rapid Clostridium perfringens Type D multiplication and lethal epsilon toxin production.",
        "topicId": "u3-t12",
        "diff": 1,
        "subSection": "u3-s2"
    },
    {
        "q": "Creep feeding allows young suckling lambs access to concentrate feed while excluding adult ewes.",
        "a": True,
        "e": "True. Creep gates are sized to permit small lambs to enter and feed on starter diets without competition from dams.",
        "topicId": "u3-t12",
        "diff": 1,
        "subSection": "u3-s2"
    },
    {
        "q": "Normal field plowing by draft bullocks increases their maintenance energy requirement by 30 to 50%.",
        "a": True,
        "e": "True. 4 to 6 hours of daily draft work increases energy needs by roughly 30-50%, met by feeding 1.5-2 kg extra concentrate.",
        "topicId": "u3-t06",
        "diff": 1,
        "subSection": "u3-s2"
    },
    {
        "q": "Stall-fed goats should be provided tree loppings hanging in racks to accommodate their natural browsing habits.",
        "a": True,
        "e": "True. Goats prefer bipedal browsing from elevated racks, which reduces feed waste and parasite transmission.",
        "topicId": "u3-t13",
        "diff": 1,
        "subSection": "u3-s2"
    },

    # --- u3-s3: Bypass Nutrients, NPN & Metabolic Disorders (15 TF) ---
    {
        "q": "Urea can safely replace up to 80% of the total dietary nitrogen in dairy cow rations.",
        "a": False,
        "e": "False. Urea should replace no more than 33% (one-third) of total dietary nitrogen (or 1% of diet DM) to prevent toxicity.",
        "topicId": "u3-t16",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "Bacterial urease converts urea into ammonia and carbon dioxide in the rumen.",
        "a": True,
        "e": "True. Ruminal bacterial urease rapidly hydrolyzes urea into NH3 and CO2.",
        "topicId": "u3-t16",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "Readily available carbohydrates like starch or molasses are essential for efficient ruminal microbial utilization of urea.",
        "a": True,
        "e": "True. Microbes require matching supplies of energy (ATP) and carbon keto-acids to incorporate ammonia into amino acids.",
        "topicId": "u3-t16",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "Dilute acetic acid (vinegar) in cold water is the standard emergency antidote for urea toxicity in cattle.",
        "a": True,
        "e": "True. Acetic acid lowers ruminal pH, converting toxic diffusible NH3 into non-absorbable NH4+ ions.",
        "topicId": "u3-t16",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "Young calves under 3 months of age can efficiently utilize urea-molasses blocks.",
        "a": False,
        "e": "False. Pre-ruminant calves lack a functional bacterial rumen population and develop fatal ammonia toxicity from urea.",
        "topicId": "u3-t16",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "Rumen undegradable protein (bypass protein) escapes ruminal fermentation and is digested by abomasal proteases.",
        "a": True,
        "e": "True. RUP bypasses microbial degradation to deliver essential amino acids directly to the abomasum and small intestine.",
        "topicId": "u3-t15",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "Calcium salts of long-chain fatty acids (calcium soaps) remain insoluble at normal ruminal pH of 6.5.",
        "a": True,
        "e": "True. Calcium soaps are rumen-inert at pH 6.5, dissociating only in the acidic environment (pH < 3.0) of the abomasum.",
        "topicId": "u3-t15",
        "diff": 2,
        "subSection": "u3-s3"
    },
    {
        "q": "Bovine ketosis is treated clinically by oral administration of glucogenic precursors like propylene glycol.",
        "a": True,
        "e": "True. Propylene glycol enters the gluconeogenic pathway, restoring oxaloacetate and relieving the ketotic block.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "Parturient paresis (milk fever) is characterized by high blood serum calcium concentrations.",
        "a": False,
        "e": "False. Milk fever is acute hypocalcemia where serum calcium drops below 5.0 mg/dL.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "Feeding a negative DCAD diet during late gestation induces mild metabolic acidosis that helps prevent milk fever.",
        "a": True,
        "e": "True. Mild systemic acidosis stimulates parathyroid hormone sensitivity and increases bone calcium mobilization at calving.",
        "topicId": "u3-t17",
        "diff": 2,
        "subSection": "u3-s3"
    },
    {
        "q": "Subacute Ruminal Acidosis (SARA) occurs when ruminal pH drops repeatedly between 5.2 and 5.6.",
        "a": True,
        "e": "True. SARA is characterized by ruminal pH dropping into the 5.2-5.6 range for multiple hours daily.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "Streptococcus bovis proliferates rapidly during grain engorgement and produces large amounts of lactic acid.",
        "a": True,
        "e": "True. S. bovis consumes soluble starch and rapidly generates lactic acid, initiating acute ruminal acidosis.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "Frothy bloat is treated with antifoaming surfactants like poloxalene or vegetable oils to break the stable foam.",
        "a": True,
        "e": "True. Antifoaming agents reduce surface tension, allowing trapped gas bubbles to coalesce and be eructated.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "In severe life-threatening bloat, emergency trocharization is performed in the right paralumbar fossa.",
        "a": False,
        "e": "False. Trocharization is performed on the LEFT paralumbar fossa, which is where the rumen is directly situated.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "Rumenitis from acidosis can allow Fusobacterium necrophorum to migrate to the liver and cause hepatic abscesses.",
        "a": True,
        "e": "True. Acid burns to the ruminal wall allow bacteria to enter portal blood, colonizing the liver to form abscesses.",
        "topicId": "u3-t17",
        "diff": 2,
        "subSection": "u3-s3"
    }
]

fib = [
    # --- u3-s1: Dairy Cattle & Buffalo Nutrition (17 FIB) ---
    {
        "q": "The formula used to calculate 4% Fat Corrected Milk is: 4% FCM = ____ x Milk (kg) + 15 x Fat (kg).",
        "a": ["0.4"],
        "a_display": "0.4",
        "e": "Gaines formula: 4% FCM = 0.4 M + 15 F.",
        "topicId": "u3-t04",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "A newborn calf should receive maternal colostrum equal to ____ percent of its body weight within the first 24 hours.",
        "a": ["10", "10%"],
        "a_display": "10%",
        "e": "A 30-kg calf needs 3.0 kg (10% of BW) of colostrum, ideally half within the first 2-4 hours.",
        "topicId": "u3-t08",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "Intestinal enterocytes in neonatal calves cease absorbing intact immunoglobulins after ____ hours of life.",
        "a": ["24", "24 hours"],
        "a_display": "24 hours",
        "e": "Gut closure occurs within 24 hours as enterocytes lose macromolecular pinocytotic capacity.",
        "topicId": "u3-t08",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "Maternal colostrum contains high concentrations of a ____ inhibitor to protect immunoglobulins from proteolysis.",
        "a": ["trypsin"],
        "a_display": "Trypsin",
        "e": "Colostral trypsin inhibitor protects maternal IgG from enzymatic degradation in the abomasum and intestine.",
        "topicId": "u3-t08",
        "diff": 2,
        "subSection": "u3-s1"
    },
    {
        "q": "The volatile fatty acid that provides the strongest chemical stimulus for ruminal papillae development in young calves is ____.",
        "a": ["butyrate", "butyric acid"],
        "a_display": "Butyrate",
        "e": "Butyrate provides direct oxidative energy to the mucosal cells, driving papillae growth.",
        "topicId": "u3-t08",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "A high-quality commercial Calf Starter concentrate should contain ____ to 22% Crude Protein.",
        "a": ["20", "20 to 22", "20-22"],
        "a_display": "20%",
        "e": "Calf starters require 20-22% CP and 75-80% TDN to stimulate early rumen development.",
        "topicId": "u3-t08",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "Calves can be safely weaned off liquid milk when they consume ____ to 1.0 kg of dry starter daily.",
        "a": ["750 g", "750g", "0.75 kg", "0.75", "750"],
        "a_display": "750 g (0.75 kg)",
        "e": "Consuming 750 g to 1.0 kg of starter daily confirms sufficient ruminal capacity to sustain post-weaning growth.",
        "topicId": "u3-t08",
        "diff": 2,
        "subSection": "u3-s1"
    },
    {
        "q": "Target Average Daily Gain for growing crossbred dairy heifers is ____ to 600 g per day.",
        "a": ["500", "500 to 600", "500-600", "550"],
        "a_display": "500 to 600 g/day",
        "e": "Gaining 500-600 g/day allows heifers to calve at 24-30 months without mammary adiposity.",
        "topicId": "u3-t09",
        "diff": 2,
        "subSection": "u3-s1"
    },
    {
        "q": "The transition period in dairy cows spans from ____ weeks before calving to 3 weeks after calving.",
        "a": ["3", "three"],
        "a_display": "3 weeks",
        "e": "The 6-week transition window is the highest-risk metabolic period in a dairy cow's lactation cycle.",
        "topicId": "u3-t10",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "In early lactation, peak milk production occurs at 4 to 6 weeks, while peak dry matter intake lags until ____ to 10 weeks.",
        "a": ["8", "8 to 10", "8-10"],
        "a_display": "8 to 10 weeks",
        "e": "This intake lag creates negative energy balance, forcing cows to mobilize body fat reserves.",
        "topicId": "u3-t10",
        "diff": 2,
        "subSection": "u3-s1"
    },
    {
        "q": "The ideal Body Condition Score at calving on a 1 to 5 scale is 3.25 to ____.",
        "a": ["3.5", "3.50"],
        "a_display": "3.50",
        "e": "A calving BCS of 3.25-3.50 buffers early lactation energy deficits without predisposing cows to ketosis.",
        "topicId": "u3-t10",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "The recommended dry period length for high-yielding dairy cattle is ____ days.",
        "a": ["60", "60 days"],
        "a_display": "60 days",
        "e": "A 60-day dry period is necessary for mammary tissue regeneration and nutrient repletion.",
        "topicId": "u3-t10",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "The feeding strategy of stepping up concentrate allowance 2 weeks before calving is called ____ feeding.",
        "a": ["challenge", "lead", "challenge feeding", "lead feeding"],
        "a_display": "Challenge (Lead) Feeding",
        "e": "Challenge feeding trains rumen microbes and prepares the cow to reach peak genetic milk yield.",
        "topicId": "u3-t14",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "TMR stands for Total ____ Ration.",
        "a": ["mixed"],
        "a_display": "Mixed",
        "e": "Total Mixed Ration (TMR) combines forages and concentrates into a homogeneous mixture.",
        "topicId": "u3-t14",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "Sodium bicarbonate buffer is recommended at ____ to 1.0% of total diet dry matter in high-concentrate dairy rations.",
        "a": ["0.75", "0.75 to 1.0", "0.75-1.0", "0.75%"],
        "a_display": "0.75%",
        "e": "0.75-1.0% sodium bicarbonate stabilizes rumen pH and prevents subacute ruminal acidosis.",
        "topicId": "u3-t14",
        "diff": 2,
        "subSection": "u3-s1"
    },
    {
        "q": "Under Indian conditions, lactating cows receive 1 kg concentrate for every ____ to 3.0 kg of milk produced.",
        "a": ["2.5", "2.5 to 3.0", "2.5-3.0"],
        "a_display": "2.5",
        "e": "Feeding 1 kg concentrate per 2.5 to 3.0 kg milk satisfies production energy requirements in cows.",
        "topicId": "u3-t04",
        "diff": 1,
        "subSection": "u3-s1"
    },
    {
        "q": "Field measurement of physically effective fiber is performed using the Penn State Particle Size ____.",
        "a": ["separator"],
        "a_display": "Separator",
        "e": "The Penn State Particle Separator uses graduated sieves to measure effective chewing fiber.",
        "topicId": "u3-t14",
        "diff": 2,
        "subSection": "u3-s1"
    },

    # --- u3-s2: Sheep, Goat & Draft Animal Nutrition (13 FIB) ---
    {
        "q": "The practice of increasing concentrate feeding to ewes 2 to 3 weeks prior to mating is known as ____.",
        "a": ["flushing"],
        "a_display": "Flushing",
        "e": "Flushing enhances body condition and elevates ovulation rate and lambing percentage.",
        "topicId": "u3-t12",
        "diff": 1,
        "subSection": "u3-s2"
    },
    {
        "q": "Pregnancy toxaemia in late-pregnant multi-bearing ewes is characterized by severe ____, with blood glucose dropping below 30 mg/dL.",
        "a": ["hypoglycemia", "hypoglycaemia"],
        "a_display": "Hypoglycemia",
        "e": "Twin fetal demands deplete maternal glucose, triggering severe hypoglycemic ketosis.",
        "topicId": "u3-t12",
        "diff": 1,
        "subSection": "u3-s2"
    },
    {
        "q": "Adult goats consume ____ to 4.0% of their body weight in dry matter daily.",
        "a": ["3", "3.0", "3 to 4", "3-4"],
        "a_display": "3.0 to 4.0%",
        "e": "Higher metabolic rates enable goats to consume 3-4% of body weight in dry matter daily.",
        "topicId": "u3-t13",
        "diff": 1,
        "subSection": "u3-s2"
    },
    {
        "q": "Goats tolerate dietary tannins because their saliva contains abundant ____-rich proteins.",
        "a": ["proline"],
        "a_display": "Proline",
        "e": "Proline-rich salivary proteins bind and neutralize polyphenolic tannins.",
        "topicId": "u3-t13",
        "diff": 2,
        "subSection": "u3-s2"
    },
    {
        "q": "The special enclosure designed to feed young lambs without competition from adult ewes is called a ____ feeder.",
        "a": ["creep"],
        "a_display": "Creep",
        "e": "Creep feeding provides early access to concentrate for suckling lambs.",
        "topicId": "u3-t12",
        "diff": 1,
        "subSection": "u3-s2"
    },
    {
        "q": "Wool is composed almost entirely of the sulfur-rich fibrous protein called ____.",
        "a": ["keratin"],
        "a_display": "Keratin",
        "e": "Wool keratin contains 3-4% sulfur, forming the structural basis of the wool fiber.",
        "topicId": "u3-t05",
        "diff": 1,
        "subSection": "u3-s2"
    },
    {
        "q": "A deficiency of the trace mineral ____ causes un-crimped, steely wool in sheep.",
        "a": ["copper", "cu"],
        "a_display": "Copper",
        "e": "Copper is required for thiol oxidase to cross-link disulfide bonds in keratin.",
        "topicId": "u3-t05",
        "diff": 1,
        "subSection": "u3-s2"
    },
    {
        "q": "To prevent struvite urinary calculi in feedlot rams, the dietary Ca:P ratio should be at least ____ to 1.",
        "a": ["2", "2:1", "2.0"],
        "a_display": "2 : 1",
        "e": "A 2:1 Ca:P ratio prevents excess phosphorus absorption and crystallization in urine.",
        "topicId": "u3-t12",
        "diff": 1,
        "subSection": "u3-s2"
    },
    {
        "q": "The chemical urinary acidifier supplemented at 0.5% to dissolve struvite calculi in male sheep is ____ chloride.",
        "a": ["ammonium", "nh4cl"],
        "a_display": "Ammonium",
        "e": "Ammonium chloride acidifies the urine to pH < 6.5, keeping magnesium ammonium phosphate in solution.",
        "topicId": "u3-t12",
        "diff": 2,
        "subSection": "u3-s2"
    },
    {
        "q": "Enterotoxemia in rapidly growing lambs is caused by the bacterium Clostridium ____ Type D.",
        "a": ["perfringens"],
        "a_display": "Perfringens",
        "e": "Starch overload stimulates explosive Clostridium perfringens Type D multiplication.",
        "topicId": "u3-t12",
        "diff": 2,
        "subSection": "u3-s2"
    },
    {
        "q": "Normal field work increases the daily energy requirement of draft bullocks by ____ to 50% over maintenance.",
        "a": ["30", "30 to 50", "30-50"],
        "a_display": "30 to 50%",
        "e": "Working 4-6 hours daily requires an extra 30-50% energy, supplied by 1.5-2 kg concentrate.",
        "topicId": "u3-t06",
        "diff": 1,
        "subSection": "u3-s2"
    },
    {
        "q": "Heavy sweating during draft work requires daily supplementation of 50 to 100 g of common ____.",
        "a": ["salt", "nacl", "sodium chloride"],
        "a_display": "Salt (NaCl)",
        "e": "Sweat contains sodium and chloride, which must be replenished daily.",
        "topicId": "u3-t06",
        "diff": 1,
        "subSection": "u3-s2"
    },
    {
        "q": "The maximum safe upper limit of Copper in sheep diets is ____ ppm.",
        "a": ["10 to 15", "15", "10-15", "10"],
        "a_display": "10 to 15 ppm",
        "e": "Diets exceeding 15 ppm Cu can cause fatal chronic copper poisoning in sheep.",
        "topicId": "u3-t12",
        "diff": 2,
        "subSection": "u3-s2"
    },

    # --- u3-s3: Bypass Nutrients, NPN & Metabolic Disorders (15 FIB) ---
    {
        "q": "Urea should not exceed ____ percent of the total dry matter of an adult ruminant's diet.",
        "a": ["1", "1%", "1.0"],
        "a_display": "1%",
        "e": "Urea is limited to 1% of total diet DM or 3% of concentrate mixture to prevent toxicity.",
        "topicId": "u3-t16",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "Bacterial ____ is the ruminal enzyme that hydrolyzes urea into ammonia and carbon dioxide.",
        "a": ["urease"],
        "a_display": "Urease",
        "e": "Bacterial urease rapidly cleaves urea, releasing free ammonia in the rumen.",
        "topicId": "u3-t16",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "For acute urea toxicity in cattle, 2 to 4 liters of 5% ____ acid (vinegar) in cold water is given orally.",
        "a": ["acetic", "acetic acid", "vinegar"],
        "a_display": "Acetic Acid (Vinegar)",
        "e": "Acetic acid lowers ruminal pH, converting toxic NH3 into non-absorbable NH4+ ions.",
        "topicId": "u3-t16",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "Rumen-inert bypass fat in the form of Calcium Soaps is produced by reacting fatty acids with calcium ____.",
        "a": ["hydroxide", "ca(oh)2"],
        "a_display": "Hydroxide",
        "e": "Saponification of fatty acids with calcium hydroxide yields insoluble calcium soaps.",
        "topicId": "u3-t15",
        "diff": 2,
        "subSection": "u3-s3"
    },
    {
        "q": "Bovine ketosis is treated by the oral administration of 250 to 500 ml of propylene ____ twice daily.",
        "a": ["glycol"],
        "a_display": "Glycol",
        "e": "Propylene glycol is a glucogenic precursor that supplies oxaloacetate to the TCA cycle.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "Parturient paresis (milk fever) is caused by a precipitous drop in serum total ____ below 5 mg/dL.",
        "a": ["calcium", "ca"],
        "a_display": "Calcium",
        "e": "Sudden colostral calcium output depletes serum calcium, causing flaccid paralysis.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "DCAD stands for Dietary Cation-____ Difference.",
        "a": ["anion"],
        "a_display": "Anion",
        "e": "DCAD = (Na+ + K+) - (Cl- + S2-) in milliequivalents per kg diet dry matter.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "Feeding a ____ DCAD diet during late gestation induces mild metabolic acidosis that prevents milk fever.",
        "a": ["negative"],
        "a_display": "Negative",
        "e": "A negative DCAD (-50 to -100 mEq/kg) stimulates bone calcium mobilization prior to calving.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "The definitive intravenous treatment for milk fever is 400 to 500 ml of 25% calcium ____.",
        "a": ["borogluconate"],
        "a_display": "Borogluconate",
        "e": "Intravenous calcium borogluconate rapidly restores circulating ionized calcium levels.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "Subacute Ruminal Acidosis is defined by ruminal pH dropping repeatedly into the range of 5.2 to ____.",
        "a": ["5.6"],
        "a_display": "5.6",
        "e": "SARA occurs when ruminal pH remains between 5.2 and 5.6 for several hours daily.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "The primary bacterium responsible for explosive lactic acid synthesis during acute grain overload is Streptococcus ____.",
        "a": ["bovis"],
        "a_display": "Bovis",
        "e": "Streptococcus bovis ferments starch rapidly, producing lactic acid and crashing rumen pH.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "Frothy legume bloat is treated with antifoaming surfactants like ____ or vegetable oils.",
        "a": ["poloxalene"],
        "a_display": "Poloxalene",
        "e": "Poloxalene breaks surface tension, collapsing the foam and releasing gas.",
        "topicId": "u3-t17",
        "diff": 2,
        "subSection": "u3-s3"
    },
    {
        "q": "Emergency relief of severe bloat involves trocharization of the ____ paralumbar fossa.",
        "a": ["left"],
        "a_display": "Left",
        "e": "The rumen occupies the left abdominal cavity and is accessed via the left paralumbar fossa.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "Acid damage to the ruminal wall can allow Fusobacterium necrophorum to migrate to the liver, forming liver ____.",
        "a": ["abscesses", "abscess"],
        "a_display": "Abscesses",
        "e": "Ruminal acidosis causes ruminitis, allowing bacteria to enter portal blood and form liver abscesses.",
        "topicId": "u3-t17",
        "diff": 1,
        "subSection": "u3-s3"
    },
    {
        "q": "In acute urea poisoning, unionized ammonia (NH3) absorption spikes when ruminal pH rises above ____.",
        "a": ["7.0", "7.3", "7.0 to 7.3", "7"],
        "a_display": "7.0 to 7.3",
        "e": "At pH > 7.3, non-ionized NH3 diffuses freely across the rumen epithelium into portal blood.",
        "topicId": "u3-t16",
        "diff": 2,
        "subSection": "u3-s3"
    }
]

def get_data():
    return {
        "mcq": mcq,
        "tf": tf,
        "fib": fib
    }
