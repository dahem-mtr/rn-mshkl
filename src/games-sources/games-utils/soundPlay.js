

export const soundPlay = (soundFile) => {
    var Sound = require('react-native-sound');

    // Enable playback in silence mode
    Sound.setCategory('Playback');
    var whoosh = new Sound(soundFile, Sound.MAIN_BUNDLE, (error) => {


        whoosh.play();
    });

};
