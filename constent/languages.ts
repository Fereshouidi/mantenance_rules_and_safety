import { LanguageTypes } from "@/types"

export const english = {
    language: `english`,
    label: `english`,
    nav: {
        myName: `Fares Houidi`,
        hero: `Hero`,
        introduction: `Introduction`,
        RisksAndPrevention: `Risks & Prevention`,
        Prevention: `Prevention`,
        Instruction : `Instruction `,
        Conclusion: `Conclusion`
    },
    hero: {
        recognise: `Recognise`,
        ruleAndSafety: `Rules & Safety`,
        inTheFieldOf: `In the Field of`,
        industrialMaintenance: `Industrial Maintenance`,
        start: `Get Started`
    },
    introduction: {
        partOne: `Workplace safety is a set of rules and procedures aimed at protecting workers from hazards while on the job. In the field of industrial maintenance, these procedures are of particular importance due to the direct handling of electricity, mechanical machinery, chemicals, and noise.`,
        partTwo: `Adhering to safety not only protects the lives of workers but also contributes to the continuity of production, reduction of breakdowns, and limitation of losses. Studies indicate that over 70% of industrial accidents can be avoided simply by applying basic precautions such as wearing protective equipment.`,
        partThree: `This project aims to highlight the main risks in the field of industrial maintenance and ways to prevent them, promoting a culture of safe work among technicians and trainees.`
    },
    risks: { 
        label: `Risks`,
        electrical: {
            title: `Electrical Hazards`,
            subtitle: `Risk of shock, arc flash, and electrocution.`,
            description: `Contact with energized components can cause electric shock, leading to muscle spasms, cardiac arrest, and severe burns. High-voltage equipment poses a greater threat of arc flash — a violent explosion of energy that generates intense heat and pressure waves capable of causing fatal burns and vaporizing metal.`,
            examples: [
                `Performing maintenance on an energized electrical panel.`,
                `Accidental contact with live bus bars or terminals.`,
                `A damaged extension cord creating a live circuit on the floor.`
            ],
            prevention: {
                description: `Preventive measures in electrical work are essential to ensure a safe working environment. They focus on promoting a safety culture, maintaining proper work practices, and ensuring smooth operations while protecting all personnel involved.`,
                examples: [
                    `De-energizing circuits and applying lockout/tagout before work.`,
                    `Using insulated gloves and tools rated for electrical tasks.`,
                    `Inspecting extension cords and panels for damage before use.`
                ]
            }
        },
        mechanical: {
            title: `Mechanical & Stored Energy`,
            subtitle: `Crushing, entanglement, and impact from moving parts or stored energy.`,
            description: `Workers are exposed to crushing, shearing, or cutting injuries from parts like gears, belts, and presses. A machine can activate unexpectedly from residual hydraulic or pneumatic pressure, or stored energy in springs, causing immediate trauma, amputations, or death.`,
            examples: [
                `Clearing a jam while a machine's components are still energized.`,
                `A limb being pulled into a running roller or belt system.`,
                `The sudden release of pressurized fluid from a hydraulic line.`
            ],
            prevention: {
                description: `In mechanical and stored energy work, safety is a key part of daily operations. Prevention emphasizes organized work practices, adherence to professional procedures, and fostering a secure and productive working environment.`,
                examples: [
                    `Locking and tagging out machinery before clearing jams.`,
                    `Installing machine guards on gears, belts, and rollers.`,
                    `Releasing hydraulic or pneumatic pressure prior to service.`
                ]
            }
        },
        chemical: {
            title: `Chemical Exposure`,
            subtitle: `Burns, respiratory damage, and illness from industrial chemicals.`,
            description: `Technicians handle corrosive acids, toxic solvents, and industrial degreasers. Direct skin contact can cause severe chemical burns and tissue damage, while inhaling vapors in confined spaces can lead to respiratory failure, organ damage, or long-term diseases.`,
            examples: [
                `Skin burns from accidental contact with caustic cleaning agents.`,
                `Inhaling toxic fumes while working in a poorly ventilated space.`,
                `Splashing hydraulic fluid or solvents into the eyes.`
            ],
            prevention: {
                description: `Chemical safety requires continuous awareness and strict adherence to preventive practices. The focus is on maintaining a safe environment, training personnel, and ensuring protective measures are always in place.`,
                examples: [
                    `Wearing gloves, goggles, and respirators when handling chemicals.`,
                    `Working in well-ventilated areas or using exhaust systems.`,
                    `Storing flammable and corrosive chemicals in labeled containers.`
                ]
            }
        },
        noise: {
            title: `Hazardous Noise`,
            subtitle: `Permanent hearing loss from high-decibel industrial environments.`,
            description: `The industrial environment constantly generates high-decibel noise from machinery such as turbines and compressors. This continuous exposure leads to progressive and irreversible hearing loss. Loud noise also masks calls for help or approaching equipment.`,
            examples: [
                `Working for long periods near a running industrial generator.`,
                `Using impact wrenches or pneumatic grinders continuously.`,
                `Being inside a high-noise area, such as a machine or compressor room.`
            ],
            prevention: {
                description: `Hearing protection is crucial in noisy environments. Prevention focuses on cultivating a safety-conscious culture, applying protective measures, and organizing workspaces to maintain efficiency and safeguard hearing over time.`,
                examples: [
                    `Wearing earplugs or earmuffs in noisy areas.`,
                    `Limiting time spent near high-decibel machines.`,
                    `Installing sound-dampening enclosures around compressors or turbines.`
                ]
            }
        },
        fireExplosion: {
            title: `Fire & Explosion`,
            subtitle: `Ignition of flammable materials from hot work or electrical faults.`,
            description: `Maintenance activities like welding and grinding produce sparks and high heat, which are potent ignition sources. The presence of flammable fuels, solvents, or accumulations of combustible dust (wood, metal) can lead to rapidly spreading fires or devastating explosions.`,
            examples: [
                `Welding sparks igniting nearby oily rags or solvents.`,
                `Static discharge igniting flammable vapors during refueling.`,
                `An explosion from combustible dust being disturbed and ignited.`
            ],
            prevention: {
                description: `Fire and explosion prevention is a cornerstone of industrial safety. It emphasizes safe working practices, a well-organized environment, and maintaining operational continuity while protecting workers from hazards.`,
                examples: [
                    `Removing or shielding flammable materials before welding or cutting.`,
                    `Using anti-static grounding during fuel or solvent transfer.`,
                    `Cleaning dust accumulations and maintaining fire extinguishers nearby.`
                ]
            }
        },
        falls: {
            title: `Slips, Trips & Falls`,
            subtitle: `Injuries from falls from height or on the same level.`,
            description: `Falls are a leading cause of death and serious injury. This can be a fall from height while working on elevated platforms, scaffolding, or large machinery. Same-level falls are also common due to slippery surfaces from oil spills or tripping over equipment in walkways.`,
            examples: [
                `Falling from a ladder while reaching to service a machine.`,
                `Slipping on a patch of leaked oil on the floor.`,
                `Tripping over an air hose or power cord stretched across a walkway.`
            ],
            prevention: {
                description: `Preventing slips, trips, and falls relies on proper safety practices, organized work areas, and cultivating awareness among personnel. The aim is to ensure tasks are performed efficiently and safely at all times.`,
                examples: [
                    `Wearing non-slip safety shoes on oily or wet surfaces.`,
                    `Using harnesses and guardrails when working at height.`,
                    `Keeping walkways clear of hoses, cords, and clutter.`
                ]
            }
        },
    },
    instructions: {
        description: "In the field of industrial maintenance, there are several globally recognized guidelines aimed at ensuring worker protection and maintaining the efficiency and safety of equipment. These standards rely on structured procedures, strict adherence to official protocols, and continuous monitoring of potential risks. They also contribute to fostering a culture of safety among all workers, encouraging discipline and awareness when performing daily tasks. Adhering to these standards helps reduce the likelihood of accidents and injuries, ensures a safe and stable work environment, and enhances overall productivity and operational efficiency.",
        list: [
            {
                title: "Personal Protective Equipment (PPE)",
                eplaination: "Wearing protective gear such as helmets, gloves, safety glasses, and safety shoes."
            },
            {
                title: "Work Permit System",
                eplaination: "Certain tasks, such as welding or working in confined spaces, are not permitted without an official permit that specifies risks and preventive measures."
            },
            {
                title: "Machine Guarding",
                eplaination: "Installing guards on moving parts of machines to protect workers from direct contact."
            },
            {
                title: "Confined Space Entry",
                eplaination: "Following specific procedures before entry, such as proper ventilation, gas monitoring, and having an external observer."
            },
            {
                title: "Housekeeping",
                eplaination: "Maintaining a clean and organized workplace, free of obstacles and spills, to reduce the risk of slips or trips."
            },
            {
                title: "Electrical Safety Practices",
                eplaination: "Such as disconnecting the power source before maintenance, using insulated tools, and conducting regular inspections."
            },
            {
                title: "Lockout/Tagout (LOTO)",
                eplaination: "A procedure that ensures energy sources are isolated during maintenance, with locks or tags applied to prevent reactivation until the work is completed."
            },
        ]
    },
    Conclusion: {
        paragraphs: [
            "Safety in the industrial maintenance environment is a collective responsibility and can only be achieved through continuous commitment to approved standards and procedures. Applying these rules on a daily basis enhances a safe work environment, preserves workers' health, and ensures efficiency and continuity of production.",
            "Ongoing training for workers in the field of industrial maintenance plays a pivotal role in reducing errors and accidents. The more the worker is familiar with modern techniques and safety procedures, the greater their ability to handle emergency situations efficiently. Investing in the development of individuals' skills not only reflects on their personal safety but also contributes to improving performance quality and productivity."
        ]
    },
    footer: {
        createdBy: "CreatedBy",
        Copyright: "All Rights Reserved 2025",
    },
    sideMatters: {
        example: `Example`,
        examples: `Examples`,
        risk: "risk",
        prevention: "prevention",
        myName: "Fares Houidi",
    }



} as LanguageTypes

