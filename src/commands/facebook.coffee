class fbCommand extends Command
	init: ->
		@command='/minecraft'
		@parseType='exact'
		@rankPrivelege='user'

	functionality: ->
		m = Math.floor Math.random()*@msgs.length
		msg = @msgs[m].replace('{fb}','http://www.facebook.com/1ND1EPLUS')
		API.sendChat msg

	msgs: [
		"Join our minecraft server: mcriotcraft.com"
	]
		
