/** PLEASE REFER TO GLOSSARY.md FOR A GLOSSARY OF TERMS **/


// We expect there to be lots of errors, so we've defined some custom ones
var ChordValidationError = require("./errors/ChordValidationError");
var BciValidationError = require("./errors/BciValidationError");

/**
 * Given a BIFFUD Chord Index, return a chord.
 * @param  integer bci       an integer between 0 and 109735
 * @return [integer]         an array of three semitone offsets
 */
var chordFromBci = function(bci) {

  // Check to make sure this bci is change we can believe in.
  validateBci(bci);

  // Get the third note offset
  var z = 0;

  // Get the second note offset
  var y = 0;

  // Get the first note offset
  var x = 0;

  return [x,y,z];
}


/**
 * Given a chord, return a BIFFUD Chord Index
 * @param  [integer] chord    an array of three semitone offsets
 * @return integer            an integer between 0 and 109735
 */
var bciFromChord = function(chord) {

  // Check to make sure this chord is legit
  validateChord(chord);

  // Break out the offsets
  // TODO: figure out how to do this for ANY number of notes, not just 3
  var x = chord[0];
  var y = chord[1];
  var z = chord[2];

  // Plug the index into the magic BCI formula.
  // (Just smile, nod, and think of donuts)
  var bci = x+86*y-(y+z-1)*(y+z)/2+7396*z+(z-1)*(z)*(2*z)/6-z*(85+z)*(84+z)/2+86*(z)*(z-1)/2+(z-2)*(z-1)*(z)/ 3;

  return bci;
}


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


/**
 * Given an array of integers, ensures that it does not violate constraints of an 88 key piano keyboard
 * @param  [integer] chord  an array of three semitone offsets
 * @return boolean | error  true if valid; throws an error otherwise
 * 
 */
var validateChord = function(chord) {

  // is someone trying to pull some null trickery?
  if(chord === undefined || chord === null)
    throw new ChordValidationError("Your chord isn't even defined.");

  // do you even array?
  if(!Array.isArray(chord))
    throw new ChordValidationError("I'm not seeing an array here. Chords need to be an array.");

  // Make sure the chord length is 3.  We don't give a shit about Dyads, Tetrads, Pentads, and all those other posers
  if(chord.length != 3)
    throw new ChordValidationError("As far as we're concerned chords have to be three notes.  Mozart told us.");

  // Make sure none of the offsets are negative
  var totalOffset = 0;
  for(var x in chord) {
    if(chord[x] <0)
      throw new ChordValidationError("Negative offsets are NOT ALLOWED.");

    // While we're here, let's keep track of the total offset.
    totalOffset += chord[x];
  }

  // Make sure the offsets add up to less than 85.
  // DONT ASK QUESTIONS.
  // Fine.  85 is 88 minus the number of notes (3)
  if(totalOffset > 85)
    throw new ChordValidationError("This chord can't be played on an 88 key piano, the offsets add up to more than 85.");

  // We got here, so it's either a chord or it's wearing a really good disguise
  return true;
}


/**
 * Given a number, ensures that it is a valid BCI
 * @param  integer bci      the bci we want to validate
 * @return boolean | error  true if valid; throws an error otherwise
 * 
 */
var validateBci = function(bci) {

  // Is someone trying to pull some null trickery?
  if(bci === undefined || bci === null)
    throw new BciValidationError("This BIFFUD Chord Index isn't defined.");

  // Are we dealing with a number here?
  if(isNaN(bci))
    throw new BciValidationError("Your supposed BIFFUD Chord Index wasn't even a number.");


  // Is it an integer?
  var x = parseFloat(bci);
  if((x | 0) !== x)
    throw new BciValidationError("It is integral that the BIFFUD Chord Index be an integer.");


  // Check the range
  if(bci < 0 || bci > 109735)
    throw new BciValidationError("A BIFFUD Chord Index has to be between 0 and 109735.  We can't tell you why.");

  // We have a valid BCI!
  return true;
}

chordFromBci(-1);

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
