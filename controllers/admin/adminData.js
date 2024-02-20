//used for getting and interacting with locker data for admins
import { Op } from "sequelize";

import { User } from "../../models/user.js";
import { Locker } from "../../models/locker.js";
import { LockerData } from "../../models/lockerData.js";
import { UserData } from "../../models/userData.js";

import { readConfig } from "../../utils/admin/configManager.js";


//todo implement try catch for all routes
export async function queryGradeRestriction() {
    try {
        return await readConfig('enabled_grades');

    } catch (err) {
        throw err;
    }
}

export async function queryAreaRestriction() {
    try {
        return await readConfig('restricted_areas');
    } catch (err) {
        throw err;
    }
}

export async function queryStats() {
    try {
        let userCount = await User.count();
        let lockerCount = await Locker.count();
        let totalUsers = await UserData.count();
        let totalLockers = await LockerData.count();

        const oneHourAgo = new Date(new Date() - 60 * 60 * 1000);
        let lastHour = await Locker.count({
            where: {
                createdAt: {
                    [Op.gt]: oneHourAgo
                }
            }
        });

        const oneDayAgo = new Date(new Date() - 24 * 60 * 60 * 1000);
        let lastDay = await Locker.count({
            where: {
                createdAt: {
                    [Op.gt]: oneDayAgo
                }
            }
        });

        return {
            "regUsers": userCount,
            "regLockers": lockerCount,
            "totalUsers": totalUsers,
            "totalLockers": totalLockers,
            "lastHour": lastHour,
            "lastDay": lastDay,
        };
    } catch (err) {
        throw err; // Throw the error to be handled by the caller
    }
}

export async function querySystemStats() {

}