export const french = {
    language: `french`,
    label: `français`,
    nav: {
        myName: `Fares Houidi`,
        hero: `Héros`,
        introduction: `Introduction`,
        RisksAndPrevention: `Risques et Prévention`,
        Prevention: `Prévention`,
        Instruction : `Instruction`,
        Conclusion: `Conclusion`
    },
    hero: {
        recognise: `Reconnaître`,
        ruleAndSafety: `Règles et sécurité`,
        inTheFieldOf: `Dans le domaine de`,
        industrialMaintenance: `Maintenance industrielle`,
        start: `Commencer`
    },
    introduction: {
        partOne: `La sécurité au travail est un ensemble de règles et de procédures visant à protéger les travailleurs des risques pendant leur travail. Dans le domaine de la maintenance industrielle, ces procédures revêtent une importance particulière en raison de la manipulation directe de l'électricité, des machines mécaniques, des produits chimiques et du bruit.`,
        partTwo: `Le respect de la sécurité ne protège pas seulement la vie des travailleurs, mais contribue également à la continuité de la production, à la réduction des pannes et à la limitation des pertes. Des études montrent que plus de 70 % des accidents industriels peuvent être évités simplement en appliquant des précautions simples telles que le port d'équipements de protection.`,
        partThree: `Ce projet vise à mettre en lumière les principaux risques dans le domaine de la maintenance industrielle, ainsi que les moyens de les prévenir, afin de promouvoir une culture de travail sûr parmi les techniciens et les stagiaires.`
    },
    risks: { 
        label: `Risques`,
        electrical: {
            title: `Risques électriques`,
            subtitle: `Risque de choc électrique, arc électrique et électrocution.`,
            description: `Le contact avec des composants sous tension peut provoquer un choc électrique, entraînant des spasmes musculaires, un arrêt cardiaque et de graves brûlures. Les équipements haute tension présentent un risque accru d'arc électrique — une explosion violente d'énergie générant une chaleur intense et des ondes de pression pouvant causer des brûlures mortelles et la vaporisation du métal.`,
            examples: [
                `Effectuer la maintenance d'un panneau électrique sous tension.`,
                `Contact accidentel avec des barres ou terminaux sous tension.`,
                `Un câble d'extension endommagé créant un circuit actif au sol.`
            ],
            prevention: {
                description: `La prévention dans le domaine électrique est essentielle pour garantir un environnement de travail sûr. Elle repose sur la promotion d'une culture de sécurité, le respect des bonnes pratiques et la protection de tous les intervenants.`,
                examples: [
                    `Désactiver les circuits et appliquer le verrouillage/étiquetage avant le travail.`,
                    `Utiliser des gants et outils isolants adaptés aux travaux électriques.`,
                    `Inspecter les câbles et panneaux pour détecter les dommages avant utilisation.`
                ]
            }
        },
        mechanical: {
            title: `Énergie mécanique et stockée`,
            subtitle: `Écrasement, enchevêtrement et impact des pièces en mouvement ou de l'énergie stockée.`,
            description: `Les travailleurs sont exposés à des blessures par écrasement, cisaillement ou coupe provenant de pièces telles que engrenages, courroies et presses. Une machine peut s'activer de manière inattendue à cause d'une pression hydraulique ou pneumatique résiduelle, ou de l'énergie stockée dans les ressorts, entraînant des traumatismes immédiats, des amputations ou la mort.`,
            examples: [
                `Déblayer un blocage alors que les composants de la machine sont encore sous tension.`,
                `Un membre entraîné dans un rouleau ou une courroie en mouvement.`,
                `La libération soudaine d'un fluide sous pression d'une ligne hydraulique.`
            ],
            prevention: {
                description: `Dans le domaine mécanique, la sécurité repose sur l'organisation et le respect des procédures. La prévention vise à créer un environnement de travail sûr et efficace, en mettant l'accent sur les bonnes pratiques et la rigueur professionnelle.`,
                examples: [
                    `Verrouiller et étiqueter la machine avant de débloquer un incident.`,
                    `Installer des protections sur les engrenages, courroies et rouleaux.`,
                    `Relâcher la pression hydraulique ou pneumatique avant l'entretien.`
                ]
            }
        },
        chemical: {
            title: `Exposition chimique`,
            subtitle: `Brûlures, dommages respiratoires et maladies dues aux produits chimiques industriels.`,
            description: `Les techniciens manipulent des acides corrosifs, solvants toxiques et dégraissants industriels. Le contact direct avec la peau peut provoquer de graves brûlures chimiques et des dommages aux tissus, tandis que l'inhalation de vapeurs dans des espaces confinés peut entraîner une insuffisance respiratoire, des lésions organiques ou des maladies à long terme.`,
            examples: [
                `Brûlures cutanées dues au contact accidentel avec des produits nettoyants caustiques.`,
                `Inhalation de vapeurs toxiques dans un espace mal ventilé.`,
                `Projection de fluides hydrauliques ou de solvants dans les yeux.`
            ],
            prevention: {
                description: `La prévention chimique nécessite une vigilance constante et le respect strict des pratiques de sécurité. Elle met l'accent sur la formation, le maintien d'un environnement sûr et l'application systématique des mesures de protection.`,
                examples: [
                    `Porter des gants, lunettes et masques respiratoires lors de la manipulation de produits chimiques.`,
                    `Travailler dans des zones bien ventilées ou utiliser des systèmes d'extraction.`,
                    `Stocker les produits inflammables et corrosifs dans des contenants étiquetés et appropriés.`
                ]
            }
        },
        noise: {
            title: `Bruit dangereux`,
            subtitle: `Perte auditive permanente due à des environnements industriels à haut niveau sonore.`,
            description: `Les machines industrielles telles que turbines et compresseurs génèrent constamment un bruit élevé. Cette exposition continue entraîne une perte auditive progressive et irréversible. Le bruit peut également masquer les appels à l'aide ou le son des équipements approchants.`,
            examples: [
                `Travailler longtemps près d'un générateur industriel en fonctionnement.`,
                `Utilisation continue de clés à chocs ou de meuleuses pneumatiques.`,
                `Être dans une zone bruyante, comme une salle de machines ou de compresseurs.`
            ],
            prevention: {
                description: `La protection auditive est cruciale dans les environnements bruyants. La prévention se concentre sur la culture de la sécurité, l'application des mesures protectrices et l'organisation des espaces de travail pour garantir l'efficacité et la protection de l'ouïe.`,
                examples: [
                    `Porter des bouchons d'oreilles ou des casques dans les zones bruyantes.`,
                    `Limiter le temps passé près des machines à haut niveau sonore.`,
                    `Installer des enceintes insonorisantes autour des compresseurs ou turbines.`
                ]
            }
        },
        fireExplosion: {
            title: `Incendie et explosion`,
            subtitle: `Allumage de matières inflammables par travaux chauds ou défauts électriques.`,
            description: `Les activités de maintenance comme le soudage et le meulage produisent des étincelles et une chaleur intense, sources potentielles d'incendie. La présence de carburants, solvants ou de poussières combustibles peut provoquer des incendies rapides ou des explosions destructrices.`,
            examples: [
                `Étincelles de soudage enflammant des chiffons huilés ou solvants à proximité.`,
                `Décharge statique enflammant des vapeurs inflammables lors du ravitaillement.`,
                `Explosion due à l'agitation et l'inflammation de poussières combustibles.`
            ],
            prevention: {
                description: `La prévention des incendies et explosions est essentielle dans les environnements industriels. Elle repose sur des pratiques de travail sûres, la structuration de l'espace de travail et la protection continue des employés.`,
                examples: [
                    `Éliminer ou isoler les matières inflammables avant soudure ou découpe.`,
                    `Utiliser la mise à la terre anti-statique lors du transfert de carburants ou solvants.`,
                    `Nettoyer les accumulations de poussière et maintenir les extincteurs à proximité.`
                ]
            }
        },
        falls: {
            title: `Chutes, glissades et trébuchements`,
            subtitle: `Blessures dues à des chutes en hauteur ou au même niveau.`,
            description: `La prévention des chutes repose sur des pratiques sécurisées, l'organisation des zones de travail et la sensibilisation des employés. L'objectif est d'assurer un travail efficace et sûr dans toutes les situations.`,
            examples: [
                `Chuter d'une échelle en tentant de réparer une machine.`,
                `Glisser sur une tache d'huile au sol.`,
                `Trébucher sur un tuyau ou câble traversant un passage.`
            ],
            prevention: {
                description: `Assurer la sécurité contre les chutes implique l'utilisation de systèmes de protection, le maintien des zones dégagées et la vigilance constante. Il s'agit de prévenir les accidents tout en maintenant la productivité.`,
                examples: [
                    `Porter des chaussures de sécurité antidérapantes sur sols humides ou huileux.`,
                    `Utiliser des harnais et garde-corps lors du travail en hauteur.`,
                    `Garder les passages dégagés de tuyaux, câbles et encombrement.`
                ]
            }
        },
    },
    instructions: {
        description: "Dans le domaine de la maintenance industrielle, il existe plusieurs directives reconnues mondialement visant à assurer la protection des travailleurs et à maintenir l’efficacité et la sécurité des équipements. Ces normes reposent sur des procédures organisées, le respect strict des protocoles officiels et la surveillance continue des risques potentiels. Elles contribuent également à instaurer une culture de sécurité parmi tous les employés, en favorisant la discipline et la vigilance lors de l’exécution des tâches quotidiennes. Le respect de ces normes réduit la probabilité d’accidents et de blessures, garantit un environnement de travail sûr et stable, et améliore la productivité ainsi que l’efficacité opérationnelle.",
        list: [
            {
                title: "Équipements de Protection Individuelle (EPI)",
                eplaination: "Porter des équipements de protection tels que le casque, les gants, les lunettes de sécurité et les chaussures de sécurité."
            },
            {
                title: "Système de Permis de Travail",
                eplaination: "Certaines tâches, comme le soudage ou le travail en espaces confinés, ne sont autorisées qu’avec un permis officiel précisant les risques et les mesures préventives."
            },
            {
                title: "Protecteurs de Machines",
                eplaination: "Installer des barrières de protection sur les parties mobiles des machines afin d’éviter tout contact direct avec les travailleurs."
            },
            {
                title: "Accès aux Espaces Confinés",
                eplaination: "Suivre des procédures spécifiques avant d’entrer, telles qu’une ventilation adéquate, la surveillance des gaz et la présence d’un surveillant externe."
            },
            {
                title: "Propreté et Organisation",
                eplaination: "Maintenir un lieu de travail propre et ordonné, sans obstacles ni déversements, afin de réduire les risques de glissades ou de trébuchements."
            },
            {
                title: "Pratiques de Sécurité Électrique",
                eplaination: "Comme couper la source d’alimentation avant la maintenance, utiliser des outils isolés et effectuer des inspections régulières."
            },
            {
                title: "Système de Consignation et d’Étiquetage (LOTO)",
                eplaination: "Une procédure garantissant l’isolement des sources d’énergie lors de la maintenance, avec l’utilisation de cadenas ou d’étiquettes empêchant toute remise en marche avant la fin des travaux."
            },
        ]
    },
    Conclusion: {
        paragraphs: [
            "La sécurité dans l'environnement de la maintenance industrielle est une responsabilité collective, et elle ne peut être atteinte qu'à travers un engagement continu envers les normes et procédures approuvées. L'application quotidienne de ces règles favorise un environnement de travail sûr, protège la santé des travailleurs et assure l'efficacité et la continuité de la production.",
            "La formation continue des travailleurs dans le domaine de la maintenance industrielle joue un rôle essentiel dans la réduction des erreurs et des accidents. Plus l'ouvrier maîtrise les techniques modernes et les procédures de sécurité, plus il sera capable de gérer efficacement les situations d'urgence. L'investissement dans le développement des compétences individuelles se reflète non seulement sur leur sécurité personnelle, mais contribue également à améliorer la qualité des performances et la productivité."
        ]
    },
    footer: {
        createdBy: "Créé par",
        Copyright: "Tous droits réservés 2025",
    },
    sideMatters: {
        example: `Exemple`,
        examples: `Exemples`,
        risk: "risque",
        prevention: "prévention",
        myName: "Fares Houidi",
    }
} as LanguageTypes

