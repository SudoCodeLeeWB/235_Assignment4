
db.createUser({
    user: "wl705",
    pwd: "1234",
    roles: [
        { role: "dbAdminAnyDatabase", db: "admin" },
        { role: "readWriteAnyDatabase", db: "admin" },
        { role: "userAdminAnyDatabase", db: "admin" }
    ]
})

db.getUser("wl705")