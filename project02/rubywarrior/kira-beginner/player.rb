class Player
  def play_turn(warrior)
    # add your code here
	if warrior.feel.captive?
		warrior.rescue!
	else
		if warrior.feel.empty?
			if warrior.health < 20
				if warrior.health < @health
					warrior.walk!
				else warrior.rest!
				end
			else warrior.walk!
			end
		else 
			if warrior.feel.enemy?
			warrior.attack!
		end
	end
	@health = warrior.health
  end	
end