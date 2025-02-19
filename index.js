var BISAC = require("./data/bisac.json");
var capitalize = require("capitalize");

// Return a bisac subject by its code
var getByCode = function(code) {
    for (var i in BISAC) {
        var subject = BISAC[i];
        if (subject.code == code) {
            return subject;
        }
    }
    return null;
};

// Return a bisac subject by its label
var getByLabel = function(code) {
    code = code.toLowerCase();
    for (var i in BISAC) {
        var subject = BISAC[i];
        if (subject.label.toLowerCase() == code) {
            return subject;
        }
    }
    return null;
};

// Categories
var getGenerals = function() {
    var generals = [];

    for (var i in BISAC) {
        var subject = BISAC[i];
        if (subject.code.slice(3) == "000000") {
            generals.push({
                code: subject.code,
                label: subject.label,
                title: capitalize.words(subject.label.replace(" / General", "").toLowerCase())
            });
        }
    }

    return generals;
};

// Return a bisac subject by its label substring
var searchByLabel = function(query) {
    var subjects = [];
    query = query.toLowerCase()
    for (var subject of BISAC)
        if (subject.label.toLowerCase().search(query) + 1)
            subjects.push(subject);
    return subjects;
}

module.exports = {
    byCode: getByCode,
    byLabel: getByLabel,
    search: searchByLabel,
    getGenerals: getGenerals,
    all: {
        bisac: BISAC
    }
};
