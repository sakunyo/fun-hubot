https://hubot.github.com/docs/scripting/

```coffeescript
robot.hear

robot.respond

res.send

res.reply

res.emote

robot.messageRoom

robot.http("https://midnight-train")
    .get() (err, res, body) ->

res.random

robot.enter

robot.leave

# and Custom Listeners
robot.listen
  (message) ->
  (response) ->
```


### Running mybot Locally

You can test your hubot by running the following, however some plugins will not
behave as expected unless the [environment variables](#configuration) they rely
upon have been set.

You can start mybot locally by running:

    % bin/hubot

You'll see some start up output and a prompt:

    [Sat Feb 28 2015 12:38:27 GMT+0000 (GMT)] INFO Using default redis on localhost:6379
    mybot>

Then you can interact with mybot by typing `mybot help`.

    mybot> mybot help
    mybot animate me <query> - The same thing as `image me`, except adds [snip]
    mybot help - Displays all of the help commands that mybot knows about.
    ...

