class rulesCommand extends Command
	init: ->
		@command='/rules'
		@parseType='startsWith'
		@rankPrivelege='user'

	functionality: ->
		msg = "♫ Rules! - http://goo.gl/OVmaF"
		API.sendChat(msg)
		
