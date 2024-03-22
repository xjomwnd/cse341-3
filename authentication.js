// Enable authentication
use admin;
db.runCommand({setParameter: 1, authenticationMechanisms: { plain: 'mongodb_cr', 'SCRAM-SHA-1': 'scram-sha-1' }});

// Create an administrative user
db.createUser({
  user: "adminUser",
  pwd: "adminPassword",
  roles: ["userAdminAnyDatabase", "dbAdminAnyDatabase", "readWriteAnyDatabase", "clusterAdmin"]
});
