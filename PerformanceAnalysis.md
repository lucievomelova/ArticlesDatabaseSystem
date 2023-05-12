# Performance analysis of pouchdb queries

- all pouchdb queires are very fast
- bulk operations are very fast
- complex queries are slower (even with a lot of documents, bulk operation is faster than a complex query)
- the less documents are in the database, the faster the bulk operation is

## Get article content
- measuerd time ~ 750ms
- somewhat complex query

## Get article content +  all related comments
- measuerd time ~ 1000ms
- complex query

## Get all authors/readers
- measured time ~ 350ms
-  bulk operation
-  many documents - 1000

## Get all comments
- measured time ~ 40ms
- bulk operation
- only a few documents

## Get all branch offices
- measured time ~ 30ms
- bulk operation
- only a few documents

## Get all female authors and their articles
- measured time ~ 900ms
- complex query

## Get Branch office info
- measured time ~ 900ms
- complex query

