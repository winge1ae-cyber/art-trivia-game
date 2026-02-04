// Track state
let answered = false;
let shuffledGallery = [];
let currentSlide = 0;
let score = 0;

// DOM elements
const learnBtn = document.getElementById("learnBtn");
const learnMoreDiv = document.getElementById("learnMore");
const factEl = document.getElementById("fact");
const linkEl = document.getElementById("link");
const artEl = document.getElementById("art");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");
const resetBtn = document.getElementById("resetBtn");

// Gallery array
const gallery = [
  {
    file: "1926.417 - The Bedroom.jpg",
    question: "Who painted this?",
    choices: ["Vincent van Gogh", "Claude Monet", "Pierre-Auguste Renoir", "James McNeill Whistler"],
    answer: "Vincent van Gogh",
    fact: "Vincent van Gogh so highly esteemed his bedroom painting that he made three distinct versions: the first, now in the collection of the Van Gogh Museum, Amsterdam; the second, belonging to the Art Institute of Chicago, painted a year later on the same scale and almost identical; and a third, smaller canvas in the collection of the Musée d’Orsay, Paris, which he made as a gift for his mother and sister. Van Gogh conceived the first Bedroom in October 1888, a month after he moved into his 'Yellow House' in Arles, France. This moment marked the first time the artist had a home of his own, and he had immediately and enthusiastically set about decorating, painting a suite of canvases to fill the walls. Completely exhausted from the effort, he spent two-and-a-half days in bed and was then inspired to create a painting of his bedroom. As he wrote to his brother Theo, “It amused me enormously doing this bare interior. With a simplicity à la Seurat. In ﬂat tints, but coarsely brushed in full impasto, the walls pale lilac, the ﬂoor in a broken and faded red, the chairs and the bed chrome yellow, the pillows and the sheet very pale lemon green, the bedspread blood-red, the dressing-table orange, the washbasin blue, the window green. I had wished to express utter repose with all these very different tones.” Although the picture symbolized relaxation and peace to the artist, to our eyes the canvas seems to teem with nervous energy, instability, and turmoil, an effect heightened by the sharply receding perspective.",
    link: "https://www.artic.edu/artworks/28560/the-bedroom"
  },
  {
    file: "1926.224 - A Sunday on La Grande Jatte — 1884.jpg",
    question: "Who painted this?",
    choices: ["Georges Seurat", "Claude Monet", "Vincent van Gogh", "Pierre-Auguste Renoir"],
    answer: "Georges Seurat",
    fact: "In his best-known and largest painting, Georges Seurat depicted people from different social classes strolling and relaxing in a park just west of Paris on La Grande Jatte, an island in the Seine River. Although he took his subject from modern life, Seurat sought to evoke the sense of timelessness associated with ancient art, especially Egyptian and Greek sculpture. He once wrote, 'I want to make modern people, in their essential traits, move about as they do on those friezes, and place them on canvases organized by harmonies of color.' Seurat painted A Sunday on La Grande Jatte—1884 using pointillism, a highly systematic and scientific technique based on the hypothesis that closely positioned points of pure color mix together in the viewer’s eye. He began work on the canvas in 1884 (and included this date in the title) with a layer of small, horizontal brushstrokes in complementary colors. He next added a series of dots that coalesce into solid and luminous forms when seen from a distance. Sometime before 1889 Seurat added a border of blue, orange, and red dots that provide a visual transition between the painting’s interior and the specially designed white frame, which has been re-created at the Art Institute.",
    link: "https://www.artic.edu/iiif/2/2d484387-2509-5e8e-2c43-22f9981972eb/full/!3000,3000/0/default.jpg"
  },
  {
    file: "1933.1157 - Water Lilies.jpg",
    question: "Who painted this?",
    choices: ["Claude Monet", "Edgar Degas", "James McNeill Whistler", "Pierre-Auguste Renoir"],
    answer: "Claude Monet",
    fact: "“One instant, one aspect of nature contains it all,” said Claude Monet, referring to his late masterpieces, the water landscapes that he produced at his home in Giverny between 1897 and his death in 1926. These works replaced the varied contemporary subjects he had painted from the 1870s through the 1890s with a single, timeless motif—water lilies. The focal point of these paintings was the artist’s beloved ﬂower garden, which featured a water garden and a smaller pond spanned by a Japanese footbridge. In his first water-lily series (1897–99), Monet painted the pond environment, with its plants, bridge, and trees neatly divided by a fixed horizon. Over time, the artist became less and less concerned with conventional pictorial space. By the time he painted Water Lilies, which comes from his third group of these works, he had dispensed with the horizon line altogether. In this spatially ambiguous canvas, the artist looked down, focusing solely on the surface of the pond, with its cluster of vegetation ﬂoating amid the reﬂection of sky and trees. Monet thus created the image of a horizontal surface on a vertical one.",
    link: "https://www.artic.edu/artworks/14644/water-lilies"
  },
    {
      file: "1933.455 - Two Sisters (On the Terrace).jpg",
      question: "Who painted this?",
      choices: ["Pierre-Auguste Renoir", "Claude Monet", "Vincent van Gogh", "Edgar Degas"],
      answer: "Pierre-Auguste Renoir",
      fact: "“He loves everything that is joyous, brilliant, and consoling in life,” an anonymous interviewer once wrote about Pierre-Auguste Renoir. This may explain why Two Sisters (On the Terrace) is one of the most popular paintings in the Art Institute. Here Renoir depicted the radiance of lovely young women on a warm and beautiful day. The two sisters, seated on a terrace with the distant Seine visible, are rendered with luminous colors, softly diffused sunlight, and delicate textures. Renoir focused on capturing not only their individual expressions but also the warmth of the atmosphere, the play of sunlight on fabrics, and the gentle shadows cast by the garden elements around them. The terrace setting, the flowing lines of the dresses, and the naturalistic postures of the sisters contribute to a sense of immediacy, yet the composition remains carefully harmonized to create a soothing and inviting scene.",
      link: "https://www.artic.edu/artworks/79708/two-sisters-on-the-terrace"
    },
    {
      file: "1981.12 - Ballet at the Paris Opéra.jpg",
      question: "Who painted this?",
      choices: ["Edgar Degas", "Claude Monet", "Pierre-Auguste Renoir", "James McNeill Whistler"],
      answer: "Edgar Degas",
      fact: "This work, executed on one of the widest monotype plates ever used by the artist, bears Degas’s characteristically cropped forms and odd vantage points, which effectively convey the immediacy of the scene. The view is from the orchestra pit, with the necks of the double basses intruding into the dancers’ zone. Degas’s composition emphasizes movement, the fleeting nature of the performance, and the play of light across tutus and stage props. Unlike other artists who idealized ballet, Degas captures the dancers with a mixture of grace and realism: the tension in their muscles, the delicate footwork, and the occasional casual pose between routines. The painting conveys both the glamour and the labor inherent in ballet.",
      link: "https://www.artic.edu/artworks/28141/ballet-at-the-paris-opera"
    },
    {
      file: "1942.311 - Fish (Still Life).jpg",
      question: "Who painted this?",
      choices: ["Édouard Manet", "Claude Monet", "James McNeill Whistler", "Frans Hals"],
      answer: "Édouard Manet",
      fact: "Although still-life ensembles were an important element in many of the major paintings of the avant-garde artist Édouard Manet, his most sustained interest in the genre itself was from 1864 to 1865, when Fish was painted. Manet’s focus on still lifes coincided with the gradual reacceptance of the genre during the nineteenth century. In Fish, he arranged the objects carefully on a table, using bright, contrasting colors and natural light to emphasize their textures. The composition reflects Manet’s interest in both realism and painterly brushwork, as he sought to balance the fidelity of observation with the energy of paint handling. This approach became influential for later Impressionists and modern painters, bridging the gap between traditional still-life and contemporary explorations of form, color, and surface.",
      link: "https://www.artic.edu/artworks/43838/fish-still-life"
    },
    {
      file: "1933.443 - Cliff Walk at Pourville.jpg",
      question: "Who painted this?",
      choices: ["Claude Monet", "Pierre-Auguste Renoir", "James McNeill Whistler", "Edgar Degas"],
      answer: "Claude Monet",
      fact: "In this work, Monet addressed the problem of inserting figures into a landscape without disrupting the unity of its painterly surface. He integrated these elements with one another through texture and color. The grass—composed of short, brisk, curved brushstrokes—appears to quiver in the breeze. The two figures in the foreground, a man and a woman, are positioned in a way that complements the diagonal and horizontal lines created by the cliffs and sea, maintaining the visual harmony of the painting. Monet’s brushwork and attention to natural lighting convey the atmosphere and fleeting quality of the coastal environment, creating a scene that is simultaneously realistic and impressionistic.",
      link: "https://www.artic.edu/artworks/14643/cliff-walk-at-pourville"
    },
    {
      file: "1933.441 - Water Lily Pond.jpg",
      question: "Who painted this?",
      choices: ["Claude Monet", "James McNeill Whistler", "Edgar Degas", "Pierre-Auguste Renoir"],
      answer: "Claude Monet",
      fact: "Water Lily Pond was among the 18 similar versions of the motif that he made in 1899–1900; their common theme was the mingling of the lilies with reflections of other vegetation on the pool’s surface. In this painting, Monet abandoned traditional perspective and allowed the pond’s surface to dominate the composition, creating a rhythmic, almost abstract pattern of reflections and floating plants. Each stroke was carefully placed to evoke the shimmering quality of water, the movement of light, and the delicate forms of the lilies themselves. The viewer is drawn into the painting’s surface, experiencing both the complexity and serenity of the scene, while Monet’s mastery of color modulation conveys depth and harmony.",
      link: "https://www.artic.edu/artworks/14645/water-lily-pond"
    },
  {
    file: "1900.52 - Nocturne_ Blue and Gold—Southampton Water.jpg",
    question: "Who painted this?",
    choices: ["James McNeill Whistler", "Claude Monet", "Edgar Degas", "Pierre-Auguste Renoir"],
    answer: "James McNeill Whistler",
    fact: "In the early 1870s James McNeill Whistler took a radical step toward abstraction with his Nocturnes series. These works capture the stillness of evening while evoking a connection to music. The subject of this work—an inlet along the English Channel near Southampton—is obscured by the approaching night. Large shipping vessels appear as ghostly shapes, reduced to shadowy forms by the deepening twilight. Whistler’s emphasis on tone and subtle gradations of color creates a contemplative mood, prioritizing atmosphere over precise detail. The painting’s delicate handling of light, water, and sky marks a major innovation in the evolution of impressionistic and tonal approaches to landscape.",
    link: "https://www.artic.edu/artworks/56905/nocturne-blue-and-gold-southampton-water"
  },
  {
    file: "1962.960 - Resting.jpg",
    question: "Who painted this?",
    choices: ["Antonio Mancini", "Edgar Degas", "Claude Monet", "James McNeill Whistler"],
    answer: "Antonio Mancini",
    fact: "Resting | The Art Institute of Chicago. In this portrait, Antonio Mancini presents a sensitive depiction of a woman in repose. The composition emphasizes quietude and introspection, rendered through soft, layered brushwork and careful use of light and shadow. Mancini captures both the texture of the fabrics and the delicate play of light across the sitter’s features, creating a deeply human and contemplative scene that conveys emotion and presence without theatricality.",
    link: "https://www.artic.edu/artworks/1962.960/resting"
  },
  {
    file: "1922.434 - The Place du Havre, Paris.jpg",
    question: "Who painted this?",
    choices: ["Camille Pissarro", "Claude Monet", "Edgar Degas", "Pierre-Auguste Renoir"],
    answer: "Camille Pissarro",
    fact: "After a period of experimentation with the Neo-Impressionist style developed by Georges Seurat, Camille Pissarro returned to the loose, multidirectional brushstrokes that he had used in his earlier Impressionist works. He also revisited an Impressionist subject that his colleagues had all but abandoned by the 1890s—the modern city. In The Place du Havre, Paris, Pissarro captures the movement and bustle of the city square with lively, energetic brushwork. The scene is populated with carriages, pedestrians, and architectural details that convey both the scale and rhythm of urban life, highlighting the interplay of light and atmosphere over precise linear perspective.",
    link: "https://www.artic.edu/artworks/1922.434/the-place-du-havre-paris"
  },
  {
    file: "1938.1276 - Approaching Storm.jpg",
    question: "Who painted this?",
    choices: ["Eugène-Louis Boudin", "Claude Monet", "James McNeill Whistler", "Pierre-Auguste Renoir"],
    answer: "Eugène-Louis Boudin",
    fact: "This painting by Eugène Boudin, a Norman painter and Claude Monet’s teacher, exemplifies the artist’s signature style and subject matter in the 1860s. Monet would later follow Boudin’s practice of painting in the open air, the technique that gave this image of a beach its vivid spontaneity. Boudin captures the dramatic sky and its reflections on the wet sand, the movement of the clouds, and the subtle light changes caused by the incoming storm. Figures on the beach are rendered with quick, energetic brushstrokes that enhance the natural dynamism of the scene, creating a compelling sense of immediacy.",
    link: "https://www.artic.edu/artworks/1938.1276/approaching-storm"
  },
  {
    file: "1906.99 - The Assumption of the Virgin.jpg",
    question: "Who painted this?",
    choices: ["El Greco", "Caravaggio", "Rembrandt van Rijn", "Frans Hals"],
    answer: "El Greco",
    fact: "This painting was the central element of the altarpiece that was El Greco’s first major Spanish commission and first large public work. The visionary imagery of the Assumption and the Trinity aptly expressed the patron’s hope of salvation. El Greco combines elongated forms, dramatic gestures, and a dynamic composition that directs the viewer’s eye upward toward the heavenly sphere. His distinctive use of vivid color, expressive lighting, and spiritual intensity marks a departure from traditional Renaissance norms and demonstrates his unique synthesis of Byzantine, Italian Renaissance, and Mannerist influences.",
    link: "https://www.artic.edu/artworks/87479/the-assumption-of-the-virgin"
  },
  {
    file: "1922.4467 - Old Man with a Gold Chain.jpg",
    question: "Who painted this?",
    choices: ["Rembrandt van Rijn", "Frans Hals", "Jan de Baen", "Jan Havicksz Steen"],
    answer: "Rembrandt van Rijn",
    fact: "This evocative character study is an early example of a type of subject that preoccupied the great Dutch master Rembrandt van Rijn throughout his long career. The confident execution suggests that the young Rembrandt completed this picture about 1631. He demonstrates his skill in capturing the textures of skin, hair, and textiles, as well as the play of light and shadow across the figure. The painting conveys the sitter’s personality, dignity, and individuality, establishing Rembrandt’s reputation as a master of portraiture and psychological depth.",
    link: "https://www.rijksmuseum.nl/en/collection/SK-A-4467"
  },
  {
    file: "SK-A-2344 - The Milkmaid.jpg",
    question: "Who painted this?",
    choices: ["Johannes Vermeer", "Frans Hals", "Rembrandt van Rijn", "Jan Havicksz Steen"],
    answer: "Johannes Vermeer",
    fact: "The Milkmaid is a celebrated example of Johannes Vermeer’s exquisite attention to light and texture. Painted around 1660, it depicts a domestic servant carefully pouring milk into a container, with vibrant colors and remarkable realism. Vermeer masterfully captures the way light falls through the window, illuminating the bread, the ceramic vessels, and the figure herself. The scene is both ordinary and transcendent, revealing the dignity and quiet beauty of everyday life. His delicate brushwork and subtle tonal gradations create a sense of calm and timelessness that continues to captivate viewers.",
    link: "https://www.rijksmuseum.nl/en/collection/SK-A-2344"
  },
  {
    file: "SK-C-5 - The Night Watch.jpg",
    question: "Who painted this?",
    choices: ["Rembrandt van Rijn", "Frans Hals", "Jan de Baen", "Jan Luyken"],
    answer: "Rembrandt van Rijn",
    fact: "Rembrandt’s largest, most famous canvas was made for the Arquebusiers guild hall. He was the first to paint figures in a group portrait actually doing something. The captain, dressed in black, is telling his lieutenant to start the company marching. The composition is dynamic, full of movement, depth, and interplay between light and shadow. Each figure is individualized, yet contributes to the narrative of collective action. The painting exemplifies Rembrandt’s mastery of chiaroscuro and his revolutionary approach to depicting a group in action, rather than in static, posed form.",
    link: "https://www.rijksmuseum.nl/en/collection/SK-C-5"
  },
  {
    file: "SK-A-133 - Portrait of a Married Couple.jpg",
    question: "Who painted this?",
    choices: ["Frans Hals", "Rembrandt van Rijn", "Jan de Baen", "Jan Havicksz Steen"],
    answer: "Frans Hals",
    fact: "Huwelijksportret van Isaac Abrahamsz Massa en Beatrix van der Laen, seated on a raised platform beneath a tree. Hals captures the relaxed yet formal pose with lively brushwork, emphasizing the social status and character of the sitters. His spontaneous, energetic brushstrokes convey a sense of immediacy and life, allowing the viewer to perceive both the individuality of each figure and their relational dynamics. Hals’s mastery of texture, light, and gesture places this work among the finest examples of Dutch Golden Age portraiture.",
    link: "https://www.rijksmuseum.nl/en/collection/SK-A-133"
  },

  // STYLE QUESTIONS
  {
    file: "1900.52 - Nocturne_ Blue and Gold—Southampton Water.jpg",
    question: "What style is this?",
    choices: ["Impressionism", "Baroque", "Mannerism", "Realism"],
    answer: "Impressionism",
    fact: "Impressionism (1860s–1880s, France): Quick, visible brushstrokes capture light and fleeting moments. Focuses on everyday life and the atmosphere rather than detail. Outdoor scenes and vibrant colors dominate.",
    link: "https://www.artic.edu/artworks/56905/nocturne-blue-and-gold-southampton-water"
  },
  {
    file: "1962.960 - Resting.jpg",
    question: "What style is this?",
    choices: ["Impressionism", "Baroque", "Realism", "Expressionism"],
    answer: "Impressionism",
    fact: "Impressionism (1860s–1880s, France): Quick, visible brushstrokes capture light and fleeting moments. Focuses on everyday life and the atmosphere rather than detail. Outdoor scenes and vibrant colors dominate.",
    link: "https://www.artic.edu/artworks/1962.960/resting"
  },
  {
    file: "1922.434 - The Place du Havre, Paris.jpg",
    question: "What style is this?",
    choices: ["Impressionism", "Neo-Impressionism", "Surrealism", "Cubism"],
    answer: "Impressionism",
    fact: "Impressionism (1860s–1880s, France): Quick, visible brushstrokes capture light and fleeting moments. Focuses on everyday life and the atmosphere rather than detail. Outdoor scenes and vibrant colors dominate.",
    link: "https://www.artic.edu/artworks/1922.434/the-place-du-havre-paris"
  },
  {
    file: "1938.1276 - Approaching Storm.jpg",
    question: "What style is this?",
    choices: ["Impressionism", "Romanticism", "Baroque", "Realism"],
    answer: "Impressionism",
    fact: "Impressionism (1860s–1880s, France): Quick, visible brushstrokes capture light and fleeting moments. Focuses on everyday life and the atmosphere rather than detail. Outdoor scenes and vibrant colors dominate.",
    link: "https://www.artic.edu/artworks/1938.1276/approaching-storm"
  },
  {
    file: "1906.99 - The Assumption of the Virgin.jpg",
    question: "What style is this?",
    choices: ["Mannerism", "Baroque", "Renaissance", "Romanticism"],
    answer: "Mannerism",
    fact: "Mannerism (1520–1600): Exaggerated, elegant, and stylized. Figures are elongated, compositions complex, and tension replaces natural balance.",
    link: "https://www.artic.edu/artworks/87479/the-assumption-of-the-virgin"
  },
  {
    file: "1922.4467 - Old Man with a Gold Chain.jpg",
    question: "What style is this?",
    choices: ["Baroque", "Mannerism", "Renaissance", "Dutch Golden Age"],
    answer: "Dutch Golden Age",
    fact: "Dutch Golden Age (1600–1700): Highly detailed, realistic, and often intimate. Domestic scenes, portraits, and landscapes show wealth and civic pride. Mastery of light and texture is key.",
    link: "https://www.rijksmuseum.nl/en/collection/SK-A-4467"
  },
  {
    file: "SK-A-2344 - The Milkmaid.jpg",
    question: "What style is this?",
    choices: ["Dutch Golden Age", "Impressionism", "Baroque", "Renaissance"],
    answer: "Dutch Golden Age",
    fact: "Dutch Golden Age (1600–1700): Highly detailed, realistic, and often intimate. Domestic scenes, portraits, and landscapes show wealth and civic pride. Mastery of light and texture is key.",
    link: "https://www.rijksmuseum.nl/en/collection/SK-A-2344"
  },
  {
    file: "SK-C-5 - The Night Watch.jpg",
    question: "What style is this?",
    choices: ["Dutch Golden Age", "Baroque", "Renaissance", "Realism"],
    answer: "Dutch Golden Age",
    fact: "Dutch Golden Age (1600–1700): Highly detailed, realistic, and often intimate. Domestic scenes, portraits, and landscapes show wealth and civic pride. Mastery of light and texture is key.",
    link: "https://www.rijksmuseum.nl/en/collection/SK-C-5"
  },
  {
    file: "SK-A-133 - Portrait of a Married Couple.jpg",
    question: "What style is this?",
    choices: ["Dutch Golden Age", "Baroque", "Renaissance", "Realism"],
    answer: "Dutch Golden Age",
    fact: "Dutch Golden Age (1600–1700): Highly detailed, realistic, and often intimate. Domestic scenes, portraits, and landscapes show wealth and civic pride. Mastery of light and texture is key.",
    link: "https://www.rijksmuseum.nl/en/collection/SK-A-133"
  },
   {
      file: "_The_School_of_Athens__by_Raffaello_Sanzio_da_Urbino.jpg",
      question: "Who painted The School of Athens?",
      choices: ["Raphael", "Sandro Botticelli", "Caravaggio", "Peter Paul Rubens"],
      answer: "Raphael",
      fact: "The School of Athens: Raphael created a grand fresco celebrating philosophy, with idealized figures representing Plato, Aristotle, and other thinkers. Balanced perspective, classical architecture, and harmonious composition epitomize High Renaissance ideals of proportion and humanist learning.",
      link: "https://en.wikipedia.org/wiki/The_School_of_Athens"
    },
    {
      file: "Sandro_Botticelli_-_La_nascita_di_Venere.jpg",
      question: "Who painted La Nascita di Venere?",
      choices: ["Sandro Botticelli", "Raphael", "Caravaggio", "Eugène Delacroix"],
      answer: "Sandro Botticelli",
      fact:"La Nascita di Venere: Venus emerges from the sea on a shell, rendered with graceful linearity and flowing forms. Botticelli emphasizes elegance and idealized beauty, combining mythological narrative with delicate ornamentation. The painting celebrates harmony, proportion, and the Renaissance fascination with classical mythology.",
      link: "https://en.wikipedia.org/wiki/The_Birth_of_Venus"
    },
    {
      file: "Caravaggio_—_The_Calling_of_Saint_Matthew.jpg",
      question: "Who painted The Calling of Saint Matthew?",
      choices: ["Caravaggio", "Raphael", "Peter Paul Rubens", "Jean-François Millet"],
      answer: "Caravaggio",
      fact: "The Calling of Saint Matthew: Dramatic light cuts through shadow to spotlight figures in a tavern-like setting. Caravaggio captures a pivotal moment with theatrical tension and realism, blending ordinary surroundings with divine intervention. The gestures and expressions convey immediate emotional impact, hallmarks of Baroque intensity.",
      link: "https://en.wikipedia.org/wiki/The_Calling_of_Saint_Matthew"
    },
    {
      file: "Peter_Paul_Rubens_-_The_Descent_from_the_Cross_(Antwerp_Cathedral).,_c._1613.jpg",
      question: "Who painted The Descent from the Cross?",
      choices: ["Peter Paul Rubens", "Raphael", "Caravaggio", "Gustave Moreau"],
      answer: "Peter Paul Rubens",
      fact: "The Descent from the Cross: Rich color, dynamic poses, and swirling composition dramatize Christ’s removal from the cross. Rubens emphasizes muscular anatomy and theatrical emotion, creating a sense of movement and tension. Light guides the viewer through the scene, highlighting grief and heroism simultaneously.",
      link: ""
    },
    {
      file: "La_Liberté_guidant_le_peuple.jpg",
      question: "Who painted La Liberte Guidant le Peuple?",
      choices: ["Eugène Delacroix", "Raphael", "JMW Turner", "Caspar David Friedrich"],
      answer: "Eugène Delacroix",
      fact: "La Liberte Guidant le Peuple: Personifies freedom as a figure leading revolutionaries through a chaotic battlefield. Delacroix’s energetic brushwork, vivid colors, and dramatic composition capture heroic emotion and political fervor. The painting blends allegory with historical narrative, emphasizing passion over strict realism.",
      link: "https://en.wikipedia.org/wiki/Liberty_Leading_the_People"
    },
    {
      file: "The_Fighting_Temeraire,_JMW_Turner.jpg",
      question: "Who painted The Fighting Temeraire?",
      choices: ["JMW Turner", "Raphael", "Eugène Delacroix", "Edward Hopper"],
      answer: "Joseph Mallord William Turner",
      fact: "The Fighting Temeraire: Depicts a grand naval vessel being towed for decommissioning, bathed in a luminous sunset. Turner emphasizes color and atmosphere over detail, evoking nostalgia, the passage of time, and the sublime. The sky and water merge in expressive brushwork, creating emotional resonance with industrial change.",
      link: "https://en.wikipedia.org/wiki/The_Fighting_Temeraire"
    },
    {
      file: "Wanderer_above_the_Sea_of_Fog.jpg",
      question: "Who painted Wanderer above the Sea of Fog?",
      choices: ["Caspar David Friedrich", "JMW Turner", "Jean-François Millet", "Caravaggio"],
      answer: "Caspar David Friedrich",
      fact: "Wandere above the Sea Fog: Shows a lone figure surveying a misty landscape, conveying introspection and the sublime. Friedrich uses scale and perspective to evoke awe, with rugged terrain and fog blending into an infinite horizon. The painting celebrates nature’s grandeur and human contemplation.",
      link: "https://en.wikipedia.org/wiki/Wanderer_above_the_Sea_of_Fog"
    },
    {
      file: "Gleaners.jpg",
      question: "Who painted Gleaners?",
      choices: ["Jean-François Millet", "Raphael", "Edward Hopper", "Artemisia Gentileschi"],
      answer: "Jean-François Millet",
      fact: "Gleaners: Three women gather leftover grain in a field, rendered with dignity and careful observation. Millet focuses on everyday labor and the rhythm of rural life, conveying both social reality and quiet heroism. Light and earth tones highlight the connection between humans and nature.",
      link: "https://en.wikipedia.org/wiki/The_Gleaners"
    },
    {
      file: "Nighthawks_by_Edward_Hopper_1942.jpg",
      question: "Who painted Nighthawks?",
      choices: ["Edward Hopper", "Raphael", "Caspar David Friedrich", "Jean-François Millet"],
      answer: "Edward Hopper",
      fact: "Nighthawks: Captures an isolated urban diner at night, emphasizing quiet solitude. Hopper uses strong artificial light, simple geometry, and clear composition to create psychological tension. The scene feels both intimate and detached, reflecting modern urban experience.",
      link: ""
    },
    {
      file: "Artemisia_Gentileschi_-_Judith_Beheading_Holofernes.jpg",
      question: "Who painted Judith Beheading Holofernes?",
      choices: ["Artemisia Gentileschi", "Caravaggio", "Raphael", "Peter Paul Rubens"],
      answer: "Artemisia Gentileschi",
      fact: "Judith Beheading Holofernes: Gentileschi portrays Judith delivering the fatal blow to Holofernes with unflinching realism and emotional intensity. Dramatic lighting emphasizes the struggle and horror of the scene, characteristic of Baroque chiaroscuro. The figures’ muscularity and determination give Judith agency and power, unusual for female figures of the time. The painting is a triumph of narrative drama, moral storytelling, and technical mastery, making it a classic of Baroque art.",
      link: "https://en.wikipedia.org/wiki/Judith_Slaying_Holofernes_(Artemisia_Gentileschi,_Naples)"
    },
    {
      file: "La_Balsa_de_la_Medusa.jpg",
      question: "Who painted La Balsa de la Medusa?",
      choices: ["JEAN LOUIS THÉODORE GÉRICAULT", "Raphael", "Eugène Delacroix", "Gustave Moreau"],
      answer: "JEAN LOUIS THÉODORE GÉRICAULT",
      fact: "La Balsa de la Medusa: Géricault depicts survivors of a shipwreck, blending historical tragedy with heroic composition. The chaotic arrangement of bodies, dramatic foreshortening, and stormy palette convey despair and human endurance. Every figure is individualized, creating empathy and narrative depth. The painting embodies Romantic fascination with the sublime, human emotion, and moral struggle. Its scale and intensity make it a defining work of 19th-century Romanticism.",
      link: "https://en.wikipedia.org/wiki/The_Raft_of_the_Medusa"
    },
    {
      file: "John_Constable_-_The_Hay_Wain_(1821).jpg",
      question: "Who painted The Hay Wain?",
      choices: ["John Constable", "Jean-Baptiste-Camille Corot", "Raphael", "JMW Turner"],
      answer: "John Constable",
      fact: "The Hay Wain: Constable paints an idyllic English countryside scene with meticulous observation of nature. Light, sky, and reflections are rendered with fidelity, creating a sense of presence and tranquility. The painting celebrates rural life and personal connection to landscape, central to Romantic ideals of emotion and nostalgia. Its compositional balance and atmospheric subtlety helped define landscape painting as a serious genre. Constable’s attention to natural detail makes it a lasting icon of Romanticism.",
      link: "https://en.wikipedia.org/wiki/The_Hay_Wain"
    },
    {
      file: "Corot.villedavray.750pix.jpg",
      question: "Who painted Ville Davray?",
      choices: ["Jean-Baptiste-Camille Corot", "Raphael", "John Constable", "Parmigianino"],
      answer: "Jean-Baptiste-Camille Corot",
      fact: "Ville Davray: Corot presents a calm, naturalistic landscape, blending careful observation with lyrical atmosphere. Light, reflections, and subtle tonal shifts convey a sense of quiet and serenity. This Realist work balances fidelity to nature with personal emotional impression. Corot influenced later Impressionists, bridging detailed observation and expressive mood. It’s celebrated for harmony, simplicity, and understated beauty.",
      link: ""
    },
    {
      file: "Madonna_with_the_Long_Neck.jpg",
      question: "Who painted Madonna with the Long Neck?",
      choices: ["Parmigianino", "Raphael", "Jacques-Louis David", "Gustave Moreau"],
      answer: "Parmigianino",
      fact: "Madonna with the Long Neck: The Madonna’s elongated neck and limbs create a sense of grace and sophistication that defies natural proportions. The composition is intentionally ambiguous, with crowded background and tiny figures accentuating her scale. Soft, smooth surfaces and delicate gestures emphasize elegance over realism. This painting exemplifies Mannerist fascination with elegance, tension, and artistic virtuosity. Viewers are drawn into the stylized, almost surreal beauty of the scene. It’s celebrated for its inventive manipulation of space and form.",
      link: "https://en.wikipedia.org/wiki/Madonna_with_the_Long_Neck"
    },
    {
      file: "Le_Serment_des_Horaces.jpg",
      question: "Who painted Le Serment?",
      choices: ["Jacques-Louis David", "Parmigianino", "Raphael", "Eugène Delacroix"],
      answer: "Jacques-Louis David",
      fact: "Le Serment: David depicts three brothers swearing to defend Rome, emphasizing moral duty and stoicism. Clear lines, balanced composition, and classical architecture reinforce rationality and order. Figures are idealized, reflecting heroic virtue and civic responsibility. Neoclassical painting emphasizes reason, clarity, and moral storytelling over emotion or ornamentation. The painting became iconic for its moral lesson and disciplined aesthetic. It exemplifies the Neoclassical ideal of combining art with civic and ethical purpose.",
      link: "https://en.wikipedia.org/wiki/Oath_of_the_Horatii"
    },
    {
      file: "The_Apparition,_Gustave_Moreau_1876.jpg",
      question: "Who painted The Apparition?",
      choices: ["Gustave Moreau", "Jacques-Louis David", "Raphael", "René Magritte"],
      answer: "Gustave Moreau",
      fact: "The Apparition: Moreau portrays Salome confronting the severed head of John the Baptist with rich decorative detail and mystical atmosphere. Dreamlike, fantastical imagery emphasizes imagination over realism. Symbolist fascination with myth, emotion, and psychological complexity is evident in every gesture and object. Color, light, and intricate design create a hypnotic, otherworldly effect. The painting blurs reality and vision, inviting reflection on morality and desire. Its symbolism and theatricality make it a classic of the movement.",
      link: "https://en.wikipedia.org/wiki/The_Apparition_(Moreau,_Mus%C3%A9e_d%27Orsay)"
    },
    {
      file: "MagrittePipe.jpg",
      question: "Who painted Magritte Pipe?",
      choices: ["René Magritte", "Gustave Moreau", "Jacques-Louis David", "Raphael"],
      answer: "René Magritte",
      fact: "Magritte Pipe: This is not a pipe. Magritte paints a simple pipe with the caption “Ceci n’est pas une pipe,” questioning the relationship between image and reality. The painting embodies Surrealist fascination with paradox, logic, and the unconscious. By denying literal interpretation, it forces viewers to consider perception, representation, and meaning. Ordinary objects become philosophical tools. Magritte blends humor, intellect, and visual clarity to challenge assumptions. Its conceptual impact is as important as its visual style.",
      link: "https://en.wikipedia.org/wiki/Girl_with_a_Mandolin"
    },
      {
      file: "_The_School_of_Athens__by_Raffaello_Sanzio_da_Urbino.jpg",
      question: "What style is The School of Athens?",
      choices: ["Renaissance", "Baroque", "Mannerism", "Impressionism"],
      answer: "Renaissance",
      fact: "",
      link: ""
    },
    {
      file: "Sandro_Botticelli_-_La_nascita_di_Venere.jpg",
      question: "What style is La Nascita di Venere?",
      choices: ["Renaissance", "Baroque", "Mannerism", "Impressionism"],
      answer: "Renaissance",
      fact: "(14th–17th century) The Renaissance marked a rebirth of classical learning, humanism, and proportion. Artists emphasized balanced composition, perspective, and anatomical accuracy. Subjects ranged from religious to secular, with a focus on the beauty and dignity of the human form. Hallmarks include linear perspective, harmonious proportion, classical motifs, and intellectual engagement. Major figures include Leonardo da Vinci, Michelangelo, and Raphael.",
      link: ""
    },
    {
      file: "Caravaggio_—_The_Calling_of_Saint_Matthew.jpg",
      question: "What style is The Calling of Saint Matthew?",
      choices: ["Baroque", "Renaissance", "Mannerism", "Realism"],
      answer: "Baroque",
      fact: "(1600–1750) Baroque art is dramatic, emotional, and designed to impress. Artists used strong contrasts of light and dark (chiaroscuro), dynamic movement, and theatrical compositions to evoke awe or devotion, often for religious, political, or propagandistic purposes. Figures are muscular, dramatic, and expressive, set in swirling compositions that pull the viewer in. Hallmarks include grandeur, tension, ornamentation, and emotional intensity. Caravaggio, Rubens, and Bernini exemplify the style.",
      link: ""
    },
    {
      file: "Peter_Paul_Rubens_-_The_Descent_from_the_Cross_(Antwerp_Cathedral).,_c._1613.jpg",
      question: "What style is The Descent from the Cross?",
      choices: ["Baroque", "Renaissance", "Mannerism", "Realism"],
      answer: "Baroque",
      fact: "(1600–1750) Baroque art is dramatic, emotional, and designed to impress. Artists used strong contrasts of light and dark (chiaroscuro), dynamic movement, and theatrical compositions to evoke awe or devotion, often for religious, political, or propagandistic purposes. Figures are muscular, dramatic, and expressive, set in swirling compositions that pull the viewer in. Hallmarks include grandeur, tension, ornamentation, and emotional intensity. Caravaggio, Rubens, and Bernini exemplify the style.",
      link: ""
    },
    {
      file: "La_Liberté_guidant_le_peuple.jpg",
      question: "What style is La Liberte Guidant le Peuple?",
      choices: ["Romanticism", "Baroque", "Neoclassicism", "Impressionism"],
      answer: "Romanticism",
      fact: "(late 18th–mid-19th century) Romanticism rejected rationalism and embraced emotion, imagination, and the sublime. Landscapes, dramatic natural phenomena, heroic figures, and exotic or historical subjects are common. Artists explored personal expression, the power of nature, and the extremes of human experience. Hallmarks include intense color, dramatic lighting, movement, and heightened emotion. Key artists include Delacroix, Géricault, and Turner.",
      link: ""
    },
    {
      file: "The_Fighting_Temeraire,_JMW_Turner.jpg",
      question: "What style is The Fighting Temeraire?",
      choices: ["Romanticism", "Baroque", "Rococo", "Realism"],
      answer: "Romanticism",
      fact: "(late 18th–mid-19th century) Romanticism rejected rationalism and embraced emotion, imagination, and the sublime. Landscapes, dramatic natural phenomena, heroic figures, and exotic or historical subjects are common. Artists explored personal expression, the power of nature, and the extremes of human experience. Hallmarks include intense color, dramatic lighting, movement, and heightened emotion. Key artists include Delacroix, Géricault, and Turner.",
      link: ""
    },
    {
      file: "Wanderer_above_the_Sea_of_Fog.jpg",
      question: "What style is Wanderer above the Sea of Fog?",
      choices: ["Romanticism", "Baroque", "Realism", "Impressionism"],
      answer: "Romanticism",
      fact: "(late 18th–mid-19th century) Romanticism rejected rationalism and embraced emotion, imagination, and the sublime. Landscapes, dramatic natural phenomena, heroic figures, and exotic or historical subjects are common. Artists explored personal expression, the power of nature, and the extremes of human experience. Hallmarks include intense color, dramatic lighting, movement, and heightened emotion. Key artists include Delacroix, Géricault, and Turner.",
      link: ""
    },
    {
      file: "Gleaners.jpg",
      question: "What style is Gleaners?",
      choices: ["Realism", "Impressionism", "Baroque", "Romanticism"],
      answer: "Realism",
      fact: "(mid-19th century)  Realism arose as a reaction against Romantic idealization, focusing on ordinary life and social reality. Artists depicted peasants, laborers, and everyday scenes with careful observation and minimal embellishment. Hallmarks include unidealized figures, attention to detail, and a focus on contemporary social conditions. Courbet and Millet are central figures.",
      link: ""
    },
    {
      file: "Nighthawks_by_Edward_Hopper_1942.jpg",
      question: "What style is Nighthawks?",
      choices: ["Realism", "Impressionism", "Baroque", "Romanticism"],
      answer: "Realism",
      fact: "(mid-19th century)  Realism arose as a reaction against Romantic idealization, focusing on ordinary life and social reality. Artists depicted peasants, laborers, and everyday scenes with careful observation and minimal embellishment. Hallmarks include unidealized figures, attention to detail, and a focus on contemporary social conditions. Courbet and Millet are central figures.",
      link: ""
    },
    {
      file: "Artemisia_Gentileschi_-_Judith_Beheading_Holofernes.jpg",
      question: "What style is Judith Beheading Holofernes?",
      choices: ["Baroque", "Rococo", "Neoclassicism", "Realism"],
      answer: "Baroque",
      fact: "(1600–1750) Baroque art is dramatic, emotional, and designed to impress. Artists used strong contrasts of light and dark (chiaroscuro), dynamic movement, and theatrical compositions to evoke awe or devotion, often for religious, political, or propagandistic purposes. Figures are muscular, dramatic, and expressive, set in swirling compositions that pull the viewer in. Hallmarks include grandeur, tension, ornamentation, and emotional intensity. Caravaggio, Rubens, and Bernini exemplify the style.",
      link: ""
    },
    {
      file: "La_Balsa_de_la_Medusa.jpg",
      question: "What style is La Balsa de la Medusa?",
      choices: ["Romanticism", "Neoclassicism", "Realism", "Baroque"],
      answer: "Romanticism",
      fact: "(late 18th–mid-19th century) Romanticism rejected rationalism and embraced emotion, imagination, and the sublime. Landscapes, dramatic natural phenomena, heroic figures, and exotic or historical subjects are common. Artists explored personal expression, the power of nature, and the extremes of human experience. Hallmarks include intense color, dramatic lighting, movement, and heightened emotion. Key artists include Delacroix, Géricault, and Turner.",
      link: ""
    },
    {
      file: "John_Constable_-_The_Hay_Wain_(1821).jpg",
      question: "What style is The Hay Wain?",
      choices: ["Romanticism", "Realism", "Baroque", "Neoclassicism"],
      answer: "Romanticism",
      fact: "(late 18th–mid-19th century) Romanticism rejected rationalism and embraced emotion, imagination, and the sublime. Landscapes, dramatic natural phenomena, heroic figures, and exotic or historical subjects are common. Artists explored personal expression, the power of nature, and the extremes of human experience. Hallmarks include intense color, dramatic lighting, movement, and heightened emotion. Key artists include Delacroix, Géricault, and Turner.",
      link: ""
    },
    {
      file: "Corot.villedavray.750pix.jpg",
      question: "What style is Ville Davray?",
      choices: ["Realism", "Romanticism", "Baroque", "Neoclassicism"],
      answer: "Realism",
      fact: "(mid-19th century)  Realism arose as a reaction against Romantic idealization, focusing on ordinary life and social reality. Artists depicted peasants, laborers, and everyday scenes with careful observation and minimal embellishment. Hallmarks include unidealized figures, attention to detail, and a focus on contemporary social conditions. Courbet and Millet are central figures.",
      link: ""
    },
    {
      file: "Madonna_with_the_Long_Neck.jpg",
      question: "What style is Madonna with the Long Neck?",
      choices: ["Mannerism", "Renaissance", "Baroque", "Romanticism"],
      answer: "Mannerism",
      fact: "(1520–1600) Mannerism emerged at the end of the High Renaissance, reacting against perfect balance and naturalism. Figures are elongated, poses are exaggerated, and compositions are complex, sometimes creating tension or instability. The style favors elegance, sophistication, and artificiality over realism. Hallmarks include distorted proportions, unusual perspectives, intricate compositions, and stylized gestures. Pontormo, Bronzino, and Parmigianino are key artists.",
      link: ""
    },
    {
      file: "Le_Serment_des_Horaces.jpg",
      question: "What style is Le Serment?",
      choices: ["Neoclassicism", "Baroque", "Mannerism", "Romanticism"],
      answer: "Neoclassicism",
      fact: "",
      link: ""
    },
    {
      file: "The_Apparition,_Gustave_Moreau_1876.jpg",
      question: "What style is The Apparition?",
      choices: ["Symbolism", "Romanticism", "Neoclassicism", "Baroque"],
      answer: "Symbolism",
      fact: "",
      link: ""
    },
    {
      file: "MagrittePipe.jpg",
      question: "What style is Magritte Pipe?",
      choices: ["Surrealism", "Symbolism", "Cubism", "Realism"],
      answer: "Surrealism",
      fact: "",
      link: ""
    }
    ];
