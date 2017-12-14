import { registerHashController } from '../controllers/registerHashController';

function registerHashService(password) {
    return registerHashController(password);
}
export { registerHashService };