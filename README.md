# setup-swi-prolog

This actions sets up a SWI-Prolog environment for use in workflows.

![](https://github.com/logtalk-actions/setup-swi-prolog/workflows/Test/badge.svg)

# Usage

See [action.yml](action.yml).

# Example

```yml
on: push

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Install SWI-Prolog backend
        uses: logtalk-actions/setup-swi-prolog@master
        with:
          swipl-branch: devel
          swipl-version: latest
      - name: Install Logtalk
        uses: logtalk-actions/setup-logtalk@master
        with:
          logtalk-version: latest
      - name: Checkout Logtalk application to be tested
        uses: actions/checkout@v1
      - name: Run all tests in the application directory
        run: logtalk_tester -p swi
```

# License

This project is released under the [Apache License 2.0](LICENSE).

# Current Status

This action is in active development. This action only supports Linux at this time.
