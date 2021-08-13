local function script_path()
  local str = debug.getinfo(2, "S").source:sub(2)
  return str:match("(.*[/\\])")
end
package.path = package.path .. ";" .. script_path() .. "?.lua"

local data = require "data"
local json = require "json"

print(json.encode(data))