// Shuffle gallery for random order
function shuffleGallery() {
  shuffledGallery = [...gallery];
  for (let i = shuffledGallery.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledGallery[i], shuffledGallery[j]] = [shuffledGallery[j], shuffledGallery[i]];
  }
}

// Load a slide
function loadArt() {
  answered = false;
  const item = shuffledGallery[currentSlide];
  artEl.src = "images/" + item.file;
  questionEl.textContent = item.question;
  feedbackEl.textContent = "";

  learnBtn.style.display = "none";
  learnMoreDiv.style.display = "none";

  factEl.textContent = item.fact || "";
  linkEl.href = item.link || "#";
  linkEl.style.display = item.link ? "inline" : "none";

  // Multiple-choice buttons
  choicesEl.innerHTML = "";
  item.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.addEventListener("click", () => checkAnswer(choice));
    choicesEl.appendChild(btn);
  });
}

// Check answer
function checkAnswer(selected) {
  if (answered) return;
  answered = true;

  const item = shuffledGallery[currentSlide];
  if (selected === item.answer) {
    feedbackEl.textContent = "Correct!";
    score++;
    scoreEl.textContent = score;
  } else {
    feedbackEl.textContent = `Wrong! Correct answer: ${item.answer}`;
  }

  if (item.fact || item.link) {
    learnBtn.style.display = "inline-block";
  }
}

// Toggle Learn More
learnBtn.addEventListener("click", () => {
  learnMoreDiv.style.display = learnMoreDiv.style.display === "none" ? "block" : "none";
});

// Next button
nextBtn.addEventListener("click", () => {
  currentSlide++;
  if (currentSlide >= shuffledGallery.length) currentSlide = 0; // loop
  loadArt();
});

// Reset button
resetBtn.addEventListener("click", () => {
  score = 0;
  scoreEl.textContent = score;
  currentSlide = 0;
  shuffleGallery();
  loadArt();
});

// Initial setup
shuffleGallery();
loadArt();
