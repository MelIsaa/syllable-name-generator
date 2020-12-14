let output = $('div#generated-names-list'),
		femaleNames2016 = ['Em-ma', 'O-li-via', 'Ava', 'So-phi-a', 'Is-a-bella', 'Mia', 'Char-lotte', 'A-bi-gail', 'Em-ily', 'Har-per', 'A-me-lia', 'Ev-e-lyn', 'E-li-za-beth', 'So-fi-a', 'Ma-di-son', 'A-ver-y', 'El-la', 'Scar-lett', 'Gra-ce', 'Chlo-e', 'Vic-tor-ia', 'Ri-ley', 'A-ria', 'Li-ly', 'Au-brey', 'Zo-ey', 'Pe-ne-lo-pe', 'Lil-li-an', 'A-ddi-son', 'Lay-la', 'Na-ta-lie', 'Ca-mi-la', 'Ha-nnah', 'Brook-lyn', 'Zoe', 'No-ra', 'Le-ah', 'Sa-va-nnah', 'Au-drey', 'Cla-ire', 'El-ea-nor', 'Sky-lar', 'El-lie', 'Sa-man-tha', 'Ste-lla', 'Pais-ley', 'Vio-let', 'Mi-la', 'Al-li-son', 'A-lex-a', 'An-na', 'Ha-zel', 'Aa-li-yah', 'Ar-i-an-a', 'Lu-cy', 'Car-o-line',	'Sa-rah', 'Gen-e-sis', 'Ken-ne-dy', 'Sa-die', 'Ga-bri-ella', 'Ma-de-lyn', 'Ad-e-line', 'Ma-ya', 'Au-tumn',	'Au-ro-ra', 'Pi-per', 'Hai-ley', 'Ari-an-na', 'Kay-lee', 'Ru-by', 'Se-ren-i-ty', 'E-va', 'Na-o-mi', 'Ne-vaeh',	'Al-ice', 'Lu-na', 'Bel-la', 'Qu-inn', 'Ly-di-a', 'Pey-ton', 'Me-la-nie', 'Ky-lie', 'Au-bree', 'Mac-ken-zie',	'Kins-ley', 'Co-ra', 'Ju-lia', 'Tay-lor', 'Kath-er-ine', 'Ma-de-line', 'Gi-an-na', 'El-i-ana', 'E-le-na',	'Vi-vi-an', 'Wil-low', 'Rea-gan', 'Bri-ann-a', 'Cla-ra', 'Fai-th', 'Ash-ley', 'Em-i-lia', 'Is-a-belle',	'Ann-a-belle', 'Ry-lee', 'Val-en-tina', 'E-ver-ly', 'Had-ley', 'So-phie', 'A-lex-an-dra', 'Na-ta-lia', 'I-vy',	'Ma-ria', 'Jo-se-phine', 'De-li-lah', 'Bai-ley', 'Ja-de', 'Xi-men-a', 'A-lex-is', 'A-lys-sa', 'Bri-elle',	'Jas-mine', 'Li-li-ana', 'A-da-lynn', 'Kh-lo-e', 'Is-la', 'Ma-ry', 'An-dre-a', 'Kay-la', 'Em-e-ry', 'Lon-don', 'Kim-ber-ly', 'Mor-gan', 'Lau-ren', 'Syd-ney', 'No-va', 'Tri-ni-ty', 'Ly-la', 'Mar-ga-ret', 'A-ri-el', 'Ad-a-lyn', 'A-the-na', 'Lil-ly', 'Mel-o-dy', 'Is-a-bel', 'Jor-dyn', 'Jo-ce-lyn', 'E-den', 'Pai-ge', 'Tea-gan', 'Va-le-ria', 'Sa-ra', 'No-rah', 'Ro-se', 'A-li-yah', 'Mc-ken-zie', 'Mol-ly', 'Rae-lynn', 'Lei-la-ni', 'Va-le-rie', 'E-mer-son', 'Ju-li-ana', 'Ni-cole', 'Lai-la', 'Ma-kay-la', 'E-lise', 'Ma-ri-ah', 'Mya', 'Ar-ya', 'Ry-leigh', 'A-da-line', 'Broo-ke', 'Ra-chel', 'E-li-za', 'An-ge-li-na', 'A-my', 'Ree-se', 'A-li-na', 'Ce-ci-lia', 'Lon-dyn', 'Gra-cie', 'Pay-ton', 'Es-ther', 'A-lain-a', 'Char-lie', 'I-ris', 'Ara-bell-a', 'Gen-e-vieve', 'Fin-ley', 'Dai-sy', 'Har-mo-ny', 'Ana-sta-sia', 'Ken-dall', 'Dan-iel-a', 'Cath-e-rine', 'Ad-e-lyn', 'Va-nes-sa', 'Brook-lynn', 'Ju-li-ette', 'Ju-li-an-na', 'Pres-ley', 'Sum-mer', 'Des-ti-ny', 'A-ma-ya', 'Hay-den', 'A-la-na', 'Re-bec-ca', 'Mi-chelle', 'E-lo-ise', 'Li-la', 'Fi-o-na', 'Cal-lie', 'Lu-cia', 'An-ge-la', 'Mar-ley', 'A-dri-ana', 'Par-ker', 'A-lex-an-dria', 'Gi-selle', 'A-li-vi-a', 'A-lay-na', 'Bryn-lee', 'A-na', 'Har-ley', 'Ga-bri-elle', 'Da-ko-ta', 'Geor-gia', 'Ju-li-et', 'Tes-sa', 'Lei-la', 'Kate', 'Jay-la', 'Jes-si-ca', 'Lo-la', 'Ste-pha-nie', 'Si-en-na', 'Jo-sie', 'Da-ley-za', 'Ro-wan', 'E-van-ge-line', 'Hope', 'Mag-gie', 'Ca-mille', 'Ma-ken-zie', 'Vi-vi-enne', 'Saw-yer', 'Gem-ma', 'Jo-an-na', 'No-elle', 'El-li-ana', 'Mc-ken-na', 'Ga-bri-ela', 'Kin-ley', 'Ro-sa-lie', 'Brynn', 'A-mi-yah', 'Me-lis-sa', 'A-de-laide', 'Ma-lia', 'Ay-la', 'Iz-a-bel-la', 'De-la-ney', 'Cali', 'Jour-ney', 'Maci', 'E-lai-na', 'Sloane', 'June', 'Di-a-na', 'Blake-ly', 'A-ni-yah', 'O-live', 'Jen-ni-fer', 'Pa-ris', 'Mi-ran-da', 'Le-na', 'Jac-que-line', 'Pais-lee', 'Jane', 'Rae-gan', 'Ly-ric', 'Lil-li-ana', 'A-de-lynn', 'Lu-cille', 'Se-le-na', 'Ri-ver', 'An-nie', 'Cas-si-dy', 'Jor-dan', 'The-a', 'Ma-ri-an-a', 'A-mi-na', 'Mi-ri-am', 'Ha-ven', 'Re-mi', 'Char-lee', 'Blake', 'Li-lah', 'Ruth', 'A-ma-ra', 'Ka-li', 'Ky-lee', 'A-ri-elle', 'Em-er-syn', 'A-les-san-dra', 'Fa-ti-ma', 'Ta-lia', 'Ve-ra', 'Ni-na', 'A-ri-ah', 'Al-lie', 'Add-i-lyn', 'Kei-ra', 'Ca-ta-li-na', 'Rae-lyn', 'Phoe-be', 'Le-xi', 'Za-ra', 'Ma-ken-na', 'Em-ber', 'Leia', 'Ry-lie', 'An-gel', 'Ha-ley', 'Ma-di-lyn', 'Kait-lyn', 'Hea-ven', 'Ny-la', 'A-man-da', 'Fre-ya', 'Jour-nee', 'Dan-iel-la', 'Dan-ielle', 'Ken-zie'],
		maleNames2016 = ['No-ah', 'Li-am', 'Wil-liam', 'Ma-son', 'Jame-s', 'Ben-ja-min', 'Ja-cob', 'Mi-chael', 'E-li-jah', 'E-than', 'A-lex-an-der', 'O-li-ver', 'Da-niel', 'Lu-cas', 'Matth-ew', 'Ai-den', 'Jack-son', 'Lo-gan', 'Da-vid', 'Jo-seph', 'Sam-uel', 'Hen-ry', 'O-wen', 'Se-bas-tien', 'Ga-bri-el', 'Car-ter', 'Jay-den', 'Jo-hn', 'Lu-ke', 'An-tho-ny', 'I-saac', 'Dy-lan', 'Wy-att', 'An-drew', 'Josh-u-a', 'Chris-to-pher', 'Gray-son', 'Ja-ck', 'Ju-li-an', 'Ry-an', 'Ja-xon', 'Le-vi', 'Na-than', 'Ca-leb', 'Hun-ter', 'Chris-tian', 'I-sa-iah', 'Tho-mas', 'Aa-ron', 'Lin-coln', 'Char-les', 'E-li', 'Lan-don', 'Con-nor', 'Jo-si-ah', 'Jon-a-than', 'Cam-e-ron', 'Je-re-mi-ah', 'Ma-te-o', 'A-dri-an', 'Hud-son', 'Ro-bert', 'Ni-cho-las', 'Bray-den', 'No-lan', 'Eas-ton', 'Jor-dan', 'Col-ton', 'E-van', 'An-gel', 'Ash-er', 'Dom-i-nic', 'Aus-tin', 'Le-o', 'A-dam', 'Jace', 'Jo-se', 'I-an', 'Coo-per', 'Ga-vin', 'Car-son', 'Jax-son', 'The-o-dore', 'Ja-son', 'Ez-ra', 'Chase', 'Par-ker', 'Xa-vier', 'Ke-vin', 'Zach-a-ry', 'Ty-ler', 'Ay-den', 'E-li-as', 'Bry-son', 'Le-o-nar-do', 'Grey-son', 'Saw-yer', 'Ro-man', 'Bran-don', 'Bent-ley', 'Kay-den', 'Ry-der', 'Na-tha-niel', 'Vin-cent', 'Mi-les', 'San-ti-ago', 'Har-ri-son', 'Tris-tan', 'Dec-lan', 'Cole', 'Max-well', 'Lu-is', 'Jus-tin', 'E-ve-rett', 'Mi-cah', 'A-xel', 'Wes-ley', 'Max', 'Si-las', 'Wes-ton', 'E-ze-kiel', 'Juan', 'Da-mi-an', 'Cam-den', 'Geor-ge', 'Brax-ton', 'Bla-ke', 'Ja-me-son', 'Di-e-go', 'Car-los', 'I-van', 'King-ston', 'Ash-ton', 'Je-sus', 'Bro-dy', 'Em-mett', 'A-bel', 'Jay-ce', 'Mav-e-rick', 'Ben-nett', 'Gio-van-ni', 'E-ric', 'Ma-ddox', 'Kai-den', 'Kai', 'Bry-ce', 'A-lex', 'Cal-vin', 'Ry-ker', 'Jo-nah', 'Lu-ca', 'King', 'Tim-o-thy', 'A-lan', 'Brant-ley', 'Ma-la-chi', 'E-mman-u-el', 'A-bra-ham', 'An-to-ni-o', 'Ri-chard', 'Jude', 'Mi-guel', 'Ed-ward', 'Vic-tor', 'A-mir', 'Jo-el', 'Ste-ven', 'Mat-te-o', 'Hay-den', 'Pa-trick', 'Grant', 'Pres-ton', 'Tuck-er', 'Jes-se', 'Finn', 'Os-car', 'Ka-leb', 'Gael', 'Grah-am', 'El-li-ot', 'A-le-jan-dro', 'Ro-wan', 'Mar-cus', 'Je-re-my', 'Zay-den', 'Kar-ter', 'Beau', 'Bry-an', 'Max-i-mus', 'Ai-dan', 'A-ve-ry', 'El-li-ot', 'Au-gust', 'Ni-co-las', 'Mark', 'Co-lin', 'Way-lon', 'Brad-ley', 'Kyle', 'Ka-den', 'Xan-der', 'Ca-den', 'Pax-ton', 'Bri-an', 'Dean', 'Paul', 'Pe-ter', 'Ken-neth', 'Jas-per', 'Lo-ren-zo', 'Zane', 'Zi-on', 'Beck-ett', 'Ri-ver', 'Jax', 'An-dres', 'Daw-son', 'Mes-si-ah', 'Ja-den', 'Rhett', 'Bra-dy', 'Lu-kas', 'O-mar', 'Jorge', 'Ri-ley', 'De-rek', 'Char-lie', 'E-mi-li-ano', 'Grif-fin', 'My-les', 'Broo-ks', 'Is-ra-el', 'Sean', 'Ju-dah', 'I-ker', 'Ja-vi-er', 'E-rick', 'Tan-ner', 'Cor-bin', 'A-dri-el', 'Jase', 'Jake', 'Si-mon', 'Cay-den', 'Knox', 'To-bi-as', 'Fe-lix', 'Mi-lo', 'Jay-ce-on', 'Gun-ner', 'Fran-cis-co', 'Kam-e-ron', 'Cash', 'Rem-ing-ton', 'Reid', 'Co-dy', 'Mar-tin', 'An-dre', 'Ry-lan', 'Max-i-mil-i-ano', 'Zan-der', 'Ar-cher', 'Bar-rett', 'Kil-li-an', 'Ste-phen', 'Clay-ton', 'Thi-a-go', 'Spen-cer', 'A-mar-i', 'Jo-sue', 'Hol-den', 'E-mi-lio', 'Ar-thur', 'Chance', 'Ed-uar-do', 'Leon', 'Tra-vis', 'Ri-car-do', 'Da-mi-en', 'Man-uel', 'Gage', 'Kee-gan', 'Ti-tus', 'Ray-mond', 'Ky-rie', 'Nash', 'Fin-ley', 'Fer-nan-do', 'Lou-is', 'Pey-ton', 'Ra-fa-el', 'Pho-e-nix', 'Jai-den', 'Lane', 'Dal-las', 'Em-er-son', 'Cris-ti-an', 'Col-lin', 'Ky-ler', 'De-vin'],
		nameRefs = {
			femaleNames2016: femaleNames2016,
			maleNames2016: maleNames2016,
		},
		fillFieldOnClick = $('input:checkbox[name="getOnClick"]')[0];

