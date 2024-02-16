/**
 * Model
 */

interface UserEntity {
  id: number;
  name: string;
  age: number;
  email: string;
  password: string;
  phone: string;
  address: string;
}

export class UserModel {
  get id(): number {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  get age(): number {
    return this._age;
  }
  get email(): string {
    return this._email;
  }
  get password(): string {
    return this._password;
  }
  get phone(): string {
    return this._phone;
  }
  get address(): string {
    return this._address;
  }

  // 뷰 로직
  get isSeoul(): boolean {
    return this._address.includes("서울");
  }

  constructor(user: UserEntity) {
    this._id = user.id;
    this._name = user.name;
    this._age = user.age;
    this._email = user.email;
    this._password = user.password;
    this._phone = user.phone;
    this._address = user.address;
  }

  private readonly _id: number;
  private readonly _name: string;
  private readonly _age: number;
  private readonly _email: string;
  private readonly _password: string;
  private readonly _phone: string;
  private readonly _address: string;
}
