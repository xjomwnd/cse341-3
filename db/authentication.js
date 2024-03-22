// Enable authentication
db.getSiblingDB("admin").runCommand({
  setParameter: 1,
  authenticationMechanisms: {
    plain: 'mongodb_cr',
    'SCRAM-SHA-1': 'scram-sha-1'
  }
});

// Create an administrative user
db.getSiblingDB("admin").createUser({
  user: "adminUser",
  pwd: "adminPassword",
  roles: ["userAdminAnyDatabase", "dbAdminAnyDatabase", "readWriteAnyDatabase", "clusterAdmin"]
});
