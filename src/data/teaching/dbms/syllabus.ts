export interface SyllabusUnit {

    id: number;

    title: string;

    description: string;

    hours: number;

    lectures: number;

    outcomes: string[];

    topics: string[];

}

export const dbmsSyllabus: SyllabusUnit[] = [

    {
        id: 1,

        title: "Database Fundamentals",

        description:
            "Introduction to databases and the DBMS approach.",

        hours: 7,

        lectures: 4,

        topics: [
            "Data vs Information",
            "Database Systems",
            "Database Users",
            "Three-Schema Architecture",
            "Database Languages"
        ],

        outcomes: [
            "Explain database concepts.",
            "Identify DBMS users.",
            "Understand database architecture."
        ]
    },

    {
        id: 2,

        title: "Data Models",

        description:
            "Conceptual database design using ER diagrams.",

        hours: 9,

        lectures: 4,

        topics: [
            "Entities",
            "Attributes",
            "Relationships",
            "Constraints",
            "ER Diagrams"
        ],

        outcomes: [
            "Design ER diagrams.",
            "Identify entities and relationships."
        ]
    },

    {
        id: 3,

        title: "Normalization",

        description:
            "Design Theory and Normalization",

        hours: 8,

        lectures: 5,

        topics: [
            "Relational Model",
            "Keys",
            "DDL",
            "DML",
            "Queries"
        ],

        outcomes: [
            "Write SQL queries.",
            "Create relational schemas."
        ]
    },

    {
        id: 4,

        title: "Normalization",

        description:
            "Database normalization and dependency analysis.",

        hours: 9,

        lectures: 4,

        topics: [
            "Functional Dependency",
            "1NF",
            "2NF",
            "3NF",
            "BCNF"
        ],

        outcomes: [
            "Normalize database tables."
        ]
    },

    {
        id: 5,

        title: "Transactions & Recovery",

        description:
            "Transaction management and recovery mechanisms.",

        hours: 7,

        lectures: 3,

        topics: [
            "Transactions",
            "ACID Properties",
            "Concurrency",
            "Recovery"
        ],

        outcomes: [
            "Understand transaction processing."
        ]
    }

];