export const arabic = {
    language: `arabic`,
    label: `العربية`,
    nav: {
        myName: `فارس هويدي`,
        hero: `الرئيسية`,
        introduction: `المقدمة`,
        RisksAndPrevention: `المخاطر و الوقاية`,
        Prevention: `الوقاية`,
        Instruction : `التعليمات`,
        Conclusion: `الخاتمة`,
    },
    hero: {
        recognise: `تعرف على`,
        ruleAndSafety: `قواعد السلامة`,
        inTheFieldOf: `في مجال`,
        industrialMaintenance: `الصيانة الصناعية`,
        start: `بدء`
    },
    introduction: {
        partOne: `السلامة المهنية هي مجموعة من القواعد والإجراءات التي تهدف إلى حماية العاملين من المخاطر أثناء عملهم. وفي مجال الصيانة الصناعية، تكتسب هذه الإجراءات أهمية خاصة بسبب التعامل المباشر مع الكهرباء، الآلات الميكانيكية، المواد الكيميائية، والضجيج.`,
        partTwo: `الالتزام بالسلامة لا يحمي حياة العاملين فقط، بل يساهم أيضًا في استمرارية الإنتاج، تقليل الأعطال، والحد من الخسائر. وتشير الدراسات إلى أن أكثر من 70% من الحوادث الصناعية يمكن تجنبها بمجرد تطبيق احتياطات بسيطة مثل ارتداء معدات الوقاية.`,
        partThree: `يهدف هذا المشروع إلى تسليط الضوء على أهم المخاطر في مجال الصيانة الصناعية، وطرق الوقاية منها، لتعزيز ثقافة العمل الآمن بين التقنيين والمتدربين.`
    },
    risks: { 
        label: `المخاطر`,
        electrical: {
            title: `المخاطر الكهربائية`,
            subtitle: `خطر الصعق الكهربائي، الانفجارات العنيفة، والوفاة.`,
            description: `ملامسة الأجزاء المكهربة قد تسبب صدمة كهربائية تؤدي إلى تشنجات عضلية، توقف القلب، وحروق خطيرة. المعدات عالية الجهد تشكل تهديدًا أكبر بحدوث قوس كهربائي — انفجار عنيف للطاقة يولد حرارة وضغطًا هائلين قادرين على التسبب بحروق قاتلة وانصهار المعادن.`,
            examples: [
                `إجراء صيانة على لوحة كهربائية لا تزال تحت الجهد.`,
                `ملامسة غير مقصودة لقضبان أو أطراف موصلة بالطاقة.`,
                `سلك تمديد تالف يخلق دائرة كهربائية حية على الأرض.`
            ],
            prevention: {
                description: `الوقاية في المجال الكهربائي تُعد عاملًا أساسيًا لضمان بيئة عمل آمنة، فهي تقوم على الالتزام بالممارسات المهنية المنظمة، تعزيز ثقافة السلامة، وضمان سير العمليات بكفاءة مع الحفاظ على سلامة العاملين.`,
                examples: [
                    `فصل الدوائر الكهربائية وتطبيق إجراءات القفل/الوسم قبل العمل.`,
                    `استخدام قفازات وأدوات عازلة مخصصة للأعمال الكهربائية.`,
                    `فحص الأسلاك ولوحات التوزيع بحثًا عن التلف قبل الاستخدام.`
                ]
            }
        },
        mechanical: {
            title: `المخاطر الميكانيكية والطاقة المخزنة`,
            subtitle: `السحق، التشابك، والصدمات من الأجزاء المتحركة أو الطاقة المخزنة.`,
            description: `يتعرض العمال لإصابات سحق أو قطع من أجزاء مثل التروس، الأحزمة، والمكابس. يمكن للآلة أن تعمل بشكل مفاجئ نتيجة ضغط هيدروليكي أو هوائي متبقي، أو طاقة مخزنة في النوابض، مما يسبب صدمات مباشرة، بترًا، أو وفاة.`,
            examples: [
                `إزالة انسداد بينما لا تزال أجزاء الماكينة تحت الطاقة.`,
                `انجذاب أحد الأطراف داخل بكرات أو أحزمة متحركة.`,
                `انفجار مفاجئ لسائل مضغوط من خط هيدروليكي.`
            ],
            prevention: {
                description: `في المجال الميكانيكي والطاقة المخزنة، تعتبر الوقاية جزءًا لا يتجزأ من العمل اليومي، حيث تركز على تنظيم بيئة العمل بشكل آمن، تعزيز الالتزام بالإجراءات المهنية، ودعم القدرة على أداء المهام بكفاءة وطمأنينة.`,
                examples: [
                    `تطبيق إجراءات القفل/الوسم على الماكينات قبل إزالة الأعطال.`,
                    `تركيب حواجز واقية على التروس، الأحزمة، والبكرات.`,
                    `تفريغ الضغط الهيدروليكي أو الهوائي قبل الصيانة.`
                ]
            }
        },
        chemical: {
            title: `التعرض الكيميائي`,
            subtitle: `الحروق، أضرار الجهاز التنفسي، والأمراض الناتجة عن المواد الكيميائية.`,
            description: `يتعامل الفنيون مع أحماض آكلة، مذيبات سامة، ومنظفات صناعية. التلامس المباشر مع الجلد قد يسبب حروقًا كيميائية شديدة وأضرارًا في الأنسجة، بينما قد يؤدي استنشاق الأبخرة في الأماكن المغلقة إلى فشل تنفسي، أضرار بالأعضاء، أو أمراض مزمنة.`,
            examples: [
                `حروق جلدية نتيجة ملامسة عرضية لمواد تنظيف كاوية.`,
                `استنشاق أبخرة سامة أثناء العمل في مكان سيء التهوية.`,
                `تناثر سوائل هيدروليكية أو مذيبات في العينين.`
            ],
            prevention: {
                description: `تُشكل الوقاية عند التعامل مع المواد الكيميائية عنصرًا مهمًا للحفاظ على الصحة العامة وسلامة العاملين، مع التركيز على التوعية المستمرة بالسلامة وتعزيز الالتزام بالإجراءات الوقائية في جميع الأوقات.`,
                examples: [
                    `ارتداء القفازات، النظارات الواقية، وأقنعة التنفس عند التعامل مع المواد الكيميائية.`,
                    `العمل في مناطق جيدة التهوية أو استخدام أنظمة شفط.`,
                    `تخزين المواد القابلة للاشتعال والتآكل في حاويات موسومة ومخصصة.`
                ]
            }
        },
        noise: {
            title: `الضوضاء الخطرة`,
            subtitle: `فقدان السمع الدائم بسبب الضوضاء العالية في البيئات الصناعية.`,
            description: `تولد الآلات الصناعية مثل التوربينات والضواغط ضوضاء عالية باستمرار. هذا التعرض المستمر يؤدي إلى فقدان سمع تدريجي وغير قابل للعكس. كما أن الضوضاء العالية قد تخفي نداءات الاستغاثة أو أصوات اقتراب المعدات.`,
            examples: [
                `العمل لفترات طويلة قرب مولد صناعي يعمل.`,
                `الاستخدام المستمر للمفاتيح الصدمية أو أدوات الطحن الهوائية.`,
                `التواجد داخل غرفة عالية الضوضاء مثل غرف التوربينات أو الضواغط.`
            ],
            prevention: {
                description: `الحفاظ على سلامة السمع في البيئات عالية الضوضاء يتطلب تطبيق ممارسات وقائية مدروسة، بحيث يتم تعزيز بيئة عمل منتجة وآمنة، وتشجيع الالتزام بمعايير السلامة المهنية بشكل مستمر.`,
                examples: [
                    `ارتداء سدادات أذن أو سماعات واقية في المناطق المزدحمة بالضوضاء.`,
                    `تقليل الوقت الذي يقضيه العامل قرب الآلات عالية الصوت.`,
                    `تركيب أغلفة عازلة للصوت حول الضواغط أو التوربينات.`
                ]
            }
        },
        fireExplosion: {
            title: `الحريق والانفجار`,
            subtitle: `اشتعال المواد القابلة للاشتعال بسبب أعمال ساخنة أو أعطال كهربائية.`,
            description: `أنشطة الصيانة مثل اللحام والطحن تنتج شررًا وحرارة عالية تشكل مصادر اشتعال قوية. وجود وقود، مذيبات، أو تراكم غبار قابل للاحتراق (خشب، معدن) قد يؤدي إلى حرائق سريعة الانتشار أو انفجارات مدمرة.`,
            examples: [
                `شرر اللحام يشعل خِرَقًا زيتية أو مذيبات قريبة.`,
                `تفريغ شحنة ساكنة يشعل أبخرة قابلة للاشتعال أثناء التزود بالوقود.`,
                `انفجار نتيجة إثارة واشتعال غبار قابل للاحتراق.`
            ],
            prevention: {
                description: `الوقاية من الحرائق والانفجارات تشكل حجر الزاوية في إدارة السلامة الصناعية، فهي تعزز الالتزام بالممارسات الوقائية، تنظيم بيئة العمل، وضمان استمرارية العمليات بشكل آمن وفعال.`,
                examples: [
                    `إزالة أو عزل المواد القابلة للاشتعال قبل أعمال اللحام أو القطع.`,
                    `استخدام التأريض المضاد للكهرباء الساكنة عند نقل الوقود أو المذيبات.`,
                    `تنظيف الغبار المتراكم والحفاظ على طفايات الحريق قريبة.`
                ]
            }
        },
        falls: {
            title: `الانزلاقات، التعثر، والسقوط`,
            subtitle: `إصابات من السقوط من ارتفاع أو على نفس المستوى.`,
            description: `السقوط يعد سببًا رئيسيًا للوفاة والإصابات الخطيرة. قد يكون السقوط من ارتفاع أثناء العمل على منصات مرتفعة، سقالات، أو آلات كبيرة. كما تحدث الانزلاقات على نفس المستوى نتيجة الأسطح الزلقة من انسكابات الزيت أو التعثر بالمعدات في الممرات.`,
            examples: [
                `السقوط من سلم أثناء محاولة صيانة آلة.`,
                `الانزلاق على بقعة زيت متسربة على الأرض.`,
                `التعثر بخرطوم هواء أو سلك كهربائي ممتد عبر الممر.`
            ],
            prevention: {
                description: `لتجنب الانزلاقات والتعثر والسقوط، يُعتبر الالتزام بممارسات الوقاية أساسًا هامًا، حيث يركز على تنظيم أماكن العمل، تدريب العاملين، وتعزيز ثقافة السلامة لضمان تنفيذ المهام بأمان وكفاءة.`,
                examples: [
                    `ارتداء أحذية أمان مانعة للانزلاق على الأسطح المبللة أو الزيتية.`,
                    `استخدام أحزمة أمان وحواجز عند العمل في الأماكن المرتفعة.`,
                    `إبقاء الممرات خالية من الخراطيم، الأسلاك، والفوضى.`
                ]
            }
        },
    },
    instructions: {
        description: "في مجال الصيانة الصناعية، نجد عدة تعليمات متبعة عالميا لضمان حماية العاملين والمحافظة على كفاءة وسلامة المعدات. تعتمد هذه المعايير على وضع إجراءات منظمة، الالتزام الصارم بالبروتوكولات الرسمية، ومراقبة المخاطر المحتملة بشكل مستمر. كما تسهم هذه المعايير في تعزيز ثقافة السلامة بين جميع العاملين، وتشجيع الانضباط والوعي عند أداء المهام اليومية. الالتزام بهذه المعايير يساهم في تقليل احتمالية الحوادث والإصابات، ويضمن بيئة عمل آمنة ومستقرة، كما يعزز من الإنتاجية والكفاءة التشغيلية بشكل عام.",
        list: [
            {
                title: "معدات الوقاية الشخصية (PPE)",
                eplaination: "ارتداء معدات الحماية مثل الخوذة، القفازات، نظارات الأمان، وأحذية السلامة."
            },
            {
                title: "نظام تصاريح العمل (Work Permit System)",
                eplaination: "لا يُسمح ببدء بعض الأعمال مثل اللحام أو العمل في الأماكن المغلقة إلا بعد الحصول على تصريح رسمي يحدد المخاطر والإجراءات الوقائية."
            },
            {
                title: "الحواجز الواقية للآلات (Machine Guarding)",
                eplaination: "تركيب حواجز على الأجزاء المتحركة للآلات لحماية العاملين من التلامس المباشر."
            },
            {
                title: "الدخول إلى الأماكن المغلقة (Confined Space Entry)",
                eplaination: "اتباع إجراءات خاصة قبل الدخول مثل التهوية الجيدة، مراقبة الغازات، ووجود مراقب خارجي."
            },
            {
                title: "النظافة والترتيب (Housekeeping)",
                eplaination: "الحفاظ على بيئة عمل نظيفة ومرتبة وخالية من العوائق والانسكابات لتقليل مخاطر الانزلاق أو التعثر."
            },
            {
                title: "ممارسات السلامة الكهربائية (Electrical Safety Practices)",
                eplaination: "مثل فصل مصدر الكهرباء قبل الصيانة، استخدام أدوات عازلة، وإجراء الفحوصات الدورية."
            },
            {
                title: "نظام العزل ووضع العلامات (Lockout/Tagout - LOTO)",
                eplaination: "إجراء يضمن فصل مصادر الطاقة عن الآلات أثناء الصيانة ووضع أقفال أو علامات تمنع إعادة تشغيلها حتى انتهاء العمل."
            },
        ]
    },
    Conclusion: {
        paragraphs: [
            "السلامة في بيئة الصيانة الصناعية هي مسؤولية جماعية، ولا تتحقق إلا من خلال الالتزام المستمر بالمعايير والإجراءات المعتمدة. إن تطبيق هذه القواعد بشكل يومي يعزز بيئة عمل آمنة، يحافظ على صحة العاملين، ويضمن كفاءة واستمرارية الإنتاج.",
            "التدريب المستمر للعاملين في مجال الصيانة الصناعية يلعب دوراً محورياً في تقليل الأخطاء والحوادث. فكلما كان العامل على دراية بالتقنيات الحديثة وإجراءات السلامة، زادت قدرته على مواجهة المواقف الطارئة بكفاءة. إن الاستثمار في تطوير مهارات الأفراد لا ينعكس فقط على سلامتهم الشخصية، بل يسهم أيضاً في رفع جودة الأداء والإنتاجية."
        ]
    },
    footer: {
        createdBy: "تم الإنشاء بواسطة",
        Copyright: "جميع الحقوق محفوظة 2025",
    },
    sideMatters: {
        example: `مثال`,
        examples: `أمثلة`,
        risk: "الخطر",
        prevention: "الوقاية",
        myName: "فارس هويدي",
    }
} as LanguageTypes

