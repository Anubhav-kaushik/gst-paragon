const gameData = {
  // A central place for character bios to avoid repetition
  "characters": {
    "GOKU": { "id": "GOKU", "name": "GOKU, Inspector", "icon": "fa-solid fa-user-shield", "bio": "The main protagonist — sharp, idealistic, and ready to make a difference with wit and wisdom." },
    "Priya": { "id": "Priya", "name": "Priya, Vendor", "icon": "fa-solid fa-store", "bio": "A determined small business owner navigating the complexities of GST for the first time." },
    "Aarav": { "id": "Aarav", "name": "Aarav, Manufacturer", "icon": "fa-solid fa-industry", "bio": "A diligent factory owner focused on production, but sometimes overwhelmed by GST compliance." },
    "Rohan": { "id": "Rohan", "name": "Rohan, E-Seller", "icon": "fa-solid fa-laptop-code", "bio": "A tech-savvy online seller dealing with the unique challenges of the digital marketplace." },
    "Anika": { "id": "Anika", "name": "Anika, Consultant", "icon": "fa-solid fa-briefcase", "bio": "A sharp freelance consultant whose work crosses international borders." },
    "Sunita": { "id": "Sunita", "name": "Sunita, Exporter", "icon": "fa-solid fa-ship", "bio": "An ambitious exporter managing the high-stakes world of global trade and refunds." },
    "MrVerma": { "id": "MrVerma", "name": "Mr. Verma, Builder", "icon": "fa-solid fa-building", "bio": "A seasoned real estate developer facing the intricate GST laws of construction." },
    "MsSharma": { "id": "MsSharma", "name": "Ms. Sharma, CA", "icon": "fa-solid fa-calculator", "bio": "A brilliant Chartered Accountant whose advice shapes major financial decisions." },
    "Bhushan": { "id": "Bhushan", "name": "Insp. Bhushan, Mentor", "icon": "fa-solid fa-user-secret", "bio": "A wise senior inspector who values the spirit of the law over mere procedure." },
    "KK": { "id": "KK", "name": "KK, Rival Inspector", "icon": "fa-solid fa-user-tie", "bio": "An intelligent but aggressive rival who believes in a rigid, by-the-book approach." },
    "Judge": { "id": "Judge", "name": "Tribunal Judge", "icon": "fa-solid fa-gavel", "bio": "The final arbiter of complex tax disputes." },
    "Commissioner": { "id": "Commissioner", "name": "The Commissioner", "icon": "fa-solid fa-crown", "bio": "The head of the department, whose wisdom guides the entire GST ecosystem." },
    "InspectorRathore": {
      "id": "InspectorRathore",
      "name": "Inspector Rathore, CGST Anti-Evasion",
      "icon": "fa-solid fa-user-tie",
      "bio": "A seasoned and sharp CGST officer, dedicated to uncovering complex tax evasion schemes and bringing fraudsters to justice. He relies on sharp legal minds like GOKU to unravel intricate cases."
    }
  },
  levels: [
    {
      "id": "level-1",
      "levelType": "level",
      "title": "Case: Bazaar Lane",
      "prerequisite": "Registration & Composition Scheme",
      "satisfactionGoal": 100,
      "narrativeGoal": "A determined small business owner navigating the complexities of GST for the first time.",
      "keyTopics": ["Registration", "Composition Scheme"],
      "characters": [
        "GOKU", "Priya"
      ],
      "puzzles": [
        {
          "id": "202507091701-01",
          "type": "mcq",
          "character": "Priya",
          "dialogue": "Priya: 'I exclusively sell handmade bags from my shop in Delhi. My annual turnover is ₹35 Lakhs. Do I need to register for GST?'",
          "question": "Is GST registration mandatory for Priya?",
          "options": [
            "Yes, because her turnover exceeds the ₹20 Lakh limit.",
            "No, because the threshold for selling only goods in Delhi is ₹40 Lakh.",
            "Yes, all businesses must register irrespective of turnover."
          ],
          "correctAnswer": "No, because the threshold for selling only goods in Delhi is ₹40 Lakh.",
          "satisfaction": 20,
          "difficulty": "easy",
          "knowledge": {
            "text": "The GST registration threshold for suppliers of goods exclusively is ₹40 Lakh in most states.",
            "furtherReading": "Section 22 of the CGST Act, 2017"
          }
        },
        {
          "id": "202507091701-02",
          "type": "multiple_answers",
          "character": "GOKU",
          "dialogue": "GOKU: 'Let’s list some benefits of voluntary registration.'",
          "question": "Which of these are benefits of voluntary GST registration?",
          "options": [
            "Eligible to collect tax from customers",
            "Ineligible to claim ITC",
            "Increased market credibility",
            "Can issue tax invoice"
          ],
          "correctAnswer": [
            "Eligible to collect tax from customers",
            "Increased market credibility",
            "Can issue tax invoice"
          ],
          "satisfaction": 25,
          "difficulty": "easy",
          "knowledge": {
            "text": "Voluntarily registered persons can collect tax, issue invoices, and claim ITC.",
            "furtherReading": "Section 25(3) and 31 of the CGST Act"
          }
        },
        {
          "id": "202507091701-03",
          "type": "error_detection",
          "character": "GOKU",
          "dialogue": "Priya registers voluntarily and charges GST, but forgets to file GSTR-3B monthly.",
          "question": "What is the most critical error in Priya's conduct?",
          "options": [
            "It's fine, returns are optional for voluntary registrants.",
            "She must file returns regularly.",
            "Only GSTR-1 is required.",
            "She can file yearly returns only."
          ],
          "correctAnswer": "She must file returns regularly.",
          "satisfaction": 20,
          "difficulty": "easy",
          "knowledge": {
            "text": "Voluntary registration imposes full compliance, including filing GSTR-3B.",
            "furtherReading": "Section 39 and Rule 61 of the CGST Rules"
          }
        },
        {
          "id": "202507091701-04",
          "type": "section_match",
          "character": "GOKU",
          "dialogue": "GOKU: 'Which section deals with cancellation of registration due to non-compliance post voluntary registration?'",
          "question": "Which section of the CGST Act applies here?",
          "options": [
            "Section 25",
            "Section 29",
            "Section 30",
            "Section 23"
          ],
          "correctAnswer": "Section 29",
          "satisfaction": 25,
          "difficulty": "medium",
          "knowledge": {
            "text": "Non-compliance after voluntary registration can lead to cancellation under Section 29.",
            "furtherReading": "Section 29(2)(c) of the CGST Act"
          }
        },
        {
          "id": "202507091701-05",
          "type": "mcq",
          "character": "Priya",
          "dialogue": "Priya: 'If I opt for Composition Scheme, can I sell through Amazon?'",
          "question": "Can composition dealers sell through e-commerce operators?",
          "options": [
            "Yes, composition dealers can sell online.",
            "No, e-commerce suppliers can’t opt for composition.",
            "Yes, but only in own state.",
            "Only if turnover is below ₹10 lakh."
          ],
          "correctAnswer": "No, e-commerce suppliers can’t opt for composition.",
          "satisfaction": 25,
          "difficulty": "medium",
          "knowledge": {
            "text": "Suppliers who sell via e-commerce platforms cannot opt for the composition scheme.",
            "furtherReading": "Section 10(2)(d) of the CGST Act"
          }
        },
        {
          "id": "202507091701-06",
          "type": "dilemma",
          "character": "Priya",
          "dialogue": "Priya: 'I want to supply in other states and sell via Flipkart. But I like the simplicity of composition. What do I do?'",
          "question": "What is the most legally sound option?",
          "options": [
            "Choose composition and sell via Flipkart.",
            "Register as regular taxpayer to allow inter-state and online sales.",
            "Unregister and restart to reset threshold.",
            "Stay below ₹20 lakh and avoid registration."
          ],
          "correctAnswer": "Register as regular taxpayer to allow inter-state and online sales.",
          "satisfaction": 40,
          "difficulty": "hard",
          "knowledge": {
            "text": "Composition is not allowed for e-commerce and inter-state supply.",
            "furtherReading": "Section 10(2) of the CGST Act"
          }
        },
        {
          "id": "202507091701-07",
          "type": "mcq",
          "character": "GOKU",
          "dialogue": "GOKU: 'Priya, did you know there’s a composition scheme for small taxpayers like you?'",
          "question": "What is the turnover limit for composition scheme for traders?",
          "options": ["₹20 Lakhs", "₹50 Lakhs", "₹1.5 Crores", "₹2 Crores"],
          "correctAnswer": "₹1.5 Crores",
          "satisfaction": 20,
          "difficulty": "easy",
          "knowledge": {
            "text": "The threshold limit for opting into the composition scheme is ₹1.5 Crores in most states.",
            "furtherReading": "Section 10(1) of the CGST Act"
          }
        },
        {
          "id": "202507091701-08",
          "type": "multiple_answers",
          "character": "Priya",
          "dialogue": "Priya: 'I’m confused about who can opt for this scheme.'",
          "question": "Who among the following is eligible for the composition scheme?",
          "options": ["Retail trader within state limits", "Ice cream manufacturer", "Online seller via Amazon", "Local restaurant owner"],
          "correctAnswer": ["Retail trader within state limits", "Local restaurant owner"],
          "satisfaction": 25,
          "difficulty": "medium",
          "knowledge": {
            "text": "Composition scheme is not available to manufacturers of ice cream or e-commerce sellers.",
            "furtherReading": "Section 10(2) of the CGST Act"
          }
        },
        {
          "id": "202507091701-09",
          "type": "error_detection",
          "character": "GOKU",
          "dialogue": "Priya: 'I filed for composition but issued tax invoices by mistake.'",
          "question": "What is the compliance error here?",
          "options": ["Tax invoice can be used by composition taxpayers.", "Only e-invoice is allowed.", "Composition dealers must issue Bill of Supply.", "There’s no error."],
          "correctAnswer": "Composition dealers must issue Bill of Supply.",
          "satisfaction": 20,
          "difficulty": "easy",
          "knowledge": {
            "text": "Composition taxpayers must issue a Bill of Supply and not tax invoices.",
            "furtherReading": "Rule 49 of the CGST Rules"
          }
        },
        {
          "id": "202507091701-10",
          "type": "section_match",
          "character": "GOKU",
          "dialogue": "GOKU: 'Let’s match the legal provision to Priya’s scenario.'",
          "question": "Which section mandates that composition dealers cannot collect tax from recipients?",
          "options": ["Section 10(1)", "Section 10(4)", "Section 31(1)", "Section 9"],
          "correctAnswer": "Section 10(4)",
          "satisfaction": 25,
          "difficulty": "medium",
          "knowledge": {
            "text": "Section 10(4) prohibits composition taxpayers from collecting GST from customers.",
            "furtherReading": "Section 10(4) of the CGST Act"
          }
        },
        {
          "id": "202507091701-11",
          "type": "mcq",
          "character": "Priya",
          "dialogue": "Priya: 'If I switch from composition to regular scheme, can I claim ITC on stock?'",
          "question": "Can ITC be claimed on inputs after switching to the regular scheme?",
          "options": ["Yes, but only for goods in hand.", "No, ITC is forever blocked.", "Only if approved by officer.", "Only for imported goods."],
          "correctAnswer": "Yes, but only for goods in hand.",
          "satisfaction": 20,
          "difficulty": "easy",
          "knowledge": {
            "text": "You can claim ITC on inputs held in stock subject to conditions when switching to regular scheme.",
            "furtherReading": "Section 18(1)(c) of the CGST Act"
          }
        },
        {
          "id": "202507091701-12",
          "type": "dilemma",
          "character": "Priya",
          "dialogue": "Priya: 'I want to grow fast, sell in other states, but I like the simplicity of composition.'",
          "question": "What is the most future-proof and compliant decision?",
          "options": ["Stick to composition and avoid growth.", "Switch to regular and invest in compliance.", "Register fresh in another name.", "Ignore GST for now."],
          "correctAnswer": "Switch to regular and invest in compliance.",
          "satisfaction": 40,
          "difficulty": "hard",
          "knowledge": {
            "text": "For interstate supply and scalability, regular registration is essential.",
            "furtherReading": "Section 22 and 24 of CGST Act"
          }
        },
        {
          "id": "202507091701-13",
          "type": "mcq",
          "character": "Priya",
          "dialogue": "Priya: 'Can I supply goods outside my state under the composition scheme?'",
          "question": "Can composition scheme dealers make inter-state outward supplies?",
          "options": ["Yes", "Only for services", "No", "Yes, but with restrictions"],
          "correctAnswer": "No",
          "satisfaction": 20,
          "difficulty": "easy",
          "knowledge": {
            "text": "Composition scheme is limited to intra-state supply only.",
            "furtherReading": "Section 10(2)(c) of the CGST Act"
          }
        },
        {
          "id": "202507091701-14",
          "type": "multiple_answers",
          "character": "GOKU",
          "dialogue": "GOKU: 'Let’s see who can never opt for the composition scheme.'",
          "question": "Select all persons ineligible for the composition scheme:",
          "options": ["E-commerce seller", "Ice cream manufacturer", "Restaurant owner", "Book store owner"],
          "correctAnswer": ["E-commerce seller", "Ice cream manufacturer"],
          "satisfaction": 25,
          "difficulty": "medium",
          "knowledge": {
            "text": "Certain suppliers like e-commerce operators and specific manufacturers are ineligible.",
            "furtherReading": "Section 10(2) of CGST Act"
          }
        },
        {
          "id": "202507091701-15",
          "type": "error_detection",
          "character": "Priya",
          "dialogue": "Priya registered as composition dealer but collected GST from customers and showed it on invoice.",
          "question": "What’s the primary error in Priya’s action?",
          "options": ["Charging GST while under composition", "Not filing GSTR-1", "Selling outside India", "Using old invoice format"],
          "correctAnswer": "Charging GST while under composition",
          "satisfaction": 20,
          "difficulty": "easy",
          "knowledge": {
            "text": "Composition taxpayers cannot collect tax from customers.",
            "furtherReading": "Section 10(4) of the CGST Act"
          }
        },
        {
          "id": "202507091701-16",
          "type": "section_match",
          "character": "GOKU",
          "dialogue": "GOKU: 'Which section applies to voluntary registration?'",
          "question": "Identify the section that permits voluntary registration under GST:",
          "options": ["Section 25(3)", "Section 22", "Section 24", "Section 29"],
          "correctAnswer": "Section 25(3)",
          "satisfaction": 25,
          "difficulty": "medium",
          "knowledge": {
            "text": "Any person may voluntarily opt for registration under Section 25(3).",
            "furtherReading": "Section 25(3) of the CGST Act"
          }
        },
        {
          "id": "202507091701-17",
          "type": "mcq",
          "character": "Priya",
          "dialogue": "Priya: 'What kind of return do I need to file under composition scheme?'",
          "question": "Which return is filed quarterly by composition taxpayers?",
          "options": ["GSTR-3B", "GSTR-4", "CMP-08", "GSTR-9"],
          "correctAnswer": "CMP-08",
          "satisfaction": 20,
          "difficulty": "easy",
          "knowledge": {
            "text": "Composition taxpayers file CMP-08 quarterly to pay tax.",
            "furtherReading": "Rule 62 of the CGST Rules"
          }
        },
        {
          "id": "202507091701-18",
          "type": "dilemma",
          "character": "Priya",
          "dialogue": "Priya is offered a lucrative interstate contract. She must decide how to proceed within GST framework.",
          "question": "What should Priya do to accept the interstate supply order lawfully?",
          "options": ["Continue composition and accept order", "Switch to regular registration", "Do not accept order", "Issue proforma invoice only"],
          "correctAnswer": "Switch to regular registration",
          "satisfaction": 35,
          "difficulty": "hard",
          "knowledge": {
            "text": "Interstate supply is not allowed under composition. Regular registration is required.",
            "furtherReading": "Section 10(2)(c) of CGST Act"
          }
        },
        {
          "id": "202507091701-19",
          "type": "mcq",
          "character": "GOKU",
          "dialogue": "GOKU: 'What happens if your turnover exceeds the composition threshold mid-year?'",
          "question": "What must a dealer do upon crossing the composition threshold?",
          "options": ["Continue composition", "Pay extra tax", "Switch to regular scheme", "Re-register after 6 months"],
          "correctAnswer": "Switch to regular scheme",
          "satisfaction": 20,
          "difficulty": "easy",
          "knowledge": {
            "text": "Crossing threshold voids eligibility, and registration must be converted to regular.",
            "furtherReading": "Section 10(3) of the CGST Act"
          }
        },
        {
          "id": "202507091701-20",
          "type": "multiple_answers",
          "character": "Priya",
          "dialogue": "Priya: 'What are my ongoing compliance duties if I stay in the composition scheme?'",
          "question": "Select all compliance obligations under composition scheme:",
          "options": ["Filing CMP-08", "Filing GSTR-1", "Issuing Bill of Supply", "Paying tax quarterly"],
          "correctAnswer": ["Filing CMP-08", "Issuing Bill of Supply", "Paying tax quarterly"],
          "satisfaction": 25,
          "difficulty": "medium",
          "knowledge": {
            "text": "Composition dealers have limited but mandatory compliance obligations.",
            "furtherReading": "Rule 62 and Section 39 of CGST Act"
          }
        },
        {
          "id": "202507091701-21",
          "type": "mcq",
          "character": "GOKU",
          "dialogue": "GOKU: 'You must display something at your premises if you're a composition dealer.'",
          "question": "What must composition taxpayers display at their premises?",
          "options": ["GST registration certificate", "Tax invoice copies", "Signboard stating composition taxpayer", "CMP-08 receipt"],
          "correctAnswer": "Signboard stating composition taxpayer",
          "satisfaction": 20,
          "difficulty": "easy",
          "knowledge": {
            "text": "A board declaring the composition status must be displayed prominently.",
            "furtherReading": "Rule 5(1)(f) of CGST Rules"
          }
        },
        {
          "id": "202507091701-22",
          "type": "error_detection",
          "character": "Priya",
          "dialogue": "Priya missed filing CMP-08 for two quarters but continued business as usual.",
          "question": "What is the non-compliance in this scenario?",
          "options": ["No error if tax paid later", "Filing CMP-08 is optional", "Filing is mandatory and late fee applies", "Composition tax not required"],
          "correctAnswer": "Filing is mandatory and late fee applies",
          "satisfaction": 25,
          "difficulty": "medium",
          "knowledge": {
            "text": "Late filing of CMP-08 invites penalties and interest.",
            "furtherReading": "Section 47 and Rule 62 of CGST Rules"
          }
        },
        {
          "id": "202507091701-23",
          "type": "section_match",
          "character": "GOKU",
          "dialogue": "GOKU: 'Let’s test your legal recall one last time.'",
          "question": "Which section lays down conditions for availing composition scheme?",
          "options": ["Section 10(1)", "Section 10(2)", "Section 10(3)", "Section 22"],
          "correctAnswer": "Section 10(2)",
          "satisfaction": 25,
          "difficulty": "medium",
          "knowledge": {
            "text": "Section 10(2) specifies the eligibility conditions to opt for composition.",
            "furtherReading": "Section 10(2) of the CGST Act"
          }
        },
        {
          "id": "202507091701-24",
          "type": "dilemma",
          "character": "Priya",
          "dialogue": "Priya: 'Should I continue in composition for simplicity, or go regular to grow?'",
          "question": "What’s the best strategic choice for Priya now that her business is expanding?",
          "options": ["Continue composition", "Switch to regular scheme", "Cancel registration", "Split business across states"],
          "correctAnswer": "Switch to regular scheme",
          "satisfaction": 40,
          "difficulty": "hard",
          "knowledge": {
            "text": "For scaling, claiming ITC, and inter-state trade, regular scheme is essential.",
            "furtherReading": "Section 22 and Section 10 of CGST Act"
          }
        }
      ]
    },

    // STAGE 2
    {
      "id": "level-2",
      "levelType": "level",
      "title": "The Factory Loop: Advanced Compliance",
      "location": "Aarav's Manufacturing Unit – outskirts of Ahmedabad",
      "satisfactionGoal": 300,
      "characters": ["GOKU", "Aarav"],
      "narrativeGoal": "Aarav is expanding his manufacturing unit and needs deeper insights into complex ITC scenarios, RCM implications, and advanced E-Way Bill rules. GOKU must guide him through intricate compliance challenges to ensure his business flourishes without legal hurdles.",
      "topic": [
        "Input Tax Credit",
        "Capital Goods",
        "E-Way Bill",
        "Blocked Credits",
        "Reverse Charge Mechanism (RCM)",
        "ITC Reversal",
        "Time of Supply"
      ],
      "prerequisite": "ITC & E-Way Bill",
      "puzzles": [
        {
          "id": "202507092227-01",
          "type": "mcq",
          "character": "Aarav",
          "dialogue": "Goku, my new packaging machine just arrived! It cost me ₹5,00,000 plus ₹90,000 GST. Can I claim the full ₹90,000 as Input Tax Credit (ITC) on this machine, or is there a catch for capital goods?",
          "question": "Aarav just purchased a packaging machine, which is a capital good. Can he claim the full GST paid as ITC immediately?",
          "options": [
            "Yes, absolutely, as it's for his business and used for taxable supplies.",
            "No, ITC on capital goods can only be claimed after 5 years, proportionately.",
            "Yes, but only if he foregoes depreciation on the GST component under the Income Tax Act.",
            "No, ITC is generally not allowed on capital goods under any circumstances."
          ],
          "correctAnswer": "Yes, absolutely, as it's for his business and used for taxable supplies.",
          "satisfaction": 15,
          "difficulty": "easy",
          "knowledge": {
            "text": "ITC on capital goods is generally allowed in full in the same tax period it's received, provided it's used for business and making taxable supplies. There's no proportional claim over years for the ITC itself, unlike depreciation. However, if depreciation on the GST component is claimed under Income Tax Act, then ITC on that component cannot be claimed under GST.",
            "furtherReading": "Section 16(1) of the CGST Act, 2017; Section 16(3) of the CGST Act, 2017"
          }
        },
        {
          "id": "202507092227-02",
          "type": "error_detection",
          "character": "GOKU",
          "dialogue": "Aarav is showing me his purchase invoices. He's trying to claim ITC on a new air conditioning unit installed in the director's personal cabin within the factory premises, stating it's 'for employee welfare'.",
          "question": "From Goku's observations, what is the most critical error in Aarav's attempt to claim ITC on this AC unit, suggesting it's not a valid claim?",
          "options": [
            "The AC unit is not directly used for manufacturing output.",
            "ITC on air conditioning units for personal use or amenities (not for manufacturing or re-sale) is a specifically blocked credit.",
            "He should have claimed depreciation on the AC unit instead of ITC.",
            "The supplier is from a different state, which complicates the ITC claim process."
          ],
          "correctAnswer": "ITC on air conditioning units for personal use or amenities (not for manufacturing or re-sale) is a specifically blocked credit.",
          "satisfaction": 20,
          "difficulty": "medium",
          "knowledge": {
            "text": "Section 17(5)(g) specifically blocks ITC on goods or services used for personal consumption. While 'employee welfare' can be a grey area, AC in a 'personal cabin' leans towards amenities for which ITC is blocked, unless it's part of a manufacturing process where AC is essential or the business is in the supply of such services/goods.",
            "furtherReading": "Section 17(5)(g) of the CGST Act, 2017"
          }
        },
        {
          "id": "202507092227-03",
          "type": "mcq",
          "character": "Aarav",
          "dialogue": "I'm dispatching a consignment of finished goods worth ₹60,000 from my factory to a distributor 15 km away, within Ahmedabad city limits. Do I need an E-Way Bill for this movement, or is it too short a distance?",
          "question": "Aarav is dispatching goods worth ₹60,000 within the same city, 15 km away. Is an E-Way Bill required for this movement?",
          "options": [
            "Yes, an E-Way Bill is always required for any movement of goods.",
            "No, the value is below the general threshold of ₹50,000.",
            "No, because the distance is less than 50 km.",
            "Yes, because the consignment value exceeds the threshold of ₹50,000."
          ],
          "correctAnswer": "Yes, because the consignment value exceeds the threshold of ₹50,000.",
          "satisfaction": 15,
          "difficulty": "easy",
          "knowledge": {
            "text": "An E-Way Bill is generally required for the movement of goods of consignment value exceeding ₹50,000. This threshold applies irrespective of the distance within the state, unless specific state rules provide higher thresholds for intra-state movements (which is not the default).",
            "furtherReading": "Rule 138 of the CGST Rules, 2017"
          }
        },
        {
          "id": "202507092227-04",
          "type": "mcq",
          "character": "GOKU",
          "dialogue": "Aarav's last question was a good reminder. What if the consignment he was dispatching was for exempted goods worth ₹1,00,000 to the same distributor?",
          "question": "If Aarav were dispatching exempted goods worth ₹1,00,000, would an E-Way Bill be required?",
          "options": [
            "Yes, because the value exceeds ₹50,000.",
            "No, because the goods are exempted from GST.",
            "Only if the movement is inter-state.",
            "Only if the recipient is an unregistered person."
          ],
          "correctAnswer": "No, because the goods are exempted from GST.",
          "satisfaction": 20,
          "difficulty": "medium",
          "knowledge": {
            "text": "E-Way Bill is not required for the movement of exempted goods, irrespective of their value, as there is no GST leviable on such goods.",
            "furtherReading": "Rule 138(14) of the CGST Rules, 2017 (Specific exemptions)"
          }
        },
        {
          "id": "202507092227-05",
          "type": "calculative",
          "character": "Aarav",
          "dialogue": "I bought some raw materials for ₹2,00,000 plus 18% GST. The supplier has filed their GSTR-1, but I haven't filed my GSTR-3B yet for the month. How much ITC can I provisionally claim on this raw material purchase for this month, assuming all other conditions are met?",
          "question": "Calculate the amount of ITC Aarav can provisionally claim on the raw materials purchase for this month.",
          "options": [],
          "correctAnswer": 36000,
          "satisfaction": 15,
          "difficulty": "easy",
          "knowledge": {
            "text": "Aarav can claim the full ITC of ₹36,000 (18% of ₹2,00,000) as long as the supplier has uploaded the invoice in their GSTR-1 (making it appear in Aarav's GSTR-2B) and all other conditions under Section 16 are met. Filing of GSTR-3B by the recipient is a condition for utilization of ITC, not for the ability to claim/show in ledger itself. The credit can be availed upon receipt of goods/services.",
            "furtherReading": "Section 16(2) of the CGST Act, 2017; Rule 36(4) of the CGST Rules, 2017"
          }
        },
        {
          "id": "202507092227-06",
          "type": "section_match",
          "character": "Aarav",
          "dialogue": "My consultant told me about some 'blocked credits' where I can't claim ITC even if I pay GST. I'm still a bit confused about the specific legal backing. Can you tell me which specific section of the CGST Act deals with these blocked credits?",
          "question": "Which specific section of the CGST Act, 2017, explicitly lists the circumstances and types of goods/services on which Input Tax Credit (ITC) is generally not allowed, often referred to as 'blocked credits'?",
          "options": [
            "Section 16 (Eligibility for taking ITC)",
            "Section 17 (Apportionment of credit and blocked credits)",
            "Section 18 (Availability of credit in special circumstances)",
            "Section 19 (Taking input tax credit in respect of inputs and capital goods sent for job work)"
          ],
          "correctAnswer": "Section 17 (Apportionment of credit and blocked credits)",
          "satisfaction": 25,
          "difficulty": "hard",
          "knowledge": {
            "text": "Section 17 of the CGST Act specifically deals with 'Apportionment of credit and blocked credits'. Sub-section (5) of Section 17 lists various goods and services on which ITC is not available, even if used for business purposes, such as motor vehicles (with exceptions), food and beverages, membership fees, etc.",
            "furtherReading": "Section 17(5) of the CGST Act, 2017"
          }
        },
        {
          "id": "202507092227-07",
          "type": "multiple_answers",
          "character": "Aarav",
          "dialogue": "I'm setting up a new marketing campaign and hired a freelance graphic designer. They are unregistered. Will I need to pay GST on their services under Reverse Charge Mechanism (RCM)? If so, what are the key conditions for RCM applicability in this scenario?",
          "question": "Under what conditions would Aarav, as a registered person, be liable to pay GST under RCM for services received from an unregistered graphic designer?",
          "options": [
            "If the services are notified services under Section 9(3) of the CGST Act.",
            "If the aggregate turnover of the graphic designer exceeds the threshold for registration.",
            "If the recipient (Aarav) is a registered person.",
            "If the supply is made by an unregistered person to a registered person (general RCM for unregistered persons, though largely removed, specific services remain)."
          ],
          "correctAnswer": [
            "If the services are notified services under Section 9(3) of the CGST Act.",
            "If the recipient (Aarav) is a registered person."
          ],
          "satisfaction": 20,
          "difficulty": "medium",
          "knowledge": {
            "text": "RCM applies to specific categories of goods or services notified under Section 9(3) of the CGST Act. The recipient must also be a registered person. The general RCM on supplies from unregistered to registered persons has largely been removed, so it only applies if the service itself is specifically notified under Section 9(3) (e.g., GTA, legal services, director's services).",
            "furtherReading": "Section 9(3) of the CGST Act, 2017; Notification No. 13/2017-Central Tax (Rate)"
          }
        },
        {
          "id": "202507092227-08",
          "type": "calculative",
          "character": "Aarav",
          "dialogue": "I dispatched a large order. The E-Way Bill was generated for a validity of 5 days, starting today, 9th July 2025. What is the exact date and time until which this E-Way Bill will be valid?",
          "question": "Calculate the exact date and time of validity for an E-Way Bill generated on 9th July 2025 with a 5-day validity period.",
          "options": [],
          "correctAnswer": "2025-07-14 23:59:59",
          "satisfaction": 20,
          "difficulty": "medium",
          "knowledge": {
            "text": "The validity of an E-Way Bill is calculated from the date and time of its generation. For every 100 km (or part thereof) of distance, 1 day validity is provided. Here, a 5-day validity means it's valid until the end of the 5th day, i.e., 23:59:59 hours on the 5th day from generation. So, if generated on July 9, 2025, it's valid until July 14, 2025, 23:59:59.",
            "furtherReading": "Rule 138(10) of the CGST Rules, 2017"
          }
        },
        {
          "id": "202507092227-09",
          "type": "mcq",
          "character": "GOKU",
          "dialogue": "Aarav just told me he wants to shift some raw materials from his main factory in Ahmedabad to a storage warehouse in Gandhinagar, which is registered under the same GSTIN as his factory. Is an E-Way Bill required for this internal movement?",
          "question": "Is an E-Way Bill required for the movement of raw materials from a factory to a storage warehouse under the same GSTIN?",
          "options": [
            "Yes, E-Way Bill is always required for inter-city movement of goods.",
            "No, as long as it's within the same state and same GSTIN.",
            "Yes, if the consignment value exceeds ₹50,000, even if under the same GSTIN.",
            "Only if the movement is for job-work."
          ],
          "correctAnswer": "Yes, if the consignment value exceeds ₹50,000, even if under the same GSTIN.",
          "satisfaction": 20,
          "difficulty": "medium",
          "knowledge": {
            "text": "An E-Way Bill is required for the movement of goods exceeding the specified threshold (₹50,000 or higher state-specific threshold for intra-state movement) even if the movement is between distinct persons (units under the same PAN but different GSTINs) or within the same GSTIN (e.g., from factory to godown) if it's an 'outward supply' or 'inward supply' as defined, or for 'delivery challan' cases like movement for job work or for own use.",
            "furtherReading": "Rule 138(1) of the CGST Rules, 2017"
          }
        },
        {
          "id": "202507092227-10",
          "type": "mcq",
          "character": "Aarav",
          "dialogue": "I received a consignment of goods, but it turns out the supplier wrongly charged 5% GST instead of 18%. Can I still claim the 5% ITC as shown on the invoice?",
          "question": "If Aarav receives an invoice with an incorrect GST rate (5% instead of 18%), can he claim ITC for the wrongly charged 5%?",
          "options": [
            "Yes, he can claim whatever is shown on the invoice.",
            "No, ITC can only be claimed on the correct amount of tax legally payable.",
            "He can claim 5% now and the remaining 13% later.",
            "He should ask the supplier to issue a credit note for the difference."
          ],
          "correctAnswer": "No, ITC can only be claimed on the correct amount of tax legally payable.",
          "satisfaction": 25,
          "difficulty": "hard",
          "knowledge": {
            "text": "ITC can only be claimed on the amount of tax that has been 'actually paid' to the government and is legally payable. If the supplier has charged an incorrect rate, the recipient is not entitled to claim ITC on the excess/incorrect amount of tax. The supplier must issue a revised invoice or credit note, and the recipient can only claim ITC on the correct tax.",
            "furtherReading": "Section 16(2)(c) of the CGST Act, 2017"
          }
        },
        {
          "id": "202507092227-11",
          "type": "error_detection",
          "character": "Aarav",
          "dialogue": "My accountant just informed me that a supplier from whom I purchased raw materials has cancelled their GST registration with retrospective effect from 6 months ago. I had claimed ITC for those purchases. What's the biggest problem for me?",
          "question": "What is the single most critical problem for Aarav regarding the ITC he claimed from a supplier whose GST registration was cancelled retrospectively?",
          "options": [
            "He will have to pay a penalty for dealing with an unregistered supplier.",
            "The ITC claimed from that supplier will become ineligible and must be reversed.",
            "He cannot claim ITC from any other suppliers for that period.",
            "He will have to re-register the supplier under his own GSTIN."
          ],
          "correctAnswer": "The ITC claimed from that supplier will become ineligible and must be reversed.",
          "satisfaction": 30,
          "difficulty": "hard",
          "knowledge": {
            "text": "One of the fundamental conditions for ITC is that the supplier must be a registered person and have remitted the tax. If a supplier's registration is cancelled retrospectively, it implies they were effectively unregistered during the period of supply, making the ITC claimed by the recipient ineligible. Aarav would be required to reverse such ITC.",
            "furtherReading": "Section 16(2)(a) and (c) of the CGST Act, 2017"
          }
        },
        {
          "id": "202507092227-12",
          "type": "mcq",
          "character": "Aarav",
          "dialogue": "I'm planning to send some semi-finished goods for job work to a unit 200 km away. These goods are valued at ₹75,000. Do I need to issue an E-Way Bill, and if so, what document should accompany the movement?",
          "question": "For sending semi-finished goods for job work valued at ₹75,000 to a unit 200 km away, what is required?",
          "options": [
            "Only a tax invoice, no E-Way Bill needed.",
            "An E-Way Bill along with a delivery challan.",
            "An E-Way Bill along with a tax invoice.",
            "No documents are required for job work movement."
          ],
          "correctAnswer": "An E-Way Bill along with a delivery challan.",
          "satisfaction": 20,
          "difficulty": "medium",
          "knowledge": {
            "text": "Movement of goods for job work requires an E-Way Bill if the consignment value exceeds the threshold. The accompanying document for such movement is a delivery challan, as there is no sale involved at this stage.",
            "furtherReading": "Rule 55 and Rule 138 of the CGST Rules, 2017"
          }
        },
        {
          "id": "202507092227-13",
          "type": "multiple_answers",
          "character": "GOKU",
          "dialogue": "Aarav is keen on ensuring his ITC claims are completely valid. What are the essential conditions a registered person must fulfill to be eligible to claim Input Tax Credit?",
          "question": "Which of the following are essential conditions for a registered person to be eligible to claim Input Tax Credit under GST?",
          "options": [
            "Possession of a tax invoice or debit note.",
            "Receipt of goods or services.",
            "Furnishing of GSTR-1 by the recipient.",
            "Tax charged in respect of such supply has been actually paid to the Government by the supplier.",
            "Furnishing of return under Section 39 by the recipient."
          ],
          "correctAnswer": [
            "Possession of a tax invoice or debit note.",
            "Receipt of goods or services.",
            "Tax charged in respect of such supply has been actually paid to the Government by the supplier.",
            "Furnishing of return under Section 39 by the recipient."
          ],
          "satisfaction": 25,
          "difficulty": "hard",
          "knowledge": {
            "text": "The four main conditions for claiming ITC are: possession of tax invoice/debit note, receipt of goods/services, actual payment of tax by the supplier, and furnishing of return (GSTR-3B) by the recipient. The supplier furnishing GSTR-1 facilitates GSTR-2B, which is crucial for matching, but it's the actual payment of tax to the government and the recipient's return filing that are statutory conditions.",
            "furtherReading": "Section 16(2) of the CGST Act, 2017"
          }
        },
        {
          "id": "202507092227-14",
          "type": "mcq",
          "character": "Aarav",
          "dialogue": "I had some raw materials lying in stock when I applied for GST registration. Now that I'm registered, can I claim ITC on those pre-registration stock items?",
          "question": "Can Aarav claim ITC on raw materials held in stock immediately prior to obtaining GST registration?",
          "options": [
            "No, ITC is only for post-registration purchases.",
            "Yes, if he applies for it within 30 days from the date of registration.",
            "Yes, but only if the invoices are less than one year old.",
            "Only if he was previously registered under an old tax law like VAT."
          ],
          "correctAnswer": "Yes, but only if the invoices are less than one year old.",
          "satisfaction": 20,
          "difficulty": "medium",
          "knowledge": {
            "text": "ITC on inputs held in stock and inputs contained in semi-finished or finished goods held in stock immediately prior to the date of registration can be claimed, provided the invoices for such inputs are not older than one year from the date of registration. This is a special circumstance for ITC.",
            "furtherReading": "Section 18(1)(a) of the CGST Act, 2017"
          }
        },
        {
          "id": "202507092227-15",
          "type": "mcq",
          "character": "Aarav",
          "dialogue": "I supplied some goods on 1st July and issued an invoice. The payment for these goods was received on 10th July. When is the 'Time of Supply' for these goods, triggering my GST liability?",
          "question": "Based on the information provided, what is the 'Time of Supply' for Aarav's goods?",
          "options": [
            "The date of issuing the invoice (1st July).",
            "The date of receipt of payment (10th July).",
            "The earlier of the date of invoice or date of payment (1st July).",
            "The date the goods were dispatched from the factory."
          ],
          "correctAnswer": "The earlier of the date of invoice or date of payment (1st July).",
          "satisfaction": 15,
          "difficulty": "easy",
          "knowledge": {
            "text": "For goods, the Time of Supply is the earlier of the date of issue of invoice by the supplier or the last date on which he is required to issue invoice, or the date of receipt of payment by the supplier. In this case, the invoice date is earlier than the payment date, so the time of supply is the invoice date.",
            "furtherReading": "Section 12(2) of the CGST Act, 2017"
          }
        },
        {
          "id": "202507092227-16",
          "type": "calculative",
          "character": "Aarav",
          "dialogue": "I had claimed ITC of ₹50,000 on some inputs, but later I used 20% of those inputs to manufacture exempted goods. How much ITC do I need to reverse?",
          "question": "Calculate the amount of ITC Aarav needs to reverse for inputs used in manufacturing exempted goods.",
          "options": [],
          "correctAnswer": 10000,
          "satisfaction": 20,
          "difficulty": "medium",
          "knowledge": {
            "text": "If inputs on which ITC has been claimed are subsequently used for making exempted supplies or for non-business purposes, the proportionate ITC must be reversed. Here, 20% of ₹50,000 = ₹10,000.",
            "furtherReading": "Section 17(2) of the CGST Act, 2017; Rule 42 of the CGST Rules, 2017"
          }
        },
        {
          "id": "202507092227-17",
          "type": "mcq",
          "character": "Aarav",
          "dialogue": "My friend told me that sometimes, if the recipient doesn't pay the supplier within a certain period, the ITC claimed might need to be reversed. Is this true?",
          "question": "Under what condition would Aarav be required to reverse Input Tax Credit (ITC) if he does not pay the supplier?",
          "options": [
            "If he does not pay the supplier within 90 days from the date of invoice.",
            "If he does not pay the supplier within 180 days from the date of invoice.",
            "If he does not pay the supplier within 365 days from the date of invoice.",
            "ITC reversal is only for goods returned, not for non-payment."
          ],
          "correctAnswer": "If he does not pay the supplier within 180 days from the date of invoice.",
          "satisfaction": 25,
          "difficulty": "hard",
          "knowledge": {
            "text": "If the recipient fails to pay the value of supply along with tax due thereon to the supplier within 180 days from the date of issue of invoice, the amount of ITC availed on such supply needs to be reversed by the recipient. This amount can be re-availed once payment is made.",
            "furtherReading": "Second proviso to Section 16(2) of the CGST Act, 2017; Rule 37 of the CGST Rules, 2017"
          }
        },
        {
          "id": "202507092227-18",
          "type": "dilemma",
          "character": "Aarav",
          "dialogue": "I've gained so much knowledge about ITC and E-Way Bills. I've realized I have some old invoices (from 2 years ago) on which I missed claiming ITC. Can I claim them now, or is there a time limit?",
          "question": "What is the legally sound advice regarding the time limit for Aarav to claim Input Tax Credit (ITC) on old invoices?",
          "options": [
            "He can claim it anytime, as there is no time limit for ITC.",
            "He can claim it, but only if the amount is significant.",
            "He cannot claim ITC after the due date of furnishing the return under Section 39 for September following the end of the financial year to which such invoice pertains, or furnishing of the annual return, whichever is earlier.",
            "He can claim it by filing a manual application with the GST department."
          ],
          "correctAnswer": "He cannot claim ITC after the due date of furnishing the return under Section 39 for September following the end of the financial year to which such invoice pertains, or furnishing of the annual return, whichever is earlier.",
          "satisfaction": 30,
          "difficulty": "hard",
          "knowledge": {
            "text": "There is a strict time limit for claiming ITC. ITC for any invoice relating to a financial year can be claimed up to the due date of furnishing the GSTR-3B for the month of September following the end of that financial year, or furnishing of the annual return for the said financial year, whichever is earlier. After this period, the credit lapses.",
            "furtherReading": "Section 16(4) of the CGST Act, 2017"
          }
        }
      ]
    },
    // STAGE 3
    {
      "id": "level-3",
      "levelType": "level",
      "title": "Digital Crossroads: E-Commerce & Beyond",
      "location": "Rohan's Home Office – Digital Hub, Bengaluru",
      "satisfactionGoal": 300,
      "characters": ["GOKU", "Rohan"],
      "narrativeGoal": "Rohan, an aspiring online seller, is overwhelmed by the specific GST compliances for e-commerce operators, especially regarding Tax Collection at Source (TCS) and complex return filings. GOKU needs to demystify these rules, ensuring Rohan's digital venture is fully compliant.",
      "topic": [
        "E-Commerce Operator (ECO)",
        "Tax Collection at Source (TCS)",
        "GST Registration for ECOs",
        "GST Returns (GSTR-1, GSTR-3B, GSTR-8)",
        "Small Suppliers on ECOs",
        "Inter-state Supplies"
      ],
      "prerequisite": "E-Commerce & TCS",
      "puzzles": [
        {
          "id": "202507092230-01",
          "type": "mcq",
          "character": "Rohan",
          "dialogue": "Goku, I'm just starting to sell handicrafts online through a major e-commerce platform. Do I need to register for GST even if my turnover is below the normal threshold of ₹40 lakhs?",
          "question": "Does Rohan need to compulsorily register for GST if he sells goods through an e-commerce operator, even if his aggregate turnover is below the general threshold?",
          "options": [
            "No, as long as his turnover is below ₹40 lakhs (or ₹20 lakhs for services).",
            "Yes, all persons supplying goods or services through an e-commerce operator must compulsorily register.",
            "Only if he makes inter-state supplies.",
            "Only if the e-commerce operator mandates it."
          ],
          "correctAnswer": "Yes, all persons supplying goods or services through an e-commerce operator must compulsorily register.",
          "satisfaction": 15,
          "difficulty": "easy",
          "knowledge": {
            "text": "As per Section 24(ix) of the CGST Act, 2017, persons who supply goods or services through an e-commerce operator who is required to collect tax at source (TCS) are mandatorily required to obtain GST registration, irrespective of their aggregate turnover.",
            "furtherReading": "Section 24(ix) of the CGST Act, 2017"
          }
        },
        {
          "id": "202507092230-02",
          "type": "mcq",
          "character": "Rohan",
          "dialogue": "Okay, so I have to register. The e-commerce platform mentioned something about 'TCS'. What exactly is 'Tax Collected at Source' in the context of e-commerce?",
          "question": "What is the correct understanding of 'Tax Collected at Source' (TCS) under GST for e-commerce transactions?",
          "options": [
            "It's a tax collected by the seller from the buyer at the time of sale.",
            "It's a tax collected by the e-commerce operator on the net value of taxable supplies made through their platform.",
            "It's an advance tax paid by the e-commerce operator on their own commission.",
            "It's an additional tax levied on online sales."
          ],
          "correctAnswer": "It's a tax collected by the e-commerce operator on the net value of taxable supplies made through their platform.",
          "satisfaction": 15,
          "difficulty": "easy",
          "knowledge": {
            "text": "TCS is collected by the E-Commerce Operator (ECO) at the rate of 1% (0.5% CGST + 0.5% SGST or 1% IGST) on the net value of taxable supplies made through their platform by suppliers.",
            "furtherReading": "Section 52 of the CGST Act, 2017"
          }
        },
        {
          "id": "202507092230-03",
          "type": "calculative",
          "character": "Rohan",
          "dialogue": "Last month, I sold handicrafts worth ₹1,50,000 through the e-commerce platform. The platform charged me a commission of ₹15,000. How much TCS would the e-commerce operator collect from me for this month?",
          "question": "Calculate the amount of TCS the e-commerce operator would collect from Rohan for his sales.",
          "options": [],
          "correctAnswer": 1500,
          "satisfaction": 20,
          "difficulty": "medium",
          "knowledge": {
            "text": "TCS is collected at 1% on the 'net value of taxable supplies'. This is the gross value of supplies less any returns. Commission charged by the platform is irrelevant for TCS calculation. So, 1% of ₹1,50,000 is ₹1,500.",
            "furtherReading": "Section 52(1) of the CGST Act, 2017"
          }
        },
        {
          "id": "202507092230-04",
          "type": "mcq",
          "character": "GOKU",
          "dialogue": "Rohan will need to reconcile the TCS collected by the e-commerce operator with his own sales data. What return does an e-commerce operator file to declare the TCS collected?",
          "question": "Which specific GST return is filed by an E-Commerce Operator (ECO) to declare the details of supplies and TCS collected?",
          "options": [
            "GSTR-1",
            "GSTR-3B",
            "GSTR-8",
            "GSTR-9"
          ],
          "correctAnswer": "GSTR-8",
          "satisfaction": 15,
          "difficulty": "easy",
          "knowledge": {
            "text": "E-Commerce Operators are required to file GSTR-8, which contains details of outward supplies of goods and/or services affected through it, and the amount of TCS collected.",
            "furtherReading": "Section 52(4) of the CGST Act, 2017"
          }
        },
        {
          "id": "202507092230-05",
          "type": "mcq",
          "character": "Rohan",
          "dialogue": "After the e-commerce operator files their TCS return, where will I see the credit for the TCS collected from me?",
          "question": "Where will Rohan, as the supplier, see the credit of TCS collected by the e-commerce operator and how can he utilize it?",
          "options": [
            "In his Electronic Cash Ledger, available for refund.",
            "In his Electronic Credit Ledger, available for setting off output tax liability.",
            "It's not reflected anywhere; it's a direct payment to the government.",
            "He will receive a refund cheque directly from the e-commerce operator."
          ],
          "correctAnswer": "In his Electronic Cash Ledger, available for setting off output tax liability.",
          "satisfaction": 20,
          "difficulty": "medium",
          "knowledge": {
            "text": "The amount of TCS collected by the ECO is reflected in the Electronic Cash Ledger of the supplier (Rohan) once the ECO files GSTR-8. This amount can then be used by the supplier to set off his output tax liability or claimed as a refund.",
            "furtherReading": "Section 52(7) of the CGST Act, 2017"
          }
        },
        {
          "id": "202507092230-06",
          "type": "error_detection",
          "character": "Rohan",
          "dialogue": "My friend, who also sells online, told me that since I'm selling handicrafts, which are usually exempt, I don't need to worry about GST or TCS, even if I sell through an e-commerce platform.",
          "question": "What is the critical error in Rohan's friend's advice regarding selling handicrafts through an e-commerce platform?",
          "options": [
            "Handicrafts are never exempt from GST.",
            "The mandatory registration for e-commerce sellers applies irrespective of whether the goods are exempt or taxable.",
            "TCS is collected only on the commission charged by the e-commerce operator.",
            "The exemption threshold for small businesses applies to all online sellers."
          ],
          "correctAnswer": "The mandatory registration for e-commerce sellers applies irrespective of whether the goods are exempt or taxable.",
          "satisfaction": 25,
          "difficulty": "hard",
          "knowledge": {
            "text": "Section 24(ix) mandates registration for all persons making supplies through an ECO liable to collect TCS. This mandatory registration applies even if the goods supplied are exempt, or if the supplier's turnover is below the normal threshold. While TCS is collected only on *taxable* supplies, the obligation to register is general for all suppliers through such ECOs.",
            "furtherReading": "Section 24(ix) of the CGST Act, 2017; Section 52 of the CGST Act, 2017"
          }
        },
        {
          "id": "202507092230-07",
          "type": "mcq",
          "character": "GOKU",
          "dialogue": "Rohan, what if you start supplying services (like online tutorials) through an e-commerce platform? Would the mandatory registration rule still apply?",
          "question": "If Rohan supplies services through an e-commerce operator, is he still compulsorily required to register for GST, irrespective of turnover?",
          "options": [
            "Yes, the rule applies to both goods and services.",
            "No, the mandatory registration rule applies only to suppliers of goods through ECOs.",
            "Only if his service turnover exceeds ₹20 lakhs.",
            "Only if the services are taxable under RCM."
          ],
          "correctAnswer": "No, the mandatory registration rule applies only to suppliers of goods through ECOs.",
          "satisfaction": 25,
          "difficulty": "medium",
          "knowledge": {
            "text": "Initially, the mandatory registration for ECO suppliers applied to both goods and services. However, Notification No. 17/2017-Central Tax (Rate) dated 28.06.2017, as amended, exempts suppliers of services from mandatory registration if their aggregate turnover does not exceed the threshold specified under Section 22(1) and they are making supplies through an ECO.",
            "furtherReading": "Section 24(ix) of the CGST Act, 2017; Notification No. 17/2017-Central Tax (Rate)"
          }
        },
        {
          "id": "202507092230-08",
          "type": "calculative",
          "character": "Rohan",
          "dialogue": "I made total sales of ₹2,00,000 last month through the e-commerce platform. Out of this, ₹20,000 worth of goods were returned by customers. What is the 'net value of taxable supplies' on which the e-commerce operator will collect TCS?",
          "question": "Calculate the 'net value of taxable supplies' for Rohan, on which the e-commerce operator will collect TCS.",
          "options": [],
          "correctAnswer": 180000,
          "satisfaction": 20,
          "difficulty": "medium",
          "knowledge": {
            "text": "TCS is collected on the 'net value of taxable supplies'. This is calculated by deducting the value of supplies returned to the supplier during the month from the gross value of supplies made during that month. So, ₹2,00,000 - ₹20,000 = ₹1,80,000.",
            "furtherReading": "Explanation to Section 52(1) of the CGST Act, 2017"
          }
        },
        {
          "id": "202507092230-09",
          "type": "mcq",
          "character": "GOKU",
          "dialogue": "Rohan, what if you decide to sell your products directly from your own website, without using any e-commerce aggregator platform? Would you still need compulsory registration if your turnover is below the threshold?",
          "question": "If Rohan sells goods directly from his own website (not through an ECO liable for TCS), and his aggregate turnover is below the normal threshold (e.g., ₹40 lakhs), does he still need compulsory GST registration?",
          "options": [
            "Yes, all online sellers require compulsory registration.",
            "No, the mandatory registration under Section 24(ix) applies only when selling through a TCS-collecting ECO.",
            "Only if his website collects payment directly.",
            "Only if he makes inter-state supplies."
          ],
          "correctAnswer": "No, the mandatory registration under Section 24(ix) applies only when selling through a TCS-collecting ECO.",
          "satisfaction": 20,
          "difficulty": "medium",
          "knowledge": {
            "text": "The mandatory registration under Section 24(ix) applies specifically to persons supplying through an e-commerce operator required to collect TCS. If a person sells directly through their own website and not through such an operator, their registration liability is governed by the normal aggregate turnover thresholds.",
            "furtherReading": "Section 24(ix) of the CGST Act, 2017; Section 22 of the CGST Act, 2017"
          }
        },
        {
          "id": "202507092230-10",
          "type": "mcq",
          "character": "Rohan",
          "dialogue": "I'm receiving some goods back from customers. How do I adjust my GST liability for these sales returns that were already declared?",
          "question": "What is the correct way for Rohan to adjust his GST liability for sales returns received from customers?",
          "options": [
            "Issue a refund voucher to the customer.",
            "Issue a debit note to the customer.",
            "Issue a credit note to the customer.",
            "Adjust it directly in his GSTR-3B."
          ],
          "correctAnswer": "Issue a credit note to the customer.",
          "satisfaction": 15,
          "difficulty": "easy",
          "knowledge": {
            "text": "For sales returns, where the value of taxable supply already declared needs to be reduced, the supplier is required to issue a credit note.",
            "furtherReading": "Section 34(1) of the CGST Act, 2017"
          }
        },
        {
          "id": "202507092230-11",
          "type": "section_match",
          "character": "GOKU",
          "dialogue": "Rohan, it's vital for e-commerce operators to be aware of the specific provisions related to their compliance. Which section of the CGST Act specifically deals with the collection of tax at source by an e-commerce operator?",
          "question": "Which specific section of the CGST Act, 2017, mandates the collection of Tax at Source (TCS) by an E-commerce Operator?",
          "options": [
            "Section 9",
            "Section 22",
            "Section 52",
            "Section 74"
          ],
          "correctAnswer": "Section 52",
          "satisfaction": 25,
          "difficulty": "hard",
          "knowledge": {
            "text": "Section 52 of the CGST Act is dedicated to 'Collection of tax at source'. It outlines the responsibilities of e-commerce operators regarding TCS, including the rate, net value calculation, and filing of GSTR-8.",
            "furtherReading": "Section 52 of the CGST Act, 2017"
          }
        },
        {
          "id": "202507092230-12",
          "type": "mcq",
          "character": "Rohan",
          "dialogue": "If I sell goods through an e-commerce platform to a customer in a different state, what type of GST (CGST/SGST or IGST) should I charge on that supply?",
          "question": "If Rohan, based in Bengaluru, sells goods through an e-commerce platform to a customer in Chennai, what type of GST should he charge?",
          "options": [
            "CGST and SGST",
            "IGST",
            "CGST only",
            "SGST only"
          ],
          "correctAnswer": "IGST",
          "satisfaction": 15,
          "difficulty": "easy",
          "knowledge": {
            "text": "Supply of goods or services from one state to another (inter-state supply) is subject to Integrated Goods and Services Tax (IGST).",
            "furtherReading": "Section 7 of the IGST Act, 2017"
          }
        },
        {
          "id": "202507092230-13",
          "type": "error_detection",
          "character": "Rohan",
          "dialogue": "The e-commerce platform withheld ₹1,000 as TCS for my sales. I tried to pay my output GST liability of ₹5,000 using this ₹1,000 TCS credit directly in my Electronic Credit Ledger, but it's showing ₹0 balance. Why is it not there?",
          "question": "What is the primary reason Rohan cannot see the TCS credit in his Electronic Credit Ledger?",
          "options": [
            "The e-commerce operator has not yet filed their GSTR-8.",
            "TCS credit is not reflected in the Electronic Credit Ledger but in the Electronic Cash Ledger.",
            "He needs to apply for a manual transfer of funds.",
            "His GST registration is temporarily suspended."
          ],
          "correctAnswer": "TCS credit is not reflected in the Electronic Credit Ledger but in the Electronic Cash Ledger.",
          "satisfaction": 25,
          "difficulty": "hard",
          "knowledge": {
            "text": "The amount of TCS collected by the ECO is credited to the Electronic Cash Ledger of the supplier, not the Electronic Credit Ledger. It can then be utilized for payment of output tax liability or claimed as refund.",
            "furtherReading": "Section 52(7) of the CGST Act, 2017"
          }
        },
        {
          "id": "202507092230-14",
          "type": "mcq",
          "character": "GOKU",
          "dialogue": "Rohan, imagine a scenario where you sell certain services online that are notified under Reverse Charge Mechanism (RCM). How would your GST liability be handled for such services when sold through an e-commerce platform?",
          "question": "If Rohan supplies services notified under RCM through an e-commerce platform, who is liable to pay GST on such supplies?",
          "options": [
            "Rohan, as the supplier.",
            "The e-commerce operator.",
            "The recipient of the services.",
            "No GST is payable on RCM services via ECO."
          ],
          "correctAnswer": "The recipient of the services.",
          "satisfaction": 25,
          "difficulty": "medium",
          "knowledge": {
            "text": "For services notified under Section 9(3) (RCM), the liability to pay GST shifts to the recipient of the services. This applies even if the services are supplied through an e-commerce operator. The ECO is not liable for RCM services supplied through their platform.",
            "furtherReading": "Section 9(3) of the CGST Act, 2017"
          }
        },
        {
          "id": "202507092230-15",
          "type": "calculative",
          "character": "Rohan",
          "dialogue": "I plan to start selling small items, like custom keychains, through my own website, without using any major e-commerce platform. My annual turnover from these sales is projected to be ₹35 lakhs. What would be my total GST liability on this turnover, assuming a GST rate of 12%?",
          "question": "Calculate Rohan's total GST liability on a turnover of ₹35 lakhs from direct sales through his own website, at a 12% GST rate.",
          "options": [],
          "correctAnswer": 0,
          "satisfaction": 20,
          "difficulty": "medium",
          "knowledge": {
            "text": "Since Rohan is selling directly (not through a TCS-collecting ECO), his registration liability is governed by the normal threshold. For a supplier of goods, the threshold for mandatory registration is ₹40 lakhs (for most states, or ₹20 lakhs for special category states). As his turnover is ₹35 lakhs, he is not required to register, and thus no GST liability arises unless he opts for voluntary registration.",
            "furtherReading": "Section 22(1) of the CGST Act, 2017; Notification No. 10/2019-Central Tax"
          }
        },
        {
          "id": "202507092230-16",
          "type": "multiple_answers",
          "character": "GOKU",
          "dialogue": "Rohan, many e-commerce sellers are confused about the various GST returns they need to file. Which of the following returns are typically relevant for a supplier selling goods through an e-commerce operator?",
          "question": "Which of the following GST returns are typically relevant for a supplier (like Rohan) selling goods through an E-Commerce Operator (ECO) who collects TCS?",
          "options": [
            "GSTR-1 (Outward Supplies)",
            "GSTR-3B (Summary Return)",
            "GSTR-8 (TCS by ECO)",
            "GSTR-9 (Annual Return)"
          ],
          "correctAnswer": [
            "GSTR-1 (Outward Supplies)",
            "GSTR-3B (Summary Return)",
            "GSTR-9 (Annual Return)"
          ],
          "satisfaction": 25,
          "difficulty": "hard",
          "knowledge": {
            "text": "A supplier selling through an ECO will file GSTR-1 for their outward supplies and GSTR-3B for summary returns and payment. GSTR-9 is the annual return. GSTR-8 is filed by the E-Commerce Operator, not the supplier.",
            "furtherReading": "Section 37, 39, 44, and 52 of the CGST Act, 2017"
          }
        },
        {
          "id": "202507092230-17",
          "type": "mcq",
          "character": "Rohan",
          "dialogue": "Sometimes, I sell through multiple e-commerce platforms. Will each platform collect TCS separately? And how will I claim credit for TCS if it's collected by different platforms?",
          "question": "If Rohan sells through multiple e-commerce platforms, how will TCS be handled?",
          "options": [
            "Only one platform will collect TCS, designated by Rohan.",
            "Each platform will collect TCS separately, and the total will be reflected in Rohan's Electronic Cash Ledger.",
            "He needs to pay the TCS directly to the government for all sales.",
            "TCS is only collected by the largest e-commerce platform he uses."
          ],
          "correctAnswer": "Each platform will collect TCS separately, and the total will be reflected in Rohan's Electronic Cash Ledger.",
          "satisfaction": 20,
          "difficulty": "medium",
          "knowledge": {
            "text": "Each e-commerce operator through whom supplies are made is separately liable to collect TCS on the supplies facilitated by them. The cumulative amount of TCS collected by all such operators will be credited to the supplier's Electronic Cash Ledger.",
            "furtherReading": "Section 52(1) and 52(7) of the CGST Act, 2017"
          }
        },
        {
          "id": "202507092230-18",
          "type": "dilemma",
          "character": "GOKU",
          "dialogue": "Rohan, you're doing great! This journey into e-commerce compliance has been complex. What's the most crucial takeaway you should always remember to ensure smooth GST operations for your online business, considering all we've discussed?",
          "question": "Considering all aspects of e-commerce and TCS, what is the single most important action/understanding for Rohan to ensure long-term GST compliance for his online business?",
          "options": [
            "Focus only on maximizing sales, and tax compliance will follow automatically.",
            "Always keep accurate records of sales and returns, reconcile with ECO's TCS statements, and ensure timely and correct filing of GSTR-1 and GSTR-3B.",
            "Avoid selling inter-state to simplify compliance.",
            "Delegate all GST responsibilities entirely to the e-commerce platform."
          ],
          "correctAnswer": "Always keep accurate records of sales and returns, reconcile with ECO's TCS statements, and ensure timely and correct filing of GSTR-1 and GSTR-3B.",
          "satisfaction": 30,
          "difficulty": "hard",
          "knowledge": {
            "text": "While an ECO handles TCS, the ultimate responsibility for accurate reporting of sales (including value, HSN, place of supply), reconciliation of TCS credit, and timely payment of net GST liability (through GSTR-3B) rests with the supplier. Maintaining meticulous records and ensuring all returns are filed correctly and on time is paramount for compliance and avoiding penalties.",
            "furtherReading": "Sections 35, 37, 39, and 52 of the CGST Act, 2017 and associated Rules."
          }
        }
      ]
    },
    // CASE FILE #1
    {
      "id": "case-1",
      "levelType": "case_file",
      "title": "The Ghost Dealer of Jaipur",
      "location": "CGST Anti-Evasion Unit, Jaipur, Rajasthan",
      "satisfactionGoal": 450,
      "characters": ["GOKU", "InspectorRathore", "Informant"],
      "narrativeGoal": "Investigate a suspected circular trading and fake ITC racket involving a 'ghost dealer' in Jaipur. Utilize knowledge of registration, ITC rules, RCM, and e-commerce compliance to uncover the fraud, identify the key players, and prepare a preliminary report for legal action.",
      "topic": [
        "GST Registration Fraud",
        "Fake Invoices",
        "Circular Trading",
        "Input Tax Credit (ITC) Fraud",
        "Matching Concept",
        "Reverse Charge Mechanism (RCM) Evasion",
        "E-Way Bill Compliance",
        "Composition Scheme Misuse"
      ],
      "prerequisite": "All previous topics including Registration, Composition Scheme, ITC, E-Way Bill, E-Commerce & TCS",
      "puzzles": [
        {
          "id": "202507092240-01",
          "type": "mcq",
          "character": "InspectorRathore",
          "dialogue": "Goku, we've received an anonymous tip about 'Royal Gems & Jewels', a new firm operating out of a residential apartment. They've recently obtained GST registration and immediately started claiming massive ITC. Our initial check shows their turnover is declared as very low. This smells fishy. What's the first thing that strikes you as a potential red flag about their registration?",
          "question": "What is the most immediate red flag regarding 'Royal Gems & Jewels' based on Inspector Rathore's observations about their registration and stated operations?",
          "options": [
            "Registering from a residential address is unusual for a gems business.",
            "A new firm immediately claiming massive ITC with low declared turnover is suspicious.",
            "They are not operating from a commercial complex.",
            "The name 'Royal Gems & Jewels' is too generic."
          ],
          "correctAnswer": "A new firm immediately claiming massive ITC with low declared turnover is suspicious.",
          "satisfaction": 15,
          "difficulty": "easy",
          "knowledge": {
            "text": "A newly registered firm with very low declared turnover but claiming disproportionately high ITC is a classic indicator of a 'paper company' set up purely to pass on fake ITC. This is the core of many GST frauds.",
            "furtherReading": "Section 16 (Conditions for ITC), General Anti-Avoidance Rule (GAAR) principles as applied in tax evasion cases."
          }
        },
        {
          "id": "202507092240-02",
          "type": "error_detection",
          "character": "GOKU",
          "dialogue": "I'm reviewing 'Royal Gems & Jewels'' registration documents. They've provided a scanned copy of a rent agreement and a power bill, but the rent agreement seems digitally altered, and the power bill is in a different person's name with an old date. This firm's owner, Mr. 'Rakesh Sharma', appears to be a fictitious person.",
          "question": "What is the most critical error in 'Royal Gems & Jewels'' registration documents, suggesting a deliberate attempt at fraud?",
          "options": [
            "The rent agreement is scanned, not original.",
            "The power bill is in a different name and old, indicating a non-existent or fake address/proprietor.",
            "The address is a residential apartment.",
            "Mr. Rakesh Sharma's name is too common."
          ],
          "correctAnswer": "The power bill is in a different name and old, indicating a non-existent or fake address/proprietor.",
          "satisfaction": 20,
          "difficulty": "medium",
          "knowledge": {
            "text": "Using fake or manipulated identity/address proofs is a fundamental step in creating shell companies for fraud. A mismatch in utility bills with the proprietor's name and outdated documents are strong indicators of a fictitious entity or 'ghost dealer'.",
            "furtherReading": "Rule 8 (Application for registration) and Rule 9 (Verification of the application and approval) of the CGST Rules, 2017."
          }
        },
        {
          "id": "202507092240-03",
          "type": "mcq",
          "character": "InspectorRathore",
          "dialogue": "Our intelligence suggests 'Royal Gems & Jewels' is part of a 'circular trading' scam. They issue invoices to 'Emerald Traders', who in turn invoice 'Sapphire Importers', and then 'Sapphire Importers' invoices 'Royal Gems & Jewels' again, with no actual goods moving. What is the primary objective of such a 'circular trading' scheme?",
          "question": "What is the main objective of a 'circular trading' scheme in GST fraud?",
          "options": [
            "To genuinely increase trade volume between businesses.",
            "To generate fake invoices to pass on fraudulent Input Tax Credit (ITC) without actual supply of goods or services.",
            "To evade income tax by showing inflated expenses.",
            "To obtain more export benefits through multiple transactions."
          ],
          "correctAnswer": "To generate fake invoices to pass on fraudulent Input Tax Credit (ITC) without actual supply of goods or services.",
          "satisfaction": 20,
          "difficulty": "easy",
          "knowledge": {
            "text": "Circular trading (or 'hawala' transactions) is a common GST fraud where multiple layers of fictitious transactions are created through shell companies to generate and pass on fake ITC without any real movement of goods or services. The ultimate beneficiary claims this fake ITC.",
            "furtherReading": "Section 16 (Conditions for ITC), Circular No. 171/03/2022-GST on fake invoices."
          }
        },
        {
          "id": "202507092240-04",
          "type": "mcq",
          "character": "GOKU",
          "dialogue": "I'm looking at 'Royal Gems & Jewels' GSTR-1 filings. They show large outward supplies to 'Emerald Traders'. However, their GSTR-3B shows very little tax paid in cash. This means they are predominantly paying tax through ITC. Where could this ITC originate from if there's no real business?",
          "question": "If 'Royal Gems & Jewels' is a shell company in a circular trading fraud, how are they primarily paying their GST output liability, and what does this imply about their ITC source?",
          "options": [
            "By adjusting against genuine ITC from their real purchases.",
            "By paying cash from their actual sales.",
            "By utilizing fraudulent ITC passed on from other fictitious suppliers in the chain.",
            "By utilizing ITC from RCM payments."
          ],
          "correctAnswer": "By utilizing fraudulent ITC passed on from other fictitious suppliers in the chain.",
          "satisfaction": 25,
          "difficulty": "medium",
          "knowledge": {
            "text": "In circular trading, the fraudsters create a chain of fake invoices. Each company in the chain issues an invoice to the next, claiming ITC on the incoming invoice and then utilizing it to pay the output tax on the outgoing invoice. This creates an illusion of genuine transactions, allowing fake ITC to be passed down the line.",
            "furtherReading": "Section 42 (Matching, reversal and reclaim of input tax credit) and Section 16 (Eligibility for ITC)."
          }
        },
        {
          "id": "202507092240-05",
          "type": "calculative",
          "character": "InspectorRathore",
          "dialogue": "'Royal Gems & Jewels' declared outward supplies of ₹1,00,00,000 (excluding GST) in a month to 'Emerald Traders' at 18% GST. They claimed ITC of ₹18,00,000 from 'Ruby Associates'. If 'Ruby Associates' is also a fake entity, what is the value of fake ITC 'Royal Gems & Jewels' has brought into the system?",
          "question": "Calculate the value of fake ITC injected into the system by 'Royal Gems & Jewels' based on the given information.",
          "options": [],
          "correctAnswer": 1800000,
          "satisfaction": 25,
          "difficulty": "medium",
          "knowledge": {
            "text": "If 'Ruby Associates' is a fake entity, any ITC claimed from them is fraudulent. The value of ITC is directly the GST component of the purchase. So, the entire ₹18,00,000 ITC claimed from a non-existent supplier is fake ITC injected.",
            "furtherReading": "Section 16(2)(b) and (c) of the CGST Act (actual receipt of goods/services & tax payment)."
          }
        },
        {
          "id": "202507092240-06",
          "type": "mcq",
          "character": "GOKU",
          "dialogue": "I'm looking for evidence of actual movement of goods. 'Royal Gems & Jewels' has filed GSTR-1s for high-value supplies, but we found no corresponding E-Way Bills generated by them or against their GSTIN for these movements.",
          "question": "What does the absence of E-Way Bills for high-value outward supplies by 'Royal Gems & Jewels' strongly suggest in the context of a fraud investigation?",
          "options": [
            "They are probably using a different transport agency.",
            "The goods are being transported by vehicles below the threshold capacity.",
            "It is strong evidence that no actual movement of goods took place, indicating a 'paper transaction' fraud.",
            "E-Way Bills are optional for registered persons."
          ],
          "correctAnswer": "It is strong evidence that no actual movement of goods took place, indicating a 'paper transaction' fraud.",
          "satisfaction": 30,
          "difficulty": "hard",
          "knowledge": {
            "text": "E-Way Bills are mandatory for the movement of goods exceeding specified thresholds. The absence of E-Way Bills for reported high-value supplies is a key indicator of 'bill trading' or 'circular trading' where only invoices are exchanged, but no physical goods move, a hallmark of fake ITC fraud.",
            "furtherReading": "Rule 138 of the CGST Rules, 2017."
          }
        },
        {
          "id": "202507092240-07",
          "type": "mcq",
          "character": "InspectorRathore",
          "dialogue": "We've identified that the final beneficiary of this fake ITC chain, 'Gemstone Exporters Ltd.', is utilizing this fraudulent credit to reduce their cash tax payments significantly, especially for export supplies. Why is this particularly damaging?",
          "question": "Why is the utilization of fraudulent ITC for export supplies by 'Gemstone Exporters Ltd.' particularly damaging to government revenue?",
          "options": [
            "It prevents other businesses from exporting.",
            "Exporters are not allowed to claim any ITC.",
            "Exports are zero-rated supplies, meaning the government refunds the utilized ITC, thus leading to a direct revenue loss from fake credit.",
            "It increases the cost of exports."
          ],
          "correctAnswer": "Exports are zero-rated supplies, meaning the government refunds the utilized ITC, thus leading to a direct revenue loss from fake credit.",
          "satisfaction": 30,
          "difficulty": "hard",
          "knowledge": {
            "text": "Exports are 'zero-rated' supplies under GST, meaning no GST is charged on them, and the exporter can claim a refund of accumulated ITC. If this ITC is fraudulent, the government ends up refunding fake credit, leading to a direct and significant revenue loss.",
            "furtherReading": "Section 16 of the IGST Act, 2017 (Zero-rated supply)."
          }
        },
        {
          "id": "202507092240-08",
          "type": "multiple_answers",
          "character": "GOKU",
          "dialogue": "I need to confirm the 'modus operandi' of 'Royal Gems & Jewels'. What key elements of the ITC claim conditions under GST are being fundamentally violated by a 'ghost dealer' supplying only fake invoices?",
          "question": "Which of the following fundamental conditions for claiming Input Tax Credit are violated when a 'ghost dealer' issues fake invoices without actual supply?",
          "options": [
            "Possession of a tax invoice or debit note.",
            "Actual receipt of goods or services.",
            "Actual payment of tax by the supplier to the Government.",
            "Furnishing of return under Section 39 by the recipient."
          ],
          "correctAnswer": [
            "Actual receipt of goods or services.",
            "Actual payment of tax by the supplier to the Government."
          ],
          "satisfaction": 30,
          "difficulty": "hard",
          "knowledge": {
            "text": "While a fake invoice might exist (fulfilling condition 'a'), the core violations in a ghost dealer scam are that no actual goods/services are received by the claimant, and critically, the ghost dealer (who collects the money for the fake invoice) does not actually pay the corresponding tax to the government (as they are usually untraceable or just pass the money on).",
            "furtherReading": "Section 16(2)(b) and 16(2)(c) of the CGST Act, 2017."
          }
        },
        {
          "id": "202507092240-09",
          "type": "mcq",
          "character": "Informant",
          "dialogue": "I heard that the main culprit behind this scam, Mr. 'Shadow', started his fraud by getting a GST registration under the 'Composition Scheme' initially, to avoid scrutiny, then shifted to regular scheme and created multiple shell companies.",
          "question": "Could Mr. 'Shadow' have initially misused the Composition Scheme for fraudulent purposes before escalating to regular registration fraud?",
          "options": [
            "No, the Composition Scheme is too simple to be used for fraud.",
            "Yes, by using it to show low turnover and 'legitimizing' initial small fake transactions before expanding.",
            "Only if he was dealing in services.",
            "The Composition Scheme prohibits inter-state sales, making large-scale fraud difficult."
          ],
          "correctAnswer": "Yes, by using it to show low turnover and 'legitimizing' initial small fake transactions before expanding.",
          "satisfaction": 20,
          "difficulty": "medium",
          "knowledge": {
            "text": "While not directly designed for fraud, the Composition Scheme's simpler compliance (quarterly returns, no ITC implications for recipient) could potentially be misused by fraudsters to establish a seemingly legitimate small business identity before transitioning to the regular scheme for larger-scale fake invoicing operations.",
            "furtherReading": "Section 10 of the CGST Act, 2017 (Composition Levy)."
          }
        },
        {
          "id": "202507092240-10",
          "type": "calculative",
          "character": "InspectorRathore",
          "dialogue": "We suspect 'Gemstone Exporters Ltd.', the final recipient, has fraudulently availed ITC of ₹50,00,000 in the last financial year. What would be the minimum penalty leviable on them for this fraudulent ITC availment under Section 74 of the CGST Act, assuming fraud is proven?",
          "question": "Calculate the minimum penalty for fraudulent ITC availment of ₹50,00,000 under Section 74 of the CGST Act.",
          "options": [],
          "correctAnswer": 5000000,
          "satisfaction": 35,
          "difficulty": "hard",
          "knowledge": {
            "text": "Under Section 74 of the CGST Act, for cases involving fraud, wilful misstatement, or suppression of facts, the penalty leviable is 100% of the tax demanded. So, for ₹50,00,000 fraudulently availed ITC, the minimum penalty would be ₹50,00,000.",
            "furtherReading": "Section 74(1) of the CGST Act, 2017."
          }
        },
        {
          "id": "202507092240-11",
          "type": "section_match",
          "character": "GOKU",
          "dialogue": "This entire chain of fake invoicing and ITC pass-on relies on manipulating a key provision of GST. Which section of the CGST Act specifically deals with the eligibility conditions for claiming Input Tax Credit?",
          "question": "Which specific section of the CGST Act, 2017, lays down the fundamental conditions and eligibility criteria for a registered person to claim Input Tax Credit?",
          "options": [
            "Section 10 (Composition Levy)",
            "Section 16 (Eligibility and conditions for taking input tax credit)",
            "Section 17 (Apportionment of credit and blocked credits)",
            "Section 39 (Furnishing of returns)"
          ],
          "correctAnswer": "Section 16 (Eligibility and conditions for taking input tax credit)",
          "satisfaction": 25,
          "difficulty": "medium",
          "knowledge": {
            "text": "Section 16 is the foundational section for ITC. Fraudsters exploit the lack of physical verification or the initial trust placed in the system by violating its conditions, especially those related to actual receipt of goods and payment of tax by the supplier.",
            "furtherReading": "Section 16 of the CGST Act, 2017."
          }
        },
        {
          "id": "202507092240-12",
          "type": "mcq",
          "character": "Informant",
          "dialogue": "I heard Mr. 'Shadow' also used some unregistered transporters to move his 'ghost goods' to make it harder to trace. What kind of compliance violation would that be, if any?",
          "question": "If 'Mr. Shadow' used unregistered transporters for his 'ghost goods' shipments, what GST compliance issue arises?",
          "options": [
            "It's perfectly legal if the transporters are unregistered.",
            "It could be an attempt to evade E-Way Bill requirements and make physical verification difficult.",
            "The recipient would be liable to pay GST under RCM, simplifying the fraud.",
            "It only affects the transporter's income tax, not GST."
          ],
          "correctAnswer": "It could be an attempt to evade E-Way Bill requirements and make physical verification difficult.",
          "satisfaction": 20,
          "difficulty": "medium",
          "knowledge": {
            "text": "Using unregistered transporters or falsifying transport details is a common tactic to evade E-Way Bill compliance. This makes it challenging for authorities to verify the physical movement of goods, which is crucial in detecting fake invoicing scams.",
            "furtherReading": "Rule 138 (E-Way Bill) of the CGST Rules, 2017."
          }
        },
        {
          "id": "202507092240-13",
          "type": "mcq",
          "character": "InspectorRathore",
          "dialogue": "We need to issue a Show Cause Notice (SCN) to 'Gemstone Exporters Ltd.' for the recovery of this fraudulently availed ITC. What's the typical time limit for issuing an SCN in cases involving fraud, wilful misstatement, or suppression of facts?",
          "question": "What is the time limit for issuing a Show Cause Notice (SCN) for recovery of tax in cases involving fraud, wilful misstatement, or suppression of facts?",
          "options": [
            "Within 2 years from the due date of filing the annual return.",
            "Within 3 years from the due date of filing the annual return.",
            "Within 5 years from the due date of filing the annual return for the financial year to which the tax not paid or short paid relates.",
            "There is no time limit for SCN in fraud cases."
          ],
          "correctAnswer": "Within 5 years from the due date of filing the annual return for the financial year to which the tax not paid or short paid relates.",
          "satisfaction": 30,
          "difficulty": "hard",
          "knowledge": {
            "text": "For cases involving fraud, wilful misstatement, or suppression of facts, the time limit for issuing an SCN is extended to five years from the due date of furnishing the annual return for the financial year to which the tax not paid or short paid or ITC erroneously availed/utilized relates.",
            "furtherReading": "Section 74(2) of the CGST Act, 2017."
          }
        },
        {
          "id": "202507092240-14",
          "type": "error_detection",
          "character": "GOKU",
          "dialogue": "I'm analyzing the bank statements of 'Royal Gems & Jewels'. Despite showing huge outward sales, their bank account shows minimal activity beyond a few small utility payments and very little large-value transactions that would match their declared supplies. The payments received are usually from cash deposits or third-party accounts.",
          "question": "What is the critical red flag in 'Royal Gems & Jewels'' bank statement that points towards a fraudulent operation?",
          "options": [
            "They use cash for small payments.",
            "Minimal banking activity despite high declared sales, indicating lack of genuine transactions.",
            "Their bank is a nationalized bank.",
            "They have multiple bank accounts."
          ],
          "correctAnswer": "Minimal banking activity despite high declared sales, indicating lack of genuine transactions.",
          "satisfaction": 25,
          "difficulty": "medium",
          "knowledge": {
            "text": "In a genuine business, high sales should correspond to significant banking activity, including receipts from customers and payments to suppliers. Minimal or mismatched banking transactions for large declared turnover are a strong indicator of 'paper transactions' without real financial flows, characteristic of fake invoice frauds.",
            "furtherReading": "Indirect evidence for fraud under various sections of CGST Act, 2017."
          }
        },
        {
          "id": "202507092240-15",
          "type": "mcq",
          "character": "Informant",
          "dialogue": "Mr. 'Shadow' often boasted about how he managed to set up his network of fake companies without any physical offices. He just used generic names and hired people remotely to handle phone calls.",
          "question": "What characteristic of a 'shell company' is being highlighted by the informant, which facilitates large-scale GST fraud?",
          "options": [
            "They deal in high-value goods.",
            "They avoid physical presence or genuine business operations, existing primarily on paper.",
            "They primarily engage in e-commerce.",
            "They have very few employees."
          ],
          "correctAnswer": "They avoid physical presence or genuine business operations, existing primarily on paper.",
          "satisfaction": 20,
          "difficulty": "easy",
          "knowledge": {
            "text": "Shell companies (or 'paper companies') are entities that exist primarily on paper, without significant physical assets, offices, or genuine business operations. They are often created solely to facilitate financial crimes, including tax fraud by generating fake invoices.",
            "furtherReading": "Conceptual understanding of shell companies in financial crime investigations."
          }
        },
        {
          "id": "202507092240-16",
          "type": "dilemma",
          "character": "InspectorRathore",
          "dialogue": "Goku, we have compelling evidence: fake addresses, non-existent suppliers, no E-Way Bills for high-value supplies, circular trading patterns, and suspicious bank transactions. We need to act decisively. What is the most appropriate and legally robust next step to dismantle this fraud network and recover government revenue?",
          "question": "Based on the accumulated evidence of fraudulent ITC availment and circular trading, what is the most appropriate and legally robust immediate action for the CGST Department to take?",
          "options": [
            "Issue a general advisory to all taxpayers about fake invoices.",
            "Immediately suspend the GST registrations of 'Royal Gems & Jewels' and other implicated entities, conduct physical verification, freeze their bank accounts, and issue Show Cause Notices for demand and recovery under Section 74, followed by potential arrests.",
            "Send a polite letter to 'Royal Gems & Jewels' asking them to clarify discrepancies.",
            "Wait for 'Gemstone Exporters Ltd.' to file their annual return and then investigate further."
          ],
          "correctAnswer": "Immediately suspend the GST registrations of 'Royal Gems & Jewels' and other implicated entities, conduct physical verification, freeze their bank accounts, and issue Show Cause Notices for demand and recovery under Section 74, followed by potential arrests.",
          "satisfaction": 100,
          "difficulty": "hard",
          "knowledge": {
            "text": "In clear cases of fraud involving fake ITC and non-existent entities, swift and comprehensive action is required. This includes immediate suspension of registrations to prevent further misuse, physical verification to confirm non-existence, freezing bank accounts to preserve funds, issuing SCNs for demand and penalty under Section 74, and if evidence warrants, initiating criminal proceedings leading to arrests.",
            "furtherReading": "Sections 29 (Cancellation of registration), 67 (Power of inspection, search and seizure), 83 (Provisional attachment to protect revenue), 74 (Determination of tax not paid or short paid or erroneously refunded or ITC wrongly availed or utilized by reason of fraud, etc.), and 132 (Punishment for certain offences) of the CGST Act, 2017."
          }
        },
        {
          "id": "202507092240-17",
          "type": "mcq",
          "character": "GOKU",
          "dialogue": "This case highlights the importance of the 'matching concept' in GST. If 'Royal Gems & Jewels' invoices to 'Emerald Traders' are fake, what's the direct impact on 'Emerald Traders' in their GSTR-2B if they try to claim ITC?",
          "question": "If 'Royal Gems & Jewels' issues fake invoices to 'Emerald Traders', how would this impact 'Emerald Traders' ability to claim ITC based on the matching concept?",
          "options": [
            "The invoices would appear in 'Emerald Traders' GSTR-2B, allowing them to claim ITC without issue.",
            "The invoices might not appear in 'Emerald Traders' GSTR-2B, or if they do, they would be subject to verification and potential reversal due to the underlying fraud.",
            "The fake invoices would automatically be rejected by the GST system.",
            "Emerald Traders could only claim ITC if they paid cash for the supplies."
          ],
          "correctAnswer": "The invoices might not appear in 'Emerald Traders' GSTR-2B, or if they do, they would be subject to verification and potential reversal due to the underlying fraud.",
          "satisfaction": 25,
          "difficulty": "medium",
          "knowledge": {
            "text": "The matching concept (though automated matching under Section 42 is currently in abeyance) is critical. If the 'ghost dealer' doesn't actually file correct GSTR-1s or is detected as fake, the ITC won't reflect correctly in the recipient's GSTR-2B. Even if it initially reflects due to incorrect filing by the fraudster, the ITC is ultimately ineligible and subject to reversal upon detection of fraud.",
            "furtherReading": "Section 16(2)(aa) and Section 42 of the CGST Act, 2017."
          }
        },
        {
          "id": "202507092240-18",
          "type": "mcq",
          "character": "InspectorRathore",
          "dialogue": "Finally, we must consider the legal status of 'Royal Gems & Jewels'. If they are proven to be a fake entity created solely to pass on fake ITC without any actual business, what is the ultimate fate of their GST registration?",
          "question": "If 'Royal Gems & Jewels' is proven to be a shell company created for fake ITC generation, what is the most likely legal action regarding its GST registration?",
          "options": [
            "It will be allowed to continue operating under strict monitoring.",
            "Its registration will be compulsorily cancelled retrospectively from the date of its creation.",
            "It will be put under the Composition Scheme to simplify its compliance.",
            "It will be merged with another legitimate business."
          ],
          "correctAnswer": "Its registration will be compulsorily cancelled retrospectively from the date of its creation.",
          "satisfaction": 30,
          "difficulty": "hard",
          "knowledge": {
            "text": "If a registration is obtained by means of fraud, wilful misstatement, or suppression of facts, the proper officer has the power to cancel the registration from a retrospective date, even from the date of its original registration. This nullifies its legal existence for GST purposes and validates the claim of all ITC passed on by it being fraudulent.",
            "furtherReading": "Section 29(2)(e) of the CGST Act, 2017; Rule 21 (Cancellation of registration)."
          }
        }
      ]
    },
    // STAGE 4
    {
      "id": "level-4", "levelType": "level", "title": "Case: Freelancer Street", "prerequisite": "Services & RCM", "satisfactionGoal": 50,
      "narrativeGoal": "Help Anika understand GST on international and domestic services.", "keyTopics": ["Export of Services", "RCM"],
      "characters": ["GOKU", "Anika"],
      "puzzles": [
        {
          "id": "p4-1", "type": "section_match", "character": "Anika",
          "dialogue": "Anika: 'I use a software from a US company for my work. Do I have to pay GST on that?'",
          "question": "Which concept makes Anika liable to pay GST on this 'import of service'?",
          "options": ["Forward Charge Mechanism", "Reverse Charge Mechanism (RCM)", "Tax Collected at Source (TCS)"],
          "correctAnswer": "Reverse Charge Mechanism (RCM)",
          "satisfaction": 50, "difficulty": "medium",
          "knowledge": { "text": "RCM requires the recipient of certain goods or services to pay the GST directly to the government, instead of the supplier. This is common for imported services.", "furtherReading": "Section 9(3) of the CGST Act" }
        }
      ]
    },
    // STAGE 5
    {
      "id": "level-5", "levelType": "level", "title": "Case: Dockyard Hub", "prerequisite": "Exports & Refunds", "satisfactionGoal": 50,
      "narrativeGoal": "Assist Sunita in troubleshooting her stuck IGST refund.", "keyTopics": ["IGST Refund", "Customs"],
      "characters": ["GOKU", "Sunita"],
      "puzzles": [
        {
          "id": "p5-1", "type": "mcq", "character": "Sunita",
          "dialogue": "Sunita: 'My IGST refund is stuck! The customs officer mentioned a 'validation error'. What could it be?'",
          "question": "Which data mismatch is a primary reason for IGST refunds getting stuck?",
          "options": ["Mismatch between Proforma Invoice and PO.", "Mismatch between Shipping Bill data on ICEGATE and GSTR-1 data.", "Mismatch between E-Way Bill and invoice."],
          "correctAnswer": "Mismatch between Shipping Bill data on ICEGATE and GSTR-1 data.",
          "satisfaction": 50, "difficulty": "medium",
          "knowledge": { "text": "The GST portal (GSTN) and the Customs portal (ICEGATE) automatically exchange data. If key details don't match, the system flags an error and holds the refund.", "furtherReading": "Rule 96 of the CGST Rules" }
        }
      ]
    },
    // STAGE 6
    {
      "id": "level-6", "levelType": "level", "title": "Case: Skyline Blocks", "prerequisite": "Real Estate GST", "satisfactionGoal": 50,
      "narrativeGoal": "Help Mr. Verma with the specific GST rules for construction.", "keyTopics": ["Real Estate", "Completion Certificate"],
      "characters": ["GOKU", "MrVerma"],
      "puzzles": [
        {
          "id": "p6-1", "type": "mcq", "character": "MrVerma",
          "dialogue": "Mr. Verma: 'A customer is buying a flat today. The building is finished and I received the Completion Certificate last month. Do I charge GST?'",
          "question": "Is GST applicable on a sale made AFTER the Completion Certificate is issued?",
          "options": ["Yes, GST at 5% is applicable.", "No, it's a sale of immovable property, outside GST's scope.", "Only if it's the buyer's second home."],
          "correctAnswer": "No, it's a sale of immovable property, outside GST's scope.",
          "satisfaction": 50, "difficulty": "hard",
          "knowledge": { "text": "Once the Completion Certificate is issued, the building is 'ready to move in'. Any sale after this point is a transaction in immovable property, which is not subject to GST.", "furtherReading": "Schedule III of the CGST Act" }
        }
      ]
    },
    // CASE FILE #2
    {
      "id": "case-2", "levelType": "case_file", "title": "Case: The Ghost Tower", "prerequisite": "Advanced Investigation", "satisfactionGoal": 100,
      "narrativeGoal": "Analyze a complex case of potential misuse of ITC and RCM evasion.", "keyTopics": ["ITC on Stalled Projects", "RCM"],
      "characters": ["GOKU", "KK"],
      "puzzles": [
        {
          "id": "c2-1", "type": "dilemma", "character": "KK",
          "dialogue": "KK: 'Goku, a builder's project is stalled, but he's still claiming ITC on security services. He also bought cement from an unregistered dealer and didn't pay RCM. This is clear fraud.'",
          "question": "What are the two distinct compliance failures here?",
          "options": ["He can't claim ITC on security, and buying from unregistered dealers is illegal.", "The key issue is failure to pay RCM on cement; ITC on services for a stalled project is a matter of interpretation.", "He must pay RCM on security, not cement."],
          "correctAnswer": "The key issue is failure to pay RCM on cement; ITC on services for a stalled project is a matter of interpretation.",
          "satisfaction": 100, "difficulty": "hard",
          "knowledge": { "text": "Failure to pay tax under RCM is a clear evasion. The eligibility of ITC on services for a stalled project is a more nuanced issue, hinging on whether it's still 'in furtherance of business'.", "furtherReading": "Section 9(3) and Section 16 of the CGST Act" }
        }
      ]
    },
    // STAGE 7
    {
      "id": "level-7", "levelType": "level", "title": "Case: Tower of Tricks", "prerequisite": "Valuation Rules", "satisfactionGoal": 50,
      "narrativeGoal": "Advise a CA on complex valuation issues between related companies.", "keyTopics": ["Valuation", "Related Parties"],
      "characters": ["GOKU", "MsSharma"],
      "puzzles": [
        {
          "id": "p7-1", "type": "mcq", "character": "MsSharma",
          "dialogue": "Ms. Sharma: 'My client supplies goods to their own sister company. To save tax, they invoiced it at ₹1, though the market price is ₹100. Is this permissible?'",
          "question": "For transactions between related parties, how must the value for GST be determined?",
          "options": ["Any value agreed between them is acceptable.", "It must be the Open Market Value of such goods.", "It must be the cost price + 10% profit."],
          "correctAnswer": "It must be the Open Market Value of such goods.",
          "satisfaction": 50, "difficulty": "medium",
          "knowledge": { "text": "To prevent tax evasion through under-pricing, GST Valuation Rules mandate that transactions between related parties must be valued at their 'Open Market Value'.", "furtherReading": "Section 15 and Rule 28 of the CGST Rules" }
        }
      ]
    },
    // STAGE 8
    {
      "id": "level-8", "levelType": "level", "title": "Case: Tribunal Gate", "prerequisite": "Ethics & Law", "satisfactionGoal": 50,
      "narrativeGoal": "Explore the fine line between legal tax planning and illegal evasion.", "keyTopics": ["Tax Avoidance", "Tax Evasion"],
      "characters": ["GOKU", "Judge"],
      "puzzles": [
        {
          "id": "p8-1", "type": "dilemma", "character": "Judge",
          "dialogue": "Judge: 'The department argues your client's complex structure is for tax evasion. You argue it's tax planning. What is the defining line?'",
          "question": "What is the key distinction between Tax Planning and Tax Evasion?",
          "options": ["They are the same.", "Evasion involves deliberate deceit (malafide intent), while Planning uses legal provisions to one's advantage.", "Evasion is for income tax, Planning is for GST."],
          "correctAnswer": "Evasion involves deliberate deceit (malafide intent), while Planning uses legal provisions to one's advantage.",
          "satisfaction": 50, "difficulty": "hard",
          "knowledge": { "text": "This is a fine but critical legal line. Tax planning (or avoidance) uses the letter of the law to minimize tax. Evasion involves illegal acts like hiding income or faking invoices.", "furtherReading": "This is a conceptual topic based on various landmark court judgments." }
        }
      ]
    },
    // STAGE 9
    {
      "id": "level-9", "levelType": "case_file", "title": "Case: Operation Phoenix", "prerequisite": "Final Exam", "satisfactionGoal": 100,
      "narrativeGoal": "Solve a multi-layered circular trading fraud to prove your worth.", "keyTopics": ["Circular Trading", "Fake ITC"],
      "characters": ["GOKU", "Commissioner"],
      "puzzles": [
        {
          "id": "p9-1", "type": "mcq", "character": "Commissioner",
          "dialogue": "Commissioner: 'Goku, a shell company created fake invoices for a manufacturer. The manufacturer used this fake ITC to pay his GST, then supplied goods to an exporter who claimed a fraudulent IGST refund. Where did the government suffer the first actual cash loss?'",
          "question": "What is the point of first revenue loss in this circular trading fraud?",
          "options": ["When the shell company printed the fake invoice.", "When the exporter received the fraudulent refund.", "When the manufacturer utilized the fake ITC, instead of paying his output tax in cash."],
          "correctAnswer": "When the manufacturer utilized the fake ITC, instead of paying his output tax in cash.",
          "satisfaction": 100, "difficulty": "hard",
          "knowledge": { "text": "Excellent. The fraud materializes and causes a loss the moment a taxpayer uses a fake credit to offset a real cash tax liability. The subsequent refund claim is a second-stage loss.", "furtherReading": "This scenario covers concepts from Sections 16, 49, and 122 of the CGST Act." }
        }
      ]
    },
    // Case file #3
    {
      "id": "case-3",
      "levelType": "case_file",
      "title": "The Phantom ITC Claim",
      "location": "Forensic Audit Unit – CGST Commissionerate",
      "satisfactionGoal": 250,
      "characters": ["GOKU", "InspectorSharma", "ClientMystic"],
      "narrativeGoal": "Unravel a complex input tax credit (ITC) fraud scheme involving a network of fictitious suppliers and identify the critical legal violations to advise the department on the next steps.",
      "topic": [
        "Input Tax Credit (ITC)",
        "Fraudulent ITC Claims",
        "Matching Concept",
        "Reverse Charge Mechanism (RCM)",
        "Show Cause Notice (SCN)"
      ],
      "prerequisite": "Input Tax Credit (ITC), Fraudulent ITC Claims, Matching Concept, Reverse Charge Mechanism (RCM), Show Cause Notice (SCN)",
      "puzzles": [
        {
          "id": "202507092223-01",
          "type": "mcq",
          "character": "InspectorSharma",
          "dialogue": "Goku, we've got a suspicious case. 'Visionary Ventures Pvt. Ltd.' has claimed a massive ITC, but their supplier, 'Spectral Solutions', appears to be non-existent. We found a discrepancy between GSTR-2B and their GSTR-3B filings. What's the immediate red flag here?",
          "question": "Based on Inspector Sharma's initial findings, what is the most immediate and concerning red flag regarding Visionary Ventures' ITC claim?",
          "options": [
            "Visionary Ventures has claimed ITC higher than their GSTR-2B.",
            "Spectral Solutions' GSTR-1 is not filed.",
            "Visionary Ventures has paid less tax than declared in GSTR-1.",
            "The supplier is not registered in the same state."
          ],
          "correctAnswer": "Visionary Ventures has claimed ITC higher than their GSTR-2B.",
          "satisfaction": 10,
          "difficulty": "easy",
          "knowledge": {
            "text": "A fundamental principle of GST is that ITC can only be claimed if it appears in GSTR-2B, which is auto-generated from the supplier's GSTR-1. A claim higher than GSTR-2B indicates a potential mismatch or fraudulent claim.",
            "furtherReading": "Section 16(2)(aa) of the CGST Act, 2017"
          }
        },
        {
          "id": "202507092223-02",
          "type": "error_detection",
          "character": "GOKU",
          "dialogue": "I need to analyze the documents provided by Visionary Ventures. They've submitted purchase invoices from 'Spectral Solutions', but the E-Way Bills seem to be missing for several high-value transactions. Also, the invoices don't have proper HSN codes for all goods.",
          "question": "From Goku's observations, what is the single most critical error in the documentation provided by Visionary Ventures, suggesting a deeper issue than a mere clerical mistake?",
          "options": [
            "Missing E-Way Bills for high-value transactions.",
            "Absence of proper HSN codes on invoices.",
            "Invoices are not serially numbered.",
            "The date format on the invoices is incorrect."
          ],
          "correctAnswer": "Missing E-Way Bills for high-value transactions.",
          "satisfaction": 15,
          "difficulty": "medium",
          "knowledge": {
            "text": "Missing E-Way Bills for high-value transactions is a significant red flag in cases of fictitious supplies, as it indicates that no actual movement of goods took place. While HSN codes are important, their absence is generally a compliance error, not an indicator of fraud on its own.",
            "furtherReading": "Rule 138 of the CGST Rules, 2017"
          }
        },
        {
          "id": "202507092223-03",
          "type": "mcq",
          "character": "InspectorSharma",
          "dialogue": "We've tried to contact 'Spectral Solutions' at their registered address. It's a vacant plot. Clearly a shell company. Visionary Ventures insists they received goods and services. What's the core legal principle violated by Visionary Ventures if no actual supply occurred?",
          "question": "If 'Spectral Solutions' is a shell company and no actual supply of goods or services occurred, which fundamental condition for claiming ITC has 'Visionary Ventures Pvt. Ltd.' violated?",
          "options": [
            "The recipient must possess a tax invoice or debit note.",
            "The recipient must have received the goods or services.",
            "The tax charged has been actually paid to the government.",
            "The recipient has furnished the return under section 39."
          ],
          "correctAnswer": "The recipient must have received the goods or services.",
          "satisfaction": 20,
          "difficulty": "easy",
          "knowledge": {
            "text": "One of the crucial conditions for claiming ITC is that the recipient must have actually received the goods or services. If the supplier is fictitious and no actual supply took place, this condition is not met, rendering the ITC claim ineligible.",
            "furtherReading": "Section 16(2)(b) of the CGST Act, 2017"
          }
        },
        {
          "id": "202507092223-04",
          "type": "multiple_answers",
          "character": "ClientMystic",
          "dialogue": "Visionary Ventures is arguing that even if Spectral Solutions defaulted, they acted in good faith. They claim that the 'matching concept' under GST means the department should pursue Spectral Solutions, not them. What are the key elements of the matching concept they are misinterpreting?",
          "question": "Client Mystic is misinterpreting the matching concept. Which of the following conditions under GST law are directly related to the 'matching concept' for ITC eligibility, and are likely violated in this fraud scheme?",
          "options": [
            "The details of the inward supply are furnished by the supplier in GSTR-1.",
            "The recipient has furnished the return under section 39.",
            "The details of ITC claimed by the recipient are matched with the details furnished by the supplier.",
            "The tax charged in respect of such supply has been actually paid to the Government."
          ],
          "correctAnswer": [
            "The details of the inward supply are furnished by the supplier in GSTR-1.",
            "The details of ITC claimed by the recipient are matched with the details furnished by the supplier."
          ],
          "satisfaction": 25,
          "difficulty": "medium",
          "knowledge": {
            "text": "The matching concept ensures that ITC is claimed only on supplies for which the supplier has duly declared the outward supply in their GSTR-1 and paid the tax. Both the supplier's declaration and the recipient's claim being matched are crucial. The actual payment of tax by the supplier is also part of this ecosystem, but the core 'matching' refers to the invoice details.",
            "furtherReading": "Section 42 & Section 43 (though currently in abeyance but underlying principle applies), Section 16(2)(c) & (aa) of the CGST Act, 2017"
          }
        },
        {
          "id": "202507092223-05",
          "type": "calculative",
          "character": "InspectorSharma",
          "dialogue": "We've uncovered that 'Visionary Ventures' claimed ITC of ₹1,50,000 based on invoices from 'Spectral Solutions'. However, during our investigation, we found that out of this, ₹50,000 pertains to services that are under Reverse Charge Mechanism (RCM), but they paid no RCM liability. Also, another ₹25,000 of ITC was claimed on blocked credits. What's the total amount of ineligible ITC they have claimed from these specific findings?",
          "question": "Calculate the total amount of ineligible ITC claimed by Visionary Ventures based on Inspector Sharma's findings (RCM non-compliance + blocked credits).",
          "options": [],
          "correctAnswer": 75000,
          "satisfaction": 30,
          "difficulty": "hard",
          "knowledge": {
            "text": "ITC on supplies under RCM is eligible only if the recipient pays the RCM liability and then takes the ITC. If they haven't paid the RCM, the ITC is ineligible. Similarly, blocked credits under Section 17(5) are never eligible. Therefore, ₹50,000 (RCM non-compliance) + ₹25,000 (blocked credits) = ₹75,000 ineligible ITC.",
            "furtherReading": "Section 9(3) & 9(4) (RCM), Section 17(5) (Blocked Credits) of the CGST Act, 2017"
          }
        },
        {
          "id": "202507092223-06",
          "type": "dilemma",
          "character": "GOKU",
          "dialogue": "All signs point to a deliberate attempt to claim fraudulent ITC. We have the discrepancies in GSTR-2B, missing E-Way Bills, a non-existent supplier, and clear violations of ITC conditions. Now, what's the most appropriate and legally sound next step for the department to initiate against Visionary Ventures?",
          "question": "Considering all the evidence gathered, what is the most appropriate and legally sound procedural action the CGST Department should take against 'Visionary Ventures Pvt. Ltd.' to recover the fraudulent ITC and initiate proceedings?",
          "options": [
            "Immediately arrest the directors of Visionary Ventures without further notice.",
            "Issue a Show Cause Notice (SCN) under Section 74 of the CGST Act for recovery of tax not paid or short paid or erroneously refunded or input tax credit wrongly availed or utilized by reason of fraud or any wilful misstatement or suppression of facts.",
            "Send a simple demand letter asking for voluntary payment of the fraudulent ITC.",
            "Direct Visionary Ventures to file revised returns for the past periods."
          ],
          "correctAnswer": "Issue a Show Cause Notice (SCN) under Section 74 of the CGST Act for recovery of tax not paid or short paid or erroneously refunded or input tax credit wrongly availed or utilized by reason of fraud or any wilful misstatement or suppression of facts.",
          "satisfaction": 150,
          "difficulty": "hard",
          "knowledge": {
            "text": "For cases involving fraud, wilful misstatement, or suppression of facts, a Show Cause Notice (SCN) under Section 74 of the CGST Act is the appropriate legal procedure. This provides the taxpayer an opportunity to present their case before any adverse action is taken, upholding principles of natural justice, while also initiating the formal recovery process under the more stringent fraud provisions. Immediate arrest without SCN is generally not the first step in such cases.",
            "furtherReading": "Section 74 of the CGST Act, 2017"
          }
        }
      ]
    }
  ]
}