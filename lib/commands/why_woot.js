// Generated by CoffeeScript 1.3.3
var whyWootCommand,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

whyWootCommand = (function(_super) {

  __extends(whyWootCommand, _super);

  function whyWootCommand() {
    return whyWootCommand.__super__.constructor.apply(this, arguments);
  }

  whyWootCommand.prototype.init = function() {
    this.command = '/whywoot';
    this.parseType = 'startsWith';
    return this.rankPrivelege = 'user';
  };

  whyWootCommand.prototype.functionality = function() {
    var msg, nameIndex;
    msg = "It's nice and you get points.";
    if ((nameIndex = this.msgData.message.indexOf('@')) !== -1) {
      return API.sendChat(this.msgData.message.substr(nameIndex) + ', ' + msg);
    } else {
      return API.sendChat(msg);
    }
  };

  return whyWootCommand;

})(Command);