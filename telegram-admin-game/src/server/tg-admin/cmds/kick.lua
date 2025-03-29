local Players = game:GetService("Players")

local cmd = {}

function cmd.use(message)
    local player: Player | nil = Players:FindFirstChild(message.Data)
    if player then
        player:Kick()
    end
end

return cmd