export const chinese = {
    language: `chinese`,
    label: `中文`,
    nav: {
        myName: `法雷斯·霍伊迪`,
        hero: `首页`,
        introduction: `介绍`,
        RisksAndPrevention: `风险与防护`,
        Prevention: `防护`,
        Instruction: `操作指南`,
        Conclusion: `结论`
    },
    hero: {
        recognise: `识别`,
        ruleAndSafety: `规则与安全`,
        inTheFieldOf: `在...领域`,
        industrialMaintenance: `工业维修`,
        start: `开始`
    },
    introduction: {
        partOne: `工作场所安全是一套旨在保护员工在工作中免受危险伤害的规则和程序。在工业维修领域，这些程序尤为重要，因为涉及直接操作电力、机械设备、化学品和噪声。`,
        partTwo: `遵守安全规定不仅能保护员工生命，还能保证生产连续性、减少故障并限制损失。研究表明，超过70%的工业事故仅通过应用基本防护措施（如佩戴防护装备）即可避免。`,
        partThree: `本项目旨在突出工业维修领域的主要风险及其预防方法，促进技术人员和学员之间的安全文化。`
    },
    risks: {
        label: `风险`,
        electrical: {
            title: `电气危险`,
            subtitle: `触电、电弧及电击风险。`,
            description: `接触带电部件可能导致电击，引起肌肉痉挛、心脏骤停和严重烧伤。高压设备存在更大电弧危险——能量剧烈爆炸产生高温和压力波，可能导致致命烧伤和金属蒸发。`,
            examples: [
                `在带电电气面板上进行维护。`,
                `意外接触带电母线或端子。`,
                `受损的延长线在地面上形成带电回路。`
            ],
            prevention: {
                description: `电气工作中的防护措施对于确保安全工作环境至关重要。重点是促进安全文化，保持正确的工作操作，并确保在保护所有相关人员的同时顺利完成工作。`,
                examples: [
                    `在工作前断电并执行锁定/挂牌程序。`,
                    `使用绝缘手套和适用于电气工作的工具。`,
                    `使用前检查延长线和配电盘是否损坏。`
                ]
            }
        },
        mechanical: {
            title: `机械及储能危险`,
            subtitle: `来自移动部件或储能装置的压伤、缠绕及冲击。`,
            description: `工人可能遭受齿轮、皮带和压力机等部件造成的压伤、剪切或切割伤害。机器可能因残留液压或气压或弹簧储能而意外启动，造成即时创伤、截肢或死亡。`,
            examples: [
                `在机器部件仍带电时清除堵塞。`,
                `四肢被卷入运转的滚筒或皮带系统。`,
                `液压管道中高压液体突然释放。`
            ],
            prevention: {
                description: `在机械和储能作业中，安全是日常操作的关键组成部分。预防措施强调有序的工作操作、遵守专业程序，并营造安全高效的工作环境。`,
                examples: [
                    `清除堵塞前锁定和挂牌机器。`,
                    `在齿轮、皮带和滚筒上安装防护罩。`,
                    `维护前释放液压或气压。`
                ]
            }
        },
        chemical: {
            title: `化学品暴露`,
            subtitle: `工业化学品引起的烧伤、呼吸损伤和疾病。`,
            description: `技术人员处理腐蚀性酸、毒性溶剂和工业脱脂剂。直接接触皮肤可能造成严重化学烧伤和组织损伤，而在封闭空间吸入蒸气可能导致呼吸衰竭、器官损伤或长期疾病。`,
            examples: [
                `皮肤因接触强碱清洁剂而烧伤。`,
                `在通风不良的空间吸入有毒烟雾。`,
                `液压油或溶剂溅入眼睛。`
            ],
            prevention: {
                description: `化学品安全需要持续关注并严格遵守预防措施。重点是保持安全环境，培训员工，并确保防护措施始终到位。`,
                examples: [
                    `处理化学品时佩戴手套、护目镜和呼吸器。`,
                    `在通风良好的区域工作或使用排气系统。`,
                    `将易燃和腐蚀性化学品存放在有标签的容器中。`
                ]
            }
        },
        noise: {
            title: `危险噪声`,
            subtitle: `高分贝工业环境导致的永久性听力损失。`,
            description: `工业环境中，涡轮机、压缩机等设备持续产生高分贝噪声。长期暴露会导致渐进性且不可逆的听力损失。高噪声还可能掩盖求救声或接近设备的声音。`,
            examples: [
                `长时间在运行的工业发电机附近工作。`,
                `持续使用冲击扳手或气动研磨机。`,
                `处于高噪声区域，如机器或压缩机房。`
            ],
            prevention: {
                description: `在噪声环境中，听力保护至关重要。预防措施强调培养安全意识、采取防护措施，并组织工作空间以维持效率并长期保护听力。`,
                examples: [
                    `在噪声区域佩戴耳塞或耳罩。`,
                    `限制在高分贝机器旁的工作时间。`,
                    `在压缩机或涡轮周围安装隔音罩。`
                ]
            }
        },
        fireExplosion: {
            title: `火灾与爆炸`,
            subtitle: `热作业或电气故障引发可燃物点燃。`,
            description: `焊接和打磨等维护活动产生火花和高温，是强烈的点火源。可燃燃料、溶剂或可燃灰尘（木材、金属）堆积可能导致快速蔓延的火灾或毁灭性爆炸。`,
            examples: [
                `焊接火花点燃附近油布或溶剂。`,
                `静电放电在加油期间引燃可燃蒸气。`,
                `可燃灰尘被扰动后引发爆炸。`
            ],
            prevention: {
                description: `火灾与爆炸预防是工业安全的基石。强调安全操作、有序环境，并在保护工人免受危险的同时保证运营连续性。`,
                examples: [
                    `焊接或切割前清除或隔离可燃物。`,
                    `燃料或溶剂转移时使用防静电接地。`,
                    `清理灰尘堆积，保持灭火器在附近。`
                ]
            }
        },
        falls: {
            title: `滑倒、绊倒与跌落`,
            subtitle: `高处或同一水平面跌落造成的伤害。`,
            description: `跌落是导致死亡和严重伤害的主要原因。这可能是高处工作时从平台、脚手架或大型机械跌落。由于油渍或通道中的设备，平面跌落也很常见。`,
            examples: [
                `爬梯子维修机器时跌落。`,
                `踩到地面漏油而滑倒。`,
                `绊倒在通道上的气管或电线。`
            ],
            prevention: {
                description: `防止滑倒、绊倒和跌落依赖于正确的安全操作、有序工作区及员工的安全意识。目标是确保所有任务高效且安全地完成。`,
                examples: [
                    `在油腻或湿滑表面穿防滑安全鞋。`,
                    `高处作业时使用安全带和护栏。`,
                    `保持通道清洁，无软管、电线或杂物。`
                ]
            }
        },
    },
    instructions: {
        description: "在工业维修领域，有若干全球公认的指导方针，旨在确保工人保护和设备效率与安全。这些标准依赖于结构化程序、严格遵守官方规程以及对潜在风险的持续监控。它们还帮助在所有工人中培养安全文化，鼓励在日常任务中保持纪律和意识。遵守这些标准有助于减少事故和伤害的可能性，确保安全稳定的工作环境，并提升整体生产力和运营效率。",
        list: [
            {
                title: "个人防护装备 (PPE)",
                eplaination: "佩戴防护装备，如头盔、手套、安全眼镜和安全鞋。"
            },
            {
                title: "工作许可制度",
                eplaination: "某些任务，如焊接或在封闭空间工作，未经官方许可不得进行，许可会说明风险及防护措施。"
            },
            {
                title: "机器防护",
                eplaination: "在机器的运动部件上安装护罩，以保护工人免受直接接触伤害。"
            },
            {
                title: "封闭空间作业",
                eplaination: "进入前遵循特定程序，如适当通风、气体监测，并有外部观察员。"
            },
            {
                title: "环境整洁",
                eplaination: "保持工作区整洁有序，清除障碍物和溢出物，以降低滑倒或绊倒风险。"
            },
            {
                title: "电气安全操作",
                eplaination: "如维修前断电，使用绝缘工具，并定期检查。"
            },
            {
                title: "锁定/挂牌 (LOTO)",
                eplaination: "确保维护期间隔离能量源，施加锁或挂牌，防止工作完成前重新启动。"
            },
        ]
    },
    Conclusion: {
        paragraphs: [
            "工业维修环境中的安全是一项集体责任，只有通过持续遵守已批准的标准和程序才能实现。每天应用这些规则可增强安全的工作环境，保护员工健康，并确保生产效率和连续性。",
            "持续培训工业维修领域的员工在减少错误和事故方面起着关键作用。员工越熟悉现代技术和安全程序，他们应对紧急情况的能力就越强。投资于个人技能发展不仅有助于个人安全，也能提高工作绩效和生产力。"
        ]
    },
    footer: {
        createdBy: "創建者",
        Copyright: "2025 版权所有",
    },
    sideMatters: {
        example: `示例`,
        examples: `示例`,
        risk: "风险",
        prevention: "防护",
        myName: "法雷斯·霍伊迪",
    }
} as LanguageTypes


