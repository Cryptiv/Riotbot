class themeCommand extends Command
	init: ->
		@command='/theme'
		@parseType='startsWith'
		@rankPrivelege='user'

	functionality: ->
		msg = "EDM, Dubstep, House, Techno, Dance:"
		msg += "All under one roof!"
		API.sendChat(msg)
