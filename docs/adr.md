# Architectural Decision Records

## What are architecture decision records?

An architecture decision record (ADR) is a document that documents an architecture decision (AD) a made because of an architecturally-significant non-functional or functional requirement. These decisions are ones that have a large influence on architecture, are fundamental to the way the software is built, or would be difficult to reverse.

All architecture decision records make up this architecture decision log.

## How to use this log?

* Use the table to below to see a history of the logs

### How to make a new decision record?

1. Copy the [template](./template) to a new file in the `adr` directory with format `my_title.md`.
2. Fill out the information
3. Add the record to the table. The Decision columns should link to the ADR.

## References

* [joelparkerhenderson/architecture_decision_record](https://bit.ly/2VmfgdY)
* [Architecturally Significant Requirement](https://en.wikipedia.org/wiki/Architecturally_significant_requirements#:~:text=Architecturally%20significant%20requirements%20are%20those,system%20in%20measurably%20identifiable%20ways.)

## Architecture Decision Log

|           Decision                                                    |          Status                                                  |            Author                                  |
|-----------------------------------------------------------------------|------------------------------------------------------------------|----------------------------------------------------|
| [Migrate Redux to React Query & Context API](./redux_to_react_query)     | ![Status](https://img.shields.io/badge/status-proposed-yellow)   | [@jackcmeyer](https://github.com/jackcmeyer)    |
