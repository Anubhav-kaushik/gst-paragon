// game-data.js

const gameData = [
    // Level 1: The Threshold Trial
    {
        id: 'level-1',
        title: "The Threshold Trial",
        characters: [
            { name: "Priya, Small Vendor", icon: "fa-solid fa-store" },
            { name: "Bhushan, Threshold Inspector", icon: "fa-solid fa-user-shield" }
        ],
        prerequisite: "GST Registration & Composition",
        status: 'unlocked',
        satisfactionGoal: 80,
        puzzles: [
            {
                "character": "Priya, Small Vendor",
                "dialogue": "I sell homemade pickles and earn around ₹18 lakhs a year. Do I need GST registration?",
                "question": "Is Priya required to register for GST with ₹18 lakh turnover in her state?",
                "options": [
                    "Yes, registration is mandatory above ₹10 lakh",
                    "No, registration is not required as it's below ₹20 lakh threshold",
                    "Yes, because any business must register for GST"
                ],
                "correctAnswer": "No, registration is not required as it's below ₹20 lakh threshold",
                "satisfaction": 5
            },
            {
                "character": "Bhushan, Senior Inspector",
                "dialogue": "Many vendors forget that the ₹20 lakh limit isn’t the same across India.",
                "question": "What is the threshold limit for GST registration in Special Category States (like Mizoram or Manipur)?",
                "options": [
                    "₹10 lakh",
                    "₹20 lakh",
                    "₹40 lakh"
                ],
                "correctAnswer": "₹10 lakh",
                "satisfaction": 6
            },
            {
                "character": "Priya, Small Vendor",
                "dialogue": "I’ve recently started selling online through an app. Does that change anything?",
                "question": "Does selling through an e-commerce platform make GST registration mandatory?",
                "options": [
                    "Only if turnover exceeds ₹20 lakh",
                    "Yes, registration is mandatory regardless of turnover",
                    "No, unless selling interstate"
                ],
                "correctAnswer": "Yes, registration is mandatory regardless of turnover",
                "satisfaction": 7
            },
            {
                "character": "Bhushan, Senior Inspector",
                "dialogue": "Some small suppliers benefit from a simpler tax scheme.",
                "question": "What is the maximum turnover allowed for opting into the Composition Scheme in most states?",
                "options": [
                    "₹1 crore",
                    "₹1.5 crore",
                    "₹2 crore"
                ],
                "correctAnswer": "₹1.5 crore",
                "satisfaction": 5
            },
            {
                "character": "Priya, Small Vendor",
                "dialogue": "If I choose the Composition Scheme, do I need to file monthly GST returns?",
                "question": "What is the GST return frequency for Composition Scheme taxpayers?",
                "options": [
                    "Monthly",
                    "Quarterly",
                    "Annually only"
                ],
                "correctAnswer": "Quarterly",
                "satisfaction": 4
            },
            {
                "character": "Bhushan, Senior Inspector",
                "dialogue": "Composition taxpayers must pay a fixed tax on their turnover.",
                "question": "What is the GST rate for a composition scheme trader?",
                "options": [
                    "1% of turnover",
                    "5% of profit",
                    "18% of taxable value"
                ],
                "correctAnswer": "1% of turnover",
                "satisfaction": 6
            },
            {
                "character": "Priya, Small Vendor",
                "dialogue": "If I buy from other GST-registered dealers, can I claim input tax credit?",
                "question": "Can Composition Scheme dealers claim Input Tax Credit (ITC)?",
                "options": [
                    "Yes, like any regular taxpayer",
                    "Only on capital goods",
                    "No, they cannot claim ITC"
                ],
                "correctAnswer": "No, they cannot claim ITC",
                "satisfaction": 6
            },
            {
                "character": "Bhushan, Senior Inspector",
                "dialogue": "It's important to check if you're making inter-state supplies.",
                "question": "Can a taxpayer opting for Composition Scheme make inter-state outward supplies?",
                "options": [
                    "Yes, with IGST registration",
                    "No, they are restricted from making inter-state outward supplies",
                    "Yes, but only if turnover is under ₹40 lakh"
                ],
                "correctAnswer": "No, they are restricted from making inter-state outward supplies",
                "satisfaction": 8
            },
            {
                "character": "Priya, Small Vendor",
                "dialogue": "If I voluntarily register for GST, can I later cancel it?",
                "question": "Can a person who voluntarily registered under GST cancel their registration?",
                "options": [
                    "No, once registered, it’s permanent",
                    "Yes, they can apply for cancellation",
                    "Only if turnover falls below ₹5 lakh"
                ],
                "correctAnswer": "Yes, they can apply for cancellation",
                "satisfaction": 5
            },
            {
                "character": "Bhushan, Senior Inspector",
                "dialogue": "Sometimes people register just to get better input credits.",
                "question": "Why might someone voluntarily register for GST even if under threshold?",
                "options": [
                    "To avail Input Tax Credit and sell to larger businesses",
                    "To avoid income tax",
                    "To avoid paying CGST/SGST"
                ],
                "correctAnswer": "To avail Input Tax Credit and sell to larger businesses",
                "satisfaction": 6
            },
            {
                "character": "Priya, Small Vendor",
                "dialogue": "My friend said I need PAN to register. Is that true?",
                "question": "Is PAN mandatory for GST registration in India?",
                "options": [
                    "No, Aadhaar is enough",
                    "Yes, PAN is mandatory",
                    "Only for businesses above ₹50 lakh"
                ],
                "correctAnswer": "Yes, PAN is mandatory",
                "satisfaction": 4
            },
            {
                "character": "Bhushan, Senior Inspector",
                "dialogue": "You must file for registration within a specific time after becoming liable.",
                "question": "Within how many days must a person apply for GST registration after becoming liable?",
                "options": [
                    "30 days",
                    "45 days",
                    "60 days"
                ],
                "correctAnswer": "30 days",
                "satisfaction": 4
            },
            {
                "character": "Priya, Small Vendor",
                "dialogue": "If I start a seasonal stall only in Diwali, do I need to register for GST?",
                "question": "Is GST registration required for seasonal businesses exceeding threshold turnover?",
                "options": [
                    "No, seasonal businesses are exempt",
                    "Yes, if aggregate turnover exceeds threshold in a financial year",
                    "Only if selling online"
                ],
                "correctAnswer": "Yes, if aggregate turnover exceeds threshold in a financial year",
                "satisfaction": 6
            },
            {
                "character": "Bhushan, Senior Inspector",
                "dialogue": "Some businesses try to split their turnover into multiple branches to avoid registration.",
                "question": "Can a business split itself into multiple units to avoid GST registration?",
                "options": [
                    "Yes, if each is under ₹20 lakh",
                    "No, turnover is calculated on PAN basis (aggregate)",
                    "Yes, if done across different states"
                ],
                "correctAnswer": "No, turnover is calculated on PAN basis (aggregate)",
                "satisfaction": 7
            },
            {
                "character": "Priya, Small Vendor",
                "dialogue": "I opted for Composition Scheme but started selling online. Will that affect my eligibility?",
                "question": "Does selling through e-commerce disqualify a person from the Composition Scheme?",
                "options": [
                    "Yes, e-commerce sellers can't opt for Composition Scheme",
                    "No, it's allowed with prior intimation",
                    "Only if selling interstate"
                ],
                "correctAnswer": "Yes, e-commerce sellers can't opt for Composition Scheme",
                "satisfaction": 8
            }
        ]

    },
    // Level 2: The Input Maze
    {
        id: 'level-2',
        title: "The Input Maze",
        characters: [
            { name: "Aarav, Factory Owner", icon: "fa-solid fa-industry" },
            { name: "Sangeeta, Accountant", icon: "fa-solid fa-file-invoice-dollar" }
        ],
        prerequisite: "Input Tax Credit (ITC)",
        status: 'locked',
        satisfactionGoal: 80,
        puzzles: [
            {
                "character": "Aarav, Factory Owner",
                "dialogue": "I bought a new lathe machine for ₹5 lakh. Can I claim ITC on it?",
                "question": "Is Input Tax Credit available on capital goods like machinery?",
                "options": [
                    "No, ITC is only for raw materials",
                    "Yes, ITC is allowed on capital goods used in business",
                    "Only if machine cost exceeds ₹10 lakh"
                ],
                "correctAnswer": "Yes, ITC is allowed on capital goods used in business",
                "satisfaction": 6
            },
            {
                "character": "Inspector Bhushan",
                "dialogue": "Be careful! ITC is not allowed on all capital purchases.",
                "question": "Which of the following capital goods is NOT eligible for ITC?",
                "options": [
                    "Factory equipment",
                    "Motor vehicle used to transport staff",
                    "CNC Machine used in production"
                ],
                "correctAnswer": "Motor vehicle used to transport staff",
                "satisfaction": 7
            },
            {
                "character": "Aarav, Factory Owner",
                "dialogue": "I received goods today but the invoice will come next week. Can I claim ITC now?",
                "question": "When can ITC be claimed in case of late invoice?",
                "options": [
                    "As soon as goods are received",
                    "Only after invoice is received",
                    "After tax is paid to the supplier"
                ],
                "correctAnswer": "Only after invoice is received",
                "satisfaction": 6
            },
            {
                "character": "Inspector Bhushan",
                "dialogue": "You must receive the goods AND the invoice to claim ITC.",
                "question": "Which condition is mandatory for availing ITC?",
                "options": [
                    "Invoice should be uploaded on GSTR-1",
                    "Goods must be received and invoice must be in possession",
                    "Payment to supplier must be made in advance"
                ],
                "correctAnswer": "Goods must be received and invoice must be in possession",
                "satisfaction": 5
            },
            {
                "character": "Aarav, Factory Owner",
                "dialogue": "I paid for a service, but the supplier hasn't filed GSTR-1. Can I still take ITC?",
                "question": "Can ITC be claimed if supplier fails to upload invoice in GSTR-1?",
                "options": [
                    "Yes, if payment is made",
                    "No, invoice must reflect in GSTR-2B",
                    "Yes, with prior approval from GST officer"
                ],
                "correctAnswer": "No, invoice must reflect in GSTR-2B",
                "satisfaction": 8
            },
            {
                "character": "Inspector Bhushan",
                "dialogue": "Now let’s see how well you understand e-way bills.",
                "question": "When is an e-way bill required for transportation of goods?",
                "options": [
                    "When value exceeds ₹50,000",
                    "For all goods, regardless of value",
                    "Only for inter-state transport"
                ],
                "correctAnswer": "When value exceeds ₹50,000",
                "satisfaction": 6
            },
            {
                "character": "Aarav, Factory Owner",
                "dialogue": "My transporter's e-way bill expired mid-way. What now?",
                "question": "What happens if goods are found in transit with an expired e-way bill?",
                "options": [
                    "Goods are allowed with a warning",
                    "Goods can be detained and penalty imposed",
                    "New e-way bill can be generated on the spot"
                ],
                "correctAnswer": "Goods can be detained and penalty imposed",
                "satisfaction": 7
            },
            {
                "character": "Inspector Bhushan",
                "dialogue": "You must generate an e-way bill before the goods move.",
                "question": "Who is primarily responsible for e-way bill generation in case of supply by a registered supplier?",
                "options": [
                    "Transporter",
                    "Buyer",
                    "Supplier"
                ],
                "correctAnswer": "Supplier",
                "satisfaction": 5
            },
            {
                "character": "Aarav, Factory Owner",
                "dialogue": "Do I need a separate e-way bill for each invoice in one truck?",
                "question": "Can multiple invoices be covered under a single e-way bill?",
                "options": [
                    "Yes, through consolidated e-way bill",
                    "No, each invoice needs a separate e-way bill",
                    "Only if invoices are from the same supplier"
                ],
                "correctAnswer": "Yes, through consolidated e-way bill",
                "satisfaction": 6
            },
            {
                "character": "Inspector Bhushan",
                "dialogue": "Some people misuse ITC by fake invoices.",
                "question": "What is the penalty for availing fake ITC?",
                "options": [
                    "₹10,000 or 100% of tax involved, whichever is higher",
                    "Jail time only",
                    "Loss of registration only"
                ],
                "correctAnswer": "₹10,000 or 100% of tax involved, whichever is higher",
                "satisfaction": 7
            },
            {
                "character": "Aarav, Factory Owner",
                "dialogue": "Can I claim ITC on repairs to machinery used in production?",
                "question": "Is ITC allowed on repair and maintenance expenses of capital goods?",
                "options": [
                    "Yes, if used in course of business",
                    "No, repair services are not covered",
                    "Only if machine is over ₹10 lakh"
                ],
                "correctAnswer": "Yes, if used in course of business",
                "satisfaction": 6
            },
            {
                "character": "Inspector Bhushan",
                "dialogue": "If you delay payment to the supplier, ITC is reversed.",
                "question": "Within how many days must payment be made to avoid ITC reversal?",
                "options": [
                    "90 days",
                    "120 days",
                    "180 days"
                ],
                "correctAnswer": "180 days",
                "satisfaction": 5
            },
            {
                "character": "Aarav, Factory Owner",
                "dialogue": "What if I use the machinery for personal use?",
                "question": "Is ITC allowed on capital goods used partly for personal use?",
                "options": [
                    "Yes, full ITC",
                    "No, ITC not allowed at all",
                    "Only proportionate ITC for business use"
                ],
                "correctAnswer": "Only proportionate ITC for business use",
                "satisfaction": 6
            },
            {
                "character": "Inspector Bhushan",
                "dialogue": "Sometimes input tax is blocked by law regardless of use.",
                "question": "Which of the following items is BLOCKED for ITC even if used in business?",
                "options": [
                    "Health insurance for employees",
                    "Raw materials",
                    "Packing material"
                ],
                "correctAnswer": "Health insurance for employees",
                "satisfaction": 8
            },
            {
                "character": "Aarav, Factory Owner",
                "dialogue": "I want to ensure my ITC claim is clean and proper.",
                "question": "Which form is used to check auto-populated eligible ITC from supplier returns?",
                "options": [
                    "GSTR-1",
                    "GSTR-3B",
                    "GSTR-2B"
                ],
                "correctAnswer": "GSTR-2B",
                "satisfaction": 7
            },
            {
                "character": "Inspector Bhushan",
                "dialogue": "If you miss claiming ITC, you lose it forever.",
                "question": "What is the time limit to avail ITC for an invoice in a financial year?",
                "options": [
                    "30th September of next year or filing of annual return, whichever is earlier",
                    "End of next financial year",
                    "No time limit"
                ],
                "correctAnswer": "30th September of next year or filing of annual return, whichever is earlier",
                "satisfaction": 6
            },
            {
                "character": "Aarav, Factory Owner",
                "dialogue": "Can I transfer ITC if I shift my business to another state?",
                "question": "Is ITC transferable when a business is shifted to another state?",
                "options": [
                    "Yes, via ITC transfer form",
                    "No, new registration forfeits old ITC",
                    "Only with GST Council approval"
                ],
                "correctAnswer": "Yes, via ITC transfer form",
                "satisfaction": 5
            },
            {
                "character": "Inspector Bhushan",
                "dialogue": "You can lose ITC if the supplier defaults on tax payment.",
                "question": "Can a recipient claim ITC if the supplier does not pay tax to the government?",
                "options": [
                    "Yes, always",
                    "No, unless tax is paid by supplier",
                    "Yes, if buyer proves good faith"
                ],
                "correctAnswer": "No, unless tax is paid by supplier",
                "satisfaction": 8
            },
            {
                "character": "Aarav, Factory Owner",
                "dialogue": "Are there any ITC rules for depreciation on capital goods?",
                "question": "Can ITC be claimed on capital goods if depreciation is claimed on GST portion?",
                "options": [
                    "Yes",
                    "No",
                    "Only 50% allowed"
                ],
                "correctAnswer": "No",
                "satisfaction": 7
            }
        ]
    },
    // Level 3: Road to Compliance
    {
        id: 'level-3',
        title: "Road to Compliance",
        characters: [
            { name: "Bansal, Transporter", icon: "fa-solid fa-truck-fast" },
            { name: "Radhika, Warehouse Supervisor", icon: "fa-solid fa-warehouse" }
        ],
        prerequisite: "E-Way Bill System",
        status: 'locked',
        satisfactionGoal: 80,
        puzzles: [
            {
                "character": "Naveen, the Logistics Operator",
                "dialogue": "My driver is transporting goods worth ₹60,000 within the same state for a distance of 40 km. Do we need to generate an E-Way Bill?",
                "question": "Is an E-Way Bill required for intra-state movement of goods worth ₹60,000 over 40 km?",
                "options": [
                    "Yes, because the value exceeds ₹50,000",
                    "No, because the distance is below 50 km",
                    "Yes, because both value and distance thresholds are met"
                ],
                "correctAnswer": "Yes, because the value exceeds ₹50,000",
                "satisfaction": 8
            },
            {
                "character": "Naveen, the Logistics Operator",
                "dialogue": "We're moving goods worth ₹45,000 across 250 km to another state. Do we need an E-Way Bill?",
                "question": "Is an E-Way Bill needed for inter-state transport of goods worth ₹45,000?",
                "options": [
                    "Yes, because it’s inter-state",
                    "No, because the value is below ₹50,000",
                    "Yes, because the distance is over 100 km"
                ],
                "correctAnswer": "No, because the value is below ₹50,000",
                "satisfaction": 6
            },
            {
                "character": "Naveen, the Logistics Operator",
                "dialogue": "We frequently send parts by hand delivery without using vehicles. Do E-Way Bill rules apply?",
                "question": "Are E-Way Bills required if goods are moved by hand delivery without a vehicle?",
                "options": [
                    "Yes, because any mode of movement is covered",
                    "No, because vehicles must be involved",
                    "Only if the value exceeds ₹1 lakh"
                ],
                "correctAnswer": "Yes, because any mode of movement is covered",
                "satisfaction": 7
            },
            {
                "character": "Naveen, the Logistics Operator",
                "dialogue": "Our truck broke down, and we had to transfer goods to another vehicle. What do I do about the E-Way Bill?",
                "question": "What should be done if goods are moved to another vehicle mid-transit?",
                "options": [
                    "Cancel the original E-Way Bill and generate a new one",
                    "Update the vehicle details in Part B",
                    "No action required if distance remains unchanged"
                ],
                "correctAnswer": "Update the vehicle details in Part B",
                "satisfaction": 7
            },
            {
                "character": "Naveen, the Logistics Operator",
                "dialogue": "I’ve heard that some goods don’t need E-Way Bills. Is that true?",
                "question": "Are there exemptions from E-Way Bill requirements for certain goods?",
                "options": [
                    "No, all goods require E-Way Bills",
                    "Yes, for goods like vegetables, milk, or live animals",
                    "Yes, but only if transported in government vehicles"
                ],
                "correctAnswer": "Yes, for goods like vegetables, milk, or live animals",
                "satisfaction": 6
            },
            {
                "character": "Naveen, the Logistics Operator",
                "dialogue": "We are sending multiple packages below ₹50,000 to the same consignee. Is an E-Way Bill still required?",
                "question": "Do multiple consignments of less than ₹50,000 each, but going to the same party, require an E-Way Bill?",
                "options": [
                    "Yes, if combined they exceed ₹50,000",
                    "No, because they are separate invoices",
                    "Only if they are in the same vehicle"
                ],
                "correctAnswer": "Yes, if combined they exceed ₹50,000",
                "satisfaction": 7
            },
            {
                "character": "Naveen, the Logistics Operator",
                "dialogue": "How long is an E-Way Bill valid for if we’re traveling 350 km?",
                "question": "What is the validity of an E-Way Bill for 350 km of road travel?",
                "options": [
                    "1 day",
                    "3 days",
                    "3 days plus 1 day for every 100 km"
                ],
                "correctAnswer": "3 days",
                "satisfaction": 6
            },
            {
                "character": "Naveen, the Logistics Operator",
                "dialogue": "If an E-Way Bill expires mid-transit due to delays, what’s the penalty?",
                "question": "What happens if goods are found in transit with an expired E-Way Bill?",
                "options": [
                    "There is no penalty if invoice is valid",
                    "A penalty of ₹10,000 or the tax involved, whichever is higher",
                    "Only a warning is issued for first offense"
                ],
                "correctAnswer": "A penalty of ₹10,000 or the tax involved, whichever is higher",
                "satisfaction": 8
            },
            {
                "character": "Naveen, the Logistics Operator",
                "dialogue": "Can we generate E-Way Bills in bulk for multiple consignments?",
                "question": "Is there a facility to generate bulk E-Way Bills for multiple consignments?",
                "options": [
                    "No, each E-Way Bill must be generated separately",
                    "Yes, using the JSON bulk upload feature",
                    "Only allowed for government departments"
                ],
                "correctAnswer": "Yes, using the JSON bulk upload feature",
                "satisfaction": 5
            },
            {
                "character": "Naveen, the Logistics Operator",
                "dialogue": "We’re transporting goods to a SEZ. Do we need an E-Way Bill?",
                "question": "Is an E-Way Bill required for movement of goods to a SEZ unit?",
                "options": [
                    "Yes, SEZ movements are covered",
                    "No, SEZs are outside the GST net",
                    "Only if the goods are capital goods"
                ],
                "correctAnswer": "Yes, SEZ movements are covered",
                "satisfaction": 6
            },
            {
                "character": "Naveen, the Logistics Operator",
                "dialogue": "Who is responsible for generating the E-Way Bill — the supplier or the transporter?",
                "question": "Who should generate the E-Way Bill?",
                "options": [
                    "Only the supplier can generate it",
                    "Transporter or recipient if authorized by supplier",
                    "Only the GST officer",
                ],
                "correctAnswer": "Transporter or recipient if authorized by supplier",
                "satisfaction": 6
            },
            {
                "character": "Naveen, the Logistics Operator",
                "dialogue": "We’re moving goods via train. Does that need an E-Way Bill?",
                "question": "Is an E-Way Bill required for goods transported by rail?",
                "options": [
                    "Yes, if value exceeds ₹50,000",
                    "No, rail transport is exempt",
                    "Only needed for inter-state movement"
                ],
                "correctAnswer": "Yes, if value exceeds ₹50,000",
                "satisfaction": 6
            },
            {
                "character": "Naveen, the Logistics Operator",
                "dialogue": "What if goods are being returned to the supplier? Do we still need an E-Way Bill?",
                "question": "Is an E-Way Bill required for return of goods?",
                "options": [
                    "No, returns are not covered",
                    "Yes, if value is over ₹50,000",
                    "Only required if tax credit is reversed"
                ],
                "correctAnswer": "Yes, if value is over ₹50,000",
                "satisfaction": 7
            },
            {
                "character": "Naveen, the Logistics Operator",
                "dialogue": "We received goods with the wrong vehicle number on the E-Way Bill. Is it valid?",
                "question": "What happens if the E-Way Bill has incorrect vehicle details?",
                "options": [
                    "It’s invalid and liable for penalty",
                    "It can be updated before transit begins",
                    "No need to update if distance is under 100 km"
                ],
                "correctAnswer": "It can be updated before transit begins",
                "satisfaction": 5
            },
            {
                "character": "Naveen, the Logistics Operator",
                "dialogue": "We’re sending goods in parts — will each vehicle need its own E-Way Bill?",
                "question": "Is a separate E-Way Bill required for each part shipment?",
                "options": [
                    "Yes, each consignment needs its own E-Way Bill",
                    "No, only one consolidated bill is enough",
                    "Only if transported across state lines"
                ],
                "correctAnswer": "Yes, each consignment needs its own E-Way Bill",
                "satisfaction": 6
            }
        ]

    },
    // Level 4: Digital Marketplace
    {
        id: 'level-4',
        title: "Digital Marketplace",
        characters: [
            { name: "Rohan, E-Seller", icon: "fa-solid fa-laptop-code" },
            { name: "Platform Bot, TCS AI", icon: "fa-solid fa-robot" }
        ],
        prerequisite: "E-Commerce GST & TCS",
        status: 'locked',
        satisfactionGoal: 80,
        puzzles: [
            {
                "character": "Rohan, E-commerce Seller",
                "dialogue": "I'm selling goods online and the portal collects some tax on my behalf. What's that all about?",
                "question": "What is the nature of the tax collected by the e-commerce operator under GST?",
                "options": [
                    "Tax Deducted at Source (TDS)",
                    "Tax Collected at Source (TCS)",
                    "Reverse Charge Tax"
                ],
                "correctAnswer": "Tax Collected at Source (TCS)",
                "satisfaction": 8
            },
            {
                "character": "Platform Bot, TCS Assistant",
                "dialogue": "Hi Rohan! You received Rs. 1,00,000 through our platform this month. Let's compute TCS!",
                "question": "What is the rate of TCS to be collected under section 52 of the CGST Act?",
                "options": [
                    "1% (0.5% CGST + 0.5% SGST/UTGST or 1% IGST)",
                    "2% (1% CGST + 1% SGST)",
                    "0.1% of total turnover"
                ],
                "correctAnswer": "1% (0.5% CGST + 0.5% SGST/UTGST or 1% IGST)",
                "satisfaction": 3
            },
            {
                "character": "Rohan, E-commerce Seller",
                "dialogue": "I have buyers in different states. I’m confused about who I should charge IGST or CGST+SGST.",
                "question": "When does an e-commerce supply attract IGST instead of CGST + SGST?",
                "options": [
                    "When buyer and seller are in the same state",
                    "When supply is inter-State",
                    "When the seller is under Composition Scheme"
                ],
                "correctAnswer": "When supply is inter-State",
                "satisfaction": 6
            },
            {
                "character": "Platform Bot, TCS Assistant",
                "dialogue": "You're registered in Delhi but supplying goods to a buyer in Mumbai. This affects place of supply!",
                "question": "In such cases, what determines the place of supply for goods sold via e-commerce?",
                "options": [
                    "The location of the supplier",
                    "The location of the e-commerce operator",
                    "The location of the buyer"
                ],
                "correctAnswer": "The location of the buyer",
                "satisfaction": 3
            },
            {
                "character": "Rohan, E-commerce Seller",
                "dialogue": "My buyer’s shipping address is in Uttar Pradesh, but billing is in Delhi. I’m not sure which state gets the tax.",
                "question": "Which address determines the place of supply in such e-commerce sales of goods?",
                "options": [
                    "Billing address",
                    "Shipping address",
                    "E-commerce operator’s address"
                ],
                "correctAnswer": "Shipping address",
                "satisfaction": 5
            },
            {
                "character": "Platform Bot, TCS Assistant",
                "dialogue": "You must file GSTR-8 to report TCS collected. Missing it can attract penalties!",
                "question": "Which return is filed by e-commerce operators for TCS under GST?",
                "options": [
                    "GSTR-7",
                    "GSTR-8",
                    "GSTR-9"
                ],
                "correctAnswer": "GSTR-8",
                "satisfaction": 8
            },
            {
                "character": "Rohan, E-commerce Seller",
                "dialogue": "I got a message from the GST portal that my TCS credit is auto-populated. How do I use it?",
                "question": "Where does the TCS collected appear for the seller in their GST portal?",
                "options": [
                    "Cash Ledger",
                    "Credit Ledger",
                    "Electronic Liability Register"
                ],
                "correctAnswer": "Cash Ledger",
                "satisfaction": 7
            },
            {
                "character": "Rohan, E-commerce Seller",
                "dialogue": "Can I opt for Composition Scheme even though I sell through an e-commerce portal?",
                "question": "Can a person supplying goods through an e-commerce operator opt for Composition Scheme?",
                "options": [
                    "Yes, with permission from the operator",
                    "No, such persons are not eligible",
                    "Yes, if turnover is below ₹1.5 crore"
                ],
                "correctAnswer": "No, such persons are not eligible",
                "satisfaction": 3
            },
            {
                "character": "Platform Bot, TCS Assistant",
                "dialogue": "We deduct TCS before paying you, even if your turnover is below the registration threshold.",
                "question": "Is a seller required to register under GST if supplying through an e-commerce operator?",
                "options": [
                    "Yes, registration is mandatory",
                    "No, registration depends on turnover",
                    "Only if operator is unregistered"
                ],
                "correctAnswer": "Yes, registration is mandatory",
                "satisfaction": 5
            },
            {
                "character": "Rohan, E-commerce Seller",
                "dialogue": "Can I claim the TCS deducted by the platform in my GST returns?",
                "question": "How can a seller claim the benefit of TCS deducted by the e-commerce operator?",
                "options": [
                    "By adjusting it in GSTR-1",
                    "By claiming it as ITC in GSTR-3B",
                    "By applying for refund separately"
                ],
                "correctAnswer": "By claiming it as ITC in GSTR-3B",
                "satisfaction": 3
            },
            {
                "character": "Platform Bot, TCS Assistant",
                "dialogue": "We collected ₹2,000 as TCS from your account this month.",
                "question": "What happens if the e-commerce operator fails to deposit TCS with the government?",
                "options": [
                    "Seller must deposit it directly",
                    "Interest and penalty apply to the operator",
                    "Tax is recovered from buyer"
                ],
                "correctAnswer": "Interest and penalty apply to the operator",
                "satisfaction": 5
            },
            {
                "character": "Rohan, E-commerce Seller",
                "dialogue": "Sometimes buyers cancel the order after payment, but TCS is already deducted!",
                "question": "What happens to TCS when a transaction is cancelled and amount is refunded to the customer?",
                "options": [
                    "TCS must still be paid",
                    "TCS can be adjusted in future returns",
                    "Seller must pay TCS again"
                ],
                "correctAnswer": "TCS can be adjusted in future returns",
                "satisfaction": 7
            },
            {
                "character": "Platform Bot, TCS Assistant",
                "dialogue": "If you sell both services and goods via our platform, TCS rules vary slightly.",
                "question": "Is TCS applicable to both goods and services sold through e-commerce platforms?",
                "options": [
                    "Only on goods",
                    "Only on services",
                    "On both goods and services"
                ],
                "correctAnswer": "On both goods and services",
                "satisfaction": 8
            },
            {
                "character": "Rohan, E-commerce Seller",
                "dialogue": "How often do you file returns for TCS? Monthly or quarterly?",
                "question": "What is the periodicity of GSTR-8 return for TCS filing?",
                "options": [
                    "Monthly",
                    "Quarterly",
                    "Annually"
                ],
                "correctAnswer": "Monthly",
                "satisfaction": 8
            },
            {
                "character": "Platform Bot, TCS Assistant",
                "dialogue": "We are required to collect TCS only on net taxable value of supplies!",
                "question": "TCS under GST is calculated on which value?",
                "options": [
                    "Gross invoice value",
                    "Net value of taxable supplies (excluding returns)",
                    "MRP of the product"
                ],
                "correctAnswer": "Net value of taxable supplies (excluding returns)",
                "satisfaction": 8
            },
            {
                "character": "Rohan, E-commerce Seller",
                "dialogue": "Sometimes I directly ship to buyers without using the platform's logistics. Does TCS still apply?",
                "question": "Does TCS under GST apply even if the e-commerce operator doesn’t handle logistics?",
                "options": [
                    "Yes, if payment is routed through the operator",
                    "No, TCS applies only when logistics is handled",
                    "Only if buyer is unregistered"
                ],
                "correctAnswer": "Yes, if payment is routed through the operator",
                "satisfaction": 8
            },
            {
                "character": "Platform Bot, TCS Assistant",
                "dialogue": "TCS doesn’t apply when you supply to government departments through our platform.",
                "question": "In which scenario is TCS under section 52 of CGST Act not applicable?",
                "options": [
                    "When supply is to government notified agencies",
                    "When goods are exported",
                    "When buyer is unregistered"
                ],
                "correctAnswer": "When supply is to government notified agencies",
                "satisfaction": 3
            }
        ]
    },
    // Level 5: Service Sector Showdown
    {
        id: 'level-5',
        title: "Service Sector Showdown",
        characters: [
            { name: "Anika, Consultant", icon: "fa-solid fa-briefcase" },
            { name: "Rajat, Foreign Client", icon: "fa-solid fa-globe" }
        ],
        prerequisite: "Export of Services, RCM on Services, LUT",
        status: 'locked',
        satisfactionGoal: 80,
        puzzles: [
            {
                "character": "Anika, Freelance Consultant",
                "dialogue": "My client is in the US, and I’m offering them digital marketing services from India. Do I still need to pay GST?",
                "question": "Does providing a service to a foreign client qualify as 'export of service' under GST?",
                "options": [
                    "Only if payment is received in Indian currency",
                    "Yes, provided conditions like payment in foreign currency and location outside India are met",
                    "No, services are always taxable"
                ],
                "correctAnswer": "Yes, provided conditions like payment in foreign currency and location outside India are met",
                "satisfaction": 4
            },
            {
                "character": "Anika, Freelance Consultant",
                "dialogue": "My client is paying me in US Dollars, but I forgot to file the LUT this year. Will I be liable to pay GST?",
                "question": "What happens if export is made without filing LUT?",
                "options": [
                    "GST is payable and later refundable",
                    "No GST liability arises in exports regardless",
                    "Penalty is imposed but no GST is charged"
                ],
                "correctAnswer": "GST is payable and later refundable",
                "satisfaction": 4
            },
            {
                "character": "Anika, Freelance Consultant",
                "dialogue": "I offer training services to a company in Dubai. I delivered it online from India. Is this export?",
                "question": "Is an online service provided from India to a company in Dubai considered export of service under GST?",
                "options": [
                    "Yes, if recipient is outside India and payment is in convertible foreign exchange",
                    "No, because digital services are excluded",
                    "Only if recipient has a GST registration in India"
                ],
                "correctAnswer": "Yes, if recipient is outside India and payment is in convertible foreign exchange",
                "satisfaction": 3
            },
            {
                "character": "Anika, Freelance Consultant",
                "dialogue": "I heard of something called Reverse Charge. Does it apply to me when I import services?",
                "question": "When does Reverse Charge Mechanism apply for services under GST?",
                "options": [
                    "Only for government contractors",
                    "When a registered person receives services from a supplier located outside India",
                    "Only when the supplier fails to file GSTR-1"
                ],
                "correctAnswer": "When a registered person receives services from a supplier located outside India",
                "satisfaction": 7
            },
            {
                "character": "Anika, Freelance Consultant",
                "dialogue": "I paid a designer from Germany for my website. Do I need to pay tax on that in India?",
                "question": "Is GST payable under RCM when a registered person avails services from a supplier located outside India?",
                "options": [
                    "Yes, under Reverse Charge",
                    "No, because the service is from outside India",
                    "Only if the value exceeds ₹1 lakh"
                ],
                "correctAnswer": "Yes, under Reverse Charge",
                "satisfaction": 8
            },
            {
                "character": "Anika, Freelance Consultant",
                "dialogue": "If I pay tax on services received from abroad under RCM, can I take ITC for that?",
                "question": "Is Input Tax Credit allowed on tax paid under Reverse Charge for import of services?",
                "options": [
                    "No, ITC is not allowed on RCM",
                    "Yes, if used for business",
                    "Only after 6 months from payment"
                ],
                "correctAnswer": "Yes, if used for business",
                "satisfaction": 7
            },
            {
                "character": "Anika, Freelance Consultant",
                "dialogue": "Do I need a physical copy of the LUT certificate to claim export exemption?",
                "question": "Is physical submission of LUT required to claim export without payment of IGST?",
                "options": [
                    "Yes, always",
                    "No, electronic submission is sufficient",
                    "Only for turnover above ₹1 crore"
                ],
                "correctAnswer": "No, electronic submission is sufficient",
                "satisfaction": 6
            },
            {
                "character": "Anika, Freelance Consultant",
                "dialogue": "If I provide services to a client in India and receive money in USD, is that treated as export?",
                "question": "Does payment in foreign currency alone make a service export under GST?",
                "options": [
                    "Yes, if money is in USD",
                    "No, location of recipient must also be outside India",
                    "Only if LUT is filed"
                ],
                "correctAnswer": "No, location of recipient must also be outside India",
                "satisfaction": 7
            },
            {
                "character": "Anika, Freelance Consultant",
                "dialogue": "I started a new financial year. Do I need to file a fresh LUT every year?",
                "question": "Is LUT required to be filed every financial year?",
                "options": [
                    "Yes, it must be filed every financial year",
                    "No, one-time filing is enough",
                    "Only for service providers"
                ],
                "correctAnswer": "Yes, it must be filed every financial year",
                "satisfaction": 6
            },
            {
                "character": "Anika, Freelance Consultant",
                "dialogue": "What documents should I maintain for exports made without payment of tax?",
                "question": "Which documents are essential to support export without payment of tax under LUT?",
                "options": [
                    "Invoice, shipping bill, LUT acknowledgment",
                    "PAN card, invoice, purchase order",
                    "Only the invoice and payment advice"
                ],
                "correctAnswer": "Invoice, shipping bill, LUT acknowledgment",
                "satisfaction": 4
            },
            {
                "character": "Anika, Freelance Consultant",
                "dialogue": "I got late in applying for LUT this year. Can I still file it for past exports?",
                "question": "Can LUT be filed retroactively for past export invoices?",
                "options": [
                    "Yes, up to 6 months",
                    "No, GST must be paid on those invoices",
                    "Only with commissioner’s approval"
                ],
                "correctAnswer": "No, GST must be paid on those invoices",
                "satisfaction": 3
            },
            {
                "character": "Anika, Freelance Consultant",
                "dialogue": "I am not sure if my service qualifies as export. Who decides this officially?",
                "question": "Which authority determines whether a supply qualifies as export of service?",
                "options": [
                    "The jurisdictional GST officer",
                    "RBI",
                    "SEBI"
                ],
                "correctAnswer": "The jurisdictional GST officer",
                "satisfaction": 8
            },
            {
                "character": "Anika, Freelance Consultant",
                "dialogue": "I issued an invoice in INR to a foreign client. Is that still an export?",
                "question": "Can services invoiced in INR qualify as export under GST?",
                "options": [
                    "Yes, if RBI permits it",
                    "No, export requires convertible foreign exchange",
                    "Yes, if goods are involved"
                ],
                "correctAnswer": "Yes, if RBI permits it",
                "satisfaction": 3
            },
            {
                "character": "Anika, Freelance Consultant",
                "dialogue": "My foreign client is paying through PayPal in INR. Is that valid for export?",
                "question": "Does PayPal payment in INR meet conditions for export under GST?",
                "options": [
                    "Yes, because PayPal is international",
                    "Only if amount reaches India in convertible foreign exchange",
                    "No, INR not allowed for export"
                ],
                "correctAnswer": "Only if amount reaches India in convertible foreign exchange",
                "satisfaction": 3
            },
            {
                "character": "Anika, Freelance Consultant",
                "dialogue": "How soon do I need to receive payment after export to claim exemption?",
                "question": "What is the time limit to receive payment in foreign exchange for export of services?",
                "options": [
                    "Within 6 months of invoice",
                    "Within 1 year of filing GSTR-1",
                    "Within 15 days of invoice"
                ],
                "correctAnswer": "Within 6 months of invoice",
                "satisfaction": 6
            },
            {
                "character": "Anika, Freelance Consultant",
                "dialogue": "Do I need to mention LUT number on every invoice?",
                "question": "Is mentioning LUT number on export invoice mandatory?",
                "options": [
                    "Yes, always",
                    "Not mandatory but recommended",
                    "Only for exports over ₹5 lakh"
                ],
                "correctAnswer": "Not mandatory but recommended",
                "satisfaction": 3
            },
            {
                "character": "Anika, Freelance Consultant",
                "dialogue": "Is there a penalty if I forget to apply LUT but file it later?",
                "question": "What is the consequence of not filing LUT before making export?",
                "options": [
                    "No penalty, just file later",
                    "Must pay IGST on such supplies",
                    "LUT can be filed later with interest"
                ],
                "correctAnswer": "Must pay IGST on such supplies",
                "satisfaction": 3
            },
            {
                "character": "Anika, Freelance Consultant",
                "dialogue": "If I take services from an advocate, do I need to pay GST under RCM?",
                "question": "Is GST applicable under RCM when services are taken from a lawyer?",
                "options": [
                    "Yes, under reverse charge",
                    "No, lawyers are exempt",
                    "Only if lawyer charges above ₹10,000"
                ],
                "correctAnswer": "Yes, under reverse charge",
                "satisfaction": 3
            },
            {
                "character": "Anika, Freelance Consultant",
                "dialogue": "If I take legal services from an unregistered advocate, does RCM apply?",
                "question": "Does RCM apply on legal services even if the advocate is unregistered?",
                "options": [
                    "Yes, reverse charge applies regardless",
                    "No, registration is mandatory for RCM",
                    "Only if services exceed ₹50,000"
                ],
                "correctAnswer": "Yes, reverse charge applies regardless",
                "satisfaction": 7
            },
            {
                "character": "Anika, Freelance Consultant",
                "dialogue": "Do I need to file a bond if I don’t want to pay IGST on export?",
                "question": "When is bond required instead of LUT for export without payment of tax?",
                "options": [
                    "When exporter has defaulted in filing returns",
                    "Only for services to SEZ",
                    "Never, LUT is always sufficient"
                ],
                "correctAnswer": "When exporter has defaulted in filing returns",
                "satisfaction": 5
            }
        ]

    },
    // Level 6: Across the Border
    {
        id: 'level-6',
        title: "The Global Trade Desk",
        characters: [
            { name: "Sunita, Exporter", icon: "fa-solid fa-ship" },
            { name: "Mr. Gupta, Mentor", icon: "fa-solid fa-user-secret" }
        ],
        prerequisite: "IGST Refunds, Imports, SEZ, Shipping Bills, LUT",
        status: 'locked',
        satisfactionGoal: 80,
        puzzles: [
            {
                "character": "Sunita, the Importer/Exporter",
                "dialogue": "I've shipped goods under zero-rated supply, but my IGST refund hasn't come even after a month!",
                "question": "Which of the following is a mandatory condition for IGST refund on export of goods?",
                "options": [
                    "Filing of GSTR-1 only",
                    "Filing of GSTR-1 and Shipping Bill matched with EGM",
                    "Only submission of invoice to customs"
                ],
                "correctAnswer": "Filing of GSTR-1 and Shipping Bill matched with EGM",
                "satisfaction": 5
            },
            {
                "character": "Mr. Gupta, the Mentor",
                "dialogue": "Sunita, your client from abroad sent payment after 80 days. Will that affect your export status?",
                "question": "For a supply to qualify as export of services, what is the time limit for receiving payment in foreign exchange?",
                "options": [
                    "Within 120 days",
                    "Within 90 days",
                    "Within 180 days"
                ],
                "correctAnswer": "Within 180 days",
                "satisfaction": 4
            },
            {
                "character": "Sunita, the Importer/Exporter",
                "dialogue": "I used LUT instead of paying IGST on my export consignment. Is that acceptable?",
                "question": "What allows an exporter to export goods or services without payment of IGST?",
                "options": [
                    "SEZ Status",
                    "Letter of Undertaking (LUT)",
                    "Advance Authorization"
                ],
                "correctAnswer": "Letter of Undertaking (LUT)",
                "satisfaction": 4
            },
            {
                "character": "Mr. Gupta, the Mentor",
                "dialogue": "I told Sunita that she must renew her LUT every year. She wasn’t aware!",
                "question": "What is the validity period of a Letter of Undertaking (LUT)?",
                "options": [
                    "Valid for three years from issue",
                    "Valid until revoked",
                    "Valid for one financial year"
                ],
                "correctAnswer": "Valid for one financial year",
                "satisfaction": 3
            },
            {
                "character": "Sunita, the Importer/Exporter",
                "dialogue": "I forgot to file the export invoice in GSTR-1. Can that delay my IGST refund?",
                "question": "Which return must be correctly filed to trigger automatic IGST refund?",
                "options": [
                    "GSTR-2A",
                    "GSTR-1 and GSTR-3B",
                    "GSTR-9"
                ],
                "correctAnswer": "GSTR-1 and GSTR-3B",
                "satisfaction": 6
            },
            {
                "character": "Mr. Gupta, the Mentor",
                "dialogue": "She exported goods under LUT but didn’t realize delay in foreign remittance has consequences.",
                "question": "If export proceeds are not realized within the RBI time limit, what is the GST implication?",
                "options": [
                    "Export remains zero-rated forever",
                    "LUT automatically extends",
                    "Exporter has to pay IGST with interest"
                ],
                "correctAnswer": "Exporter has to pay IGST with interest",
                "satisfaction": 4
            },
            {
                "character": "Sunita, the Importer/Exporter",
                "dialogue": "A customs officer said my shipping bill wasn't filed correctly. Can it stop refund?",
                "question": "Which document must be correctly filed and linked for IGST refund processing?",
                "options": [
                    "Proforma Invoice",
                    "Shipping Bill with EGM filed",
                    "Delivery Challan"
                ],
                "correctAnswer": "Shipping Bill with EGM filed",
                "satisfaction": 4
            },
            {
                "character": "Mr. Gupta, the Mentor",
                "dialogue": "Sunita needs to differentiate between export under bond and under LUT.",
                "question": "Which of the following is NOT required when exporting under LUT?",
                "options": [
                    "Furnishing a bond with bank guarantee",
                    "Filing LUT on GST portal",
                    "Export proceeds received in convertible currency"
                ],
                "correctAnswer": "Furnishing a bond with bank guarantee",
                "satisfaction": 5
            },
            {
                "character": "Sunita, the Importer/Exporter",
                "dialogue": "I’m supplying goods to an SEZ unit. Do I treat it as an export?",
                "question": "Which of the following qualifies as a zero-rated supply under GST?",
                "options": [
                    "Supply to a 100% EOU",
                    "Supply to an SEZ unit",
                    "Interstate supply to a registered dealer"
                ],
                "correctAnswer": "Supply to an SEZ unit",
                "satisfaction": 6
            },
            {
                "character": "Mr. Gupta, the Mentor",
                "dialogue": "She asked if delay in EGM filing can stall her refund claim.",
                "question": "What happens if the Export General Manifest (EGM) is not filed in time?",
                "options": [
                    "Refund gets auto-approved",
                    "Refund claim is delayed",
                    "Penalty is auto-imposed"
                ],
                "correctAnswer": "Refund claim is delayed",
                "satisfaction": 6
            },
            {
                "character": "Sunita, the Importer/Exporter",
                "dialogue": "Can I claim both MEIS (export incentive) and IGST refund on the same shipment?",
                "question": "Is dual benefit of IGST refund and export incentives like MEIS allowed?",
                "options": [
                    "Yes, for all shipments",
                    "Only if DGFT allows",
                    "Depends on FTP provisions in force"
                ],
                "correctAnswer": "Depends on FTP provisions in force",
                "satisfaction": 6
            },
            {
                "character": "Mr. Gupta, the Mentor",
                "dialogue": "Sunita forgot to mention IGST paid in GSTR-3B. Can she fix it?",
                "question": "Can an exporter rectify under-reporting of IGST paid on exports in future GSTR-3B?",
                "options": [
                    "No, once submitted it's final",
                    "Yes, through amendment in subsequent GSTR-1 only",
                    "Yes, by correcting in next GSTR-3B return"
                ],
                "correctAnswer": "Yes, by correcting in next GSTR-3B return",
                "satisfaction": 5
            },
            {
                "character": "Sunita, the Importer/Exporter",
                "dialogue": "Is SEZ required to pay IGST on inward supplies from DTA?",
                "question": "Are supplies from DTA to SEZ zero-rated or taxable?",
                "options": [
                    "Taxable at concessional rate",
                    "Zero-rated supplies under GST",
                    "Subject to RCM"
                ],
                "correctAnswer": "Zero-rated supplies under GST",
                "satisfaction": 3
            },
            {
                "character": "Mr. Gupta, the Mentor",
                "dialogue": "She asked if she needs a separate LUT for each client. That’s a common myth.",
                "question": "Is a separate LUT required for each export client?",
                "options": [
                    "Yes, one LUT per client",
                    "No, one LUT per financial year for all exports",
                    "Only for exports exceeding ₹1 crore"
                ],
                "correctAnswer": "No, one LUT per financial year for all exports",
                "satisfaction": 6
            },
            {
                "character": "Sunita, the Importer/Exporter",
                "dialogue": "If I export through third-party agents, can I still claim refund?",
                "question": "Can a merchant exporter claim IGST refund if exports are done through third-party agents?",
                "options": [
                    "Only if declared in LUT",
                    "Yes, with proper documentation",
                    "No, refund allowed only to manufacturer exporter"
                ],
                "correctAnswer": "Yes, with proper documentation",
                "satisfaction": 3
            },
            {
                "character": "Mr. Gupta, the Mentor",
                "dialogue": "Sunita tried to amend invoice details after 2 years. That’s too late.",
                "question": "What is the time limit for claiming IGST refund on exports?",
                "options": [
                    "1 year from shipping",
                    "2 years from relevant date",
                    "3 years from date of invoice"
                ],
                "correctAnswer": "2 years from relevant date",
                "satisfaction": 6
            },
            {
                "character": "Sunita, the Importer/Exporter",
                "dialogue": "I issued an invoice in INR to a foreign client. Will that disqualify export status?",
                "question": "For a service to qualify as export, which of these must be true?",
                "options": [
                    "Payment received in INR is acceptable",
                    "Place of supply must be outside India and payment in convertible foreign exchange",
                    "Only GSTR-1 filing matters"
                ],
                "correctAnswer": "Place of supply must be outside India and payment in convertible foreign exchange",
                "satisfaction": 5
            },
            {
                "character": "Mr. Gupta, the Mentor",
                "dialogue": "She wondered if GST applies on import freight. That’s an RCM scenario!",
                "question": "Who is liable to pay GST on ocean freight for CIF imports?",
                "options": [
                    "Importer under RCM",
                    "Shipping line",
                    "Customs broker"
                ],
                "correctAnswer": "Importer under RCM",
                "satisfaction": 6
            },
            {
                "character": "Sunita, the Importer/Exporter",
                "dialogue": "I have bond instead of LUT. Is that still valid?",
                "question": "When should an exporter use Bond instead of LUT?",
                "options": [
                    "If annual turnover is below ₹1 crore",
                    "If any tax evasion case is pending",
                    "If turnover is above ₹5 crore"
                ],
                "correctAnswer": "If any tax evasion case is pending",
                "satisfaction": 6
            },
            {
                "character": "Mr. Gupta, the Mentor",
                "dialogue": "Sunita feared refund delay means rejection. I reassured her it's often procedural.",
                "question": "Which is a common reason for delay in IGST refund on exports?",
                "options": [
                    "Non-payment of IGST",
                    "Mismatch in invoice details between GSTR-1 and shipping bill",
                    "Unregistered recipient"
                ],
                "correctAnswer": "Mismatch in invoice details between GSTR-1 and shipping bill",
                "satisfaction": 7
            }
        ]

    },
    // Level 7: Construction & Compliance
    {
        id: 'level-7',
        title: "The Concrete Jungle",
        characters: [
            { name: "Mr. Verma, the Real Estate Developer", icon: "fa-solid fa-building" },
            { name: "Karan, the Rival", icon: "fa-solid fa-user-check" }
        ],
        prerequisite: "Real Estate GST, Works Contract, Affordable Housing, Harassment Ethics",
        status: 'locked',
        satisfactionGoal: 80,
        puzzles: [
            {
                "character": "Mr. Verma, the Real Estate Developer",
                "dialogue": "We’re building a residential project under an affordable housing scheme. I heard there's a concessional GST rate. Can you confirm?",
                "question": "What is the GST rate applicable to affordable housing under a notified scheme (without ITC)?",
                "options": [
                    "12% with input tax credit",
                    "1% without input tax credit",
                    "5% with input tax credit"
                ],
                "correctAnswer": "1% without input tax credit",
                "satisfaction": 8
            },
            {
                "character": "Karan, the Rival",
                "dialogue": "I subcontracted electrical work for our apartment project. Should GST apply on it even though it's part of the overall construction?",
                "question": "What is the applicable GST treatment on works contract services related to immovable property?",
                "options": [
                    "Exempt from GST if part of a larger residential project",
                    "Taxable under GST as a supply of service",
                    "Treated as supply of goods"
                ],
                "correctAnswer": "Taxable under GST as a supply of service",
                "satisfaction": 6
            },
            {
                "character": "Mr. Verma, the Real Estate Developer",
                "dialogue": "We purchased cement and steel for construction. Can we claim ITC on them under the new GST scheme for real estate?",
                "question": "Can ITC be claimed on input goods like cement under the new concessional GST scheme for residential real estate?",
                "options": [
                    "Yes, fully allowed",
                    "No, ITC is not available",
                    "Only 50% of ITC can be claimed"
                ],
                "correctAnswer": "No, ITC is not available",
                "satisfaction": 5
            },
            {
                "character": "Karan, the Rival",
                "dialogue": "I got a GST notice that felt more like intimidation than compliance. Aren’t there guidelines on enforcement behavior?",
                "question": "Which document governs ethical conduct and fairness during GST enforcement?",
                "options": [
                    "GST Practitioner Guidelines",
                    "CBIC's Citizen Charter and SOPs",
                    "GST Intelligence Manual"
                ],
                "correctAnswer": "CBIC's Citizen Charter and SOPs",
                "satisfaction": 7
            },
            {
                "character": "Mr. Verma, the Real Estate Developer",
                "dialogue": "I want to switch from the old GST scheme with ITC to the new concessional one. What happens to my earlier ITC?",
                "question": "What must a developer do with unutilized ITC when switching to the new concessional GST scheme (1%/5%)?",
                "options": [
                    "Carry forward the ITC indefinitely",
                    "Reverse the ITC proportionate to project stages",
                    "Claim full refund of the ITC"
                ],
                "correctAnswer": "Reverse the ITC proportionate to project stages",
                "satisfaction": 6
            },
            {
                "character": "Karan, the Rival",
                "dialogue": "One of our projects includes commercial shops within the housing complex. How is GST applied in such cases?",
                "question": "What is the GST rate for commercial apartments in a residential project under the concessional scheme?",
                "options": [
                    "1% without ITC",
                    "8% with ITC",
                    "5% without ITC"
                ],
                "correctAnswer": "5% without ITC",
                "satisfaction": 6
            },
            {
                "character": "Mr. Verma, the Real Estate Developer",
                "dialogue": "We’re dealing with delayed payments from customers. Do we need to pay GST on advances or only on completion?",
                "question": "When is GST payable in the case of residential apartment sales under construction?",
                "options": [
                    "Only after the sale deed is executed",
                    "On completion of construction",
                    "At the time of receiving advance"
                ],
                "correctAnswer": "At the time of receiving advance",
                "satisfaction": 4
            },
            {
                "character": "Karan, the Rival",
                "dialogue": "I have a dispute with the GST officer over an ambiguous valuation issue. Is there any advisory mechanism I can approach?",
                "question": "Which mechanism allows a taxpayer to seek clarity on GST matters before a dispute arises?",
                "options": [
                    "Advance Ruling Authority",
                    "Dispute Resolution Tribunal",
                    "GST Appellate Forum"
                ],
                "correctAnswer": "Advance Ruling Authority",
                "satisfaction": 7
            },
            {
                "character": "Mr. Verma, the Real Estate Developer",
                "dialogue": "We’re planning joint development with a landowner. Is there GST on the transfer of development rights?",
                "question": "Is GST applicable on the transfer of development rights by a landowner to a developer?",
                "options": [
                    "No, it is exempt under GST",
                    "Yes, it is taxable as a supply of service",
                    "Only applicable if landowner receives money"
                ],
                "correctAnswer": "Yes, it is taxable as a supply of service",
                "satisfaction": 5
            },
            {
                "character": "Karan, the Rival",
                "dialogue": "Our project is mixed — some units are under affordable housing, others not. Can we charge different GST rates?",
                "question": "How is GST applied in a mixed project with both affordable and non-affordable housing units?",
                "options": [
                    "Averaged rate for all units",
                    "Separate GST rates based on unit type",
                    "Only affordable rate applies to all units"
                ],
                "correctAnswer": "Separate GST rates based on unit type",
                "satisfaction": 5
            },
            {
                "character": "Mr. Verma, the Real Estate Developer",
                "dialogue": "A GST officer visited our site without notice and asked for random invoices. Is that even allowed?",
                "question": "What protects taxpayers from unauthorized site visits or inspections?",
                "options": [
                    "Central Excise Rules",
                    "Proper authorization under GST law with reasons recorded",
                    "No such protection exists"
                ],
                "correctAnswer": "Proper authorization under GST law with reasons recorded",
                "satisfaction": 7
            },
            {
                "character": "Karan, the Rival",
                "dialogue": "We have unsold flats after completion. Do we pay GST when we eventually sell them?",
                "question": "Is GST applicable on the sale of ready-to-move-in flats?",
                "options": [
                    "Yes, always",
                    "No, if completion certificate is received before sale",
                    "Yes, unless buyer is first-time homeowner"
                ],
                "correctAnswer": "No, if completion certificate is received before sale",
                "satisfaction": 6
            },
            {
                "character": "Mr. Verma, the Real Estate Developer",
                "dialogue": "Do we need to separately show the GST component in our invoices to buyers?",
                "question": "Is it mandatory for developers to separately indicate GST charged on invoices to homebuyers?",
                "options": [
                    "Yes, unless absorbed by builder",
                    "No, GST is part of the total cost",
                    "Only if the buyer asks"
                ],
                "correctAnswer": "Yes, unless absorbed by builder",
                "satisfaction": 6
            },
            {
                "character": "Karan, the Rival",
                "dialogue": "I'm being asked to show all site expenses including petty cash in our GST returns. Is that normal?",
                "question": "What kind of project expenses need to be reflected in GST returns?",
                "options": [
                    "Only purchases above Rs. 50,000",
                    "All taxable supplies with invoice value",
                    "Only contract payments"
                ],
                "correctAnswer": "All taxable supplies with invoice value",
                "satisfaction": 6
            },
            {
                "character": "Mr. Verma, the Real Estate Developer",
                "dialogue": "Can we claim ITC if we build staff quarters for site engineers inside the project site?",
                "question": "Can ITC be claimed for construction of temporary staff quarters within project premises?",
                "options": [
                    "Yes, as long as used for business",
                    "No, ITC blocked on immovable property construction",
                    "Only if quarters are removable structures"
                ],
                "correctAnswer": "No, ITC blocked on immovable property construction",
                "satisfaction": 6
            }
        ]

    },
    // Level 8: The Advisory Audit
    {
        id: 'level-8',
        title: "The Advisory Audit",
        characters: [
            { name: "Ms. Sharma, CA", icon: "fa-solid fa-calculator" },
            { name: "GST Officer Jain", icon: "fa-solid fa-magnifying-glass-chart" }
        ],
        prerequisite: "Valuation, Related Party Transactions, Discounts, Composite Supply",
        status: 'locked',
        satisfactionGoal: 80,
        puzzles: [
            {
                "character": "Ms. Sharma, the Chartered Accountant",
                "dialogue": "My client is supplying goods to a sister concern at a price significantly lower than market value. How should I determine the taxable value in this case?",
                "question": "What is the valuation method applicable when supplying goods to a related party without consideration?",
                "options": [
                    "Use the declared invoice value",
                    "Use the open market value",
                    "Use the last purchase price"
                ],
                "correctAnswer": "Use the open market value",
                "satisfaction": 6
            },
            {
                "character": "Ms. Sharma, the Chartered Accountant",
                "dialogue": "The supplier is offering a post-supply discount to promote sales, but it’s not mentioned in the initial invoice. Can this discount reduce the taxable value?",
                "question": "Under what condition can post-supply discounts be deducted from the value of supply?",
                "options": [
                    "If agreed in advance and linked to specific invoices",
                    "If the supplier decides unilaterally",
                    "Anytime before filing GSTR-1"
                ],
                "correctAnswer": "If agreed in advance and linked to specific invoices",
                "satisfaction": 4
            },
            {
                "character": "Ms. Sharma, the Chartered Accountant",
                "dialogue": "My client bundles installation services with machinery. They charge a single price. How should I value this supply?",
                "question": "What is the nature of a supply that includes two or more goods/services for a single price and is naturally bundled?",
                "options": [
                    "Mixed supply",
                    "Composite supply",
                    "Multiple individual supplies"
                ],
                "correctAnswer": "Composite supply",
                "satisfaction": 5
            },
            {
                "character": "Ms. Sharma, the Chartered Accountant",
                "dialogue": "We’re trying to classify a combo deal of chocolates and a toy. They're sold together at one price. Which GST rate should we apply?",
                "question": "What is the applicable rate in a mixed supply scenario?",
                "options": [
                    "The highest rate among the components",
                    "The average rate of the items",
                    "The rate of the principal item"
                ],
                "correctAnswer": "The highest rate among the components",
                "satisfaction": 7
            },
            {
                "character": "Ms. Sharma, the Chartered Accountant",
                "dialogue": "A client gave an unconditional discount on the invoice. Can this be excluded from the taxable value?",
                "question": "Which discount is deductible from the value of supply under GST?",
                "options": [
                    "Only post-supply discounts",
                    "Only discounts reflected in invoice",
                    "Both pre and post-supply discounts"
                ],
                "correctAnswer": "Only discounts reflected in invoice",
                "satisfaction": 6
            },
            {
                "character": "Ms. Sharma, the Chartered Accountant",
                "dialogue": "My client wants to supply services to a branch office located in another state. How do we treat this?",
                "question": "Are supplies between distinct persons under the same PAN in different states considered taxable?",
                "options": [
                    "No, they are exempt",
                    "Yes, they are taxable as inter-state supplies",
                    "Only if invoice is raised"
                ],
                "correctAnswer": "Yes, they are taxable as inter-state supplies",
                "satisfaction": 5
            },
            {
                "character": "Ms. Sharma, the Chartered Accountant",
                "dialogue": "A client supplies goods to an unrelated party but at a significantly discounted price. Should we be concerned?",
                "question": "In unrelated party transactions, when is the invoice value accepted as the taxable value?",
                "options": [
                    "Always, regardless of price",
                    "Only if it is not below cost",
                    "If the price is the sole consideration"
                ],
                "correctAnswer": "If the price is the sole consideration",
                "satisfaction": 4
            },
            {
                "character": "Ms. Sharma, the Chartered Accountant",
                "dialogue": "A taxpayer provides two services—consulting and legal—together at a single price. They aren't naturally bundled. What should I advise?",
                "question": "How is a supply with unrelated services taxed under GST?",
                "options": [
                    "As composite supply",
                    "As mixed supply",
                    "As bundled supply at average rate"
                ],
                "correctAnswer": "As mixed supply",
                "satisfaction": 5
            },
            {
                "character": "Ms. Sharma, the Chartered Accountant",
                "dialogue": "A client is supplying gift hampers during Diwali combining dhoop sticks, sweets, and dry fruits. What tax rate applies?",
                "question": "When unrelated items are sold together for a single price, what GST rate is applied?",
                "options": [
                    "Average of all items",
                    "Rate of highest taxed item",
                    "Zero rate if for gifting"
                ],
                "correctAnswer": "Rate of highest taxed item",
                "satisfaction": 7
            },
            {
                "character": "Ms. Sharma, the Chartered Accountant",
                "dialogue": "We issued a discount credit note after supply, but didn’t mention the discount in the original invoice. Can we adjust the tax liability?",
                "question": "When can a post-supply discount be used to reduce output tax?",
                "options": [
                    "Only if linked to the original invoice and agreed before supply",
                    "Always",
                    "Only if approved by the GST Officer"
                ],
                "correctAnswer": "Only if linked to the original invoice and agreed before supply",
                "satisfaction": 5
            },
            {
                "character": "Ms. Sharma, the Chartered Accountant",
                "dialogue": "I have a case where a company is supplying goods to its marketing subsidiary below cost. How do I compute the value?",
                "question": "If open market value is not available for a related party transaction, what is the next best method under GST valuation rules?",
                "options": [
                    "Cost of production plus 10%",
                    "Declared invoice value",
                    "Last sale price to any customer"
                ],
                "correctAnswer": "Cost of production plus 10%",
                "satisfaction": 5
            },
            {
                "character": "Ms. Sharma, the Chartered Accountant",
                "dialogue": "A company offers a quantity-based discount that was pre-agreed in a contract. Can this reduce their tax?",
                "question": "What condition must be fulfilled for a volume discount to reduce taxable value?",
                "options": [
                    "It should be mentioned in the invoice",
                    "It must be agreed before supply and linked to specific invoices",
                    "Only mentioned in return filing",
                ],
                "correctAnswer": "It must be agreed before supply and linked to specific invoices",
                "satisfaction": 6
            },
            {
                "character": "Ms. Sharma, the Chartered Accountant",
                "dialogue": "A car showroom is offering a free car wash with every service booking. Are they liable to pay GST on the free service?",
                "question": "What is the tax treatment of free items in a composite supply?",
                "options": [
                    "Tax only the main supply",
                    "Tax both items separately",
                    "Treat free items as exempt supplies",
                ],
                "correctAnswer": "Tax only the main supply",
                "satisfaction": 4
            },
            {
                "character": "Ms. Sharma, the Chartered Accountant",
                "dialogue": "My client supplies equipment along with mandatory AMC service. How should this be taxed?",
                "question": "If supply includes goods and services that are naturally bundled, how is the tax rate decided?",
                "options": [
                    "Based on the higher GST rate",
                    "Based on the principal supply",
                    "Equal tax on both",
                ],
                "correctAnswer": "Based on the principal supply",
                "satisfaction": 6
            },
            {
                "character": "Ms. Sharma, the Chartered Accountant",
                "dialogue": "The client received extra consideration later as a performance bonus. Is it part of the value of supply?",
                "question": "How should additional consideration received post-supply be treated under GST?",
                "options": [
                    "Ignore it as it's post-supply",
                    "Add it to value of supply and pay GST",
                    "Declare it in annual return only",
                ],
                "correctAnswer": "Add it to value of supply and pay GST",
                "satisfaction": 5
            },
            {
                "character": "Ms. Sharma, the Chartered Accountant",
                "dialogue": "A taxpayer is confused whether a combo of shampoo and conditioner sold together is mixed or composite. How do we tell?",
                "question": "What defines a 'composite supply' under GST?",
                "options": [
                    "Items are bundled due to business convenience",
                    "Items are naturally bundled and one is principal",
                    "Items are intentionally bundled for tax benefit",
                ],
                "correctAnswer": "Items are naturally bundled and one is principal",
                "satisfaction": 4
            },
            {
                "character": "Ms. Sharma, the Chartered Accountant",
                "dialogue": "A taxpayer sold products to its foreign parent company in India. They need to know the valuation rule.",
                "question": "Which rule governs supply to related persons under GST when consideration is involved?",
                "options": [
                    "Rule 28 of CGST Rules",
                    "Section 15(1) of CGST Act",
                    "Rule 31 of CGST Rules",
                ],
                "correctAnswer": "Rule 28 of CGST Rules",
                "satisfaction": 6
            },
            {
                "character": "Ms. Sharma, the Chartered Accountant",
                "dialogue": "My client is offering a bundled price for home cleaning and pest control. They're not usually offered together. What's the tax treatment?",
                "question": "If unrelated supplies are sold as a bundle, what is it called under GST?",
                "options": [
                    "Composite supply",
                    "Mixed supply",
                    "Optional supply",
                ],
                "correctAnswer": "Mixed supply",
                "satisfaction": 4
            },
            {
                "character": "Ms. Sharma, the Chartered Accountant",
                "dialogue": "The client wants to know if they can reduce taxable value by excluding transportation cost from the invoice.",
                "question": "When is transportation cost included in the value of supply under GST?",
                "options": [
                    "Only if separately billed",
                    "Always, if part of contract",
                    "Never",
                ],
                "correctAnswer": "Always, if part of contract",
                "satisfaction": 6
            },
            {
                "character": "Ms. Sharma, the Chartered Accountant",
                "dialogue": "A pharma company supplies medical kits bundled with a training service. How do we determine the principal supply?",
                "question": "What determines the principal supply in a composite bundle?",
                "options": [
                    "Item of higher value",
                    "Element that gives the bundle its essential character",
                    "Item first listed on invoice",
                ],
                "correctAnswer": "Element that gives the bundle its essential character",
                "satisfaction": 6
            }
        ]

    },
    // Level 9: The Tribunal Trial
    {
        id: 'level-9',
        title: "The Tribunal Trial",
        characters: [
            { name: "Ms. Sharma, CA", icon: "fa-solid fa-calculator" },
            { name: "Tribunal Judge", icon: "fa-solid fa-gavel" }
        ],
        prerequisite: "Appeals, Rulings & Evasion",
        status: 'locked',
        satisfactionGoal: 80,
        puzzles: [
            {
                character: { name: "Tribunal Judge", icon: "fa-solid fa-gavel" },
                dialogue: "Ms. Sharma, the department claims your client's structure is a sham transaction. You argue it's legitimate tax planning. The core of this case rests on one distinction.",
                question: "What is the fundamental difference between tax avoidance and tax evasion?",
                options: [
                    "There is no difference.",
                    "Avoidance is using legal methods to reduce tax burden; Evasion is using illegal means.",
                    "Evasion is for direct tax; Avoidance is for indirect tax."
                ],
                correctAnswer: "Avoidance is using legal methods to reduce tax burden; Evasion is using illegal means.",
                satisfaction: 100
            }
        ]
    }
];