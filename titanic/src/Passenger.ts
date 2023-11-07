export interface Passenger {
    PassengerId: string,
    Survived: string,
    Pclass: string,
    Name: string,
    Sex: string,
    Age: string,
    SibSp: string,
    Parch: string,
    Ticket: string,
    Fare: string,
    Cabin: string,
    Embarked: string
}

export interface Survived {
    Survived: string,
}

export interface User {
    id: number,
    login: string,
    password: string,
    name: string,
    email: string,
    role: string,
}