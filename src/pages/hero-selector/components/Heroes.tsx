// Adicionar arr de obj de herois

const Heroes = [
	{
		id: 1,
		name: "Creed",
		heroClass: "Paladin",
		atk: 8,
		def: 6,
		_hp: 10,
		_mana: 6,
		inventary: [
			{
				item: "HP potion",
				qtd: 3,
			},
			{
				item: "MP potion",
				qtd: 3,
			},
		],
		powers: [
			{
				name: "Apollo Fury",
				cost: 6,
			},
			{
				name: "Warrior Wisdom",
				cost: 2,
			},
		],
	},
	{
		id: 2,
		name: "Mary",
		heroClass: "Mage",
		atk: 8,
		def: 4,
		_hp: 8,
		_mana: 12,
		inventary: [
			{
				item: "HP potion",
				qtd: 3,
			},
			{
				item: "MP potion",
				qtd: 3,
			},
		],
		powers: [
			{
				name: "Mother Nature",
				cost: 6,
			},
			{
				name: "Wild Breath",
				cost: 2,
			},
		],
	},
];

export default Heroes;
