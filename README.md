# setup-swi-prolog

This actions sets up a SWI-Prolog environment for use in workflows.

# Usage

See [action.yml](action.yml).

# Example

```
on: push

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - uses: logtalk-actions/setup-swi-prolog@master
        with:
          swipl-branch: devel
          swipl-version: 8.15.0
      - uses: logtalk-actions/setup-logtalk@master
        with:
          logtalk-version: 3.31.0
```

# License

The scripts and documentation in this project are released under the [Apache License 2.0](LICENSE)

# Current Status

This action is in active development.
