[![CircleCI](https://circleci.com/gh/sakunyo/fun-hubot.svg?style=svg)](https://circleci.com/gh/sakunyo/fun-hubot)

https://hubot.github.com/docs/scripting/

## robot
mathod            | pattern                    | action
------------------|----------------------------|----------------------------------------------
robot.hear        | `/badger/i`                | "... badger ..."
robot.respond     | `/open the pod bay doors/` | "@HAL: open the pod bay doors" Robot's name.

mathod            | action
------------------|-------------------------------------------------
robot.http        | HTTP calls
robot.enter       | `robot.enter (res) -> res.send 'Hi'`
robot.leave       | `robot.leave (res) -> res.send 'See you next time.'`
robot.listen      | It makes custom listeners.

## res
mathod            | action
------------------|-------------------------------------------------
res.send          | A message back to the room the res came from.
res.reply         | A message to a room.
res.emote         | Reply to the person that sent the message
res.random        | `res.random ['lol', 'rofl', 'lmao']`


### Custom Listeners
```coffeescript
robot.listen(
  (message) ->
    # do something
  (response) ->
    # do something
)
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