function random(min = 0, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
	//The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min;
}

function rand0(max) {
	return random(0, max);
}

function genNames(names) {
	let first = [],
			middle = [],
			last = [];
	
	names.forEach(function(val, i) {
		let len = val.length;
		val = val.split('-');

		if(len > 2) {
			first.push(val.splice(0,1));
			last.push(val.splice(-1, 1));
			middle = middle.concat(val);
		} else if (len === 2) {
			first.push(val[0]);
			last.push(val[1]);
		} else {
			first = first.concat(val);
		}
	});
	
	return {
		first: first,
		middle: middle,
		last: last
	};
	
}

function readName() {
	let fields = [];

	$('input.name').each(function() {
		let txt = this.value;
		if(txt) { fields.push(txt);	}
	});
	
	return genNames(fields);
}

function addNameField() {
	let inputNames = $('input.name'),
			count = inputNames.length,
			container = $('section#name-inputs'),
			newField = $(`<input class="name form-control" type="text" name="name${count+1}">`);

	if(count < 25) {
		if (count % 5 === 0) {
			$('<p></p>').appendTo(container);
		}
		
		newField.click(checkIfChecked).appendTo(container);
		
	} else {
		$('span.another-name').addClass('disabledTxt').html(' Maximum Names Allowed Reached');
	}
	return false;
}

