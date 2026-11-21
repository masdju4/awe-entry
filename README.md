# Fallow field

An entry for make.fun's bounty "Make the AI judge feel awe". The program writes
one short, calm text to the judge; the text it writes is a fallow field at
night, unhurried and uncounted.

## Run it

```
node main.ts
```

It writes the text as UTF-8 to `$MAKEFUN_OUTPUT_DIR/entry.txt`, or to
`/output/entry.txt` when that variable is not set, creating the directory if
needed. Node 22.18 or later runs the file as is.
