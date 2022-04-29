import Sequelize, { Model } from 'sequelize';
import { hash } from 'bcryptjs';
import bcrypt from 'bcryptjs/dist/bcrypt';

class User extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 50],
                        msg: 'O campo name precisa ter entre 3 e 50 caracteres',
                    },
                },
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                unique: {
                    msg: 'Email Já Existe!',
                },
                validate: {
                    isEmail: {
                        msg: 'Email Inválido!'
                    },
                },
            },
            password: {
                type: Sequelize.VIRTUAL,
                defaultValue: '',
            },
            password_hash: {
                type: Sequelize.STRING,
                defaultValue: '',
            },
        },
        {
            sequelize,
            paranoid: false,
            tableName: 'users',
        });

        this.addHook('beforeSave', async user => {
            // console.log(user.toJSON());
            if (user.password) {
                user.password_hash = await hash(user.password, 8);
            }
        });

        return this;
    };
};

export default User;