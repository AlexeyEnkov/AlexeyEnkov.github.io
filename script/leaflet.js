if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'leaflet'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'leaflet'.");
}
var leaflet = function (_, Kotlin) {
  'use strict';
  var clear = Kotlin.kotlin.dom.clear_asww5s$;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  function Content(input, button, textDiv) {
    this.input = input;
    this.button = button;
    this.textDiv = textDiv;
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
  Content.prototype.component3 = function () {
    return this.textDiv;
  };
  Content.prototype.copy_dh19x6$ = function (input, button, textDiv) {
    return new Content(input === void 0 ? this.input : input, button === void 0 ? this.button : button, textDiv === void 0 ? this.textDiv : textDiv);
  };
  Content.prototype.toString = function () {
    return 'Content(input=' + Kotlin.toString(this.input) + (', button=' + Kotlin.toString(this.button)) + (', textDiv=' + Kotlin.toString(this.textDiv)) + ')';
  };
  Content.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.input) | 0;
    result = result * 31 + Kotlin.hashCode(this.button) | 0;
    result = result * 31 + Kotlin.hashCode(this.textDiv) | 0;
    return result;
  };
  Content.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.input, other.input) && Kotlin.equals(this.button, other.button) && Kotlin.equals(this.textDiv, other.textDiv)))));
  };
  function main$lambda(it) {
    return new App();
  }
  function main(args) {
    window.onload = main$lambda;
  }
  function App() {
    this.map_0 = null;
    this.textDiv_0 = null;
    var content = this.generateContent();
    this.textDiv_0 = content.textDiv;
    this.map_0 = new Leaflet('mapId');
    content.button.onclick = App_init$lambda(content, this);
  }
  App.prototype.generateContent = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var mapDiv = Kotlin.isType(tmp$ = document.createElement('div'), HTMLElement) ? tmp$ : Kotlin.throwCCE();
    mapDiv.id = 'mapId';
    mapDiv.style.height = '300px';
    var input = Kotlin.isType(tmp$_0 = document.createElement('input'), HTMLInputElement) ? tmp$_0 : Kotlin.throwCCE();
    input.id = 'inputId';
    input.value = '72';
    var buttonDiv = Kotlin.isType(tmp$_1 = document.createElement('div'), HTMLDivElement) ? tmp$_1 : Kotlin.throwCCE();
    buttonDiv.id = 'buttonId';
    buttonDiv.innerText = 'Search';
    buttonDiv.style.color = 'green';
    buttonDiv.style.display = 'inline-block';
    var textDiv = Kotlin.isType(tmp$_2 = document.createElement('div'), HTMLDivElement) ? tmp$_2 : Kotlin.throwCCE();
    textDiv.id = 'textDiv';
    textDiv.style.height = '50px';
    var body = (tmp$_3 = document.body) != null ? tmp$_3 : Kotlin.throwNPE();
    body.appendChild(input);
    body.appendChild(buttonDiv);
    body.appendChild(mapDiv);
    body.appendChild(textDiv);
    return new Content(input, buttonDiv, textDiv);
  };
  function App$query$lambda(this$App) {
    return function (it) {
      this$App.showText_61zpoe$('before json parse');
      return it.json();
    };
  }
  function App$query$lambda_0(this$App, closure$map) {
    return function (it) {
      this$App.showText_61zpoe$('after json parse');
      var elements = it.elements;
      this$App.showText_61zpoe$('after elements to array');
      var tmp$;
      for (tmp$ = 0; tmp$ !== elements.length; ++tmp$) {
        var element = elements[tmp$];
        var tmp$_0, tmp$_1, tmp$_2, tmp$_3;
        closure$map.addMarker_lu1900$((tmp$_1 = element.lat) != null ? tmp$_1 : ((tmp$_0 = element.center) != null ? tmp$_0 : Kotlin.throwNPE()).lat, (tmp$_3 = element.lon) != null ? tmp$_3 : ((tmp$_2 = element.center) != null ? tmp$_2 : Kotlin.throwNPE()).lon);
      }
      this$App.showText_61zpoe$('after marker');
    };
  }
  function App$query$lambda_1(this$App) {
    return function (it) {
      this$App.showText_61zpoe$(it.toString());
    };
  }
  App.prototype.query_bws5j5$ = function (number, map) {
    this.showText_61zpoe$('query begin');
    this.clear();
    var bounds = map.getBounds();
    this.showText_61zpoe$('bounds');
    var query = '[out:json];(' + ('node[' + '"' + 'addr:housenumber' + '"' + '=' + '"' + number + '"' + ']') + (bounds + ';') + ('way[' + '"' + 'addr:housenumber' + '"' + '=' + '"' + number + '"' + ']') + (bounds + ';') + ('rel[' + '"' + 'addr:housenumber' + '"' + '=' + '"' + number + '"' + ']') + (bounds + ';') + ');out center;';
    this.showText_61zpoe$('beforeFetch');
    window.fetch('https://overpass-api.de/api/interpreter?data=' + query).then(App$query$lambda(this)).then(App$query$lambda_0(this, map)).catch(App$query$lambda_1(this));
    this.showText_61zpoe$('afterFetch');
  };
  App.prototype.showText_61zpoe$ = function (s) {
    var tmp$;
    var text = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : Kotlin.throwCCE();
    text.className = 'text';
    text.innerText = s;
    this.textDiv_0.appendChild(text);
  };
  App.prototype.clear = function () {
    clear(this.textDiv_0);
    this.map_0.clearAllMarkers();
  };
  function App_init$lambda(closure$content, this$App) {
    return function (it) {
      this$App.query_bws5j5$(closure$content.input.value, this$App.map_0);
    };
  }
  App.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'App',
    interfaces: []
  };
  function OSMElement(type, id, center, lat, lon) {
    this.type = type;
    this.id = id;
    this.center = center;
    this.lat = lat;
    this.lon = lon;
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
  function Leaflet(mapId) {
    this.map_0 = L.map(mapId).setView([55.85, 38.46], 13);
    this.markers_0 = null;
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', new Leaflet_init$ObjectLiteral()).addTo(this.map_0);
    this.markers_0 = HashSet_init();
  }
  Leaflet.prototype.getBounds = function () {
    var bounds = this.map_0.getBounds();
    return '(' + bounds._southWest.lat + ',' + bounds._southWest.lng + ',' + bounds._northEast.lat + ',' + bounds._northEast.lng + ')';
  };
  Leaflet.prototype.addMarker_lu1900$ = function (lat, lon) {
    var marker = L.marker([lat, lon]);
    marker.addTo(this.map_0);
    this.markers_0.add_11rb$(marker);
  };
  Leaflet.prototype.clearAllMarkers = function () {
    var tmp$;
    tmp$ = this.markers_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.remove();
    }
  };
  function Leaflet_init$ObjectLiteral() {
    this.attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap<\/a> contributors';
  }
  Leaflet_init$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  Leaflet.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Leaflet',
    interfaces: []
  };
  var package$ru = _.ru || (_.ru = {});
  var package$spb = package$ru.spb || (package$ru.spb = {});
  var package$enkov = package$spb.enkov || (package$spb.enkov = {});
  var package$leaflet = package$enkov.leaflet || (package$enkov.leaflet = {});
  package$leaflet.Content = Content;
  package$leaflet.main_kand9s$ = main;
  package$leaflet.App = App;
  package$leaflet.OSMElement = OSMElement;
  package$leaflet.Coord = Coord;
  package$leaflet.Leaflet = Leaflet;
  Kotlin.defineModule('leaflet', _);
  main([]);
  return _;
}(typeof leaflet === 'undefined' ? {} : leaflet, kotlin);
