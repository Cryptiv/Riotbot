// Generated by CoffeeScript 1.3.3
var data, settings,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

settings = (function() {

  function settings() {
    this.implode = __bind(this.implode, this);

    this.intervalMessages = __bind(this.intervalMessages, this);

    this.startAfkInterval = __bind(this.startAfkInterval, this);

    this.setInternalWaitlist = __bind(this.setInternalWaitlist, this);

    this.userJoin = __bind(this.userJoin, this);

    this.getRoomUrlPath = __bind(this.getRoomUrlPath, this);

    this.startup = __bind(this.startup, this);

  }

  settings.prototype.currentsong = {};

  settings.prototype.users = {};

  settings.prototype.djs = [];

  settings.prototype.mods = [];

  settings.prototype.host = [];

  settings.prototype.hasWarned = false;

  settings.prototype.currentwoots = 0;

  settings.prototype.currentmehs = 0;

  settings.prototype.currentcurates = 0;

  settings.prototype.roomUrlPath = null;

  settings.prototype.internalWaitlist = [];

  settings.prototype.userDisconnectLog = [];

  settings.prototype.voteLog = {};

  settings.prototype.seshOn = false;

  settings.prototype.forceSkip = false;

  settings.prototype.seshMembers = [];

  settings.prototype.launchTime = null;

  settings.prototype.totalVotingData = {
    woots: 0,
    mehs: 0,
    curates: 0
  };

  settings.prototype.pupScriptUrl = '';

  settings.prototype.afkTime = 12 * 60 * 1000;

  settings.prototype.songIntervalMessages = [
    {
      interval: 15,
      offset: 0,
      msg: "I'm a bot!"
    }
  ];

  settings.prototype.songCount = 0;

  settings.prototype.startup = function() {
    this.launchTime = new Date();
    return this.roomUrlPath = this.getRoomUrlPath();
  };

  settings.prototype.getRoomUrlPath = function() {
    return window.location.pathname.replace(/\//g, '');
  };

  settings.prototype.newSong = function() {
    this.totalVotingData.woots += this.currentwoots;
    this.totalVotingData.mehs += this.currentmehs;
    this.totalVotingData.curates += this.currentcurates;
    this.setInternalWaitlist();
    this.currentsong = API.getMedia();
    if (this.currentsong !== null) {
      return this.currentsong;
    } else {
      return false;
    }
  };

  settings.prototype.userJoin = function(u) {
    var userIds, _ref;
    userIds = Object.keys(this.users);
    if (_ref = u.id, __indexOf.call(userIds, _ref) >= 0) {
      return this.users[u.id].inRoom(true);
    } else {
      this.users[u.id] = new User(u);
      return this.voteLog[u.id] = {};
    }
  };

  settings.prototype.setInternalWaitlist = function() {
    var boothWaitlist, fullWaitList, lineWaitList;
    boothWaitlist = API.getDJs().slice(1);
    lineWaitList = API.getWaitList();
    fullWaitList = boothWaitlist.concat(lineWaitList);
    return this.internalWaitlist = fullWaitList;
  };

  settings.prototype.activity = function(obj) {
    if (obj.type === 'message') {
      return this.users[obj.fromID].updateActivity();
    }
  };

  settings.prototype.startAfkInterval = function() {
    return this.afkInterval = setInterval(afkCheck, 2000);
  };

  settings.prototype.intervalMessages = function() {
    var msg, _i, _len, _ref, _results;
    this.songCount++;
    _ref = this.songIntervalMessages;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      msg = _ref[_i];
      if (((this.songCount + msg['offset']) % msg['interval']) === 0) {
        _results.push(msg['msg']);
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  settings.prototype.implode = function() {
    var item, val;
    for (item in this) {
      val = this[item];
      if (typeof this[item] === 'object') {
        delete this[item];
      }
    }
    return clearInterval(this.afkInterval);
  };

  settings.prototype.lockBooth = function(callback) {
    if (callback == null) {
      callback = null;
    }
    return $.ajax({
      url: "http://www.plug.dj/gateway/room.update_options",
      type: 'POST',
      data: JSON.stringify({
        service: "room.update_options",
        body: [
          this.roomUrlPath, {
            "boothLocked": true,
            "waitListEnabled": true,
            "maxPlays": 1,
            "maxDJs": 5
          }
        ]
      }),
      async: this.async,
      dataType: 'json',
      contentType: 'application/json'
    }).done(function() {
      if (callback != null) {
        return callback();
      }
    });
  };

  settings.prototype.unlockBooth = function(callback) {
    if (callback == null) {
      callback = null;
    }
    return $.ajax({
      url: "http://www.plug.dj/gateway/room.update_options",
      type: 'POST',
      data: JSON.stringify({
        service: "room.update_options",
        body: [
          this.roomUrlPath, {
            "boothLocked": false,
            "waitListEnabled": true,
            "maxPlays": 1,
            "maxDJs": 5
          }
        ]
      }),
      async: this.async,
      dataType: 'json',
      contentType: 'application/json'
    }).done(function() {
      if (callback != null) {
        return callback();
      }
    });
  };

  return settings;

})();

data = new settings();