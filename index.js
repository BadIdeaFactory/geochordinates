/** PLEASE REFER TO GLOSSARY.md FOR A GLOSSARY OF TERMS **/

/**
 * Given a BIFFUD Chord Index, return a chord.
 * @param  integer index     an integer between 0 and 109735
 * @return [integer]         an array of three semitone offsets
 */
var chordFromBci = function(index) {}


/**
 * Given a chord, return a BIFFUD Chord Index
 * @param  [integer] chord    an array of three semitone offsets
 * @return integer            an integer between 0 and 109735
 */
var bciFromChord = function(chord) {}


/**
 * Given a lat, lng, and precision return a chord coord progression
 * @param  number lat         the lattitude
 * @param  number lng         the longitude
 * @param  number precision   the length of the resulting coord progression
 * @return [[integer]]        an array of arrays of three semitone offsets
 */
var chordsFromCoords = function(lat, lng, precision) {}


/**
 * Given a chord coord progression, return a coordinate
 * @param  [[integer]] chords   an array of arrays of three semitone offsets
 * @return Object               a location object containing a lat / lng
 */
var coordsFromChords = function (chords) {}


/**
 * Given a lat, lng, and precision return a BCI coord progression
 * @param  Number lat         the lattitude
 * @param  Number lng         the longitude
 * @param  Number precision   how far into the coord progression we want to go
 * @return [integer]          an array of BCIs
 */
var bcisFromCoords = function (lat, lng, precision) {}


/**
 * Given a BCI coord progression, return a coordinate
 * @param  bcis        an array of integers between 0 and 109735
 * @return Object      a location object containing a lat / lng
 */
var coordsFromBcis = function(bcis) {}


/**
 * Given a lat, lng, and precision return a sound file playing the coord progression
 * @param  Number lat         the lattitude
 * @param  Number lng         the longitude
 * @param  Number precision   how far into the coord progression we want to go
 * @return String             a URL pointing to the resulting wav file
 */
var wavFromCoords = function(lat, lng, precision) {}

/**
 * Given a wav file, attempt to identify the coord progression and return the resulting location
 * @param  String url   a URL pointing to a wav file for analysis
 * @return Object       a location object containing a lat / lng
 */
var coordsFromWav = function(url) {}


/**
 * Given an array of three semitone offsets, return an array of three string based representations of the chord.
 * @param  [integer] chord  an array of three semitone offsets
 * @param  String format    The format type (TODO: list the options here)
 * @return [String]         an array of three string representations of notes
 */
var notesFromChord = function(chord, format) {}


// Export these methods for the world to use
if (typeof exports !== "undefined") {
  exports.chordFromBci = chordFromBci;
  exports.bciFromChord = bciFromChord;

  exports.chordsFromCoords = chordsFromCoords;
  exports.coordsFromChords = coordsFromChords;

  exports.bcisFromCoords = bcisFromCoords;
  exports.coordsFromBcis = coordsFromBcis;

  exports.wavFromCoords = wavFromCoords;
  exports.coordsFromWav = coordsFromWav;

  exports.notesFromChord = notesFromChord;
}
