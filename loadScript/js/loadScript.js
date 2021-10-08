
function loadScript(pathOrCallback, callback) {
    if (typeof pathOrCallback === 'function') {
        pathOrCallback();
    } else if (Array.isArray(pathOrCallback)) {
        recursiveLoad(pathOrCallback, 0, callback);
    } else {
        checkAndLoad(pathOrCallback, callback);
    }
}

function recursiveLoad(paths, i, callback) {
    if (i >= paths.length) {
        callback();
        return;
    }
    checkAndLoad(paths[i], () => recursiveLoad(paths, ++i, callback));
}

function checkAndLoad(scriptName, onloadCallback) {
    if (checkDependancy(scriptName)) {
        onloadCallback();
        return;
    }
    const script = document.createElement('script');
    document.head.appendChild(script);
    script.onload = onloadCallback;
    script.src = scriptName;
}


function checkDependancy(name) {
    let elements = [...document.head.children];

    for (let i = 0; i < elements.length; i++) {
        let el = elements[i];
        if (el.tagName === 'SCRIPT' && el.getAttribute("src").endsWith(name)) {
            return true;
        }
    }
    return false;
}