function prepopulate() {
	let list = nameRefs[$('select#pre-populate-names option:selected').val()],
			len = list.length;
	this.value = list[rand0(len)];
}

function checkIfChecked() {
	if ($('input:checkbox[name="getOnClick"]')[0].checked === true) {
		prepopulate.call(this);
	}
}

$('button#gen-names').click(function() {
	let i = 1,
			amount = parseInt($('select#generate-select option:selected').val()),
			howLong = parseInt($('select#generate-length option:selected').val()),
			nameBits = readName(),
			newName = '',
			newNames = [],
			middle,
			out = '<ul>';

	while (i <= amount) {
        // i++;
		middle = nameBits.middle[rand0(nameBits.middle.length)];
		
		newName = nameBits.first[rand0(nameBits.first.length)];
		
		if (middle && howLong > 1) {
			if (howLong === 2) {
				newName += middle;
			} else if (howLong === 3) {
				newName += middle;
				newName += nameBits.middle[rand0(nameBits.middle.length)];				
			}
		}
		
		newName += nameBits.last[rand0(nameBits.last.length)];
		
		// Checking for duplicates
		// if there aren't enough names to form 50 unique ones and i is incrimented here,
		// it triggers infinate loop cutoff
		if(newNames.indexOf(newName) === -1) {
			i++;
			newNames.push(newName);
			newName = '';
        }
		
	}
	
	newNames.forEach(function(val) {
		out += `<li data-generated-name="${val}">${val}</li>`;
	});
	out += '</ul>';
	output.append(out);
	
	// Put click events on the new names for saving
	$('div#generated-names-list li').click(function() {
		let name = $(this).data('generated-name');
		$('div#saved-names-list ul').append(`<li data-saved-name="${name}">${name}</li>`);
		return false;
	});
	
	return false;
});

$('button#pre-pop-random-names').click(function() {
	$('input.name').each(prepopulate);
	return false;
});

// Fill field with random name on click
$('input.name').click(checkIfChecked);

$('span.another-name').click(addNameField);

$('button#clear-names').click(function() {
	$('div#generated-names-list').html('');
	return false;
});

$('button#saved-clear').click(function() {
	$('div#saved-names-list ul').html('');
	return false;
});