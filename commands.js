class Command {
    constructor(name, code, isTrusted, desc) {
        if (!typeof name == "string") throw new TypeError("The name of the command must be a string.")
        if (!typeof code == "function") throw new TypeError("The code of the command must be a function.")
        this.code = code
        this.cName = name
        this.isTrusted = isTrusted
        this.desc = desc
    }
}
exports.Command = Command