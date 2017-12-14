import bcrypt from 'bcryptjs';

function registerHashController(password) {
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    return hash;
}

export { registerHashController };