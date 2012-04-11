authorization do
  role :admin do
    has_permission_on [:games, :users], :to =>[:index, :show, :new, :create, :edit, :update, :destroy]

  end
end
