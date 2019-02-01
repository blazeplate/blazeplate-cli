# codotype-cli
:hammer_and_wrench: CLI for development with codotype.io

### Installation:

```
npm install -g @codotype/cli
```


### Usage:


- `codotype run`

The `codotype run` executes a generator with a single blueprint as it's argument. The command must be used inside a generator's root directory. Example:

```
codotype run ./path_to_blueprint --config ./path_to_config
```


- `codotype doctor`

The `codotype doctor` validates a generator's metadata and structure. The command must be used inside a generator's root directory. It's particularly helpful while developing or updating generators.


### Future commands
- `codotype generator register/add PATH_TO_GENERATOR` - registers a generator in the local registry
- `codotype generator new` - create a new generator (opens up generator editor in browser window)
- `codotype generator serve` - serves a small webapp that exposes a generator via the Web UI
- `codotype blueprint ls` - lists all Blueprints in global registry
- `codotype blueprint new` - opens up a Blueprint editor in a browser window, stores the result in the global registry
- `codotype blueprint add PATH_TO_BLUEPRINT` - adds a single blueprint JSON file to global registry
- `codotype blueprint rm BLUEPRINT_NAME` - removes a single blueprint from the global registry

### TODOs
- Add global registry for JSON blueprints
