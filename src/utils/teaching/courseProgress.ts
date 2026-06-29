import {
    dbmsCourse,
    dbmsJournal,
    dbmsLabs,
    dbmsResources,
    dbmsAssignments,
    dbmsAnnouncements
} from "../../data/teaching/dbms";

const THEORY_HOURS_PER_CLASS = 2;
const LAB_HOURS_PER_SESSION = 2;

export function getCompletedTheoryClasses() {
    return dbmsJournal.filter(
        lecture => lecture.status === "Completed"
    ).length;
}

export function getCompletedTheoryHours() {
    return getCompletedTheoryClasses() * THEORY_HOURS_PER_CLASS;
}

export function getTheoryProgressPercentage() {

    return Math.round(
        (getCompletedTheoryHours() / dbmsCourse.lectureHours) * 100
    );

}

export function getCompletedLabSessions() {

    return dbmsLabs.filter(
        lab => lab.status === "Completed"
    ).length;

}

export function getCompletedLabHours() {

    return getCompletedLabSessions() * LAB_HOURS_PER_SESSION;

}

export function getLabProgressPercentage() {

    return Math.round(
        (getCompletedLabHours() / dbmsCourse.labHours) * 100
    );

}

export function getUploadedResourcesCount() {

    return dbmsResources.filter(
        resource => resource.uploaded
    ).length;

}

export function getReleasedAssignmentsCount() {

    return dbmsAssignments.filter(
        assignment => assignment.status === "Released"
    ).length;

}

export function getAnnouncementsCount() {

    return dbmsAnnouncements.length;

}