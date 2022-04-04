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
	alert(response.status + ' ' + response.statusText)
	let response_json = await response.json()
	if (response_json.trace) {
		console.log(response_json.err)
		console.log(response_json.trace)
	}
	return response
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
	"26key": "26K",
	"48key": "48K",
	"88key": "88K",
	"4bt2fx2laserleft2laserright": "SDVX",
}

function inputmodesToString(inputmodes) {
	return Array.isArray(inputmodes) ? inputmodes.map((i) => inputmodesMap[i.inputmode]).join(', ') : ''
}

function rolesToText(roles) {
	return Array.isArray(roles) ? roles.map((i) => i.role).join(', ') : ''
}

var rolesMap = {
	creator: ['badge role-badge bg-teal', 'Creator', 'CRR'],
	admin: ['badge role-badge bg-teal', 'Admin', 'ADM'],
	moderator: ['badge role-badge bg-teal', 'Moderator', 'MOD'],
	donator: ['badge role-badge bg-teal', 'Donator', 'DNR'],
	contributor: ['badge role-badge bg-blue', 'Contributor', 'CTR'],
}

function rolesToHtml(roles) {
	return Array.isArray(roles) ? roles.filter((i) => !i.is_expired).map(function(i) {
		return `
			<span
				class="${rolesMap[i.role][0]}"
				title="${rolesMap[i.role][1]} expires at ${formatDate(i.expires_at)}"
			>
				${rolesMap[i.role][2]}
			</span>`
	}
	).join(', ') : ''
}

function userCommunitiesToHtml(user_communities) {
	return Array.isArray(user_communities) ? user_communities.filter((i) => i.accepted).map((i) => communityAliasLink(i.community)).join(', ') : ''
}

function toArray(a) {
	return Array.isArray(a) ? a : []
}

function formatDate(time) {
	// return new Date(time * 1e3).toUTCString()
	return new Date(time * 1e3).toLocaleString()
}

function formatScore(score, mul, digits) {
	if (!score) return ""
	return (score * mul).toFixed(digits)
}

async function _get(url, obj) {
	let params = obj ? encode_get_params(obj) : ''
	let response = await fetch(url + params, {
		method: 'GET',
		credentials: 'same-origin'
	})
	if (!response.ok && response.status >= 500) return await handle_not_ok(response)
	return response
	// let response_json
	// await response.json().then((res_json) => response_json = res_json).catch(() => (response_json = null))
	// return [response_json, response.status, response.headers]
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
	if (!response.ok && response.status >= 500) return await handle_not_ok(response)
	return response
	// await response.json().then((res_json) => response_json = res_json).catch(() => (response_json = null))
	// return [response_json, response.status, response.headers]
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

// https:/stackoverflow.com/questions/35466604/convert-hexadecimal-color-to-integer-in-javascript
function VBColorToHEX(i) {
    var bbggrr =  ("000000" + i.toString(16)).slice(-6);
    var rrggbb = bbggrr.substr(4, 2) + bbggrr.substr(2, 2) + bbggrr.substr(0, 2);
    return "#" + rrggbb;
}
function HEXToVBColor(rrggbb) {
    var bbggrr = rrggbb.substr(5, 2) + rrggbb.substr(3, 2) + rrggbb.substr(1, 2);
    return parseInt(bbggrr, 16);
}

function userLink(user) {
	if (user) {
		return `
			<a href="/users/${user.id}"
			style="
			background: linear-gradient(45deg, ${VBColorToHEX(user.color_left)}, ${VBColorToHEX(user.color_right)});
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

function communityAliasLink(community) {
	if (community) {
		return '<a href="/communities/' + community.id + '">' + community.alias + '</a>'
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

function renderBlurhashBanner(blurhash) {
	const validRes = isBlurhashValid(blurhash)
	if (!validRes.result) {
		return "/resources/banner.jpg"
	}

	const pixels = blurhashDecode(blurhash, 32, 32)

	const canvas = document.createElement("canvas")
    canvas.width = 32
    canvas.height = 32
	const ctx = canvas.getContext("2d")
	const imageData = ctx.createImageData(32, 32)
	imageData.data.set(pixels)
	ctx.putImageData(imageData, 0, 0)

	// canvas.style.background = canvas.toDataURL("image/jpeg")

	return canvas.toDataURL("image/jpeg")
	// document.body.style.background = imageData

	// element.appendChild(canvas)
}

const loadImage = async src => new Promise((resolve, reject) => {
	const img = new Image()
	img.onload = () => resolve(img)
	img.onerror = (...args) => reject(args)
	img.src = src
})

const getImageData = image => {
	const canvas = document.createElement("canvas")
	canvas.width = image.width
	canvas.height = image.height
	const context = canvas.getContext("2d")
	context.drawImage(image, 0, 0)
	return context.getImageData(0, 0, image.width, image.height)
}

const encodeImageToBlurhash = async imageUrl => {
	const image = await loadImage(imageUrl)
	const imageData = getImageData(image)
	return blurhashEncode(imageData.data, imageData.width, imageData.height, 4, 3)
}

function encodeBlurhashFromInput(e, cb) {
	var input = e.target
	if (input.files[0].size > 102400) {
		alert("File is too big!")
		input.value = ""
		return
	}
	var fReader = new FileReader()
	fReader.readAsDataURL(e.target.files[0])
	fReader.onloadend = function(event) {
		encodeImageToBlurhash(event.target.result).then(cb)
	}
}
