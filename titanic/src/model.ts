'use strict';
import csv from "csvtojson"
import path from "path"
import dotenv from 'dotenv'
dotenv.config()
import { Passenger, User } from "./Passenger"
const csvFilePath: string | undefined = process.env.DATA_URL
const pathTrainCSV = path.join(__dirname, `../src/${csvFilePath}/train.csv`);
const pathUsersCSV = path.join(__dirname, `../src/${csvFilePath}/users.csv`);


export async function Users(): Promise<User[]> {
    const jsonArray = await csv().fromFile(pathUsersCSV);

    return jsonArray;
}

export async function Passengers(): Promise<Passenger[]> {
    const jsonArray = await csv().fromFile(pathTrainCSV);

    return jsonArray;
}

export async function Passenger(id: string): Promise<Passenger> {
    const jsonArray = await csv().fromFile(pathTrainCSV);

    return jsonArray.find(p => p.PassengerId == id);
}

export async function PassengersSurvived(status: string): Promise<Passenger[]> {
    const jsonArray = await csv().fromFile(pathTrainCSV);

    return jsonArray.filter(p => p.Survived == status);
}