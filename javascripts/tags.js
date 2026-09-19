// From 1ForeverHD's documentation for ZonePlus
// Find his repo here: https://github.com/1ForeverHD/ZonePlus/
// Find this file specifically here: https://github.com/1ForeverHD/ZonePlus/blob/main/docs/javascripts/tags.js

const style = `.tag {
    color: #ffffff;
    line-height: .8rem;
    padding: 5px;
    margin: 0 !important;
    vertical-align: baseline;
    background-clip: padding-box;
    border-radius: 3px;
    display: inline-block;
    font-size: .7rem;
    font-family: "Roboto";
    font-weight: normal;
}
.static {
    background-color: rgb(38, 70, 83);
}
.read-only {
    background-color: rgb(42, 157, 143);
}
.client-only {
    background-color: rgb(89, 140, 206);
}
.server-only {
    background-color: rgb(89, 140, 206);
}
.toggleable {
    background-color: rgb(178, 92, 162);
}
.chainable {
    background-color: rgb(122, 103, 231);
}
.unstable {
    background-color: rgb(204, 134, 80);
}
.deprecated {
    background-color: rgb(227, 87, 75);
}
.version4 {
    background-color: rgb(78, 141, 82);
}
.version3 {
    background-color: rgb(198, 127, 55);
}
h4 {
    display: inline;
}`

// token -> [css class, label]
var replaceStuff = {
	"{read-only}": ["read-only", "read-only"],
	"{static}": ["static", "static"],
	"{server-only}": ["server-only", "server-only"],
	"{client-only}": ["client-only", "client-only"],
	"{deprecated}": ["deprecated", "deprecated"],
	"{chainable}": ["chainable", "chainable"],
	"{unstable}": ["unstable", "unstable"],
	"{toggleable}": ["toggleable", "toggleable"],
	"{version4}": ["version4", "only in V4+"],
	"{version3}": ["version3", "only in V3+"],
};

// Tokens are matched inside text, so don't touch code samples
const skipElements = ["CODE", "PRE", "SCRIPT", "STYLE", "TEXTAREA"];
const tagPattern = new RegExp(
	Object.keys(replaceStuff).map(token => token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"),
	"g"
);

function buildTag(token) {
	const [className, label] = replaceStuff[token];
	const element = document.createElement("span");
	element.className = "tag " + className;
	element.textContent = label;
	return element;
}

// Swaps every token in a text node for its tag, keeping the surrounding text
function replaceInText(node) {
	const text = node.textContent;
	tagPattern.lastIndex = 0;
	if (!text || !tagPattern.test(text)) return;

	const fragment = document.createDocumentFragment();
	var cursor = 0;
	var match;

	tagPattern.lastIndex = 0;
	while ((match = tagPattern.exec(text)) !== null) {
		if (match.index > cursor) {
			fragment.appendChild(document.createTextNode(text.slice(cursor, match.index)));
		}
		fragment.appendChild(buildTag(match[0]));
		cursor = match.index + match[0].length;
	}
	if (cursor < text.length) {
		fragment.appendChild(document.createTextNode(text.slice(cursor)));
	}

	node.replaceWith(fragment);
};

function replace(element) {
	if (skipElements.includes(element.tagName)) return;
	// childNodes is live and we swap nodes out as we go, so walk a copy
	Array.from(element.childNodes).forEach(child => {
		if (child.nodeType === Node.TEXT_NODE) {
			replaceInText(child);
		} else if (child.nodeType === Node.ELEMENT_NODE) {
			replace(child);
		}
	});
};

replace(document.body);

const styleElement = document.createElement("style")
styleElement.innerHTML = style

document.head.appendChild(styleElement)