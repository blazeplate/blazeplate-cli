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
codotype run ./path_to_blueprint
```


- `codotype doctor`

The `codotype doctor` validates a generator's metadata and structure. The command must be used inside a generator's root directory. It's particularly helpful while developing or updating generators.