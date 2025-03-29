local messageService = game:GetService("MessagingService")

local cmds = script.Parent.cmds:GetChildren()

for i, cmd_script in ipairs(cmds) do
    local cmd = require(cmd_script)
    pcall(messageService:SubscribeAsync("cmd_"..cmd_script.Name, function(...) 
        cmd.use(...)
    end))
end