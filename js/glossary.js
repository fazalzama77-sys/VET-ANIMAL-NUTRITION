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
                "acid detergent lignin"
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
                "nutritive ratio"
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
                "ammonia toxicity"
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
                "rancidity"
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
                "pica"
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
                "goose stepping"
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
                "icar standard"
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
                "urea ammoniation"
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
                "ricin"
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
                "azoturia"
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
        "azoturia": "Equine exertional rhabdomyolysis (Monday morning disease) associated with high carbohydrate feeding during stall rest followed by sudden work."
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

    _positionTooltip(termSpan) {
        const rect = termSpan.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const margin = 12;

        const ttWidth = Math.min(320, vw - margin * 2);
        let left = rect.left + rect.width / 2 - ttWidth / 2;
        let top = rect.bottom + 8;
        const ttEstHeight = 90;

        if (left + ttWidth > vw - margin) left = vw - ttWidth - margin;
        if (left < margin) left = margin;

        if (top + ttEstHeight > vh - margin) {
            const above = rect.top - ttEstHeight - 8;
            if (above >= margin) top = above;
        }

        termSpan.style.setProperty('--tt-left', left + 'px');
        termSpan.style.setProperty('--tt-top', top + 'px');
        termSpan.style.setProperty('--tt-width', ttWidth + 'px');
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

                const onShow = (e) => this._positionTooltip(e.currentTarget);
                span.addEventListener('mouseenter', onShow);
                span.addEventListener('focus', onShow);
                span.addEventListener('touchstart', onShow, { passive: true });

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

        if (!this._scrollHooked) {
            this._scrollHooked = true;
            const reposition = () => {
                const active = document.querySelector('.gloss-term:hover, .gloss-term:focus');
                if (active) this._positionTooltip(active);
            };
            window.addEventListener('scroll', reposition, { passive: true, capture: true });
            window.addEventListener('resize', reposition, { passive: true });
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
