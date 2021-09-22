(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.translate = factory());
}(this, (function () { 'use strict';

var iso = [
  "aa", "ab", "ae", "af", "ak", "am", "an", "ar", "as", "av", "ay", "az", "ba",
  "be", "bg", "bh", "bi", "bm", "bn", "bo", "br", "bs", "ca", "ce", "ch", "co",
  "cr", "cs", "cu", "cv", "cy", "da", "de", "dv", "dz", "ee", "el", "en", "eo",
  "es", "et", "eu", "fa", "ff", "fi", "fj", "fo", "fr", "fy", "ga", "gd", "gl",
  "gn", "gu", "gv", "ha", "he", "hi", "ho", "hr", "ht", "hu", "hy", "hz", "ia",
  "id", "ie", "ig", "ii", "ik", "io", "is", "it", "iu", "ja", "jv", "ka", "kg",
  "ki", "kj", "kk", "kl", "km", "kn", "ko", "kr", "ks", "ku", "kv", "kw", "ky",
  "la", "lb", "lg", "li", "ln", "lo", "lt", "lu", "lv", "mg", "mh", "mi", "mk",
  "ml", "mn", "mr", "ms", "mt", "my", "na", "nb", "nd", "ne", "ng", "nl", "nn",
  "no", "nr", "nv", "ny", "oc", "oj", "om", "or", "os", "pa", "pi", "pl", "ps",
  "pt", "qu", "rm", "rn", "ro", "ru", "rw", "sa", "sc", "sd", "se", "sg", "si",
  "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sv", "sw", "ta",
  "te", "tg", "th", "ti", "tk", "tl", "tn", "to", "tr", "ts", "tt", "tw", "ty",
  "ug", "uk", "ur", "uz", "ve", "vi", "vo", "wa", "wo", "xh", "yi", "yo", "za",
  "zh", "zu"
];

var iso2 = {
  "﻿aar": "aa", "abk": "ab", "afr": "af", "aka": "ak", "alb": "sq", "amh": "am",
  "ara": "ar", "arg": "an", "arm": "hy", "asm": "as", "ava": "av", "ave": "ae",
  "aym": "ay", "aze": "az", "bak": "ba", "bam": "bm", "baq": "eu", "bel": "be",
  "ben": "bn", "bih": "bh", "bis": "bi", "bos": "bs", "bre": "br", "bul": "bg",
  "bur": "my", "cat": "ca", "cha": "ch", "che": "ce", "chi": "zh", "chu": "cu",
  "chv": "cv", "cor": "kw", "cos": "co", "cre": "cr", "cze": "cs", "dan": "da",
  "div": "dv", "dut": "nl", "dzo": "dz", "eng": "en", "epo": "eo", "est": "et",
  "ewe": "ee", "fao": "fo", "fij": "fj", "fin": "fi", "fre": "fr", "fry": "fy",
  "ful": "ff", "geo": "ka", "ger": "de", "gla": "gd", "gle": "ga", "glg": "gl",
  "glv": "gv", "gre": "el", "grn": "gn", "guj": "gu", "hat": "ht", "hau": "ha",
  "heb": "he", "her": "hz", "hin": "hi", "hmo": "ho", "hrv": "hr", "hun": "hu",
  "ibo": "ig", "ice": "is", "ido": "io", "iii": "ii", "iku": "iu", "ile": "ie",
  "ina": "ia", "ind": "id", "ipk": "ik", "ita": "it", "jav": "jv", "jpn": "ja",
  "kal": "kl", "kan": "kn", "kas": "ks", "kau": "kr", "kaz": "kk", "khm": "km",
  "kik": "ki", "kin": "rw", "kir": "ky", "kom": "kv", "kon": "kg", "kor": "ko",
  "kua": "kj", "kur": "ku", "lao": "lo", "lat": "la", "lav": "lv", "lim": "li",
  "lin": "ln", "lit": "lt", "ltz": "lb", "lub": "lu", "lug": "lg", "mac": "mk",
  "mah": "mh", "mal": "ml", "mao": "mi", "mar": "mr", "may": "ms", "mlg": "mg",
  "mlt": "mt", "mon": "mn", "nau": "na", "nav": "nv", "nbl": "nr", "nde": "nd",
  "ndo": "ng", "nep": "ne", "nno": "nn", "nob": "nb", "nor": "no", "nya": "ny",
  "oci": "oc", "oji": "oj", "ori": "or", "orm": "om", "oss": "os", "pan": "pa",
  "per": "fa", "pli": "pi", "pol": "pl", "por": "pt", "pus": "ps", "que": "qu",
  "roh": "rm", "rum": "ro", "run": "rn", "rus": "ru", "sag": "sg", "san": "sa",
  "sin": "si", "slo": "sk", "slv": "sl", "sme": "se", "smo": "sm", "sna": "sn",
  "snd": "sd", "som": "so", "sot": "st", "spa": "es", "srd": "sc", "srp": "sr",
  "ssw": "ss", "sun": "su", "swa": "sw", "swe": "sv", "tah": "ty", "tam": "ta",
  "tat": "tt", "tel": "te", "tgk": "tg", "tgl": "tl", "tha": "th", "tib": "bo",
  "tir": "ti", "ton": "to", "tsn": "tn", "tso": "ts", "tuk": "tk", "tur": "tr",
  "twi": "tw", "uig": "ug", "ukr": "uk", "urd": "ur", "uzb": "uz", "ven": "ve",
  "vie": "vi", "vol": "vo", "wel": "cy", "wln": "wa", "wol": "wo", "xho": "xh",
  "yid": "yi", "yor": "yo", "zha": "za", "zul": "zu"
};

var map = {
  "afar": "aa",
  "abkhazian": "ab",
  "afrikaans": "af",
  "akan": "ak",
  "albanian": "sq",
  "amharic": "am",
  "arabic": "ar",
  "aragonese": "an",
  "armenian": "hy",
  "assamese": "as",
  "avaric": "av",
  "avestan": "ae",
  "aymara": "ay",
  "azerbaijani": "az",
  "bashkir": "ba",
  "bambara": "bm",
  "basque": "eu",
  "belarusian": "be",
  "bengali": "bn",
  "bihari languages": "bh",
  "bislama": "bi",
  "tibetan": "bo",
  "bosnian": "bs",
  "breton": "br",
  "bulgarian": "bg",
  "burmese": "my",
  "catalan": "ca",
  "valencian": "ca",
  "czech": "cs",
  "chamorro": "ch",
  "chechen": "ce",
  "chinese": "zh",
  "church slavic": "cu",
  "old slavonic": "cu",
  "church slavonic": "cu",
  "old bulgarian": "cu",
  "old church slavonic": "cu",
  "chuvash": "cv",
  "cornish": "kw",
  "corsican": "co",
  "cree": "cr",
  "welsh": "cy",
  "danish": "da",
  "german": "de",
  "divehi": "dv",
  "dhivehi": "dv",
  "maldivian": "dv",
  "dutch": "nl",
  "flemish": "nl",
  "dzongkha": "dz",
  "greek": "el",
  "english": "en",
  "esperanto": "eo",
  "estonian": "et",
  "ewe": "ee",
  "faroese": "fo",
  "persian": "fa",
  "fijian": "fj",
  "finnish": "fi",
  "french": "fr",
  "western frisian": "fy",
  "fulah": "ff",
  "georgian": "ka",
  "gaelic": "gd",
  "scottish gaelic": "gd",
  "irish": "ga",
  "galician": "gl",
  "manx": "gv",
  "guarani": "gn",
  "gujarati": "gu",
  "haitian": "ht",
  "haitian creole": "ht",
  "hausa": "ha",
  "hebrew": "he",
  "herero": "hz",
  "hindi": "hi",
  "hiri motu": "ho",
  "croatian": "hr",
  "hungarian": "hu",
  "igbo": "ig",
  "icelandic": "is",
  "ido": "io",
  "sichuan yi": "ii",
  "nuosu": "ii",
  "inuktitut": "iu",
  "interlingue": "ie",
  "occidental": "ie",
  "interlingua": "ia",
  "indonesian": "id",
  "inupiaq": "ik",
  "italian": "it",
  "javanese": "jv",
  "japanese": "ja",
  "kalaallisut": "kl",
  "greenlandic": "kl",
  "kannada": "kn",
  "kashmiri": "ks",
  "kanuri": "kr",
  "kazakh": "kk",
  "central khmer": "km",
  "kikuyu": "ki",
  "gikuyu": "ki",
  "kinyarwanda": "rw",
  "kirghiz": "ky",
  "kyrgyz": "ky",
  "komi": "kv",
  "kongo": "kg",
  "korean": "ko",
  "kuanyama": "kj",
  "kwanyama": "kj",
  "kurdish": "ku",
  "lao": "lo",
  "latin": "la",
  "latvian": "lv",
  "limburgan": "li",
  "limburger": "li",
  "limburgish": "li",
  "lingala": "ln",
  "lithuanian": "lt",
  "luxembourgish": "lb",
  "letzeburgesch": "lb",
  "luba-katanga": "lu",
  "ganda": "lg",
  "macedonian": "mk",
  "marshallese": "mh",
  "malayalam": "ml",
  "maori": "mi",
  "marathi": "mr",
  "malay": "ms",
  "malagasy": "mg",
  "maltese": "mt",
  "mongolian": "mn",
  "nauru": "na",
  "navajo": "nv",
  "navaho": "nv",
  "ndebele, south": "nr",
  "south ndebele": "nr",
  "ndebele, north": "nd",
  "north ndebele": "nd",
  "ndonga": "ng",
  "nepali": "ne",
  "norwegian nynorsk": "nn",
  "nynorsk, norwegian": "nn",
  "norwegian bokmål": "nb",
  "bokmål, norwegian": "nb",
  "norwegian": "no",
  "chichewa": "ny",
  "chewa": "ny",
  "nyanja": "ny",
  "occitan": "oc",
  "ojibwa": "oj",
  "oriya": "or",
  "oromo": "om",
  "ossetian": "os",
  "ossetic": "os",
  "panjabi": "pa",
  "punjabi": "pa",
  "pali": "pi",
  "polish": "pl",
  "portuguese": "pt",
  "pushto": "ps",
  "pashto": "ps",
  "quechua": "qu",
  "romansh": "rm",
  "romanian": "ro",
  "moldavian": "ro",
  "moldovan": "ro",
  "rundi": "rn",
  "russian": "ru",
  "sango": "sg",
  "sanskrit": "sa",
  "sinhala": "si",
  "sinhalese": "si",
  "slovak": "sk",
  "slovenian": "sl",
  "northern sami": "se",
  "samoan": "sm",
  "shona": "sn",
  "sindhi": "sd",
  "somali": "so",
  "sotho, southern": "st",
  "spanish": "es",
  "castilian": "es",
  "sardinian": "sc",
  "serbian": "sr",
  "swati": "ss",
  "sundanese": "su",
  "swahili": "sw",
  "swedish": "sv",
  "tahitian": "ty",
  "tamil": "ta",
  "tatar": "tt",
  "telugu": "te",
  "tajik": "tg",
  "tagalog": "tl",
  "thai": "th",
  "tigrinya": "ti",
  "tonga": "to",
  "tswana": "tn",
  "tsonga": "ts",
  "turkmen": "tk",
  "turkish": "tr",
  "twi": "tw",
  "uighur": "ug",
  "uyghur": "ug",
  "ukrainian": "uk",
  "urdu": "ur",
  "uzbek": "uz",
  "venda": "ve",
  "vietnamese": "vi",
  "volapük": "vo",
  "walloon": "wa",
  "wolof": "wo",
  "xhosa": "xh",
  "yiddish": "yi",
  "yoruba": "yo",
  "zhuang": "za",
  "chuang": "za",
  "zulu": "zu"
};

// Relevant ISO: ISO 639-1 & ISO 639-2. Google uses the ISO 639-1.
// Valid ISO 639-1 codes
// https://www.loc.gov/standards/iso639-2/php/code_list.php
// Extract these with this code (after loading https://superdom.site/ )
// [...dom.table[1].querySelectorAll('tbody tr')].slice(1).filter(row => !/^\s*$/.test(row.querySelector('td:nth-child(2)').textContent)).map((row, i) => `"${row.querySelector('td:nth-child(2)').textContent}", ${i % 12 === 11 ? '\n' : ''}`).join('');
// Parsed from here: https://github.com/wooorm/iso-639-2/blob/master/index.json
// Extract these with this code (after loading https://superdom.site/ ) + a lot of manual clean up
// [...dom.table[1].querySelectorAll('tbody tr')].slice(1).filter(row => !/^\s*$/.test(row.querySelector('td:nth-child(2)').textContent)).map(row =>
//   `  "${row.querySelector('td:nth-child(3)').textContent.toLowerCase()}": "${row.querySelector('td:nth-child(2)').textContent.toLowerCase()}",`
// ).join('\n');
// Language parser
//   @name: a string to be parsed
//   @output: the normalized language string
var language = name => {

  // Validate the name string
  if (typeof name !== 'string') {
    throw new Error(`The language must be a string, received ${typeof name}`);
  }
  // Possible overflow errors
  if (name.length > 100) {
    throw new Error(`The language must be a string under 100 characters, received ${name.length}`);
  }

  // Let's work with lowercase for everything
  name = name.toLowerCase();

  // Pass it through several possible maps to try to find the right one
  name = map[name] || iso2[name] || name;

  // Make sure we have the correct name or throw
  if (!iso.includes(name)) {
    throw new Error(`The name "${name}" is not part of the ISO 639-1 and we couldn't automatically parse it :(`);
  }
  return name;
};

// Translation engines
// Handle different translations differently to allow for extra flexibility


const google = {
  needkey: true,
  fetch: ({ key, from, to, text }) => [
    `https://translation.googleapis.com/language/translate/v2?key=${key}&format=text&source=${from}&target=${to}&q=${encodeURIComponent(text)}`,
    { method: 'POST' }
  ],
  detect: ({key, text}) => [
    `https://translation.googleapis.com/language/translate/v2/detect?key=${key}&format=text&q=${encodeURIComponent(text)}`,
    { method: 'POST' }
  ],
  parseFetch: res => res.json().then(body => {
    if (body.error) {
      throw new Error(body.error.errors[0].message);
    }
    body = body.data.translations[0];
    if (!body) {
      throw new Error('Translation not found');
    }
    return body.translatedText;
  }),
  parseDetect: res => res.json().then(body => {
    if (body.error) {
       throw new Error(body.error.errors[0].message);
    }
    body = body.data.detections[0][0].language
    return body
  })
};


const GoogleTranslate = function(options = {}) {
  if (!(this instanceof GoogleTranslate)) {
    return new GoogleTranslate(options);
  }

  const defaultsTranslate = {
    from: "id",
    to: "en",
    language: language,
    keys: {}
  };

  const defaultsDetect = {
    keys: {}
  }

  const translate = (text, opts = {}) => {
    if (typeof opts === "string") opts = { to: opts };
    opts.text = text;
    opts.from = language(opts.from || translate.from);
    opts.to = language(opts.to || translate.to);
    opts.keys = opts.keys || translate.keys || {};
    for (let name in translate.keys) {
      opts.keys[name] = opts.keys[name] || translate.keys[name];
    }
    opts.key = opts.key || translate.key || opts.keys[opts.engine];

    // Target is the same as origin, just return the string
    if (opts.to === opts.from) {
      return Promise.resolve(opts.text);
    }

    if (google.needkey && !opts.key) {
      throw new Error(
        `The engine google needs a key, please provide it`
      );
    }

    const fetchOpts = google.fetch(opts);
    return fetch(...fetchOpts)
      .then(google.parseFetch)
  };

  const detect = (text, opts = {}) => {
    if (typeof opts === "string") opts = { to: opts };
    opts.text = text;
    opts.keys = opts.keys || detect.keys || {};
    for (let name in detect.keys) {
      opts.keys[name] = opts.keys[name] || detect.keys[name];
    }
    opts.key = opts.key || detect.key || opts.keys[opts.engine];


    if (google.needkey && !opts.key) {
      throw new Error(
        `The engine google needs a key, please provide it`
      );
    }

    const fetchOpts = google.detect(opts);
    return fetch(...fetchOpts)
      .then(google.parseDetect)
  };

  for (let key in defaultsTranslate) {
    translate[key] =
      typeof options[key] === "undefined" ? defaultsTranslate[key] : options[key];
  }

  for (let key in defaultsDetect) {
    detect[key] =
      typeof options[key] === "undefined" ? defaultsDetect[key] : options[key];
  }

  return {
    translate,
    detect
  }
};

// Small hack needed for Webpack/Babel: https://github.com/webpack/webpack/issues/706
const exp = new GoogleTranslate();
exp.GoogleTranslate = GoogleTranslate;

return exp;

})));