export const street = {
    language: `street`,
    label: `شارع`,
    nav: {
        myName: `فارس هويدي`,
        hero: `الرئيسية`,
        introduction: `المقدمة`,
        RisksAndPrevention: `الخطورات و الاحطياطات`,
        Prevention: `الوقاية`,
        Instruction : `التعليمات`,
        Conclusion: `الخاتمة`,
    },
    hero: {
        recognise: `ايجا نحكيلك على`,
        ruleAndSafety: `قواعد السلامة`,
        inTheFieldOf: `في دومان`,
        industrialMaintenance: `الصيانة الصناعية`,
        start: `اتوكل على ربي`
    },
    introduction: {
        partOne: `السلامة المهنية هي عبارة على برشا قوانين و إجراءات اللى تحاول تحمي الخدامة من الخطورات اللي تنجم تصيرلهم في الخدمة . و في دومان المانتونونص الحكاية هاذي يعطوها أهمية كبيرة خاطر الخدامة باش يتعاملو بشكل مباشر مع الكورون و الماكينات و المواد الكيميائية و الحس العالي.`,
        partTwo: `الالتزام بالسلامة مايحميش حياة الخدامة اكاهو , لا و يزيد في الإنتاجية زادة , و يقلل المشاكل و الخساير . حتى انو فما دراسات تقول اللي اكثر من 70% مالاكسيدونات في المانتونونص تنجم تتجنبها جيست انك اطبق احطياطات بسيطة كيما انك تلبس معدات الوقاية`,
        partThree: `المشروع هذا نحب نوضح فيه اهم المخاطر في المانتونونص و كيفاش تسايس روحك في الخدمة , هاوكا باش ننشرو شويا ثقافة عمل بين المتدربين`,
    },
    risks: { 
        label: `المخاطر`,
        electrical: {
            title: `الخطورات المتعلقة بالكورون`,
            subtitle: `يظربك الكورون , يصيرلك انفجار ولا حتى حروق درجة رابعة`,
                description: `لمسان حاجة يجري فاها الكورون ينجم يسبب صدمة كهربائية تعملك تشنجات عضلية ولا  مشاكل في القلب ولا حروق خطيرة ولا حتى ترزيك في عمرك ديراكت . على قد ما تكون الماكينة تخدم بجهد اكبر على قد ما تزيد احتمالية انو يصير قوس كهربائي و لا انفجار يعمل سخانة و ضغط تنجم تتسبب في حروق خطيرة و انصهار المعادن`,
                examples: [
                    `تكون تخدم على لوحة كهربائية مزالت موصولة بالبريز.`,
                    `تمس حاجة حديد يمشي فاها الكورون عن طريق الخطأ.`,
                    `تعفص على خيط رولونج مهلوك ملوح في القاعة.`
                ],
            prevention: {
                description: `انك تحمي روحك في الأمور المتعلقة بالكورون هي من اهم ما تعمل باش توفر لروحك بيئة عمل مريقلة . الحكاية الكلها قايمة على شويا ممارسات منظمة تخلي جو الخدمة امن و الخدمة ماشية و الخدامة الكل لاباس`,
                examples: [
                    `تسل الفيشة مالبريز قبل ما تقصد ربي تبدا تصلح  ولا اطبق اجراء LOTO.`,
                    `تلبس قواندوات معمولة بالذمة للمور هاذيكا.`,
                    `تعمل نظرة سريعة عالخيوط قبل ما تخدم أي ماكينة.`
                ]
            }
        },
        mechanical: {
            title: `الخطورات المتعلقة بالميكانيك و الطاقة المخزنة`,
            subtitle: `انك تتهرس , تتشابك مع ماكينة , تاكل ضربات من أجزاء تتحرك ولا طاقة مخزنة`,
            description: `فما خدامة يتهرسو و يتقطعو في جرة قطايع كيما التروس ولا السبت ولا المكابس . تنجم الماكينة تغدرك و تخدم بشكل مفاجئ بسبب ضغط هيدروليكي ولا هوائي ولا طاقة مخزنة في الريسورات تنجم تسببلك صدمة ولا بتر ولا حتى تقتلك ديراكت.`,
            examples: [
                `دجي تنحي في حاجة واحلة في الماكينة و هي مازالت تخدم.`,
                `تتجبد قطعة من دبشك ولا شعرك و دجي في ماكينة ماتعرفش الرحمة.`,
                `كي يصير انفجار مفاجئ لسائل هيدروليكي مضغوط.`
            ],
            prevention: {
                description: `ريتها إجراءات السلامة ,  هاذيكا محسوب روتين يومي في الجانب الميكانيكي و الطاقة المخزنة على خاطرها تخليلك بيئة العمل يكون فاها امان و تخليك تخدم مرتاح و بانتاجية عالية.`,
                examples: [
                    `اطبق إجراءات LOTO على الماكينات قبل ما تبدا تصلح.`,
                    `تركب حواجز على التروس و السبت و البكرات.`,
                    `تفرغ الضغط الهيدروليكي ولا الهوائي قبل ما تبدا تصلح.`
                ]
            }
        },
        chemical: {
            title: `الخطورات المتعلقة بالكمياوي`,
            subtitle: `الحروق، أضرار الجهاز التنفسي، والأمراض الي دجي مالمواد الكيميائية.`,
            description: `الكمياوي راهو مخطر . و جماعة المانتونونص يتعاملو مع احماض سامة و تذوب .  كي تمسها بجلدك ديراكت تنجم تحرقك ولا تسببلك اضرار في الانسجة . كيما فما مواد كيميائية كي تستنشقها في بلايص مسكرة تنجم تتسببلك في فشل تنفسي ولا اضرار في بدنك ولا امراض مزمنة.`,
            examples: [
                `تتعرض لحروق في الجلد بسبب لمسان مواد تنظيف تكوي`,
                `تشم ابخرة سامة كي تكون تخدم في بلاصة ما فيهاش تهوية باهية.`,
                `تتنطر عليك سوائل هيدروليكية و دجي في عينيك`
            ],
            prevention: {
                description: `الوقاية وقت التعامل مع المواد الكيماوية حاجة مهمّة برشة باش نحافظو على الصحة العامة وسلامة الخدامين، و الوقاية هنا تركّز خاصة على التوعية المتواصلة بقواعد السلامة وتشجيع الناس باش يلتزمو بالإجراءات الوقائية ديما وفي كل وقت.`,
                examples: [
                    `تلبس قواندوات و لينات و ماسك مخصصين للتعامل مع المواد الكيميائية.`,
                    `خلي البلاصة اللي تخدم فاها مهوية قد ما تنجم سينون استعمل أنظمة شفط.`,
                    `حط المواد القابلة للاشتعال ولا للتأكل في حاويات مكتوب عليها شنوة فيها.`
                ]
            }
        },
        noise: {
            title: `الصوت العالي`,
            subtitle: `انك تفقد السمع بسبب الحس العالي في المصانع`,
            description: `الماكينات الصناعيّة كيف التوربينات والكمبريسورات تعمل صوت قوي . والتعرّض المستمرّ للصوت هذا ينجّم يسبّب فقدان السمع بشوية بشوية وما يرجعش. وزيد، الضوضاء القويّة تنجّم تغطي على نداءات الاستغاثة ولا أصوات الماكينات اللي تقرّب عليك.`,
            examples: [
                `تكون تخدم قريب برشا لمولد صناعي .`,
                `كي تكثر من استعمال ال"impact wrenches" ولا الـ"compressed air" . (الله غالب ماعنيش فكرة على اساميهم بالعربي)`,
                `كي تكون موجود في غرفة فاها حس عالي برشا كيما غرفة التوربينات ولا الكمبريسورات.`
            ],
            prevention: {
                description: `انك تحافظ على وذنيك في البلايص اللي الحس فاها عالي برشا لازموا تطبيق طرق وقاية مدروسة, باش تظمن خدمة مرتاحة و سيرتو امنة.`,
                examples: [
                    `تسد وذنيك بحاجة في البلايص الي يكون الحس فاها عالي برشا.`,
                    `تحاول تنقص مالوقت الي تكون فيه بحذا ماكينا صوتها عالي قد ما تنجم.`,
                    `تركب غلافات تعزل الصوت على التوربينات و الكومبريسورات.`
                ]
            }
        },
        fireExplosion: {
            title: `الحريق والانفجار`,
            subtitle: `كي تشعل المواد القابلة للاشتعال بسبب اعمال ساخنة ولا اعطال كهربائية.`,
            description: `الانشطة الصيانية كيما اللحام و الطحن تعمل برشا تشاش و سخانة كبيرة تكون مصدر اشتعال قوي . و كي يكون فما وقود ولا مواد كيميائية فيسع تشعل ولا حتى غبار قابل للاشتعال كيما الغبار متع اللوح ولا المعادن ينجم يعمل حرايق سريعة الانتشار ولا حتى انفجارات خطيرة.`,
            examples: [
                `كي التشاش يجي على شليقة متع زيت ولا على مواد كيميائية فيسع تشعل.`,
                `تفريغ شحنة ساكنة ينجم يشعل أبخرة قابلة للاشتعال وقت التزوّد بالوقود.`,
                ` انفجار بسبب غبار قابل للاشتعال في بلاصة تكون فاها السخانة عالية ولا يكون فاها تشاش.`
            ],
            prevention: {
                description: `في أمور حرايق و انفجارات لازمك تكون فايق بالباهي و عينيك تحط فاها الملح باش تكون بيئة العمل فاها امان و الخدمة ماشية امورها مريقلة.`,
                examples: [
                    `قبل ما تستعمل اي ادوات تسبب شرارة اتأكد اللي مفما حتى شيء قابل للاشتعال بحذاك.`,
                    `استعمل التأريض ضد الكهرباء الساكنة كي دجي تنقل في المازوط ولا اي حاجة تنجم تشعل.`,
                    `ديما نظف الغبار المتراكم و خلي طفايات الحريق ديما قريبة.`
                ]
            }
        },
        falls: {
            title: `الانزلاقات، التعثر، والسقوط`,
            subtitle: `اصابات هاكي يطيح الواحد من بلايص عالية ولا حتى من نفس المستوى`,
            description: `السقوط يعتبر من الأسباب الرئيسية للموت ولا للاصابات الخطيرة . ينجم الواحد يطيح من منصات عالية ولا من صقالات ولا ماكينات كبيرة . و كيما تنجم تصير زلقات من نفس المستوى كي تكون القاعة تزلق بسبب زيت مكبوب ولا كي يتعثر الواحد في الماتريال اللي في الكولوارات.`,
            examples: [
                `كيف اطيح من سلوم و انت تحاول تصلح في ماكينة.`,
                `كيف تزلق في بقعة متع زيت.`,
                `كيف تعثر في طيو متع هواء ولا خيط كورون في الكلوار.`
            ],
            prevention: {
                description: `باش نتفاداو الزّلاقات والتّعثر والطّيحات، لازمنا نلتزمو بإجراءات الوقاية، اللي تركّز على تنظيم بلايص الخدمة، وتكوين العمّال، ونشر ثقافة السلامة باش تتخدم الخدمة في أمان وبكفاءة..`,
                examples: [
                    `تلبس صباط خاص ميزلقش.`,
                    `استخدام أحزمة أمان وحواجز كي تكون تخدم في بلايص عالية.`,
                    `حاول متخلي شيء ملوح وين يجي.`
                ]
            }
        },
    },
    instructions: {
        description: "في دومان الصيانة الصناعية نلقو تعليمات متبعة عالميا باش تحمي الخدامة و الماكينات مع بعضهم . و الحكاية الكل عبارة على شوية إجراءات منظمة و التزامات ببروتوكولات رسمية و مراقبة المخاطر المحتملة بشكل مستمر . كيف تتطبّق هالمعايير، تولّي ثقافة السلامة جزء من الخدمة اليومية، ويولي العامل أكثر وعي وانضباط . و زيد الالتزام بيها ينقص من  الحوادث والإصابات و يجلقلك بيئة متع خدمة جوها احلى جو.",
    list: [
        {
            title: "معدات الوقاية الشخصية (PPE)",
            eplaination: "لا زمك تلبس معدات الحماية اللازمة كيما الكاسك و القواندولات و اللينات متع الأمان و صباط مخصص ."
        },
        {
            title: "نظام تصاريح العمل (Work Permit System)",
            eplaination: "ميلزمكش تبدا تخدم في أمور متعلقة اللحام ولا الخدم الي تكون في بلاصة مسكرة كان بعد ما تأخذ تصريح رسمي فيه المخاطر و الإجراءات الوقائية."
        },
        {
            title: "الحواجز الواقية للآلات (Machine Guarding)",
            eplaination: "تركيب حواجز على الأجزاء اللي تتحرك من الماكينات باش تحمي روحك من التلامس المباشر."
        },
        {
            title: "الدخول للبلايس المسكرة(Confined Space Entry)",
            eplaination: "قبل ما تدخل لبلاصة ضيقة و تبدا ترحي و بره لازمك تعمل شوية إجراءات بسيطة كيما انك تهوي البلاصة بالقدا و تتفقد الغازات و لازم يكون فما شكون لبرا يعس عليك."
        },
        {
            title: "النظافة والترتيب (Housekeeping)",
            eplaination: "ديما حاول تخلي البلاصة اللي تخدم فيها نظيفة (زعما هاذاكا علاش في كل صحة لازم انظفوا القاعة 🤔) و متخليش حتى حاجة ينجم يزلق فاها حد ولا يتعثر فاها."
        },
        {
            title: "ممارسات السلامة الكهربائية (Electrical Safety Practices)",
            eplaination: "لازمك قبل ما تمس أي حاجة فاها كورون تسل الفيشة مالبريز و تستعمل أدوات عازلة . و ماذابيك تعمل فحوصات دورية مرة قداش."
        },
        {
            title: "نظام العزل و حطات البلايك (Lockout/Tagout - LOTO)",
            eplaination: "يا سيدك بن سيدي هذا اجراء يقولك اللي الماكينة اللي باش تصلحها لازمك تنحي منها مصدر الطاقة و تقفلها و تحط علاها بلاكة تقول فاها اللي الماكينة هاذي راهي فازدة و قاعدين انصلحو فاها , منغير ما يجي واحد جبري يحاول يخدمها."
        },
    ]
    },
    Conclusion: {
        paragraphs: [
            "صحة الابدان في دومان المانتونونص هي مسؤوليتنا الكلنا هاذاكاعلاش لازمنا نلتزمو بمعايير السلامة . راهو تطبيق القواعد هاديكا بشكل يومي يخلينا ديما لاباس وقت الخدمة و الخدمة ديما ماشية على اكمل وجه.",
            "تدريب الخدامة على الاتزام بمعايير السلامة مهم برشا . خاطر كل ما كان الخدام واعي بالامور هاذي كل ما كان ينجم يواجه المواقف الايرجون بكفاءة . و راهو تطوير مهارات في الأمور هاذي مش راجع على سلامتهم اكاهو , لا و زيد يساهم في رفع جودة الأداء و الإنتاجية."
        ]
    },
    footer: {
        createdBy: "تم الإنشاء بواسطة",
        Copyright: "جميع الحقوق محفوظة 2025",
    },
    sideMatters: {
        example: `مثال`,
        examples: `أمثلة`,
        risk: "الخطر",
        prevention: "الوقاية",
        myName: "فارس هويدي",
    }
} as LanguageTypes

export const Languages = {
    english,
    arabic,
    french,
    chinese,
    street
}

export const LanguagesDispo = [
    english,
    arabic,
    french,
    chinese,
    street
]