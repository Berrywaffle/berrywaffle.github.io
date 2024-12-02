(function(window, undefined) {
  var dictionary = {
    "2b703581-750d-44d3-8f07-046c8f01795c": "Editor",
    "71ae8600-263f-40e9-bec9-10d02fb36e8e": "Create account",
    "b34bfd01-000c-4dfd-85e3-1837ab202a2f": "Landing Page - Signed In",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Landing Page - No Account",
    "e37926ee-d0f1-408f-b1f4-458b5063e27a": "Setting Up Project",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);