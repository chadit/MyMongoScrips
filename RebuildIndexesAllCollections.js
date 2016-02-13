/******************************************************/
// Loops all collections for a database and rebuilds the indexes
/*****************************************************/

print (db)
var collections = db.getCollectionNames().sort();
var collectionCount = collections.length;
for (i = 0; i < collectionCount; i++) { 
    print(collections[i] + " rebuilding indexes ");
    db[collections[i]].reIndex();
}