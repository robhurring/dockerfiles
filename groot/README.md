# Groot: Behavior Tree GUI

[Groot Repo](https://github.com/BehaviorTree/Groot)

## Setup

1. `brew cask install xquartz`
2. XQuartz Preferences -> Security -> Allow connections from network clients
3. Restart XQuartz
4. `export PATH="/usr/X11/bin:$PATH"`

## Building

1. `docker build -t groot .`

## Running

1. `xhost +127.0.0.1`
2. `docker run --rm --name groot -e DISPLAY=host.docker.internal:0 groot`
