import jwt from 'jsonwebtoken'
import User from '../models/User';

 class SessionService {
     async verifica(email) {
        const userCount = await User.count({ where: email });

        if(!(!!userCount)) {
            throw new Error('Usuário não encontrado');
        }
     };

     async create(data) {
        const { email, password } = data;

        await this.verifica({ email });
     }
 }

 export default new SessionService();