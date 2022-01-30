// response.ok 200-299 https://learn.javascript.ru/fetch

// https://learn.javascript.ru/cookie
function get_cookie(name) {
	let matches = document.cookie.match(new RegExp(
	 	"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

function set_cookie(name, value, options = {}) {
	options = {
		path: '/',
		...options
	};

	if (options.expires instanceof Date) {
		options.expires = options.expires.toUTCString();
	}

	let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

	for (let optionKey in options) {
		updatedCookie += "; " + optionKey;
		let optionValue = options[optionKey];
		if (optionValue !== true) {
			updatedCookie += "=" + optionValue;
		}
	}
  
	document.cookie = updatedCookie;
}

function delete_cookie(name) {
	set_cookie(name, "", {
		'max-age': -1
	})
}

const encode_get_params = p => "?" + Object.entries(p).map(kv => kv.map(encodeURIComponent).join("=")).join("&");

async function handle_not_ok(response) {
	if (response.status != 500) return
	alert(response.status + ' ' + response.statusText)
	let response_json = await response.json()
	if (response_json.trace) {
		console.log(response_json.err)
		console.log(response_json.trace)
		return true
	}
}

function set_error_message(obj, response_json) {
	if (response_json.message) {
		obj.innerHTML = response_json.message
	} else if (response_json.errors) {
		obj.innerHTML = response_json.errors.join(", ")
	} else {
		obj.innerHTML = ""
	}
}

var inputmodesMap = {
	"1key": "1K",
	"2key": "2K",
	"3key": "3K",
	"4key": "4K",
	"5key": "5K",
	"6key": "6K",
	"7key": "7K",
	"8key": "8K",
	"9key": "9K",
	"10key": "10K",
	"12key": "12K",
	"14key": "14K",
	"16key": "16K",
	"18key": "18K",
	"20key": "20K",
	"5key1scratch": "5K1S",
	"7key1scratch": "7K1S",
	"10key2scratch": "10K2S",
	"14key2scratch": "14K2S",
	"24key": "24K",
	"48key": "48K",
	"88key": "88K",
	"4bt2fx2laserleft2laserright": "SDVX",
}

function inputmodesToString(inputmodes) {
	return Array.isArray(inputmodes) ? inputmodes.map((i) => inputmodesMap[i.inputmode]).join(', ') : ''
}

function toArray(a) {
	return Array.isArray(a) ? a : []
}

function formatDate(time) {
	// return new Date(time * 1e3).toUTCString()
	return new Date(time * 1e3).toLocaleString()
}

async function _get(url, obj) {
	let params = obj ? encode_get_params(obj) : ''
	let response = await fetch(url + params, {
		method: 'GET',
		credentials: 'same-origin'
	})
	if (!response.ok && await handle_not_ok(response)) return false
	let response_json = await response.json()
	return response_json
}

async function _fetch(url, obj, method) {
	let response
	if (obj) {
		response = await fetch(url, {
			method: method,
			body: JSON.stringify(obj),
			headers: {'Content-Type': 'application/json'},
			credentials: 'same-origin'
		})
	} else {
		response = await fetch(url, {
			method: method,
			credentials: 'same-origin'
		})
	}
	if (!response.ok && await handle_not_ok(response)) return false
	let response_json = await response.json()
	return response_json
}

async function _post(url, obj) {
	return await _fetch(url, obj, "POST")
}

async function _patch(url, obj) {
	return await _fetch(url, obj, "PATCH")
}

async function _put(url, obj) {
	return await _fetch(url, obj, "PUT")
}

async function _delete(url, obj) {
	return await _fetch(url, obj, "DELETE")
}

// https://stackoverflow.com/questions/11866781/how-do-i-convert-an-integer-to-a-javascript-color/11866980
function toColor(num) {
	num >>>= 0;
	var b = num & 0xFF,
		g = (num & 0xFF00) >>> 8,
		r = (num & 0xFF0000) >>> 16,
		a = 1;
		// a = ((num & 0xFF000000) >>> 24) / 255;
	return "rgba(" + [r, g, b, a].join(",") + ")";
}

function userLink(user) {
	if (user) {
		return `
			<a href="/users/${user.id}"
			style="
			background: linear-gradient(45deg, ${toColor(user.color_left)}, ${toColor(user.color_right)});
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			">${user.name}</a>
			`
	}
	return ''
}

function communityLink(community) {
	if (community) {
		return '<a href="/communities/' + community.id + '">' + community.name + '</a>'
	}
	return ''
}

function leaderboardLink(leaderboard) {
	if (leaderboard) {
		return '<a href="/leaderboards/' + leaderboard.id + '">' + leaderboard.name + '</a>'
	}
	return ''
}

function difftableLink(difftable) {
	if (difftable) {
		return '<a href="/difftables/' + difftable.id + '">' + difftable.name + '</a>'
	}
	return ''
}

function notechartLink(notechart) {
	if (notechart) {
		return '<a href="/notecharts/' + notechart.id + '">' + notechart.difficulty_name + '</a>'
	}
	return ''
}
