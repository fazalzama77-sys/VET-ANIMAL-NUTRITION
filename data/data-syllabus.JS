/* ============================================================
   data-syllabus.JS  —  THE MASTER INDEX
   Animal Nutrition Studio
   ============================================================ */

var syllabus = {
  "meta": {
    "subject": "Animal Nutrition",
    "course": "B.V.Sc & A.H. — Second Year",
    "credits": "3 + 1 = 4",
    "institute": "ICAR — Indian Veterinary Research Institute, Izatnagar, Bareilly",
    "papers": [
      {
        "id": "paper-1",
        "name": "Paper I",
        "units": [
          1,
          2
        ],
        "theoryMarks": 100,
        "practicalMarks": 60,
        "weightage": 20
      },
      {
        "id": "paper-2",
        "name": "Paper II",
        "units": [
          3,
          4
        ],
        "theoryMarks": 100,
        "practicalMarks": 60,
        "weightage": 20
      }
    ]
  },
  "theory": [
    {
      "no": 1,
      "id": "unit-1",
      "title": "Principles of Animal Nutrition and Feed Technology",
      "short": "Principles & Feed Tech",
      "blurb": "Fundamental nutrients, energy and protein evaluation, feed processing, conservation (silage/hay), anti-nutritional factors and feed additives.",
      "icon": "atom",
      "paper": "paper-1",
      "topics": [
        {
          "id": "u1-t01",
          "title": "History and Development of Animal Nutrition"
        },
        {
          "id": "u1-t02",
          "title": "Importance of Nutrients in Animal Production and Health"
        },
        {
          "id": "u1-t03",
          "title": "Chemical Composition of Animal Body and Plants"
        },
        {
          "id": "u1-t04",
          "title": "Nutritional Terms and Their Definitions"
        },
        {
          "id": "u1-t05",
          "title": "Nutritional Aspects and Metabolism of Carbohydrates"
        },
        {
          "id": "u1-t06",
          "title": "Nutritional Aspects, Quality and Metabolism of Proteins"
        },
        {
          "id": "u1-t07",
          "title": "Nutritional Aspects and Metabolism of Lipids and Fats"
        },
        {
          "id": "u1-t08",
          "title": "Role, Requirements and Metabolism of Water"
        },
        {
          "id": "u1-t09",
          "title": "Major Minerals (Macro-elements) in Health and Production"
        },
        {
          "id": "u1-t10",
          "title": "Trace Minerals (Micro-elements) in Health and Production"
        },
        {
          "id": "u1-t11",
          "title": "Fat-Soluble Vitamins in Health and Production"
        },
        {
          "id": "u1-t12",
          "title": "Water-Soluble Vitamins in Health and Production"
        },
        {
          "id": "u1-t13",
          "title": "Classification, Availability and Importance of Feeds and Fodders"
        },
        {
          "id": "u1-t14",
          "title": "Measures of Food Energy — GE, DE, ME, NE, TDN and Starch Equivalent"
        },
        {
          "id": "u1-t15",
          "title": "Energy Partitioning, Direct & Indirect Calorimetry, and Carbon-Nitrogen Balance"
        },
        {
          "id": "u1-t16",
          "title": "Protein Evaluation of Feeds — Biological Value, PER, Protein Equivalent, and DCP"
        },
        {
          "id": "u1-t17",
          "title": "Calorie-Protein Ratio and Nutritive Ratio (NR)"
        },
        {
          "id": "u1-t18",
          "title": "Introduction to Feed Technology and the Feed Industry"
        },
        {
          "id": "u1-t19",
          "title": "Processing of Concentrates and Roughages"
        },
        {
          "id": "u1-t20",
          "title": "Physical, Chemical and Biological Methods for Improving Nutritive Value of Inferior Quality Roughages"
        },
        {
          "id": "u1-t21",
          "title": "Feed Conservation — Silage Making and Preservation"
        },
        {
          "id": "u1-t22",
          "title": "Feed Conservation — Hay Making and Preservation"
        },
        {
          "id": "u1-t23",
          "title": "Harmful Natural Constituents (Anti-nutritional Factors) and Toxic Principles in Feeds"
        },
        {
          "id": "u1-t24",
          "title": "Common Adulterants of Feeds and Fodders and Their Detection"
        },
        {
          "id": "u1-t25",
          "title": "Feed Additives and Supplements in Livestock and Poultry Rations"
        }
      ]
    },
    {
      "no": 2,
      "id": "unit-2",
      "title": "Applied Ruminant Nutrition-I",
      "short": "Ruminant Nutrition-I",
      "blurb": "Scientific feeding principles, digestion and metabolism trials, digestibility measurements, feeding standards and balanced rations.",
      "icon": "pulse",
      "paper": "paper-1",
      "topics": [
        {
          "id": "u2-t01",
          "title": "Importance and Principles of Scientific Feeding"
        },
        {
          "id": "u2-t02",
          "title": "Feeding Experiments and Comparative Slaughter Technique"
        },
        {
          "id": "u2-t03",
          "title": "Digestion and Metabolism Trials in Ruminants"
        },
        {
          "id": "u2-t04",
          "title": "Norms, Protocols and Procedures for Conducting Digestion Trials"
        },
        {
          "id": "u2-t05",
          "title": "Measurement and Calculation of Digestibility Coefficients (Direct, Indirect, Indicator Methods)"
        },
        {
          "id": "u2-t06",
          "title": "Factors Affecting Digestibility of Feeds in Ruminants"
        },
        {
          "id": "u2-t07",
          "title": "Feeding Standards — History, Uses and Significance"
        },
        {
          "id": "u2-t08",
          "title": "Comparative Evaluation, Merits and Demerits of Various Ruminant Feeding Standards"
        },
        {
          "id": "u2-t09",
          "title": "Balanced Rations — Definition, Principles, Characteristics and General Guidelines"
        }
      ]
    },
    {
      "no": 3,
      "id": "unit-3",
      "title": "Applied Ruminant Nutrition-II",
      "short": "Ruminant Nutrition-II",
      "blurb": "Energy and protein requirements for maintenance and production; computation of rations for cattle, buffaloes, sheep and goats; bypass nutrients, NPN, and metabolic disorders.",
      "icon": "cycle",
      "paper": "paper-2",
      "topics": [
        {
          "id": "u3-t01",
          "title": "Assessment of Energy and Protein Requirements for Maintenance in Ruminants"
        },
        {
          "id": "u3-t02",
          "title": "Assessment of Energy and Protein Requirements for Growth and Meat Production"
        },
        {
          "id": "u3-t03",
          "title": "Assessment of Energy and Protein Requirements for Reproduction and Gestation"
        },
        {
          "id": "u3-t04",
          "title": "Assessment of Energy and Protein Requirements for Milk Production"
        },
        {
          "id": "u3-t05",
          "title": "Assessment of Nutrient Requirements for Wool Production"
        },
        {
          "id": "u3-t06",
          "title": "Assessment of Nutrient Requirements for Working and Draft Animals"
        },
        {
          "id": "u3-t07",
          "title": "General Principles of Computation and Balancing of Rations"
        },
        {
          "id": "u3-t08",
          "title": "Ration Formulation and Feeding of Neonate and Young Calves"
        },
        {
          "id": "u3-t09",
          "title": "Ration Formulation and Feeding of Growing Heifers and Adult Dairy Cattle & Buffaloes"
        },
        {
          "id": "u3-t10",
          "title": "Feeding and Nutritional Management of Pregnant, Lactating and Dry Dairy Animals"
        },
        {
          "id": "u3-t11",
          "title": "Feeding and Nutritional Management of Breeding Bulls and Working Bullocks"
        },
        {
          "id": "u3-t12",
          "title": "Ration Formulation and Feeding of Sheep during Different Phases of Growth and Production"
        },
        {
          "id": "u3-t13",
          "title": "Ration Formulation and Feeding of Goats during Different Phases of Growth and Production"
        },
        {
          "id": "u3-t14",
          "title": "Nutritional Management of High-Yielding Dairy Animals and Challenge Feeding"
        },
        {
          "id": "u3-t15",
          "title": "Role and Application of Bypass Nutrients (Bypass Protein and Bypass Fat)"
        },
        {
          "id": "u3-t16",
          "title": "Non-Protein Nitrogen (NPN) Compounds — Urea Feeding, Mechanism and Toxicity Prevention"
        },
        {
          "id": "u3-t17",
          "title": "Metabolic Disorders in Ruminants (Ketosis, Milk Fever, Acidosis, Bloat) and Nutritional Interventions"
        }
      ]
    },
    {
      "no": 4,
      "id": "unit-4",
      "title": "Applied Non-Ruminant Nutrition",
      "short": "Non-Ruminant Nutrition",
      "blurb": "Nutrient requirements and feeding standards for swine, equine, poultry (broilers/layers), rabbits, laboratory animals, dogs, cats and captive zoo wildlife.",
      "icon": "feather",
      "paper": "paper-2",
      "topics": [
        {
          "id": "u4-t01",
          "title": "Energy and Protein Requirements for Maintenance and Production in Non-Ruminants"
        },
        {
          "id": "u4-t02",
          "title": "Methods for Determining Nutrient Requirements for Growth, Reproduction and Production"
        },
        {
          "id": "u4-t03",
          "title": "Feeding Standards for Non-Ruminants and Poultry (BIS and ICAR Specifications)"
        },
        {
          "id": "u4-t04",
          "title": "Swine Nutrition I — Nutrient Requirements and Feeding of Piglets and Growers"
        },
        {
          "id": "u4-t05",
          "title": "Swine Nutrition II — Feeding of Pregnant Sows, Lactating Sows, Breeding Boars and Fatteners"
        },
        {
          "id": "u4-t06",
          "title": "Equine Nutrition I — Digestive Anatomy, Nutrient Requirements and Feeding of Foals and Yearlings"
        },
        {
          "id": "u4-t07",
          "title": "Equine Nutrition II — Feeding of Broodmares, Stallions and Race/Performance Horses"
        },
        {
          "id": "u4-t08",
          "title": "Poultry Nutrition I — Nutrient Requirements of Broilers (Pre-starter, Starter, Finisher)"
        },
        {
          "id": "u4-t09",
          "title": "Poultry Nutrition II — Nutrient Requirements of Layers (Chick, Grower, Layer, Breeder)"
        },
        {
          "id": "u4-t10",
          "title": "Conventional and Unconventional Feed Ingredients in Poultry and Swine Rations"
        },
        {
          "id": "u4-t11",
          "title": "Nutrient Requirements and Feeding of Ducks, Quails and Turkeys"
        },
        {
          "id": "u4-t12",
          "title": "Nutrient Requirements and Feeding of Laboratory Animals (Mice, Rats, Guinea Pigs)"
        },
        {
          "id": "u4-t13",
          "title": "Nutrient Requirements, Diet Formulation and Feeding of Rabbits"
        },
        {
          "id": "u4-t14",
          "title": "Canine Nutrition — Nutrient Requirements and Feeding of Dogs across Life Stages"
        },
        {
          "id": "u4-t15",
          "title": "Feline Nutrition — Nutrient Requirements and Peculiarities of Feeding Cats (Obligate Carnivore)"
        },
        {
          "id": "u4-t16",
          "title": "Feeding of Wild Animals and Birds in Captivity"
        },
        {
          "id": "u4-t17",
          "title": "Metabolic and Nutritional Deficiency Disorders in Non-Ruminants & Poultry and Nutritional Interventions"
        }
      ]
    }
  ],
  "practical": [
    {
      "no": 1,
      "id": "prac-unit-1",
      "title": "Principles of Animal Nutrition and Feed Technology (Practical)",
      "short": "Lab & Proximate Analysis",
      "blurb": "Safety, feed familiarisation, sample preparation, Weende proximate analysis, mineral estimation and Van Soest detergent analysis.",
      "icon": "lab",
      "paper": "paper-1",
      "topics": [
        {
          "id": "p1-t01",
          "title": "General Laboratory Safety, Rules and Precautions in Nutrition Laboratory"
        },
        {
          "id": "p1-t02",
          "title": "Familiarisation and Physical Identification of Common Feeds and Fodders"
        },
        {
          "id": "p1-t03",
          "title": "Preparation and Processing of Samples for Chemical Analysis (Herbage, Faeces, Urine, Silage)"
        },
        {
          "id": "p1-t04",
          "title": "Preparation of Standard Volumetric and Chemical Solutions"
        },
        {
          "id": "p1-t05",
          "title": "Weende Proximate Analysis — Estimation of Dry Matter (DM) and Moisture"
        },
        {
          "id": "p1-t06",
          "title": "Weende Proximate Analysis — Estimation of Total Ash and Acid Insoluble Ash (AIA)"
        },
        {
          "id": "p1-t07",
          "title": "Weende Proximate Analysis — Estimation of Crude Protein (CP) by Micro-Kjeldahl Method"
        },
        {
          "id": "p1-t08",
          "title": "Weende Proximate Analysis — Estimation of Ether Extract (EE) / Crude Fat"
        },
        {
          "id": "p1-t09",
          "title": "Weende Proximate Analysis — Estimation of Crude Fibre (CF)"
        },
        {
          "id": "p1-t10",
          "title": "Weende Proximate Analysis — Calculation of Nitrogen Free Extract (NFE)"
        },
        {
          "id": "p1-t11",
          "title": "Mineral Analysis — Estimation of Calcium in Feed Samples"
        },
        {
          "id": "p1-t12",
          "title": "Mineral Analysis — Estimation of Phosphorus in Feed Samples"
        },
        {
          "id": "p1-t13",
          "title": "Detergent Methods of Forage Analysis (Van Soest Method — NDF, ADF, ADL)"
        },
        {
          "id": "p1-t14",
          "title": "Qualitative Detection of Anti-nutritional Factors, Toxic Principles and Feed Adulterants"
        }
      ]
    },
    {
      "no": 2,
      "id": "prac-unit-2",
      "title": "Applied Ruminant Nutrition-I (Practical)",
      "short": "Nutritive Value & Balances",
      "blurb": "Computation of nutritive values (DCP, TDN), Nutritive Ratio (NR) and conducting nutrient balance trials.",
      "icon": "clipboard",
      "paper": "paper-1",
      "topics": [
        {
          "id": "p2-t01",
          "title": "Calculation of Digestible Crude Protein (DCP) and Total Digestible Nutrients (TDN) of Feedstuffs"
        },
        {
          "id": "p2-t02",
          "title": "Calculation of Nutritive Ratio (NR) and Narrow vs Wide Ratios"
        },
        {
          "id": "p2-t03",
          "title": "Estimation and Calculation of Nutrient Balances (Nitrogen, Calcium, Phosphorus Balance)"
        }
      ]
    },
    {
      "no": 3,
      "id": "prac-unit-3",
      "title": "Applied Ruminant Nutrition-II (Practical)",
      "short": "Ruminant Ration Computation",
      "blurb": "Calculating nutrient requirements (DCP, TDN, ME) and formulation of balanced rations for cattle, buffaloes, sheep and goats in normal and scarcity periods.",
      "icon": "target",
      "paper": "paper-2",
      "topics": [
        {
          "id": "p3-t01",
          "title": "Calculation of Nutrient Requirements (DCP, TDN, ME) for Maintenance, Growth and Production"
        },
        {
          "id": "p3-t02",
          "title": "Formulation of Rations for Dairy Cattle and Buffaloes (Maintenance and Milk Production)"
        },
        {
          "id": "p3-t03",
          "title": "Formulation of Balanced Rations for Sheep and Goats (Growth, Wool and Meat)"
        },
        {
          "id": "p3-t04",
          "title": "Formulation of Livestock Rations during Scarcity, Drought and Flood Periods"
        },
        {
          "id": "p3-t05",
          "title": "Study Visit to Livestock Farm and Commercial Feed Processing Mill"
        }
      ]
    },
    {
      "no": 4,
      "id": "prac-unit-4",
      "title": "Applied Non-Ruminant Nutrition (Practical)",
      "short": "Non-Ruminant Diet Formulation",
      "blurb": "Diet formulation for broilers, layers, swine, equines, dogs, cats, laboratory animals and captive zoo species; feed compounding and farm visits.",
      "icon": "sparkle",
      "paper": "paper-2",
      "topics": [
        {
          "id": "p4-t01",
          "title": "Calculation of Nutrient Requirements for Growth, Reproduction and Egg/Meat Production"
        },
        {
          "id": "p4-t02",
          "title": "Formulation of Broiler and Layer Poultry Diets using Conventional and Alternate Ingredients"
        },
        {
          "id": "p4-t03",
          "title": "Formulation of Balanced Rations for Different Categories of Swine"
        },
        {
          "id": "p4-t04",
          "title": "Principles and Methods of Compounding, Grinding, Pelleting and Mixing of Feeds"
        },
        {
          "id": "p4-t05",
          "title": "Visit to Commercial Poultry and Piggery Farms"
        },
        {
          "id": "p4-t06",
          "title": "Formulation of Balanced Diets for Horses, Dogs and Cats"
        },
        {
          "id": "p4-t07",
          "title": "Preparation of Feeds and Feeding Schedules for Captive Zoo Animals and Birds (Diet Charts)"
        }
      ]
    }
  ]
};

/* Convenience lookups built once at load. Do not edit below. */
syllabus.allUnits = syllabus.theory.concat(syllabus.practical);
syllabus.unitById = {};
syllabus.topicById = {};
syllabus.allUnits.forEach(function (u) {
  syllabus.unitById[u.id] = u;
  u.stream = (u.id.indexOf("prac-") === 0) ? "practical" : "theory";
  u.topics.forEach(function (t, i) {
    t.unitId = u.id;
    t.unitNo = u.no;
    t.stream = u.stream;
    t.index = i + 1;
    syllabus.topicById[t.id] = t;
  });
});
