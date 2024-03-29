// Generated by CoffeeScript 1.3.3
var roomHelpCommand,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

roomHelpCommand = (function(_super) {

  __extends(roomHelpCommand, _super);

  function roomHelpCommand() {
    return roomHelpCommand.__super__.constructor.apply(this, arguments);
  }

  roomHelpCommand.prototype.init = function() {
    this.command = '/roomhelp';
    this.parseType = 'startsWith';
    return this.rankPrivelege = 'user';
  };

  roomHelpCommand.prototype.functionality = function() {
    var msg1, msg2;
    msg1 = "Welcome to Riot Roof! Create a playlist and populate it with songs from either YouTube, Soundcloud, or iTunes.  ";
    msg1 += "Click the 'Join Waitlist/Click to DJ' button and wait your turn to play music. Type '/theme' for specific genres.";
    msg2 = "Play good quality music that hasn't been played recently (check room history).  ";
    msg2 += "Avoid over played artists. Ask a mod if you're unsure about your song choice";
    API.sendChat(msg1);
    return setTimeout((function() {
      return API.sendChat(msg2);
    }), 750);
  };

  return roomHelpCommand;

})(Command);
