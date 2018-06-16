var definitions = [];
var define = function(name, requirements, f) {
    definitions.push({
        name: name,
        requirements: requirements.slice(2),
        execute: f
    });
};
var startApp = function() {
    var registeredModules = {
        'std/CodinGame': {
            readline: readline,
            print: print,
            printErr: printErr
        }
    };
    var canBeRegistered = function(requirements) {
        for (var idx = 0 ; idx !== requirements.length ; ++idx) {
            if (!registeredModules.hasOwnProperty(requirements[idx]))
                return false;
        }
        return true;
    };
    while (true) {
        for (var idx = 0 ; idx !== definitions.length ; ++idx) {
            var def = definitions[idx];
            if (registeredModules.hasOwnProperty(def.name)) continue;
            if (!canBeRegistered(def.requirements)) continue;
            printErr('Registration of ' + def.name);
            var registration = {};
            var params = [null, registration];
            for (var rid = 0 ; rid !== def.requirements.length ; ++rid) {
                params.push(registeredModules[def.requirements[rid]]);
            }
            def.execute.apply(/*this*/null, params);
            registeredModules[def.name] = registration;
            printErr('Registration done');
        }
    }
};

// YOUR CODE HERE
// YOUR CODE HERE
// YOUR CODE HERE
// YOUR CODE HERE
// YOUR CODE HERE

// Copy-paste the content of lib/bundle.js here

// YOUR CODE HERE
// YOUR CODE HERE
// YOUR CODE HERE
// YOUR CODE HERE
// YOUR CODE HERE

startApp();
