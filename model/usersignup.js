const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
const userSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
    }, {
    timestamps: true
}

)

userSchema.pre('save', async function save(next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
        this.password = await bcrypt.hash(this.password, salt);
        return next();
    } catch (err) {
        return next(err);
    }
});

userSchema.methods.validatePassword = async function validatePassword(data) {
    return bcrypt.compare(data, this.password);
};

const UserModel = mongoose.model('User', userSchema)
module.exports = UserModel

