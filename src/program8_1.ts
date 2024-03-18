import { User as R } from "./user";

export class Data<R extends Identity> {
    private rows: Map<number, R>;

    constructor() {
        this.rows = new Map<number, R>();
    }

    add(user: R): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.rows.set(user.id, user);
                resolve();
            }, 100);
        });
    }

    update(number: number, partialUser: Partial<R>): Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const user = this.rows.get(number);
                if (user) {
                    const updatedUser = { ...user, ...partialUser };
                    this.rows.set(number, updatedUser as R);
                    resolve();
                } else {
                    reject(new Error(`Car that have the number ${number} doesn't appear.`));
                }
            }, 200);
        });
    }

    delete(user: R): Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.rows.has(user.id)) {
                    this.rows.delete(user.id);
                    resolve();
                } else {
                    reject(new Error(`Car that have the number ${user.id} doesn't appear.`));
                }
            }, 300);
        });
    }

    get(number: number): Promise<R | undefined> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.rows.get(number));
            }, 100); 
        });
    }
}