const User = require("./User");
const EmailCode = require("./EmailCode");

EmailCode.belongsTo(User)
User.hasMany(EmailCode)