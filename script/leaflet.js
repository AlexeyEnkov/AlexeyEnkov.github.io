if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'leaflet'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'leaflet'.");
}
var leaflet = function (_, Kotlin) {
  'use strict';
  function Content(input, button) {
    this.input = input;
    this.button = button;
  }
  Content.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Content',
    interfaces: []
  };
  Content.prototype.component1 = function () {
    return this.input;
  };
  Content.prototype.component2 = function () {
    return this.button;
  };
  Content.prototype.copy_33ptfp$ = function (input, button) {
    return new Content(input === void 0 ? this.input : input, button === void 0 ? this.button : button);
  };
  Content.prototype.toString = function () {
    return 'Content(input=' + Kotlin.toString(this.input) + (', button=' + Kotlin.toString(this.button)) + ')';
  };
  Content.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.input) | 0;
    result = result * 31 + Kotlin.hashCode(this.button) | 0;
    return result;
  };
  Content.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.input, other.input) && Kotlin.equals(this.button, other.button)))));
  };
  function main$lambda(it) {
    init();
  }
  function main(args) {
    window.onload = main$lambda;
  }
  function init$ObjectLiteral() {
    this.attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap<\/a> contributors';
  }
  init$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function init$lambda(closure$content, closure$map) {
    return function (it) {
      query(closure$content.input.value, closure$map);
    };
  }
  function init() {
    var content = generateContent();
    var map = L.map('mapId').setView([55.85, 38.46], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', new init$ObjectLiteral()).addTo(map);
    content.button.onclick = init$lambda(content, map);
  }
  function generateContent() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var mapDiv = Kotlin.isType(tmp$ = document.createElement('div'), HTMLElement) ? tmp$ : Kotlin.throwCCE();
    mapDiv.id = 'mapId';
    mapDiv.style.height = '600px';
    var input = Kotlin.isType(tmp$_0 = document.createElement('input'), HTMLInputElement) ? tmp$_0 : Kotlin.throwCCE();
    input.id = 'inputId';
    input.value = '72';
    var buttonDiv = Kotlin.isType(tmp$_1 = document.createElement('div'), HTMLDivElement) ? tmp$_1 : Kotlin.throwCCE();
    buttonDiv.id = 'buttonId';
    buttonDiv.innerText = 'Search';
    buttonDiv.style.color = 'green';
    buttonDiv.style.display = 'inline-block';
    var body = (tmp$_2 = document.body) != null ? tmp$_2 : Kotlin.throwNPE();
    body.appendChild(mapDiv);
    body.appendChild(input);
    body.appendChild(buttonDiv);
    return new Content(input, buttonDiv);
  }
  function query$lambda(it) {
    showText('before json parse');
    return it.json();
  }
  function query$lambda_0(closure$map) {
    return function (it) {
      showText('after json parse');
      var elements = it.elements;
      showText('after elements to array');
      var tmp$;
      for (tmp$ = 0; tmp$ !== elements.length; ++tmp$) {
        var element = elements[tmp$];
        var closure$map_0 = closure$map;
        L.marker([element.center.lat, element.center.lon]).addTo(closure$map_0);
      }
      showText('after marker');
    };
  }
  function query$lambda_1(it) {
    showText(it.toString());
  }
  function query(number, map) {
    showText('query begin');
    var bounds = getBounds(map);
    showText('bounds');
    var query_0 = '[out:json];(' + ('node[' + '"' + 'addr:housenumber' + '"' + '=' + '"' + number + '"' + ']') + (bounds + ';') + ('way[' + '"' + 'addr:housenumber' + '"' + '=' + '"' + number + '"' + ']') + (bounds + ';') + ('rel[' + '"' + 'addr:housenumber' + '"' + '=' + '"' + number + '"' + ']') + (bounds + ';') + ');out center;';
    showText('beforeFetch');
    if (!window.fetch) showText("window.fetch missing")
    window.fetch('https://overpass-api.de/api/interpreter?data=' + query_0).then(query$lambda).then(query$lambda_0(map)).catch(query$lambda_1);
    showText('afterFetch');
  }
  function getBounds(map) {
    var bounds = map.getBounds();
    return '(' + bounds._southWest.lat + ',' + bounds._southWest.lng + ',' + bounds._northEast.lat + ',' + bounds._northEast.lng + ')';
  }
  function showText(s) {
    var tmp$, tmp$_0;
    var text = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : Kotlin.throwCCE();
    text.className = 'text';
    text.innerText = s;
    ((tmp$_0 = document.body) != null ? tmp$_0 : Kotlin.throwNPE()).appendChild(text);
  }
  function OSMElement(type, id, center) {
    this.type = type;
    this.id = id;
    this.center = center;
  }
  OSMElement.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'OSMElement',
    interfaces: []
  };
  function Coord(lat, lon) {
    this.lat = lat;
    this.lon = lon;
  }
  Coord.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Coord',
    interfaces: []
  };
  var package$ru = _.ru || (_.ru = {});
  var package$spb = package$ru.spb || (package$ru.spb = {});
  var package$enkov = package$spb.enkov || (package$spb.enkov = {});
  var package$leaflet = package$enkov.leaflet || (package$enkov.leaflet = {});
  package$leaflet.Content = Content;
  package$leaflet.main_kand9s$ = main;
  package$leaflet.init = init;
  package$leaflet.generateContent = generateContent;
  package$leaflet.query_bm4g0d$ = query;
  package$leaflet.getBounds_za3rmp$ = getBounds;
  package$leaflet.showText_61zpoe$ = showText;
  package$leaflet.OSMElement = OSMElement;
  package$leaflet.Coord = Coord;
  Kotlin.defineModule('leaflet', _);
  main([]);
  return _;
}(typeof leaflet === 'undefined' ? {} : leaflet, kotlin);
