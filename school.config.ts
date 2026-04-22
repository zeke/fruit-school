import type { SchoolConfig } from "./src/lib/school";

const config: SchoolConfig = {
	name: "Fruit School",
	description:
		"Learn the cultural history, science, etymology, and stories behind the world's favorite fruits.",
	adjectives: [
		"bitter",
		"bright",
		"candied",
		"crisp",
		"dewy",
		"fibrous",
		"fragrant",
		"frosted",
		"golden",
		"juicy",
		"plump",
		"ripe",
		"seedless",
		"sweet",
		"tangy",
	],
	nouns: [
		"apple",
		"berry",
		"cherry",
		"citrus",
		"fig",
		"grape",
		"guava",
		"lemon",
		"mango",
		"melon",
		"nectar",
		"peach",
		"pear",
		"plum",
		"quince",
	],
	colors: [
		"red",
		"orange",
		"amber",
		"yellow",
		"lime",
		"green",
		"emerald",
		"teal",
		"cyan",
		"sky",
		"blue",
		"indigo",
		"violet",
		"purple",
		"fuchsia",
		"pink",
		"rose",
		"slate",
	],
	profileFields: {
		fruitFamiliarity: {
			question:
				"How familiar are you with fruit beyond the grocery store basics?",
			type: "single",
			options: [
				{
					value: "casual",
					label: "Casual eater",
					description: "I eat fruit but haven't thought much about it",
				},
				{
					value: "curious",
					label: "Curious explorer",
					description: "I've wondered about fruit origins and varieties",
				},
				{
					value: "enthusiast",
					label: "Fruit enthusiast",
					description:
						"I grow fruit, visit orchards, or cook with unusual varieties",
				},
			],
			adaptation: {
				casual:
					"Start with familiar everyday experiences. Relate new facts to what the student already encounters at the grocery store or kitchen. Do not assume knowledge of botanical terms, cultivar names, or growing regions.",
				curious:
					"The student has some awareness of fruit diversity. Reference less common varieties and mention cultivar names when relevant. Connect facts to things they may have read or noticed.",
				enthusiast:
					"Go deeper into cultivars, growing conditions, grafting, and processing methods. The student likely knows common facts already, so focus on surprising details, regional specifics, and connections between fruits.",
			},
		},
		interestFocus: {
			question: "What aspect of fruit are you most curious about?",
			type: "single",
			options: [
				{
					value: "history",
					label: "Cultural history",
					description:
						"How fruits traveled the world, shaped trade routes, and influenced civilizations",
				},
				{
					value: "science",
					label: "Science and botany",
					description: "Genetics, nutrition, ripening, botanical classification",
				},
				{
					value: "stories",
					label: "Etymology and stories",
					description: "Word origins, myths, folklore, and fun facts",
				},
				{
					value: "all",
					label: "A bit of everything",
					description: "Mix it all together",
				},
			],
			adaptation: {
				history:
					"Lead with historical narratives and cultural context. Open each topic with how the fruit traveled, who cultivated it, and what role it played in trade or empire. Weave in science and etymology as supporting detail.",
				science:
					"Lead with botanical classification, ripening chemistry, and nutritional facts. Explain the biology first, then use history and etymology to add color. Include specific numbers (sugar content, chromosome counts, harvest seasons) when available.",
				stories:
					"Lead with word origins, folklore, and surprising facts. Open each topic with the most interesting or unexpected detail. Use history and science to explain why the stories exist.",
				all: "Balance all perspectives roughly equally. Alternate which angle you lead with across topics to keep things varied and engaging.",
			},
		},
	},
	support: {
		issues: "https://github.com/zeke/fruit-school/issues",
	},
};

export default config;
