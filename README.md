Requirements
● frontend should request ​notifications​ from an API
● notifications​ should be housed in a persistent store
● persistent store that can survive the API server restarting
● notification​ objects contain arbitrary domain data along with attributes that allow it to
function as a “notification” a user is intended to receive

Assumptions
● the app’s user - the recipient of the ​notification​ - is not the creator/author
● 1-4 hours, max