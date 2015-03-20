"use strict";

var jsdom = require("../..");

exports["unknown elements should return HTMLUnknownElement"] = function (t) {
  t.expect(2);

  var doc = jsdom.jsdom();

  var el = doc.createElement("foobar");
  t.ok(el instanceof doc.defaultView.HTMLUnknownElement, "unknown element should inherit from HTMLUnknownElement");
  t.ok(el instanceof doc.defaultView.HTMLElement, "unknown element should inherit from HTMLElement too");

  t.done();
};

exports["other elements should have their respective types"] = function (t) {
  t.expect(2);

  var doc = jsdom.jsdom();

  var el = doc.createElement("div");
  t.ok(el instanceof doc.defaultView.HTMLDivElement, "div element should inherit from HTMLDivElement");
  t.ok(el instanceof doc.defaultView.HTMLElement, "div element should inherit from HTMLElement too");

  t.done();
};
