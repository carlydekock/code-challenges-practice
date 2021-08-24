//Rising Temperature
//Table: Weather

// +---------------+---------+
// | Column Name   | Type    |
// +---------------+---------+
// | id            | int     |
// | recordDate    | date    |
// | temperature   | int     |
// +---------------+---------+
// id is the primary key for this table.
// This table contains information about the temperature in a certain day.

//Write an SQL query to find all dates' id with higher temperature compared to its previous dates (yesterday).
//Return the result table in any order.

//MySQL query statement:
//SELECT w2.id FROM weather w1 JOIN weather w2 ON DATEDIFF(w1.recordDate, w2.recordDate) = -1 WHERE w2.temperature > w1.temperature;