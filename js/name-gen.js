let output = $('div#generated-names-list'),
		nameList = {},
		nameRefs = {
			femaleNames2016: 'popGirlNames2016.csv',
			maleNames2016: 'popBoyNames2016.csv',
			celticFemale: 'celtFemale01.csv',
			frenchFemale: 'frenchFemale01.csv',
			frenchMale: 'frenchMale01.csv',
			greekFemale02: 'greekFemale02.csv',
			greekMale02: 'greekMale02.csv',
			irishFemale01: 'irishFemale01.csv',
			irishMale01: 'irishMale01.csv',
			italianFemale01: 'italianFemale01.csv',
			italianMale01: 'italianMale01.csv',
			latinFemale: 'latinFemale.csv',
			latinMale: 'latinMale.csv',
			russianFemale01: 'russianFemale01.csv',
			russianMale01: 'russianMale01.csv',
			scandanavianFemale01: 'scandanavianFemale01.csv',
			scandanavianMale01: 'scandanavianMale01.csv'
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

function getNameList() {
    selectedNames = nameRefs[$('select#pre-populate-names option:selected').val()];
    
    trimNames = selectedNames.slice(0, -4);
    
    if(nameList.hasOwnProperty(trimNames)) {
        return nameList[trimNames];
    } else {
        return getCSV(selectedNames);
    }
}

function prepopulate() {
    let val = this.value;
    
    let promise = new Promise((resolve, reject)=>{
        let list = getNameList();
        if(list) {
            resolve(list);
        } else {
            reject(list);
        }
    });
    
    promise.then((data)=>{
        let list = [];
        
        if(typeof data == 'string') {
            list = processData(data);
        } else {
            list = data;
        }
        
        this.value = list[rand0(list.length)];
    }).catch(console.err);
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

// Bring In CSV files for names
// ajax
function getCSV(filename) {
	return $.ajax({
		type: 'GET',
		url: './data/' + filename,
		dataType: 'text',
		success: function(data) {
		    let list = [];
		    list = processData(data);
		    nameList[filename.slice(0, -4)] = list;
		    $('input.name').each(
		        this.value = list[rand0(list.length)]
		    );
		}
	});
}

function processData(data) {
    let noCommas = data.replace(/,/g,'');
	let lines = noCommas.split(/\r\n|\n|,/);
	return lines;
}

// Save saved name list to a txt file and send for download
// via: https://ourcodeworld.com/articles/read/189/how-to-create-a-file-and-generate-a-download-with-javascript-in-the-browser-without-a-server
function download(filename, text) {
  let dlButton = $('#saved-download');
  dlButton.attr({
      'href': 'data:text/plain;charset=utf-8,' + encodeURIComponent(text),
      'download': filename
      
  });
}

function downloadNames() {
    let savedNames = [];
    let strNames = '';
    
    $('#saved-names-list ul li').each((i, el)=>{
        savedNames.push($(el).data("saved-name"));
    });
    
    savedNames.forEach(e => {
        strNames += e + '\n';
    });
    
    var blob = new Blob([strNames], {type: "text/plain;charset=utf-8"});
    
    saveAs(blob, "generatedNames.txt");
}

$('#saved-download').on('click', downloadNames);